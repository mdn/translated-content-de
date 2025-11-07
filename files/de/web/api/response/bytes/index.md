---
title: "Response: bytes() Methode"
short-title: bytes()
slug: Web/API/Response/bytes
l10n:
  sourceCommit: 562051c4ad20e9ecb5faf905286cdfca545a340d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`bytes()`** Methode der [`Response`](/de/docs/Web/API/Response) Schnittstelle nimmt einen [`Response`](/de/docs/Web/API/Response) Stream und liest diesen vollständig aus.
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

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Anfrage wurde [abgebrochen](/de/docs/Web/API/Fetch_API/Using_Fetch#canceling_a_request).
- {{jsxref("TypeError")}}
  - : Wird aus einem der folgenden Gründe ausgelöst:
    - Der Antwortkörper ist [gestört oder gesperrt](/de/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - Es gab einen Fehler beim Dekodieren des Inhalts des Körpers (zum Beispiel, weil der {{httpheader("Content-Encoding")}} Header falsch ist).
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn es ein Problem bei der Erstellung des zugehörigen `ArrayBuffer` gibt (zum Beispiel, wenn die Datenmenge zu groß ist).

## Beispiele

### Abrufen und Dekodieren einer Datei

Der untenstehende Code zeigt, wie Sie eine Textdatei abrufen, den Körper als ein {{jsxref("Uint8Array")}} zurückgeben und diesen dann in einen String dekodieren können.

```js
const response = await fetch("https://www.example.com/textfile.txt");
const textFile = await response.bytes();
const string = new TextDecoder().decode(textFile);
console.log(string);
```

### Abrufen einer Bilddateisignatur

Dieses Beispiel demonstriert, wie Sie `bytes()` verwenden können, um die Signaturbytes einer Anzahl von Bilddateien zu lesen und den Typ zu identifizieren.

#### HTML

Zuerst definieren wir ein {{htmlelement("select")}} Element zur Auswahl des Dateityps, mit entsprechenden Werten, die auf die spezifische Datei auf WikiMedia Commons hinweisen, die abgerufen werden soll.

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
Wird die Methode unterstützt, fügt es einen Event-Handler für das [`change` event](/de/docs/Web/API/HTMLElement/change_event) auf dem `<select>` Element hinzu.
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

Die `checkSignature()` Methode ist unten definiert.
Diese ruft eine Datei unter der angegebenen `url` ab und verwendet `response.bytes()`, um deren Inhalt als Byte-Array zu erhalten.
Die ersten Bytes werden dann mit den anfänglichen Signaturbytes einer Anzahl von gängigen Dateitypen verglichen.
Der Dateiname und der Dateityp werden dann protokolliert.

```js
async function checkSignature(url) {
  if (url === "") return;
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

Wählen Sie einen Bildtyp aus der Auswahlliste.
Das Protokoll sollte dann den Dateinamen sowie den aus der Signatur der Datei ermittelten Dateityp anzeigen.

{{EmbedLiveSample("Getting an image file signature", "100", "200px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
