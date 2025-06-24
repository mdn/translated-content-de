---
title: "MediaCapabilities: Methode decodingInfo()"
short-title: decodingInfo()
slug: Web/API/MediaCapabilities/decodingInfo
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("Media Capabilities API")}}{{AvailableInWorkers}}

Die **`decodingInfo()`**-Methode der [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)-Schnittstelle gibt ein Promise zurück, das mit Informationen erfüllt wird, wie gut der Benutzeragent Medien mit einer gegebenen Konfiguration dekodieren/anzeigen kann.

Das aufgelöste Objekt enthält drei boolesche Eigenschaften `supported`, `smooth`, und `powerefficient`, die angeben, ob das Dekodieren der beschriebenen Medien unterstützt würde und ob das Dekodieren in diesem Fall reibungslos und energieeffizient wäre.

Die Methode kann auch verwendet werden, um die Fähigkeiten des Benutzeragents zum Dekodieren von Medien zu testen, die mit einem Schlüsselsystem kodiert sind, jedoch nur, wenn sie im Hauptthread und in einem sicheren Kontext aufgerufen wird.
Wenn die im `configuration.keySystemConfiguration`-Eigenschaft übergebene Konfiguration zum Dekodieren der Daten unterstützt wird, enthält das aufgelöste Promise auch ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess)-Objekt, das verwendet werden kann, um ein [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Objekt zu erstellen, um die verschlüsselte Wiedergabe einzurichten.

> [!NOTE]
> Das Aufrufen von `decodingInfo()` mit dieser Eigenschaft kann zu benutzerseitig sichtbaren Effekten führen, wie dem Anfordern der Erlaubnis, auf ein oder mehrere Systemressourcen zuzugreifen. Daher sollte diese Funktion nur aufgerufen werden, wenn die Anwendung bereit ist, ein `MediaKeys`-Objekt mit der bereitgestellten Konfiguration zu erstellen und zu verwenden.

## Syntax

```js-nolint
decodingInfo(configuration)
```

### Parameter

- `configuration`

  - : Ein Objekt mit einer Eigenschaft `type`, _entweder_ einer `video`- oder `audio`-Eigenschaft, die eine Konfiguration des entsprechenden Typs enthält, und optional einer `keySystemConfiguration`, wenn Medien mit einem Schlüsselsystem dekodiert werden:

    - `type`

      - : Der Typ der getesteten Medien. Dies nimmt einen von drei Werten an:
        - `file`
          - : Repräsentiert eine Konfiguration, die für die Wiedergabe einer einfachen Datei gedacht ist.
        - `media-source`
          - : Repräsentiert eine Konfiguration, die für die Wiedergabe einer [`MediaSource`](/de/docs/Web/API/MediaSource) gedacht ist.
        - `webrtc`
          - : Repräsentiert eine Konfiguration, die über [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) empfangen werden soll (nicht erlaubt, wenn `keySystemConfiguration` gesetzt ist).

    - `video`

      - : Konfigurationsobjekt für eine Video-Medienquelle.
        Dies hat die folgenden Eigenschaften:
        - `contentType`
          - : String, der einen gültigen Video-MIME-Typ enthält, und (optional) einen [`codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter).
        - `width`
          - : Die Breite des Videos.
        - `height`
          - : Die Höhe des Videos.
        - `bitrate`
          - : Die Anzahl der Bits, die verwendet werden, um eine Sekunde der Videodatei zu kodieren.
        - `framerate`
          - : Die Anzahl der Frames, die eine Sekunde Videowiedergabe bilden.

    - `audio`

      - : Konfigurationsobjekt für eine Audio-Medienquelle.
        Dies hat die folgenden Eigenschaften:
        - `contentType`
          - : String, der einen gültigen Audio-MIME-Typ enthält, und (optional) einen [`codecs`-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter).
        - `channels`
          - : Die Anzahl der vom Audiotrack genutzten Kanäle.
        - `bitrate`
          - : Die Anzahl der Bits, die verwendet werden, um eine Sekunde der Audiodatei zu kodieren.
        - `samplerate`
          - : Die Anzahl der Audio-Samples, die eine Sekunde der Audiodatei bilden.

    - `keySystemConfiguration` {{optional_inline}}

      - : Objekt, das die Schlüsselsystemkonfiguration für verschlüsselte Medien angibt.

        > [!NOTE] > [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) nimmt Arrays von denselben Datentypen im Argument `supportedConfigurations`.

        Wenn angegeben, muss der [`type`](#type) `media-source` oder `file` sein (nicht `webrtc`).
        Dies hat die folgenden Eigenschaften:

        - `keySystem`

          - : Ein String, der das Mediaschlüsselsystem identifiziert.
            Zum Beispiel `org.w3.clearkey` oder `com.widevine.alpha`.

        - `initDataType` {{optional_inline}}

          - : Ein String, der den Datentypnamen des Initialisierungsdatenformats angibt, wie `"cenc"`, `"keyids"` und `"webm"`.
            Erlaubte Namen sind im [Encrypted Media Extensions Initialization Data Format Registry](https://w3c.github.io/encrypted-media/format-registry/initdata/) definiert.

        - `distinctiveIdentifier` {{optional_inline}}

          - : Ein String, der angibt, ob die Implementierung "unverwechselbare Bezeichner" (oder unverwechselbare permanente Bezeichner) für Operationen verwenden darf, die mit einem aus dieser Konfiguration erstellten Objekt verbunden sind.
            Die erlaubten Werte sind:
            - `required`
              - : Das zurückgegebene Objekt muss dieses Merkmal unterstützen.
            - `optional`
              - : Das zurückgegebene Objekt kann dieses Merkmal unterstützen.
                Dies ist der Standardwert.
            - `not-allowed`
              - : Das zurückgegebene Objekt darf dieses Merkmal nicht unterstützen oder nutzen.

        - `persistentState` {{optional_inline}}

          - : Ein String, der angibt, ob das zurückgegebene Objekt in der Lage sein muss, Sitzungsdaten oder eine andere Art von Zustand zu speichern.
            Die erlaubten Werte sind:
            - `required`
              - : Das zurückgegebene Objekt muss dieses Merkmal unterstützen.
            - `optional`
              - : Das zurückgegebene Objekt kann dieses Merkmal unterstützen.
                Dies ist der Standardwert.
            - `not-allowed`
              - : Das zurückgegebene Objekt darf dieses Merkmal nicht unterstützen oder nutzen.
                Nur "temporäre" Sitzungen dürfen erstellt werden, wenn der persistente Zustand nicht erlaubt ist.

        - `sessionTypes` {{optional_inline}}

          - : Ein Array von Strings, das die Sitzungstypen angibt, die unterstützt werden müssen.
            Erlaubte Werte schließen ein:
            - `temporary`
              - : Eine Sitzung, bei der die Lizenz, die Schlüssel und das Protokoll oder Daten, die mit der Sitzung zusammenhängen, nicht gespeichert werden.
                Die Anwendung muss eine solche Speicherung nicht verwalten.
                Implementierungen müssen diese Option unterstützen, und sie ist der Standard.
            - `persistent-license`
              - : Eine Sitzung, bei der die Lizenz (und möglicherweise andere mit der Sitzung zusammenhängende Daten) gespeichert wird.
                Ein Eintrag der Lizenz und der dazugehörigen Schlüssel bleibt auch dann erhalten, wenn die Lizenz zerstört wird, was eine Bestätigung dafür liefert, dass die Lizenz und die enthaltenen Schlüssel vom Client nicht mehr nutzbar sind.

        - `audio` {{optional_inline}}

          - : Die Audioschlüsselsystem-Track-Konfiguration, die mit der [`audio`-Konfiguration](#audio) oben verbunden ist.
            Wenn gesetzt, muss auch die [`audio`-Konfiguration](#audio) gesetzt sein.
            - `encryptionScheme`
              - : Das mit dem Medientyp verbundene Verschlüsselungsschema, wie `cenc`, `cbcs`, `cbcs-1-9`.
                Dieser Wert sollte von einer Anwendung festgelegt werden (es ist standardmäßig `null`, was bedeutet, dass jedes Verschlüsselungsschema verwendet werden kann).
            - `robustness`
              - : Das mit dem Medientyp verbundene Robustheitsniveau.
                Der leere String zeigt an, dass jede Fähigkeit, den Medientyp zu entschlüsseln und zu dekodieren, akzeptabel ist.

        - `video` {{optional_inline}}
          - : Die Videoschlüsselsystem-Track-Konfiguration, die mit der [`video`-Konfiguration](#video) oben verbunden ist.
            Wenn gesetzt, muss auch die [`video`-Konfiguration](#video) gesetzt sein.
            - `encryptionScheme`
              - : Das mit dem Medientyp verbundene Verschlüsselungsschema, wie `cenc`, `cbcs`, `cbcs-1-9`.
                Dieser Wert sollte von einer Anwendung festgelegt werden (es ist standardmäßig `null`, was bedeutet, dass jedes Verschlüsselungsschema verwendet werden kann).
            - `robustness`
              - : Das mit dem Medientyp verbundene Robustheitsniveau.
                Der leere String zeigt an, dass jede Fähigkeit, den Medientyp zu entschlüsseln und zu dekodieren, akzeptabel ist.

### Rückgabewert

Ein {{jsxref('Promise')}} wird erfüllt mit einem Objekt, das die folgenden Attribute enthält:

- `supported`
  - : `true`, wenn der Medieninhalt überhaupt dekodiert werden kann. Andernfalls `false`.
- `smooth`
  - : `true`, wenn die Wiedergabe der Medien mit der im Konfiguration spezifizierten Bildrate abgespielt werden kann, ohne dass Frames fallen gelassen werden müssen. Andernfalls `false`.
- `powerEfficient`
  - : `true`, wenn die Wiedergabe der Medien energieeffizient sein wird. Andernfalls `false`.
- `keySystemAccess`
  - : Ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess), der verwendet werden kann, um ein [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Objekt zu erstellen, um die verschlüsselte Wiedergabe einzurichten, oder `null`, wenn das Dekodieren mit der angegebenen Konfiguration nicht unterstützt wird.

Browser melden eine unterstützte Medienkonfiguration als `smooth` und `powerEfficient`, bis Statistiken zu diesem Gerät erfasst wurden.
Alle unterstützten Audio-Codecs melden `powerEfficient` als true.

### Ausnahmen

- {{jsxref("TypeError")}}

  - : Wird ausgelöst, wenn die an die `decodingInfo()`-Methode übergebene `configuration` ungültig ist, entweder weil der Typ nicht Video oder Audio ist, der `contentType` kein gültiger Codec-MIME-Typ ist, die Medien-Dekodierkonfiguration kein gültiger Wert für den `type` (file, media-source oder webrtc) ist, oder ein anderer Fehler in der an die Methode übergebenen Medienkonfiguration, einschließlich des Auslassens von Werten.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die Methode wird in einem Worker aufgerufen, wenn [`configuration.keySystemConfiguration`](#keysystemconfiguration) definiert ist.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wird außerhalb eines sicheren Kontextes aufgerufen und [`configuration.keySystemConfiguration`](#keysystemconfiguration) ist definiert.

## Anwendungsnotizen

### Vergleich mit Navigator.requestMediaKeySystemAccess()

`decodingInfo()` und die [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)-Methode der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) spiegeln grundlegend unterschiedliche Ansätze zur Auswahl einer Konfiguration zum Dekodieren verschlüsselter Medien wider.

Der Konfigurationsparameter für `Navigator.requestMediaKeySystemAccess()` nimmt ein Array möglicher Konfigurationen und ermöglicht es dem System, diejenige auszuwählen, die es als angemessen erachtet.

Im Gegensatz dazu nimmt `decodingInfo()` jeweils eine Konfiguration.
Die Erwartung ist, dass der Anrufer `decodingInfo()` mehrfach ausführt, beginnend mit den bevorzugtesten Konfigurationen und stoppt, sobald eine Konfiguration gefunden wird, die die Anforderungen der Anwendung an reibungsloses Abspielen, Energieeffizienz oder beides erfüllt.
Mit anderen Worten, die Auswahlentscheidung wird dem Anrufer überlassen.

## Beispiele

### Dekodierinformationen für unverschlüsselte Mediendateien erhalten

Dieses Beispiel zeigt, wie eine Medienkonfiguration für eine Audiodatei erstellt wird und dann in `MediaCapabilities.decodingInfo()` verwendet wird.

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

{{EmbedLiveSample("Dekodierinformationen für unverschlüsselte Mediendateien erhalten")}}

### Dekodierinformationen für verschlüsselte Medien erhalten

Dieses Beispiel zeigt, wie Sie `decodingInfo()` verwenden könnten, um eine Medienkonfiguration für verschlüsselten Inhalt auszuwählen.

Wie im vorherigen Beispiel definieren wir eine Medienkonfiguration, verwenden jedoch diesmal den `type` von `media-source` (anstatt `file`) und spezifizieren sowohl Audio- als auch Videoinhalte.
Wir spezifizieren auch eine einfache `keySystemConfiguration`.

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
Hier haben wir uns entschieden, [`async` und `await`](/de/docs/Learn_web_development/Extensions/Async_JS/Promises#async_and_await) zu verwenden, um auf das Ergebnis zu warten und es dann zu protokollieren.

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

{{EmbedLiveSample("Dekodierinformationen für verschlüsselte Medien erhalten")}}

### Iterieren durch Dekodierinformationen für verschlüsselte Medien

Das vorherige Beispiel zeigte, wie Sie `decodingInfo()` verwenden können, um Informationen für nur eine Konfiguration zu erhalten.
In der Realität würde die Methode normalerweise iterativ mit einer Anzahl von Konfigurationen aufgerufen, wobei die erste unterstützte Konfiguration ausgewählt wird, die den Kriterien der Anwendung für reibungsloses Abspielen oder Energieeffizienz entspricht.
Wie dies funktioniert, wird unten beschrieben.

Angenommen, wir haben bereits ein `Array` von Medienkonfigurationen namens `orderedMediaConfigs`, das wir von am meisten bis am wenigsten gewünscht sortiert haben, können wir [`Array.prototype.map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) verwenden, um `decodingInfo()` für jede Konfiguration aufzurufen und ein Array zu erhalten, das alle zurückgegebenen {{jsxref("Promise")}}-Objekte enthält.

```js
const capabilitiesPromises = orderedMediaConfigs.map((mediaConfig) =>
  navigator.mediaCapabilities.decodingInfo(mediaConfig),
);
```

Wir verwenden dann eine [`for await...of` Schleife](/de/docs/Web/JavaScript/Reference/Statements/for-await...of), um die Promises zu durchlaufen, während sie aufgelöst werden.
In der Schleife speichern wir die letzte unterstützte Konfiguration in `nonSmoothConfig` und verlassen die Schleife, sobald wir eine reibungslose Konfiguration finden, die wir als `bestConfig` festlegen.

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

Wenn wir während der Schleife eine reibungslose und unterstützte Konfiguration gefunden haben (`bestConfig`), nutzen wir sie, um [unsere Mediaschlüssel zu erstellen](/de/docs/Web/API/MediaKeySystemAccess/createMediaKeys) und die Medien zu dekodieren.
Wenn wir keine reibungslosen Konfigurationen gefunden haben, können wir stattdessen `nonSmoothConfig` verwenden, um die Medien zu dekodieren.
Dies wird die zuletzt gefundene unterstützte Konfiguration sein, die wegen der Art, wie wir die ursprünglichen `orderedMediaConfigs` sortiert haben, mit der niedrigsten Bildrate sein sollte.

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

Wenn es keine unterstützte Konfiguration gibt, haben wir keine Wahl als zu scheitern und den Benutzer zu benachrichtigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaCapabilities.encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo)
- [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType) für Datei
- [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) für media-source
- [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)
