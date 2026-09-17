---
title: "RTCRtpReceiver: statische Methode getCapabilities()"
short-title: getCapabilities()
slug: Web/API/RTCRtpReceiver/getCapabilities_static
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

{{APIRef("WebRTC")}}

Die _statische Methode_ **`RTCRtpReceiver.getCapabilities()`** gibt ein Objekt zurück, das die von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekten auf dem aktuellen Gerät unterstützten Codec- und Header-Erweiterungsfunktionen beschreibt.

Auf ähnliche Weise können Sie die Fähigkeiten von [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekten abrufen, indem Sie die statische Funktion [`RTCRtpSender.getCapabilities()`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static) aufrufen.

## Syntax

```js-nolint
RTCRtpReceiver.getCapabilities(kind)
```

### Parameter

- `kind`
  - : Ein String, der den Medientyp angibt, für den die Receiver-Fähigkeiten des Browsers angefordert werden.
    Die unterstützten Medienarten sind: `audio` und `video`.

### Rückgabewert

Ein neues Objekt, das angibt, welche Fähigkeiten der Browser für den Empfang der angegebenen Medienart über eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) besitzt.
Wenn der Browser keine Unterstützung für das angegebene Medien-`kind` bietet, ist der zurückgegebene Wert `null`.

Das zurückgegebene Objekt hat die folgenden Eigenschaften:

- `codecs`
  - : Ein Array von Objekten, die jeweils die grundlegenden Fähigkeiten eines einzelnen von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) unterstützten [Medien-Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) beschreiben.

    > [!NOTE]
    > Das Array enthält spezielle Einträge, die die zugrunde liegenden Komponenten des Transports darstellen — diese können ignoriert werden, wenn Sie nur an den tatsächlich für die Medien selbst verwendeten Codecs interessiert sind.
    > Diese werden unten im Abschnitt [Das `codecs`-Array](#das_`codecs`-array) beschrieben.

    Jedes Codec-Objekt hat die folgenden Eigenschaften:
    - `channels` {{optional_inline}}
      - : Ein positiver ganzzahliger Wert, der die maximale Anzahl der vom Codec unterstützten Kanäle angibt; beispielsweise hätte ein Codec, der nur Mono-Audio unterstützt, den Wert 1; Stereo-Codecs hätten den Wert 2 usw.
    - `clockRate`
      - : Eine positive Ganzzahl, die die Taktfrequenz des Codecs in Hertz (Hz) angibt.
        Die IANA verwaltet eine [Liste von Codecs und ihren Parametern](https://www.iana.org/assignments/rtp-parameters#rtp-parameters-1), einschließlich ihrer Taktfrequenzen.
    - `mimeType`
      - : Ein String, der den MIME-Medientyp und -Subtyp des Codecs angibt.
        Die von RTP verwendeten MIME-Typ-Strings unterscheiden sich von den an anderer Stelle verwendeten.
        Siehe {{RFC(3555, "", 4)}} für das vollständige IANA-Register dieser Typen.
        Siehe auch [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details zu möglichen Codecs, auf die hier verwiesen werden könnte.
    - `sdpFmtpLine` {{optional_inline}}
      - : Ein String, der das Feld mit den formatspezifischen Parametern aus der `a=fmtp`-Zeile im SDP angibt, die dem Codec entspricht, sofern eine solche Zeile vorhanden ist.
        Wenn kein Parameterfeld vorhanden ist, wird diese Eigenschaft weggelassen.

- `headerExtensions`
  - : Ein Array von Objekten, die jeweils die URI einer für die aktuelle Medienart `kind` unterstützten [Header-Erweiterung](https://datatracker.ietf.org/doc/html/rfc3550#section-5.3.1) bereitstellen.
    Jedes Objekt hat die folgende Eigenschaft:
    - `uri`
      - : Ein String, der die URI einer Header-Erweiterung angibt.
        Die URI ist wie in {{RFC(5285)}} beschrieben formatiert.

## Beschreibung

Als statische Funktion wird diese immer in folgender Form aufgerufen:

```js
capabilities = RTCRtpReceiver.getCapabilities("audio");
```

Der zurückgegebene Satz von Fähigkeiten ist die optimistischste mögliche Liste.
Es ist durchaus möglich, dass bestimmte Kombinationen von Optionen nicht funktionieren, wenn Sie tatsächlich versuchen, sie zu verwenden.

Der Aufruf von `RTCRtpReceiver.getCapabilities()` bereitet den Browser in keiner Weise auf die Verarbeitung von Medien vor. Es wird nichts geladen, abgerufen oder anderweitig vorbereitet.
Es handelt sich um eine Möglichkeit, vor dem Versuch, auf Medien zuzugreifen, festzustellen, was möglicherweise verwendbar ist.

Da die verfügbaren Fähigkeiten über längere Zeiträume hinweg meist stabil bleiben (Menschen installieren und deinstallieren Codecs und Ähnliches nicht sehr häufig), können die Medienfähigkeiten ganz oder teilweise eine ursprungsübergreifende Methode zur Identifizierung eines Benutzers bereitstellen.
Aus diesem Grund kann der Browser in datenschutzsensiblen Kontexten entscheiden, die Fähigkeiten zu verschleiern; dies könnte beispielsweise durch das Weglassen selten verwendeter Codec-Konfigurationen geschehen.

### Das `codecs`-Array

Das `codecs`-Array ist ein Array von Objekten, das einen einzelnen Codec und seine grundlegenden Fähigkeiten beschreibt.
Der Browser meldet nur unterschiedliche Kombinationen von Fähigkeiten separat.
Wenn zwei Sätze von Fähigkeiten als einer beschrieben werden können, werden sie als einer beschrieben.
Das bedeutet beispielsweise, dass, wenn es zwei Einträge für den H.264-Codec gibt (identifiziert dadurch, dass [`mimeType`](#mimetype) „video/H264“ ist), andere Werte in den Fähigkeiten-Objekten anzeigen, wie sie sich in irgendeiner Weise unterscheiden.

Es gibt drei spezielle Einträge, die immer vorhanden sein sollten und zugrunde liegende Komponenten des Transports darstellen. Diese Komponenten sind:

- RED (REDundant Audio Data)
  - : Der Medientyp eines RED-Eintrags kann variieren, da es mehrere Versionen davon gibt, endet jedoch mit `red`, beispielsweise `video/red` oder `video/fwdred`.
    Der grundlegende RED-Standard ist in {{RFC(2198)}} zu finden. Es kann mehrere Einträge für RED geben, wenn unterschiedliche Formen unterstützt werden; in diesem Fall hat jeder einen eindeutigen Medientyp.
- FEC (Forward Error Correction)
  - : Eine FEC-Komponente verarbeitet Fehlerkorrekturdaten; ihr Medientyp kann ebenfalls variieren, da erweiterte Versionen des Standards verfügbar sind, endet jedoch immer mit `fec`.
    Ein möglicher Wert ist `video/ulpfec` (ein generisches Fehlerverbindungsmodell).
    Es kann auch mehrere FEC-Einträge geben, wenn mehr als eine Form unterstützt wird.
- RTX (Retransmission)
  - : Diese Komponente ist für die erneute Übertragung von Daten verantwortlich; ihr Medientyp sollte `video/rtx` sein.
    Es gibt nur einen Eintrag für RTX, und dieser hat keine [`sdpFmtpLine`](#sdpfmtpline)-Eigenschaft.

Diese Einträge sollten ignoriert werden, wenn nur an den Medien zugehörigen Codecs Interesse besteht.

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

{{ EmbedLiveSample('Feature support', '100%', '30px') }}

### Unterstützung für einen bestimmten Codec prüfen

Die folgende Funktion gibt einen booleschen Wert zurück, der angibt, ob das Gerät den Empfang von H.264-Video über eine WebRTC-Verbindung unterstützt.

> [!NOTE]
> Da `RTCRtpReceiver.getCapabilities()` tatsächlich nur _wahrscheinliche_ Unterstützung angibt, kann der Versuch, H.264-Video zu empfangen, selbst nach einer positiven Antwort dieser Funktion weiterhin fehlschlagen.

```js
function canReceiveH264() {
  const capabilities = RTCRtpReceiver.getCapabilities("video");

  return capabilities.codecs.some((codec) => codec.mimeType === "video/H264");
}
```

### Alle Fähigkeiten abrufen

Dieses Codebeispiel zeigt, wie alle unterstützten Codecs und Header abgerufen werden können.
Das HTML definiert eine Auswahlliste für die beiden Arten von Fähigkeiten sowie einen Protokollbereich.

```html
<select id="kind">
  <option value="audio">audio</option>
  <option value="video">video</option>
</select>
<textarea rows="40" cols="100" id="log"></textarea>
```

Das JavaScript definiert eine Funktion, um die Fähigkeiten für eine bestimmte „Art“ zu protokollieren.
Diese wird zunächst mit dem Wert `audio` aufgerufen.
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
