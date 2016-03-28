let generic = (f_input, m_input, d_input, parameters, year) => {
	let d = parseFloat(d_input);
	let m = parseFloat(m_input);
	let f = parseFloat(f_input);

  const { f1, f2, m1, m2 } = parameters[year];

	let markF = (d + f1) / (f2);
	let markM = (d + m1) / (m2);

	let mark = (m * markM + f * markF) / (m + f);

	if (mark < 3) {
		mark = 3;
	} else if (mark > 10) {
		mark = 10;
	}

	return mark;
};

const year = 2016;

export default {
	FTA: {
  	task1(f_input, m_input, d_input) {

      const parameters = {
        2015: {
          f1: 45,
          f2: 11.5,
          m1: 31,
          m2: 13.5
        },
        2016: {
          f1: 45,
          f2: 11.5,
          m1: 31,
          m2: 13.5
        }
      };

	  	return generic(f_input, m_input, d_input, parameters, year);
  	},

  	task2(f_input, m_input, d_input) {

      const parameters = {
        2015: {
          f1: -21,
          f2: 13.1,
          m1: -62,
          m2: 14.3
        },
        2016: {
          f1: -21,
          f2: 13.1,
          m1: -62,
          m2: 14.3
        }
      };

	  	return generic(f_input, m_input, d_input, parameters, year);
  	}
  },

  FTK: {
  	task1(f_input, m_input, d_input) {

      const parameters = {
        2015: {
          f1: 31,
          f2: 10,
          m1: 21,
          m2: 10
        },
        2016: {
          f1: 31,
          f2: 10,
          m1: 21,
          m2: 10
        }
      };

	  	return generic(f_input, m_input, d_input, parameters, year);
  	},

  	task2(f_input, m_input, d_input) {

      const parameters = {
        2015: {
          f1: -24,
          f2: 11.5,
          m1: -18,
          m2: 15.7
        },
        2016: {
          f1: -24,
          f2: 11.5,
          m1: -18,
          m2: 15.7
        }
      };

	  	return generic(f_input, m_input, d_input, parameters, year);
  	}
  },

  FTU: {
  	task1(f_input, m_input, d_input) {

      const parameters = {
        2015: {
          f1: 21,
          f2: 6.1,
          m1: 8,
          m2: 6
        },
        2016: {
          f1: 21,
          f2: 6.1,
          m1: 8,
          m2: 6
        }
      };

	  	return generic(f_input, m_input, d_input, parameters, year);
  	},

  	task2(f_input, m_input, d_input) {

      const parameters = {
        2015: {
          f1: 39,
          f2: 8.4,
          m1: 15,
          m2: 8
        },
        2016: {
          f1: 39,
          f2: 8.4,
          m1: 15,
          m2: 8
        }
      };

	  	return generic(f_input, m_input, d_input, parameters, year);
  	}
  },

  FTV: {
  	task1(f_input, m_input, d_input) {

      const parameters = {
        2015: {
          f1: 16,
          f2: 14.2,
          m1: 3,
          m2: 15.2
        },
        2016: {
          f1: 16,
          f2: 14.2,
          m1: 3,
          m2: 15.2
        }
      };

	  	return generic(f_input, m_input, d_input, parameters, year);
  	},

  	task2(f_input, m_input, d_input) {

      const parameters = {
        2015: {
          f1: 23,
          f2: 23,
          m1: -45,
          m2: 20.9
        },
        2016: {
          f1: 23,
          f2: 23,
          m1: -45,
          m2: 20.9
        }
      };

	  	return generic(f_input, m_input, d_input, parameters, year);
  	}
  }
};
