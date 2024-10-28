---
title: "MediaCapabilities: decodingInfo() Methode"
short-title: decodingInfo()
slug: Web/API/MediaCapabilities/decodingInfo
l10n:
  sourceCommit: c749deb4ccb647d792deee4807d4852104bedd9d
---

{{APIRef("Media Capabilities API")}}{{AvailableInWorkers}}

Die **`decodingInfo()`**-Methode der [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) Schnittstelle gibt ein Promise zurück, das Informationen darüber erfüllt, wie gut der User-Agent Medien mit einer bestimmten Konfiguration decodieren/anzeigen kann.

Das aufgelöste Objekt enthält drei boolesche Eigenschaften `supported`, `smooth` und `powerefficient`, die anzeigen, ob das Decodieren der beschriebenen Medien unterstützt wird und, falls ja, ob das Decodieren flüssig und energieeffizient wäre.

Die Methode kann auch verwendet werden, um die Fähigkeiten des User-Agents zum Decodieren von Medien zu testen, die mit einem Schlüsselsystem verschlüsselt sind, jedoch nur, wenn sie im Hauptthread und in einem sicheren Kontext aufgerufen wird. Wenn die in der `configuration.keySystemConfiguration`-Eigenschaft übergebene Konfiguration zum Decodieren der Daten unterstützt wird, enthält das aufgelöste Promise auch ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess) Objekt, das verwendet werden kann, um ein [`MediaKeys`](/de/docs/Web/API/MediaKeys) Objekt für die Einrichtung verschlüsselter Wiedergabe zu erstellen.

> [!NOTE]
> Der Aufruf von `decodingInfo()` mit dieser Eigenschaft kann zu Benutzersichtbaren Effekten führen, wie der Bitte um Erlaubnis auf ein oder mehrere Systemressourcen zuzugreifen. Daher sollte diese Funktion nur aufgerufen werden, wenn die Anwendung bereit ist, ein `MediaKeys` Objekt mit der bereitgestellten Konfiguration zu erstellen und zu verwenden.

## Syntax

```js-nolint
decodingInfo(configuration)
```

### Parameter

- `configuration`

  - : Ein Objekt mit einer Eigenschaft `type`, _entweder_ eine `video` oder `audio` Eigenschaft, die eine Konfiguration des entsprechenden Typs enthält, und optional eine `keySystemConfiguration`, wenn Medien mit einem Schlüsselsystem decodiert werden: <!-- MediaDecodingConfiguration in the spec -->

    - `type`

      - : Der Typ der getesteten Medien. Dies nimmt einen der drei Werte an:

        - `file`
          - : Repräsentiert eine Konfiguration, die zur einfachen Dateiwiedergabe verwendet werden soll.
        - `media-source`
          - : Repräsentiert eine Konfiguration, die für die Wiedergabe einer [`MediaSource`](/de/docs/Web/API/MediaSource) verwendet werden soll.
        - `webrtc`
          - : Repräsentiert eine Konfiguration, die mit [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) empfangen werden soll (nicht erlaubt, wenn `keySystemConfiguration` gesetzt ist).

    - `video`

      - : Konfigurationsobjekt für eine Video-Medienquelle.
        Es hat die folgenden Eigenschaften: <!-- VideoConfiguration in the spec -->

        - `contentType`
          - : String, der einen gültigen Video-MIME-Typ enthält und (optional) einen [`codecs` Parameter](/de/docs/Web/Media/Formats/codecs_parameter).
        - `width`
          - : Die Breite des Videos.
        - `height`
          - : Die Höhe des Videos.
        - `bitrate`
          - : Die Anzahl der Bits, die zum Kodieren einer Sekunde der Videodatei verwendet werden.
        - `framerate`
          - : Die Anzahl der Frames, die eine Sekunde Video-Wiedergabe bilden.

    - `audio`

      - : Konfigurationsobjekt für eine Audio-Medienquelle.
        Es hat die folgenden Eigenschaften: <!-- AudioConfiguration in the spec -->

        - `contentType`
          - : String, der einen gültigen Audio-MIME-Typ enthält und (optional) einen [`codecs` Parameter](/de/docs/Web/Media/Formats/codecs_parameter).
        - `channels`
          - : Die Anzahl der Kanäle, die von der Audiospur verwendet werden.
        - `bitrate`
          - : Die Anzahl der Bits, die zum Kodieren einer Sekunde der Audiodatei verwendet werden.
        - `samplerate`
          - : Die Anzahl der Audiosamples, die eine Sekunde der Audiodatei bilden.

    - `keySystemConfiguration` {{optional_inline}}

      - : Objekt, das die Schlüssel-Systemkonfiguration für verschlüsselte Medien angibt.

        > **Hinweis:** [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) akzeptiert Arrays einiger der gleichen Datentypen in seinem `supportedConfigurations` Argument.

        Wenn angegeben, muss der [`type`](#type) entweder `media-source` oder `file` sein (nicht `webrtc`).
        Es hat die folgenden Eigenschaften: <!-- MediaCapabilitiesKeySystemConfiguration in the spec -->

        - `keySystem`

          - : Ein String zur Identifizierung des Medien-Schlüsselsystems.
            Zum Beispiel `org.w3.clearkey` oder `com.widevine.alpha`.

        - `initDataType` {{optional_inline}}

          - : Ein String, der den Datentypnamen des Initialisierungsdatenformats angibt, wie `"cenc"`, `"keyids"` und `"webm"`.
            Erlaubte Namen sind im [Encrypted Media Extensions Initialization Data Format Registry](https://www.w3.org/TR/eme-initdata-registry/) definiert.

        - `distinctiveIdentifier` {{optional_inline}}

          - : Ein String, der angibt, ob die Implementierung "unverwechselbare Identifikatoren" (oder unverwechselbare permanente Identifikatoren) für Operationen verwenden darf, die mit einem aus dieser Konfiguration erstellten Objekt verbunden sind.
            Die erlaubten Werte sind:

            - `required`
              - : Das zurückgegebene Objekt muss diese Funktion unterstützen.
            - `optional`
              - : Das zurückgegebene Objekt kann diese Funktion unterstützen.
                Dies ist die Standardeinstellung.
            - `not-allowed`
              - : Das zurückgegebene Objekt darf diese Funktion nicht unterstützen oder verwenden.

        - `persistentState` {{optional_inline}}

          - : Ein String, der angibt, ob das zurückgegebene Objekt Sitzungsdaten oder andere Arten von Zuständen speichern können muss.
            Die erlaubten Werte sind:

            - `required`
              - : Das zurückgegebene Objekt muss diese Funktion unterstützen.
            - `optional`
              - : Das zurückgegebene Objekt kann diese Funktion unterstützen.
                Dies ist die Standardeinstellung.
            - `not-allowed`
              - : Das zurückgegebene Objekt darf diese Funktion nicht unterstützen oder verwenden.
                Nur "temporäre" Sitzungen können erstellt werden, wenn ein dauerhafter Zustand nicht erlaubt ist.

        - `sessionTypes` {{optional_inline}}

          - : Ein Array von Strings, das die Sitzungsarten angibt, die unterstützt werden müssen.
            Erlaubte Werte umfassen:

            - `temporary`
              - : Eine Sitzung, für die die Lizenz, Schlüssel und Aufzeichnungen oder Daten, die mit der Sitzung in Verbindung stehen, nicht persistent sind.
                Die Anwendung muss keine solche Speicherung verwalten.
                Implementierungen müssen diese Option unterstützen, und es ist die Standardeinstellung.
            - `persistent-license`
              - : Eine Sitzung, für die die Lizenz (und möglicherweise andere Daten, die mit der Sitzung in Zusammenhang stehen) gespeichert wird.
                Ein Nachweis der Lizenz und der zugehörigen Schlüssel bleibt erhalten, auch wenn die Lizenz zerstört wird, und liefert eine Bestätigung, dass die Lizenz und die Schlüssel, die sie enthält, vom Client nicht mehr verwendet werden können.

        - `audio` {{optional_inline}}

          - : Die Audio-Schlüsselsystemspurkonfiguration im Zusammenhang mit der obigen [`audio` Konfiguration](#audio).
            Wenn gesetzt, muss auch die [`audio` Konfiguration](#audio) gesetzt sein.

            - `encryptionScheme`
              - : Das Verschlüsselungsschema, das mit dem Inhaltstyp verbunden ist, wie `cenc`, `cbcs`, `cbcs-1-9`.
                Dieser Wert sollte von einer Anwendung gesetzt werden (er ist standardmäßig `null`, was darauf hinweist, dass jedes Verschlüsselungsschema verwendet werden darf).
            - `robustness`
              - : Das Robustheitsniveau, das mit dem Inhaltstyp verbunden ist.
                Der leere String zeigt an, dass jede Fähigkeit zur Entschlüsselung und Decodierung des Inhaltstyps akzeptabel ist.

        - `video` {{optional_inline}}

          - : Die Video-Schlüsselsystemspurkonfiguration im Zusammenhang mit der oben stehenden [`video` Konfiguration](#video).
            Wenn gesetzt, muss auch die [`video` Konfiguration](#video) gesetzt sein.

            - `encryptionScheme`
              - : Das Verschlüsselungsschema, das mit dem Inhaltstyp verbunden ist, wie `cenc`, `cbcs`, `cbcs-1-9`.
                Dieser Wert sollte von einer Anwendung gesetzt werden (er ist standardmäßig `null`, was darauf hinweist, dass jedes Verschlüsselungsschema verwendet werden darf).
            - `robustness`
              - : Das Robustheitsniveau, das mit dem Inhaltstyp verbunden ist.
                Der leere String zeigt an, dass jede Fähigkeit zur Entschlüsselung und Decodierung des Inhaltstyps akzeptabel ist.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem Objekt erfüllt wird, welches die folgenden Attribute enthält:

- `supported`
  - : `true`, wenn der Medieninhalt überhaupt decodiert werden kann. Ansonsten ist es `false`.
- `smooth`
  - : `true`, wenn die Wiedergabe des Mediums mit der in der Konfiguration angegebenen Bildrate ohne das Herunterfallen von Frames abgespielt werden kann. Andernfalls ist es `false`.
- `powerEfficient`
  - : `true`, wenn die Wiedergabe des Mediums energieeffizient sein wird. Andernfalls ist es `false`.
- `keySystemAccess`
  - : Ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess), das verwendet werden kann, um ein [`MediaKeys`](/de/docs/Web/API/MediaKeys) Objekt für die Einrichtung verschlüsselter Wiedergabe zu erstellen, oder `null`, wenn das Decodieren mit der bereitgestellten Konfiguration nicht unterstützt wird.

Browser melden eine unterstützte Medienkonfiguration als `smooth` und `powerEfficient`, bis Statistiken auf diesem Gerät erfasst wurden.
Alle unterstützten Audiocodecs melden `powerEfficient` als wahr.

### Ausnahmen

- {{jsxref("TypeError")}}

  - : Wird ausgelöst, wenn die an die `decodingInfo()` Methode übergebene `configuration` ungültig ist, entweder weil der Typ nicht Video oder Audio ist, der `contentType` kein gültiger Codec-MIME-Typ ist, die Mediendecodierungskonfiguration kein gültiger Wert für den `type` (File, Media-Source, oder WebRTC) ist, oder ein anderer Fehler in der an die Methode übergebenen Medienkonfiguration einschließt, einschließlich dem Auslassen von Werten.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die Methode wird in einem Worker aufgerufen, wenn [`configuration.keySystemConfiguration`](#keysystemconfiguration) definiert ist.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wird außerhalb eines sicheren Kontexts aufgerufen und [`configuration.keySystemConfiguration`](#keysystemconfiguration) ist definiert.

## Verwendungshinweise

### Vergleich mit Navigator.requestMediaKeySystemAccess()

`decodingInfo()` und die [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)-Methode der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) spiegeln grundlegend unterschiedliche Ansätze zur Auswahl einer Konfiguration für die Decodierung verschlüsselter Medien wider.

Der Konfigurationsparameter für `Navigator.requestMediaKeySystemAccess()` nimmt ein Array möglicher Konfigurationen an und ermöglicht es dem System, diejenige auszuwählen, die es für geeignet hält.

Im Gegensatz dazu nimmt `decodingInfo()` jeweils eine Konfiguration. Die Erwartung ist, dass der Anrufer `decodingInfo()` mehrmals ausführt, beginnend mit den bevorzugtesten Konfigurationen und beendet, sobald er eine Konfiguration findet, die die Anforderungen der Anwendung erfüllt, in Bezug auf flüssige Wiedergabe, Energieeffizienz oder beides. Mit anderen Worten, die Auswahlentscheidung wird dem Anrufer überlassen.

## Beispiele

### Decodierungsinformationen für unverschlüsselte Mediendateien abrufen

Dieses Beispiel zeigt, wie eine Medienkonfiguration für eine Audiodatei erstellt und dann in `MediaCapabilities.decodingInfo()` verwendet wird.

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
//Create media configuration to be tested
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

{{EmbedLiveSample("Decodierungsinformationen für unverschlüsselte Mediendateien abrufen")}}

### Decodierungsinformationen für verschlüsselte Medien abrufen

Dieses Beispiel zeigt, wie `decodingInfo()` verwendet werden kann, um eine Medienkonfiguration für verschlüsselten Inhalt auszuwählen.

Wie im vorherigen Beispiel definieren wir eine Medienkonfiguration, verwenden aber diesmal den `type` von `media-source` (anstatt `file`) und spezifizieren sowohl Audio- als auch Videoinhalt. Wir spezifizieren auch eine einfache `keySystemConfiguration`.

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

Im vorherigen Beispiel haben wir [Promise-Chaining](/de/docs/Web/JavaScript/Guide/Using_promises#chaining) verwendet, um auf das Ergebnis zu warten. Hier haben wir uns entschieden, [`async` und `await`](/de/docs/Learn/JavaScript/Asynchronous/Promises#async_and_await) zu verwenden, um auf das Ergebnis zu warten und es dann zu protokollieren.

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

Das Protokollergebnis wird unten angezeigt.

{{EmbedLiveSample("Decodierungsinformationen für verschlüsselte Medien abrufen")}}

### Iterieren durch Decodierungsinformationen für verschlüsselte Medien

Das vorherige Beispiel zeigte, wie Sie `decodingInfo()` verwenden können, um Informationen für nur eine Konfiguration zu erhalten. In der Realität würde die Methode normalerweise wiederholt mit einer Reihe von Konfigurationen aufgerufen werden, wobei die erste unterstützte Konfiguration ausgewählt wird, die die Kriterien der Anwendung für eine flüssige Wiedergabe oder Energieeffizienz erfüllt. Wie dies funktioniert, wird unten beschrieben.

Angenommen, wir haben bereits ein `Array` von Medienkonfigurationen namens `orderedMediaConfigs`, das wir von am meisten zu am wenigsten gewünscht geordnet haben, können wir die [`Array.prototype.map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) verwenden, um `decodingInfo()` für jede Konfiguration aufzurufen und ein Array zu erhalten, das alle zurückgegebenen {{jsxref("Promise")}} Objekte enthält.

```js
const capabilitiesPromises = orderedMediaConfigs.map((mediaConfig) =>
  navigator.mediaCapabilities.decodingInfo(mediaConfig),
);
```

Wir verwenden dann eine [`for await...of` Schleife](/de/docs/Web/JavaScript/Reference/Statements/for-await...of), um die Versprechen zu iterieren, während sie aufgelöst werden. In der Schleife speichern wir die zuletzt unterstützte Konfiguration in `nonSmoothConfig` und beenden die Schleife, sobald wir eine glatte Konfiguration finden, die wir als `bestConfig` festlegen.

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

Wenn wir eine glatte und unterstützte Konfiguration während der Schleife gefunden haben (`bestConfig`), verwenden wir sie, um [unsere Medienschlüssel zu erstellen](/de/docs/Web/API/MediaKeySystemAccess/createMediaKeys) und die Medien zu decodieren. Wenn wir keine glatten Konfigurationen entdeckt haben, könnten wir stattdessen `nonSmoothConfig` verwenden, um die Medien zu decodieren. Dies wird die unterstützte Konfiguration sein, die zuletzt gefunden wurde, die wegen der Art und Weise, wie wir die ursprünglichen `orderedMediaConfigs` geordnet haben, diejenige mit der niedrigsten Bildrate sein sollte.

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
- [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType) for file
- [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) for media-source
- [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)
