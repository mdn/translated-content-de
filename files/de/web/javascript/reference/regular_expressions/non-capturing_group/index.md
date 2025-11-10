---
title: "Nicht speichernde Gruppe: (?:...)"
slug: Web/JavaScript/Reference/Regular_expressions/Non-capturing_group
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Eine **nicht speichernde Gruppe** fasst ein Teilmuster zusammen, sodass Sie einen [Quantifizierer](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) auf die gesamte Gruppe anwenden oder [Disjunktionen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) darin verwenden können. Sie funktioniert wie der [Gruppierungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Grouping) in JavaScript-Ausdrücken und speichert im Gegensatz zu [speichernden Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) den passenden Text nicht, was die Leistung verbessert und Verwirrung vermeidet, wenn das Muster auch nützliche speichernde Gruppen enthält.

## Syntax

```regex
(?:pattern)
```

### Parameter

- `pattern`
  - : Ein Muster, das alles enthalten kann, was Sie in einem Regex-Literal verwenden können, einschließlich einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Beispiele

### Gruppierung eines Teilmusters und Anwendung eines Quantifizierers

Im folgenden Beispiel testen wir, ob ein Dateipfad mit `styles.css` oder `styles.[a hex hash].css` endet. Da der gesamte Teil `\.[\da-f]+` optional ist, müssen wir ihn in ein neues Atom gruppieren, um den `?` Quantifizierer darauf anzuwenden. Die Verwendung einer nicht speichernden Gruppe verbessert die Leistung, da keine zusätzlichen übereinstimmenden Informationen erstellt werden, die wir nicht benötigen.

```js
function isStylesheet(path) {
  return /styles(?:\.[\da-f]+)?\.css$/.test(path);
}

isStylesheet("styles.css"); // true
isStylesheet("styles.1234.css"); // true
isStylesheet("styles.cafe.css"); // true
isStylesheet("styles.1234.min.css"); // false
```

### Gruppierung einer Disjunktion

Eine Disjunktion hat in einem regulären Ausdruck die niedrigste Priorität. Wenn Sie eine Disjunktion als Teil eines größeren Musters verwenden möchten, müssen Sie sie gruppieren. Es wird empfohlen, eine nicht speichernde Gruppe zu verwenden, es sei denn, Sie sind auf den übereinstimmenden Text der Disjunktion angewiesen. Das folgende Beispiel erfasst Dateierweiterungen und verwendet denselben Code wie im Artikel über die [Eingabebereichsprüfung](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion#matching_file_extensions):

```js
function isImage(filename) {
  return /\.(?:png|jpe?g|webp|avif|gif)$/i.test(filename);
}

isImage("image.png"); // true
isImage("image.jpg"); // true
isImage("image.pdf"); // false
```

### Vermeidung von Umbau-Hürden

Speichernde Gruppen werden aufgrund ihrer Position im Muster abgerufen. Wenn Sie eine speichernde Gruppe hinzufügen oder entfernen, müssen Sie auch die Positionen der anderen speichernden Gruppen aktualisieren, falls Sie sie durch Übereinstimmungsergebnisse oder [Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) abrufen. Dies kann eine Fehlerquelle sein, besonders wenn die meisten Gruppen rein syntaktische Zwecke erfüllen (zum Anwenden von Quantifizierern oder zum Gruppieren von Disjunktionen). Die Verwendung nicht speichernden Gruppen vermeidet dieses Problem und ermöglicht es, die Indizes der tatsächlichen speichernden Gruppen einfach zu verfolgen.

Zum Beispiel, nehmen wir an, wir haben eine Funktion, die das Muster `title='xxx'` in einem String abgleicht (Beispiel aus [speichernde Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group#pairing_quotes)). Um sicherzustellen, dass die Anführungszeichen übereinstimmen, verwenden wir einen Rückverweis, um auf das erste Anführungszeichen zu verweisen.

```js
function parseTitle(metastring) {
  return metastring.match(/title=(["'])(.*?)\1/)[2];
}

parseTitle('title="foo"'); // 'foo'
```

Falls wir später entscheiden, `name='xxx'` als Alias für `title=` hinzuzufügen, müssen wir die Disjunktion in einer anderen Gruppe gruppieren:

```js example-bad
function parseTitle(metastring) {
  // Oops — the backreference and index access are now off by one!
  return metastring.match(/(title|name)=(["'])(.*?)\1/)[2];
}

parseTitle('name="foo"'); // Cannot read properties of null (reading '2')
// Because \1 now refers to the "name" string, which isn't found at the end.
```

Anstatt alle Stellen zu suchen, an denen wir auf die Indizes der speichernden Gruppen verweisen, und sie einzeln zu aktualisieren, ist es besser, eine speichernde Gruppe zu vermeiden:

```js example-good
function parseTitle(metastring) {
  // Do not capture the title|name disjunction
  // because we don't use its value
  return metastring.match(/(?:title|name)=(["'])(.*?)\1/)[2];
}

parseTitle('name="foo"'); // 'foo'
```

[Benannte speichernde Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) sind eine weitere Möglichkeit, Umbau-Hürden zu vermeiden. Sie ermöglichen es, dass auf speichernde Gruppen mit einem benutzerdefinierten Namen zugegriffen wird, der nicht beeinflusst wird, wenn andere speichernde Gruppen hinzugefügt oder entfernt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Speichernde Gruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Benannte speichernde Gruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
