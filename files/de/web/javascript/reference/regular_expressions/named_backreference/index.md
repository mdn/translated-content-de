---
title: "Benannte Rückverweise: \\k<name>"
slug: Web/JavaScript/Reference/Regular_expressions/Named_backreference
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar}}

Ein **benannter Rückverweis** bezieht sich auf den Teilstring einer vorherigen [benannten erfassenden Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) und entspricht dem gleichen Text wie diese Gruppe. Für [nicht benannte erfassende Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) müssen Sie die normale [Rückverweis](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) Syntax verwenden.

## Syntax

```regex
\k<name>
```

### Parameter

- `name`
  - : Der Name der Gruppe. Muss ein gültiger [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein und sich auf eine existierende benannte erfassende Gruppe beziehen.

## Beschreibung

Benannte Rückverweise sind normalen Rückverweisen sehr ähnlich: Sie beziehen sich auf den Text, der von einer erfassenden Gruppe erfasst wurde, und entsprechen dem gleichen Text. Der Unterschied besteht darin, dass Sie sich mit dem Namen anstatt der Nummer auf die erfassende Gruppe beziehen. Dies macht den regulären Ausdruck besser lesbar und leichter zu überarbeiten und zu pflegen.

Im [Unicode-unbewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) startet die Sequenz `\k` nur dann einen benannten Rückverweis, wenn der Regex mindestens eine benannte erfassende Gruppe enthält. Andernfalls ist es ein [Identitäts-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) und entspricht dem Literalzeichen `k`. Dies ist eine [veraltete Syntax für Web-Kompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) und sollte nicht darauf vertraut werden.

```js
/\k/.test("k"); // true
```

## Beispiele

### Paarung von Anführungszeichen

Die folgende Funktion findet die Muster `title='xxx'` und `title="xxx"` in einem String. Um sicherzustellen, dass die Anführungszeichen übereinstimmen, verwenden wir einen Rückverweis, um auf das erste Anführungszeichen zu verweisen. Der Zugriff auf die zweite erfassende Gruppe (`[2]`) gibt den String zwischen den passenden Anführungszeichen zurück:

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
- [Erfassende Gruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Benannte erfassende Gruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Rückverweis: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
