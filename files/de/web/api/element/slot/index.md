---
title: "Element: slot-Eigenschaft"
short-title: slot
slug: Web/API/Element/slot
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Shadow DOM")}}

Die **`slot`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle gibt den Namen des Shadow-DOM-Slots zurück, in den das Element eingefügt wird.

Ein Slot ist ein Platzhalter innerhalb einer [Web-Komponente](/de/docs/Web/API/Web_components), den Benutzer mit ihrem eigenen Markup füllen können (siehe [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots) für weitere Informationen).

## Wert

Ein String.

## Beispiele

In unserem [simple-template Beispiel](https://github.com/mdn/web-components-examples/tree/main/simple-template) ([live ansehen](https://mdn.github.io/web-components-examples/simple-template/)) erstellen wir ein triviales benutzerdefiniertes Elementbeispiel namens `<my-paragraph>`, in dem ein Shadow-Root angehängt und dann mit den Inhalten eines Templates, das einen Slot namens `my-text` enthält, gefüllt wird.

Wenn `<my-paragraph>` im Dokument verwendet wird, wird der Slot durch ein zu beschlottendes Element gefüllt, indem es innerhalb des Elements mit einem [`slot`](/de/docs/Web/HTML/Reference/Global_attributes/slot)-Attribut mit dem Wert `my-text` eingefügt wird. Hier ist ein solches Beispiel:

```html
<my-paragraph>
  <span slot="my-text">Let's have some different text!</span>
</my-paragraph>
```

In unserer JavaScript-Datei erhalten wir eine Referenz auf das oben gezeigte {{htmlelement("span")}}, und dann protokollieren wir eine Referenz auf den Namen des entsprechenden `<slot>`-Elements.

```js
let slottedSpan = document.querySelector("my-paragraph span");
console.log(slottedSpan.slot); // logs 'my-text'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
