---
title: "Antwort: `arrayBuffer()` Methode"
short-title: arrayBuffer()
slug: Web/API/Response/arrayBuffer
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`arrayBuffer()`** Methode des [`Response`](/de/docs/Web/API/Response)-Interfaces
nimmt einen [`Response`](/de/docs/Web/API/Response) Stream und liest ihn vollständig aus. Sie gibt ein Versprechen zurück, das mit einem {{jsxref("ArrayBuffer")}} aufgelöst wird.

## Syntax

```js-nolint
arrayBuffer()
```

### Parameter

Keine.

### Rückgabewert

Ein Versprechen, das mit einem {{jsxref("ArrayBuffer")}} aufgelöst wird.

### Ausnahmen

- [`DOMException`](/de/docs/Web/API/DOMException) `AbortError`
  - : Die Anfrage wurde [abgebrochen](/de/docs/Web/API/Fetch_API/Using_Fetch#canceling_a_request).
- {{jsxref("TypeError")}}
  - : Wird aus einem der folgenden Gründe ausgelöst:
    - Der Antwortkörper ist [gestört oder gesperrt](/de/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - Beim Dekodieren des Körperinhalts trat ein Fehler auf (zum Beispiel, weil der {{httpheader("Content-Encoding")}}-Header nicht korrekt ist).
- {{jsxref("RangeError")}}
  - : Es gab ein Problem beim Erstellen des zugehörigen `ArrayBuffer`.
    Zum Beispiel, wenn die Datengröße mehr als [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) beträgt.

## Beispiele

### Musik abspielen

In unserem [fetch array buffer live](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-array-buffer) haben wir einen Abspiel-Button. Wenn dieser gedrückt wird, wird die `getData()`
Funktion ausgeführt. Beachten Sie, dass, bevor die vollständige Audiodatei abgespielt wird, sie heruntergeladen wird. Wenn Sie
ogg während des Herunterladens abspielen müssen (es streamen) - erwägen Sie die Verwendung von
[`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement):

```js
new Audio("music.ogg").play();
```

In `getData()` erstellen wir eine neue Anfrage mithilfe des
[`Request()`](/de/docs/Web/API/Request/Request) Konstruktors und nutzen diese, um eine OGG-Musikspur abzurufen. Wir verwenden auch [`AudioContext.createBufferSource`](/de/docs/Web/API/BaseAudioContext/createBufferSource), um eine
Audio-Buffer-Quelle zu erstellen. Wenn das Abrufen erfolgreich ist, lesen wir einen {{jsxref("ArrayBuffer")}}
aus der Antwort mithilfe von `arrayBuffer()`, dekodieren die Audiodaten mit
[`AudioContext.decodeAudioData()`](/de/docs/Web/API/BaseAudioContext/decodeAudioData), setzen die dekodierten Daten als Puffer der Audioquelle
(`source.buffer`), und verbinden die Quelle mit der
[`AudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination).

Sobald `getData()` fertig ist, beginnen wir, die Audioquelle mit `start(0)` abzuspielen, und deaktivieren den Abspiel-Button, damit er nicht erneut geklickt werden kann, während bereits abgespielt wird (das würde einen Fehler verursachen).

```js
function getData() {
  const audioCtx = new AudioContext();

  return fetch("viper.ogg")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error, status = ${response.status}`);
      }
      return response.arrayBuffer();
    })
    .then((buffer) => audioCtx.decodeAudioData(buffer))
    .then((decodedData) => {
      const source = new AudioBufferSourceNode(audioCtx);
      source.buffer = decodedData;
      source.connect(audioCtx.destination);
      return source;
    });
}

// wire up buttons to stop and play audio

play.onclick = () => {
  getData().then((source) => {
    source.start(0);
    play.setAttribute("disabled", "disabled");
  });
};
```

### Dateien lesen

Der [`Response()`](/de/docs/Web/API/Response/Response) Konstruktor akzeptiert
[`File`](/de/docs/Web/API/File)s und [`Blob`](/de/docs/Web/API/Blob)s, daher kann er verwendet werden, um eine
[`File`](/de/docs/Web/API/File) in andere Formate zu lesen.

```html
<input type="file" />
```

```js
function readFile(file) {
  return new Response(file).arrayBuffer();
}

document
  .querySelector("input[type=file]")
  .addEventListener("change", (event) => {
    const file = event.target.files[0];
    const buffer = readFile(file);
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
