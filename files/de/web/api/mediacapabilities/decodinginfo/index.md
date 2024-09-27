---
title: "MediaCapabilities: decodingInfo() Methode"
short-title: decodingInfo()
slug: Web/API/MediaCapabilities/decodingInfo
l10n:
  sourceCommit: fa2f1687b099bea447e9148201b51c1c853b53c7
---

{{APIRef("Media Capabilities API")}}

Die **`decodingInfo()`**-Methode der [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)-Schnittstelle gibt ein Promise zurück, das Informationen darüber liefert, wie gut der Benutzeragent Medien mit einer gegebenen Konfiguration dekodieren/anzeigen kann.

Das aufgelöste Objekt enthält drei Boolesche Eigenschaften `supported`, `smooth` und `powerefficient`, die angeben, ob das Dekodieren der beschriebenen Medien unterstützt wird und falls ja, ob das Dekodieren reibungslos und energieeffizient wäre.

Die Methode kann auch verwendet werden, um die Fähigkeiten des Benutzeragenten für das Dekodieren von Medien, die mit einem Schlüsselsystem kodiert sind, zu testen, jedoch nur, wenn sie im Hauptthread und in einem sicheren Kontext aufgerufen wird.
Wenn die Konfiguration, die in der Eigenschaft `configuration.keySystemConfiguration` übergeben wird, zum Dekodieren der Daten unterstützt wird, enthält das aufgelöste Promise auch ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess)-Objekt, das zum Erstellen eines [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Objekts zur Einrichtung der verschlüsselten Wiedergabe verwendet werden kann.

> [!NOTE]
> Das Aufrufen von `decodingInfo()` mit dieser Eigenschaft kann zu sichtbaren Auswirkungen für den Benutzer führen, wie zum Beispiel das Erfragen von Berechtigungen zum Zugriff auf ein oder mehrere Systemressourcen.
> Daher sollte diese Funktion nur aufgerufen werden, wenn die Anwendung bereit ist, ein `MediaKeys`-Objekt mit der bereitgestellten Konfiguration zu erstellen und zu verwenden.

## Syntax

```js-nolint
decodingInfo(configuration)
```

### Parameter

- `configuration`

  - : Ein Objekt mit einer Eigenschaft `type`, entweder einer `video`- oder `audio`-Eigenschaft, die eine Konfiguration des entsprechenden Typs enthält, und optional eine `keySystemConfiguration`, wenn Medien dekodiert werden, die mit einem Schlüsselsystem verschlüsselt sind: <!-- MediaDecodingConfiguration in the spec -->

    - `type`

      - : Der Typ der getesteten Medien. Dies nimmt einen der drei folgenden Werte an:

        - `file`
          - : Repräsentiert eine Konfiguration, die für eine einfache Dateiwiedergabe verwendet werden soll.
        - `media-source`
          - : Repräsentiert eine Konfiguration, die für die Wiedergabe einer [`MediaSource`](/de/docs/Web/API/MediaSource) verwendet werden soll.
        - `webrtc`
          - : Repräsentiert eine Konfiguration, die über [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) empfangen werden soll (nicht erlaubt, wenn `keySystemConfiguration` gesetzt ist).

    - `video`

      - : Konfigurationsobjekt für eine Video-Medienquelle.
        Dies hat die folgenden Eigenschaften: <!-- VideoConfiguration in the spec -->

        - `contentType`
          - : String, der einen gültigen Video-MIME-Typ und (optional) einen [`codecs`-Parameter](/de/docs/Web/Media/Formats/codecs_parameter) enthält.
        - `width`
          - : Die Breite des Videos.
        - `height`
          - : Die Höhe des Videos.
        - `bitrate`
          - : Die Anzahl der Bits, die verwendet werden, um eine Sekunde der Videodatei zu kodieren.
        - `framerate`
          - : Die Anzahl der Frames, die eine Sekunde der Videowiedergabe bilden.

    - `audio`

      - : Konfigurationsobjekt für eine Audio-Medienquelle.
        Dies hat die folgenden Eigenschaften: <!-- AudioConfiguration in the spec -->

        - `contentType`
          - : String, der einen gültigen Audio-MIME-Typ und (optional) einen [`codecs`-Parameter](/de/docs/Web/Media/Formats/codecs_parameter) enthält.
        - `channels`
          - : Die Anzahl der Kanäle, die von der Audiospur verwendet werden.
        - `bitrate`
          - : Die Anzahl der Bits, die verwendet werden, um eine Sekunde der Audiodatei zu kodieren.
        - `samplerate`
          - : Die Anzahl der Audiosamples, die eine Sekunde der Audiodatei bilden.

    - `keySystemConfiguration` {{optional_inline}}

      - : Objekt, das die Schlüsselsystemkonfiguration für verschlüsselte Medien angibt.

        > **Hinweis:** [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) nimmt in seinem `supportedConfigurations`-Argument Arrays einiger der gleichen Datentypen entgegen.

        Falls angegeben, muss der [`type`](#type) `media-source` oder `file` sein (nicht `webrtc`).
        Dies hat die folgenden Eigenschaften: <!-- MediaCapabilitiesKeySystemConfiguration in the spec -->

        - `keySystem`

          - : Ein String, der das Medien-Schlüsselsystem identifiziert.
            Zum Beispiel `org.w3.clearkey` oder `com.widevine.alpha`.

        - `initDataType` {{optional_inline}}

          - : Ein String, der den Datennamen des Initialisierungsdatentyps angibt, wie z.B. `"cenc"`, `"keyids"` und `"webm"`.
            Erlaubte Namen sind im [Encrypted Media Extensions Initialization Data Format Registry](https://www.w3.org/TR/eme-initdata-registry/) definiert.

        - `distinctiveIdentifier` {{optional_inline}}

          - : Ein String, der angibt, ob die Implementierung "unverwechselbare Kennungen" (oder unverwechselbare permanente Kennungen) für Operationen verwenden kann, die mit einem aus dieser Konfiguration erstellten Objekt verbunden sind.
            Die erlaubten Werte sind:

            - `required`
              - : Das zurückgegebene Objekt muss diese Funktion unterstützen.
            - `optional`
              - : Das zurückgegebene Objekt kann diese Funktion unterstützen.
                Dies ist der Standardwert.
            - `not-allowed`
              - : Das zurückgegebene Objekt darf diese Funktion nicht unterstützen oder verwenden.

        - `persistentState` {{optional_inline}}

          - : Ein String, der angibt, ob das zurückgegebene Objekt Sitzungsdaten oder einen anderen Zustand speichern können muss.
            Die erlaubten Werte sind:

            - `required`
              - : Das zurückgegebene Objekt muss diese Funktion unterstützen.
            - `optional`
              - : Das zurückgegebene Objekt kann diese Funktion unterstützen.
                Dies ist der Standardwert.
            - `not-allowed`
              - : Das zurückgegebene Objekt darf diese Funktion nicht unterstützen oder verwenden.
                Es können nur "temporäre" Sitzungen erstellt werden, wenn ein dauerhafter Zustand nicht erlaubt ist.

        - `sessionTypes` {{optional_inline}}

          - : Ein Array von Strings, das die Sitzungstypen angibt, die unterstützt werden müssen.
            Erlaubte Werte umfassen:

            - `temporary`
              - : Eine Sitzung, bei der die Lizenz, die Schlüssel und Daten, die sich auf die Sitzung beziehen, nicht gespeichert werden.
                Die Anwendung muss diese Speicherung nicht verwalten.
                Implementierungen müssen diese Option unterstützen, und dies ist die Standardeinstellung.
            - `persistent-license`
              - : Eine Sitzung, bei der die Lizenz (und möglicherweise andere Daten, die sich auf die Sitzung beziehen) gespeichert werden.
                Ein Datensatz der Lizenz und der zugehörigen Schlüssel bleibt erhalten, selbst wenn die Lizenz zerstört wird, und bietet eine Bestätigung, dass die Lizenz und die darin enthaltenen Schlüssel vom Client nicht mehr nutzbar sind.

        - `audio` {{optional_inline}}

          - : Die Audioschlüssel-Systemspurenkonfiguration, die mit der obigen [`audio`-Konfiguration](#audio) verknüpft ist.
            Wenn gesetzt, muss die [`audio`-Konfiguration](#audio) ebenfalls gesetzt sein.

            - `encryptionScheme`
              - : Das Verschlüsselungsschema, das mit dem Inhaltstyp verbunden ist, wie z.B. `cenc`, `cbcs`, `cbcs-1-9`.
                Dieser Wert sollte von einer Anwendung festgelegt werden (der Standardwert ist `null`, was anzeigt, dass jedes Verschlüsselungsschema verwendet werden kann).
            - `robustness`
              - : Das Robustheitsniveau, das mit dem Inhaltstyp verbunden ist.
                Der leere String zeigt an, dass jede Fähigkeit zur Entschlüsselung und Dekodierung des Inhaltstyps akzeptabel ist.

        - `video` {{optional_inline}}

          - : Die Videoschlüssel-Systemspurenkonfiguration, die mit der obigen [`video`-Konfiguration](#video) verknüpft ist.
            Wenn gesetzt, muss die [`video`-Konfiguration](#video) ebenfalls gesetzt sein.

            - `encryptionScheme`
              - : Das Verschlüsselungsschema, das mit dem Inhaltstyp verbunden ist, wie z.B. `cenc`, `cbcs`, `cbcs-1-9`.
                Dieser Wert sollte von einer Anwendung festgelegt werden (der Standardwert ist `null`, was anzeigt, dass jedes Verschlüsselungsschema verwendet werden kann).
            - `robustness`
              - : Das Robustheitsniveau, das mit dem Inhaltstyp verbunden ist.
                Der leere String zeigt an, dass jede Fähigkeit zur Entschlüsselung und Dekodierung des Inhaltstyps akzeptabel ist.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem Objekt erfüllt wird, das die folgenden Attribute enthält:

- `supported`
  - : `true`, wenn der Medieninhalt überhaupt dekodiert werden kann. Andernfalls ist es `false`.
- `smooth`
  - : `true`, wenn die Wiedergabe der Medien mit der von der Konfiguration angegebenen Bildrate abgespielt werden kann, ohne dass Frames fallen gelassen werden müssen. Andernfalls ist es `false`.
- `powerEfficient`
  - : `true`, wenn die Wiedergabe der Medien energieeffizient ist. Andernfalls ist es `false`.
- `keySystemAccess`
  - : Ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess), das verwendet werden kann, um ein [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Objekt zur Einrichtung einer verschlüsselten Wiedergabe zu erstellen, oder `null`, wenn das Dekodieren mit der angegebenen Konfiguration nicht unterstützt wird.

Browser melden eine unterstützte Medienkonfiguration als `smooth` und `powerEfficient`, bis Statistiken über dieses Gerät aufgezeichnet wurden.
Alle unterstützten Audio-Codecs melden `powerEfficient` als wahr.

### Ausnahmen

- {{jsxref("TypeError")}}

  - : Wird ausgelöst, wenn die an die Methode `decodingInfo()` übergebene `configuration` ungültig ist, entweder weil der Typ nicht Video oder Audio ist, der `contentType` kein gültiger Codec-MIME-Typ ist, die Medien-Dekodierungs-Konfiguration kein gültiger Wert für den `type` (file, media-source oder webrtc) ist, oder jeder andere Fehler in der Medienkonfiguration, die an die Methode übergeben wurde, einschließlich des Auslassens von Werten.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die Methode wird in einem Worker aufgerufen, wenn [`configuration.keySystemConfiguration`](#keysystemconfiguration) definiert ist.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wird außerhalb eines sicheren Kontexts aufgerufen und [`configuration.keySystemConfiguration`](#keysystemconfiguration) ist definiert.

## Verwendungshinweise

### Vergleich mit Navigator.requestMediaKeySystemAccess()

`decodingInfo()` und die Methode [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) spiegeln grundlegend unterschiedliche Ansätze zur Auswahl einer Konfiguration für das Dekodieren verschlüsselter Medien wider.

Der Konfigurationsparameter für `Navigator.requestMediaKeySystemAccess()` nimmt ein Array möglicher Konfigurationen und lässt das System diejenige auswählen, die es für angemessen hält.

Im Gegensatz dazu nimmt `decodingInfo()` jeweils eine Konfiguration an.
Die Erwartung ist, dass der Aufrufer `decodingInfo()` mehrfach ausführt, beginnend mit den bevorzugten Konfigurationen und so lange weitermacht, bis er eine Konfiguration findet, die die Anforderungen der Anwendung für reibungslose, energieeffiziente oder beide Kriterien erfüllt.
Mit anderen Worten, die Auswahlentscheidung wird dem Aufrufer überlassen.

## Beispiele

### Abrufen von Dekodierungsinformationen für unverschlüsselte Mediendateien

Dieses Beispiel zeigt, wie Sie eine Medienkonfiguration für eine Audiodatei erstellen und diese dann in `MediaCapabilities.decodingInfo()` verwenden.

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

### Abrufen von Dekodierungsinformationen für verschlüsselte Medien

Dieses Beispiel zeigt, wie Sie `decodingInfo()` verwenden könnten, um eine Medienkonfiguration für verschlüsselten Inhalt auszuwählen.

Wie im vorherigen Beispiel definieren wir eine Medienkonfiguration, verwenden jedoch diesmal den `type` von `media-source` (anstatt `file`) und geben sowohl Audio- als auch Videoinhalt an.
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

Im vorherigen Beispiel haben wir [promise chaining](/de/docs/Web/JavaScript/Guide/Using_promises#chaining) verwendet, um auf das Ergebnis zu warten.
Hier haben wir uns entschieden, [`async` und `await`](/de/docs/Learn/JavaScript/Asynchronous/Promises#async_and_await) zu verwenden, um auf das Ergebnis zu warten und es dann zu protokollieren.

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

Die Protokollausgabe wird unten angezeigt.

{{EmbedLiveSample("Getting decoding information for encrypted media")}}

### Iteration durch Dekodierungsinformationen für verschlüsselte Medien

Das vorherige Beispiel zeigte, wie Sie `decodingInfo()` verwenden können, um Informationen für nur eine Konfiguration zu erhalten.
In der Praxis wird die Methode normalerweise iterativ mit einer Anzahl von Konfigurationen aufgerufen, wobei die erste unterstützte Konfiguration ausgewählt wird, die die Anforderungen der Anwendung an reibungslose Wiedergabe oder Energieeffizienz erfüllt.
Die Funktionsweise wird unten beschrieben.

Angenommen, wir haben bereits ein `Array` von Medienkonfigurationen namens `orderedMediaConfigs`, das wir von den am meisten bis am wenigsten gewünschten geordnet haben, können wir die [`Array.prototype.map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) verwenden, um `decodingInfo()` für jede Konfiguration aufzurufen und ein Array, das alle zurückgegebenen {{jsxref("Promise")}}-Objekte enthält, zu erhalten.

```js
const capabilitiesPromises = orderedMediaConfigs.map((mediaConfig) =>
  navigator.mediaCapabilities.decodingInfo(mediaConfig),
);
```

Wir verwenden dann eine [`for await...of` Schleife](/de/docs/Web/JavaScript/Reference/Statements/for-await...of), um die Promises zu iterieren, während sie aufgelöst werden.
In der Schleife speichern wir die letzte unterstützte Konfiguration in `nonSmoothConfig` und verlassen die Schleife, sobald wir eine smoothe Konfiguration finden, und setzen diese als unsere `bestConfig`.

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

Wenn wir in der Schleife eine glatte und unterstützte Konfiguration gefunden haben (`bestConfig`), verwenden wir sie, um [unsere Medien-Schlüssel zu erstellen](/de/docs/Web/API/MediaKeySystemAccess/createMediaKeys) und die Medien zu dekodieren.
Wenn wir keine glatten Konfigurationen entdecken, verwenden wir stattdessen `nonSmoothConfig`, um die Medien zu dekodieren.
Dies wird die zuletzt gefundene unterstützte Konfiguration sein, die, aufgrund der Art und Weise, wie wir die ursprünglichen `orderedMediaConfigs` geordnet haben, diejenige mit der niedrigsten Bildrate sein sollte.

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

Wenn keine unterstützte Konfiguration vorhanden ist, bleibt uns keine andere Wahl, als zu scheitern und den Benutzer zu benachrichtigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaCapabilities.encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo)
- [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType) für Datei
- [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) für media-source
- [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)
