---
title: "Nicht-erfassende Gruppe: (?:...)"
slug: Web/JavaScript/Reference/Regular_expressions/Non-capturing_group
l10n:
  sourceCommit: 288e644117c29285df2acf37a2ac97f57546a146
---

Eine **nicht-erfassende Gruppe** gruppiert ein Teilmuster. So können Sie einen [Quantifizierer](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) auf die gesamte Gruppe anwenden oder innerhalb der Gruppe [Alternativen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) verwenden. Sie funktioniert wie der [Gruppierungsoperator](/de/docs/Web/JavaScript/Reference/Operators/Grouping) in JavaScript-Ausdrücken. Anders als [erfassende Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) speichert sie den übereinstimmenden Text nicht. Das kann die Leistung verbessern und Verwechslungen vermeiden, wenn das Muster auch erfassende Gruppen enthält, deren Ergebnisse benötigt werden.

## Syntax

```regex
(?:pattern)
```

### Parameter

- `pattern`
  - : Ein Muster, das alles enthalten kann, was in einem regulären Ausdruck als Literal zulässig ist, einschließlich einer [Alternative](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Beispiele

### Ein Teilmuster gruppieren und einen Quantifizierer anwenden

Im folgenden Beispiel prüfen wir, ob ein Dateipfad mit `styles.css` oder `styles.[a hex hash].css` endet. Da der gesamte Teil `\.[\da-f]+` optional ist, müssen wir ihn als neue Einheit gruppieren, um den Quantifizierer `?` darauf anzuwenden. Eine nicht-erfassende Gruppe verbessert die Leistung, weil sie keine zusätzlichen Übereinstimmungsinformationen erzeugt, die wir nicht benötigen.

```js
function isStylesheet(path) {
  return /styles(?:\.[\da-f]+)?\.css$/.test(path);
}

isStylesheet("styles.css"); // true
isStylesheet("styles.1234.css"); // true
isStylesheet("styles.cafe.css"); // true
isStylesheet("styles.1234.min.css"); // false
```

### Alternativen gruppieren

Alternativen haben in einem regulären Ausdruck die niedrigste Priorität. Wenn Sie Alternativen als Teil eines größeren Musters verwenden möchten, müssen Sie sie gruppieren. Verwenden Sie dafür nach Möglichkeit eine nicht-erfassende Gruppe, sofern Sie den Text, mit dem die Alternativen übereinstimmen, nicht benötigen. Das folgende Beispiel erkennt Dateierweiterungen und verwendet denselben Code wie der Artikel über [Eingabegrenzen-Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion#matching_file_extensions):

```js
function isImage(filename) {
  return /\.(?:png|jpe?g|webp|avif|gif)$/i.test(filename);
}

isImage("image.png"); // true
isImage("image.jpg"); // true
isImage("image.pdf"); // false
```

### Fehler beim Umstrukturieren vermeiden

Auf erfassende Gruppen wird über ihre Position im Muster zugegriffen. Wenn Sie eine erfassende Gruppe hinzufügen oder entfernen, müssen Sie auch die Positionen der anderen erfassenden Gruppen aktualisieren, sofern Sie über Übereinstimmungsergebnisse oder [Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) auf sie zugreifen. Das kann zu Fehlern führen, insbesondere wenn die meisten Gruppen nur syntaktischen Zwecken dienen, etwa um Quantifizierer anzuwenden oder Alternativen zu gruppieren. Nicht-erfassende Gruppen vermeiden dieses Problem und erleichtern es, die Indizes der tatsächlich erfassenden Gruppen nachzuvollziehen.

Angenommen, wir haben eine Funktion, die das Muster `title='xxx'` in einer Zeichenfolge erkennt (Beispiel aus dem Artikel über [erfassende Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group#pairing_quotes)). Damit die Anführungszeichen übereinstimmen, verwenden wir einen Rückverweis auf das erste Anführungszeichen.

```js
function parseTitle(metastring) {
  return metastring.match(/title=(["'])(.*?)\1/)[2];
}

parseTitle('title="foo"'); // 'foo'
```

Wenn wir später `name='xxx'` als Alias für `title=` hinzufügen möchten, müssen wir die Alternativen in einer weiteren Gruppe zusammenfassen:

```js example-bad
function parseTitle(metastring) {
  // Oops — the backreference and index access are now off by one!
  return metastring.match(/(title|name)=(["'])(.*?)\1/)[2];
}

parseTitle('name="foo"'); // Cannot read properties of null (reading '2')
// Because \1 now refers to the "name" string, which isn't found at the end.
```

Statt alle Stellen zu suchen, an denen wir auf die Indizes der erfassenden Gruppen zugreifen, und sie einzeln zu aktualisieren, sollten wir keine erfassende Gruppe verwenden:

```js example-good
function parseTitle(metastring) {
  // Do not capture the title|name disjunction
  // because we don't use its value
  return metastring.match(/(?:title|name)=(["'])(.*?)\1/)[2];
}

parseTitle('name="foo"'); // 'foo'
```

[Benannte erfassende Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) sind eine weitere Möglichkeit, Fehler beim Umstrukturieren zu vermeiden. Auf sie kann über einen selbst gewählten Namen zugegriffen werden, der unverändert bleibt, wenn andere erfassende Gruppen hinzugefügt oder entfernt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Leitfaden zu [Gruppen und Rückverweisen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Erfassende Gruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Benannte erfassende Gruppe: `(?<name>...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
