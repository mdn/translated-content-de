---
title: "SVGElement: dataset-Eigenschaft"
short-title: dataset
slug: Web/API/SVGElement/dataset
l10n:
  sourceCommit: 335dda2e9a42f5e9257ee398437cd984f6cabb45
---

{{APIRef("SVG")}}

Die **`dataset`**-Eigenschaft des {{DOMxRef("SVGElement")}}-Interfaces gewährt schreibgeschützten Zugriff auf [benutzerdefinierte Datenattribute](/de/docs/Web/SVG/Attribute/data-*) (`data-*`) von Elementen. Sie stellt eine Zeichenfolgenkarte ({{domxref("DOMStringMap")}}) mit einem Eintrag für jedes `data-*`-Attribut bereit.

Für weitere Informationen zum Verhalten von `dataset` siehe {{domxref("HTMLElement.dataset")}}.

## Wert

Eine {{domxref("DOMStringMap")}}.

## Beispiele

```html
<div>
  <svg viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
    <text x="20" y="20" id="user" data-id="1234567890" data-user="carinaanand">
      Carina Anand
    </text>
  </svg>
</div>
```

```js
const el = document.querySelector("#user");

console.log(el.dataset.id); // "1234567890"
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [`data-*`](/de/docs/Web/SVG/Attribute/data-*) SVG-Attribute
- [Verwendung von Datenattributen](/de/docs/Learn/HTML/Howto/Use_data_attributes)
