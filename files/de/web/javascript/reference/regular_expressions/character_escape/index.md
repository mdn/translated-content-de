---
title: "Zeichen-Escape: \\n, \\u{...}"
slug: Web/JavaScript/Reference/Regular_expressions/Character_escape
l10n:
  sourceCommit: 50d5e7cdb972c64a8f02a34a229bbc5ed7305c24
---

{{jsSidebar}}

Ein **Zeichen-Escape** repräsentiert ein Zeichen, das möglicherweise nicht bequem in seiner wörtlichen Form dargestellt werden kann.

## Syntax

<!-- Hinweis: die {} müssen doppelt maskiert werden, einmal für Yari -->

```regex
\f, \n, \r, \t, \v
\cA, \cB, …, \cz
\0
\^, \$, \\, \., \*, \+, \?, \(, \), \[, \], \\{, \\}, \|, \/

\xHH
\uHHHH
\u{HHH}
```

> **Note:** `,` ist nicht Teil der Syntax.

### Parameter

- `HHH`
  - : Eine hexadezimale Zahl, die den Unicode-Codepunkt des Zeichens darstellt. Die Form `\xHH` muss zwei hexadezimale Ziffern haben; die Form `\uHHHH` muss vier haben; die Form `\u{HHH}` kann 1 bis 6 hexadezimale Ziffern haben.

## Beschreibung

Die folgenden Zeichen-Escapes werden in regulären Ausdrücken erkannt:

- `\f`, `\n`, `\r`, `\t`, `\v`
  - : Entsprechen denselben wie in [Zeichenfolgenliteralen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences), außer `\b`, das in regulären Ausdrücken eine [Wortgrenze](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion) darstellt, es sei denn, es befindet sich in einer [Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class).
- `\c` gefolgt von einem Buchstaben von `A` bis `Z` oder `a` bis `z`
  - : Repräsentiert das Steuerzeichen mit einem Wert, der dem Zeichenwert des Buchstabens modulo 32 entspricht. Zum Beispiel repräsentiert `\cJ` den Zeilenumbruch (`\n`), da der Codepunkt von `J` 74 ist und 74 modulo 32 ist 10, was der Codepunkt des Zeilenumbruchs ist. Da ein Großbuchstabe und seine Kleinschreibform sich um 32 unterscheiden, sind `\cJ` und `\cj` äquivalent. Sie können Steuerzeichen von 1 bis 26 in dieser Form darstellen.
- `\0`
  - : Repräsentiert das U+0000 NUL-Zeichen. Darf nicht von einer Ziffer gefolgt werden (was es zu einer [veralteten oktalen Escape-](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) Sequenz macht).
- `\^`, `\$`, `\\`, `\.` `\*`, `\+`, `\?`, `\(`, `\)`, `\[`, `\]`, `\\{`, `\\}`, `\|`, `\/`
  - : Repräsentiert das Zeichen selbst. Zum Beispiel stellt `\\` einen Backslash dar, und `\(` stellt eine linke Klammer dar. Diese sind [Syntaxzeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) in regulären Ausdrücken (`/` ist der Begrenzer eines Regex-Literals), daher müssen sie maskiert werden, es sei denn, sie befinden sich in einer [Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class).
- `\xHH`
  - : Repräsentiert das Zeichen mit dem gegebenen hexadezimalen Unicode-Codepunkt. Die hexadezimale Zahl muss genau zwei Ziffern lang sein.
- `\uHHHH`
  - : Repräsentiert das Zeichen mit dem gegebenen hexadezimalen Unicode-Codepunkt. Die hexadezimale Zahl muss genau vier Ziffern lang sein. Zwei solcher Escape-Sequenzen können verwendet werden, um ein Surrogatpaar im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) darzustellen. (Im Unicode-unbewussten Modus sind sie immer zwei separate Zeichen.)
- `\u{HHH}`
  - : (Nur im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode)) Repräsentiert das Zeichen mit dem gegebenen hexadezimalen Unicode-Codepunkt. Die hexadezimale Zahl kann 1 bis 6 Ziffern lang sein.

Im [Unicode-unbewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden Escape-Sequenzen, die nicht zu den oben genannten gehören, zu _Identitäts-Escapes_: Sie repräsentieren das Zeichen, das dem Backslash folgt. Zum Beispiel repräsentiert `\a` das Zeichen `a`. Dieses Verhalten beschränkt die Möglichkeit, neue Escape-Sequenzen einzuführen, ohne Kompatibilitätsprobleme zu verursachen, und ist daher im Unicode-bewussten Modus verboten.

Im Unicode-unbewussten Modus können `]`, `{` und `}` [wörtlich](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) erscheinen, wenn es nicht möglich ist, sie als das Ende einer Zeichenklasse oder Quantifizierer-Begrenzer zu parsen. Dies ist eine [veraltete Syntax für Web-Kompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), und Sie sollten sich nicht darauf verlassen.

Im Unicode-unbewussten Modus werden Escape-Sequenzen innerhalb von [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) der Form `\cX`, wobei `X` eine Zahl oder `_` ist, auf die gleiche Weise decodiert wie solche mit [ASCII](/de/docs/Glossary/ASCII)-Buchstaben: `\c0` ist dasselbe wie `\cP`, wenn man es modulo 32 nimmt. Zusätzlich, wenn die Form `\cX` überall begegnet wird, wo `X` nicht eines der anerkannten Zeichen ist, dann wird der Backslash als wörtliches Zeichen behandelt. Diese Syntaxen sind ebenfalls veraltet.

```js
/[\c0]/.test("\x10"); // true
/[\c_]/.test("\x1f"); // true
/[\c*]/.test("\\"); // true
/\c/.test("\\c"); // true
/\c0/.test("\\c0"); // true (the \c0 syntax is only supported in character classes)
```

## Beispiele

### Verwendung von Zeichen-Escapes

Zeichen-Escapes sind nützlich, wenn Sie ein Zeichen abgleichen möchten, das nicht einfach in seiner wörtlichen Form dargestellt werden kann. Zum Beispiel können Sie einen Zeilenumbruch nicht wörtlich in einem Regex-Literal verwenden, daher müssen Sie ein Zeichen-Escape verwenden:

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
- [Wörtliches Zeichen: `a`, `b`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
- [Unicode-Zeichenklassen-Escape: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Rückverweis: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [Wortgrenzen-Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
