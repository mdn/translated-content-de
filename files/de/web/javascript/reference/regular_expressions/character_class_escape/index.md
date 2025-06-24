---
title: "Zeichenklassen-Escape: \\d, \\D, \\w, \\W, \\s, \\S"
slug: Web/JavaScript/Reference/Regular_expressions/Character_class_escape
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{jsSidebar}}

Ein **Zeichenklassen-Escape** ist eine Escape-Sequenz, die eine Menge von Zeichen darstellt.

## Syntax

```regex
\d, \D
\s, \S
\w, \W
```

> [!NOTE] > `,` gehört nicht zur Syntax.

## Beschreibung

Im Gegensatz zu [Zeichen-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) repräsentieren Zeichenklassen-Escapes eine vordefinierte _Menge_ von Zeichen, ähnlich einer [Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class). Die folgenden Zeichenklassen werden unterstützt:

- `\d`
  - : Passt auf jedes Ziffernzeichen. Entspricht `[0-9]`.
- `\w`
  - : Passt auf jedes Wortzeichen, wobei ein Wortzeichen Buchstaben (A–Z, a–z), Zahlen (0–9) und Unterstrich (\_) umfasst. Wenn der reguläre Ausdruck [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist und das [`i`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) Flag gesetzt ist, werden auch andere Unicode-Zeichen berücksichtigt, die durch [Case Folding](https://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt) auf eines der oben genannten Zeichen kanonisch abgebildet werden.
- `\s`
  - : Passt auf jedes [Leerzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) oder jeden [Zeilentrenner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators).

Die Großbuchstabenformen `\D`, `\W` und `\S` erstellen komplementäre Zeichenklassen zu `\d`, `\w` und `\s`. Sie passen auf jedes Zeichen, das nicht in der durch die Kleinbuchstabenform festgelegten Menge enthalten ist.

[Unicode-Zeichenklassen-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) beginnen mit `\p` und `\P`, werden jedoch nur im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) unterstützt. Im Unicode-unempfindlichen Modus sind sie [Identitäts-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) für das Zeichen `p` oder `P`.

Zeichenklassen-Escapes können in [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) verwendet werden. Sie können jedoch nicht als Grenzen von Zeichenbereichen verwendet werden. Dies ist nur als [veraltete Syntax für die Webkompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) erlaubt und sollte nicht darauf vertraut werden.

## Beispiele

### Aufteilen nach Leerzeichen

Das folgende Beispiel teilt einen String in ein Array von Wörtern auf und unterstützt alle Arten von Leerzeichentrennzeichen:

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
- [Unicode-Zeichenklassen-Escape: `\p{...}`, `\P{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Zeichen-Escape: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjunktion: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
