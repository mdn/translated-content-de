---
title: "ElementInternals: labels-Eigenschaft"
short-title: labels
slug: Web/API/ElementInternals/labels
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

Die schreibgeschützte **`labels`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle gibt die mit dem Element verknüpften Labels zurück.

## Wert

Ein [`NodeList`](/de/docs/Web/API/NodeList), das alle mit diesem Element verknüpften `label`-Elemente enthält.

## Beispiele

Das folgende Beispiel zeigt eine benutzerdefinierte Checkbox-Komponente mit einem {{HTMLElement("label")}}-Element, das mit ihr verknüpft ist. Das Drucken des Wertes von `labels` auf die Konsole gibt ein [`NodeList`](/de/docs/Web/API/NodeList) mit einem Eintrag zurück, der dieses Label repräsentiert.

```html
<form id="myForm">
  <custom-checkbox id="custom-checkbox"></custom-checkbox>
  <label for="custom-checkbox">Join newsletter</label>
</form>
```

```js
let element = document.getElementById("custom-checkbox");
console.log(element.internals_.label);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
