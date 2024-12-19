---
title: "SVGElement: dataset-Eigenschaft"
short-title: dataset
slug: Web/API/SVGElement/dataset
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("SVG")}}

Die **`dataset`** Nur-Lese-Eigenschaft der [`SVGElement`](/de/docs/Web/API/SVGElement)-Schnittstelle bietet Lese-/Schreibzugriff auf [benutzerdefinierte Datenattribute](/de/docs/Web/SVG/Attribute/data-*) (`data-*`) von Elementen. Sie gibt eine Zuordnung von Strings ([`DOMStringMap`](/de/docs/Web/API/DOMStringMap)) mit einem Eintrag für jedes `data-*` Attribut zurück.

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

- [`data-*`](/de/docs/Web/SVG/Attribute/data-*) SVG-Attribute
- [Verwendung von Datenattributen](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes)
