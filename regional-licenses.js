// Shared source for the live regional map and the statistics chart.
export const regionalNames = [
  {"id":"KZ10","kk":"Абай облысы","ru":"Область Абай","source":"Область Абай"},
  {"id":"KZ11","kk":"Ақмола облысы","ru":"Акмолинская область","source":"Акмолинская область"},
  {"id":"KZ15","kk":"Ақтөбе облысы","ru":"Актюбинская область","source":"Актюбинская область"},
  {"id":"KZ19","kk":"Алматы облысы","ru":"Алматинская область","source":"Алматинская область"},
  {"id":"KZ23","kk":"Атырау облысы","ru":"Атырауская область","source":"Атырауская область"},
  {"id":"KZ27","kk":"Батыс Қазақстан облысы","ru":"Западно-Казахстанская область","source":"Западно-Казахстанская область"},
  {"id":"KZ31","kk":"Жамбыл облысы","ru":"Жамбылская область","source":"Жамбылская область"},
  {"id":"KZ33","kk":"Жетісу облысы","ru":"Область Жетісу","source":"Область Жетісу"},
  {"id":"KZ35","kk":"Қарағанды облысы","ru":"Карагандинская область","source":"Карагандинская область"},
  {"id":"KZ39","kk":"Қостанай облысы","ru":"Костанайская область","source":"Костанайская область"},
  {"id":"KZ43","kk":"Қызылорда облысы","ru":"Кызылординская область","source":"Кызылординская область"},
  {"id":"KZ47","kk":"Маңғыстау облысы","ru":"Мангистауская область","source":"Мангистауская область"},
  {"id":"KZ55","kk":"Павлодар облысы","ru":"Павлодарская область","source":"Павлодарская область"},
  {"id":"KZ59","kk":"Солтүстік Қазақстан облысы","ru":"Северо-Казахстанская область","source":"Северо-Казахстанская область"},
  {"id":"KZ61","kk":"Түркістан облысы","ru":"Туркестанская область","source":"Туркестанская область"},
  {"id":"KZ62","kk":"Ұлытау облысы","ru":"Область Ұлытау","source":"Область Ұлытау"},
  {"id":"KZ63","kk":"Шығыс Қазақстан облысы","ru":"Восточно-Казахстанская область","source":"Восточно-Казахстанская область"},
  {"id":"KZ71","kk":"Астана қаласы","ru":"г. Астана","source":"Астана"},
  {"id":"KZ75","kk":"Алматы қаласы","ru":"г. Алматы","source":"Алматы"},
  {"id":"KZ79","kk":"Шымкент қаласы","ru":"г. Шымкент","source":"Шымкент"}
];

const snapshot = {
  "KZ11": {"activated":4974,"used":4454},
  "KZ15": {"activated":4907,"used":4166},
  "KZ19": {"activated":6662,"used":6556},
  "KZ23": {"activated":2840,"used":2457},
  "KZ63": {"activated":1907,"used":1704},
  "KZ75": {"activated":4863,"used":4445},
  "KZ71": {"activated":5289,"used":4663},
  "KZ79": {"activated":3130,"used":3072},
  "KZ31": {"activated":6000,"used":5846},
  "KZ27": {"activated":5502,"used":5430},
  "KZ35": {"activated":4595,"used":4105},
  "KZ39": {"activated":5600,"used":4786},
  "KZ43": {"activated":4966,"used":4862},
  "KZ47": {"activated":2764,"used":2460},
  "KZ10": {"activated":2723,"used":2344},
  "KZ33": {"activated":4178,"used":3691},
  "KZ62": {"activated":1210,"used":999},
  "KZ55": {"activated":2782,"used":2408},
  "KZ59": {"activated":2605,"used":2223},
  "KZ61": {"activated":13740,"used":13213}
};
const snapshotDate = '2026-11-27T04:51:37.346Z';

const reportEndpoint = 'https://wabi-west-europe-api.analysis.windows.net/public/reports/querydata?synchronous=true';
const reportKey = 'ab14b02c-6d11-41b0-9e0f-7477241f5397';
const reportQuery = {
  "version": "1.0.0",
  "queries": [
    {
      "Query": {
        "Commands": [
          {
            "SemanticQueryDataShapeCommand": {
              "Query": {
                "Version": 2,
                "From": [
                  {
                    "Name": "v",
                    "Entity": "Вводный модуль",
                    "Type": 0
                  },
                  {
                    "Name": "w",
                    "Entity": "Workspace_use_append",
                    "Type": 0
                  },
                  {
                    "Name": "s",
                    "Entity": "Весь список",
                    "Type": 0
                  }
                ],
                "Select": [
                  {
                    "Column": {
                      "Expression": {
                        "SourceRef": {
                          "Source": "v"
                        }
                      },
                      "Property": "Весь список.NewColumn.Область"
                    },
                    "Name": "Область"
                  },
                  {
                    "Measure": {
                      "Expression": {
                        "SourceRef": {
                          "Source": "w"
                        }
                      },
                      "Property": "Активировали лицензию"
                    },
                    "Name": "Workspace_use_append.Активировали лицензию"
                  },
                  {
                    "Measure": {
                      "Expression": {
                        "SourceRef": {
                          "Source": "w"
                        }
                      },
                      "Property": "Используют лицензию"
                    },
                    "Name": "Workspace_use_append.Используют лицензию"
                  }
                ],
                "Where": [
                  {
                    "Condition": {
                      "Not": {
                        "Expression": {
                          "In": {
                            "Expressions": [
                              {
                                "Column": {
                                  "Expression": {
                                    "SourceRef": {
                                      "Source": "v"
                                    }
                                  },
                                  "Property": "org_name"
                                }
                              }
                            ],
                            "Values": [
                              [
                                {
                                  "Literal": {
                                    "Value": "'ОВПО и НИИ'"
                                  }
                                }
                              ],
                              [
                                {
                                  "Literal": {
                                    "Value": "'astanahub'"
                                  }
                                }
                              ]
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "Condition": {
                      "Not": {
                        "Expression": {
                          "In": {
                            "Expressions": [
                              {
                                "Column": {
                                  "Expression": {
                                    "SourceRef": {
                                      "Source": "v"
                                    }
                                  },
                                  "Property": "Весь список.NewColumn.Область"
                                }
                              }
                            ],
                            "Values": [
                              [
                                {
                                  "Literal": {
                                    "Value": "null"
                                  }
                                }
                              ]
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "Condition": {
                      "Not": {
                        "Expression": {
                          "In": {
                            "Expressions": [
                              {
                                "Column": {
                                  "Expression": {
                                    "SourceRef": {
                                      "Source": "v"
                                    }
                                  },
                                  "Property": "Весь список.Уровень"
                                }
                              }
                            ],
                            "Values": [
                              [
                                {
                                  "Literal": {
                                    "Value": "null"
                                  }
                                }
                              ],
                              [
                                {
                                  "Literal": {
                                    "Value": "'АстанаХаб'"
                                  }
                                }
                              ],
                              [
                                {
                                  "Literal": {
                                    "Value": "'ОВПО'"
                                  }
                                }
                              ],
                              [
                                {
                                  "Literal": {
                                    "Value": "'НИИ'"
                                  }
                                }
                              ]
                            ]
                          }
                        }
                      }
                    }
                  },
                  {
                    "Condition": {
                      "Not": {
                        "Expression": {
                          "In": {
                            "Expressions": [
                              {
                                "Column": {
                                  "Expression": {
                                    "SourceRef": {
                                      "Source": "s"
                                    }
                                  },
                                  "Property": "Уровень"
                                }
                              }
                            ],
                            "Values": [
                              [
                                {
                                  "Literal": {
                                    "Value": "'АстанаХаб'"
                                  }
                                }
                              ],
                              [
                                {
                                  "Literal": {
                                    "Value": "'НИИ'"
                                  }
                                }
                              ],
                              [
                                {
                                  "Literal": {
                                    "Value": "'ОВПО'"
                                  }
                                }
                              ]
                            ]
                          }
                        }
                      }
                    }
                  }
                ]
              },
              "Binding": {
                "Primary": {
                  "Groupings": [
                    {
                      "Projections": [
                        0,
                        1,
                        2
                      ]
                    }
                  ]
                },
                "DataReduction": {
                  "DataVolume": 3,
                  "Primary": {
                    "Top": {
                      "Count": 100
                    }
                  }
                },
                "Version": 1
              },
              "ExecutionMetricsKind": 1
            }
          }
        ]
      },
      "QueryId": "regional-licenses"
    }
  ],
  "cancelQueries": [],
  "modelId": 10036122
};

const regionIds = new Map(regionalNames.map(({source, id}) => [source, id]));
const isCount = value => Number.isSafeInteger(value) && value >= 0;

function decodeReadings(response) {
  const result = response.results?.[0]?.result?.data;
  const series = result?.dsr?.DS?.[0];
  const rows = series?.PH?.[0]?.DM0;
  if (!Array.isArray(rows) || !Number.isFinite(Date.parse(result.timestamp))) {
    throw new Error('Power BI did not return regional data');
  }
  const counts = Object.create(null);
  let schema, previous = [];
  for (const row of rows) {
    schema = row.S || schema;
    if (!schema || schema.length !== 3 || schema.map(column => column.N).join(',') !== 'G0,M0,M1') {
      throw new Error('Unexpected regional data schema');
    }
    let position = 0;
    const values = schema.map((column, index) => {
      const flag = 1 << index;
      if ((row.R || 0) & flag) return previous[index];
      if ((row['Ø'] || 0) & flag) return null;
      const value = row.C?.[position++];
      return column.DN && value != null ? series.ValueDicts?.[column.DN]?.[value] : value;
    });
    previous = values;
    const [name, activated, used] = values;
    const id = regionIds.get(typeof name === 'string' ? name.replace(/^г\.\s*/iu, '').trim() : '');
    if (!id || counts[id] || ![activated, used].every(value => value === null || isCount(value))) {
      throw new Error('Unexpected regional row');
    }
    counts[id] = {activated, used};
  }
  if (Object.keys(counts).length !== regionIds.size) throw new Error('Regional data is incomplete');
  return {counts, checkedAt:result.timestamp};
}

export function subscribeRegionalLicenses(receive) {
  let current = { counts: snapshot, checkedAt: snapshotDate, state: 'snapshot' };
  let pending = false;
  const interval = 10 * 60 * 1000;
  let nextCheck = 0;

  async function refresh() {
    if (pending || document.visibilityState === 'hidden' || Date.now() < nextCheck) return;
    pending = true;
    let next;
    try {
      const response = await fetch(reportEndpoint, {
        method: 'POST',
        credentials: 'omit',
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json',
          'X-PowerBI-ResourceKey': reportKey,
          ActivityId: crypto.randomUUID(),
          RequestId: crypto.randomUUID()
        },
        body: JSON.stringify(reportQuery),
        signal: AbortSignal.timeout(18000)
      });
      if (!response.ok) throw new Error('Power BI HTTP ' + response.status);
      const reading = decodeReadings(await response.json());
      if (Date.parse(reading.checkedAt) < Date.parse(current.checkedAt)) {
        throw new Error('Outdated Power BI response');
      }
      next = { ...reading, state: 'live' };
    } catch {
      next = { ...current, state: 'cached' };
    } finally {
      pending = false;
      nextCheck = Date.now() + interval;
    }
    current = next;
    receive(current);
  }

  receive(current);
  refresh();
  setInterval(refresh, 30_000);
  document.addEventListener('visibilitychange', refresh);
}
