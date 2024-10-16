---
title: "Response: arrayBuffer() Methode"
short-title: arrayBuffer()
slug: Web/API/Response/arrayBuffer
l10n:
  sourceCommit: 0479c271c693d195e6ece040616d1bfabe02a888
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`arrayBuffer()`** Methode der [`Response`](/de/docs/Web/API/Response)-Schnittstelle
nimmt einen [`Response`](/de/docs/Web/API/Response)-Stream und liest ihn vollständig aus. Sie gibt ein Promise
zurück, das mit einem {{jsxref("ArrayBuffer")}} aufgelöst wird.

## Syntax

```js-nolint
arrayBuffer()
```

### Parameter

Keine.

### Rückgabewert

Ein Promise, das mit einem {{jsxref("ArrayBuffer")}} aufgelöst wird.

### Ausnahmen

- [`DOMException`](/de/docs/Web/API/DOMException) `AbortError`
  - : Die Anfrage wurde [abgebrochen](/de/docs/Web/API/Fetch_API/Using_Fetch#canceling_a_request).
- {{jsxref("TypeError")}}
  - : Wird aus einem der folgenden Gründe ausgelöst:
    - Der Antwortkörper ist [gestört oder gesperrt](/de/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - Es gab einen Fehler bei der Decodierung des Körperinhalts (zum Beispiel, weil der {{httpheader("Content-Encoding")}}-Header falsch ist).
- {{jsxref("RangeError")}}
  - : Es gab ein Problem bei der Erstellung des zugehörigen `ArrayBuffer`.
    Zum Beispiel, wenn die Datenmenge mehr als [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) ist.

## Beispiele

### Musik abspielen

In unserem [Fetch-ArrayBuffer-Live](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-array-buffer) Beispiel haben wir eine Play-Schaltfläche. Wenn diese gedrückt wird, wird die `getData()`
Funktion ausgeführt. Beachten Sie, dass vor dem Abspielen die vollständige Audiodatei heruntergeladen wird. Wenn Sie
OGG während des Herunterladens abspielen müssen (streamen), ziehen Sie in Betracht, den [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) zu verwenden:

```js
new Audio("music.ogg").play();
```

In `getData()` erstellen wir eine neue Anfrage mit dem
[`Request()`](/de/docs/Web/API/Request/Request) Konstruktor und verwenden diese, um eine OGG
Musikdatei zu holen. Wir verwenden auch [`AudioContext.createBufferSource`](/de/docs/Web/API/BaseAudioContext/createBufferSource), um eine
Audio-Pufferquelle zu erstellen. Wenn der Abruf erfolgreich ist, lesen wir ein {{jsxref("ArrayBuffer")}}
aus der Antwort mit `arrayBuffer()`, decodieren die Audiodaten mit
[`AudioContext.decodeAudioData()`](/de/docs/Web/API/BaseAudioContext/decodeAudioData), setzen die decodierten Daten als Puffer der Audioquelle
(`source.buffer`), dann verbinden wir die Quelle mit dem
[`AudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination).

Sobald `getData()` abgeschlossen ist, starten wir die Audioquelle mit
`start(0)`, und deaktivieren die Play-Schaltfläche, damit sie nicht nochmals
geklickt werden kann, während sie bereits spielt (dies würde einen Fehler verursachen).

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
[`File`](/de/docs/Web/API/File)s und [`Blob`](/de/docs/Web/API/Blob)s, sodass er verwendet werden kann, um eine
[`File`](/de/docs/Web/API/File) in andere Formate zu lesen.

```js
function readFile(file) {
  return new Response(file).arrayBuffer();
}
```

```html
<input type="file" onchange="readFile(this.files[0])" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
