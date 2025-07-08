---
title: "Wortgrenzen-Assertion: \\b, \\B"
slug: Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Eine **Wortgrenzen-Assertion** überprüft, ob die aktuelle Position im String eine Wortgrenze ist. Eine Wortgrenze ist dort, wo das nächste Zeichen ein Wortzeichen ist und das vorherige Zeichen kein Wortzeichen, oder umgekehrt.

## Syntax

```regex
\b
\B
```

## Beschreibung

`\b` gibt an, dass die aktuelle Position im String eine Wortgrenze ist. `\B` negiert die Assertion: Es gibt an, dass die aktuelle Position keine Wortgrenze ist. Beide sind _Assertions_, sodass sie im Gegensatz zu anderen [Zeichenescapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) oder [Zeichenklassen-Escapes](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) keine Zeichen konsumieren.

Ein Wortzeichen umfasst Folgendes:

- Buchstaben (A–Z, a–z), Zahlen (0–9) und Unterstrich (\_).
- Wenn der Regex [Unicode-bewusst](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) ist und das [`i`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase)-Flag gesetzt ist, andere Unicode-Zeichen, die durch [Case-Folding](https://unicode.org/Public/UCD/latest/ucd/CaseFolding.txt) zu einem der oben genannten Zeichen kanonisiert werden.

Wortzeichen werden auch durch das `\w` [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) erfasst.

Außerhalb der Grenzen liegende Eingabepositionen werden als Nicht-Wortzeichen betrachtet. Zum Beispiel sind die folgenden erfolgreiche Übereinstimmungen:

```js
/\ba/.exec("abc");
/c\b/.exec("abc");

/\B /.exec(" abc");
/ \B/.exec("abc ");
```

## Beispiele

### Erkennen von Wörtern

Im folgenden Beispiel wird festgestellt, ob ein String die Wörter "thanks" oder "thank you" enthält:

```js
function hasThanks(str) {
  return /\b(thanks|thank you)\b/i.test(str);
}

hasThanks("Thanks! You helped me a lot."); // true
hasThanks("Just want to say thank you for all your work."); // true
hasThanks("Thanksgiving is around the corner."); // false
```

> [!WARNING]
> Nicht alle Sprachen haben klar definierte Wortgrenzen. Wenn Sie mit Sprachen wie Chinesisch oder Thai arbeiten, bei denen es keine Leerzeichen-Trenner gibt, verwenden Sie stattdessen eine fortgeschrittenere Bibliothek wie {{jsxref("Intl.Segmenter")}}, um nach Wörtern zu suchen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Eingangsgrenzen-Assertion: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Lookahead-Assertion: `(?=...)`, `(?!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Lookbehind-Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Zeichen-Escape: `\n`, `\u{...}`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
