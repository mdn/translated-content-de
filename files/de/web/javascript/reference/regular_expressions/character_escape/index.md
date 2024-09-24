---
title: "Zeichenescape: \\n, \\u{...}"
slug: Web/JavaScript/Reference/Regular_expressions/Character_escape
l10n:
  sourceCommit: 50d5e7cdb972c64a8f02a34a229bbc5ed7305c24
---

{{jsSidebar}}

Ein **Zeichenescape** stellt ein Zeichen dar, das möglicherweise nicht bequem in seiner literalen Form dargestellt werden kann.

## Syntax

<!-- Hinweis: die {} müssen doppelt escaped werden, einmal für Yari -->

```regex
\f, \n, \r, \t, \v
\cA, \cB, …, \cz
\0
\^, \$, \\, \., \*, \+, \?, \(, \), \[, \], \\{, \\}, \|, \/

\xHH
\uHHHH
\u{HHH}
```

> **Note:** `,` gehört nicht zur Syntax.

### Parameter

- `HHH`
  - : Eine hexadezimale Zahl, die den Unicode-Codepunkt des Zeichens darstellt. Die `\xHH`-Form muss zwei hexadezimale Ziffern haben; die `\uHHHH`-Form muss vier haben; die `\u{HHH}`-Form kann 1 bis 6 hexadezimale Ziffern umfassen.

## Beschreibung

Die folgenden Zeichenescapes werden in regulären Ausdrücken erkannt:

- `\f`, `\n`, `\r`, `\t`, `\v`
  - : Gleich wie in [Zeichenkettenliteralen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences), außer `\b`, welches eine [Wortgrenze](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion) in Regexen darstellt, es sei denn, es befindet sich in einer [Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class).
- `\c` gefolgt von einem Buchstaben von `A` bis `Z` oder `a` bis `z`
  - : Stellt das Steuerzeichen mit einem Wert dar, der dem Zeichenwert des Buchstabens modulo 32 entspricht. Zum Beispiel stellt `\cJ` einen Zeilenumbruch (`\n`) dar, weil der Codepunkt von `J` 74 ist und 74 modulo 32 10 ist, was dem Codepunkt des Zeilenumbruchs entspricht. Da sich ein Großbuchstabe und seine Kleinbuchstabenform um 32 unterscheiden, sind `\cJ` und `\cj` gleichwertig. Sie können Steuerzeichen von 1 bis 26 in dieser Form darstellen.
- `\0`
  - : Stellt das U+0000 NUL-Zeichen dar. Kann nicht von einer Ziffer gefolgt werden (was es zu einer [veralteten oktalen Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) macht).
- `\^`, `\$`, `\\`, `\.` `\*`, `\+`, `\?`, `\(`, `\)`, `\[`, `\]`, `\\{`, `\\}`, `\|`, `\/`
  - : Stellt das Zeichen selbst dar. Zum Beispiel stellt `\\` einen Backslash dar, und `\(` stellt eine öffnende runde Klammer dar. Diese sind [Syntaxzeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) in Regexen (`/` ist der Begrenzer eines Regex-Literals), daher erfordern sie Escaping, es sei denn, sie befinden sich in einer [Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class).
- `\xHH`
  - : Stellt das Zeichen mit dem angegebenen hexadezimalen Unicode-Codepunkt dar. Die hexadezimale Zahl muss genau zwei Ziffern lang sein.
- `\uHHHH`
  - : Stellt das Zeichen mit dem angegebenen hexadezimalen Unicode-Codepunkt dar. Die hexadezimale Zahl muss genau vier Ziffern lang sein. Zwei solcher Escape-Sequenzen können verwendet werden, um ein Ersatzpaar im [unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) darzustellen. (Im Unicode-unbewussten Modus sind sie immer zwei separate Zeichen.)
- `\u{HHH}`
  - : (Nur im [unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode)) Stellt das Zeichen mit dem angegebenen hexadezimalen Unicode-Codepunkt dar. Die hexadezimale Zahl kann 1 bis 6 Stellen lang sein.

Im [Unicode-unbewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden Escape-Sequenzen, die nicht eine der oben genannten sind, zu _Identitäts-Escapes_: sie stellen das Zeichen dar, das dem Backslash folgt. Zum Beispiel stellt `\a` das Zeichen `a` dar. Dieses Verhalten schränkt die Möglichkeit ein, neue Escape-Sequenzen einzuführen, ohne Probleme mit der Abwärtskompatibilität zu verursachen, und ist daher im Unicode-bewussten Modus verboten.

Im Unicode-unbewussten Modus können `]`, `{` und `}` [buchstäblich](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) erscheinen, wenn es nicht möglich ist, sie als Ende einer Zeichenklasse oder Quantifiziererbegrenzung zu parsen. Dies ist eine [veraltete Syntax für die Webkompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), und Sie sollten sich nicht darauf verlassen.

Im Unicode-unbewussten Modus werden Escape-Sequenzen innerhalb von [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) der Form `\cX`, wobei `X` eine Zahl oder `_` ist, auf die gleiche Weise decodiert wie diejenigen mit {{Glossary("ASCII")}}-Buchstaben: `\c0` ist dasselbe wie `\cP`, wenn modulo 32 genommen wird. Außerdem, wenn die Form `\cX` irgendwo auftritt, wo `X` nicht eines der erkannten Zeichen ist, dann wird der Backslash als buchstäbliches Zeichen behandelt. Diese Syntaxen sind auch veraltet.

```js
/[\c0]/.test("\x10"); // true
/[\c_]/.test("\x1f"); // true
/[\c*]/.test("\\"); // true
/\c/.test("\\c"); // true
/\c0/.test("\\c0"); // true (die \c0-Syntax wird nur in Zeichenklassen unterstützt)
```

## Beispiele

### Verwendung von Zeichenescapes

Zeichenescapes sind nützlich, wenn Sie ein Zeichen abgleichen möchten, das nicht leicht in seiner literalen Form dargestellt werden kann. Zum Beispiel können Sie keinen Zeilenumbruch buchstäblich in einem Regex-Literal verwenden, daher müssen Sie einen Zeichenescape verwenden:

```js
const pattern = /a\nb/;
const string = `a
b`;
console.log(pattern.test(string)); // true
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Zeichenklasse-Escape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Literales Zeichen: `a`, `b`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
- [Unicode-Zeichenklasse-Escape: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Rückverweis: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [Wortgrenzenbehauptung: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
