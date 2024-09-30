---
title: "SVGGraphicsElement: copy event"
short-title: copy
slug: Web/API/SVGGraphicsElement/copy_event
l10n:
  sourceCommit: 511b483843fa33373dd26eabc28beee59b995d01
---

{{APIRef("SVG")}}

Das **`copy`**-Ereignis wird auf [`SVGGraphicsElements`](/de/docs/Web/API/SVGGraphicsElement) ausgelöst, wenn der Benutzer eine Kopieraktion über die Benutzeroberfläche des Browsers initiiert.

Die Standardaktion des Ereignisses besteht darin, die Auswahl (falls vorhanden) in die Zwischenablage zu kopieren.

Ein Handler für dieses Ereignis kann den Inhalt der Zwischenablage _ändern_, indem er [`setData(format, data)`](/de/docs/Web/API/DataTransfer/setData) auf der [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData)-Eigenschaft des Ereignisses aufruft und die Standardaktion des Ereignisses mit [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbricht.

Der Handler kann jedoch die Daten der Zwischenablage nicht _lesen_.

Es ist möglich, ein [synthetisches](/de/docs/Web/Events/Creating_and_triggering_events) `copy`-Ereignis zu konstruieren und auszulösen, aber dies wird die Systemzwischenablage nicht beeinflussen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("copy", (event) => {});

oncopy = (event) => {};
```

## Ereignistyp

Ein [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ClipboardEvent")}}

## Beispiel

### HTML

```html
<?xml version="1.0" encoding="UTF-8"?>
<svg
  viewBox="0 0 100 30"
  width="600"
  height="320"
  xmlns="http://www.w3.org/2000/svg">
  <text x="5" y="10" id="text-to-copy">Copy this text</text>
  <foreignObject x="5" y="20" width="90" height="20">
    <input xmlns="http://www.w3.org/1999/xhtml" placeholder="Paste it here" />
  </foreignObject>
</svg>
```

### CSS

```css
input {
  font-size: 10px;
  width: 100%;
  height: 90%;
  box-sizing: border-box;
  border: 1px solid black;
}
```

### JavaScript

```js
document.querySelector("text").addEventListener("copy", (evt) => {
  evt.clipboardData.setData(
    "text/plain",
    document.getSelection().toString().toUpperCase(),
  );
  evt.preventDefault();
});
```

### Ergebnis

{{EmbedLiveSample("Example", "620", "340")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`cut`](/de/docs/Web/API/SVGGraphicsElement/cut_event), [`paste`](/de/docs/Web/API/SVGGraphicsElement/paste_event)
- Dieses Ereignis bei HTML-Elementen: [`copy`](/de/docs/Web/API/Element/copy_event)
- Dieses Ereignis bei [`Document`](/de/docs/Web/API/Document)-Zielen: [`copy`](/de/docs/Web/API/Document/copy_event)
- Dieses Ereignis bei [`Window`](/de/docs/Web/API/Window)-Zielen: [`copy`](/de/docs/Web/API/Window/copy_event)
