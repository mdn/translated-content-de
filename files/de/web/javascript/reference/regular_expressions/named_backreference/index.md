---
title: "Benannte Rückverweise: \\k<name>"
slug: Web/JavaScript/Reference/Regular_expressions/Named_backreference
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar}}

Ein **benannter Rückverweis** verweist auf die Teilübereinstimmung einer vorherigen [benannten Erfassungsgruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) und entspricht demselben Text wie diese Gruppe. Für [unbenannte Erfassungsgruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) müssen Sie die normale [Rückverweissyntax](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) verwenden.

## Syntax

```regex
\k<name>
```

### Parameter

- `name`
  - : Der Name der Gruppe. Muss ein gültiger [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein und sich auf eine existierende benannte Erfassungsgruppe beziehen.

## Beschreibung

Benannte Rückverweise sind den normalen Rückverweisen sehr ähnlich: Sie beziehen sich auf den Text, der von einer Erfassungsgruppe erfasst wird, und entsprechen demselben Text. Der Unterschied besteht darin, dass Sie auf die Erfassungsgruppe mit einem Namen anstatt einer Nummer verweisen. Dies macht den regulären Ausdruck lesbarer und erleichtert das Umstrukturieren und die Wartung.

Im [unicode-uninformierten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) beginnt die Sequenz `\k` nur dann einen benannten Rückverweis, wenn der reguläre Ausdruck mindestens eine benannte Erfassungsgruppe enthält. Andernfalls ist sie ein [Identitäts-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) und entspricht dem Literalzeichen `k`. Dies ist eine [veraltete Syntax zur Web-Kompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) und sollte nicht verwendet werden.

```js
/\k/.test("k"); // true
```

## Beispiele

### Paare von Anführungszeichen

Die folgende Funktion sucht nach den Mustern `title='xxx'` und `title="xxx"` in einem String. Um sicherzustellen, dass die Anführungszeichen zueinander passen, verwenden wir einen Rückverweis, um auf das erste Anführungszeichen zu verweisen. Der Zugriff auf die zweite Erfassungsgruppe (`[2]`) gibt den String zwischen den passenden Anführungszeichen zurück:

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

- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Anleitung
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Erfassungsgruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Benannte Erfassungsgruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Rückverweis: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
