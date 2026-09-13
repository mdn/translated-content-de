---
title: "Clipboard: write() Methode"
short-title: write()
slug: Web/API/Clipboard/write
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die **`write()`** Methode des [`Clipboard`](/de/docs/Web/API/Clipboard)-Interfaces schreibt beliebige [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Daten wie Bilder und Text in die Zwischenablage und erfüllt das zurückgegebene {{jsxref("Promise")}}, wenn der Vorgang abgeschlossen ist. Dies kann zur Implementierung von Ausschneide- und Kopierfunktionen verwendet werden.

Die Methode kann theoretisch beliebige Daten schreiben (im Gegensatz zu [`writeText()`](/de/docs/Web/API/Clipboard/writeText), das nur Text schreiben kann). Browser unterstützen häufig das Schreiben von Text, HTML und PNG-Bilddaten.

## Syntax

```js-nolint
write(data)
```

### Parameter

- `data`
  - : Ein Array von [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Objekten, die die in die Zwischenablage zu schreibenden Daten enthalten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn die Daten in die Zwischenablage geschrieben wurden. Beachten Sie, dass, wenn das zugrunde liegende Betriebssystem keine mehrere nativen Zwischenablageelemente auf der Systemzwischenablage unterstützt, nur das erste [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) im Array geschrieben wird.

Das Promise wird abgelehnt, wenn es nicht möglich ist, in die Zwischenablage zu schreiben.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Schreiben in die Zwischenablage nicht erlaubt ist.

## Sicherheitsüberlegungen

Das Schreiben in die Zwischenablage kann nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) erfolgen.

Weitere Sicherheitsanforderungen sind im Abschnitt [Sicherheitsüberlegungen](/de/docs/Web/API/Clipboard_API#security_considerations) des API-Übersichtsthemas behandelt.

## Beispiele

### Text in die Zwischenablage schreiben

Diese Beispielmethode ersetzt den aktuellen Inhalt der Zwischenablage durch eine angegebene Zeichenkette, wenn eine Schaltfläche gedrückt wird. Beachten Sie, dass Sie für diesen speziellen Fall ebenso gut `Clipboard.writeText()` verwenden könnten.

```js
button.addEventListener("click", () => setClipboard("<empty clipboard>"));

async function setClipboard(text) {
  const type = "text/plain";
  const clipboardItemData = {
    [type]: text,
  };
  const clipboardItem = new ClipboardItem(clipboardItemData);
  await navigator.clipboard.write([clipboardItem]);
}
```

Die Funktion `setClipboard()` spezifiziert einen `"text/plain"` MIME-Typ in der `type` Konstante und dann ein `clipboardItemData` Objekt mit einer einzigen Eigenschaft — deren Schlüssel der MIME-Typ ist und deren Wert der übergebene Text ist, den wir in die Zwischenablage schreiben möchten. Anschließend konstruieren wir ein neues [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) Objekt, in das das `clipboardItemData` Objekt übergeben wird.

Schließlich wird `write()` mit `await` aufgerufen, um die Daten in die Zwischenablage zu schreiben.

### Canvas-Inhalte in die Zwischenablage schreiben

Dieses Beispiel zeichnet ein blaues Rechteck auf die Canvas. Sie können auf das Rechteck klicken, um den Inhalt der Canvas als Bild in die Zwischenablage zu kopieren, und dann ein anderes Element auswählen und den Inhalt aus der Zwischenablage einfügen.

#### HTML

Das HTML definiert nur unser `<canvas>`-Element und das `<div>`-Element mit der ID `target`, in das das Canvas-Bild eingefügt wird.

```html
<canvas id="canvas" width="100" height="100"></canvas>

<div id="target">Paste here.</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 60px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

Wir definieren zuerst eine `async` Funktion, um eine Canvas in ein Blob zu kopieren. Dies umschließt die alte Callback-basierte Methode [`HTMLCanvasElement.toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob) in die intuitivere, auf `Promise` basierende Funktion.

```js
// Async/await method replacing toBlob() callback
async function getBlobFromCanvas(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error("Canvas toBlob failed"));
      }
    });
  });
}
```

Als nächstes richten wir unser Canvas ein und fügen einen Event-Listener für das `click`-Event hinzu.

Wenn Sie auf das blaue Rechteck klicken, wird die Canvas, die das Rechteck anzeigt, in ein Blob kopiert, und dann wird das Blob einem `ClipboardItem` hinzugefügt und dann in die Zwischenablage geschrieben.

```js
const canvas = document.getElementById("canvas");

// Set up canvas
const ctx = canvas.getContext("2d");
ctx.fillStyle = "cornflowerblue";
ctx.fillRect(0, 0, 100, 100);

canvas.addEventListener("click", copyCanvasContentsToClipboard);
const target = document.getElementById("target");

async function copyCanvasContentsToClipboard() {
  // Copy canvas to blob
  try {
    const blob = await getBlobFromCanvas(canvas);
    // Create ClipboardItem with blob and its type, and add to an array
    const data = [new ClipboardItem({ [blob.type]: blob })];
    // Write the data to the clipboard
    await navigator.clipboard.write(data);
    log("Copied");
  } catch (error) {
    log(error);
  }
}
```

Beachten Sie, dass Sie, wenn Sie einen weniger verbreiteten Dateityp abholen oder eine Ressource, deren Typ Sie im Voraus nicht kennen, möglicherweise [`ClipboardItem.supports()`](/de/docs/Web/API/ClipboardItem/supports_static) verwenden möchten, um zu überprüfen, ob der Dateityp unterstützt wird, und eine aussagekräftige Fehlermeldung an den Benutzer ausgeben, falls dies nicht der Fall ist.

Wir definieren dann einen Event-Listener für [`paste` events](/de/docs/Web/API/Element/paste_event) auf dem Element, in dem wir die Zwischenablageinhalte als Bild anzeigen möchten. Die [FileReader API](/de/docs/Web/API/FileReader) ermöglicht es uns, das Blob mit der Methode [`readAsDataURL`](/de/docs/Web/API/FileReader/readAsDataURL) zu lesen und ein `<img>`-Element mit den Canvas-Inhalten zu erstellen:

```js
target.addEventListener("paste", (event) => {
  const items = (event.clipboardData || window.clipboardData).items;
  const blob = items[0].getAsFile();
  const reader = new FileReader();

  reader.addEventListener("load", (event) => {
    const img = new Image();
    img.src = event.target.result;
    target.appendChild(img);
  });

  reader.readAsDataURL(blob);
});
```

```css hidden
body {
  font-family: sans-serif;
}
#target {
  border: 2px solid;
  padding: 1rem;
  height: 150px;
}
img {
  margin: 0.5rem;
}
```

#### Ergebnis

Das Ergebnis wird unten angezeigt. Klicken Sie zuerst auf das blaue Quadrat und wählen Sie dann den Text "Hier einfügen" und verwenden Sie Ihre OS-spezifischen Tastenkombinationen, um aus der Zwischenablage einzufügen (wie `Strg+V` auf Windows).

{{embedlivesample("write_canvas_contents_to_the_clipboard", "", "420", "", "", "", "clipboard-write")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipboard API](/de/docs/Web/API/Clipboard_API)
- [Bildunterstützung für Async Clipboard Artikel](https://web.dev/articles/async-clipboard)
- [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText)
- [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read)
- [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText)
