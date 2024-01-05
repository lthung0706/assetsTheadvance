'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "99b0459a2b033f794808f4c838c69a67",
"index.html": "b055dc236e18eb0b6346f1db3630861f",
"/": "b055dc236e18eb0b6346f1db3630861f",
"main.dart.js": "e31ae94a56546d73b862ecfaf7ea9d1f",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "83b73171bb0167a79f8ad030668a1479",
"assets/AssetManifest.json": "78d38a2dbd393bac49efb2fed1548db8",
"assets/NOTICES": "1728541bb94ce4e9c573828fb17377b4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "91e225c1da2bdfee64e84a81cee550d8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "4bdbdb1d2d3e87513dd3c9b618aef2e0",
"assets/fonts/MaterialIcons-Regular.otf": "70e49c23c1cff9c3ebaf07e47a1d5543",
"assets/assets/images/card.png": "91ea44d3d747076eb57fb4569d895fb5",
"assets/assets/images/warning.png": "7770c703b1429903cfeeb9945006caaa",
"assets/assets/images/nhomKH2.png": "76a2458b299c56ce73a79bf2d3057c82",
"assets/assets/images/bg_live_button.png": "17842da0944b021412696916f9d0caca",
"assets/assets/images/img_folder.png": "36911834ff6de597a9d67cdfa0a9841b",
"assets/assets/images/bg_login_options.png": "6ba4fa2b26173b961b940898d0364935",
"assets/assets/images/nhomKH1.png": "117c6e484df982d7c3f93e5035b532b3",
"assets/assets/images/appointment.png": "474a508c75b1394a0d6042c24d8b8365",
"assets/assets/images/advance_logo.png": "2e910edaaf0599baea0d3e19006da746",
"assets/assets/images/file.png": "b86110ff9b45fe8bd5a05e9797f3720e",
"assets/assets/images/img_customer_booking_header_bg.png": "0c6c4705dddeb491537ec7194edecdb7",
"assets/assets/images/bg_category_vouchers_opacity.png": "d09734b7ebfc4cf57a0bb402678b3325",
"assets/assets/images/img_evaluation_result.png": "af32a1e78129b2ac4e89d915e731dba4",
"assets/assets/images/triangle.png": "01998ae630449688ef13a56bc6b720cf",
"assets/assets/images/img_bg_no_connection.png": "8e1031422113599c0a718291629d4cf0",
"assets/assets/images/collaborator_onboarding_01.png": "ba8fbd99a5a702e5175f879a311007c6",
"assets/assets/images/fg_login_options.png": "ef349361a7a797c7db7fcef12cc4faea",
"assets/assets/images/consultation_header_bg.png": "73b494f011436919b6ac261fc95a9a5c",
"assets/assets/images/collaborator_onboarding_03.png": "657493e4cafed75f7de424455cf690d9",
"assets/assets/images/collaborator_onboarding_02.png": "9a194136ed6618538e8d3b01825d7de2",
"assets/assets/images/error.jpg": "e69292bdef5a720f11c6eb69756096da",
"assets/assets/images/excel_extension.png": "66923014770b1cdc51d45fcb68d5a671",
"assets/assets/images/bg_no_connection.png": "8e1031422113599c0a718291629d4cf0",
"assets/assets/images/customer_bg.png": "f22a9b0cedeb761f162a70f4ee09cb31",
"assets/assets/images/doc_extension.png": "d37f4218f8be761f35a13ad6a718821b",
"assets/assets/images/other_extension.png": "c288bf07a44b99911e31ceaabfb9cade",
"assets/assets/images/yellow_warning.png": "fd5ac6c70c6dadffc0985d68617eda5e",
"assets/assets/images/bg_category_vouchers.png": "975ee3ce4a0d8a273efd6ec0d7c9fc7a",
"assets/assets/images/pdf_extension.jpeg": "5075c7d0b0c85c1c3223443f42938466",
"assets/assets/images/assign_task.png": "425d0b950ee1c449d9be13febdab9c34",
"assets/assets/images/ic_sort.png": "57dbc31bf1fc31471563783fec041829",
"assets/assets/json_images.json": "196bd55ccad325392a24cdac15c9797c",
"assets/assets/icons/icon_logout.png": "b392676c00757f4cb71955d3a030757e",
"assets/assets/icons/ic_plus_square_blue.png": "1e77ac930a13ee164d2168eccec0d856",
"assets/assets/icons/icon_success.png": "a9aae7508f43b9e26df9deaeed55497f",
"assets/assets/icons/ic_shop_gift.png": "4027ad0b07991eabb825460532fd6da6",
"assets/assets/icons/ic_customer_booking_level.png": "76989d9d78341cfb6c3b58fb506e1dc4",
"assets/assets/icons/ic_haft_star.png": "e623c51119f4f1d953cdfac5d73aeec2",
"assets/assets/icons/ic_building.png": "e1826cde2338912d9f9d501b97ceb833",
"assets/assets/icons/ic_doc_extension.png": "d37f4218f8be761f35a13ad6a718821b",
"assets/assets/icons/ic_calendar_enable.png": "59f69a8ca5a0fe063f9a528e59a2ac95",
"assets/assets/icons/ic_input_qrcode.png": "a4f77541c54d69eb481327af82ee86f5",
"assets/assets/icons/ic_room.png": "79c7ecfee3230186ba284688c4b9c6cd",
"assets/assets/icons/warning.png": "08dc7a58177c4f2f44bdc398d8d552e6",
"assets/assets/icons/ic_down.png": "a32d538323fa7ec5bdc34f88ba6e7735",
"assets/assets/icons/ic_calendar_add_on.svg": "ef3197b2c2f323a5e018e02b8df97792",
"assets/assets/icons/ic_caring_staff.png": "cdae6a758618aea34848a494ebb44e00",
"assets/assets/icons/ic_cart.svg": "712c2ca28e998e78da9c45f42dc6d731",
"assets/assets/icons/buy.png": "b3194556595d033138d2bc4fec0f8f7c",
"assets/assets/icons/ic_scan_qrcode.png": "bf032472b37b84c58c8cdbd2389fb2ef",
"assets/assets/icons/ic_member_gold.png": "3233ba8ee33cfa1e3d6c4e094c0b545a",
"assets/assets/icons/ic_trash.png": "7d870c7913e467690fe0028c3a326a96",
"assets/assets/icons/ic_gift_voucher.png": "eda1992700f96f3669b623424f8bfdfa",
"assets/assets/icons/ic_traingle_down.png": "89a8348816e375cfea60d56c9b46d5ac",
"assets/assets/icons/ic_file.png": "6798acf47e48fec253839191d1898024",
"assets/assets/icons/ic_scheduler.png": "5720166d0ce0feb633dc747b6f2bf56b",
"assets/assets/icons/ic_gift_outline.png": "8a6b1bd6618c42a756bfb6c0748870c3",
"assets/assets/icons/icon_checkin.png": "eb205d4b72feed5837c740f21bf6b5e1",
"assets/assets/icons/ic_point_ngocdung.png": "a2daea84626749568f575b515d89b841",
"assets/assets/icons/ic_more_enable.png": "e42e47e01f92807597f8693c7b11e323",
"assets/assets/icons/ic_chat_floating.png": "fd698cc634787120be085617b56698fd",
"assets/assets/icons/ic_rank_disable.png": "fb2fefc82db7a6ff0f59aa369dd33773",
"assets/assets/icons/ic_place_outline.png": "ece08e86450ffa9410c10430a7b3fa3d",
"assets/assets/icons/ic_check_yellow.png": "f5a07387f52aeb31b03c98ca93eab9bd",
"assets/assets/icons/ic_calendar.png": "ad60501d002b4b18a79bf6aebfd98d62",
"assets/assets/icons/collaborator_ic_close_popup.png": "22095b3718ab62076e6fd738ff28ee9b",
"assets/assets/icons/ic_empty_appointment.png": "06542dd2ab2c982243234fd969c23c84",
"assets/assets/icons/ic_hairline.png": "6abedc97fc70572eb944333e2dbbba55",
"assets/assets/icons/ic_clock_2.png": "a5f152741634b7e02349917065dfc3f9",
"assets/assets/icons/ic_check_in.png": "68dcc93594495ceb2220a7c2e5e59535",
"assets/assets/icons/ic_beauty_treatment.png": "1642d350fcf781b96c2461d55108430c",
"assets/assets/icons/ic_arrow_forward.png": "9ee2242a41a60063512d285e1e9f341e",
"assets/assets/icons/ic_notification.png": "fc09522a735a49d302e2f8854d2b3160",
"assets/assets/icons/ic_list.png": "aaae470b2cadc1035f747dcce10a57e7",
"assets/assets/icons/ic_last_spent.png": "1ae1c3057ef087b8ee052d79e8c17bd9",
"assets/assets/icons/ic_appointment.png": "d1de41a62471efb3883a6ff775d1e7ce",
"assets/assets/icons/ic_first_visit.png": "d71c898a30cba458b219782f72b8a804",
"assets/assets/icons/ic_group_revenue34.png": "c4e774f8aea37949a9612b1f63006e29",
"assets/assets/icons/ic_customer_new_group.png": "8079961b0ba5ca7fa492556e2706d2dc",
"assets/assets/icons/ic_door_handle.svg": "6894df1baa5f2fa5128b5eec737e09dd",
"assets/assets/icons/ic_room_2.svg": "3550ae7c42a690aea74853a1ce7873d2",
"assets/assets/icons/ic_arrow_next_black.png": "310184ca74c8b748b1a1de51e99ea7f4",
"assets/assets/icons/ic_check_gray.png": "ccdd3c3c245c94e731ea8868fe2c8e03",
"assets/assets/icons/collaborator_ic_bell.png": "4317490f7e9a0e8fbfedd4b68d353956",
"assets/assets/icons/ic_complete_status.svg": "d22ea1677d69bad22f411f69d60d2a83",
"assets/assets/icons/ic_rank_3_full.png": "5aaf74c81782f6cff7dcc9f36303eef6",
"assets/assets/icons/ic_rank_2_full.png": "a15d094763561e3940a98ce056e89919",
"assets/assets/icons/ic_customer_booking_info.png": "d22194096e7e4b3abd277b0c9691a50c",
"assets/assets/icons/ic_setting.png": "ae79e64fcc5c0369c9bad0a3c5207109",
"assets/assets/icons/ic_checkin_2.png": "31eb6652de3c02654425389aea3e3f7b",
"assets/assets/icons/ic_next@3x.png": "09a662907bb387e57d60c7ec082b7462",
"assets/assets/icons/ic_language.png": "d9cb9251a7e55fb6517e1aaa2aa6722e",
"assets/assets/icons/ic_close.png": "dfbae7fc003f63605a38bf3fe7eae332",
"assets/assets/icons/ic_check_circle.png": "d80da8c853e0181e837457a48f0f44a5",
"assets/assets/icons/ic_check_circle2.png": "c47c84c23d0861f3928cdacf219aa33d",
"assets/assets/icons/ic_call_user.svg": "63a09a7467506a6b07f025bdbcdc59d7",
"assets/assets/icons/ic_hour_glass.png": "2a90d0918e9d1b28b10fcca6968c2bfe",
"assets/assets/icons/ic_girl_avatar.svg": "9d4de6537d49af63c2072302dba05815",
"assets/assets/icons/ic_coupon.png": "7e4221ec53306ef6faa6cb1e3fbf976c",
"assets/assets/icons/ic_home.png": "84a2ab9b4d94ba6b92d6ea7e2d2da0c8",
"assets/assets/icons/ic_location.png": "a2b0094516ec6a8808a1cf319e18d600",
"assets/assets/icons/ic_camera.png": "279365e1b338adb0a3e4f6312edf39a3",
"assets/assets/icons/ic_bed.png": "944e84dd7efb0364d4d18c552ec34bb0",
"assets/assets/icons/ic_identity_card_2.svg": "26bdabe213e2e612040847002a0aebc3",
"assets/assets/icons/ic_edit_enable.svg": "3a46a23f28ce19beb99d0155705c8dd7",
"assets/assets/icons/confirmation_pending.png": "dc881aac328e292152859f5c9e82630f",
"assets/assets/icons/ic_forward.png": "6d7f5744dd3b5784b47c01ca6a27afbd",
"assets/assets/icons/ic_touch_id.png": "07f45ad5c44f01ef8bd3411917323e78",
"assets/assets/icons/ic_bell.png": "042f5fb036b6212e4715563ddfae8b51",
"assets/assets/icons/ic_calendar_2.svg": "ae3758103f0663ea2f0e7445669cccd4",
"assets/assets/icons/ic_heart.png": "cd30f192cc1e7238b5868b05820f6396",
"assets/assets/icons/ic_user.svg": "470cfb374da6269c3a82ad78764b2036",
"assets/assets/icons/ic_approval_enable.png": "c2ca3c28dda571b3669445c9c3bcfed5",
"assets/assets/icons/ic_bed_blue.svg": "705ae9eeba27c8263891a9ff66a1625b",
"assets/assets/icons/ic_clock_grey.png": "3bf775674468e0932f3b33713e28bb0c",
"assets/assets/icons/collaborator_ic_home.png": "0e12f92041885dfbea4616e0b79706f4",
"assets/assets/icons/ic_add.png": "2f95fe753098b42c0b1818c16d1e921b",
"assets/assets/icons/icon_refresh.png": "485f7437357c9fb1bc700590010b89ed",
"assets/assets/icons/ic_news_enable.png": "847abb402748959bbdac786c8fbe763a",
"assets/assets/icons/ic_live_stream_button.png": "840011219eec88c8515fca48961d03ac",
"assets/assets/icons/icon_qr.png": "e1f830800975f05d7a12e0764237e592",
"assets/assets/icons/ic_drawing_red.svg": "2b95b9ff8869a2f2f0a42a4749ca9f8b",
"assets/assets/icons/back_arrow.png": "15a71f44abdad05061c721631b8ae957",
"assets/assets/icons/ic_beauty_service.png": "22a9df42c1dbebf98116e891164951b5",
"assets/assets/icons/ic_arrow_next.png": "1c4493ecd3d56f3c4ce20ae2f9fcc8cb",
"assets/assets/icons/ic_member_platinum.png": "33883583f0ac5ffdae991cad2541f2ae",
"assets/assets/icons/ic_history.png": "fd39159c1987c98024e16e39f48aa185",
"assets/assets/icons/confirmation_complete.png": "d991ec53bd928253d36642e1c103fc19",
"assets/assets/icons/ic_calendar_blank.png": "bc4dbe6d07d42e586d49fd6cafbc2bec",
"assets/assets/icons/ic_work.png": "e5a08418f4eed7b7d5907b821b796536",
"assets/assets/icons/ic_clock_3.svg": "e22ee2d0f4d3f6f8c0060c8cc2481ec7",
"assets/assets/icons/ic_home_2.png": "c7f21db95acca2718713b8fd43e5f5dd",
"assets/assets/icons/ic_calendar_round.png": "37d5cc78bb7d5ac53683e85d8364cc50",
"assets/assets/icons/calendar_add_on.png": "b88fd587ba9ca370c85daf590d1b0cff",
"assets/assets/icons/ic_rank_4_full.png": "a29ccb368f51818b690838578270809c",
"assets/assets/icons/ic_plus.png": "7e0c325985cbe16301a9fbc40a95b289",
"assets/assets/icons/ic_scheldule_enable.png": "52ee498010ca1a71f0b6e208ea15832f",
"assets/assets/icons/ic_rank_4.png": "cbed70ba2ed4f5565e705d4aaa041a57",
"assets/assets/icons/ic_group_revenue_new.png": "e59da3b076e71deac113bbc928b1db7f",
"assets/assets/icons/ic_sign_out.png": "353059a605f35232580e5aa3ba07d2cd",
"assets/assets/icons/ic_card_visit.png": "c15853bbb07baa04d874fed9a52607db",
"assets/assets/icons/ic_home_schelude.png": "d294687789969a53e159f2eb1a8f75cb",
"assets/assets/icons/ic_friends.png": "b2043cca2dd9ebe02b5c8306d514a526",
"assets/assets/icons/ic_skype.png": "eae1fcf425203a59a3c8fc84781bd83d",
"assets/assets/icons/ic_american_flag.png": "1f8fd78f22696077205e17e54ebd56a8",
"assets/assets/icons/ic_customer_chat.png": "fd698cc634787120be085617b56698fd",
"assets/assets/icons/ic_news.png": "2332fe2b1e6ce0b71f6992add360604c",
"assets/assets/icons/collaborator_ic_add.png": "1c21bb2c89b1fdf7ef41dbb8ce3e39c3",
"assets/assets/icons/ic_work_enable.png": "44fb5756c756f74f64450c62b8f60b12",
"assets/assets/icons/ic_group_revenue2.png": "c6482da584fbd6283635de676e2be3c9",
"assets/assets/icons/ic_count.png": "9f20cb56e3bbdc50fff7386037a99db8",
"assets/assets/icons/ic_zalo.png": "b3fa2eff377af40fd577dcc06e7f3de0",
"assets/assets/icons/ic_scheldule.png": "301d35eaa8330f5f27c02391faa58bab",
"assets/assets/icons/ic_unread_noti.png": "c4d7d05307411e69e39db5743dbe71ad",
"assets/assets/icons/ic_success.png": "583b5e020dc434e10f18be37f5f95aff",
"assets/assets/icons/ic_delete.png": "d63db70d18b33719498ddf6af2be9638",
"assets/assets/icons/ic_account_enable.png": "8c6f0ddb9faa2d18a5d1daa5da553061",
"assets/assets/icons/icon_check_out.png": "80b0f79fa390add3d132b813fca3bfd6",
"assets/assets/icons/ic_member_diamond.png": "19b8f361e60bad02d312aa5823b8ab5f",
"assets/assets/icons/ic_booking_out.svg": "77c5e75629fe255582fee63994a0e15b",
"assets/assets/icons/ic_total_spent.png": "08056ba4d3a1e4e5920d9b73e16ff704",
"assets/assets/icons/ic_feedback.png": "2573cf01d8d3c826f229e12e752f2ad1",
"assets/assets/icons/ic_profile.png": "9740d39da3be86ddc08a5340bd91b338",
"assets/assets/icons/ic_feedback_background.png": "0af7501314c03dbe9759e5e362ef3fe7",
"assets/assets/icons/acc_ic_scan.png": "2fbcca32487872bf91a4285872e59a56",
"assets/assets/icons/ic_problem.svg": "afd584726d55365547384412124d2fc5",
"assets/assets/icons/ic_check_approve.png": "ca927253058b958d70a5e8e098f9eafd",
"assets/assets/icons/ic_assignee.png": "57aa5e9b51cfa7e5a997ed2cc991dc21",
"assets/assets/icons/ic_clock_yellow.png": "198cc125cb26d4ef4aa241a41588c986",
"assets/assets/icons/ic_logo_branch.png": "95c65596521aca445048f186169be5e3",
"assets/assets/icons/ic_blue_setting.png": "2bbd9604dd0dfd26affdd2cbf65e20a5",
"assets/assets/icons/ic_time_status.svg": "b24921323c81962c84ef963d4749ae00",
"assets/assets/icons/ic_next_image.png": "837aca22dc26b4bcc8acd08eaf4943a0",
"assets/assets/icons/ic_arrow_back.png": "7e11e47b4b73d34b10836d4b25464344",
"assets/assets/icons/work.svg": "de318dd2c9c85c54d70ffa7b14ff6262",
"assets/assets/icons/ic_caring_staff_small.png": "7597e35588f6f1db0169a35414e6c8a8",
"assets/assets/icons/ic_group_revenue1.png": "9f36dc927d4e9a50c0a7240d23b75eaa",
"assets/assets/icons/ic_comment.png": "b8b5fa4fc18a1c73164234f172d43428",
"assets/assets/icons/ic_plus_gradient.png": "fe6a24094c9abbe3df62981181bfa0b1",
"assets/assets/icons/ic_direction_vector.png": "8d55ca4f07229d7ac9a09fcbf3c0956a",
"assets/assets/icons/ic_filter.png": "5221a126fc3bdba0bd42d6756e7cd408",
"assets/assets/icons/ic_work_enable_zema.png": "9b95a2585b1a8b692bf537b633464c15",
"assets/assets/icons/ic_qr_code.png": "894adf6e9d359e32b4f410510f0248dc",
"assets/assets/icons/ic_switch.png": "8a830101f9be73d0a5c36a10d1314f3e",
"assets/assets/icons/icon_error.png": "82d81206860f564d11b5207b77bdcaee",
"assets/assets/icons/ic_share.png": "63b4f600d22515a0f6ea4cf42a3461ef",
"assets/assets/icons/ic_rank_3.png": "f355493fe92ce905f32891e69d02b2ec",
"assets/assets/icons/ic_rank_2.png": "f908273775a75ef27d19cad80c2ffeca",
"assets/assets/icons/ic_done_task.png": "e06ac0267326cd7b8f9196a024ceba26",
"assets/assets/icons/ic_note.png": "88a104c3b652db9e5cb1357ea9da9823",
"assets/assets/icons/ic_commerce.png": "73ebc4e35a0a8ffb0a8cb2af3cd1bd13",
"assets/assets/icons/ic_sort_date.png": "6a20813672b4544f4ec50a3ef79bc101",
"assets/assets/icons/ic_clock.png": "867a96af348db5e3afcc51939578a046",
"assets/assets/icons/ic_call_branch.png": "35b7561bd8aa7f9a2b1211fa691372b1",
"assets/assets/icons/ic_floor.png": "f3fdbe3381ec230e5f29dd923bbd14c0",
"assets/assets/icons/ic_close_popup.png": "2faf2c8a24aca9a80417cb36c9c1bdce",
"assets/assets/icons/icon_gift.png": "985dc9f1ff7be1da0c9cdef00f97a278",
"assets/assets/icons/ic_pen.png": "92d65ef1ac834e1bda709f1eaa79f7ef",
"assets/assets/icons/ic_checked_out.png": "7aaf96e78e6cfa1dcdef30a00b028a1e",
"assets/assets/icons/collaborator_ic_down.png": "7c8f0cfd5c3c5d31072b44b254bf3c43",
"assets/assets/icons/ic_inventory.png": "1f97ad97ec8ee51084148db36b4a4ad5",
"assets/assets/icons/ic_month_calendar.png": "73987a31ad5eebcdd818f77b5070dd4f",
"assets/assets/icons/touch_id_popup.png": "e967637f5e946d6a679e66b3be4a4afe",
"assets/assets/icons/ic_more.png": "79b019d146611a1f49d3fc801b46ebdc",
"assets/assets/icons/ic_excel_extension.png": "66923014770b1cdc51d45fcb68d5a671",
"assets/assets/icons/ic_bell_yellow.png": "f5a1d370ee28b0dce8e8acdbd25fb55f",
"assets/assets/icons/ic_noti.png": "0973a5ad4423b0bfed31f485004b377f",
"assets/assets/icons/ic_received_gift.png": "fa866732c19dc62b3877a65db751874e",
"assets/assets/icons/ic_ticket.png": "ff09a7ad4fad67f31244338f5a069f17",
"assets/assets/icons/ic_close_black_circle.png": "d8588bc56866239f462894b159a5fd65",
"assets/assets/icons/ic_last_visit.png": "d71c898a30cba458b219782f72b8a804",
"assets/assets/icons/location_on.png": "059df85ceea19ac9f3836256be8b0a75",
"assets/assets/icons/confirmation_new.png": "a52f289985808db71e6b1be3bdbb17d9",
"assets/assets/icons/splash.png": "75914600225178f0263681701f647d7a",
"assets/assets/icons/ic_next.png": "5582efe58dceaca1c9d369452f15749a",
"assets/assets/icons/ic_add_outline.png": "da4fd4097454160290e7b92f4c641f0a",
"assets/assets/icons/ic_fingerprint_2.png": "f57c620e8b7be502bcbf8798841bcb64",
"assets/assets/icons/ic_edit.png": "4db057bc5790c190ff5de5e76ce4aa92",
"assets/assets/icons/ic_vn_flag.png": "224d8f9475b4faa7cb9904df438c47d3",
"assets/assets/icons/ic_member_home.png": "9a067bda31aa20faadfe81fe7dbcca9d",
"assets/assets/icons/ic_conservation.png": "8b2ab7d02f6e56a552dee865a9fdb910",
"assets/assets/icons/ic_none.png": "f12ac6efb5cf98fc7357d5305c47b014",
"assets/assets/icons/ic_decrease_point.png": "3dae88f7ac617ec25922437518d84b79",
"assets/assets/icons/ic_fingerprint.png": "6dab50cc1edc16783619644424562bc5",
"assets/assets/icons/ic_drawing_orange.svg": "c211024411f9caeb2912c09289f1c9ce",
"assets/assets/icons/ic_selection.png": "4bd1920921d28b1fcf43ea4168f2399a",
"assets/assets/icons/ic_bed_check.png": "8a4365c4e8e02f0269b2822c40b7af37",
"assets/assets/icons/ic_customer_group_yellow.png": "c6482da584fbd6283635de676e2be3c9",
"assets/assets/icons/ic_close_sheet.png": "ecd8bc4451e5e7c8c11a6146e70476a3",
"assets/assets/icons/ic_blue_close.png": "f6dbe2deac90dfe576d737077e421015",
"assets/assets/icons/ic_noti_icon.png": "f9cd765555440cf5cfb40404662c531c",
"assets/assets/icons/ic_bell_notification.png": "a1418e2f918373538a7b208c8295ec9d",
"assets/assets/icons/ic_type_check.png": "e3120cc565f638e385ca3fb3c95b08a6",
"assets/assets/icons/confirmation_number.svg": "4ee2d6e202c9e9c1790b18c6b05e626d",
"assets/assets/icons/ic_medicine_form.png": "428ec66ca35775fa6f44d09e377c2210",
"assets/assets/icons/ic_service.png": "e4ea62b4743234d6f28de4d7901fd28b",
"assets/assets/icons/ic_feedback_failure.png": "291df5f4245ed74e76bcfab68a776f8f",
"assets/assets/icons/ic_full_star.png": "01664bccbaf37c20462e9d3c06823199",
"assets/assets/icons/ic_reminder.png": "2f1e21b8fe4ca6895a24ced243c89eea",
"assets/assets/icons/ic_scan_voucher.png": "6880b0c649a9bbac2ad5613c06da2a1e",
"assets/assets/icons/ic_live.png": "93220f994293516d6a65a02fa966d71c",
"assets/assets/icons/ic_green_success.png": "d7f8e723b1d6d4094b0ed76b8eb3c8cd",
"assets/assets/icons/ic_contact.png": "c8a4010da82a9693112de53e44528e6a",
"assets/assets/icons/ic_call_rounded.png": "f6f3197632229afba312139af6a787cd",
"assets/assets/icons/ic_loading_status.svg": "90ad5fb4c2801503a47289eb923ff36d",
"assets/assets/icons/ic_fb.png": "e29768fa8db909c71fa73320bb4851d1",
"assets/assets/icons/ic_call_yellow.png": "b2a1dcd65933875f2922373d596d1dd4",
"assets/assets/icons/ic_cost.png": "8e6d9445b0b6f9c188c7d45b9763b76b",
"assets/assets/icons/ic_service_enable.png": "1608ac93cc61bd7ca67f289ff96dc332",
"assets/assets/icons/ic_increase_point.png": "5da552ad402cda451c86b446252c36a5",
"assets/assets/icons/ic_share_vid.png": "d654c3a8891382f5171fde6687198874",
"assets/assets/icons/ic_save.png": "130e4096b398d73670373272dd65ee99",
"assets/assets/icons/ic_editing.svg": "84b70efe9d9dc76baaf61331e4c99022",
"assets/assets/icons/icon_list_event.png": "18483355cef985ea514923a9f24bba5c",
"assets/assets/icons/ic_back.png": "189be0176512692a1c1322942310d9e3",
"assets/assets/icons/ic_nd_outline.png": "2946059853d32f0e40b2aba22745a5ae",
"assets/assets/icons/ic_booking_in.svg": "0cfc1ad721a250d4a86b1525fd919699",
"assets/assets/icons/ic_scan_checkin.png": "f92342c37df87761289d2d53538a3eb4",
"assets/assets/icons/ic_avg_revenue.png": "d9040ab63c3278f78963b9d390fc5ac5",
"assets/assets/icons/ic_identity_card.png": "7526175b97afbd10fce309b7b156bbaf",
"assets/assets/icons/ic_appbar_back.png": "b1a6ef89b04b6a16247fe9ba71a7cb76",
"assets/assets/icons/ic_camera_2.png": "104998021342ed1ebab4fe32e62ee962",
"assets/assets/icons/ic_coin.png": "d53ae79fab38591331727720d3839652",
"assets/assets/icons/ic_face_id.png": "5e260d2b5710ef5c407b75471d178c28",
"assets/assets/icons/ic_chat.png": "bd326f0426b5671e7ee6cc1a94f01532",
"assets/assets/icons/ic_account.png": "7dfa00aacd92f50ba785021045ed8894",
"assets/assets/icons/ic_customer_group_white.png": "9f36dc927d4e9a50c0a7240d23b75eaa",
"assets/assets/icons/ic_member.png": "b94d296e560f57aea85eed3ee3035062",
"assets/assets/icons/ic_read.svg": "af89c9af9bdb31301a2c3f0980a0b61f",
"assets/assets/icons/ic_add_image.png": "e7c85f661218144c92bf774a58593192",
"assets/assets/icons/ic_call_2.svg": "0b8b0042061b64d935f04a2abdbdbdd9",
"assets/assets/icons/ic_layers.png": "4b5fe82f0c7b21cb0aed93d9f97f020a",
"assets/assets/icons/ic_checkin_success.png": "762350f06c68bef40e1dacf9f49f399c",
"assets/assets/icons/ic_email.png": "1a95c358c9ee9c2f8c1c36ead0952c49",
"assets/assets/icons/ic_interal_news_item.png": "fd4a8281c49a1cbf61c95f5d98b5555d",
"assets/assets/icons/ic_medicine_add.png": "bb22f994a9762254d349353bc489b334",
"assets/assets/icons/ic_appointment_yellow.png": "46c9f7c8779c452daeccd4e347e9f1b3",
"assets/assets/icons/ic_vouchers_history.png": "bc9bf8aaf84463ffe4fb5676ddfc0e91",
"assets/assets/icons/ic_date.png": "4575a89e901c90176d5284b7ea766917",
"assets/assets/icons/ic_edit_4.png": "8dc2ad6e9155956ce535360dc11605af",
"assets/assets/icons/ic_multi_user.svg": "75769a2d94ad0eab831bf7e52d0f7153",
"assets/assets/icons/collaborator_ic_close_sheet.png": "2b5e822736350de68c39f2d127fdf2c2",
"assets/assets/icons/ic_top.png": "f9f0884a2c9698b9ef40be5fc695f2af",
"assets/assets/icons/ic_feedback_foreground.png": "b9f6b1492a1f10d210523324b7826cd6",
"assets/assets/icons/ic_customer_id.png": "e046ae1d5c07b9f8f3cb7b37465144e1",
"assets/assets/icons/ic_edit_5.png": "7533aadbd0035ca55499c4de44c911ba",
"assets/assets/icons/ic_medical_service.png": "49708d608df66cff3c6ff160039b7f99",
"assets/assets/icons/ic_arrow_down.png": "e3afe95597edaa22b3e568b43170fa32",
"assets/assets/icons/ic_up.png": "b3fc9db50081e53769ff2142f9199283",
"assets/assets/icons/ic_customer_group_green.png": "c4e774f8aea37949a9612b1f63006e29",
"assets/assets/icons/problem.png": "7636b539fbc632572481bedc785d4d39",
"assets/assets/icons/ic_timekeeping.png": "28444a53b9060acda3b2b081d5c158c2",
"assets/assets/icons/ic_non_editable.svg": "aeb3b3ae7f94b3ef1a36d9ffa99344cd",
"assets/assets/icons/collaborator_ic_notification.png": "a1418e2f918373538a7b208c8295ec9d",
"assets/assets/icons/ic_check.png": "9dcfea0e386ef7529937f208edd71807",
"assets/assets/icons/collaborator_ic_chat.png": "3dffa3de00ff61e22c6041113918619a",
"assets/assets/icons/ic_location_2.png": "a88e26564970fee800eddacaa0030412",
"assets/assets/icons/ic_customer_clock.png": "95b4c4185533d1be455f94bfbdf4d771",
"assets/assets/icons/touch_id.png": "af5abb45f90ab7c1d5deb61406f6c210",
"assets/assets/icons/ic_menu.png": "3f38aac592b35f0863b0672472162bf2",
"assets/assets/icons/ic_empty_request_support.png": "a64745903f8346847a4622dcc3538027",
"assets/assets/icons/ic_edit_customer.svg": "de3803b0df278703f5e172e65234ec83",
"assets/assets/icons/ic_user_approved.png": "87df2e0ff7d55cee559a1588c6b47e8a",
"assets/assets/icons/ic_consultation_option.svg": "bbe7cb5a0eb6c8a14687251b007f3912",
"assets/assets/icons/ic_give_gift_success.png": "2487b3749dfcce2aa8754e2b4d026d5f",
"assets/assets/icons/ic_empty_star.png": "84d8d45f014e16f6683422a246c8964c",
"assets/assets/icons/ic_feedback_success.png": "a35f1917f6567d10a994a72be7e6f372",
"assets/assets/icons/ic_timekeeping_enable.png": "e70beff83c37ae2a3f776598562995a8",
"assets/assets/icons/ic_yellow_warning.png": "e38959f761b4032b8df1f057cc08976f",
"assets/assets/icons/ic_support_request.png": "d1db4bf48b45fe7b4447c4e760bd47fd",
"assets/assets/icons/ic_find.png": "076b67296c62a4cc1c43b1812d7d6fa2",
"assets/assets/icons/ic_heart_enable.png": "778a6f100eebd5608c6528e19e9bc67c",
"assets/assets/icons/ic_filter_2.png": "b60fc5c822d78a94076a2842b78989a2",
"assets/assets/icons/ic_no_visit.png": "0e7dd90ccb3405eb9e2e6054df3e41bb",
"assets/assets/icons/ic_bed_change.png": "81d2f7090e1c15730d99bc9d6776434b",
"assets/assets/icons/ic_copy.svg": "ef5aa9221d8a7f6d7d8fba67b7019663",
"assets/assets/icons/ic_film.png": "5d28447986c55d30454e2ff0903a85da",
"assets/assets/icons/ic_drop_down.png": "f86eecced3ee93c764797a7cd07f36fe",
"assets/assets/icons/ic_filter_list.png": "0abc2f9e7a05fd9ac65712d49d5c50ef",
"assets/assets/icons/ic_note_2.svg": "fb495fb0f15697743bb46a4dc78fdc8b",
"assets/assets/icons/ic_card_balance.png": "01ab9fedbd757ac0b5490f9c8b3222e7",
"assets/assets/icons/ic_approval.png": "c7d3fd490d61feab27e1dca2d75c02e4",
"assets/assets/icons/ic_asset_history.png": "2d366bd092710f77ba68b69eaef8e2ea",
"assets/assets/icons/ic_check_green.png": "bb47eb083a604849c90ecd3d0a6c8458",
"assets/assets/icons/ic_medicine.png": "a51ddba5abf3b9b15ae10899a1851b52",
"assets/assets/icons/ic_call.png": "3e3f5a79ebf123e10c082af86cc0f1a5",
"assets/assets/icons/ic_other_extension.png": "c288bf07a44b99911e31ceaabfb9cade",
"assets/assets/icons/ic_add_user_outline.png": "5628e5335b130f037ab799b6400d5e12",
"assets/assets/icons/ic_edit_2.png": "5e30ece363891bf5c3a085f5c83d28f9",
"assets/assets/icons/ic_edit_3.png": "525ba93b6a08ea7838eacfc131e56c25",
"assets/assets/icons/ic_group.png": "531c0183f3dcd9323b71adbcbf05fd15",
"assets/assets/icons/ic_timekeeping_enable_zema.png": "c476ce22475fcadd24c0ca60236038e4",
"assets/assets/icons/ic_location_on.svg": "ff04e5b607e0a41470b088af2e7b8097",
"assets/assets/icons/ic_gift.png": "1cebbc2a434b42092ad57f61da7f2f00",
"assets/assets/icons/ic_call_red.svg": "ec72c6998506977825ebdcbfdfe48f74",
"assets/assets/icons/ic_qrcode.png": "e880816c7851afef141eaa71ce5aeb93",
"assets/assets/icons/ic_home_enable.png": "2c8eb549f0c54ed0ccb353c3bedd248d",
"assets/assets/icons/ic_sort.png": "57dbc31bf1fc31471563783fec041829",
"assets/assets/icons/ic_view.png": "3c633b11af0171f6b0e72c391dcaaaee",
"assets/assets/icons/ic_order.png": "683c4a65551aa12d7e7e933cffb5dd97",
"assets/assets/icons/ic_call_green.svg": "4266871f090c4cb8047684bd19dd650b",
"assets/assets/icons/ic_pdf_extension.jpeg": "5075c7d0b0c85c1c3223443f42938466",
"assets/assets/icons/ic_door.png": "352d40313a467e7e9d428874c3c89172",
"assets/assets/icons/ic_hone_schelude_grey.png": "ace5a5a7849464ed17d45464316526d5",
"assets/assets/icons/unmap.png": "3dcfbb9457fd842eb3f20c8a05aa0f0e",
"assets/assets/icons/ic_team_members.png": "5fa019d96dbcc9c2381b78a24838b2b8",
"assets/assets/icons/ic_bed_2.svg": "a080242bda1f048bd47c497ac2e5722f",
"assets/assets/icons/ic_edit_calendar.svg": "c49407bb1e669beef8ef4c6037c284c6",
"assets/assets/icons/ic_gallery.png": "9f11f0cd2c2b7fbd82782afe294aa71e",
"assets/assets/icons/ic_member_silver.png": "2b62a357f4d060b06e11cfbdaf20384d",
"assets/assets/json_icons.json": "22d611b629a6d3be6190b06c9621df34",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
