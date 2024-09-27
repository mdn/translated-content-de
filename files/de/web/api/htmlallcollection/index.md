---
title: HTMLAllCollection
slug: Web/API/HTMLAllCollection
l10n:
  sourceCommit: e8e22a6e6d6455222c8c1a1e1346a149d300ab35
---

{{APIRef("DOM")}}{{Deprecated_Header}}

Die **`HTMLAllCollection`**-Schnittstelle repräsentiert eine Sammlung von _allen_ Elementen des Dokuments, die sowohl über einen Index (wie ein Array) als auch über das [`id`](/de/docs/Web/HTML/Global_attributes/id) eines Elements zugänglich ist. Sie wird durch die [`document.all`](/de/docs/Web/API/Document/all) Eigenschaft zurückgegeben.

`HTMLAllCollection` hat eine sehr ähnliche Struktur wie [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), weist jedoch viele subtile Unterschiede im Verhalten auf — zum Beispiel kann `HTMLAllCollection` als Funktion aufgerufen werden, und seine `item()`-Methode kann mit einem String aufgerufen werden, der das `id`- oder `name`-Attribut eines Elements darstellt.

## Instanz-Eigenschaften

- [`HTMLAllCollection.length`](/de/docs/Web/API/HTMLAllCollection/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Elemente in der Sammlung zurück.

## Instanz-Methoden

- [`HTMLAllCollection.item()`](/de/docs/Web/API/HTMLAllCollection/item)
  - : Gibt das Element an der angegebenen Stelle in der Sammlung zurück oder das Element mit dem angegebenen Wert für sein `id`- oder `name`-Attribut. Gibt `null` zurück, wenn kein Element gefunden wird.
- [`HTMLAllCollection.namedItem()`](/de/docs/Web/API/HTMLAllCollection/namedItem)
  - : Gibt das erste [Element](/de/docs/Web/API/Element) in der Sammlung zurück, dessen [`id`](/de/docs/Web/HTML/Global_attributes/id) oder `name`-Attribut mit dem angegebenen String-Namen übereinstimmt, oder `null`, wenn kein Element übereinstimmt.

## Verwendung in JavaScript

### Indexierter Zugriff

Zusätzlich zu den oben erwähnten Methoden können Elemente in einer `HTMLAllCollection` über Ganzzahlen-Indizes und String-Property-Namen zugegriffen werden. Das HTML-`id`-Attribut kann `:` und `.` als gültige Zeichen enthalten, was die Verwendung der Klammer-Notation für den Zugriff auf Eigenschaften notwendig machen würde. `collection[i]` ist äquivalent zu `collection.item(i)`, wobei `i` eine Ganzzahl, ein String mit einer Ganzzahl oder ein String, der ein `id` darstellt, sein kann.

### Aufruf als Funktion

Ein `HTMLAllCollection`-Objekt ist aufrufbar. Wenn es ohne Argumente oder mit `undefined` aufgerufen wird, gibt es `null` zurück. Ansonsten gibt es denselben Wert wie die [`item()`](/de/docs/Web/API/HTMLAllCollection/item)-Methode zurück, wenn dieselben Argumente übergeben werden.

### Spezielles Typumwandlungsverhalten

Aus historischen Gründen ist `document.all` ein Objekt, das sich in den folgenden Fällen wie `undefined` verhält:

- Es ist [locker gleich](/de/docs/Web/JavaScript/Reference/Operators/Equality) zu `undefined` und `null`.
- Es ist [falsy](/de/docs/Glossary/Falsy) in booleschen Kontexten.
- Sein [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) ist `"undefined"`.

Diese speziellen Verhaltensweisen gewährleisten, dass Code wie:

```js
if (document.all) {
  // Assume that we are in IE; provide special logic
}
// Assume that we are in a modern browser
```

auch weiterhin modernes Verhalten bietet, selbst wenn der Code in einem Browser ausgeführt wird, der `document.all` aus Kompatibilitätsgründen implementiert.

In allen anderen Kontexten bleibt jedoch `document.all` ein Objekt. Zum Beispiel:

- Es ist nicht [streng gleich](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) zu `undefined` oder `null`.
- Wenn es auf der linken Seite des [nullish coalescing operator](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) (`??`) oder des [optional chaining operator](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) (`?.`) verwendet wird, wird es nicht dazu führen, dass der Ausdruck abgekürzt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)
