---
title: "MediaCapabilities: decodingInfo()-Methode"
short-title: decodingInfo()
slug: Web/API/MediaCapabilities/decodingInfo
l10n:
  sourceCommit: 324c613947adaa5e19ad0f409c5f4c535ee8cf6b
---

{{APIRef("Media Capabilities API")}}{{AvailableInWorkers}}

Die **`decodingInfo()`**-Methode des [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)-Interfaces gibt ein Promise zurück, das mit Informationen darüber erfüllt wird, wie gut der Benutzeragent Medien mit einer gegebenen Konfiguration decodieren/anzeigen kann.

Das aufgelöste Objekt enthält drei boolesche Eigenschaften `supported`, `smooth` und `powerefficient`, die anzeigen, ob das Decodieren der beschriebenen Medien unterstützt wird und, wenn ja, ob das Decodieren flüssig und energieeffizient wäre.

Die Methode kann auch verwendet werden, um die Fähigkeiten des Benutzeragents zu testen, Medien zu dekodieren, die mit einem Schlüsselsystem kodiert sind, jedoch nur, wenn sie im Hauptthread und in einem sicheren Kontext aufgerufen wird. Wenn die Konfiguration, die in der Eigenschaft `configuration.keySystemConfiguration` übergeben wird, für das Decodieren der Daten unterstützt wird, enthält das aufgelöste Promise auch ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess)-Objekt, das verwendet werden kann, um ein [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Objekt zu erstellen, um die verschlüsselte Wiedergabe einzurichten.

> [!NOTE]
> Der Aufruf von `decodingInfo()` mit dieser Eigenschaft kann benutzersichtbare Effekte zur Folge haben, wie z.B. die Nachfrage nach der Erlaubnis, auf ein oder mehrere Systemressourcen zuzugreifen.
> Daher sollte diese Funktion nur aufgerufen werden, wenn die Anwendung bereit ist, ein `MediaKeys`-Objekt mit der bereitgestellten Konfiguration zu erstellen und zu verwenden.

## Syntax

```js-nolint
decodingInfo(configuration)
```

### Parameter

- `configuration`
  - : Ein Objekt mit einer Eigenschaft `type`, entweder einer `video`- oder `audio`-Eigenschaft, die eine Konfiguration des entsprechenden Typs enthält, und optional einer `keySystemConfiguration`, wenn Medien dekodiert werden sollen, die mit einem Schlüsselsystem verschlüsselt sind: <!-- MediaDecodingConfiguration in der Spezifikation -->
    - `type`
      - : Der Typ der zu testenden Medien. Dies nimmt einen der drei Werte an:
        - `file`
          - : Repräsentiert eine Konfiguration, die für die Wiedergabe einer einfachen Datei verwendet werden soll.
        - `media-source`
          - : Repräsentiert eine Konfiguration, die für die Wiedergabe einer [`MediaSource`](/de/docs/Web/API/MediaSource) verwendet werden soll.
        - `webrtc`
          - : Repräsentiert eine Konfiguration, die unter Verwendung von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) empfangen werden soll (nicht erlaubt, wenn `keySystemConfiguration` festgelegt ist).

    - `video`
      - : Konfigurationsobjekt für eine Videomedienquelle.
        Dies hat folgende Eigenschaften: <!-- VideoConfiguration in der Spezifikation -->
        - `contentType`
          - : String, der einen gültigen Video-MIME-Typ enthält, und (optional) einen [`codecs` Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter).
        - `width`
          - : Die Breite des Videos.
        - `height`
          - : Die Höhe des Videos.
        - `bitrate`
          - : Die Anzahl der Bits, die verwendet werden, um eine Sekunde der Videodatei zu kodieren.
        - `framerate`
          - : Die Anzahl der Frames, die eine Sekunde der Videowiedergabe bilden.

    - `audio`
      - : Konfigurationsobjekt für eine Audiomedienquelle.
        Dies hat folgende Eigenschaften: <!-- AudioConfiguration in der Spezifikation -->
        - `contentType`
          - : String, der einen gültigen Audio-MIME-Typ enthält, und (optional) einen [`codecs` Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter).
        - `channels`
          - : Die Anzahl der Kanäle, die von der Audiospur verwendet werden.
        - `bitrate`
          - : Die Anzahl der Bits, die verwendet werden, um eine Sekunde der Audiodatei zu kodieren.
        - `samplerate`
          - : Die Anzahl der Audiodatenproben, die eine Sekunde der Audiodatei bilden.

    - `keySystemConfiguration` {{optional_inline}}
      - : Objekt, das die Konfiguration des Schlüsselsystems für verschlüsselte Medien angibt.

        > [!NOTE]
        > [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) nimmt Arrays einiger der selben Datentypen in seinem `supportedConfigurations`-Argument.

        Falls angegeben, muss der [`type`](#type) `media-source` oder `file` sein (nicht `webrtc`).
        Dies hat folgende Eigenschaften: <!-- MediaCapabilitiesKeySystemConfiguration in der Spezifikation -->
        - `keySystem`
          - : Ein String, der das Medienschlüsselsystem identifiziert.
            Zum Beispiel `org.w3.clearkey` oder `com.widevine.alpha`.

        - `initDataType` {{optional_inline}}
          - : Ein String, der den Namen des Datentyps des Initialisierungsdatenformats angibt, wie `"cenc"`, `"keyids"` und `"webm"`.
            Erlaubte Namen werden im [Encrypted Media Extensions Initialization Data Format Registry](https://w3c.github.io/encrypted-media/format-registry/initdata/) definiert.

        - `distinctiveIdentifier` {{optional_inline}}
          - : Ein String, der angibt, ob die Implementierung "distinctive identifiers" (oder distinctive permanente Identifikatoren) für beliebige Operationen verwenden darf, die mit einem Objekt aus dieser Konfiguration verbunden sind.
            Die erlaubten Werte sind:
            - `required`
              - : Das zurückgegebene Objekt muss diese Funktion unterstützen.
            - `optional`
              - : Das zurückgegebene Objekt kann diese Funktion unterstützen.
                Dies ist der Standardwert.
            - `not-allowed`
              - : Das zurückgegebene Objekt darf diese Funktion nicht unterstützen oder verwenden.

        - `persistentState` {{optional_inline}}
          - : Ein String, der angibt, ob das zurückgegebene Objekt in der Lage sein muss, Sitzungsdaten oder andere Arten von Zuständen zu speichern.
            Die erlaubten Werte sind:
            - `required`
              - : Das zurückgegebene Objekt muss diese Funktion unterstützen.
            - `optional`
              - : Das zurückgegebene Objekt kann diese Funktion unterstützen.
                Dies ist der Standardwert.
            - `not-allowed`
              - : Das zurückgegebene Objekt darf diese Funktion nicht unterstützen oder verwenden.
                Nur "temporäre" Sitzungen dürfen erstellt werden, wenn der persistente Zustand nicht erlaubt ist.

        - `sessionTypes` {{optional_inline}}
          - : Ein Array von Strings, das die Sitzungsarten angibt, die unterstützt werden müssen.
            Erlaubte Werte sind u.a.:
            - `temporary`
              - : Eine Sitzung, für die die Lizenz, Schlüssel und Aufzeichnungen oder Daten, die mit der Sitzung in Verbindung stehen, nicht gespeichert werden.
                Die Anwendung muss eine solche Speicherung nicht verwalten.
                Implementierungen müssen diese Option unterstützen, und es ist der Standardwert.
            - `persistent-license`
              - : Eine Sitzung, für die die Lizenz (und möglicherweise andere datenbezogene Sitzungsinformationen) gespeichert werden.
                Eine Aufzeichnung der Lizenz und der zugehörigen Schlüssel bleibt sogar dann bestehen, wenn die Lizenz zerstört wird, wodurch eine Bestätigung erbracht wird, dass die Lizenz und die darin enthaltenen Schlüssel für den Client nicht mehr nutzbar sind.

        - `audio` {{optional_inline}}
          - : Die Audiotrekkonfiguration des Schlüsselsystems, die mit der oben genannten [`audio` Konfiguration](#audio) verbunden ist.
            Wenn gesetzt, muss auch die [`audio` Konfiguration](#audio) gesetzt sein.
            - `encryptionScheme`
              - : Das Verschlüsselungsschema, das mit dem Inhaltstyp assoziiert ist, wie `cenc`, `cbcs`, `cbcs-1-9`.
                Dieser Wert sollte von einer Anwendung festgelegt werden (er ist standardmäßig `null`, was bedeutet, dass jedes Verschlüsselungsschema verwendet werden kann).
            - `robustness`
              - : Die Robustheitsstufe, die mit dem Inhaltstyp verbunden ist.
                Der leere String zeigt an, dass jegliche Fähigkeit zur Entschlüsselung und Dekodierung des Inhaltstyps akzeptabel ist.

        - `video` {{optional_inline}}
          - : Die Videotrekkonfiguration des Schlüsselsystems, die mit der oben genannten [`video` Konfiguration](#video) verbunden ist.
            Wenn gesetzt, muss auch die [`video` Konfiguration](#video) gesetzt sein.
            - `encryptionScheme`
              - : Das Verschlüsselungsschema, das mit dem Inhaltstyp verbunden ist, wie `cenc`, `cbcs`, `cbcs-1-9`.
                Dieser Wert sollte von einer Anwendung festgelegt werden (er ist standardmäßig `null`, was bedeutet, dass jedes Verschlüsselungsschema verwendet werden kann).
            - `robustness`
              - : Die Robustheitsstufe, die mit dem Inhaltstyp verbunden ist.
                Der leere String zeigt an, dass jegliche Fähigkeit zur Entschlüsselung und Dekodierung des Inhaltstyps akzeptabel ist.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem Objekt erfüllt wird, das die folgenden Attribute enthält:

- `supported`
  - : `true`, wenn der Mediendateinhalt überhaupt dekodiert werden kann. Andernfalls ist es `false`.
- `smooth`
  - : `true`, wenn die Wiedergabe der Medien bei einer Konfiguration ohne das Notwendigkeit zum Frames-Auslassen erfolgen kann. Andernfalls ist es `false`.
- `powerEfficient`
  - : `true`, wenn die Wiedergabe der Medien stromsparend erfolgt. Andernfalls ist es `false`.
- `keySystemAccess`
  - : Eine [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess), mit der ein [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Objekt erstellt werden kann, um die verschlüsselte Wiedergabe einzurichten, oder `null`, wenn die Dekodierung mit der bereitgestellten Konfiguration nicht unterstützt wird.

Browser melden eine unterstützte Medienkonfiguration als `smooth` und `powerEfficient`, bis Statistiken auf diesem Gerät erfasst wurden.
Alle unterstützten Audiocodecs melden `powerEfficient` als wahr.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die `configuration`, die an die `decodingInfo()`-Methode übergeben wird, ungültig ist, entweder weil der Typ nicht Video oder Audio ist, der `contentType` kein gültiger MPEG-MIME-Typ ist, die Mediendekodierungskonfiguration keinen gültigen Wert für den `type` (file, media-source oder webrtc) hat oder irgendein anderer Fehler in der an die Methode übergebenen Medienkonfiguration auftritt, einschließlich des Weglassens von Werten.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wird in einem Worker aufgerufen, wenn [`configuration.keySystemConfiguration`](#keysystemconfiguration) definiert ist.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wird außerhalb eines sicheren Kontexts aufgerufen und [`configuration.keySystemConfiguration`](#keysystemconfiguration) ist definiert.

## Verwendungshinweise

### Vergleich mit Navigator.requestMediaKeySystemAccess()

`decodingInfo()` und die [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)-Methode der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) spiegeln grundlegend unterschiedliche Ansätze zur Auswahl einer Konfiguration zur Dekodierung verschlüsselter Medien wider.

Der Konfigurationsparameter für `Navigator.requestMediaKeySystemAccess()` nimmt ein Array von möglichen Konfigurationen und erlaubt es dem System, diejenige auszuwählen, die es für angemessen hält.

Im Gegensatz dazu nimmt `decodingInfo()` eine Konfiguration nach der anderen. Es wird erwartet, dass der Aufrufer `decodingInfo()` mehrmals ausführt, beginnend mit den bevorzugtesten Konfigurationen und aufhört, sobald er eine Konfiguration findet, die die Anforderungen der Anwendung für flüssige oder stromsparende Wiedergaben erfüllt.
Mit anderen Worten wird die Auswahlentscheidung dem Anrufer überlassen.

## Beispiele

### Abrufen von Dekodierungsinformationen für unverschlüsselte Mediendateien

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

### Abrufen von Dekodierungsinformationen für verschlüsselte Medien

Dieses Beispiel zeigt, wie `decodingInfo()` verwendet werden könnte, um eine Medienkonfiguration für verschlüsselten Inhalt auszuwählen.

Wie im vorherigen Beispiel definieren wir eine Medienkonfiguration, aber dieses Mal verwenden wir den `type` von `media-source` (anstatt `file`) und spezifizieren sowohl Audio- als auch Videoinhalt.
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

Im vorherigen Beispiel verwendeten wir [promise chaining](/de/docs/Web/JavaScript/Guide/Using_promises#chaining), um auf das Ergebnis zu warten.
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

Der Protokollausgabe ist unten zu sehen.

{{EmbedLiveSample("Getting decoding information for encrypted media")}}

### Iteration durch Dekodierungsinformationen für verschlüsselte Medien

Das vorherige Beispiel zeigte, wie Sie `decodingInfo()` verwenden können, um Informationen für nur eine Konfiguration zu erhalten.
In der Realität würde die Methode normalerweise iterativ mit einer Anzahl von Konfigurationen aufgerufen werden, wobei die erste unterstützte Konfiguration ausgewählt wird, die die Kriterien der Anwendung für flüssige Wiedergabe oder Energieeffizienz erfüllt.
Wie dies funktioniert, wird unten beschrieben.

Angenommen, wir haben bereits ein `Array` von Medienkonfigurationen mit dem Namen `orderedMediaConfigs`, das wir von am meisten bis am wenigsten gewünscht geordnet haben, können wir die [`Array.prototype.map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) verwenden, um `decodingInfo()` für jede Konfiguration aufzurufen und ein Array mit allen zurückgegebenen {{jsxref("Promise")}}-Objekten zu erhalten.

```js
const capabilitiesPromises = orderedMediaConfigs.map((mediaConfig) =>
  navigator.mediaCapabilities.decodingInfo(mediaConfig),
);
```

Wir verwenden dann eine [`for await...of` Schleife](/de/docs/Web/JavaScript/Reference/Statements/for-await...of), um die Promises zu durchlaufen, während sie aufgelöst werden.
In der Schleife speichern wir die letzte unterstützte Konfiguration in `nonSmoothConfig` und verlassen die Schleife, sobald wir eine flüssige Konfiguration gefunden haben, und setzen diese als unsere `bestConfig`.

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

Wenn wir während der Schleife eine flüssige und unterstützte Konfiguration gefunden haben (`bestConfig`), verwenden wir diese, um [unsere Medien-Keys zu erstellen](/de/docs/Web/API/MediaKeySystemAccess/createMediaKeys) und die Medien zu dekodieren.
Wenn wir keine flüssigen Konfigurationen entdeckt haben, könnten wir stattdessen `nonSmoothConfig` verwenden, um die Medien zu dekodieren.
Dies wird die zuletzt gefundene unterstützte Konfiguration sein, die aufgrund der Art und Weise, wie wir die ursprünglichen `orderedMediaConfigs` geordnet haben, diejenige mit der niedrigsten Bildrate sein sollte.

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

Wenn es keine unterstützten Konfigurationen gibt, bleibt uns keine andere Wahl, als zu scheitern und den Benutzer zu benachrichtigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaCapabilities.encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo)
- [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType) für Dateien
- [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) für Medienquellen
- [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)
