---
title: "RTCRtpReceiver: getCapabilities() statische Methode"
short-title: getCapabilities()
slug: Web/API/RTCRtpReceiver/getCapabilities_static
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebRTC")}}

Die _statische Methode_ **`RTCRtpReceiver.getCapabilities()`** gibt ein Objekt zurück, das die von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekten auf dem aktuellen Gerät unterstützten Codec- und Header-Erweiterungen beschreibt.

Sie können ebenso die Fähigkeiten von [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekten erhalten, indem Sie die statische Funktion [`RTCRtpSender.getCapabilities()`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static) aufrufen.

## Syntax

```js-nolint
RTCRtpReceiver.getCapabilities(kind)
```

### Parameter

- `kind`
  - : Ein String, der den Medientyp angibt, für den die Empfangsfähigkeiten des Browsers abgefragt werden.
    Die unterstützten Medientypen sind: `audio` und `video`.

### Rückgabewert

Ein neues Objekt, das angibt, welche Fähigkeiten der Browser hat, um den angegebenen Medientyp über eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu empfangen.
Wenn der Browser keine Unterstützung für den angegebenen Medientyp `kind` hat, ist der zurückgegebene Wert `null`.

Das zurückgegebene Objekt hat folgende Eigenschaften:

- `codecs`

  - : Ein Array von Objekten, von denen jedes die grundlegenden Fähigkeiten eines einzelnen [Mediacodecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) beschreibt, der vom [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) unterstützt wird.

    > [!NOTE]
    > Das Array enthält spezielle Einträge, die die zugrundeliegenden Komponenten des Transports repräsentieren — diese können ignoriert werden, wenn Sie sich nur für die tatsächlich für das Medium verwendeten Codecs interessieren.
    > Diese werden im Abschnitt [Das Codecs-Array](#das_codecs-array) unten beschrieben.

    Jedes Codec-Objekt hat die folgenden Eigenschaften:

    - `channels` {{optional_inline}}
      - : Ein positiver Ganzzahlenwert, der die maximale Anzahl von Kanälen angibt, die vom Codec unterstützt werden; ein Codec, der nur Mono-Ton unterstützt, hätte zum Beispiel einen Wert von 1; Stereo-Codecs hätten eine 2 usw.
    - `clockRate`
      - : Eine positive Ganzzahl, die die Taktrate des Codecs in Hertz (Hz) angibt.
        Die IANA führt eine [Liste von Codecs und deren Parameter](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktraten.
    - `mimeType`
      - : Ein String, der den MIME-Medientyp und den Subtyp des Codecs angibt.
        Die MIME-Typ-Strings, die von RTP verwendet werden, unterscheiden sich von denen, die anderswo verwendet werden.
        Siehe {{RFC(3555, "", 4)}} für das vollständige IANA-Register dieser Typen.
        Siehe auch [Codecs verwendet von WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details über potenzielle Codecs, die hier referenziert werden könnten.
    - `sdpFmtpLine` {{optional_inline}}
      - : Ein String, der das feldspezifische Parameterfeld aus der `a=fmtp`-Zeile im SDP angibt, das dem Codec entspricht, falls eine solche Zeile existiert.
        Wenn kein Parameterfeld vorhanden ist, wird diese Eigenschaft weggelassen.

- `headerExtensions`
  - : Ein Array von Objekten, die jeweils die URI einer [Header-Erweiterung](https://datatracker.ietf.org/doc/html/rfc3550#section-5.3.1) für den aktuellen Medientyp `kind` bereitstellen.
    Jedes Objekt hat die folgende Eigenschaft:
    - `uri`
      - : Ein String, der die URI einer Header-Erweiterung angibt.
        Die URI ist formatiert, wie in {{RFC(5285)}} beschrieben.

## Beschreibung

Als statische Funktion wird diese immer in der Form aufgerufen:

```js
capabilities = RTCRtpReceiver.getCapabilities("audio");
```

Der zurückgegebene Satz von Fähigkeiten ist die optimistischste mögliche Liste.
Es ist durchaus möglich, dass bestimmte Kombinationen von Optionen nicht funktionieren, wenn Sie versuchen, sie tatsächlich zu verwenden.

Der Aufruf von `RTCRtpReceiver.getCapabilities()` bereitet den Browser auf keine Weise darauf vor, Medien zu behandeln. Nichts wird geladen, abgerufen oder anderweitig vorbereitet.
Es ist ein Mittel, um festzustellen, was möglicherweise verwendet werden kann, bevor versucht wird, auf Medien zuzugreifen.

Da das verfügbare Spektrum an Fähigkeiten in der Regel für längere Zeit stabil bleibt (Menschen installieren und deinstallieren Codecs und Ähnliches nicht sehr oft), können die Medienfähigkeiten ganz oder teilweise eine Cross-Origin-Methode zur Identifizierung eines Benutzers bereitstellen.
Aus diesem Grund kann der Browser in datenschutzsensiblen Kontexten beschließen, die Fähigkeiten zu verschleiern; dies könnte z. B. durch das Weglassen selten verwendeter Codec-Konfigurationen geschehen.

### Das Codecs-Array

Das `codecs`-Array ist ein Array von Objekten, das einen einzelnen Codec und seine grundlegenden Fähigkeiten beschreibt.
Der Browser meldet nur unterschiedliche Kombinationen von Fähigkeiten separat.
Wenn zwei Sätze von Fähigkeiten als einer beschrieben werden können, werden sie zusammengefasst.
Das bedeutet, wenn es beispielsweise zwei Einträge für den H.264-Codec gibt (identifiziert durch den [`mimeType`](#mimetype) "video/H264"), gibt es andere Werte in den Fähigkeiten-Objekten, die darauf hinweisen, in welcher Weise sie sich unterscheiden.

Es gibt drei spezielle Einträge, die immer vorhanden sein sollten und die zugrundeliegenden Komponenten des Transports repräsentieren. Diese Komponenten sind:

- RED (REDundante Audiodaten)
  - : Der Medientyp eines RED-Eintrags kann variieren, da es mehrere Versionen davon gibt, aber er endet mit `red`, wie `video/red` oder `video/fwdred`.
    Der grundlegende RED-Standard kann in {{RFC(2198)}} gefunden werden. Es kann mehrere Einträge für RED geben, wenn unterschiedliche Formen unterstützt werden; in diesem Fall hat jede einen einzigartigen Medientyp.
- FEC (Forward Error Correction)
  - : Eine FEC-Komponente verarbeitet Fehlerkorrekturdaten; ihr Medientyp kann ebenfalls variieren, da es fortgeschrittene Versionen des Standards gibt, aber er wird immer mit `fec` enden.
    Ein möglicher Wert ist `video/ulpfec` (ein generisches Fehlerverbindungsmodell).
    Es kann auch mehrere FEC-Einträge geben, wenn mehr als eine Form unterstützt wird.
- RTX (Retransmission)
  - : Diese Komponente ist für die erneute Übertragung von Daten verantwortlich; der Medientyp sollte `video/rtx` sein.
    Es wird nur einen Eintrag für RTX geben, und er wird keine [`sdpFmtpLine`](#sdpfmtpline)-Eigenschaft haben.

Diese Einträge sollten ignoriert werden, wenn nur Codecs im Zusammenhang mit den Medien von Interesse sind.

## Beispiele

### Feature-Unterstützung

Sie können [`Object.hasOwn()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) verwenden, um zu überprüfen, ob `RTCRtpReceiver.getCapabilities()` unterstützt wird:

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

{{ EmbedLiveSample('Feature support', '100%', '30px') }}

### Unterstützung eines bestimmten Codecs überprüfen

Die folgende Funktion gibt ein Boolean zurück, das angibt, ob das Gerät in der Lage ist, H.264-Video über eine WebRTC-Verbindung zu empfangen.

> [!NOTE]
> Da `RTCRtpReceiver.getCapabilities()` tatsächlich nur _wahrscheinliche_ Unterstützung anzeigt, kann es trotzdem fehlschlagen, H.264-Video zu empfangen, selbst nach einem positiven Ergebnis dieser Funktion.

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
Das HTML definiert eine Auswahlliste für die beiden Arten von Fähigkeiten und einen Protokollierungsbereich.

```html
<select id="kind">
  <option value="audio">audio</option>
  <option value="video">video</option>
</select>
<textarea rows="40" cols="100" id="log"></textarea>
```

Das JavaScript definiert eine Funktion, um die Fähigkeiten für einen bestimmten "kind" zu protokollieren.
Diese wird anfangs mit dem Wert `audio` aufgerufen.
Ein Listener aktualisiert den Wert, wenn die Auswahlliste `kind` geändert wird.

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

{{ EmbedLiveSample('Getting all capabilities', '100%', '500px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
