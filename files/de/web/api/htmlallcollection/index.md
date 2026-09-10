---
title: HTMLAllCollection
slug: Web/API/HTMLAllCollection
l10n:
  sourceCommit: 32ba792708c61221f9ddf725c0a52dba573414bc
---

{{APIRef("DOM")}}

Die Schnittstelle **`HTMLAllCollection`** repräsentiert eine Sammlung _aller_ Elemente des Dokuments, auf die per Index (wie bei einem Array) und über die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des Elements zugegriffen werden kann. Sie wird von der Eigenschaft [`document.all`](/de/docs/Web/API/Document/all) zurückgegeben.

`HTMLAllCollection` hat eine sehr ähnliche Struktur wie [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), es gibt jedoch viele subtile Verhaltensunterschiede — beispielsweise kann `HTMLAllCollection` als Funktion aufgerufen werden, und seine Methode `item()` kann mit einem String aufgerufen werden, der das Attribut `id` oder `name` eines Elements repräsentiert.

## Instanzeigenschaften

- [`HTMLAllCollection.length`](/de/docs/Web/API/HTMLAllCollection/length) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt die Anzahl der Elemente in der Sammlung zurück.

## Instanzmethoden

- [`HTMLAllCollection.item()`](/de/docs/Web/API/HTMLAllCollection/item) {{deprecated_inline}}
  - : Gibt das Element an der angegebenen Position in der Sammlung oder das Element mit dem angegebenen Wert für sein Attribut `id` oder `name` zurück. Gibt `null` zurück, wenn kein Element gefunden wird.
- [`HTMLAllCollection.namedItem()`](/de/docs/Web/API/HTMLAllCollection/namedItem) {{deprecated_inline}}
  - : Gibt das erste [Element](/de/docs/Web/API/Element) in der Sammlung zurück, dessen Attribut [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) oder `name` mit dem angegebenen Stringnamen übereinstimmt, oder `null`, wenn kein Element übereinstimmt.

## Verwendung in JavaScript

### Indizierter Zugriff

Zusätzlich zu den oben genannten Methoden kann auf Elemente in einer `HTMLAllCollection` über Ganzzahlindizes und String-Eigenschaftsnamen zugegriffen werden. Das HTML-Attribut `id` darf `:` und `.` als gültige Zeichen enthalten, wodurch für den Eigenschaftszugriff die Klammerschreibweise erforderlich sein kann. `collection[i]` entspricht `collection.item(i)`, wobei `i` eine Ganzzahl, ein String mit einer Ganzzahl oder ein String sein kann, der eine `id` repräsentiert.

### Aufruf als Funktion

Ein `HTMLAllCollection`-Objekt ist aufrufbar. Wenn es ohne Argumente oder mit `undefined` aufgerufen wird, gibt es `null` zurück. Andernfalls gibt es denselben Wert zurück wie die Methode [`item()`](/de/docs/Web/API/HTMLAllCollection/item), wenn sie mit denselben Argumenten aufgerufen wird.

### Besonderes Verhalten bei der Typkonvertierung

Aus historischen Gründen ist `document.all` ein Objekt, das sich auf folgende Weise wie `undefined` verhält:

- Es ist [nicht strikt gleich](/de/docs/Web/JavaScript/Reference/Operators/Equality) `undefined` und `null`.
- Es ist in booleschen Kontexten {{Glossary("Falsy", "falsy")}}.
- Sein [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) ist `"undefined"`.

Diese besonderen Verhaltensweisen stellen sicher, dass Code wie folgender:

```js
if (document.all) {
  // Assume that we are in IE; provide special logic
}
// Assume that we are in a modern browser
```

Auch dann weiterhin modernes Verhalten bietet, wenn der Code in einem Browser ausgeführt wird, der `document.all` aus Kompatibilitätsgründen implementiert.

In allen anderen Kontexten bleibt `document.all` jedoch ein Objekt. Zum Beispiel:

- Es ist weder `undefined` noch `null` [strikt gleich](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality).
- Wenn es auf der linken Seite des [Nullish-Coalescing-Operators](/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) (`??`) oder des [Optional-Chaining-Operators](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) (`?.`) verwendet wird, führt es nicht dazu, dass der Ausdruck frühzeitig abbricht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)
