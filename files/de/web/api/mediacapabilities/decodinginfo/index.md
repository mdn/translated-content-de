---
title: "MediaCapabilities: Methode decodingInfo()"
short-title: decodingInfo()
slug: Web/API/MediaCapabilities/decodingInfo
l10n:
  sourceCommit: fa2f1687b099bea447e9148201b51c1c853b53c7
---

{{APIRef("Media Capabilities API")}}

Die **`decodingInfo()`**-Methode des [`MediaCapabilities`](/de/docs/Web/API/MediaCapabilities) Interfaces gibt ein Promise zurück, das mit Informationen darüber erfüllt wird, wie gut der Benutzeragent Medien mit einer bestimmten Konfiguration decodieren/anzeigen kann.

Das aufgelöste Objekt enthält drei boolesche Eigenschaften `supported`, `smooth` und `powerefficient`, die angeben, ob das Decodieren der beschriebenen Medien unterstützt wird und ob es flüssig und energieeffizient wäre.

Die Methode kann auch verwendet werden, um die Fähigkeiten des Benutzeragents zum Decodieren von Medien, die mit einem Schlüsselsystem kodiert sind, zu testen, jedoch nur, wenn sie im Hauptthread und in einem sicheren Kontext aufgerufen wird.
Wenn die in der `configuration.keySystemConfiguration`-Eigenschaft übergebene Konfiguration für das Decodieren der Daten unterstützt wird, enthält das aufgelöste Promise auch ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess)-Objekt, das verwendet werden kann, um ein [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Objekt zur Einrichtung der verschlüsselten Wiedergabe zu erstellen.

> [!NOTE]
> Der Aufruf von `decodingInfo()` mit dieser Eigenschaft kann benutzerseitige Effekte haben, wie das Erfragen von Berechtigungen zum Zugriff auf ein oder mehrere Systemressourcen.
> Daher sollte diese Funktion nur aufgerufen werden, wenn die Anwendung bereit ist, ein `MediaKeys`-Objekt mit der bereitgestellten Konfiguration zu erstellen und zu verwenden.

## Syntax

```js-nolint
decodingInfo(configuration)
```

### Parameter

- `configuration`

  - : Ein Objekt mit einer Eigenschaft `type`, _entweder_ einer `video`- oder `audio`-Eigenschaft, die eine Konfiguration des entsprechenden Typs enthält, und optional einer `keySystemConfiguration`, wenn Medien mit einem Schlüsselsystem decodiert werden: <!-- MediaDecodingConfiguration in the spec -->

    - `type`

      - : Der Typ der getesteten Medien. Dies nimmt einen der drei Werte an:

        - `file`
          - : Repräsentiert eine Konfiguration, die für eine einfache Dateiwiedergabe gedacht ist.
        - `media-source`
          - : Repräsentiert eine Konfiguration, die für die Wiedergabe eines [`MediaSource`](/de/docs/Web/API/MediaSource) gedacht ist.
        - `webrtc`
          - : Repräsentiert eine Konfiguration, die über [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) empfangen wird (nicht erlaubt, wenn `keySystemConfiguration` festgelegt ist).

    - `video`

      - : Konfigurationsobjekt für eine Videomedienquelle.
        Dieses hat folgende Eigenschaften: <!-- VideoConfiguration in the spec -->

        - `contentType`
          - : Ein String, der einen gültigen Video-MIME-Typ enthält, und (optional) einen [`codecs` Parameter](/de/docs/Web/Media/Formats/codecs_parameter).
        - `width`
          - : Die Breite des Videos.
        - `height`
          - : Die Höhe des Videos.
        - `bitrate`
          - : Die Anzahl der Bits, die verwendet werden, um eine Sekunde der Videodatei zu kodieren.
        - `framerate`
          - : Die Anzahl der Frames, die eine Sekunde der Videowiedergabe ausmachen.

    - `audio`

      - : Konfigurationsobjekt für eine Audiomedienquelle.
        Dieses hat folgende Eigenschaften: <!-- AudioConfiguration in the spec -->

        - `contentType`
          - : Ein String, der einen gültigen Audio-MIME-Typ enthält, und (optional) einen [`codecs` Parameter](/de/docs/Web/Media/Formats/codecs_parameter).
        - `channels`
          - : Die Anzahl der Kanäle, die vom Audiotrack genutzt werden.
        - `bitrate`
          - : Die Anzahl der Bits, die verwendet werden, um eine Sekunde der Audiodatei zu kodieren.
        - `samplerate`
          - : Die Anzahl der Audiosamples, die eine Sekunde der Audiodatei ausmachen.

    - `keySystemConfiguration` {{optional_inline}}

      - : Objekt, das die Konfiguration des Schlüsselsystems für verschlüsselte Medien spezifiziert.

        > **Hinweis:** [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) akzeptiert Arrays einiger der gleichen Datentypen in seinem `supportedConfigurations`-Argument.

        Wenn spezifiziert, muss der [`type`](#type) `media-source` oder `file` (nicht `webrtc`) sein.
        Dieses hat folgende Eigenschaften: <!-- MediaCapabilitiesKeySystemConfiguration in the spec -->

        - `keySystem`

          - : Ein String, der das Medienschlüssel-System identifiziert.
            Zum Beispiel `org.w3.clearkey` oder `com.widevine.alpha`.

        - `initDataType` {{optional_inline}}

          - : Ein String, der den Datentypnamen des Initialisierungsdatenformats angibt, wie `"cenc"`, `"keyids"` und `"webm"`.
            Erlaubte Namen sind im [Encrypted Media Extensions Initialization Data Format Registry](https://www.w3.org/TR/eme-initdata-registry/) definiert.

        - `distinctiveIdentifier` {{optional_inline}}

          - : Ein String, der anzeigt, ob die Implementierung "unverwechselbare Bezeichner" (oder unverwechselbare permanente Bezeichner) für alle zuvor mit einer Konfiguration erstellten Objekte verwenden darf.
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
                Nur "temporäre" Sitzungen dürfen erstellt werden, wenn ein persistenter Zustand nicht erlaubt ist.

        - `sessionTypes` {{optional_inline}}

          - : Ein Array von Strings, das die zu unterstützenden Sitzungsarten angibt.
            Zulässige Werte umfassen:

            - `temporary`
              - : Eine Sitzung, für die Lizenz, Schlüssel und Aufzeichnungen oder Daten in Bezug auf die Sitzung nicht gespeichert werden.
                Die Anwendung muss diese Speicherung nicht verwalten.
                Implementierungen müssen diese Option unterstützen, und sie ist die Standardeinstellung.
            - `persistent-license`
              - : Eine Sitzung, für die die Lizenz (und möglicherweise andere mit der Sitzung verbundene Daten) gespeichert werden.
                Ein Eintrag über die Lizenz und zugehörige Schlüssel bleibt bestehen, selbst wenn die Lizenz zerstört wird, was eine Bestätigung liefert, dass die Lizenz und die Schlüssel, die sie enthält, vom Client nicht mehr verwendet werden können.

        - `audio` {{optional_inline}}

          - : Die Audiotrack-Konfiguration des Schlüsselsystems, die mit der oben beschriebenen [`audio` Konfiguration](#audio) verbunden ist.
            Wenn gesetzt, muss auch die [`audio` Konfiguration](#audio) gesetzt sein.

            - `encryptionScheme`
              - : Das Verschlüsselungsschema, das mit dem Inhaltstyp verbunden ist, wie `cenc`, `cbcs`, `cbcs-1-9`.
                Dieser Wert sollte von einer Anwendung gesetzt werden (Er ist standardmäßig `null`, was bedeutet, dass ein beliebiges Verschlüsselungsschema verwendet werden kann).
            - `robustness`
              - : Das Robustheitsniveau, das mit dem Inhaltstyp verbunden ist.
                Der leere String zeigt an, dass jede Fähigkeit zum Entschlüsseln und Decodieren des Inhaltstyps akzeptabel ist.

        - `video` {{optional_inline}}

          - : Die Videotrack-Konfiguration des Schlüsselsystems, die mit der oben beschriebenen [`video` Konfiguration](#video) verbunden ist.
            Wenn gesetzt, muss auch die [`video` Konfiguration](#video) gesetzt sein.

            - `encryptionScheme`
              - : Das Verschlüsselungsschema, das mit dem Inhaltstyp verbunden ist, wie `cenc`, `cbcs`, `cbcs-1-9`.
                Dieser Wert sollte von einer Anwendung gesetzt werden (Er ist standardmäßig `null`, was bedeutet, dass ein beliebiges Verschlüsselungsschema verwendet werden kann).
            - `robustness`
              - : Das Robustheitsniveau, das mit dem Inhaltstyp verbunden ist.
                Der leere String zeigt an, dass jede Fähigkeit zum Entschlüsseln und Decodieren des Inhaltstyps akzeptabel ist.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem Objekt erfüllt wird, das die folgenden Attribute enthält:

- `supported`
  - : `true`, wenn die Medieninhalte überhaupt decodiert werden können. Andernfalls ist es `false`.
- `smooth`
  - : `true`, wenn die Wiedergabe der Medien mit der in der Konfiguration angegebenen Bildrate abgespielt werden kann, ohne Frames zu überspringen. Andernfalls ist es `false`.
- `powerEfficient`
  - : `true`, wenn die Wiedergabe der Medien energieeffizient ist. Andernfalls ist es `false`.
- `keySystemAccess`
  - : Ein [`MediaKeySystemAccess`](/de/docs/Web/API/MediaKeySystemAccess), das verwendet werden kann, um ein [`MediaKeys`](/de/docs/Web/API/MediaKeys)-Objekt zur Einrichtung der verschlüsselten Wiedergabe zu erstellen, oder `null`, wenn das Decodieren mit der angegebenen Konfiguration nicht unterstützt wird.

Browser melden eine unterstützte Medienkonfiguration als `smooth` und `powerEfficient`, bis Statistiken auf diesem Gerät erfasst wurden.
Alle unterstützten Audiocodecs melden `powerEfficient` als wahr.

### Ausnahmen

- {{jsxref("TypeError")}}

  - : Wird ausgelöst, wenn die an die `decodingInfo()`-Methode übergebene `configuration` ungültig ist, entweder weil der Typ nicht `video` oder `audio` ist, der `contentType` kein gültiger Codec-MIME-Typ ist, die Medien-Decodierkonfiguration kein gültiger Wert für den `type` (Datei, media-source oder webrtc) ist oder ein anderer Fehler in der an die Methode übergebenen Medienkonfiguration vorliegt, einschließlich des Weglassens von Werten.

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die Methode wird in einem Worker aufgerufen, wenn [`configuration.keySystemConfiguration`](#keysystemconfiguration) definiert ist.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wird außerhalb eines sicheren Kontexts aufgerufen und [`configuration.keySystemConfiguration`](#keysystemconfiguration) ist definiert.

## Nutzungshinweise

### Vergleich mit Navigator.requestMediaKeySystemAccess()

`decodingInfo()` und die [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)-Methode der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) spiegeln fundamental unterschiedliche Ansätze zur Auswahl einer Konfiguration für das Decodieren verschlüsselter Medien wider.

Der Konfigurationsparameter für `Navigator.requestMediaKeySystemAccess()` nimmt ein Array möglicher Konfigurationen an und erlaubt dem System, diejenige auszuwählen, die als angemessen erachtet wird.

Im Gegensatz dazu nimmt `decodingInfo()` eine Konfiguration nach der anderen.
Die Erwartung ist, dass der Aufrufer `decodingInfo()` mehrmals ausführt, beginnend mit den bevorzugtesten Konfigurationen und aufhört, sobald eine Konfiguration gefunden wird, die die Anforderungen der Anwendung für flüssige und energieeffiziente Wiedergabe erfüllt.
Mit anderen Worten, die Auswahlentscheidung wird an den Anrufer übergeben.

## Beispiele

### Abrufen von Decodierinformationen für unverschlüsselte Mediendateien

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

{{EmbedLiveSample("Abrufen von Decodierinformationen für unverschlüsselte Mediendateien")}}

### Abrufen von Decodierinformationen für verschlüsselte Medien

Dieses Beispiel zeigt, wie Sie `decodingInfo()` verwenden könnten, um eine Medienkonfiguration für verschlüsselten Inhalt auszuwählen.

Wie im vorherigen Beispiel definieren wir eine Medienkonfiguration, aber diesmal verwenden wir den `type` von `media-source` (statt `file`) und spezifizieren sowohl Audio- als auch Videoinhalte.
Wir geben außerdem eine einfache `keySystemConfiguration` an.

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
Hier haben wir beschlossen, [`async` und `await`](/de/docs/Learn/JavaScript/Asynchronous/Promises#async_and_await) zu verwenden, um auf das Ergebnis zu warten und es dann zu protokollieren.

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

Das Protokollausgabe erscheint unten.

{{EmbedLiveSample("Abrufen von Decodierinformationen für verschlüsselte Medien")}}

### Durchlaufen von Decodierinformationen für verschlüsselte Medien

Das vorherige Beispiel zeigte, wie Sie `decodingInfo()` verwenden können, um Informationen nur für eine Konfiguration zu erhalten.
In der Realität würde die Methode normalerweise iterativ mit einer Reihe von Konfigurationen aufgerufen, wobei die erste unterstützte Konfiguration ausgewählt wird, die den Kriterien der Anwendung für eine flüssige Wiedergabe oder Energieeffizienz entspricht.
Die Funktionsweise wird im Folgenden beschrieben.

Angenommen, wir haben bereits ein `Array` von Medienkonfigurationen namens `orderedMediaConfigs`, das von den meisten bis zu den am wenigsten gewünschten sortiert ist, können wir die [`Array.prototype.map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) verwenden, um `decodingInfo()` für jede Konfiguration aufzurufen und ein Array zu erhalten, das alle zurückgegebenen {{jsxref("Promise")}} Objekte enthält.

```js
const capabilitiesPromises = orderedMediaConfigs.map((mediaConfig) =>
  navigator.mediaCapabilities.decodingInfo(mediaConfig),
);
```

Dann verwenden wir eine [`for await...of` Schleife](/de/docs/Web/JavaScript/Reference/Statements/for-await...of), um die Promises abzuarbeiten, sobald sie aufgelöst werden.
In der Schleife speichern wir die letzte unterstützte Konfiguration in `nonSmoothConfig`, und wir verlassen die Schleife, sobald wir eine flüssige Konfiguration finden, die wir als unsere `bestConfig` festlegen.

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

Wenn wir während der Schleife eine flüssige und unterstützte Konfiguration gefunden haben (`bestConfig`), verwenden wir sie, um [unsere Medienschlüssel zu erstellen](/de/docs/Web/API/MediaKeySystemAccess/createMediaKeys) und die Medien zu decodieren.
Wenn wir keine flüssigen Konfigurationen entdecken, könnten wir stattdessen `nonSmoothConfig` verwenden, um die Medien zu decodieren.
Dies wird die zuletzt gefundene unterstützte Konfiguration sein, die aufgrund der Art und Weise, wie wir die ursprünglichen `orderedMediaConfigs` sortiert haben, diejenige mit der niedrigsten Bildwiederholrate sein sollte.

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

Wenn es keine unterstützte Konfiguration gibt, können wir nichts anderes tun, als zu scheitern und den Benutzer zu benachrichtigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaCapabilities.encodingInfo()`](/de/docs/Web/API/MediaCapabilities/encodingInfo)
- [`HTMLMediaElement.canPlayType()`](/de/docs/Web/API/HTMLMediaElement/canPlayType) für Datei
- [`MediaSource.isTypeSupported()`](/de/docs/Web/API/MediaSource/isTypeSupported_static) für media-source
- [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess)
