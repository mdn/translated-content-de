---
title: "RTCRtpReceiver: getCapabilities() statische Methode"
short-title: getCapabilities()
slug: Web/API/RTCRtpReceiver/getCapabilities_static
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

{{APIRef("WebRTC")}}

Die _statische Methode_ **`RTCRtpReceiver.getCapabilities()`** gibt ein Objekt zurück, das die Codec- und Header-Erweiterungsfähigkeiten beschreibt, die von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekten auf dem aktuellen Gerät unterstützt werden.

In ähnlicher Weise können Sie die Fähigkeiten von [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekten erhalten, indem Sie die statische Funktion [`RTCRtpSender.getCapabilities()`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static) aufrufen.

## Syntax

```js-nolint
RTCRtpReceiver.getCapabilities(kind)
```

### Parameter

- `kind`
  - : Ein String, der den Medientyp angibt, für den die Empfängerfähigkeiten des Browsers angefordert werden.
    Die unterstützten Medientypen sind: `audio` und `video`.

### Rückgabewert

Ein neues Objekt, das angibt, welche Fähigkeiten der Browser für den Empfang des angegebenen Medientyps über eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) hat.
Wenn der Browser keine Unterstützung für den angegebenen Medientyp `kind` hat, ist der zurückgegebene Wert `null`.

Das zurückgegebene Objekt hat die folgenden Eigenschaften:

- `codecs`
  - : Ein Array von Objekten, die jeweils die grundlegenden Fähigkeiten eines einzelnen [Media-Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) beschreiben, der vom [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) unterstützt wird.

    > [!NOTE]
    > Das Array enthält spezielle Einträge, die die zugrundeliegenden Komponenten des Transports darstellen — diese können ignoriert werden, wenn Sie sich nur für die tatsächlich für die Medien verwendeten Codecs interessieren.
    > Diese werden im Abschnitt [Das Codecs-Array](#das_codecs-array) unten beschrieben.

    Jedes Codec-Objekt hat die folgenden Eigenschaften:
    - `channels` {{optional_inline}}
      - : Ein positiver Ganzzahlwert, der die maximale Anzahl der vom Codec unterstützten Kanäle angibt; zum Beispiel hätte ein Codec, der nur Mono-Sound unterstützt, einen Wert von 1; Stereo-Codecs hätten einen Wert von 2 usw.
    - `clockRate`
      - : Eine positive Ganzzahl, die die Taktfrequenz des Codecs in Hertz (Hz) angibt.
        Die IANA führt eine [Liste von Codecs und deren Parametern](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktfrequenzen.
    - `mimeType`
      - : Ein String, der den MIME-Medientyp und den Subtyp des Codecs angibt.
        Die von RTP verwendeten MIME-Typ-Strings unterscheiden sich von denen, die anderswo verwendet werden.
        Siehe {{RFC(3555, "", 4)}} für das vollständige IANA-Register dieser Typen.
        Siehe auch [Codecs verwendet von WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details zu potenziellen Codecs, die hier referenziert werden könnten.
    - `sdpFmtpLine` {{optional_inline}}
      - : Ein String, der das formatspezifische Parameterfeld aus der `a=fmtp`-Zeile im SDP gibt, das dem Codec entspricht, falls eine solche Zeile existiert.
        Wenn es kein Parameterfeld gibt, wird diese Eigenschaft weggelassen.

- `headerExtensions`
  - : Ein Array von Objekten, die jeweils die URI einer [Header-Erweiterung](https://datatracker.ietf.org/doc/html/rfc3550#section-5.3.1) angeben, die für die aktuelle `kind` von Medien unterstützt wird.
    Jedes Objekt hat die folgende Eigenschaft:
    - `uri`
      - : Ein String, der die URI einer Header-Erweiterung angibt.
        Die URI ist formatiert wie in {{RFC(5285)}} beschrieben.

## Beschreibung

Als statische Funktion wird diese immer in der Form aufgerufen:

```js
capabilities = RTCRtpReceiver.getCapabilities("audio");
```

Die zurückgegebene Menge an Fähigkeiten ist die optimistischste mögliche Liste.
Es ist durchaus möglich, dass bestimmte Kombinationen von Optionen nicht funktionieren, wenn Sie versuchen, sie tatsächlich zu verwenden.

Der Aufruf von `RTCRtpReceiver.getCapabilities()` bereitet den Browser in keiner Weise darauf vor, Medien zu verarbeiten. Es wird nichts geladen, abgerufen oder anderweitig vorbereitet.
Es ist eine Möglichkeit, festzustellen, was möglicherweise verwendbar ist, bevor Sie versuchen, Medien zuzugreifen.

Da das verfügbare Fähigkeiten-Set dazu neigt, über längere Zeit stabil zu sein (Leute installieren und deinstallieren nicht oft Codecs und dergleichen), können die Medienfähigkeiten im Ganzen oder teilweise eine übergreifende Methode zur Benutzeridentifikation bieten.
Aus diesem Grund kann der Browser in datenschutzsensiblen Kontexten beschließen, die Fähigkeiten zu verschleiern; dies könnte beispielsweise durch das Weglassen seltener verwendeten Codec-Konfigurationen erfolgen.

### Das Codecs-Array

Das `codecs`-Array ist ein Array von Objekten, das einen einzelnen Codec und seine grundlegenden Fähigkeiten beschreibt.
Der Browser wird nur getrennte Fähigkeitskombinationen separat melden.
Wenn zwei Sätze von Fähigkeiten als ein Satz beschrieben werden können, werden sie dies auch sein.
Das bedeutet, dass es beispielsweise für den H.264-Codec (wie durch den [`mimeType`](#mimetype) als „video/H264“ identifiziert) zwei Einträge gibt, wobei es andere Werte in den Fähigkeiten-Objekten gibt, die darauf hinweisen, wie sie sich in irgendeiner Weise unterscheiden.

Es gibt drei spezielle Einträge, die immer vorhanden sein sollten und die zugrundeliegenden Komponenten des Transports darstellen. Diese Komponenten sind:

- RED (REDundant Audio Data)
  - : Der Medientyp eines RED-Eintrags kann variieren, da es verschiedene Versionen davon gibt, aber er wird mit `red` enden, wie `video/red` oder `video/fwdred`.
    Der grundlegende RED-Standard ist zu finden in {{RFC(2198)}}. Es kann mehrere Einträge für RED geben, wenn verschiedene Formen unterstützt werden; in diesem Fall wird jeder einen einzigartigen Medientyp haben.
- FEC (Forward Error Correction)
  - : Eine FEC-Komponente verarbeitet Fehlerkorrekturdaten; ihr Medientyp kann ebenfalls variieren, da es fortgeschrittene Versionen des Standards gibt, aber sie wird immer mit `fec` enden.
    Ein möglicher Wert ist `video/ulpfec` (ein generisches Fehlerverbindungsmodell).
    Es kann mehrere FEC-Einträge geben, wenn mehr als eine Form unterstützt wird.
- RTX (Retransmission)
  - : Diese Komponente ist für die erneute Übertragung von Daten verantwortlich; ihr Medientyp sollte `video/rtx` sein.
    Es wird nur einen Eintrag für RTX geben, und es wird keine [`sdpFmtpLine`](#sdpfmtpline)-Eigenschaft haben.

Diese Einträge sollten ignoriert werden, wenn nur die mit den Medien in Zusammenhang stehenden Codecs von Interesse sind.

## Beispiele

### Funktionsunterstützung

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

### Unterstützung für einen bestimmten Codec überprüfen

Die folgende Funktion gibt einen booleschen Wert zurück, der angibt, ob das Gerät den Empfang von H.264-Video über eine WebRTC-Verbindung unterstützt oder nicht.

> [!NOTE]
> Da `RTCRtpReceiver.getCapabilities()` tatsächlich nur _wahrscheinliche_ Unterstützung anzeigt, kann der Versuch, H.264-Video zu empfangen, immer noch fehlschlagen, sogar nachdem man eine positive Antwort von dieser Funktion erhalten hat.

```js
function canReceiveH264() {
  const capabilities = RTCRtpReceiver.getCapabilities("video");

  return capabilities.codecs.some((codec) => codec.mimeType === "video/H264");
}
```

### Alle Fähigkeiten abrufen

Dieses Codebeispiel zeigt, wie wir alle unterstützten Codecs und Header abrufen könnten.
Das HTML definiert eine Auswahlliste für die beiden Arten von Fähigkeiten und einen Protokollbereich.

```html
<select id="kind">
  <option value="audio">audio</option>
  <option value="video">video</option>
</select>
<textarea rows="40" cols="100" id="log"></textarea>
```

Das JavaScript definiert eine Funktion, um die Fähigkeiten für eine bestimmte "Art" zu protokollieren.
Diese wird anfänglich mit dem Wert `audio` aufgerufen.
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
