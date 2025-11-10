---
title: "Dokument: mozSetImageElement()-Methode"
short-title: mozSetImageElement()
slug: Web/API/Document/mozSetImageElement
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{ ApiRef("DOM") }}{{ non-standard_header() }}

Die **`Document.mozSetImageElement()`** Methode ändert das
Element, das als CSS-Hintergrund für einen Hintergrund mit einer gegebenen Hintergrundelement-ID verwendet wird.

## Syntax

```js-nolint
mozSetImageElement(imageElementId, imageElement)
```

### Parameter

- `imageElementId`
  - : Ein String, der den Namen eines Elements angibt, das als Hintergrundbild mit der {{ cssxref("element", "-moz-element") }} CSS-Funktion spezifiziert wurde.
- `imageElement`
  - : Das neue Element, das als Hintergrund verwendet werden soll, das diesem Bild-Element-String entspricht. Geben Sie `null` an, um das Hintergrundelement zu entfernen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel ändert den Hintergrund eines {{ HTMLElement("div") }}-Blocks jedes Mal, wenn der Block vom Benutzer angeklickt wird.

[Sehen Sie sich dieses Beispiel live an](https://mdn.dev/archives/media/samples/domref/mozSetImageElement.html).

```css
#my-box {
  background-image: -moz-element(#canvas-bg);
  text-align: center;
  width: 400px;
  height: 400px;
  cursor: pointer;
}
```

Das oben definierte CSS wird von unserem {{HTMLElement("div")}} verwendet, um ein Element mit der ID "canvas-bg" als Hintergrund zu nutzen.

```js
let c = 0x00;
function clicked() {
  const canvas = document.createElement("canvas");
  canvas.setAttribute("width", 100);
  canvas.setAttribute("height", 100);

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = `#${c.toString(16)}0000`;
  ctx.fillRect(25, 25, 75, 75);

  c += 0x11;
  if (c > 0xff) {
    c = 0x00;
  }

  document.mozSetImageElement("canvas-bg", canvas);
}
```

Der hier gezeigte Code wird jedes Mal aufgerufen, wenn der Benutzer das {{ HTMLElement("div") }}-Element anklickt.
Es wird ein neues {{ HTMLElement("canvas") }} mit einer Breite und Höhe von 100 Pixeln erstellt und dann ein 50 mal 50 Pixel großes Quadrat darin gezeichnet. Jedes Mal, wenn die Funktion aufgerufen wird, hat das Quadrat eine andere Farbe (seine Rotkomponente wird jedes Mal erhöht), sodass bei jedem Klick des Benutzers auf das Element der Hintergrund mit einem immer helleren roten Kachelmuster gefüllt wird.

Sobald die Leinwand gezeichnet ist, wird `document.mozSetImageElement()` aufgerufen, um den Hintergrund für jedes CSS zu setzen, das die ID "canvas-bg" als seine Hintergrundelement-ID verwendet, um unser neues Canvas zu sein.

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ cssxref("element", "-moz-element") }}
