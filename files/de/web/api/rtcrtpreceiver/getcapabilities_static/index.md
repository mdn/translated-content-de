---
title: "RTCRtpReceiver: getCapabilities() statische Methode"
short-title: getCapabilities()
slug: Web/API/RTCRtpReceiver/getCapabilities_static
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("WebRTC")}}

Die _statische Methode_ **`RTCRtpReceiver.getCapabilities()`** gibt ein Objekt zurück, das die von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekten auf dem aktuellen Gerät unterstützten Codec- und Header-Erweiterungsfähigkeiten beschreibt.

Auf ähnliche Weise können Sie die Fähigkeiten von [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekten durch Aufruf der statischen Funktion [`RTCRtpSender.getCapabilities()`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static) erhalten.

## Syntax

```js-nolint
RTCRtpReceiver.getCapabilities(kind)
```

### Parameter

- `kind`
  - : Ein String, der den Medientyp angibt, für den die Empfängerfähigkeiten des Browsers angefordert werden.
    Die unterstützten Medientypen sind: `audio` und `video`.

### Rückgabewert

Ein neues Objekt, das angibt, welche Fähigkeiten der Browser zum Empfang der angegebenen Medienart über eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) hat.
Wenn der Browser keine Unterstützung für den gegebenen Medientyp `kind` hat, ist der zurückgegebene Wert `null`.

Das zurückgegebene Objekt besitzt die folgenden Eigenschaften:

- `codecs`

  - : Ein Array von Objekten, die jeweils die grundlegenden Fähigkeiten eines einzelnen [Media-Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) beschreiben, der von dem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) unterstützt wird.

    > [!NOTE]
    > Das Array enthält spezielle Einträge, die die zugrunde liegenden Komponenten des Transports darstellen — diese können ignoriert werden, wenn Sie sich nur für die tatsächlichen Codecs interessieren, die für die Medien selbst verwendet werden.
    > Diese werden unten im Abschnitt [Das Codecs-Array](#das_codecs-array) beschrieben.

    Jedes Codec-Objekt hat die folgenden Eigenschaften:

    - `channels` {{optional_inline}}
      - : Ein positiver Ganzzahlenwert, der die maximale Anzahl von Kanälen angibt, die vom Codec unterstützt werden; zum Beispiel hätte ein Codec, der nur Mono-Sound unterstützt, einen Wert von 1; Stereo-Codecs hätten einen Wert von 2, etc.
    - `clockRate`
      - : Ein positiver Ganzzahlenwert, der die Taktrate des Codecs in Hertz (Hz) angibt.
        Die IANA pflegt eine [Liste von Codecs und deren Parameter](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktraten.
    - `mimeType`
      - : Ein String, der den MIME-Medientyp und Subtyp des Codecs angibt.
        Die MIME-Typ-Strings, die von RTP verwendet werden, unterscheiden sich von denen, die anderswo verwendet werden.
        Siehe {{RFC(3555, "", 4)}} für das vollständige IANA-Register dieser Typen.
        Siehe auch [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details zu möglichen Codecs, die hier referenziert werden könnten.
    - `sdpFmtpLine` {{optional_inline}}
      - : Ein String, der das format-spezifische Parameterfeld von der `a=fmtp`-Zeile im SDP angibt, das dem Codec entspricht, falls eine solche Zeile existiert.
        Wenn kein Parameterfeld vorhanden ist, wird diese Eigenschaft weggelassen.

- `headerExtensions`

  - : Ein Array von Objekten, die jeweils die URI einer [Header-Erweiterung](https://datatracker.ietf.org/doc/html/rfc3550#section-5.3.1) angeben, die für den aktuellen Medientyp `kind` unterstützt wird.
    Jedes Objekt hat die folgende Eigenschaft:

    - `uri`
      - : Ein String, der die URI einer Header-Erweiterung spezifiziert.
        Die URI wird wie in {{RFC(5285)}} beschrieben formatiert.

## Beschreibung

Als eine statische Funktion wird dies immer in der Form aufgerufen:

```js
capabilities = RTCRtpReceiver.getCapabilities("audio");
```

Der zurückgegebene Satz von Fähigkeiten ist die optimistischste mögliche Liste.
Es ist durchaus möglich, dass bestimmte Kombinationen von Optionen nicht funktionieren, wenn Sie versuchen, sie tatsächlich zu verwenden.

Der Aufruf von `RTCRtpReceiver.getCapabilities()` bereitet den Browser in keiner Weise darauf vor, Medien zu verarbeiten. Nichts wird geladen, abgerufen oder anderweitig vorbereitet.
Es ist ein Mittel, um festzustellen, was möglicherweise nutzbar ist, bevor der Zugriff auf Medien versucht wird.

Da der verfügbare Satz von Fähigkeiten in der Regel über einen längeren Zeitraum stabil bleibt (Menschen installieren und deinstallieren Codecs und dergleichen nicht sehr oft), können die Medienfähigkeiten ganz oder teilweise eine plattformübergreifende Methode zur Identifizierung eines Benutzers bieten.
Aus diesem Grund kann der Browser in datenschutzsensiblen Kontexten wählen, die Fähigkeiten zu verschleiern; dies könnte z. B. durch das Auslassen von selten verwendeten Codec-Konfigurationen geschehen.

### Das Codecs-Array

Das `codecs` Array ist ein Array von Objekten, das einen einzelnen Codec und seine grundlegenden Fähigkeiten beschreibt.
Der Browser wird nur verschiedene Fähigkeitensets separat melden.
Wenn zwei Fähigkeitensets als eins beschrieben werden können, werden sie es auch.
Das bedeutet, dass z. B. wenn es zwei Einträge für den H.264-Codec gibt (wie durch den [`mimeType`](#mimetype) angegeben, der "video/H264" ist), es andere Werte in den Capability-Objekten gibt, die angeben, wie sie sich in irgendeiner Weise unterscheiden.

Es gibt drei spezielle Einträge, die immer vorhanden sein sollten und die zugrunde liegenden Komponenten des Transports darstellen. Diese Komponenten sind:

- RED (REDundant Audio Data)
  - : Der Medientyp eines RED-Eintrags kann variieren, da es mehrere Versionen davon gibt, aber er endet mit `red`, wie `video/red` oder `video/fwdred`.
    Der Basis-RED-Standard kann in {{RFC(2198)}} gefunden werden. Es kann mehrere Einträge für RED geben, wenn verschiedene Formen unterstützt werden; jeder wird in diesem Fall einen einzigartigen Medientyp haben.
- FEC (Forward Error Correction)
  - : Eine FEC-Komponente behandelt Fehlerschutzdaten; ihr Medientyp kann ebenfalls variieren, da fortgeschrittene Versionen des Standards verfügbar sind, aber sie wird immer mit `fec` enden.
    Ein möglicher Wert ist `video/ulpfec` (ein generisches Fehlerverbindungsmodell).
    Es kann auch mehrere FEC-Einträge geben, wenn mehr als eine Form unterstützt wird.
- RTX (Retransmission)
  - : Diese Komponente ist für die erneute Übertragung von Daten verantwortlich; ihr Medientyp sollte `video/rtx` sein.
    Es wird nur einen Eintrag für RTX geben, und er wird keine [`sdpFmtpLine`](#sdpfmtpline) Eigenschaft haben.

Diese Einträge sollten ignoriert werden, wenn nur Codecs, die sich auf die Medien beziehen, von Interesse sind.

## Beispiele

### Funktionsunterstützung

Sie können [`Object.hasOwn()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) verwenden, um zu prüfen, ob `RTCRtpReceiver.getCapabilities()` unterstützt wird:

```html hidden
<p id="log"></p>
```

```js hidden
const log = document.querySelector("#log");
```

```js
log.textContent = `RTCRtpReceiver.getCapabilities() supported: ${Object.hasOwn(
  RTCRtpReceiver,
  "getCapabilities",
)}`;
```

{{ EmbedLiveSample('Funktionsunterstützung', '100%', '30px') }}

### Unterstützung für einen bestimmten Codec überprüfen

Die folgende Funktion gibt einen Boolean zurück, der angibt, ob das Gerät H.264-Video auf einer WebRTC-Verbindung empfangen kann oder nicht.

> [!NOTE]
> Da `RTCRtpReceiver.getCapabilities()` tatsächlich nur auf _wahrscheinliche_ Unterstützung hinweist, könnte der Versuch, H.264-Video zu empfangen, dennoch fehlschlagen, selbst nachdem eine positive Antwort von dieser Funktion erhalten wurde.

```js
function canReceiveH264() {
  let capabilities = RTCRtpReceiver.getCapabilities("video");

  capabilities.codecs.forEach((codec) => {
    if (codec.mimeType === "video/H264") {
      return true;
    }
  });
  return false;
}
```

### Alle Fähigkeiten abrufen

Dieses Codebeispiel zeigt, wie wir alle unterstützten Codecs und Header erhalten könnten.
Das HTML definiert eine Auswahloption für die beiden Arten von Fähigkeiten und ein Protokollbereich.

```html
<select id="kind">
  <option value="audio">audio</option>
  <option value="video">video</option>
</select>
<textarea rows="40" cols="100" id="log"></textarea>
```

Das JavaScript definiert eine Funktion, um die Fähigkeiten für einen bestimmten "kind" zu protokollieren.
Dies wird initial mit dem Wert `audio` aufgerufen.
Ein Listener aktualisiert den Wert, wenn sich die Auswahloption `kind` ändert.

```js
const log = document.querySelector("#log");
const kindSelector = document.querySelector("#kind");

logMediaCapabilities("audio");

kindSelector.addEventListener("click", () => {
  log.textContent = "";
  logMediaCapabilities(kindSelector.value);
});

function logMediaCapabilities(kind) {
  if (!Object.hasOwn(RTCRtpReceiver, "getCapabilities")) {
    log.textContent = "RTCRtpReceiver.getCapabilities() not supported";
    return;
  }
  const capabilities = RTCRtpReceiver.getCapabilities(`${kind}`);
  log.textContent += "Headers\n";
  capabilities.headerExtensions.forEach((header) => {
    log.textContent += ` uri: ${header.uri}\n`;
  });

  log.textContent += "\nCodecs\n";
  capabilities.codecs.forEach((codec) => {
    log.textContent += ` mime type: ${codec.mimeType}\n`;
    log.textContent += `   channels: ${codec.channels}\n`; // max channels - e.g. 2 is stereo
    log.textContent += `   clockRate: ${codec.clockRate}\n`; // clock rate in Hz
    log.textContent += `   sdpFmtpLine: ${codec.sdpFmtpLine}\n`; // mime media type and subtype
  });
}
```

#### Ergebnis

{{ EmbedLiveSample('Alle Fähigkeiten abrufen', '100%', '500px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
