__report = {
  "info": {
    "file": "js/osgUtil/TriangleIntersect.js",
    "fileShort": "Util/TriangleIntersect.js",
    "fileSafe": "Util_TriangleIntersect_js",
    "link": "files/Util_TriangleIntersect_js/index.html"
  },
  "complexity": {
    "aggregate": {
      "line": 6,
      "complexity": {
        "sloc": {
          "physical": 346,
          "logical": 300
        },
        "cyclomatic": 39,
        "halstead": {
          "operators": {
            "distinct": 32,
            "total": 874,
            "identifiers": [
              "__stripped__"
            ]
          },
          "operands": {
            "distinct": 108,
            "total": 1035,
            "identifiers": [
              "__stripped__"
            ]
          },
          "length": 1909,
          "vocabulary": 140,
          "difficulty": 153.33333333333334,
          "volume": 13609.801279347941,
          "effort": 2086836.1961666844,
          "bugs": 4.536600426449314,
          "time": 115935.34423148246
        }
      }
    },
    "functions": [
      {
        "name": "osgUtil.TriangleHit",
        "line": 6,
        "complexity": {
          "sloc": {
            "physical": 10,
            "logical": 8
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 16,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 9,
              "total": 32,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 48,
            "vocabulary": 11,
            "difficulty": 3.5555555555555554,
            "volume": 166.05271769459029,
            "effort": 590.4096629140987,
            "bugs": 0.05535090589819676,
            "time": 32.800536828561036
          }
        }
      },
      {
        "name": "osgUtil.TriangleIntersect",
        "line": 17,
        "complexity": {
          "sloc": {
            "physical": 5,
            "logical": 2
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 3,
              "total": 6,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 4,
              "total": 6,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 12,
            "vocabulary": 7,
            "difficulty": 2.25,
            "volume": 33.68825906469125,
            "effort": 75.79858289555531,
            "bugs": 0.011229419688230418,
            "time": 4.2110323830864065
          }
        }
      },
      {
        "name": "setNodePath",
        "line": 24,
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
        "name": "set",
        "line": 25,
        "complexity": {
          "sloc": {
            "physical": 8,
            "logical": 6
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 6,
              "total": 25,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 12,
              "total": 35,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 60,
            "vocabulary": 18,
            "difficulty": 8.75,
            "volume": 250.19550008653874,
            "effort": 2189.210625757214,
            "bugs": 0.08339850002884625,
            "time": 121.62281254206745
          }
        }
      },
      {
        "name": "applyDrawElementsTriangles",
        "line": 34,
        "complexity": {
          "sloc": {
            "physical": 24,
            "logical": 21
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 10,
              "total": 61,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 17,
              "total": 79,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 140,
            "vocabulary": 27,
            "difficulty": 23.23529411764706,
            "volume": 665.6842503028856,
            "effort": 15467.369345272933,
            "bugs": 0.22189475010096188,
            "time": 859.2982969596073
          }
        }
      },
      {
        "name": "applyDrawElementsTriangleStrip",
        "line": 59,
        "complexity": {
          "sloc": {
            "physical": 30,
            "logical": 27
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 13,
              "total": 77,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 18,
              "total": 97,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 174,
            "vocabulary": 31,
            "difficulty": 35.02777777777778,
            "volume": 862.0301580073163,
            "effort": 30195.000812422943,
            "bugs": 0.2873433860024388,
            "time": 1677.500045134608
          }
        }
      },
      {
        "name": "applyDrawElementsTriangleFan",
        "line": 90,
        "complexity": {
          "sloc": {
            "physical": 25,
            "logical": 21
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 10,
              "total": 63,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 18,
              "total": 79,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 142,
            "vocabulary": 28,
            "difficulty": 21.944444444444446,
            "volume": 682.6443989321797,
            "effort": 14980.25208767839,
            "bugs": 0.22754813297739324,
            "time": 832.2362270932439
          }
        }
      },
      {
        "name": "applyDrawArraysTriangles",
        "line": 116,
        "complexity": {
          "sloc": {
            "physical": 20,
            "logical": 15
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 9,
              "total": 51,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 20,
              "total": 64,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 115,
            "vocabulary": 29,
            "difficulty": 14.4,
            "volume": 558.6678144396709,
            "effort": 8044.816527931262,
            "bugs": 0.18622260481322364,
            "time": 446.93425155173674
          }
        }
      },
      {
        "name": "applyDrawArraysTriangleStrip",
        "line": 137,
        "complexity": {
          "sloc": {
            "physical": 30,
            "logical": 27
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 13,
              "total": 71,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 18,
              "total": 91,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 162,
            "vocabulary": 31,
            "difficulty": 32.86111111111111,
            "volume": 802.5798022826739,
            "effort": 26373.66405834453,
            "bugs": 0.2675266007608913,
            "time": 1465.2035587969183
          }
        }
      },
      {
        "name": "applyDrawArraysTriangleFan",
        "line": 168,
        "complexity": {
          "sloc": {
            "physical": 25,
            "logical": 21
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 10,
              "total": 61,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 18,
              "total": 77,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 138,
            "vocabulary": 28,
            "difficulty": 21.38888888888889,
            "volume": 663.4149792439493,
            "effort": 14189.709278273362,
            "bugs": 0.22113832641464978,
            "time": 788.3171821262979
          }
        }
      },
      {
        "name": "apply",
        "line": 194,
        "complexity": {
          "sloc": {
            "physical": 39,
            "logical": 33
          },
          "cyclomatic": 4,
          "halstead": {
            "operators": {
              "distinct": 15,
              "total": 91,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 31,
              "total": 89,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 180,
            "vocabulary": 46,
            "difficulty": 21.532258064516128,
            "volume": 994.2411520902624,
            "effort": 21408.25706516936,
            "bugs": 0.3314137173634208,
            "time": 1189.3476147316312
          }
        }
      },
      {
        "name": "intersect",
        "line": 234,
        "complexity": {
          "sloc": {
            "physical": 117,
            "logical": 105
          },
          "cyclomatic": 28,
          "halstead": {
            "operators": {
              "distinct": 25,
              "total": 320,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 60,
              "total": 352,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 672,
            "vocabulary": 85,
            "difficulty": 73.33333333333333,
            "volume": 4307.110709084536,
            "effort": 315854.78533286595,
            "bugs": 1.4357035696948455,
            "time": 17547.48807404811
          }
        }
      }
    ],
    "maintainability": 48.67165236310147,
    "module": "Util/TriangleIntersect.js"
  },
  "jshint": {
    "messages": []
  }
}