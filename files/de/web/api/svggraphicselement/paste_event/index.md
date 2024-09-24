---
title: "SVGGraphicsElement: Paste-Ereignis"
short-title: paste
slug: Web/API/SVGGraphicsElement/paste_event
l10n:
  sourceCommit: 511b483843fa33373dd26eabc28beee59b995d01
---

{{APIRef("SVG")}}

Das **`paste`**-Ereignis wird auf einem {{domxref("SVGGraphicsElement")}} ausgelöst, wenn der Benutzer eine „Einfügen“-Aktion über die Benutzeroberfläche des Browsers initiiert hat.

Wenn der Cursor sich in einem editierbaren Kontext befindet (zum Beispiel in einem {{HTMLElement("textarea")}} oder einem Element mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut auf `true` gesetzt), dann ist die Standardaktion, den Inhalt der Zwischenablage an der Cursorposition in das Dokument einzufügen.

Ein Handler für dieses Ereignis kann auf den Inhalt der Zwischenablage zugreifen, indem er {{domxref("DataTransfer/getData", "getData()")}} auf der `clipboardData`-Eigenschaft des Ereignisses aufruft.

Um das Standardverhalten zu überschreiben (z.B. um einige andere Daten oder eine Transformation des Zwischenablageninhalts einzufügen), muss ein Ereignishandler die Standardaktion mit {{domxref("Event/preventDefault", "event.preventDefault()")}} unterbrechen und dann seine gewünschten Daten manuell einfügen.

Es ist möglich, ein [synthetisches](/de/docs/Web/Events/Creating_and_triggering_events) `paste`-Ereignis zu erstellen und auszulösen, aber dies beeinflusst nicht den Dokumenteninhalte.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("paste", (event) => {});

onpaste = (event) => {};
```

## Ereignistyp

Ein {{domxref("ClipboardEvent")}}. Erbt von {{domxref("Event")}}.

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
- Dieses Ereignis auf HTML {{domxref("Element")}} Zielen: [`paste`](/de/docs/Web/API/Element/paste_event)
- Dieses Ereignis auf {{domxref("Document")}} Zielen: [`paste`](/de/docs/Web/API/Document/paste_event)
- Dieses Ereignis auf {{domxref("Window")}} Zielen: [`paste`](/de/docs/Web/API/Window/paste_event)
