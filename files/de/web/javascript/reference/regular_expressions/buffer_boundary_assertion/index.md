---
title: "Puffergrenzen-Aussage: \\A, \\z, \\Z"
slug: Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion
l10n:
  sourceCommit: f8759faac983abbcd8276fd45ae881bb39efdf7a
---

{{SeeCompatTable}}

Eine **Puffergrenzen-Aussage** prüft, ob die aktuelle Position im String genau am Anfang oder Ende des gesamten Strings ist (`\Z` erlaubt auch ein nachgestelltes Zeilenumbruchszeichen), unabhängig von der Anwesenheit des [`m`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) Flags (welches die Bedeutungen der `^` und `$` [Eingabebegrenzungs-Aussagen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion) ändert). Sie wird nur im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) unterstützt.

## Syntax

```regex
\A
\z
\Z
```

## Beschreibung

`\A` stellt fest, dass die aktuelle Position der Anfang des gesamten Strings ist. `\z` stellt fest, dass die aktuelle Position das Ende des gesamten Strings ist. `\Z` ist wie `\z`, stimmt jedoch auch vor einem [Zeilenbegrenzer](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) oder einer `\r\n` (CRLF) Sequenz am Ende des Strings überein. Alle sind _Aussagen_, so dass sie keine Zeichen verbrauchen.

Genauer gesagt, `\A` stellt fest, dass das Zeichen links von der Grenze des Strings liegt; `\z` stellt fest, dass das Zeichen rechts von der Grenze des Strings liegt; `\Z` ist äquivalent zu `(?=(?:\r?\n?|[\u{2028}\u{2029}]?)\z)`.

Diese Aussagen sind nur sinnvoll, wenn keine Zeichen links oder rechts von ihnen erwartet werden. Zum Beispiel passt `f\Ao` niemals, da es nicht möglich ist, dass `\A` sowohl am Anfang des Strings ist als auch ein Zeichen links von ihm steht.

Die `\A` und `\z` Aussagen sind nur nützlich, wenn das `m` Flag verwendet wird. Ohne `m` verhalten sie sich genau wie `^` und `$`. Wenn das Muster nur den Anfang oder das Ende des gesamten Strings oder einer Zeile (und niemals eine Mischung aus beidem) erfassen muss, wird empfohlen, weiterhin die `^` und `$` Aussagen zu verwenden und das `m` Flag nach Bedarf zu setzen, da sie breiter unterstützt werden als die Puffergrenzen-Aussagen. Wenn Sie beide Arten von Grenzen im gleichen Muster erfassen müssen, können Sie technisch gesehen [Modifikatoren](/de/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) verwenden, um das `m` Flag in verschiedenen Teilen des Musters zu aktivieren oder zu deaktivieren, aber die Verwendung dieser Escape-Sequenzen macht den Code wesentlich lesbarer.

## Beispiele

### Mischung aus Puffer- und Eingabebegrenzungs-Aussagen

Angenommen, Sie haben ein Muster, das entweder am Anfang des gesamten Strings oder am Anfang einer Zeile passen muss. Sie können `m` aktivieren, sodass Sie `^` verwenden können, um sich auf letzteres zu beziehen, und dann `\A` verwenden, um sich auf ersteres zu beziehen (Sie müssen auch `u` aktivieren, damit Sie `\A` verwenden können).

Dieses Beispiel erfasst Zeilenkommentare, die sich auf eigenen Zeilen befinden, was ein [Hashbang](/de/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_comments) am Anfang einer Datei oder ein Zeilenkommentar in jeder Zeile sein kann. Es erfasst keine Zeilenkommentare am Ende einer Zeile, die Code enthält.

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

Ein weiterer Hauptanwendungsfall für Puffergrenzen-Aussagen ist, wenn Sie die Flags nicht ändern können, wie etwa bei der Regulären Ausdrucksuche in Texteditoren. Diese Fälle aktivieren normalerweise `m` standardmäßig, sodass Sie `\A` und `\z` verwenden müssen, um sich "abzumelden".

### Übereinstimmung mit dem Datei-Ende, aber Erlauben eines optionalen nachgestellten Zeilenumbruchs

Dateiformate erlauben oft einen optionalen Zeilenumbruch am Ende der Datei. Wenn Sie ein Datei-Ende-Muster erfassen möchten, das den nachgestellten Zeilenumbruch zulässt, können Sie `\Z` verwenden. Diese Funktion ist sowohl mit als auch ohne `m`-Flag nützlich.

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

- [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Eingabebegrenzungs-Aussage: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Wortgrenzen-Aussage: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [Lookahead-Aussage: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Lookbehind-Aussage: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
