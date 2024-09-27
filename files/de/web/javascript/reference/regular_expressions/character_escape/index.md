---
title: "Zeichen-Escape: \\n, \\u{...}"
slug: Web/JavaScript/Reference/Regular_expressions/Character_escape
l10n:
  sourceCommit: 50d5e7cdb972c64a8f02a34a229bbc5ed7305c24
---

{{jsSidebar}}

Ein **Zeichen-Escape** repräsentiert ein Zeichen, das möglicherweise nicht bequem in seiner literalen Form dargestellt werden kann.

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

> **Note:** `,` ist kein Bestandteil der Syntax.

### Parameter

- `HHH`
  - : Eine hexadezimale Zahl, die den Unicode-Codepunkt des Zeichens darstellt. Die `\xHH`-Form muss zwei hexadezimale Ziffern haben; die `\uHHHH`-Form muss vier haben; die `\u{HHH}`-Form kann 1 bis 6 hexadezimale Ziffern haben.

## Beschreibung

Die folgenden Zeichenersetzungen werden in regulären Ausdrücken erkannt:

- `\f`, `\n`, `\r`, `\t`, `\v`
  - : Dasselbe wie in [Zeichenfolgen-Literalen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences), außer `\b`, das in Regexen eine [Wortgrenze](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion) darstellt, es sei denn, es befindet sich in einer [Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class).
- `\c` gefolgt von einem Buchstaben von `A` bis `Z` oder `a` bis `z`
  - : Repräsentiert das Steuerzeichen mit einem Wert, der dem Buchstabenwert modulo 32 entspricht. Zum Beispiel stellt `\cJ` einen Zeilenumbruch dar (`\n`), da der Codepunkt von `J` 74 ist und 74 modulo 32 gleich 10 ist, was der Codepunkt des Zeilenumbruchs ist. Da ein Großbuchstabe und seine Kleinbuchstabenform sich um 32 unterscheiden, sind `\cJ` und `\cj` äquivalent. Sie können Steuerzeichen von 1 bis 26 in dieser Form darstellen.
- `\0`
  - : Repräsentiert das U+0000 NUL-Zeichen. Es darf nicht von einer Ziffer gefolgt werden (was es zu einer [veralteten oktalen Escape-](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) Sequenz macht).
- `\^`, `\$`, `\\`, `\.` `\*`, `\+`, `\?`, `\(`, `\)`, `\[`, `\]`, `\\{`, `\\}`, `\|`, `\/`
  - : Repräsentiert das Zeichen selbst. Zum Beispiel repräsentiert `\\` einen Backslash und `\(` eine linke Klammer. Diese sind [Syntaxzeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) in Regexen (`/` ist der Begrenzer eines Regex-Literals), daher erfordern sie ein Escape, es sei denn, sie befinden sich in einer [Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class).
- `\xHH`
  - : Repräsentiert das Zeichen mit dem angegebenen hexadezimalen Unicode-Codepunkt. Die hexadezimale Zahl muss genau zwei Ziffern lang sein.
- `\uHHHH`
  - : Repräsentiert das Zeichen mit dem angegebenen hexadezimalen Unicode-Codepunkt. Die hexadezimale Zahl muss genau vier Ziffern lang sein. Zwei solche Escape-Sequenzen können verwendet werden, um ein Surrogatpaar im [Unicode-fähigen Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) zu repräsentieren. (Im Unicode-unfähigen Modus sind sie immer zwei separate Zeichen.)
- `\u{HHH}`
  - : (Nur im [Unicode-fähigen Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode)) Repräsentiert das Zeichen mit dem angegebenen hexadezimalen Unicode-Codepunkt. Die hexadezimale Zahl kann zwischen 1 und 6 Ziffern lang sein.

Im [Unicode-unfähigen Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden Escape-Sequenzen, die nicht zu den oben genannten gehören, zu _Identitäts-Escapes_: sie repräsentieren das Zeichen, das dem Backslash folgt. Zum Beispiel stellt `\a` das Zeichen `a` dar. Dieses Verhalten schränkt die Möglichkeit ein, neue Escape-Sequenzen einzuführen, ohne Rückwärtskompatibilitätsprobleme zu verursachen, und ist daher im Unicode-fähigen Modus verboten.

Im Unicode-unfähigen Modus können `]`, `{` und `}` [buchstäblich](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) erscheinen, wenn es nicht möglich ist, sie als Ende einer Zeichenklasse oder Quantifizierer-Abgrenzer zu parsen. Dies ist eine [veraltete Syntax für die Webkompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) und Sie sollten sich nicht darauf verlassen.

Im Unicode-unfähigen Modus werden Escape-Sequenzen innerhalb von [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) der Form `\cX`, wobei `X` eine Zahl oder `_` ist, genauso dekodiert wie die mit [ASCII](/de/docs/Glossary/ASCII)-Buchstaben: `\c0` ist dasselbe wie `\cP`, wenn modulo 32 genommen. Darüber hinaus, wenn irgendwo die Form `\cX` auftritt, bei der `X` nicht eines der erkannten Zeichen ist, wird der Backslash als literales Zeichen behandelt. Diese Syntaxen sind ebenfalls veraltet.

```js
/[\c0]/.test("\x10"); // true
/[\c_]/.test("\x1f"); // true
/[\c*]/.test("\\"); // true
/\c/.test("\\c"); // true
/\c0/.test("\\c0"); // true (the \c0 syntax is only supported in character classes)
```

## Beispiele

### Verwenden von Zeichenersetzungen

Zeichenersetzungen sind nützlich, wenn Sie ein Zeichen abgleichen möchten, das nicht leicht in seiner literalen Form dargestellt werden kann. Zum Beispiel können Sie einen Zeilenumbruch nicht wörtlich in einem Regex-Literal verwenden, daher müssen Sie eine Zeichen-Escape verwenden:

```js
const pattern = /a\nb/;
const string = `a
b`;
console.log(pattern.test(string)); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Zeichenklassen-Escape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Literalzeichen: `a`, `b`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
- [Unicode-Zeichenklassen-Escape: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Rückverweis: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [Wortgrenzen-Bestätigung: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
