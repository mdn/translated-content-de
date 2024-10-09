---
title: "Response: bytes() Methode"
short-title: bytes()
slug: Web/API/Response/bytes
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`bytes()`** Methode der [`Response`](/de/docs/Web/API/Response) Schnittstelle nimmt einen [`Response`](/de/docs/Web/API/Response) Stream und liest ihn vollständig aus.
Sie gibt ein Promise zurück, das mit einem {{jsxref("Uint8Array")}} aufgelöst wird.

## Syntax

```js-nolint
bytes()
```

### Parameter

Keine.

### Rückgabewert

Ein Promise, das mit einem {{jsxref("Uint8Array")}} aufgelöst wird.

### Ausnahmen

- [`DOMException`](/de/docs/Web/API/DOMException) `AbortError`
  - : Die Anfrage wurde [abgebrochen](/de/docs/Web/API/Fetch_API/Using_Fetch#canceling_a_request).
- {{jsxref("TypeError")}}
  - : Ausgelöst aus einem der folgenden Gründe:
    - Der Antwortkörper ist [gestört oder gesperrt](/de/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - Es gab einen Fehler beim Dekodieren des Körperinhalts (zum Beispiel, weil der {{httpheader("Content-Encoding")}} Header falsch ist).
- {{jsxref("RangeError")}}
  - : Es gab ein Problem beim Erstellen des zugehörigen `ArrayBuffer`.
    Zum Beispiel, wenn die Datengröße mehr als [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) beträgt.

## Beispiele

### Herunterladen und Dekodieren einer Datei

Der folgende Code zeigt, wie Sie eine Textdatei abrufen, den Körper als {{jsxref("Uint8Array")}} zurückgeben und dann in einen String dekodieren können.

```js
const response = await fetch("https://www.example.com/textfile.txt");
const textFile = await response.bytes();
const string = new TextDecoder().decode(textFile);
console.log(string);
```

### Eine Bilddateisignatur abrufen

Dieses Beispiel zeigt, wie Sie mit `bytes()` die Signaturbytes mehrerer Bilddateien lesen und den Typ identifizieren können.

#### HTML

Zuerst definieren wir ein {{htmlelement("select")}} Element zur Auswahl des Dateityps mit entsprechenden Werten, die die spezifische Datei auf WikiMedia Commons anzeigen, die abgerufen werden soll.

```html
<label for="file-select">Choose a file:</label>

<select name="Files" id="file-select">
  <option value="">--Select an image type--</option>
  <option
    value="https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png">
    PNG
  </option>
  <option
    value="https://upload.wikimedia.org/wikipedia/commons/a/a9/Example.jpg">
    JPG
  </option>
  <option
    value="https://upload.wikimedia.org/wikipedia/commons/8/8f/Example.gif">
    GIF89a
  </option>
</select>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
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

Der Code prüft zunächst, ob die `bytes()` Methode unterstützt wird.
Wenn die Methode unterstützt wird, wird ein Ereignishandler für das [`change` event](/de/docs/Web/API/HTMLElement/change_event) am `<select>` Element hinzugefügt.
Wenn sich der Wert ändert, wird der Wert der Auswahl (eine URL für eine Bilddatei) an die unten definierte `checkSignature()` Methode übergeben.
Wenn die Methode nicht unterstützt wird, wird diese Information protokolliert.

```js
if ("bytes" in Response.prototype) {
  const selectFileElement = document.getElementById("file-select");
  selectFileElement.addEventListener("change", (event) => {
    try {
      checkSignature(event.target.value);
    } catch (e) {
      log(e);
    }
  });
} else {
  log("Response.bytes() not supported");
}
```

Die `checkSignature()` Methode wird unten definiert.
Diese ruft eine Datei an der gegebenen `url` ab und verwendet `response.bytes()`, um ihren Inhalt als Byte-Array zu erhalten.
Die initialen Bytes werden dann mit den initialen Signaturbytes einer Reihe von gängigen Dateitypen verglichen.
Der Dateiname und der Dateityp werden anschließend protokolliert.

```js
async function checkSignature(url) {
  if (url == "") return;
  log(`File: ${url}`);
  const response = await fetch(url);
  const image = await response.bytes();

  // File signatures from: https://en.wikipedia.org/wiki/List_of_file_signatures
  const jpgSignature = [0xff, 0xd8, 0xff, 0xe0];
  const pngSignature = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
  const gif89aSignature = [0x47, 0x49, 0x46, 0x38, 0x39, 0x61];

  if (
    image
      .slice(0, jpgSignature.length)
      .every((byte, index) => byte === jpgSignature[index])
  ) {
    log(`JPG signature: FF D8 FF E0`);
  } else if (
    image
      .slice(0, pngSignature.length)
      .every((byte, index) => byte === pngSignature[index])
  ) {
    log(`PNG signature: 89 50 4E 47 0D 0A 1A 0A`);
  } else if (
    image
      .slice(0, gif89aSignature.length)
      .every((byte, index) => byte === gif89aSignature[index])
  ) {
    log(`GIF (GIF89a) signature: 47 49 46 38 39 61`);
  } else {
    log("Unknown format");
  }
}
```

#### Ergebnis

Wählen Sie einen Bildtyp aus der Auswahlliste aus.
Das Protokoll sollte dann den Dateinamen zusammen mit dem Dateityp anzeigen, der aus der Dateisignatur bestimmt wurde.

{{EmbedLiveSample("Getting an image file signature", "100", "200px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
