/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.freepik.com',
            port: '',
            pathname:'/vetores-gratis/gato-bonito-sentado-ilustracao-em-vetor-icone-dos-desenhos-animados-conceito-de-icone-de-natureza-animal-isolado-de-vetor-premium-estilo-de-desenho-animado-plano_138676-4148.jpg',
          
          },
          {
            protocol: 'https',
            hostname: 'img.freepik.com',
            port: '',
            pathname:'/fotos-gratis/foco-seletivo-de-um-adoravel-gato-preto-e-branco-com-a-lingua-de-fora_181624-35744.jpg',
          },
          {
            protocol: 'https',
            hostname: 'br.freepik.com',
            port: '',
            pathname:'/cdn-icons-png.flaticon.com/128/1864/1864514.png'
          }

        ],
      },
}

module.exports = nextConfig