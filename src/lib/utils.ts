import { Game } from './definitions/game';

export const calculateDiscount = (game: Game): number => {
  if (!game.discount) return 0;

  let finalDiscount = game.discount.baseAmount;

  switch(game.type) {
    case 'fps':
      break;
    case 'racing':
      if (!game.controllerSupport) {
        finalDiscount *= 2;
      }
      break;
    case 'moba':
      const discountDays = 3;
      if (game.discount.daysLeft < discountDays) {
        const additionalDiscount = (discountDays - game.discount.daysLeft) * 10;
        finalDiscount += additionalDiscount;
      }
      break;
    default:
      break;
  }

  return Math.min(finalDiscount, 90);
};

export const renderGameGenre = (type: Game["type"]): string => {
  switch(type) {
      case 'fps':
          return "FPS Shooter";
      case 'racing':
        return "Car Racing";
      case 'moba':
        return "MOBA";
      default:
        return "";
  }
};
