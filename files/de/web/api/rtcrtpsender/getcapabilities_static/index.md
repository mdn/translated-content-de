---
title: "RTCRtpSender: getCapabilities() statische Methode"
short-title: getCapabilities()
slug: Web/API/RTCRtpSender/getCapabilities_static
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Die _statische Methode_ **`RTCRtpSender.getCapabilities()`** gibt ein Objekt zurück, das die Codec- und Header-Erweiterungsfähigkeiten beschreibt, die vom [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) unterstützt werden.

Sie können auf ähnliche Weise die Fähigkeiten von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekten auf dem Gerät durch einen Aufruf der statischen Funktion [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static) ermitteln.

## Syntax

```js-nolint
RTCRtpSender.getCapabilities(kind)
```

### Parameter

- `kind`
  - : Ein String, der den Medientyp angibt, für den die Sende-Fähigkeiten des Browsers angefragt werden.
    Die unterstützten Medientypen sind: `audio` und `video`.

### Rückgabewert

Ein neues Objekt, das angibt, welche Fähigkeiten der Browser hat, um die angegebene Medienart über eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu senden.
Wenn der Browser keine Unterstützung für den angegebenen Medientyp hat, ist der zurückgegebene Wert `null`.

Das zurückgegebene Objekt hat die folgenden Eigenschaften:

- `codecs`

  - : Ein Array von Objekten, von denen jedes die grundlegenden Fähigkeiten eines einzelnen [Mediacodecs](/de/docs/Web/Media/Formats/WebRTC_codecs) beschreibt, der vom [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) unterstützt wird.

    > [!NOTE]
    > Das Array enthält spezielle Einträge, die die zugrunde liegenden Komponenten des Transports repräsentieren – diese können ignoriert werden, wenn Sie sich nur für die tatsächlichen Codecs interessieren, die für die Medien selbst verwendet werden.
    > Diese werden im Abschnitt [Das Codecs-Array](#das_codecs-array) beschrieben.

    Jedes Codec-Objekt hat die folgenden Eigenschaften:

    - `channels` {{optional_inline}}
      - : Ein positiver ganzzahliger Wert, der die maximale Anzahl von Kanälen angibt, die vom Codec unterstützt werden; zum Beispiel hätte ein Codec, der nur Mono-Sound unterstützt, einen Wert von 1; Stereo-Codecs hätten einen Wert von 2 usw.
    - `clockRate`
      - : Ein positiver ganzzahliger Wert, der die Taktfrequenz des Codecs in Hertz (Hz) angibt.
        Die IANA pflegt eine [Liste von Codecs und deren Parametern](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktfrequenzen.
    - `mimeType`
      - : Ein String, der den MIME-Medientyp und Subtyp des Codecs angibt.
        Die MIME-Typ-Strings, die von RTP verwendet werden, unterscheiden sich von denen, die anderswo verwendet werden.
        Siehe {{RFC(3555, "", 4)}} für das vollständige IANA-Register dieser Typen.
        Auch die [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Formats/WebRTC_codecs), bieten Details über mögliche Codecs, die hier angesprochen werden könnten.
    - `sdpFmtpLine` {{optional_inline}}
      - : Ein String, der das format-spezifische Parameterfeld aus der `a=fmtp`-Zeile in der SDP angibt, die dem Codec entspricht, falls eine solche Zeile existiert.
        Wenn kein Parameterfeld vorhanden ist, wird diese Eigenschaft weggelassen.

- `headerExtensions`

  - : Ein Array von Objekten, die jeweils die URI einer [Header-Erweiterung](https://datatracker.ietf.org/doc/html/rfc3550#section-5.3.1) angeben, die für den aktuellen Medientyp `kind` unterstützt wird.
    Jedes Objekt hat die folgende Eigenschaft:

    - `uri`
      - : Ein String, der die URI einer Header-Erweiterung angibt.
        Die URI ist formatiert, wie in {{RFC(5285)}} beschrieben.

## Beschreibung

Als statische Funktion wird diese immer in der Form aufgerufen:

```js
capabilities = RTCRtpSender.getCapabilities("audio");
```

Der zurückgegebene Satz von Fähigkeiten ist die optimistischste mögliche Liste.
Es ist durchaus möglich, dass bestimmte Kombinationen von Optionen fehlschlagen, wenn Sie tatsächlich versuchen, sie zu verwenden.

Der Aufruf von `RTCRtpSender.getCapabilities()` bereitet den Browser in keiner Weise darauf vor, Medien zu verarbeiten.
Es wird nichts geladen, abgerufen oder anderweitig vorbereitet.
Es ist ein Mittel, um herauszufinden, was möglicherweise verwendbar ist, bevor man versucht, auf Medien zuzugreifen.

Da der verfügbare Satz von Fähigkeiten dazu neigt, für längere Zeit stabil zu sein (Menschen installieren und deinstallieren Codecs und dergleichen nicht sehr oft), können die Medienfähigkeiten im Ganzen oder teilweise eine cross-origin Methode zur Identifizierung eines Benutzers bieten.
Aus diesem Grund kann der Browser in datenschutzsensiblen Kontexten beschließen, die Fähigkeiten zu verschleiern; dies könnte zum Beispiel dadurch geschehen, dass selten verwendete Codec-Konfigurationen weggelassen werden.

### Das Codecs-Array

Das `codecs`-Array ist ein Array von Objekten, das einen einzelnen Codec und seine grundlegenden Fähigkeiten beschreibt.
Der Browser wird nur unterschiedliche Fähigkeitenskombinationen separat angeben.
Wenn zwei Sätze von Fähigkeiten als eins beschrieben werden können, werden sie das auch.
Das bedeutet, dass beispielsweise, wenn es zwei Einträge für den H.264-Codec gibt (wie durch den [`mimeType`](#mimetype) zum Ausdruck gebracht, der "video/H264" ist), es andere Werte in den Fähigkeitsobjekten geben muss, die anzeigen, wie sie sich in irgendeiner Weise unterscheiden.

Es gibt drei spezielle Einträge, die immer vorhanden sein sollten und die grundlegenden Komponenten des Transports repräsentieren. Diese Komponenten sind:

- RED (REDundant Audio Data)
  - : Der Medientyp eines RED-Eintrags kann variieren, da es mehrere Versionen davon gibt, aber er wird mit `red` enden, wie `video/red` oder `video/fwdred`.
    Der grundlegende RED-Standard kann in {{RFC(2198)}} gefunden werden. Es kann mehrere Einträge für RED geben, wenn verschiedene Formen unterstützt werden; jeder wird in diesem Fall einen einzigartigen Medientyp haben.
- FEC (Forward Error Correction)
  - : Eine FEC-Komponente verarbeitet Fehlerkorrekturdaten; ihr Medientyp kann ebenfalls variieren, da es fortgeschrittene Versionen des Standards gibt, aber sie wird immer mit `fec` enden.
    Ein möglicher Wert ist `video/ulpfec` (ein generisches Fehlerkorrekturmodell).
    Es kann auch mehrere FEC-Einträge geben, wenn mehr als eine Form unterstützt wird.
- RTX (Retransmission)
  - : Diese Komponente ist für die erneute Übertragung von Daten verantwortlich; ihr Medientyp sollte `video/rtx` sein.
    Es wird nur einen Eintrag für RTX geben und dieser wird keine [`sdpFmtpLine`](#sdpfmtpline) Eigenschaft haben.

Diese Einträge sollten ignoriert werden, wenn nur an Codecs in Bezug auf die Medien Interesse besteht.

## Beispiele

### Unterstützung für Funktionen

Man kann [`Object.hasOwn()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) verwenden, um zu überprüfen, ob `RTCRtpSender.getCapabilities()` unterstützt wird:

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

### Überprüfen der Unterstützung für einen bestimmten Codec

Die folgende Funktion gibt `true` oder `false` zurück, um anzuzeigen, ob das Gerät das Senden von H.264-Video auf einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) unterstützt.

> [!NOTE]
> Da `RTCRtpSender.getCapabilities()` tatsächlich nur _wahrscheinliche_ Unterstützung anzeigt.
> Die Unterstützung von H.264 könnte also immer noch fehlschlagen, selbst nachdem eine positive Antwort von dieser Funktion erhalten wurde.

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
Dies wird anfänglich mit dem Wert `audio` aufgerufen.
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

{{ EmbedLiveSample('Getting all capabilities', '100%', '500px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
