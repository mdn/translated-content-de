---
title: "ElementInternals: labels-Eigenschaft"
short-title: labels
slug: Web/API/ElementInternals/labels
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

Die **`labels`** schreibgeschützte Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle gibt die mit dem Element verbundenen Labels zurück.

## Wert

Ein [`NodeList`](/de/docs/Web/API/NodeList), die alle der mit diesem Element verbundenen Label-Elemente enthält.

## Beispiele

Das folgende Beispiel zeigt eine benutzerdefinierte Checkbox-Komponente mit einem {{HTMLElement("label")}}-Element, das damit verknüpft ist.
Das Ausgeben des Werts von `labels` in der Konsole gibt eine [`NodeList`](/de/docs/Web/API/NodeList) mit einem Eintrag zurück, der dieses Label darstellt.

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
