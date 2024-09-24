---
title: "SVGGraphicsElement: Kopieren-Ereignis"
short-title: Kopieren
slug: Web/API/SVGGraphicsElement/copy_event
l10n:
  sourceCommit: 511b483843fa33373dd26eabc28beee59b995d01
---

{{APIRef("SVG")}}

Das **`copy`**-Ereignis wird auf {{domxref("SVGGraphicsElement", "SVGGraphicsElements")}} ausgelöst, wenn der Benutzer über die Benutzeroberfläche des Browsers eine Kopieraktion initiiert.

Die Standardaktion des Ereignisses besteht darin, die Auswahl (falls vorhanden) in die Zwischenablage zu kopieren.

Ein Ereignishandler kann den Inhalt der Zwischenablage _verändern_, indem er {{domxref("DataTransfer.setData", "setData(format, data)")}} auf der {{domxref("ClipboardEvent.clipboardData")}}-Eigenschaft des Ereignisses aufruft und die Standardaktion des Ereignisses mit [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbricht.

Der Handler kann jedoch nicht die Daten der Zwischenablage _lesen_.

Es ist möglich, ein [synthetisches](/de/docs/Web/Events/Creating_and_triggering_events) `copy`-Ereignis zu erzeugen und auszulösen, aber dies hat keine Auswirkungen auf die Systemzwischenablage.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("copy", (event) => {});

oncopy = (event) => {};
```

## Ereignistyp

Ein {{domxref("ClipboardEvent")}}. Erbt von {{domxref("Event")}}.

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
- Dieses Ereignis auf HTML-{{domxref("Element")}}-Zielen: [`copy`](/de/docs/Web/API/Element/copy_event)
- Dieses Ereignis auf {{domxref("Document")}}-Zielen: [`copy`](/de/docs/Web/API/Document/copy_event)
- Dieses Ereignis auf {{domxref("Window")}}-Zielen: [`copy`](/de/docs/Web/API/Window/copy_event)
