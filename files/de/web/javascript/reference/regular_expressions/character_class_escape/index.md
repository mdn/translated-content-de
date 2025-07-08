---
title: "Zeichenklassen-Escape: \\d, \\D, \\w, \\W, \\s, \\S"
slug: Web/JavaScript/Reference/Regular_expressions/Character_class_escape
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Ein **Zeichenklassen-Escape** ist eine Escape-Sequenz, die eine Menge von Zeichen repräsentiert.

## Syntax

```regex
\d, \D
\s, \S
\w, \W
```

> [!NOTE]
> `,` ist nicht Teil der Syntax.

## Beschreibung

Im Gegensatz zu [Zeichen-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) repräsentieren Zeichenklassen-Escapes eine vordefinierte _Menge_ von Zeichen, ähnlich einer [Zeichenklasse](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class). Die folgenden Zeichenklassen werden unterstützt:

- `\d`
  - : Entspricht jedem Ziffernzeichen. Entspricht `[0-9]`.
- `\w`
  - : Entspricht jedem Wortzeichen, wobei ein Wortzeichen Buchstaben (A–Z, a–z), Zahlen (0–9) und Unterstrich (\_) umfasst. Wenn der Regex [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist und das [`i`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) Flag gesetzt ist, wird auch anderen Unicode-Zeichen entsprochen, die durch [Case Folding](https://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt) auf eines der oben genannten Zeichen kanonisiert werden.
- `\s`
  - : Entspricht jedem [Whitespace](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) oder [Zeilenbeendigungszeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators).

Die Großbuchstabenformen `\D`, `\W` und `\S` erstellen komplementäre Zeichenklassen zu `\d`, `\w` und `\s` und entsprechen jedem Zeichen, das nicht in der durch die Kleinbuchstabenform festgelegten Menge enthalten ist.

[Unicode-Zeichenklassen-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) beginnen mit `\p` und `\P`, werden jedoch nur im [Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) unterstützt. Im Unicode-unbewussten Modus sind sie [Identitäts-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) für das `p` oder `P` Zeichen.

Zeichenklassen-Escapes können in [Zeichenklassen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) verwendet werden. Sie können jedoch nicht als Grenzen von Zeichenbereichen verwendet werden, was nur noch als [veraltete Syntax zur Web-Kompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) zulässig ist, und auf die Sie sich nicht verlassen sollten.

## Beispiele

### Aufteilen nach Leerzeichen

Das folgende Beispiel teilt einen String in ein Array von Wörtern, wobei alle Arten von Leerzeichenseparatoren unterstützt werden:

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
- [Disjunction: `|`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
