---
title: "Clipboard: read() Methode"
short-title: read()
slug: Web/API/Clipboard/read
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die **`read()`** Methode der [`Clipboard`](/de/docs/Web/API/Clipboard)-Schnittstelle fordert eine Kopie der Inhalte der Zwischenablage an und erfüllt das zurückgegebene {{jsxref("Promise")}} mit den Daten.

Die Methode kann theoretisch beliebige Daten zurückgeben (im Gegensatz zu [`readText()`](/de/docs/Web/API/Clipboard/readText), die nur Text zurückgeben kann). Browser unterstützen üblicherweise das Lesen von Text, HTML und PNG-Bilddaten.

## Syntax

```js-nolint
read()
read(formats)
```

### Parameter

- `formats` {{optional_inline}}
  - : Ein optionales Objekt mit den folgenden Eigenschaften:
    - `unsanitized` {{optional_inline}}
      - : Ein {{jsxref("Array")}} von Zeichenfolgen, das MIME-Typen von Datenformaten enthält, die beim Lesen von der Zwischenablage nicht bereinigt werden sollen.

        Bestimmte Browser können die Daten der Zwischenablage bereinigen, wenn sie gelesen werden, um zu verhindern, dass schädliche Inhalte in das Dokument eingefügt werden. Beispielsweise bereinigt Chrome (und andere auf Chromium basierende Browser) HTML-Daten durch das Entfernen von `<script>`-Tags und anderen potenziell gefährlichen Inhalten. Verwenden Sie das `unsanitized`-Array, um eine Liste von MIME-Typen anzugeben, die nicht bereinigt werden sollen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Objekten aufgelöst wird, die die Inhalte der Zwischenablage enthalten.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Lesen von der Zwischenablage nicht erlaubt ist.

## Sicherheitsüberlegungen

Das Lesen von der Zwischenablage kann nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) erfolgen.

Zusätzliche Sicherheitsanforderungen werden im Abschnitt [Sicherheitsüberlegungen](/de/docs/Web/API/Clipboard_API#security_considerations) des API-Übersichtsthemas behandelt.

## Beispiele

### Bilddaten aus der Zwischenablage lesen

Dieses Beispiel verwendet die `read()`-Methode, um Bilddaten aus der Zwischenablage zu lesen und in ein {{HTMLElement("img")}}-Element einzufügen.

#### HTML

```html
<img id="source" src="butterfly.jpg" alt="A butterfly" />
<img id="destination" src="" alt="Pasted image" />
<button id="reload" type="button">Reload</button>
<p id="log"></p>
```

#### CSS

```css
img {
  height: 100px;
  width: 100px;
  margin: 0 1rem;
  border: 1px solid black;
}
#reload {
  display: block;
  margin: 0 1rem;
}
```

#### JavaScript

Dieser Code bietet einen Mechanismus, um Fehler in das Element mit der ID `log` zu protokollieren.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `Error: ${text}`;
}
```

Wir fügen auch Code hinzu, um das Beispiel neu zu laden und zu löschen, wenn die Schaltfläche "Neu laden" gedrückt wird.

```js
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

Der verbleibende Code liest die Zwischenablage, wenn das Zielelement angeklickt wird, und kopiert die Bilddaten in das `destinationImage`-Element. Es protokolliert einen Fehler, wenn es die `read()`-Methode nicht verwenden kann oder wenn die Zwischenablage keine Daten im PNG-Format enthält.

```js
const destinationImage = document.querySelector("#destination");
destinationImage.addEventListener("click", pasteImage);

async function pasteImage() {
  try {
    const clipboardContents = await navigator.clipboard.read();
    for (const item of clipboardContents) {
      if (!item.types.includes("image/png")) {
        throw new Error("Clipboard does not contain PNG image data.");
      }
      const blob = await item.getType("image/png");
      destinationImage.src = URL.createObjectURL(blob);
    }
  } catch (error) {
    log(error.message);
  }
}
```

#### Ergebnis

Kopieren Sie das Schmetterlingsbild auf der linken Seite, indem Sie mit der rechten Maustaste auf das Bild klicken und "Bild kopieren" aus dem Kontextmenü auswählen. Klicken Sie dann auf den leeren Rahmen auf der rechten Seite. Das Beispiel ruft die Bilddaten aus der Zwischenablage ab und zeigt das Bild im leeren Rahmen an.

{{EmbedLiveSample("Bilddaten aus der Zwischenablage lesen", "100%", "250", "", "", "", "clipboard-read")}}

> [!NOTE]
> Wenn Sie dazu aufgefordert werden, gewähren Sie die Erlaubnis, um das Bild einzufügen.

### Daten aus der Zwischenablage lesen

Dieses Beispiel verwendet die `read()`-Methode, um Daten aus der Zwischenablage zu lesen und alle im Clipboard gespeicherten Daten zu protokollieren.

Dies unterscheidet sich von der vorherigen Version, indem es Text-, HTML- und Bild- [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Objekte anzeigt (anstatt nur Bilder).

#### HTML

```html
<img id="source_jpg" src="butterfly.jpg" alt="JPG butterfly image" />
<div id="destination">Click here to copy clipboard data.</div>
<button id="reload" type="button">Reload</button>
<p id="log"></p>
```

#### CSS

```css
img {
  height: 100px;
  width: 100px;
  margin: 0 1rem;
  border: 1px solid black;
}

#destination {
  min-height: 300px;
  min-width: 90%;
  margin: 0 1rem;
  border: 1px solid black;
}

#reload {
  display: block;
  margin: 0 1rem;
}
```

#### JavaScript

Dieser Code bietet einen Mechanismus, um Fehler in das Element mit der ID `log` zu protokollieren.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `Error: ${text}`;
}
```

Wir fügen auch Code hinzu, um das Beispiel neu zu laden und zu löschen, wenn die Schaltfläche "Neu laden" gedrückt wird.

```js
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

Der verbleibende Code liest die Zwischenablage, wenn das Zielelement angeklickt wird, und zeigt jedes [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Element zusammen mit seinem MIME-Typ an. Es protokolliert einen Fehler, wenn es die `read()`-Methode nicht verwenden kann oder wenn die Zwischenablage einen anderen MIME-Typ enthält.

```js
const destinationDiv = document.querySelector("#destination");
destinationDiv.addEventListener("click", pasteData);

async function pasteData() {
  destinationDiv.innerText = ""; // Clear inner text
  try {
    const clipboardContents = await navigator.clipboard.read();
    for (const item of clipboardContents) {
      for (const mimeType of item.types) {
        const mimeTypeElement = document.createElement("p");
        mimeTypeElement.innerText = `MIME type: ${mimeType}`;
        destinationDiv.appendChild(mimeTypeElement);
        if (mimeType === "image/png") {
          const pngImage = new Image();
          pngImage.alt = "PNG image from clipboard";
          const blob = await item.getType("image/png");
          pngImage.src = URL.createObjectURL(blob);
          destinationDiv.appendChild(pngImage);
        } else if (mimeType === "text/html") {
          const blob = await item.getType("text/html");
          const blobText = await blob.text();
          const clipHTML = document.createElement("pre");
          clipHTML.innerText = blobText;
          destinationDiv.appendChild(clipHTML);
        } else if (mimeType === "text/plain") {
          const blob = await item.getType("text/plain");
          const blobText = await blob.text();
          const clipPlain = document.createElement("pre");
          clipPlain.innerText = blobText;
          destinationDiv.appendChild(clipPlain);
        } else {
          throw new Error(`${mimeType} not supported.`);
        }
      }
    }
  } catch (error) {
    log(error.message);
  }
}
```

#### Ergebnis

Kopieren Sie etwas Text oder das Schmetterlingsbild (JPG) unten (um Bilder zu kopieren, klicken Sie mit der rechten Maustaste auf sie und wählen Sie dann "Bild kopieren" aus dem Kontextmenü). Wählen Sie den angegebenen Rahmen unten aus, um diese Informationen aus der Zwischenablage in den Rahmen einzufügen.

{{EmbedLiveSample("Daten aus der Zwischenablage lesen", "100%", "500", "", "", "", "clipboard-read")}}

Hinweise:

- Obwohl das Schmetterlingsbild eine JPG-Datei ist, ist es beim Lesen aus der Zwischenablage ein PNG.
- Wenn Sie dazu aufgefordert werden, müssen Sie die Erlaubnis gewähren, um das Bild einzufügen.
- Dies funktioniert möglicherweise nicht in Chromium-Browsern, da dem Beispielrahmen nicht die [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) `clipboard-read` und `clipboard-write` Berechtigungen erteilt werden ([erforderlich von Chromium-Browsern](/de/docs/Web/API/Clipboard_API#security_considerations)).

### Nicht bereinigtes HTML aus der Zwischenablage lesen

Dieses Beispiel verwendet den `formats`-Parameter, um HTML-Daten aus der Zwischenablage zu lesen und den Code in seiner Originalform zu erhalten, ohne dass der Browser ihn zuerst bereinigt.

#### HTML

```html
<textarea id="source" rows="5">
  <style>h1 {color: red;} p {color: blue;}</style>
  <h1>Hello world!</h1>
  <p>This is a test.</p>
  <script>alert('Hello world!');</script>
</textarea>
<button id="copy">Copy HTML</button>
<button id="paste_normal">Paste HTML</button>
<button id="paste_unsanitized">Paste unsanitized HTML</button>
<textarea id="destination" rows="5"></textarea>
```

#### CSS

```css
body {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
}

textarea {
  grid-column: 1 / span 3;
}
```

#### JavaScript

```js
const copyButton = document.getElementById("copy");
const pasteButton = document.getElementById("paste_normal");
const pasteUnsanitizedButton = document.getElementById("paste_unsanitized");
const sourceTextarea = document.getElementById("source");
const destinationTextarea = document.getElementById("destination");

copyButton.addEventListener("click", async () => {
  const text = sourceTextarea.value;
  const type = "text/html";
  const blob = new Blob([text], { type });
  const data = [new ClipboardItem({ [type]: blob })];

  try {
    await navigator.clipboard.write(data);
  } catch (error) {
    destinationTextarea.value = `Clipboard write failed: ${error}`;
  }
});

async function getHTMLFromClipboardContents(clipboardContents) {
  for (const item of clipboardContents) {
    if (item.types.includes("text/html")) {
      const blob = await item.getType("text/html");
      const blobText = await blob.text();
      return blobText;
    }
  }

  return null;
}

pasteButton.addEventListener("click", async () => {
  try {
    const clipboardContents = await navigator.clipboard.read();
    const html = await getHTMLFromClipboardContents(clipboardContents);
    destinationTextarea.value =
      html || "Could not find HTML data in the clipboard.";
  } catch (error) {
    destinationTextarea.value = `Clipboard read failed: ${error}`;
  }
});

pasteUnsanitizedButton.addEventListener("click", async () => {
  try {
    const clipboardContents = await navigator.clipboard.read({
      unsanitized: ["text/html"],
    });
    const html = await getHTMLFromClipboardContents(clipboardContents);
    destinationTextarea.value =
      html || "Could not find HTML data in the clipboard.";
  } catch (error) {
    destinationTextarea.value = `Clipboard read failed: ${error}`;
  }
});
```

#### Ergebnis

Klicken Sie zuerst auf die Schaltfläche "HTML kopieren", um den HTML-Code aus dem ersten Textbereich in die Zwischenablage zu schreiben. Klicken Sie dann entweder auf die Schaltfläche "HTML einfügen" oder auf die Schaltfläche "Nicht bereinigtes HTML einfügen", um den bereinigten oder nicht bereinigten HTML-Code in den zweiten Textbereich einzufügen.

{{EmbedLiveSample("Nicht bereinigtes HTML aus der Zwischenablage lesen", "100%", "250", "", "", "", "clipboard-read; clipboard-write")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipboard API](/de/docs/Web/API/Clipboard_API)
- [Zugriff auf die Zwischenablage freigeben](https://web.dev/articles/async-clipboard) auf web.dev
- [Nicht bereinigtes HTML in der asynchronen Clipboard-API](https://developer.chrome.com/docs/web-platform/unsanitized-html-async-clipboard) auf developer.chrome.com
- [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText)
- [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText)
- [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write)
