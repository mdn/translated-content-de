---
title: "RTCRtpSender: getCapabilities() statische Methode"
short-title: getCapabilities()
slug: Web/API/RTCRtpSender/getCapabilities_static
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebRTC")}}

Die _statische Methode_ **`RTCRtpSender.getCapabilities()`** gibt ein Objekt zurück, das die Codec- und Header-Erweiterungskapazitäten beschreibt, die vom [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) unterstützt werden.

Sie können ähnlich die Fähigkeiten der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekte auf dem Gerät erhalten, indem Sie die statische Funktion [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static) aufrufen.

## Syntax

```js-nolint
RTCRtpSender.getCapabilities(kind)
```

### Parameter

- `kind`
  - : Ein String, der den Medientyp angibt, für den die Sendefähigkeiten des Browsers angefragt werden.
    Die unterstützten Medienarten sind: `audio` und `video`.

### Rückgabewert

Ein neues Objekt, das angibt, welche Fähigkeiten der Browser zum Senden der angegebenen Medienart über eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) hat.
Wenn der Browser keine Unterstützung für den angegebenen Medientyp hat, ist der zurückgegebene Wert `null`.

Das zurückgegebene Objekt hat die folgenden Eigenschaften:

- `codecs`

  - : Ein Array von Objekten, die jeweils die grundlegenden Fähigkeiten eines einzelnen [Medien-Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) beschreiben, die vom [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) unterstützt werden.

    > [!NOTE]
    > Das Array enthält spezielle Einträge, die die zugrunde liegenden Komponenten des Transports darstellen — diese können ignoriert werden, wenn Sie nur an den tatsächlich für die Medien verwendeten Codecs interessiert sind.
    > Diese werden im Abschnitt [Das Codecs-Array](#das_codecs-array) beschrieben.

    Jedes Codec-Objekt hat die folgenden Eigenschaften:

    - `channels` {{optional_inline}}
      - : Ein positiver ganzzahliger Wert, der die maximale Anzahl von Kanälen angibt, die vom Codec unterstützt werden; ein Codec, der nur Mono-Sound unterstützt, hätte zum Beispiel einen Wert von 1; Stereo-Codecs hätten einen Wert von 2 usw.
    - `clockRate`
      - : Ein positiver ganzzahliger Wert, der die Taktfrequenz des Codecs in Hertz (Hz) angibt.
        Die IANA pflegt eine [Liste von Codecs und deren Parameter](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktfrequenzen.
    - `mimeType`
      - : Ein String, der den MIME-Medientyp und Subtyp des Codecs angibt.
        Die für RTP verwendeten MIME-Typstrings unterscheiden sich von denen, die anderswo verwendet werden.
        Siehe {{RFC(3555, "", 4)}} für das vollständige IANA-Register dieser Typen.
        Siehe auch [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details zu potenziellen Codecs, die hier referenziert werden könnten.
    - `sdpFmtpLine` {{optional_inline}}
      - : Ein String, der das spezifische Parameterfeld aus der `a=fmtp`-Zeile im SDP angibt, das dem Codec entspricht, falls eine solche Zeile existiert.
        Wenn kein Parameterfeld vorhanden ist, wird diese Eigenschaft weggelassen.

- `headerExtensions`
  - : Ein Array von Objekten, die jeweils die URI einer [Header-Erweiterung](https://datatracker.ietf.org/doc/html/rfc3550#section-5.3.1) angeben, die für die aktuelle Art von Medien unterstützt wird.
    Jedes Objekt hat die folgende Eigenschaft:
    - `uri`
      - : Ein String, der die URI einer Header-Erweiterung angibt.
        Die URI ist formatiert wie in {{RFC(5285)}} beschrieben.

## Beschreibung

Als statische Funktion wird diese immer in der folgenden Form aufgerufen:

```js
capabilities = RTCRtpSender.getCapabilities("audio");
```

Die zurückgegebene Menge an Fähigkeiten ist die optimistischste mögliche Liste.
Es ist durchaus möglich, dass bestimmte Kombinationen von Optionen nicht funktionieren, wenn Sie versuchen, sie tatsächlich zu verwenden.

Der Aufruf von `RTCRtpSender.getCapabilities()` bereitet den Browser in keiner Weise darauf vor, Medien zu verarbeiten.
Es wird nichts geladen, abgerufen oder anderweitig vorbereitet.
Es ist ein Mittel, um festzustellen, was möglicherweise nutzbar ist, bevor Sie versuchen, auf Medien zuzugreifen.

Da die verfügbaren Fähigkeiten für längere Zeit stabil bleiben (Menschen installieren und deinstallieren Codecs und Ähnliches nicht sehr oft), können die Medienfähigkeiten ganz oder teilweise eine Methode zur Benutzeridentifizierung über Ursprungsgrenzen hinweg bieten.
Aus diesem Grund kann der Browser in kontext-sensitiven Datenschutzumgebungen beschließen, die Fähigkeiten zu verschleiern; dies kann beispielsweise dadurch erreicht werden, dass selten genutzte Codec-Konfigurationen weggelassen werden.

### Das Codecs-Array

Das `codecs`-Array ist ein Array von Objekten, das einen einzelnen Codec und seine grundlegenden Fähigkeiten beschreibt.
Der Browser wird nur unterschiedliche Fähigkeitskombinationen separat melden.
Wenn zwei Fähigkeiten-Sets als eines beschrieben werden können, werden sie es.
Das bedeutet, dass, zum Beispiel, wenn es zwei Einträge für den H.264-Codec gibt (identifiziert durch den [`mimeType`](#mimetype) "video/H264"), andere Werte in den Fähigkeitsobjekten angeben, wie sie sich in irgendeiner Weise unterscheiden.

Es gibt drei spezielle Einträge, die immer vorhanden sein sollten, und die grundlegende Komponenten des Transports darstellen. Diese Komponenten sind:

- RED (REDundante Audiodaten)
  - : Der Medientyp eines RED-Eintrags kann variieren, da es mehrere Versionen davon gibt, aber er wird mit `red` enden, wie `video/red` oder `video/fwdred`.
    Der Basisstandard für RED kann in {{RFC(2198)}} gefunden werden. Es kann mehrere Einträge für RED geben, wenn verschiedene Formen unterstützt werden; jeder wird in diesem Fall einen einzigartigen Medientyp haben.
- FEC (Forward Error Correction)
  - : Eine FEC-Komponente bearbeitet Fehlerkorrekturdaten; ihr Medientyp kann ebenfalls variieren, da es fortgeschrittene Versionen des Standards gibt, aber sie wird immer mit `fec` enden.
    Ein möglicher Wert ist `video/ulpfec` (ein allgemeines Fehlerkorrekturmodell).
    Es kann auch mehrere FEC-Einträge geben, wenn mehr als eine Form unterstützt wird.
- RTX (Retransmission)
  - : Diese Komponente ist für die erneute Übertragung von Daten verantwortlich; ihr Medientyp sollte `video/rtx` sein.
    Es wird nur einen Eintrag für RTX geben, und er wird keine [`sdpFmtpLine`](#sdpfmtpline)-Eigenschaft haben.

Diese Einträge sollten ignoriert werden, wenn nur an den mit den Medien verbundenen Codecs Interesse besteht.

## Beispiele

### Funktionsunterstützung

Sie können [`Object.hasOwn()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) verwenden, um zu prüfen, ob `RTCRtpSender.getCapabilities()` unterstützt wird:

```html hidden
<p id="log"></p>
```

```js hidden
const log = document.querySelector("#log");
```

```js
log.textContent = `RTCRtpSender.getCapabilities() supported: ${Object.hasOwn(
  RTCRtpSender,
  "getCapabilities",
)}`;
```

{{ EmbedLiveSample('Funktionsunterstützung', '100%', '30px') }}

### Überprüfung der Unterstützung eines bestimmten Codecs

Die folgende Funktion gibt ein `true` oder `false` zurück, das angibt, ob das Gerät das Senden von H.264-Video auf einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) unterstützt.

> [!NOTE]
> Da `RTCRtpSender.getCapabilities()` tatsächlich nur _wahrscheinliche_ Unterstützung anzeigt.
> Daher könnte die Unterstützung von H.264 trotzdem fehlschlagen, selbst nachdem eine positive Antwort von dieser Funktion erhalten wurde.

```js
function canSendH264() {
  let capabilities = RTCRtpSender.getCapabilities("video");

  capabilities.codecs.forEach((codec) => {
    if (codec.mimeType === "video/H264") {
      return true;
    }
  });
  return false;
}
```

### Abrufen aller Fähigkeiten

Dieses Codebeispiel zeigt, wie wir alle unterstützten Codecs und Header abrufen könnten.
Das HTML definiert eine Auswahlliste für die zwei Arten von Fähigkeiten und einen Protokollbereich.

```html
<select id="kind">
  <option value="audio">audio</option>
  <option value="video">video</option>
</select>
<textarea rows="40" cols="100" id="log"></textarea>
```

Das JavaScript definiert eine Funktion, die die Fähigkeiten für eine bestimmte "Art" protokolliert.
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
  const capabilities = RTCRtpSender.getCapabilities(`${kind}`);
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

{{ EmbedLiveSample('Abrufen aller Fähigkeiten', '100%', '500px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
