---
title: "Backreference: \\1, \\2"
slug: Web/JavaScript/Reference/Regular_expressions/Backreference
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar}}

Eine **Backreference** bezieht sich auf die Teilübereinstimmung einer vorherigen [Capture-Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) und entspricht demselben Text wie jene Gruppe. Für [benannte Capture-Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) könnten Sie es vorziehen, die Syntax der [benannten Backreference](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference) zu verwenden.

## Syntax

```regex
\N
```

> **Note:** `N` ist kein literales Zeichen.

### Parameter

- `N`
  - : Eine positive ganze Zahl, die sich auf die Nummer einer Capture-Gruppe bezieht.

## Beschreibung

Eine Backreference ist eine Möglichkeit, denselben Text erneut abzugleichen, der zuvor von einer Capture-Gruppe abgeglichen wurde. Capture-Gruppen werden ab 1 gezählt, sodass man auf das Ergebnis der ersten Capture-Gruppe mit `\1` Bezug nehmen kann, auf die zweite mit `\2` und so weiter. `\0` ist ein [Zeichenescape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) für das NUL-Zeichen.

Bei [Groß-/Kleinschreibung ignorieren](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) kann die Backreference Text mit anderer Groß-/Kleinschreibung als den ursprünglichen Text abgleichen.

```js
/(b)\1/i.test("bB"); // true
```

Die Backreference muss sich auf eine existierende Capture-Gruppe beziehen. Wenn die angegebene Nummer größer ist als die Gesamtanzahl der Capture-Gruppen, wird ein Syntaxfehler ausgelöst.

```js-nolint example-bad
/(a)\2/u; // SyntaxError: Invalid regular expression: Invalid escape
```

Im [Unicode-unaware-Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden ungültige Backreferences zu einer [veralteten oktalen Escapesequenz](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences). Dies ist eine [veraltete Syntax für Webkompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), auf die Sie sich nicht verlassen sollten.

```js
/(a)\2/.test("a\x02"); // true
```

Wenn die referenzierte Capture-Gruppe nicht übereinstimmt (zum Beispiel, weil sie zu einer nicht übereinstimmenden Alternative in einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) gehört), oder die Gruppe noch nicht übereingestimmt hat (zum Beispiel, weil sie rechts von der Backreference liegt), wird die Backreference immer als erfolgreich betrachtet (als ob sie mit der leeren Zeichenkette übereinstimmt).

```js
/(?:a|(b))\1c/.test("ac"); // true
/\1(a)/.test("a"); // true
```

## Beispiele

### Paarung von Anführungszeichen

Die folgende Funktion erkennt die Muster `title='xxx'` und `title="xxx"` in einem String. Um sicherzustellen, dass die Anführungszeichen übereinstimmen, verwenden wir eine Backreference, um auf das erste Anführungszeichen zu verweisen. Der Zugriff auf die zweite Capture-Gruppe (`[2]`) gibt den String zwischen den übereinstimmenden Anführungszeichen zurück:

```js
function parseTitle(metastring) {
  return metastring.match(/title=(["'])(.*?)\1/)[2];
}

parseTitle('title="foo"'); // 'foo'
parseTitle("title='foo' lang='en'"); // 'foo'
parseTitle('title="Named capturing groups\' advantages"'); // "Named capturing groups' advantages"
```

### Übereinstimmung von doppelten Wörtern

Die folgende Funktion findet doppelte Wörter in einem String (die normalerweise Tippfehler sind). Beachten Sie, dass sie die `\w` [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) verwendet, die nur englische Buchstaben, aber keine Akzentbuchstaben oder andere Alphabete abgleicht. Wenn Sie allgemeinere Übereinstimmungen wünschen, sollten Sie den String möglicherweise nach Leerzeichen [splitten](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) und über das resultierende Array iterieren.

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

- [Gruppen und Backreferences](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Capture-Gruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Benannte Capture-Gruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Benannte Backreference: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
