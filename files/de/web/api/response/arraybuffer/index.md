---
title: "Response: arrayBuffer() Methode"
short-title: arrayBuffer()
slug: Web/API/Response/arrayBuffer
l10n:
  sourceCommit: 889fd7ca9d03276638ec065e47ea967c1a2fc10b
---

{{APIRef("Fetch API")}}

Die **`arrayBuffer()`**-Methode der [`Response`](/de/docs/Web/API/Response)-Schnittstelle nimmt einen [`Response`](/de/docs/Web/API/Response)-Stream und liest ihn bis zum Ende. Sie gibt ein Promise zurück, das mit einem {{jsxref("ArrayBuffer")}} aufgelöst wird.

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
    - Es gab einen Fehler beim Dekodieren des Inhalts des Körpers (zum Beispiel, weil der {{httpheader("Content-Encoding")}}-Header falsch ist).
- {{jsxref("RangeError")}}
  - : Es gab ein Problem beim Erstellen des zugeordneten `ArrayBuffer`. Zum Beispiel, wenn die Datengröße mehr als [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) beträgt.

## Beispiele

### Musik abspielen

In unserem [fetch array buffer live](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-array-buffer) Beispiel haben wir eine Wiedergabe-Schaltfläche. Wenn diese gedrückt wird, wird die Funktion `getData()` ausgeführt. Beachten Sie, dass vor dem Abspielen die komplette Audiodatei heruntergeladen wird. Wenn Sie während des Herunterladens OGG abspielen müssen (streamen), ziehen Sie den [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) in Betracht:

```js
new Audio("music.ogg").play();
```

In `getData()` erstellen wir eine neue Anfrage unter Verwendung des [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktors und nutzen ihn, um eine OGG-Musikspur abzurufen. Wir verwenden auch [`AudioContext.createBufferSource`](/de/docs/Web/API/BaseAudioContext/createBufferSource), um eine Audio-Buffer-Quelle zu erstellen. Wenn der Abruf erfolgreich ist, lesen wir ein {{jsxref("ArrayBuffer")}} aus der Antwort unter Verwendung von `arrayBuffer()`, dekodieren die Audiodaten mit [`AudioContext.decodeAudioData()`](/de/docs/Web/API/BaseAudioContext/decodeAudioData), setzen die dekodierten Daten als Buffer der Audio-Quelle (`source.buffer`) und verbinden dann die Quelle mit dem [`AudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination).

Sobald `getData()` fertig ist, beginnen wir mit dem Abspielen der Audio-Quelle mit `start(0)` und deaktivieren dann die Wiedergabe-Schaltfläche, damit sie nicht erneut geklickt werden kann, wenn bereits abgespielt wird (dies würde einen Fehler verursachen).

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
      const source = new AudioBufferSourceNode();
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

Der [`Response()`](/de/docs/Web/API/Response/Response)-Konstruktor akzeptiert [`File`](/de/docs/Web/API/File)s und [`Blob`](/de/docs/Web/API/Blob)s, sodass er verwendet werden kann, um eine [`File`](/de/docs/Web/API/File) in andere Formate zu lesen.

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
