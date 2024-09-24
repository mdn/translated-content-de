---
title: "RTCRtpReceiver: getCapabilities() statische Methode"
short-title: getCapabilities()
slug: Web/API/RTCRtpReceiver/getCapabilities_static
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Die _statische Methode_ **`RTCRtpReceiver.getCapabilities()`** gibt ein Objekt zurück, das die Codec- und Header-Erweiterungskapazitäten beschreibt, die von {{domxref("RTCRtpReceiver")}}-Objekten auf dem aktuellen Gerät unterstützt werden.

Sie können ähnlich die Fähigkeiten von {{domxref("RTCRtpSender")}}-Objekten abrufen, indem Sie die statische Funktion {{domxref("RTCRtpSender.getCapabilities_static", "RTCRtpSender.getCapabilities()")}} aufrufen.

## Syntax

```js-nolint
RTCRtpReceiver.getCapabilities(kind)
```

### Parameter

- `kind`
  - : Ein Zeichenfolgenwert, der den Medientyp angibt, für den die Empfangsfähigkeiten des Browsers angefordert werden.
    Die unterstützten Medientypen sind: `audio` und `video`.

### Rückgabewert

Ein neues Objekt, das anzeigt, welche Fähigkeiten der Browser hat, um den angegebenen Medientyp über eine {{domxref("RTCPeerConnection")}} zu empfangen.
Wenn der Browser keine Unterstützung für den angegebenen Medientyp `kind` hat, ist der zurückgegebene Wert `null`.

Das zurückgegebene Objekt hat die folgenden Eigenschaften:

- `codecs`

  - : Ein Array von Objekten, die jeweils die grundlegenden Fähigkeiten eines einzelnen [Mediencodecs](/de/docs/Web/Media/Formats/WebRTC_codecs) beschreiben, die vom {{domxref("RTCRtpReceiver")}} unterstützt werden.

    > [!NOTE]
    > Das Array enthält spezielle Einträge, die die zugrunde liegenden Komponenten des Transports repräsentieren – diese können ignoriert werden, wenn Sie nur an den tatsächlich für die Medien verwendeten Codecs interessiert sind.
    > Diese sind im Abschnitt [Das codecs-Array](#das_codecs-array) unten beschrieben.

    Jedes Codec-Objekt hat die folgenden Eigenschaften:

    - `channels` {{optional_inline}}
      - : Ein positiver ganzzahliger Wert, der die maximale Anzahl von Kanälen angibt, die vom Codec unterstützt werden; zum Beispiel hätte ein Codec, der nur Mono-Sound unterstützt, den Wert 1; Stereo-Codecs hätten einen Wert von 2 usw.
    - `clockRate`
      - : Eine positive ganze Zahl, die die Abtastrate des Codecs in Hertz (Hz) angibt.
        Die IANA führt eine [Liste von Codecs und ihren Parametern](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Abtastraten.
    - `mimeType`
      - : Eine Zeichenkette, die den MIME-Medientyp und den Subtyp des Codecs angibt.
        Die MIME-Typzeichenfolgen, die von RTP verwendet werden, unterscheiden sich von denen, die anderswo verwendet werden.
        Siehe {{RFC(3555, "", 4)}} für das vollständige IANA-Register dieser Typen.
        Siehe auch [Codecs used by WebRTC](/de/docs/Web/Media/Formats/WebRTC_codecs) für Details zu möglichen hier referenzierten Codecs.
    - `sdpFmtpLine` {{optional_inline}}
      - : Eine Zeichenfolge, die das spezifische Parameterfeld des Formats von der `a=fmtp`-Zeile in der SDP angibt, die dem Codec entspricht, falls eine solche Zeile existiert.
        Wenn es kein Parameterfeld gibt, wird diese Eigenschaft weggelassen.

- `headerExtensions`

  - : Ein Array von Objekten, die jeweils die URI einer [Header-Erweiterung](https://datatracker.ietf.org/doc/html/rfc3550#section-5.3.1) bereitstellen, die für den aktuellen Medientyp `kind` unterstützt wird.
    Jedes Objekt hat die folgende Eigenschaft:

    - `uri`
      - : Eine Zeichenfolge, die die URI einer Header-Erweiterung angibt.
        Die URI ist formatiert, wie in {{RFC(5285)}} beschrieben.

## Beschreibung

Als statische Funktion wird diese immer in der folgenden Form aufgerufen:

```js
capabilities = RTCRtpReceiver.getCapabilities("audio");
```

Der zurückgegebene Satz von Fähigkeiten ist die optimistischste mögliche Liste.
Es ist durchaus möglich, dass bestimmte Kombinationen von Optionen fehlschlagen, wenn Sie tatsächlich versuchen, sie zu verwenden.

Das Aufrufen von `RTCRtpReceiver.getCapabilities()` bereitet den Browser in keiner Weise darauf vor, Medien zu handhaben. Nichts wird geladen, abgerufen oder anderweitig vorbereitet.
Es ist ein Mittel, um zu bestimmen, was möglicherweise verwendbar ist, bevor Sie beginnen, auf Medien zuzugreifen.

Da die verfügbaren Fähigkeiten häufig über längere Zeit stabil bleiben (Menschen installieren und deinstallieren Codecs und Ähnliches nicht sehr oft), können die Medienfähigkeiten in ihrer Gesamtheit oder teilweise eine Methode zur cross-origin-Identifikation eines Benutzers bereitstellen. Aus diesem Grund kann der Browser in datenschutzsensiblen Kontexten beschließen, die Fähigkeiten zu verschleiern; dies könnte beispielsweise durch das Auslassen seltener verwendeter Codec-Konfigurationen geschehen.

### Das codecs-Array

Das `codecs`-Array ist ein Array von Objekten, das einen einzelnen Codec und seine grundlegenden Fähigkeiten beschreibt.
Der Browser meldet nur eindeutig unterschiedliche Fähigkeitskombinationen separat.
Wenn zwei Sätze von Fähigkeiten als einer beschrieben werden können, werden sie es sein.
Das bedeutet, dass zum Beispiel, wenn es zwei Einträge für den H.264-Codec gibt (wie durch das [`mimeType`](#mimetype) "video/H264" identifiziert), es andere Werte in den Fähigkeitsobjekten gibt, die darauf hinweisen, wie sie sich auf irgendeine Weise unterscheiden.

Es gibt drei spezielle Einträge, die immer vorhanden sein sollten und zugrunde liegende Komponenten des Transports darstellen. Diese Komponenten sind:

- RED (REDundant Audio Data)
  - : Der Medientyp eines RED-Eintrags kann aufgrund mehrerer Versionen variieren, aber er endet mit `red`, wie `video/red` oder `video/fwdred`.
    Der grundlegende RED-Standard kann in {{RFC(2198)}} gefunden werden. Es kann mehrere Einträge für RED geben, wenn verschiedene Formen unterstützt werden; jeder wird in diesem Fall einen einzigartigen Medientyp haben.
- FEC (Forward Error Correction)
  - : Eine FEC-Komponente verarbeitet Fehlerkorrekturdaten; ihr Medientyp kann auch variieren, da es fortgeschrittene Versionen des Standards gibt, aber sie wird immer mit `fec` enden.
    Ein möglicher Wert ist `video/ulpfec` (ein generisches Fehlerkorrekturmodell).
    Es kann auch mehrere FEC-Einträge geben, wenn mehr als eine Form unterstützt wird.
- RTX (Retransmission)
  - : Diese Komponente ist für die erneute Übertragung von Daten verantwortlich; ihr Medientyp sollte `video/rtx` sein.
    Es wird nur einen Eintrag für RTX geben, und es wird keine [`sdpFmtpLine`](#sdpfmtpline) Eigenschaft haben.

Diese Einträge sollten ignoriert werden, wenn nur an medienbezogenen Codecs interessiert ist.

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
log.textContent = `RTCRtpReceiver.getCapabilities() unterstützt: ${Object.hasOwn(
  RTCRtpReceiver,
  "getCapabilities",
)}`;
```

{{ EmbedLiveSample('Funktionsunterstützung', '100%', '30px') }}

### Überprüfen der Unterstützung für einen bestimmten Codec

Die folgende Funktion gibt einen Boolean zurück, der angibt, ob das Gerät H.264-Video über eine WebRTC-Verbindung empfangen kann oder nicht.

> [!NOTE]
> Da `RTCRtpReceiver.getCapabilities()` tatsächlich nur _wahrscheinliche_ Unterstützung angibt, könnte der Versuch, H.264-Video zu empfangen, dennoch fehlschlagen, selbst nach einer positiven Antwort von dieser Funktion.

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

Dieses Codebeispiel zeigt, wie man alle unterstützten Codecs und Header erhält.
Das HTML definiert eine Auswahl für die beiden Arten von Fähigkeiten und ein Protokollfeld.

```html
<select id="kind">
  <option value="audio">audio</option>
  <option value="video">video</option>
</select>
<textarea rows="40" cols="100" id="log"></textarea>
```

Das JavaScript definiert eine Funktion, um die Fähigkeiten für eine bestimmte "Art" zu protokollieren.
Diese wird anfangs mit dem Wert `audio` aufgerufen.
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
  if (!Object.hasOwn(RTCRtpReceiver, "getCapabilities")) {
    log.textContent = "RTCRtpReceiver.getCapabilities() nicht unterstützt";
    return;
  }
  const capabilities = RTCRtpReceiver.getCapabilities(`${kind}`);
  log.textContent += "Header\n";
  capabilities.headerExtensions.forEach((header) => {
    log.textContent += ` uri: ${header.uri}\n`;
  });

  log.textContent += "\nCodecs\n";
  capabilities.codecs.forEach((codec) => {
    log.textContent += ` mime type: ${codec.mimeType}\n`;
    log.textContent += `   channels: ${codec.channels}\n`; //max Kanäle – z.B. 2 ist Stereo
    log.textContent += `   clockRate: ${codec.clockRate}\n`; // Abtastrate in Hz
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
