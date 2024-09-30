---
title: "HTMLCollection: namedItem()-Methode"
short-title: namedItem()
slug: Web/API/HTMLCollection/namedItem
l10n:
  sourceCommit: 13a3c24f682c409e713c2312b44ae6990bad3169
---

{{APIRef("DOM")}}

Die **`namedItem()`**-Methode der [`HTMLCollection`](/de/docs/Web/API/HTMLCollection)-Schnittstelle gibt das erste [`Element`](/de/docs/Web/API/Element) in der Sammlung zurück, dessen `id`- oder `name`-Attribut mit dem angegebenen Namen übereinstimmt, oder `null`, wenn kein Element übereinstimmt.

In JavaScript können Sie anstelle von `collection.namedItem("value")` auch direkt auf den Namen in der Sammlung zugreifen, wie `collection["value"]`, es sei denn, der Name kollidiert mit einer der bestehenden `HTMLCollection`-Eigenschaften.

## Syntax

```js-nolint
namedItem(key)
```

### Parameter

- `key`
  - : Ein String, der den Wert des `id`- oder `name`-Attributs des gesuchten Elements darstellt.

### Rückgabewert

Das erste [`Element`](/de/docs/Web/API/Element) in der [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), das mit `key` übereinstimmt, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn kein solches Element vorhanden ist. Gibt immer `null` zurück, wenn `key` der leere String ist.

## Beispiel

### HTML

```html
<div id="personal">
  <span name="title">Dr.</span>
  <span name="firstname">Carina</span>
  <span name="lastname">Anand</span>
  <span id="degree">(MD)</span>
</div>
```

### JavaScript

```js
const container = document.getElementById("personal");

// Returns the HTMLSpanElement with the name "title" if no such element exists null is returned
const titleSpan = container.children.namedItem("title");

// The following variants return undefined instead of null if there's no element with a matching name or id
const firstnameSpan = container.children["firstname"];
const lastnameSpan = container.children.lastname;

// Returns the span element with the id "degree"
const degreeSpan = container.children.namedItem("degree");

const output = document.createElement("div");
output.textContent = `Result: ${titleSpan.textContent} ${firstnameSpan.textContent} ${lastnameSpan.textContent} ${degreeSpan.textContent}`;

container.insertAdjacentElement("afterend", output);
```

{{EmbedLiveSample("Example")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
