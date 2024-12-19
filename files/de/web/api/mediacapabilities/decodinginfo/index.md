---
title: "MediaCapabilities: decodingInfo() Methode"
short-title: decodingInfo()
slug: Web/API/MediaCapabilities/decodingInfo
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("Media Capabilities API")}}{{AvailableInWorkers}}

Die **`decodingInfo()`** Methode der [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) Schnittstelle gibt ein Versprechen (`Promise`) zurück, das mit Informationen darüber erfüllt wird, wie gut der Benutzeragent Medien mit einer gegebenen Konfiguration decodieren/anzeigen kann.

Das aufgelöste Objekt enthält drei boolesche Eigenschaften `supported`, `smooth` und `powerefficient`, die angeben, ob das Decodieren der beschriebenen Medien unterstützt wird, und wenn ja, ob das Decodieren reibungslos und energieeffizient wäre.

Die Methode kann auch verwendet werden, um die Fähigkeiten des Benutzeragenten zum Decodieren von Medien zu testen, die mit einem Schlüsselsystem codiert sind, jedoch nur, wenn sie im Hauptthread und in einem sicheren Kontext aufgerufen wird.
Wenn die Konfiguration, die in der Eigenschaft `configuration.keySystemConfiguration` übergeben wurde, zum Decodieren der Daten unterstützt wird, enthält das aufgelöste Versprechen auch ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess) Objekt, das verwendet werden kann, um ein [`MediaKeys`](/de/docs/Web/API/MediaKeys) Objekt zu erstellen, um die verschlüsselte Wiedergabe einzurichten.

> [!NOTE]
> Der Aufruf von `decodingInfo()` mit dieser Eigenschaft kann zu sichtbaren Effekten für den Benutzer führen, wie etwa dem Anfordern von Berechtigungen zum Zugriff auf ein oder mehrere Systemressourcen. Deshalb sollte diese Funktion nur aufgerufen werden, wenn die Anwendung bereit ist, ein `MediaKeys` Objekt mit der bereitgestellten Konfiguration zu erstellen und zu verwenden.

## Syntax

```js-nolint
decodingInfo(configuration)
```

### Parameter

- `configuration`

  - : Ein Objekt mit einer Eigenschaft `type`, _entweder_ einer `video` oder `audio` Eigenschaft, die eine Konfiguration des entsprechenden Typs enthält, und optional einer `keySystemConfiguration` für das Decodieren von Medien, die mit einem Schlüsselsystem verschlüsselt sind: <!-- MediaDecodingConfiguration in der Spezifikation -->

    - `type`

      - : Der Typ der getesteten Medien. Dies nimmt einen von drei Werten an:

        - `file`
          - : Repräsentiert eine Konfiguration, die für die Wiedergabe einer einfachen Datei verwendet werden soll.
        - `media-source`
          - : Repräsentiert eine Konfiguration, die für die Wiedergabe einer [`MediaSource`](/de/docs/Web/API/MediaSource) verwendet werden soll.
        - `webrtc`
          - : Repräsentiert eine Konfiguration, die über ein [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) empfangen werden soll (nicht erlaubt, wenn `keySystemConfiguration` gesetzt ist).

    - `video`

      - : Konfigurationsobjekt für eine Video-Medienquelle.
        Dieses hat die folgenden Eigenschaften: <!-- VideoConfiguration in der Spezifikation -->

        - `contentType`
          - : String, der einen gültigen Video-MIME-Typ enthält und (optional) einen [`codecs` Parameter](/de/docs/Web/Media/Formats/codecs_parameter).
        - `width`
          - : Die Breite des Videos.
        - `height`
          - : Die Höhe des Videos.
        - `bitrate`
          - : Die Anzahl der Bits, die verwendet werden, um eine Sekunde der Videodatei zu codieren.
        - `framerate`
          - : Die Anzahl der Frames, die eine Sekunde der Videowiedergabe bilden.

    - `audio`

      - : Konfigurationsobjekt für eine Audio-Medienquelle.
        Dieses hat die folgenden Eigenschaften: <!-- AudioConfiguration in der Spezifikation -->

        - `contentType`
          - : String, der einen gültigen Audio-MIME-Typ enthält und (optional) einen [`codecs` Parameter](/de/docs/Web/Media/Formats/codecs_parameter).
        - `channels`
          - : Die Anzahl der Kanäle, die von der Audiospur verwendet werden.
        - `bitrate`
          - : Die Anzahl der Bits, die benötigt werden, um eine Sekunde der Audiodatei zu codieren.
        - `samplerate`
          - : Die Anzahl der Audiosamples, die eine Sekunde der Audiodatei bilden.

    - `keySystemConfiguration` {{optional_inline}}

      - : Objekt, das die Schlüsselsystemkonfiguration für verschlüsselte Medien spezifiziert.

        > **Note:** [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) akzeptiert Arrays, einige der gleichen Datentypen in seinem `supportedConfigurations` Argument.

        Wenn angegeben, muss der [`type`](#type) `media-source` oder `file` sein (nicht `webrtc`).
        Dieses hat die folgenden Eigenschaften: <!-- MediaCapabilitiesKeySystemConfiguration in der Spezifikation -->

        - `keySystem`

          - : Ein String, der das Medien-Schlüsselsystem identifiziert.
            Zum Beispiel `org.w3.clearkey` oder `com.widevine.alpha`.

        - `initDataType` {{optional_inline}}

          - : Ein String, der den Namen des Datentypformats angibt, wie `"cenc"`, `"keyids"` und `"webm"`.
            Erlaubte Namen sind im [Encrypted Media Extensions Initialization Data Format Registry](https://www.w3.org/TR/eme-initdata-registry/) definiert.

        - `distinctiveIdentifier` {{optional_inline}}

          - : Ein String, der angibt, ob die Implementierung „unverwechselbare Identifikatoren“ (oder unverwechselbare permanente Identifikatoren) für beliebige Operationen verwenden darf, die mit einem beliebigen aus dieser Konfiguration erstellten Objekt verbunden sind.
            Die erlaubten Werte sind:

            - `required`
              - : Das zurückgegebene Objekt muss diese Funktion unterstützen.
            - `optional`
              - : Das zurückgegebene Objekt kann diese Funktion unterstützen. Dies ist der Standard.
            - `not-allowed`
              - : Das zurückgegebene Objekt darf diese Funktion nicht unterstützen oder verwenden.

        - `persistentState` {{optional_inline}}

          - : Ein String, der angibt, ob das zurückgegebene Objekt in der Lage sein muss, Sitzungsdaten oder irgendeinen anderen Staatstyp zu speichern.
            Die erlaubten Werte sind:

            - `required`
              - : Das zurückgegebene Objekt muss diese Funktion unterstützen.
            - `optional`
              - : Das zurückgegebene Objekt kann diese Funktion unterstützen. Dies ist der Standard.
            - `not-allowed`
              - : Das zurückgegebene Objekt darf diese Funktion nicht unterstützen oder verwenden.
                Nur „temporäre“ Sitzungen dürfen erstellt werden, wenn ein dauerhafter Zustand nicht erlaubt ist.

        - `sessionTypes` {{optional_inline}}

          - : Ein Array von Strings, das die Sitzungstypen angibt, die unterstützt werden müssen.
            Zulässige Werte sind:

            - `temporary`
              - : Eine Sitzung, für die die Lizenz, der/die Schlüssel und Aufzeichnungen oder Daten, die sich auf die Sitzung beziehen, nicht gespeichert werden.
                Die Anwendung muss ein solches Speichern nicht verwalten.
                Implementierungen müssen diese Option unterstützen, und es ist der Standard.
            - `persistent-license`
              - : Eine Sitzung, für die die Lizenz (und möglicherweise andere Daten, die sich auf die Sitzung beziehen) gespeichert werden.
                Ein Nachweis der Lizenz und der zugehörigen Schlüssel bleibt erhalten, selbst wenn die Lizenz zerstört wird, und bietet den Nachweis, dass die Lizenz und die darin enthaltenen Schlüssel vom Client nicht mehr nutzbar sind.

        - `audio` {{optional_inline}}

          - : Die Audioschlüsselsystem-Spurkonfiguration, die mit der obigen [`audio` Konfiguration](#audio) verknüpft ist.
            Wenn gesetzt, muss dann auch die [`audio` Konfiguration](#audio) gesetzt werden.

            - `encryptionScheme`
              - : Das Verschlüsselungsschema, das mit dem Inhaltstyp verknüpft ist, wie `cenc`, `cbcs`, `cbcs-1-9`.
                Dieser Wert sollte von einer Anwendung festgelegt werden (er ist standardmäßig auf `null` gesetzt, was darauf hinweist, dass jedes Verschlüsselungsschema verwendet werden kann).
            - `robustness`
              - : Das Robustheitsniveau, das mit dem Inhaltstyp verknüpft ist.
                Der leere String gibt an, dass jede Fähigkeit zur Entschlüsselung und Dekodierung des Inhaltstyps akzeptabel ist.

        - `video` {{optional_inline}}

          - : Die Videoschlüsselsystem-Spurkonfiguration, die mit der obigen [`video` Konfiguration](#video) verknüpft ist.
            Wenn gesetzt, muss dann auch die [`video` Konfiguration](#video) gesetzt werden.

            - `encryptionScheme`
              - : Das Verschlüsselungsschema, das mit dem Inhaltstyp verknüpft ist, wie `cenc`, `cbcs`, `cbcs-1-9`.
                Dieser Wert sollte von einer Anwendung festgelegt werden (er ist standardmäßig auf `null` gesetzt, was darauf hinweist, dass jedes Verschlüsselungsschema verwendet werden kann).
            - `robustness`
              - : Das Robustheitsniveau, das mit dem Inhaltstyp verknüpft ist.
                Der leere String gibt an, dass jede Fähigkeit zur Entschlüsselung und Dekodierung des Inhaltstyps akzeptabel ist.

### Rückgabewert

Ein {{jsxref('Promise')}} wird mit einem Objekt erfüllt, das die folgenden Attribute enthält:

- `supported`
  - : `true`, wenn der Medieninhalt überhaupt decodiert werden kann. Andernfalls ist es `false`.
- `smooth`
  - : `true`, wenn die Wiedergabe der Medien mit der durch die Konfiguration angegebenen Bildrate ohne das Auslassen von Frames abgespielt werden kann. Andernfalls ist es `false`.
- `powerEfficient`
  - : `true`, wenn die Wiedergabe der Medien energieeffizient sein wird. Andernfalls ist es `false`.
- `keySystemAccess`
  - : Ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess), das verwendet werden kann, um ein [`MediaKeys`](/de/docs/Web/API/MediaKeys) Objekt zu erstellen, um die verschlüsselte Wiedergabe einzurichten, oder `null`, wenn das Decodieren mit der angegebenen Konfiguration nicht unterstützt wird.

Browser werden eine unterstützte Medienkonfiguration als `smooth` und `powerEfficient` melden, bis Statistiken auf diesem Gerät aufgezeichnet wurden.
Alle unterstützten Audiocodecs melden `powerEfficient` als wahr.

### Ausnahmen

- {{jsxref("TypeError")}}

  - : Wird ausgelöst, wenn die an die `decodingInfo()` Methode übergebene `configuration` ungültig ist, entweder weil der Typ nicht "video" oder "audio" ist, die `contentType` kein gültiger Codec-MIME-Typ ist, die Mediacodierungskonfiguration kein gültiger Wert für den `type` (file, media-source oder webrtc) ist oder ein anderer Fehler in der an die Methode übergebenen Medienkonfiguration auftritt, einschließlich des Weglassens von Werten.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die Methode wird in einem Worker aufgerufen, wenn [`configuration.keySystemConfiguration`](#keysystemconfiguration) definiert ist.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wird außerhalb eines sicheren Kontexts aufgerufen und [`configuration.keySystemConfiguration`](#keysystemconfiguration) ist definiert.

## Anwendungshinweise

### Vergleich mit Navigator.requestMediaKeySystemAccess()

`decodingInfo()` und die [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) Methode der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) spiegeln grundsätzlich unterschiedliche Ansätze zur Auswahl einer Konfiguration für das Decodieren von verschlüsselten Medien wider.

Der Konfigurationsparameter für `Navigator.requestMediaKeySystemAccess()` nimmt ein Array möglicher Konfigurationen und ermöglicht es dem System, diejenige auszuwählen, die es für angemessen hält.

Im Gegensatz dazu nimmt `decodingInfo()` immer nur eine Konfiguration an.
Die Erwartung ist, dass der Aufrufer `decodingInfo()` mehrfach ausführt, beginnend mit den am meisten bevorzugten Konfigurationen und aufhört, sobald er eine Konfiguration findet, die die Anforderungen der Anwendung an Reibungslosigkeit, Energieeffizienz oder beides erfüllt.
Mit anderen Worten, die Auswahlentscheidung wird an den Aufrufer abgegeben.

## Beispiele

### Decodierungsinformationen für unverschlüsselte Mediendateien abrufen

Dieses Beispiel zeigt, wie man eine Medienkonfiguration für eine Audiodatei erstellt und sie dann in `MediaCapabilities.decodingInfo()` verwendet.

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

Ähnlich zeigt der folgende Code die Konfiguration für eine Videodatei.

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

Dieses Beispiel zeigt, wie man `decodingInfo()` verwenden könnte, um eine Medienkonfiguration für verschlüsselten Inhalt auszuwählen.

Wie im vorherigen Beispiel definieren wir eine Medienkonfiguration, aber diesmal verwenden wir den `type` von `media-source` (statt `file`) und spezifizieren sowohl Audio- als auch Videoinhalt.
Wir geben auch eine einfache `keySystemConfiguration` an.

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

Im vorherigen Beispiel haben wir [Promise Chaining](/de/docs/Web/JavaScript/Guide/Using_promises#chaining) verwendet, um auf das Ergebnis zu warten.
Hier haben wir uns entschieden, [`async` and `await`](/de/docs/Learn_web_development/Extensions/Async_JS/Promises#async_and_await) zu verwenden, um auf das Ergebnis zu warten und es dann zu protokollieren.

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

Das Protokollergebnis wird unten gezeigt.

{{EmbedLiveSample("Decodierungsinformationen für verschlüsselte Medien abrufen")}}

### Iterieren durch Decodierungsinformationen für verschlüsselte Medien

Das vorherige Beispiel zeigte, wie Sie `decodingInfo()` verwenden können, um Informationen nur für eine Konfiguration zu erhalten.
In der Realität würde die Methode normalerweise iterativ mit einer Reihe von Konfigurationen aufgerufen, wobei die erste unterstützte Konfiguration ausgewählt wird, die den Kriterien der Anwendung für reibungslose Wiedergabe oder Energieeffizienz entspricht.
Wie dies funktioniert, wird unten beschrieben.

Angenommen, wir haben bereits ein `Array` von Medienkonfigurationen mit dem Namen `orderedMediaConfigs`, das wir von den meisten bis zu den am wenigsten gewünschten geordnet haben, können wir die [`Array.prototype.map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) verwenden, um `decodingInfo()` für jede Konfiguration aufzurufen und ein Array zu erhalten, das alle zurückgegebenen {{jsxref("Promise")}} Objekte enthält.

```js
const capabilitiesPromises = orderedMediaConfigs.map((mediaConfig) =>
  navigator.mediaCapabilities.decodingInfo(mediaConfig),
);
```

Wir verwenden dann eine [`for await...of` Schleife](/de/docs/Web/JavaScript/Reference/Statements/for-await...of), um die Promises bei ihrer Auflösung zu iterieren.
In der Schleife speichern wir die letzte unterstützte Konfiguration in `nonSmoothConfig`, und wir verlassen die Schleife, sobald wir eine reibungslose Konfiguration finden und diese als unsere `bestConfig` setzen.

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

Wenn wir während der Schleife eine reibungslose und unterstützte Konfiguration gefunden haben (`bestConfig`), verwenden wir diese, um [unsere Medienschlüssel zu erstellen](/de/docs/Web/API/MediaKeySystemAccess/createMediaKeys) und die Medien zu decodieren.
Wenn wir keine reibungslosen Konfigurationen entdeckt haben, könnten wir stattdessen `nonSmoothConfig` verwenden, um die Medien zu decodieren.
Dies wird die zuletzt gefundene unterstützte Konfiguration sein, die, aufgrund der Art und Weise, wie wir die ursprünglichen `orderedMediaConfigs` geordnet haben, diejenige mit der niedrigsten Framerate sein sollte.

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

Wenn keine unterstützte Konfiguration vorhanden ist, haben wir keine andere Wahl, als zu scheitern und den Benutzer zu benachrichtigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaCapabilities.encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo)
- [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType) für Datei
- [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) für media-source
- [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)
