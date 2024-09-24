---
title: "Zwischenablage: write()-Methode"
short-title: write()
slug: Web/API/Clipboard/write
l10n:
  sourceCommit: cca93afe31dd0ce15ad2149ba92f2429e7f434bc
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die **`write()`**-Methode der {{domxref("Clipboard")}}-Schnittstelle schreibt beliebige Daten in die Zwischenablage, wie z.B. Bilder, und erfüllt das zurückgegebene {{jsxref("Promise")}}, sobald dies abgeschlossen ist. Diese Methode kann verwendet werden, um Ausschneide- und Kopierfunktionen zu implementieren.

Die Methode kann theoretisch beliebige Daten schreiben (im Gegensatz zu {{domxref("Clipboard.writeText", "writeText()")}}, das nur Text schreiben kann). Browser unterstützen üblicherweise das Schreiben von Text-, HTML- und PNG-Bilddaten — siehe [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

## Syntax

```js-nolint
write(data)
```

### Parameter

- `data`
  - : Ein Array von {{domxref("ClipboardItem")}}-Objekten, die die in die Zwischenablage zu schreibenden Daten enthalten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn die Daten in die Zwischenablage geschrieben wurden. Beachten Sie, dass, wenn das zugrunde liegende Betriebssystem mehrere native Zwischenablagen-Elemente nicht unterstützt, nur das erste {{domxref("ClipboardItem")}} im Array geschrieben wird.

Das Promise wird abgelehnt, wenn es der Zwischenablage nicht möglich ist, die Daten zu schreiben.

### Ausnahmen

- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das Schreiben in die Zwischenablage nicht erlaubt ist.

## Sicherheitsüberlegungen

Das Schreiben in die Zwischenablage kann nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) erfolgen.

Weitere Sicherheitsanforderungen sind im Abschnitt [Sicherheitsüberlegungen](/de/docs/Web/API/Clipboard_API#security_considerations) des API-Übersichtsthemas behandelt.

## Beispiele

### Text in die Zwischenablage schreiben

Diese Beispiel-Funktion ersetzt den aktuellen Inhalt der Zwischenablage durch eine angegebene Zeichenkette, wenn ein Button gedrückt wird. Beachten Sie, dass Sie in diesem speziellen Fall ebenso gut `Clipboard.writeText()` verwenden könnten.

```js
button.addEventListener("click", () => setClipboard("<empty clipboard>"));

async function setClipboard(text) {
  const type = "text/plain";
  const blob = new Blob([text], { type });
  const data = [new ClipboardItem({ [type]: blob })];
  await navigator.clipboard.write(data);
}
```

Die `setClipboard()`-Methode beginnt mit der Erstellung eines neuen {{domxref("Blob")}}-Objekts. Dieses Objekt ist erforderlich, um ein {{domxref("ClipboardItem")}}-Objekt zu erstellen, das an die Zwischenablage gesendet wird. Der {{domxref("Blob")}}-Konstruktor nimmt den Inhalt, den wir kopieren möchten, und seinen Typ entgegen. Dieses {{domxref("Blob")}}-Objekt kann aus vielen Quellen abgeleitet werden; zum Beispiel von einem [canvas](/de/docs/Web/API/HTMLCanvasElement).

Anschließend erstellen wir ein neues {{domxref("ClipboardItem")}}-Objekt, in das das Blob zum Senden in die Zwischenablage eingefügt wird. Der Schlüssel des an den {{domxref("ClipboardItem")}}-Konstruktor übergebenen Objekts gibt den Inhaltstyp an, der Wert den Inhalt. Dann wird `write()` mit `await` aufgerufen. Ein `try..catch`-Block könnte verwendet werden, um alle Fehler beim Schreiben der Daten abzufangen.

### Canvas-Inhalte in die Zwischenablage schreiben

Dieses Beispiel zeichnet ein blaues Rechteck auf den Canvas. Sie können auf das Rechteck klicken, um den Inhalt des Canvas als Bild in die Zwischenablage zu kopieren und dann ein anderes Element auswählen und den Inhalt aus der Zwischenablage einfügen.

#### HTML

Das HTML definiert einfach unser `<canvas>`-Element und das `<div>`-Element mit der ID `target`, wo das Canvas-Bild eingefügt wird.

```html
<canvas id="canvas" width="100" height="100"></canvas>

<div id="target">Hier einfügen.</div>
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

Zuerst definieren wir eine `async`-Funktion, um einen Canvas in ein Blob zu kopieren. Diese Funktion umhüllt die alte Callback-basierte {{domxref("HTMLCanvasElement.toBlob()")}}-Methode in die intuitivere `Promise`-basierte Funktion.

```js
// Async/await-Methode ersetzt toBlob() Callback
async function getBlobFromCanvas(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error("Canvas toBlob fehlgeschlagen"));
      }
    });
  });
}
```

Als Nächstes richten wir unseren Canvas ein und fügen einen Event Listener für das `click`-Event hinzu.

Wenn Sie auf das blaue Rechteck klicken, überprüft der Code zuerst, ob die Zwischenablage Daten des Typs `"image/png"` unterstützt. Wenn ja, wird der Canvas, der das Rechteck anzeigt, in ein Blob kopiert, und dann wird das Blob in einen `ClipboardItem` hinzugefügt und in die Zwischenablage geschrieben.

```js
const canvas = document.getElementById("canvas");

// Canvas einrichten
const ctx = canvas.getContext("2d");
ctx.fillStyle = "cornflowerblue";
ctx.fillRect(0, 0, 100, 100);

canvas.addEventListener("click", copyCanvasContentsToClipboard);
const target = document.getElementById("target");

async function copyCanvasContentsToClipboard() {
  if (ClipboardItem.supports("image/png")) {
    // Canvas in Blob kopieren
    try {
      const blob = await getBlobFromCanvas(canvas);
      // ClipboardItem mit Blob und dessen Typ erstellen und einem Array hinzufügen
      const data = [new ClipboardItem({ [blob.type]: blob })];
      // Daten in die Zwischenablage schreiben
      await navigator.clipboard.write(data);
      log("Kopiert");
    } catch (error) {
      log(error);
    }
  } else {
    log("image/png wird nicht unterstützt");
  }
}
```

Beachten Sie, dass die Unterstützung der Zwischenablage für PNG-Dateien ein obligatorischer Teil der Spezifikation ist, sodass wir den obigen Check mit {{domxref("ClipboardItem.supports_static", "ClipboardItem.supports()")}} eigentlich nicht benötigen (er gibt immer `true` zurück). Der Check wäre nützlicher in Fällen, in denen wir einen optionalen Dateityp abrufen oder eine Ressource verwenden, deren Typ wir nicht im Voraus kennen.

Wir definieren dann einen Event Listener für [`paste` Events](/de/docs/Web/API/Element/paste_event) für das Element, bei dem wir den Inhalt der Zwischenablage als Bild anzeigen möchten. Die [FileReader API](/de/docs/Web/API/FileReader) ermöglicht es uns, das Blob mit der [`readAsDataUrl`](/de/docs/Web/API/FileReader/readAsDataURL)-Methode zu lesen und ein `<img>`-Element mit den Canvas-Inhalten zu erstellen:

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

Das Ergebnis ist unten gezeigt. Klicken Sie zuerst auf das blaue Quadrat und wählen Sie dann den Text „Hier einfügen“ aus und verwenden Sie die betriebssystemspezifischen Tastenkombinationen, um aus der Zwischenablage einzufügen (z.B. `Ctrl+V` auf Windows).

{{embedlivesample("write_canvas_contents_to_the_clipboard", "", "420", "", "", "", "clipboard-write")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipboard API](/de/docs/Web/API/Clipboard_API)
- [Bildunterstützung für den Artikel zur asynchronen Zwischenablage](https://web.dev/articles/async-clipboard)
- {{domxref("Clipboard.writeText()")}}
- {{domxref("Clipboard.read()")}}
- {{domxref("Clipboard.readText()")}}
