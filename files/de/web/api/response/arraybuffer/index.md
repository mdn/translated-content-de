---
title: "Response: arrayBuffer()-Methode"
short-title: arrayBuffer()
slug: Web/API/Response/arrayBuffer
l10n:
  sourceCommit: 889fd7ca9d03276638ec065e47ea967c1a2fc10b
---

{{APIRef("Fetch API")}}

Die **`arrayBuffer()`**-Methode des {{domxref("Response")}}-Interfaces nimmt einen {{domxref("Response")}}-Stream und liest ihn vollständig. Sie gibt ein Promise zurück, das mit einem {{jsxref("ArrayBuffer")}} aufgelöst wird.

## Syntax

```js-nolint
arrayBuffer()
```

### Parameter

Keine.

### Rückgabewert

Ein Promise, das mit einem {{jsxref("ArrayBuffer")}} aufgelöst wird.

### Ausnahmen

- {{domxref("DOMException")}} `AbortError`
  - : Die Anfrage wurde [abgebrochen](/de/docs/Web/API/Fetch_API/Using_Fetch#canceling_a_request).
- {{jsxref("TypeError")}}
  - : Wird aus einem der folgenden Gründe ausgelöst:
    - Der Antwortkörper ist [gestört oder gesperrt](/de/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - Es gab einen Fehler beim Dekodieren des Inhalts des Antwortkörpers (zum Beispiel, weil der {{httpheader("Content-Encoding")}}-Header falsch ist).
- {{jsxref("RangeError")}}
  - : Es gab ein Problem bei der Erstellung des zugehörigen `ArrayBuffer`. Zum Beispiel, wenn die Datenmenge größer ist als [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER).

## Beispiele

### Musik abspielen

In unserem [fetch array buffer live](https://github.com/mdn/dom-examples/tree/main/fetch/fetch-array-buffer) haben wir einen Play-Button. Wenn dieser gedrückt wird, wird die `getData()`-Funktion ausgeführt. Beachten Sie, dass die komplette Audiodatei heruntergeladen wird, bevor sie abgespielt wird. Wenn Sie ogg während des Downloads abspielen müssen (streamen) - ziehen Sie in Betracht, {{domxref("HTMLAudioElement")}} zu verwenden:

```js
new Audio("music.ogg").play();
```

In `getData()` erstellen wir eine neue Anfrage mit dem {{domxref("Request.Request","Request()")}}-Konstruktor und verwenden sie dann, um eine OGG-Musikdatei abzurufen. Wir verwenden auch {{domxref("BaseAudioContext/createBufferSource", "AudioContext.createBufferSource")}}, um eine Audioquellenpuffer zu erstellen. Wenn das Abrufen erfolgreich ist, lesen wir mithilfe von `arrayBuffer()` ein {{jsxref("ArrayBuffer")}} aus der Antwort, dekodieren die Audiodaten mit {{domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}}, setzen die dekodierten Daten als Puffer der Audioquelle (`source.buffer`) und verbinden die Quelle dann mit dem {{domxref("BaseAudioContext/destination", "AudioContext.destination")}}.

Nachdem `getData()` ausgeführt wurde, starten wir die Wiedergabe der Audioquelle mit `start(0)` und deaktivieren den Play-Button, damit er nicht erneut geklickt werden kann, während bereits abgespielt wird (dies würde einen Fehler verursachen).

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

// Tasten zum Stoppen und Abspielen von Audio verbinden

play.onclick = () => {
  getData().then((source) => {
    source.start(0);
    play.setAttribute("disabled", "disabled");
  });
};
```

### Dateien lesen

Der {{domxref("Response.Response","Response()")}}-Konstruktor akzeptiert {{domxref("File")}}s und {{domxref("Blob")}}s, sodass er verwendet werden kann, um eine {{domxref("File")}} in andere Formate zu lesen.

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
