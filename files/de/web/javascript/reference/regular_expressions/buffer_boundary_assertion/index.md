---
title: "Puffergrenzen-Assertion: \\A, \\z, \\Z"
slug: Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion
l10n:
  sourceCommit: 8f53af45fae665627a95ac50e177b15d0228b920
---

Eine **Puffergrenzen-Assertion** prüft, ob sich die aktuelle Position im String streng am Anfang oder Ende des gesamten Strings befindet (`\Z` erlaubt auch ein abschließendes Newline), unabhängig von der Präsenz des [`m`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) Flags (das die Bedeutung der `^` und `$` [Eingabe-Grenzassertionen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion) ändert). Sie wird nur im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) unterstützt.

## Syntax

```regex
\A
\z
\Z
```

## Beschreibung

`\A` stellt fest, dass sich die aktuelle Position am Anfang des gesamten Strings befindet. `\z` stellt fest, dass sich die aktuelle Position am Ende des gesamten Strings befindet. `\Z` ist wie `\z`, stimmt aber auch vor einem [Zeilentrenner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) oder einer `\r\n` (CRLF) Sequenz am Ende des Strings überein. Alle sind _Assertionen_, daher verbrauchen sie keine Zeichen.

Genauer gesagt, `\A` stellt fest, dass das Zeichen links außerhalb der Grenzen des Strings liegt; `\z` stellt fest, dass das Zeichen rechts außerhalb der Grenzen des Strings liegt; `\Z` ist äquivalent zu `(?=(?:\r?\n?|[\u{2028}\u{2029}]?)\z)`.

Diese Assertionen machen nur Sinn, wenn keine Zeichen links oder rechts von ihnen erwartet werden. Zum Beispiel stimmt `f\Ao` niemals überein, weil es nicht möglich ist, dass `\A` sowohl am Anfang des Strings ist als auch ein Zeichen links von sich hat.

Die `\A` und `\z` Assertionen sind nur nützlich, wenn das `m` Flag verwendet wird. Ohne `m` verhalten sie sich genauso wie `^` und `$`. Wenn Ihr Muster nur den Anfang oder das Ende des gesamten Strings oder einer Zeile abgleichen muss (und nie eine Mischung aus beiden), wird empfohlen, weiterhin die `^` und `$` Assertionen zu verwenden und das `m` Flag nach Bedarf zu setzen, da sie weiter verbreitet sind als die Puffergrenzen-Assertionen. Wenn Sie beide Arten von Grenzen im gleichen Muster abgleichen müssen, können Sie technisch gesehen [Modifier](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) verwenden, um das `m` Flag in verschiedenen Teilen des Musters ein- oder auszuschalten, aber die Verwendung dieser Escape-Sequenzen macht den Code viel lesbarer.

## Beispiele

### Puffer- und Eingabe-Grenzassertionen mischen

Angenommen, Sie haben ein Muster, das entweder am Anfang des gesamten Strings oder am Anfang einer Zeile übereinstimmen muss. Sie können `m` einschalten, sodass Sie `^` verwenden können, um sich auf Letzteres zu beziehen, und dann `\A` verwenden, um sich auf Ersteres zu beziehen (Sie müssen auch `u` einschalten, damit Sie `\A` verwenden können).

Dieses Beispiel stimmt mit Zeilenkommentaren auf eigenen Zeilen überein, die ein [Hashbang](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments) am Anfang einer Datei oder ein Zeilenkommentar in einer beliebigen Zeile sein können. Es stimmt nicht mit Zeilenkommentaren am Ende einer Zeile mit Code überein.

```js
function findLineComments(code) {
  // Matches the hashbang syntax: #!... (which is only valid at start of file)
  // and line comment syntax: //... (which is valid everywhere)
  const pattern = /\A#!.*|^\s*\/\/.*/gmu;
  return code.match(pattern);
}

const program = `#!/usr/env/node

function findLineComments(code) {
  // Matches the hashbang syntax: #!... (which is only valid at start of file)
  // and line comment syntax: //... (which is valid everywhere)
  const pattern = /\\A#!.*|^\\/\\/.*/gmu;
  return code.match(pattern);
}
`;

console.log(findLineComments(program));
// [
//   '#!/usr/env/node',
//   '  // Matches the hashbang syntax: #!... (which is only valid at start of file)',
//   '  // and line comment syntax: //... (which is valid everywhere)'
// ]
```

Ein weiterer wichtiger Anwendungsfall für Puffer-Grenzassertionen ist, wenn Sie die Flags nicht ändern können, wie bei der Suche mit regulären Ausdrücken in Texteditoren. Diese Fälle aktivieren in der Regel `m` standardmäßig, sodass Sie `\A` und `\z` verwenden müssen, um "auszusteigen".

### Das Ende der Datei abgleichen, aber ein optionales abschließendes Newline erlauben

Dateiformate erlauben oft ein optionales Newline am Ende der Datei. Wenn Sie ein Muster für das Ende der Datei abgleichen möchten, das das abschließende Newline erlaubt, können Sie `\Z` verwenden. Diese Funktion ist mit oder ohne das `m` Flag nützlich.

```js
const endOfPDF = /%%EOF\Z/u;

console.log(endOfPDF.test("%%EOF")); // true
console.log(endOfPDF.test("%%EOF\n")); // true
console.log(endOfPDF.test("%%EOF\r\n")); // true
console.log(endOfPDF.test("%%EOF\n\n")); // false
console.log(endOfPDF.test("%%EOF\nsomething")); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Assertionen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Eingabe-Grenzassertion: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Wortgrenzen-Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [Lookahead-Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Lookbehind-Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
