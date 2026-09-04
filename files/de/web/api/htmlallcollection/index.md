---
title: HTMLAllCollection
slug: Web/API/HTMLAllCollection
l10n:
  sourceCommit: 5b9e4bb67e5cb4bb2b780e7338a6560463e5a1a7
---

{{APIRef("DOM")}}{{Deprecated_Header}}

Das **`HTMLAllCollection`**-Interface repräsentiert eine Sammlung von _allen_ Elementen des Dokuments, die sowohl über einen Index (wie ein Array) als auch über das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des Elements zugänglich sind. Es wird durch die [`document.all`](/de/docs/Web/API/Document/all)-Eigenschaft zurückgegeben.

`HTMLAllCollection` hat eine sehr ähnliche Struktur wie [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), aber es gibt viele subtile Verhaltensunterschiede – zum Beispiel kann `HTMLAllCollection` als Funktion aufgerufen werden, und die `item()`-Methode kann mit einem String aufgerufen werden, der das `id`- oder `name`-Attribut eines Elements darstellt.

## Instanz-Eigenschaften

- [`HTMLAllCollection.length`](/de/docs/Web/API/HTMLAllCollection/length) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt die Anzahl der Elemente in der Sammlung zurück.

## Instanz-Methoden

- [`HTMLAllCollection.item()`](/de/docs/Web/API/HTMLAllCollection/item) {{deprecated_inline}}
  - : Gibt das Element an der angegebenen Position in der Sammlung zurück oder das Element, dessen `id`- oder `name`-Attribut dem angegebenen Wert entspricht. Gibt `null` zurück, wenn kein Element gefunden wird.
- [`HTMLAllCollection.namedItem()`](/de/docs/Web/API/HTMLAllCollection/namedItem) {{deprecated_inline}}
  - : Gibt das erste [Element](/de/docs/Web/API/Element) in der Sammlung zurück, dessen [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) oder `name`-Attribut dem angegebenen String-Namen entspricht, oder `null`, wenn kein Element übereinstimmt.

## Verwendung in JavaScript

### Indizierter Zugriff

Zusätzlich zu den oben genannten Methoden können Elemente in einer `HTMLAllCollection` über ganzzahlige Indizes und String-Eigenschaftsnamen zugegriffen werden. Das HTML-`id`-Attribut kann `:` und `.` als gültige Zeichen enthalten, was die Verwendung von Klammernotation für den Eigenschaftszugriff erfordern würde. `collection[i]` entspricht `collection.item(i)`, wobei `i` eine Ganzzahl, ein String, der eine Ganzzahl enthält, oder ein String, der ein `id` darstellt, sein kann.

### Aufruf als Funktion

Ein `HTMLAllCollection`-Objekt ist aufrufbar. Wenn es ohne Argumente oder mit `undefined` aufgerufen wird, gibt es `null` zurück. Andernfalls gibt es denselben Wert wie die [`item()`](/de/docs/Web/API/HTMLAllCollection/item)-Methode zurück, wenn dieselben Argumente übergeben werden.

### Spezielles Typkonvertierungsverhalten

Aus historischen Gründen ist `document.all` ein Objekt, das in den folgenden Weisen wie `undefined` funktioniert:

- Es ist [lose gleich](/de/docs/Web/JavaScript/Reference/Operators/Equality) zu `undefined` und `null`.
- Es ist in booleschen Kontexten {{Glossary("Falsy", "falsch")}}.
- Sein [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) ist `"undefined"`.

Diese speziellen Verhaltensweisen stellen sicher, dass Code wie:

```js
if (document.all) {
  // Assume that we are in IE; provide special logic
}
// Assume that we are in a modern browser
```

weiterhin modernes Verhalten bietet, selbst wenn der Code in einem Browser ausgeführt wird, der `document.all` aus Kompatibilitätsgründen implementiert.

In allen anderen Kontexten bleibt `document.all` jedoch ein Objekt. Zum Beispiel:

- Es ist nicht [streng gleich](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) zu `undefined` oder `null`.
- Wenn es auf der linken Seite des [Nullish-Koaleszenz-Operators](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) (`??`) oder des [Optional-Chaining-Operators](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) (`?.`) verwendet wird, wird es nicht dazu führen, dass der Ausdruck kurzgeschlossen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)
