const stemmer = require('stemmer');
const qs = require('quicksort');
const fs = require('fs');

// palabras a ignorar
const ignoreWords = ["a", "the", "and", "of", "in", "be", "also", "as"];
const wordCounts = {};
const sentenceIdx = {};
const wordKeys = [];
// objeto resultado final
const res = {"result": []};
const wordData = {};

// argumentos
const args = process.argv.slice(2);

// validacion de args
if (args.length === 0) {
  console.log('Uso: node app ejemplo.txt');
  process.exit(0);
}

const text = fs.readFileSync(args[0], 'utf8');

// eliminamos los retorno de carro, unimos cada parrafo y luego separamos las oraciones por punto
const sentences = text.replace(/[\n\r]+/g, '').split('.');

sentences.forEach((sentence, i) => {
  if (sentence) {
    const words = sentence.trim().split(/\s+/);
    words.forEach(element => {
      const el = element.replace(/[^A-Za-z]/g, '');
      if (el && !ignoreWords.includes(el.toLowerCase())) {
        const key = stemmer(el);
        if (wordCounts[key]) {
          wordCounts[key]++;
          sentenceIdx[key].push(i);
        } else {
          wordCounts[key] = 1;
          wordKeys.push(key);
          sentenceIdx[key] = [i];
        }
      }
    });
  }
});

// ordenamos el resultado final, lo guardamos en el objeto res y lo mostramos en pantalla
qs.quicksort(wordKeys, 0, wordKeys.length - 1, function (sortedWords) {
  Object.keys(wordCounts)
    .forEach(key => {
      wordData[key] = {"word": key, "total-ocurrences": wordCounts[key], "sentence-indexes": sentenceIdx[key]};
    });

  sortedWords.forEach(k => {
    res.result.push(wordData[k]);
  });

  console.log(JSON.stringify(res, null, 2));
  // NOTA: si realiza una prueba con un archivo muy grande comente la linea de arriba y descomente
  // la de abajo, el JSON.stringify no soporta tanto texto, pero un simple console.log si
  // console.log(res);
});
