---
title: "Clipboard: write()-Methode"
short-title: write()
slug: Web/API/Clipboard/write
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die **`write()`** Methode des [`Clipboard`](/de/docs/Web/API/Clipboard) Interfaces schreibt beliebige Daten in die Zwischenablage, wie z.B. Bilder, und erfüllt das zurückgegebene {{jsxref("Promise")}}, sobald der Vorgang abgeschlossen ist.
Dies kann verwendet werden, um Ausschneiden- und Kopieren-Funktionen zu implementieren.

Die Methode kann theoretisch beliebige Daten schreiben (im Gegensatz zur [`writeText()`](/de/docs/Web/API/Clipboard/writeText), die nur Text schreiben kann).
Browser unterstützen üblicherweise das Schreiben von Text, HTML und PNG-Bilddaten – siehe [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

## Syntax

```js-nolint
write(data)
```

### Parameter

- `data`
  - : Ein Array von [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) Objekten, die die Daten enthalten, die in die Zwischenablage geschrieben werden sollen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn die Daten in die Zwischenablage geschrieben wurden.
Beachten Sie, dass, wenn das zugrunde liegende Betriebssystem das Speichern mehrerer nativer Zwischenablage-Elemente in der Systemzwischenablage nicht unterstützt, nur das erste [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) im Array gespeichert wird.

Das Versprechen wird abgelehnt, wenn es der Zwischenablage nicht gelingt, in die Zwischenablage zu schreiben.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Schreiben in die Zwischenablage nicht erlaubt ist.

## Sicherheitsüberlegungen

Das Schreiben in die Zwischenablage kann nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) durchgeführt werden.

Zusätzliche Sicherheitsanforderungen werden im Abschnitt [Sicherheitsüberlegungen](/de/docs/Web/API/Clipboard_API#security_considerations) des API-Übersichtsthemas behandelt.

## Beispiele

### Text in die Zwischenablage schreiben

Diese Beispiel-Funktion ersetzt den aktuellen Inhalt der Zwischenablage mit einem angegebenen String, wenn eine Taste gedrückt wird.
Beachten Sie, dass Sie für diesen speziellen Fall ebenso gut `Clipboard.writeText()` verwenden könnten.

```js
button.addEventListener("click", () => setClipboard("<empty clipboard>"));

async function setClipboard(text) {
  const type = "text/plain";
  const blob = new Blob([text], { type });
  const data = [new ClipboardItem({ [type]: blob })];
  await navigator.clipboard.write(data);
}
```

Die `setClipboard()` Methode beginnt mit der Erstellung eines neuen [`Blob`](/de/docs/Web/API/Blob) Objekts.
Dieses Objekt wird benötigt, um ein [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) Objekt zu konstruieren, das an die Zwischenablage gesendet wird.
Der [`Blob`](/de/docs/Web/API/Blob) Konstruktor nimmt den Inhalt, den wir kopieren möchten, und seinen Typ entgegen.
Dieses [`Blob`](/de/docs/Web/API/Blob) Objekt kann aus vielen Quellen abgeleitet werden, z. B. einem [Canvas](/de/docs/Web/API/HTMLCanvasElement).

Als nächstes erstellen wir ein neues [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) Objekt, in das der Blob zum Senden an die Zwischenablage eingefügt wird.
Der Schlüssel des an den [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) Konstruktor übergebenen Objekts gibt den Inhaltstyp an, der Wert gibt den Inhalt an.
Dann wird `write()` mit `await` aufgerufen.
Ein `try..catch` Block könnte verwendet werden, um etwaige Fehler beim Schreiben der Daten abzufangen.

### Canvas-Inhalte in die Zwischenablage schreiben

Dieses Beispiel zeichnet ein blaues Rechteck auf das Canvas.
Sie können auf das Rechteck klicken, um den Inhalt des Canvas als Bild in die Zwischenablage zu kopieren, und dann ein anderes Element auswählen und den Inhalt aus der Zwischenablage einfügen.

#### HTML

Das HTML definiert nur unser `<canvas>` Element und das `<div>` Element mit der ID `target`, wo das Canvas-Bild eingefügt wird.

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

Zuerst definieren wir eine `async` Funktion, um ein Canvas in einen Blob zu kopieren.
Dies fasst die alte Callback-basierte [`HTMLCanvasElement.toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob) Methode in eine intuitivere, auf `Promise` basierende Funktion zusammen.

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

Als nächstes richten wir unser Canvas ein und fügen einen Ereignislistener für das `click` Ereignis hinzu.

Wenn Sie auf das blaue Rechteck klicken, überprüft der Code zuerst, ob die Zwischenablage Daten vom Typ `"image/png"` unterstützt.
Falls ja, wird das Canvas mit dem angezeigten Rechteck in einen Blob kopiert, und dann wird der Blob zu einem `ClipboardItem` hinzugefügt und in die Zwischenablage geschrieben.

```js
const canvas = document.getElementById("canvas");

// Set up canvas
const ctx = canvas.getContext("2d");
ctx.fillStyle = "cornflowerblue";
ctx.fillRect(0, 0, 100, 100);

canvas.addEventListener("click", copyCanvasContentsToClipboard);
const target = document.getElementById("target");

async function copyCanvasContentsToClipboard() {
  if (ClipboardItem.supports("image/png")) {
    // Copy canvas to blob
    try {
      const blob = await getBlobFromCanvas(canvas);
      // Create ClipboardItem with blob and it's type, and add to an array
      const data = [new ClipboardItem({ [blob.type]: blob })];
      // Write the data to the clipboard
      await navigator.clipboard.write(data);
      log("Copied");
    } catch (error) {
      log(error);
    }
  } else {
    log("image/png is not supported");
  }
}
```

Beachten Sie, dass die Unterstützung von PNG-Dateien in der Zwischenablage Teil der Spezifikation ist, sodass wir die Überprüfung mit [`ClipboardItem.supports()`](/de/docs/Web/API/ClipboardItem/supports_static) oben eigentlich nicht benötigen (sie gibt immer `true` zurück).
Die Überprüfung wäre nützlicher in Fällen, in denen wir einen optionalen Dateityp abrufen oder eine Ressource mit unbekanntem Typ vorab auswählen.

Dann definieren wir einen Ereignislistener für [`paste` Ereignisse](/de/docs/Web/API/Element/paste_event) auf einem Element, wo wir die Zwischenablageinhalte als Bild anzeigen wollen.
Die [FileReader API](/de/docs/Web/API/FileReader) ermöglicht es uns, den Blob mit der Methode [`readAsDataUrl`](/de/docs/Web/API/FileReader/readAsDataURL) zu lesen und ein `<img>` Element mit den Canvas-Inhalten zu erstellen:

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

Das Ergebnis wird unten gezeigt.
Klicken Sie zuerst auf das blaue Quadrat und wählen Sie dann den Text "Paste here" und verwenden Sie die spezifischen Tastenkombinationen Ihres Betriebssystems, um aus der Zwischenablage einzufügen (zum Beispiel `Ctrl+V` unter Windows).

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
