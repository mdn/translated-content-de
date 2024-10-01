---
title: HTMLAllCollection
slug: Web/API/HTMLAllCollection
l10n:
  sourceCommit: e8e22a6e6d6455222c8c1a1e1346a149d300ab35
---

{{APIRef("DOM")}}{{Deprecated_Header}}

Die **`HTMLAllCollection`**-Schnittstelle repräsentiert eine Sammlung aller Elemente des Dokuments, die nach Index (wie ein Array) und über das [`id`](/de/docs/Web/HTML/Global_attributes/id) eines Elements zugänglich ist. Sie wird von der Eigenschaft [`document.all`](/de/docs/Web/API/Document/all) zurückgegeben.

`HTMLAllCollection` hat eine sehr ähnliche Struktur wie [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), aber es gibt viele subtile Verhaltensunterschiede – zum Beispiel kann `HTMLAllCollection` als Funktion aufgerufen werden, und ihre Methode `item()` kann mit einem String aufgerufen werden, der ein Element-`id`- oder `name`-Attribut repräsentiert.

## Instanzeigenschaften

- [`HTMLAllCollection.length`](/de/docs/Web/API/HTMLAllCollection/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Elemente in der Sammlung zurück.

## Instanzmethoden

- [`HTMLAllCollection.item()`](/de/docs/Web/API/HTMLAllCollection/item)
  - : Gibt das Element zurück, das an dem angegebenen Index in der Sammlung positioniert ist, oder das Element mit dem angegebenen Wert für sein `id`- oder `name`-Attribut. Gibt `null` zurück, wenn kein Element gefunden wird.
- [`HTMLAllCollection.namedItem()`](/de/docs/Web/API/HTMLAllCollection/namedItem)
  - : Gibt das erste [Element](/de/docs/Web/API/Element) in der Sammlung zurück, dessen [`id`](/de/docs/Web/HTML/Global_attributes/id) oder `name`-Attribut mit dem gegebenen String-Namen übereinstimmt, oder `null`, wenn kein Element übereinstimmt.

## Verwendung in JavaScript

### Indizierter Zugriff

Zusätzlich zu den oben genannten Methoden können Elemente in einer `HTMLAllCollection` durch Ganzzahl-Indizes und Zeichenfolgeneigenschaften zugänglich gemacht werden. Das HTML-`id`-Attribut kann `:` und `.` als gültige Zeichen enthalten, was den Einsatz von Klammernotation zur Eigenschaftszugriff erforderlich macht. `collection[i]` entspricht `collection.item(i)`, wobei `i` eine Ganzzahl, eine Zeichenkette, die eine Ganzzahl enthält, oder eine Zeichenkette, die ein `id` darstellt, sein kann.

### Aufruf als Funktion

Ein `HTMLAllCollection`-Objekt ist aufrufbar. Wenn es ohne Argumente oder mit `undefined` aufgerufen wird, gibt es `null` zurück. Ansonsten gibt es denselben Wert wie die Methode [`item()`](/de/docs/Web/API/HTMLAllCollection/item) bei denselben Argumenten zurück.

### Spezielles Typumwandlungsverhalten

Aus historischen Gründen ist `document.all` ein Objekt, das auf folgende Weise wie `undefined` agiert:

- Es ist [lose gleich](/de/docs/Web/JavaScript/Reference/Operators/Equality) zu `undefined` und `null`.
- Es ist {{Glossary("Falsy", "falsch")}} in booleschen Kontexten.
- Sein [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) ist `"undefined"`.

Diese speziellen Verhaltensweisen stellen sicher, dass Code wie:

```js
if (document.all) {
  // Assume that we are in IE; provide special logic
}
// Assume that we are in a modern browser
```

auch modernes Verhalten bietet, wenn er in einem Browser ausgeführt wird, der `document.all` aus Kompatibilitätsgründen implementiert.

In allen anderen Kontexten bleibt `document.all` jedoch ein Objekt. Zum Beispiel:

- Es ist nicht [streng gleich](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) zu `undefined` oder `null`.
- Wenn es auf der linken Seite des [Nullish Coalescing Operators](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) (`??`) oder des [Optionale Kettenoperator](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) (`?.`) verwendet wird, wird es nicht dazu führen, dass der Ausdruck kurzschließt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)
