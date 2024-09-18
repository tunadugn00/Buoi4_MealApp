// data/mealsData.js
export const ALL_MEALS = [
    // Món chính
    {
      id: '1',
      name: 'Phở bò',
      category: '1',
      image: 'https://tiki.vn/blog/wp-content/uploads/2023/07/thumb-12.jpg',
      description: 'Món ăn truyền thống của Việt Nam với nước dùng ngọt thanh, bánh phở mềm và thịt bò mỏng.',
      price:'35.000',
      ingredients: ['Bánh phở', 'Thịt bò', 'Hành', 'Ngò', 'Gia vị'],
      prepTime: '20 phút'
    },
    {
        id: '2',
        name: 'Bún chả',
        category: '1',
        image: 'https://toquoc.mediacdn.vn/280518851207290880/2023/7/21/2f2fafar-media-production-webs3amazonawscom2fbrightspot2fd52fab2fc294b19d4b31856cddeb0a1c16ca2fshutterstock-1840735105-16868161084121474746128-16899282921001164651526.jpg',
        description: 'Món ăn đặc trưng của Hà Nội với bún, chả nướng và nước mắm chua ngọt.',
        price:'30.000',
        ingredients: ['Bún', 'Thịt lợn nướng', 'Nem rán', 'Rau sống', 'Nước mắm pha'],
        prepTime: '20 phút'
      },
      {
        id: '3',
        name: 'Cơm tấm sườn bì chả',
        category: '1',
        image: 'https://static.hawonkoo.vn/hwk02/images/2023/10/com-tam-suon-bi-cha-2.jpg',
        description: 'Món ăn phổ biến tại miền Nam với sườn nướng thơm ngon, bì và chả trứng hấp.',
        price: '40.000',
        ingredients: ['Cơm tấm', 'Sườn nướng', 'Bì', 'Chả trứng', 'Nước mắm'],
        prepTime: '20 phút'
      },
      {
        id: '4',
        name: 'Bánh mì thịt nướng',
        category: '1',
        image: 'https://www.huongnghiepaau.com/wp-content/uploads/2019/08/banh-mi-kep-thit-nuong-thom-phuc.jpg',
        description: 'Bánh mì giòn rụm với nhân thịt nướng, pate và rau sống.',
        price: '25.000',
        ingredients: ['Bánh mì', 'Thịt nướng', 'Pate', 'Rau sống', 'Dưa leo'],
        prepTime: '10 phút'
      },
      {
        id: '7',
        name: 'Bánh xèo',
        category: '1',
        image: 'https://cdn.tgdd.vn/Files/2020/03/25/1244527/cach-lam-banh-xeo-chay-thom-ngon-gion-rum-don-gian-13-760x367.jpg',
        description: 'Món bánh truyền thống giòn rụm với nhân tôm, thịt và giá đỗ.',
        price: '35.000',
        ingredients: ['Bột bánh xèo', 'Tôm', 'Thịt heo', 'Giá đỗ', 'Rau sống'],
        prepTime: '20 phút'
      },
      {
        id: '8',
        name: 'Bún bò Huế',
        category: '1',
        image: 'https://mms.img.susercontent.com/vn-11134513-7r98o-lsv9li5gody1dc@resize_ss1242x600!@crop_w1242_h600_cT',
        description: 'Món bún nổi tiếng từ Huế với nước dùng đậm đà, cay nồng, thịt bò và giò heo.',
        price: '50.000',
        ingredients: ['Bún', 'Thịt bò', 'Giò heo', 'Chả cua', 'Huyết heo'],
        prepTime: '20 phút'
      },
      {
        id: '9',
        name: 'Lẩu Thái',
        category: '1',
        image: 'https://static.vinwonders.com/production/lau-thai-ngon-ha-noi-banner.jpg',
        description: 'Lẩu Thái cay chua, thơm ngon với tôm, mực và rau nhúng.',
        price: '200.000',
        ingredients: ['Tôm', 'Mực', 'Nấm', 'Rau muống', 'Gia vị lẩu Thái'],
        prepTime: '30 phút'
      },
      {
        id: '10',
        name: 'Cơm chiên Dương Châu',
        category: '1',
        image: 'https://i.ytimg.com/vi/ZbSbc9Z8K6E/maxresdefault.jpg',
        description: 'Cơm chiên thơm lừng với lạp xưởng, tôm, trứng và rau củ.',
        price: '35.000',
        ingredients: ['Cơm', 'Lạp xưởng', 'Tôm', 'Trứng', 'Rau củ'],
        prepTime: '25 phút'
      },
      {
        id: '11',
        name: 'Mì Quảng',
        category: '1',
        image: 'https://helenrecipes.com/wp-content/uploads/2021/05/Screenshot-2021-05-31-142423.png',
        description: 'Món mì đặc sản của Quảng Nam với tôm, thịt và trứng cút.',
        price: '45.000',
        ingredients: ['Mì Quảng', 'Tôm', 'Thịt heo', 'Trứng cút', 'Đậu phộng'],
        prepTime: '20 phút'
      },


      
     


      // Món tráng miệng
      {
        id: '20',
        name: 'Chè trôi nước',
        category: '2', 
        image: 'https://cdn.tgdd.vn/Files/2021/08/20/1376549/top-15-mon-trang-mieng-viet-nam-ngon-nhat-ma-ban-nen-biet-202108201445168873.jpg',
        description: 'Món tráng miệng truyền thống với bánh trôi nước ngọt ngào trong nước đường gừng.',
        price: '25.000',
        ingredients: ['Bột nếp', 'Đường', 'Gừng', 'Vừng'],
        prepTime: '40 phút'
      },
      {
        id: '21',
        name: 'Bánh flan',
        category: '2',
        image: 'https://daotaobeptruong.vn/wp-content/uploads/2022/04/banh-flan-beo-ngay.jpg',
        description: 'Món bánh flan mềm mịn với vị ngọt béo từ trứng và caramel.',
        price: '25.000',
        ingredients: ['Trứng gà', 'Sữa tươi', 'Đường', 'Caramel'],
        prepTime: '60 phút'
      },
      {
        id: '22',
        name: 'Chè ba màu',
        category: '2',
        image: 'https://helenrecipes.com/wp-content/uploads/2015/03/IMG_9091.jpg',
        description: 'Món chè thanh mát với ba màu sắc từ đậu đỏ, đậu xanh và thạch.',
        price: '25.000',
        ingredients: ['Đậu đỏ', 'Đậu xanh', 'Nước cốt dừa', 'Thạch'],
        prepTime: '45 phút'
      },



      // Món khai vị
      {
        id: '30',
        name: 'Gỏi cuốn',
        category: '3', 
        image: 'https://i.ytimg.com/vi/gVdNuAmGQK0/maxresdefault.jpg',
        description: 'Món khai vị nhẹ nhàng với tôm, thịt và rau cuộn trong bánh tráng.',
        ingredients: ['Bánh tráng', 'Tôm', 'Thịt lợn', 'Rau sống', 'Bún'],
        price: '25.000',
        prepTime: '20 phút'
      },
      {
        id: '31',
        name: 'Nem rán',
        category: '3', 
        image: 'https://cdn.tgdd.vn/2021/05/CookProduct/nem-ran-thumbnail-1200x676.jpg',
        description: 'Món khai vị giòn rụm với nhân thịt và rau củ được gói trong bánh đa nem.',
        ingredients: ['Bánh đa nem', 'Thịt lợn', 'Mộc nhĩ', 'Cà rốt', 'Miến'],
        price: '30.000',
        prepTime: '40 phút'
      },
      {
        id: '32',
        name: 'Súp gà ngô non',
        category: '3', 
        image: 'https://cdn.tgdd.vn/Files/2021/06/02/1355918/cach-nau-sup-ga-thom-ngon-bo-duong-cuc-don-gian-cho-bua-sang-202106020831401537.jpg',
        description: 'Món súp gà bổ dưỡng kết hợp với ngô non ngọt dịu.',
        ingredients: ['Thịt gà', 'Ngô non', 'Trứng', 'Hành lá', 'Gia vị'],
        price: '20.000',
        prepTime: '25 phút'
      },

      // Món chay
      {
        id: '15',
        name: 'Đậu hũ chiên sả ớt',
        category: '4', 
        image: 'https://cdn.tgdd.vn/Files/2020/12/07/1310944/cach-lam-dau-hu-chien-sa-thom-lung-gion-ngon-cuc-don-gian-202012071445258189.jpg',
        description: 'Món chay thanh đạm với đậu hũ chiên giòn và hương vị sả ớt thơm lừng.',
        ingredients: ['Đậu hũ', 'Sả', 'Ớt', 'Gia vị'],
        price: '25.000',
        prepTime: '20 phút'
      },
      {
        id: '16',
        name: 'Nấm xào thập cẩm',
        category: '4', 
        image: 'https://cdn.tgdd.vn/Files/2021/01/06/1317669/cach-lam-nam-xao-thap-cam-gion-ngon-don-gian-de-thuc-hien-202101061401160348.jpg',
        description: 'Món chay bổ dưỡng với nhiều loại nấm tươi xào cùng rau củ.',
        ingredients: ['Nấm rơm', 'Nấm đông cô', 'Cà rốt', 'Hành tây', 'Gia vị'],
        price: '30.000',
        prepTime: '30 phút'
      },


      // Món ăn vặt
      {
        id: '17',
        name: 'Bánh tráng trộn',
        category: '5', 
        image: 'https://cdn.tgdd.vn/2021/05/CookProduct/1200-1-1200x676-36.jpg',
        description: 'Món ăn vặt đường phố nổi tiếng với sự kết hợp của bánh tráng, khô bò, và trứng cút.',
        ingredients: ['Bánh tráng', 'Khô bò', 'Trứng cút', 'Hành phi', 'Rau răm'],
        price: '20.000',
        prepTime: '15 phút'
      },
      {
        id: '18',
        name: 'Khoai lang lắc phô mai',
        category: '5', 
        image: 'https://cdn.tgdd.vn/2020/10/CookRecipe/GalleryStep/thanh-pham-21-760x367.jpg',
        description: 'Món ăn vặt giòn rụm với khoai lang chiên và phô mai thơm béo.',
        ingredients: ['Khoai lang', 'Phô mai bột', 'Dầu ăn', 'Gia vị'],
        price: '25.000',
        prepTime: '25 phút'
      },
      // Đồ uống
      {
        id: '5',
        name: 'Cà phê sữa đá',
        category: '6', 
        image: 'https://evc.cafe/wp-content/uploads/2021/10/ca-phe-sua-da-viet-nam.jpg',
        description: 'Đồ uống phổ biến của Việt Nam với cà phê đậm đà và sữa đặc.',
        ingredients: ['Cà phê', 'Sữa đặc', 'Đá'],
        prepTime: '5 phút'
      },
      {
        id: '19',
        name: 'Trà sữa trân châu',
        category: '6', 
        image: 'https://cdn.tgdd.vn/2020/11/CookProduct/cach-lam-tra-sua-tran-chau-truyen-thong-bang-tra-tui-loc-thumbnail.jpg',
        description: 'Đồ uống ngọt ngào với trà sữa thơm ngon và trân châu dai dai.',
        ingredients: ['Trà', 'Sữa', 'Trân châu', 'Đường'],
        price: '30.000',
        prepTime: '15 phút'
      },
      {
        id: '20',
        name: 'Nước ép dưa hấu',
        category: '6', 
        image: 'https://cdn.tgdd.vn/Files/2019/06/13/1173220/cach-lam-nuoc-ep-dua-hau-giai-nhiet-cho-ngay-nang-nong-201906131048374835.jpg',
        description: 'Nước ép dưa hấu tươi mát giúp giải nhiệt cho những ngày hè.',
        ingredients: ['Dưa hấu', 'Đường', 'Nước cốt chanh'],
        price: '20.000',
        prepTime: '10 phút'
      }

  ];