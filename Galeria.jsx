import Imagem from './App'
const imagens = [
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vivadecora.com.br%2Frevista%2Fcomo-plantar-lavanda%2F&psig=AOvVaw0gVQDEvLjaR1wh15jlUoVD&ust=1709207111642000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKCrz-j6zYQDFQAAAAAdAAAAABAE',
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F516717757251737818%2F&psig=AOvVaw0xQaLE1tdn2lJMLxc6K44l&ust=1709207160597000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNi93__6zYQDFQAAAAAdAAAAABAE',
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-premium%2Fuma-paisagem-colorida-com-montanhas-e-uma-galaxia-ao-fundo_74267883.htm&psig=AOvVaw06Alv-hvoE4QyHaFNTmWY9&ust=1709207182753000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJivror7zYQDFQAAAAAdAAAAABAE',
    'https://i.pinimg.com/736x/99/c4/ca/99c4ca2a0faeeebe2caaf0f0e2de2c02.jpg',
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstore.epicgames.com%2Fpt-BR%2Fnews%2Fmarvel-s-spider-man-miles-morales-will-have-you-swinging-in-a-winter-wonderland&psig=AOvVaw1tvr_bz0ds7k-eG--FalXU&ust=1709207275332000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCOxLb7zYQDFQAAAAAdAAAAABAE',
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallhere.com%2Fpt%2Fwallpaper%2F817312&psig=AOvVaw0CswDRxH5pCo4xMokYUy2S&ust=1709207355630000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCICh49z7zYQDFQAAAAAdAAAAABAE',
];

function Galeria() {
    return (
        <div className="galeria">
          {imagens.map((url, index) => (
          <Imagem key={index} url={url} />
          ))}
        </div>
    )
}

export default Galeria;