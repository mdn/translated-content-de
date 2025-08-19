---
title: "Response: arrayBuffer() Methode"
short-title: arrayBuffer()
slug: Web/API/Response/arrayBuffer
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`arrayBuffer()`**-Methode des [`Response`](/de/docs/Web/API/Response)-Interfaces
nimmt einen [`Response`](/de/docs/Web/API/Response)-Stream und liest ihn bis zum Abschluss. Sie gibt ein `Promise` zurück,
das mit einem {{jsxref("ArrayBuffer")}} aufgelöst wird.

## Syntax

```js-nolint
arrayBuffer()
```

### Parameter

Keine.

### Rückgabewert

Ein `Promise`, das mit einem {{jsxref("ArrayBuffer")}} aufgelöst wird.

### Ausnahmen

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Anfrage wurde [abgebrochen](/de/docs/Web/API/Fetch_API/Using_Fetch#canceling_a_request).
- {{jsxref("TypeError")}}
  - : Wird bei einem der folgenden Gründe ausgelöst:
    - Der Antwortkörper ist [gestört oder gesperrt](/de/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - Es gab einen Fehler beim Dekodieren des Körperinhalts (zum Beispiel, weil der {{httpheader("Content-Encoding")}}-Header falsch ist).
- {{jsxref("RangeError")}}
  - : Es gab ein Problem bei der Erstellung des zugehörigen `ArrayBuffer`.
    Zum Beispiel, wenn die Datengröße größer ist als [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER).

## Beispiele

### Musik abspielen

In unserem [fetch array buffer live](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-array-buffer) haben wir eine Wiedergabe-Taste. Wenn diese gedrückt wird, wird die `getData()`
Funktion ausgeführt. Beachten Sie, dass vor der Wiedergabe die gesamte Audiodatei heruntergeladen wird. Wenn Sie
OGG während des Herunterladens abspielen müssen (streamen), sollten Sie
[`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) in Betracht ziehen:

```js
new Audio("music.ogg").play();
```

In `getData()` erstellen wir eine neue Anfrage unter Verwendung des
[`Request()`](/de/docs/Web/API/Request/Request)-Konstruktors und verwenden sie dann, um eine OGG
Musikspur abzurufen. Wir verwenden auch [`AudioContext.createBufferSource`](/de/docs/Web/API/BaseAudioContext/createBufferSource), um eine
Audiopufferquelle zu erstellen. Wenn der Abruf erfolgreich ist, lesen wir ein {{jsxref("ArrayBuffer")}}
aus der Antwort mit `arrayBuffer()`, dekodieren die Audiodaten mit
[`AudioContext.decodeAudioData()`](/de/docs/Web/API/BaseAudioContext/decodeAudioData), setzen die dekodierten Daten als den Audiodatenpuffer
Quelle (`source.buffer`), und verbinden dann die Quelle mit dem
[`AudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination).

Sobald `getData()` fertig ausgeführt ist, starten wir die Audiquelle mit
`start(0)`, und deaktivieren dann die Wiedergabe-Schaltfläche, damit sie nicht erneut
geklickt werden kann, während sie bereits abgespielt wird (dies würde einen Fehler verursachen).

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

Der [`Response()`](/de/docs/Web/API/Response/Response)-Konstruktor akzeptiert
[`File`](/de/docs/Web/API/File)s und [`Blob`](/de/docs/Web/API/Blob)s, sodass er verwendet werden kann, um eine
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
