---
title: "Clipboard: read()-Methode"
short-title: read()
slug: Web/API/Clipboard/read
l10n:
  sourceCommit: 7b8a3c0a4ab5b4b0c605641e8b64c8da42d8dd51
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die **`read()`**-Methode der [`Clipboard`](/de/docs/Web/API/Clipboard)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einer Kopie des Zwischenablageninhalts erfüllt wird.

Jedes Element aus der Zwischenablage kann verschiedene Repräsentationen des kopierten Objekts bereitstellen. So können Anwendungen die Typen verarbeiten, die sie verstehen, und für andere Typen auf eine alternative Repräsentation zurückgreifen. Das ist flexibler als [`readText()`](/de/docs/Web/API/Clipboard/readText), das nur Text zurückgeben kann.

## Syntax

```js-nolint
read()
read(formats)
```

### Parameter

- `formats` {{optional_inline}}
  - : Ein optionales Objekt mit der folgenden Eigenschaft:
    - `unsanitized` {{optional_inline}}
      - : Ein {{jsxref("Array")}} aus Zeichenfolgen mit MIME-Typen von Datenformaten, die beim Lesen aus der Zwischenablage nicht bereinigt werden sollen.

        Manche Browser bereinigen Daten beim Lesen aus der Zwischenablage, um zu verhindern, dass schädliche Inhalte in das Dokument eingefügt werden. Chrome (und andere Chromium-basierte Browser) entfernt beispielsweise `<script>`-Tags und andere potenziell gefährliche Inhalte aus HTML-Daten. Verwenden Sie das Array `unsanitized`, um eine Liste von MIME-Typen anzugeben, die nicht bereinigt werden sollen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array von [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Objekten erfüllt wird, die den Inhalt der Zwischenablage enthalten.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Lesen aus der Zwischenablage nicht erlaubt ist.

## Beschreibung

Das erfüllte Promise liefert ein Array von [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Instanzen, die die verschiedenen aus der Zwischenablage gelesenen Elemente repräsentieren. Jedes `ClipboardItem` kann eine oder mehrere Repräsentationen des kopierten Objekts enthalten, die jeweils einem [Medientyp](/de/docs/Web/HTTP/Guides/MIME_types) zugeordnet sind. Eine Webanwendung liest die Formate eines Elements und wählt die beste Repräsentation aus, die sie verarbeiten kann. Beispielsweise könnte ein Element für einen benutzerdefinierten Datentyp in der Zwischenablage eine benutzerdefinierte Repräsentation, eine HTML-Version und eine Nur-Text-Version enthalten. Eine Anwendung, die das benutzerdefinierte Format versteht, kann es direkt verwenden; andernfalls kann sie auf die Text- oder HTML-Version zurückgreifen.

Browser unterstützen üblicherweise das Lesen von Text, HTML und PNG-Bilddaten und können auch benutzerdefinierte Webformate unterstützen (siehe den Abschnitt [Browser-Kompatibilität](/de/docs/Web/API/ClipboardItem#browser_compatibility) zu `ClipboardItem`).

## Sicherheitsaspekte

Das Lesen aus der Zwischenablage ist nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) möglich.

Weitere Sicherheitsanforderungen finden Sie im Abschnitt [Sicherheitsaspekte](/de/docs/Web/API/Clipboard_API#security_considerations) der API-Übersicht.

## Beispiele

### Mehrere Formate aus der Zwischenablage lesen

Dieses Beispiel kopiert Text als einzelnes [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) mit zwei Formatrepräsentationen in die Zwischenablage: `text/html` und `text/plain`. Anschließend liest es die Zwischenablage mit `read()` aus und listet die zurückgegebenen Formate auf.

#### HTML

Zunächst definieren wir das Element `source`, das die HTML-Repräsentation der Daten enthält, die wir kopieren werden. Mit den folgenden Schaltflächen wird der HTML-Inhalt kopiert beziehungsweise werden die zurückgegebenen Elemente aus der Zwischenablage gelesen und protokolliert.

```html
<div id="source">
  <p><strong>Bold</strong> and <em>italic</em> text.</p>
</div>
<button id="copy" type="button">Copy (HTML + plain text)</button>
<button id="inspect" type="button">Read clipboard item</button>
```

Außerdem gibt es ausgeblendeten Code für ein Protokollfeld, der für das Beispiel nicht relevant ist.

```html hidden
<pre id="log"></pre>
```

```css hidden
#source {
  border: 1px solid black;
  padding: 0.5rem;
  width: fit-content;
}

#log {
  height: 130px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
  white-space: pre-wrap;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

Die Schaltfläche „Copy“ erstellt ein `ClipboardItem` mit den beiden MIME-Typ-Schlüsseln `text/html` und `text/plain` und schreibt es als einzelnen Eintrag in die Zwischenablage.

```js
const sourceElement = document.querySelector("#source");
const copyButton = document.querySelector("#copy");

copyButton.addEventListener("click", async () => {
  const html = sourceElement.innerHTML;
  const text = sourceElement.innerText;
  try {
    const clipboardItem = new ClipboardItem({
      "text/html": new Blob([html], { type: "text/html" }),
      "text/plain": new Blob([text], { type: "text/plain" }),
    });
    await navigator.clipboard.write([clipboardItem]);
    log("Copied one ClipboardItem with two formats: text/html and text/plain.");
  } catch (error) {
    log(`Copy failed: ${error.message}`);
  }
});
```

Die Schaltfläche „Read“ ruft `read()` auf und protokolliert alle MIME-Typen, die jedes zurückgegebene `ClipboardItem` enthält. Anschließend ruft sie mit `getType()` die Daten jedes Formats ab und protokolliert sie.

```js
const inspectButton = document.querySelector("#inspect");

inspectButton.addEventListener("click", async () => {
  try {
    const clipboardItems = await navigator.clipboard.read();
    for (const clipboardItem of clipboardItems) {
      log(`ClipboardItem contains: ${clipboardItem.types.join(", ")}`);
      for (const type of clipboardItem.types) {
        const blob = await clipboardItem.getType(type);
        const text = await blob.text();
        log(`  ${type} → ${text}`);
      }
    }
  } catch (error) {
    log(`Read failed: ${error.message}`);
  }
});
```

#### Ergebnis

Klicken Sie zuerst auf die Schaltfläche „Copy“, um das Element sowohl als Text als auch als HTML zu kopieren. Klicken Sie dann auf die Schaltfläche „Read clipboard item“, um es wieder auszulesen und die Formate des Elements aufzulisten.

{{EmbedLiveSample("Reading multiple formats from the clipboard", "100%", "320", "", "", "", "clipboard-read; clipboard-write")}}

> [!NOTE]
> Erteilen Sie die Berechtigung zum Kopieren und Einfügen, falls Sie dazu aufgefordert werden.

### Bilddaten aus der Zwischenablage lesen

Dieses Beispiel verwendet die Methode `read()`, um Bilddaten aus der Zwischenablage zu lesen und in ein {{HTMLElement("img")}}-Element einzufügen.

#### HTML

```html
<img id="source" src="butterfly.jpg" alt="A butterfly" />
<img
  id="destination"
  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
  alt="Pasted image" />
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

Dieser Code ermöglicht es, Fehler im Element mit der ID `log` zu protokollieren.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `Error: ${text}`;
}
```

Außerdem fügen wir Code hinzu, der das Beispiel neu lädt und zurücksetzt, wenn die Schaltfläche „Reload“ gedrückt wird.

```js
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

Der übrige Code liest die Zwischenablage aus, wenn auf das Zielelement geklickt wird, und kopiert die Bilddaten in das Element `destinationImage`. Er protokolliert einen Fehler, wenn die Methode `read()` nicht verwendet werden kann oder die Zwischenablage keine Daten im PNG-Format enthält.

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

Kopieren Sie das Schmetterlingsbild links, indem Sie mit der rechten Maustaste auf das Bild klicken und im Kontextmenü „Bild kopieren“ auswählen. Klicken Sie dann auf den leeren Rahmen rechts. Das Beispiel ruft die Bilddaten aus der Zwischenablage ab und zeigt das Bild im leeren Rahmen an.

{{EmbedLiveSample("Reading image data from clipboard", "100%", "250", "", "", "", "clipboard-read")}}

> [!NOTE]
> Erteilen Sie die Berechtigung zum Einfügen des Bildes, falls Sie dazu aufgefordert werden.

### Daten aus der Zwischenablage lesen

Dieses Beispiel verwendet die Methode `read()`, um Daten aus der Zwischenablage zu lesen und die dort gespeicherten Daten zu protokollieren.

Im Unterschied zum vorherigen Beispiel zeigt es [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Objekte mit Text-, HTML- und Bilddaten an, statt nur Bilder darzustellen.

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

Dieser Code ermöglicht es, Fehler im Element mit der ID `log` zu protokollieren.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `Error: ${text}`;
}
```

Außerdem fügen wir Code hinzu, der das Beispiel neu lädt und zurücksetzt, wenn die Schaltfläche „Reload“ gedrückt wird.

```js
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

Der übrige Code liest die Zwischenablage aus, wenn auf das Zielelement geklickt wird, und zeigt jedes [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) zusammen mit seinem MIME-Typ an. Er protokolliert einen Fehler, wenn die Methode `read()` nicht verwendet werden kann oder die Zwischenablage einen anderen MIME-Typ enthält.

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

Kopieren Sie etwas Text oder das Schmetterlingsbild (JPG) unten. Um ein Bild zu kopieren, klicken Sie mit der rechten Maustaste darauf und wählen Sie im Kontextmenü „Bild kopieren“. Wählen Sie anschließend den angegebenen Rahmen unten aus, um die Informationen aus der Zwischenablage dort einzufügen.

{{EmbedLiveSample("Reading data from the clipboard", "100%", "500", "", "", "", "clipboard-read")}}

Hinweise:

- Obwohl das Schmetterlingsbild eine JPG-Datei ist, liegt es beim Lesen aus der Zwischenablage als PNG vor.
- Falls Sie dazu aufgefordert werden, müssen Sie die Berechtigung zum Einfügen des Bildes erteilen.
- In Chromium-Browsern funktioniert dies möglicherweise nicht, da dem Beispiel-Frame die Berechtigungen `clipboard-read` und `clipboard-write` über die [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) nicht erteilt wurden ([diese werden von Chromium-Browsern benötigt](/de/docs/Web/API/Clipboard_API#security_considerations)).

### Unbereinigtes HTML aus der Zwischenablage lesen

Dieses Beispiel verwendet den Parameter `formats`, um HTML-Daten aus der Zwischenablage zu lesen und den Code in seiner ursprünglichen Form zu erhalten, ohne dass der Browser ihn zuvor bereinigt.

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

Klicken Sie zuerst auf die Schaltfläche „Copy HTML“, um den HTML-Code aus dem ersten Textfeld in die Zwischenablage zu schreiben. Klicken Sie dann entweder auf „Paste HTML“ oder auf „Paste unsanitized HTML“, um den bereinigten beziehungsweise unbereinigten HTML-Code in das zweite Textfeld einzufügen.

{{EmbedLiveSample("Reading unsanitized HTML from the clipboard", "100%", "250", "", "", "", "clipboard-read; clipboard-write")}}

### Ein benutzerdefiniertes Format aus der Zwischenablage lesen

Dieses Beispiel verwendet denselben Code wie [Benutzerdefinierte Formate lesen und schreiben](/de/docs/Web/API/Clipboard_API#reading_and_writing_custom_formats) in der Übersicht zur Clipboard API, zeigt aber nur den Code, der speziell für `read()` relevant ist. Weitere Einzelheiten finden Sie in jenem Beispiel.

#### HTML

```html hidden
<table id="source">
  <thead>
    <tr>
      <th>Item</th>
      <th>Quantity</th>
      <th>SKU</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
<button id="copy_custom" type="button">
  Copy (HTML + text + custom format)
</button>
<button id="reload_custom" type="button">Reload</button>
<p id="status_custom"></p>
```

```html hidden
<div class="targets">
  <div>
    <p>Your app</p>
    <div id="target_app"></div>
    <button id="paste_app" type="button">Paste</button>
  </div>
  <div>
    <p>Arbitrary rich text target</p>
    <div id="target_richtext"></div>
    <button id="paste_richtext" type="button">Paste</button>
  </div>
  <div>
    <p>Arbitrary plain text target</p>
    <div id="target_plaintext"></div>
    <button id="paste_plaintext" type="button">Paste</button>
  </div>
</div>
```

```css hidden
body {
  margin: 1rem;
}

#source {
  border-collapse: collapse;
  margin-bottom: 1rem;
}

#source th,
#source td {
  border: 1px solid black;
  padding: 0.25rem 0.5rem;
}

#status_custom {
  min-height: 1.2em;
  font-style: italic;
}

.targets {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
}

.targets > div {
  flex: 1;
  min-width: 150px;
}

.targets p {
  margin: 0 0 0.25rem;
  font-weight: bold;
}

.targets button {
  margin-top: 0.5rem;
}

#target_app,
#target_richtext,
#target_plaintext {
  box-sizing: border-box;
  width: 100%;
  min-height: 80px;
  border: 1px solid black;
  padding: 0.5rem;
  font-family: inherit;
  font-size: inherit;
  white-space: pre-wrap;
}

#target_app:empty::before,
#target_richtext:empty::before,
#target_plaintext:empty::before {
  content: "Nothing pasted yet";
  color: gray;
}

#target_app table {
  border-collapse: collapse;
}

#target_app th,
#target_app td {
  border: 1px solid black;
  padding: 0.25rem 0.5rem;
}
```

#### JavaScript

```js hidden
const statusElement = document.querySelector("#status_custom");
function log(text) {
  statusElement.textContent = text;
}
```

```js hidden
const inventory = [
  { item: "Apples", quantity: 12, sku: "A-104" },
  { item: "Pears", quantity: 7, sku: "P-221" },
];

function buildRow(cells, cellTag) {
  const tr = document.createElement("tr");
  for (const value of cells) {
    const cell = document.createElement(cellTag);
    cell.textContent = value;
    tr.appendChild(cell);
  }
  return tr;
}
const sourceBody = document.querySelector("#source tbody");
for (const row of inventory) {
  sourceBody.appendChild(buildRow([row.item, row.quantity, row.sku], "td"));
}
```

```js hidden
function buildTable(headers, rows) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  thead.appendChild(buildRow(headers, "th"));
  const tbody = document.createElement("tbody");
  for (const row of rows) {
    tbody.appendChild(buildRow(row, "td"));
  }
  table.append(thead, tbody);
  return table;
}
```

```js hidden
const reload = document.querySelector("#reload_custom");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

Hier definieren wir den benutzerdefinierten Medientyp („MIME-Typ“), den wir im folgenden Code verwenden. Außerdem prüfen wir mit [`ClipboardItem.supports()`](/de/docs/Web/API/ClipboardItem/supports_static), ob dieses Format unterstützt wird, und protokollieren das Ergebnis. Das Beispiel funktioniert unabhängig davon; falls das Format nicht unterstützt wird, können wir den benutzerdefinierten Typ lediglich nicht schreiben oder lesen.

```js
const customType = "web text/x-mdn-inventory+json";

log(
  ClipboardItem.supports(customType)
    ? `Custom format supported: ${customType}`
    : `Custom format not supported by this browser: ${customType}`,
);
```

```js hidden
const sourceTable = document.querySelector("#source");
const copyButton = document.querySelector("#copy_custom");

async function copyInventory() {
  const reducedTable = buildTable(
    ["Item", "Quantity"],
    inventory.map((row) => [row.item, row.quantity]),
  );
  const html = reducedTable.outerHTML;
  const text = inventory
    .map((row) => `${row.item}\t${row.quantity}`)
    .join("\n");

  const data = {
    "text/html": new Blob([html], { type: "text/html" }),
    "text/plain": new Blob([text], { type: "text/plain" }),
  };
  if (ClipboardItem.supports(customType)) {
    const json = JSON.stringify(inventory);
    data[customType] = new Blob([json], { type: customType });
  }

  try {
    await navigator.clipboard.write([new ClipboardItem(data)]);
    log(`Copied ${Object.keys(data).length} format(s) to the clipboard.`);
  } catch (error) {
    log(`Copy failed: ${error.message}`);
  }
}

copyButton.addEventListener("click", copyInventory);

document.addEventListener("copy", (event) => {
  const selection = document.getSelection();
  if (!sourceTable.contains(selection.anchorNode)) return;
  event.preventDefault();
  copyInventory();
});
```

Dieser Code zeigt den Event-Listener für die Schaltfläche, mit der der Inhalt der Zwischenablage in das Feld „Your app“ eingefügt wird. Er liest die Zwischenablage, ruft das erste Element ab, prüft, ob es unseren oben definierten benutzerdefinierten Typ enthält, und ruft dann dessen Repräsentation ab. Anschließend erstellt er daraus die Tabelle und schreibt sie in das Feld.

```js
const targetApp = document.querySelector("#target_app");
const pasteAppButton = document.querySelector("#paste_app");

pasteAppButton.addEventListener("click", async () => {
  try {
    const [clipboardItem] = await navigator.clipboard.read();
    if (clipboardItem.types.includes(customType)) {
      const blob = await clipboardItem.getType(customType);
      const rows = JSON.parse(await blob.text());
      const table = buildTable(
        ["Item", "Quantity", "SKU"],
        rows.map((row) => [row.item, row.quantity, row.sku]),
      );
      targetApp.replaceChildren(table);
    } else {
      targetApp.textContent = "Custom format not on the clipboard.";
    }
  } catch (error) {
    targetApp.textContent = `Paste failed: ${error.message}`;
  }
});
```

Der Event-Handler der Schaltfläche „Arbitrary rich text target“ geht genauso vor, verwendet aber die Repräsentation `text/html` und stellt sie mit `innerHTML` dar. Da das kopierte HTML nur `item` und `quantity` enthält, zeigt dieses Zielfeld eine Tabelle ohne `SKU`-Spalte.

```js
const targetRichtext = document.querySelector("#target_richtext");
const pasteRichtextButton = document.querySelector("#paste_richtext");

pasteRichtextButton.addEventListener("click", async () => {
  try {
    const [clipboardItem] = await navigator.clipboard.read();
    if (clipboardItem.types.includes("text/html")) {
      const blob = await clipboardItem.getType("text/html");
      targetRichtext.innerHTML = await blob.text();
    } else {
      targetRichtext.textContent = "No text/html on the clipboard.";
    }
  } catch (error) {
    targetRichtext.textContent = `Paste failed: ${error.message}`;
  }
});
```

Die Schaltfläche „Arbitrary plain text target“ verwendet die Repräsentation `text/plain`.

```js
const targetPlaintext = document.querySelector("#target_plaintext");
const pastePlaintextButton = document.querySelector("#paste_plaintext");

pastePlaintextButton.addEventListener("click", async () => {
  try {
    const [clipboardItem] = await navigator.clipboard.read();
    if (clipboardItem.types.includes("text/plain")) {
      const blob = await clipboardItem.getType("text/plain");
      targetPlaintext.textContent = await blob.text();
    } else {
      targetPlaintext.textContent = "No text/plain on the clipboard.";
    }
  } catch (error) {
    targetPlaintext.textContent = `Paste failed: ${error.message}`;
  }
});
```

#### Ergebnis

Klicken Sie auf die Schaltfläche „Copy“ oder wählen Sie die Tabelle aus und kopieren Sie sie manuell, um sie als HTML, Nur-Text und – sofern unterstützt – im benutzerdefinierten Format zu kopieren. Klicken Sie dann auf jede der drei „Paste“-Schaltflächen, um zu vergleichen, was die einzelnen Zielfelder abrufen. Klicken Sie auf „Reload“, um das Beispiel zurückzusetzen.

{{EmbedLiveSample("Reading a custom format from the clipboard", "100%", "450", "", "", "", "clipboard-read; clipboard-write")}}

> [!NOTE]
> Erteilen Sie die Berechtigung zum Kopieren und Einfügen, falls Sie dazu aufgefordert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipboard API](/de/docs/Web/API/Clipboard_API)
- [Zugriff auf die Zwischenablage ermöglichen](https://web.dev/articles/async-clipboard) auf web.dev
- [Unbereinigtes HTML in der Async Clipboard API](https://developer.chrome.com/docs/web-platform/unsanitized-html-async-clipboard) auf developer.chrome.com
- [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText)
- [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText)
- [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write)
