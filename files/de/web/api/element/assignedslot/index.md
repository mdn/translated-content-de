---
title: "Element: assignedSlot-Eigenschaft"
short-title: assignedSlot
slug: Web/API/Element/assignedSlot
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Shadow DOM")}}

Die schreibgeschützte **`assignedSlot`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle gibt ein [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) zurück, das das {{htmlelement("slot")}}-Element darstellt, in das der Knoten eingefügt wurde.

## Wert

Eine Instanz von [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) oder `null`, wenn das Element keinem Slot zugewiesen ist oder wenn die zugehörige Schattenwurzel mit ihrem [`mode`](/de/docs/Web/API/ShadowRoot/mode) auf `closed` gesetzt angefügt wurde (siehe [`Element.attachShadow`](/de/docs/Web/API/Element/attachShadow) für weitere Details).

## Beispiele

In unserem [Beispiel eines einfachen Templates](https://github.com/mdn/web-components-examples/tree/main/simple-template) ([live ansehen](https://mdn.github.io/web-components-examples/simple-template/)) erstellen wir ein triviales benutzerdefiniertes Element namens `<my-paragraph>`, bei dem eine Schattenwurzel angefügt und dann mit den Inhalten eines Templates gefüllt wird, das einen Slot namens `my-text` enthält.

Wenn `<my-paragraph>` im Dokument verwendet wird, wird der Slot durch ein einsatzfähiges Element gefüllt, indem es innerhalb des Elements mit einem [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)-Attribut mit dem Wert `my-text` eingefügt wird. Hier ist ein solches Beispiel:

```html
<my-paragraph>
  <span slot="my-text">Let's have some different text!</span>
</my-paragraph>
```

In unserer JavaScript-Datei holen wir uns eine Referenz zu dem oben gezeigten {{htmlelement("span")}}, dann protokollieren wir eine Referenz zu dem ursprünglichen `<slot>`-Element, in das das `<span>` eingefügt wurde.

```js
let slottedSpan = document.querySelector("my-paragraph span");
console.log(slottedSpan.assignedSlot); // logs '<slot name="my-text">'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
