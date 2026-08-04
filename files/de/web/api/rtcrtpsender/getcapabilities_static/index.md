---
title: "RTCRtpSender: getCapabilities() statische Methode"
short-title: getCapabilities()
slug: Web/API/RTCRtpSender/getCapabilities_static
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

{{APIRef("WebRTC")}}

Die _statische Methode_ **`RTCRtpSender.getCapabilities()`** gibt ein Objekt zurück, das die Codecs und Header-Erweiterungen beschreibt, die vom [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) unterstützt werden.

Sie können ebenso die Fähigkeiten von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekten auf dem Gerät abrufen, indem Sie die statische Funktion [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static) aufrufen.

## Syntax

```js-nolint
RTCRtpSender.getCapabilities(kind)
```

### Parameter

- `kind`
  - : Ein String, der die Art von Medien angibt, für die die Sendefähigkeiten des Browsers angefordert werden.
    Die unterstützten Medienarten sind: `audio` und `video`.

### Rückgabewert

Ein neues Objekt, das angibt, welche Fähigkeiten der Browser zum Senden der angegebenen Medienart über eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) hat.
Wenn der Browser keine Unterstützung für die angegebene Medienart `kind` hat, ist der zurückgegebene Wert `null`.

Das zurückgegebene Objekt hat die folgenden Eigenschaften:

- `codecs`
  - : Ein Array von Objekten, die jeweils die grundlegenden Fähigkeiten eines einzelnen [Medien-Codec](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) beschreiben, der vom [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) unterstützt wird.

    > [!NOTE]
    > Das Array enthält spezielle Einträge, die die zugrunde liegenden Komponenten des Transports darstellen — diese können ignoriert werden, wenn Sie nur an den tatsächlich verwendeten Codecs für die Medien selbst interessiert sind.
    > Diese sind im Abschnitt [Das Codecs-Array](#das_codecs-array) unten beschrieben.

    Jedes Codec-Objekt hat die folgenden Eigenschaften:
    - `channels` {{optional_inline}}
      - : Ein positiver ganzzahliger Wert, der die maximale Anzahl der vom Codec unterstützten Kanäle angibt; ein Codec, der nur Mono-Sound unterstützt, hätte zum Beispiel einen Wert von 1; Stereo-Codecs hätten einen Wert von 2 usw.
    - `clockRate`
      - : Eine positive ganze Zahl, die die Taktfrequenz des Codecs in Hertz (Hz) angibt.
        Die IANA pflegt eine [Liste der Codecs und ihrer Parameter](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktfrequenzen.
    - `mimeType`
      - : Ein String, der den MIME-Medientyp und Subtyp des Codecs angibt.
        Die MIME-Typ-Strings, die von RTP verwendet werden, unterscheiden sich von denen, die anderswo verwendet werden.
        Siehe {{RFC(3555, "", 4)}} für das vollständige IANA-Register dieser Typen.
        Siehe auch [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details zu potenziellen Codecs, die hier referenziert werden könnten.
    - `sdpFmtpLine` {{optional_inline}}
      - : Ein String, der das Format-spezifische Parameterfeld aus der `a=fmtp` Zeile in der SDP angibt, die dem Codec entspricht, falls eine solche Linie existiert.
        Wenn es kein Parameterfeld gibt, wird diese Eigenschaft weggelassen.

- `headerExtensions`
  - : Ein Array von Objekten, die jeweils die URI einer [Header-Erweiterung](https://datatracker.ietf.org/doc/html/rfc3550#section-5.3.1) angeben, die für die aktuelle Medienart `kind` unterstützt wird.
    Jedes Objekt hat die folgende Eigenschaft:
    - `uri`
      - : Ein String, der die URI einer Header-Erweiterung angibt.
        Die URI ist formatiert wie in {{RFC(5285)}} beschrieben.

## Beschreibung

Als statische Funktion wird diese immer in der Form aufgerufen:

```js
capabilities = RTCRtpSender.getCapabilities("audio");
```

Das zurückgegebene Set an Fähigkeiten ist die optimistischste mögliche Liste.
Es ist durchaus möglich, dass bestimmte Kombinationen von Optionen nicht funktionieren, wenn Sie versuchen, sie zu verwenden.

Der Aufruf von `RTCRtpSender.getCapabilities()` bereitet den Browser in keiner Weise auf die Verarbeitung von Medien vor.
Es wird nichts geladen, abgerufen oder anderweitig vorbereitet.
Es ist ein Mittel, um festzustellen, was möglicherweise nutzbar ist, bevor Medienzugriffe versucht werden.

Da das verfügbare Set an Fähigkeiten tendenziell über längere Zeit stabil bleibt (Benutzer installieren und deinstallieren Codecs und Ähnliches nicht sehr oft), können die Medienfähigkeiten ganz oder teilweise eine methode für die geräteübergreifende Benutzererkennung darstellen.
Aus diesem Grund kann der Browser in datenschutzsensiblen Kontexten entscheiden, die Fähigkeiten zu verschleiern; dies könnte beispielsweise durch das Weglassen selten verwendeter Codec-Konfigurationen geschehen.

### Das Codecs-Array

Das `codecs`-Array ist ein Array von Objekten, das einen einzelnen Codec und seine grundlegenden Fähigkeiten beschreibt.
Der Browser wird nur unterschiedliche Fähigkeit-Kombinationen separat melden.
Wenn zwei Satz von Fähigkeiten als eine beschrieben werden können, werden sie es sein.
Das bedeutet, dass, wenn es zwei Einträge für den H.264-Codec gibt (wie durch den [`mimeType`](#mimetype) mit "video/H264" erkannt), es andere Werte in den Fähigkeiten-Objekten gibt, die anzeigen, wie sie sich auf irgendeine Weise unterscheiden.

Es gibt drei spezielle Einträge, die immer vorhanden sein sollten, und die die zugrunde liegenden Komponenten des Transports darstellen. Diese Komponenten sind:

- RED (REDundant Audio Data)
  - : Der Medientyp eines RED-Eintrags kann variieren, da es mehrere Versionen davon gibt, aber er endet immer mit `red`, wie etwa `video/red` oder `video/fwdred`.
    Der grundlegende RED-Standard findet sich in {{RFC(2198)}}. Es kann mehrere Einträge für RED geben, wenn verschiedene Formen unterstützt werden; jeder wird in diesem Fall eine eindeutige Medienart haben.
- FEC (Forward Error Correction)
  - : Eine FEC-Komponente verarbeitet Fehlerkorrekturdaten; ihr Medientyp kann ebenfalls variieren, da es fortgeschrittene Versionen des Standards gibt, aber sie endet immer mit `fec`.
    Ein möglicher Wert ist `video/ulpfec` (ein allgemeines Fehlerverbindungsmodell).
    Es kann auch mehrere FEC-Einträge geben, wenn mehr als eine Form unterstützt wird.
- RTX (Retransmission)
  - : Diese Komponente ist für die erneute Übertragung von Daten verantwortlich; ihr Medientyp sollte `video/rtx` sein.
    Es wird nur einen Eintrag für RTX geben, und es wird keine [`sdpFmtpLine`](#sdpfmtpline) Eigenschaft haben.

Diese Einträge sollten ignoriert werden, wenn nur Codecs, die mit den Medien in Verbindung stehen, von Interesse sind.

## Beispiele

### Unterstützungsfunktion

Sie können [`Object.hasOwn()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) verwenden, um zu überprüfen, ob `RTCRtpSender.getCapabilities()` unterstützt wird:

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

{{ EmbedLiveSample('Feature support', '100%', '30px') }}

### Prüfung der Unterstützung eines bestimmten Codecs

Die Funktion unten gibt ein `true` oder `false` zurück, das angibt, ob das Gerät das Senden von H.264-Video mit einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) unterstützt.

> [!NOTE]
> Da `RTCRtpSender.getCapabilities()` tatsächlich nur _wahrscheinliche_ Unterstützung anzeigt.
> Daher könnte die Unterstützung für H.264 trotz einer positiven Antwort dieser Funktion fehlschlagen.

```js
function canSendH264() {
  const capabilities = RTCRtpSender.getCapabilities("video");

  return capabilities.codecs.some((codec) => codec.mimeType === "video/H264");
}
```

### Abruf aller Fähigkeiten

Dieses Code-Beispiel zeigt, wie wir alle unterstützten Codecs und Header erhalten könnten.
Das HTML definiert eine Auswahl für die beiden Arten von Fähigkeiten und einen Logbereich.

```html
<select id="kind">
  <option value="audio">audio</option>
  <option value="video">video</option>
</select>
<textarea rows="40" cols="100" id="log"></textarea>
```

Das JavaScript definiert eine Funktion, um die Fähigkeiten für eine bestimmte "Art" zu protokollieren.
Dies wird initial mit dem Wert `audio` aufgerufen.
Ein Listener aktualisiert den Wert, wenn die Auswahl `kind` geändert wird.

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

{{ EmbedLiveSample('Getting all capabilities', '100%', '500px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
