---
title: "RTCRtpReceiver: getCapabilities() statische Methode"
short-title: getCapabilities()
slug: Web/API/RTCRtpReceiver/getCapabilities_static
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Die _statische Methode_ **`RTCRtpReceiver.getCapabilities()`** gibt ein Objekt zurück, das die Codec- und Header-Erweiterungsfähigkeiten beschreibt, die von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekten auf dem aktuellen Gerät unterstützt werden.

Ähnlich können Sie die Fähigkeiten von [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekten durch Aufrufen der statischen Funktion [`RTCRtpSender.getCapabilities()`](/de/docs/Web/API/RTCRtpSender/getCapabilities_static) ermitteln.

## Syntax

```js-nolint
RTCRtpReceiver.getCapabilities(kind)
```

### Parameter

- `kind`
  - : Ein String, der den Medientyp angibt, für den die Empfängerkapazitäten des Browsers angefordert werden.
    Die unterstützten Medientypen sind: `audio` und `video`.

### Rückgabewert

Ein neues Objekt, das angibt, welche Möglichkeiten der Browser hat, die angegebene Medienart über eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu empfangen.
Wenn der Browser keine Unterstützung für den angegebenen Medientyp `kind` hat, ist der zurückgegebene Wert `null`.

Das zurückgegebene Objekt hat die folgenden Eigenschaften:

- `codecs`

  - : Ein Array von Objekten, von denen jedes die grundlegenden Fähigkeiten eines einzelnen [Media Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs) beschreibt, die vom [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) unterstützt werden.

    > [!NOTE]
    > Das Array enthält spezielle Einträge, die die zugrundeliegenden Komponenten des Transports darstellen – diese können ignoriert werden, wenn Sie sich nur für die tatsächlich für die Medien selbst verwendeten Codecs interessieren.
    > Diese werden unten im Abschnitt [Das Codecs-Array](#das_codecs-array) beschrieben.

    Jedes Codec-Objekt hat die folgenden Eigenschaften:

    - `channels` {{optional_inline}}
      - : Ein positiver ganzzahliger Wert, der die maximale Anzahl der vom Codec unterstützten Kanäle angibt; zum Beispiel hätte ein Codec, der nur Mono-Sound unterstützt, den Wert 1; Stereo-Codecs hätten 2, usw.
    - `clockRate`
      - : Eine positive Ganzzahl, die die Taktfrequenz des Codecs in Hertz (Hz) angibt.
        Die IANA pflegt eine [Liste von Codecs und deren Parametern](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktfrequenzen.
    - `mimeType`
      - : Ein String, der den MIME-Medientyp und Subtyp des Codecs angibt.
        Die MIME-Typen, die von RTP verwendet werden, unterscheiden sich von denen, die anderswo verwendet werden.
        Siehe {{RFC(3555, "", 4)}} für das vollständige IANA-Register dieser Typen.
        Weitere Informationen zu potenziellen Codecs, die hier referenziert werden könnten, finden Sie unter [von WebRTC verwendete Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs).
    - `sdpFmtpLine` {{optional_inline}}
      - : Ein String, der die format-spezifischen Parameter aus dem `a=fmtp` Zeile im SDP angibt, das dem Codec entspricht, falls eine solche Zeile existiert.
        Wenn kein Parameterfeld vorhanden ist, wird diese Eigenschaft ausgelassen.

- `headerExtensions`

  - : Ein Array von Objekten, die jeweils die URI einer unterstützten [Header-Erweiterung](https://datatracker.ietf.org/doc/html/rfc3550#section-5.3.1) für die aktuelle Medienart `kind` bereitstellen.
    Jedes Objekt hat die folgende Eigenschaft:

    - `uri`
      - : Ein String, der die URI einer Header-Erweiterung angibt.
        Die URI ist formatiert wie in {{RFC(5285)}} beschrieben.

## Beschreibung

Als statische Funktion wird dies immer in der Form aufgerufen:

```js
capabilities = RTCRtpReceiver.getCapabilities("audio");
```

Der zurückgegebene Satz von Fähigkeiten ist die optimistischste mögliche Liste.
Es ist durchaus möglich, dass bestimmte Kombinationen von Optionen fehlschlagen, wenn Sie versuchen, sie tatsächlich zu verwenden.

Der Aufruf von `RTCRtpReceiver.getCapabilities()` bereitet den Browser in keiner Weise darauf vor, Medien zu verarbeiten. Nichts wird geladen, abgerufen oder anderweitig vorbereitet.
Es ist ein Mittel, um zu bestimmen, was nutzbar sein könnte, bevor Sie versuchen, auf Medien zuzugreifen.

Da die verfügbaren Fähigkeiten tendenziell für eine gewisse Zeit stabil bleiben (die Leute installieren und deinstallieren Codecs und Ähnliches nicht sehr oft), können die Medienfähigkeiten ganz oder teilweise eine cross-origin Methode zur Identifizierung eines Benutzers bereitstellen.
Aus diesem Grund kann der Browser in datenschutzsensiblen Kontexten wählen, die Fähigkeiten zu verschleiern; dies könnte beispielsweise durch das Auslassen selten genutzter Codec-Konfigurationen geschehen.

### Das Codecs-Array

Das `codecs` Array ist ein Array von Objekten, das einen einzelnen Codec und seine grundlegenden Fähigkeiten beschreibt.
Der Browser meldet jeweils nur unterschiedliche Fähigkeitskombinationen separat.
Wenn zwei Sätze von Fähigkeiten zusammengefasst beschrieben werden können, werden sie es.
Das bedeutet, dass zum Beispiel, wenn es zwei Einträge für den H.264-Codec gibt (erkennbar am [`mimeType`](#mimetype), der "video/H264" ist), andere Werte in den Fähigkeitsobjekten vorhanden sind, die darauf hindeuten, wie sie sich in irgendeiner Weise unterscheiden.

Es gibt drei spezielle Einträge, die immer vorhanden sein sollten und die zugrundeliegenden Komponenten des Transports darstellen. Diese Komponenten sind:

- RED (REDundante Audiodaten)
  - : Der Medientyp eines RED-Eintrags kann variieren, da es mehrere Versionen davon gibt, aber er wird mit `red` enden, so wie `video/red` oder `video/fwdred`.
    Der ursprüngliche RED-Standard kann in {{RFC(2198)}} gefunden werden. Es kann mehrere Einträge für RED geben, wenn unterschiedliche Formen unterstützt werden; jeder wird dann einen einzigartigen Medientyp haben.
- FEC (Forward Error Correction)
  - : Eine FEC-Komponente behandelt Fehlerkorrekturdaten; ihr Medientyp kann auch variieren, da es fortgeschrittene Versionen des Standards gibt, aber sie wird immer mit `fec` enden.
    Ein möglicher Wert ist `video/ulpfec` (ein generisches Fehlerkorrekturmodell).
    Es kann auch mehrere FEC-Einträge geben, wenn mehr als eine Form unterstützt wird.
- RTX (Retransmission)
  - : Diese Komponente ist für die erneute Übertragung von Daten verantwortlich; ihr Medientyp sollte `video/rtx` sein.
    Es wird nur einen Eintrag für RTX geben, und er wird keine [`sdpFmtpLine`](#sdpfmtpline) Eigenschaft haben.

Diese Einträge sollten ignoriert werden, wenn nur Codecs in Bezug auf die Medien von Interesse sind.

## Beispiele

### Unterstützung von Funktionen

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

{{ EmbedLiveSample('Unterstützung von Funktionen', '100%', '30px') }}

### Überprüfung der Unterstützung für einen bestimmten Codec

Die folgende Funktion gibt ein Boolean zurück, das anzeigt, ob das Gerät das Empfangen von H.264-Video über eine WebRTC-Verbindung unterstützt.

> [!NOTE]
> Da `RTCRtpReceiver.getCapabilities()` tatsächlich nur _wahrscheinliche_ Unterstützung anzeigt, kann der Versuch, H.264-Video zu empfangen, dennoch fehlschlagen, selbst nach einer positiven Antwort dieser Funktion.

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

Dieses Codebeispiel zeigt, wie wir alle unterstützten Codecs und Header erhalten können.
Das HTML definiert eine Auswahlliste für die beiden Arten von Fähigkeiten und einen Protokollbereich.

```html
<select id="kind">
  <option value="audio">audio</option>
  <option value="video">video</option>
</select>
<textarea rows="40" cols="100" id="log"></textarea>
```

Das JavaScript definiert eine Funktion, um die Fähigkeiten für eine bestimmte "Art" zu protokollieren.
Dies wird ursprünglich mit dem Wert `audio` aufgerufen.
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

{{ EmbedLiveSample('Abrufen aller Fähigkeiten', '100%', '500px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
