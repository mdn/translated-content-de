---
title: "MediaCapabilities: decodingInfo() Methode"
short-title: decodingInfo()
slug: Web/API/MediaCapabilities/decodingInfo
l10n:
  sourceCommit: fa2f1687b099bea447e9148201b51c1c853b53c7
---

{{APIRef("Media Capabilities API")}}

Die **`decodingInfo()`**-Methode des {{domxref("MediaCapabilities")}}-Interfaces gibt ein Promise zurück, das erfüllt wird mit Informationen darüber, wie gut der User-Agent Medien mit einer gegebenen Konfiguration dekodieren/anzeigen kann.

Das aufgelöste Objekt enthält drei boolesche Eigenschaften: `supported`, `smooth` und `powerefficient`, welche anzeigen, ob das Dekodieren der beschriebenen Medien unterstützt wird, und falls ja, ob das Dekodieren flüssig und energieeffizient wäre.

Die Methode kann auch verwendet werden, um die Fähigkeiten des User-Agents zu testen, Medien zu dekodieren, die mit einem Schlüsselsystem kodiert sind, allerdings nur, wenn sie im Hauptthread und in einem sicheren Kontext aufgerufen wird.
Wenn die in der `configuration.keySystemConfiguration`-Eigenschaft übergebene Konfiguration zur Dekodierung der Daten unterstützt wird, enthält das aufgelöste Promise auch ein {{domxref("MediaKeySystemAccess")}}-Objekt, das verwendet werden kann, um ein {{domxref("MediaKeys")}}-Objekt für die Einrichtung einer verschlüsselten Wiedergabe zu erstellen.

> [!NOTE]
> Das Aufrufen von `decodingInfo()` mit dieser Eigenschaft kann benutzerseitige Effekte haben, wie das Anfordern von Berechtigungen, um auf ein oder mehrere Systemressourcen zuzugreifen.
> Daher sollte diese Funktion nur aufgerufen werden, wenn die Anwendung bereit ist, ein `MediaKeys`-Objekt mit der bereitgestellten Konfiguration zu erstellen und zu verwenden.

## Syntax

```js-nolint
decodingInfo(configuration)
```

### Parameter

- `configuration`

  - : Ein Objekt mit einer Eigentum `type`, entweder einer `video` oder `audio` Eigenschaft, die eine Konfiguration des entsprechenden Typs enthält, und optional einer `keySystemConfiguration`, wenn Medien dekodiert werden, die mit einem Schlüsselsystem verschlüsselt sind: <!-- MediaDecodingConfiguration in der Spezifikation -->

    - `type`

      - : Der Typ der getesteten Medien. Dies kann einen von drei Werten annehmen:

        - `file`
          - : Repräsentiert eine Konfiguration, die für die Wiedergabe einer einfachen Datei gedacht ist.
        - `media-source`
          - : Repräsentiert eine Konfiguration, die für die Wiedergabe einer {{domxref("MediaSource")}} gedacht ist.
        - `webrtc`
          - : Repräsentiert eine Konfiguration, die über {{domxref("RTCPeerConnection")}} empfangen werden soll (nicht erlaubt, wenn `keySystemConfiguration` gesetzt ist).

    - `video`

      - : Konfigurationsobjekt für eine Video-Medienquelle.
        Dies hat die folgenden Eigenschaften: <!-- VideoConfiguration in der Spezifikation -->

        - `contentType`
          - : Zeichenkette, die einen gültigen Video-MIME-Typ enthält, und (optional) einen [`codecs` Parameter](/de/docs/Web/Media/Formats/codecs_parameter).
        - `width`
          - : Die Breite des Videos.
        - `height`
          - : Die Höhe des Videos.
        - `bitrate`
          - : Die Anzahl der Bits, die verwendet werden, um eine Sekunde der Videodatei zu kodieren.
        - `framerate`
          - : Die Anzahl der Bilder, die eine Sekunde Videowiedergabe ausmachen.

    - `audio`

      - : Konfigurationsobjekt für eine Audio-Medienquelle.
        Dies hat die folgenden Eigenschaften: <!-- AudioConfiguration in der Spezifikation -->

        - `contentType`
          - : Zeichenkette, die einen gültigen Audio-MIME-Typ enthält, und (optional) einen [`codecs` Parameter](/de/docs/Web/Media/Formats/codecs_parameter).
        - `channels`
          - : Die Anzahl der Kanäle, die vom Audiotrack verwendet werden.
        - `bitrate`
          - : Die Anzahl der Bits, die verwendet werden, um eine Sekunde der Audiodatei zu kodieren.
        - `samplerate`
          - : Die Anzahl der Audiosamples, die eine Sekunde der Audiodatei ausmachen.

    - `keySystemConfiguration` {{optional_inline}}

      - : Objekt, das die Konfiguration des Schlüsselsystems für verschlüsselte Medien spezifiziert.

        > **Hinweis:** [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) nimmt Arrays einiger der gleichen Datentypen in seinem `supportedConfigurations`-Argument.

        Falls angegeben, muss der [`type`](#type) `media-source` oder `file` sein (nicht `webrtc`).
        Dies hat die folgenden Eigenschaften: <!-- MediaCapabilitiesKeySystemConfiguration in der Spezifikation -->

        - `keySystem`

          - : Eine Zeichenkette, die das Medienschlüsselsystem identifiziert.
            Zum Beispiel `org.w3.clearkey` oder `com.widevine.alpha`.

        - `initDataType` {{optional_inline}}

          - : Eine Zeichenkette, die den Datentypnamen des Initialisierungsdatensatzformats angibt, wie `"cenc"`, `"keyids"` und `"webm"`.
            Zulässige Namen sind im [Encrypted Media Extensions Initialization Data Format Registry](https://www.w3.org/TR/eme-initdata-registry/) definiert.

        - `distinctiveIdentifier` {{optional_inline}}

          - : Eine Zeichenkette, die angibt, ob die Implementierung "unverwechselbare Identifikatoren" (oder unverwechselbare permanente Identifikatoren) für beliebige Operationen verwenden darf, die mit einem Objekt aus dieser Konfiguration erstellt wurden.
            Die zulässigen Werte sind:

            - `required`
              - : Das zurückgegebene Objekt muss diese Funktion unterstützen.
            - `optional`
              - : Das zurückgegebene Objekt kann diese Funktion unterstützen.
                Dies ist der Standardwert
            - `not-allowed`
              - : Das zurückgegebene Objekt darf diese Funktion nicht unterstützen oder verwenden.

        - `persistentState` {{optional_inline}}

          - : Eine Zeichenkette, die angibt, ob das zurückgegebene Objekt Sitzungsdaten oder einen anderen Zustand speichern können muss.
            Die zulässigen Werte sind:

            - `required`
              - : Das zurückgegebene Objekt muss diese Funktion unterstützen.
            - `optional`
              - : Das zurückgegebene Objekt kann diese Funktion unterstützen.
                Dies ist der Standardwert
            - `not-allowed`
              - : Das zurückgegebene Objekt darf diese Funktion nicht unterstützen oder verwenden.
                Nur "temporäre" Sitzungen dürfen erstellt werden, wenn der persistente Zustand nicht erlaubt ist.

        - `sessionTypes` {{optional_inline}}

          - : Ein Array von Zeichenketten, das die Sitzungsarten angibt, die unterstützt werden müssen.
            Erlaubte Werte sind:

            - `temporary`
              - : Eine Sitzung, bei der die Lizenz, die Schlüssel(en) und Aufzeichnungen oder Daten im Zusammenhang mit der Sitzung nicht gespeichert werden.
                Die Anwendung muss diese Speicherung nicht verwalten.
                Implementierungen müssen diese Option unterstützen, und es ist der Standard.
            - `persistent-license`
              - : Eine Sitzung, bei der die Lizenz (und potenziell andere Daten im Zusammenhang mit der Sitzung) gespeichert wird.
                Ein Nachweis der Lizenz und der zugehörigen Schlüssel bleibt erhalten, selbst wenn die Lizenz zerstört wird, was eine Bescheinigung liefert, dass die Lizenz und die enthaltenen Schlüssel vom Client nicht mehr verwendet werden können.

        - `audio` {{optional_inline}}

          - : Die Audio-Schlüsselsystem-Track-Konfiguration, die mit der oben genannten [`audio` Konfiguration](#audio) verbunden ist.
            Falls gesetzt, muss auch die [`audio` Konfiguration](#audio) gesetzt sein.

            - `encryptionScheme`
              - : Das Verschlüsselungsschema, das mit dem Inhaltstyp verbunden ist, wie `cenc`, `cbcs`, `cbcs-1-9`.
                Dieser Wert sollte von einer Anwendung gesetzt werden (er ist standardmäßig `null`, was bedeutet, dass jedes Verschlüsselungsschema verwendet werden kann).
            - `robustness`
              - : Das Robustheitslevel, das mit dem Inhaltstyp verbunden ist.
                Der leere String zeigt an, dass jede Fähigkeit zur Entschlüsselung und Dekodierung des Inhaltstyps akzeptabel ist.

        - `video` {{optional_inline}}

          - : Die Video-Schlüsselsystem-Track-Konfiguration, die mit der oben genannten [`video` Konfiguration](#video) verbunden ist.
            Falls gesetzt, muss auch die [`video` Konfiguration](#video) gesetzt sein.

            - `encryptionScheme`
              - : Das Verschlüsselungsschema, das mit dem Inhaltstyp verbunden ist, wie `cenc`, `cbcs`, `cbcs-1-9`.
                Dieser Wert sollte von einer Anwendung gesetzt werden (er ist standardmäßig `null`, was bedeutet, dass jedes Verschlüsselungsschema verwendet werden kann).
            - `robustness`
              - : Das Robustheitslevel, das mit dem Inhaltstyp verbunden ist.
                Der leere String zeigt an, dass jede Fähigkeit zur Entschlüsselung und Dekodierung des Inhaltstyps akzeptabel ist.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem Objekt erfüllt wird, das die folgenden Attribute enthält:

- `supported`
  - : `true`, wenn der Medieninhalt überhaupt dekodiert werden kann. Andernfalls ist es `false`.
- `smooth`
  - : `true`, wenn die Wiedergabe der Medien mit der in der Konfiguration angegebenen Framerate abgespielt werden kann, ohne dass Frames ausgelassen werden müssen. Andernfalls ist es `false`.
- `powerEfficient`
  - : `true`, wenn die Wiedergabe der Medien energieeffizient ist. Andernfalls ist es `false`.
- `keySystemAccess`
  - : Ein {{domxref("MediaKeySystemAccess")}}, das verwendet werden kann, um ein {{domxref("MediaKeys")}}-Objekt für die Einrichtung einer verschlüsselten Wiedergabe zu erstellen, oder `null`, wenn die Dekodierung mit der bereitgestellten Konfiguration nicht unterstützt wird.

Browser melden eine unterstützte Medienkonfiguration als `smooth` und `powerEfficient`, bis Statistiken über dieses Gerät aufgezeichnet wurden.
Alle unterstützten Audiocodecs melden `powerEfficient` als wahr.

### Ausnahmen

- {{jsxref("TypeError")}}

  - : Wird ausgelöst, wenn die an die `decodingInfo()`-Methode übergebene `configuration` ungültig ist, entweder weil der Typ nicht video oder audio ist, der `contentType` kein gültiger Codec-MIME-Typ ist, die Medien-Dekodierungskonfiguration kein gültiger Wert für den `type` (file, media-source oder webrtc) ist, oder ein anderer Fehler in der an die Methode übergebenen Medienkonfiguration auftritt, einschließlich des Weglassens von Werten.

- `InvalidStateError` {{domxref("DOMException")}}

  - : Die Methode wird in einem Worker aufgerufen, wenn [`configuration.keySystemConfiguration`](#keysystemconfiguration) definiert ist.

- `SecurityError` {{domxref("DOMException")}}
  - : Die Methode wird außerhalb eines sicheren Kontextes aufgerufen, und [`configuration.keySystemConfiguration`](#keysystemconfiguration) ist definiert.

## Verwendungshinweise

### Vergleich mit Navigator.requestMediaKeySystemAccess()

`decodingInfo()` und die Methode {{domxref("Navigator.requestMediaKeySystemAccess()")}} der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) spiegeln grundsätzlich unterschiedliche Ansätze zur Auswahl einer Konfiguration zum Dekodieren verschlüsselter Medien wider.

Der Konfigurationsparameter für `Navigator.requestMediaKeySystemAccess()` nimmt ein Array möglicher Konfigurationen und ermöglicht es dem System, diejenige auszuwählen, die es für angemessen hält.

Im Gegensatz dazu nimmt `decodingInfo()` jeweils eine Konfiguration.
Die Erwartung ist, dass der Aufrufer `decodingInfo()` mehrmals ausführt, beginnend mit den bevorzugtesten Konfigurationen und endet, sobald er eine Konfiguration findet, die die Anforderungen der Anwendung für flüssiges und/oder energieeffizientes Abspielen erfüllt.
Mit anderen Worten, die Auswahlentscheidung wird an den Anrufer delegiert.

## Beispiele

### Dekodierungsinformationen für unverschlüsselte Mediendateien erhalten

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
// Media-Konfiguration erstellen, die getestet werden soll
const audioConfig = {
  type: "file", // oder 'media-source' oder 'webrtc'
  audio: {
    contentType: "audio/ogg; codecs=vorbis", // gültiger Inhaltstyp
    channels: 2, // Audiokanäle, die vom Track verwendet werden
    bitrate: 132700, // Anzahl der Bits, die zur Kodierung von 1s Audio verwendet werden
    samplerate: 5200, // Anzahl der Audiosamples, die 1s ausmachen.
  },
};

// Unterstützung und Leistung überprüfen
navigator.mediaCapabilities.decodingInfo(audioConfig).then((result) => {
  if (result.supported) {
    log(
      `Die Audiokonfiguration wird unterstützt${result.smooth ? ", flüssig" : ", nicht flüssig"}${result.powerEfficient ? ", energieeffizient" : ", nicht energieeffizient"}.`,
    );
  } else {
    log("Die Audiokonfiguration wird nicht unterstützt");
  }
});
```

Ähnlich zeigt der folgende Code die Konfiguration für eine Videodatei.

```js
const videoConfig = {
  type: "file",
  video: {
    contentType: "video/webm;codecs=vp8", // gültiger Inhaltstyp
    width: 800, // Breite des Videos
    height: 600, // Höhe des Videos
    bitrate: 10000, // Anzahl der Bits, die zur Kodierung von 1s Video verwendet werden
    framerate: 30, // Anzahl der Bilder, die 1s ausmachen.
  },
};

// Unterstützung und Leistung überprüfen
navigator.mediaCapabilities.decodingInfo(videoConfig).then((result) => {
  if (result.supported) {
    log(
      `Die Videokonfiguration wird unterstützt${result.smooth ? ", flüssig" : ", nicht flüssig"}${result.powerEfficient ? ", energieeffizient" : ", nicht energieeffizient"}.`,
    );
  } else {
    log("Die Videokonfiguration wird nicht unterstützt");
  }
});
```

{{EmbedLiveSample("Getting decoding information for unencrypted media files")}}

### Dekodierungsinformationen für verschlüsselte Medien erhalten

Dieses Beispiel zeigt, wie Sie `decodingInfo()` verwenden könnten, um eine Medienkonfiguration für verschlüsselten Inhalt auszuwählen.

Wie im vorherigen Beispiel definieren wir eine Medienkonfiguration, aber diesmal verwenden wir den `type` `media-source` (anstatt `file`) und spezifizieren sowohl Audio- als auch Videoinhalt.
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
  type: "media-source", // oder 'file'
  audio: {
    contentType: "audio/webm; codecs=opus",
    channels: 2, // Audiokanäle, die vom Track verwendet werden
    bitrate: 132700, // Anzahl der Bits, die zur Kodierung von 1s Audio verwendet werden
    samplerate: 48000, // Anzahl der Audiosamples, die 1s ausmachen.
  },
  video: {
    contentType: 'video/webm; codecs="vp09.00.10.08"',
    width: 800, // Breite des Videos
    height: 600, // Höhe des Videos
    bitrate: 10000, // Anzahl der Bits, die zur Kodierung von 1s Video verwendet werden
    framerate: 30, // Anzahl der Bilder, die 1s ausmachen.
  },
  keySystemConfiguration: {
    keySystem: "org.w3.clearkey",
    initDataType: "webm",
    distinctiveIdentifier: "required",
  },
};
```

Im vorherigen Beispiel haben wir [Promise-Verkettung](/de/docs/Web/JavaScript/Guide/Using_promises#chaining) verwendet, um auf das Ergebnis zu warten.
Hier haben wir uns entschieden, [`async` und `await`](/de/docs/Learn/JavaScript/Asynchronous/Promises#async_and_await) zu nutzen, um auf das Ergebnis zu warten und es dann zu loggen.

```js
getDecodingInfo(encryptedMediaConfig);

async function getDecodingInfo(mediaConfig) {
  const result = await navigator.mediaCapabilities.decodingInfo(mediaConfig);
  console.log(result);
  if (!result.supported) {
    log("Diese verschlüsselte Medienkonfiguration wird nicht unterstützt.");
    return;
  }

  // keySystemAccess wird zurückgegeben, wenn die Dekodierung verschlüsselter Medien unterstützt wird
  // Dies kann verwendet werden, um die Medien zu entschlüsseln und wiederzugeben
  if (!result.keySystemAccess) {
    log("Unterstützung für verschlüsselte Medien ist nicht verfügbar.");
    return;
  }

  log(
    `Die verschlüsselte Medienkonfiguration wird unterstützt${result.smooth ? ", flüssig" : ", nicht flüssig"}${result.powerEfficient ? ", energieeffizient" : ", nicht energieeffizient"}.`,
  );
}
```

Die Log-Ausgabe wird unten angezeigt.

{{EmbedLiveSample("Getting decoding information for encrypted media")}}

### Durchgehen von Dekodierungsinformationen für verschlüsselte Medien

Das vorherige Beispiel zeigte, wie Sie `decodingInfo()` verwenden können, um Informationen für nur eine Konfiguration zu erhalten.
In der Realität würde die Methode normalerweise iterativ mit mehreren Konfigurationen aufgerufen, wobei die erste unterstützte Konfiguration ausgewählt wird, die den Kriterien der Anwendung für flüssiges Abspielen oder Energieeffizienz entspricht.
Dessen Funktionsweise wird im Folgenden beschrieben.

Angenommen, wir haben bereits ein `Array` von Medienkonfigurationen namens `orderedMediaConfigs`, das wir von am meisten bis am wenigsten gewünscht geordnet haben, dann können wir [`Array.prototype.map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) verwenden, um `decodingInfo()` für jede Konfiguration aufzurufen und ein Array zu erhalten, das alle zurückgegebenen {{jsxref("Promise")}}-Objekte enthält.

```js
const capabilitiesPromises = orderedMediaConfigs.map((mediaConfig) =>
  navigator.mediaCapabilities.decodingInfo(mediaConfig),
);
```

Wir verwenden dann eine [`for await...of` Schleife](/de/docs/Web/JavaScript/Reference/Statements/for-await...of), um die Promises während ihrer Auflösung zu durchlaufen.
In der Schleife speichern wir die letzte unterstützte Konfiguration in `nonSmoothConfig` und beenden die Schleife, sobald wir eine flüssige Konfiguration finden, die wir als `bestConfig` festlegen.

```js
// Angenommen, diese App will eine unterstützte && flüssige Konfiguration.
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

Wenn wir eine flüssige und unterstützte Konfiguration beim Durchlaufen gefunden haben (`bestConfig`), verwenden wir sie, um unsere [Media-Keys zu erstellen](/de/docs/Web/API/MediaKeySystemAccess/createMediaKeys) und die Medien zu dekodieren.
Falls wir keine flüssigen Konfigurationen gefunden haben, könnten wir stattdessen `nonSmoothConfig` verwenden, um die Medien zu dekodieren.
Dies wird die unterstützte Konfiguration sein, die zuletzt gefunden wurde, was aufgrund der Art und Weise, wie wir die ursprünglichen `orderedMediaConfigs` geordnet haben, diejenige mit der niedrigsten Bildrate sein sollte.

```js
let keys = null;
if (bestConfig) {
  keys = await bestConfig.keySystemAccess.createMediaKeys();
  // ... keys verwenden, um Medien mit bester Konfiguration zu dekodieren
} else if (nonSmoothConfig) {
  console.log(
    "Keine flüssigen Konfigurationen gefunden. Verwendung der Konfiguration mit der niedrigsten Auflösung!",
  );
  keys = await nonSmoothConfig.keySystemAccess.createMediaKeys();
  // ... keys verwenden, um Medien mit der niedrigsten Bildratenkonfiguration zu dekodieren
} else {
  console.log("Keine unterstützten Konfigurationen gefunden!");
  // Scheitern!
}
```

Wenn es keine unterstützte Konfiguration gibt, haben wir keine Wahl, als zu scheitern und den Benutzer zu benachrichtigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("MediaCapabilities.encodingInfo()")}}
- {{domxref("HTMLMediaElement.canPlayType()")}} für Datei
- {{domxref("MediaSource.isTypeSupported_static", "MediaSource.isTypeSupported()")}} für media-source
- {{domxref("Navigator.requestMediaKeySystemAccess()")}}
