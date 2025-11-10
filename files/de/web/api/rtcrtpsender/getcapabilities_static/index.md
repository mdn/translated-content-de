---
title: "RTCRtpSender: getCapabilities() statische Methode"
short-title: getCapabilities()
slug: Web/API/RTCRtpSender/getCapabilities_static
l10n:
  sourceCommit: fd2acb039cc1caee4af10f76ffb839c8da7da5b8
---

{{APIRef("WebRTC")}}

Die _statische Methode_ **`RTCRtpSender.getCapabilities()`** gibt ein Objekt zurück, das die Codec- und Header-Erweiterungsfähigkeiten beschreibt, die vom [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) unterstützt werden.

Sie können auf ähnliche Weise die Fähigkeiten von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekten auf dem Gerät abrufen, indem Sie die statische Funktion [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static) aufrufen.

## Syntax

```js-nolint
RTCRtpSender.getCapabilities(kind)
```

### Parameter

- `kind`
  - : Ein String, der den Medientyp angibt, für den die Sendefähigkeiten des Browsers abgefragt werden.
    Die unterstützten Medientypen sind: `audio` und `video`.

### Rückgabewert

Ein neues Objekt, das angibt, welche Fähigkeiten der Browser hat, um die angegebene Medienart über eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu senden.
Falls der Browser keine Unterstützung für die angegebene Medienart `kind` bietet, ist der zurückgegebene Wert `null`.

Das zurückgegebene Objekt hat die folgenden Eigenschaften:

- `codecs`
  - : Ein Array von Objekten, die jeweils die grundlegenden Fähigkeiten eines einzelnen [Media-Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) beschreiben, der vom [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) unterstützt wird.

    > [!NOTE]
    > Das Array enthält spezielle Einträge, die die zugrunde liegenden Komponenten des Transports darstellen — diese können ignoriert werden, wenn Sie sich nur für die tatsächlich für die Medien verwendeten Codecs interessieren.
    > Diese werden unten im Abschnitt [Das codecs-Array](#das_codecs-array) beschrieben.

    Jedes Codec-Objekt hat die folgenden Eigenschaften:
    - `channels` {{optional_inline}}
      - : Ein positiver Ganzzahlwert, der die maximale Anzahl der vom Codec unterstützten Kanäle angibt; zum Beispiel würde ein Codec, der nur Mono-Sound unterstützt, einen Wert von 1 haben; Stereo-Codecs würden eine 2 haben usw.
    - `clockRate`
      - : Ein positiver Ganzzahlwert, der die Taktfrequenz des Codecs in Hertz (Hz) angibt.
        Die IANA pflegt eine [Liste von Codecs und deren Parameter](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktfrequenzen.
    - `mimeType`
      - : Ein String, der den MIME-Medientyp und Subtyp des Codecs angibt.
        Die MIME-Typ-Strings, die von RTP verwendet werden, unterscheiden sich von denen, die andernorts verwendet werden.
        Siehe {{RFC(3555, "", 4)}} für das vollständige IANA-Register dieser Typen.
        Siehe auch [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details zu potenziellen Codecs, die hier referenziert werden könnten.
    - `sdpFmtpLine` {{optional_inline}}
      - : Ein String, der das format-spezifische Parameterfeld von der `a=fmtp`-Zeile im SDP angibt, das dem Codec entspricht, falls eine solche Zeile existiert.
        Wenn kein Parameterfeld vorhanden ist, wird diese Eigenschaft weggelassen.

- `headerExtensions`
  - : Ein Array von Objekten, die jeweils die URI einer [Header-Erweiterung](https://datatracker.ietf.org/doc/html/rfc3550#section-5.3.1) angeben, die für die aktuelle Medienart `kind` unterstützt wird.
    Jedes Objekt hat die folgende Eigenschaft:
    - `uri`
      - : Ein String, der die URI einer Header-Erweiterung spezifiziert.
        Die URI ist formatiert wie in {{RFC(5285)}} beschrieben.

## Beschreibung

Als statische Funktion wird diese immer in folgender Form aufgerufen:

```js
capabilities = RTCRtpSender.getCapabilities("audio");
```

Die zurückgegebene Menge von Fähigkeiten ist die optimistischste mögliche Liste.
Es ist durchaus möglich, dass bestimmte Kombinationen von Optionen nicht funktionieren, wenn Sie versuchen, sie tatsächlich zu verwenden.

Das Aufrufen von `RTCRtpSender.getCapabilities()` bereitet den Browser in keiner Weise auf die Verarbeitung von Medien vor.
Es wird nichts geladen, geholt oder anderweitig vorbereitet.
Es ist ein Mittel, um zu bestimmen, was möglicherweise verwendbar ist, bevor Sie versuchen, auf Medien zuzugreifen.

Da die verfügbaren Fähigkeiten dazu tendieren, eine Zeit lang stabil zu sein (Menschen installieren und deinstallieren nicht häufig Codecs und dergleichen), können die Medienfähigkeiten insgesamt oder teilweise eine methodische Möglichkeit zum Identifizieren eines Nutzers über Domains hinweg bieten.
Aus diesem Grund kann der Browser in datenschutzsensiblen Kontexten entscheiden, die Fähigkeiten zu verschleiern; dies könnte zum Beispiel durch das Weglassen von selten verwendeten Codec-Konfigurationen geschehen.

### Das codecs-Array

Das `codecs`-Array ist ein Array von Objekten, das einen einzelnen Codec und seine grundlegenden Fähigkeiten beschreibt.
Der Browser wird nur unterschiedliche Fähigkeitenskombinationen separat melden.
Wenn zwei Sätze von Fähigkeiten als eine beschrieben werden können, werden sie es.
Das bedeutet, dass zum Beispiel, wenn es zwei Einträge für den H.264-Codec gibt (identifiziert durch den [`mimeType`](#mimetype) als "video/H264"), es andere Werte in den Fähigkeitenobjekten gibt, die anzeigen, wie sie sich in gewisser Weise unterscheiden.

Es gibt drei spezielle Einträge, die immer vorhanden sein sollten und die zugrunde liegenden Komponenten des Transports darstellen. Diese Komponenten sind:

- RED (REDundante Audiodaten)
  - : Der Medientyp eines RED-Eintrags kann variieren, da es mehrere Versionen davon gibt, aber er endet mit `red`, wie `video/red` oder `video/fwdred`.
    Der grundlegende RED-Standard ist in {{RFC(2198)}} zu finden. Es kann mehrere RED-Einträge geben, wenn verschiedene Formen unterstützt werden; jeder hat in diesem Fall einen einzigartigen Medientyp.
- FEC (Forward Error Correction)
  - : Ein FEC-Komponente behandelt Fehlerkorrekturdaten; ihr Medientyp kann auch variieren, da es fortgeschrittene Versionen des Standards gibt, aber sie endet immer mit `fec`.
    Ein möglicher Wert ist `video/ulpfec` (ein allgemeines Fehlerkorrekturmodell).
    Es kann auch mehrere FEC-Einträge geben, wenn mehr als eine Form unterstützt wird.
- RTX (Retransmission)
  - : Diese Komponente ist für die erneute Übertragung von Daten verantwortlich; ihr Medientyp sollte `video/rtx` sein.
    Es wird nur einen Eintrag für RTX geben und es wird keine [`sdpFmtpLine`](#sdpfmtpline) Eigenschaft haben.

Diese Einträge sollten ignoriert werden, wenn nur Codecs im Zusammenhang mit dem Medium relevant sind.

## Beispiele

### Unterstützung von Funktionen

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

### Überprüfung der Unterstützung für einen bestimmten Codec

Die folgende Funktion gibt ein `true` oder `false` zurück, um anzuzeigen, ob das Gerät das Senden von H.264-Video auf einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) unterstützt.

> [!NOTE]
> Da `RTCRtpSender.getCapabilities()` tatsächlich nur _wahrscheinliche_ Unterstützung anzeigt.
> Daher könnte die unten stehende Unterstützung für H.264 immer noch fehlschlagen, selbst nachdem eine positive Antwort von dieser Funktion erhalten wurde.

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

### Alle Fähigkeiten abrufen

Dieses Codebeispiel zeigt, wie wir alle unterstützten Codecs und Header abrufen könnten.
Das HTML definiert eine Auswahlliste für die zwei Arten von Fähigkeiten und einen Logbereich.

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
