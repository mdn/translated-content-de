---
title: "Benannte Rückreferenz: \\k<name>"
slug: Web/JavaScript/Reference/Regular_expressions/Named_backreference
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar}}

Eine **benannte Rückreferenz** bezieht sich auf die Teilübereinstimmung einer vorherigen [benannten Erfassungsgruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) und stimmt mit demselben Text wie diese Gruppe überein. Bei [unbenannten Erfassungsgruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) müssen Sie die normale [Rückreferenz](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) Syntax verwenden.

## Syntax

```regex
\k<name>
```

### Parameter

- `name`
  - : Der Name der Gruppe. Muss ein gültiger [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein und sich auf eine existierende benannte Erfassungsgruppe beziehen.

## Beschreibung

Benannte Rückreferenzen sind der normalen Rückreferenz sehr ähnlich: Sie bezieht sich auf den Text, der von einer Erfassungsgruppe erfasst wurde, und stimmt mit demselben Text überein. Der Unterschied besteht darin, dass Sie sich auf die Erfassungsgruppe nach ihrem Namen statt nach ihrer Nummer beziehen. Dies macht den regulären Ausdruck lesbarer und einfacher zu überarbeiten und zu pflegen.

Im [Unicode-unbewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) startet die Sequenz `\k` nur dann eine benannte Rückreferenz, wenn der RegEx mindestens eine benannte Erfassungsgruppe enthält. Andernfalls ist es ein [Identity Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) und entspricht dem literalen Zeichen `k`. Dies ist eine [veraltete Syntax für Web-Kompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) und sollte nicht verwendet werden.

```js
/\k/.test("k"); // true
```

## Beispiele

### Paarweise Anführungszeichen

Die folgende Funktion sucht nach den Mustern `title='xxx'` und `title="xxx"` in einem String. Um sicherzustellen, dass die Anführungszeichen übereinstimmen, verwenden wir eine Rückreferenz, um auf das erste Anführungszeichen zu verweisen. Der Zugriff auf die zweite Erfassungsgruppe (`[2]`) gibt den String zwischen den passenden Anführungszeichen zurück:

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

- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Erfassungsgruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Benannte Erfassungsgruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Rückreferenz: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
