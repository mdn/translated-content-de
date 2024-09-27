---
title: "Zwischenablage: write() Methode"
short-title: write()
slug: Web/API/Clipboard/write
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die **`write()`** Methode des [`Clipboard`](/de/docs/Web/API/Clipboard)-Interfaces schreibt beliebige Daten in die Zwischenablage, wie etwa Bilder, und erfüllt das zurückgegebene {{jsxref("Promise")}} bei Fertigstellung.
Dies kann verwendet werden, um Ausschneiden- und Kopieren-Funktionen zu implementieren.

Die Methode kann theoretisch beliebige Daten schreiben (im Gegensatz zu [`writeText()`](/de/docs/Web/API/Clipboard/writeText), die nur Text schreiben kann).
Browser unterstützen üblicherweise das Schreiben von Text, HTML und PNG-Bilddaten — siehe [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

## Syntax

```js-nolint
write(data)
```

### Parameter

- `data`
  - : Ein Array von [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Objekten, die die in die Zwischenablage zu schreibenden Daten enthalten.

### Rückgabewert

Ein {{jsxref("Promise")}}, welches aufgelöst wird, wenn die Daten in die Zwischenablage geschrieben wurden.
Beachten Sie, dass, wenn das zugrunde liegende Betriebssystem keine mehreren nativen Zwischenablage-Elemente im System unterstützt, nur das erste [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) im Array geschrieben wird.

Das Promise wird abgelehnt, wenn die Zwischenablage nicht in der Lage ist, Daten zu schreiben.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Schreiben in die Zwischenablage nicht erlaubt ist.

## Sicherheitserwägungen

Das Schreiben in die Zwischenablage kann nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) erfolgen.

Weitere Sicherheitsanforderungen sind im Abschnitt [Sicherheitserwägungen](/de/docs/Web/API/Clipboard_API#security_considerations) des API-Übersichtsthemas behandelt.

## Beispiele

### Text in die Zwischenablage schreiben

Diese Beispiel-Funktion ersetzt den aktuellen Inhalt der Zwischenablage durch einen angegebenen String, wenn eine Schaltfläche gedrückt wird.
Beachten Sie, dass Sie in diesem speziellen Fall ebenso `Clipboard.writeText()` verwenden könnten.

```js
button.addEventListener("click", () => setClipboard("<empty clipboard>"));

async function setClipboard(text) {
  const type = "text/plain";
  const blob = new Blob([text], { type });
  const data = [new ClipboardItem({ [type]: blob })];
  await navigator.clipboard.write(data);
}
```

Die `setClipboard()`-Methode beginnt mit der Erstellung eines neuen [`Blob`](/de/docs/Web/API/Blob)-Objekts.
Dieses Objekt ist erforderlich, um ein [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Objekt zu konstruieren, welches an die Zwischenablage gesendet wird.
Der [`Blob`](/de/docs/Web/API/Blob)-Konstruktor nimmt den Inhalt, den wir kopieren möchten, und dessen Typ auf.
Dieses [`Blob`](/de/docs/Web/API/Blob)-Objekt kann aus vielen Quellen abgeleitet werden; zum Beispiel, einer [Leinwand](/de/docs/Web/API/HTMLCanvasElement).

Als nächstes erstellen wir ein neues [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Objekt, in das das Blob für den Versand an die Zwischenablage platziert wird.
Der Schlüssel des an den [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Konstruktor übergebenen Objekts gibt den Inhaltstyp an, der Wert den Inhalt.
Dann wird `write()` mit `await` aufgerufen.
Ein `try..catch` Block könnte verwendet werden, um alle Fehler beim Schreiben der Daten abzufangen.

### Leinwand-Inhalte in die Zwischenablage schreiben

Dieses Beispiel zeichnet ein blaues Rechteck auf die Leinwand.
Sie können auf das Rechteck klicken, um den Inhalt der Leinwand als Bild in die Zwischenablage zu kopieren, und dann ein anderes Element auswählen und den Inhalt aus der Zwischenablage einfügen.

#### HTML

Das HTML definiert einfach unser `<canvas>`-Element und das `<div>`-Element mit der ID `target`, wohin das Leinwandbild eingefügt wird.

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

Zuerst definieren wir eine `async`-Funktion, um eine Leinwand in ein Blob zu kopieren.
Dies umschließt die alte Callback-Style [`HTMLCanvasElement.toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob)-Methode in eine intuitivere `Promise`-basierte Funktion.

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

Als nächstes richten wir unsere Leinwand ein und fügen einen Ereignis-Listener für das `click` Ereignis hinzu.

Wenn Sie auf das blaue Rechteck klicken, überprüft der Code zuerst, ob die Zwischenablage Daten des Typs `"image/png"` unterstützt.
Falls ja, wird die Leinwand, die das Rechteck darstellt, in ein Blob kopiert, und dann wird das Blob einem `ClipboardItem` hinzugefügt und in die Zwischenablage geschrieben.

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

Beachten Sie, dass die Zwischenablagenunterstützung für PNG-Dateien ein obligatorischer Teil der Spezifikation ist, daher brauchen wir nicht wirklich die Überprüfung mit [`ClipboardItem.supports()`](/de/docs/Web/API/ClipboardItem/supports_static) oben (es gibt immer `true` zurück).
Die Überprüfung wäre nützlicher in Fällen, in denen wir einen optionalen Dateityp abrufen oder eine Ressource haben, deren Typ wir im Voraus nicht kennen.

Dann definieren wir einen Ereignis-Listener für [`paste` events](/de/docs/Web/API/Element/paste_event) auf dem Element, wo wir den Zwischenablage-Inhalt als Bild anzeigen möchten.
Die [FileReader API](/de/docs/Web/API/FileReader) ermöglicht uns, das Blob mit der Methode [`readAsDataUrl`](/de/docs/Web/API/FileReader/readAsDataURL) auszulesen und ein `<img>`-Element mit dem Inhalt der Leinwand zu erstellen:

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
Klicken Sie zuerst auf das blaue Quadrat und wählen Sie dann den Text "Paste here" aus und verwenden Sie Ihre betriebssystemspezifischen Tastenkombinationen, um aus der Zwischenablage einzufügen (wie `Strg+V` auf Windows).

{{embedlivesample("write_canvas_contents_to_the_clipboard", "", "420", "", "", "", "clipboard-write")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zwischenablage API](/de/docs/Web/API/Clipboard_API)
- [Unterstützung von Bildern für den asynchronen Clipboard-Artikel](https://web.dev/articles/async-clipboard)
- [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText)
- [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read)
- [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText)
