__report = {
  "info": {
    "file": "js/osg/CullVisitor.js",
    "fileShort": "/CullVisitor.js",
    "fileSafe": "_CullVisitor_js",
    "link": "files/_CullVisitor_js/index.html"
  },
  "complexity": {
    "aggregate": {
      "line": 5,
      "complexity": {
        "sloc": {
          "physical": 480,
          "logical": 280
        },
        "cyclomatic": 50,
        "halstead": {
          "operators": {
            "distinct": 29,
            "total": 946,
            "identifiers": [
              "__stripped__"
            ]
          },
          "operands": {
            "distinct": 192,
            "total": 1076,
            "identifiers": [
              "__stripped__"
            ]
          },
          "length": 2022,
          "vocabulary": 221,
          "difficulty": 81.26041666666667,
          "volume": 15747.138975089474,
          "effort": 1279619.074423677,
          "bugs": 5.249046325029824,
          "time": 71089.94857909316
        }
      }
    },
    "functions": [
      {
        "name": "osg.CullVisitor",
        "line": 5,
        "complexity": {
          "sloc": {
            "physical": 28,
            "logical": 18
          },
          "cyclomatic": 4,
          "halstead": {
            "operators": {
              "distinct": 12,
              "total": 64,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 30,
              "total": 81,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 145,
            "vocabulary": 42,
            "difficulty": 16.200000000000003,
            "volume": 781.8860263029203,
            "effort": 12666.55362610731,
            "bugs": 0.2606286754343068,
            "time": 703.6974236726284
          }
        }
      },
      {
        "name": "distance",
        "line": 36,
        "complexity": {
          "sloc": {
            "physical": 3,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 5,
              "total": 15,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 8,
              "total": 16,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 31,
            "vocabulary": 13,
            "difficulty": 5,
            "volume": 114.71363126237385,
            "effort": 573.5681563118693,
            "bugs": 0.038237877087457954,
            "time": 31.864897572881627
          }
        }
      },
      {
        "name": "handleCullCallbacksAndTraverse",
        "line": 40,
        "complexity": {
          "sloc": {
            "physical": 9,
            "logical": 5
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 7,
              "total": 12,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 6,
              "total": 12,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 24,
            "vocabulary": 13,
            "difficulty": 7,
            "volume": 88.81055323538621,
            "effort": 621.6738726477034,
            "bugs": 0.029603517745128736,
            "time": 34.537437369316855
          }
        }
      },
      {
        "name": "updateCalculatedNearFar",
        "line": 50,
        "complexity": {
          "sloc": {
            "physical": 31,
            "logical": 16
          },
          "cyclomatic": 5,
          "halstead": {
            "operators": {
              "distinct": 8,
              "total": 37,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 17,
              "total": 47,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 84,
            "vocabulary": 25,
            "difficulty": 11.058823529411764,
            "volume": 390.08391994107683,
            "effort": 4313.869232289556,
            "bugs": 0.13002797331369229,
            "time": 239.65940179386422
          }
        }
      },
      {
        "name": "clampProjectionMatrix",
        "line": 82,
        "complexity": {
          "sloc": {
            "physical": 84,
            "logical": 44
          },
          "cyclomatic": 7,
          "halstead": {
            "operators": {
              "distinct": 16,
              "total": 150,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 45,
              "total": 202,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 352,
            "vocabulary": 61,
            "difficulty": 35.91111111111111,
            "volume": 2087.6195428221363,
            "effort": 74968.73736001272,
            "bugs": 0.695873180940712,
            "time": 4164.92985333404
          }
        }
      },
      {
        "name": "setStateGraph",
        "line": 167,
        "complexity": {
          "sloc": {
            "physical": 4,
            "logical": 2
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 4,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 4,
              "total": 7,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 11,
            "vocabulary": 6,
            "difficulty": 1.75,
            "volume": 28.43458750793272,
            "effort": 49.76052813888226,
            "bugs": 0.009478195835977574,
            "time": 2.764473785493459
          }
        }
      },
      {
        "name": "setRenderStage",
        "line": 171,
        "complexity": {
          "sloc": {
            "physical": 4,
            "logical": 2
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 4,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 4,
              "total": 7,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 11,
            "vocabulary": 6,
            "difficulty": 1.75,
            "volume": 28.43458750793272,
            "effort": 49.76052813888226,
            "bugs": 0.009478195835977574,
            "time": 2.764473785493459
          }
        }
      },
      {
        "name": "reset",
        "line": 175,
        "complexity": {
          "sloc": {
            "physical": 11,
            "logical": 6
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 3,
              "total": 22,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 14,
              "total": 30,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 52,
            "vocabulary": 17,
            "difficulty": 3.2142857142857144,
            "volume": 212.54806774501768,
            "effort": 683.1902177518425,
            "bugs": 0.0708493559150059,
            "time": 37.955012097324584
          }
        }
      },
      {
        "name": "getCurrentRenderBin",
        "line": 186,
        "complexity": {
          "sloc": {
            "physical": 1,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 2,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 2,
              "total": 2,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 4,
            "vocabulary": 4,
            "difficulty": 1,
            "volume": 8,
            "effort": 8,
            "bugs": 0.0026666666666666666,
            "time": 0.4444444444444444
          }
        }
      },
      {
        "name": "setCurrentRenderBin",
        "line": 187,
        "complexity": {
          "sloc": {
            "physical": 1,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 2,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 3,
              "total": 4,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 6,
            "vocabulary": 5,
            "difficulty": 1.3333333333333333,
            "volume": 13.931568569324174,
            "effort": 18.575424759098897,
            "bugs": 0.004643856189774725,
            "time": 1.0319680421721609
          }
        }
      },
      {
        "name": "addPositionedAttribute",
        "line": 188,
        "complexity": {
          "sloc": {
            "physical": 4,
            "logical": 2
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 6,
              "total": 14,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 11,
              "total": 16,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 30,
            "vocabulary": 17,
            "difficulty": 4.363636363636363,
            "volume": 122.6238852375102,
            "effort": 535.0860446727717,
            "bugs": 0.040874628412503396,
            "time": 29.727002481820648
          }
        }
      },
      {
        "name": "pushStateSet",
        "line": 193,
        "complexity": {
          "sloc": {
            "physical": 9,
            "logical": 6
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 6,
              "total": 27,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 13,
              "total": 28,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 55,
            "vocabulary": 19,
            "difficulty": 6.461538461538462,
            "volume": 233.6360132393972,
            "effort": 1509.6480855468742,
            "bugs": 0.07787867107979907,
            "time": 83.86933808593746
          }
        }
      },
      {
        "name": "popStateSet",
        "line": 207,
        "complexity": {
          "sloc": {
            "physical": 13,
            "logical": 9
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 8,
              "total": 30,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 15,
              "total": 28,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 58,
            "vocabulary": 23,
            "difficulty": 7.466666666666667,
            "volume": 262.36659345130676,
            "effort": 1959.003897769757,
            "bugs": 0.08745553115043558,
            "time": 108.8335498760976
          }
        }
      },
      {
        "name": "popProjectionMatrix",
        "line": 221,
        "complexity": {
          "sloc": {
            "physical": 7,
            "logical": 4
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 9,
              "total": 24,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 16,
              "total": 29,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 53,
            "vocabulary": 25,
            "difficulty": 8.15625,
            "volume": 246.1243780580604,
            "effort": 2007.451958536055,
            "bugs": 0.0820414593526868,
            "time": 111.52510880755861
          }
        }
      },
      {
        "name": "apply",
        "line": 229,
        "complexity": {
          "sloc": {
            "physical": 3,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 4,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 4,
              "total": 7,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 11,
            "vocabulary": 6,
            "difficulty": 1.75,
            "volume": 28.43458750793272,
            "effort": 49.76052813888226,
            "bugs": 0.009478195835977574,
            "time": 2.764473785493459
          }
        }
      },
      {
        "name": "_getReservedMatrix",
        "line": 233,
        "complexity": {
          "sloc": {
            "physical": 7,
            "logical": 4
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 9,
              "total": 21,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 10,
              "total": 20,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 41,
            "vocabulary": 19,
            "difficulty": 9,
            "volume": 174.165028051187,
            "effort": 1567.485252460683,
            "bugs": 0.05805500935039566,
            "time": 87.0825140255935
          }
        }
      },
      {
        "name": "_getReservedLeaf",
        "line": 240,
        "complexity": {
          "sloc": {
            "physical": 7,
            "logical": 4
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 9,
              "total": 18,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 7,
              "total": 17,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 35,
            "vocabulary": 16,
            "difficulty": 10.928571428571427,
            "volume": 140,
            "effort": 1529.9999999999998,
            "bugs": 0.04666666666666667,
            "time": 84.99999999999999
          }
        }
      },
      {
        "name": "<anonymous>.undefined",
        "line": 249,
        "complexity": {
          "sloc": {
            "physical": 104,
            "logical": 59
          },
          "cyclomatic": 10,
          "halstead": {
            "operators": {
              "distinct": 9,
              "total": 195,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 69,
              "total": 201,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 396,
            "vocabulary": 78,
            "difficulty": 13.108695652173914,
            "volume": 2489.0192786694506,
            "effort": 32627.796196471278,
            "bugs": 0.8296730928898168,
            "time": 1812.6553442484044
          }
        }
      },
      {
        "name": "<anonymous>.undefined",
        "line": 355,
        "complexity": {
          "sloc": {
            "physical": 31,
            "logical": 16
          },
          "cyclomatic": 5,
          "halstead": {
            "operators": {
              "distinct": 8,
              "total": 49,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 25,
              "total": 53,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 102,
            "vocabulary": 33,
            "difficulty": 8.48,
            "volume": 514.5282001745622,
            "effort": 4363.199137480288,
            "bugs": 0.1715094000581874,
            "time": 242.39995208223823
          }
        }
      },
      {
        "name": "<anonymous>.undefined",
        "line": 387,
        "complexity": {
          "sloc": {
            "physical": 20,
            "logical": 11
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 6,
              "total": 31,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 19,
              "total": 36,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 67,
            "vocabulary": 25,
            "difficulty": 5.684210526315789,
            "volume": 311.1383647149065,
            "effort": 1768.5759678531529,
            "bugs": 0.10371278823830217,
            "time": 98.25422043628627
          }
        }
      },
      {
        "name": "<anonymous>.undefined",
        "line": 408,
        "complexity": {
          "sloc": {
            "physical": 16,
            "logical": 8
          },
          "cyclomatic": 4,
          "halstead": {
            "operators": {
              "distinct": 5,
              "total": 17,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 9,
              "total": 20,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 37,
            "vocabulary": 14,
            "difficulty": 5.555555555555555,
            "volume": 140.87213211613133,
            "effort": 782.6229562007295,
            "bugs": 0.04695737737204377,
            "time": 43.47905312226275
          }
        }
      },
      {
        "name": "<anonymous>.undefined",
        "line": 424,
        "complexity": {
          "sloc": {
            "physical": 18,
            "logical": 9
          },
          "cyclomatic": 4,
          "halstead": {
            "operators": {
              "distinct": 5,
              "total": 19,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 10,
              "total": 21,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 40,
            "vocabulary": 15,
            "difficulty": 5.25,
            "volume": 156.27562382434076,
            "effort": 820.447025077789,
            "bugs": 0.052091874608113584,
            "time": 45.58039028209939
          }
        }
      },
      {
        "name": "<anonymous>.undefined",
        "line": 443,
        "complexity": {
          "sloc": {
            "physical": 42,
            "logical": 27
          },
          "cyclomatic": 8,
          "halstead": {
            "operators": {
              "distinct": 12,
              "total": 86,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 36,
              "total": 90,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 176,
            "vocabulary": 48,
            "difficulty": 15,
            "volume": 982.9534001269236,
            "effort": 14744.301001903854,
            "bugs": 0.3276511333756412,
            "time": 819.127833439103
          }
        }
      }
    ],
    "maintainability": 59.34544781605587,
    "module": "/CullVisitor.js"
  },
  "jshint": {
    "messages": []
  }
}