---
title: "HTMLOListElement: type-Eigenschaft"
short-title: type
slug: Web/API/HTMLOListElement/type
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("HTML DOM")}}

Die **`type`**-Eigenschaft der [`HTMLOListElement`](/de/docs/Web/API/HTMLOListElement)-Schnittstelle gibt die Art des Markers an, der zum Anzeigen der geordneten Liste verwendet werden soll.

Sie spiegelt das [`type`](/de/docs/Web/HTML/Reference/Elements/ol#type)-Attribut des {{HTMLElement("ol")}}-Elements wider.

> [!NOTE]
> Der `type` kann in CSS mit der {{CSSxRef("list-style-type")}}-Eigenschaft definiert werden. Die `list-style-type`-Eigenschaft bietet viele weitere Werte.

## Wert

Ein String, der den Typ repräsentiert.

Die möglichen Werte sind im Abschnitt [Marker-Typen](/de/docs/Web/HTML/Reference/Elements/ol#type) des Attributs aufgelistet.

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
