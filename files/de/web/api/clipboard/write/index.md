---
title: "Clipboard: write()-Methode"
short-title: write()
slug: Web/API/Clipboard/write
l10n:
  sourceCommit: eaa5b39f80d5fac0e5bf182679dc658b7083d15b
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die **`write()`**-Methode des [`Clipboard`](/de/docs/Web/API/Clipboard)-Interfaces schreibt beliebige [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Daten, wie Bilder und Text, in die Zwischenablage und erfüllt das zurückgegebene {{jsxref("Promise")}} bei Abschluss.
Dies kann verwendet werden, um Ausschneiden- und Kopieren-Funktionalität zu implementieren.

Die Methode kann theoretisch beliebige Daten schreiben (im Gegensatz zu [`writeText()`](/de/docs/Web/API/Clipboard/writeText), das nur Text schreiben kann).
Browser unterstützen üblicherweise das Schreiben von Text, HTML und PNG-Bilddaten.

## Syntax

```js-nolint
write(data)
```

### Parameter

- `data`
  - : Ein Array von [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Objekten, das die Daten enthält, die in die Zwischenablage geschrieben werden sollen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn die Daten in die Zwischenablage geschrieben wurden.
Beachten Sie, dass, wenn das zugrunde liegende Betriebssystem keine mehreren nativen Zwischenablageelemente im System unterstützt, nur das erste [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) im Array geschrieben wird.

Das Versprechen wird abgelehnt, wenn es nicht möglich ist, in die Zwischenablage zu schreiben.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Schreiben in die Zwischenablage nicht erlaubt ist.

## Sicherheitsüberlegungen

Das Schreiben in die Zwischenablage kann nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) erfolgen.

Weitere Sicherheitsanforderungen werden im Abschnitt [Sicherheitsüberlegungen](/de/docs/Web/API/Clipboard_API#security_considerations) des API-Überblicksthemas behandelt.

## Beispiele

### Text in die Zwischenablage schreiben

Diese Beispiel-Funktion ersetzt den aktuellen Inhalt der Zwischenablage mit einem angegebenen String, wenn eine Schaltfläche gedrückt wird.
Beachten Sie, dass Sie in diesem speziellen Fall genauso gut `Clipboard.writeText()` verwenden könnten.

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

Die `setClipboard()`-Funktion gibt einen `"text/plain"` MIME-Typ im `type`-Konstanten an, dann wird ein `clipboardItemData`-Objekt spezifiziert mit einer einzigen Eigenschaft — der Schlüssel ist der MIME-Typ, und der Wert ist der übergebene Text, den wir in die Zwischenablage schreiben möchten. Anschließend konstruieren wir ein neues [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Objekt, in das das `clipboardItemData`-Objekt übergeben wird.

Schließlich wird `write()` mit `await` aufgerufen, um die Daten in die Zwischenablage zu schreiben.

### Canvas-Inhalt in die Zwischenablage schreiben

Dieses Beispiel zeichnet ein blaues Rechteck auf die Leinwand.
Sie können auf das Rechteck klicken, um den Inhalt der Leinwand als Bild in die Zwischenablage zu kopieren und dann ein anderes Element auszuwählen und den Inhalt aus der Zwischenablage einzufügen.

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

Zuerst definieren wir eine `async`-Funktion, um ein Canvas in ein Blob zu kopieren.
Diese umschließt die alte Callback-Style-Methode [`HTMLCanvasElement.toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob) in die intuitivere `Promise`-basierte Funktion.

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

Als nächstes richten wir unser Canvas ein und fügen einen Event-Listener für das `click`-Ereignis hinzu.

Wenn Sie auf das blaue Rechteck klicken, prüft der Code zuerst, ob die Zwischenablage Daten vom Typ `"image/png"` unterstützt.
Falls ja, wird das Canvas, das das Rechteck anzeigt, in ein Blob kopiert und dann das Blob zu einem `ClipboardItem` hinzugefügt und in die Zwischenablage geschrieben.

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

Beachten Sie, dass die Zwischenablageunterstützung für PNG-Dateien ein obligatorischer Teil der Spezifikation ist, sodass wir eigentlich nicht die Überprüfung mit [`ClipboardItem.supports()`](/de/docs/Web/API/ClipboardItem/supports_static) oben benötigen (es gibt immer `true` zurück).
Die Überprüfung wäre nützlicher in Fällen, in denen wir einen optionalen Dateityp oder eine Ressource abrufen, deren Typ wir im Voraus nicht kennen.

Wir definieren dann einen Event-Listener für [`paste`-Ereignisse](/de/docs/Web/API/Element/paste_event) auf dem Element, in dem wir die Inhalte der Zwischenablage als Bild anzeigen möchten.
Die [FileReader-API](/de/docs/Web/API/FileReader) ermöglicht es uns, das Blob mithilfe der [`readAsDataUrl`](/de/docs/Web/API/FileReader/readAsDataURL)-Methode zu lesen und ein `<img>`-Element mit den Canvas-Inhalten zu erstellen:

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
Klicken Sie zuerst auf das blaue Quadrat und wählen Sie dann den Text "Hier einfügen" und verwenden Sie die OS-spezifischen Tastenkombinationen, um aus der Zwischenablage einzufügen (wie `Strg+V` unter Windows).

{{embedlivesample("write_canvas_contents_to_the_clipboard", "", "420", "", "", "", "clipboard-write")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipboard-API](/de/docs/Web/API/Clipboard_API)
- [Image support for Async Clipboard article](https://web.dev/articles/async-clipboard)
- [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText)
- [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read)
- [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText)
