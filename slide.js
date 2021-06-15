$(document).ready(function(){
    var img1 = 'url("file:///C:/vinicius.fts/IMG/arvores.jpg")';
    var img2 = 'url("file:///C:/vinicius.fts/IMG/ceu.jpg")';
    var img3 = 'url("file:///C:/vinicius.fts/IMG/grama.jpg")';
    var img4 = 'url("file:///C:/vinicius.fts/IMG/mar.jpg")';
    var img5 = 'url("file:///C:/vinicius.fts/IMG/montanha.jpg")';
    var img6 = 'url("file:///C:/vinicius.fts/IMG/ponte.jpg")';

    $('#btnBack').click(function(){
        var img0 = $('body').css("background-image");
        if (img0 == img1) {
            $('body').css("background-image", img6);
            $('#descricaoSlide').html('Ponte');
        }
        if (img0 == img2) {
            $('body').css("background-image", img1)
            $('#descricaoSlide').html('Árvores');
        }
        if (img0 == img3) {
            $('body').css("background-image", img2)
            $('#descricaoSlide').html('Céu');
        }
        if (img0 == img4) {
            $('body').css("background-image", img3)
            $('#descricaoSlide').html('Grama');
        }
        if (img0 == img5) {
            $('body').css("background-image", img4)
            $('#descricaoSlide').html('Mar');
        }
        if (img0 == img6) {
            $('body').css("background-image", img5)
            $('#descricaoSlide').html('Montanha');
        }
    })
    $('#btnSkip').click(function(){
        var img0 = $('body').css("background-image");
        if (img0 == img1) {
            $('body').css("background-image", img2)
            $('#descricaoSlide').html('Céu');
        }
        if (img0 == img2) {
            $('body').css("background-image", img3)
            $('#descricaoSlide').html('Grama');
        }
        if (img0 == img3) {
            $('body').css("background-image", img4)
            $('#descricaoSlide').html('Mar');
        }
        if (img0 == img4) {
            $('body').css("background-image", img5)
            $('#descricaoSlide').html('Montanha');
        }
        if (img0 == img5) {
            $('body').css("background-image", img6)
            $('#descricaoSlide').html('Ponte');
        }
        if (img0 == img6) {
            $('body').css("background-image", img1)
            $('#descricaoSlide').html('Árvores');
        }
    })
})