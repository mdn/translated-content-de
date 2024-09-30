---
title: "HTMLOListElement: type-Eigenschaft"
short-title: type
slug: Web/API/HTMLOListElement/type
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ApiRef("HTML DOM")}}

Die **`type`**-Eigenschaft der [`HTMLOListElement`](/de/docs/Web/API/HTMLOListElement)-Schnittstelle gibt die Art des Markers an, der verwendet werden soll, um eine geordnete Liste darzustellen.

Sie spiegelt das [`type`](/de/docs/Web/HTML/Element/ol#type)-Attribut des {{HTMLElement("ol")}}-Elements wider.

> [!NOTE]
> Der `type` kann in CSS mit der {{CSSxRef("list-style-type")}}-Eigenschaft definiert werden. Die `list-style-type`-Eigenschaft bietet viele weitere Werte.

## Wert

Ein String, der den Typ darstellt.

Die möglichen Werte sind im Abschnitt Attribut [markertypes](/de/docs/Web/HTML/Element/ol#type) aufgeführt.

## Beispiele

### HTML

```html
<ol id="order-list">
  <li>Fee</li>
  <li>Fi</li>
  <li>Fo</li>
  <li>Fum</li>
</ol>
```

### JavaScript

```js
const olElement = document.querySelector("#order-list");
// if type is not specified then return empty string
console.log(olElement.type); // Output: ""
olElement.type = "i"; // Using roman numeral type
console.log(olElement.type); // Output: "i"
```

### Ergebnis

{{EmbedLiveSample("Examples", 400, 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
