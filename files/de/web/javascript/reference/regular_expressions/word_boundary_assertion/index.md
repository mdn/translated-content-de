---
title: "Wortgrenzen-Assertion: \\b, \\B"
slug: Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion
l10n:
  sourceCommit: 3e9618dd8b285580c2d3573e314ce97d6f3372ec
---

{{jsSidebar}}

Eine **Wortgrenzen-Assertion** überprüft, ob die aktuelle Position im String eine Wortgrenze ist. Eine Wortgrenze ist der Punkt, an dem das nächste Zeichen ein Wortzeichen ist und das vorherige Zeichen kein Wortzeichen ist, oder umgekehrt.

## Syntax

```regex
\b
\B
```

## Beschreibung

`\b` bestätigt, dass die aktuelle Position im String eine Wortgrenze ist. `\B` negiert die Assertion: Es wird bestätigt, dass die aktuelle Position keine Wortgrenze ist. Beide sind _Assertions_, daher verbrauchen `\b` und `\B` im Gegensatz zu anderen [Zeicheneskapierungen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) oder [Zeichenklassen-Eskapierungen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) keine Zeichen.

Ein Wortzeichen umfasst folgende:

- Buchstaben (A–Z, a–z), Zahlen (0–9) und Unterstrich (\_).
- Wenn der Regex [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist und das [`i`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase)-Flag gesetzt ist, auch andere Unicode-Zeichen, die durch [Case Folding](https://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt) kanonisch zu einem der oben genannten Zeichen werden.

Wortzeichen werden auch durch die `\w` [Zeichenklassen-Eskapierung](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) übereinstimmt.

Außerhalb der Grenzen liegende Positionen werden als Nicht-Wortzeichen betrachtet. Zum Beispiel sind die folgenden erfolgreiche Übereinstimmungen:

```js
/\ba/.exec("abc");
/c\b/.exec("abc");

/\B /.exec(" abc");
/ \B/.exec("abc ");
```

## Beispiele

### Erkennen von Wörtern

Das folgende Beispiel erkennt, ob ein String das Wort "thanks" oder "thank you" enthält:

```js
function hasThanks(str) {
  return /\b(thanks|thank you)\b/i.test(str);
}

hasThanks("Thanks! You helped me a lot."); // true
hasThanks("Just want to say thank you for all your work."); // true
hasThanks("Thanksgiving is around the corner."); // false
```

> [!WARNING]
> Nicht alle Sprachen haben klar definierte Wortgrenzen. Wenn Sie mit Sprachen wie Chinesisch oder Thailändisch arbeiten, bei denen es keine Leerzeichentrenner gibt, verwenden Sie stattdessen eine fortgeschrittenere Bibliothek wie {{jsxref("Intl.Segmenter")}}, um nach Wörtern zu suchen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Eingabebegrenzungs-Assertion: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Lookahead-Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Lookbehind-Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Zeicheneskapierung: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
