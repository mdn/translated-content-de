---
title: "Benannte Rückreferenz: \\k<name>"
slug: Web/JavaScript/Reference/Regular_expressions/Named_backreference
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Eine **benannte Rückreferenz** bezieht sich auf das Teilmuster einer vorherigen [benannten Erfassergruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) und entspricht demselben Text wie diese Gruppe. Bei [nicht benannten Erfassergruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) müssen Sie die normale [Rückreferenz](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)-Syntax verwenden.

## Syntax

```regex
\k<name>
```

### Parameter

- `name`
  - : Der Name der Gruppe. Muss ein gültiger [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein und sich auf eine existierende benannte Erfassergruppe beziehen.

## Beschreibung

Benannte Rückreferenzen sind normalen Rückreferenzen sehr ähnlich: Sie beziehen sich auf den durch eine Erfassergruppe abgeglichenen Text und entsprechen demselben Text. Der Unterschied besteht darin, dass Sie sich auf die Erfassergruppe durch ihren Namen anstatt durch ihre Nummer beziehen. Dies macht den regulären Ausdruck lesbarer und leichter umstrukturierbar und wartbar.

Im [Unicode-unaware-Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) beginnt die Sequenz `\k` nur dann eine benannte Rückreferenz, wenn der Regex mindestens eine benannte Erfassergruppe enthält. Andernfalls ist es ein [Identitätsescape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) und entspricht dem Literalzeichen `k`. Dies ist eine [veraltete Syntax zur Web-Kompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) und sollte nicht verwendet werden.

```js
/\k/.test("k"); // true
```

## Beispiele

### Paarweise Anführungszeichen

Die folgende Funktion stimmt mit den Mustern `title='xxx'` und `title="xxx"` in einem String überein. Um sicherzustellen, dass die Anführungszeichen zueinander passen, verwenden wir eine Rückreferenz, um auf das erste Anführungszeichen zu verweisen. Der Zugriff auf die zweite Erfassergruppe (`[2]`) gibt den String zwischen den passenden Anführungszeichen zurück:

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

- [Gruppen und Rückreferenzen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Erfassergruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Benannte Erfassergruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Rückreferenz: `\1`, `\2`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
