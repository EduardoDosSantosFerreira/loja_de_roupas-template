# 👕 Template Loja de Roupas - Moda & Estilo

![Versão](https://img.shields.io/badge/versão-1.0.0-blue)
![Licença](https://img.shields.io/badge/licença-MIT-green)
![Responsivo](https://img.shields.io/badge/responsivo-sim-brightgreen)
![WhatsApp](https://img.shields.io/badge/WhatsApp-Integrado-25D366)
![Categorias](https://img.shields.io/badge/categorias-6-orange)

## 📋 Sobre o Projeto

Template profissional desenvolvido especialmente para **lojas de roupas, boutiques e e-commerces de moda**. Um site completo que transmite estilo, elegância e confiança, ideal para:

- 👗 Lojas de roupas femininas
- 👔 Lojas de roupas masculinas
- 👶 Moda infantil
- 👟 Lojas de calçados
- 👜 Acessórios e bijuterias
- 🏪 Boutiques e brechós

## ✨ Características

- ✅ Design temático (azul meia-noite + rosa trendy)
- ✅ 6 categorias de produtos
- ✅ Tags de "Novidade" e "Promoção"
- ✅ Formulário de newsletter
- ✅ Seção de lançamentos da semana
- ✅ Guia de tamanhos (via WhatsApp)
- ✅ 100% responsivo (mobile first)
- ✅ Código limpo e organizado
- ✅ Fácil personalização
- ✅ Botão WhatsApp flutuante
- ✅ Animações suaves de entrada

## 🚀 Tecnologias Utilizadas

- **HTML5** semântico
- **CSS3** com variáveis e organização modular
- **JavaScript** puro (sem dependências)
- **Flexbox e Grid** para layouts
- **Font Awesome 6** para ícones de moda
- **Google Fonts (Inter)** - tipografia moderna

## 📁 Estrutura de Arquivos

```
template-loja-roupas/
├── index.html          # Estrutura do site (categorias, contato)
├── style.css           # Todos os estilos (cores temáticas)
└── script.js           # Funcionalidades (WhatsApp, newsletter)
```

## 🎨 Personalização Rápida

### 1️⃣ **Número do WhatsApp** (script.js)
```javascript
const CONFIG = {
    whatsappNumber: "5511999999999", // Troque pelo seu número
    whatsappMessage: "Olá! Quero saber mais sobre as roupas.",
    storeName: "Moda & Estilo"        // Nome da sua loja
};
```

### 2️⃣ **Cores do Tema** (style.css)
```css
body.moda {
    --primary-color: #1a1a2e;      /* Azul meia-noite */
    --secondary-color: #e94560;     /* Rosa trendy */
    --accent-color: #0f3460;        /* Azul royal */
}
```

### 3️⃣ **Categorias de Produtos** (index.html)
```html
<div class="service-card">
    <div class="card-icon"><i class="fas fa-tshirt"></i></div>
    <h3>Moda Feminina</h3>           <!-- Nome da categoria -->
    <p>Descrição da categoria...</p>  <!-- Descrição -->
    <div class="tag-novidade">Novidades</div> <!-- Tag opcional -->
</div>
```

### 4️⃣ **Informações da Loja** (index.html)
```html
<!-- Endereço, telefone, horário -->
<div class="info-item"><i class="fas fa-map-marker-alt"></i> <span>Rua da Moda, 456 - Jardins</span></div>
<div class="info-item"><i class="fas fa-clock"></i> <span>Seg-Sáb: 9h às 20h | Dom: 14h às 18h</span></div>
```

## 📱 Seções do Site

| Seção | Descrição |
|-------|-----------|
| **Navbar** | Logo, menu e botão "Fale conosco" |
| **Hero** | Chamada principal com imagem de moda |
| **Sobre** | História e diferenciais da loja |
| **Categorias** | 6 cards com categorias e botões de consulta |
| **Diferenciais** | Benefícios (parcelamento, trocas, entrega) |
| **Depoimentos** | Avaliações de clientes |
| **Lançamentos** | Destaques da semana |
| **CTA** | Chamada final para WhatsApp |
| **Contato** | Endereço, telefone, horário e mapa |
| **Newsletter** | Captura de e-mails com desconto |
| **Footer** | Redes sociais e direitos autorais |
| **WhatsApp Float** | Botão flutuante de contato |

## 💻 Funcionalidades JavaScript

| Funcionalidade | Descrição |
|----------------|-----------|
| 📱 **Menu mobile** | Menu hambúrguer responsivo |
| 🔄 **Scroll suave** | Navegação suave entre seções |
| 🎯 **Navbar dinâmica** | Muda de cor ao rolar |
| ✨ **Animações** | Cards aparecem suavemente |
| 📞 **WhatsApp integrado** | Links personalizados por categoria |
| 📧 **Newsletter** | Formulário com feedback visual |
| 🔔 **Toast notifications** | Mensagens flutuantes de confirmação |
| 📅 **Ano automático** | Copyright atualizado |

## 🎯 Mensagens Personalizadas por Categoria

Cada categoria tem seu próprio link de WhatsApp:

```html
<!-- Feminino -->
<a href="https://wa.me/5511999999999?text=Olá! Quero saber mais sobre Moda Feminina.">
    Consultar
</a>

<!-- Masculino -->
<a href="https://wa.me/5511999999999?text=Olá! Quero saber mais sobre Moda Masculina.">
    Consultar
</a>
```

## 📸 Imagens Recomendadas

| Local | Tamanho | Descrição | Fonte |
|-------|---------|-----------|-------|
| Hero | 600x400px | Loja ou look de moda | [Pexels Fashion](https://www.pexels.com/pt-br/procura/moda/) |
| Categorias | Ícones | Já inclusos (Font Awesome) | - |
| Perfil clientes | 50x50px | Fotos de clientes (opcional) | - |

## 🏷️ Tags Especiais

### Tag Novidade
```html
<div class="tag-novidade">Novidades</div>
```
Aplica fundo rosa (`--secondary-color`)

### Tag Promoção
```html
<div class="tag-promocao">Promoção</div>
```
Aplica fundo verde (#4caf50)

## ⚡ Como Instalar

1. **Baixe os arquivos** (`index.html`, `style.css`, `script.js`)
2. **Coloque em uma pasta** no seu computador
3. **Edite o número do WhatsApp** no `script.js`
4. **Personalize as categorias** no `index.html`
5. **Ajuste endereço e contato** no `index.html`
6. **Teste localmente** abrindo o `index.html`
7. **Faça upload** para seu servidor/hospedagem

## 📝 Exemplo de Personalização

### Antes:
```html
<h3>Moda Feminina</h3>
<p>Vestidos, blusas, calças e saias</p>
```

### Depois (sua loja):
```html
<h3>Coleção Verão</h3>
<p>Vestidos florais, shorts e bodies</p>
<div class="tag-novidade">Chegou agora</div>
```

## 📊 Otimizações

- ✅ **Mobile First** - Funciona perfeitamente em celulares
- ✅ **Carregamento rápido** - Código leve e otimizado
- ✅ **SEO básico** - Estrutura semântica
- ✅ **Acessibilidade** - ARIA labels nos botões
- ✅ **Cross-browser** - Chrome, Firefox, Safari, Edge

## 🔧 Possíveis Customizações

1. **Adicionar mais categorias** - Copie e cole os cards
2. **Incluir fotos nos produtos** - Adicione `<img>` dentro do card
3. **Mudar fonte** - Altere no `:root` do CSS
4. **Adicionar busca** - Implemente via JavaScript
5. **Criar página de produto** - Expanda o template
6. **Integrar com Instagram** - Adicione feed de fotos

## 💰 Sugestão de Preço de Revenda

| Tipo | Preço Sugerido |
|------|----------------|
| Template simples | R$ 197 |
| + Personalização completa | R$ 397 |
| + Catálogo de produtos | R$ 597 |
| + Integração com redes sociais | R$ 797 |

## 📞 Suporte

- **WhatsApp:** [Clique aqui](https://wa.me/5511999999999)
- **Email:** suporte@modatemplate.com
- **Documentação:** [www.templatemoda.com/docs](https://)

## ✅ Checklist de Personalização

- [ ] Alterar número do WhatsApp no `script.js`
- [ ] Substituir nome da loja no `index.html`
- [ ] Ajustar categorias de produtos
- [ ] Personalizar textos da seção "Sobre"
- [ ] Colocar endereço correto
- [ ] Ajustar horário de funcionamento
- [ ] Trocar placeholder do mapa
- [ ] Adicionar links das redes sociais
- [ ] Testar formulário de newsletter
- [ ] Verificar todos os links do WhatsApp

## 🎨 Cores Psicológicas (Moda)

| Cor | Efeito |
|-----|--------|
| 🔵 Azul meia-noite | Sofisticação, confiança |
| 💗 Rosa trendy | Modernidade, feminilidade |
| 👑 Azul royal | Elegância, luxo |

## 🌟 Diferenciais deste Template

- ✅ **Pronto para vender** - Estrutura comercial
- ✅ **Código comentado** - Fácil de editar
- ✅ **Design conversivo** - Foco em consultas
- ✅ **Atualizável** - JavaScript modular
- ✅ **Escalável** - Adicione quantas categorias quiser
- ✅ **Newsletter integrada** - Capture leads
- ✅ **Tags visuais** - Destaque promoções

## 📱 Responsividade

| Dispositivo | Comportamento |
|-------------|---------------|
| 📱 Celular | Menu hambúrguer, cards em coluna |
| 📱 Tablet | Cards em grid 2x3 |
| 💻 Desktop | Layout completo com animações |

## 🎯 Público-Alvo

- **Lojas de roupas físicas** - Presença digital
- **Boutiques online** - Catálogo virtual
- **Estilistas independentes** - Portfólio
- **Brechós** - Vitrine digital
- **Lojas de calçados** - Exposição de produtos

---

**Desenvolvido com ❤️ para lojas que querem vender mais!** 👗👔👠

---

## 📌 Tags para SEO

```
loja de roupas template, site para boutique, template moda,
site para loja de roupas, ecommerce moda, template vestuário,
site institucional moda, template fashion, loja virtual
```

## 🎁 Bônus: Frases de Efeito

```html
<!-- Para usar no hero ou CTA -->
"Sua moda com estilo e personalidade"
"Vista-se com estilo, vista-se com qualidade"
"Renove seu guarda-roupa com as últimas tendências"
"Estilo que cabe no seu bolso"
```

## 📊 Métricas de Conversão

| Elemento | Objetivo |
|----------|----------|
| Botões WhatsApp | Consultas diretas |
| Newsletter | Captura de leads |
| Diferenciais | Aumentar confiança |
| Depoimentos | Prova social |
| Tags de promoção | Urgência |

---

**✨ Dica Profissional:** Para aumentar as conversões, adicione fotos reais dos produtos com modelos vestindo as roupas. Clientes compram mais quando visualizam o produto em uso!
