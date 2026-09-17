---
title: "RTCRtpSender: statische Methode getCapabilities()"
short-title: getCapabilities()
slug: Web/API/RTCRtpSender/getCapabilities_static
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

{{APIRef("WebRTC")}}

Die _statische Methode_ **`RTCRtpSender.getCapabilities()`** gibt ein Objekt zurück, das die von [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) unterstützten Codec- und Header-Erweiterungsfunktionen beschreibt.

Auf ähnliche Weise können Sie die Fähigkeiten von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekten auf dem Gerät ermitteln, indem Sie die statische Funktion [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static) aufrufen.

## Syntax

```js-nolint
RTCRtpSender.getCapabilities(kind)
```

### Parameter

- `kind`
  - : Ein String, der den Medientyp angibt, für den die Sendefähigkeiten des Browsers angefordert werden.
    Die unterstützten Medienarten sind: `audio` und `video`.

### Rückgabewert

Ein neues Objekt, das angibt, über welche Fähigkeiten der Browser verfügt, um die angegebene Medienart über eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu senden.
Wenn der Browser keine Unterstützung für die angegebene Medien-`kind` bietet, ist der zurückgegebene Wert `null`.

Das zurückgegebene Objekt besitzt die folgenden Eigenschaften:

- `codecs`
  - : Ein Array von Objekten, die jeweils die grundlegenden Fähigkeiten eines einzelnen von [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) unterstützten [Medien-Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) beschreiben.

    > [!NOTE]
    > Das Array enthält spezielle Einträge, die die zugrunde liegenden Komponenten des Transports darstellen — diese können ignoriert werden, wenn Sie nur an den tatsächlich für die Medien selbst verwendeten Codecs interessiert sind.
    > Diese werden unten im Abschnitt [Das `codecs`-Array](#das_`codecs`-array) beschrieben.

    Jedes Codec-Objekt besitzt die folgenden Eigenschaften:
    - `channels` {{optional_inline}}
      - : Ein positiver ganzzahliger Wert, der die maximale Anzahl der vom Codec unterstützten Kanäle angibt; beispielsweise hätte ein Codec, der nur Mono-Audio unterstützt, den Wert 1; Stereo-Codecs hätten den Wert 2 usw.
    - `clockRate`
      - : Eine positive ganze Zahl, die die Taktrate des Codecs in Hertz (Hz) angibt.
        Die IANA pflegt eine [Liste von Codecs und ihren Parametern](https://www.iana.org/assignments/rtp-parameters#rtp-parameters-1), einschließlich ihrer Taktraten.
    - `mimeType`
      - : Ein String, der den MIME-Medientyp und -Untertyp des Codecs angibt.
        Die von RTP verwendeten MIME-Typ-Strings unterscheiden sich von denen, die an anderer Stelle verwendet werden.
        Siehe {{RFC(3555, "", 4)}} für die vollständige IANA-Registrierung dieser Typen.
        Siehe auch [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details zu möglichen Codecs, auf die hier verwiesen werden könnte.
    - `sdpFmtpLine` {{optional_inline}}
      - : Ein String, der das formatspezifische Parameterfeld aus der dem Codec entsprechenden `a=fmtp`-Zeile im SDP angibt, sofern eine solche Zeile vorhanden ist.
        Wenn kein Parameterfeld vorhanden ist, wird diese Eigenschaft weggelassen.

- `headerExtensions`
  - : Ein Array von Objekten, die jeweils den URI einer für die aktuelle Medien-`kind` unterstützten [Header-Erweiterung](https://datatracker.ietf.org/doc/html/rfc3550#section-5.3.1) bereitstellen.
    Jedes Objekt besitzt die folgende Eigenschaft:
    - `uri`
      - : Ein String, der den URI einer Header-Erweiterung angibt.
        Der URI ist wie in {{RFC(5285)}} beschrieben formatiert.

## Beschreibung

Als statische Funktion wird diese immer in der folgenden Form aufgerufen:

```js
capabilities = RTCRtpSender.getCapabilities("audio");
```

Die zurückgegebene Menge von Fähigkeiten ist die optimistischste mögliche Liste.
Es ist durchaus möglich, dass bestimmte Kombinationen von Optionen nicht funktionieren, wenn Sie tatsächlich versuchen, sie zu verwenden.

Der Aufruf von `RTCRtpSender.getCapabilities()` bereitet den Browser in keiner Weise auf die Verarbeitung von Medien vor.
Es wird nichts geladen, abgerufen oder anderweitig vorbereitet.
Es ist ein Mittel, um vor dem Versuch, auf Medien zuzugreifen, festzustellen, was möglicherweise verwendet werden kann.

Da die verfügbaren Fähigkeiten in der Regel über einen längeren Zeitraum stabil bleiben (Personen installieren und deinstallieren Codecs und Ähnliches nicht sehr häufig), können die Medienfähigkeiten ganz oder teilweise eine Cross-Origin-Methode zur Identifizierung eines Benutzers bieten.
Aus diesem Grund kann der Browser in datenschutzsensiblen Kontexten entscheiden, die Fähigkeiten zu verschleiern; dies kann beispielsweise dadurch geschehen, dass selten verwendete Codec-Konfigurationen weggelassen werden.

### Das `codecs`-Array

Das `codecs`-Array ist ein Array von Objekten, das einen einzelnen Codec und seine grundlegenden Fähigkeiten beschreibt.
Der Browser meldet nur unterschiedliche Kombinationen von Fähigkeiten separat.
Wenn zwei Sätze von Fähigkeiten als einer beschrieben werden können, werden sie es auch.
Das bedeutet beispielsweise: Wenn es zwei Einträge für den H.264-Codec gibt (erkennbar daran, dass [`mimeType`](#mimetype) den Wert „video/H264“ hat), gibt es andere Werte in den Fähigkeitsobjekten, die darauf hinweisen, wie sie sich in irgendeiner Weise unterscheiden.

Es gibt drei spezielle Einträge, die immer vorhanden sein sollten und zugrunde liegende Komponenten des Transports darstellen. Diese Komponenten sind:

- RED (REDundant Audio Data)
  - : Der Medientyp eines RED-Eintrags kann variieren, da es mehrere Versionen davon gibt, aber er endet mit `red`, etwa `video/red` oder `video/fwdred`.
    Der grundlegende RED-Standard ist in {{RFC(2198)}} zu finden. Es kann mehrere Einträge für RED geben, wenn unterschiedliche Formen unterstützt werden; in diesem Fall hat jeder einen eindeutigen Medientyp.
- FEC (Forward Error Correction)
  - : Eine FEC-Komponente verarbeitet Fehlerkorrekturdaten; ihr Medientyp kann ebenfalls variieren, da erweiterte Versionen des Standards verfügbar sind, aber er endet immer mit `fec`.
    Ein möglicher Wert ist `video/ulpfec` (ein allgemeines Fehlerkorrekturmodell).
    Es kann auch mehrere FEC-Einträge geben, wenn mehr als eine Form unterstützt wird.
- RTX (Retransmission)
  - : Diese Komponente ist für die erneute Übertragung von Daten verantwortlich; ihr Medientyp sollte `video/rtx` sein.
    Es gibt nur einen Eintrag für RTX, und dieser besitzt keine Eigenschaft [`sdpFmtpLine`](#sdpfmtpline).

Diese Einträge sollten ignoriert werden, wenn nur Codecs von Interesse sind, die sich auf die Medien beziehen.

## Beispiele

### Funktionsunterstützung

Sie können [`Object.hasOwn()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn) verwenden, um zu prüfen, ob `RTCRtpSender.getCapabilities()` unterstützt wird:

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

### Unterstützung für einen bestimmten Codec prüfen

Die folgende Funktion gibt `true` oder `false` zurück und gibt damit an, ob das Gerät das Senden von H.264-Video über einen [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) unterstützt.

> [!NOTE]
> Da `RTCRtpSender.getCapabilities()` tatsächlich nur _wahrscheinliche_ Unterstützung angibt,
> kann die H.264-Unterstützung unten selbst nach einer positiven Antwort dieser Funktion noch fehlschlagen.

```js
function canSendH264() {
  const capabilities = RTCRtpSender.getCapabilities("video");

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
