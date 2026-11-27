export type PoemMotif =
  | 'kapok-river'
  | 'rain-eaves'
  | 'bamboo-pass'
  | 'purple-slope'
  | 'silk-lute'
  | 'night-bridge'
  | 'twin-peaks'
  | 'liuzhou-train'
  | 'temple-bell';

export interface PoemWork {
  id: string;
  index: number;
  romanNumeral: string;
  editionCode: string;
  title: string;
  subtitleLabel: string;
  year: string;
  genre: string;
  isExcerpt: boolean;
  motif: PoemMotif;
  editorialNote: string;
  stanzas: string[][];
}

export const VU_CAO_POEMS: PoemWork[] = [
  {
    id: 'ngay-xua',
    index: 0,
    romanNumeral: 'I',
    editionCode: 'N° 01',
    title: 'Ngày xưa',
    subtitleLabel: 'Lục bát · Khúc ru Truyện Kiều',
    year: '1968',
    genre: 'Lục bát',
    isExcerpt: false,
    motif: 'silk-lute',
    editorialNote:
      'Bài thơ xúc động về tiếng ru của người mẹ qua những câu Kiều cổ điển, nối liền mạch nguồn văn hóa dân tộc qua các thế hệ.',
    stanzas: [
      [
        'Mẹ tôi ru cháu chiều chiều',
        'Thường là ru mấy câu Kiều cháu nghe:',
        '“Mây Tần khoá kín song the',
        'Bụi hồng lẽo đẽo đi về chiêm bao…”',
      ],
      [
        'Tôi rằng: cháu hiểu làm sao',
        'Những câu thơ tự thuở nào, mẹ ơi!',
        'Mẹ nhìn, chẳng trả lời tôi,',
        'Hai tay ôm cháu, mẹ ngồi vẫn ru:',
        '“Mai sau dù có bao giờ',
        'Đốt lò hương ấy, so tơ phím này…”',
      ],
      [
        'Con tôi đôi má tròn đầy',
        'Lại ngon giấc ngủ thơ ngây chiều chiều.',
        'Bâng khuâng mẹ nói một điều:',
        '– Nghĩ mà thương phận cô Kiều ngày xưa…',
      ],
    ],
  },
  {
    id: 'nui-doi',
    index: 1,
    romanNumeral: 'II',
    editionCode: 'N° 02',
    title: 'Núi Đôi',
    subtitleLabel: 'Xuân Dục · 1955',
    year: '1955',
    genre: 'Thơ bảy chữ',
    isExcerpt: false,
    motif: 'twin-peaks',
    editorialNote:
      'Bài thơ tiêu biểu gắn liền với tên tuổi Vũ Cao, khắc họa mối tình thủy chung giữa anh bộ đội và cô du kích làng Xuân Dục bên hai ngọn núi Đôi Sóc Sơn.',
    stanzas: [
      [
        'Bảy năm về trước, em mười bảy',
        'Anh mới đôi mươi, trẻ nhất làng',
        'Xuân Dục, Đoài Đông hai cánh lúa',
        'Bữa thì em tới, bữa anh sang.',
      ],
      [
        'Lối ta đi giữa hai sườn núi',
        'Đôi ngọn nên làng gọi núi Đôi',
        'Em vẫn đùa anh: sao khéo thế',
        'Núi chồng, núi vợ đứng song đôi!',
      ],
      [
        'Bỗng cuối mùa chiêm quân giặc tới',
        'Ngõ chùa cháy đỏ những thân cau',
        'Mới ngỏ lời thôi, đành lỗi hẹn',
        'Đâu ngờ từ đó bặt tin nhau.',
      ],
      [
        'Anh vào bộ đội, lên Đông Bắc',
        'Chiến đấu quên mình năm lại năm',
        'Mấy bận dân công về lại hỏi:',
        'Ai người Xuân Dục, núi Đôi chăng?',
      ],
      [
        'Anh nghĩ, quê ta giặc chiếm rồi',
        'Trăm nghìn căm uất bao giờ nguôi',
        'Mỗi tin súng nổ vành đai địch',
        'Sương trắng người đi lại nhớ người.',
      ],
      [
        'Đồng đội có nhau thường nhắc nhở',
        'Trung du làng nước vẫn chờ trông',
        'Núi Đôi bốt dựng kề ba xóm',
        'Em vẫn đi về những bến sông?',
      ],
      [
        'Náo nức bao nhiêu ngày trở lại',
        'Lệnh trên ngừng bắn, anh về xuôi',
        'Hành quân qua tắt đường sang huyện',
        'Anh ghé thăm nhà, thăm núi Đôi.',
      ],
      [
        'Mới tới đầu ao, tin sét đánh',
        'Giặc giết em rồi, dưới gốc thông',
        'Giữa đêm bộ đội vây đồn Thửa',
        'Em sống trung thành, chết thuỷ chung!',
      ],
      [
        'Anh ngước nhìn lên hai dốc núi',
        'Hàng thông bờ cỏ con đường quen',
        'Nắng lụi bỗng dưng mờ bóng khói',
        'Núi vẫn đôi mà anh mất em!',
      ],
      [
        'Dân chợ Phù Linh ai cũng bảo:',
        'Em còn trẻ lắm, nhất làng trong;',
        'Mấy năm cô ấy làm du kích',
        'Không hiểu vì sao chẳng lấy chồng?',
      ],
      [
        'Từ núi qua thôn, đường nghẽn lối',
        'Xuân Dục, Đoài Đông cỏ ngút đầy',
        'Sân biến thành ao, nhà đổ chái',
        'Ngổn ngang bờ bụi cánh dơi bay.',
      ],
      [
        'Cha mẹ dìu nhau về nhận đất',
        'Tóc bạc thương từ mỗi gốc cau',
        'Nứa gianh nửa mái lều che tạm',
        'Sương nắng khuây dần chuyện xót đau.',
      ],
      [
        'Anh nghe có tiếng người qua chợ:',
        'Ta gắng: mùa sau lúa sẽ nhiều',
        'Ruộng thấm mồ hôi từng nhát cuốc',
        'Làng ta rồi đẹp biết bao nhiêu!',
      ],
      [
        'Nhưng núi còn kia, anh vẫn nhớ',
        'Oán thù còn đó, anh còn đây',
        'Ở đâu cô gái làng Xuân Dục',
        'Đã chết vì dân giữa đất này!',
      ],
      [
        'Ai viết tên em thành liệt sĩ',
        'Bên những hàng bia trắng giữa đồng',
        'Nhớ nhau anh gọi em: đồng chí',
        'Một tấm lòng trong vạn tấm lòng.',
      ],
      [
        'Anh đi bộ đội sao trên mũ',
        'Mãi mãi là sao sáng dẫn đường',
        'Em sẽ là hoa trên đỉnh núi',
        'Bốn mùa thơm mãi cánh hoa chung!',
      ],
    ],
  },
  {
    id: 'buoi-som',
    index: 2,
    romanNumeral: 'III',
    editionCode: 'N° 03',
    title: 'Buổi sớm',
    subtitleLabel: 'Thơ tự do · Ký sự sông bến',
    year: '1965',
    genre: 'Thơ tự do',
    isExcerpt: false,
    motif: 'kapok-river',
    editorialNote:
      'Bức tranh bình minh nơi bến sông bình yên sau khói lửa, kết tinh vẻ đẹp lao động và sức sống bền bỉ của quê hương.',
    stanzas: [
      [
        'Có lẽ từ trăm năm',
        'Cây gạo vẫn đứng đó đón mùa xuân về nối tiếp mùa xuân',
        'Một tổ chim vẫn ở chỗ kia, bên cành tay trái.',
        'Một bốt giặc còn dấu gạch rêu',
        'Một hố bom trùm cỏ dại',
        'Cây vẫn đứng nguyên',
        'Tay toả rộng bốn bề non nước',
        'Như bắp tay người lính canh giữ ven sông kiên trì, gân guốc.',
      ],
      [
        'Thuyền vừa tới nơi.',
        'Vẫn dáng thuyền quen ấy.',
        'Chở xi-măng, cát trắng.',
        'Về dựng bến.',
        'Cho tàu ngược tàu xuôi.',
        'Đậu cả đôi bờ.',
        'Cho ánh lửa chân đê không còn thức đợi.',
        'Những đêm mù mưa.',
        'Cho ngày chợ thêm vui.',
        'Tiếng gà lợn sang ngang.',
        'Tiếng điếu cày khoang lái.',
      ],
      [
        'Gỗ từ miền tây.',
        'Hành quân rong ruổi.',
        'Thẳng hàng theo sông.',
        'Về những nơi rất xa.',
        'Có những bến đá nghiêng những làng bãi nối.',
        'Những đồng chiêm đang đợi chờ.',
        'Bắc cầu xây xóm mới.',
        'Gỗ mang trầm hương thượng nguồn.',
        'Ngạt ngào sông núi.',
      ],
      [
        'Rặng núi lục và lam.',
        'Không còn thăm thẳm nữa.',
        'Muông thú gọi nhau.',
        'Không còn hoang dại nữa.',
        'Từ bờ bên kia.',
        'Tiếng máy giật khoan trong nhịp chày.',
        'Không ồn ào mà âm vang nghiêm nghị.',
        'Như lời ru cỏ cây.',
      ],
      [
        'Một cặp thanh niên.',
        'Vẻ người bến Yên, chợ Gió',
        'Đi lên công trường.',
        'Súng quàng ngực nở -',
        'Gắng xong đoạn đường này.',
        'Xe ta vào tuyến lửa.',
      ],
      [
        'Buổi sớm nay trong trẻo.',
        'Giống trời ta dưới xuôi.',
        'Họ nhìn, đầu rất thẳng.',
      ],
    ],
  },
  {
    id: 'chuyen-dan-gian',
    index: 3,
    romanNumeral: 'IV',
    editionCode: 'N° 04',
    title: 'Chuyện dân gian',
    subtitleLabel: 'Lục bát · Gặp gỡ ngày mưa',
    year: '1962',
    genre: 'Lục bát',
    isExcerpt: false,
    motif: 'rain-eaves',
    editorialNote:
      'Những vần lục bát mộc mạc, dịu dàng kể lại cuộc hội ngộ tình cờ dưới mái hiên tránh cơn mưa rào giữa trưa.',
    stanzas: [
      [
        'Giữa trưa trời đổ mưa rào',
        'Không quen cũng gặp cùng vào trú mưa',
        'Bập bùng gió đập phên thưa',
        'Mái nghiêng lại dột không chừa áo em',
      ],
      [
        'Nhẹ nhàng tôi nép sang bên',
        'Nhường nơi khuất gió cuối thềm cho nhau',
        'Em cười: mưa vậy mà lâu',
        'Anh xem: lại một chuyến tàu nữa qua!',
      ],
      [
        'Nhưng rồi mưa tản đi xa',
        'Và mưa bỗng tạnh, nắng nhoà bóng cây',
        'Tôi chìa tay để bắt tay',
        'Hỏi thăm nơi ở mai này lại chơi.',
      ],
    ],
  },
  {
    id: 'deo-truc',
    index: 4,
    romanNumeral: 'V',
    editionCode: 'N° 05',
    title: 'Đèo Trúc',
    subtitleLabel: 'Tập Đèo Trúc · 1973',
    year: '1973',
    genre: 'Thơ tự do',
    isExcerpt: true,
    motif: 'bamboo-pass',
    editorialNote:
      'Trích đoạn tiêu biểu mở đầu bài thơ chủ đề trong tập thơ cùng tên xuất bản năm 1973, mang âm hưởng hào sảng của bước chân hành quân vượt dãy Yên Tử.',
    stanzas: [
      [
        'Đi ta đi',
        'Ta đứng ngang trời',
        'Mây dưới chân ta, ta vượt mây rồi',
      ],
      [
        'Núi đã sống với đồi nương làm bạn',
        'Không thấy nữa những vòm tre xóm bản',
        'Chỉ còn ta và gió với mây bay...',
      ],
    ],
  },
  {
    id: 'ngang-doc-nui',
    index: 5,
    romanNumeral: 'VI',
    editionCode: 'N° 06',
    title: 'Ngang dốc núi',
    subtitleLabel: 'Thơ bốn chữ · Tình quân dân',
    year: '1957',
    genre: 'Thơ bốn chữ',
    isExcerpt: false,
    motif: 'purple-slope',
    editorialNote:
      'Nhịp thơ bốn chữ trong trẻo, ghi lại khoảnh khắc người lính dừng chân nơi bản rừng, nâng chén rượu màu hoa cà tím cùng ánh mắt người em gái.',
    stanzas: [
      [
        'Tôi đi bữa ấy',
        'Suốt nửa ngày đường',
        'Chiều hôm mới thấy',
        'Nhà dân giữa rừng',
      ],
      [
        'Chào cô con gái',
        'Cô rót liền tay',
        'Đưa tôi sóng sánh',
        'Một lon rượu đầy',
      ],
      [
        'Cô nhìn đăm đăm',
        '– Uống đi, bộ đội!',
        'Uống mừng đầu xuân',
        'Đường xa đỡ mỏi',
      ],
      [
        'Tôi trông màu rượu',
        'Màu tím hoa cà',
        'Lại nhìn đôi mắt',
        'Sáng tròn như hoa',
      ],
      [
        'Uống vừa một ngụm',
        'Tôi chào xin đi',
        'Vội không kịp hỏi',
        'Cô tên là gì',
      ],
      [
        'Lên ngang dốc núi',
        'Chợt thấy mình say',
        'Người ơi hoa tím',
        'Đầy rừng hoa bay.',
      ],
    ],
  },
  {
    id: 'nguoi-gac-cau',
    index: 6,
    romanNumeral: 'VII',
    editionCode: 'N° 07',
    title: 'Người gác cầu',
    subtitleLabel: 'Thơ tự do · Đêm Trường Sơn',
    year: '1969',
    genre: 'Thơ tự do',
    isExcerpt: false,
    motif: 'night-bridge',
    editorialNote:
      'Hình tượng người chiến sĩ lặng lẽ canh giữ nhịp cầu đêm thâu, soi bóng những đoàn xe ra trận hướng về miền Nam ruột thịt.',
    stanzas: [
      [
        'Đêm đêm người gác cầu đón những chuyến xe đi',
        'Xe kéo pháo rầm rầm trên ván gỗ',
        'Người gác cầu đứng lặng im. Sóng vỗ.',
        'Xe đã qua. Sóng nước lại thầm thì.',
      ],
      [
        'Những đồng chí lái xe trên đường Tổ quốc',
        'Vượt không gian và vượt cả thời gian',
        'Một cột số qua, nhìn lên phía trước',
        'Thấy gần thêm trời biển ấy: miền Nam.',
      ],
      [
        'Xe đi, xe đi về dãy Trường Sơn',
        'Như vạn hùng binh xốc vào trận đánh',
        'Những vòm lá ngụy trang đang trập trùng vỗ cánh',
        'Qua những con sông; qua những tuyến đường…',
      ],
    ],
  },
  {
    id: 'tho-cua-bac',
    index: 7,
    romanNumeral: 'VIII',
    editionCode: 'N° 08',
    title: 'Thơ của Bác',
    subtitleLabel: 'Hồi ức Liễu Châu · Tập thơ',
    year: '1960',
    genre: 'Thơ tự do',
    isExcerpt: true,
    motif: 'liuzhou-train',
    editorialNote:
      'Trích đoạn tiêu biểu ghi lại niềm xúc động của nhà thơ trên chuyến tàu qua đất Liễu Châu khi hồi tưởng về những vần thơ Nhật ký trong tù của Chủ tịch Hồ Chí Minh.',
    stanzas: [
      [
        'Con tàu lượn quanh, nhấp nhô núi bãi',
        'Xao xác hàng dương chiều mưa đổ mau',
        'Anh bạn Trung Hoa bên tôi bỗng nói:',
        '– Ta đã đi vào giữa đất Liễu Châu!',
      ],
      [
        'Tôi vẫn ngồi im nhìn qua khung cửa',
        'Anh bạn xích gần ghé sát vai tôi:',
        '– Có phải trời mưa làm anh tư lự',
        'Hay nhớ dòng sông quê hương xa xôi?',
      ],
      [
        '– Không, tôi đang nghĩ chuyến tàu lịch sử',
        'Trên chuyến tàu qua giữa đất Liễu Châu!',
        'Như có chuyện hẹn hò từ núi thẳm sông sâu:',
        'Mười mấy huyện ròng khắp đất Quảng Tây',
        'Một buổi Liễu Châu dừng chân tạm nghỉ,',
        'Người ghi nhật ký mấy câu thơ này...',
      ],
    ],
  },
  {
    id: 'tieng-chuong',
    index: 8,
    romanNumeral: 'IX',
    editionCode: 'N° 09',
    title: 'Tiếng chuông',
    subtitleLabel: 'Tâm tình · Hương hoa cổ tự',
    year: '1986',
    genre: 'Thơ tự do',
    isExcerpt: false,
    motif: 'temple-bell',
    editorialNote:
      'Bài thơ cuối mang âm hưởng tĩnh tại, hòa quyện tiếng chuông chùa buổi hoàng hôn cùng hương ngâu, hương mộc, ngọc lan trong ký ức tuổi thơ.',
    stanzas: [
      [
        'Tôi thích nghe tiếng chuông chùa',
        'Sa vào hoang vắng',
        'Khi mặt trời đang lặn',
        'Ngân trong tiếng chuông.',
      ],
      [
        'Có hương của ngâu và mộc',
        'Ngọc lan hoàng lan…',
        'Cây hải đường trầm ngâm',
        'Cánh con chim cuối cùng lách vào giậu ruối.',
      ],
      [
        'Tiếng chuông ấy đã thấm vào tôi từ ngày nhỏ tuổi',
        'Như đã thấm hương mộc hương lan hương hồng hương ổi.',
      ],
    ],
  },
];
