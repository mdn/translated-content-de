---
title: "RTCRtpReceiver: getCapabilities() Static-Methode"
short-title: getCapabilities()
slug: Web/API/RTCRtpReceiver/getCapabilities_static
l10n:
  sourceCommit: fd2acb039cc1caee4af10f76ffb839c8da7da5b8
---

{{APIRef("WebRTC")}}

Die _statische Methode_ **`RTCRtpReceiver.getCapabilities()`** gibt ein Objekt zurück, das die Codec- und Header-Erweiterungskapazitäten beschreibt, die von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekten auf dem aktuellen Gerät unterstützt werden.

Sie können auf ähnliche Weise die Fähigkeiten der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekte abrufen, indem Sie die statische Funktion [`RTCRtpSender.getCapabilities()`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static) aufrufen.

## Syntax

```js-nolint
RTCRtpReceiver.getCapabilities(kind)
```

### Parameter

- `kind`
  - : Ein Zeichenfolgenwert, der den Medientyp angibt, für den die Empfängerkapazitäten des Browsers angefordert werden.
    Die unterstützten Medientypen sind: `audio` und `video`.

### Rückgabewert

Ein neues Objekt, das anzeigt, welche Fähigkeiten der Browser für den Empfang des angegebenen Medientyps über eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) hat.
Wenn der Browser keine Unterstützung für den angegebenen Medien-`kind` hat, ist der zurückgegebene Wert `null`.

Das zurückgegebene Objekt hat die folgenden Eigenschaften:

- `codecs`
  - : Ein Array von Objekten, die jeweils die grundlegenden Fähigkeiten eines einzelnen [Media-Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) beschreiben, der von dem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) unterstützt wird.

    > [!NOTE]
    > Das Array enthält spezielle Einträge, die die zugrunde liegenden Komponenten des Transports repräsentieren — diese können ignoriert werden, wenn Sie sich nur für die tatsächlich für die Medien verwendeten Codecs interessieren.
    > Diese werden unten im Abschnitt [Das Codec-Array](#das_codec-array) beschrieben.

    Jedes Codec-Objekt hat die folgenden Eigenschaften:
    - `channels` {{optional_inline}}
      - : Ein positiver Ganzzahlwert, der die maximale Anzahl an Kanälen angibt, die vom Codec unterstützt werden; zum Beispiel hätte ein Codec, der nur Mono-Sound unterstützt, einen Wert von 1; Stereo-Codecs hätten einen Wert von 2, usw.
    - `clockRate`
      - : Ein positiver Ganzzahlwert, der die Taktfrequenz des Codecs in Hertz (Hz) angibt.
        Die IANA führt eine [Liste von Codecs und ihren Parametern](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktfrequenzen.
    - `mimeType`
      - : Eine Zeichenfolge, die den MIME-Medientyp und -Subtyp des Codecs angibt.
        Die in RTP verwendeten MIME-Typzeichenfolgen unterscheiden sich von denen, die anderswo verwendet werden.
        Siehe {{RFC(3555, "", 4)}} für das vollständige IANA-Register dieser Typen.
        Siehe auch [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details zu potenziellen Codecs, die hier referenziert werden könnten.
    - `sdpFmtpLine` {{optional_inline}}
      - : Eine Zeichenfolge, die das format-spezifische Parametersfeld aus der `a=fmtp`-Zeile im SDP angibt, die dem Codec entspricht, falls eine solche Zeile existiert.
        Wenn es kein Parametersfeld gibt, wird diese Eigenschaft weggelassen.

- `headerExtensions`
  - : Ein Array von Objekten, die jeweils die URI einer [Header-Erweiterung](https://datatracker.ietf.org/doc/html/rfc3550#section-5.3.1) bereitstellen, die für den aktuellen Medientyp-`kind` unterstützt wird.
    Jedes Objekt hat die folgende Eigenschaft:
    - `uri`
      - : Eine Zeichenfolge, die die URI einer Header-Erweiterung angibt.
        Die URI ist formatiert, wie in {{RFC(5285)}} beschrieben.

## Beschreibung

Als statische Funktion wird diese immer in der Form aufgerufen:

```js
capabilities = RTCRtpReceiver.getCapabilities("audio");
```

Das zurückgegebene Set an Fähigkeiten ist die optimistischste mögliche Liste.
Es ist durchaus möglich, dass bestimmte Kombinationen von Optionen nicht funktionieren, wenn Sie versuchen, sie zu verwenden.

Der Aufruf von `RTCRtpReceiver.getCapabilities()` bereitet den Browser in keiner Weise vor, Medien zu behandeln. Nichts wird geladen, abgerufen oder anderweitig vorbereitet.
Es ist ein Mittel, um festzustellen, was möglicherweise verwendbar ist, bevor Sie versuchen, Medien zu nutzen.

Da das vorhandene Set an Fähigkeiten tendenziell für längere Zeit stabil bleibt (Leute installieren und deinstallieren Codecs und dergleichen nicht sehr oft), können Medienfähigkeiten in Gänze oder in Teilen eine methodische Möglichkeit bieten, einen Benutzer zu identifizieren.
Aus diesem Grund kann der Browser in datenschutzsensiblen Kontexten entscheiden, die Fähigkeiten zu verschleiern; dies könnte beispielsweise durch das Auslassen selten genutzter Codec-Konfigurationen erfolgen.

### Das Codec-Array

Das `codecs`-Array ist ein Array von Objekten, das einen einzelnen Codec und seine grundlegenden Fähigkeiten beschreibt.
Der Browser meldet nur unterschiedliche Fähigkeitskombinationen separat.
Wenn zwei Sets von Fähigkeiten als eines beschrieben werden können, werden sie das auch.
Das bedeutet, dass, wenn es zwei Einträge für den H.264-Codec gibt (wie durch den [`mimeType`](#mimetype), der "video/H264" ist, identifiziert), es andere Werte in den Fähigkeiten-Objekten gibt, die anzeigen, wie sie sich in gewisser Weise unterscheiden.

Es gibt drei spezielle Einträge, die immer vorhanden sein sollten und die zugrunde liegenden Komponenten des Transports repräsentieren. Diese Komponenten sind:

- RED (REDundant Audio Data)
  - : Der Medientyp eines RED-Eintrags kann variieren, da es mehrere Versionen davon gibt, aber er endet mit `red`, wie `video/red` oder `video/fwdred`.
    Der grundlegende RED-Standard ist in {{RFC(2198)}} zu finden. Es kann mehrere Einträge für RED geben, wenn verschiedene Formen unterstützt werden; in diesem Fall hat jeder einen einzigartigen Medientyp.
- FEC (Forward Error Correction)
  - : Eine FEC-Komponente behandelt Fehlerkorrekturdaten; ihr Medientyp kann ebenfalls variieren, da es erweiterte Versionen des Standards gibt, aber er endet immer mit `fec`.
    Ein möglicher Wert ist `video/ulpfec` (ein generisches Fehlerverbindungsmodell).
    Es kann auch mehrere FEC-Einträge geben, wenn mehr als eine Form unterstützt wird.
- RTX (Retransmission)
  - : Diese Komponente ist verantwortlich für die erneute Übertragung von Daten; ihr Medientyp sollte `video/rtx` sein.
    Es wird nur einen Eintrag für RTX geben, und es wird keine [`sdpFmtpLine`](#sdpfmtpline)-Eigenschaft haben.

Diese Einträge sollten ignoriert werden, wenn nur an Mediencodecs interessiert ist.

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

### Überprüfung der Unterstützung eines bestimmten Codecs

Die unten stehende Funktion gibt einen Booleschen Wert zurück, der angibt, ob das Gerät H.264-Video in einer WebRTC-Verbindung empfangen kann.

> [!NOTE]
> Da `RTCRtpReceiver.getCapabilities()` tatsächlich nur _wahrscheinliche_ Unterstützung anzeigt, könnte der Versuch, H.264-Video zu empfangen, auch nach einer positiven Antwort von dieser Funktion fehlschlagen.

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

### Abrufen aller Fähigkeiten

Dieses Codebeispiel zeigt, wie wir alle unterstützten Codecs und Header erhalten könnten.
Das HTML definiert eine Auswahlliste für die beiden Arten von Fähigkeiten und einen Logbereich.

```html
<select id="kind">
  <option value="audio">audio</option>
  <option value="video">video</option>
</select>
<textarea rows="40" cols="100" id="log"></textarea>
```

Das JavaScript definiert eine Funktion, um die Fähigkeiten für einen bestimmten "kind" zu protokollieren.
Diese wird anfänglich mit dem Wert `audio` aufgerufen.
Ein Listener aktualisiert den Wert, wenn die Auswahl der Liste `kind` geändert wird.

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
