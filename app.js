var cardTemplate = {
  v2: `BEGIN:VCARD
VERSION:2.1
N:แรงไม่มี;แข็ง;;นาย
FN:แข็ง แรงไม่มี
ORG:บริษัท แข็งแรงจริงจริง จำกัด
TITLE:มิสเตอร์ แข็งแรง
TEL;WORK;VOICE:0898765432
TEL;HOME;VOICE:0812345678
ADR;WORK;PREF:;;991 สยามพารากอน;ปทุมวัน;กรุงเทพ;10330;ไทย
EMAIL;WORK;INTERNET:really@strongbody.com
END:VCARD`,
  v3: `BEGIN:VCARD
VERSION:3.0
N:Gump;Forrest;;Mr.;
FN:Forrest Gump
ORG:Bubba Gump Shrimp Co.
TITLE:Shrimp Man
TEL;TYPE=WORK,VOICE:(111) 555-1212
TEL;TYPE=HOME,VOICE:(404) 555-1212
ADR;TYPE=WORK,PREF:;;100 Waters Edge;Baytown;LA;30314;United States of America
ADR;TYPE=HOME:;;42 Plantation St.;Baytown;LA;30314;United States of America
EMAIL;WORK;INTERNET:forrestgump@example.com
END:VCARD`
}

function renderQR (text) {
  $('#qrcode').html('')
  $('#qrcode').qrcode({
    width: 600,
    height: 600,
    text: text
  })
}

function loadTemplate () {
  let cardType = $('#card_type').val()
  let tpl = cardTemplate[cardType]
  $('#out').val(tpl)
  renderQR(tpl)
}

$('#card_type').change(() => loadTemplate())
$('#out').on('input', () => {
  let txt = $('#out').val()
  renderQR(txt)
})

loadTemplate()
