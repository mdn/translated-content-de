---
title: "Element: slot-Eigenschaft"
short-title: slot
slug: Web/API/Element/slot
l10n:
  sourceCommit: ac2874857a3de0be38430e58068597edf0afa2b2
---

{{APIRef("Shadow DOM")}}

Die **`slot`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces
gibt den Namen des Shadow DOM-Slots zurück, in den das Element eingefügt ist.

Ein Slot ist ein Platzhalter innerhalb eines [Web-Komponenten](/de/docs/Web/API/Web_components), den Benutzer mit eigenem Markup füllen können (siehe [Verwendung von Vorlagen und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots) für weitere Informationen).

## Wert

Ein String.

## Beispiele

In unserem [simple-template Beispiel](https://github.com/mdn/web-components-examples/tree/main/simple-template) ([siehe es live](https://mdn.github.io/web-components-examples/simple-template/)), erstellen wir ein triviales benutzerdefiniertes Elementbeispiel namens
`<my-paragraph>`, in dem ein Shadow-Root angehängt und dann
mit dem Inhalt einer Vorlage gefüllt wird, die einen Slot mit dem Namen `my-text` enthält.

Wenn `<my-paragraph>` im Dokument verwendet wird, wird der Slot
durch ein einbettbares Element gefüllt, indem es innerhalb des Elements mit einem
[`slot`](/de/docs/Web/HTML/Global_attributes/slot)-Attribut
mit dem Wert `my-text` eingefügt wird. Hier ist ein solches Beispiel:

```html
<my-paragraph>
  <span slot="my-text">Let's have some different text!</span>
</my-paragraph>
```

In unserer JavaScript-Datei erhalten wir eine Referenz zum oben gezeigten {{htmlelement("span")}},
dann protokollieren wir eine Referenz auf den Namen des entsprechenden `<slot>`-Elements.

```js
let slottedSpan = document.querySelector("my-paragraph span");
console.log(slottedSpan.slot); // logs 'my-text'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
