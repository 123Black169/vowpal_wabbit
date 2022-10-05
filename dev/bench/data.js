window.BENCHMARK_DATA = {
  "lastUpdate": 1665007777113,
  "repoUrl": "https://github.com/VowpalWabbit/vowpal_wabbit",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "byronxu@microsoft.com",
            "name": "Byron Xu",
            "username": "byronxu99"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ea278c49f059b548725b653e82df1920b3180ffd",
          "message": "refactor: Use github-action-benchmark for running benchmarks (#4152)\n\nhttps://github.com/benchmark-action/github-action-benchmark\r\n\r\nThis change simplifies CI jobs for benchmarking and allows benchmark statistics to be automatically tracked over time.",
          "timestamp": "2022-10-03T12:41:53-04:00",
          "tree_id": "2415aa7a729ce7edf63b0c418fe5fa4942a86f3c",
          "url": "https://github.com/VowpalWabbit/vowpal_wabbit/commit/ea278c49f059b548725b653e82df1920b3180ffd"
        },
        "date": 1664816672769,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bench_text/120_string_fts",
            "value": 6664.057055078417,
            "unit": "ns/iter",
            "extra": "iterations: 625273\ncpu: 6661.85985961332 ns\nthreads: 1"
          },
          {
            "name": "bench_text/120_num_fts",
            "value": 5355.95483413266,
            "unit": "ns/iter",
            "extra": "iterations: 820354\ncpu: 5355.266994492621 ns\nthreads: 1"
          },
          {
            "name": "benchmark_learn_simple/8_features",
            "value": 83.8554524160607,
            "unit": "ns/iter",
            "extra": "iterations: 49980531\ncpu: 83.84380310005108 ns\nthreads: 1"
          },
          {
            "name": "benchmark_learn_simple/1_feature",
            "value": 184.75517935997004,
            "unit": "ns/iter",
            "extra": "iterations: 22532369\ncpu: 184.72102067918377 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/few_features",
            "value": 7864.989773408609,
            "unit": "ns/iter",
            "extra": "iterations: 540356\ncpu: 7863.6922695408175 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/many_features",
            "value": 13653.76900571444,
            "unit": "ns/iter",
            "extra": "iterations: 306592\ncpu: 13651.532003444323 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/few_features_no_predict",
            "value": 3623.6964660377625,
            "unit": "ns/iter",
            "extra": "iterations: 1175819\ncpu: 3623.1780571669574 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/many_features_no_predic",
            "value": 5327.172492569401,
            "unit": "ns/iter",
            "extra": "iterations: 790979\ncpu: 5326.467453623926 ns\nthreads: 1"
          },
          {
            "name": "benchmark_cb_adf_learn/few_features",
            "value": 1287.1819784848947,
            "unit": "ns/iter",
            "extra": "iterations: 3176370\ncpu: 1287.0105812609993 ns\nthreads: 1"
          },
          {
            "name": "benchmark_cb_adf_learn/many_features/min_time:15.000",
            "value": 66562.97366815532,
            "unit": "ns/iter",
            "extra": "iterations: 314714\ncpu: 66544.35964081674 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_no_namespaces/min_time:15.000",
            "value": 301798.4374520031,
            "unit": "ns/iter",
            "extra": "iterations: 75526\ncpu: 301752.3660726108 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_diff_char_no_interactions/min_time:15.000",
            "value": 324720.6953370543,
            "unit": "ns/iter",
            "extra": "iterations: 66503\ncpu: 324631.75646211463 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_diff_char_interactions/min_time:15.000",
            "value": 597494.242094336,
            "unit": "ns/iter",
            "extra": "iterations: 35639\ncpu: 597400.3703807621 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_same_char_no_interactions/min_time:15.000",
            "value": 298159.4971043968,
            "unit": "ns/iter",
            "extra": "iterations: 70279\ncpu: 298110.8738029854 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_same_char_interactions/min_time:15.000",
            "value": 456433.471992935,
            "unit": "ns/iter",
            "extra": "iterations: 46399\ncpu: 456363.3030884288 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_no_namespaces/min_time:15.000",
            "value": 619615.8197096103,
            "unit": "ns/iter",
            "extra": "iterations: 33679\ncpu: 619436.7706879657 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_diff_char_no_interactions/min_time:15.000",
            "value": 818138.0316736612,
            "unit": "ns/iter",
            "extra": "iterations: 25005\ncpu: 818010.0339932004 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_diff_char_interactions/min_time:15.000",
            "value": 2678820.8184595797,
            "unit": "ns/iter",
            "extra": "iterations: 7855\ncpu: 2678399.223424564 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_same_char_no_interactions/min_time:15.000",
            "value": 663877.7406668966,
            "unit": "ns/iter",
            "extra": "iterations: 31099\ncpu: 663700.7717289942 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_same_char_interactions/min_time:15.000",
            "value": 2048289.1103995382,
            "unit": "ns/iter",
            "extra": "iterations: 10462\ncpu: 2047963.7736570435 ns\nthreads: 1"
          },
          {
            "name": "benchmark_rcv1_dataset/simple/min_time:15.000",
            "value": 54819.720832290775,
            "unit": "ns/iter",
            "extra": "iterations: 391786\ncpu: 54805.13239370476 ns\nthreads: 1"
          },
          {
            "name": "benchmark_rcv1_dataset/quadratic/min_time:15.000",
            "value": 3110920.644157009,
            "unit": "ns/iter",
            "extra": "iterations: 6649\ncpu: 3110471.364114903 ns\nthreads: 1"
          },
          {
            "name": "bench_cache_io_buf/120_string_fts",
            "value": 1068.6296247389564,
            "unit": "ns/iter",
            "extra": "iterations: 3915221\ncpu: 1068.4941922818678 ns\nthreads: 1"
          },
          {
            "name": "bench_text_io_buf/120_string_fts",
            "value": 7804.014437133793,
            "unit": "ns/iter",
            "extra": "iterations: 538334\ncpu: 7803.032503984545 ns\nthreads: 1"
          },
          {
            "name": "bench_cache_io_buf/120_num_fts",
            "value": 913.0453050708237,
            "unit": "ns/iter",
            "extra": "iterations: 4565383\ncpu: 912.9340079463144 ns\nthreads: 1"
          },
          {
            "name": "bench_text_io_buf/120_num_fts",
            "value": 6071.742136079764,
            "unit": "ns/iter",
            "extra": "iterations: 696313\ncpu: 6070.967366687069 ns\nthreads: 1"
          },
          {
            "name": "benchmark_example_reuse",
            "value": 833.3011306930822,
            "unit": "ns/iter",
            "extra": "iterations: 4861620\ncpu: 832.7582986741046 ns\nthreads: 1"
          },
          {
            "name": "benchmark_sum_ft_squared_char",
            "value": 55.02283105085443,
            "unit": "ns/iter",
            "extra": "iterations: 73120375\ncpu: 55.01601844903033 ns\nthreads: 1"
          },
          {
            "name": "benchmark_sum_ft_squared_extent",
            "value": 81.79889397663605,
            "unit": "ns/iter",
            "extra": "iterations: 51459130\ncpu: 81.78871465568824 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "byronxu@microsoft.com",
            "name": "Byron Xu",
            "username": "byronxu99"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ea278c49f059b548725b653e82df1920b3180ffd",
          "message": "refactor: Use github-action-benchmark for running benchmarks (#4152)\n\nhttps://github.com/benchmark-action/github-action-benchmark\r\n\r\nThis change simplifies CI jobs for benchmarking and allows benchmark statistics to be automatically tracked over time.",
          "timestamp": "2022-10-03T12:41:53-04:00",
          "tree_id": "2415aa7a729ce7edf63b0c418fe5fa4942a86f3c",
          "url": "https://github.com/VowpalWabbit/vowpal_wabbit/commit/ea278c49f059b548725b653e82df1920b3180ffd"
        },
        "date": 1664817818098,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkText.Benchmark(args: 120_num_features)",
            "value": 6574.919535319011,
            "unit": "ns",
            "range": "± 93.79530775545679"
          },
          {
            "name": "BenchmarkText.Benchmark(args: 120_string_fts)",
            "value": 9385.611179896763,
            "unit": "ns",
            "range": "± 143.37241196798277"
          },
          {
            "name": "BenchmarkLearnSimple.Benchmark(args: 1_feature)",
            "value": 710.3578834533691,
            "unit": "ns",
            "range": "± 18.6482108552604"
          },
          {
            "name": "BenchmarkLearnSimple.Benchmark(args: 8_features)",
            "value": 641.152993370505,
            "unit": "ns",
            "range": "± 12.904914214749065"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_diff_char_interactions)",
            "value": 1099037.3697916667,
            "unit": "ns",
            "range": "± 26063.382319407472"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_diff_char_no_interactions)",
            "value": 683385.8268229166,
            "unit": "ns",
            "range": "± 9129.353305687768"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_no_namespaces)",
            "value": 672665.7552083334,
            "unit": "ns",
            "range": "± 10895.296152796116"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_same_char_interactions)",
            "value": 1075119.7823660714,
            "unit": "ns",
            "range": "± 12263.979786500646"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_same_char_no_interactions)",
            "value": 671461.0807291666,
            "unit": "ns",
            "range": "± 10392.732118005928"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_diff_char_interactions)",
            "value": 4835329.541015625,
            "unit": "ns",
            "range": "± 93745.30218447442"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_diff_char_no_interactions)",
            "value": 1334014.658203125,
            "unit": "ns",
            "range": "± 30514.80086892214"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_no_namespaces)",
            "value": 1170004.443359375,
            "unit": "ns",
            "range": "± 21738.567949837554"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_same_char_interactions)",
            "value": 4503955.625,
            "unit": "ns",
            "range": "± 78020.37972632668"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_same_char_no_interactions)",
            "value": 1161263.0598958333,
            "unit": "ns",
            "range": "± 20377.41208332837"
          },
          {
            "name": "BenchmarkCbAdfLearn.Benchmark(args: few_features)",
            "value": 3874.462089538574,
            "unit": "ns",
            "range": "± 87.08666629364397"
          },
          {
            "name": "BenchmarkCcbAdfLearn.Benchmark(args: few_features)",
            "value": 13627.952372233072,
            "unit": "ns",
            "range": "± 238.41235278342248"
          },
          {
            "name": "BenchmarkCbAdfLearn.Benchmark(args: many_features)",
            "value": 166510.9119762074,
            "unit": "ns",
            "range": "± 3927.155439388778"
          },
          {
            "name": "BenchmarkCcbAdfLearn.Benchmark(args: many_features)",
            "value": 23752.81195389597,
            "unit": "ns",
            "range": "± 498.6880839253683"
          },
          {
            "name": "BenchmarkRCV1.Benchmark(args: quadratic)",
            "value": 6276986.049107143,
            "unit": "ns",
            "range": "± 76197.28994950146"
          },
          {
            "name": "BenchmarkRCV1.Benchmark(args: simple)",
            "value": 297574.1341145833,
            "unit": "ns",
            "range": "± 4240.456062710992"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "griffinbassman@gmail.com",
            "name": "Griffin Bassman",
            "username": "bassmang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e58863e2dcf85152dbce6fc1e19c212cab814e9",
          "message": "fix: one_of for loss_option (#4178)",
          "timestamp": "2022-10-03T16:16:57-04:00",
          "tree_id": "124b790b4fdfb296febb11354100887a734f030c",
          "url": "https://github.com/VowpalWabbit/vowpal_wabbit/commit/4e58863e2dcf85152dbce6fc1e19c212cab814e9"
        },
        "date": 1664829629821,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bench_text/120_string_fts",
            "value": 7320.13336314848,
            "unit": "ns/iter",
            "extra": "iterations: 572422\ncpu: 7319.435311710592 ns\nthreads: 1"
          },
          {
            "name": "bench_text/120_num_fts",
            "value": 5816.502452499062,
            "unit": "ns/iter",
            "extra": "iterations: 726198\ncpu: 5816.03336831002 ns\nthreads: 1"
          },
          {
            "name": "benchmark_learn_simple/8_features",
            "value": 89.18590218869623,
            "unit": "ns/iter",
            "extra": "iterations: 47588692\ncpu: 89.17846701901367 ns\nthreads: 1"
          },
          {
            "name": "benchmark_learn_simple/1_feature",
            "value": 196.7572468352743,
            "unit": "ns/iter",
            "extra": "iterations: 21559204\ncpu: 196.7309507345449 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/few_features",
            "value": 8077.321752951884,
            "unit": "ns/iter",
            "extra": "iterations: 515268\ncpu: 8076.307474945075 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/many_features",
            "value": 14555.592219733504,
            "unit": "ns/iter",
            "extra": "iterations: 286674\ncpu: 14553.763159547074 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/few_features_no_predict",
            "value": 3869.2817299213457,
            "unit": "ns/iter",
            "extra": "iterations: 1097576\ncpu: 3868.9325386123624 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/many_features_no_predic",
            "value": 5877.642401204957,
            "unit": "ns/iter",
            "extra": "iterations: 711093\ncpu: 5877.09315096618 ns\nthreads: 1"
          },
          {
            "name": "benchmark_cb_adf_learn/few_features",
            "value": 1421.5449695955238,
            "unit": "ns/iter",
            "extra": "iterations: 2991499\ncpu: 1421.4313292433 ns\nthreads: 1"
          },
          {
            "name": "benchmark_cb_adf_learn/many_features/min_time:15.000",
            "value": 75573.02661670798,
            "unit": "ns/iter",
            "extra": "iterations: 278096\ncpu: 75565.39324549794 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_no_namespaces/min_time:15.000",
            "value": 341612.81387536804,
            "unit": "ns/iter",
            "extra": "iterations: 64301\ncpu: 341575.5804730873 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_diff_char_no_interactions/min_time:15.000",
            "value": 367724.56851705624,
            "unit": "ns/iter",
            "extra": "iterations: 57015\ncpu: 367682.5098658248 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_diff_char_interactions/min_time:15.000",
            "value": 658756.2815937531,
            "unit": "ns/iter",
            "extra": "iterations: 32000\ncpu: 658688.3218750001 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_same_char_no_interactions/min_time:15.000",
            "value": 321590.72797098145,
            "unit": "ns/iter",
            "extra": "iterations: 63405\ncpu: 321457.58220960473 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_same_char_interactions/min_time:15.000",
            "value": 490058.87978039164,
            "unit": "ns/iter",
            "extra": "iterations: 42622\ncpu: 490009.8493735625 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_no_namespaces/min_time:15.000",
            "value": 673179.8891642861,
            "unit": "ns/iter",
            "extra": "iterations: 31470\ncpu: 673098.646329838 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_diff_char_no_interactions/min_time:15.000",
            "value": 890260.4882275334,
            "unit": "ns/iter",
            "extra": "iterations: 23487\ncpu: 890145.7274236825 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_diff_char_interactions/min_time:15.000",
            "value": 2924207.582399311,
            "unit": "ns/iter",
            "extra": "iterations: 7227\ncpu: 2923878.0130067808 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_same_char_no_interactions/min_time:15.000",
            "value": 702658.0276959684,
            "unit": "ns/iter",
            "extra": "iterations: 30221\ncpu: 702574.0776281384 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_same_char_interactions/min_time:15.000",
            "value": 2151056.5765965874,
            "unit": "ns/iter",
            "extra": "iterations: 9896\ncpu: 2150817.168552951 ns\nthreads: 1"
          },
          {
            "name": "benchmark_rcv1_dataset/simple/min_time:15.000",
            "value": 59057.288512590676,
            "unit": "ns/iter",
            "extra": "iterations: 355215\ncpu: 59051.331728671335 ns\nthreads: 1"
          },
          {
            "name": "benchmark_rcv1_dataset/quadratic/min_time:15.000",
            "value": 3407671.474493121,
            "unit": "ns/iter",
            "extra": "iterations: 6116\ncpu: 3407294.882276 ns\nthreads: 1"
          },
          {
            "name": "bench_cache_io_buf/120_string_fts",
            "value": 1249.788939315599,
            "unit": "ns/iter",
            "extra": "iterations: 3356248\ncpu: 1249.6708228950897 ns\nthreads: 1"
          },
          {
            "name": "bench_text_io_buf/120_string_fts",
            "value": 8530.891347916342,
            "unit": "ns/iter",
            "extra": "iterations: 490980\ncpu: 8530.08432115367 ns\nthreads: 1"
          },
          {
            "name": "bench_cache_io_buf/120_num_fts",
            "value": 1036.9219797539447,
            "unit": "ns/iter",
            "extra": "iterations: 4079800\ncpu: 1036.8225403206102 ns\nthreads: 1"
          },
          {
            "name": "bench_text_io_buf/120_num_fts",
            "value": 6494.501805232801,
            "unit": "ns/iter",
            "extra": "iterations: 646454\ncpu: 6493.910471588043 ns\nthreads: 1"
          },
          {
            "name": "benchmark_example_reuse",
            "value": 909.0014790111068,
            "unit": "ns/iter",
            "extra": "iterations: 4647024\ncpu: 908.9126288136188 ns\nthreads: 1"
          },
          {
            "name": "benchmark_sum_ft_squared_char",
            "value": 60.095677950776924,
            "unit": "ns/iter",
            "extra": "iterations: 69533868\ncpu: 60.0903289315072 ns\nthreads: 1"
          },
          {
            "name": "benchmark_sum_ft_squared_extent",
            "value": 85.12064730520868,
            "unit": "ns/iter",
            "extra": "iterations: 48527093\ncpu: 85.11096883549175 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "griffinbassman@gmail.com",
            "name": "Griffin Bassman",
            "username": "bassmang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e58863e2dcf85152dbce6fc1e19c212cab814e9",
          "message": "fix: one_of for loss_option (#4178)",
          "timestamp": "2022-10-03T16:16:57-04:00",
          "tree_id": "124b790b4fdfb296febb11354100887a734f030c",
          "url": "https://github.com/VowpalWabbit/vowpal_wabbit/commit/4e58863e2dcf85152dbce6fc1e19c212cab814e9"
        },
        "date": 1664830598606,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkText.Benchmark(args: 120_num_features)",
            "value": 5188.4843826293945,
            "unit": "ns",
            "range": "± 16.478231459295028"
          },
          {
            "name": "BenchmarkText.Benchmark(args: 120_string_fts)",
            "value": 7193.40814443735,
            "unit": "ns",
            "range": "± 35.89625667208664"
          },
          {
            "name": "BenchmarkLearnSimple.Benchmark(args: 1_feature)",
            "value": 649.9236806233724,
            "unit": "ns",
            "range": "± 4.387319100343567"
          },
          {
            "name": "BenchmarkLearnSimple.Benchmark(args: 8_features)",
            "value": 546.8599573771158,
            "unit": "ns",
            "range": "± 9.146037631058588"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_diff_char_interactions)",
            "value": 849652.0052083334,
            "unit": "ns",
            "range": "± 1520.293121983569"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_diff_char_no_interactions)",
            "value": 463930.1041666667,
            "unit": "ns",
            "range": "± 834.502985190256"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_no_namespaces)",
            "value": 458779.2513020833,
            "unit": "ns",
            "range": "± 1172.113746151115"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_same_char_interactions)",
            "value": 848966.3499098558,
            "unit": "ns",
            "range": "± 1246.699611315346"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_same_char_no_interactions)",
            "value": 463405.30724158656,
            "unit": "ns",
            "range": "± 818.6499766010093"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_diff_char_interactions)",
            "value": 3475665.2083333335,
            "unit": "ns",
            "range": "± 5104.071762747823"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_diff_char_no_interactions)",
            "value": 1036662.5279017857,
            "unit": "ns",
            "range": "± 3255.5378650776365"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_no_namespaces)",
            "value": 865801.5071614584,
            "unit": "ns",
            "range": "± 1297.129996551881"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_same_char_interactions)",
            "value": 2768778.4765625,
            "unit": "ns",
            "range": "± 3437.5886815113213"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_same_char_no_interactions)",
            "value": 885597.0768229166,
            "unit": "ns",
            "range": "± 2063.19142479935"
          },
          {
            "name": "BenchmarkCbAdfLearn.Benchmark(args: few_features)",
            "value": 3374.2903573172434,
            "unit": "ns",
            "range": "± 2.9801269026365405"
          },
          {
            "name": "BenchmarkCcbAdfLearn.Benchmark(args: few_features)",
            "value": 11423.018704927885,
            "unit": "ns",
            "range": "± 21.629627677584367"
          },
          {
            "name": "BenchmarkCbAdfLearn.Benchmark(args: many_features)",
            "value": 125845.59122721355,
            "unit": "ns",
            "range": "± 163.9171255028683"
          },
          {
            "name": "BenchmarkCcbAdfLearn.Benchmark(args: many_features)",
            "value": 19645.140729631697,
            "unit": "ns",
            "range": "± 20.09984271615676"
          },
          {
            "name": "BenchmarkRCV1.Benchmark(args: quadratic)",
            "value": 4851986.614583333,
            "unit": "ns",
            "range": "± 15770.764036006305"
          },
          {
            "name": "BenchmarkRCV1.Benchmark(args: simple)",
            "value": 204621.3826497396,
            "unit": "ns",
            "range": "± 1948.073958401032"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "byronxu@microsoft.com",
            "name": "Byron Xu",
            "username": "byronxu99"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a9d2bd04c0d25d4de4af2599b9551ec547902f9b",
          "message": "docs: Update readme for benchmarks (#4181)",
          "timestamp": "2022-10-04T15:09:23Z",
          "tree_id": "da4ae8115bd14a2697b025930d7fc786876e77aa",
          "url": "https://github.com/VowpalWabbit/vowpal_wabbit/commit/a9d2bd04c0d25d4de4af2599b9551ec547902f9b"
        },
        "date": 1664897979567,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bench_text/120_string_fts",
            "value": 7388.286077977097,
            "unit": "ns/iter",
            "extra": "iterations: 567985\ncpu: 7387.322200410221 ns\nthreads: 1"
          },
          {
            "name": "bench_text/120_num_fts",
            "value": 5887.008118274982,
            "unit": "ns/iter",
            "extra": "iterations: 709264\ncpu: 5886.461317647589 ns\nthreads: 1"
          },
          {
            "name": "benchmark_learn_simple/8_features",
            "value": 89.72654283571929,
            "unit": "ns/iter",
            "extra": "iterations: 46874336\ncpu: 89.71954290723178 ns\nthreads: 1"
          },
          {
            "name": "benchmark_learn_simple/1_feature",
            "value": 199.3896221029398,
            "unit": "ns/iter",
            "extra": "iterations: 21377568\ncpu: 199.37401204851736 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/few_features",
            "value": 8222.56366855956,
            "unit": "ns/iter",
            "extra": "iterations: 506553\ncpu: 8221.654200054089 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/many_features",
            "value": 14755.542776807286,
            "unit": "ns/iter",
            "extra": "iterations: 285587\ncpu: 14753.937329080112 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/few_features_no_predict",
            "value": 3931.4925588171072,
            "unit": "ns/iter",
            "extra": "iterations: 1063339\ncpu: 3928.99743167513 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/many_features_no_predic",
            "value": 5949.482540999007,
            "unit": "ns/iter",
            "extra": "iterations: 713672\ncpu: 5948.990852940845 ns\nthreads: 1"
          },
          {
            "name": "benchmark_cb_adf_learn/few_features",
            "value": 1426.7264603075164,
            "unit": "ns/iter",
            "extra": "iterations: 2937241\ncpu: 1426.5987026600794 ns\nthreads: 1"
          },
          {
            "name": "benchmark_cb_adf_learn/many_features/min_time:15.000",
            "value": 73346.79098718676,
            "unit": "ns/iter",
            "extra": "iterations: 285083\ncpu: 73339.81822837559 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_no_namespaces/min_time:15.000",
            "value": 321459.5306190657,
            "unit": "ns/iter",
            "extra": "iterations: 65825\ncpu: 321380.5453854918 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_diff_char_no_interactions/min_time:15.000",
            "value": 352963.9031606609,
            "unit": "ns/iter",
            "extra": "iterations: 59418\ncpu: 352915.00555387256 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_diff_char_interactions/min_time:15.000",
            "value": 649856.280665344,
            "unit": "ns/iter",
            "extra": "iterations: 32284\ncpu: 649790.8375665965 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_same_char_no_interactions/min_time:15.000",
            "value": 322790.97341830283,
            "unit": "ns/iter",
            "extra": "iterations: 65120\ncpu: 322691.13175675663 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_same_char_interactions/min_time:15.000",
            "value": 504595.80334969366,
            "unit": "ns/iter",
            "extra": "iterations: 41556\ncpu: 504545.44710751757 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_no_namespaces/min_time:15.000",
            "value": 692002.4590326101,
            "unit": "ns/iter",
            "extra": "iterations: 30329\ncpu: 691841.9070856277 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_diff_char_no_interactions/min_time:15.000",
            "value": 902975.6705152489,
            "unit": "ns/iter",
            "extra": "iterations: 23212\ncpu: 902875.8271583666 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_diff_char_interactions/min_time:15.000",
            "value": 2967945.3044948536,
            "unit": "ns/iter",
            "extra": "iterations: 7097\ncpu: 2967221.7979427907 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_same_char_no_interactions/min_time:15.000",
            "value": 719600.8446569014,
            "unit": "ns/iter",
            "extra": "iterations: 29496\ncpu: 719525.396663955 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_same_char_interactions/min_time:15.000",
            "value": 2260537.625291767,
            "unit": "ns/iter",
            "extra": "iterations: 9426\ncpu: 2259987.470825373 ns\nthreads: 1"
          },
          {
            "name": "benchmark_rcv1_dataset/simple/min_time:15.000",
            "value": 59738.20402127013,
            "unit": "ns/iter",
            "extra": "iterations: 349591\ncpu: 59732.651870328504 ns\nthreads: 1"
          },
          {
            "name": "benchmark_rcv1_dataset/quadratic/min_time:15.000",
            "value": 3283415.9187234472,
            "unit": "ns/iter",
            "extra": "iterations: 6361\ncpu: 3282588.570979399 ns\nthreads: 1"
          },
          {
            "name": "bench_cache_io_buf/120_string_fts",
            "value": 1265.617104893312,
            "unit": "ns/iter",
            "extra": "iterations: 3319097\ncpu: 1265.25847240981 ns\nthreads: 1"
          },
          {
            "name": "bench_text_io_buf/120_string_fts",
            "value": 8736.273753533409,
            "unit": "ns/iter",
            "extra": "iterations: 480739\ncpu: 8735.46831024736 ns\nthreads: 1"
          },
          {
            "name": "bench_cache_io_buf/120_num_fts",
            "value": 1051.9099568340027,
            "unit": "ns/iter",
            "extra": "iterations: 3992263\ncpu: 1051.8241909413334 ns\nthreads: 1"
          },
          {
            "name": "bench_text_io_buf/120_num_fts",
            "value": 6620.862975102661,
            "unit": "ns/iter",
            "extra": "iterations: 632469\ncpu: 6620.370326450806 ns\nthreads: 1"
          },
          {
            "name": "benchmark_example_reuse",
            "value": 925.5769428260336,
            "unit": "ns/iter",
            "extra": "iterations: 4549378\ncpu: 925.4999035032959 ns\nthreads: 1"
          },
          {
            "name": "benchmark_sum_ft_squared_char",
            "value": 61.21073516004309,
            "unit": "ns/iter",
            "extra": "iterations: 68713759\ncpu: 61.206491410257264 ns\nthreads: 1"
          },
          {
            "name": "benchmark_sum_ft_squared_extent",
            "value": 86.41075239475954,
            "unit": "ns/iter",
            "extra": "iterations: 48609097\ncpu: 86.40431440230212 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "griffinbassman@gmail.com",
            "name": "Griffin Bassman",
            "username": "bassmang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "befbd6674f31adceb15299f3f581f86ec6eabea2",
          "message": "ci: check model weights for gd-based tests for forward and backward compat (#4172)\n\n* ci: check model weights for gd-based tests\r\n\r\n* pytho lint\r\n\r\n* unkeep options\r\n\r\n* dirs\r\n\r\n* upload paths\r\n\r\n* address comments",
          "timestamp": "2022-10-04T14:39:45-04:00",
          "tree_id": "618ea9f209f5ddafb8352e87a1978a8f3a8492b5",
          "url": "https://github.com/VowpalWabbit/vowpal_wabbit/commit/befbd6674f31adceb15299f3f581f86ec6eabea2"
        },
        "date": 1664910014619,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bench_text/120_string_fts",
            "value": 5943.556442678041,
            "unit": "ns/iter",
            "extra": "iterations: 700392\ncpu: 5940.96520234383 ns\nthreads: 1"
          },
          {
            "name": "bench_text/120_num_fts",
            "value": 4121.591773446498,
            "unit": "ns/iter",
            "extra": "iterations: 1026724\ncpu: 4121.391922269277 ns\nthreads: 1"
          },
          {
            "name": "benchmark_learn_simple/8_features",
            "value": 69.2225753674439,
            "unit": "ns/iter",
            "extra": "iterations: 61165268\ncpu: 69.21981932622286 ns\nthreads: 1"
          },
          {
            "name": "benchmark_learn_simple/1_feature",
            "value": 160.0017815815918,
            "unit": "ns/iter",
            "extra": "iterations: 26503417\ncpu: 159.994030203728 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/few_features",
            "value": 6866.056729151899,
            "unit": "ns/iter",
            "extra": "iterations: 611132\ncpu: 6865.680245838868 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/many_features",
            "value": 12446.035238566765,
            "unit": "ns/iter",
            "extra": "iterations: 339486\ncpu: 12445.376539827854 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/few_features_no_predict",
            "value": 3313.3483968148107,
            "unit": "ns/iter",
            "extra": "iterations: 1270003\ncpu: 3313.1958743404534 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/many_features_no_predic",
            "value": 5098.447564805639,
            "unit": "ns/iter",
            "extra": "iterations: 827860\ncpu: 5098.195709419467 ns\nthreads: 1"
          },
          {
            "name": "benchmark_cb_adf_learn/few_features",
            "value": 1211.2996152922735,
            "unit": "ns/iter",
            "extra": "iterations: 3356314\ncpu: 1211.2451040039762 ns\nthreads: 1"
          },
          {
            "name": "benchmark_cb_adf_learn/many_features/min_time:15.000",
            "value": 54547.16305293449,
            "unit": "ns/iter",
            "extra": "iterations: 393130\ncpu: 54539.843563197916 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_no_namespaces/min_time:15.000",
            "value": 192252.76222424908,
            "unit": "ns/iter",
            "extra": "iterations: 110743\ncpu: 192242.96795282772 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_diff_char_no_interactions/min_time:15.000",
            "value": 220004.64589529976,
            "unit": "ns/iter",
            "extra": "iterations: 95147\ncpu: 219993.1232724101 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_diff_char_interactions/min_time:15.000",
            "value": 454961.5872328393,
            "unit": "ns/iter",
            "extra": "iterations: 45946\ncpu: 454938.42336656107 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_same_char_no_interactions/min_time:15.000",
            "value": 191150.89096501668,
            "unit": "ns/iter",
            "extra": "iterations: 108910\ncpu: 191126.7321641722 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_same_char_interactions/min_time:15.000",
            "value": 320933.4436454501,
            "unit": "ns/iter",
            "extra": "iterations: 65221\ncpu: 320890.4447953879 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_no_namespaces/min_time:15.000",
            "value": 530340.7781127323,
            "unit": "ns/iter",
            "extra": "iterations: 39475\ncpu: 530306.7941735275 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_diff_char_no_interactions/min_time:15.000",
            "value": 672061.644248301,
            "unit": "ns/iter",
            "extra": "iterations: 31269\ncpu: 671962.9537241353 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_diff_char_interactions/min_time:15.000",
            "value": 2099204.2946178378,
            "unit": "ns/iter",
            "extra": "iterations: 9996\ncpu: 2099093.517406964 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_same_char_no_interactions/min_time:15.000",
            "value": 544034.2747648181,
            "unit": "ns/iter",
            "extra": "iterations: 38906\ncpu: 543957.8522592917 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_same_char_interactions/min_time:15.000",
            "value": 1622676.936632899,
            "unit": "ns/iter",
            "extra": "iterations: 12830\ncpu: 1622590.5611847257 ns\nthreads: 1"
          },
          {
            "name": "benchmark_rcv1_dataset/simple/min_time:15.000",
            "value": 47363.54653726878,
            "unit": "ns/iter",
            "extra": "iterations: 442151\ncpu: 47361.79246456532 ns\nthreads: 1"
          },
          {
            "name": "benchmark_rcv1_dataset/quadratic/min_time:15.000",
            "value": 2177529.2272202997,
            "unit": "ns/iter",
            "extra": "iterations: 9537\ncpu: 2177199.3079584753 ns\nthreads: 1"
          },
          {
            "name": "bench_cache_io_buf/120_string_fts",
            "value": 898.5221812583584,
            "unit": "ns/iter",
            "extra": "iterations: 4672954\ncpu: 898.4853264123751 ns\nthreads: 1"
          },
          {
            "name": "bench_text_io_buf/120_string_fts",
            "value": 6996.810744082435,
            "unit": "ns/iter",
            "extra": "iterations: 600256\ncpu: 6996.465674645431 ns\nthreads: 1"
          },
          {
            "name": "bench_cache_io_buf/120_num_fts",
            "value": 688.9132950247802,
            "unit": "ns/iter",
            "extra": "iterations: 6109338\ncpu: 688.8854569840437 ns\nthreads: 1"
          },
          {
            "name": "bench_text_io_buf/120_num_fts",
            "value": 4691.777790686081,
            "unit": "ns/iter",
            "extra": "iterations: 895210\ncpu: 4691.592810625423 ns\nthreads: 1"
          },
          {
            "name": "benchmark_example_reuse",
            "value": 767.1411225188582,
            "unit": "ns/iter",
            "extra": "iterations: 5502304\ncpu: 767.1075789342036 ns\nthreads: 1"
          },
          {
            "name": "benchmark_sum_ft_squared_char",
            "value": 41.18596477820425,
            "unit": "ns/iter",
            "extra": "iterations: 102272071\ncpu: 41.184317075186726 ns\nthreads: 1"
          },
          {
            "name": "benchmark_sum_ft_squared_extent",
            "value": 54.18934099077354,
            "unit": "ns/iter",
            "extra": "iterations: 77628716\ncpu: 54.18738859470495 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "griffinbassman@gmail.com",
            "name": "Griffin Bassman",
            "username": "bassmang"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "befbd6674f31adceb15299f3f581f86ec6eabea2",
          "message": "ci: check model weights for gd-based tests for forward and backward compat (#4172)\n\n* ci: check model weights for gd-based tests\r\n\r\n* pytho lint\r\n\r\n* unkeep options\r\n\r\n* dirs\r\n\r\n* upload paths\r\n\r\n* address comments",
          "timestamp": "2022-10-04T14:39:45-04:00",
          "tree_id": "618ea9f209f5ddafb8352e87a1978a8f3a8492b5",
          "url": "https://github.com/VowpalWabbit/vowpal_wabbit/commit/befbd6674f31adceb15299f3f581f86ec6eabea2"
        },
        "date": 1664911229430,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkText.Benchmark(args: 120_num_features)",
            "value": 6434.21396108774,
            "unit": "ns",
            "range": "± 20.103881366843307"
          },
          {
            "name": "BenchmarkText.Benchmark(args: 120_string_fts)",
            "value": 9378.543090820312,
            "unit": "ns",
            "range": "± 24.422060586231186"
          },
          {
            "name": "BenchmarkLearnSimple.Benchmark(args: 1_feature)",
            "value": 660.5423545837402,
            "unit": "ns",
            "range": "± 3.4651769897038918"
          },
          {
            "name": "BenchmarkLearnSimple.Benchmark(args: 8_features)",
            "value": 552.727108001709,
            "unit": "ns",
            "range": "± 4.945756734431909"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_diff_char_interactions)",
            "value": 916719.4921875,
            "unit": "ns",
            "range": "± 3103.718426032815"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_diff_char_no_interactions)",
            "value": 525248.2356770834,
            "unit": "ns",
            "range": "± 1834.1968484094086"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_no_namespaces)",
            "value": 541102.8515625,
            "unit": "ns",
            "range": "± 2642.1213384441567"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_same_char_interactions)",
            "value": 910982.5260416666,
            "unit": "ns",
            "range": "± 2447.8186122870407"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_same_char_no_interactions)",
            "value": 554276.7447916666,
            "unit": "ns",
            "range": "± 2603.875827695249"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_diff_char_interactions)",
            "value": 3489410.6584821427,
            "unit": "ns",
            "range": "± 5296.229255892744"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_diff_char_no_interactions)",
            "value": 1071597.3407451923,
            "unit": "ns",
            "range": "± 1534.8182665460527"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_no_namespaces)",
            "value": 913576.2369791666,
            "unit": "ns",
            "range": "± 2343.6287853079534"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_same_char_interactions)",
            "value": 2849836.3020833335,
            "unit": "ns",
            "range": "± 11231.310557994597"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_same_char_no_interactions)",
            "value": 921135.0065104166,
            "unit": "ns",
            "range": "± 1359.4764693483994"
          },
          {
            "name": "BenchmarkCbAdfLearn.Benchmark(args: few_features)",
            "value": 3276.9007001604355,
            "unit": "ns",
            "range": "± 7.674328501705692"
          },
          {
            "name": "BenchmarkCcbAdfLearn.Benchmark(args: few_features)",
            "value": 11499.77783203125,
            "unit": "ns",
            "range": "± 14.950774974988413"
          },
          {
            "name": "BenchmarkCbAdfLearn.Benchmark(args: many_features)",
            "value": 108948.30403645833,
            "unit": "ns",
            "range": "± 333.74119363995686"
          },
          {
            "name": "BenchmarkCcbAdfLearn.Benchmark(args: many_features)",
            "value": 19559.344278971355,
            "unit": "ns",
            "range": "± 62.31289142543073"
          },
          {
            "name": "BenchmarkRCV1.Benchmark(args: quadratic)",
            "value": 4345319.0625,
            "unit": "ns",
            "range": "± 37956.82550591852"
          },
          {
            "name": "BenchmarkRCV1.Benchmark(args: simple)",
            "value": 212935.67068917412,
            "unit": "ns",
            "range": "± 1158.3339292176852"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jackgerrits@users.noreply.github.com",
            "name": "Jack Gerrits",
            "username": "jackgerrits"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a6eb7a1518005fbfe929359ef73784775eedb0d5",
          "message": "style: resolve style issues in allreduce project (#4187)",
          "timestamp": "2022-10-05T12:02:57-04:00",
          "tree_id": "4846f1caa404468564ca899189683dc5ec901c01",
          "url": "https://github.com/VowpalWabbit/vowpal_wabbit/commit/a6eb7a1518005fbfe929359ef73784775eedb0d5"
        },
        "date": 1664987585311,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bench_text/120_string_fts",
            "value": 7268.485547578826,
            "unit": "ns/iter",
            "extra": "iterations: 572776\ncpu: 7267.629754039973 ns\nthreads: 1"
          },
          {
            "name": "bench_text/120_num_fts",
            "value": 5757.34713889385,
            "unit": "ns/iter",
            "extra": "iterations: 738543\ncpu: 5756.821742268221 ns\nthreads: 1"
          },
          {
            "name": "benchmark_learn_simple/8_features",
            "value": 88.43264893503115,
            "unit": "ns/iter",
            "extra": "iterations: 47261027\ncpu: 88.3603460415704 ns\nthreads: 1"
          },
          {
            "name": "benchmark_learn_simple/1_feature",
            "value": 195.50935604952747,
            "unit": "ns/iter",
            "extra": "iterations: 21780293\ncpu: 195.4911028974679 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/few_features",
            "value": 8246.44229717618,
            "unit": "ns/iter",
            "extra": "iterations: 504724\ncpu: 8244.321847187768 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/many_features",
            "value": 14786.909916384011,
            "unit": "ns/iter",
            "extra": "iterations: 282482\ncpu: 14785.183480717353 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/few_features_no_predict",
            "value": 3926.1679705653723,
            "unit": "ns/iter",
            "extra": "iterations: 1093132\ncpu: 3923.8109395754605 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/many_features_no_predic",
            "value": 5921.712222271253,
            "unit": "ns/iter",
            "extra": "iterations: 702709\ncpu: 5921.107456998556 ns\nthreads: 1"
          },
          {
            "name": "benchmark_cb_adf_learn/few_features",
            "value": 1442.8844839584583,
            "unit": "ns/iter",
            "extra": "iterations: 2942864\ncpu: 1442.7389441034309 ns\nthreads: 1"
          },
          {
            "name": "benchmark_cb_adf_learn/many_features/min_time:15.000",
            "value": 74479.47096650743,
            "unit": "ns/iter",
            "extra": "iterations: 282243\ncpu: 74471.87211020292 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_no_namespaces/min_time:15.000",
            "value": 328457.1725513315,
            "unit": "ns/iter",
            "extra": "iterations: 64433\ncpu: 328378.444275449 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_diff_char_no_interactions/min_time:15.000",
            "value": 361530.25626419496,
            "unit": "ns/iter",
            "extra": "iterations: 58108\ncpu: 361459.1398774697 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_diff_char_interactions/min_time:15.000",
            "value": 657892.511527199,
            "unit": "ns/iter",
            "extra": "iterations: 32098\ncpu: 657819.826780485 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_same_char_no_interactions/min_time:15.000",
            "value": 330429.6881850229,
            "unit": "ns/iter",
            "extra": "iterations: 63775\ncpu: 330393.9098392788 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_same_char_interactions/min_time:15.000",
            "value": 512027.4003910551,
            "unit": "ns/iter",
            "extra": "iterations: 40915\ncpu: 511971.9491628987 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_no_namespaces/min_time:15.000",
            "value": 694911.6196300697,
            "unit": "ns/iter",
            "extra": "iterations: 30168\ncpu: 694752.6617608061 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_diff_char_no_interactions/min_time:15.000",
            "value": 898535.3804463797,
            "unit": "ns/iter",
            "extra": "iterations: 23433\ncpu: 898434.1484231644 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_diff_char_interactions/min_time:15.000",
            "value": 2874586.1858839723,
            "unit": "ns/iter",
            "extra": "iterations: 7155\ncpu: 2873179.245283025 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_same_char_no_interactions/min_time:15.000",
            "value": 687533.802287372,
            "unit": "ns/iter",
            "extra": "iterations: 31040\ncpu: 687290.5927835057 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_same_char_interactions/min_time:15.000",
            "value": 2056473.7942985506,
            "unit": "ns/iter",
            "extra": "iterations: 10243\ncpu: 2056003.1924240934 ns\nthreads: 1"
          },
          {
            "name": "benchmark_rcv1_dataset/simple/min_time:15.000",
            "value": 56254.05652286636,
            "unit": "ns/iter",
            "extra": "iterations: 378024\ncpu: 56248.92546504985 ns\nthreads: 1"
          },
          {
            "name": "benchmark_rcv1_dataset/quadratic/min_time:15.000",
            "value": 3248804.657943915,
            "unit": "ns/iter",
            "extra": "iterations: 6420\ncpu: 3247904.8753894065 ns\nthreads: 1"
          },
          {
            "name": "bench_cache_io_buf/120_string_fts",
            "value": 1242.6747675256981,
            "unit": "ns/iter",
            "extra": "iterations: 3369190\ncpu: 1242.5759603940337 ns\nthreads: 1"
          },
          {
            "name": "bench_text_io_buf/120_string_fts",
            "value": 8564.499298193248,
            "unit": "ns/iter",
            "extra": "iterations: 484464\ncpu: 8563.826414346622 ns\nthreads: 1"
          },
          {
            "name": "bench_cache_io_buf/120_num_fts",
            "value": 1033.5242423493987,
            "unit": "ns/iter",
            "extra": "iterations: 4050680\ncpu: 1033.440582815724 ns\nthreads: 1"
          },
          {
            "name": "bench_text_io_buf/120_num_fts",
            "value": 6485.975904562888,
            "unit": "ns/iter",
            "extra": "iterations: 648048\ncpu: 6485.384107350113 ns\nthreads: 1"
          },
          {
            "name": "benchmark_example_reuse",
            "value": 904.950279937502,
            "unit": "ns/iter",
            "extra": "iterations: 4597098\ncpu: 904.8757063695452 ns\nthreads: 1"
          },
          {
            "name": "benchmark_sum_ft_squared_char",
            "value": 61.36369518979462,
            "unit": "ns/iter",
            "extra": "iterations: 70452576\ncpu: 61.35872448439622 ns\nthreads: 1"
          },
          {
            "name": "benchmark_sum_ft_squared_extent",
            "value": 85.21996963297765,
            "unit": "ns/iter",
            "extra": "iterations: 48984716\ncpu: 85.21405125631402 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jackgerrits@users.noreply.github.com",
            "name": "Jack Gerrits",
            "username": "jackgerrits"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a6eb7a1518005fbfe929359ef73784775eedb0d5",
          "message": "style: resolve style issues in allreduce project (#4187)",
          "timestamp": "2022-10-05T12:02:57-04:00",
          "tree_id": "4846f1caa404468564ca899189683dc5ec901c01",
          "url": "https://github.com/VowpalWabbit/vowpal_wabbit/commit/a6eb7a1518005fbfe929359ef73784775eedb0d5"
        },
        "date": 1664988605302,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkText.Benchmark(args: 120_num_features)",
            "value": 6548.132148155799,
            "unit": "ns",
            "range": "± 23.404743646527535"
          },
          {
            "name": "BenchmarkText.Benchmark(args: 120_string_fts)",
            "value": 10282.885335286459,
            "unit": "ns",
            "range": "± 51.52096950565708"
          },
          {
            "name": "BenchmarkLearnSimple.Benchmark(args: 1_feature)",
            "value": 675.3321520487467,
            "unit": "ns",
            "range": "± 2.3883673246171853"
          },
          {
            "name": "BenchmarkLearnSimple.Benchmark(args: 8_features)",
            "value": 595.2848307291666,
            "unit": "ns",
            "range": "± 2.729084467291612"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_diff_char_interactions)",
            "value": 914391.2760416666,
            "unit": "ns",
            "range": "± 4209.216291468806"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_diff_char_no_interactions)",
            "value": 573590.2018229166,
            "unit": "ns",
            "range": "± 3057.733772516154"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_no_namespaces)",
            "value": 567925.2408854166,
            "unit": "ns",
            "range": "± 3300.060303221013"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_same_char_interactions)",
            "value": 914311.4518229166,
            "unit": "ns",
            "range": "± 2974.645811400645"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_same_char_no_interactions)",
            "value": 576020.4622395834,
            "unit": "ns",
            "range": "± 4383.59242397916"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_diff_char_interactions)",
            "value": 3536917.8850446427,
            "unit": "ns",
            "range": "± 6564.906784198728"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_diff_char_no_interactions)",
            "value": 1107609.8214285714,
            "unit": "ns",
            "range": "± 5864.729815982196"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_no_namespaces)",
            "value": 925329.4503348215,
            "unit": "ns",
            "range": "± 2203.9332521333163"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_same_char_interactions)",
            "value": 2828383.8541666665,
            "unit": "ns",
            "range": "± 7776.532999939712"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_same_char_no_interactions)",
            "value": 958808.4505208334,
            "unit": "ns",
            "range": "± 4701.6960043396"
          },
          {
            "name": "BenchmarkCbAdfLearn.Benchmark(args: few_features)",
            "value": 3308.482233683268,
            "unit": "ns",
            "range": "± 9.718468308491612"
          },
          {
            "name": "BenchmarkCcbAdfLearn.Benchmark(args: few_features)",
            "value": 11573.844604492188,
            "unit": "ns",
            "range": "± 32.42860927769922"
          },
          {
            "name": "BenchmarkCbAdfLearn.Benchmark(args: many_features)",
            "value": 110109.69563802083,
            "unit": "ns",
            "range": "± 369.2384919819246"
          },
          {
            "name": "BenchmarkCcbAdfLearn.Benchmark(args: many_features)",
            "value": 19096.664428710938,
            "unit": "ns",
            "range": "± 46.08806581986807"
          },
          {
            "name": "BenchmarkRCV1.Benchmark(args: quadratic)",
            "value": 4240019.479166667,
            "unit": "ns",
            "range": "± 43406.63024048214"
          },
          {
            "name": "BenchmarkRCV1.Benchmark(args: simple)",
            "value": 216814.24479166666,
            "unit": "ns",
            "range": "± 669.2078032387736"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jackgerrits@users.noreply.github.com",
            "name": "Jack Gerrits",
            "username": "jackgerrits"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a57cf4feeac429e255c2b0a964f8a3b5ff6d5ab",
          "message": "refactor: cleanup includes (#4188)\n\n* refactor: cleanup includes\r\n\r\n* Update CMakeLists.txt\r\n\r\n* Update conditional_contextual_bandit.h",
          "timestamp": "2022-10-05T14:17:51-04:00",
          "tree_id": "3b50d97d08312c2285cf04c38dc29eae1c024a08",
          "url": "https://github.com/VowpalWabbit/vowpal_wabbit/commit/5a57cf4feeac429e255c2b0a964f8a3b5ff6d5ab"
        },
        "date": 1664995054332,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bench_text/120_string_fts",
            "value": 6223.449529401714,
            "unit": "ns/iter",
            "extra": "iterations: 668617\ncpu: 6223.127141547403 ns\nthreads: 1"
          },
          {
            "name": "bench_text/120_num_fts",
            "value": 5005.563798173401,
            "unit": "ns/iter",
            "extra": "iterations: 835886\ncpu: 5005.27284821136 ns\nthreads: 1"
          },
          {
            "name": "benchmark_learn_simple/8_features",
            "value": 73.03537257998184,
            "unit": "ns/iter",
            "extra": "iterations: 58008350\ncpu: 73.03136531206282 ns\nthreads: 1"
          },
          {
            "name": "benchmark_learn_simple/1_feature",
            "value": 165.90092239074792,
            "unit": "ns/iter",
            "extra": "iterations: 25155391\ncpu: 165.8917128340402 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/few_features",
            "value": 7008.8403068958905,
            "unit": "ns/iter",
            "extra": "iterations: 598379\ncpu: 7008.187453102463 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/many_features",
            "value": 12624.20358947616,
            "unit": "ns/iter",
            "extra": "iterations: 331859\ncpu: 12623.18002525168 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/few_features_no_predict",
            "value": 3375.0923444843424,
            "unit": "ns/iter",
            "extra": "iterations: 1228108\ncpu: 3374.915561172145 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/many_features_no_predic",
            "value": 5111.233915626558,
            "unit": "ns/iter",
            "extra": "iterations: 810989\ncpu: 5110.959211530605 ns\nthreads: 1"
          },
          {
            "name": "benchmark_cb_adf_learn/few_features",
            "value": 1204.752870398071,
            "unit": "ns/iter",
            "extra": "iterations: 3527995\ncpu: 1204.7027277533002 ns\nthreads: 1"
          },
          {
            "name": "benchmark_cb_adf_learn/many_features/min_time:15.000",
            "value": 57864.06088053801,
            "unit": "ns/iter",
            "extra": "iterations: 360575\ncpu: 57860.20467309158 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_no_namespaces/min_time:15.000",
            "value": 279729.79383301095,
            "unit": "ns/iter",
            "extra": "iterations: 74915\ncpu: 279709.58152572904 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_diff_char_no_interactions/min_time:15.000",
            "value": 318541.23166281485,
            "unit": "ns/iter",
            "extra": "iterations: 65768\ncpu: 318516.55820459785 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_diff_char_interactions/min_time:15.000",
            "value": 559945.3164032404,
            "unit": "ns/iter",
            "extra": "iterations: 37645\ncpu: 559904.5264975423 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_same_char_no_interactions/min_time:15.000",
            "value": 290313.0610013027,
            "unit": "ns/iter",
            "extra": "iterations: 72146\ncpu: 290291.9177778392 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_same_char_interactions/min_time:15.000",
            "value": 432776.30364975554,
            "unit": "ns/iter",
            "extra": "iterations: 48332\ncpu: 432743.4494744678 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_no_namespaces/min_time:15.000",
            "value": 599620.6089272855,
            "unit": "ns/iter",
            "extra": "iterations: 34725\ncpu: 599568.7717782572 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_diff_char_no_interactions/min_time:15.000",
            "value": 780616.6313782135,
            "unit": "ns/iter",
            "extra": "iterations: 27006\ncpu: 780554.3064504177 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_diff_char_interactions/min_time:15.000",
            "value": 2462491.014991287,
            "unit": "ns/iter",
            "extra": "iterations: 8605\ncpu: 2462275.4677513116 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_same_char_no_interactions/min_time:15.000",
            "value": 626377.2760070185,
            "unit": "ns/iter",
            "extra": "iterations: 33068\ncpu: 626317.7210596356 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_same_char_interactions/min_time:15.000",
            "value": 1664496.7207751719,
            "unit": "ns/iter",
            "extra": "iterations: 11249\ncpu: 1664153.8803449222 ns\nthreads: 1"
          },
          {
            "name": "benchmark_rcv1_dataset/simple/min_time:15.000",
            "value": 46172.09553298538,
            "unit": "ns/iter",
            "extra": "iterations: 449562\ncpu: 46169.14952776257 ns\nthreads: 1"
          },
          {
            "name": "benchmark_rcv1_dataset/quadratic/min_time:15.000",
            "value": 2603406.784271922,
            "unit": "ns/iter",
            "extra": "iterations: 7973\ncpu: 2603240.9130816553 ns\nthreads: 1"
          },
          {
            "name": "bench_cache_io_buf/120_string_fts",
            "value": 990.3061257709977,
            "unit": "ns/iter",
            "extra": "iterations: 4238895\ncpu: 990.2559983203115 ns\nthreads: 1"
          },
          {
            "name": "bench_text_io_buf/120_string_fts",
            "value": 7302.629075940707,
            "unit": "ns/iter",
            "extra": "iterations: 575266\ncpu: 7302.262953138118 ns\nthreads: 1"
          },
          {
            "name": "bench_cache_io_buf/120_num_fts",
            "value": 808.6818127011904,
            "unit": "ns/iter",
            "extra": "iterations: 5191854\ncpu: 808.641248386408 ns\nthreads: 1"
          },
          {
            "name": "bench_text_io_buf/120_num_fts",
            "value": 5598.535226823639,
            "unit": "ns/iter",
            "extra": "iterations: 741523\ncpu: 5598.20976557702 ns\nthreads: 1"
          },
          {
            "name": "benchmark_example_reuse",
            "value": 773.4884190466685,
            "unit": "ns/iter",
            "extra": "iterations: 5434354\ncpu: 773.4457122226472 ns\nthreads: 1"
          },
          {
            "name": "benchmark_sum_ft_squared_char",
            "value": 51.25069464424433,
            "unit": "ns/iter",
            "extra": "iterations: 82064669\ncpu: 51.24793959748978 ns\nthreads: 1"
          },
          {
            "name": "benchmark_sum_ft_squared_extent",
            "value": 73.18745769258395,
            "unit": "ns/iter",
            "extra": "iterations: 57408671\ncpu: 73.1833071000722 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jackgerrits@users.noreply.github.com",
            "name": "Jack Gerrits",
            "username": "jackgerrits"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a57cf4feeac429e255c2b0a964f8a3b5ff6d5ab",
          "message": "refactor: cleanup includes (#4188)\n\n* refactor: cleanup includes\r\n\r\n* Update CMakeLists.txt\r\n\r\n* Update conditional_contextual_bandit.h",
          "timestamp": "2022-10-05T14:17:51-04:00",
          "tree_id": "3b50d97d08312c2285cf04c38dc29eae1c024a08",
          "url": "https://github.com/VowpalWabbit/vowpal_wabbit/commit/5a57cf4feeac429e255c2b0a964f8a3b5ff6d5ab"
        },
        "date": 1664996773944,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkText.Benchmark(args: 120_num_features)",
            "value": 6399.679674421038,
            "unit": "ns",
            "range": "± 43.00702539488709"
          },
          {
            "name": "BenchmarkText.Benchmark(args: 120_string_fts)",
            "value": 9212.284240722656,
            "unit": "ns",
            "range": "± 43.75605919387233"
          },
          {
            "name": "BenchmarkLearnSimple.Benchmark(args: 1_feature)",
            "value": 633.381290435791,
            "unit": "ns",
            "range": "± 3.552076186310146"
          },
          {
            "name": "BenchmarkLearnSimple.Benchmark(args: 8_features)",
            "value": 539.3716049194336,
            "unit": "ns",
            "range": "± 4.65874166621139"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_diff_char_interactions)",
            "value": 881096.30859375,
            "unit": "ns",
            "range": "± 6581.221464615615"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_diff_char_no_interactions)",
            "value": 567186.7154947916,
            "unit": "ns",
            "range": "± 8109.805476341058"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_no_namespaces)",
            "value": 543356.328125,
            "unit": "ns",
            "range": "± 3588.5234151891896"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_same_char_interactions)",
            "value": 872922.36328125,
            "unit": "ns",
            "range": "± 3884.4773982599995"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_same_char_no_interactions)",
            "value": 545186.7815290178,
            "unit": "ns",
            "range": "± 3780.761380569831"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_diff_char_interactions)",
            "value": 3473257.4739583335,
            "unit": "ns",
            "range": "± 12576.573999096321"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_diff_char_no_interactions)",
            "value": 1054970.3645833333,
            "unit": "ns",
            "range": "± 6524.132218084654"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_no_namespaces)",
            "value": 890047.6106770834,
            "unit": "ns",
            "range": "± 4525.778498573072"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_same_char_interactions)",
            "value": 2861885.4631696427,
            "unit": "ns",
            "range": "± 9884.962690778591"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_same_char_no_interactions)",
            "value": 910605.21484375,
            "unit": "ns",
            "range": "± 4170.348594283505"
          },
          {
            "name": "BenchmarkCbAdfLearn.Benchmark(args: few_features)",
            "value": 3212.6551491873606,
            "unit": "ns",
            "range": "± 12.360214000298482"
          },
          {
            "name": "BenchmarkCcbAdfLearn.Benchmark(args: few_features)",
            "value": 11296.077728271484,
            "unit": "ns",
            "range": "± 28.214360569320615"
          },
          {
            "name": "BenchmarkCbAdfLearn.Benchmark(args: many_features)",
            "value": 108359.11865234375,
            "unit": "ns",
            "range": "± 334.52848820287613"
          },
          {
            "name": "BenchmarkCcbAdfLearn.Benchmark(args: many_features)",
            "value": 19196.64786202567,
            "unit": "ns",
            "range": "± 50.529157802078124"
          },
          {
            "name": "BenchmarkRCV1.Benchmark(args: quadratic)",
            "value": 4192081.25,
            "unit": "ns",
            "range": "± 33056.56129283317"
          },
          {
            "name": "BenchmarkRCV1.Benchmark(args: simple)",
            "value": 212408.65234375,
            "unit": "ns",
            "range": "± 1182.353323135203"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jackgerrits@users.noreply.github.com",
            "name": "Jack Gerrits",
            "username": "jackgerrits"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b951064228bba9218a2e63e67c02242dedf0e7f",
          "message": "refactor: split sparse and dense parameters (#4190)",
          "timestamp": "2022-10-05T16:29:30-04:00",
          "tree_id": "bb84f25fdde9cec76cbcdaba7961bd0e993b85b0",
          "url": "https://github.com/VowpalWabbit/vowpal_wabbit/commit/0b951064228bba9218a2e63e67c02242dedf0e7f"
        },
        "date": 1665003296382,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bench_text/120_string_fts",
            "value": 7284.816767948395,
            "unit": "ns/iter",
            "extra": "iterations: 592571\ncpu: 7278.304371965553 ns\nthreads: 1"
          },
          {
            "name": "bench_text/120_num_fts",
            "value": 5058.2794654548925,
            "unit": "ns/iter",
            "extra": "iterations: 820062\ncpu: 5057.444071301927 ns\nthreads: 1"
          },
          {
            "name": "benchmark_learn_simple/8_features",
            "value": 88.87697845673394,
            "unit": "ns/iter",
            "extra": "iterations: 48612827\ncpu: 88.86040509431798 ns\nthreads: 1"
          },
          {
            "name": "benchmark_learn_simple/1_feature",
            "value": 198.3527765909931,
            "unit": "ns/iter",
            "extra": "iterations: 21318084\ncpu: 198.30101523195054 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/few_features",
            "value": 8626.240919752041,
            "unit": "ns/iter",
            "extra": "iterations: 488175\ncpu: 8624.852972806888 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/many_features",
            "value": 16010.351725158815,
            "unit": "ns/iter",
            "extra": "iterations: 263396\ncpu: 16008.325866755751 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/few_features_no_predict",
            "value": 4201.609602533067,
            "unit": "ns/iter",
            "extra": "iterations: 1039684\ncpu: 4201.078981690594 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/many_features_no_predic",
            "value": 6510.067505912391,
            "unit": "ns/iter",
            "extra": "iterations: 644388\ncpu: 6509.242723328185 ns\nthreads: 1"
          },
          {
            "name": "benchmark_cb_adf_learn/few_features",
            "value": 1531.1985088868885,
            "unit": "ns/iter",
            "extra": "iterations: 2694363\ncpu: 1531.0426620318044 ns\nthreads: 1"
          },
          {
            "name": "benchmark_cb_adf_learn/many_features/min_time:15.000",
            "value": 96938.5695804649,
            "unit": "ns/iter",
            "extra": "iterations: 217288\ncpu: 96926.71799639192 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_no_namespaces/min_time:15.000",
            "value": 373219.13990998286,
            "unit": "ns/iter",
            "extra": "iterations: 54435\ncpu: 373173.96160558466 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_diff_char_no_interactions/min_time:15.000",
            "value": 391277.337129962,
            "unit": "ns/iter",
            "extra": "iterations: 54961\ncpu: 391227.9743818344 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_diff_char_interactions/min_time:15.000",
            "value": 679904.9566993145,
            "unit": "ns/iter",
            "extra": "iterations: 31339\ncpu: 679824.7391429207 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_same_char_no_interactions/min_time:15.000",
            "value": 362572.1394850881,
            "unit": "ns/iter",
            "extra": "iterations: 57913\ncpu: 362526.16165627755 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_same_char_interactions/min_time:15.000",
            "value": 562170.8716221625,
            "unit": "ns/iter",
            "extra": "iterations: 37561\ncpu: 562109.730837837 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_no_namespaces/min_time:15.000",
            "value": 787125.991414282,
            "unit": "ns/iter",
            "extra": "iterations: 25391\ncpu: 787018.5026190393 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_diff_char_no_interactions/min_time:15.000",
            "value": 942971.9731404034,
            "unit": "ns/iter",
            "extra": "iterations: 22599\ncpu: 942874.3174476733 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_diff_char_interactions/min_time:15.000",
            "value": 3148188.022958437,
            "unit": "ns/iter",
            "extra": "iterations: 6882\ncpu: 3147845.5826794486 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_same_char_no_interactions/min_time:15.000",
            "value": 756927.4243037227,
            "unit": "ns/iter",
            "extra": "iterations: 27683\ncpu: 756844.2220857564 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_same_char_interactions/min_time:15.000",
            "value": 2388576.6818077066,
            "unit": "ns/iter",
            "extra": "iterations: 8674\ncpu: 2388301.8100069175 ns\nthreads: 1"
          },
          {
            "name": "benchmark_rcv1_dataset/simple/min_time:15.000",
            "value": 84424.62840662294,
            "unit": "ns/iter",
            "extra": "iterations: 251899\ncpu: 84415.54432530509 ns\nthreads: 1"
          },
          {
            "name": "benchmark_rcv1_dataset/quadratic/min_time:15.000",
            "value": 3102401.4146852107,
            "unit": "ns/iter",
            "extra": "iterations: 6687\ncpu: 3102097.1437116726 ns\nthreads: 1"
          },
          {
            "name": "bench_cache_io_buf/120_string_fts",
            "value": 1171.546013370208,
            "unit": "ns/iter",
            "extra": "iterations: 3551935\ncpu: 1171.4286438237154 ns\nthreads: 1"
          },
          {
            "name": "bench_text_io_buf/120_string_fts",
            "value": 8471.261670057906,
            "unit": "ns/iter",
            "extra": "iterations: 487037\ncpu: 8470.294248691625 ns\nthreads: 1"
          },
          {
            "name": "bench_cache_io_buf/120_num_fts",
            "value": 873.0811848623032,
            "unit": "ns/iter",
            "extra": "iterations: 4812880\ncpu: 872.9969373846894 ns\nthreads: 1"
          },
          {
            "name": "bench_text_io_buf/120_num_fts",
            "value": 5654.040395022071,
            "unit": "ns/iter",
            "extra": "iterations: 698898\ncpu: 5653.237954608586 ns\nthreads: 1"
          },
          {
            "name": "benchmark_example_reuse",
            "value": 1016.9536826858752,
            "unit": "ns/iter",
            "extra": "iterations: 4119086\ncpu: 1016.8002318961109 ns\nthreads: 1"
          },
          {
            "name": "benchmark_sum_ft_squared_char",
            "value": 53.90368281423205,
            "unit": "ns/iter",
            "extra": "iterations: 77131884\ncpu: 53.89913722320109 ns\nthreads: 1"
          },
          {
            "name": "benchmark_sum_ft_squared_extent",
            "value": 80.42359467121409,
            "unit": "ns/iter",
            "extra": "iterations: 54858497\ncpu: 80.4150157449637 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jackgerrits@users.noreply.github.com",
            "name": "Jack Gerrits",
            "username": "jackgerrits"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b951064228bba9218a2e63e67c02242dedf0e7f",
          "message": "refactor: split sparse and dense parameters (#4190)",
          "timestamp": "2022-10-05T16:29:30-04:00",
          "tree_id": "bb84f25fdde9cec76cbcdaba7961bd0e993b85b0",
          "url": "https://github.com/VowpalWabbit/vowpal_wabbit/commit/0b951064228bba9218a2e63e67c02242dedf0e7f"
        },
        "date": 1665004714035,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkText.Benchmark(args: 120_num_features)",
            "value": 6079.863085065569,
            "unit": "ns",
            "range": "± 28.13581548982908"
          },
          {
            "name": "BenchmarkText.Benchmark(args: 120_string_fts)",
            "value": 9518.885192871094,
            "unit": "ns",
            "range": "± 58.76971727551046"
          },
          {
            "name": "BenchmarkLearnSimple.Benchmark(args: 1_feature)",
            "value": 591.8783315022787,
            "unit": "ns",
            "range": "± 5.949495153582872"
          },
          {
            "name": "BenchmarkLearnSimple.Benchmark(args: 8_features)",
            "value": 487.8601328531901,
            "unit": "ns",
            "range": "± 3.3576921475402735"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_diff_char_interactions)",
            "value": 906354.4205729166,
            "unit": "ns",
            "range": "± 1815.2331634404547"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_diff_char_no_interactions)",
            "value": 557064.0625,
            "unit": "ns",
            "range": "± 1213.0097850535763"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_no_namespaces)",
            "value": 558515.9895833334,
            "unit": "ns",
            "range": "± 1071.234718430383"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_same_char_interactions)",
            "value": 902753.6002604166,
            "unit": "ns",
            "range": "± 2423.6631477915967"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_same_char_no_interactions)",
            "value": 556033.076171875,
            "unit": "ns",
            "range": "± 1276.7577256403765"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_diff_char_interactions)",
            "value": 3431028.7630208335,
            "unit": "ns",
            "range": "± 9670.061960974705"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_diff_char_no_interactions)",
            "value": 1117504.2578125,
            "unit": "ns",
            "range": "± 2879.1445952079403"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_no_namespaces)",
            "value": 908803.2552083334,
            "unit": "ns",
            "range": "± 1482.7441003970291"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_same_char_interactions)",
            "value": 2788988.2552083335,
            "unit": "ns",
            "range": "± 8385.439762323544"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_same_char_no_interactions)",
            "value": 931162.2200520834,
            "unit": "ns",
            "range": "± 2092.7868440719644"
          },
          {
            "name": "BenchmarkCbAdfLearn.Benchmark(args: few_features)",
            "value": 3238.983799861028,
            "unit": "ns",
            "range": "± 8.500409028629788"
          },
          {
            "name": "BenchmarkCcbAdfLearn.Benchmark(args: few_features)",
            "value": 11380.939737955729,
            "unit": "ns",
            "range": "± 38.339210298244616"
          },
          {
            "name": "BenchmarkCbAdfLearn.Benchmark(args: many_features)",
            "value": 109189.267578125,
            "unit": "ns",
            "range": "± 223.9490238728255"
          },
          {
            "name": "BenchmarkCcbAdfLearn.Benchmark(args: many_features)",
            "value": 22865.355834960938,
            "unit": "ns",
            "range": "± 54.52010595374669"
          },
          {
            "name": "BenchmarkRCV1.Benchmark(args: quadratic)",
            "value": 4196724.322916667,
            "unit": "ns",
            "range": "± 8833.77255388176"
          },
          {
            "name": "BenchmarkRCV1.Benchmark(args: simple)",
            "value": 190006.39973958334,
            "unit": "ns",
            "range": "± 794.673088664096"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jackgerrits@users.noreply.github.com",
            "name": "Jack Gerrits",
            "username": "jackgerrits"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "14a7c81e6250ff50c269c393302a418a761d71ee",
          "message": "refactor: move open_socket into details namespace (#4189)",
          "timestamp": "2022-10-05T17:22:47-04:00",
          "tree_id": "2926c5e4bbee53503bd91b20c8be1984f893ff62",
          "url": "https://github.com/VowpalWabbit/vowpal_wabbit/commit/14a7c81e6250ff50c269c393302a418a761d71ee"
        },
        "date": 1665006357026,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "bench_text/120_string_fts",
            "value": 7282.4546984344115,
            "unit": "ns/iter",
            "extra": "iterations: 580587\ncpu: 7281.211256883119 ns\nthreads: 1"
          },
          {
            "name": "bench_text/120_num_fts",
            "value": 5437.837350249728,
            "unit": "ns/iter",
            "extra": "iterations: 756343\ncpu: 5436.618306773515 ns\nthreads: 1"
          },
          {
            "name": "benchmark_learn_simple/8_features",
            "value": 87.72937377039825,
            "unit": "ns/iter",
            "extra": "iterations: 44348750\ncpu: 87.71580258744608 ns\nthreads: 1"
          },
          {
            "name": "benchmark_learn_simple/1_feature",
            "value": 200.55415199766225,
            "unit": "ns/iter",
            "extra": "iterations: 20981599\ncpu: 200.52479794318816 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/few_features",
            "value": 8323.064670821619,
            "unit": "ns/iter",
            "extra": "iterations: 506519\ncpu: 8318.719929558418 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/many_features",
            "value": 14752.589434821017,
            "unit": "ns/iter",
            "extra": "iterations: 285750\ncpu: 14745.948556430436 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/few_features_no_predict",
            "value": 3898.5762637401967,
            "unit": "ns/iter",
            "extra": "iterations: 1099415\ncpu: 3897.808925655915 ns\nthreads: 1"
          },
          {
            "name": "benchmark_ccb_adf_learn/many_features_no_predic",
            "value": 5813.735678189157,
            "unit": "ns/iter",
            "extra": "iterations: 732554\ncpu: 5812.642617472569 ns\nthreads: 1"
          },
          {
            "name": "benchmark_cb_adf_learn/few_features",
            "value": 1396.1607506468533,
            "unit": "ns/iter",
            "extra": "iterations: 2964803\ncpu: 1395.9207407709716 ns\nthreads: 1"
          },
          {
            "name": "benchmark_cb_adf_learn/many_features/min_time:15.000",
            "value": 74108.45708387936,
            "unit": "ns/iter",
            "extra": "iterations: 287759\ncpu: 74083.66966802078 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_no_namespaces/min_time:15.000",
            "value": 328809.1275642295,
            "unit": "ns/iter",
            "extra": "iterations: 64493\ncpu: 328740.5454855566 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_diff_char_no_interactions/min_time:15.000",
            "value": 359872.3363153398,
            "unit": "ns/iter",
            "extra": "iterations: 57791\ncpu: 359799.4653146685 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_diff_char_interactions/min_time:15.000",
            "value": 644097.200160026,
            "unit": "ns/iter",
            "extra": "iterations: 32494\ncpu: 643885.2311195907 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_same_char_no_interactions/min_time:15.000",
            "value": 327883.78223088867,
            "unit": "ns/iter",
            "extra": "iterations: 64100\ncpu: 327818.89079563157 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/cb_adf_same_char_interactions/min_time:15.000",
            "value": 506821.96828450967,
            "unit": "ns/iter",
            "extra": "iterations: 42093\ncpu: 506653.1109685697 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_no_namespaces/min_time:15.000",
            "value": 685913.1083748672,
            "unit": "ns/iter",
            "extra": "iterations: 30496\ncpu: 685767.7105194123 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_diff_char_no_interactions/min_time:15.000",
            "value": 887786.015915346,
            "unit": "ns/iter",
            "extra": "iterations: 23625\ncpu: 887465.0243386242 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_diff_char_interactions/min_time:15.000",
            "value": 2843884.27051712,
            "unit": "ns/iter",
            "extra": "iterations: 7445\ncpu: 2843279.610476832 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_same_char_no_interactions/min_time:15.000",
            "value": 718625.4906681268,
            "unit": "ns/iter",
            "extra": "iterations: 29201\ncpu: 718387.9079483582 ns\nthreads: 1"
          },
          {
            "name": "benchmark_multi/ccb_adf_same_char_interactions/min_time:15.000",
            "value": 2212126.541802175,
            "unit": "ns/iter",
            "extra": "iterations: 9533\ncpu: 2211647.6450225543 ns\nthreads: 1"
          },
          {
            "name": "benchmark_rcv1_dataset/simple/min_time:15.000",
            "value": 58994.21732127187,
            "unit": "ns/iter",
            "extra": "iterations: 355736\ncpu: 58983.24797040497 ns\nthreads: 1"
          },
          {
            "name": "benchmark_rcv1_dataset/quadratic/min_time:15.000",
            "value": 3336511.3681407515,
            "unit": "ns/iter",
            "extra": "iterations: 6196\ncpu: 3335621.1265332466 ns\nthreads: 1"
          },
          {
            "name": "bench_cache_io_buf/120_string_fts",
            "value": 1139.8163015774028,
            "unit": "ns/iter",
            "extra": "iterations: 3685263\ncpu: 1139.6113113229599 ns\nthreads: 1"
          },
          {
            "name": "bench_text_io_buf/120_string_fts",
            "value": 8613.779237153016,
            "unit": "ns/iter",
            "extra": "iterations: 486205\ncpu: 8612.265402453662 ns\nthreads: 1"
          },
          {
            "name": "bench_cache_io_buf/120_num_fts",
            "value": 860.1164875102926,
            "unit": "ns/iter",
            "extra": "iterations: 4877862\ncpu: 859.9698597459335 ns\nthreads: 1"
          },
          {
            "name": "bench_text_io_buf/120_num_fts",
            "value": 6063.655205036356,
            "unit": "ns/iter",
            "extra": "iterations: 684952\ncpu: 6062.555040353171 ns\nthreads: 1"
          },
          {
            "name": "benchmark_example_reuse",
            "value": 977.395005432645,
            "unit": "ns/iter",
            "extra": "iterations: 4325700\ncpu: 977.2197794576584 ns\nthreads: 1"
          },
          {
            "name": "benchmark_sum_ft_squared_char",
            "value": 62.718109551724496,
            "unit": "ns/iter",
            "extra": "iterations: 67106073\ncpu: 62.70724856750265 ns\nthreads: 1"
          },
          {
            "name": "benchmark_sum_ft_squared_extent",
            "value": 89.36696807726976,
            "unit": "ns/iter",
            "extra": "iterations: 46797403\ncpu: 89.35189843761263 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jackgerrits@users.noreply.github.com",
            "name": "Jack Gerrits",
            "username": "jackgerrits"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "14a7c81e6250ff50c269c393302a418a761d71ee",
          "message": "refactor: move open_socket into details namespace (#4189)",
          "timestamp": "2022-10-05T17:22:47-04:00",
          "tree_id": "2926c5e4bbee53503bd91b20c8be1984f893ff62",
          "url": "https://github.com/VowpalWabbit/vowpal_wabbit/commit/14a7c81e6250ff50c269c393302a418a761d71ee"
        },
        "date": 1665007769419,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BenchmarkText.Benchmark(args: 120_num_features)",
            "value": 5237.575266911434,
            "unit": "ns",
            "range": "± 10.864853368671943"
          },
          {
            "name": "BenchmarkText.Benchmark(args: 120_string_fts)",
            "value": 7187.960052490234,
            "unit": "ns",
            "range": "± 32.52394936642"
          },
          {
            "name": "BenchmarkLearnSimple.Benchmark(args: 1_feature)",
            "value": 565.0971539815267,
            "unit": "ns",
            "range": "± 1.8090973656874079"
          },
          {
            "name": "BenchmarkLearnSimple.Benchmark(args: 8_features)",
            "value": 466.37181917826337,
            "unit": "ns",
            "range": "± 1.3090692894117857"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_diff_char_interactions)",
            "value": 853266.8607271635,
            "unit": "ns",
            "range": "± 606.8336572340045"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_diff_char_no_interactions)",
            "value": 470161.572265625,
            "unit": "ns",
            "range": "± 530.7021503469558"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_no_namespaces)",
            "value": 472434.6516927083,
            "unit": "ns",
            "range": "± 391.16950560605005"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_same_char_interactions)",
            "value": 850807.40234375,
            "unit": "ns",
            "range": "± 1213.623312057"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: cb_adf_same_char_no_interactions)",
            "value": 467006.8246694711,
            "unit": "ns",
            "range": "± 410.6850607322835"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_diff_char_interactions)",
            "value": 3410232.890625,
            "unit": "ns",
            "range": "± 5073.2424806432955"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_diff_char_no_interactions)",
            "value": 1054810.80078125,
            "unit": "ns",
            "range": "± 1591.4435396080016"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_no_namespaces)",
            "value": 870906.4453125,
            "unit": "ns",
            "range": "± 1765.4051065428982"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_same_char_interactions)",
            "value": 2796851.8619791665,
            "unit": "ns",
            "range": "± 3844.5019687948316"
          },
          {
            "name": "BenchmarkMulti.Benchmark(args: ccb_adf_same_char_no_interactions)",
            "value": 884243.0385044643,
            "unit": "ns",
            "range": "± 1051.0586513680155"
          },
          {
            "name": "BenchmarkCbAdfLearn.Benchmark(args: few_features)",
            "value": 3400.668580191476,
            "unit": "ns",
            "range": "± 2.6662120924352846"
          },
          {
            "name": "BenchmarkCcbAdfLearn.Benchmark(args: few_features)",
            "value": 11350.015970865885,
            "unit": "ns",
            "range": "± 30.793796927335734"
          },
          {
            "name": "BenchmarkCbAdfLearn.Benchmark(args: many_features)",
            "value": 125713.74860491071,
            "unit": "ns",
            "range": "± 165.02554777325676"
          },
          {
            "name": "BenchmarkCcbAdfLearn.Benchmark(args: many_features)",
            "value": 19610.18798828125,
            "unit": "ns",
            "range": "± 40.76024272997716"
          },
          {
            "name": "BenchmarkRCV1.Benchmark(args: quadratic)",
            "value": 4840171.484375,
            "unit": "ns",
            "range": "± 2999.8991455340465"
          },
          {
            "name": "BenchmarkRCV1.Benchmark(args: simple)",
            "value": 189630.47688802084,
            "unit": "ns",
            "range": "± 282.19436494531243"
          }
        ]
      }
    ]
  }
}