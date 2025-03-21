---
title: "SVGElement: dataset-Eigenschaft"
short-title: dataset
slug: Web/API/SVGElement/dataset
l10n:
  sourceCommit: 19c64b411b90f999565db9fdb815463ba66c9714
---

{{APIRef("SVG")}}

Die schreibgeschützte **`dataset`**-Eigenschaft der [`SVGElement`](/de/docs/Web/API/SVGElement)-Schnittstelle ermöglicht Lese-/Schreibzugriff auf [benutzerdefinierte Datenattribute](/de/docs/Web/SVG/Reference/Attribute/data-*) (`data-*`) von Elementen. Sie stellt eine Abbildung von Zeichenfolgen ([`DOMStringMap`](/de/docs/Web/API/DOMStringMap)) bereit, die einen Eintrag für jedes `data-*`-Attribut enthält.

Weitere Informationen zum Verhalten von `dataset` finden Sie unter [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset).

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
- [Verwendung von Datenattributen](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes)
