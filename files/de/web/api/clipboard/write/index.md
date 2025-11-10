---
title: "Clipboard: write() Methode"
short-title: write()
slug: Web/API/Clipboard/write
l10n:
  sourceCommit: 0195a47bc7dc44f9652678214b53f91ed2725b17
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die **`write()`** Methode des [`Clipboard`](/de/docs/Web/API/Clipboard) Schnittstelle schreibt beliebige [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) Daten wie Bilder und Text in die Zwischenablage und erfüllt das zurückgegebene {{jsxref("Promise")}} bei Abschluss. Dies kann verwendet werden, um Ausschneiden- und Kopieren-Funktionalität zu implementieren.

Die Methode kann theoretisch beliebige Daten schreiben (im Gegensatz zu [`writeText()`](/de/docs/Web/API/Clipboard/writeText), das nur Text schreiben kann). Browser unterstützen in der Regel das Schreiben von Text, HTML und PNG-Bilddaten.

## Syntax

```js-nolint
write(data)
```

### Parameter

- `data`
  - : Ein Array von [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Objekten, die Daten enthalten, die in die Zwischenablage geschrieben werden sollen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn die Daten in die Zwischenablage geschrieben wurden. Beachten Sie, dass, wenn das zugrunde liegende Betriebssystem keine mehreren nativen Zwischenablage-Elemente auf der System-Zwischenablage unterstützt, dann nur das erste [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) im Array geschrieben wird.

Das Versprechen wird abgelehnt, wenn die Zwischenablage nicht in der Lage ist, in die Zwischenablage zu schreiben.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Schreiben in die Zwischenablage nicht erlaubt ist.

## Sicherheitsüberlegungen

Das Schreiben in die Zwischenablage kann nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) erfolgen.

Weitere Sicherheitsanforderungen werden im Abschnitt [Sicherheitsüberlegungen](/de/docs/Web/API/Clipboard_API#security_considerations) des API-Übersichtsartikels behandelt.

## Beispiele

### Schreiben von Text in die Zwischenablage

Diese Beispielfunktion ersetzt den aktuellen Inhalt der Zwischenablage durch eine bestimmte Zeichenfolge, wenn eine Taste gedrückt wird. Beachten Sie, dass Sie für diesen speziellen Fall genauso gut `Clipboard.writeText()` verwenden könnten.

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

Die `setClipboard()` Funktion spezifiziert einen MIME-Typ `"text/plain"` in der Konstanten `type` und dann gibt es ein `clipboardItemData` Objekt mit einer einzigen Eigenschaft an — ihr Schlüssel ist der MIME-Typ und ihr Wert ist der übergebene Text, den wir in die Zwischenablage schreiben möchten. Danach erstellen wir ein neues [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Objekt, in das das `clipboardItemData` Objekt übergeben wird.

Schließlich wird `write()` mit `await` aufgerufen, um die Daten in die Zwischenablage zu schreiben.

### Schreiben des Canvas-Inhalts in die Zwischenablage

Dieses Beispiel zeichnet ein blaues Rechteck auf das Canvas. Sie können auf das Rechteck klicken, um den Inhalt des Canvas als Bild in die Zwischenablage zu kopieren, und dann ein anderes Element auswählen und den Inhalt aus der Zwischenablage einfügen.

#### HTML

Das HTML definiert einfach unser `<canvas>` Element und das `<div>` Element mit der ID `target`, in das das Canvas-Bild eingefügt wird.

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

Zuerst definieren wir eine `async` Funktion, um ein Canvas in einen Blob zu kopieren. Dies umhüllt die alte Callback-orientierte Methode [`HTMLCanvasElement.toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob) in eine intuitivere `Promise`-basierte Funktion.

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

Als nächstes richten wir unser Canvas ein und fügen einen Event-Listener für das `click` Ereignis hinzu.

Wenn Sie auf das blaue Rechteck klicken, wird das Canvas, das das Rechteck anzeigt, in einen Blob kopiert, und dann wird der Blob zu einem `ClipboardItem` hinzugefügt und dann in die Zwischenablage geschrieben.

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

Beachten Sie, dass, wenn Sie eine weniger gebräuchliche Dateityp oder eine Ressource abrufen, deren Typ Sie nicht im Voraus kennen, Sie möglicherweise [`ClipboardItem.supports()`](/de/docs/Web/API/ClipboardItem/supports_static) verwenden möchten, um zu überprüfen, ob der Dateityp unterstützt wird, und eine aussagekräftige Fehlermeldung für den Benutzer bereitstellen, falls dies nicht der Fall ist.

Wir definieren dann einen Event-Listener für [`paste` Ereignisse](/de/docs/Web/API/Element/paste_event) auf dem Element, auf dem wir die Inhalte der Zwischenablage als Bild anzeigen wollen. Die [FileReader API](/de/docs/Web/API/FileReader) erlaubt es uns, den Blob mithilfe der Methode [`readAsDataUrl`](/de/docs/Web/API/FileReader/readAsDataURL) zu lesen und ein `<img>` Element mit den Canvas-Inhalten zu erstellen:

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

Das Ergebnis wird unten dargestellt. Zuerst klicken Sie auf das blaue Quadrat und dann wählen Sie den Text "Paste here" aus und verwenden die Betriebssystemspezifischen Tastenkombinationen, um aus der Zwischenablage einzufügen (z.B. `Strg+V` auf Windows).

{{embedlivesample("write_canvas_contents_to_the_clipboard", "", "420", "", "", "", "clipboard-write")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipboard API](/de/docs/Web/API/Clipboard_API)
- [Bildunterstützung für Artikel über asynchrone Zwischenablage](https://web.dev/articles/async-clipboard)
- [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText)
- [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read)
- [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText)
