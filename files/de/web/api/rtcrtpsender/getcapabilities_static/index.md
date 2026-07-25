---
title: "RTCRtpSender: getCapabilities() statische Methode"
short-title: getCapabilities()
slug: Web/API/RTCRtpSender/getCapabilities_static
l10n:
  sourceCommit: 308f0db4466bb95ff19c004f19c327af707fca98
---

{{APIRef("WebRTC")}}

Die _statische Methode_ **`RTCRtpSender.getCapabilities()`** gibt ein Objekt zurück, das die Codec- und Header-Erweiterungsfähigkeiten beschreibt, die vom [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) unterstützt werden.

Sie können ähnlich die Fähigkeiten von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekten auf dem Gerät durch Aufrufen der statischen Funktion [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static) erhalten.

## Syntax

```js-nolint
RTCRtpSender.getCapabilities(kind)
```

### Parameter

- `kind`
  - : Ein String, der den Medientyp angibt, für den die Sende-Fähigkeiten des Browsers abgefragt werden.
    Die unterstützten Medientypen sind: `audio` und `video`.

### Rückgabewert

Ein neues Objekt, das anzeigt, welche Fähigkeiten der Browser hat, um die angegebene Art von Medien über eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu senden.
Wenn der Browser keine Unterstützung für die angegebene Medienart hat, ist der zurückgegebene Wert `null`.

Das zurückgegebene Objekt hat die folgenden Eigenschaften:

- `codecs`
  - : Ein Array von Objekten, die jeweils die grundlegenden Fähigkeiten eines einzelnen [Media-Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) beschreiben, der vom [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) unterstützt wird.

    > [!NOTE]
    > Das Array enthält spezielle Einträge, die die zugrunde liegenden Komponenten des Transports darstellen – diese können ignoriert werden, wenn Sie nur an den tatsächlich verwendeten Codecs für die Medien selbst interessiert sind.
    > Diese sind im Abschnitt [Das Codecs-Array](#das_codecs-array) beschrieben.

    Jedes Codec-Objekt hat die folgenden Eigenschaften:
    - `channels` {{optional_inline}}
      - : Ein positiver Ganzzahlwert, der die maximale Anzahl der vom Codec unterstützten Kanäle angibt; ein Codec, der nur Mono-Sound unterstützt, hätte zum Beispiel einen Wert von 1; Stereo-Codecs hätten eine 2 usw.
    - `clockRate`
      - : Ein positiver Ganzzahlwert, der die Taktfrequenz des Codecs in Hertz (Hz) angibt.
        Die IANA führt eine [Liste von Codecs und deren Parameter](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktfrequenzen.
    - `mimeType`
      - : Ein String, der den MIME-Medientyp und -subtyp des Codecs angibt.
        Die MIME-Typen-Strings, die von RTP verwendet werden, unterscheiden sich von denen, die anderswo verwendet werden.
        Siehe {{RFC(3555, "", 4)}} für das vollständige IANA-Register dieser Typen.
        Details zu potenziellen Codecs, die hier referenziert werden könnten, finden Sie unter [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs).
    - `sdpFmtpLine` {{optional_inline}}
      - : Ein String, der das formatspezifische Parameterfeld der `a=fmtp`-Zeile in der SDP angibt, die dem Codec entspricht, falls eine solche Zeile existiert.
        Wenn es kein Parameterfeld gibt, wird diese Eigenschaft weggelassen.

- `headerExtensions`
  - : Ein Array von Objekten, die jeweils die URI einer [Header-Erweiterung](https://datatracker.ietf.org/doc/html/rfc3550#section-5.3.1) für die gegenwärtige Medienart `kind` bereitstellen.
    Jedes Objekt hat die folgende Eigenschaft:
    - `uri`
      - : Ein String, der die URI einer Header-Erweiterung angibt.
        Die URI ist wie in {{RFC(5285)}} beschrieben formatiert.

## Beschreibung

Als statische Funktion wird diese immer in der Form aufgerufen:

```js
capabilities = RTCRtpSender.getCapabilities("audio");
```

Der zurückgegebene Satz von Fähigkeiten ist die optimistischste mögliche Liste.
Es ist durchaus möglich, dass bestimmte Kombinationen von Optionen nicht funktionieren, wenn Sie tatsächlich versuchen, sie zu verwenden.

Der Aufruf von `RTCRtpSender.getCapabilities()` versetzt den Browser in keiner Weise in einen Zustand, um Medien zu verarbeiten.
Nichts wird geladen, abgerufen oder anderweitig vorbereitet.
Es ist ein Mittel, um festzustellen, was möglicherweise verwendbar ist, bevor Sie versuchen, auf Medien zuzugreifen.

Da die verfügbaren Fähigkeiten dazu neigen, über längere Zeiträume stabil zu sein (Menschen installieren und deinstallieren Codecs und Ähnliches nicht sehr häufig), können die Medienfähigkeiten im Ganzen oder teilweise eine cross-origin Methode zur Identifizierung eines Benutzers bieten.
Aus diesem Grund kann der Browser in datenschutzsensiblen Kontexten wählen, die Fähigkeiten zu verschleiern; dies könnte beispielsweise durch das Weglassen seltener Codec-Konfigurationen geschehen.

### Das Codecs-Array

Das `codecs`-Array ist ein Array von Objekten, das einen einzelnen Codec und dessen grundlegende Fähigkeiten beschreibt.
Der Browser meldet nur unterschiedliche Fähigkeitskombinationen separat.
Wenn zwei Gruppen von Fähigkeiten als eine beschrieben werden können, werden sie das sein.
Das bedeutet, dass zum Beispiel, wenn es zwei Einträge für den H.264-Codec gibt (wie durch den [`mimeType`](#mimetype) "video/H264" identifiziert wird), in den Fähigkeiten-Objekten andere Werte vorhanden sind, die darauf hinweisen, wie sie sich in irgendeiner Weise unterscheiden.

Es gibt drei spezielle Einträge, die immer vorhanden sein sollten und die zugrunde liegenden Komponenten des Transports darstellen. Diese Komponenten sind:

- RED (REDundant Audio Data)
  - : Der Medientyp eines RED-Eintrags kann aufgrund der Existenz mehrerer Versionen variieren, endet jedoch immer mit `red`, wie `video/red` oder `video/fwdred`.
    Der Standard RED kann in {{RFC(2198)}} gefunden werden. Es kann mehrere Einträge für RED geben, wenn verschiedene Formen unterstützt werden; jeder wird in diesem Fall einen einzigartigen Medientyp haben.
- FEC (Forward Error Correction)
  - : Ein FEC-Komponente kümmert sich um Fehlerkorrekturdaten; dessen Medientyp kann auch variieren, da es weiterentwickelte Versionen des Standards gibt, endet jedoch immer mit `fec`.
    Ein möglicher Wert ist `video/ulpfec` (ein generisches Fehlerverbindungsmodell).
    Es kann auch mehrere FEC-Einträge geben, wenn mehr als eine Form unterstützt wird.
- RTX (Retransmission)
  - : Diese Komponente ist verantwortlich für die erneute Übertragung von Daten; deren Medientyp sollte `video/rtx` sein.
    Es wird nur einen Eintrag für RTX geben, und dieser wird nicht die Eigenschaft [`sdpFmtpLine`](#sdpfmtpline) haben.

Diese Einträge sollten ignoriert werden, wenn nur an den Medien spezifische Codecs interessiert ist.

## Beispiele

### Feature-Unterstützung

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

{{ EmbedLiveSample('Feature-Unterstützung', '100%', '30px') }}

### Überprüfung der Unterstützung für einen bestimmten Codec

Die untenstehende Funktion gibt ein `true` oder `false` zurück, das anzeigt, ob das Gerät das Senden von H.264-Video auf einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) unterstützt.

> [!NOTE]
> Da `RTCRtpSender.getCapabilities()` eigentlich nur auf _wahrscheinliche_ Unterstützung hinweist, könnte die Unterstützung für H.264 dennoch scheitern, selbst nachdem eine positive Antwort von dieser Funktion erhalten wurde.

```js
function canSendH264() {
  let capabilities = RTCRtpSender.getCapabilities("video");

  return capabilities.codecs.some((codec) => {
    return codec.mimeType === "video/H264";
  });
}
```

### Abrufen aller Fähigkeiten

Dieses Codebeispiel zeigt, wie wir alle unterstützten Codecs und Header erhalten könnten.
Das HTML definiert eine Auswahlliste für die beiden Arten von Fähigkeiten und einen Protokollbereich.

```html
<select id="kind">
  <option value="audio">audio</option>
  <option value="video">video</option>
</select>
<textarea rows="40" cols="100" id="log"></textarea>
```

Das JavaScript definiert eine Funktion, um die Fähigkeiten für einen bestimmten "kind" zu protokollieren.
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
