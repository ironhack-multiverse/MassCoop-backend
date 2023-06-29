const mongoose = require('mongoose');
const Game = require('../models/Game.model');


const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/masscoop-backend'
const games = [
    {
      "id": 9953,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 92273,
        "cover": {
          "id": 85734,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1u5i.jpg"
        },
        "name": "10-Pin Bowling"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinemax": 2,
      "onlinecoop": false,
      "platform": 22,
      "splitscreen": false,
      "checksum": "1b94d937-dc0c-c62d-10af-e58d42860bd8"
    },
    {
      "id": 1832,
      "campaigncoop": true,
      "dropin": true,
      "game": {
        "id": 7153,
        "cover": {
          "id": 7327,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/wnuromekruql2hyufp39.jpg"
        },
        "name": "Raiden Fighters Aces"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 12,
      "splitscreen": false,
      "checksum": "2b09f64f-b8b9-6948-ad98-9ab9bede8e3b"
    },
    {
      "id": 7987,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 57887,
        "cover": {
          "id": 139763,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2zub.jpg"
        },
        "name": "ATV Renegades"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 0,
      "offlinemax": 2,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 49,
      "splitscreen": false,
      "checksum": "56c9ee4c-aae3-ba3c-ead0-9e899e1c5267"
    },
    {
      "id": 7,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 46076,
        "cover": {
          "id": 68011,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/blplhydbzaewrsce3x44.jpg"
        },
        "name": "Aggressors: Ancient Rome"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinemax": 30,
      "onlinecoop": false,
      "platform": 6,
      "splitscreen": false,
      "checksum": "a41bcf9c-976d-8690-629f-4c2737f65bf1"
    },
    {
      "id": 10207,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 31256,
        "cover": {
          "id": 92803,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1zlv.jpg"
        },
        "name": "Pixel-Warfare: Pro"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "platform": 82,
      "splitscreen": false,
      "checksum": "788009fd-9e08-5826-577b-9844575ba2d9"
    },
    {
      "id": 8224,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 41858,
        "cover": {
          "id": 124916,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2odw.jpg"
        },
        "name": "Resident Evil 6 Remastered"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 0,
      "offlinemax": 2,
      "onlinecoop": true,
      "onlinecoopmax": 0,
      "onlinemax": 6,
      "platform": 49,
      "splitscreen": false,
      "checksum": "9f1541b2-29cf-7c8e-381e-a237f2db03de"
    },
    {
      "id": 8246,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 82419,
        "cover": {
          "id": 296100,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co6ch0.jpg"
        },
        "name": "Saints Row IV: Re-Elected \u0026 Gat out of Hell"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 0,
      "onlinemax": 2,
      "platform": 49,
      "splitscreen": false,
      "checksum": "537d184c-9256-1128-3e0a-5517725339b9"
    },
    {
      "id": 9247,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 83341,
        "cover": {
          "id": 183727,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co3xrj.jpg"
        },
        "name": "Dwarf"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": true,
      "onlinecoopmax": 2,
      "onlinemax": 6,
      "platform": 6,
      "splitscreen": false,
      "checksum": "425f036b-4eb8-0391-4931-4c5a42f8e7e6"
    },
    {
      "id": 8258,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 11651,
        "cover": {
          "id": 83436,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1sdo.jpg"
        },
        "name": "SlashDash"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 0,
      "offlinemax": 4,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 49,
      "splitscreen": false,
      "checksum": "9301b2d9-5d3e-d3e5-fe9f-87df1b19f238"
    },
    {
      "id": 8273,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 13554,
        "cover": {
          "id": 99785,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co24zt.jpg"
        },
        "name": "Styx: Shards of Darkness"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 0,
      "onlinemax": 2,
      "platform": 49,
      "splitscreen": false,
      "checksum": "b3ca196b-bf6e-88fc-321e-eb8a30f0b22c"
    },
    {
      "id": 8278,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 9179,
        "cover": {
          "id": 113128,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2fag.jpg"
        },
        "name": "Sword Coast Legends"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 0,
      "onlinemax": 5,
      "platform": 49,
      "splitscreen": false,
      "checksum": "293ec625-8005-1232-abc2-4fec0b1788f2"
    },
    {
      "id": 10832,
      "campaigncoop": true,
      "dropin": true,
      "game": {
        "id": 11605,
        "cover": {
          "id": 178495,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co3tq7.jpg"
        },
        "name": "The Typing of the Dead"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 2,
      "onlinecoop": false,
      "platform": 6,
      "splitscreen": false,
      "checksum": "869e5db2-d3ef-3326-4061-b8f9c179fb6f"
    },
    {
      "id": 8335,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 1121,
        "cover": {
          "id": 125924,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2p5w.jpg"
        },
        "name": "Watch Dogs"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 0,
      "onlinemax": 8,
      "platform": 49,
      "splitscreen": false,
      "checksum": "3510ce6c-c7d1-a02d-2d5c-441fb5d20cdb"
    },
    {
      "id": 8345,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 10919,
        "cover": {
          "id": 76303,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1mvj.jpg"
        },
        "name": "XCOM 2"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 2,
      "platform": 49,
      "splitscreen": false,
      "checksum": "aa5b58ad-5010-6870-1f9d-1cbe6c591118"
    },
    {
      "id": 10984,
      "campaigncoop": false,
      "dropin": false,
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "platform": 32,
      "splitscreen": false,
      "checksum": "2c795030-9c2f-da18-8228-c03c08bf54ab"
    },
    {
      "id": 10358,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 132152,
        "cover": {
          "id": 182413,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co3wr1.jpg"
        },
        "name": "Aniquilation"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 2,
      "onlinecoop": false,
      "platform": 48,
      "splitscreen": true,
      "checksum": "646809c1-71d3-009f-de1c-017a12185f54"
    },
    {
      "id": 8387,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 83779,
        "cover": {
          "id": 60927,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/pzronetbyt0jikmycnky.jpg"
        },
        "name": "Dinosaur Discovery"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "platform": 34,
      "splitscreen": false,
      "checksum": "238e62f6-7513-f9bf-2bef-cbe125b12486"
    },
    {
      "id": 10818,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 53787,
        "cover": {
          "id": 104131,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co28cj.jpg"
        },
        "name": "The Typing of The Dead: Overkill Collection"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": true,
      "onlinecoopmax": 2,
      "onlinemax": 2,
      "platform": 6,
      "splitscreen": false,
      "checksum": "a5d488ae-ee95-d5c4-b243-9e02e6f2e55d"
    },
    {
      "id": 10532,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 133334,
        "cover": {
          "id": 101586,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co26du.jpg"
        },
        "name": "Tidewoken"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": true,
      "onlinecoopmax": 4,
      "onlinemax": 6,
      "platform": 6,
      "splitscreen": false,
      "checksum": "f71feab5-2c88-70b2-7cab-82f0cbcb3a87"
    },
    {
      "id": 9569,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 119238,
        "cover": {
          "id": 74889,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1ls9.jpg"
        },
        "name": "Titan\u0027s Tower"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "platform": 6,
      "splitscreen": false,
      "checksum": "23801cec-e0ec-6c63-b89b-8e8aee18cb25"
    },
    {
      "id": 10581,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 4271,
        "cover": {
          "id": 140311,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co309j.jpg"
        },
        "name": "Primal Rage"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinemax": 2,
      "onlinecoop": false,
      "platform": 52,
      "splitscreen": false,
      "checksum": "b0606e3f-2a00-61de-d3f7-57e2e92253b5"
    },
    {
      "id": 10582,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 4271,
        "cover": {
          "id": 140311,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co309j.jpg"
        },
        "name": "Primal Rage"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinemax": 2,
      "onlinecoop": false,
      "platform": 19,
      "splitscreen": false,
      "checksum": "d095c1b0-7bc0-a35e-7c59-665369b0cc2d"
    },
    {
      "id": 9587,
      "campaigncoop": false,
      "dropin": true,
      "game": {
        "id": 109462,
        "cover": {
          "id": 182224,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co3wls.jpg"
        },
        "name": "Animal Crossing: New Horizons"
      },
      "lancoop": true,
      "offlinecoop": true,
      "offlinecoopmax": 4,
      "offlinemax": 4,
      "onlinecoop": true,
      "onlinecoopmax": 8,
      "onlinemax": 8,
      "platform": 130,
      "splitscreen": true,
      "checksum": "e67892a4-d813-0548-64af-46951c90fdee"
    },
    {
      "id": 7980,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 11489,
        "cover": {
          "id": 270553,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co5srd.jpg"
        },
        "name": "Arslan: The Warriors of Legend"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 0,
      "offlinemax": 2,
      "onlinecoop": true,
      "onlinecoopmax": 0,
      "onlinemax": 2,
      "platform": 49,
      "splitscreen": false,
      "checksum": "6ab6af90-0778-3d0b-0544-98fdb0d07ff1"
    },
    {
      "id": 8632,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 82392,
        "cover": {
          "id": 104731,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co28t7.jpg"
        },
        "name": "ACA Neo Geo: Power Spikes II"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 0,
      "offlinemax": 2,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 49,
      "splitscreen": false,
      "checksum": "38820907-ebf0-7c32-2e0b-7b646b532746"
    },
    {
      "id": 6,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 11120,
        "cover": {
          "id": 182322,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co3woi.jpg"
        },
        "name": "The Elder Scrolls: Legends"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "onlinemax": 2,
      "platform": 14,
      "splitscreen": false,
      "checksum": "dc1f6640-eee4-7ed0-740b-4afb23667bcf"
    },
    {
      "id": 8659,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 96240,
        "cover": {
          "id": 65087,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/b8qslqcmcwdf8srnftz0.jpg"
        },
        "name": "Tankalot"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 8,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 6,
      "splitscreen": false,
      "checksum": "fbe356f2-69da-3142-dcd5-d536b8ff33b2"
    },
    {
      "id": 8666,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 96372,
        "cover": {
          "id": 76946,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1nde.jpg"
        },
        "name": "Gun Rage"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "platform": 6,
      "splitscreen": false,
      "checksum": "fc6d92e7-c0e2-edda-5f9a-a4b4ec839938"
    },
    {
      "id": 9667,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 295,
        "cover": {
          "id": 77652,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1nx0.jpg"
        },
        "name": "Command \u0026 Conquer: Red Alert"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 8,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 8,
      "platform": 6,
      "splitscreen": false,
      "checksum": "45f1ed05-6d40-4b8d-f42c-730db216f9d9"
    },
    {
      "id": 10675,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 131934,
        "cover": {
          "id": 113940,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2fx0.jpg"
        },
        "name": "Jumpala"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinemax": 4,
      "onlinecoop": false,
      "onlinemax": 4,
      "platform": 14,
      "splitscreen": true,
      "checksum": "820b4e0d-8629-e4b5-4eac-66ee1fe857fa"
    },
    {
      "id": 8678,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 97251,
        "cover": {
          "id": 65302,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/kxzwogsuxtptuthsdax7.jpg"
        },
        "name": "Death Flash"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinemax": 1,
      "onlinecoop": false,
      "platform": 6,
      "splitscreen": false,
      "checksum": "f940a45e-4730-64d9-191f-fe627e4f1223"
    },
    {
      "id": 10683,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 784,
        "cover": {
          "id": 157073,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co3d75.jpg"
        },
        "name": "MechWarrior 2: 31st Century Combat"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "platform": 13,
      "splitscreen": false,
      "checksum": "6c226279-cfef-650a-256a-cc7cec4ef3a1"
    },
    {
      "id": 10702,
      "campaigncoop": true,
      "dropin": true,
      "game": {
        "id": 110474,
        "cover": {
          "id": 97335,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co233r.jpg"
        },
        "name": "Minecraft Dungeons"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 4,
      "offlinemax": 4,
      "onlinecoop": true,
      "onlinecoopmax": 4,
      "onlinemax": 4,
      "platform": 49,
      "splitscreen": false,
      "checksum": "b865aefa-d4ce-860a-1612-9b2e4c2dffc1"
    },
    {
      "id": 8714,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 97269,
        "cover": {
          "id": 103255,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co27o7.jpg"
        },
        "name": "Project Pastorate"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "platform": 6,
      "splitscreen": false,
      "checksum": "f2a3881a-d880-02ec-c01b-c3f671990850"
    },
    {
      "id": 8725,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 102072,
        "cover": {
          "id": 65853,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/wpmhhplx52nv1jhslwbs.jpg"
        },
        "name": "Lower to Higher"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "platform": 39,
      "splitscreen": false,
      "checksum": "92b771ca-190c-413f-b574-e70d42341082"
    },
    {
      "id": 8727,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 12301,
        "cover": {
          "id": 79748,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1pj8.jpg"
        },
        "name": "Relic Hunters Zero"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "onlinecoop": false,
      "platform": 6,
      "splitscreen": true,
      "checksum": "12b31fa3-1726-7858-04b2-841738c8599e"
    },
    {
      "id": 1730,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 2669,
        "cover": {
          "id": 88972,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1wng.jpg"
        },
        "name": "Guitar Hero World Tour"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 4,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 4,
      "onlinemax": 0,
      "platform": 12,
      "splitscreen": true,
      "checksum": "686bf6e9-7b16-b235-9947-0ca486693120"
    },
    {
      "id": 8730,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 48141,
        "cover": {
          "id": 157174,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co3d9y.jpg"
        },
        "name": "Crystal Mines"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinemax": 1,
      "onlinecoop": false,
      "splitscreen": false,
      "checksum": "89b118cc-8580-24bb-aa29-2060ef50a343"
    },
    {
      "id": 8739,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 102796,
        "cover": {
          "id": 66033,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/xm8xp2o8qu4o0opcjki5.jpg"
        },
        "name": "Rockstar Alien Killers"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "platform": 34,
      "splitscreen": false,
      "checksum": "7c3a169d-0514-eeb3-c13c-b4de849e16bb"
    },
    {
      "id": 1844,
      "campaigncoop": true,
      "dropin": true,
      "game": {
        "id": 4877,
        "cover": {
          "id": 111710,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2e72.jpg"
        },
        "name": "G.I. Joe: The Rise of Cobra"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 12,
      "splitscreen": false,
      "checksum": "c3ca7a7b-5ad4-9ab5-16bc-4a5b1e80b1fb"
    },
    {
      "id": 1850,
      "campaigncoop": true,
      "dropin": true,
      "game": {
        "id": 4752,
        "cover": {
          "id": 198077,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co48u5.jpg"
        },
        "name": "Cate West: The Vanishing Files"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 5,
      "splitscreen": true,
      "checksum": "e625d722-3d81-1db2-2adc-f170fc0dec27"
    },
    {
      "id": 1878,
      "campaigncoop": true,
      "dropin": true,
      "game": {
        "id": 572,
        "cover": {
          "id": 112079,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2ehb.jpg"
        },
        "name": "Arma 2"
      },
      "lancoop": true,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 4,
      "onlinemax": 0,
      "platform": 6,
      "splitscreen": false,
      "checksum": "b98380db-3bd7-46fb-5bd5-5aa0784c1806"
    },
    {
      "id": 1890,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 20425,
        "cover": {
          "id": 18460,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/gqcwi8w68ooaqerry1x5.jpg"
        },
        "name": "Madden NFL 2010"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 4,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 2,
      "onlinemax": 0,
      "platform": 12,
      "splitscreen": false,
      "checksum": "5772d9ae-3f6b-0475-f226-f62e7e54ec9e"
    },
    {
      "id": 8437,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 83776,
        "cover": {
          "id": 103515,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co27vf.jpg"
        },
        "name": "Steep: Winter Games Edition"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 0,
      "onlinemax": 4,
      "platform": 49,
      "splitscreen": false,
      "checksum": "80734347-1cde-63e7-2097-9de03577dcbf"
    },
    {
      "id": 8440,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 83774,
        "cover": {
          "id": 97665,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co23cx.jpg"
        },
        "name": "The Jackbox Party Quadpack"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 49,
      "splitscreen": false,
      "checksum": "bb512951-39bb-1d53-c351-c97dc93e2bb0"
    },
    {
      "id": 7973,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 56891,
        "cover": {
          "id": 96706,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co22ma.jpg"
        },
        "name": "Adventure Pop"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 2,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 2,
      "platform": 49,
      "splitscreen": false,
      "checksum": "0946922f-e883-5c22-4920-a1f6e9a20077"
    },
    {
      "id": 10963,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 6622,
        "cover": {
          "id": 176545,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co3s81.jpg"
        },
        "name": "Super Monkey Ball Jr."
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinemax": 4,
      "onlinecoop": false,
      "platform": 24,
      "splitscreen": false,
      "checksum": "681f7a0a-40dd-f562-7dd4-486f266e02df"
    },
    {
      "id": 8,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 46077,
        "cover": {
          "id": 26655,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/l0cdvlzxjtrdazmex2fs.jpg"
        },
        "name": "The Minecraft tribute game"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "platform": 6,
      "splitscreen": false,
      "checksum": "d98cddc4-1777-83da-8401-4fa6b97e73a2"
    },
    {
      "id": 9990,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 47827,
        "cover": {
          "id": 275535,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co5wlr.jpg"
        },
        "name": "Fairy Tail Gekitou! Madoushi Kessen"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "platform": 20,
      "splitscreen": false,
      "checksum": "dba74e22-f912-9cd7-5adc-b475633ce881"
    },
    {
      "id": 9008,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 59736,
        "cover": {
          "id": 39219,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/srw7yk5yaofb8vajgqr2.jpg"
        },
        "name": "Prison Life RPG"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "platform": 34,
      "splitscreen": false,
      "checksum": "cd85503f-49d1-80c6-ebd0-41800d1970d6"
    },
    {
      "id": 12,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 46659,
        "cover": {
          "id": 26742,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/zm3u3wydf4msama94rxf.jpg"
        },
        "name": "Vermeer"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinecoopmax": 6,
      "onlinecoop": false,
      "splitscreen": false,
      "checksum": "7530f8ea-d619-5243-bc7f-f3adb1ab3918"
    },
    {
      "id": 11345,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 95083,
        "cover": {
          "id": 111563,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2e2z.jpg"
        },
        "name": "Bearsus"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinemax": 2,
      "onlinecoop": false,
      "platform": 6,
      "splitscreen": false,
      "checksum": "2a210fa5-dc9e-f28a-4526-07b4d4a9b540"
    },
    {
      "id": 4770,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 11053,
        "cover": {
          "id": 18177,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/oz5rm27qcyf4aqb7zcyj.jpg"
        },
        "name": "Turbo: Super Stunt Squad"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 9,
      "splitscreen": true,
      "checksum": "8e9dd730-016e-aa87-6f6d-19dc840b3125"
    },
    {
      "id": 7995,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 22445,
        "cover": {
          "id": 16806,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/ao1vgxafdjlcup3llhfo.jpg"
        },
        "name": "Battleship"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 2,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 2,
      "platform": 49,
      "splitscreen": false,
      "checksum": "0e9b194d-64bf-c371-14dd-1ac94ea18d46"
    },
    {
      "id": 7975,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 25989,
        "cover": {
          "id": 126241,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2pep.jpg"
        },
        "name": "AirMech Arena"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 0,
      "onlinemax": 6,
      "platform": 49,
      "splitscreen": false,
      "checksum": "55846435-3ed9-5446-8b0c-6c51c2c1fee6"
    },
    {
      "id": 10975,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 2670,
        "cover": {
          "id": 88634,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1we2.jpg"
        },
        "name": "Guitar Hero II"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 2,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 8,
      "splitscreen": true,
      "checksum": "a35a85cf-c556-efbd-b7ed-40e767366bce"
    },
    {
      "id": 8130,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 14380,
        "cover": {
          "id": 86446,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1upa.jpg"
        },
        "name": "Knight Squad"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 0,
      "offlinemax": 8,
      "onlinecoop": true,
      "onlinecoopmax": 0,
      "onlinemax": 8,
      "platform": 49,
      "splitscreen": false,
      "checksum": "4d793c1e-34e9-f3c6-75bd-de9bf867095d"
    },
    {
      "id": 11474,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 136659,
        "cover": {
          "id": 112709,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2eyt.jpg"
        },
        "name": "Ben 10: Power Trip"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 2,
      "onlinecoop": false,
      "platform": 130,
      "splitscreen": true,
      "checksum": "46cdd0b8-884c-2ac4-7284-7cd1b9b93b18"
    },
    {
      "id": 11467,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 43382,
        "cover": {
          "id": 112687,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2ey7.jpg"
        },
        "name": "Centre Court: Hard Hitter"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinemax": 2,
      "onlinecoop": false,
      "splitscreen": true,
      "checksum": "dce2e936-d227-b321-2909-088bc304db3a"
    },
    {
      "id": 11710,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 138908,
        "cover": {
          "id": 114721,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2gip.jpg"
        },
        "name": "World Soccer Jikkyou Winning Eleven 3: Final Ver."
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "platform": 7,
      "splitscreen": false,
      "checksum": "75dcdecc-f073-8fc7-4554-38f18f1c472d"
    },
    {
      "id": 25,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 49118,
        "cover": {
          "id": 151390,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co38ta.jpg"
        },
        "name": "Street Racer"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "platform": 59,
      "splitscreen": false,
      "checksum": "6ba886f4-3c39-fe8f-b342-96b83ea9c816"
    },
    {
      "id": 34,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 51693,
        "cover": {
          "id": 102784,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co27b4.jpg"
        },
        "name": "The Lighthouse"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "platform": 49,
      "splitscreen": false,
      "checksum": "8e43384d-b731-1948-d3b0-c48d63a6e70a"
    },
    {
      "id": 36,
      "campaigncoop": false,
      "dropin": true,
      "game": {
        "id": 26742,
        "cover": {
          "id": 19915,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/iwfm52op6gzyk5autgya.jpg"
        },
        "name": "TankWars.io"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": true,
      "platform": 82,
      "splitscreen": false,
      "checksum": "89e44830-cff6-973c-5804-53c336a95357"
    },
    {
      "id": 39,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 27666,
        "cover": {
          "id": 99784,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co24zs.jpg"
        },
        "name": "Sine Mora EX"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "onlinecoop": false,
      "platform": 6,
      "splitscreen": false,
      "checksum": "167fbc96-0d76-a412-9f47-4f1d9952df96"
    },
    {
      "id": 40,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 27666,
        "cover": {
          "id": 99784,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co24zs.jpg"
        },
        "name": "Sine Mora EX"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "onlinecoop": false,
      "platform": 12,
      "splitscreen": false,
      "checksum": "d69bc18d-6d4c-92be-5d31-96af4ee501b8"
    },
    {
      "id": 41,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 27666,
        "cover": {
          "id": 99784,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co24zs.jpg"
        },
        "name": "Sine Mora EX"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "onlinecoop": false,
      "platform": 48,
      "splitscreen": false,
      "checksum": "2cf7517d-6beb-21eb-f623-2a29b26d3ee0"
    },
    {
      "id": 31,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 51551,
        "cover": {
          "id": 28605,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/jcxxzxc3gxwawdcw5bcs.jpg"
        },
        "name": "Smash Mobs"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "platform": 34,
      "splitscreen": false,
      "checksum": "2f30899d-907a-d928-424b-3d764ddd15b4"
    },
    {
      "id": 8111,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 35803,
        "cover": {
          "id": 94912,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co218g.jpg"
        },
        "name": "HeartZ: Co-Hope Puzzles"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 0,
      "offlinemax": 3,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 49,
      "splitscreen": false,
      "checksum": "cb35eaf7-ba08-45d0-fd82-bac6317bc0db"
    },
    {
      "id": 8126,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 20059,
        "cover": {
          "id": 28962,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/x6e5ig72xycwhus1kket.jpg"
        },
        "name": "KickBeat: Special Edition"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 2,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 49,
      "splitscreen": false,
      "checksum": "0968da9b-a763-0955-8574-55865bf39e53"
    },
    {
      "id": 8149,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 18688,
        "cover": {
          "id": 103169,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co27lt.jpg"
        },
        "name": "Manual Samuel"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 0,
      "offlinemax": 2,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 49,
      "splitscreen": false,
      "checksum": "33bd168c-2f93-2163-1b5e-7c212e3eb984"
    },
    {
      "id": 8155,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 11288,
        "cover": {
          "id": 44793,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/whsisj6tfieobn0y1g79.jpg"
        },
        "name": "Mega Coin Squad"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 4,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 49,
      "splitscreen": false,
      "checksum": "602e4835-3605-e8a1-ed2e-996e12081cee"
    },
    {
      "id": 9360,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 27060,
        "cover": {
          "id": 98829,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2499.jpg"
        },
        "name": "Mutant Football League"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 4,
      "offlinemax": 4,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 2,
      "platform": 48,
      "splitscreen": false,
      "checksum": "a5a9236f-76fb-aaa3-96bf-1d3b5d2e9f60"
    },
    {
      "id": 10373,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 27436,
        "cover": {
          "id": 118256,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2j8w.jpg"
        },
        "name": "Kingdom Two Crowns"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 130,
      "splitscreen": true,
      "checksum": "7b20d3b9-73e4-08bb-b0f0-445e5dba1c22"
    },
    {
      "id": 10539,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 11219,
        "cover": {
          "id": 137778,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2yb6.jpg"
        },
        "name": "Sonic the Hedgehog 3 \u0026 Knuckles"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 2,
      "onlinecoop": false,
      "platform": 29,
      "splitscreen": true,
      "checksum": "2cdb69f3-c45a-4bb0-377f-573cd77848b3"
    },
    {
      "id": 7542,
      "campaigncoop": true,
      "dropin": true,
      "game": {
        "id": 6748,
        "cover": {
          "id": 109740,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2coc.jpg"
        },
        "name": "Killing Floor 2"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 6,
      "onlinemax": 0,
      "platform": 6,
      "splitscreen": false,
      "checksum": "3ec5850a-5142-34ac-0074-4f56944030eb"
    },
    {
      "id": 7543,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 21072,
        "cover": {
          "id": 213771,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co4ky3.jpg"
        },
        "name": "Dynasty Warriors: Gundam Reborn"
      },
      "lancoop": true,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 2,
      "onlinemax": 0,
      "platform": 9,
      "splitscreen": true,
      "checksum": "2c0a5872-34c5-ea24-49c7-403fad73d33b"
    },
    {
      "id": 9554,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 115563,
        "cover": {
          "id": 128518,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2r5y.jpg"
        },
        "name": "Road Rage Royale"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinemax": 4,
      "onlinecoop": false,
      "platform": 6,
      "splitscreen": true,
      "checksum": "74884a30-c9e0-5e9b-99c5-6d0e0f537bcc"
    },
    {
      "id": 9992,
      "campaigncoop": false,
      "dropin": false,
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "platform": 4,
      "splitscreen": false,
      "checksum": "bb53e72b-e916-3cf8-3ab1-3c291c213237"
    },
    {
      "id": 10583,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 4271,
        "cover": {
          "id": 140311,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co309j.jpg"
        },
        "name": "Primal Rage"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinemax": 2,
      "onlinecoop": false,
      "platform": 7,
      "splitscreen": false,
      "checksum": "86d214ca-6e6c-cb6b-bb5c-982383e2e977"
    },
    {
      "id": 10586,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 4446,
        "cover": {
          "id": 104011,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2897.jpg"
        },
        "name": "Columns"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinemax": 2,
      "onlinecoop": false,
      "platform": 29,
      "splitscreen": true,
      "checksum": "28333239-c902-11c0-eba4-8b0c812a0faf"
    },
    {
      "id": 10672,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 2255,
        "cover": {
          "id": 95916,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co220c.jpg"
        },
        "name": "Mario Strikers Charged"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 4,
      "offlinemax": 4,
      "onlinecoop": true,
      "onlinecoopmax": 2,
      "onlinemax": 2,
      "platform": 5,
      "splitscreen": false,
      "checksum": "b3c9c181-f6ff-5441-7afa-d87ea56da5ca"
    },
    {
      "id": 7696,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 11577,
        "cover": {
          "id": 85709,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1u4t.jpg"
        },
        "name": "Satellite Reign"
      },
      "lancoop": true,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 4,
      "onlinemax": 0,
      "platform": 6,
      "splitscreen": false,
      "checksum": "24a4a718-e48f-c0f4-1149-ba6d47394130"
    },
    {
      "id": 10843,
      "campaigncoop": false,
      "dropin": true,
      "game": {
        "id": 6178,
        "cover": {
          "id": 294723,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co6ber.jpg"
        },
        "name": "Street Fighter Anniversary Collection"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinemax": 2,
      "onlinecoop": false,
      "onlinemax": 2,
      "platform": 11,
      "splitscreen": false,
      "checksum": "949f0c7c-6a54-b29a-3e16-50dd025717f2"
    },
    {
      "id": 1857,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 2652,
        "cover": {
          "id": 107959,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2bav.jpg"
        },
        "name": "Destroy All Humans! 2"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 8,
      "splitscreen": true,
      "checksum": "19010575-992a-af95-52ba-34f71f46e492"
    },
    {
      "id": 1858,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 732,
        "cover": {
          "id": 120933,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2lb9.jpg"
        },
        "name": "Grand Theft Auto: San Andreas"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 8,
      "splitscreen": false,
      "checksum": "b2572d9b-fe16-f867-de9f-9c93df25ad7d"
    },
    {
      "id": 1860,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 1371,
        "cover": {
          "id": 81461,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1qut.jpg"
        },
        "name": "Company of Heroes: Tales of Valor"
      },
      "lancoop": true,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 4,
      "onlinemax": 0,
      "platform": 6,
      "splitscreen": false,
      "checksum": "86182185-3cb5-2c2a-231b-9877f2acce97"
    },
    {
      "id": 1928,
      "campaigncoop": true,
      "dropin": true,
      "game": {
        "id": 4576,
        "cover": {
          "id": 79596,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1pf0.jpg"
        },
        "name": "X-Men Legends II: Rise of Apocalypse"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 4,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 4,
      "onlinemax": 0,
      "platform": 8,
      "splitscreen": false,
      "checksum": "7c950120-c94a-c9d3-8d86-3f9d5a30807d"
    },
    {
      "id": 10954,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 49843,
        "cover": {
          "id": 165646,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co3jta.jpg"
        },
        "name": "Rayman 3"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinemax": 2,
      "onlinecoop": false,
      "platform": 24,
      "splitscreen": false,
      "checksum": "96e12f3d-289b-3a43-5810-c17a2362887e"
    },
    {
      "id": 7957,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 82030,
        "cover": {
          "id": 103468,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co27u4.jpg"
        },
        "name": "World of Wizards"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": true,
      "onlinecoopmax": 4,
      "onlinemax": 4,
      "platform": 34,
      "splitscreen": false,
      "checksum": "98da5741-18c0-cad6-ba6d-8b5b97834c9c"
    },
    {
      "id": 1961,
      "campaigncoop": false,
      "dropin": true,
      "game": {
        "id": 401,
        "cover": {
          "id": 87537,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1vjl.jpg"
        },
        "name": "Final Fantasy Crystal Chronicles: The Crystal Bearers"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 5,
      "splitscreen": false,
      "checksum": "d4a72e9d-f3e6-9d5e-7dde-a6815a35aa43"
    },
    {
      "id": 7961,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 47312,
        "cover": {
          "id": 27038,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/kzcw4metgrf66lmufung.jpg"
        },
        "name": "Splat Renegade Paintball"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "onlinemax": 14,
      "platform": 6,
      "splitscreen": true,
      "checksum": "ebe6ddb2-0e50-701d-a892-01b3e5c3b579"
    },
    {
      "id": 11164,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 135468,
        "cover": {
          "id": 108723,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2bw3.jpg"
        },
        "name": "Octrons Challenge: Mission Science Genius"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinemax": 1,
      "onlinecoop": false,
      "platform": 39,
      "splitscreen": false,
      "checksum": "33dc3887-c9e7-abb7-a195-f07606f3809d"
    },
    {
      "id": 5699,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 27410,
        "cover": {
          "id": 87654,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1vmu.jpg"
        },
        "name": "Final Fantasy Explorers-Force"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": true,
      "onlinecoopmax": 5,
      "platform": 34,
      "splitscreen": false,
      "checksum": "aa14aec2-66c1-2ab8-45aa-904897e5577f"
    },
    {
      "id": 35,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 51693,
        "cover": {
          "id": 102784,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co27b4.jpg"
        },
        "name": "The Lighthouse"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "platform": 48,
      "splitscreen": false,
      "checksum": "e6493450-2b9e-1db1-c79f-883a2f5ed4a4"
    },
    {
      "id": 9184,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 105443,
        "cover": {
          "id": 103290,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co27p6.jpg"
        },
        "name": "Garden Paws"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": true,
      "platform": 6,
      "splitscreen": false,
      "checksum": "c850f71b-06b4-d6dd-40ea-76cd71eedf30"
    },
    {
      "id": 9968,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 126468,
        "cover": {
          "id": 86067,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1uer.jpg"
        },
        "name": "TV Animation X - Unmei No Tatakai"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinemax": 2,
      "onlinecoop": false,
      "splitscreen": false,
      "checksum": "b46d125b-a4ff-57a2-32f4-432795aface7"
    },
    {
      "id": 1969,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 2637,
        "cover": {
          "id": 76704,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1n6o.jpg"
        },
        "name": "de Blob"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 4,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 5,
      "splitscreen": false,
      "checksum": "15e78ee5-5c3b-befd-87e5-b3e3cb2bdd53"
    },
    {
      "id": 1983,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 5300,
        "cover": {
          "id": 198035,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co48sz.jpg"
        },
        "name": "WWE SmackDown vs. Raw 2010"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 3,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 2,
      "onlinemax": 0,
      "platform": 9,
      "splitscreen": false,
      "checksum": "8ea532aa-d929-2fbe-fd52-c3011bce2485"
    },
    {
      "id": 1864,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 7170,
        "cover": {
          "id": 175220,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co3r78.jpg"
        },
        "name": "Ico"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 8,
      "splitscreen": false,
      "checksum": "bff92077-3799-13be-b123-c52bfd5b9344"
    },
    {
      "id": 6093,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 75410,
        "cover": {
          "id": 44024,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/eqi7jmf3xfk5dsdichkm.jpg"
        },
        "name": "BlastArena.io"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "platform": 82,
      "splitscreen": false,
      "checksum": "6cd1e883-97ad-91ad-bf96-2476b4cebacd"
    },
    {
      "id": 10986,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 5168,
        "cover": {
          "id": 93154,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1zvm.jpg"
        },
        "name": "Sonic Riders: Zero Gravity"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinemax": 4,
      "onlinecoop": false,
      "platform": 5,
      "splitscreen": true,
      "checksum": "fb27036f-de8f-bd77-4e88-1ce53bcbaf1d"
    },
    {
      "id": 11351,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 44664,
        "cover": {
          "id": 157477,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co3did.jpg"
        },
        "name": "God of War: Ascension - Special Edition"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "onlinemax": 8,
      "platform": 9,
      "splitscreen": false,
      "checksum": "a7fbe6fc-b34a-53c2-c54c-0927cf969dd0"
    },
    {
      "id": 11471,
      "campaigncoop": false,
      "dropin": true,
      "game": {
        "id": 38531,
        "cover": {
          "id": 112707,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2eyr.jpg"
        },
        "name": "Capcom Sports Club"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinemax": 2,
      "onlinecoop": false,
      "splitscreen": false,
      "checksum": "87fb1ea0-7cc4-ffbd-1b17-588b03af4bfe"
    },
    {
      "id": 11469,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 15350,
        "cover": {
          "id": 112702,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2eym.jpg"
        },
        "name": "Projectyle"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinemax": 3,
      "onlinecoop": false,
      "platform": 16,
      "splitscreen": false,
      "checksum": "4c5c35ff-5274-6ee8-5b10-3bed90352e88"
    },
    {
      "id": 11470,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 15350,
        "cover": {
          "id": 112702,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2eym.jpg"
        },
        "name": "Projectyle"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinemax": 3,
      "onlinecoop": false,
      "platform": 63,
      "splitscreen": false,
      "checksum": "02526d1c-8f8c-2be9-2019-46b7f7b25ab7"
    },
    {
      "id": 11597,
      "campaigncoop": true,
      "dropin": true,
      "game": {
        "id": 137311,
        "cover": {
          "id": 113402,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2fi2.jpg"
        },
        "name": "LEGO Marvel Super Heroes 2: Runaways Level and Character Pack"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "onlinecoop": false,
      "splitscreen": true,
      "checksum": "d1220f77-52b6-3273-1651-ec3fca5f0090"
    },
    {
      "id": 2024,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 20765,
        "cover": {
          "id": 54088,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/h6tqjasvyexf8qexk9c2.jpg"
        },
        "name": "Prism: Light the Way"
      },
      "lancoop": true,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 20,
      "splitscreen": false,
      "checksum": "a993568f-0307-1d90-b70c-a1dc82165461"
    },
    {
      "id": 2045,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 17463,
        "cover": {
          "id": 87539,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1vjn.jpg"
        },
        "name": "Final Fantasy: The 4 Heroes of Light"
      },
      "lancoop": true,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 20,
      "splitscreen": false,
      "checksum": "6d59d95e-45f2-a231-daae-51effe5b35a0"
    },
    {
      "id": 521,
      "campaigncoop": true,
      "dropin": true,
      "game": {
        "id": 984,
        "cover": {
          "id": 91638,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1ypi.jpg"
        },
        "name": "Tom Clancy\u0027s H.A.W.X 2"
      },
      "lancoop": true,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 4,
      "onlinemax": 0,
      "platform": 9,
      "splitscreen": false,
      "checksum": "fdf0abc1-136f-121e-8d97-98d254c4ca01"
    },
    {
      "id": 10648,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 12268,
        "cover": {
          "id": 298477,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co6eb1.jpg"
        },
        "name": "Winter Games"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinemax": 8,
      "onlinecoop": false,
      "platform": 15,
      "splitscreen": false,
      "checksum": "23085e8e-d8eb-fb42-91cf-5fca8146e67e"
    },
    {
      "id": 10360,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 132152,
        "cover": {
          "id": 182413,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co3wr1.jpg"
        },
        "name": "Aniquilation"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 2,
      "onlinecoop": false,
      "platform": 130,
      "splitscreen": true,
      "checksum": "9bae86aa-ed3c-5b8a-d13d-ca2f40f043ef"
    },
    {
      "id": 531,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 6043,
        "cover": {
          "id": 165073,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co3jdd.jpg"
        },
        "name": "Shadow Ops: Red Mercury"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 11,
      "splitscreen": true,
      "checksum": "169c879b-3b84-5e63-51e7-9310fb5897cd"
    },
    {
      "id": 10212,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 98010,
        "cover": {
          "id": 122315,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2mdn.jpg"
        },
        "name": "Platform Racing 2"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": true,
      "onlinemax": 4,
      "platform": 82,
      "splitscreen": false,
      "checksum": "d7e97582-9291-19de-2bcf-b16a66a8c154"
    },
    {
      "id": 7364,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 2596,
        "cover": {
          "id": 99900,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2530.jpg"
        },
        "name": "The Settlers II: Veni, Vidi, Vici"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "splitscreen": false,
      "checksum": "883dd763-b732-cd06-d138-898f02fac31b"
    },
    {
      "id": 10957,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 69158,
        "cover": {
          "id": 105892,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co29pg.jpg"
        },
        "name": "Transworld Surf: Next Wave"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinemax": 4,
      "onlinecoop": false,
      "platform": 21,
      "splitscreen": true,
      "checksum": "9774e11e-94b0-1b1b-d2a2-8c7a0d6bff4b"
    },
    {
      "id": 7365,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 2617,
        "cover": {
          "id": 289878,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co67o6.jpg"
        },
        "name": "The Settlers II: Gold Edition"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "splitscreen": false,
      "checksum": "1c2dfca2-6ee8-b54e-b243-05ffb0c646bc"
    },
    {
      "id": 10374,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 27436,
        "cover": {
          "id": 118256,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2j8w.jpg"
        },
        "name": "Kingdom Two Crowns"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 2,
      "onlinecoop": false,
      "platform": 6,
      "splitscreen": true,
      "checksum": "b4f0c7a6-1eac-0d90-cffe-12844d01cade"
    },
    {
      "id": 542,
      "campaigncoop": false,
      "dropin": true,
      "game": {
        "id": 16253,
        "cover": {
          "id": 130291,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2sj7.jpg"
        },
        "name": "Alliance of Valiant Arms"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 5,
      "onlinemax": 0,
      "platform": 6,
      "splitscreen": false,
      "checksum": "9f6ae425-33de-b15a-7e07-096a30f87f11"
    },
    {
      "id": 10544,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 107547,
        "cover": {
          "id": 102130,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co26sy.jpg"
        },
        "name": "Golf Rival"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "platform": 34,
      "splitscreen": false,
      "checksum": "c639b59e-e5fb-5b4c-2668-662616fd868a"
    },
    {
      "id": 518,
      "campaigncoop": true,
      "dropin": true,
      "game": {
        "id": 2142,
        "cover": {
          "id": 79170,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1p36.jpg"
        },
        "name": "TimeSplitters"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 8,
      "splitscreen": true,
      "checksum": "c6c639c0-84ad-ac49-1310-33fd1780e475"
    },
    {
      "id": 9552,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 118756,
        "cover": {
          "id": 74474,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1lgq.jpg"
        },
        "name": "300: Seize Your Glory"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "platform": 34,
      "splitscreen": false,
      "checksum": "348afed5-173a-d371-c6f5-bec84ad7ad3c"
    },
    {
      "id": 9585,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 26166,
        "cover": {
          "id": 98852,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co249w.jpg"
        },
        "name": "Dauntless"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": true,
      "onlinecoopmax": 4,
      "platform": 48,
      "splitscreen": false,
      "checksum": "e2c0eddf-e9c5-2187-33cc-fa5e70e47b78"
    },
    {
      "id": 7976,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 26370,
        "cover": {
          "id": 277517,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co5y4t.jpg"
        },
        "name": "Abode"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 2,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 49,
      "splitscreen": false,
      "checksum": "08a7ccc6-c590-7e9e-bd9d-6be836dba2d4"
    },
    {
      "id": 10591,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 134094,
        "cover": {
          "id": 102716,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2798.jpg"
        },
        "name": "Velha Quântica"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinemax": 2,
      "onlinecoop": false,
      "platform": 3,
      "splitscreen": true,
      "checksum": "f52dd714-8752-24b2-ee60-424dc360f785"
    },
    {
      "id": 596,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 6250,
        "cover": {
          "id": 101059,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co25z7.jpg"
        },
        "name": "Trine 2"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 3,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 3,
      "onlinemax": 0,
      "platform": 6,
      "splitscreen": true,
      "checksum": "574f98ca-ea73-22ae-74b7-72a6dbb2077f"
    },
    {
      "id": 9682,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 4339,
        "cover": {
          "id": 200535,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co4aqf.jpg"
        },
        "name": "Return Fire"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "platform": 6,
      "splitscreen": false,
      "checksum": "5dcdfe41-728e-3fd1-f6d2-14b80e2bc52c"
    },
    {
      "id": 10844,
      "campaigncoop": false,
      "dropin": true,
      "game": {
        "id": 6710,
        "cover": {
          "id": 294929,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co6bkh.jpg"
        },
        "name": "Street Fighter III: 3rd Strike"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinemax": 2,
      "onlinecoop": false,
      "platform": 52,
      "splitscreen": false,
      "checksum": "b8b4d496-6104-7abe-e027-1b1f4c352363"
    },
    {
      "id": 7707,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 2583,
        "cover": {
          "id": 85896,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1ua0.jpg"
        },
        "name": "Dragon Ball Z: Battle of Z"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 4,
      "onlinemax": 0,
      "platform": 46,
      "splitscreen": false,
      "checksum": "8133900c-1438-a1aa-824b-f8050cdacc4c"
    },
    {
      "id": 10714,
      "campaigncoop": false,
      "dropin": true,
      "game": {
        "id": 8246,
        "cover": {
          "id": 129785,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2s55.jpg"
        },
        "name": "Marvel vs. Capcom: Clash of Super Heroes"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinemax": 2,
      "onlinecoop": false,
      "platform": 7,
      "splitscreen": false,
      "checksum": "04144ed9-32c9-1122-a1c7-394f78ffc3aa"
    },
    {
      "id": 7697,
      "campaigncoop": true,
      "dropin": true,
      "game": {
        "id": 51673,
        "cover": {
          "id": 128752,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2rcg.jpg"
        },
        "name": "Solstice Arena"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 3,
      "onlinemax": 0,
      "platform": 39,
      "splitscreen": false,
      "checksum": "5935dff4-8074-e196-66f0-391608805621"
    },
    {
      "id": 42,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 51999,
        "cover": {
          "id": 28646,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/n58f37u149tiapkjkhjg.jpg"
        },
        "name": "Dark and Light: Tales of Gaia"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": true,
      "platform": 39,
      "splitscreen": false,
      "checksum": "0ad7ce1a-a55e-912d-42a8-c62ca0d4692c"
    },
    {
      "id": 4831,
      "campaigncoop": false,
      "dropin": true,
      "game": {
        "id": 34609,
        "cover": {
          "id": 100189,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co25b1.jpg"
        },
        "name": "TowerClimb"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 6,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 6,
      "splitscreen": false,
      "checksum": "a339e1d1-427e-ea31-5a49-a997a9a36591"
    },
    {
      "id": 1897,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 6414,
        "cover": {
          "id": 111529,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2e21.jpg"
        },
        "name": "Kingdom Under Fire II"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 15,
      "onlinemax": 0,
      "platform": 6,
      "splitscreen": false,
      "checksum": "994fad00-2938-17b8-4e76-fdadf416418b"
    },
    {
      "id": 9218,
      "campaigncoop": true,
      "dropin": true,
      "game": {
        "id": 5819,
        "cover": {
          "id": 276243,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co5x5f.jpg"
        },
        "name": "Dungeons \u0026 Dragons: Heroes"
      },
      "lancoop": true,
      "offlinecoop": true,
      "offlinecoopmax": 4,
      "offlinemax": 4,
      "onlinecoop": true,
      "onlinecoopmax": 4,
      "onlinemax": 4,
      "platform": 11,
      "splitscreen": true,
      "checksum": "c559693c-19cb-c0d9-93ec-a31bdb0c02d3"
    },
    {
      "id": 2011,
      "campaigncoop": false,
      "dropin": true,
      "game": {
        "id": 434,
        "cover": {
          "id": 120991,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2lcv.jpg"
        },
        "name": "Red Dead Redemption"
      },
      "lancoop": true,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 8,
      "onlinemax": 0,
      "platform": 12,
      "splitscreen": false,
      "checksum": "45b2e3be-60fe-f4c2-6755-873cf9b5c2ce"
    },
    {
      "id": 2012,
      "campaigncoop": true,
      "dropin": true,
      "game": {
        "id": 13181,
        "cover": {
          "id": 111570,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2e36.jpg"
        },
        "name": "Serious Sam HD: The Second Encounter"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 4,
      "onlinemax": 0,
      "platform": 12,
      "splitscreen": false,
      "checksum": "60b45eb9-1aef-f1b2-48ef-1d69967205c5"
    },
    {
      "id": 2013,
      "campaigncoop": true,
      "dropin": true,
      "game": {
        "id": 13181,
        "cover": {
          "id": 111570,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2e36.jpg"
        },
        "name": "Serious Sam HD: The Second Encounter"
      },
      "lancoop": true,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 16,
      "onlinemax": 0,
      "platform": 6,
      "splitscreen": false,
      "checksum": "c7380a13-2e3d-c5a4-13e7-9bece2e2e896"
    },
    {
      "id": 10392,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 16538,
        "cover": {
          "id": 138113,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2ykh.jpg"
        },
        "name": "Samurai Gunn"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 4,
      "offlinemax": 4,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 6,
      "splitscreen": false,
      "checksum": "c0559717-8c8e-01ed-957e-9fe865c9bae9"
    },
    {
      "id": 548,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 5584,
        "cover": {
          "id": 115433,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2h2h.jpg"
        },
        "name": "Earth Defense Force: Insect Armageddon"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 6,
      "onlinemax": 0,
      "platform": 9,
      "splitscreen": true,
      "checksum": "391cc134-83e1-a4d0-df4c-90508075b552"
    },
    {
      "id": 551,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 19256,
        "cover": {
          "id": 97461,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2379.jpg"
        },
        "name": "Phantasy Star Portable 2"
      },
      "lancoop": true,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 4,
      "onlinemax": 0,
      "platform": 38,
      "splitscreen": false,
      "checksum": "9332520d-9ee8-935f-c69c-e71a39d06fb4"
    },
    {
      "id": 1903,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 7111,
        "cover": {
          "id": 136621,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2xf1.jpg"
        },
        "name": "NCAA Football 10"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 9,
      "splitscreen": false,
      "checksum": "d703c441-9ce1-db3e-503a-27569d05d4c2"
    },
    {
      "id": 605,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 7459,
        "cover": {
          "id": 86432,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1uow.jpg"
        },
        "name": "SOCOM 4: U.S. Navy SEALs"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 5,
      "onlinemax": 0,
      "platform": 9,
      "splitscreen": false,
      "checksum": "20ebc54d-ed52-8b91-87c4-5507c56bf0f3"
    },
    {
      "id": 4804,
      "campaigncoop": true,
      "dropin": true,
      "game": {
        "id": 2050,
        "cover": {
          "id": 248810,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co5bze.jpg"
        },
        "name": "LEGO Marvel Super Heroes"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 12,
      "splitscreen": false,
      "checksum": "5fccf2d8-e589-0a6f-fc74-8fe33c17d9b4"
    },
    {
      "id": 11352,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 118907,
        "cover": {
          "id": 157479,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co3dif.jpg"
        },
        "name": "God of War: Ascension - Ultimate Edition"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "onlinemax": 8,
      "platform": 9,
      "splitscreen": false,
      "checksum": "2899009c-efd1-0389-8f69-7aec14059271"
    },
    {
      "id": 11350,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 1291,
        "cover": {
          "id": 157478,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co3die.jpg"
        },
        "name": "God of War: Ascension"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinemax": 8,
      "platform": 9,
      "splitscreen": false,
      "checksum": "a34ec435-b0c1-93e3-7281-e0569d517545"
    },
    {
      "id": 11465,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 3492,
        "cover": {
          "id": 236085,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co525x.jpg"
        },
        "name": "F-Zero GX"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinemax": 4,
      "onlinecoop": false,
      "platform": 21,
      "splitscreen": true,
      "checksum": "537d1844-8007-5246-4b25-5efa35c27d17"
    },
    {
      "id": 11596,
      "campaigncoop": true,
      "dropin": true,
      "game": {
        "id": 137309,
        "cover": {
          "id": 113401,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2fi1.jpg"
        },
        "name": "LEGO Marvel Super Heroes 2: Marvel\u0027s Guardians of the Galaxy - Vol. 2 Movie Level Pack"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "onlinecoop": false,
      "splitscreen": true,
      "checksum": "7a465158-7290-2a2a-2431-6549209bae16"
    },
    {
      "id": 22,
      "campaigncoop": false,
      "dropin": true,
      "game": {
        "id": 48336,
        "cover": {
          "id": 26838,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/rzv9cavfzzsadurki5qc.jpg"
        },
        "name": "Foolio: Fool your friends"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "onlinemax": 12,
      "platform": 39,
      "splitscreen": false,
      "checksum": "4e1d0c7d-c611-c433-3e77-1707eef1912b"
    },
    {
      "id": 28,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 14431,
        "cover": {
          "id": 27741,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/mxdcvxcv9ffurv9j61cn.jpg"
        },
        "name": "Scorched Earth"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "platform": 13,
      "splitscreen": true,
      "checksum": "daaf45e8-3329-0c8b-717d-7fb03510249d"
    },
    {
      "id": 8215,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 33984,
        "cover": {
          "id": 35474,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/gwdj4y93tq7tv8jwrxba.jpg"
        },
        "name": "Quatros Origins"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 4,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 49,
      "splitscreen": false,
      "checksum": "8938f08e-de46-1793-af0b-f6a69f342f5e"
    },
    {
      "id": 2226,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 57916,
        "cover": {
          "id": 102402,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co270i.jpg"
        },
        "name": "Airavat"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "platform": 34,
      "splitscreen": false,
      "checksum": "dd1d2654-7e7e-3fde-e0cb-95728e623d3f"
    },
    {
      "id": 10255,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 131814,
        "cover": {
          "id": 94105,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co20m1.jpg"
        },
        "name": "Sting"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "platform": 6,
      "splitscreen": false,
      "checksum": "73032a66-72c3-c9ae-e725-7ccb879d9891"
    },
    {
      "id": 667,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 7461,
        "cover": {
          "id": 198291,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co4903.jpg"
        },
        "name": "Starhawk"
      },
      "lancoop": true,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 4,
      "onlinemax": 0,
      "platform": 9,
      "splitscreen": true,
      "checksum": "0c5086c7-bd98-f073-98de-fbfa50d4de4e"
    },
    {
      "id": 4782,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 1970,
        "cover": {
          "id": 220883,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co4qfn.jpg"
        },
        "name": "Assassin\u0027s Creed IV Black Flag"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 4,
      "onlinemax": 0,
      "platform": 6,
      "splitscreen": false,
      "checksum": "21828a81-f761-f70d-498f-46a5df559475"
    },
    {
      "id": 523,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 14674,
        "cover": {
          "id": 101074,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co25zm.jpg"
        },
        "name": "Valkyria Chronicles 2"
      },
      "lancoop": true,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 38,
      "splitscreen": false,
      "checksum": "cb5e50c8-5176-a98c-0a15-b8b49d5c7624"
    },
    {
      "id": 525,
      "campaigncoop": true,
      "dropin": true,
      "game": {
        "id": 450,
        "cover": {
          "id": 77790,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1o0u.jpg"
        },
        "name": "Operation Flashpoint: Red River"
      },
      "lancoop": true,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 4,
      "onlinemax": 0,
      "platform": 12,
      "splitscreen": false,
      "checksum": "7efbdf01-daf7-c7ab-d812-d2e9432e9782"
    },
    {
      "id": 642,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 18373,
        "cover": {
          "id": 184208,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co3y4w.jpg"
        },
        "name": "Patapon 3"
      },
      "lancoop": true,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 4,
      "onlinemax": 0,
      "platform": 38,
      "splitscreen": false,
      "checksum": "47785103-1617-35bc-8c44-08d9092c2845"
    },
    {
      "id": 536,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 1302,
        "cover": {
          "id": 91346,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1yhe.jpg"
        },
        "name": "Tom Clancy\u0027s Ghost Recon Predator"
      },
      "lancoop": true,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 38,
      "splitscreen": false,
      "checksum": "4d46b63c-a009-c98f-9e3e-7d24df577c54"
    },
    {
      "id": 539,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 1843,
        "cover": {
          "id": 198891,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co49gr.jpg"
        },
        "name": "Tom Clancy\u0027s Rainbow Six: Rogue Spear"
      },
      "lancoop": true,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 8,
      "onlinemax": 0,
      "platform": 6,
      "splitscreen": false,
      "checksum": "dd2654e9-21b5-f67c-6974-6b62955c7619"
    },
    {
      "id": 671,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 2151,
        "cover": {
          "id": 98670,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co244u.jpg"
        },
        "name": "Catherine"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 12,
      "splitscreen": false,
      "checksum": "fcf0051f-3a2d-6a5c-7b65-fdc8228383a1"
    },
    {
      "id": 674,
      "campaigncoop": true,
      "dropin": true,
      "game": {
        "id": 14921,
        "cover": {
          "id": 21589,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/ey3jlrqat9biqvjvppx7.jpg"
        },
        "name": "Space Ark"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 12,
      "splitscreen": false,
      "checksum": "3b24059d-1a68-3c24-8aec-7bd994d745ce"
    },
    {
      "id": 675,
      "campaigncoop": true,
      "dropin": true,
      "game": {
        "id": 51643,
        "name": "Wanted Corps"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 2,
      "onlinemax": 0,
      "platform": 6,
      "splitscreen": false,
      "checksum": "9b59295a-791a-4d55-2294-07391f96a780"
    },
    {
      "id": 9467,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 110687,
        "cover": {
          "id": 119781,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2kf9.jpg"
        },
        "name": "Double Pug Switch"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "platform": 130,
      "splitscreen": false,
      "checksum": "8e784c44-2b4c-aed7-1bb8-745a7ee1d609"
    },
    {
      "id": 538,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 1842,
        "cover": {
          "id": 91320,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1ygo.jpg"
        },
        "name": "Tom Clancy\u0027s Rainbow Six"
      },
      "lancoop": true,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 8,
      "onlinemax": 0,
      "platform": 6,
      "splitscreen": false,
      "checksum": "26963112-e257-b34f-1d51-720546dd0ada"
    },
    {
      "id": 10977,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 1601,
        "cover": {
          "id": 141148,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co30ws.jpg"
        },
        "name": "Gran Turismo 4"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinemax": 2,
      "onlinecoop": false,
      "platform": 8,
      "splitscreen": true,
      "checksum": "f2e6104e-92a9-f85e-dc14-6b7d55c65f44"
    },
    {
      "id": 10159,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 2165,
        "cover": {
          "id": 79316,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1p78.jpg"
        },
        "name": "War Thunder"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 4,
      "onlinemax": 0,
      "platform": 48,
      "splitscreen": false,
      "checksum": "3d720d40-f6b0-a27c-9eae-c351ae980308"
    },
    {
      "id": 684,
      "campaigncoop": true,
      "dropin": true,
      "game": {
        "id": 6806,
        "cover": {
          "id": 104913,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co28y9.jpg"
        },
        "name": "Heroes of Ruin"
      },
      "lancoop": true,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 4,
      "onlinemax": 0,
      "platform": 37,
      "splitscreen": false,
      "checksum": "3f0ab10f-6d87-08b4-db96-02a79c86366a"
    },
    {
      "id": 1910,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 2678,
        "cover": {
          "id": 89083,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1wqj.jpg"
        },
        "name": "Band Hero"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 4,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 4,
      "onlinemax": 0,
      "platform": 12,
      "splitscreen": false,
      "checksum": "7e7fe837-65fc-d5d2-2b12-3aa4be5a369b"
    },
    {
      "id": 10553,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 48208,
        "cover": {
          "id": 52637,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/vx3o5icnrqqubgiaxtry.jpg"
        },
        "name": "Ring King"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinemax": 2,
      "onlinecoop": false,
      "platform": 18,
      "splitscreen": false,
      "checksum": "3acf7454-ea09-2925-cb8e-b128be506964"
    },
    {
      "id": 9958,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 121230,
        "cover": {
          "id": 83055,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1s33.jpg"
        },
        "name": "Garfield Kart: Furious Racing"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinemax": 4,
      "onlinecoop": false,
      "onlinemax": 8,
      "platform": 48,
      "splitscreen": true,
      "checksum": "620243e1-7db2-a9ad-1dd8-d11bb3875d86"
    },
    {
      "id": 7359,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 45276,
        "cover": {
          "id": 45101,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/zwc1yh1sedlcslgx5u9x.jpg"
        },
        "name": "Ratchet \u0026 Clank: A Crack in Time - Collector\u0027s Edition"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "splitscreen": false,
      "checksum": "f4f7c637-9470-5a41-7e74-cfb443dba322"
    },
    {
      "id": 554,
      "campaigncoop": true,
      "dropin": true,
      "game": {
        "id": 15071,
        "cover": {
          "id": 99003,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co24e3.jpg"
        },
        "name": "Evochron Mercenary"
      },
      "lancoop": true,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 35,
      "onlinemax": 0,
      "platform": 6,
      "splitscreen": false,
      "checksum": "1f457403-8e02-d4d4-e6ef-d7693c8aa441"
    },
    {
      "id": 7352,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 45137,
        "cover": {
          "id": 275759,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co5wrz.jpg"
        },
        "name": "The Legend of Zelda: Breath of the Wild - Master Edition"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "splitscreen": false,
      "checksum": "04be790f-c05c-30f3-131c-41a4f6662305"
    },
    {
      "id": 7358,
      "campaigncoop": false,
      "dropin": false,
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "splitscreen": false,
      "checksum": "70dbbe82-40b4-e80d-8a9f-ab5c4cd7ad9c"
    },
    {
      "id": 558,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 7135,
        "cover": {
          "id": 292134,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co69eu.jpg"
        },
        "name": "Power Gig: Rise of the SixString"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 3,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 9,
      "splitscreen": true,
      "checksum": "e4ab8a1f-28f0-8ab0-8e65-fb9a985727d0"
    },
    {
      "id": 9361,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 104819,
        "cover": {
          "id": 74610,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1lki.jpg"
        },
        "name": "Mutant Football League: Dynasty Edition"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 4,
      "offlinemax": 4,
      "onlinecoop": false,
      "onlinemax": 2,
      "platform": 6,
      "splitscreen": false,
      "checksum": "2a6c76d8-67c8-58d3-8b0b-89809e1984fa"
    },
    {
      "id": 7372,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 67177,
        "cover": {
          "id": 45107,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/dnqs07ws4lhgb4zefpem.jpg"
        },
        "name": "100,000 Games"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "splitscreen": false,
      "checksum": "5b98ad44-7da6-d851-b7e2-6c1d91a88fe5"
    },
    {
      "id": 676,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 16173,
        "cover": {
          "id": 57956,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/varmbzdzag5iumggxa5s.jpg"
        },
        "name": "Magic: The Gathering - Duels of the Planeswalkers 2012"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 3,
      "onlinemax": 0,
      "platform": 12,
      "splitscreen": false,
      "checksum": "b7c1cd96-6f37-3e92-9073-419d08afb426"
    },
    {
      "id": 677,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 1374,
        "cover": {
          "id": 83763,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1smr.jpg"
        },
        "name": "F1 2011"
      },
      "lancoop": true,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 2,
      "onlinemax": 0,
      "platform": 12,
      "splitscreen": true,
      "checksum": "9af1e2ea-20a4-6b16-3236-4e0e2bce52c0"
    },
    {
      "id": 9373,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 116645,
        "cover": {
          "id": 72670,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1k2m.jpg"
        },
        "name": "Mutant Football League: Dynasty Game Mode"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 4,
      "offlinemax": 4,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 2,
      "platform": 49,
      "splitscreen": false,
      "checksum": "7f5891d1-ed5d-da75-1c05-4b0dce12acfb"
    },
    {
      "id": 565,
      "campaigncoop": true,
      "dropin": true,
      "game": {
        "id": 5002,
        "cover": {
          "id": 198043,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co48t7.jpg"
        },
        "name": "Megamind: Ultimate Showdown"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 9,
      "splitscreen": false,
      "checksum": "c2674451-b4b0-b085-c7f1-b6a13d9853be"
    },
    {
      "id": 573,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 9963,
        "cover": {
          "id": 112071,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2eh3.jpg"
        },
        "name": "Alien Breed 3: Descent"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 2,
      "onlinemax": 0,
      "platform": 12,
      "splitscreen": false,
      "checksum": "9d40113f-4e91-7aac-de79-ab6daeeaccc6"
    },
    {
      "id": 10584,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 4271,
        "cover": {
          "id": 140311,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co309j.jpg"
        },
        "name": "Primal Rage"
      },
      "lancoop": false,
      "offlinecoop": false,
      "offlinemax": 2,
      "onlinecoop": false,
      "platform": 32,
      "splitscreen": false,
      "checksum": "8528bea1-3262-2cd4-6f59-ff57467ee425"
    },
    {
      "id": 9586,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 26166,
        "cover": {
          "id": 98852,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co249w.jpg"
        },
        "name": "Dauntless"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "onlinecoopmax": 4,
      "platform": 49,
      "splitscreen": false,
      "checksum": "f37f9bcd-e79b-9be3-8de6-c53ce1186d00"
    },
    {
      "id": 588,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 21077,
        "cover": {
          "id": 108892,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2c0s.jpg"
        },
        "name": "A World of Keflings"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 4,
      "onlinemax": 0,
      "platform": 12,
      "splitscreen": true,
      "checksum": "a05f4f9d-0f21-37a7-705f-f22871e780f3"
    },
    {
      "id": 1847,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 20568,
        "cover": {
          "id": 139286,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2zh2.jpg"
        },
        "name": "Carnivores: Cityscape"
      },
      "lancoop": true,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 6,
      "splitscreen": false,
      "checksum": "b929ee89-e47a-ec0e-e4e9-7ecc818862fb"
    },
    {
      "id": 1904,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 7111,
        "cover": {
          "id": 136621,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2xf1.jpg"
        },
        "name": "NCAA Football 10"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 12,
      "splitscreen": false,
      "checksum": "a190f1f4-b667-a027-3d6e-b0074561b6d4"
    },
    {
      "id": 597,
      "campaigncoop": true,
      "dropin": true,
      "game": {
        "id": 21082,
        "cover": {
          "id": 47434,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/caomxl15lvzxwfprnwb4.jpg"
        },
        "name": "MicroBot"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 9,
      "splitscreen": false,
      "checksum": "c240c3cf-5bab-d540-eed3-8ff2ab2e8c59"
    },
    {
      "id": 628,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 10177,
        "cover": {
          "id": 126868,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2pw4.jpg"
        },
        "name": "Defenders of Ardania"
      },
      "lancoop": true,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 4,
      "onlinemax": 0,
      "platform": 6,
      "splitscreen": false,
      "checksum": "7cee919e-6ca8-cf12-89f7-b6ec825088e7"
    },
    {
      "id": 630,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 9485,
        "cover": {
          "id": 9640,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/dhtf38dhlqoresd7pkwa.jpg"
        },
        "name": "Toy Soldiers: Cold War"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 2,
      "onlinemax": 0,
      "platform": 12,
      "splitscreen": true,
      "checksum": "1911334f-830c-eb36-b0d2-fa6a20ab139b"
    },
    {
      "id": 9656,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 842,
        "cover": {
          "id": 692,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/t7xcxbtpnrs1gnbgwlc5.jpg"
        },
        "name": "Rally Trophy"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "onlinemax": 6,
      "splitscreen": false,
      "checksum": "2e1fae24-70e7-8742-3081-2b06225de4f8"
    },
    {
      "id": 650,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 528,
        "cover": {
          "id": 118651,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2jjv.jpg"
        },
        "name": "Red Faction: Armageddon"
      },
      "lancoop": true,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 4,
      "onlinemax": 0,
      "platform": 12,
      "splitscreen": false,
      "checksum": "7a8ffc1e-f302-4502-9407-2db5c7355df5"
    },
    {
      "id": 651,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 7412,
        "cover": {
          "id": 78869,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1out.jpg"
        },
        "name": "Fallout: Brotherhood of Steel"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 11,
      "splitscreen": false,
      "checksum": "d5b16112-7311-0ce5-0a0a-839df4aa2269"
    },
    {
      "id": 699,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 3002,
        "cover": {
          "id": 181878,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co3wc6.jpg"
        },
        "name": "Dragon\u0027s Crown"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 4,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 4,
      "onlinemax": 0,
      "platform": 9,
      "splitscreen": false,
      "checksum": "c534ddd8-e41c-7e84-e5b6-a7dcf4d2b610"
    },
    {
      "id": 654,
      "campaigncoop": true,
      "dropin": false,
      "game": {
        "id": 3695,
        "cover": {
          "id": 90718,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1xzy.jpg"
        },
        "name": "The Settlers 7: Paths to a Kingdom"
      },
      "lancoop": true,
      "offlinecoop": false,
      "offlinecoopmax": 0,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 2,
      "onlinemax": 0,
      "platform": 6,
      "splitscreen": false,
      "checksum": "3f5971e7-8baf-d0d8-08f3-6010fe57ce87"
    },
    {
      "id": 5061,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 20402,
        "cover": {
          "id": 99741,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co24yl.jpg"
        },
        "name": "Demon\u0027s Crystals"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 4,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 6,
      "splitscreen": false,
      "checksum": "e412951a-a3bf-caa8-3c95-61a71cdec3f3"
    },
    {
      "id": 2197,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 33632,
        "cover": {
          "id": 77765,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co1o05.jpg"
        },
        "name": "Abstract Arena"
      },
      "lancoop": true,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 2,
      "onlinecoop": true,
      "onlinecoopmax": 6,
      "onlinemax": 6,
      "platform": 6,
      "splitscreen": true,
      "checksum": "577fad88-d999-10b3-986e-f26d0594a2c6"
    },
    {
      "id": 662,
      "campaigncoop": true,
      "dropin": true,
      "game": {
        "id": 51635,
        "cover": {
          "id": 268723,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co5rcj.jpg"
        },
        "name": "Guardian Heroes HD"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 2,
      "offlinemax": 0,
      "onlinecoop": true,
      "onlinecoopmax": 2,
      "onlinemax": 0,
      "platform": 12,
      "splitscreen": false,
      "checksum": "83e782bc-3fb9-8c05-e3b8-6b2174d05fb9"
    },
    {
      "id": 663,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 10170,
        "cover": {
          "id": 46930,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/ghrxzndjaz4txfowpary.jpg"
        },
        "name": "Dead Block"
      },
      "lancoop": false,
      "offlinecoop": true,
      "offlinecoopmax": 4,
      "offlinemax": 0,
      "onlinecoop": false,
      "onlinecoopmax": 0,
      "onlinemax": 0,
      "platform": 9,
      "splitscreen": true,
      "checksum": "c2a35dcc-bb72-b0ad-61bb-1594f16ef17d"
    },
    {
      "id": 7682,
      "campaigncoop": false,
      "dropin": false,
      "game": {
        "id": 76735,
        "cover": {
          "id": 119759,
          "url": "//images.igdb.com/igdb/image/upload/t_thumb/co2ken.jpg"
        },
        "name": "The Drone Racing League Simulator"
      },
      "lancoop": false,
      "offlinecoop": false,
      "onlinecoop": false,
      "splitscreen": false,
      "checksum": "ea96e0ec-5348-a1c0-eddd-8e9c2927051f"
    }
  ]


mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);

    return Game.deleteMany({}); //WARNING: this will delete all games in your DB !!
  })
  .then( (response) => {
    console.log(response);

    return Game.insertMany(games);
  })
  .then(gamesFromDB => {
    console.log(`Created ${gamesFromDB.length} games`);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error connecting to DB: ", err);
  });
