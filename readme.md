# Dependencias

@rollup/plugin-commonjs: Esse plugin permite que o Rollup trabalhe com módulos no formato CommonJS, que é um formato de módulo usado por muitas bibliotecas JavaScript. Ele ajuda a importar bibliotecas que não foram projetadas para funcionar diretamente com o Rollup.

@rollup/plugin-node-resolve: Esse plugin permite que o Rollup resolva módulos instalados através do npm. Ele é usado para resolver e importar as dependências do seu projeto, incluindo módulos de terceiros.

@rollup/plugin-typescript: Esse plugin permite que você compile arquivos TypeScript no processo de build do Rollup. Ele transforma arquivos TypeScript em JavaScript que o Rollup pode entender e empacotar.

@types/react: Esse pacote fornece definições de tipos TypeScript para a biblioteca React. Isso ajuda o TypeScript a entender a estrutura dos componentes React e oferecer autocompletar e verificação de tipos mais precisa.

react: A biblioteca React em si. Ela é a base para construção de interfaces de usuário reativas e componentes reutilizáveis.

rollup: O Rollup é um empacotador de módulos que permite criar bundles otimizados para produção a partir do seu código-fonte. Ele é configurado através do arquivo rollup.config.js e é usado para empacotar o código do seu aplicativo.

rollup-plugin-dts: Esse plugin é usado para gerar definições de tipos TypeScript (.d.ts) a partir dos seus arquivos TypeScript. Isso é útil para fornecer informações de tipos para outros projetos que usam o seu código como dependência.

typescript: O TypeScript é uma linguagem que adiciona tipos estáticos opcionais ao JavaScript. Ele é usado para escrever código mais seguro e legível, com a ajuda de autocompletar e verificação de tipos.

Dependências de Produção (dependencies):

tslib: Esse é um pacote de runtime para TypeScript. Ele fornece funções auxiliares usadas pelo TypeScript ao compilar código em ES5, ajudando a manter o código mais limpo e eficiente.

Essas dependências trabalham juntas para possibilitar o desenvolvimento, compilação, empacotamento e tipagem segura do seu projeto React usando o Rollup e TypeScript. Elas formam o conjunto de ferramentas essenciais para construir e manter aplicativos web modernos de forma eficaz.

# ts-config

target: Define a versão do ECMAScript (JavaScript) para a qual o TypeScript deve compilar o código. Aqui, está definido como "es2016", o que significa que o código será compilado para ECMAScript 2016 (ES7).

esModuleInterop: Isso é configurado como true para permitir o uso de imports/exportações padrão (ES6) ao trabalhar com módulos CommonJS (como os encontrados em muitos pacotes npm). Isso ajuda a evitar problemas ao importar bibliotecas.

forceConsistentCasingInFileNames: Isso é configurado como true para garantir que os nomes dos arquivos sejam tratados de forma consistente, independentemente do sistema operacional (caso-insensitivo).

strict: Habilita várias opções de verificação estrita de tipos do TypeScript, melhorando a segurança e a manutenção do código.

skipLibCheck: Configurado como true, isso instrui o TypeScript a não verificar as declarações de tipo em arquivos de bibliotecas externas, o que pode reduzir o tempo de compilação.

jsx: Define como o TypeScript trata o JSX. Aqui, ele está configurado para "react", indicando que o projeto usa a sintaxe JSX do React.

module: Define o sistema de módulos que o TypeScript deve usar ao compilar o código. "ESNext" permite usar as últimas funcionalidades de módulos ES6/ES7.

declaration: Configurado como true, isso instrui o TypeScript a gerar arquivos de declaração (.d.ts) que descrevem a estrutura de tipos do seu código.

declarationDir: Indica o diretório onde os arquivos de declaração serão gerados.

sourceMap: Configurado como true, isso instrui o TypeScript a gerar arquivos de mapeamento de origem (.map), que são usados para depuração.

outDir: Define o diretório onde os arquivos compilados (.js e .d.ts) serão colocados após a compilação.

moduleResolution: Define como o TypeScript resolverá os módulos. "node" indica que ele usará o mecanismo de resolução do Node.js.

allowSyntheticDefaultImports: Isso permite importações sintéticas de módulos que não exportam um valor padrão, permitindo um estilo de importação mais simples.

emitDeclarationOnly: Isso é configurado como true para instruir o TypeScript a emitir apenas arquivos de declaração (.d.ts) durante a compilação.

rootDir: Define o diretório raiz onde o TypeScript procurará pelos arquivos fonte. Isso é útil quando você deseja manter a estrutura de pastas organizada.

Essas configurações são ajustadas para garantir que o TypeScript compilará e produzirá arquivos de declaração apropriados, habilitando verificação de tipos rigorosa e facilitando a integração com outras bibliotecas e ferramentas no ecossistema do React e do Node.js.
