---
title: "Nicht-erfassende Gruppe: (?:...)"
slug: Web/JavaScript/Reference/Regular_expressions/Non-capturing_group
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar}}

Eine **nicht-erfassende Gruppe** gruppiert ein Untermuster, wodurch Sie einen [Quantor](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) auf die gesamte Gruppe anwenden oder [Disjunktionen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) innerhalb dieser verwenden können. Sie agiert ähnlich wie der [Gruppenoperator](/de/docs/Web/JavaScript/Reference/Operators/Grouping) in JavaScript-Ausdrücken und im Gegensatz zu [erfassenden Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) speichert sie den übereinstimmenden Text nicht, was eine bessere Leistung ermöglicht und Verwirrung vermeidet, wenn das Muster auch nützliche erfassende Gruppen enthält.

## Syntax

```regex
(?:pattern)
```

### Parameter

- `pattern`
  - : Ein Muster, das aus allem bestehen kann, was Sie in einem Regex-Literal verwenden dürfen, einschließlich einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Beispiele

### Gruppieren eines Untermusters und Anwenden eines Quantors

Im folgenden Beispiel testen wir, ob ein Dateipfad mit `styles.css` oder `styles.[a hex hash].css` endet. Da der gesamte `\.[\da-f]+`-Teil optional ist, müssen wir ihn in ein neues Atom gruppieren, um den `?` Quantor darauf anzuwenden. Die Verwendung einer nicht-erfassenden Gruppe verbessert die Leistung, da keine zusätzlichen Übereinstimmungsinformationen erstellt werden, die wir nicht benötigen.

```js
function isStylesheet(path) {
  return /styles(?:\.[\da-f]+)?\.css$/.test(path);
}

isStylesheet("styles.css"); // true
isStylesheet("styles.1234.css"); // true
isStylesheet("styles.cafe.css"); // true
isStylesheet("styles.1234.min.css"); // false
```

### Gruppieren einer Disjunktion

Eine Disjunktion hat die niedrigste Priorität in einem regulären Ausdruck. Wenn Sie eine Disjunktion als Teil eines größeren Musters verwenden möchten, müssen Sie sie gruppieren. Sie sollten eine nicht-erfassende Gruppe verwenden, es sei denn, Sie verlassen sich auf den übereinstimmenden Text der Disjunktion. Das folgende Beispiel erkennt Dateiendungen, indem es denselben Code wie der Artikel zur [Eingabegrenzenüberprüfung](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion#matching_file_extensions) verwendet:

```js
function isImage(filename) {
  return /\.(?:png|jpe?g|webp|avif|gif)$/i.test(filename);
}

isImage("image.png"); // true
isImage("image.jpg"); // true
isImage("image.pdf"); // false
```

### Vermeidung von Refactoring-Gefahren

Erfassende Gruppen werden anhand ihrer Position im Muster abgerufen. Wenn Sie eine erfassende Gruppe hinzufügen oder entfernen, müssen Sie auch die Positionen der anderen erfassenden Gruppen aktualisieren, wenn Sie diese durch Übereinstimmungsergebnisse oder [Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) abrufen. Dies kann eine Quelle von Fehlern sein, insbesondere wenn die meisten Gruppen rein zu syntaktischen Zwecken existieren (um Quantoren anzuwenden oder Disjunktionen zu gruppieren). Die Verwendung von nicht-erfassenden Gruppen vermeidet dieses Problem und ermöglicht es, die Indizes der tatsächlichen erfassenden Gruppen leicht nachzuverfolgen.

Angenommen, wir haben eine Funktion, die das Muster `title='xxx'` in einem String erkennt (Beispiel entnommen aus der [erfassenden Gruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group#pairing_quotes)). Um sicherzustellen, dass die Anführungszeichen übereinstimmen, verwenden wir einen Rückverweis, um auf das erste Anführungszeichen zu verweisen.

```js
function parseTitle(metastring) {
  return metastring.match(/title=(["'])(.*?)\1/)[2];
}

parseTitle('title="foo"'); // 'foo'
```

Wenn wir später entscheiden, `name='xxx'` als Alias für `title=` hinzuzufügen, müssen wir die Disjunktion in einer weiteren Gruppe gruppieren:

```js example-bad
function parseTitle(metastring) {
  // Oops — the backreference and index access are now off by one!
  return metastring.match(/(title|name)=(["'])(.*?)\1/)[2];
}

parseTitle('name="foo"'); // Cannot read properties of null (reading '2')
// Because \1 now refers to the "name" string, which isn't found at the end.
```

Anstatt alle Stellen zu lokalisieren, an denen wir auf die Indizes der erfassenden Gruppen verweisen und diese einzeln zu aktualisieren, ist es besser, eine nicht-erfassende Gruppe zu verwenden:

```js example-good
function parseTitle(metastring) {
  // Do not capture the title|name disjunction
  // because we don't use its value
  return metastring.match(/(?:title|name)=(["'])(.*?)\1/)[2];
}

parseTitle('name="foo"'); // 'foo'
```

[Benannte erfassende Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) sind eine weitere Möglichkeit, Refactoring-Gefahren zu vermeiden. Sie ermöglichen es, erfassende Gruppen anhand eines benutzerdefinierten Namens abzurufen, der nicht betroffen ist, wenn andere erfassende Gruppen hinzugefügt oder entfernt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Gruppen und Rückverweise](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) Anleitung
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Erfassende Gruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Benannte erfassende Gruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
