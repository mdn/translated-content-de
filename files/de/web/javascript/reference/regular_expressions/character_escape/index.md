---
title: "Zeichen-Escape-Sequenz: \\n, \\u{...}"
slug: Web/JavaScript/Reference/Regular_expressions/Character_escape
l10n:
  sourceCommit: e9cb9feda05ce0f1dc08aada71c0a2265baeeaff
---

Eine **Zeichen-Escape-Sequenz** steht für ein Zeichen, das sich möglicherweise nicht ohne Weiteres in seiner wörtlichen Form darstellen lässt.

## Syntax

<!-- Hinweis: Die {} müssen doppelt maskiert werden, einmal für Yari -->

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
> `,` ist kein Teil der Syntax.

### Parameter

- `H…H`
  - : Eine Hexadezimalzahl, die den Unicode-Codepunkt des Zeichens angibt. Die Form `\xHH` muss zwei hexadezimale Ziffern enthalten, die Form `\uHHHH` vier und die Form `\u{H…H}` kann 1 bis 6 hexadezimale Ziffern enthalten.

## Beschreibung

Die folgenden Zeichen-Escape-Sequenzen werden in regulären Ausdrücken erkannt:

- `\f`, `\n`, `\r`, `\t`, `\v`
  - : Entsprechen denen in [String-Literalen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences), mit Ausnahme von `\b`: In regulären Ausdrücken steht es für eine [Wortgrenze](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion), sofern es sich nicht innerhalb einer [Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) befindet.
- `\c` gefolgt von einem Buchstaben von `A` bis `Z` oder `a` bis `z`
  - : Steht für das Steuerzeichen, dessen Wert dem Zeichenwert des Buchstabens modulo 32 entspricht. Beispielsweise steht `\cJ` für einen Zeilenumbruch (`\n`), weil der Codepunkt von `J` 74 ist und 74 modulo 32 den Wert 10 ergibt – den Codepunkt des Zeilenumbruchs. Da sich die Werte eines Großbuchstabens und seiner Kleinbuchstabenform um 32 unterscheiden, sind `\cJ` und `\cj` gleichwertig. Auf diese Weise können Sie Steuerzeichen mit den Werten 1 bis 26 darstellen.
- `\0`
  - : Steht für das Zeichen U+0000 NUL. Darauf darf keine Ziffer folgen, da sonst eine [veraltete oktale Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) entsteht.
- `\^`, `\$`, `\\`, `\.`, `\*`, `\+`, `\?`, `\(`, `\)`, `\[`, `\]`, `\\{`, `\\}`, `\|`, `\/`
  - : Stehen jeweils für das Zeichen selbst. Beispielsweise steht `\\` für einen umgekehrten Schrägstrich und `\(` für eine öffnende Klammer. Diese Zeichen sind [Syntaxzeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) in regulären Ausdrücken (`/` ist das Begrenzungszeichen eines Regex-Literals). Sie müssen daher maskiert werden, sofern sie sich nicht innerhalb einer [Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) befinden.
- `\xHH`
  - : Steht für das Zeichen mit dem angegebenen hexadezimalen Unicode-Codepunkt. Die Hexadezimalzahl muss genau zwei Ziffern enthalten.
- `\uHHHH`
  - : Steht für das Zeichen mit dem angegebenen hexadezimalen Unicode-Codepunkt. Die Hexadezimalzahl muss genau vier Ziffern enthalten. Zwei solcher Escape-Sequenzen können im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) zur Darstellung eines Surrogatpaars verwendet werden. (Im nicht Unicode-bewussten Modus sind es immer zwei separate Zeichen.)
- `\u{H…H}`
  - : (Nur im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode)) Steht für das Zeichen mit dem angegebenen hexadezimalen Unicode-Codepunkt. Die Hexadezimalzahl kann 1 bis 6 Ziffern enthalten.

Im [nicht Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden Escape-Sequenzen, die nicht zu den oben genannten gehören, zu _Identity-Escape-Sequenzen_: Sie stehen für das Zeichen, das auf den umgekehrten Schrägstrich folgt. Beispielsweise steht `\a` für das Zeichen `a`. Dieses Verhalten schränkt die Möglichkeit ein, neue Escape-Sequenzen ohne Probleme mit der Abwärtskompatibilität einzuführen. Deshalb sind solche Escape-Sequenzen im Unicode-bewussten Modus nicht zulässig.

Im nicht Unicode-bewussten Modus dürfen `]`, `{` und `}` [wörtlich](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) vorkommen, wenn sie sich nicht als Ende einer Zeichenklasse oder als Begrenzungszeichen eines Quantifizierers interpretieren lassen. Dies ist eine [veraltete Syntax zur Gewährleistung der Webkompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), auf die Sie sich nicht verlassen sollten.

Im nicht Unicode-bewussten Modus werden Escape-Sequenzen innerhalb von [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) der Form `\cX`, bei denen `X` eine Ziffer oder `_` ist, genauso dekodiert wie solche mit {{Glossary("ASCII", "ASCII")}}-Buchstaben: `\c0` entspricht modulo 32 `\cP`. Wenn die Form `\cX` an einer beliebigen Stelle vorkommt und `X` keines der erkannten Zeichen ist, wird der umgekehrte Schrägstrich als wörtliches Zeichen behandelt. Auch diese Syntaxformen sind veraltet.

```js
/[\c0]/.test("\x10"); // true
/[\c_]/.test("\x1f"); // true
/[\c*]/.test("\\"); // true
/\c/.test("\\c"); // true
/\c0/.test("\\c0"); // true (the \c0 syntax is only supported in character classes)
```

## Beispiele

### Zeichen-Escape-Sequenzen verwenden

Zeichen-Escape-Sequenzen sind nützlich, wenn Sie nach einem Zeichen suchen möchten, das sich nicht leicht in seiner wörtlichen Form darstellen lässt. Beispielsweise können Sie einen Zeilenumbruch in einem Regex-Literal nicht wörtlich verwenden und müssen daher eine Zeichen-Escape-Sequenz verwenden:

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

- Leitfaden zu [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Zeichenklassen-Escape-Sequenz: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Wörtliches Zeichen: `a`, `b`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
- [Unicode-Zeichenklassen-Escape-Sequenz: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Rückverweis: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [Wortgrenzen-Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
