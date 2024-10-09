---
title: "MediaCapabilities: decodingInfo() Methode"
short-title: decodingInfo()
slug: Web/API/MediaCapabilities/decodingInfo
l10n:
  sourceCommit: 49f6e40b12be0d6d897d3dab09caafbc093f7677
---

{{APIRef("Media Capabilities API")}}{{AvailableInWorkers}}

Die **`decodingInfo()`**-Methode des [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities)-Interfaces gibt ein Promise zurück, das mit Informationen darüber erfüllt wird, wie gut der Benutzeragent Medien mit einer gegebenen Konfiguration dekodieren/anzeigen kann.

Das aufgelöste Objekt enthält drei boolesche Eigenschaften: `supported`, `smooth` und `powerefficient`, welche angeben, ob das beschriebene Medium unterstützt wird und, falls ja, ob die Dekodierung flüssig und energieeffizient wäre.

Die Methode kann auch verwendet werden, um die Fähigkeiten des Benutzeragents zum Dekodieren von mit einem Schlüssel-System codierten Medien zu testen, jedoch nur, wenn sie im Haupt-Thread und in einem sicheren Kontext aufgerufen wird.
Wenn die Konfiguration, die im `configuration.keySystemConfiguration`-Eigenschaft übergeben wird, zum Dekodieren der Daten unterstützt wird, enthält das aufgelöste Promise auch ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess)-Objekt, das zur Erstellung eines [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Objekts verwendet werden kann, um verschlüsselte Wiedergabe einzurichten.

> [!NOTE]
> Der Aufruf von `decodingInfo()` mit dieser Eigenschaft kann zu benutzerseitig sichtbaren Effekten führen, wie z.B. der Anfrage für die Berechtigung zum Zugriff auf ein oder mehrere Systemressourcen.
> Daher sollte diese Funktion nur aufgerufen werden, wenn die Anwendung bereit ist, ein `MediaKeys`-Objekt mit der bereitgestellten Konfiguration zu erstellen und zu verwenden.

## Syntax

```js-nolint
decodingInfo(configuration)
```

### Parameter

- `configuration`

  - : Ein Objekt mit einer Eigenschaft `type`, das _entweder_ eine `video`- oder `audio`-Eigenschaft mit einer entsprechenden Konfiguration enthält, und optional eine `keySystemConfiguration`, wenn Medien mit einem Schlüssel-System dekodiert werden: <!-- MediaDecodingConfiguration in der Spezifikation -->

    - `type`

      - : Der Typ des zu testenden Mediums. Dies nimmt einen von drei Werten an:

        - `file`
          - : Repräsentiert eine Konfiguration, die für die Wiedergabe von einfachen Dateien gedacht ist.
        - `media-source`
          - : Repräsentiert eine Konfiguration, die für die Wiedergabe einer [`MediaSource`](/de/docs/Web/API/MediaSource) gedacht ist.
        - `webrtc`
          - : Repräsentiert eine Konfiguration, die unter Verwendung von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) empfangen wird (nicht erlaubt, wenn `keySystemConfiguration` gesetzt ist).

    - `video`

      - : Konfigurationsobjekt für eine Video-Medienquelle.
        Dies hat die folgenden Eigenschaften: <!-- VideoConfiguration in der Spezifikation -->

        - `contentType`
          - : Zeichenkette, die einen gültigen Video-MIME-Typ enthält und (optional) einen [`codecs`-Parameter](/de/docs/Web/Media/Formats/codecs_parameter).
        - `width`
          - : Die Breite des Videos.
        - `height`
          - : Die Höhe des Videos.
        - `bitrate`
          - : Die Anzahl der Bits, die verwendet werden, um eine Sekunde der Videodatei zu codieren.
        - `framerate`
          - : Die Anzahl der Frames, die eine Sekunde der Videowiedergabe ausmachen.

    - `audio`

      - : Konfigurationsobjekt für eine Audio-Medienquelle.
        Dies hat die folgenden Eigenschaften: <!-- AudioConfiguration in der Spezifikation -->

        - `contentType`
          - : Zeichenkette, die einen gültigen Audio-MIME-Typ enthält und (optional) einen [`codecs`-Parameter](/de/docs/Web/Media/Formats/codecs_parameter).
        - `channels`
          - : Die Anzahl der Kanäle, die vom Audiotrack verwendet werden.
        - `bitrate`
          - : Die Anzahl der Bits, die verwendet werden, um eine Sekunde der Audiodatei zu codieren.
        - `samplerate`
          - : Die Anzahl der Audiodaten, die eine Sekunde der Audiodatei ausmachen.

    - `keySystemConfiguration` {{optional_inline}}

      - : Objekt, das die Schlüssel-Systemkonfiguration für verschlüsselte Medien spezifiziert.

        > **Hinweis:** [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) verwendet Arrays einiger derselben Datentypen in seinem `supportedConfigurations`-Argument.

        Wenn angegeben, muss der [`type`](#type) `media-source` oder `file` sein (nicht `webrtc`).
        Dies hat die folgenden Eigenschaften: <!-- MediaCapabilitiesKeySystemConfiguration in der Spezifikation -->

        - `keySystem`

          - : Eine Zeichenkette, die das Medienschlüssel-System identifiziert.
            Zum Beispiel `org.w3.clearkey` oder `com.widevine.alpha`.

        - `initDataType` {{optional_inline}}

          - : Eine Zeichenkette, die den Datentypnamen des Initialisierungsdatenformats angibt, wie z. B. `"cenc"`, `"keyids"` und `"webm"`.
            Erlaubte Namen sind im [Encrypted Media Extensions Initialization Data Format Registry](https://www.w3.org/TR/eme-initdata-registry/) definiert.

        - `distinctiveIdentifier` {{optional_inline}}

          - : Eine Zeichenkette, die angibt, ob die Implementierung „unterscheidbare Kennungen“ (oder unterscheidbare permanente Kennungen) für alle Operationen, die mit einem in dieser Konfiguration erstellten Objekt verbunden sind, verwenden darf.
            Die erlaubten Werte sind:

            - `required`
              - : Das zurückgegebene Objekt muss diese Funktion unterstützen.
            - `optional`
              - : Das zurückgegebene Objekt kann diese Funktion unterstützen.
                Dies ist der Standardwert.
            - `not-allowed`
              - : Das zurückgegebene Objekt darf diese Funktion nicht unterstützen oder verwenden.

        - `persistentState` {{optional_inline}}

          - : Eine Zeichenkette, die angibt, ob das zurückgegebene Objekt Sitzungsdaten oder irgendeine andere Art von Status speichern können muss.
            Die erlaubten Werte sind:

            - `required`
              - : Das zurückgegebene Objekt muss diese Funktion unterstützen.
            - `optional`
              - : Das zurückgegebene Objekt kann diese Funktion unterstützen.
                Dies ist der Standardwert.
            - `not-allowed`
              - : Das zurückgegebene Objekt darf diese Funktion nicht unterstützen oder verwenden.
                Es dürfen nur „temporäre“ Sitzungen erstellt werden, wenn permanenter Status nicht erlaubt ist.

        - `sessionTypes` {{optional_inline}}

          - : Ein Array von Strings, das die Sitzungstypen angibt, die unterstützt werden müssen.
            Erlaubte Werte sind:

            - `temporary`
              - : Eine Sitzung, bei der die Lizenz, der Schlüssel/die Schlüssel und Aufzeichnungen oder Daten in Bezug auf die Sitzung nicht gespeichert werden.
                Die Anwendung muss ein solches Speichern nicht verwalten.
                Implementierungen müssen diese Option unterstützen, und sie ist der Standardwert.
            - `persistent-license`
              - : Eine Sitzung, bei der die Lizenz (und möglicherweise andere mit der Sitzung verbundene Daten) gespeichert werden.
                Ein Nachweis der Lizenz und der zugehörigen Schlüssel bleibt erhalten, auch wenn die Lizenz zerstört wird, wobei eine Bestätigung erfolgt, dass die Lizenz und die Schlüssel, die sie enthält, vom Client nicht mehr verwendet werden können.

        - `audio` {{optional_inline}}

          - : Die Konfiguration des Audiotracks des Schlüsselsystems, die mit der obigen [`audio` Konfiguration](#audio) verbunden ist.
            Wenn festgelegt, muss die [`audio` Konfiguration](#audio) ebenfalls festgelegt sein.

            - `encryptionScheme`
              - : Das Verschlüsselungsschema, das mit dem Inhaltstyp verbunden ist, wie `cenc`, `cbcs`, `cbcs-1-9`.
                Dieser Wert sollte von einer Anwendung festgelegt werden (er hat standardmäßig den Wert `null`, was darauf hinweist, dass jedes Verschlüsselungsschema verwendet werden kann).
            - `robustness`
              - : Das Robustheitsniveau, das mit dem Inhaltstyp verbunden ist.
                Der leere String zeigt an, dass jede Fähigkeit, den Inhaltstyp zu entschlüsseln und zu dekodieren, akzeptabel ist.

        - `video` {{optional_inline}}

          - : Die Konfiguration des Videotracks des Schlüsselsystems, die mit der obigen [`video` Konfiguration](#video) verbunden ist.
            Wenn festgelegt, muss die [`video` Konfiguration](#video) ebenfalls festgelegt sein.

            - `encryptionScheme`
              - : Das Verschlüsselungsschema, das mit dem Inhaltstyp verbunden ist, wie `cenc`, `cbcs`, `cbcs-1-9`.
                Dieser Wert sollte von einer Anwendung festgelegt werden (er hat standardmäßig den Wert `null`, was darauf hinweist, dass jedes Verschlüsselungsschema verwendet werden kann).
            - `robustness`
              - : Das Robustheitsniveau, das mit dem Inhaltstyp verbunden ist.
                Der leere String zeigt an, dass jede Fähigkeit, den Inhaltstyp zu entschlüsseln und zu dekodieren, akzeptabel ist.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem Objekt erfüllt wird, das folgende Attribute enthält:

- `supported`
  - : `true`, wenn der Medieninhalt dekodiert werden kann. Andernfalls ist es `false`.
- `smooth`
  - : `true`, wenn die Wiedergabe des Mediums mit der in der Konfiguration angegebenen Bildrate abgespielt werden kann, ohne dass Frames ausgelassen werden müssen. Andernfalls ist es `false`.
- `powerEfficient`
  - : `true`, wenn die Wiedergabe des Mediums energieeffizient ist. Andernfalls ist es `false`.
- `keySystemAccess`
  - : Ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess), das verwendet werden kann, um ein [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Objekt zur Einrichtung verschlüsselter Wiedergabe zu erstellen, oder `null`, wenn die Dekodierung mit der angegebenen Konfiguration nicht unterstützt wird.

Browser melden eine unterstützte Medienkonfiguration als `smooth` und `powerEfficient`, bis Statistiken zu diesem Gerät aufgezeichnet wurden.
Alle unterstützten Audiocodecs melden `powerEfficient` als true.

### Ausnahmen

- {{jsxref("TypeError")}}

  - : Wird ausgelöst, wenn die an die `decodingInfo()`-Methode übergebene `configuration` ungültig ist, entweder weil der Typ nicht Video oder Audio ist, der `contentType` kein gültiger Codec-MIME-Typ ist, die Medien-Dekodierungskonfiguration kein gültiger Wert für den `type` (file, media-source oder webrtc) ist, oder ein anderer Fehler in der übergebenen Medienkonfiguration besteht, einschließlich des Auslassens von Werten.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die Methode wird in einem Worker aufgerufen, wenn [`configuration.keySystemConfiguration`](#keysystemconfiguration) definiert ist.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wird außerhalb eines sicheren Kontexts aufgerufen und [`configuration.keySystemConfiguration`](#keysystemconfiguration) ist definiert.

## Nutzungshinweise

### Vergleich mit Navigator.requestMediaKeySystemAccess()

`decodingInfo()` und die [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)-Methode der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) spiegeln grundlegend unterschiedliche Ansätze zur Auswahl einer Konfiguration für die Dekodierung verschlüsselter Medien wider.

Der Konfigurationsparameter für `Navigator.requestMediaKeySystemAccess()` nimmt ein Array möglicher Konfigurationen entgegen und ermöglicht es dem System, diejenige auszuwählen, die es für angemessen hält.

Im Gegensatz dazu nimmt `decodingInfo()` jeweils eine Konfiguration entgegen.
Die Erwartung ist, dass der Anrufer `decodingInfo()` mehrmals ausführt, beginnend mit den am meisten bevorzugten Konfigurationen und beendet, sobald eine Konfiguration gefunden wird, die den Anforderungen der Anwendung an flüssige und energieeffiziente Wiedergabe entspricht.
Mit anderen Worten, die Auswahlentscheidung liegt beim Anrufer.

## Beispiele

### Abrufen von Dekodierungsinformationen für unverschlüsselte Mediendateien

Dieses Beispiel zeigt, wie man eine Medienkonfiguration für eine Audiodatei erstellt und diese dann in `MediaCapabilities.decodingInfo()` verwendet.

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

{{EmbedLiveSample("Abrufen von Dekodierungsinformationen für unverschlüsselte Mediendateien")}}

### Abrufen von Dekodierungsinformationen für verschlüsselte Medien

Dieses Beispiel zeigt, wie Sie `decodingInfo()` verwenden könnten, um eine Medienkonfiguration für verschlüsselten Inhalt auszuwählen.

Wie im vorherigen Beispiel definieren wir eine Medienkonfiguration, allerdings verwenden wir diesmal den `type` von `media-source` (statt `file`) und geben sowohl Audio- als auch Videoinhalte an.
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

Im vorherigen Beispiel haben wir [Promise-Verkettung](/de/docs/Web/JavaScript/Guide/Using_promises#chaining) verwendet, um auf das Ergebnis zu warten.
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

Die Protokollausgabe wird unten gezeigt.

{{EmbedLiveSample("Abrufen von Dekodierungsinformationen für verschlüsselte Medien")}}

### Iteration durch Dekodierungsinformationen für verschlüsselte Medien

Das vorherige Beispiel zeigte, wie Sie `decodingInfo()` verwenden können, um Informationen für nur eine Konfiguration zu erhalten.
In der Realität würde die Methode normalerweise iterativ mit einer Reihe von Konfigurationen aufgerufen werden, um die erste unterstützte Konfiguration auszuwählen, die den Kriterien der Anwendung für flüssige Wiedergabe oder Energieeffizienz entspricht.
Wie dies funktioniert, wird unten beschrieben.

Angenommen, wir haben bereits ein `Array` von Medienkonfigurationen namens `orderedMediaConfigs`, das wir von meisten bis am wenigsten bevorzugten geordnet haben, wir können die [`Array.prototype.map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) verwenden, um `decodingInfo()` für jede Konfiguration aufzurufen und ein Array mit allen zurückgegebenen {{jsxref("Promise")}} Objekten zu erhalten.

```js
const capabilitiesPromises = orderedMediaConfigs.map((mediaConfig) =>
  navigator.mediaCapabilities.decodingInfo(mediaConfig),
);
```

Wir verwenden dann eine [`for await...of` Schleife](/de/docs/Web/JavaScript/Reference/Statements/for-await...of), um die Promises zu iterieren, sobald sie aufgelöst werden.
In der Schleife speichern wir die letzte unterstützte Konfiguration in `nonSmoothConfig`, und wir verlassen die Schleife, sobald wir eine flüssige Konfiguration gefunden haben, und setzen diese als unsere `bestConfig`.

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

Wenn wir beim Schleifendurchlauf eine flüssige und unterstützte Konfiguration gefunden haben (`bestConfig`), verwenden wir diese, um [unsere Medienschlüssel zu erstellen](/de/docs/Web/API/MediaKeySystemAccess/createMediaKeys) und die Medien zu dekodieren.
Wenn wir keine flüssigen Konfigurationen entdeckt haben, könnten wir stattdessen `nonSmoothConfig` verwenden, um die Medien zu dekodieren.
Dies wird die zuletzt gefundene unterstützte Konfiguration sein, die aufgrund der von uns ursprünglich geordneten `orderedMediaConfigs` diejenige mit der niedrigsten Bildrate sein sollte.

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

Wenn es keine unterstützte Konfiguration gibt, haben wir keine andere Wahl, als zu versagen und den Benutzer zu benachrichtigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaCapabilities.encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo)
- [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType) für Datei
- [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) für media-source
- [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)
