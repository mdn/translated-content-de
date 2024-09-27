---
title: "SVGGraphicsElement: paste Ereignis"
short-title: paste
slug: Web/API/SVGGraphicsElement/paste_event
l10n:
  sourceCommit: 511b483843fa33373dd26eabc28beee59b995d01
---

{{APIRef("SVG")}}

Das **`paste`** Ereignis wird auf einem [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement) ausgelöst, wenn der Benutzer über die Benutzeroberfläche des Browsers eine "Einfügen"-Aktion initiiert hat.

Wenn sich der Cursor in einem editierbaren Kontext befindet (zum Beispiel in einem {{HTMLElement("textarea")}} oder einem Element mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut auf `true` gesetzt), ist die Standardaktion, den Inhalt der Zwischenablage an der Cursorposition ins Dokument einzufügen.

Ein Handler für dieses Ereignis kann auf den Inhalt der Zwischenablage zugreifen, indem er [`getData()`](/de/docs/Web/API/DataTransfer/getData) auf der `clipboardData`-Eigenschaft des Ereignisses aufruft.

Um das Standardverhalten zu überschreiben (zum Beispiel, um andere Daten oder eine Transformation der Zwischenablageinhalte einzufügen), muss ein Ereignishandler die Standardaktion mit [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbrechen und dann die gewünschten Daten manuell einfügen.

Es ist möglich, ein [synthetisches](/de/docs/Web/Events/Creating_and_triggering_events) `paste` Ereignis zu erstellen und auszulösen, aber dies wird den Inhalt des Dokuments nicht beeinflussen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("paste", (event) => {});

onpaste = (event) => {};
```

## Ereignistyp

Ein [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ClipboardEvent")}}

## Beispiel

### HTML

```html
<?xml version="1.0" encoding="UTF-8"?>
<svg
  viewBox="0 0 140 30"
  width="600"
  height="320"
  xmlns="http://www.w3.org/2000/svg">
  <foreignObject x="5" y="-10" width="90" height="20">
    <input xmlns="http://www.w3.org/1999/xhtml" value="Copy this text" />
  </foreignObject>
  <text x="5" y="30" id="element-to-paste-text" tabindex="1">
    Paste it here
  </text>
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
document
  .getElementById("element-to-paste-text")
  .addEventListener("paste", (evt) => {
    evt.target.textContent = evt.clipboardData
      .getData("text/plain")
      .toUpperCase();
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

- Verwandte Ereignisse: [`cut`](/de/docs/Web/API/SVGGraphicsElement/cut_event), [`copy`](/de/docs/Web/API/SVGGraphicsElement/copy_event)
- Dieses Ereignis auf HTML [`Element`](/de/docs/Web/API/Element) Zielen: [`paste`](/de/docs/Web/API/Element/paste_event)
- Dieses Ereignis auf [`Document`](/de/docs/Web/API/Document) Zielen: [`paste`](/de/docs/Web/API/Document/paste_event)
- Dieses Ereignis auf [`Window`](/de/docs/Web/API/Window) Zielen: [`paste`](/de/docs/Web/API/Window/paste_event)
