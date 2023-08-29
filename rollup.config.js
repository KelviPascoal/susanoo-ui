
import resolve from '@rollup/plugin-node-resolve'; // Resolve módulos npm
import commonjs from '@rollup/plugin-commonjs'; // Transforma módulos CommonJS para um formato Rollup
import typescript from '@rollup/plugin-typescript'; // Compila TypeScript
import dts from 'rollup-plugin-dts'; // Gera arquivos de declaração (.d.ts)

const pkg = require('./package.json'); // Carrega as informações do package.json

export default [
  {
    input: 'src/index.ts', // Ponto de entrada para o código fonte
    output: [
      {
        file: pkg.main, // Saída do pacote principal (CommonJS)
        format: 'cjs', // Formato do bundle (CommonJS)
        sourceMap: true, // Gera um arquivo de mapeamento de origem
      },
      {
        file: pkg.module, // Saída do pacote de módulo (ESM)
        format: 'esm', // Formato do bundle (ESM)
        sourceMap: true, // Gera um arquivo de mapeamento de origem
      },
    ],
    plugins: [
      resolve(), // Resolve módulos externos
      commonjs(), // Converte módulos CommonJS para formato Rollup
      typescript({ tsconfig: './tsconfig.json' }), // Compila TypeScript com as configurações do tsconfig.json
    ],
  },
  {
    input: 'dist/esm/index.d.ts', // Arquivo de entrada para geração de declarações
    output: [{ file: 'dist/index.d.ts', format: 'esm' }], // Saída das declarações geradas
    plugins: [dts()], // Usa o plugin de geração de declarações
  },
];
