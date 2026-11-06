---
title: "Zeichen-Escape-Sequenz: \\n, \\u{...}"
slug: Web/JavaScript/Reference/Regular_expressions/Character_escape
l10n:
  sourceCommit: 288e644117c29285df2acf37a2ac97f57546a146
---

Eine **Zeichen-Escape-Sequenz** stellt ein Zeichen dar, das sich möglicherweise nicht ohne Weiteres in seiner wörtlichen Form darstellen lässt.

## Syntax

<!-- Note: the {} need to be double-escaped, once for Yari -->

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
  - : Eine Hexadezimalzahl, die den Unicode-Codepunkt des Zeichens angibt. Die Form `\xHH` muss zwei Hexadezimalziffern enthalten, die Form `\uHHHH` vier. Die Form `\u{H…H}` muss eine oder mehrere Hexadezimalziffern enthalten, die einen Wert von höchstens `0x10FFFF` darstellen.

## Beschreibung

Die folgenden Zeichen-Escape-Sequenzen werden in regulären Ausdrücken erkannt:

- `\f`, `\n`, `\r`, `\t`, `\v`
  - : Sie haben dieselbe Bedeutung wie in [String-Literalen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#escape_sequences), mit Ausnahme von `\b`: In regulären Ausdrücken steht es für eine [Wortgrenze](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion), sofern es nicht innerhalb einer [Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) steht.
- `\c` gefolgt von einem Buchstaben von `A` bis `Z` oder `a` bis `z`
  - : Stellt das Steuerzeichen dar, dessen Wert dem Zeichenwert des Buchstabens modulo 32 entspricht. Beispielsweise steht `\cJ` für einen Zeilenumbruch (`\n`), da der Codepunkt von `J` 74 ist und 74 modulo 32 den Wert 10 ergibt – den Codepunkt des Zeilenumbruchs. Da sich die Werte eines Großbuchstabens und seines Kleinbuchstabens um 32 unterscheiden, sind `\cJ` und `\cj` gleichbedeutend. Auf diese Weise lassen sich Steuerzeichen mit den Werten 1 bis 26 darstellen.
- `\0`
  - : Stellt das Zeichen U+0000 NUL dar. Darauf darf keine Ziffer folgen, da daraus sonst eine [veraltete oktale Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) wird.
- `\^`, `\$`, `\\`, `\.`, `\*`, `\+`, `\?`, `\(`, `\)`, `\[`, `\]`, `\\{`, `\\}`, `\|`, `\/`
  - : Stellt jeweils das Zeichen selbst dar. Beispielsweise steht `\\` für einen umgekehrten Schrägstrich und `\(` für eine öffnende Klammer. Dies sind [Syntaxzeichen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) in regulären Ausdrücken (`/` begrenzt ein reguläres Ausdrucksliteral). Deshalb müssen sie mit einer Escape-Sequenz versehen werden, sofern sie nicht innerhalb einer [Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) stehen.
- `\xHH`
  - : Stellt das Zeichen mit dem angegebenen hexadezimalen Unicode-Codepunkt dar. Die Hexadezimalzahl muss genau zwei Ziffern lang sein.
- `\uHHHH`
  - : Stellt das Zeichen mit dem angegebenen hexadezimalen Unicode-Codepunkt dar. Die Hexadezimalzahl muss genau vier Ziffern lang sein. Zwei solcher Escape-Sequenzen können im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ein Surrogatpaar darstellen. (Im nicht Unicode-bewussten Modus sind es immer zwei getrennte Zeichen.)
- `\u{H…H}`
  - : (Nur im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode)) Stellt das Zeichen mit dem angegebenen hexadezimalen Unicode-Codepunkt dar. Die Hexadezimalzahl muss mindestens eine Ziffer enthalten und darf höchstens den Wert `0x10FFFF` haben. Führende Nullen sind zulässig, sodass die Zahl beliebig lang sein kann.

Im [nicht Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden Escape-Sequenzen, die nicht zu den oben genannten gehören, zu _Identity-Escape-Sequenzen_: Sie stellen das Zeichen dar, das auf den umgekehrten Schrägstrich folgt. Beispielsweise steht `\a` für das Zeichen `a`. Dieses Verhalten erschwert die Einführung neuer Escape-Sequenzen, ohne Probleme mit der Abwärtskompatibilität zu verursachen. Daher sind solche Escape-Sequenzen im Unicode-bewussten Modus nicht zulässig.

Im nicht Unicode-bewussten Modus dürfen `]`, `{` und `}` [wörtlich](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) vorkommen, wenn sie sich nicht als Ende einer Zeichenklasse oder als Begrenzungszeichen eines Quantifizierers interpretieren lassen. Dies ist eine [veraltete Syntax zur Wahrung der Webkompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), auf die Sie sich nicht verlassen sollten.

Im nicht Unicode-bewussten Modus werden Escape-Sequenzen innerhalb von [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) der Form `\cX`, bei denen `X` eine Ziffer oder `_` ist, genauso dekodiert wie solche mit {{Glossary("ASCII", "ASCII")}}-Buchstaben: Nach der Berechnung modulo 32 ist `\c0` dasselbe wie `\cP`. Wenn die Form `\cX` an einer beliebigen Stelle vorkommt und `X` keines der erkannten Zeichen ist, wird der umgekehrte Schrägstrich außerdem als wörtliches Zeichen behandelt. Auch diese Syntaxformen sind veraltet.

```js
/[\c0]/.test("\x10"); // true
/[\c_]/.test("\x1f"); // true
/[\c*]/.test("\\"); // true
/\c/.test("\\c"); // true
/\c0/.test("\\c0"); // true (the \c0 syntax is only supported in character classes)
```

## Beispiele

### Zeichen-Escape-Sequenzen verwenden

Zeichen-Escape-Sequenzen sind nützlich, wenn Sie ein Zeichen abgleichen möchten, das sich nicht ohne Weiteres in seiner wörtlichen Form darstellen lässt. Beispielsweise können Sie in einem regulären Ausdrucksliteral keinen wörtlichen Zeilenumbruch verwenden und müssen daher eine Zeichen-Escape-Sequenz verwenden:

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

- [Leitfaden zu Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Zeichenklassen-Escape-Sequenz: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Wörtliches Zeichen: `a`, `b`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
- [Unicode-Zeichenklassen-Escape-Sequenz: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Rückverweis: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [Wortgrenzen-Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
