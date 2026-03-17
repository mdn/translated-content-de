---
title: "Zeichencodes: \\n, \\u{...}"
slug: Web/JavaScript/Reference/Regular_expressions/Character_escape
l10n:
  sourceCommit: a7acf4c7a38f1df8f5d0dee1f17672968ac979d5
---

Ein **Zeichencode** repräsentiert ein Zeichen, das möglicherweise nicht bequem in seiner literalen Form dargestellt werden kann.

## Syntax

<!-- Hinweis: Die {} müssen zweimal escaped werden, einmal für Yari -->

```regex
\f, \n, \r, \t, \v
\cA, \cB, …, \cz
\0
\^, \$, \\, \., \*, \+, \?, \(, \), \[, \], \\{, \\}, \|, \/

\xHH
\uHHHH
\u{H…H}
```

> [!NOTE]
> `,` ist nicht Teil der Syntax.

### Parameter

- `H…H`
  - : Eine hexadezimale Zahl, die den Unicode-Codepunkt des Zeichens darstellt. Die `\xHH`-Form muss zwei hexadezimale Ziffern haben; die `\uHHHH`-Form muss vier haben; die `\u{H…H}`-Form kann 1 bis 6 hexadezimale Ziffern haben.

## Beschreibung

Die folgenden Zeichencodes werden in regulären Ausdrücken erkannt:

- `\f`, `\n`, `\r`, `\t`, `\v`
  - : Genauso wie in [Zeichenfolgenliteralen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences), außer `\b`, das in Regexen eine [Wortgrenze](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion) darstellt, es sei denn, es befindet sich in einer [Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class).
- `\c` gefolgt von einem Buchstaben von `A` bis `Z` oder `a` bis `z`
  - : Repräsentiert das Steuerzeichen mit einem Wert, der gleich dem Buchstabenwert modulo 32 ist. Beispielsweise repräsentiert `\cJ` einen Zeilenumbruch (`\n`), da der Codepunkt von `J` 74 ist und 74 modulo 32 gleich 10 ist, was dem Codepunkt des Zeilenumbruchs entspricht. Da sich ein Großbuchstabe und seine Kleinschreibung um 32 unterscheiden, sind `\cJ` und `\cj` äquivalent. Steuerzeichen von 1 bis 26 können auf diese Weise dargestellt werden.
- `\0`
  - : Repräsentiert das U+0000 NUL-Zeichen. Darf nicht von einer Ziffer gefolgt werden (was es zu einer [veralteten oktalen Escape](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) Sequenz macht).
- `\^`, `\$`, `\\`, `\.` `\*`, `\+`, `\?`, `\(`, `\)`, `\[`, `\]`, `\\{`, `\\}`, `\|`, `\/`
  - : Repräsentiert das Zeichen selbst. Beispielsweise repräsentiert `\\` einen Rückwärtsstrich, und `\(` stellt eine linke runde Klammer dar. Dies sind [Syntaxzeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) in Regexen (`/` ist der Begrenzer eines Regex-Literals), daher erfordern sie eine Escape-Sequenz, es sei denn, sie befinden sich in einer [Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class).
- `\xHH`
  - : Repräsentiert das Zeichen mit dem angegebenen hexadezimalen Unicode-Codepunkt. Die hexadezimale Zahl muss genau zwei Ziffern lang sein.
- `\uHHHH`
  - : Repräsentiert das Zeichen mit dem angegebenen hexadezimalen Unicode-Codepunkt. Die hexadezimale Zahl muss genau vier Ziffern lang sein. Zwei solche Escape-Sequenzen können verwendet werden, um ein Surrogatpaar im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) darzustellen. (Im Unicode-unbewussten Modus sind sie immer zwei separate Zeichen.)
- `\u{H…H}`
  - : (Nur im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode)) Repräsentiert das Zeichen mit dem angegebenen hexadezimalen Unicode-Codepunkt. Die hexadezimale Zahl kann zwischen 1 und 6 Ziffern lang sein.

Im [Unicode-unbewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden Escape-Sequenzen, die nicht zu den oben genannten gehören, zu _Identitäts-Escape-Sequenzen_: Sie repräsentieren das Zeichen, das dem Rückwärtsstrich folgt. Zum Beispiel, `\a` repräsentiert das Zeichen `a`. Dieses Verhalten schränkt die Möglichkeit ein, neue Escape-Sequenzen einzuführen, ohne Kompatibilitätsprobleme zu verursachen, und ist daher im Unicode-bewussten Modus verboten.

Im Unicode-unbewussten Modus können `]`, `{` und `}` [literally](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) erscheinen, wenn es nicht möglich ist, sie als Ende einer Zeichenklasse oder Quantifizierungsbegrenzung zu parsen. Dies ist eine [veraltete Syntax für Web-Kompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), und Sie sollten sich nicht darauf verlassen.

Im Unicode-unbewussten Modus werden Escape-Sequenzen innerhalb von [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) der Form `\cX`, wobei `X` eine Zahl oder `_` ist, auf die gleiche Weise dekodiert wie die mit {{Glossary("ASCII", "ASCII")}}-Buchstaben: `\c0` ist dasselbe wie `\cP`, wenn man modulo 32 annimmt. Darüber hinaus wird, wenn die Form `\cX` irgendwo auftritt, wo `X` nicht eines der erkannten Zeichen ist, der Rückwärtsstrich als literales Zeichen behandelt. Diese Syntaxen sind ebenfalls veraltet.

```js
/[\c0]/.test("\x10"); // true
/[\c_]/.test("\x1f"); // true
/[\c*]/.test("\\"); // true
/\c/.test("\\c"); // true
/\c0/.test("\\c0"); // true (the \c0 syntax is only supported in character classes)
```

## Beispiele

### Verwendung von Zeichencodes

Zeichencodes sind nützlich, wenn Sie ein Zeichen ansprechen möchten, das nicht leicht in seiner literalen Form dargestellt werden kann. Beispielsweise können Sie in einem Regex-Literal keinen Zeilenumbruch direkt verwenden, deshalb müssen Sie einen Zeichencode verwenden:

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
- [Zeichenklassen Escape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Literales Zeichen: `a`, `b`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
- [Unicode-Zeichenklassen-Escape: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Rückverweis: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [Wortgrenzen-Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
