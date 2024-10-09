---
title: "Response: arrayBuffer()-Methode"
short-title: arrayBuffer()
slug: Web/API/Response/arrayBuffer
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`arrayBuffer()`**-Methode des [`Response`](/de/docs/Web/API/Response)-Interfaces nimmt einen [`Response`](/de/docs/Web/API/Response)-Stream und liest ihn vollständig aus. Sie gibt ein Promise zurück, das mit einem {{jsxref("ArrayBuffer")}} aufgelöst wird.

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
    - Es gab einen Fehler beim Dekodieren des Inhalts des Körpers (zum Beispiel, weil der {{httpheader("Content-Encoding")}} Header falsch ist).
- {{jsxref("RangeError")}}
  - : Es gab ein Problem bei der Erstellung des zugehörigen `ArrayBuffer`.
    Zum Beispiel, wenn die Datenmenge größer als [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) ist.

## Beispiele

### Musik abspielen

In unserem [fetch array buffer live](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-array-buffer) haben wir einen "Play"-Button. Bei Betätigung wird die `getData()`-Funktion ausgeführt. Beachten Sie, dass das komplette Audio heruntergeladen wird, bevor es abgespielt wird. Wenn Sie OGG während des Downloads abspielen möchten (streamen), sollten Sie [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) in Betracht ziehen:

```js
new Audio("music.ogg").play();
```

In `getData()` erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor und verwenden sie, um einen OGG-Musiktrack abzurufen. Wir verwenden auch [`AudioContext.createBufferSource`](/de/docs/Web/API/BaseAudioContext/createBufferSource), um eine Audio-Buffer-Quelle zu erstellen. Wenn das Abrufen erfolgreich ist, lesen wir ein {{jsxref("ArrayBuffer")}} aus der Antwort mit `arrayBuffer()`, dekodieren die Audiodaten mit [`AudioContext.decodeAudioData()`](/de/docs/Web/API/BaseAudioContext/decodeAudioData), legen die dekodierten Daten als den Puffer der Audio-Buffer-Quelle (`source.buffer`) fest und verbinden die Quelle mit dem [`AudioContext.destination`](/de/docs/Web/API/BaseAudioContext/destination).

Sobald `getData()` fertig ist, starten wir die Wiedergabe des Audio-Quellens mit `start(0)` und deaktivieren den "Play"-Button, damit er nicht erneut geklickt werden kann, wenn er bereits spielt (dies würde einen Fehler verursachen.)

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
