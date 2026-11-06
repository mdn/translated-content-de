---
title: "Puffergrenzen-Assertion: \\A, \\z, \\Z"
slug: Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion
l10n:
  sourceCommit: 288e644117c29285df2acf37a2ac97f57546a146
---

{{SeeCompatTable}}

Eine **Puffergrenzen-Assertion** prüft, ob sich die aktuelle Position in der Zeichenfolge genau am Anfang oder Ende der gesamten Zeichenfolge befindet (`\Z` erlaubt außerdem einen abschließenden Zeilenumbruch). Dabei spielt es keine Rolle, ob das Flag [`m`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) gesetzt ist, das die Bedeutung der [Eingabegrenzen-Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion) `^` und `$` verändert. Puffergrenzen-Assertions werden nur im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) unterstützt.

## Syntax

```regex
\A
\z
\Z
```

## Beschreibung

`\A` stellt sicher, dass die aktuelle Position am Anfang der gesamten Zeichenfolge liegt. `\z` stellt sicher, dass sie am Ende der gesamten Zeichenfolge liegt. `\Z` verhält sich wie `\z`, stimmt aber auch mit der Position vor einem [Zeilentrennzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) oder einer `\r\n`-Sequenz (CRLF) am Ende der Zeichenfolge überein. Alle drei sind _Assertions_ und verbrauchen daher keine Zeichen.

Genauer gesagt stellt `\A` sicher, dass die Position links davon außerhalb der Zeichenfolge liegt; `\z` stellt sicher, dass die Position rechts davon außerhalb der Zeichenfolge liegt; `\Z` entspricht `(?=(?:\r?\n?|[\u{2028}\u{2029}]?)\z)`.

Diese Assertions sind nur sinnvoll, wenn links beziehungsweise rechts von ihnen keine Zeichen erwartet werden. Beispielsweise findet `f\Ao` nie eine Übereinstimmung, da `\A` nicht gleichzeitig am Anfang der Zeichenfolge stehen und links davon ein Zeichen haben kann.

Die Assertions `\A` und `\z` sind nur nützlich, wenn das Flag `m` gesetzt ist. Ohne `m` verhalten sie sich genauso wie `^` und `$`. Wenn Ihr Muster nur mit dem Anfang oder Ende der gesamten Zeichenfolge oder einer Zeile übereinstimmen muss (und nie mit einer Mischung aus beidem), empfiehlt es sich, weiterhin die Assertions `^` und `$` zu verwenden und das Flag `m` nach Bedarf zu setzen. Sie werden breiter unterstützt als Puffergrenzen-Assertions. Wenn Sie beide Arten von Grenzen im selben Muster benötigen, können Sie das Flag `m` zwar mithilfe von [Modifikatoren](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) in verschiedenen Teilen des Musters aktivieren oder deaktivieren; diese Escape-Sequenzen machen den Code jedoch deutlich lesbarer.

## Beispiele

### Puffergrenzen- und Eingabegrenzen-Assertions kombinieren

Angenommen, ein Muster soll entweder am Anfang der gesamten Zeichenfolge oder am Anfang einer Zeile übereinstimmen. Sie können `m` aktivieren, um mit `^` auf den Zeilenanfang zu verweisen, und `\A` für den Anfang der gesamten Zeichenfolge verwenden. Damit Sie `\A` verwenden können, müssen Sie außerdem `u` aktivieren.

Dieses Beispiel findet Zeilenkommentare, die allein in einer Zeile stehen: Das kann ein [Hashbang-Kommentar](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments) am Anfang einer Datei oder ein Zeilenkommentar in einer beliebigen Zeile sein. Zeilenkommentare am Ende einer Zeile, die Code enthält, werden nicht gefunden.

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

Ein weiterer wichtiger Anwendungsfall für Puffergrenzen-Assertions liegt vor, wenn Sie die Flags nicht ändern können, etwa bei der Suche mit regulären Ausdrücken in Texteditoren. Dort ist `m` üblicherweise standardmäßig aktiviert, sodass Sie `\A` und `\z` verwenden müssen, um dieses Verhalten zu umgehen.

### Das Dateiende finden und dabei einen optionalen abschließenden Zeilenumbruch zulassen

Dateiformate erlauben häufig einen optionalen Zeilenumbruch am Ende der Datei. Wenn Sie ein Muster für das Dateiende verwenden möchten, das diesen abschließenden Zeilenumbruch zulässt, können Sie `\Z` verwenden. Das ist sowohl mit als auch ohne das Flag `m` nützlich.

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

- [Leitfaden zu Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Eingabegrenzen-Assertion: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Wortgrenzen-Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [Lookahead-Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Lookbehind-Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
