---
title: "RTCRtpReceiver: getCapabilities() statische Methode"
short-title: getCapabilities()
slug: Web/API/RTCRtpReceiver/getCapabilities_static
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Die _statische Methode_ **`RTCRtpReceiver.getCapabilities()`** gibt ein Objekt zurück, das die Codec- und Header-Erweiterungsfähigkeiten beschreibt, die von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekten auf dem aktuellen Gerät unterstützt werden.

Sie können auf ähnliche Weise die Fähigkeiten von [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekten ermitteln, indem Sie die statische Funktion [`RTCRtpSender.getCapabilities()`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static) aufrufen.

## Syntax

```js-nolint
RTCRtpReceiver.getCapabilities(kind)
```

### Parameter

- `kind`
  - : Ein String, der den Medientyp angibt, für den die Empfängerfähigkeiten des Browsers angefordert werden.
    Die unterstützten Medientypen sind: `audio` und `video`.

### Rückgabewert

Ein neues Objekt, das anzeigt, welche Fähigkeiten der Browser hat, um die angegebene Medienart über eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu empfangen.
Wenn der Browser keine Unterstützung für die gegebene Medienart `kind` hat, ist der zurückgegebene Wert `null`.

Das zurückgegebene Objekt hat die folgenden Eigenschaften:

- `codecs`

  - : Ein Array von Objekten, von denen jedes die grundlegenden Fähigkeiten eines einzelnen [Media-Codec](/de/docs/Web/Media/Formats/WebRTC_codecs) beschreibt, der vom [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) unterstützt wird.

    > [!NOTE]
    > Das Array enthält spezielle Einträge, die die zugrunde liegenden Komponenten des Transports darstellen — diese können ignoriert werden, wenn Sie nur an den tatsächlich für die Medien selbst verwendeten Codecs interessiert sind.
    > Diese werden unten im Abschnitt [Das `codecs`-Array](#das_`codecs`-array) beschrieben.

    Jedes Codec-Objekt hat die folgenden Eigenschaften:

    - `channels` {{optional_inline}}
      - : Ein positiver Ganzzahlenwert, der die maximale Anzahl von Kanälen angibt, die vom Codec unterstützt werden. Zum Beispiel hätte ein Codec, der nur Mono-Sound unterstützt, einen Wert von 1; Stereo-Codecs würden einen Wert von 2 haben, usw.
    - `clockRate`
      - : Eine positive Ganzzahl, die die Taktfrequenz des Codecs in Hertz (Hz) angibt.
        Die IANA führt eine [Liste von Codecs und deren Parametern](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktfrequenzen.
    - `mimeType`
      - : Ein String, der den MIME-Medientyp und den Subtyp des Codecs angibt.
        Die MIME-Type-Strings, die von RTP verwendet werden, unterscheiden sich von denen, die an anderer Stelle verwendet werden.
        Siehe {{RFC(3555, "", 4)}} für das vollständige IANA-Register dieser Typen.
        Weitere Informationen zu potenziellen Codecs, die hier referenziert werden können, finden Sie unter [Codecs used by WebRTC](/de/docs/Web/Media/Formats/WebRTC_codecs).
    - `sdpFmtpLine` {{optional_inline}}
      - : Ein String, der das formatbezogene Parameterfeld aus der `a=fmtp`-Zeile im SDP angibt, die dem Codec entspricht, falls eine solche Zeile existiert.
        Wenn kein Parameterfeld vorhanden ist, wird diese Eigenschaft weggelassen.

- `headerExtensions`

  - : Ein Array von Objekten, die jeweils die URI einer [Header-Erweiterung](https://datatracker.ietf.org/doc/html/rfc3550#section-5.3.1) angeben, die für die aktuelle Medienart `kind` unterstützt wird.
    Jedes Objekt hat die folgende Eigenschaft:

    - `uri`
      - : Ein String, der die URI einer Header-Erweiterung angibt.
        Die URI wird wie in {{RFC(5285)}} beschrieben formatiert.

## Beschreibung

Als statische Funktion wird diese immer in der Form aufgerufen:

```js
capabilities = RTCRtpReceiver.getCapabilities("audio");
```

Das zurückgegebene Satz von Fähigkeiten ist die optimistischste Liste, die möglich ist.
Es ist durchaus möglich, dass bestimmte Kombinationen von Optionen bei tatsächlicher Verwendung nicht funktionieren.

Das Aufrufen von `RTCRtpReceiver.getCapabilities()` bereitet den Browser in keiner Weise auf die Handhabung von Medien vor. Es wird nichts geladen, abgerufen oder anderweitig vorbereitet.
Es ist ein Mittel, um festzustellen, was möglicherweise nützlich sein könnte, bevor man versucht, Medien anzuzapfen.

Da die verfügbaren Fähigkeiten in der Regel für längere Zeit stabil bleiben (Menschen installieren und deinstallieren Codecs und Ähnliches nicht sehr oft), können die Medienfähigkeiten im Ganzen oder teilweise eine plattformübergreifende Methode zur Identifizierung eines Nutzers bieten.
Deshalb kann sich der Browser in datenschutzsensiblen Umgebungen dafür entscheiden, die Fähigkeiten zu verschleiern. Dies könnte beispielsweise gemacht werden, indem selten verwendete Codec-Konfigurationen weggelassen werden.

### Das `codecs`-Array

Das `codecs`-Array ist ein Array von Objekten, das einen einzelnen Codec und seine grundlegenden Fähigkeiten beschreibt.
Der Browser wird nur unterschiedliche Fähigkeitskombinationen separat melden.
Wenn zwei Sätze von Fähigkeiten als einer beschrieben werden können, werden sie dies auch sein.
Das bedeutet, dass zum Beispiel, wenn es zwei Einträge für den H.264-Codec gibt (wie durch den [`mimeType`](#mimetype) "video/H264" identifiziert), es andere Werte in den Fähigkeitsobjekten gibt, die darauf hinweisen, wie sie sich in irgendeiner Weise unterscheiden.

Es gibt drei spezielle Einträge, die immer vorhanden sein sollten und die zugrunde liegenden Komponenten des Transports repräsentieren. Diese Komponenten sind:

- RED (REDundant Audio Data)
  - : Der Medientyp eines RED-Eintrags kann aufgrund verschiedener Versionen variieren, endet aber immer auf `red`, wie `video/red` oder `video/fwdred`.
    Der Basis-RED-Standard kann in {{RFC(2198)}} gefunden werden. Es kann mehrere Einträge für RED geben, wenn verschiedene Formen unterstützt werden; jeder wird dann einen einzigartigen Medientyp haben.
- FEC (Forward Error Correction)
  - : Eine FEC-Komponente verarbeitet Fehlerkorrekturdaten; ihr Medientyp kann aufgrund fortgeschrittener Versionen des Standards ebenfalls variieren, endet aber immer auf `fec`.
    Ein möglicher Wert ist `video/ulpfec` (ein generisches Fehlerkorrekturmodell).
    Es kann auch mehrere FEC-Einträge geben, wenn mehr als eine Form unterstützt wird.
- RTX (Retransmission)
  - : Diese Komponente ist für die erneute Übertragung von Daten verantwortlich; ihr Medientyp sollte `video/rtx` sein.
    Es wird nur einen Eintrag für RTX geben, und er wird keine [`sdpFmtpLine`](#sdpfmtpline)-Eigenschaft haben.

Diese Einträge sollten ignoriert werden, wenn nur Codecs, die sich auf die Medien beziehen, von Interesse sind.

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

### Unterstützung für einen bestimmten Codec überprüfen

Die folgende Funktion gibt ein Boolean zurück, das angibt, ob das Gerät in der Lage ist, H.264-Video über eine WebRTC-Verbindung zu empfangen.

> [!NOTE]
> Da `RTCRtpReceiver.getCapabilities()` tatsächlich nur die _wahrscheinliche_ Unterstützung anzeigt, kann der Versuch, H.264-Video zu empfangen, trotzdem fehlschlagen, selbst nachdem Sie von dieser Funktion eine positive Antwort erhalten haben.

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

Dieses Codebeispiel zeigt, wie wir alle unterstützten Codecs und Header abrufen können.
Das HTML definiert eine Auswahlliste für die beiden Arten von Fähigkeiten und ein Protokollbereich.

```html
<select id="kind">
  <option value="audio">audio</option>
  <option value="video">video</option>
</select>
<textarea rows="40" cols="100" id="log"></textarea>
```

Das JavaScript definiert eine Funktion, um die Fähigkeiten für eine bestimmte "Art" zu protokollieren.
Dies wird zunächst mit dem Wert `audio` aufgerufen.
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
    log.textContent += `   channels: ${codec.channels}\n`; //max channels - e.g. 2 is stereo
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
