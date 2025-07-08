---
title: "Rückverweis: \\1, \\2"
slug: Web/JavaScript/Reference/Regular_expressions/Backreference
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Ein **Rückverweis** bezieht sich auf den Teilstring einer vorherigen [erfassenden Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) und stimmt mit demselben Text wie diese Gruppe überein. Für [benannte erfassende Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) bevorzugen Sie möglicherweise die Syntax für [benannte Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference).

## Syntax

```regex
\N
```

> [!NOTE]
> `N` ist kein literales Zeichen.

### Parameter

- `N`
  - : Eine positive ganze Zahl, die sich auf die Nummer einer erfassenden Gruppe bezieht.

## Beschreibung

Ein Rückverweis ist eine Möglichkeit, denselben Text zu matchen, der zuvor von einer erfassenden Gruppe gematcht wurde. Die Zählung der erfassenden Gruppen beginnt bei 1, sodass das Ergebnis der ersten erfassenden Gruppe mit `\1` referenziert werden kann, das der zweiten mit `\2` usw. `\0` ist ein [Zeichenescape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) für das NUL-Zeichen.

Bei case-unsensitiven Vergleichen kann der Rückverweis Text mit unterschiedlicher Groß- und Kleinschreibung im Vergleich zum Originaltext matchen.

```js
/(b)\1/i.test("bB"); // true
```

Der Rückverweis muss sich auf eine existierende erfassende Gruppe beziehen. Wenn die angegebene Zahl größer ist als die Gesamtzahl der erfassenden Gruppen, wird ein Syntaxfehler ausgelöst.

```js-nolint example-bad
/(a)\2/u; // SyntaxError: Invalid regular expression: Invalid escape
```

Im [unicode-unaware mode](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden ungültige Rückverweise zu einer [veralteten oktalen Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences). Dies ist eine [veraltete Syntax für Web-Kompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), auf die Sie sich nicht verlassen sollten.

```js
/(a)\2/.test("a\x02"); // true
```

Wenn die referenzierte erfassende Gruppe nicht gematcht wird (zum Beispiel, weil sie zu einer nicht gematchten Alternative in einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) gehört) oder die Gruppe noch nicht gematcht wurde (zum Beispiel, weil sie rechts vom Rückverweis liegt), gelingt der Rückverweis immer (als ob er die leere Zeichenkette matcht).

```js
/(?:a|(b))\1c/.test("ac"); // true
/\1(a)/.test("a"); // true
```

## Beispiele

### Zitatpaarung

Die folgende Funktion matched die Muster `title='xxx'` und `title="xxx"` in einem String. Um sicherzustellen, dass die Anführungszeichen übereinstimmen, verwenden wir einen Rückverweis, um auf das erste Anführungszeichen zu verweisen. Der Zugriff auf die zweite erfassende Gruppe (`[2]`) gibt die Zeichenkette zwischen den übereinstimmenden Anführungszeichen zurück:

```js
function parseTitle(metastring) {
  return metastring.match(/title=(["'])(.*?)\1/)[2];
}

parseTitle('title="foo"'); // 'foo'
parseTitle("title='foo' lang='en'"); // 'foo'
parseTitle('title="Named capturing groups\' advantages"'); // "Named capturing groups' advantages"
```

### Doppelte Wörter matchen

Die folgende Funktion findet doppelte Wörter in einem String (die normalerweise Tippfehler sind). Beachten Sie, dass es die `\w` [Zeichenklassenescape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) verwendet, die nur englische Buchstaben, aber keine akzentuierten Buchstaben oder andere Alphabete matched. Wenn Sie ein generischeres Matching wünschen, sollten Sie den String möglicherweise mit Leerzeichen [aufteilen](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) und über das resultierende Array iterieren.

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
- [Erfassende Gruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Benannte erfassende Gruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Benannter Rückverweis: `\k<name>`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
