---
title: "Zeichenklassenflucht: \\d, \\D, \\w, \\W, \\s, \\S"
slug: Web/JavaScript/Reference/Regular_expressions/Character_class_escape
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar}}

Eine **Zeichenklassenflucht** ist eine Escape-Sequenz, die eine Menge von Zeichen repräsentiert.

## Syntax

```regex
\d, \D
\s, \S
\w, \W
```

> **Hinweis:** `,` ist kein Teil der Syntax.

## Beschreibung

Im Gegensatz zu [Zeichenfluchten](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) repräsentieren Zeichenklassenfluchten eine vordefinierte _Menge_ von Zeichen, ähnlich einer [Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class). Die folgenden Zeichenklassen werden unterstützt:

- `\d`
  - : Entspricht jedem Ziffernzeichen. Entspricht `[0-9]`.
- `\w`
  - : Entspricht jedem Wortzeichen, wobei ein Wortzeichen Buchstaben (A–Z, a–z), Zahlen (0–9) und Unterstriche (\_) umfasst. Wenn der reguläre Ausdruck [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist und das [`i`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) Flag gesetzt ist, entspricht es auch anderen Unicode-Zeichen, die durch [Case Folding](https://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt) in eines der obigen Zeichen umgewandelt werden.
- `\s`
  - : Entspricht jedem [Leerzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) oder [Zeilenabschlusszeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators).

Die Großbuchstabenformen `\D`, `\W`, und `\S` erzeugen komplementäre Zeichenklassen zu `\d`, `\w`, und `\s`. Sie entsprechen jedem Zeichen, das nicht in der durch die Kleinbuchstabenform abgedeckten Menge ist.

[Unicode-Zeichenklassenfluchten](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) beginnen mit `\p` und `\P`, aber sie werden nur im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) unterstützt. Im Unicode-unbewussten Modus sind sie [Identitätsfluchten](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) für das `p` bzw. `P` Zeichen.

Zeichenklassenfluchten können in [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) verwendet werden. Sie können jedoch nicht als Grenzen von Zeichenbereichen verwendet werden, was nur als [veraltete Syntax für Web-Kompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) erlaubt ist und auf die Sie sich nicht verlassen sollten.

## Beispiele

### Aufteilen nach Leerzeichen

Das folgende Beispiel teilt einen String in ein Array von Wörtern, wobei alle Arten von Leerzeichentrennern unterstützt werden:

```js
function splitWords(str) {
  return str.split(/\s+/);
}

splitWords(`Look at the stars
Look  how they\tshine for you`);
// ['Look', 'at', 'the', 'stars', 'Look', 'how', 'they', 'shine', 'for', 'you']
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeichenklassen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Zeichenklasse: `[...]`, `[^...]`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Unicode-Zeichenklassenflucht: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Zeichenflucht: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
