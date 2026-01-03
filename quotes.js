const quotesData = [
    {
        text: "Văn học là tiếng nói của tâm hồn con người.",
        meaning: "Văn học phản ánh đời sống nội tâm, cảm xúc và khát vọng sâu kín của con người."
    },
    {
        text: "Giá trị nhân đạo là linh hồn của tác phẩm văn chương.",
        meaning: "Tác phẩm có giá trị khi biết yêu thương, cảm thông và bảo vệ con người."
    },
    {
        text: "Văn học không sao chép hiện thực mà tái tạo hiện thực.",
        meaning: "Nhà văn chọn lọc và sáng tạo lại đời sống qua lăng kính nghệ thuật."
    },
    {
        text: "Nhân vật văn học là nơi gửi gắm tư tưởng của nhà văn.",
        meaning: "Qua nhân vật, nhà văn thể hiện quan niệm sống và thái độ với xã hội."
    },
    {
        text: "Ngôn ngữ là chất liệu làm nên nghệ thuật văn chương.",
        meaning: "Cách dùng từ và hình ảnh quyết định sức hấp dẫn của tác phẩm."
    },
    {
        text: "Văn học giúp con người sống nhân ái hơn.",
        meaning: "Văn học nuôi dưỡng lòng yêu thương và sự đồng cảm."
    },
    {
        text: "Hiện thực trong văn học luôn mang dấu ấn chủ quan.",
        meaning: "Hiện thực được phản ánh qua cảm xúc và góc nhìn riêng của tác giả."
    },
    {
        text: "Một chi tiết nhỏ có thể làm sáng bừng tư tưởng lớn.",
        meaning: "Chi tiết nghệ thuật đắt giá tạo nên chiều sâu cho tác phẩm."
    },
    {
        text: "Văn học là nghệ thuật của sự rung động.",
        meaning: "Giá trị của văn chương nằm ở khả năng chạm tới cảm xúc người đọc."
    },
    {
        text: "Tác phẩm lớn luôn mang giá trị vượt thời gian.",
        meaning: "Văn học chân chính không bị giới hạn bởi thời đại."
    },
    {
        text: "Cảm hứng nhân đạo là sợi chỉ đỏ của văn học tiến bộ.",
        meaning: "Lòng yêu người là nền tảng của những tác phẩm có giá trị."
    },
    {
        text: "Văn học là nơi con người đối thoại với chính mình.",
        meaning: "Người đọc soi chiếu bản thân qua số phận nhân vật."
    },
    {
        text: "Nhân vật điển hình phản ánh bản chất xã hội.",
        meaning: "Nhân vật đại diện cho một tầng lớp hoặc kiểu người."
    },
    {
        text: "Thơ ca là tiếng nói tinh tế nhất của cảm xúc.",
        meaning: "Thơ biểu đạt cảm xúc con người một cách cô đọng và sâu sắc."
    },
    {
        text: "Văn học không chỉ để đọc mà còn để suy ngẫm.",
        meaning: "Văn chương khơi gợi tư duy và triết lý sống."
    },
    {
        text: "Mỗi nhà văn có một thế giới nghệ thuật riêng.",
        meaning: "Phong cách cá nhân tạo nên dấu ấn độc đáo của tác giả."
    },
    {
        text: "Bi kịch văn học phản ánh bi kịch của đời sống.",
        meaning: "Nỗi đau trong tác phẩm bắt nguồn từ hiện thực xã hội."
    },
    {
        text: "Văn học là ký ức tinh thần của dân tộc.",
        meaning: "Văn học lưu giữ lịch sử, văn hóa và tâm hồn dân tộc."
    },
    {
        text: "Một tác phẩm hay luôn gợi nhiều hơn nói.",
        meaning: "Văn chương để lại khoảng trống cho người đọc suy nghĩ."
    },
    {
        text: "Văn học chân chính luôn đặt con người ở vị trí trung tâm.",
        meaning: "Mọi giá trị văn chương đều hướng về con người."
    },
    {
        text: "Giá trị nhân đạo là thước đo chiều sâu của tác phẩm.",
        meaning: "Tác phẩm càng giàu lòng nhân ái thì giá trị tư tưởng càng cao."
    },
    {
        text: "Văn học là tiếng nói của lương tri con người.",
        meaning: "Văn chương phê phán cái ác và bảo vệ cái thiện."
    },
    {
        text: "Cái đẹp trong văn học luôn gắn với cái thiện.",
        meaning: "Vẻ đẹp nghệ thuật hướng con người đến những giá trị tốt đẹp."
    },
    {
        text: "Văn học giúp con người hoàn thiện nhân cách.",
        meaning: "Qua tác phẩm, con người được giáo dục về đạo đức và lối sống."
    },
    {
        text: "Tư tưởng tiến bộ làm nên sức sống lâu dài của tác phẩm.",
        meaning: "Những giá trị nhân văn giúp tác phẩm vượt qua thử thách thời gian."
    },
    {
        text: "Văn học là sự hòa quyện giữa cảm xúc và trí tuệ.",
        meaning: "Tác phẩm vừa lay động tình cảm vừa gợi mở suy nghĩ."
    },
    {
        text: "Hình tượng nghệ thuật là linh hồn của tác phẩm.",
        meaning: "Hình tượng giúp tư tưởng trở nên cụ thể và sinh động."
    },
    {
        text: "Văn học phản ánh đời sống trong sự vận động không ngừng.",
        meaning: "Hiện thực được nhìn nhận trong quá trình biến đổi."
    },
    {
        text: "Một câu văn hay có thể sống mãi với thời gian.",
        meaning: "Ngôn từ giàu giá trị nghệ thuật có sức sống lâu bền."
    },
    {
        text: "Văn học là nghệ thuật của ngôn từ.",
        meaning: "Ngôn ngữ là phương tiện biểu đạt duy nhất của văn chương."
    },
    {
        text: "Văn học giúp con người nhận ra giá trị của cuộc sống.",
        meaning: "Qua tác phẩm, con người biết trân trọng hạnh phúc."
    },
    {
        text: "Nhân vật phản diện góp phần làm nổi bật tư tưởng tác phẩm.",
        meaning: "Cái ác được khắc họa để tôn vinh cái thiện."
    },
    {
        text: "Văn học là nơi nhà văn gửi gắm quan niệm sống.",
        meaning: "Tác phẩm thể hiện cái nhìn của tác giả về cuộc đời."
    },
    {
        text: "Chủ đề tư tưởng quyết định chiều sâu tác phẩm.",
        meaning: "Tư tưởng là trục chính chi phối toàn bộ nội dung."
    },
    {
        text: "Văn học giúp con người biết yêu thương hơn.",
        meaning: "Văn chương nuôi dưỡng tình người và sự sẻ chia."
    },
    {
        text: "Một tác phẩm lớn luôn gắn với số phận con người.",
        meaning: "Con người là trung tâm của mọi giá trị văn học."
    },
    {
        text: "Văn học là tiếng nói của tự do và khát vọng.",
        meaning: "Tác phẩm thể hiện ước mơ về cuộc sống tốt đẹp hơn."
    },
    {
        text: "Giá trị nghệ thuật tạo nên sức hấp dẫn thẩm mỹ.",
        meaning: "Nghệ thuật cao giúp tác phẩm cuốn hút người đọc."
    },
    {
        text: "Văn học phản ánh xã hội qua lăng kính thẩm mỹ.",
        meaning: "Hiện thực được nhìn bằng con mắt nghệ thuật."
    },
    {
        text: "Văn học giúp con người vượt lên nghịch cảnh.",
        meaning: "Văn chương tiếp thêm niềm tin và nghị lực sống."
    },
    {
        text: "Văn học là sự khám phá không ngừng về con người.",
        meaning: "Con người luôn là đề tài trung tâm của văn chương."
    },
    {
        text: "Tính dân tộc tạo nên bản sắc của văn học.",
        meaning: "Văn học mang dấu ấn văn hóa và tâm hồn dân tộc."
    },
    {
        text: "Một tác phẩm hay luôn mở ra nhiều cách hiểu.",
        meaning: "Văn chương giàu ý nghĩa và mang tính đa chiều."
    },
    {
        text: "Văn học là cầu nối giữa quá khứ và hiện tại.",
        meaning: "Văn chương giúp thế hệ sau hiểu thế hệ trước."
    },
    {
        text: "Giá trị tư tưởng quyết định tầm vóc tác phẩm.",
        meaning: "Tư tưởng lớn làm nên tác phẩm lớn."
    },
    {
        text: "Văn học giúp con người sống sâu sắc hơn.",
        meaning: "Văn chương làm giàu đời sống tinh thần."
    },
    {
        text: "Nhân vật trung tâm là nơi hội tụ tư tưởng tác phẩm.",
        meaning: "Tư tưởng được thể hiện rõ nhất qua nhân vật chính."
    },
    {
        text: "Văn học là tiếng nói của sự đồng cảm.",
        meaning: "Văn chương kết nối con người với con người."
    },
    {
        text: "Một tác phẩm sống lâu là nhờ chạm tới trái tim người đọc.",
        meaning: "Cảm xúc chân thật quyết định sức sống của tác phẩm."
    },
    {
        text: "Văn học luôn hướng con người đến chân – thiện – mỹ.",
        meaning: "Mục đích cao nhất của văn chương là giá trị nhân văn."
    },
    {
    "text": "Văn học là nghệ thuật ngôn từ.",
    "meaning": "Văn học dùng ngôn từ làm chất liệu để sáng tạo hình tượng, biểu đạt tư tưởng và cảm xúc.",
    "type": "nghien-cuu",
    "author": "Mai Văn Sơn"
  },
  {
    "text": "Tác phẩm văn học là phát minh về hình thức và khám phá về nội dung.",
    "meaning": "Tác phẩm có giá trị khi vừa mới mẻ trong nội dung, vừa độc đáo trong nghệ thuật.",
    "type": "nghien-cuu",
    "author": "Mai Văn Sơn"
  },
  {
    "text": "Ngôn ngữ là linh hồn của tác phẩm văn học.",
    "meaning": "Chất lượng văn chương thể hiện qua sự chọn lọc, biểu cảm và sáng tạo của ngôn ngữ.",
    "type": "nghien-cuu",
    "author": "Lí luận văn học"
  },
  {
    "text": "Thi pháp là hệ thống các nguyên tắc nghệ thuật chi phối sự tạo thành của tác phẩm.",
    "meaning": "Thi pháp thể hiện cách thức nhà văn sáng tạo thế giới nghệ thuật.",
    "type": "nghien-cuu",
    "author": "Trần Đình Sử"
  },
  {
    "text": "Tác phẩm văn học là kết tinh giữa hiện thực và tư tưởng nghệ sĩ.",
    "meaning": "Văn học không sao chép hiện thực mà tái tạo nó qua cảm nhận và lý tưởng của người viết.",
    "type": "nghien-cuu",
    "author": "Lí luận văn học"
  },
  {
    "text": "Điểm nhìn trần thuật là nơi hội tụ ý thức và tư tưởng của người kể chuyện.",
    "meaning": "Cách nhìn quyết định giọng điệu và tầng ý nghĩa của tác phẩm.",
    "type": "nghien-cuu",
    "author": "Trần Đình Sử"
  },
  {
    "text": "Độc thoại nội tâm là hình thức thể hiện sâu sắc đời sống tâm lý con người.",
    "meaning": "Giúp người đọc tiếp cận thế giới nội tâm phức tạp của nhân vật.",
    "type": "nghien-cuu",
    "author": "Trần Đình Sử"
  },
  {
    "text": "Thế giới nghệ thuật là không gian và thời gian của tâm hồn nhà văn.",
    "meaning": "Mỗi nhà văn kiến tạo một vũ trụ riêng phản ánh quan niệm nhân sinh và thẩm mỹ.",
    "type": "nghien-cuu",
    "author": "Mai Văn Sơn"
  },
  {
    "text": "Nhân vật văn học là linh hồn của tác phẩm tự sự.",
    "meaning": "Nhân vật là trung tâm thể hiện tư tưởng và quan niệm nghệ thuật của tác giả.",
    "type": "nghien-cuu",
    "author": "LLVH Bản VIP PRO"
  },
  {
    "text": "Cảm hứng là linh khí của sáng tạo văn học.",
    "meaning": "Cảm hứng là nguồn năng lượng tinh thần thúc đẩy quá trình sáng tạo nghệ thuật.",
    "type": "nghien-cuu",
    "author": "Mai Văn Sơn"
  },
  {
    "text": "Hình tượng nghệ thuật là cách con người nhìn thế giới bằng con mắt sáng tạo.",
    "meaning": "Hình tượng là sự khái quát và tưởng tượng độc đáo về đời sống.",
    "type": "nghien-cuu",
    "author": "LLVH Bản VIP PRO"
  },
  {
    "text": "Văn học là nhân học.",
    "meaning": "Văn học nghiên cứu con người trong mọi mối quan hệ.",
    "type": "nghien-cuu",
    "author": "M. Gorki"
  },
  {
    "text": "Nhà văn là thư ký trung thành của thời đại.",
    "meaning": "Nhà văn phản ánh trung thực hiện thực xã hội.",
    "type": "nghien-cuu",
    "author": "H. Balzac"
  },
  {
    "text": "Văn học là tấm gương phản chiếu xã hội, nhưng là tấm gương có linh hồn.",
    "meaning": "Văn học phản ánh hiện thực qua tâm hồn và cảm xúc của nghệ sĩ.",
    "type": "nghien-cuu",
    "author": "Biêlinxki"
  },
  {
    "text": "Nhà văn là kỹ sư tâm hồn.",
    "meaning": "Nghệ sĩ có sứ mệnh thức tỉnh và cải tạo tâm hồn con người bằng nghệ thuật.",
    "type": "nghien-cuu",
    "author": "M. Gorki"
  },
  {
    "text": "Văn học là tiếng nói của tình cảm, là sự rung động mãnh liệt của tâm hồn.",
    "meaning": "Cảm xúc là nền tảng của mọi sáng tạo nghệ thuật.",
    "type": "nghien-cuu",
    "author": "Mai Văn Sơn"
  },
  {
    "text": "Tính đa nghĩa là vẻ đẹp đặc trưng của ngôn từ văn chương.",
    "meaning": "Mỗi hình ảnh hay câu chữ có thể gợi nhiều tầng nghĩa khác nhau.",
    "type": "nghien-cuu",
    "author": "Lí luận văn học"
  },
  {
    "text": "Tác phẩm nghệ thuật là một chỉnh thể thống nhất giữa nội dung và hình thức.",
    "meaning": "Không thể tách rời tư tưởng và hình thức biểu đạt trong văn học.",
    "type": "nghien-cuu",
    "author": "LLVH Bản VIP PRO"
  },
  {
    "text": "Thơ là tiếng nói đầu tiên, tiếng nói cuối cùng của tâm hồn con người.",
    "meaning": "Thơ biểu đạt những rung động chân thật, sâu xa nhất của con người.",
    "type": "nghien-cuu",
    "author": "Xuân Diệu (diễn giải)"
  },
  {
    "text": "Mỗi tác phẩm văn học lớn đều là một cuộc đối thoại với thời đại.",
    "meaning": "Tác phẩm luôn chất vấn, phản tư và đối thoại với con người cùng thời.",
    "type": "nghien-cuu",
    "author": "M. Bakhtin"
  }
];




