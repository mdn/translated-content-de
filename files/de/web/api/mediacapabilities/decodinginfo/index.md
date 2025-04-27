---
title: "MediaCapabilities: decodingInfo() Methode"
short-title: decodingInfo()
slug: Web/API/MediaCapabilities/decodingInfo
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("Media Capabilities API")}}{{AvailableInWorkers}}

Die **`decodingInfo()`** Methode des [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) Interfaces gibt ein Promise zurück, das mit Informationen darüber erfüllt wird, wie gut der Benutzeragent Medien mit einer gegebenen Konfiguration dekodieren/anzeigen kann.

Das aufgelöste Objekt enthält drei boolesche Eigenschaften `supported`, `smooth` und `powerefficient`, die angeben, ob das Dekodieren der beschriebenen Medien unterstützt wird und ob das Dekodieren reibungslos und energieeffizient wäre.

Die Methode kann auch verwendet werden, um die Fähigkeiten des Benutzeragents für das Dekodieren von Medien zu testen, die mit einem Schlüsselsystem verschlüsselt sind, jedoch nur, wenn sie im Hauptthread und in einem sicheren Kontext aufgerufen wird. Wenn die in der `configuration.keySystemConfiguration` Eigenschaft übergebene Konfiguration für die Dekodierung der Daten unterstützt wird, enthält das aufgelöste Promise auch ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess) Objekt, das verwendet werden kann, um ein [`MediaKeys`](/de/docs/Web/API/MediaKeys) Objekt zu erstellen und die verschlüsselte Wiedergabe einzurichten.

> [!NOTE]
> Das Aufrufen von `decodingInfo()` mit dieser Eigenschaft kann zu sichtbaren Effekten für den Benutzer führen, wie das Anfordern von Berechtigungen, um auf eine oder mehrere Systemressourcen zuzugreifen. Daher sollte diese Funktion nur aufgerufen werden, wenn die Anwendung bereit ist, ein `MediaKeys` Objekt mit der bereitgestellten Konfiguration zu erstellen und zu verwenden.

## Syntax

```js-nolint
decodingInfo(configuration)
```

### Parameter

- `configuration`

  - : Ein Objekt mit einer Eigenschaft `type`, _entweder_ einer `video` oder `audio` Eigenschaft, die eine Konfiguration des entsprechenden Typs enthält, und optional einer `keySystemConfiguration`, wenn Medien mit einem Schlüsselsystem dekodiert werden sollen:

    - `type`

      - : Der Typ der zu testenden Medien. Dies hat einen von drei Werten:

        - `file`
          - : Repräsentiert eine Konfiguration, die für die Wiedergabe einer normalen Datei verwendet werden soll.
        - `media-source`
          - : Repräsentiert eine Konfiguration, die für die Wiedergabe einer [`MediaSource`](/de/docs/Web/API/MediaSource) verwendet werden soll.
        - `webrtc`
          - : Repräsentiert eine Konfiguration, die mithilfe von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) empfangen werden soll (nicht erlaubt, wenn `keySystemConfiguration` gesetzt ist).

    - `video`

      - : Konfigurationsobjekt für eine Video-Medienquelle.
        Dies hat folgende Eigenschaften:

        - `contentType`
          - : Zeichenkette, die einen gültigen Video-MIME-Typ enthält und (optional) einen [`codecs` parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter).
        - `width`
          - : Die Breite des Videos.
        - `height`
          - : Die Höhe des Videos.
        - `bitrate`
          - : Die Anzahl der Bits, die verwendet werden, um eine Sekunde der Videodatei zu kodieren.
        - `framerate`
          - : Die Anzahl der Bilder, die eine Sekunde Video-Wiedergabe ausmachen.

    - `audio`

      - : Konfigurationsobjekt für eine Audio-Medienquelle.
        Dies hat folgende Eigenschaften:

        - `contentType`
          - : Zeichenkette, die einen gültigen Audio-MIME-Typ enthält und (optional) einen [`codecs` parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter).
        - `channels`
          - : Die Anzahl der Kanäle, die von der Audiospur verwendet werden.
        - `bitrate`
          - : Die Anzahl der Bits, die verwendet werden, um eine Sekunde der Audiodatei zu kodieren.
        - `samplerate`
          - : Die Anzahl der Audio-Samples, die eine Sekunde der Audiodatei ausmachen.

    - `keySystemConfiguration` {{optional_inline}}

      - : Objekt, das die Schlüsselsystemkonfiguration für verschlüsselte Medien spezifiziert.

        > **Hinweis:** [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) akzeptiert Arrays einiger derselben Datentypen in seinem `supportedConfigurations` Argument.

        Wenn angegeben, muss der [`type`](#type) entweder `media-source` oder `file` sein (nicht `webrtc`).
        Dies hat folgende Eigenschaften:

        - `keySystem`

          - : Eine Zeichenkette, die das Medien-Schlüsselsystem identifiziert. Zum Beispiel `org.w3.clearkey` oder `com.widevine.alpha`.

        - `initDataType` {{optional_inline}}

          - : Eine Zeichenkette, die den Namen des Datentyps des Initialisierungsdatenformats angibt, wie `"cenc"`, `"keyids"` und `"webm"`. Erlaubte Namen sind im [Encrypted Media Extensions Initialization Data Format Registry](https://www.w3.org/TR/eme-initdata-registry/) definiert.

        - `distinctiveIdentifier` {{optional_inline}}

          - : Eine Zeichenkette, die angibt, ob die Implementierung "unterscheidbare Identifikatoren" (oder unverwechselbare permanente Identifikatoren) für irgendwelche Operationen verwenden darf, die mit einem aus dieser Konfiguration erstellten Objekt verbunden sind. Die erlaubten Werte sind:

            - `required`
              - : Das zurückgegebene Objekt muss diese Funktion unterstützen.
            - `optional`
              - : Das zurückgegebene Objekt kann diese Funktion unterstützen. Dies ist die Standardeinstellung.
            - `not-allowed`
              - : Das zurückgegebene Objekt darf diese Funktion nicht unterstützen oder verwenden.

        - `persistentState` {{optional_inline}}

          - : Eine Zeichenkette, die angibt, ob das zurückgegebene Objekt in der Lage sein muss, Sitzungsdaten oder irgendeine andere Art von Zustand zu speichern. Die erlaubten Werte sind:

            - `required`
              - : Das zurückgegebene Objekt muss diese Funktion unterstützen.
            - `optional`
              - : Das zurückgegebene Objekt kann diese Funktion unterstützen. Dies ist die Standardeinstellung.
            - `not-allowed`
              - : Das zurückgegebene Objekt darf diese Funktion nicht unterstützen oder verwenden. Nur "temporäre" Sitzungen dürfen erstellt werden, wenn ein persistenter Zustand nicht erlaubt ist.

        - `sessionTypes` {{optional_inline}}

          - : Ein Array von Zeichenketten, die die Sitzungstypen angeben, die unterstützt werden müssen. Zulässige Werte sind:

            - `temporary`
              - : Eine Sitzung, für die die Lizenz, der Schlüssel (oder die Schlüssel) und Aufzeichnungen oder Daten, die sich auf die Sitzung beziehen, nicht gespeichert werden. Die Anwendung muss diese Speicherung nicht verwalten. Implementierungen müssen diese Option unterstützen, und sie ist die Standardeinstellung.
            - `persistent-license`
              - : Eine Sitzung, für die die Lizenz (und möglicherweise andere Daten, die sich auf die Sitzung beziehen) gespeichert wird. Ein Eintrag der Lizenz und der zugehörigen Schlüssel bleibt bestehen, auch wenn die Lizenz zerstört wird, und bietet eine Bestätigung, dass die Lizenz und der darauf enthaltene Schlüssel (oder die Schlüssel) vom Client nicht mehr verwendet werden können.

        - `audio` {{optional_inline}}

          - : Die Audio-Schlüsselsystem-Spurkonfiguration, die mit der obigen [`audio` Konfiguration](#audio) verbunden ist. Wenn festgelegt, muss auch die [`audio` Konfiguration](#audio) festgelegt werden.

            - `encryptionScheme`
              - : Das Verschlüsselungsschema, das mit dem Inhaltstyp verbunden ist, wie `cenc`, `cbcs`, `cbcs-1-9`. Dieser Wert sollte von einer Anwendung festgelegt werden (es ist standardmäßig `null`, was anzeigt, dass jedes Verschlüsselungsschema verwendet werden kann).
            - `robustness`
              - : Das Robustheitsniveau, das mit dem Inhaltstyp verbunden ist. Der leere String gibt an, dass jede Fähigkeit zum Entschlüsseln und Dekodieren des Inhaltstyps akzeptabel ist.

        - `video` {{optional_inline}}

          - : Die Video-Schlüsselsystem-Spurkonfiguration, die mit der obigen [`video` Konfiguration](#video) verbunden ist. Wenn festgelegt, muss auch die [`video` Konfiguration](#video) festgelegt werden.

            - `encryptionScheme`
              - : Das Verschlüsselungsschema, das mit dem Inhaltstyp verbunden ist, wie `cenc`, `cbcs`, `cbcs-1-9`. Dieser Wert sollte von einer Anwendung festgelegt werden (es ist standardmäßig `null`, was anzeigt, dass jedes Verschlüsselungsschema verwendet werden kann).
            - `robustness`
              - : Das Robustheitsniveau, das mit dem Inhaltstyp verbunden ist. Der leere String gibt an, dass jede Fähigkeit zum Entschlüsseln und Dekodieren des Inhaltstyps akzeptabel ist.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem Objekt erfüllt wird, das die folgenden Attribute enthält:

- `supported`
  - : `true`, wenn der Medieninhalt überhaupt dekodiert werden kann. Andernfalls ist es `false`.
- `smooth`
  - : `true`, wenn die Wiedergabe der Medien mit der in der Konfiguration angegebenen Bildrate erfolgen kann, ohne dass Bilder übersprungen werden müssen. Andernfalls ist es `false`.
- `powerEfficient`
  - : `true`, wenn die Wiedergabe der Medien energieeffizient ist. Andernfalls ist es `false`.
- `keySystemAccess`
  - : Ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess), das verwendet werden kann, um ein [`MediaKeys`](/de/docs/Web/API/MediaKeys) Objekt zu erstellen und die verschlüsselte Wiedergabe einzurichten, oder `null`, wenn die Dekodierung mit der bereitgestellten Konfiguration nicht unterstützt wird.

Browser melden eine unterstützte Medienkonfiguration als `smooth` und `powerEfficient`, bis Statistiken zu diesem Gerät aufgezeichnet wurden. Alle unterstützten Audio-Codecs melden `powerEfficient` als wahr.

### Ausnahmen

- {{jsxref("TypeError")}}

  - : Wird ausgelöst, wenn die an die `decodingInfo()` Methode übergebene `configuration` ungültig ist, entweder weil der Typ nicht Video oder Audio ist, der `contentType` kein gültiger Codec-MIME-Typ ist, die Medien-Dekodierungskonfiguration kein gültiger Wert für den `type` (file, media-source oder webrtc) ist, oder irgendein anderer Fehler in der an die Methode übergebenen Medienkonfiguration, einschließlich des Weglassens von Werten.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die Methode wird in einem Worker aufgerufen, wenn [`configuration.keySystemConfiguration`](#keysystemconfiguration) definiert ist.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wird außerhalb eines sicheren Kontexts aufgerufen und [`configuration.keySystemConfiguration`](#keysystemconfiguration) ist definiert.

## Verwendungshinweise

### Vergleich mit Navigator.requestMediaKeySystemAccess()

`decodingInfo()` und die [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) Methode der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) spiegeln grundlegend unterschiedliche Ansätze zur Auswahl einer Konfiguration für die Dekodierung verschlüsselter Medien wider.

Der Konfigurationsparameter für `Navigator.requestMediaKeySystemAccess()` akzeptiert ein Array von möglichen Konfigurationen und ermöglicht es dem System, die auszuwählen, die es für angemessen hält.

Im Gegensatz dazu akzeptiert `decodingInfo()` jeweils eine Konfiguration. Erwartet wird, dass der Anrufer `decodingInfo()` mehrmals ausführt, beginnend mit den bevorzugtesten Konfigurationen und aufhört, sobald es eine Konfiguration findet, die den Anforderungen der Anwendung für reibungslose Wiedergabe, Energieeffizienz oder beides entspricht. Mit anderen Worten, die Auswahlentscheidung wird an den Anrufer übertragen.

## Beispiele

### Decodierinformationen für unverschlüsselte Mediendateien abrufen

Dieses Beispiel zeigt, wie man eine mediale Konfiguration für eine Audiodatei erstellt und sie dann in `MediaCapabilities.decodingInfo()` verwendet.

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
// Create media configuration to be tested
const audioConfig = {
  type: "file", // or 'media-source' or 'webrtc'
  audio: {
    contentType: "audio/ogg; codecs=vorbis", // valid content type
    channels: 2, // audio channels used by the track
    bitrate: 132700, // number of bits used to encode 1s of audio
    samplerate: 5200, // number of audio samples making up that 1s.
  },
};

// check support and performance
navigator.mediaCapabilities.decodingInfo(audioConfig).then((result) => {
  if (result.supported) {
    log(
      `The audio configuration is supported${result.smooth ? ", smooth" : ", not smooth"}${result.powerEfficient ? ", power efficient" : ", not power efficient"}.`,
    );
  } else {
    log("The audio configuration is not supported");
  }
});
```

Ähnlich zeigt der untenstehende Code die Konfiguration für eine Videodatei.

```js
const videoConfig = {
  type: "file",
  video: {
    contentType: "video/webm;codecs=vp8", // valid content type
    width: 800, // width of the video
    height: 600, // height of the video
    bitrate: 10000, // number of bits used to encode 1s of video
    framerate: 30, // number of frames making up that 1s.
  },
};

// check support and performance
navigator.mediaCapabilities.decodingInfo(videoConfig).then((result) => {
  if (result.supported) {
    log(
      `The video configuration is supported${result.smooth ? ", smooth" : ", not smooth"}${result.powerEfficient ? ", power efficient" : ", not power efficient"}.`,
    );
  } else {
    log("The video configuration is not supported");
  }
});
```

{{EmbedLiveSample("Decodierinformationen für unverschlüsselte Mediendateien abrufen")}}

### Decodierinformationen für verschlüsselte Medien abrufen

Dieses Beispiel zeigt, wie Sie `decodingInfo()` verwenden könnten, um eine mediale Konfiguration für verschlüsselten Inhalt auszuwählen.

Wie im vorherigen Beispiel definieren wir eine mediale Konfiguration, aber diesmal verwenden wir den `type` `media-source` (anstatt `file`) und geben sowohl Audio- als auch Videoinhalte an. Wir spezifizieren auch eine einfache `keySystemConfiguration`.

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const encryptedMediaConfig = {
  type: "media-source", // or 'file'
  audio: {
    contentType: "audio/webm; codecs=opus",
    channels: 2, // audio channels used by the track
    bitrate: 132700, // number of bits used to encode 1s of audio
    samplerate: 48000, // number of audio samples making up that 1s.
  },
  video: {
    contentType: 'video/webm; codecs="vp09.00.10.08"',
    width: 800, // width of the video
    height: 600, // height of the video
    bitrate: 10000, // number of bits used to encode 1s of video
    framerate: 30, // number of frames making up that 1s.
  },
  keySystemConfiguration: {
    keySystem: "org.w3.clearkey",
    initDataType: "webm",
    distinctiveIdentifier: "required",
  },
};
```

Im vorherigen Beispiel verwendeten wir [Promise-Verkettung](/de/docs/Web/JavaScript/Guide/Using_promises#chaining), um auf das Ergebnis zu warten. Hier haben wir uns entschieden, [`async` und `await`](/de/docs/Learn_web_development/Extensions/Async_JS/Promises#async_and_await) zu verwenden, um auf das Ergebnis zu warten, und es dann zu protokollieren.

```js
getDecodingInfo(encryptedMediaConfig);

async function getDecodingInfo(mediaConfig) {
  const result = await navigator.mediaCapabilities.decodingInfo(mediaConfig);
  console.log(result);
  if (!result.supported) {
    log("This encrypted media configuration is not supported.");
    return;
  }

  // keySystemAccess is returned if decoding encrypted media is supported
  // This can be used to decrypt and playback the media
  if (!result.keySystemAccess) {
    log("Encrypted media support is not available.");
    return;
  }

  log(
    `The encrypted media configuration is supported${result.smooth ? ", smooth" : ", not smooth"}${result.powerEfficient ? ", power efficient" : ", not power efficient"}.`,
  );
}
```

Die Protokollausgabe wird unten gezeigt.

{{EmbedLiveSample("Decodierinformationen für verschlüsselte Medien abrufen")}}

### Iterieren durch Decodierinformationen für verschlüsselte Medien

Das vorherige Beispiel zeigte, wie Sie `decodingInfo()` verwenden können, um Informationen für nur eine Konfiguration zu erhalten. In der Realität würde die Methode normalerweise iterativ mit einer Anzahl von Konfigurationen aufgerufen werden, wobei die erste unterstützte Konfiguration ausgewählt wird, die den Kriterien der Anwendung für reibungslose Wiedergabe oder Energieeffizienz entspricht. Die Arbeitsweise wird unten beschrieben.

Angenommen, wir haben bereits ein `Array` von Medienkonfigurationen namens `orderedMediaConfigs`, das wir von am meisten bis am wenigsten gewünscht geordnet haben, können wir die [`Array.prototype.map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) verwenden, um `decodingInfo()` für jede Konfiguration aufzurufen und ein Array zu erhalten, das alle zurückgegebenen {{jsxref("Promise")}} Objekte enthält.

```js
const capabilitiesPromises = orderedMediaConfigs.map((mediaConfig) =>
  navigator.mediaCapabilities.decodingInfo(mediaConfig),
);
```

Wir verwenden dann eine [`for await...of` Schleife](/de/docs/Web/JavaScript/Reference/Statements/for-await...of), um die Promises zu iterieren, während sie aufgelöst werden. In der Schleife speichern wir die letzte unterstützte Konfiguration in `nonSmoothConfig`, und wir verlassen die Schleife, sobald wir eine reibungslose Konfiguration finden, die wir als unsere `bestConfig` festlegen.

```js
// Assume this app wants a supported && smooth config.
let bestConfig = null;
let nonSmoothConfig = null;
for await (const mediaCapabilityInfo of capabilitiesPromises) {
  if (!mediaCapabilityInfo.supported) continue;

  if (!mediaCapabilityInfo.smooth) {
    nonSmoothConfig = mediaCapabilityInfo;
    continue;
  }

  bestConfig = mediaCapabilityInfo;
  break;
}
```

Wenn wir beim Schleifen eine glatte und unterstützte Konfiguration gefunden haben (`bestConfig`), verwenden wir diese, um [unsere Mediaschlüssel zu erstellen](/de/docs/Web/API/MediaKeySystemAccess/createMediaKeys) und die Medien zu dekodieren. Wenn wir keine glatten Konfigurationen entdeckt haben, könnten wir stattdessen `nonSmoothConfig` verwenden, um die Medien zu dekodieren. Dies wird die zuletzt gefundene unterstützte Konfiguration sein, die aufgrund der Art und Weise, wie wir die ursprünglichen `orderedMediaConfigs` geordnet haben, diejenige mit der niedrigsten Bildrate sein sollte.

```js
let keys = null;
if (bestConfig) {
  keys = await bestConfig.keySystemAccess.createMediaKeys();
  // ... use keys to decode media using best config
} else if (nonSmoothConfig) {
  console.log(
    "No smooth configs found. Using lowest resolution configuration!",
  );
  keys = await nonSmoothConfig.keySystemAccess.createMediaKeys();
  // ... use keys to decode media using lowest framerate config
} else {
  console.log("No supported configs!");
  // Fail!
}
```

Wenn es keine unterstützte Konfiguration gibt, haben wir keine andere Wahl, als zu scheitern und den Benutzer zu benachrichtigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaCapabilities.encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo)
- [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType) für Datei
- [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) für media-source
- [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)
