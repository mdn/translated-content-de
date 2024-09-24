---
title: "ElementInternals: labels-Eigenschaft"
short-title: labels
slug: Web/API/ElementInternals/labels
l10n:
  sourceCommit: ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{APIRef("Web Components")}}

Die schreibgeschützte Eigenschaft **`labels`** des {{domxref("ElementInternals")}}-Interfaces liefert die mit dem Element verbundenen Labels.

## Wert

Eine {{domxref("NodeList")}}, die alle mit diesem Element verbundenen Label-Elemente enthält.

## Beispiele

Das folgende Beispiel zeigt eine benutzerdefinierte Checkbox-Komponente mit einem {{HTMLElement("label")}}-Element, das damit verbunden ist. Das Ausdrucken des Wertes von `labels` in der Konsole gibt eine {{domxref("NodeList")}} mit einem Eintrag zurück, die dieses Label darstellt.

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
