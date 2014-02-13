__report = {
  "info": {
    "file": "js/osgUtil/IntersectVisitor.js",
    "fileShort": "Util/IntersectVisitor.js",
    "fileSafe": "Util_IntersectVisitor_js",
    "link": "files/Util_IntersectVisitor_js/index.html"
  },
  "complexity": {
    "aggregate": {
      "line": 6,
      "complexity": {
        "sloc": {
          "physical": 148,
          "logical": 102
        },
        "cyclomatic": 19,
        "halstead": {
          "operators": {
            "distinct": 27,
            "total": 313,
            "identifiers": [
              "__stripped__"
            ]
          },
          "operands": {
            "distinct": 88,
            "total": 348,
            "identifiers": [
              "__stripped__"
            ]
          },
          "length": 661,
          "vocabulary": 115,
          "difficulty": 53.38636363636364,
          "volume": 4524.868923674232,
          "effort": 241566.2977661539,
          "bugs": 1.508289641224744,
          "time": 13420.349875897438
        }
      }
    },
    "functions": [
      {
        "name": "osgUtil.IntersectVisitor",
        "line": 6,
        "complexity": {
          "sloc": {
            "physical": 6,
            "logical": 4
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 4,
              "total": 12,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 8,
              "total": 13,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 25,
            "vocabulary": 12,
            "difficulty": 3.25,
            "volume": 89.62406251802891,
            "effort": 291.278203183594,
            "bugs": 0.029874687506009637,
            "time": 16.182122399088556
          }
        }
      },
      {
        "name": "addLineSegment",
        "line": 13,
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
              "distinct": 3,
              "total": 8,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 12,
            "vocabulary": 5,
            "difficulty": 2.6666666666666665,
            "volume": 27.863137138648348,
            "effort": 74.30169903639559,
            "bugs": 0.00928771237954945,
            "time": 4.1278721686886435
          }
        }
      },
      {
        "name": "intersectSegmentWithSphere",
        "line": 17,
        "complexity": {
          "sloc": {
            "physical": 29,
            "logical": 19
          },
          "cyclomatic": 5,
          "halstead": {
            "operators": {
              "distinct": 15,
              "total": 71,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 27,
              "total": 76,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 147,
            "vocabulary": 42,
            "difficulty": 21.11111111111111,
            "volume": 792.6706611484778,
            "effort": 16734.158402023422,
            "bugs": 0.2642235537161593,
            "time": 929.675466779079
          }
        }
      },
      {
        "name": "pushModelMatrix",
        "line": 46,
        "complexity": {
          "sloc": {
            "physical": 9,
            "logical": 6
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 8,
              "total": 24,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 11,
              "total": 28,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 52,
            "vocabulary": 19,
            "difficulty": 10.181818181818182,
            "volume": 220.89223069906643,
            "effort": 2249.084530754131,
            "bugs": 0.07363074356635547,
            "time": 124.94914059745172
          }
        }
      },
      {
        "name": "getModelMatrix",
        "line": 55,
        "complexity": {
          "sloc": {
            "physical": 6,
            "logical": 3
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 7,
              "total": 15,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 9,
              "total": 14,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 29,
            "vocabulary": 16,
            "difficulty": 5.444444444444445,
            "volume": 116,
            "effort": 631.5555555555555,
            "bugs": 0.03866666666666667,
            "time": 35.08641975308642
          }
        }
      },
      {
        "name": "popModelMatrix",
        "line": 61,
        "complexity": {
          "sloc": {
            "physical": 1,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 3,
              "total": 4,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 3,
              "total": 3,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 7,
            "vocabulary": 6,
            "difficulty": 1.5,
            "volume": 18.094737505048094,
            "effort": 27.14210625757214,
            "bugs": 0.006031579168349364,
            "time": 1.5078947920873411
          }
        }
      },
      {
        "name": "getWindowMatrix",
        "line": 62,
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
        "name": "getProjectionMatrix",
        "line": 63,
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
        "name": "getViewMatrix",
        "line": 64,
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
        "name": "intersectSegmentWithGeometry",
        "line": 65,
        "complexity": {
          "sloc": {
            "physical": 14,
            "logical": 11
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 11,
              "total": 28,
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
            "length": 64,
            "vocabulary": 30,
            "difficulty": 10.421052631578947,
            "volume": 314.0409981189452,
            "effort": 3272.637769871113,
            "bugs": 0.10468033270631506,
            "time": 181.81320943728406
          }
        }
      },
      {
        "name": "pushCamera",
        "line": 79,
        "complexity": {
          "sloc": {
            "physical": 12,
            "logical": 5
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 6,
              "total": 18,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 11,
              "total": 18,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 36,
            "vocabulary": 17,
            "difficulty": 4.909090909090909,
            "volume": 147.14866228501225,
            "effort": 722.366160308242,
            "bugs": 0.04904955409500408,
            "time": 40.13145335045789
          }
        }
      },
      {
        "name": "applyCamera",
        "line": 91,
        "complexity": {
          "sloc": {
            "physical": 7,
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
        "name": "applyNode",
        "line": 99,
        "complexity": {
          "sloc": {
            "physical": 32,
            "logical": 19
          },
          "cyclomatic": 6,
          "halstead": {
            "operators": {
              "distinct": 9,
              "total": 66,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 28,
              "total": 76,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 142,
            "vocabulary": 37,
            "difficulty": 12.214285714285715,
            "volume": 739.7423779193109,
            "effort": 9035.424758871584,
            "bugs": 0.2465807926397703,
            "time": 501.96804215953244
          }
        }
      },
      {
        "name": "apply",
        "line": 132,
        "complexity": {
          "sloc": {
            "physical": 11,
            "logical": 6
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 6,
              "total": 12,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 7,
              "total": 13,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 25,
            "vocabulary": 13,
            "difficulty": 5.571428571428571,
            "volume": 92.5109929535273,
            "effort": 515.4183893125092,
            "bugs": 0.030836997651175767,
            "time": 28.634354961806068
          }
        }
      },
      {
        "name": "enterNode",
        "line": 144,
        "complexity": {
          "sloc": {
            "physical": 9,
            "logical": 5
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 7,
              "total": 10,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 8,
              "total": 10,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 20,
            "vocabulary": 15,
            "difficulty": 4.375,
            "volume": 78.13781191217038,
            "effort": 341.8529271157454,
            "bugs": 0.026045937304056792,
            "time": 18.991829284208077
          }
        }
      }
    ],
    "maintainability": 67.89977723549319,
    "module": "Util/IntersectVisitor.js"
  },
  "jshint": {
    "messages": []
  }
}