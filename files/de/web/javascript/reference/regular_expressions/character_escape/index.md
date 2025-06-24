---
title: "Zeichen-Escape: \\n, \\u{...}"
slug: Web/JavaScript/Reference/Regular_expressions/Character_escape
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{jsSidebar}}

Ein **Zeichen-Escape** stellt ein Zeichen dar, das möglicherweise nicht bequem in seiner wörtlichen Form dargestellt werden kann.

## Syntax

<!-- Hinweis: die {} müssen doppelt-escaped werden, einmal für Yari -->

```regex
\f, \n, \r, \t, \v
\cA, \cB, …, \cz
\0
\^, \$, \\, \., \*, \+, \?, \(, \), \[, \], \\{, \\}, \|, \/

\xHH
\uHHHH
\u{HHH}
```

> [!NOTE] > `,` ist kein Bestandteil der Syntax.

### Parameter

- `HHH`
  - : Eine hexadezimale Zahl, die den Unicode-Codepunkt des Zeichens darstellt. Die Form `\xHH` muss zwei hexadezimale Ziffern haben; die Form `\uHHHH` muss vier haben; die Form `\u{HHH}` kann 1 bis 6 hexadezimale Ziffern haben.

## Beschreibung

Die folgenden Zeichen-Escapes werden in regulären Ausdrücken erkannt:

- `\f`, `\n`, `\r`, `\t`, `\v`
  - : Genauso wie in [Zeichenkettenliteralen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences), mit Ausnahme von `\b`, das in Regexes eine [Wortgrenze](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion) darstellt, es sei denn, es befindet sich in einer [Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class).
- `\c` gefolgt von einem Buchstaben von `A` bis `Z` oder `a` bis `z`
  - : Repräsentiert das Steuerzeichen mit einem Wert, der dem Buchstabenmodulo 32 entspricht. Zum Beispiel steht `\cJ` für Zeilenumbruch (`\n`), da der Code-Punkt von `J` 74 ist und 74 modulo 32 ist 10, was dem Code-Punkt von Zeilenumbruch entspricht. Da sich ein Großbuchstabe und seine Kleinbuchstabenform um 32 unterscheiden, sind `\cJ` und `\cj` äquivalent. Sie können Steuerzeichen von 1 bis 26 in dieser Form darstellen.
- `\0`
  - : Repräsentiert das U+0000 NUL-Zeichen. Kann nicht von einer Ziffer gefolgt werden (was es zu einem [veralteten Oktal-Escape](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences)-Sequenz macht).
- `\^`, `\$`, `\\`, `\.` `\*`, `\+`, `\?`, `\(`, `\)`, `\[`, `\]`, `\\{`, `\\}`, `\|`, `\/`
  - : Repräsentieren das Zeichen selbst. Zum Beispiel steht `\\` für einen Rückwärtsschrägstrich, und `\(` steht für eine linke Klammer. Diese sind [Syntaxzeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) in Regexes (`/` ist der Delimitator eines Regex-Literals), daher erfordern sie ein Escape, es sei denn, sie sind in einer [Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class).
- `\xHH`
  - : Repräsentiert das Zeichen mit dem angegebenen hexadezimalen Unicode-Codepunkt. Die hexadezimale Zahl muss genau zwei Ziffern lang sein.
- `\uHHHH`
  - : Repräsentiert das Zeichen mit dem angegebenen hexadezimalen Unicode-Codepunkt. Die hexadezimale Zahl muss genau vier Ziffern lang sein. Zwei solcher Escape-Sequenzen können verwendet werden, um ein Surrogatpaar im [Unicode-fähigen Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) darzustellen. (Im Unicode-unfähigen Modus sind sie immer zwei getrennte Zeichen.)
- `\u{HHH}`
  - : (Nur im [Unicode-fähigen Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode)) Repräsentiert das Zeichen mit dem angegebenen hexadezimalen Unicode-Codepunkt. Die hexadezimale Zahl kann 1 bis 6 Stellen lang sein.

Im [Unicode-unfähigen Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden Escape-Sequenzen, die nicht zu den oben genannten gehören, zu _Identitäts-Escapes_: Sie repräsentieren das Zeichen, das dem Rückwärtsschrägstrich folgt. Zum Beispiel repräsentiert `\a` das Zeichen `a`. Dieses Verhalten schränkt die Möglichkeit ein, neue Escape-Sequenzen einzuführen, ohne Kompatibilitätsprobleme rückwärts zu erzeugen, und ist daher im Unicode-fähigen Modus verboten.

Im Unicode-unfähigen Modus können `]`, `{` und `}` [wörtlich](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) erscheinen, wenn es nicht möglich ist, sie als Ende einer Zeichenklasse oder Quantifizierungsbegrenzung zu interpretieren. Dies ist eine [veraltete Syntax für Webkompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), und man sollte sich nicht darauf verlassen.

Im Unicode-unfähigen Modus werden Escape-Sequenzen innerhalb von [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) in der Form `\cX`, wobei `X` eine Zahl oder `_` ist, auf die gleiche Weise dekodiert wie bei {{Glossary("ASCII", "ASCII")}}-Buchstaben: `\c0` ist das gleiche wie `\cP`, wenn man modulo 32 nimmt. Zusätzlich wird, wenn die Form `\cX` überall dort angetroffen wird, wo `X` nicht einer der anerkannten Zeichen ist, der Rückwärtsschrägstrich als wörtliches Zeichen behandelt. Diese Syntaxen sind ebenfalls veraltet.

```js
/[\c0]/.test("\x10"); // true
/[\c_]/.test("\x1f"); // true
/[\c*]/.test("\\"); // true
/\c/.test("\\c"); // true
/\c0/.test("\\c0"); // true (the \c0 syntax is only supported in character classes)
```

## Beispiele

### Verwenden von Zeichen-Escapes

Zeichen-Escapes sind nützlich, wenn Sie ein Zeichen abgleichen möchten, das nicht leicht in seiner wörtlichen Form dargestellt werden kann. Zum Beispiel können Sie einen Zeilenumbruch nicht wörtlich in einem Regex-Literal verwenden, deshalb müssen Sie einen Zeichen-Escape verwenden:

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
- [Wort-Grenze-Aussage: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
