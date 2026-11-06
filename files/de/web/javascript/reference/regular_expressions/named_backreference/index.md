---
title: "Benannte Rückreferenz: \\k<name>"
slug: Web/JavaScript/Reference/Regular_expressions/Named_backreference
l10n:
  sourceCommit: 288e644117c29285df2acf37a2ac97f57546a146
---

Eine **benannte Rückreferenz** bezieht sich auf den von einer vorherigen [benannten Erfassungsgruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) erfassten Teilstring und stimmt mit demselben Text überein wie diese Gruppe. Für [unbenannte Erfassungsgruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) müssen Sie die normale Syntax für [Rückreferenzen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) verwenden.

## Syntax

```regex
\k<name>
```

### Parameter

- `name`
  - : Der Name der Gruppe. Er muss ein gültiger [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein und auf eine vorhandene benannte Erfassungsgruppe verweisen.

## Beschreibung

Benannte Rückreferenzen sind normalen Rückreferenzen sehr ähnlich: Sie beziehen sich auf den von einer Erfassungsgruppe erfassten Text und stimmen mit demselben Text überein. Der Unterschied besteht darin, dass Sie die Erfassungsgruppe über ihren Namen statt über ihre Nummer angeben. Dadurch wird der reguläre Ausdruck lesbarer und lässt sich leichter überarbeiten und pflegen.

Im [nicht Unicode-bewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) leitet die Zeichenfolge `\k` nur dann eine benannte Rückreferenz ein, wenn der reguläre Ausdruck mindestens eine benannte Erfassungsgruppe enthält. Andernfalls ist sie ein [Identity Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) und entspricht dem wörtlichen Zeichen `k`. Dies ist eine [veraltete Syntax aus Gründen der Webkompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), auf die Sie sich nicht verlassen sollten.

```js
/\k/.test("k"); // true
```

## Beispiele

### Anführungszeichen zuordnen

Die folgende Funktion findet die Muster `title='xxx'` und `title="xxx"` in einer Zeichenfolge. Um sicherzustellen, dass die Anführungszeichen übereinstimmen, verwenden wir eine Rückreferenz auf das erste Anführungszeichen. Der Zugriff auf die zweite Erfassungsgruppe (`[2]`) gibt die Zeichenfolge zwischen den übereinstimmenden Anführungszeichen zurück:

```js
function parseTitle(metastring) {
  return metastring.match(/title=(?<quote>["'])(.*?)\k<quote>/)[2];
}

parseTitle('title="foo"'); // 'foo'
parseTitle("title='foo' lang='en'"); // 'foo'
parseTitle('title="Named capturing groups\' advantages"'); // "Named capturing groups' advantages"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Gruppen und Rückreferenzen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) – Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Erfassungsgruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Benannte Erfassungsgruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Rückreferenz: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
