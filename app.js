var cardTemplate = {
  v2: `BEGIN:VCARD
VERSION:2.1
N:Gump;Forrest;;Mr.
FN:Forrest Gump
ORG:Bubba Gump Shrimp Co.
TITLE:Shrimp Man
TEL;WORK;VOICE:(111) 555-1212
TEL;HOME;VOICE:(404) 555-1212
ADR;WORK;PREF:;;100 Waters Edge;Baytown;LA;30314;United States of America
ADR;HOME:;;42 Plantation St.;Baytown;LA;30314;United States of America
EMAIL;WORK;INTERNET:forrestgump@example.com
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
