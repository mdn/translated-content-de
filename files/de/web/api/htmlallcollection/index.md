---
title: HTMLAllCollection
slug: Web/API/HTMLAllCollection
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("DOM")}}{{Deprecated_Header}}

Die **`HTMLAllCollection`**-Schnittstelle repräsentiert eine Sammlung von _allen_ Elementen des Dokuments, die über einen Index (wie ein Array) und über die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des Elements zugänglich sind. Sie wird von der [`document.all`](/de/docs/Web/API/Document/all)-Eigenschaft zurückgegeben.

`HTMLAllCollection` hat eine sehr ähnliche Struktur wie [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), aber es gibt viele subtile Verhaltensunterschiede – zum Beispiel kann `HTMLAllCollection` als Funktion aufgerufen werden, und seine `item()`-Methode kann mit einem String aufgerufen werden, der dem `id`- oder `name`-Attribut eines Elements entspricht.

## Instanz-Eigenschaften

- [`HTMLAllCollection.length`](/de/docs/Web/API/HTMLAllCollection/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Elemente in der Sammlung zurück.

## Instanz-Methoden

- [`HTMLAllCollection.item()`](/de/docs/Web/API/HTMLAllCollection/item)
  - : Gibt das Element zurück, das sich an der angegebenen Stelle in der Sammlung befindet, oder das Element mit dem angegebenen Wert für sein `id`- oder `name`-Attribut. Gibt `null` zurück, wenn kein Element gefunden wird.
- [`HTMLAllCollection.namedItem()`](/de/docs/Web/API/HTMLAllCollection/namedItem)
  - : Gibt das erste [Element](/de/docs/Web/API/Element) in der Sammlung zurück, dessen [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)- oder `name`-Attribut mit dem angegebenen String-Namen übereinstimmt, oder `null`, wenn kein Element übereinstimmt.

## Verwendung in JavaScript

### Indexierter Zugriff

Zusätzlich zu den oben genannten Methoden können Elemente in einer `HTMLAllCollection` durch Ganzzahl-Indizes und String-Eigenschaftsnamen zugegriffen werden. Das HTML-`id`-Attribut kann `:` und `.` als gültige Zeichen enthalten, was die Verwendung der Klammernotation für den Eigenschaftszugriff erforderlich macht. `collection[i]` ist gleichbedeutend mit `collection.item(i)`, wobei `i` eine Ganzzahl, ein String, der eine Ganzzahl enthält, oder ein String, der eine `id` darstellt, sein kann.

### Aufruf als Funktion

Ein `HTMLAllCollection`-Objekt ist aufrufbar. Wenn es ohne Argumente oder mit `undefined` aufgerufen wird, gibt es `null` zurück. Andernfalls gibt es denselben Wert wie die [`item()`](/de/docs/Web/API/HTMLAllCollection/item)-Methode zurück, wenn dieselben Argumente übergeben werden.

### Spezielles Typkonvertierungsverhalten

Aus historischen Gründen ist `document.all` ein Objekt, das sich in folgenden Aspekten wie `undefined` verhält:

- Es ist [nicht streng gleich](/de/docs/Web/JavaScript/Reference/Operators/Equality) zu `undefined` und `null`.
- Es ist [falsy](/de/docs/Glossary/Falsy) in booleschen Kontexten.
- Sein [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) ist `"undefined"`.

Diese speziellen Verhaltensweisen stellen sicher, dass Code wie:

```js
if (document.all) {
  // Assume that we are in IE; provide special logic
}
// Assume that we are in a modern browser
```

auch dann modernes Verhalten liefert, wenn der Code in einem Browser ausgeführt wird, der `document.all` aus Kompatibilitätsgründen implementiert.

In allen anderen Kontexten bleibt `document.all` jedoch ein Objekt. Zum Beispiel:

- Es ist nicht [streng gleich](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) zu `undefined` oder `null`.
- Wenn es auf der linken Seite des [Nullish Coalescing Operators](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) (`??`) oder des [Optional Chaining Operators](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) (`?.`) verwendet wird, wird der Ausdruck nicht vorzeitig abgebrochen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)
