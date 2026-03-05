export const CALC_DEFAULTS = {
  units: 100,
  monthlyRent: 140,
  occupancyRate: 35,
  operationalCosts: 2000,
  mortgages: 3800,
};

export const CALC_CONFIG = {
  units: {
    min: 50,
    max: 500,
    step: 50,
  },
  occupancyRate: {
    min: 0,
    max: 100,
    step: 10,
  },
};
