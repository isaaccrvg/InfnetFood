# InfnetFood
AT conclusão de período
Instale as dependências:

npm install
Inicie o servidor de desenvolvimento:

npx expo start
Funcionalidades
Login e autenticação
Listagem de categorias de produtos
Adição de produtos ao carrinho
Finalização de pedidos
Notificações locais
Troca entre tema claro e escuro
Prints da Aplicação

# Tela de Login 

Descrição
A tela de login do InfnetFood é projetada para oferecer uma experiência de usuário limpa e funcional, permitindo que os usuários façam login com suas credenciais. Essa tela utiliza componentes estilizados do React Native e segue uma abordagem amigável, com elementos bem espaçados e intuitivos.

Funcionalidades
Campos de E-mail e Senha:
O campo de e-mail aceita apenas entradas no formato de e-mail e desativa a capitalização automática para facilitar o preenchimento.
O campo de senha suporta alternância entre exibição e ocultação de texto, com o uso de um ícone de visibilidade.
Validação:
Mensagem de erro exibida caso o login falhe (ex.: "E-mail ou senha inválidos").
Botão Entrar:
Destacado visualmente com contraste forte para chamar a atenção do usuário.
Link de Cadastro:
Texto informativo para usuários que ainda não possuem uma conta.
UI (Interface do Usuário)
A interface foi projetada para ser intuitiva, moderna e funcional:

Esquema de Cores:
Fundo azul vibrante #007FE0 para transmitir confiança.
Textos e botões em cores contrastantes (#fff e #000) para facilitar a leitura.
Logo:
Logotipo centralizado para reforçar a identidade visual do aplicativo.
Formulário:
Campos arredondados para um design mais amigável.
Espaçamento adequado entre os elementos para evitar sobrecarga visual.
Design Responsivo:
Uso de KeyboardAvoidingView para melhorar a experiência em dispositivos móveis, especialmente com o teclado exibido.
Acessibilidade:
Cores e tamanhos de fonte projetados para uma melhor legibilidade.
Ícones e botões intuitivos para facilitar a navegação.
Pré-requisitos
Dependências necessárias:
react-native-vector-icons: Ícones no campo de senha.
react-native-gesture-handler e react-native-reanimated: Melhor suporte para gestos e animações.
Contexto de autenticação (AuthContext): Para realizar a funcionalidade de login.

Instale as dependências com:
npm install react-native-vector-icons react-native-gesture-handler react-native-reanimated

Como Usar
Clone o repositório e instale as dependências.
Certifique-se de que o AuthContext está configurado no projeto e a função login foi implementada.

Melhorias Futuras
Adicionar suporte para login com redes sociais (Google, Facebook).
Implementar validações mais robustas para os campos de entrada.
Melhorar mensagens de erro com feedback mais descritivo.
Adicionar animações para transições mais fluidas entre telas.

![image](https://github.com/user-attachments/assets/c24715a0-bbc9-480f-aab6-cc7d1d34ced8)


# Tela de Categorias

Descrição
O componente de Categorias foi projetado para exibir uma seleção visual e interativa das categorias de produtos disponíveis no aplicativo InfnetFood. Cada categoria é apresentada com uma imagem e um rótulo, proporcionando uma experiência de navegação agradável e intuitiva.

Funcionalidades
Lista de Categorias:
As categorias são representadas por imagens e rótulos para facilitar a identificação visual.
Categorias disponíveis: Bebidas, Burguer, Japonesa, Pratos e Sobremesas.
Navegação:
Ao clicar em uma categoria, o usuário é redirecionado para a tela de produtos correspondente, com os parâmetros categoryId e categoryTitle passados para a próxima tela.
UI (Interface do Usuário)
A interface do componente é simples e funcional, com um design visualmente atrativo:

Estilo Visual:
Cada categoria é apresentada dentro de um botão com um layout limpo e consistente.
As imagens são exibidas dentro de pequenos círculos (smallCircle) para criar um visual agradável e moderno.
Esquema de Cores:
Uso de cores para destacar as imagens e os rótulos de categoria.
Os textos estão estilizados para serem legíveis e consistentes com o restante da interface do aplicativo.
Responsividade:
Os itens são dispostos em um contêiner flexível que se adapta a diferentes tamanhos de tela.
Navegação Dinâmica:
Os parâmetros da categoria selecionada são passados para a próxima tela por meio da função navigation.navigate.
Pré-requisitos
Imagens: Certifique-se de que os arquivos das imagens para as categorias estão no caminho correto: ../../assets/.
bebidas.jpg
Burguer.png
japonesa.png
prato.jpg
pudim.jpg
Dependências: O componente utiliza o sistema de navegação do React Navigation para redirecionar os usuários. Certifique-se de ter configurado o React Navigation em seu projeto.
Instale as dependências, caso ainda não tenha:

npm install @react-navigation/native react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons
Como Usar
Insira o código do componente na tela que deseja exibir as categorias.
Certifique-se de que as rotas estão configuradas corretamente no seu Stack Navigator, incluindo a rota Produtos.
Use o componente como parte da tela principal ou dentro de um ScrollView para garantir a experiência responsiva.
Melhorias Futuras
Adicionar um indicador de seleção para a categoria clicada.
Implementar animações ao clicar nas categorias.
Ampliar a lista de categorias dinamicamente com base em dados da API.
Adicionar suporte para categorias filtráveis.

![image](https://github.com/user-attachments/assets/ac911177-d0ea-4f71-8e92-63a82a47f0c5)


# Tela de Produtos

O componente ProductsScreen é uma tela desenvolvida em React Native que exibe uma lista de produtos de uma categoria específica. Ele possibilita aos usuários adicionar ou remover itens do carrinho, visualizar a localização de produtos em um mapa e acessar a tela de carrinho com os itens selecionados.

Funcionalidades Principais
Listagem Dinâmica de Produtos

Exibe produtos relacionados à categoria selecionada.
Apresenta informações como nome, preço e quantidade adicionada ao carrinho.
Gerenciamento de Carrinho

Permite adicionar ou remover produtos do carrinho.
Atualiza a quantidade em tempo real conforme o usuário interage.
Mapa de Localização

Mostra a localização do produto selecionado no mapa usando a biblioteca react-native-maps.
Utiliza marcadores para indicar a posição.
Navegação Simplificada

Um botão flutuante leva o usuário diretamente à tela do carrinho, passando os produtos adicionados.
Propriedades Utilizadas
route.params:
categoryId: Identificador da categoria selecionada.
categoryTitle: Título da categoria.
navigation: Gerencia a navegação entre as telas.
Estrutura de Dados dos Produtos
Os produtos são organizados em um objeto que contém categorias como chave e uma lista de produtos como valor. Cada produto possui os seguintes campos:

id: Identificação única.
name: Nome do produto.
price: Preço.
location: Coordenadas (latitude e longitude) para exibição no mapa.
Componentes Principais Utilizados
FlatList:
Utilizado para renderizar a lista de produtos de forma eficiente.
MapView e Marker:
Exibe a localização no mapa com marcadores.
TouchableOpacity:
Ativa interações, como adicionar/remover produtos ou navegar para a tela do carrinho.
Estilização
O estilo do componente é gerenciado por um objeto StyleSheet, incluindo:

Container: Define o layout geral, com espaçamento e cor de fundo.
Title: Personaliza o título da categoria selecionada.
Product Item: Aplica sombras e elevação, criando um visual moderno de "cartão".
Buttons: Estiliza botões de interação (+, - e lixeira).
Map: Configura o mapa para exibir corretamente os produtos selecionados.
Cart Button: Um botão flutuante estilizado que facilita a navegação para o carrinho.
Como Funciona
A tela recebe os parâmetros categoryId e categoryTitle através da navegação.
Filtra os produtos correspondentes à categoria selecionada.
Os usuários podem:
Adicionar itens ao carrinho clicando no botão “+”.
Remover itens clicando no botão “-” ou no ícone de lixeira.
Ao selecionar um produto, sua localização aparece no mapa.
O botão flutuante permite navegar até a tela do carrinho com os itens adicionados.
Dependências
React Native:
Componentes nativos como View, Text, FlatList, Button e TouchableOpacity.
React Native Maps:
Para exibição de localização.
react-native-vector-icons:
Para incorporar ícones nas funcionalidades.

Melhorias Futuras
Substituir os dados estáticos por chamadas de API.
Adicionar suporte para persistência do carrinho com ferramentas como AsyncStorage ou Redux.
Expandir o design para suportar mais funcionalidades, como busca por produtos ou filtros adicionais.

![image](https://github.com/user-attachments/assets/67623886-6e58-4b2b-b9ed-0edd700309de)


# Tela de Carrinho

CartScreen é um componente React Native desenvolvido para exibir os itens de um carrinho de compras. Este componente verifica se há itens no carrinho, exibe a lista de itens adicionados e calcula o valor total da compra. Caso o carrinho esteja vazio, é apresentada uma mensagem informativa com a opção de voltar para a página anterior.

Estrutura do Componente
Propriedades
route: contém os parâmetros passados para a tela, incluindo os itens do carrinho (cartItems).
navigation: permite navegar entre telas no React Navigation.
Lógica do Componente
Carrinho Vazio

Se cartItems não estiver definido ou estiver vazio, o componente exibe uma mensagem informativa: "Seu carrinho está vazio!".
Um botão Continuar Comprando permite ao usuário retornar à tela anterior.
Carrinho com Itens

Exibe os itens do carrinho em uma lista usando FlatList.
Calcula o total do pedido somando o preço de cada item multiplicado pela quantidade.
Navegação

O botão Finalizar Compra leva o usuário à tela de Checkout, passando os itens e o total como parâmetros.
Estilização
Os estilos aplicados são definidos com StyleSheet e seguem uma abordagem moderna e responsiva:

Container Geral
Fundo cinza claro (#f5f5f5).
Padding para espaçamento interno.
Itens do Carrinho
Fundo branco com bordas arredondadas.
Sombra leve para destacar os itens.
Total
Exibição destacada com fonte maior e cor verde.
Botões
Continuar Comprando: azul (#007BFF).
Finalizar Compra: vermelho (#E50000).
Ambos possuem texto branco, bordas arredondadas e alinhamento central.

Funções e Métodos
Cálculo do Total:

const total = cartItems.reduce((sum, item) => {
  const price = parseFloat(item.price) || 0;
  const quantity = parseInt(item.quantity, 10) || 0;
  return sum + price * quantity;
}, 0);

Renderização da Lista:
Cada item do carrinho é exibido com nome, quantidade e preço formatado.

Navegação
Voltar: navigation.goBack().
Checkout: navigation.navigate('Checkout', { cartItems, total }).
Pré-requisitos
React Navigation: utilizado para gerenciar a navegação entre telas.
Parâmetros na Navegação: cartItems deve ser passado na navegação para esta tela.
Como Utilizar
Definir a Navegação:
Certifique-se de que o componente CartScreen está registrado em seu Stack.Navigator.

Passar os Parâmetros:
Ao navegar para CartScreen, inclua os itens do carrinho no formato:
navigation.navigate('Cart', { cartItems: [{ id, name, price, quantity }] });

Estilizar conforme sua Marca:
Ajuste as cores e os estilos no objeto styles para refletir a identidade visual de sua aplicação.

Melhorias Futuras
Adicionar funcionalidade para editar/remover itens no carrinho.
Exibir imagens dos produtos.
Integrar com um backend para salvar o estado do carrinho.

Contato
Para dúvidas ou melhorias, entre em contato pelo GitHub ou contribua com sugestões.



![image](https://github.com/user-attachments/assets/e184f4d4-5569-4d65-bb48-725b273af83c)


# Tela de Checkout

Este componente é a tela de Checkout de um aplicativo em React Native. Ele permite ao usuário revisar os itens adicionados ao carrinho, preencher o endereço de entrega, selecionar o método de pagamento e finalizar a compra.

Funcionalidades
Exibição dos itens no carrinho: (os dados são recebidos via props do componente anterior).
Formulário de finalização:
Campo para preencher o endereço de entrega.
Campo para definir o método de pagamento.
Validação: Exibe um alerta caso os campos obrigatórios não sejam preenchidos.
Confirmação do pedido: Após a validação, o pedido é confirmado e o usuário é redirecionado para a tela de acompanhamento.
Como Funciona
Estrutura de Estados
address: Gerencia o texto inserido no campo de endereço de entrega.
paymentMethod: Gerencia o texto inserido no campo do método de pagamento.
Função Principal
handleConfirm:
Valida se os campos obrigatórios estão preenchidos.
Exibe mensagens de sucesso ou erro.
Redireciona o usuário para a próxima etapa (Acompanhamento).
Navegação
O componente utiliza o React Navigation para transitar entre telas:

Recebe os itens do carrinho via route.params (objeto cartItems).
Redireciona para a tela de acompanhamento ao confirmar o pedido.

Estilização
styles.container: Define o layout principal da tela, incluindo margens e preenchimento.
styles.title: Formata o título da tela.
styles.label: Aplica estilo aos rótulos dos campos do formulário.
styles.input: Personaliza os campos de entrada (endereço e método de pagamento).
styles.confirmButton: Estiliza o botão de confirmação do pedido.
styles.buttonText: Configura o texto dentro do botão.
Dependências
React Native para criação da interface.
React Navigation para gerenciar as transições entre telas.
Melhorias Futuras
Adicionar uma visualização dos itens no carrinho diretamente na tela.
Integrar uma API para processar pedidos.
Oferecer seleção de métodos de pagamento com opções predefinidas (e.g., cartão, boleto).
Implementar máscara de endereço e validação mais detalhada.
Exemplo de Uso
O usuário preenche os campos obrigatórios (endereço e método de pagamento).
Pressiona o botão "Confirmar Pedido".
Caso os campos estejam preenchidos, o pedido é confirmado e ele é redirecionado para a próxima etapa.


![image](https://github.com/user-attachments/assets/ef97ba27-1466-4125-82ca-2137f18d20f7)


# Tela de Configurações

Este arquivo implementa a tela de configurações em um aplicativo React Native. A tela permite que os usuários alternem entre os temas "claro" e "escuro" utilizando um Switch.

Recursos principais
Alternância de tema:

Os usuários podem alternar entre o tema claro e o escuro.
O tema atual é refletido na aparência da tela, incluindo o fundo e os textos.
Componente reutilizável:

A tela usa propriedades recebidas via route.params para alterar o estado do tema no nível global da aplicação.
Código de Exemplo
Parâmetros recebidos
A tela recebe os seguintes parâmetros via route.params:

theme: Representa o tema atual da aplicação, com valores possíveis: 'light' ou 'dark'.
setTheme: Função que atualiza o estado do tema global.
Estrutura principal
A estrutura da tela consiste em:

Um título, que exibe "Configurações".
Uma alternância (Switch), que permite ao usuário ativar ou desativar o tema escuro.

Estilo
Os estilos foram definidos utilizando o StyleSheet.create do React Native para manter a tela organizada e responsiva.

Fundo:
O fundo muda dinamicamente com base no tema.

Claro: #fff
Escuro: #333
Texto:
As cores do título e dos rótulos também mudam dinamicamente:

Claro: #000
Escuro: #fff
Switch:
O Switch utiliza as propriedades thumbColor e trackColor para exibir cores diferentes dependendo do tema atual.

Funcionamento
Alternar Tema:

Quando o Switch é ativado/desativado, a função toggleTheme é chamada.
A função setTheme atualiza o estado global do tema.
Atualização Visual:

A cor do fundo e dos textos muda automaticamente com base no tema selecionado.

Como usar
Adicione este componente à sua navegação no React Navigation.
Passe os parâmetros theme e setTheme via route.params para controlar o estado do tema.
Pré-requisitos
React Native (0.68 ou superior recomendado)
React Navigation configurado para gerenciar rotas.
Próximos passos
Adicionar mais configurações, como:
Idioma
Notificações
Melhorar a acessibilidade para temas claros e escuros.

![image](https://github.com/user-attachments/assets/f42bd74d-ba46-461f-b738-c2e63ecc29d3)



### Passo 4: Subir o Projeto no GitHub

1. Inicialize o repositório Git:
   ```bash
   git init
   git add .
   git commit -m "InfnetFood"
Adicione o repositório remoto e faça o push:

git remote add origin https://github.com/isaaccrvg/InfnetFood.git

git push -u origin master

### Passo 5: Bibliotecas utilizadas

"dependencies": {
    "@react-navigation/bottom-tabs": "^7.2.0",
    "@react-navigation/native": "^7.0.14",
    "@react-navigation/stack": "^7.1.0",
    "expo": "~52.0.19",
    "expo-font": "~13.0.2",
    "expo-notifications": "^0.29.11",
    "expo-status-bar": "~2.0.0",
    "lottie-react-native": "7.1.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-native": "0.76.5",
    "react-native-gesture-handler": "~2.20.2",
    "react-native-maps": "^1.20.1",
    "react-native-picker-select": "^9.3.1",
    "react-native-reanimated": "^3.16.5",
    "react-native-reanimated-carousel": "^3.5.1",
    "react-native-safe-area-context": "^4.12.0",
    "react-native-screens": "~4.1.0",
    "react-native-snap-carousel": "^4.0.0-beta.6",
    "react-native-svg": "^15.10.1",
    "react-native-vector-icons": "^10.2.0",
    "styled-components": "^6.0.0"
  },
