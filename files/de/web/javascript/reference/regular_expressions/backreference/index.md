---
title: "Rückverweis: \\1, \\2"
slug: Web/JavaScript/Reference/Regular_expressions/Backreference
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar}}

Ein **Rückverweis** bezieht sich auf die Teilausgabe einer vorherigen [Erfassungsgruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) und stimmt mit demselben Text wie diese Gruppe überein. Für [benannte Erfassungsgruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) können Sie die Syntax des [benannten Rückverweises](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference) bevorzugen.

## Syntax

```regex
\N
```

> **Note:** `N` ist kein Zeichenliterale.

### Parameter

- `N`
  - : Eine positive ganze Zahl, die sich auf die Nummer einer Erfassungsgruppe bezieht.

## Beschreibung

Ein Rückverweis ist eine Möglichkeit, denselben Text wie zuvor von einer Erfassungsgruppe erfasst zu matchen. Erfassungsgruppen werden ab 1 gezählt, sodass auf das Ergebnis der ersten Erfassungsgruppe mit `\1` verwiesen werden kann, auf das zweite mit `\2` und so weiter. `\0` ist eine [Zeichenescape-Sequenz](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) für das NUL-Zeichen.

Bei [Groß-/Kleinschreibung-unabhängigen](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) Matches kann der Rückverweis Text mit unterschiedlicher Groß-/Kleinschreibung im Vergleich zum Originaltext matchen.

```js
/(b)\1/i.test("bB"); // true
```

Der Rückverweis muss sich auf eine vorhandene Erfassungsgruppe beziehen. Wenn die angegebene Nummer größer ist als die Gesamtanzahl der Erfassungsgruppen, wird ein Syntaxfehler ausgelöst.

```js-nolint example-bad
/(a)\2/u; // SyntaxError: Invalid regular expression: Invalid escape
```

Im [Unicode-unbewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden ungültige Rückverweise zu einer [veralteten oktalen Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences). Dies ist eine [veraltete Syntax für die Webkompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), auf die Sie sich nicht verlassen sollten.

```js
/(a)\2/.test("a\x02"); // true
```

Wenn die referenzierte Erfassungsgruppe nicht übereinstimmt (zum Beispiel, weil sie zu einer nicht übereinstimmenden Alternative in einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) gehört), oder die Gruppe noch nicht übereingestimmt hat (zum Beispiel, weil sie rechts vom Rückverweis liegt), ist der Rückverweis immer erfolgreich (als ob er mit der leeren Zeichenfolge übereinstimmt).

```js
/(?:a|(b))\1c/.test("ac"); // true
/\1(a)/.test("a"); // true
```

## Beispiele

### Paarung von Anführungszeichen

Die folgende Funktion stimmt mit den Mustern `title='xxx'` und `title="xxx"` in einem String überein. Um sicherzustellen, dass die Anführungszeichen übereinstimmen, verwenden wir einen Rückverweis, um auf das erste Anführungszeichen zu verweisen. Der Zugriff auf die zweite Erfassungsgruppe (`[2]`) gibt den String zwischen den übereinstimmenden Anführungszeichen zurück:

```js
function parseTitle(metastring) {
  return metastring.match(/title=(["'])(.*?)\1/)[2];
}

parseTitle('title="foo"'); // 'foo'
parseTitle("title='foo' lang='en'"); // 'foo'
parseTitle('title="Named capturing groups\' advantages"'); // "Named capturing groups' advantages"
```

### Übereinstimmung doppelter Wörter

Die folgende Funktion findet doppelte Wörter in einem String (die normalerweise Tippfehler sind). Beachten Sie, dass sie die `\w` [Zeichenklassen-Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) verwendet, die nur englische Buchstaben, aber keine akzentuierten Buchstaben oder andere Alphabete matcht. Wenn Sie generischere Übereinstimmungen wünschen, könnten Sie den String nach Leerzeichen [teilen](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) und über das resultierende Array iterieren.

```js
function findDuplicates(text) {
  return text.match(/\b(\w+)\s+\1\b/i)?.[1];
}

findDuplicates("foo foo bar"); // 'foo'
findDuplicates("foo bar foo"); // undefined
findDuplicates("Hello hello"); // 'Hello'
findDuplicates("Hello hellos"); // undefined
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Erfassungsgruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Benannte Erfassungsgruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
