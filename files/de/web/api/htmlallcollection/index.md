---
title: HTMLAllCollection
slug: Web/API/HTMLAllCollection
l10n:
  sourceCommit: e8e22a6e6d6455222c8c1a1e1346a149d300ab35
---

{{APIRef("DOM")}}{{Deprecated_Header}}

Die **`HTMLAllCollection`**-Schnittstelle repräsentiert eine Sammlung von _allen_ Elementen des Dokuments, die über den Index (wie ein Array) und über die [`id`](/de/docs/Web/HTML/Global_attributes/id) des Elements zugänglich sind. Sie wird von der {{domxref("document.all")}}-Eigenschaft zurückgegeben.

`HTMLAllCollection` hat eine sehr ähnliche Struktur wie {{domxref("HTMLCollection")}}, es gibt aber viele subtile Verhaltensunterschiede — zum Beispiel kann `HTMLAllCollection` als Funktion aufgerufen werden, und seine `item()`-Methode kann mit einem String aufgerufen werden, der das `id`- oder `name`-Attribut eines Elements darstellt.

## Instanzeigenschaften

- {{domxref("HTMLAllCollection.length")}} {{ReadOnlyInline}}
  - : Gibt die Anzahl der Elemente in der Sammlung zurück.

## Instanzmethoden

- {{domxref("HTMLAllCollection.item()")}}
  - : Gibt das Element zurück, das sich an der angegebenen Position in der Sammlung befindet, oder das Element mit dem angegebenen Wert für sein `id`- oder `name`-Attribut. Gibt `null` zurück, wenn kein Element gefunden wird.
- {{domxref("HTMLAllCollection.namedItem()")}}
  - : Gibt das erste [Element](/de/docs/Web/API/Element) in der Sammlung zurück, dessen [`id`](/de/docs/Web/HTML/Global_attributes/id) oder `name`-Attribut mit dem angegebenen String-Name übereinstimmt, oder `null`, wenn kein Element übereinstimmt.

## Verwendung in JavaScript

### Indizierter Zugriff

Zusätzlich zu den oben genannten Methoden können Elemente in einer `HTMLAllCollection` über ganzzahlige Indizes und String-Eigenschaftsnamen angesprochen werden. Das HTML-`id`-Attribut kann `:` und `.` als gültige Zeichen enthalten, was die Verwendung der Klammernotation für den Eigenschaftszugriff erforderlich macht. `collection[i]` ist äquivalent zu `collection.item(i)`, wobei `i` eine Ganzzahl, ein String mit einer Ganzzahl oder ein String, der eine `id` darstellt, sein kann.

### Aufruf als Funktion

Ein `HTMLAllCollection`-Objekt ist aufrufbar. Wenn es ohne Argumente oder mit `undefined` aufgerufen wird, gibt es `null` zurück. Andernfalls gibt es denselben Wert zurück wie die {{domxref("HTMLAllCollection/item", "item()")}}-Methode, wenn sie mit denselben Argumenten aufgerufen wird.

### Spezielles Typumwandlungsverhalten

Aus historischen Gründen ist `document.all` ein Objekt, das sich in den folgenden Punkten wie `undefined` verhält:

- Es ist [lose gleich](/de/docs/Web/JavaScript/Reference/Operators/Equality) zu `undefined` und `null`.
- Es ist [falsy](/de/docs/Glossary/Falsy) in booleschen Kontexten.
- Sein [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) ist `"undefined"`.

Diese speziellen Verhaltensweisen stellen sicher, dass Code wie:

```js
if (document.all) {
  // Annehmen, dass wir uns in IE befinden; spezielle Logik bereitstellen
}
// Annehmen, dass wir uns in einem modernen Browser befinden
```

auch weiterhin modernes Verhalten bietet, selbst wenn der Code in einem Browser ausgeführt wird, der `document.all` aus Kompatibilitätsgründen implementiert.

In allen anderen Kontexten bleibt `document.all` jedoch ein Objekt. Beispielsweise:

- Es ist nicht [streng gleich](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) zu `undefined` oder `null`.
- Wenn es auf der linken Seite des [nullish coalescing operator](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) (`??`) oder des [optional chaining operator](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) (`?.`) verwendet wird, wird es nicht dazu führen, dass der Ausdruck abgekürzt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLCollection")}}
