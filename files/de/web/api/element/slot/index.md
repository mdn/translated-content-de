---
title: "Element: slot-Eigenschaft"
short-title: slot
slug: Web/API/Element/slot
l10n:
  sourceCommit: ac2874857a3de0be38430e58068597edf0afa2b2
---

{{APIRef("Shadow DOM")}}

Die **`slot`**-Eigenschaft der {{domxref("Element")}}-Schnittstelle gibt den Namen des Shadow-DOM-Slots zurück, in dem das Element eingefügt ist.

Ein Slot ist ein Platzhalter innerhalb eines [Web Components](/de/docs/Web/API/Web_components), den Benutzer mit ihrem eigenen Markup füllen können (siehe [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots) für weitere Informationen).

## Wert

Ein String.

## Beispiele

In unserem [simple-template Beispiel](https://github.com/mdn/web-components-examples/tree/main/simple-template) ([live ansehen](https://mdn.github.io/web-components-examples/simple-template/)), erstellen wir ein triviales Beispiel eines benutzerdefinierten Elements namens `<my-paragraph>`, bei dem ein Shadow Root angehängt und dann mit dem Inhalt eines Templates gefüllt wird, das einen Slot mit dem Namen `my-text` enthält.

Wenn `<my-paragraph>` im Dokument verwendet wird, wird der Slot durch ein slottables Element gefüllt, indem es innerhalb des Elements mit einem [`slot`](/en-US/docs/Web/HTML/Global_attributes/slot) Attribut mit dem Wert `my-text` eingefügt wird. Hier ist ein solches Beispiel:

```html
<my-paragraph>
  <span slot="my-text">Let's have some different text!</span>
</my-paragraph>
```

In unserer JavaScript-Datei erhalten wir eine Referenz zu dem oben gezeigten {{htmlelement("span")}}, und dann protokollieren wir eine Referenz zum Namen des entsprechenden `<slot>`-Elements.

```js
let slottedSpan = document.querySelector("my-paragraph span");
console.log(slottedSpan.slot); // logs 'my-text'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
