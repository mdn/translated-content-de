---
title: "Rückverweis: \\1, \\2"
slug: Web/JavaScript/Reference/Regular_expressions/Backreference
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{jsSidebar}}

Ein **Rückverweis** bezieht sich auf die Teilübereinstimmung einer vorherigen [Erfassungsgruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) und stimmt mit demselben Text wie diese Gruppe überein. Für [benannte Erfassungsgruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) ziehen Sie möglicherweise die Syntax des [benannten Rückverweises](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference) vor.

## Syntax

```regex
\N
```

> [!NOTE] > `N` ist kein wörtliches Zeichen.

### Parameter

- `N`
  - : Eine positive Ganzzahl, die sich auf die Nummer einer Erfassungsgruppe bezieht.

## Beschreibung

Ein Rückverweis ist eine Möglichkeit, denselben Text abzugleichen, der zuvor von einer Erfassungsgruppe abgeglichen wurde. Erfassungsgruppen werden ab 1 gezählt, sodass auf das Ergebnis der ersten Erfassungsgruppe mit `\1` verwiesen werden kann, auf das der zweiten mit `\2` und so weiter. `\0` ist ein [Zeichenescape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) für das NUL-Zeichen.

Bei [Groß-/Kleinschreibung ignorierendem](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) Abgleich kann es sein, dass der Rückverweis Text mit anderer Groß-/Kleinschreibung als der Originaltext übereinstimmt.

```js
/(b)\1/i.test("bB"); // true
```

Der Rückverweis muss sich auf eine existierende Erfassungsgruppe beziehen. Wenn die angegebene Nummer größer ist als die Gesamtzahl der Erfassungsgruppen, wird ein Syntaxfehler ausgelöst.

```js-nolint example-bad
/(a)\2/u; // SyntaxError: Invalid regular expression: Invalid escape
```

Im [Unicode-unbewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) werden ungültige Rückverweise zu einer [veralteten Oktal-Escape-Sequenz](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences). Dies ist eine [veraltete Syntax für Webkompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), auf die Sie sich nicht verlassen sollten.

```js
/(a)\2/.test("a\x02"); // true
```

Wenn die referenzierte Erfassungsgruppe nicht übereinstimmt (zum Beispiel, weil sie zu einer nicht übereinstimmenden Alternative in einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) gehört), oder die Gruppe noch nicht übereingestimmt hat (zum Beispiel, weil sie rechts vom Rückverweis liegt), gelingt der Rückverweis immer (als ob er mit dem leeren String übereinstimmt).

```js
/(?:a|(b))\1c/.test("ac"); // true
/\1(a)/.test("a"); // true
```

## Beispiele

### Paarweise Anführungszeichen

Die folgende Funktion stimmt die Muster `title='xxx'` und `title="xxx"` in einem String ab. Um sicherzustellen, dass die Anführungszeichen übereinstimmen, verwenden wir einen Rückverweis, um sich auf das erste Anführungszeichen zu beziehen. Der Zugriff auf die zweite Erfassungsgruppe (`[2]`) gibt den String zwischen den übereinstimmenden Anführungszeichen zurück:

```js
function parseTitle(metastring) {
  return metastring.match(/title=(["'])(.*?)\1/)[2];
}

parseTitle('title="foo"'); // 'foo'
parseTitle("title='foo' lang='en'"); // 'foo'
parseTitle('title="Named capturing groups\' advantages"'); // "Named capturing groups' advantages"
```

### Übereinstimmende doppelte Wörter

Die folgende Funktion findet doppelte Wörter in einem String (die normalerweise Tippfehler sind). Beachten Sie, dass sie die `\w` [Zeichenklassenescape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) verwendet, die nur englische Buchstaben, aber keine Akzentbuchstaben oder andere Alphabete abgleicht. Wenn Sie allgemeinere Übereinstimmungen wünschen, sollten Sie den String möglicherweise nach Leerzeichen [aufteilen](/de/docs/Web/JavaScript/Reference/Global_Objects/String/split) und über das resultierende Array iterieren.

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
