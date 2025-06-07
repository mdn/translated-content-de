---
title: "MediaCapabilities: decodingInfo() Methode"
short-title: decodingInfo()
slug: Web/API/MediaCapabilities/decodingInfo
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{APIRef("Media Capabilities API")}}{{AvailableInWorkers}}

Die **`decodingInfo()`** Methode der [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) Schnittstelle gibt ein Versprechen zurück, das mit Informationen darüber erfüllt wird, wie gut der Benutzeragent Medien mit einer gegebenen Konfiguration dekodieren/anzeigen kann.

Das aufgelöste Objekt enthält drei boolesche Eigenschaften `supported`, `smooth` und `powerefficient`, die angeben, ob das Dekodieren der beschriebenen Medien unterstützt wird und ob das Dekodieren reibungslos und energieeffizient erfolgen würde, falls unterstützt.

Die Methode kann auch verwendet werden, um die Fähigkeit des Benutzeragenten zu testen, Medien zu dekodieren, die mit einem Schlüsselsystem kodiert sind, jedoch nur, wenn sie im Hauptthread und in einem sicheren Kontext aufgerufen wird. Wenn die in der Eigenschaft `configuration.keySystemConfiguration` übergebene Konfiguration zum Dekodieren der Daten unterstützt wird, enthält das aufgelöste Versprechen auch ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess) Objekt, das verwendet werden kann, um ein [`MediaKeys`](/de/docs/Web/API/MediaKeys) Objekt zu erstellen, um verschlüsseltes Abspielen einzurichten.

> [!NOTE]
> Der Aufruf von `decodingInfo()` mit dieser Eigenschaft kann Benutzern sichtbare Effekte haben, wie z.B. das Anfordern einer Erlaubnis zum Zugriff auf ein oder mehrere Systemressourcen. Daher sollte diese Funktion nur aufgerufen werden, wenn die Anwendung bereit ist, ein `MediaKeys` Objekt mit der bereitgestellten Konfiguration zu erstellen und zu verwenden.

## Syntax

```js-nolint
decodingInfo(configuration)
```

### Parameter

- `configuration`

  - : Ein Objekt mit einer Eigenschaft `type`, _entweder_ eine `video` oder `audio` Eigenschaft, die eine Konfiguration des passenden Typs enthält, und optional eine `keySystemConfiguration`, wenn Medien dekodiert werden, die mit einem Schlüsselsystem verschlüsselt sind: <!-- MediaDecodingConfiguration in the spec -->

    - `type`

      - : Der Typ der getesteten Medien. Dies nimmt einen der drei Werte an:

        - `file`
          - : Repräsentiert eine Konfiguration, die für die Wiedergabe einer einfachen Datei gedacht ist.
        - `media-source`
          - : Repräsentiert eine Konfiguration, die für die Wiedergabe einer [`MediaSource`](/de/docs/Web/API/MediaSource) gedacht ist.
        - `webrtc`
          - : Repräsentiert eine Konfiguration, die mit [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) empfangen werden soll (nicht erlaubt, wenn `keySystemConfiguration` gesetzt ist).

    - `video`

      - : Konfigurationsobjekt für eine Video-Medienquelle.
        Dies hat die folgenden Eigenschaften: <!-- VideoConfiguration in the spec -->

        - `contentType`
          - : String, der einen gültigen Video-MIME-Typ und (optional) einen [`codecs` Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) enthält.
        - `width`
          - : Die Breite des Videos.
        - `height`
          - : Die Höhe des Videos.
        - `bitrate`
          - : Die Anzahl der Bits, die verwendet werden, um eine Sekunde des Videodatei zu kodieren.
        - `framerate`
          - : Die Anzahl der Frames, die eine Sekunde Videowiedergabe ausmachen.

    - `audio`

      - : Konfigurationsobjekt für eine Audio-Medienquelle.
        Dies hat die folgenden Eigenschaften: <!-- AudioConfiguration in the spec -->

        - `contentType`
          - : String, der einen gültigen Audio-MIME-Typ und (optional) einen [`codecs` Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) enthält.
        - `channels`
          - : Die Anzahl der Kanäle, die von der Audiospur verwendet werden.
        - `bitrate`
          - : Die Anzahl der Bits, die verwendet werden, um eine Sekunde der Audiodatei zu kodieren.
        - `samplerate`
          - : Die Anzahl der Audio-Samples, die eine Sekunde der Audiodatei ausmachen.

    - `keySystemConfiguration` {{optional_inline}}

      - : Objekt, das die Konfiguration des Schlüsselsystems für verschlüsselte Medien spezifiziert.

        > **Hinweis:** [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) verwendet Arrays einiger derselben Datentypen in seinem `supportedConfigurations` Argument.

        Wenn spezifiziert, muss der [`type`](#type) `media-source` oder `file` sein (nicht `webrtc`).
        Dies hat die folgenden Eigenschaften: <!-- MediaCapabilitiesKeySystemConfiguration in the spec -->

        - `keySystem`

          - : Ein String, der das Medien-Schlüsselsystem identifiziert.
            Zum Beispiel `org.w3.clearkey` oder `com.widevine.alpha`.

        - `initDataType` {{optional_inline}}

          - : Ein String, der den Datentypnamen des Initialisierungsdatenformats angibt, wie `"cenc"`, `"keyids"` und `"webm"`.
            Erlaubte Namen sind im [Encrypted Media Extensions Initialization Data Format Registry](https://w3c.github.io/encrypted-media/format-registry/initdata/) definiert.

        - `distinctiveIdentifier` {{optional_inline}}

          - : Ein String, der angibt, ob die Implementierung "unverwechselbare Identifikatoren" (oder unverwechselbare permanente Identifikatoren) für jegliche Operationen verwenden darf, die mit einem aus dieser Konfiguration erstellten Objekt verbunden sind.
            Die erlaubten Werte sind:

            - `required`
              - : Das zurückgegebene Objekt muss diese Funktion unterstützen.
            - `optional`
              - : Das zurückgegebene Objekt kann diese Funktion unterstützen.
                Dies ist der Standard
            - `not-allowed`
              - : Das zurückgegebene Objekt darf diese Funktion nicht unterstützen oder verwenden.

        - `persistentState` {{optional_inline}}

          - : Ein String, der angibt, ob das zurückgegebene Objekt Sitzungsdaten oder jede andere Art von Status speichern können muss.
            Die erlaubten Werte sind:

            - `required`
              - : Das zurückgegebene Objekt muss diese Funktion unterstützen.
            - `optional`
              - : Das zurückgegebene Objekt kann diese Funktion unterstützen.
                Dies ist der Standard
            - `not-allowed`
              - : Das zurückgegebene Objekt darf diese Funktion nicht unterstützen oder verwenden.
                Nur "temporäre" Sitzungen dürfen erstellt werden, wenn ein persistenter Zustand nicht erlaubt ist.

        - `sessionTypes` {{optional_inline}}

          - : Ein Array von Strings, die die Sitzungstypen angeben, die unterstützt werden müssen.
            Erlaubte Werte umfassen:

            - `temporary`
              - : Eine Sitzung, für die die Lizenz, Schlüssel und Aufzeichnung oder Daten, die mit der Sitzung in Zusammenhang stehen, nicht gespeichert werden.
                Die Anwendung muss sich nicht um die Verwaltung eines solchen Speichers kümmern.
                Implementierungen müssen diese Option unterstützen, und es ist der Standard.
            - `persistent-license`
              - : Eine Sitzung, für die die Lizenz (und möglicherweise andere mit der Sitzung in Zusammenhang stehende Daten) gespeichert werden.
                Ein Nachweis der Lizenz und der zugehörigen Schlüssel bleibt sogar dann bestehen, wenn die Lizenz zerstört wird, was bestätigt, dass die Lizenz und die darin enthaltenen Schlüssel vom Client nicht mehr verwendet werden können.

        - `audio` {{optional_inline}}

          - : Die Audio-Schlüsselsystem-Spurkonfiguration, die mit der oben genannten [`audio` Konfiguration](#audio) verbunden ist.
            Wenn sie gesetzt ist, muss auch die [`audio` Konfiguration](#audio) gesetzt sein.

            - `encryptionScheme`
              - : Das Verschlüsselungsschema, das mit dem Inhaltstyp verbunden ist, wie `cenc`, `cbcs`, `cbcs-1-9`.
                Dieser Wert sollte von einer Anwendung festgelegt werden (Standard ist `null`, was anzeigt, dass jedes Verschlüsselungsschema verwendet werden kann).
            - `robustness`
              - : Das Robustheitsniveau, das mit dem Inhaltstyp verbunden ist.
                Der leere String zeigt an, dass jede Fähigkeit zum Entschlüsseln und Dekodieren des Inhaltstyps akzeptabel ist.

        - `video` {{optional_inline}}

          - : Die Video-Schlüsselsystem-Spurkonfiguration, die mit der oben genannten [`video` Konfiguration](#video) verbunden ist.
            Wenn sie gesetzt ist, muss auch die [`video` Konfiguration](#video) gesetzt sein.

            - `encryptionScheme`
              - : Das Verschlüsselungsschema, das mit dem Inhaltstyp verbunden ist, wie `cenc`, `cbcs`, `cbcs-1-9`.
                Dieser Wert sollte von einer Anwendung festgelegt werden (Standard ist `null`, was anzeigt, dass jedes Verschlüsselungsschema verwendet werden kann).
            - `robustness`
              - : Das Robustheitsniveau, das mit dem Inhaltstyp verbunden ist.
                Der leere String zeigt an, dass jede Fähigkeit zum Entschlüsseln und Dekodieren des Inhaltstyps akzeptabel ist.

### Rückgabewert

Ein {{jsxref('Promise')}} das mit einem Objekt erfüllt wird, das die folgenden Attribute enthält:

- `supported`
  - : `true`, wenn der Medieninhalt überhaupt dekodiert werden kann. Andernfalls ist es `false`.
- `smooth`
  - : `true`, wenn die Wiedergabe der Medien mit der in der Konfiguration angegebenen Bildrate ohne den Bedarf, Frames zu verwerfen, abgespielt werden kann. Andernfalls ist es `false`.
- `powerEfficient`
  - : `true`, wenn die Wiedergabe der Medien energieeffizient sein wird. Andernfalls ist es `false`.
- `keySystemAccess`
  - : Ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess), das verwendet werden kann, um ein [`MediaKeys`](/de/docs/Web/API/MediaKeys) Objekt zur Einrichtung einer verschlüsselten Wiedergabe zu erstellen, oder `null`, wenn das Dekodieren mit der angegebenen Konfiguration nicht unterstützt wird.

Browser melden eine unterstützte Medienkonfiguration als `smooth` und `powerEfficient`, bis Statistiken auf diesem Gerät erfasst wurden. Alle unterstützten Audiocodecs melden `powerEfficient` als wahr.

### Ausnahmen

- {{jsxref("TypeError")}}

  - : Wird ausgelöst, wenn die an die `decodingInfo()` Methode übergebene `configuration` ungültig ist, entweder weil der Typ nicht Video oder Audio ist, der `contentType` kein gültiger Codec-MIME-Typ ist, die Medien-Dekodierkonfiguration kein gültiger Wert für den `type` (file, media-source, oder webrtc) ist oder irgendein anderer Fehler in der an die Methode übergebenen Medienkonfiguration, einschließlich des Auslassens von Werten.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die Methode wird in einem Worker aufgerufen, wenn [`configuration.keySystemConfiguration`](#keysystemconfiguration) definiert ist.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wird außerhalb eines sicheren Kontextes aufgerufen und [`configuration.keySystemConfiguration`](#keysystemconfiguration) ist definiert.

## Verwendungshinweise

### Vergleich mit Navigator.requestMediaKeySystemAccess()

`decodingInfo()` und die [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) Methode der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) spiegeln grundlegend unterschiedliche Ansätze zur Auswahl einer Konfiguration zum Dekodieren verschlüsselter Medien wider.

Das Konfigurationsparameter für `Navigator.requestMediaKeySystemAccess()` nimmt ein Array möglicher Konfigurationen an und erlaubt es dem System, die auszuwählen, die es für geeignet hält.

Im Gegensatz dazu nimmt `decodingInfo()` jeweils eine Konfiguration an. Die Erwartung ist, dass der Aufrufer `decodingInfo()` mehrmals ausführt, beginnend mit den bevorzugtesten Konfigurationen und aufhört, sobald er eine Konfiguration findet, die den Anforderungen der Anwendung für reibungsloses, energieeffizientes oder beides Abspielen entspricht. Mit anderen Worten, die Auswahlentscheidung wird an den Aufrufer übergeben.

## Beispiele

### Abrufen von Dekodierungsinformationen für unverschlüsselte Mediendateien

Dieses Beispiel zeigt, wie Sie eine Medienkonfiguration für eine Audiodatei erstellen und sie dann in `MediaCapabilities.decodingInfo()` verwenden.

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

{{EmbedLiveSample("Getting decoding information for unencrypted media files")}}

### Abrufen von Dekodierungsinformationen für verschlüsselte Medien

Dieses Beispiel zeigt, wie Sie `decodingInfo()` verwenden könnten, um eine Medienkonfiguration für verschlüsselten Inhalt zu wählen.

Wie im vorherigen Beispiel definieren wir eine Medienkonfiguration, aber diesmal verwenden wir den `type` von `media-source` (anstatt `file`) und spezifizieren sowohl Audio- als auch Videoinhalte. Wir spezifizieren auch eine einfache `keySystemConfiguration`.

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

Im vorherigen Beispiel haben wir [Promise-Chaining](/de/docs/Web/JavaScript/Guide/Using_promises#chaining) verwendet, um auf das Ergebnis zu warten. Hier haben wir uns entschieden, [`async` und `await`](/de/docs/Learn_web_development/Extensions/Async_JS/Promises#async_and_await) zu verwenden, um auf das Ergebnis zu warten und es dann zu protokollieren.

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

Das Protokollausgabe wird unten gezeigt.

{{EmbedLiveSample("Getting decoding information for encrypted media")}}

### Iterieren durch Dekodierungsinformationen für verschlüsselte Medien

Das vorherige Beispiel zeigte, wie Sie `decodingInfo()` verwenden können, um Informationen für nur eine Konfiguration zu erhalten. In der Realität würde die Methode normalerweise iterativ mit einer Reihe von Konfigurationen aufgerufen werden, wobei die erste unterstützte Konfiguration ausgewählt wird, die den Kriterien der Anwendung für reibungslose Wiedergabe oder Energieeffizienz entspricht. Die Arbeitsweise wird unten beschrieben.

Angenommen, wir haben bereits ein `Array` von Medienkonfigurationen namens `orderedMediaConfigs`, das wir vom am meisten zum am wenigsten gewünschten geordnet haben, können wir [`Array.prototype.map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) verwenden, um `decodingInfo()` für jede Konfiguration aufzurufen und ein Array zu erhalten, das alle zurückgegebenen {{jsxref("Promise")}} Objekte enthält.

```js
const capabilitiesPromises = orderedMediaConfigs.map((mediaConfig) =>
  navigator.mediaCapabilities.decodingInfo(mediaConfig),
);
```

Wir verwenden dann eine [`for await...of` Schleife](/de/docs/Web/JavaScript/Reference/Statements/for-await...of), um die Versprechen zu durchlaufen, während sie sich auflösen. In der Schleife speichern wir die letzte unterstützte Konfiguration in `nonSmoothConfig`, und wir verlassen die Schleife, sobald wir eine reibungslose Konfiguration finden und setzen diese als unsere `bestConfig`.

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

Wenn wir während des Schleifens eine reibungslose und unterstützte Konfiguration gefunden haben (`bestConfig`), verwenden wir diese, um [unsere Mediaschlüssel zu erstellen](/de/docs/Web/API/MediaKeySystemAccess/createMediaKeys) und die Medien zu dekodieren. Wenn wir keine reibungslosen Konfigurationen entdecken, könnten wir stattdessen `nonSmoothConfig` verwenden, um die Medien zu dekodieren. Dies wird die zuletzt gefundene unterstützte Konfiguration sein, die aufgrund der Art und Weise, wie wir die ursprüngliche `orderedMediaConfigs` geordnet haben, die mit der niedrigsten Bildrate sein sollte.

```js
let keys = null;
if (bestConfig) {
  keys = await bestConfig.keySystemAccess.createMediaKeys();
  // … use keys to decode media using best config
} else if (nonSmoothConfig) {
  console.log(
    "No smooth configs found. Using lowest resolution configuration!",
  );
  keys = await nonSmoothConfig.keySystemAccess.createMediaKeys();
  // … use keys to decode media using lowest framerate config
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
- [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) für Medienquelle
- [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)
