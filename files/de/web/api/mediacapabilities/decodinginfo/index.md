---
title: "MediaCapabilities: decodingInfo() Methode"
short-title: decodingInfo()
slug: Web/API/MediaCapabilities/decodingInfo
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{APIRef("Media Capabilities API")}}{{AvailableInWorkers}}

Die **`decodingInfo()`** Methode des [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) Interfaces gibt ein Promise zurück, das mit Informationen darüber erfüllt wird, wie gut der Benutzeragent Medien mit einer gegebenen Konfiguration dekodieren/anzeigen kann.

Das aufgelöste Objekt enthält drei boolesche Eigenschaften `supported`, `smooth` und `powerefficient`, die angeben, ob das Dekodieren der beschriebenen Medien unterstützt wird und, falls ja, ob das Dekodieren flüssig und energieeffizient wäre.

Die Methode kann auch verwendet werden, um die Fähigkeiten des Benutzeragenten zum Dekodieren von Medien zu testen, die mit einem Schlüsselverwaltungssystem kodiert sind, jedoch nur, wenn sie im Haupt-Thread und in einem sicheren Kontext aufgerufen wird. Wenn die in der Eigenschaft `configuration.keySystemConfiguration` übergebene Konfiguration zum Dekodieren der Daten unterstützt wird, beinhaltet das aufgelöste Promise auch ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess) Objekt, das verwendet werden kann, um ein [`MediaKeys`](/de/docs/Web/API/MediaKeys) Objekt zur Einrichtung der verschlüsselten Wiedergabe zu erstellen.

> [!NOTE]
> Das Aufrufen von `decodingInfo()` mit dieser Eigenschaft kann zu nutzerseitigen Effekten führen, wie zum Beispiel einer Anfrage zur Erlaubnis, auf ein oder mehrere Systemressourcen zuzugreifen.
> Daher sollte diese Funktion nur aufgerufen werden, wenn die Anwendung bereit ist, ein `MediaKeys` Objekt mit der bereitgestellten Konfiguration zu erstellen und zu nutzen.

## Syntax

```js-nolint
decodingInfo(configuration)
```

### Parameter

- `configuration`

  - : Ein Objekt mit einer Eigenschaft `type`, _entweder_ eine `video` oder `audio` Eigenschaft, die eine Konfiguration des entsprechenden Typs enthält, und optional eine `keySystemConfiguration` wenn Medien mit einem Verschlüsselungssystem dekodiert werden: <!-- MediaDecodingConfiguration in the spec -->

    - `type`

      - : Der Typ der zu testenden Medien. Dies nimmt einen von drei Werten an:

        - `file`
          - : Repräsentiert eine Konfiguration, die für eine einfache Dateiwiedergabe verwendet werden soll.
        - `media-source`
          - : Repräsentiert eine Konfiguration, die für die Wiedergabe einer [`MediaSource`](/de/docs/Web/API/MediaSource) verwendet werden soll.
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
          - : Die Anzahl der Bits, die zum Kodieren einer Sekunde der Videodatei verwendet werden.
        - `framerate`
          - : Die Anzahl der Frames, die eine Sekunde der Videowiedergabe ausmachen.

    - `audio`

      - : Konfigurationsobjekt für eine Audio-Medienquelle.
        Dies hat die folgenden Eigenschaften: <!-- AudioConfiguration in the spec -->

        - `contentType`
          - : String, der einen gültigen Audio-MIME-Typ und (optional) einen [`codecs` Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) enthält.
        - `channels`
          - : Die Anzahl der Kanäle, die vom Audiotrack verwendet werden.
        - `bitrate`
          - : Die Anzahl der Bits, die zum Kodieren einer Sekunde der Audiodatei verwendet werden.
        - `samplerate`
          - : Die Anzahl der Audioproben, die eine Sekunde der Audiodatei ausmachen.

    - `keySystemConfiguration` {{optional_inline}}

      - : Objekt, das die Schlüsselverwaltungssystemkonfiguration für verschlüsselte Medien spezifiziert.

        > **Hinweis:** [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) nimmt Arrays einiger der gleichen Datentypen in seinem `supportedConfigurations` Argument an.

        Wenn angegeben, muss der [`type`](#type) `media-source` oder `file` sein (nicht `webrtc`).
        Dies hat die folgenden Eigenschaften: <!-- MediaCapabilitiesKeySystemConfiguration in the spec -->

        - `keySystem`

          - : Ein String, der das Medien-Schlüsselverwaltungssystem identifiziert.
            Zum Beispiel `org.w3.clearkey` oder `com.widevine.alpha`.

        - `initDataType` {{optional_inline}}

          - : Ein String, der den Namen des Datentyps des Initialisierungsdatenformats angibt, wie `"cenc"`, `"keyids"` und `"webm"`.
            Erlaubte Namen sind im [Encrypted Media Extensions Initialization Data Format Registry](https://www.w3.org/TR/eme-initdata-registry/) definiert.

        - `distinctiveIdentifier` {{optional_inline}}

          - : Ein String, der angibt, ob die Implementierung "unterscheidbare Kennungen" (oder unveränderliche, unterscheidbare Kennungen) für jegliche Operationen verwenden darf, die mit einem aus dieser Konfiguration erstellten Objekt verbunden sind.
            Die erlaubten Werte sind:

            - `required`
              - : Das zurückgegebene Objekt muss diese Funktion unterstützen.
            - `optional`
              - : Das zurückgegebene Objekt kann diese Funktion unterstützen.
                Dies ist die Standardeinstellung.
            - `not-allowed`
              - : Das zurückgegebene Objekt darf diese Funktion nicht unterstützen oder verwenden.

        - `persistentState` {{optional_inline}}

          - : Ein String, der angibt, ob das zurückgegebene Objekt Sitzungsdaten oder jede andere Art von Zustand speichern muss.
            Die erlaubten Werte sind:

            - `required`
              - : Das zurückgegebene Objekt muss diese Funktion unterstützen.
            - `optional`
              - : Das zurückgegebene Objekt kann diese Funktion unterstützen.
                Dies ist die Standardeinstellung.
            - `not-allowed`
              - : Das zurückgegebene Objekt darf diese Funktion nicht unterstützen oder verwenden.
                Nur "temporäre" Sitzungen dürfen erstellt werden, wenn permanenter Zustand nicht erlaubt ist.

        - `sessionTypes` {{optional_inline}}

          - : Ein Array von Strings, das die Sitzungstypen angibt, die unterstützt werden müssen.
            Erlaubte Werte beinhalten:

            - `temporary`
              - : Eine Sitzung, für die die Lizenz, Schlüssel und eine Aufzeichnung oder Daten, die mit der Sitzung verbunden sind, nicht gespeichert werden.
                Die Anwendung muss eine solche Speicherung nicht verwalten.
                Implementierungen müssen diese Option unterstützen, und es ist die Standardeinstellung.
            - `persistent-license`
              - : Eine Sitzung, für die die Lizenz (und möglicherweise andere mit der Sitzung verbundene Daten) gespeichert werden.
                Eine Aufzeichnung der Lizenz und der zugehörigen Schlüssel bleibt erhalten, auch wenn die Lizenz zerstört wird, da sie eine Bestätigung bietet, dass die Lizenz und die Schlüssel, die sie enthält, nicht mehr vom Client verwendet werden können.

        - `audio` {{optional_inline}}

          - : Die Audio-Schlüsselverwaltungssystemtrackkonfiguration, die mit der oben erwähnten [`audio` Konfiguration](#audio) verbunden ist.
            Wenn gesetzt, muss auch die [`audio` Konfiguration](#audio) gesetzt sein.

            - `encryptionScheme`
              - : Das Verschlüsselungsschema, das mit dem Inhaltstyp verbunden ist, wie `cenc`, `cbcs`, `cbcs-1-9`.
                Dieser Wert sollte von einer Anwendung gesetzt werden (er ist standardmäßig `null`, was bedeutet, dass jedes Verschlüsselungsschema verwendet werden kann).
            - `robustness`
              - : Das Robustheitsniveau, das mit dem Inhaltstyp verbunden ist.
                Der leere String zeigt an, dass jede Fähigkeit, den Inhaltstyp zu entschlüsseln und zu dekodieren, akzeptabel ist.

        - `video` {{optional_inline}}

          - : Die Video-Schlüsselverwaltungssystemtrackkonfiguration, die mit der oben erwähnten [`video` Konfiguration](#video) verbunden ist.
            Wenn gesetzt, muss auch die [`video` Konfiguration](#video) gesetzt sein.

            - `encryptionScheme`
              - : Das Verschlüsselungsschema, das mit dem Inhaltstyp verbunden ist, wie `cenc`, `cbcs`, `cbcs-1-9`.
                Dieser Wert sollte von einer Anwendung gesetzt werden (er ist standardmäßig `null`, was bedeutet, dass jedes Verschlüsselungsschema verwendet werden kann).
            - `robustness`
              - : Das Robustheitsniveau, das mit dem Inhaltstyp verbunden ist.
                Der leere String zeigt an, dass jede Fähigkeit, den Inhaltstyp zu entschlüsseln und zu dekodieren, akzeptabel ist.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem Objekt mit den folgenden Attributen erfüllt wird:

- `supported`
  - : `true`, wenn der Medieninhalt überhaupt dekodiert werden kann. Andernfalls ist es `false`.
- `smooth`
  - : `true`, wenn die Wiedergabe der Medien mit der in der Konfiguration angegebenen Bildrate abgespielt werden kann, ohne dass Frames ausgelassen werden müssen. Andernfalls ist es `false`.
- `powerEfficient`
  - : `true`, wenn die Wiedergabe der Medien energieeffizient ist. Andernfalls ist es `false`.
- `keySystemAccess`
  - : Ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess), das verwendet werden kann, um ein [`MediaKeys`](/de/docs/Web/API/MediaKeys) Objekt zur Einrichtung der verschlüsselten Wiedergabe zu erstellen, oder `null`, wenn das Dekodieren mit der bereitgestellten Konfiguration nicht unterstützt wird.

Browser melden eine unterstützte Medienkonfiguration als `smooth` und `powerEfficient`, bis Statistiken auf diesem Gerät aufgezeichnet wurden.
Alle unterstützten Audiocodecs melden `powerEfficient` als wahr.

### Ausnahmen

- {{jsxref("TypeError")}}

  - : Wird ausgelöst, wenn die `configuration`, die an die `decodingInfo()` Methode übergeben wird, ungültig ist, entweder weil der Typ nicht video oder audio ist, der `contentType` kein gültiger Codec-MIME-Typ ist, die Mediendekodierungskonfiguration kein gültiger Wert für den `type` ist (file, media-source oder webrtc), oder ein anderer Fehler in der Mediakonfiguration, die an die Methode übergeben wurde, einschließlich des Auslassens von Werten.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die Methode wird in einem Worker aufgerufen, wenn [`configuration.keySystemConfiguration`](#keysystemconfiguration) definiert ist.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wird außerhalb eines sicheren Kontexts aufgerufen und [`configuration.keySystemConfiguration`](#keysystemconfiguration) ist definiert.

## Verwendungshinweise

### Vergleich mit Navigator.requestMediaKeySystemAccess()

`decodingInfo()` und die [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) Methode der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) spiegeln grundsätzlich unterschiedliche Ansätze zur Auswahl einer Konfiguration für das Dekodieren verschlüsselter Medien wider.

Der Konfigurationsparameter für `Navigator.requestMediaKeySystemAccess()` nimmt ein Array von möglichen Konfigurationen und ermöglicht es dem System, die als am besten geeignet betrachtete auszuwählen.

Im Gegensatz dazu nimmt `decodingInfo()` jeweils nur eine Konfiguration an.
Die Erwartung ist, dass der Aufrufer `decodingInfo()` mehrmals ausführt, beginnend mit den bevorzugtesten Konfigurationen und endet, sobald er eine Konfiguration findet, die die Anforderungen der Anwendung an flüssiges Abspielen, Energieeffizienz oder beides erfüllt.
Mit anderen Worten, die Auswahlentscheidung wird dem Aufrufer überlassen.

## Beispiele

### Dekodierungsinformationen für unverschlüsselte Mediendateien abrufen

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

Ebenso zeigt der folgende Code die Konfiguration für eine Videodatei.

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

### Dekodierungsinformationen für verschlüsselte Medien abrufen

Dieses Beispiel zeigt, wie Sie `decodingInfo()` verwenden könnten, um eine Medienkonfiguration für verschlüsselten Inhalt auszuwählen.

Wie im vorherigen Beispiel definieren wir eine Medienkonfiguration, aber dieses Mal verwenden wir den `type` `media-source` (anstatt `file`), und spezifizieren sowohl Audio- als auch Videoinhalt.
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

Im vorherigen Beispiel haben wir [Promise-Chaining](/de/docs/Web/JavaScript/Guide/Using_promises#chaining) verwendet, um auf das Ergebnis zu warten.
Hier haben wir uns entschieden, [`async` und `await`](/de/docs/Learn_web_development/Extensions/Async_JS/Promises#async_and_await) zu verwenden, um auf das Ergebnis zu warten, und es dann zu protokollieren.

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

Das Protokollergebnis ist unten gezeigt.

{{EmbedLiveSample("Getting decoding information for encrypted media")}}

### Iterieren durch Dekodierungsinformationen für verschlüsselte Medien

Das vorherige Beispiel zeigte, wie Sie `decodingInfo()` verwenden können, um Informationen für nur eine Konfiguration zu erhalten.
In der Realität würde die Methode normalerweise iterativ mit einer Reihe von Konfigurationen aufgerufen, um die erste unterstützte Konfiguration auszuwählen, die die Kriterien der Anwendung für flüssiges Abspielen oder Energieeffizienz erfüllt.
Wie dies funktioniert, wird unten beschrieben.

Angenommen, wir haben bereits ein `Array` von Medienkonfigurationen namens `orderedMediaConfigs`, das wir von am meisten zu am wenigsten gewünscht geordnet haben, können wir [`Array.prototype.map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) verwenden, um `decodingInfo()` für jede Konfiguration aufzurufen und ein Array zu erhalten, das alle zurückgegebenen {{jsxref("Promise")}} Objekte enthält.

```js
const capabilitiesPromises = orderedMediaConfigs.map((mediaConfig) =>
  navigator.mediaCapabilities.decodingInfo(mediaConfig),
);
```

Wir verwenden dann eine [`for await...of` Schleife](/de/docs/Web/JavaScript/Reference/Statements/for-await...of), um die Promises abzuarbeiten, sobald sie aufgelöst werden.
In der Schleife speichern wir die letzte unterstützte Konfiguration in `nonSmoothConfig` und verlassen die Schleife sofort, sobald wir eine flüssige Konfiguration finden und diese als unsere `bestConfig` festlegen.

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

Wenn wir eine flüssige und unterstützte Konfiguration beim Durchlaufen gefunden haben (`bestConfig`), verwenden wir sie, um [unsere Mediaschlüssel zu erstellen](/de/docs/Web/API/MediaKeySystemAccess/createMediaKeys) und die Medien zu dekodieren.
Wenn wir keine flüssigen Konfigurationen entdecken, könnten wir stattdessen `nonSmoothConfig` verwenden, um die Medien zu dekodieren.
Dies wird die unterstützte Konfiguration sein, die zuletzt gefunden wurde, was aufgrund der Art und Weise, wie wir die ursprünglichen `orderedMediaConfigs` geordnet haben, die mit der geringsten Bildrate sein sollte.

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

Wenn es keine unterstützte Konfiguration gibt, haben wir keine andere Wahl, als zu scheitern und den Nutzer zu benachrichtigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaCapabilities.encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo)
- [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType) für Datei
- [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) für media-source
- [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)
