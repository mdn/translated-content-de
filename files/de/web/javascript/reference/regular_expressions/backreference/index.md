---
title: "Rückverweis: \\1, \\2"
slug: Web/JavaScript/Reference/Regular_expressions/Backreference
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar}}

Ein **Rückverweis** bezieht sich auf den Teilstring einer vorherigen [Fanggruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) und stimmt mit dem gleichen Text wie diese Gruppe überein. Für [benannte Fanggruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) können Sie die Syntax für [benannte Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference) verwenden.

## Syntax

```regex
\N
```

> **Note:** `N` ist kein Literalkennzeichen.

### Parameter

- `N`
  - : Eine positive ganze Zahl, die sich auf die Nummer einer Fanggruppe bezieht.

## Beschreibung

Ein Rückverweis ist eine Möglichkeit, den gleichen Text wie zuvor von einer Fanggruppe gematcht zu matchen. Fanggruppen werden ab 1 gezählt, sodass auf das Ergebnis der ersten Fanggruppe mit `\1`, auf das der zweiten mit `\2` usw. verwiesen werden kann. `\0` ist ein [Zeichen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) für das NUL-Zeichen.

Bei [unempfindlichem](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) Matching kann der Rückverweis auf Text mit unterschiedlicher Groß-/Kleinschreibung zum Originaltext verweisen.

```js
/(b)\1/i.test("bB"); // true
```

Der Rückverweis muss sich auf eine existierende Fanggruppe beziehen. Wenn die angegebene Nummer größer als die Gesamtanzahl der Fanggruppen ist, wird ein Syntaxfehler ausgelöst.

```js-nolint example-bad
/(a)\2/u; // SyntaxError: Invalid regular expression: Invalid escape
```

Im [Unicode-unbewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden ungültige Rückverweise zu einer [veralteten oktalen Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences). Dies ist eine [veraltete Syntax für die Web-Kompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) und sollte nicht mehr verwendet werden.

```js
/(a)\2/.test("a\x02"); // true
```

Wenn die referenzierte Fanggruppe nicht gematcht wird (zum Beispiel, weil sie zu einer nicht gematchten Alternative in einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) gehört), oder die Gruppe noch nicht gematcht wurde (zum Beispiel, weil sie rechts vom Rückverweis liegt), ist der Rückverweis immer erfolgreich (als ob er mit der leeren Zeichenkette übereinstimmt).

```js
/(?:a|(b))\1c/.test("ac"); // true
/\1(a)/.test("a"); // true
```

## Beispiele

### Paarung von Anführungszeichen

Die folgende Funktion findet die Muster `title='xxx'` und `title="xxx"` in einem String. Um sicherzustellen, dass die Anführungszeichen übereinstimmen, nutzen wir einen Rückverweis, um auf das erste Anführungszeichen zu verweisen. Der Zugriff auf die zweite Fanggruppe (`[2]`) gibt den String zwischen den übereinstimmenden Anführungszeichen zurück:

```js
function parseTitle(metastring) {
  return metastring.match(/title=(["'])(.*?)\1/)[2];
}

parseTitle('title="foo"'); // 'foo'
parseTitle("title='foo' lang='en'"); // 'foo'
parseTitle('title="Named capturing groups\' advantages"'); // "Named capturing groups' advantages"
```

### Matching von doppelten Wörtern

Die folgende Funktion findet doppelte Wörter in einem String (die normalerweise Tippfehler sind). Beachten Sie, dass sie die `\w` [Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) verwendet, die nur englische Buchstaben, jedoch keine Akzentzeichen oder andere Alphabete matcht. Wenn Sie ein allgemeineres Matching wünschen, sollten Sie den String möglicherweise anhand von Leerzeichen [splitten](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) und über das resultierende Array iterieren.

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
- [Fanggruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Benannte Fanggruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
