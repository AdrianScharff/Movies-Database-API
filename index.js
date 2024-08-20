import express from "express"
const app = express()
const movies = [
    {
        "adult": false,
        "backdrop_path": "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 278,
        "original_language": "en",
        "original_title": "The Shawshank Redemption",
        "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
        "popularity": 118.686,
        "poster_path": "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        "release_date": "1994-09-23",
        "title": "The Shawshank Redemption",
        "video": false,
        "vote_average": 8.711,
        "vote_count": 25502
    },
    {
        "adult": false,
        "backdrop_path": "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 238,
        "original_language": "en",
        "original_title": "The Godfather",
        "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
        "popularity": 105.836,
        "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "release_date": "1972-03-14",
        "title": "The Godfather",
        "video": false,
        "vote_average": 8.707,
        "vote_count": 19401
    },
    {
        "adult": false,
        "backdrop_path": "/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 240,
        "original_language": "en",
        "original_title": "The Godfather Part II",
        "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
        "popularity": 69.088,
        "poster_path": "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
        "release_date": "1974-12-20",
        "title": "The Godfather Part II",
        "video": false,
        "vote_average": 8.591,
        "vote_count": 11704
    },
    {
        "adult": false,
        "backdrop_path": "/3f92DMBTFqr3wgXpfxzrb0qv8nG.jpg",
        "genre_ids": [
            18,
            36,
            10752
        ],
        "id": 424,
        "original_language": "en",
        "original_title": "Schindler's List",
        "overview": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
        "popularity": 60.427,
        "poster_path": "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
        "release_date": "1993-12-15",
        "title": "Schindler's List",
        "video": false,
        "vote_average": 8.572,
        "vote_count": 15087
    },
    {
        "adult": false,
        "backdrop_path": "/qqHQsStV6exghCM7zbObuYBiYxw.jpg",
        "genre_ids": [
            18
        ],
        "id": 389,
        "original_language": "en",
        "original_title": "12 Angry Men",
        "overview": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
        "popularity": 45.789,
        "poster_path": "/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
        "release_date": "1957-04-10",
        "title": "12 Angry Men",
        "video": false,
        "vote_average": 8.547,
        "vote_count": 8007
    },
    {
        "adult": false,
        "backdrop_path": "/90ez6ArvpO8bvpyIngBuwXOqJm5.jpg",
        "genre_ids": [
            35,
            18,
            10749
        ],
        "id": 19404,
        "original_language": "hi",
        "original_title": "दिलवाले दुल्हनिया ले जायेंगे",
        "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
        "popularity": 31.083,
        "poster_path": "/lfRkUr7DYdHldAqi3PwdQGBRBPM.jpg",
        "release_date": "1995-10-20",
        "title": "Dilwale Dulhania Le Jayenge",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 4331
    },
    {
        "adult": false,
        "backdrop_path": "/mSDsSDwaP3E7dEfUPWy4J0djt4O.jpg",
        "genre_ids": [
            16,
            10751,
            14
        ],
        "id": 129,
        "original_language": "ja",
        "original_title": "千と千尋の神隠し",
        "overview": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
        "popularity": 105.598,
        "poster_path": "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
        "release_date": "2001-07-20",
        "title": "Spirited Away",
        "video": false,
        "vote_average": 8.539,
        "vote_count": 15488
    },
    {
        "adult": false,
        "backdrop_path": "/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg",
        "genre_ids": [
            18,
            28,
            80,
            53
        ],
        "id": 155,
        "original_language": "en",
        "original_title": "The Dark Knight",
        "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
        "popularity": 91.653,
        "poster_path": "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "release_date": "2008-07-16",
        "title": "The Dark Knight",
        "video": false,
        "vote_average": 8.515,
        "vote_count": 31403
    },
    {
        "adult": false,
        "backdrop_path": "/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg",
        "genre_ids": [
            35,
            53,
            18
        ],
        "id": 496243,
        "original_language": "ko",
        "original_title": "기생충",
        "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
        "popularity": 89.093,
        "poster_path": "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        "release_date": "2019-05-30",
        "title": "Parasite",
        "video": false,
        "vote_average": 8.512,
        "vote_count": 17054
    },
    {
        "adult": false,
        "backdrop_path": "/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg",
        "genre_ids": [
            14,
            18,
            80
        ],
        "id": 497,
        "original_language": "en",
        "original_title": "The Green Mile",
        "overview": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
        "popularity": 65.466,
        "poster_path": "/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
        "release_date": "1999-12-10",
        "title": "The Green Mile",
        "video": false,
        "vote_average": 8.51,
        "vote_count": 16440
    },
    {
        "adult": false,
        "backdrop_path": "/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg",
        "genre_ids": [
            10749,
            16,
            18
        ],
        "id": 372058,
        "original_language": "ja",
        "original_title": "君の名は。",
        "overview": "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
        "popularity": 71.61,
        "poster_path": "/q719jXXEzOoYaps6babgKnONONX.jpg",
        "release_date": "2016-08-26",
        "title": "Your Name.",
        "video": false,
        "vote_average": 8.498,
        "vote_count": 10732
    },
    {
        "adult": false,
        "backdrop_path": "/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
        "genre_ids": [
            53,
            80
        ],
        "id": 680,
        "original_language": "en",
        "original_title": "Pulp Fiction",
        "overview": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
        "popularity": 95.233,
        "poster_path": "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        "release_date": "1994-09-10",
        "title": "Pulp Fiction",
        "video": false,
        "vote_average": 8.489,
        "vote_count": 26599
    },
    {
        "adult": false,
        "backdrop_path": "/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg",
        "genre_ids": [
            12,
            14,
            28
        ],
        "id": 122,
        "original_language": "en",
        "original_title": "The Lord of the Rings: The Return of the King",
        "overview": "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
        "popularity": 99.758,
        "poster_path": "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
        "release_date": "2003-12-01",
        "title": "The Lord of the Rings: The Return of the King",
        "video": false,
        "vote_average": 8.477,
        "vote_count": 22983
    },
    {
        "adult": false,
        "backdrop_path": "/qdIMHd4sEfJSckfVJfKQvisL02a.jpg",
        "genre_ids": [
            35,
            18,
            10749
        ],
        "id": 13,
        "original_language": "en",
        "original_title": "Forrest Gump",
        "overview": "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
        "popularity": 83.378,
        "poster_path": "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
        "release_date": "1994-06-23",
        "title": "Forrest Gump",
        "video": false,
        "vote_average": 8.477,
        "vote_count": 26123
    },
    {
        "adult": false,
        "backdrop_path": "/x4biAVdPVCghBlsVIzB6NmbghIz.jpg",
        "genre_ids": [
            37
        ],
        "id": 429,
        "original_language": "it",
        "original_title": "Il buono, il brutto, il cattivo",
        "overview": "While the Civil War rages on between the Union and the Confederacy, three men – a quiet loner, a ruthless hitman, and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
        "popularity": 73.156,
        "poster_path": "/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
        "release_date": "1966-12-22",
        "title": "The Good, the Bad and the Ugly",
        "video": false,
        "vote_average": 8.468,
        "vote_count": 8062
    },
    {
        "adult": false,
        "backdrop_path": "/sw7mordbZxgITU877yTpZCud90M.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 769,
        "original_language": "en",
        "original_title": "GoodFellas",
        "overview": "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
        "popularity": 52.46,
        "poster_path": "/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
        "release_date": "1990-09-12",
        "title": "GoodFellas",
        "video": false,
        "vote_average": 8.467,
        "vote_count": 12134
    },
    {
        "adult": false,
        "backdrop_path": "/qvZ91FwMq6O47VViAr8vZNQz3WI.jpg",
        "genre_ids": [
            28,
            18
        ],
        "id": 346,
        "original_language": "ja",
        "original_title": "七人の侍",
        "overview": "A samurai answers a village's request for protection after he falls on hard times. The town needs protection from bandits, so the samurai gathers six others to help him teach the people how to defend themselves, and the villagers provide the soldiers with food.",
        "popularity": 36.585,
        "poster_path": "/8OKmBV5BUFzmozIC3pPWKHy17kx.jpg",
        "release_date": "1954-04-26",
        "title": "Seven Samurai",
        "video": false,
        "vote_average": 8.458,
        "vote_count": 3390
    },
    {
        "adult": false,
        "backdrop_path": "/dlC0ed9Ugh3FzydnkBtV5lRXUu4.jpg",
        "genre_ids": [
            16,
            18,
            10752
        ],
        "id": 12477,
        "original_language": "ja",
        "original_title": "火垂るの墓",
        "overview": "In the final months of World War II, 14-year-old Seita and his sister Setsuko are orphaned when their mother is killed during an air raid in Kobe, Japan. After a falling out with their aunt, they move into an abandoned bomb shelter. With no surviving relatives and their emergency rations depleted, Seita and Setsuko struggle to survive.",
        "popularity": 0.6,
        "poster_path": "/k9tv1rXZbOhH7eiCk378x61kNQ1.jpg",
        "release_date": "1988-04-16",
        "title": "Grave of the Fireflies",
        "video": false,
        "vote_average": 8.457,
        "vote_count": 5087
    },
    {
        "adult": false,
        "backdrop_path": "/gavyCu1UaTaTNPsVaGXT6pe5u24.jpg",
        "genre_ids": [
            35,
            18
        ],
        "id": 637,
        "original_language": "it",
        "original_title": "La vita è bella",
        "overview": "A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.",
        "popularity": 41.033,
        "poster_path": "/6tEJnof1DKWPnl5lzkjf0FVv7oB.jpg",
        "release_date": "1997-12-20",
        "title": "Life Is Beautiful",
        "video": false,
        "vote_average": 8.455,
        "vote_count": 12550
    },
    {
        "adult": false,
        "backdrop_path": "/zoVeIgKzGJzpdG6Gwnr7iOYfIMU.jpg",
        "genre_ids": [
            18,
            10749
        ],
        "id": 11216,
        "original_language": "it",
        "original_title": "Nuovo Cinema Paradiso",
        "overview": "A filmmaker recalls his childhood, when he fell in love with the movies at his village's theater and formed a deep friendship with the theater's projectionist.",
        "popularity": 28.229,
        "poster_path": "/8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg",
        "release_date": "1988-11-17",
        "title": "Cinema Paradiso",
        "video": false,
        "vote_average": 8.452,
        "vote_count": 4108
    },
    {
        "adult": false,
        "backdrop_path": "/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg",
        "genre_ids": [
            28,
            53,
            18
        ],
        "id": 866398,
        "original_language": "en",
        "original_title": "The Beekeeper",
        "overview": "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
        "popularity": 4645.469,
        "poster_path": "/A7EByudX0eOzlkQ2FIbogzyazm2.jpg",
        "release_date": "2024-01-10",
        "title": "The Beekeeper",
        "video": false,
        "vote_average": 7.241,
        "vote_count": 820
    },
    {
        "adult": false,
        "backdrop_path": "/pWsD91G2R1Da3AKM3ymr3UoIfRb.jpg",
        "genre_ids": [
            28,
            878,
            18
        ],
        "id": 933131,
        "original_language": "ko",
        "original_title": "황야",
        "overview": "After a deadly earthquake turns Seoul into a lawless badland, a fearless huntsman springs into action to rescue a teenager abducted by a mad doctor.",
        "popularity": 1560.324,
        "poster_path": "/zVMyvNowgbsBAL6O6esWfRpAcOb.jpg",
        "release_date": "2024-01-26",
        "title": "Badland Hunters",
        "video": false,
        "vote_average": 6.855,
        "vote_count": 227
    },
    {
        "adult": false,
        "backdrop_path": "/yyFc8Iclt2jxPmLztbP617xXllT.jpg",
        "genre_ids": [
            35,
            10751,
            14
        ],
        "id": 787699,
        "original_language": "en",
        "original_title": "Wonka",
        "overview": "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
        "popularity": 1440.105,
        "poster_path": "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
        "release_date": "2023-12-06",
        "title": "Wonka",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 1935
    },
    {
        "adult": false,
        "backdrop_path": "/feSiISwgEpVzR1v3zv2n2AU4ANJ.jpg",
        "genre_ids": [
            878,
            12,
            28
        ],
        "id": 609681,
        "original_language": "en",
        "original_title": "The Marvels",
        "overview": "Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.",
        "popularity": 1399.352,
        "poster_path": "/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg",
        "release_date": "2023-11-08",
        "title": "The Marvels",
        "video": false,
        "vote_average": 6.338,
        "vote_count": 1453
    },
    {
        "adult": false,
        "backdrop_path": "/cnqwv5Uz3UW5f086IWbQKr3ksJr.jpg",
        "genre_ids": [
            28,
            12,
            14
        ],
        "id": 572802,
        "original_language": "en",
        "original_title": "Aquaman and the Lost Kingdom",
        "overview": "Black Manta seeks revenge on Aquaman for his father's death. Wielding the Black Trident's power, he becomes a formidable foe. To defend Atlantis, Aquaman forges an alliance with his imprisoned brother. They must protect the kingdom.",
        "popularity": 1111.929,
        "poster_path": "/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg",
        "release_date": "2023-12-20",
        "title": "Aquaman and the Lost Kingdom",
        "video": false,
        "vote_average": 6.96,
        "vote_count": 1480
    },
    {
        "adult": false,
        "backdrop_path": "/meyhnvssZOPPjud4F1CjOb4snET.jpg",
        "genre_ids": [
            16,
            28,
            12,
            35,
            10751
        ],
        "id": 940551,
        "original_language": "en",
        "original_title": "Migration",
        "overview": "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
        "popularity": 1015.587,
        "poster_path": "/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
        "release_date": "2023-12-06",
        "title": "Migration",
        "video": false,
        "vote_average": 7.646,
        "vote_count": 553
    },
    {
        "adult": false,
        "backdrop_path": "/ehumsuIBbgAe1hg343oszCLrAfI.jpg",
        "genre_ids": [
            16,
            10751,
            14,
            12
        ],
        "id": 1022796,
        "original_language": "en",
        "original_title": "Wish",
        "overview": "Asha, a sharp-witted idealist, makes a wish so powerful that it is answered by a cosmic force – a little ball of boundless energy called Star. Together, Asha and Star confront a most formidable foe - the ruler of Rosas, King Magnifico - to save her community and prove that when the will of one courageous human connects with the magic of the stars, wondrous things can happen.",
        "popularity": 990.424,
        "poster_path": "/AcoVfiv1rrWOmAdpnAMnM56ki19.jpg",
        "release_date": "2023-11-13",
        "title": "Wish",
        "video": false,
        "vote_average": 6.665,
        "vote_count": 652
    },
    {
        "adult": false,
        "backdrop_path": "/unvtbkgxh47BewQ8pENvdOdme0r.jpg",
        "genre_ids": [
            28,
            18
        ],
        "id": 1212073,
        "original_language": "de",
        "original_title": "60 Minuten",
        "overview": "Desperate to keep custody of his daughter, a mixed martial arts fighter abandons a big match and races across Berlin to attend her birthday party.",
        "popularity": 923.603,
        "poster_path": "/jojfbnIHGsRpodIood3OQoqA45Y.jpg",
        "release_date": "2024-01-19",
        "title": "Sixty Minutes",
        "video": false,
        "vote_average": 7.064,
        "vote_count": 225
    },
    {
        "adult": false,
        "backdrop_path": "/y9Dr6yCVYRmjKuDjOjNyWxVuGjp.jpg",
        "genre_ids": [
            80,
            28
        ],
        "id": 370464,
        "original_language": "en",
        "original_title": "The Masked Saint",
        "overview": "The journey of a professional wrestler who becomes a small town pastor and moonlights as a masked vigilante fighting injustice. While facing crises at home and at the church, the Pastor must evade the police and somehow reconcile his violent secret identity with his calling as a pastor.",
        "popularity": 867.889,
        "poster_path": "/zlT1Tc9hA1Ntye5hr7Gxos9U6U9.jpg",
        "release_date": "2016-01-08",
        "title": "The Masked Saint",
        "video": false,
        "vote_average": 3.875,
        "vote_count": 24
    },
    {
        "adult": false,
        "backdrop_path": "/1BFLsVxE1NzCIwicfOPtzzB4Kxh.jpg",
        "genre_ids": [
            80,
            53,
            28
        ],
        "id": 982940,
        "original_language": "en",
        "original_title": "Due Justice",
        "overview": "An attorney with a military past hunts down the gang who killed his wife and took his daughter.",
        "popularity": 860.86,
        "poster_path": "/35Uef7fz9ctYbJLXbJBCqvtttEQ.jpg",
        "release_date": "2023-11-24",
        "title": "Due Justice",
        "video": false,
        "vote_average": 6.98,
        "vote_count": 25
    },
    {
        "adult": false,
        "backdrop_path": "/ba9TgAO4I8RyA2LljzR3MspHaM9.jpg",
        "genre_ids": [
            28,
            878,
            53
        ],
        "id": 799155,
        "original_language": "hi",
        "original_title": "Attack",
        "overview": "With the Parliament under siege, India’s first super soldier Arjun Shergill is tasked to get hold of the terrorists in the nick of time, save the Prime Minister from their clutches and stop a dirty bomb from exploding and destroying Delhi. Will Arjun succeed in his mission?",
        "popularity": 719.265,
        "poster_path": "/5jGKbYuZtdxSNOocI6ZziQeiY4n.jpg",
        "release_date": "2022-04-01",
        "title": "Attack",
        "video": false,
        "vote_average": 7.366,
        "vote_count": 116
    },
    {
        "adult": false,
        "backdrop_path": "/zUY1WawCBY8y6YBoiUCAmUorXfx.jpg",
        "genre_ids": [
            14,
            28,
            12
        ],
        "id": 528656,
        "original_language": "zh",
        "original_title": "战神纪",
        "overview": "Temüjin and Börte are childhood lovers who are deeply in love; but news of Temüjin's father's death swiftly disrupted their relationship. Temüjin heads back to his hometown, but was faced with a sudden attack from his father's former comrades, causing his whole tribe to be destroyed.",
        "popularity": 692.258,
        "poster_path": "/FgFoX4wlZUT31ErGGzVnNlh8U3.jpg",
        "release_date": "2018-04-28",
        "title": "Genghis Khan",
        "video": false,
        "vote_average": 5.1,
        "vote_count": 7
    },
    {
        "adult": false,
        "backdrop_path": "/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg",
        "genre_ids": [
            36,
            10752,
            28,
            18
        ],
        "id": 753342,
        "original_language": "en",
        "original_title": "Napoleon",
        "overview": "An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.",
        "popularity": 641.688,
        "poster_path": "/vcZWJGvB5xydWuUO1vaTLI82tGi.jpg",
        "release_date": "2023-11-22",
        "title": "Napoleon",
        "video": false,
        "vote_average": 6.532,
        "vote_count": 1607
    },
    {
        "adult": false,
        "backdrop_path": "/rz8GGX5Id2hCW1KzAIY4xwbQw1w.jpg",
        "genre_ids": [
            28,
            35,
            80
        ],
        "id": 955916,
        "original_language": "en",
        "original_title": "Lift",
        "overview": "An international heist crew, led by Cyrus Whitaker, race to lift $500 million in gold from a passenger plane at 40,000 feet.",
        "popularity": 609.763,
        "poster_path": "/gma8o1jWa6m0K1iJ9TzHIiFyTtI.jpg",
        "release_date": "2024-01-10",
        "title": "Lift",
        "video": false,
        "vote_average": 6.578,
        "vote_count": 689
    },
    {
        "adult": false,
        "backdrop_path": "/xCt3Ha6hhHep5pwiW2FSenC59Gn.jpg",
        "genre_ids": [
            28,
            10752
        ],
        "id": 965571,
        "original_language": "ru",
        "original_title": "Время патриотов",
        "overview": "The brothers Sultan and Bekzat Ibrayev are serving faithfully in the Armed Forces of Kazakhstan, and at the same time they are in family disagreement. Sultan is a valiant intelligence officer and Bekzat is a talented fighter pilot. While an international terrorist organization prepares a carefully planned attack on the country's strategically important facilities, the brothers have to face not only a mortal threat, but also face a family confrontation related to their dead father. Circumstances force them to unite in order to save human lives, and the brothers eventually understand that their homeland and family are the most valuable thing they have.",
        "popularity": 563.697,
        "poster_path": "/yrafAmPQgr5RWEe67BrbHu7jiB.jpg",
        "release_date": "2022-04-28",
        "title": "Patriots Time",
        "video": false,
        "vote_average": 8.339,
        "vote_count": 31
    },
    {
        "adult": false,
        "backdrop_path": "/zLj0peaxy5y2SlC6wNIQ4V0pfqg.jpg",
        "genre_ids": [
            16,
            10751,
            35,
            14
        ],
        "id": 1139829,
        "original_language": "en",
        "original_title": "Orion and the Dark",
        "overview": "A boy with an active imagination faces his fears on an unforgettable journey through the night with his new friend: a giant, smiling creature named Dark.",
        "popularity": 529.249,
        "poster_path": "/uHiXFLMlnl5jBjtfOliapN16yBD.jpg",
        "release_date": "2024-02-02",
        "title": "Orion and the Dark",
        "video": false,
        "vote_average": 6.863,
        "vote_count": 113
    },
    {
        "adult": false,
        "backdrop_path": "/75nSb1fbWooipwcSU5bUttiOriI.jpg",
        "genre_ids": [
            16,
            12,
            14
        ],
        "id": 508883,
        "original_language": "ja",
        "original_title": "君たちはどう生きるか",
        "overview": "While the Second World War rages, the teenage Mahito, haunted by his mother's tragic death, is relocated from Tokyo to the serene rural home of his new stepmother Natsuko, a woman who bears a striking resemblance to the boy's mother. As he tries to adjust, this strange new world grows even stranger following the appearance of a persistent gray heron, who perplexes and bedevils Mahito, dubbing him the \"long-awaited one.\"",
        "popularity": 468.024,
        "poster_path": "/y9xS5NQTBnFjDoXhSFQeGxlmkoM.jpg",
        "release_date": "2023-07-14",
        "title": "The Boy and the Heron",
        "video": false,
        "vote_average": 7.463,
        "vote_count": 921
    },
    {
        "adult": false,
        "backdrop_path": "/tlNzm03CHTNEXc1mih0obFBYwwx.jpg",
        "genre_ids": [
            878,
            28
        ],
        "id": 1028725,
        "original_language": "zh",
        "original_title": "变种人：幽灵战姬",
        "overview": "Wu Qingqing is an agent of the International Security Alliance (to combat mutant crime) and is ordered to infiltrate Medusa Plastic Hospital to collect evidence of the secret research on genetic induction fluid by its direct consortium to create mutant fighters. Wu Qingqing successfully infiltrates, but was forced to inject a gene induction fluid.",
        "popularity": 441.927,
        "poster_path": "/ensNfCsxIRIr6LJnrRCXd94tfd.jpg",
        "release_date": "2022-09-26",
        "title": "Mutant: Ghost War Girl",
        "video": false,
        "vote_average": 5.222,
        "vote_count": 18
    },
    {
        "adult": false,
        "backdrop_path": "/bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg",
        "genre_ids": [
            878,
            10749,
            35
        ],
        "id": 792307,
        "original_language": "en",
        "original_title": "Poor Things",
        "overview": "Brought back to life by an unorthodox scientist, a young woman runs off with a debauched lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.",
        "popularity": 441.719,
        "poster_path": "/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
        "release_date": "2023-12-07",
        "title": "Poor Things",
        "video": false,
        "vote_average": 8.168,
        "vote_count": 998
    },
    {
        "adult": false,
        "backdrop_path": "/8GnWDLn2AhnmkQ7hlQ9NJUYobSS.jpg",
        "genre_ids": [
            18,
            878,
            28
        ],
        "id": 695721,
        "original_language": "en",
        "original_title": "The Hunger Games: The Ballad of Songbirds & Snakes",
        "overview": "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
        "popularity": 423.413,
        "poster_path": "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
        "release_date": "2023-11-15",
        "title": "The Hunger Games: The Ballad of Songbirds & Snakes",
        "video": false,
        "vote_average": 7.222,
        "vote_count": 1668
    },
    {
        "adult": false,
        "backdrop_path": "/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg",
        "genre_ids": [
            28,
            53,
            18
        ],
        "id": 866398,
        "original_language": "en",
        "original_title": "The Beekeeper",
        "overview": "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
        "popularity": 4645.469,
        "poster_path": "/A7EByudX0eOzlkQ2FIbogzyazm2.jpg",
        "release_date": "2024-01-10",
        "title": "The Beekeeper",
        "video": false,
        "vote_average": 7.257,
        "vote_count": 814
    },
    {
        "adult": false,
        "backdrop_path": "/pWsD91G2R1Da3AKM3ymr3UoIfRb.jpg",
        "genre_ids": [
            28,
            878,
            18
        ],
        "id": 933131,
        "original_language": "ko",
        "original_title": "황야",
        "overview": "After a deadly earthquake turns Seoul into a lawless badland, a fearless huntsman springs into action to rescue a teenager abducted by a mad doctor.",
        "popularity": 1560.324,
        "poster_path": "/zVMyvNowgbsBAL6O6esWfRpAcOb.jpg",
        "release_date": "2024-01-26",
        "title": "Badland Hunters",
        "video": false,
        "vote_average": 6.864,
        "vote_count": 225
    },
    {
        "adult": false,
        "backdrop_path": "/yyFc8Iclt2jxPmLztbP617xXllT.jpg",
        "genre_ids": [
            35,
            10751,
            14
        ],
        "id": 787699,
        "original_language": "en",
        "original_title": "Wonka",
        "overview": "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
        "popularity": 1440.105,
        "poster_path": "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
        "release_date": "2023-12-06",
        "title": "Wonka",
        "video": false,
        "vote_average": 7.206,
        "vote_count": 1929
    },
    {
        "adult": false,
        "backdrop_path": "/cnqwv5Uz3UW5f086IWbQKr3ksJr.jpg",
        "genre_ids": [
            28,
            12,
            14
        ],
        "id": 572802,
        "original_language": "en",
        "original_title": "Aquaman and the Lost Kingdom",
        "overview": "Black Manta seeks revenge on Aquaman for his father's death. Wielding the Black Trident's power, he becomes a formidable foe. To defend Atlantis, Aquaman forges an alliance with his imprisoned brother. They must protect the kingdom.",
        "popularity": 1111.929,
        "poster_path": "/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg",
        "release_date": "2023-12-20",
        "title": "Aquaman and the Lost Kingdom",
        "video": false,
        "vote_average": 6.965,
        "vote_count": 1476
    },
    {
        "adult": false,
        "backdrop_path": "/meyhnvssZOPPjud4F1CjOb4snET.jpg",
        "genre_ids": [
            16,
            28,
            12,
            35,
            10751
        ],
        "id": 940551,
        "original_language": "en",
        "original_title": "Migration",
        "overview": "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
        "popularity": 1015.587,
        "poster_path": "/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
        "release_date": "2023-12-06",
        "title": "Migration",
        "video": false,
        "vote_average": 7.642,
        "vote_count": 552
    },
    {
        "adult": false,
        "backdrop_path": "/ehumsuIBbgAe1hg343oszCLrAfI.jpg",
        "genre_ids": [
            16,
            10751,
            14,
            12
        ],
        "id": 1022796,
        "original_language": "en",
        "original_title": "Wish",
        "overview": "Asha, a sharp-witted idealist, makes a wish so powerful that it is answered by a cosmic force – a little ball of boundless energy called Star. Together, Asha and Star confront a most formidable foe - the ruler of Rosas, King Magnifico - to save her community and prove that when the will of one courageous human connects with the magic of the stars, wondrous things can happen.",
        "popularity": 990.424,
        "poster_path": "/AcoVfiv1rrWOmAdpnAMnM56ki19.jpg",
        "release_date": "2023-11-13",
        "title": "Wish",
        "video": false,
        "vote_average": 6.675,
        "vote_count": 650
    },
    {
        "adult": false,
        "backdrop_path": "/unvtbkgxh47BewQ8pENvdOdme0r.jpg",
        "genre_ids": [
            28,
            18
        ],
        "id": 1212073,
        "original_language": "de",
        "original_title": "60 Minuten",
        "overview": "Desperate to keep custody of his daughter, a mixed martial arts fighter abandons a big match and races across Berlin to attend her birthday party.",
        "popularity": 923.603,
        "poster_path": "/jojfbnIHGsRpodIood3OQoqA45Y.jpg",
        "release_date": "2024-01-19",
        "title": "Sixty Minutes",
        "video": false,
        "vote_average": 7.064,
        "vote_count": 225
    },
    {
        "adult": false,
        "backdrop_path": "/rz8GGX5Id2hCW1KzAIY4xwbQw1w.jpg",
        "genre_ids": [
            28,
            35,
            80
        ],
        "id": 955916,
        "original_language": "en",
        "original_title": "Lift",
        "overview": "An international heist crew, led by Cyrus Whitaker, race to lift $500 million in gold from a passenger plane at 40,000 feet.",
        "popularity": 609.763,
        "poster_path": "/gma8o1jWa6m0K1iJ9TzHIiFyTtI.jpg",
        "release_date": "2024-01-10",
        "title": "Lift",
        "video": false,
        "vote_average": 6.578,
        "vote_count": 689
    },
    {
        "adult": false,
        "backdrop_path": "/zLj0peaxy5y2SlC6wNIQ4V0pfqg.jpg",
        "genre_ids": [
            16,
            10751,
            35,
            14
        ],
        "id": 1139829,
        "original_language": "en",
        "original_title": "Orion and the Dark",
        "overview": "A boy with an active imagination faces his fears on an unforgettable journey through the night with his new friend: a giant, smiling creature named Dark.",
        "popularity": 529.249,
        "poster_path": "/uHiXFLMlnl5jBjtfOliapN16yBD.jpg",
        "release_date": "2024-02-02",
        "title": "Orion and the Dark",
        "video": false,
        "vote_average": 6.862,
        "vote_count": 112
    },
    {
        "adult": false,
        "backdrop_path": "/75nSb1fbWooipwcSU5bUttiOriI.jpg",
        "genre_ids": [
            16,
            12,
            14
        ],
        "id": 508883,
        "original_language": "ja",
        "original_title": "君たちはどう生きるか",
        "overview": "While the Second World War rages, the teenage Mahito, haunted by his mother's tragic death, is relocated from Tokyo to the serene rural home of his new stepmother Natsuko, a woman who bears a striking resemblance to the boy's mother. As he tries to adjust, this strange new world grows even stranger following the appearance of a persistent gray heron, who perplexes and bedevils Mahito, dubbing him the \"long-awaited one.\"",
        "popularity": 468.024,
        "poster_path": "/y9xS5NQTBnFjDoXhSFQeGxlmkoM.jpg",
        "release_date": "2023-07-14",
        "title": "The Boy and the Heron",
        "video": false,
        "vote_average": 7.463,
        "vote_count": 921
    },
    {
        "adult": false,
        "backdrop_path": "/tlNzm03CHTNEXc1mih0obFBYwwx.jpg",
        "genre_ids": [
            878,
            28
        ],
        "id": 1028725,
        "original_language": "zh",
        "original_title": "变种人：幽灵战姬",
        "overview": "Wu Qingqing is an agent of the International Security Alliance (to combat mutant crime) and is ordered to infiltrate Medusa Plastic Hospital to collect evidence of the secret research on genetic induction fluid by its direct consortium to create mutant fighters. Wu Qingqing successfully infiltrates, but was forced to inject a gene induction fluid.",
        "popularity": 441.927,
        "poster_path": "/ensNfCsxIRIr6LJnrRCXd94tfd.jpg",
        "release_date": "2022-09-26",
        "title": "Mutant: Ghost War Girl",
        "video": false,
        "vote_average": 5.222,
        "vote_count": 18
    },
    {
        "adult": false,
        "backdrop_path": "/bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg",
        "genre_ids": [
            878,
            10749,
            35
        ],
        "id": 792307,
        "original_language": "en",
        "original_title": "Poor Things",
        "overview": "Brought back to life by an unorthodox scientist, a young woman runs off with a debauched lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.",
        "popularity": 441.719,
        "poster_path": "/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
        "release_date": "2023-12-07",
        "title": "Poor Things",
        "video": false,
        "vote_average": 8.168,
        "vote_count": 997
    },
    {
        "adult": false,
        "backdrop_path": "/yl2GfeCaPoxChcGyM5p7vYp1CKS.jpg",
        "genre_ids": [
            28,
            35,
            10749
        ],
        "id": 848187,
        "original_language": "en",
        "original_title": "Role Play",
        "overview": "Emma has a wonderful husband and two kids in the suburbs of New Jersey – she also has a secret life as an assassin for hire – a secret that her husband David discovers when the couple decide to spice up their marriage with a little role play.",
        "popularity": 418.844,
        "poster_path": "/7MhXiTmTl16LwXNPbWCmqxj7UxH.jpg",
        "release_date": "2023-12-14",
        "title": "Role Play",
        "video": false,
        "vote_average": 6.044,
        "vote_count": 285
    },
    {
        "adult": false,
        "backdrop_path": "/1PkBhxXdEejw8c5BC7T3cN7jz9g.jpg",
        "genre_ids": [
            35,
            10749
        ],
        "id": 1072790,
        "original_language": "en",
        "original_title": "Anyone But You",
        "overview": "Bea and Ben look like the perfect couple, but after an amazing first date something happens that turns their fiery hot attraction ice cold - until they find themselves unexpectedly thrust together at a destination wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.",
        "popularity": 393.169,
        "poster_path": "/yRt7MGBElkLQOYRvLTT1b3B1rcp.jpg",
        "release_date": "2023-12-21",
        "title": "Anyone But You",
        "video": false,
        "vote_average": 7.336,
        "vote_count": 232
    },
    {
        "adult": false,
        "backdrop_path": "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        "genre_ids": [
            18,
            36
        ],
        "id": 872585,
        "original_language": "en",
        "original_title": "Oppenheimer",
        "overview": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
        "popularity": 386.494,
        "poster_path": "/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
        "release_date": "2023-07-19",
        "title": "Oppenheimer",
        "video": false,
        "vote_average": 8.118,
        "vote_count": 6588
    },
    {
        "adult": false,
        "backdrop_path": "/6OnoMgGFuZ921eV8v8yEyXoag19.jpg",
        "genre_ids": [
            28,
            53
        ],
        "id": 1211957,
        "original_language": "en",
        "original_title": "The Painter",
        "overview": "An ex-CIA operative is thrown back into a dangerous world when a mysterious woman from his past resurfaces. Now exposed and targeted by a relentless killer and a rogue black ops program, he must rely on skills he thought he left behind in a high-stakes game of survival.",
        "popularity": 383.956,
        "poster_path": "/UZ0ydgbXtnrq8xZCI5lHVXVcH9.jpg",
        "release_date": "2024-01-05",
        "title": "The Painter",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 51
    },
    {
        "adult": false,
        "backdrop_path": "/acpFrSmVLnTNAIuHxnZArkC3dwU.jpg",
        "genre_ids": [
            16,
            28,
            12,
            10751,
            14
        ],
        "id": 598387,
        "original_language": "en",
        "original_title": "The Tiger's Apprentice",
        "overview": "After the death of his grandmother, Tom Lee discovers he is part of a long lineage of magical protectors known as the Guardians. With guidance from a mythical tiger named Hu and the other Zodiac animal warriors, Tom trains to take on an evil force that threatens humanity.",
        "popularity": 305.406,
        "poster_path": "/iiid1xMhoAcW83VJ9LdAqf4Vtbr.jpg",
        "release_date": "2024-02-02",
        "title": "The Tiger's Apprentice",
        "video": false,
        "vote_average": 7.025,
        "vote_count": 20
    },
    {
        "adult": false,
        "backdrop_path": "/upDUDOlpGBPGwV6A4vs0y2Whzg0.jpg",
        "genre_ids": [
            16,
            28,
            14,
            12
        ],
        "id": 1230393,
        "original_language": "ja",
        "original_title": "MONSTERS 一百三情飛龍侍極",
        "overview": "A samurai's path leads him to a young waitress whose hometown was destroyed by a dragon. He doesn't want any trouble — but it finds them anyway.",
        "popularity": 305.152,
        "poster_path": "/yG8QKnaiz7JoIMh3oxdm0JJN6IG.jpg",
        "release_date": "2024-01-21",
        "title": "Monsters 103 Mercies Dragon Damnation",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 45
    },
    {
        "adult": false,
        "backdrop_path": "/sylqCVSTWWLM5TziOVjqXrLOQvO.jpg",
        "genre_ids": [
            28,
            35
        ],
        "id": 897087,
        "original_language": "en",
        "original_title": "Freelance",
        "overview": "An ex-special forces operative takes a job to provide security for a journalist as she interviews a dictator, but a military coup breaks out in the middle of the interview, they are forced to escape into the jungle where they must survive.",
        "popularity": 303.403,
        "poster_path": "/7Bd4EUOqQDKZXA6Od5gkfzRNb0.jpg",
        "release_date": "2023-10-05",
        "title": "Freelance",
        "video": false,
        "vote_average": 6.551,
        "vote_count": 521
    },
    {
        "adult": false,
        "backdrop_path": "/47SVqaO02doJ06tOmrjiWDkwU3T.jpg",
        "genre_ids": [
            28,
            53
        ],
        "id": 927107,
        "original_language": "en",
        "original_title": "The Bricklayer",
        "overview": "Someone is blackmailing the CIA by assassinating foreign journalists and making it look like the agency is responsible. As the world begins to unite against the U.S., the CIA must lure its most brilliant – and rebellious – operative out of retirement, forcing him to confront his checkered past while unraveling an international conspiracy.",
        "popularity": 295.614,
        "poster_path": "/36pYugctLa70NmwMEgXTR1G31Kq.jpg",
        "release_date": "2023-12-14",
        "title": "The Bricklayer",
        "video": false,
        "vote_average": 6.154,
        "vote_count": 81
    }
]

// Middleware to set CORS headers
app.use((req, res, next) => {
    const allowedOrigins = ['https://moviesdatabaseadrian.netlify.app', 'http://localhost:5173/'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/movies/:id', (req, res) => {
    const movieId = parseInt(req.params.id)
    const movie = movies.find(movie => movie.id === movieId)

    if (!movie) {
        res.status(404).json({ error: 'Movie not found' })
    } else {
        res.status(200).json(movie)
    }
})

app.get('/movies', (req, res) => {
    const page = parseInt(req.query.page) || 1
    const pageSize = 10
    const startIndex = (page - 1) * pageSize
    const endIndex = startIndex + pageSize
    const paginatedMovies = movies.slice(startIndex, endIndex)

    if (!req.query.page) {
        res.status(200).json(movies)
    } else {
        res.status(200).json({
            page: page,
            totalPages: Math.ceil(movies.length / pageSize),
            movies: paginatedMovies
        })
    }
})

const port = process.env.PORT || 3700
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})