---
title: "Nicht erfassende Gruppe: (?:...)"
slug: Web/JavaScript/Reference/Regular_expressions/Non-capturing_group
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar}}

Eine **nicht erfassende Gruppe** gruppiert ein Untermuster, sodass Sie einen [Quantor](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) auf die gesamte Gruppe anwenden oder [Disjunktionen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) innerhalb dieser verwenden können. Sie wirkt wie der [Gruppierungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Grouping) in JavaScript-Ausdrücken und, im Gegensatz zu [erfassenden Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group), merkt sie sich nicht den übereinstimmenden Text. Dadurch wird eine bessere Leistung erzielt und es wird Verwirrung vermieden, wenn das Muster auch nützliche erfassende Gruppen enthält.

## Syntax

```regex
(?:pattern)
```

### Parameter

- `pattern`
  - : Ein Muster, das alles enthalten kann, was Sie in einem Regex-Literal verwenden dürfen, einschließlich einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Beispiele

### Gruppierung eines Untermusters und Anwendung eines Quantors

Im folgenden Beispiel überprüfen wir, ob ein Dateipfad mit `styles.css` oder `styles.[a hex hash].css` endet. Da der gesamte Teil `\.[\da-f]+` optional ist, müssen wir ihn in ein neues Atom gruppieren, um den `?`-Quantor darauf anwenden zu können. Durch die Verwendung einer nicht erfassenden Gruppe wird die Leistung verbessert, da keine zusätzlichen Übereinstimmungsinformationen erstellt werden, die wir nicht benötigen.

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

Eine Disjunktion hat die niedrigste Priorität in einem regulären Ausdruck. Wenn Sie eine Disjunktion als Teil eines größeren Musters verwenden möchten, müssen Sie sie gruppieren. Es wird empfohlen, eine nicht erfassende Gruppe zu verwenden, es sei denn, Sie sind auf den übereinstimmenden Text der Disjunktion angewiesen. Das folgende Beispiel entspricht Dateiendungen und verwendet denselben Code wie der Artikel zur [Eingabebegrenzungsprüfung](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion#matching_file_extensions).

```js
function isImage(filename) {
  return /\.(?:png|jpe?g|webp|avif|gif)$/i.test(filename);
}

isImage("image.png"); // true
isImage("image.jpg"); // true
isImage("image.pdf"); // false
```

### Vermeidung von Refaktorisierungsgefahren

Erfassende Gruppen werden über ihre Position im Muster angesprochen. Wenn Sie eine erfassende Gruppe hinzufügen oder entfernen, müssen Sie auch die Positionen der anderen erfassenden Gruppen aktualisieren, wenn Sie diese über Matchergebnisse oder [Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) ansprechen. Dies kann eine Quelle für Bugs sein, insbesondere wenn die meisten Gruppen rein aus syntaktischen Gründen vorhanden sind (um Quantoren anzuwenden oder Disjunktionen zu gruppieren). Die Verwendung nicht erfassender Gruppen vermeidet dieses Problem und ermöglicht es, die Indizes tatsächlicher erfassender Gruppen leicht zu verfolgen.

Nehmen wir zum Beispiel an, wir haben eine Funktion, die das Muster `title='xxx'` in einem String erkennt (Beispiel entnommen vom [erfassenden Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group#pairing_quotes)). Um sicherzustellen, dass die Anführungszeichen übereinstimmen, verwenden wir einen Rückverweis, um sich auf das erste Anführungszeichen zu beziehen.

```js
function parseTitle(metastring) {
  return metastring.match(/title=(["'])(.*?)\1/)[2];
}

parseTitle('title="foo"'); // 'foo'
```

Falls wir später beschließen, `name='xxx'` als Alias für `title=` hinzuzufügen, müssen wir die Disjunktion in einer weiteren Gruppe gruppieren:

```js example-bad
function parseTitle(metastring) {
  // Oops — the backreference and index access are now off by one!
  return metastring.match(/(title|name)=(["'])(.*?)\1/)[2];
}

parseTitle('name="foo"'); // Cannot read properties of null (reading '2')
// Because \1 now refers to the "name" string, which isn't found at the end.
```

Anstatt alle Stellen zu finden, an denen wir uns auf die Indizes der erfassenden Gruppen beziehen, und sie nacheinander zu aktualisieren, ist es besser, eine erfassende Gruppe zu vermeiden:

```js example-good
function parseTitle(metastring) {
  // Do not capture the title|name disjunction
  // because we don't use its value
  return metastring.match(/(?:title|name)=(["'])(.*?)\1/)[2];
}

parseTitle('name="foo"'); // 'foo'
```

[Benannte erfassende Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) sind eine weitere Möglichkeit, Refaktorisierungsgefahren zu vermeiden. Sie erlauben es, erfassende Gruppen durch einen benutzerdefinierten Namen anzusprechen, der nicht betroffen ist, wenn andere erfassende Gruppen hinzugefügt oder entfernt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Erfassende Gruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Benannte erfassende Gruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
