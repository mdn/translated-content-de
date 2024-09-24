---
title: "RTCRtpSender: getCapabilities() statische Methode"
short-title: getCapabilities()
slug: Web/API/RTCRtpSender/getCapabilities_static
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Die _statische Methode_ **`RTCRtpSender.getCapabilities()`** gibt ein Objekt zurück, das die unterstützten Codec- und Header-Erweiterungskapazitäten des {{domxref("RTCRtpSender")}} beschreibt.

Sie können ähnlich die Fähigkeiten von {{domxref("RTCRtpReceiver")}}-Objekten auf dem Gerät durch Aufrufen der statischen Funktion {{domxref("RTCRtpReceiver.getCapabilities_static", "RTCRtpReceiver.getCapabilities()")}} erhalten.

## Syntax

```js-nolint
RTCRtpSender.getCapabilities(kind)
```

### Parameter

- `kind`
  - : Ein String, der den Medientyp angibt, für den die Sendefähigkeiten des Browsers angefordert werden.
    Die unterstützten Medientypen sind: `audio` und `video`.

### Rückgabewert

Ein neues Objekt, das angibt, welche Fähigkeiten der Browser zum Senden des angegebenen Medientyps über eine {{domxref("RTCPeerConnection")}} hat.
Wenn der Browser keine Unterstützung für den gegebenen Medientyp `kind` hat, ist der zurückgegebene Wert `null`.

Das zurückgegebene Objekt hat folgende Eigenschaften:

- `codecs`

  - : Ein Array von Objekten, wobei jedes die grundlegenden Fähigkeiten eines einzelnen [Mediencodecs](/de/docs/Web/Media/Formats/WebRTC_codecs), die vom {{domxref("RTCRtpSender")}} unterstützt werden, beschreibt.

    > [!NOTE]
    > Das Array enthält spezielle Einträge, die die zugrundeliegenden Komponenten des Transports darstellen — diese können ignoriert werden, wenn Sie nur an den tatsächlichen Codecs interessiert sind, die für das Medium selbst verwendet werden.
    > Diese werden unten im Abschnitt [Das Codec-Array](#das_codec-array) beschrieben.

    Jedes Codec-Objekt hat die folgenden Eigenschaften:

    - `channels` {{optional_inline}}
      - : Ein positiver ganzzahliger Wert, der die maximale Anzahl von Kanälen angibt, die vom Codec unterstützt werden; zum Beispiel hätte ein Codec, der nur Mono-Sound unterstützt, einen Wert von 1; Stereocodecs hätten eine 2 usw.
    - `clockRate`
      - : Ein positiver Integer, der die Taktrate des Codecs in Hertz (Hz) angibt.
        Die IANA führt eine [Liste von Codecs und ihren Parametern](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktraten.
    - `mimeType`
      - : Ein String, der den MIME-Medientyp und Subtyp des Codecs angibt.
        Die für RTP verwendeten MIME-Typ-Strings unterscheiden sich von denen, die anderswo verwendet werden.
        Siehe {{RFC(3555, "", 4)}} für das vollständige IANA-Register dieser Typen.
        Siehe auch [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs) für Details zu möglichen hier referenzierten Codecs.
    - `sdpFmtpLine` {{optional_inline}}
      - : Ein String, der das formatspezifische Parameterfeld von der `a=fmtp`-Zeile im SDP angibt, das dem Codec entspricht, falls eine solche Zeile existiert.
        Wenn es kein Parameterfeld gibt, wird diese Eigenschaft weggelassen.

- `headerExtensions`

  - : Ein Array von Objekten, wobei jedes die URI einer [Header-Erweiterung](https://datatracker.ietf.org/doc/html/rfc3550#section-5.3.1) angibt, die für den aktuellen Medientyp `kind` unterstützt wird.
    Jedes Objekt hat die folgende Eigenschaft:

    - `uri`
      - : Ein String, der die URI einer Header-Erweiterung angibt.
        Die URI ist formatiert wie in {{RFC(5285)}} beschrieben.

## Beschreibung

Als statische Funktion wird diese immer in der Form aufgerufen:

```js
capabilities = RTCRtpSender.getCapabilities("audio");
```

Die zurückgegebene Menge von Fähigkeiten ist die optimistischste mögliche Liste.
Es ist durchaus möglich, dass bestimmte Kombinationen von Optionen nicht funktionieren, wenn Sie tatsächlich versuchen, sie zu verwenden.

Der Aufruf von `RTCRtpSender.getCapabilities()` bereitet den Browser in keiner Weise vor, mit Medien umzugehen.
Nichts wird geladen, abgerufen oder anderweitig vorbereitet.
Es ist ein Mittel, um festzustellen, was möglicherweise verwendbar ist, bevor man versucht, auf Medien zuzugreifen.

Da die verfügbaren Fähigkeiten in der Regel über einen längeren Zeitraum stabil sind (Menschen installieren und deinstallieren Codecs und Ähnliches nicht sehr oft), können die Medienfähigkeiten insgesamt oder teilweise eine plattformübergreifende Methode zur Identifizierung eines Benutzers bieten.
Aus diesem Grund kann der Browser in datenschutzsensiblen Kontexten wählen, die Fähigkeiten zu verschleiern; dies könnte beispielsweise dadurch geschehen, dass selten verwendete Codec-Konfigurationen weggelassen werden.

### Das Codec-Array

Das `codecs`-Array ist ein Array von Objekten, das einen einzelnen Codec und seine grundlegenden Fähigkeiten beschreibt.
Der Browser meldet nur unterschiedliche Fähigkeitskombinationen separat.
Wenn zwei Sätze von Fähigkeiten als einer beschrieben werden können, werden sie es sein.
Das bedeutet, dass, wenn es zwei Einträge für den H.264-Codec gibt (wie durch den [`mimeType`](#mimetype) "video/H264" identifiziert), es andere Werte in den Fähigkeitsobjekten gibt, die darauf hinweisen, wie sie sich in irgendeiner Weise unterscheiden.

Es gibt drei spezielle Einträge, die immer vorhanden sein sollten und die zugrundeliegenden Komponenten des Transports darstellen. Diese Komponenten sind:

- RED (REDundant Audio Data)
  - : Der Medientyp eines RED-Eintrags kann variieren, da es mehrere Versionen davon gibt, aber er wird mit `red` enden, wie `video/red` oder `video/fwdred`.
    Der Grundstandard von RED kann in {{RFC(2198)}} gefunden werden. Es kann mehrere Einträge für RED geben, wenn verschiedene Formen unterstützt werden; in diesem Fall hat jede einen einzigartigen Medientyp.
- FEC (Forward Error Correction)
  - : Eine FEC-Komponente verarbeitet Fehlerkorrekturdaten; ihr Medientyp kann auch variieren, da es fortgeschrittene Versionen des Standards gibt, aber es wird immer mit `fec` enden.
    Ein möglicher Wert ist `video/ulpfec` (ein generisches Fehlerkorrekturmodell).
    Es kann auch mehrere FEC-Einträge geben, wenn mehr als eine Form unterstützt wird.
- RTX (Retransmission)
  - : Diese Komponente ist für die erneute Übertragung von Daten verantwortlich; ihr Medientyp sollte `video/rtx` sein.
    Es wird nur einen Eintrag für RTX geben, und er wird keine [`sdpFmtpLine`](#sdpfmtpline)-Eigenschaft haben.

Diese Einträge sollten ignoriert werden, wenn nur an den Medien-Codiern interessiert ist.

## Beispiele

### Funktionsunterstützung

Sie können [`Object.hasOwn()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) verwenden, um zu überprüfen, ob `RTCRtpSender.getCapabilities()` unterstützt wird:

```html hidden
<p id="log"></p>
```

```js hidden
const log = document.querySelector("#log");
```

```js
log.textContent = `RTCRtpSender.getCapabilities() unterstützt: ${Object.hasOwn(
  RTCRtpSender,
  "getCapabilities",
)}`;
```

{{ EmbedLiveSample('Funktionsunterstützung', '100%', '30px') }}

### Überprüfen der Unterstützung für einen bestimmten Codec

Die folgende Funktion gibt `true` oder `false` zurück, je nachdem, ob das Gerät das Senden von H.264-Video auf einem {{domxref("RTCRtpSender")}} unterstützt.

> [!NOTE]
> Da `RTCRtpSender.getCapabilities()` tatsächlich nur die _wahrscheinliche_ Unterstützung anzeigt.
> Daher könnte die H.264-Unterstützung unten immer noch fehlschlagen, selbst nachdem diese Funktion eine positive Antwort erhalten hat.

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

Dieses Codebeispiel zeigt, wie wir alle unterstützten Codecs und Header erhalten.
Das HTML definiert eine Auswahlliste für die zwei Arten von Fähigkeiten und einen Protokollbereich.

```html
<select id="kind">
  <option value="audio">audio</option>
  <option value="video">video</option>
</select>
<textarea rows="40" cols="100" id="log"></textarea>
```

Das JavaScript definiert eine Funktion, um die Fähigkeiten für einen bestimmten "kind" zu protokollieren.
Diese wird zu Beginn mit dem Wert `audio` aufgerufen.
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
    log.textContent += `   channels: ${codec.channels}\n`; // max Kanäle - z.B. 2 ist Stereo
    log.textContent += `   clockRate: ${codec.clockRate}\n`; // Taktrate in Hz
    log.textContent += `   sdpFmtpLine: ${codec.sdpFmtpLine}\n`; // MIME-Medientyp und Subtyp
  });
}
```

#### Ergebnis

{{ EmbedLiveSample('Abrufen aller Fähigkeiten', '100%', '500px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
