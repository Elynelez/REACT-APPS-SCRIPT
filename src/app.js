function doGet(){
    let template = HtmlService.createTemplateFromFile("src/views/index")
    let output = template.evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag('viewport', 'width=device-width,user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1')
    .setTitle("Magic Mechas")
    .setFaviconUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png")
    return output
}
function include( Filename ){
    return HtmlService.createHtmlOutputFromFile( Filename ).getContent()
}