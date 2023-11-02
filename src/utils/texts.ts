type Texts = {
	[key: string]: string;
};

const texts: Texts = {
	welcome: `🎉 Seja muito bem-vindo(a) ao nosso incrível robô de figurinhas! 🤖
	
Se esta é a sua primeira vez aqui, temos algumas dicas para você:
	
1️⃣ Para Imagens/Vídeos: Basta enviar diretamente em nossa conversa e nosso bot transformará em uma figurinha para você.
	
2️⃣ Para Links de Imagens: 🌐 Digite "/url" seguido do link da imagem, e deixe o resto conosco. Por exemplo: /url https://i.imgur.com/bWhx7OT.png.`,
	sendError: `😕 Ops! Parece que algo não saiu como esperávamos ao tentar te enviar o sticker.

Tente nos enviar novamente 🍀`,
	process: `🚀 Aguardando envio do sticker`,
	processDone: `😆 Sticker enviado com sucesso!`,
};

export default texts;
