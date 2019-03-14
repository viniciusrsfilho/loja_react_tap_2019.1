const PRODUTOS = [
    {nome: 'Audi A5', preco: 180000.00, imagem: "https://automais.autosport.pt/wp-content/uploads/2017/06/a5-sb-4.jpg"},
    {nome: 'BMW 320i', preco: 160000.00, imagem: "https://precoscarros.com.br/wp-content/uploads/2018/01/Nova-BMW-320i-2019-01.jpg"},
    {nome: 'Mercedes C250', preco: 165000.00, imagem: "http://s2.glbimg.com/mdaauRUpZ1ed2J9-1zXW8QIssKU=/620x400/e.glbimg.com/og/ed/f/original/2016/07/12/mercedes_c250_coupe_sport.jpg"},
    {nome: 'Volkswagem Jetta', preco: 110000.00, imagem: "https://fotos.jornaldocarro.estadao.com.br/uploads/2018/09/20153734/Novo-Jetta-1160x739.jpg"},
    {nome: 'Volkswagem Amarok', preco: 210000.00, imagem: "https://imgcdn0.searchoptics.com/cdno/n/q75/https://blueprint-cdn.searchoptics.com.br/b50826473aab728c32ce5540b008d59e/Amarok%20Compressed/Imagem1_Mob_Amarok.jpg"},
    {nome: 'Mercedes Class X', preco: 260000.00, imagem: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/mercedes-benz-x-class_0.jpg?itok=sv8h2n6U"},
    {nome: 'Toyota Hilux', preco: 190000.00, imagem: "https://abrilquatrorodas.files.wordpress.com/2017/11/toyota-hilux-rocco-1.jpg?quality=70&strip=info&w=1024"},
    {nome: 'Mitsubish L200', preco: 180000.00, imagem: "https://cdn-motorshow-ssl.akamaized.net/wp-content/uploads/sites/2/2018/04/l200-triton-sport-hpe-s-2019-tom-papp-10.jpg"}
];

class BancoDeDados {
    static getProdutos() {
        return PRODUTOS;
    }
}

export default BancoDeDados;