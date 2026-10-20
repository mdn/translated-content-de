---
title: "Clipboard: Methode write()"
short-title: write()
slug: Web/API/Clipboard/write
l10n:
  sourceCommit: 7b8a3c0a4ab5b4b0c605641e8b64c8da42d8dd51
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

Die Methode **`write()`** der [`Clipboard`](/de/docs/Web/API/Clipboard)-Schnittstelle schreibt Daten wie Bilder, Text und benutzerdefinierte Typen in die Zwischenablage des Systems.

Die Methode erwartet ein Array von [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Instanzen als Argument und gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, sobald die Daten geschrieben wurden.
Jedes `ClipboardItem` kann eine oder mehrere Darstellungen eines kopierten Objekts enthalten. Dadurch können Anwendungen, die die Daten lesen, ihr bevorzugtes Format auswählen.
Das ist flexibler als [`writeText()`](/de/docs/Web/API/Clipboard/writeText), das nur Text schreiben kann.

## Syntax

```js-nolint
write(data)
```

### Parameter

- `data`
  - : Ein Array von [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Objekten mit den Daten, die in die Zwischenablage geschrieben werden sollen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das erfüllt wird, sobald die Daten in die Zwischenablage geschrieben wurden.
Beachten Sie: Wenn das zugrunde liegende Betriebssystem nicht mehrere native Elemente in der Zwischenablage unterstützt, wird nur das erste [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) des Arrays geschrieben.

Das Promise wird abgelehnt, wenn die Daten nicht in die Zwischenablage geschrieben werden können.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Schreiben in die Zwischenablage nicht erlaubt ist.

## Beschreibung

Jedes Element im `data`-Array ist ein [`ClipboardItem`](/de/docs/Web/API/ClipboardItem), das eine oder mehrere Darstellungen der zu schreibenden Daten enthalten kann. Als Schlüssel dient jeweils ein {{Glossary("MIME_type", "MIME-Typ")}}.
Durch mehrere Darstellungen kann eine Anwendung, die die Daten später einfügt, das am besten geeignete Format auswählen, das sie verarbeiten kann.

Browser unterstützen üblicherweise das Schreiben von Text, HTML und PNG-Bilddaten. Möglicherweise unterstützen sie auch benutzerdefinierte Webformate (siehe den Abschnitt [Browser-Kompatibilität](/de/docs/Web/API/ClipboardItem#browser_compatibility) von `ClipboardItem`).

## Sicherheitsaspekte

Das Schreiben in die Zwischenablage ist nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) möglich.

Weitere Sicherheitsanforderungen werden im Abschnitt [Sicherheitsaspekte](/de/docs/Web/API/Clipboard_API#security_considerations) der API-Übersicht behandelt.

## Beispiele

### Text in die Zwischenablage schreiben

Diese Beispielfunktion ersetzt beim Drücken einer Schaltfläche den aktuellen Inhalt der Zwischenablage durch eine angegebene Zeichenfolge.
Beachten Sie, dass Sie in diesem Fall ebenso gut `Clipboard.writeText()` verwenden könnten.

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

Die Funktion `setClipboard()` legt in der Konstante `type` den MIME-Typ `"text/plain"` fest. Anschließend definiert sie ein `clipboardItemData`-Objekt mit einer einzigen Eigenschaft: Deren Schlüssel ist der MIME-Typ und ihr Wert der übergebene Text, der in die Zwischenablage geschrieben werden soll. Danach erstellen wir ein neues [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Objekt und übergeben ihm das `clipboardItemData`-Objekt.

Abschließend wird `write()` mit `await` aufgerufen, um die Daten in die Zwischenablage zu schreiben.

### Canvas-Inhalt in die Zwischenablage schreiben

Dieses Beispiel zeichnet ein blaues Rechteck auf ein Canvas.
Sie können auf das Rechteck klicken, um den Inhalt des Canvas als Bild in die Zwischenablage zu kopieren. Wählen Sie anschließend ein anderes Element aus und fügen Sie den Inhalt aus der Zwischenablage ein.

#### HTML

Das HTML definiert lediglich unser `<canvas>`-Element und das `<div>`-Element mit der id `target`, in das das Canvas-Bild eingefügt wird.

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

Zunächst definieren wir eine `async`-Funktion, um ein Canvas in einen Blob umzuwandeln.
Sie kapselt die ältere, Callback-basierte Methode [`HTMLCanvasElement.toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob) in eine leichter verständliche Funktion auf Basis eines `Promise`.

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

Als Nächstes richten wir das Canvas ein und fügen einen Event-Listener für das `click`-Ereignis hinzu.

Wenn Sie auf das blaue Rechteck klicken, wird das Canvas mit dem Rechteck in einen Blob umgewandelt. Anschließend wird der Blob einem `ClipboardItem` hinzugefügt und in die Zwischenablage geschrieben.

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

Wenn Sie einen weniger gebräuchlichen Dateityp oder eine Ressource abrufen, deren Typ Sie nicht im Voraus kennen, können Sie mit [`ClipboardItem.supports()`](/de/docs/Web/API/ClipboardItem/supports_static) prüfen, ob der Dateityp unterstützt wird. Falls nicht, können Sie eine aussagekräftige Fehlermeldung anzeigen.

Anschließend definieren wir für das Element, in dem der Inhalt der Zwischenablage als Bild angezeigt werden soll, einen Event-Listener für [`paste`-Ereignisse](/de/docs/Web/API/Element/paste_event).
Mit der [FileReader API](/de/docs/Web/API/FileReader) können wir den Blob mithilfe der Methode [`readAsDataUrl`](/de/docs/Web/API/FileReader/readAsDataURL) lesen und ein `<img>`-Element mit dem Canvas-Inhalt erstellen:

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

Das Ergebnis ist unten zu sehen.
Klicken Sie zuerst auf das blaue Quadrat. Wählen Sie dann den Text „Paste here“ aus und verwenden Sie die Tastenkombination Ihres Betriebssystems, um den Inhalt der Zwischenablage einzufügen (beispielsweise `Ctrl+V` unter Windows).

{{embedlivesample("write_canvas_contents_to_the_clipboard", "", "420", "", "", "", "clipboard-write")}}

### Ein benutzerdefiniertes Format in die Zwischenablage schreiben

Dieses Beispiel verwendet denselben Code wie [Benutzerdefinierte Formate lesen und schreiben](/de/docs/Web/API/Clipboard_API#reading_and_writing_custom_formats) in der Übersicht zur Clipboard API, zeigt aber nur den für `write()` relevanten Code.
Weitere Einzelheiten finden Sie in jenem Beispiel.

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

Hier definieren wir den benutzerdefinierten Medientyp („MIME-Typ“), den wir im folgenden Code verwenden.
Außerdem prüfen wir mit [`ClipboardItem.supports()`](/de/docs/Web/API/ClipboardItem/supports_static), ob dieses Format unterstützt wird, und geben das Ergebnis aus.
Das Beispiel funktioniert in beiden Fällen. Wenn das Format nicht unterstützt wird, können wir den benutzerdefinierten Typ lediglich nicht lesen oder schreiben.

```js
const customType = "web text/x-mdn-inventory+json";

log(
  ClipboardItem.supports(customType)
    ? `Custom format supported: ${customType}`
    : `Custom format not supported by this browser: ${customType}`,
);
```

Der folgende Code erstellt das `ClipboardItem`, wenn die Schaltfläche zum Kopieren gedrückt wird.
Er erstellt Darstellungen als `text/html`- und `text/plain`-Blobs und fügt den Blob mit dem benutzerdefinierten Format nur hinzu, wenn `ClipboardItem.supports()` bestätigt, dass der Browser das Format unterstützt.
Der Blob für das benutzerdefinierte Format unterscheidet sich nicht grundsätzlich von den anderen Blobs: Der einzige Unterschied ist das Präfix `web` in seinem Schlüssel.
Der `text/html`-Blob lässt die im benutzerdefinierten Format gespeicherte Spalte `SKU` aus. Er dient als Ausweichformat, wenn der Inhalt in Anwendungen oder Browser eingefügt wird, die das benutzerdefinierte Format nicht unterstützen.

```js
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

```js hidden
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

```js hidden
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

```js hidden
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

Klicken Sie auf die Schaltfläche „Copy“ oder wählen Sie die Tabelle aus und kopieren Sie sie manuell, um sie als HTML, Klartext und – falls unterstützt – im benutzerdefinierten Format in die Zwischenablage zu schreiben.
Klicken Sie auf die drei „Paste“-Schaltflächen, um zu sehen, welche Darstellung jeweils verwendet wird. Eine vollständige Erläuterung finden Sie unter [Benutzerdefinierte Formate lesen und schreiben](/de/docs/Web/API/Clipboard_API#reading_and_writing_custom_formats) in der Übersicht zur Clipboard API.
Klicken Sie auf „Reload“, um das Beispiel zurückzusetzen.

{{EmbedLiveSample("Writing a custom format to the clipboard", "100%", "450", "", "", "", "clipboard-read; clipboard-write")}}

> [!NOTE]
> Erteilen Sie die Berechtigung zum Kopieren und Einfügen, wenn Sie dazu aufgefordert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipboard API](/de/docs/Web/API/Clipboard_API)
- [Artikel zur Bildunterstützung für die Async Clipboard API](https://web.dev/articles/async-clipboard)
- [`Clipboard.writeText()`](/de/docs/Web/API/Clipboard/writeText)
- [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read)
- [`Clipboard.readText()`](/de/docs/Web/API/Clipboard/readText)
