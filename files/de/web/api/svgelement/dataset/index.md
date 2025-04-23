---
title: "SVGElement: dataset-Eigenschaft"
short-title: dataset
slug: Web/API/SVGElement/dataset
l10n:
  sourceCommit: cd701f10306c8b0b9690532ff808df826818a04f
---

{{APIRef("SVG")}}

Die **`dataset`** schreibgeschützte Eigenschaft des [`SVGElement`](/de/docs/Web/API/SVGElement)-Interfaces bietet Lese-/Schreibzugriff auf [benutzerdefinierte Datenattribute](/de/docs/Web/SVG/Reference/Attribute/data-*) (`data-*`) auf Elementen. Es stellt eine Zuordnung von Strings (`[`DOMStringMap`](/de/docs/Web/API/DOMStringMap)`) bereit, mit einem Eintrag für jedes `data-*`-Attribut.

Für weitere Informationen über das Verhalten von `dataset`, siehe [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset).

## Wert

Eine [`DOMStringMap`](/de/docs/Web/API/DOMStringMap).

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`data-*`](/de/docs/Web/SVG/Reference/Attribute/data-*) SVG-Attribute
- [Verwendung von Datenattributen](/de/docs/Web/HTML/How_to/Use_data_attributes)
