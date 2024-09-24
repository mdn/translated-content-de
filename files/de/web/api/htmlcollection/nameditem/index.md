---
title: "HTMLCollection: namedItem()-Methode"
short-title: namedItem()
slug: Web/API/HTMLCollection/namedItem
l10n:
  sourceCommit: 13a3c24f682c409e713c2312b44ae6990bad3169
---

{{APIRef("DOM")}}

Die **`namedItem()`**-Methode der {{domxref("HTMLCollection")}}-Schnittstelle gibt das erste {{domxref("Element")}} in der Sammlung zurück, dessen `id`- oder `name`-Attribut mit dem angegebenen Namen übereinstimmt, oder `null`, wenn kein Element übereinstimmt.

In JavaScript können Sie anstelle von `collection.namedItem("value")` auch direkt auf den Namen in der Sammlung zugreifen, wie `collection["value"]`, es sei denn, der Name kollidiert mit einer der bestehenden `HTMLCollection`-Eigenschaften.

## Syntax

```js-nolint
namedItem(key)
```

### Parameter

- `key`
  - : Ein String, der den Wert des `id`- oder `name`-Attributs des Elements darstellt, das wir suchen.

### Rückgabewert

Das erste {{domxref("Element")}} in der {{domxref("HTMLCollection")}}, das dem `key` entspricht, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn keines vorhanden ist. Gibt immer `null` zurück, wenn `key` die leere Zeichenkette ist.

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

// Gibt das HTMLSpanElement mit dem Namen "title" zurück, wenn kein solches Element existiert, wird null zurückgegeben
const titleSpan = container.children.namedItem("title");

// Die folgenden Varianten geben undefined statt null zurück, wenn kein Element mit einem übereinstimmenden Namen oder id vorhanden ist
const firstnameSpan = container.children["firstname"];
const lastnameSpan = container.children.lastname;

// Gibt das span-Element mit der id "degree" zurück
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
