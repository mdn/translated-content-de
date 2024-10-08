---
title: "Element: assignedSlot-Eigenschaft"
short-title: assignedSlot
slug: Web/API/Element/assignedSlot
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("Shadow DOM")}}

Die **`assignedSlot`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces ist schreibgeschützt und gibt ein [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) zurück, das das {{htmlelement("slot")}}-Element darstellt, in dem der Knoten eingefügt ist.

## Wert

Eine Instanz von [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) oder `null`, falls das Element keinem Slot zugewiesen ist oder wenn die zugehörige Shadow-Root mit ihrem [`mode`](/de/docs/Web/API/ShadowRoot/mode) auf `closed` gesetzt angehängt wurde (siehe [`Element.attachShadow`](/de/docs/Web/API/Element/attachShadow) für weitere Details).

## Beispiele

In unserem [simple-template Beispiel](https://github.com/mdn/web-components-examples/tree/main/simple-template) ([live ansehen](https://mdn.github.io/web-components-examples/simple-template/)) erstellen wir ein triviales benutzerdefiniertes Element-Beispiel namens `<my-paragraph>`, bei dem eine Shadow-Root angehängt und dann mit den Inhalten einer Vorlage gefüllt wird, die einen Slot namens `my-text` enthält.

Wenn `<my-paragraph>` im Dokument verwendet wird, wird der Slot durch ein Slottable-Element gefüllt, indem es innerhalb des Elements mit einem [`slot`](/de/docs/Web/HTML/Global_attributes/slot)-Attribut mit dem Wert `my-text` eingefügt wird. Hier ist ein solches Beispiel:

```html
<my-paragraph>
  <span slot="my-text">Let's have some different text!</span>
</my-paragraph>
```

In unserer JavaScript-Datei erhalten wir eine Referenz zu dem oben gezeigten {{htmlelement("span")}} und protokollieren dann eine Referenz zu dem ursprünglichen `<slot>`-Element, in das das `<span>` eingefügt wurde.

```js
let slottedSpan = document.querySelector("my-paragraph span");
console.log(slottedSpan.assignedSlot); // logs '<slot name="my-text">'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
