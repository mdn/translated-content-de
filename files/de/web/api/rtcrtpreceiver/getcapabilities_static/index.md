---
title: "RTCRtpReceiver: getCapabilities() statische Methode"
short-title: getCapabilities()
slug: Web/API/RTCRtpReceiver/getCapabilities_static
l10n:
  sourceCommit: 308f0db4466bb95ff19c004f19c327af707fca98
---

{{APIRef("WebRTC")}}

Die _statische Methode_ **`RTCRtpReceiver.getCapabilities()`** gibt ein Objekt zurück, das die Codec- und Header-Erweiterungskapazitäten beschreibt, die von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekten auf dem aktuellen Gerät unterstützt werden.

Sie können in ähnlicher Weise die Fähigkeiten von [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekten ermitteln, indem Sie die statische Funktion [`RTCRtpSender.getCapabilities()`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static) aufrufen.

## Syntax

```js-nolint
RTCRtpReceiver.getCapabilities(kind)
```

### Parameter

- `kind`
  - : Ein String, der den Medientyp angibt, für den die Empfangsfähigkeiten des Browsers angefragt werden. Die unterstützten Medienarten sind: `audio` und `video`.

### Rückgabewert

Ein neues Objekt, das angibt, welche Fähigkeiten der Browser hat, um die angegebene Art von Medien über eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu empfangen. Wenn der Browser keine Unterstützung für die angegebene Medienart `kind` hat, ist der zurückgegebene Wert `null`.

Das zurückgegebene Objekt hat die folgenden Eigenschaften:

- `codecs`
  - : Ein Array von Objekten, die jeweils die grundlegenden Fähigkeiten eines einzelnen [Medien-Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) beschreiben, der vom [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) unterstützt wird.

    > [!NOTE]
    > Das Array enthält spezielle Einträge, die die zugrunde liegenden Komponenten des Transports repräsentieren — diese können ignoriert werden, wenn Sie sich nur für die tatsächlichen Codecs interessieren, die für die Medien selbst verwendet werden.
    > Diese werden unten im Abschnitt [Das Codecs-Array](#das_codecs-array) beschrieben.

    Jedes Codec-Objekt hat die folgenden Eigenschaften:
    - `channels` {{optional_inline}}
      - : Ein positiver Ganzzahlwert, der die maximale Anzahl von Kanälen angibt, die vom Codec unterstützt werden; zum Beispiel hätte ein Codec, der nur Mono-Sound unterstützt, einen Wert von 1; Stereo-Codecs hätten einen Wert von 2 usw.
    - `clockRate`
      - : Eine positive Ganzzahl, die die Clock-Rate des Codecs in Hertz (Hz) angibt. Die IANA führt eine [Liste von Codecs und deren Parametern](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Clock-Raten.
    - `mimeType`
      - : Ein String, der den MIME-Medientyp und Subtyp des Codecs angibt. Die MIME-Typ-Strings, die von RTP verwendet werden, unterscheiden sich von denen, die anderweitig verwendet werden. Siehe {{RFC(3555, "", 4)}} für das vollständige IANA-Register dieser Typen. Siehe auch [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details zu möglichen Codecs, die hier referenziert werden könnten.
    - `sdpFmtpLine` {{optional_inline}}
      - : Ein String, der das format-spezifische Parameterfeld von der `a=fmtp`-Zeile in der SDP angibt, die dem Codec entspricht, falls eine solche Zeile existiert. Wenn es kein Parameterfeld gibt, wird diese Eigenschaft ausgelassen.

- `headerExtensions`
  - : Ein Array von Objekten, die jeweils die URI einer [Header-Erweiterung](https://datatracker.ietf.org/doc/html/rfc3550#section-5.3.1) bereitstellen, die für die aktuelle Medienart `kind` unterstützt wird. Jedes Objekt hat die folgende Eigenschaft:
    - `uri`
      - : Ein String, der die URI einer Header-Erweiterung angibt. Die URI ist wie in {{RFC(5285)}} beschrieben formatiert.

## Beschreibung

Als statische Funktion wird diese immer in der Form aufgerufen:

```js
capabilities = RTCRtpReceiver.getCapabilities("audio");
```

Das zurückgegebene Set von Fähigkeiten ist die optimistischste mögliche Liste. Es ist durchaus möglich, dass bestimmte Kombinationen von Optionen fehlschlagen, wenn Sie versuchen, sie tatsächlich zu verwenden.

Der Aufruf von `RTCRtpReceiver.getCapabilities()` bereitet den Browser in keiner Weise vor, Medien zu verarbeiten. Nichts wird geladen, abgerufen oder anderweitig vorbereitet. Es ist ein Mittel, um zu bestimmen, was möglicherweise vor dem Versuch, auf Medien zuzugreifen, verwendbar ist.

Da das Set an verfügbaren Fähigkeiten tendenziell für längere Zeit stabil bleibt (Menschen installieren und deinstallieren Codecs und Ähnliches nicht sehr häufig), können die Medienfähigkeiten ganz oder teilweise eine methodeübergreifende Methode zur Identifizierung eines Benutzers bieten. Aus diesem Grund kann der Browser in datenschutzsensiblen Kontexten wählen, die Fähigkeiten zu verschleiern; dies könnte zum Beispiel durch das Auslassen von selten genutzten Codec-Konfigurationen geschehen.

### Das Codecs-Array

Das `codecs`-Array ist ein Array von Objekten, das einen einzelnen Codec und seine grundlegenden Fähigkeiten beschreibt. Der Browser wird nur unterschiedliche Fähigkeitskombinationen separat melden. Wenn zwei Sätze von Fähigkeiten als einer beschrieben werden können, werden sie es auch. Dies bedeutet zum Beispiel, dass, wenn es zwei Einträge für den H.264-Codec gibt (wie durch den [`mimeType`](#mimetype) "video/H264" identifiziert), es andere Werte in den Fähigkeitenobjekten gibt, die angeben, wie sie sich in irgendeiner Weise unterscheiden.

Es gibt drei spezielle Einträge, die immer vorhanden sein sollten und die zugrunde liegenden Komponenten des Transports repräsentieren. Diese Komponenten sind:

- RED (REDundant Audio Data)
  - : Der Medientyp eines RED-Eintrags kann variieren, da es mehrere Versionen davon gibt, aber er wird mit `red` enden, wie zum Beispiel `video/red` oder `video/fwdred`. Der grundlegende RED-Standard ist in {{RFC(2198)}} zu finden. Es kann mehrere Einträge für RED geben, wenn verschiedene Formen unterstützt werden; in diesem Fall wird jeder einen einzigartigen Medientyp haben.
- FEC (Forward Error Correction)
  - : Eine FEC-Komponente verarbeitet Fehlerkorrekturdaten; ihr Medientyp kann ebenfalls variieren, da es fortgeschrittene Versionen des Standards gibt, aber sie wird immer mit `fec` enden. Ein möglicher Wert ist `video/ulpfec` (ein generisches Modell für Fehlerverbindung). Es kann auch mehrere FEC-Einträge geben, wenn mehr als eine Form unterstützt wird.
- RTX (Retransmission)
  - : Diese Komponente ist verantwortlich für die erneute Übertragung von Daten; ihr Medientyp sollte `video/rtx` sein. Es wird nur einen Eintrag für RTX geben, und er wird keine [`sdpFmtpLine`](#sdpfmtpline)-Eigenschaft haben.

Diese Einträge sollten ignoriert werden, wenn nur Codecs, die mit den Medien zusammenhängen, von Interesse sind.

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

### Überprüfung der Unterstützung für einen bestimmten Codec

Die folgende Funktion gibt einen booleschen Wert zurück, der angibt, ob das Gerät in der Lage ist, H.264-Video über eine WebRTC-Verbindung zu empfangen oder nicht.

> [!NOTE]
> Da `RTCRtpReceiver.getCapabilities()` tatsächlich nur _wahrscheinliche_ Unterstützung anzeigt, könnte der Versuch, H.264-Video zu empfangen, trotzdem fehlschlagen, selbst nachdem eine positive Antwort von dieser Funktion erhalten wurde.

```js
function canReceiveH264() {
  let capabilities = RTCRtpReceiver.getCapabilities("video");

  return capabilities.codecs.some((codec) => {
    return codec.mimeType === "video/H264";
  });
}
```

### Ermitteln aller Fähigkeiten

Dieses Codebeispiel zeigt, wie wir alle unterstützten Codecs und Header abrufen können. Das HTML definiert eine Auswahlliste für die beiden Arten von Fähigkeiten und ein Protokollbereich.

```html
<select id="kind">
  <option value="audio">audio</option>
  <option value="video">video</option>
</select>
<textarea rows="40" cols="100" id="log"></textarea>
```

Das JavaScript definiert eine Funktion, um die Fähigkeiten für eine bestimmte "Art" zu protokollieren. Diese wird initial mit dem Wert `audio` aufgerufen. Ein Listener aktualisiert den Wert, wenn die Auswahl `kind` geändert wird.

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
