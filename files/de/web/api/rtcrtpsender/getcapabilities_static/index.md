---
title: "RTCRtpSender: getCapabilities() statische Methode"
short-title: getCapabilities()
slug: Web/API/RTCRtpSender/getCapabilities_static
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Die _statische Methode_ **`RTCRtpSender.getCapabilities()`** gibt ein Objekt zurück, das die Codec- und Header-Erweiterungen beschreibt, die vom [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) unterstützt werden.

Sie können auf ähnliche Weise die Fähigkeiten von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekten auf dem Gerät ermitteln, indem Sie die statische Funktion [`RTCRtpReceiver.getCapabilities()`](/de/docs/Web/API/RTCRtpReceiver/getCapabilities_static) aufrufen.

## Syntax

```js-nolint
RTCRtpSender.getCapabilities(kind)
```

### Parameter

- `kind`
  - : Ein String, der den Medientyp angibt, für den die Sendefähigkeiten des Browsers abgefragt werden.
    Die unterstützten Medientypen sind: `audio` und `video`.

### Rückgabewert

Ein neues Objekt, das anzeigt, welche Fähigkeiten der Browser zum Senden des angegebenen Medientyps über eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) hat.
Wenn der Browser keine Unterstützung für den angegebenen Media-`kind` hat, ist der zurückgegebene Wert `null`.

Das zurückgegebene Objekt hat die folgenden Eigenschaften:

- `codecs`

  - : Ein Array von Objekten, die jeweils die grundlegenden Fähigkeiten eines einzelnen [Media-Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs) beschreiben, die vom [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) unterstützt werden.

    > [!NOTE]
    > Das Array enthält spezielle Einträge, die die zugrunde liegenden Komponenten des Transports darstellen — diese können ignoriert werden, wenn Sie sich nur für die eigentlichen Codecs interessieren, die für die Medien selbst verwendet werden.
    > Diese werden unten im Abschnitt [Das codecs-Array](#das_codecs-array) beschrieben.

    Jedes Codec-Objekt hat die folgenden Eigenschaften:

    - `channels` {{optional_inline}}
      - : Ein positiver Ganzzahlwert, der die maximale Anzahl von Kanälen angibt, die vom Codec unterstützt werden; zum Beispiel würde ein Codec, der nur Mono-Sound unterstützt, einen Wert von 1 haben; Stereo-Codecs hätten eine 2 usw.
    - `clockRate`
      - : Eine positive Ganzzahl, die die Taktfrequenz des Codecs in Hertz (Hz) angibt.
        Die IANA führt eine [Liste von Codecs und deren Parametern](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktfrequenzen.
    - `mimeType`
      - : Ein String, der den MIME-Medientyp und den Subtyp des Codecs angibt.
        Die von RTP verwendeten MIME-Typ-Strings unterscheiden sich von denen, die anderswo verwendet werden.
        Siehe {{RFC(3555, "", 4)}} für das vollständige IANA-Register dieser Typen.
        Siehe auch [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs) für Details zu potenziellen Codecs, die hier referenziert werden könnten.
    - `sdpFmtpLine` {{optional_inline}}
      - : Ein String, der das formatspezifische Parameterfeld aus der `a=fmtp`-Zeile in der SDP angibt, das dem Codec entspricht, falls eine solche Zeile existiert.
        Wenn es kein Parameterfeld gibt, wird diese Eigenschaft weggelassen.

- `headerExtensions`

  - : Ein Array von Objekten, die jeweils die URI einer [Header-Erweiterung](https://datatracker.ietf.org/doc/html/rfc3550#section-5.3.1) bereitstellen, die für die aktuelle `kind` von Medien unterstützt wird.
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
Es ist durchaus möglich, dass bestimmte Kombinationen von Optionen nicht funktionieren, wenn Sie versuchen, sie tatsächlich zu verwenden.

Der Aufruf von `RTCRtpSender.getCapabilities()` bereitet den Browser in keiner Weise darauf vor, Medien zu handhaben.
Es wird nichts geladen, abgerufen oder auf andere Weise vorbereitet.
Es ist ein Mittel, um festzustellen, was möglicherweise nutzbar ist, bevor Sie versuchen, auf Medien zuzugreifen.

Da der verfügbare Satz an Fähigkeiten dazu neigt, über einen längeren Zeitraum stabil zu sein (Menschen installieren und deinstallieren Codecs und dergleichen nicht sehr oft), können die Medienfähigkeiten ganz oder teilweise eine bereichsübergreifende Methode zur Identifizierung eines Benutzers bereitstellen.
Aus diesem Grund kann der Browser in datenschutzsensiblen Kontexten wählen, die Fähigkeiten zu verschleiern; dies könnte zum Beispiel dadurch geschehen, dass selten verwendete Codec-Konfigurationen weggelassen werden.

### Das codecs-Array

Das `codecs`-Array ist ein Array von Objekten, das einen einzelnen Codec und seine grundlegenden Fähigkeiten beschreibt.
Der Browser meldet nur verschiedene Fähigkeitenskombinationen separat.
Wenn zwei Sätze von Fähigkeiten als einer beschrieben werden können, werden sie es.
Das bedeutet, dass, zum Beispiel, wenn es zwei Einträge für den H.264-Codec (wie durch den [`mimeType`](#mimetype) als "video/H264" identifiziert) gibt, andere Werte in den Fähigkeitsobjekten angeben, wie sie sich in irgendeiner Weise unterscheiden.

Es gibt drei spezielle Einträge, die immer vorhanden sein sollten und die zugrunde liegenden Komponenten des Transports darstellen. Diese Komponenten sind:

- RED (REDundant Audio Data)
  - : Der Medientyp eines RED-Eintrags kann variieren, da es mehrere Versionen davon gibt, aber er endet immer mit `red`, wie `video/red` oder `video/fwdred`.
    Der Basis-RED-Standard kann bei {{RFC(2198)}} gefunden werden. Es kann mehrere Einträge für RED geben, wenn verschiedene Formen davon unterstützt werden; in diesem Fall wird jeder einen einzigartigen Medientyp haben.
- FEC (Forward Error Correction)
  - : Eine FEC-Komponente verarbeitet Fehlerkorrekturdaten; ihr Medientyp kann ebenfalls variieren, da erweiterte Versionen des Standards verfügbar sind, aber er endet immer mit `fec`.
    Ein möglicher Wert ist `video/ulpfec` (ein generisches Fehlerverbindungsmodell).
    Es kann auch mehrere FEC-Einträge geben, wenn mehr als eine Form unterstützt wird.
- RTX (Retransmission)
  - : Diese Komponente ist für die Übertragung von Daten verantwortlich; ihr Medientyp sollte `video/rtx` sein.
    Es wird nur einen Eintrag für RTX geben, und er wird keine [`sdpFmtpLine`](#sdpfmtpline) Eigenschaft haben.

Diese Einträge sollten ignoriert werden, wenn nur Codecs im Zusammenhang mit dem Medium von Interesse sind.

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
log.textContent = `RTCRtpSender.getCapabilities() supported: ${Object.hasOwn(
  RTCRtpSender,
  "getCapabilities",
)}`;
```

{{ EmbedLiveSample('Feature support', '100%', '30px') }}

### Überprüfung der Unterstützung für einen bestimmten Codec

Die folgende Funktion gibt ein `true` oder `false` zurück, das anzeigt, ob das Gerät die Übertragung von H.264-Video über einen [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) unterstützt.

> [!NOTE]
> Da `RTCRtpSender.getCapabilities()` tatsächlich nur _wahrscheinliche_ Unterstützung anzeigt.
> Daher könnte die Unterstützung von H.264 trotz eines positiven Ergebnisses dieser Funktion fehlschlagen.

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

Das JavaScript definiert eine Funktion, um die Fähigkeiten für ein bestimmtes "kind" zu protokollieren.
Diese wird zunächst mit dem Wert `audio` aufgerufen.
Ein Listener aktualisiert den Wert, wenn die Auswahl der Liste `kind` geändert wird.

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
