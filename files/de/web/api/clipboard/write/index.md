---
title: "Clipboard: write() Methode"
short-title: write()
slug: Web/API/Clipboard/write
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die **`write()`** Methode der [`Clipboard`](/de/docs/Web/API/Clipboard) Schnittstelle schreibt beliebige [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) Daten, wie Bilder und Text, in die Zwischenablage und erfüllt das zurückgegebene {{jsxref("Promise")}} bei Abschluss.
Dies kann verwendet werden, um Ausschneiden- und Kopieren-Funktionalität zu implementieren.

Theoretisch kann die Methode beliebige Daten schreiben (im Gegensatz zu [`writeText()`](/de/docs/Web/API/Clipboard/writeText), die nur Text schreiben kann).
Browser unterstützen häufig das Schreiben von Text-, HTML- und PNG-Daten.

## Syntax

```js-nolint
write(data)
```

### Parameter

- `data`
  - : Ein Array von [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) Objekten, die die zu schreibenden Daten in die Zwischenablage enthalten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn die Daten in die Zwischenablage geschrieben wurden.
Beachten Sie, dass, wenn das zugrunde liegende Betriebssystem keine mehreren nativen Zwischenablage-Elemente auf der Systemzwischenablage unterstützt, nur das erste [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) im Array geschrieben wird.

Das Versprechen wird abgelehnt, wenn es nicht möglich ist, in die Zwischenablage zu schreiben.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Schreiben in die Zwischenablage nicht erlaubt ist.

## Sicherheitsüberlegungen

Schreiben in die Zwischenablage kann nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) erfolgen.

Weitere Sicherheitsanforderungen werden im Abschnitt [Sicherheitsüberlegung](/de/docs/Web/API/Clipboard_API#security_considerations) des API-Übersichtsthemas behandelt.

## Beispiele

### Text in die Zwischenablage schreiben

Diese Beispiel-Funktion ersetzt den aktuellen Inhalt der Zwischenablage durch eine angegebene Zeichenkette, wenn eine Schaltfläche gedrückt wird.
Beachten Sie, dass Sie für diesen speziellen Fall ebenso gut `Clipboard.writeText()` verwenden könnten.

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

Die `setClipboard()` Funktion gibt einen `"text/plain"` MIME-Typ im `type` Konstante an, dann gibt sie ein `clipboardItemData` Objekt an, das eine einzige Eigenschaft hat — ihr Schlüssel ist der MIME-Typ, und ihr Wert ist der übergebene Text, den wir in die Zwischenablage schreiben wollen. Wir erstellen dann ein neues [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) Objekt, in das das `clipboardItemData` Objekt übergeben wird.

Schließlich wird `write()` mit `await` aufgerufen, um die Daten in die Zwischenablage zu schreiben.

### Canvas-Inhalt in die Zwischenablage schreiben

Dieses Beispiel zeichnet ein blaues Rechteck auf die Leinwand.
Sie können auf das Rechteck klicken, um den Inhalt der Leinwand als Bild in die Zwischenablage zu kopieren, und dann ein anderes Element auswählen und den Inhalt aus der Zwischenablage einfügen.

#### HTML

Das HTML definiert nur unser `<canvas>` Element und das `<div>` Element mit der ID `target`, in das das Canvas-Bild eingefügt wird.

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

Zuerst definieren wir eine `async` Funktion, um eine Leinwand in ein Blob zu kopieren.
Diese umschließt die alte Callback-basierte Methode [`HTMLCanvasElement.toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob) in die intuitivere, auf `Promise` basierende Funktion.

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

Wenn Sie auf das blaue Rechteck klicken, wird die Leinwand, die das Rechteck anzeigt, in ein Blob kopiert, und dann wird das Blob zu einem `ClipboardItem` hinzugefügt und anschließend in die Zwischenablage geschrieben.

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
    // Create ClipboardItem with blob and it's type, and add to an array
    const data = [new ClipboardItem({ [blob.type]: blob })];
    // Write the data to the clipboard
    await navigator.clipboard.write(data);
    log("Copied");
  } catch (error) {
    log(error);
  }
}
```

Beachten Sie, dass wenn Sie einen weniger gebräuchlichen Dateityp abrufen oder eine Ressource, deren Typ Sie im Voraus nicht kennen, Sie möglicherweise [`ClipboardItem.supports()`](/de/docs/Web/API/ClipboardItem/supports_static) verwenden möchten, um zu prüfen, ob der Dateityp unterstützt wird, und dem Benutzer eine aussagekräftige Fehlermeldung liefern, falls dies nicht der Fall ist.

Wir definieren dann einen Ereignislistener für [`paste` Ereignisse](/de/docs/Web/API/Element/paste_event) auf dem Element, in dem wir die Zwischenablageinhalte als Bild anzeigen möchten.
Das [FileReader API](/de/docs/Web/API/FileReader) ermöglicht es uns, das Blob mit der [`readAsDataUrl`](/de/docs/Web/API/FileReader/readAsDataURL) Methode zu lesen und ein `<img>` Element mit dem Canvas-Inhalt zu erstellen:

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

Das Ergebnis wird unten angezeigt.
Zuerst klicken Sie auf das blaue Quadrat und dann wählen Sie den Text "Paste here" aus und verwenden die für Ihr Betriebssystem spezifischen Tastenkombinationen, um aus der Zwischenablage einzufügen (wie `Strg+V` auf Windows).

{{embedlivesample("write_canvas_contents_to_the_clipboard", "", "420", "", "", "", "clipboard-write")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipboard API](/de/docs/Web/API/Clipboard_API)
- [Image support for Async Clipboard article](https://web.dev/articles/async-clipboard)
- [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText)
- [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read)
- [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText)
