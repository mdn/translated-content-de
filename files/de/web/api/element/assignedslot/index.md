---
title: "Element: assignedSlot-Eigenschaft"
short-title: assignedSlot
slug: Web/API/Element/assignedSlot
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("Shadow DOM")}}

Die **`assignedSlot`** schreibgeschützte Eigenschaft der {{domxref("Element")}}-Schnittstelle gibt ein {{domxref("HTMLSlotElement")}} zurück, welches das {{htmlelement("slot")}}-Element darstellt, in das der Knoten eingefügt wurde.

## Wert

Eine Instanz von {{domxref('HTMLSlotElement')}}, oder `null`, wenn das Element keinem Slot zugewiesen ist oder wenn der zugehörige Shadow-Root mit seinem {{domxref("ShadowRoot.mode", "mode")}} auf `closed` gesetzt angehängt wurde (siehe {{domxref("Element.attachShadow")}} für weitere Details).

## Beispiele

In unserem [simple-template-Beispiel](https://github.com/mdn/web-components-examples/tree/main/simple-template) ([sehen Sie es live](https://mdn.github.io/web-components-examples/simple-template/)), erstellen wir ein triviales benutzerdefiniertes Elemente-Beispiel namens `<my-paragraph>`, in dem ein Shadow-Root angehängt und anschließend mit dem Inhalt einer Vorlage gefüllt wird, die einen Slot namens `my-text` enthält.

Wenn `<my-paragraph>` im Dokument verwendet wird, wird der Slot von einem belegbaren Element gefüllt, indem es innerhalb des Elements mit einem [`slot`](/de/docs/Web/HTML/Global_attributes/slot)-Attribut mit dem Wert `my-text` eingeschlossen wird. Hier ist ein solches Beispiel:

```html
<my-paragraph>
  <span slot="my-text">Let's have some different text!</span>
</my-paragraph>
```

In unserer JavaScript-Datei erhalten wir eine Referenz auf das oben gezeigte {{htmlelement("span")}} und protokollieren dann eine Referenz auf das ursprüngliche `<slot>`-Element, in das das `<span>` eingefügt wurde.

```js
let slottedSpan = document.querySelector("my-paragraph span");
console.log(slottedSpan.assignedSlot); // logs '<slot name="my-text">'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
