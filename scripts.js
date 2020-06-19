const GAMES = [
  {
    name: "DayZ", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.29273.69886306496288395.9772e69a-b6b4-4e4e-b921-787e4783bd7d.596454ff-8c18-42f6-93ba-3c0dd66b5c6f", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "No Man's Sky", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.43766.68818099466568894.b5dbdbb3-af0f-4e39-9e76-c64290e2491c.f9abc4d2-745d-4e0c-8c63-09f47e3498e4", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "Golf With Your Friends", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.26910.13908316754263937.5c54bde2-f9c8-4fbc-a7d0-4f022b0e27ed.2f31913e-0a1e-439f-b737-c77749597226", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2020,
  },

  {
    name: "Dungeon of the Endless", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.13086.70707872093786224.58adb10f-6fa7-4153-833e-94c396f216b6.3001f4b4-6141-4a09-930c-e6980e7fcd51", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2016,
  },

  {
    name: "Minecraft Dungeons", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.2957.14045794648370014.2229d39b-90c3-496e-8fac-9987450ca4d8.680871e0-da2a-4109-8e2c-4bc75b2d56f8", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2020,
  },

  {
    name: "KINGDOM HEARTS - HD 1.5+2.5 ReMIX -", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.33445.13632199716185998.13299b88-5419-46be-b574-e039f0e17d14.ac9ec290-01b4-4ad1-8615-76dbc4e903c4", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2020,
  },

  {
    name: "KINGDOM HEARTS HD 2.8 Final Chapter Prologue ", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.19282.13522090809526555.7ecdae69-8b63-406b-b33c-d10c74d550da.312b116f-4b16-41a6-af1c-d895f14abfb6", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2020,
  },

  {
    name: "The Elder Scrolls® Online", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.39432.69742768075920623.e6c8e1ee-e782-4002-bca6-916e5cd2f37c.a4150190-c96d-421a-9fad-c4bbdcda6f45", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "Cities: Skylines - Xbox One Edition", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.7220.66617542682682743.811213f2-2c45-4145-973d-fe3e3774b196.96b48a30-7ed1-4bc9-8f8b-b114375b2e1c", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "Streets of Rage 4", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.10693.14069309968707701.a188f5d6-70d3-461d-9589-070aaa69ac0b.7e5a19b6-1444-4390-8a31-ebb2fbd992c6", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2020,
  },

  {
    name: "Levelhead", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.65109.14272863440833500.9cfb7e81-be4e-467b-958f-f464ed275d57.ec7ebb97-9d73-422a-b5f1-b98f6fc0f8f1", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2020,
  },

  {
    name: "Deliver Us The Moon", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.57154.14206288516140383.9abb7b51-66f2-454d-8490-76521abe2483.3f8e9e2f-f515-4316-a7d4-32507d1a6a0c", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2020,
  },

  {
    name: "Moving Out", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.8095.14491658395159263.1221396d-6d05-4fa5-9268-b67f86239fdd.72d291d4-74bf-43a0-bfd5-a4c59037e134", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2020,
  },

  {
    name: "HyperDot", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.52659.14457219920156328.7d3b0a9f-c604-494c-88b1-9e91b9d1014c.4bd45b1d-f40c-4482-bac2-097f99ae1022", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2020,
  },

  {
    name: "Red Dead Redemption 2", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.34695.68182501197884443.ac728a87-7bc1-4a0d-8bc6-0712072da93c.25816f86-f27c-4ade-ae29-222661145f1f", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "Fractured Minds", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.45547.63913435932326454.e2b842ea-6d9b-4f6a-8954-699c7d61d0bc.a46fe964-9eec-48e8-b6b7-e4fdc642b862", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Alan Wake", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.19692.66512344563571887.0decc815-c0f2-495d-a5df-387a6f4e8032.537f51ee-b117-48ce-b590-5c4e8efe363c", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2010,
  },

  {
    name: "FINAL FANTASY IX", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.58605.13789281956126062.a2d65058-36ad-4d31-a486-006394a2aef9.c16ebf6c-deba-4ad2-9ec9-a00292652363", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "A Plague Tale: Innocence", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.14356.68306748966338141.e6f96fac-aa67-4f59-9043-10654607aa79.aa73acc4-f944-4ab1-83c3-265506b1529d", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Absolver", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.40950.66864491160699943.fbeb6102-8e78-445c-8e22-80d901a8c55e.4b8f71a9-a388-4c7d-bf2b-02a3aa83e285", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "ACA NEOGEO METAL SLUG X", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.6435.67234891707414203.2a549723-d106-4c14-aed0-94975c472aa0.c0ad9a55-5e60-4889-a2d3-b30b8abb6193", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "ACE COMBAT™ 7: SKIES UNKNOWN", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.62514.69360070460791796.00b4fdde-d0ea-4cfb-b713-ddd08d3ba34f.989d3dfd-5905-4c61-abf8-c986a31b94c1", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Afterparty", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.48559.14175534148140289.70be3761-a4cd-4671-9bfd-01e5925c40c6.c643c014-c719-477b-a188-44366d9b689c", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Age of Wonders: Planetfall", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.30182.68169422210298884.d0c4e777-9136-4277-99ed-2bf5e44f7447.097bc188-cb11-4125-b1ac-81070dc69d85", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Alien: Isolation", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.61074.64854652411309764.b4096ab7-d7c5-44f0-a216-0ae26d8620af.2ef4ccf2-ebad-49a1-bd38-18834c758df2", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2014,
  },

  {
    name: "Alvastia Chronicles", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.39408.13862443729898717.3761f21f-51d3-430a-9278-6b6ef0177b76.69d8c5b3-1ec6-4d8a-bb6c-afbf4d780030", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "ARK: Survival Evolved", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.59714.67854144654891351.62e8ac86-d08d-4b3e-a943-500d5e0b2692.84297a79-9d0e-4de5-85b0-e08169607845", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "Ashes Cricket", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.21723.64827251581821246.7eb3ba73-1097-47a6-ae7c-23ca5f6e53b1.299e1311-3f73-49eb-843c-3c7e3621cf3a", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "ASTRONEER", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.17703.13510798887933723.57e43f19-4066-429e-b1a2-caea56e427b4.f555e1de-d116-4ab1-bed1-408a78622ba6", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Bad North: Jotunn Edition", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.37408.13981012239470574.fa33b1df-7268-40ce-bd17-9758e5ad48e3.66c27332-4927-4a33-8b09-f6e58eef6b47", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "Banjo Kazooie: N n B", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.65096.71100151761088573.88824642-fc7e-4e99-9b5b-32e26f7c27b9.4b7be015-afcd-42ca-9db2-364cd29734df", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2010,
  },

  {
    name: "Banjo-Kazooie", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.33130.70306648669442933.0ad02883-9547-43ed-a595-2a807684ce15.661619f7-c356-407c-87b7-276750817874", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2010,
  },

  {
    name: "Banjo-Tooie", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.51096.63435052096425467.cd1eef72-5707-4f2b-807d-ab3c5baf858c.feb06dbe-5615-42c2-8e26-fa15d1745896", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2010,
  },

  {
    name: "Banner Saga 3", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.64393.66295912699963136.14a9bdc6-8d0f-438f-bd1f-694932dd29f2.48e9d49a-2436-4f9e-b97c-c36e6a55fdd8", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "Batman™: Arkham Knight", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.27638.69836087516172366.d802940c-fd8a-4174-8a68-e41a2475e1a1.f1f791fa-f0bf-4e6a-8e7d-98f86a97b5a1", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2015,
  },

  {
    name: "Battle Chasers: Nightwar", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.41255.14418414613088039.79361d33-7a18-4554-8a50-66b60d3712e6.b92b1c59-22c1-446c-b7be-e43f1887ab55", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "Blair Witch", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.10249.13584607337211761.95e02c87-cb7d-4eb0-953f-77c630bed3a7.fa22355a-cd48-4e1c-b89e-36bbe1f73ba3", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Blazing Chrome", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.54729.14029834522920542.d87b24a5-f848-4df0-85b8-f4f56bd5e712.10e80a12-74b2-4eb4-8665-e7851a8aa738", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Bleeding Edge", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.39301.14431087147384961.13dc1a18-3532-477b-b2d2-772256efc040.bd9b4e51-6951-46ea-a725-240d38571d7c", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2020,
  },

  {
    name: "Bloodstained: Ritual of the Night", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.45941.13842595231656181.79361d33-7a18-4554-8a50-66b60d3712e6.0a252944-f3c6-4625-adcf-80b349968c20", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Bridge Constructor Portal", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.28226.68088896991488711.7d62a8af-1aa7-44bf-a425-105cabf5c97f.40b45c5f-0ca6-48e1-8c99-d6b588554cf2", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "Children of Morta", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.31185.14624995180811495.ed8baa2c-5b60-4b87-b24d-f01c862ad94c.f7523191-7163-419b-b7cd-9f70c3b86c16", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "ClusterTruck", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.8813.63460736466173537.43accb13-0658-4cb9-a3a9-2dd4b18ae15e.31bec0ff-ab11-4731-bd2b-8bb28fab7c53", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2016,
  },

  {
    name: "Costume Quest 2", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.34393.64122308222742873.15d36f5b-53d3-4a06-b907-d3b4e9ffe2cc.9eca8d01-8921-4325-aec6-f5f5fc27f5b2", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2014,
  },

  {
    name: "Crackdown 3", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.24344.14494915233617130.8bc2d647-9563-4ed3-9081-f4a771cfa3a6.876524bb-291a-4484-8f20-fcef8017b53c", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Creature in the Well", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.44523.14531944968955521.c5e29963-780c-474e-b760-7ea2315d0910.b98bdbef-a751-4b91-93e7-b9351e986bed", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Darksiders III", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.9138.69959397327195397.eb5a523d-641e-454a-99bf-fe995269ffd5.64e9a387-0e1a-489b-9a8a-5be981fb2c99", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "de Blob", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.60784.64723374695898038.45ec5c89-d92a-4af3-9557-4049eb709d38.8a9fa437-2dd9-409e-a39f-ca606fa5b3b7", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "Dead by Daylight: Special Edition", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.20742.64366672042187759.338407e0-1372-451a-8800-aae18d4c72c2.5e7b2204-23c1-44a9-b968-7086427ef424", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "Dead Cells", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.33704.13719691835186674.79361d33-7a18-4554-8a50-66b60d3712e6.e6765def-b8a7-4b2a-a4b4-6acef925768a", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "Dead Island Definitive Edition", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.23908.70128237179769548.ade50b5f-526d-44e1-af2b-6e356a6e2c86.650b04d5-648d-47d4-99c5-ff39b3b5ca8e", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2016,
  },

  {
    name: "Dead Rising 4", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.1353.65509226370944490.f82aa561-02d9-4c13-a034-158ddc68a226.3dfc22db-4e51-40b3-ae8a-da40a05baf01", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2016,
  },

  {
    name: "Death Squared", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.13159.69514894066197564.dd8a34b0-40cf-41f6-9ecf-ac303943cb56.8fac9d3b-cb1e-4772-9bdb-48a7807efde2", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "DEMON'S TILT", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.63980.13975866783987650.301af951-2a0e-4455-9425-4edb9697ec99.86a9c993-861b-4f7c-a2f4-8432684791b6", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Descenders", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.24333.65934155925401073.cdde9208-c05c-4015-852b-3c48d95ed87b.52e0d392-5541-4ba1-84b8-656727390fd5", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Devil May Cry 5", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.19896.67980834390914492.12ed9840-6570-4b28-8c1a-145f4fc183b5.e6468f84-d52b-4c3d-8483-b5c5e2825a9f", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "DiRT 4", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.65137.65526439182182834.69edc5f3-9844-4300-9a86-3a771f777897.7ccca776-57d6-4f22-81b0-9e5a3500466b", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "DiRT Rally 2.0", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.39094.69250389131421478.505d88bd-fe2e-4564-89a4-f3e4dc4a9732.a926456c-0035-4fde-8de9-df379fb6d703", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Dishonored 2", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.24615.70043444627144466.07c9aa2e-cabd-4198-941b-534a009f5e9b.82f0bbc8-0892-41c5-9af8-1cfec85abca1", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2016,
  },

  {
    name: "Disneyland Adventures", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.5007.14005003576279990.8cd36755-c480-4f20-b54a-afb9d59d16a8.d7843774-bea4-4dc1-81a5-b27efdc989a9", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "Double Dragon Neon", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.55678.65802913648236229.37ba7a9e-a4b2-437a-a77c-77e5bedb5fe2.e8cd5449-2210-4843-a247-c4c9051a7928", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2012,
  },

  {
    name: "eFootball PES 2020 STANDARD EDITION", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.38998.67738212027997379.4cfa34ad-8c75-401a-8f41-69350c1297a2.f73aad45-82e8-4f7d-9d07-6ea3c10b0429", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Enter The Gungeon", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.36624.13523638002129104.aa6a7713-1e4f-4633-a344-73c8e06c2843.11ed514a-b2e9-4874-9349-846697878637", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "F1® 2018", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.48217.65575548478630063.1af848dc-6be0-46fe-b415-f8766de14363.70d4ab8a-af82-4750-bf61-76e3558b0c03", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "Fable Anniversary", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.1230.66175927222580475.7f09fde8-a46b-4c45-8584-a5e3090f8190.710043e4-29a9-4a9e-b032-03c4d8b85b47", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2014,
  },

  {
    name: "Fable II", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.4730.66274487452813675.86971dec-0f03-42bb-b657-322859f064f4.130a3c09-259d-4961-8a49-70176caf3c2b", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2010,
  },

  {
    name: "Fable III", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.53940.68952782261614407.207517f2-cff8-4d40-84e1-b44139d6e70b.daab750c-4d12-472d-8b34-49dea1349935", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2010,
  },

  {
    name: "Fallout: New Vegas", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.1348.63413868670389858.a909f79f-bf9a-495a-9565-6895806c3525.4fb9db2d-c395-4076-9a58-6521ec1898e9", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2010,
  },

  {
    name: "Farming Simulator 17", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.32861.66445546520609419.4a3b03bf-e99b-4622-bb87-89586f01c3b4.2d40dd18-a733-4e35-8579-24f4be2c309a", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2016,
  },

  {
    name: "Felix The Reaper", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.33345.70461954067655478.ae7aa067-5dfd-4265-ae7f-0fe94410756d.5218848d-1f4f-4691-bab8-94772d211ac7", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "FINAL FANTASY XV ROYAL EDITION", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.63653.68025335868860524.8a7fbb39-874f-4057-b61f-010b2f6ba2ce.f569b862-7e53-43d5-870f-7e3a36d917f6", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "Fishing Sim World®: Pro Tour", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.3814.68146867127756614.1c8b2bca-894e-4592-ba3a-2f92c663cf1e.46ef9fc3-3716-4879-b531-fe271b1d92ed", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "For The King", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.16651.67711513064732812.145475d0-7ca9-46cd-80c8-14a5857a18e2.cd24e81c-f3aa-449d-a3ab-7127f9227ba3", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Forza Horizon 4 Standard Edition", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.36093.14343301090572358.2000000000007864116.1feb0fed-abe9-4849-b638-8d7eca69cff4", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "Frostpunk: Console Edition", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.60016.13729671074412623.f72f7df4-e873-4e52-a4dc-651d0b3e8b0f.cc8acfbd-41d0-4e59-a807-5140924e9378", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Fuzion Frenzy®", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.11716.65553901453292980.5f73bae7-0b93-4345-bf12-87df77ec6f05.e66b8a9d-08b3-4281-a058-985d259aa553", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2001,
  },

  {
    name: "Gato Roboto", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.1085.14206133284686181.2e3c1108-1e65-40ee-a776-35df7749d20b.d55723e6-9566-4986-89dd-850daffcf97c", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2020,
  },

  {
    name: "Gears 5", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.13954.65494054591008504.48027ffd-b5a7-4022-b9df-e909e7598c69.f1718be1-a118-4b2d-af19-97bbe2ae3d73", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Gears 5 Ultimate Edition", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.50620.14140885276228792.8cf3687b-fb9d-4c18-8d80-0df9033e4fc8.4ee5b39d-512b-428d-b5cc-03cdd19eaf88", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Gears of War", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.39791.68631123789499032.6299bbb9-6778-40d5-965f-080b552baa15.c327f5b7-91e3-410e-82c2-fa853abddf3a", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2009,
  },

  {
    name: "Gears of War 2", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.45516.65595136073047161.857e51a5-2b52-4c0e-8ac2-92b6b4609fc2.d6aede50-9d8f-4813-9417-fab3a1d88e74", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2010,
  },

  {
    name: "Gears of War 3", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.6999.68607194681373551.b4c09a44-be36-42d6-96c5-4a33b566becd.b154bd7a-3407-4b06-b2de-cdf13afa2ddd", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2012,
  },

  {
    name: "Gears of War 4", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.11650.13510798887356280.235dc311-b50e-403c-af16-ceffcc2c2399.99b85445-285f-4bc9-a0ec-53e5c36b1ae3", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2016,
  },

  {
    name: "Gears of War: Judgment", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.38790.70323071690757883.aa344172-c923-4b38-a055-9ce9a093bc86.fa2e3328-f1d7-4b43-b5e3-cfd7c69ee9d2", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2013,
  },

  {
    name: "Gears of War: Ultimate Edition", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.16874.68785176255228170.152a1029-d0c3-4d27-a42d-ecccb32aa4ca.ae64277d-82d7-4a9a-a292-646d7752a36d", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2015,
  },

  {
    name: "Giana Sisters: Twisted Dreams - Director's Cut ", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.23862.66520398676564977.34e4e186-2993-4113-9f30-48586d6382e8.a8f11386-314d-4ae2-a1bb-34dc204f5f08", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2014,
  },

  {
    name: "Goat Simulator", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.36875.70628353720390187.c5ec2284-1a6e-4ed0-a094-b54b14b8d466.cebea296-f07d-484e-bdf5-f6840555bf02", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2015,
  },

  {
    name: "GoNNER - BLüEBERRY EDiTION", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.45775.14120610440951706.79361d33-7a18-4554-8a50-66b60d3712e6.b4126af5-7873-4453-8e1b-03be5da385e9", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "Grounded", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.8370.14280109286674604.94eda3ef-8495-429e-bea1-fd9002043916.82155458-832e-4f24-9098-479ab2d80147", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2020,
  },

  {
    name: "Guacamelee! 2", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.5283.14397779034221809.944fbd29-b3cc-4468-ac15-d7349271a6fe.028341d3-5b54-41cf-9351-be2e481b171d", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Halo 5: Guardians", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.10920.69279545232152045.f1a4a87c-fcc9-4b7c-a620-f6c56eb2d5ad.537d404f-d551-430c-8000-9a4c657bf354", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2015,
  },

  {
    name: "Halo Wars 2: Standard Edition", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.53461.66922732424733865.effc282c-0a95-45c2-8069-86e7e083b3aa.a6e0c6a7-34c8-410b-871a-b1e6d650871a", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "Halo Wars: Definitive Edition", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.54072.68131417927341023.6f4f8f73-402d-42d7-8fff-a37b68438b32.3177700b-acd5-42f3-b2bc-9bd10bfbf465", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2016,
  },

  {
    name: "Halo: Spartan Assault", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.20431.70634858521726340.aed5ca97-d1dc-4d71-ae1f-b3f94bf8b727.1e47fef5-905e-40b4-8765-f294f6bbff1f", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2013,
  },

  {
    name: "Halo: The Master Chief Collection", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.13367.13817186670444302.148c432a-9fce-4c7d-bf13-8a2bd3a527b3.f26b74f0-8b1f-41eb-a82f-06843ec33473", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Hellblade: Senua's Sacrifice", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.28362.67453348098260763.a9f96429-c651-425e-97d2-e8861561f15f.f7b26f7f-73d8-4f53-9f3b-4d9e4e4d23f0", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "Hello Neighbor", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.56078.64273675158289496.8166c900-b6f7-4a0d-9d1d-f96dc540827c.ffbf4a9e-b48a-443e-ae53-9092c4f04787", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "Hollow Knight: Voidheart Edition", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.20679.13847644057609868.a4a91f76-8d1c-4e19-aa78-f4d27d2818fb.a9c33280-e038-4151-8002-79d0794f308d", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "Human Fall Flat", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.20268.69811231537758929.9ed3936e-763f-4e20-a60f-23a5c330a510.aab73093-a3a9-403c-b7b2-cfa08b6f8ab1", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "Indivisible", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.63328.13518299802182489.415b0b15-4103-48f5-9879-4173d1952a78.8be1c982-a3c4-49e9-ac60-96d77d29ce6e", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Jetpac Refuelled", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.30033.69343806087581010.9d19b719-d021-482c-8642-b4a9226e2382.40884b1e-5079-46c9-a2d6-8a0323d7b41b", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2006,
  },

  {
    name: "Journey to the Savage Planet", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.28465.64018774417873828.42c2f71f-f575-4f9b-aa08-dc41fe05171e.f17c14ed-3c1e-4d64-8ca5-f5df194aa6f4", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2020,
  },

  {
    name: "JUMP FORCE", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.53655.69204298776461265.f26b50dc-40f9-4a0a-98ff-e3e8953a3e77.8c510619-c52b-4c98-836b-94e5791d3928", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Kameo", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.11275.71331020072920166.7e86d9ef-4edb-4eef-a0c8-86f5c9475e2f.a4a76907-9245-448d-b8e8-620ce514f100", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2009,
  },

  {
    name: "Killer Instinct: Definitive Edition", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.65336.71051199341094309.0502e995-3a0c-460f-bf9e-3401bb747a61.d9b90e47-65b1-4c4a-8b64-5d5f8384f30b", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2016,
  },

  {
    name: "Kingdom Come: Deliverance", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.2553.14531461635142175.79361d33-7a18-4554-8a50-66b60d3712e6.80f32c14-423b-4f2c-a417-9c4e03c9c879", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "KINGDOM HEARTS Ⅲ", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.44193.64731639180234187.ef9f08c7-a053-4657-a057-02cbb6029516.9b0cdc89-43cd-4a11-92ab-6e8afa676012", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Kona", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.13956.63579060588016569.6eb380da-b190-4777-b70f-99fd2b3b8470.629467d4-063b-4588-9f07-addaf6317ae4", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "LEGO Star Wars III", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.1980.65336223521854929.1beffc00-2dec-412c-8387-fcc1cd1a5709.8b0eb197-7e59-4d9a-b53b-2701c2268fd6", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2011,
  },

  {
    name: "Life is Strange 2 - Complete Season", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.13982.69953256618848881.31a80946-b8b0-4064-9f93-f2049d1aefac.76e9e934-230b-47d3-9f1b-ca874b6eea2e", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "Life is Strange 2 - Episode 1", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.44785.70470042064943167.c9e7fe51-510c-4e2c-9430-9bab1290f27f.1c626ff5-8a83-4379-8fbc-99b5781eab57", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "Life is Strange 2 - Episode 2", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.31783.63935358907157493.a5e160ed-ed74-4ed9-a3b5-f8922370959a.66053b07-3bee-44c5-bc4c-764d30e9b51f", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Life is Strange 2 - Episode 3", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.49577.69261555674098554.5dabea6d-033f-45b8-9c3c-cd496f000754.c4610cb5-d024-41a8-a5f0-3a23004fff79", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Life is Strange 2 - Episode 4", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.57649.68650427760064514.187ca8ef-b793-4011-b743-9ca67e32b1eb.8a7264e5-4aab-4daa-8a8d-a898aa527b9b", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Life is Strange 2 - Episode 5", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.36423.14279440461519638.261bba7a-bd58-4533-9209-8037fdf14f1f.4e9142cc-b7e8-4626-b32f-de523e5f51dd", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Lonely Mountains: Downhill", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.4555.13794437146560212.1c2132e1-8e75-4ecb-8f54-2474cd20e67a.b855d795-fc09-4fac-a974-0aa07086d762", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "MARVEL VS. CAPCOM: INFINITE", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.33516.14245462164841251.a23cabab-8333-491a-98c4-6654cb916292.af47ba86-2728-4db2-bd04-d8496dccd78f", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "Mass Effect", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.26210.71308613299400080.f0c5363b-eaa8-4bbf-8ad7-8edb4ca2c029.f4e9535a-9bfd-4225-941e-ab6a8685194a", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2009,
  },

  {
    name: "Max: The Curse of Brotherhood", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.47973.64425461392281454.7800f3ae-1629-4fa0-ad8f-cfad518b8fd4.4e0abf84-5c80-4ea4-ad10-d7669a5580f8", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2013,
  },

  {
    name: "METAL GEAR SOLID HD EDITION: 2 & 3", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.11660.71751277012885558.8b1348d0-7278-47f3-aea1-5e88bba38c67.aaaa5e33-a5c6-44bc-b252-3f901e30de59", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2011,
  },

  {
    name: "METAL GEAR SOLID V: THE PHANTOM PAIN", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.24111.65806558541457305.a0ff0982-eced-4bfd-bb78-5ba7a73376c4.8173048f-456f-4928-bfcc-268f5002a41c", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2015,
  },

  {
    name: "Metro 2033 Redux", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.60273.68664808838028850.61879de5-57f5-44ac-8a94-ce9bb4234646.90723e3b-6017-4606-827c-c2e2ed705780", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2014,
  },

  {
    name: "Metro Exodus", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.17469.65642028844779555.c518e652-fc85-4d6e-99a2-3e9ae1656a91.6cace333-df13-4178-a46d-5938de4654a2", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Metro: Last Light Redux", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.45103.64621327310262034.ea083227-cf2a-46f4-bcdc-676d4d5d1aab.3888ed24-bc79-4ba9-9cbe-aedff5ee32cf", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2014,
  },

  {
    name: "Middle-earth™: Shadow of War™", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.64396.14146895813128195.1152921504736933088.807af2fb-6db1-4f11-bdc1-93744e3f5030", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "Minecraft", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.17382.13510798887677013.afcc99fc-bdcc-4b9c-8261-4b2cd93b8845.49beb011-7271-4f15-a78b-422c511871e4", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "MINIT", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.8985.65190999656036746.f4e820aa-14de-4f69-8066-1b53e233c464.1e177f22-e7d5-483f-83be-1477368ffd15", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "Momodora: Reverie Under the Moonlight", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.43687.68604690007879420.0cec7f2c-014c-4b2f-85f6-13c5f20220cb.74ca6086-b67f-4955-a5e9-0a8978f1350a", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "MONSTER HUNTER: WORLD™", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.43864.67926658307646239.e8130cbd-e4b6-4c78-9fe9-424eb8a64ab1.c676ccbe-b6a8-4a04-b33c-fc4d0941f97c", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "Moonlighter", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.57651.14078999020725962.ddb83977-3b2d-4498-aa21-0a1bdeb1cddc.62d87c1d-ae29-49cf-bc3b-33b7e27bba42", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "Mortal Kombat X", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.65310.64581772364132402.c5492a1b-bf30-4211-98df-0349f52d8245.00d5acdf-ad3d-4674-a511-3a9264ef7677", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2015,
  },

  {
    name: "MudRunner", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.50941.70538801997001679.e74a272b-aa3a-47f9-990e-ebe0ff233364.0e143036-237d-4f6a-939a-73823c60e6c3", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "Munchkin: Quacked Quest", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.61770.14058945851413904.586bb783-73bb-4c03-8572-7112a788d9b4.70ed5917-6400-4575-bc0b-9c82b625fb94", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Mutant Year Zero: Road to Eden", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.1776.13754284543881634.da02b8e6-e846-4b41-8bd0-2c20120fb2b8.7f15e2bc-f355-4035-8ba4-799d3e7bfbe0", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "My Friend Pedro", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.40255.14517273440942106.95022d0f-01e8-4fa1-a16a-b7fa27a20afd.4a4d52b9-3fdf-42eb-8c6c-1f9d4f837ee8", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "My Time At Portia", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.48888.63380265586365831.1555bbb7-7743-4e40-af30-9522b68b2b3c.db5596a2-c912-46a5-ac57-72579e2f6b37", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "NARUTO TO BORUTO: SHINOBI STRIKER", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.28992.69400513316706885.2c155959-cfe1-4f1a-a0aa-06e86620da92.7cc96e9f-151b-4c86-a8d2-c63182d33f7d", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "NBA 2K20", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.25010.14137173364293501.2ebdcf26-40e3-4dc2-b013-bf2347c6d3b3.21ab3c17-1141-46b0-be53-5d8d3f55a04d", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Neon Chrome", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.47875.68316148680053641.840a7336-e962-471c-a04a-9aa36be8070a.3a4a8c9c-ef41-4384-8919-59d72278e823", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2016,
  },

  {
    name: "NieR:Automata™ BECOME AS GODS Edition", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.48528.68662117307814849.d86c4ebf-4ee7-4307-bce4-30e6169169a8.f7c430e0-ce78-47f1-bfe4-3ddf380912ef", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "NINJA GAIDEN II", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.16448.70257484970681862.43fe1483-3f1b-4ce0-af17-d7c6408af1b4.73819091-9909-4441-8ccb-29bd3d70136c", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2009,
  },

  {
    name: "Ori and the Blind Forest: Definitive Edition ", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.4128.71930896676716842.b6740fa4-0359-4ca8-9e17-5d4e45c2d497.ffa292b1-579d-4a08-99ef-308ab7791f79", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2016,
  },

  {
    name: "Ori and the Will of the Wisps", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.18799.14047496556148589.9fda5cef-7995-4dbb-a626-66d2ab3feb4f.1e167626-8b7d-47b4-9fe5-d06a43ac6677", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2020,
  },

  {
    name: "Outer Wilds", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.7475.67120997535715720.38c3e502-0019-4560-826e-634bbaf5cb4b.49bae061-49f7-4594-b2e4-17e7e25756ab", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Overcooked! 2", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.12517.70952388438497888.9a8a7127-1933-427d-b864-f4857d4c02fd.9d22a7c8-4ffb-4fd0-bf14-26df979de579", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "Oxenfree", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.13365.70361386717898304.ddcf453a-afe9-40c1-b247-6850cd8681d6.edc2a8a4-328c-4bba-bf23-39830ce4581d", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2016,
  },

  {
    name: "Pandemic: The Board Game", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.33445.14083195402906311.a6953a50-861b-4771-9eec-452afc9fdff7.3a4095d1-1e7b-4e52-b9d1-bb69084c705e", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Panzer Dragoon Orta", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.38820.66145225687674323.a8857b57-a2e7-4a98-b6a1-812aa0d65641.003b34e1-d9b8-4af0-8fba-36c02643c82e", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "Pathologic 2", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.58256.14229990123044184.4c1002da-81a6-4cdf-ad25-a3cf8ae7d512.ac3c67bc-5445-49d8-b9c3-6327b0f3c98a", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "PAYDAY 2: CRIMEWAVE EDITION", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.13829.66310835470031971.3454ddad-536a-4cf4-9c3b-605a7f9977ca.86dfc9a9-38c3-437b-af37-b18fd13b88d3", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2015,
  },

  {
    name: "Perfect Dark", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.31964.68366467710055312.afbf1f2c-f0f6-4266-b6a9-fa99b292cd39.48b357d0-faf1-418a-8cbf-eb6ca7184301", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2010,
  },

  {
    name: "Perfect Dark Zero", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.5272.63613604984995316.d403620a-54b7-4a68-9850-e3bfda4c2552.e2570646-3c83-4402-ad04-459f40232ca5", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2009,
  },

  {
    name: "Pikuniku", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.18298.14041044108785223.82419c4d-359a-436a-b07d-12cf7137d8fc.e5e5d14b-cb4d-4d97-80f0-522af78eb772", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2020,
  },

  {
    name: "Pillars of Eternity: Complete Edition", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.55121.69508748727770428.7ce00ad4-485c-4664-819a-1d17af316267.d92d72fb-1a52-492f-96ea-2229c4c4eb9b", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "PLAYERUNKNOWN'S BATTLEGROUNDS", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.30730.64374245401097180.bea3819c-1f80-40e7-bfe7-1507da64a5fd.41fdb734-e4ff-4450-8ddc-dd82876de633", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "Power Rangers: Battle for the Grid", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.11236.14636624242477201.684d5e4f-5586-4870-aa98-c0ce136ea8f4.71f9e2f7-0b60-408b-bc84-8e5d24c70d7f", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Quantum Break", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.58202.68618454610217617.0bf16429-e940-40f4-b483-920166ef2ce1.4eff9aca-cf9d-4807-9477-1dec43be2726", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2016,
  },

  {
    name: "RAGE 2", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.35410.65377716030309997.4ce8fd57-e617-46e7-9d4f-e8b49f4d07ef.df98cfd9-7020-4aca-8705-7addaccf3c2c", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Rare Replay", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.14606.65780799141015212.07b74564-f8a6-4ab1-b868-91169ad4faff.9416d5a7-9aa0-47ab-b85e-5f4ff6f6fa9d", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2015,
  },

  {
    name: "ReCore", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.63427.13510798886186651.2b79d485-bf02-4f08-9fd2-063f2b702048.a7173e33-fcdf-45c8-bbdc-2bd8c3091f67", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2016,
  },

  {
    name: "Remnant: From the Ashes", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.14175.14118342467613503.205f1a58-c4f9-4e91-a8a7-29e8dbdd704d.40542df8-d5f7-4cf4-a755-19bd1ebdf88a", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "RiME", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.24793.69897438766761437.79976aa1-405e-426e-ba65-066522206a5b.c4e144a9-b1a4-4047-8096-9a43e905e662", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "Rise & Shine", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.40124.68905376569244905.ccfc527c-beb4-4e32-be6c-a04cc78b9ecc.0d48591a-aa6d-481f-8518-99b9aee3a1ba", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "Rocket League®", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.51159.65187692735347017.707008f4-f86e-4949-adf4-2daaf4b5d19d.d8df1ec7-7eb8-400f-ba7a-a2f61a5bd9de", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2016,
  },

  {
    name: "Rush: A DisneyPixar Adventure", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.57888.14538559069860396.c1df57fa-56a6-43cb-88ca-d1a4e32a2f52.b9ddfb4a-9df5-47aa-96f0-6e7a6f1dc28a", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "Ryse: Son of Rome", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.53969.65141173942479107.84b7d569-2529-4751-8c49-c9457bb09f50.f927f5ce-bdf5-48bc-8f74-3ed61d836dd6", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2013,
  },

  {
    name: "ScreamRide", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.12191.68338609849054191.6696e876-c966-43a5-9099-9ea6fbdb938d.b54b1e44-a668-4a72-b6c1-b9bc710a7e23", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2015,
  },

  {
    name: "Sea of Thieves", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.16347.14554784103656548.6c0bfca6-ceff-4368-9bde-2fe50f344136.007dce43-6492-46f2-bb2b-2b28df98fc3c", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "Sea Salt", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.40211.14495877115207630.23c33762-a1b0-45ca-ae1d-a10d15aa8f9c.79466cef-2f98-4688-837b-5d62731e7043", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Secret Neighbor", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.48532.14605254180386304.843c17b3-dc76-4d90-b085-3171543de82c.4b131b56-e79b-48f9-acd2-4041d62d2be8", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Shadow Tactics: Blades of the Shogun", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.15763.65044818091119298.8892963c-2bb3-45af-836c-b9e7b02c0f4f.85d77872-39fb-452e-9782-633e97176dc0", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "Shadow Warrior 2", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.14041.67825136888640660.c1efe530-e986-4c2f-9b30-309f91f84027.236685b4-1b57-4152-9650-d6c695cafa39", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "Slay The Spire", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.26546.14612220527269160.ea029917-6726-4b37-a510-8449863efad4.8f702fee-e27b-41f2-b6a4-feb0698d416b", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Sniper Elite 4", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.27193.64044195348567726.135f2cd2-9709-4fe7-a7ca-fefaee870959.37e06c0d-e07a-4d2d-9592-495971ca7f75", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "State of Decay 2: Juggernaut Edition", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.13904.14425140369408817.14846606-f5bc-4fb1-b355-26ef6a25e847.0e006182-7d29-4776-81c4-0bac08c28f01", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "State of Decay: Year-One", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.28894.67259324082967957.a648096d-45eb-44bf-9db2-f3eafcae7d67.5c1b8541-d919-49dc-ac87-8d68dad5201a", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2015,
  },

  {
    name: "SteamWorld Dig 2", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.43126.14599425922253294.95904bbc-623a-4bdd-83de-0dcc69babd49.762e25f8-30de-4e01-bb6e-5cad06fdf50c", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "Stellaris: Console Edition", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.54009.71592693192229022.95f29c62-8ab9-4865-a362-219a5bf8c0d3.b7ea4d54-6fdd-42f7-9c46-57cd14808dd8", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Subnautica", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.24838.63409341877910445.4fd452e1-c3ee-4448-a0f8-ac6eb6bdaabf.d531d87c-d1b7-497f-b802-baabfb728090", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "Sunset Overdrive", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.55060.69444514893807971.ab5f1b93-5a0c-4e23-9a17-465a62377bd1.86d16ce8-75fe-48c6-8947-9a7071cbc9a2", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2014,
  },

  {
    name: "Super Lucky's Tale", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.33701.14315077775214047.aef14d78-c52a-408c-8883-8ecc08036d2e.cd86b1df-9b7a-4511-89c9-2ca7358d6f5e", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "Surviving Mars", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.29809.13897576008709751.2a03398b-a338-415b-b860-375a94472e34.70982d73-0f9f-4ad8-a928-23f7491dc7f6", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "SWORD ART ONLINE: FATAL BULLET", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.10194.71516628958304292.2179949b-2549-45b7-a1a3-eceb54fad2b4.db4e6361-c6a3-4d89-9fa2-6eb529a4241f", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "Tacoma", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.21771.14580847963455900.d70853bf-514f-4436-aef4-3e9e17cffe30.d3d2b14b-78df-42c2-9239-9039082fa9ed", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "Tekken 7", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.9561.69766501749678274.825421a3-6e90-4af8-a717-6375f4b1f802.ce79e4cd-489f-48ea-b7da-b546860070ed", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "Terraria", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.31019.70406876433810089.4beffaca-3fee-4154-a21f-ecd9b3bedbb3.cc90d42b-0620-473e-a51e-52f0e5ff8454", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2014,
  },

  {
    name: "The Bard's Tale IV: Director's Cut", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.61655.65351109767529701.defb4d0d-acab-4fd9-8208-7283068f991e.4a134adf-f963-4c72-9344-1294d7888c08", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "The Bard's Tale Trilogy", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.54095.13855942306543540.f07392fd-5f64-460d-82f5-27790455d1e0.c50e5981-bde6-47f2-b839-b73b3e7fd14f", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "The Elder Scrolls Online: Tamriel Unlimited", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.24654.68188801292582061.1f8419a5-e1bd-48fe-b9cb-b330d108d94f.93e8e991-a3f1-4f0c-882a-52076c9e3283", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2015,
  },

  {
    name: "The Escapists 2", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.35569.70173344040333382.7556a572-f895-4b02-bc86-3628504df971.f4257110-ee12-49ac-ae9c-285adf03f02a", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "The Flame in the Flood", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.65239.63137510087334682.8f8bcc80-302f-4fb5-b47f-069311f96e0e.a519ba3f-070a-49c8-ad83-1d41ade3a04a", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2016,
  },

  {
    name: "The Gardens Between", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.57566.14579546903580559.5bb5a5a9-f9b3-4c37-93db-865027b37aab.15f0a7f0-9b8b-4d67-88ab-43d181590a6d", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "The Jackbox Party Pack 3", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.62845.69511641058750210.b36d1b86-2f92-445e-a044-b6112fb81b63.f94b6d7b-6405-43f5-8a96-c45a4b3f51d8", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2016,
  },

  {
    name: "The Long Dark", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.25018.66934420265726607.03d94e0d-1a0f-40bb-b6d6-a016e0effe60.e4ccb5aa-ae91-4fab-aebf-2731fcd35ad9", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "The Lord of the Rings: Adventure Card Game -  Definitive Edition", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.33642.13559807211300679.807448b8-520f-461e-b4f9-87b8bd844940.a9f0fa97-8033-4305-ab5d-debab3a6342e", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "The Outer Worlds", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.19260.71127714305215144.dfbe21c8-4e10-4861-b737-47393066d41d.e4e4e15c-dc47-4608-80a4-564c7284796a", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "The Surge 2", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.44057.70012318168468878.5eebf938-97f1-4542-82e0-499e9e44e737.cb78a565-8129-4ad1-bb1e-0e9d2210570f", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "The Talos Principle", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.19397.65643310160401397.0e58aede-f87b-4edf-b9e1-7e4436819c2c.af816547-e376-475c-9061-b1e33e3ccdde", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "The Turing Test", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.8731.69523489975139756.2bc423ff-73f1-402d-b7b9-7c75b62dd719.9cd353d3-9bd3-4fe2-81a5-30127d12459d", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2016,
  },

  {
    name: "The Walking Dead: A New Frontier - The Complete  Season (Episodes 1-5)", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.40605.68746382496567220.612ba4aa-3f7b-4b25-b141-a20112197dde.3d11307b-5ce6-4b3f-9ed4-efaa6b746736", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2016,
  },

  {
    name: "The Walking Dead: Michonne - The Complete Season ", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.25048.66252839971129113.8f5f5ae5-f77d-4f3c-8388-3b220332b617.940c4634-b0ce-49bc-b3fc-72f324326421", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2016,
  },

  {
    name: "The Walking Dead: Michonne - Ep. 2, Give No  Shelter", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.38495.67491932824240520.56e86277-5e3d-47e8-8ea6-508382661638.90441d63-3648-4ff2-95e3-5cf5bfc7fcb9", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2016,
  },

  {
    name: "The Walking Dead: Michonne - Ep. 3, What We  Deserve", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.61689.70731026925803835.c300087c-05ee-482e-b28b-420562b6bee3.f8aa783b-3262-427d-85c6-236855f7b935", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2016,
  },

  {
    name: "The Walking Dead: Season Two", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.3070.65440315593285086.25acafbc-307e-448a-a7f5-999e7cc0c672.c83628df-df24-4798-a893-22cc8ec578b4", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2014,
  },

  {
    name: "The Walking Dead: The Complete First Season", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.17295.71901737879009236.c4798d79-4139-4e57-bb07-d252b6ca567c.7d6ae67a-2619-4b8c-9551-00443618ed66", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2014,
  },

  {
    name: "The Witcher 3: Wild Hunt", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.28990.69531514236615003.8f0d03d6-6311-4c21-a151-834503c2901a.d629260e-2bc4-4588-950c-f278cbc22a64", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2015,
  },

  {
    name: "theHunter: Call of the Wild", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.31673.63553167684393025.1b31f51e-c4c6-49b1-bf61-a2e65ea14c73.150d2a5d-49a6-4724-8e53-cb908f866746", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "Ticket to Ride", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.56097.14272537692064304.bd78aee9-7052-46b3-a042-d439288ed509.c7340601-08b2-40d7-964b-1cdf1f5b180d", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Totally Accurate Battle Simulator (Game Preview) ", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.17742.14176345306313891.0fa5fe6f-5d91-4d91-915f-754bdc7e813a.0b5c9633-0db7-47d2-8b71-923a27af53c5", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2799,
  },

  {
    name: "Totally Reliable Delivery Service", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.430.14481391283536320.2e278a9d-b63d-454a-a60e-ac81b25b445c.8b233a61-1f88-4fa2-9b47-4f02bebcd44c", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2020,
  },

  {
    name: "Tracks - The Train Set Game", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.29950.14163000528255550.5f47fd70-c17b-41bd-8e44-dd0be98f737d.75a5ed17-c0b1-467c-8fd7-2fffd71772a0", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Train Sim World® 2020", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.45674.14546107092636974.fd729832-b456-4eb4-aa6c-b36b4e744e6e.46130177-b3c7-43fa-901f-c80a9ee379d5", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Two Point Hospital™", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.62833.14259921003952611.d6254d1e-ae87-4182-9727-87c55ff4df6c.26a10038-2e0c-4722-b7cd-22df1d147096", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2020,
  },

  {
    name: "Untitled Goose Game", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.25596.13856628096419252.2543d50f-bd53-4ec1-90dd-d76914de6757.df5a7952-3ea7-44b8-a791-0c3884d9b256", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Vambrace: Cold Soul", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.39189.13906830603383283.4b2c9d55-9b0d-4981-8666-c78aa9f2fa80.ada82054-fe85-4495-b988-de08691a64c2", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Viva Piñata", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.8443.69993262899909428.0190d6b7-60eb-4d3f-bd16-b44c0e303861.3eca2151-5677-41df-99c6-6ef3e951a5a9", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2010,
  },

  {
    name: "Viva Piñata: TIP", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.13926.69467662407886849.eb318d40-1e77-4848-b633-b9ee445d2f63.c32b9b59-01cd-43fd-b374-d60e0217acb2", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2009,
  },

  {
    name: "Void Bastards", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.18409.14220840565943461.66070e1d-a37b-4a3f-9fd0-f7314ce132cf.c41876f1-3c79-467c-ba55-ec3976b6fbee", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Wandersong", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.40485.13551668736382575.a89ff9db-2a42-45bb-b442-22f1bfc93d89.af3ea80a-39c1-45df-a05f-5de7af32806b", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Wargroove", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.20729.14378604131770680.b6b5a8ca-e766-4938-b45e-8543e36147b7.1beeb9a9-3466-4f87-a534-5ad19e30744e", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Wasteland 2: Director's Cut", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.58841.13602252643452986.79361d33-7a18-4554-8a50-66b60d3712e6.2745dce2-d622-44df-bc05-428d5be5c102", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2015,
  },

  {
    name: "Wasteland 3 (Xbox One)", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.54134.69010346493633739.074410cb-38ab-4f48-b6fe-0ffa69c89fa9.5e0b834f-57d5-42d6-9b07-c8d7bf92038a", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2020,
  },

  {
    name: "Wasteland Remastered", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.50143.13650100416089145.e9c63102-735a-40a7-b414-10693b469ff1.a4d1ebe0-1f3d-4418-9f82-7ea58b343fce", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2020,
  },

  {
    name: "We Happy Few", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.45930.68143759676978415.617fe4d2-4978-4b4d-9e04-cba4cf86d432.53d53de7-c096-4ac7-9439-aaf384d8417f", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "Westerado: Double Barreled", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.7512.71172010082795076.fc72e5be-369c-47cf-9782-d436e6db70ef.e5ddaf96-da4b-46a7-a259-e9558277999a", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2016,
  },

  {
    name: "What Remains of Edith Finch", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.64458.70337453596158090.1f04e04c-499f-4af1-a19c-88065bd90479.430927fb-62e4-4fa7-9491-902fc16e6ed5", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "Wizard of Legend", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.52826.66897465152302093.06d88e87-707d-49e4-b85e-c4144f526f9e.6cb8c82a-f171-461d-b469-0eaa7003bf4d", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "Wolfenstein: Youngblood", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.34137.66937225626631404.377c6044-13d5-4b96-8957-5b00b3f14438.f8baaf3d-eb53-4355-bd39-515e6bc0d279", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "World War Z", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.561.71660068896059156.9cb28823-8ec6-4f90-b096-99f568b1099b.14cd7954-a2b3-4cb3-9464-a3dc971ae09b", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2019,
  },

  {
    name: "Worms W.M.D", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.33201.66550732470485128.fb64d8d0-8d1a-4592-beb7-c3634d551b35.b940c57e-6430-4c1b-b8e3-80213f8aae42", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2016,
  },

  {
    name: "Yakuza 0", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.39148.13785223586843168.612c6166-3afd-413c-9b13-549ae975f01e.46f67620-4620-489b-bde4-c32435480914", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2020,
  },

  {
    name: "Yakuza Kiwami", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.1755.13512592555926242.4f764cb5-1ca8-4601-9f0f-fd3d82976ea7.f6274c26-a75d-456d-92d8-83a119bc0bf3", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2020,
  },

  {
    name: "Yoku's Island Express", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.61335.13800256783264610.79361d33-7a18-4554-8a50-66b60d3712e6.9ef1c3fb-e149-49b9-871a-1db74017c94f", 
    multiplayer: "false", 
    platforms: "Console", 
    releaseDate: 2018,
  },

  {
    name: "Yooka-Laylee", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.38397.63746241995916608.ef8c3344-9e5c-4485-bfdd-1b0b89424c00.58cf85ca-6c88-4e53-9649-3a78716df855", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2017,
  },

  {
    name: "Zoo Tycoon: Ultimate Animal Collection", 
    imgURL: "http://store-images.s-microsoft.com/image/apps.51280.14226270511206590.d3f6ff8c-e233-41d7-af44-309db86bfc65.c3b924f9-c159-49f3-958b-4f229bff41d4", 
    multiplayer: "true", 
    platforms: "Console", 
    releaseDate: 2017,
  },
]

const gamesContainer = document.querySelector('.games-container');
const games2020Section = document.querySelector('.games-2020');
const games2019Section = document.querySelector('.games-2019');
const games2018Section = document.querySelector('.games-2018');
const games2017Section = document.querySelector('.games-2017');
const games2016Section = document.querySelector('.games-2016');

const games2020 = GAMES.filter(game => game.releaseDate === 2020);
const games2019 = GAMES.filter(game => game.releaseDate === 2019);
const games2018 = GAMES.filter(game => game.releaseDate === 2018);
const games2017 = GAMES.filter(game => game.releaseDate === 2017);
const games2016 = GAMES.filter(game => game.releaseDate === 2016);
// console.log(GAMES.filter( game => game.releaseDate === 2018));
// console.log(GAMES.filter( game => game.releaseDate === 2017));
// console.log(GAMES.filter( game => game.releaseDate === 2016));

function displayGames(games, containerEl) {
  games.forEach(game => {
      const divEl = document.createElement('div');
      divEl.className = 'game-container';
      const imgEl = document.createElement('img');
      imgEl.src = game.imgURL;

      divEl.appendChild(imgEl);
      containerEl.appendChild(divEl);
    })
}

//PRACTICE: CREATE REDUCE FUNCTION TO COUNT THE TOTAL NUMBER OF GAMES PER YEAR

displayGames(games2020, games2020Section);
displayGames(games2019, games2019Section);
displayGames(games2018, games2018Section);
displayGames(games2017, games2017Section);
displayGames(games2016, games2016Section);