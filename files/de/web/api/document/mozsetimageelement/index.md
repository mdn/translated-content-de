---
title: "Dokument: Methode mozSetImageElement()"
short-title: mozSetImageElement()
slug: Web/API/Document/mozSetImageElement
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{ ApiRef("DOM") }}{{ non-standard_header() }}

Die **`Document.mozSetImageElement()`** Methode ändert das Element, das als CSS-Hintergrund für einen Hintergrund mit einer angegebenen Hintergrundelement-ID verwendet wird.

## Syntax

```js-nolint
mozSetImageElement(imageElementId, imageElement)
```

### Parameter

- `imageElementId`
  - : Ein String, der den Namen eines Elements angibt, das als Hintergrundbild mithilfe der {{ cssxref("element", "-moz-element") }} CSS-Funktion festgelegt wurde.
- `imageElement`
  - : Das neue Element, das als Hintergrund für diesen Bild-Element-String verwendet werden soll. Geben Sie `null` an, um das Hintergrundelement zu entfernen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel ändert den Hintergrund eines {{ HTMLElement("div") }}-Blocks, wenn der Block vom Benutzer angeklickt wird.

[Sehen Sie sich dieses Beispiel live an](https://mdn.dev/archives/media/samples/domref/mozSetImageElement.html).

```html
<style>
  #mybox {
    background-image: -moz-element(#canvasbg);
    text-align: center;
    width: 400px;
    height: 400px;
    cursor: pointer;
  }
</style>
```

Das durch den {{ HTMLElement("style") }}-Block definierte CSS wird von unserem {{ HTMLElement("div") }}-Element verwendet, um ein Element mit der ID "canvasbg" als seinen Hintergrund zu verwenden.

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

  document.mozSetImageElement("canvasbg", canvas);
}
```

Der hier gezeigte Code wird jedes Mal aufgerufen, wenn der Benutzer das {{ HTMLElement("div") }}-Element anklickt. Er erstellt ein neues {{ HTMLElement("canvas") }} mit einer Breite und Höhe von jeweils 100 Pixeln und zeichnet dann ein 50x50 Pixel großes Quadrat. Jedes Mal, wenn die Funktion aufgerufen wird, hat das Quadrat eine andere Farbe (der Rotanteil wird bei jedem Aufruf erhöht), sodass bei jedem Klick des Benutzers auf das Element der Hintergrund mit einem immer helleren roten Muster gefüllt wird.

Sobald die Zeichenfläche erstellt ist, wird `document.mozSetImageElement()` aufgerufen, um den Hintergrund für jedes CSS festzulegen, das die ID "canvasbg" als Hintergrundelement-ID verwendet, um unsere neue Zeichenfläche zu sein.

## Spezifikationen

Teil keiner Spezifikation.

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{ cssxref("element", "-moz-element") }}
