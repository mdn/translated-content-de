---
title: "RTCRtpSender: Methode setParameters()"
short-title: setParameters()
slug: Web/API/RTCRtpSender/setParameters
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{APIRef("WebRTC API")}}

Die **`setParameters()`**-Methode des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Interfaces ändert die Konfiguration des Senders[`track`](/de/docs/Web/API/RTCRtpSender/track), welches das [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) ist, für das der `RTCRtpSender` verantwortlich ist.

Mit anderen Worten, `setParameters()` aktualisiert die Konfiguration der {{Glossary("RTP", "RTP")}}-Übertragung sowie die Kodierungskonfiguration für einen bestimmten ausgehenden Medientrack in der [WebRTC](/de/docs/Web/API/WebRTC_API)-Verbindung.

## Syntax

```js-nolint
setParameters(parameters)
```

### Parameter

- `parameters`

  - : Ein Parameterobjekt, das zuvor durch Aufruf der gleichen Methode des Senders [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) erhalten wurde, mit den gewünschten Änderungen an den Konfigurationsparametern des Senders.
    Diese Parameter umfassen potenzielle Codecs, die zur Kodierung des Senders[`track`](/de/docs/Web/API/RTCRtpSender/track) verwendet werden könnten.
    Die verfügbaren Parameter sind:

    - `encodings`

      - : Ein Array von Objekten, von denen jedes die Parameter für einen einzelnen Codec spezifiziert, der zur Kodierung des Medieninhalts des Tracks verwendet werden könnte.
        Die Eigenschaften der Objekte sind:

        - `active`

          - : Festlegen dieses Wertes auf `true` (Standard) bewirkt, dass diese Kodierung gesendet wird, während `false` das Senden und Verwenden verhindert (aber nicht dazu führt, dass die SSRC entfernt wird).

        - `dtx` {{Deprecated_Inline}} {{Non-standard_Inline}}

          - : Nur verwendet für einen [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender), dessen [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) `audio` ist. Diese Eigenschaft gibt an, ob eine diskontinuierliche Übertragung verwendet werden soll (eine Funktion, bei der ein Telefon ausgeschaltet oder das Mikrofon automatisch stummgeschaltet wird, wenn keine Sprachaktivität vorliegt).
            Der Wert kann entweder `enabled` oder `disabled` sein.

        - `maxBitrate`

          - : Eine positive Ganzzahl, die die maximale Anzahl von Bits pro Sekunde angibt, die der Benutzer-Agent Tracks zuweisen darf, die mit dieser Kodierung kodiert sind.
            Andere Parameter können die Bitrate weiter einschränken, wie z. B. der Wert von `maxFramerate` oder die für den Transport oder das physische Netzwerk verfügbare Bandbreite.

            Der Wert wird unter Verwendung des standardmäßigen Transport Independent Application Specific Maximum (TIAS) Bandbreite, wie definiert von {{RFC(3890, "", "6.2.2")}}, berechnet; dies ist die maximale benötigte Bandbreite, ohne Protokolloverheads von IP, TCP oder UDP zu berücksichtigen usw.

            Beachten Sie, dass die Bitrate auf verschiedene Weise erreicht werden kann, abhängig von den Medien und der Kodierung.
            Zum Beispiel könnte für Video eine niedrige Bitrate durch das Herunterfallen von Frames erreicht werden (eine Bitrate von null könnte nur einen Frame erlauben), während der Track bei Audio aufhören muss zu spielen, wenn die Bitrate zu niedrig ist, um gesendet zu werden.

        - `maxFramerate`
          - : Ein Wert, der die maximale Anzahl von Frames pro Sekunde angibt, die für diese Kodierung zugelassen sind.
        - `priority`
          - : Ein String, der die Priorität des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) angibt und möglicherweise bestimmt, wie der Benutzer-Agent die Bandbreite zwischen Sendern verteilt.
            Zulässige Werte sind `very-low`, `low` (Standard), `medium`, `high`.
        - `rid`

          - : Ein String, der, wenn gesetzt, eine _RTP stream ID_ (_RID_) angibt, die mit der RID-Headererweiterung gesendet wird.
            Dieser Parameter kann nicht mit `setParameters()` geändert werden.
            Sein Wert kann nur gesetzt werden, wenn der Transceiver zuerst erstellt wird.

        - `scaleResolutionDownBy`
          - : Nur verwendet für Sender, deren Track-`kind` [`video`](/de/docs/Web/API/MediaStreamTrack/kind) ist, handelt es sich um einen Gleitkommawert, der einen Faktor angibt, um den das Video während der Kodierung verkleinert werden soll.
            Der Standardwert, 1.0, bedeutet, dass das Video in seiner ursprünglichen Größe kodiert wird.
            Ein Wert von 2.0 skaliert die Video-Frames um einen Faktor von 2 in jeder Dimension herunter, was zu einem Video führt, das 1/4 der ursprünglichen Größe beträgt.
            Der Wert darf nicht kleiner als 1.0 sein (der Versuch, das Video auf eine größere Größe zu skalieren, führt zu einem {{jsxref("RangeError")}}).

    - `transactionId`
      - : Ein String, der eine eindeutige ID enthält.
        Diese ID wird im vorherigen Aufruf von [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) gesetzt und stellt sicher, dass die Parameter von einem vorherigen Aufruf von [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) stammen.
    - `codecs`

      - : Ein Array von Objekten, die die [Mediencodecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) beschreiben, aus denen der Sender wählen wird.
        Dieser Parameter kann nicht geändert werden, nachdem er zuerst gesetzt wurde.

        Jedes Codec-Objekt im Array kann folgende Eigenschaften haben:

        - `channels` {{optional_inline}}

          - : Eine positive Ganzzahl, die die Anzahl der vom Codec unterstützten Kanäle angibt.
            Zum Beispiel gibt bei Audiocodecs ein Wert von 1 Mono-Sound an, während 2 Stereo bedeutet.

        - `clockRate`

          - : Eine positive Ganzzahl, die die Taktfrequenz des Codecs in Hertz (Hz) angibt.
            Die Taktfrequenz ist die Rate, mit der der RTP-Zeitstempel des Codecs fortschreitet.
            Die meisten Codecs haben spezifische Werte oder Bereichswerte, die sie zulassen.
            Die IANA pflegt eine [Liste von Codecs und ihren Parametern](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), einschließlich ihrer Taktfrequenzen.

        - `mimeType`

          - : Ein String, der den MIME-Medientyp und Subtyp des Codecs angibt, spezifiziert als ein String in der Form `"type/subtype"`.
            Die im RTP verwendeten MIME-Typ-Strings unterscheiden sich von denen, die anderswo verwendet werden.
            Die IANA pflegt ein [Register gültiger MIME-Typen](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-2).
            Siehe auch [Codecs used by WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Details über potenzielle Codecs, die hier referenziert werden könnten.

        - `payloadType`

          - : Der [RTP-Payload-Typ](https://www.iana.org/assignments/rtp-parameters/rtp-parameters.xhtml#rtp-parameters-1), der zur Identifizierung dieses Codecs verwendet wird.

        - `sdpFmtpLine` {{optional_inline}}
          - : Ein String, der die format spezifischen Parameter angibt, die von der lokalen Beschreibung bereitgestellt werden.

    - `headerExtensions`
      - : Ein Array von null oder mehr RTP-Headererweiterungen, die jeweils eine Erweiterung identifizieren, die vom Sender unterstützt wird.
        Header-Erweiterungen sind beschrieben in {{RFC(3550, "", "5.3.1")}}.
        Dieser Parameter kann nicht geändert werden.
    - `rtcp`
      - : Ein [`RTCRtcpParameters`](/de/docs/Web/API/RTCRtcpParameters)-Objekt, das die Konfigurationsparameter angibt, die für {{Glossary("RTCP", "RTCP")}} beim Sender verwendet werden.
        Dieser Parameter kann nicht geändert werden.
    - `degradationPreference` {{deprecated_inline}}
      - : Gibt an, wie die WebRTC-Schicht bevorzugt die Bandbreite gegenüber der Qualität in Situationen mit eingeschränkter Bandbreite optimieren soll.
        Die möglichen Werte sind `maintain-framerate`, `maintain-resolution` oder `balanced`.
        Der Standardwert ist `balanced`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, wenn die [`RTCRtpSender.track`](/de/docs/Web/API/RTCRtpSender/track)-Eigenschaft mit den angegebenen Parametern aktualisiert wird.

### Ausnahmen

Tritt ein Fehler auf, wird das zurückgegebene Promise mit der entsprechenden Ausnahme aus der unten stehenden Liste abgelehnt.

- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn eines der folgenden Probleme erkannt wird:
    - Die Anzahl der im `parameters`-Objekt angegebenen `encodings` stimmt nicht mit der aktuell für den `RTCRtpSender` aufgeführten Anzahl von Kodierungen überein.
      Sie können die Anzahl der Kodierungsoptionen nicht ändern, nachdem der Sender erstellt wurde.
    - Die Reihenfolge der angegebenen `encodings` hat sich von der Reihenfolge der aktuellen Liste geändert.
    - Es wurde versucht, eine Eigenschaft zu ändern, die nach der ersten Erstellung des Senders nicht geändert werden kann.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn der Transceiver, zu dem der `RTCRtpSender` gehört, nicht aktiv ist oder keine Parameter zu setzen hat.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn ein Fehler auftritt, der nicht den hier angegebenen entspricht.
- {{jsxref("RangeError")}}
  - : Wird zurückgegeben, wenn der angegebene Wert für die `scaleResolutionDownBy`-Option weniger als 1.0 beträgt – was zu einer Hochskalierung anstatt einer Skalierung nach unten führen würde, was nicht erlaubt ist; oder wenn einer oder mehrere der angegebenen `encodings`-[`maxFramerate`](#maxframerate)-Werte weniger als 0.0 sind.

Darüber hinaus wird, wenn ein WebRTC-Fehler beim Konfigurieren oder Zugreifen auf das Medium auftritt, ein [`RTCError`](/de/docs/Web/API/RTCError) mit dessen [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail) auf `hardware-encoder-error` gesetzt ausgelöst.

## Beschreibung

Es ist wichtig zu beachten, dass Sie das `parameters`-Objekt nicht selbst erstellen können und erwarten können, dass es funktioniert.
Stattdessen _müssen_ Sie zuerst [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) aufrufen, das empfangene Parameterobjekt ändern und dann dieses Objekt an `setParameters()` übergeben.
WebRTC verwendet die `transactionId`-Eigenschaft des Parameterobjekts, um sicherzustellen, dass Ihre Änderungen auf den neuesten Parametern basieren, anstatt auf einer veralteten Konfiguration.

## Beispiele

Ein Anwendungsfall für `setParameters()` besteht darin, den Netzwerkbandbreitenbedarf in begrenzten Umgebungen zu reduzieren, indem die Auflösung und/oder die Bitrate der Medien, die vom [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) gesendet werden, geändert werden.

Derzeit haben einige Browser Einschränkungen in ihren Implementierungen, die Probleme verursachen können.
Aus diesem Grund werden hier zwei Beispiele gegeben.
Das erste zeigt, wie `setParameters()` verwendet werden sollte, wenn alle Browser die verwendeten Parameter vollständig unterstützen, während das zweite Beispiel Lösungen zeigt, um die Einschränkungen in Browsern mit unvollständiger Unterstützung für die Parameter [`maxBitrate`](#maxbitrate) und [`scaleResolutionDownBy`](#scaleresolutiondownby) zu überwinden.

### Entsprechend der Spezifikation

Sobald alle Browser die Spezifikation vollständig implementieren, wird diese Implementierung von `setVideoParams()` die Aufgabe erfüllen. Dies zeigt, wie alles _funktionieren sollte_.
Sie sollten wahrscheinlich das zweite Beispiel unten verwenden, für jetzt.
Aber dies ist eine klarere Darstellung des grundlegenden Konzepts, zunächst die Parameter abzurufen, dann sie zu ändern und sie dann zu setzen.

```js
async function setVideoParams(sender, height, bitrate) {
  const scaleRatio = sender.track.getSettings().height / height;
  const params = sender.getParameters();

  params.encodings[0].scaleResolutionDownBy = Math.max(scaleRatio, 1);
  params.encodings[0].maxBitrate = bitrate;
  await sender.setParameters(params);
}
```

Beim Aufruf dieser Funktion geben Sie einen Sender an sowie die Höhe, auf die Sie das Video des Senders skalieren möchten, und eine maximale Bitrate, die dem Sender erlaubt, die zu übertragen.
Ein Skalierungsfaktor für die Größe des Videos, `scaleRatio`, wird berechnet.
Dann werden die aktuellen Parameter des Senders durch die Verwendung von [`getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) abgerufen.

Die Parameter werden dann geändert, indem das erste `encodings`-Objekt`s [`scaleResolutionDownBy`](#scaleresolutiondownby) und [`maxBitrate`](#maxbitrate) auf den berechneten Skalierungsfaktor und die angegebene maximale `bitrate` geändert werden.

Die geänderten Parameter werden dann gespeichert, indem die `setParameters()`-Methode des Senders aufgerufen wird.

### Aktuell kompatible Implementierung

Wie oben erwähnt, zeigt das vorherige Beispiel, wie die Dinge funktionieren sollen.
Leider gibt es derzeit Implementierungsprobleme, die dies in vielen Browsern verhindern.
Aus diesem Grund sollten Sie, wenn Sie kompatibel mit dem iPhone und anderen Geräten sein möchten, die Safari und Firefox ausführen, einen Code verwenden, der eher so aussieht:

```js
async function setVideoParams(sender, height, bitrate) {
  const scaleRatio = sender.track.getSettings().height / height;
  const params = sender.getParameters();

  // If encodings is null, create it

  if (!params.encodings) {
    params.encodings = [{}];
  }

  params.encodings[0].scaleResolutionDownBy = Math.max(scaleRatio, 1);
  params.encodings[0].maxBitrate = bitrate;
  await sender.setParameters(params);

  // If the newly changed value of scaleResolutionDownBy is 1,
  // use applyConstraints() to be sure the height is constrained,
  // since scaleResolutionDownBy may not be implemented

  if (sender.getParameters().encodings[0].scaleResolutionDownBy === 1) {
    await sender.track.applyConstraints({ height });
  }
}
```

Die Unterschiede hier:

- Wenn `encodings` `null` ist, erstellen wir es, um sicherzustellen, dass wir die Parameter erfolgreich ohne Abstürze setzen können.
- Wenn der Wert von `scaleResolutionDownBy` nach dem Setzen der Parameter immer noch 1 ist, rufen wir die [`applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)-Methode des Tracks des Senders auf, um die Höhe des Tracks auf `height` zu beschränken.
  Dies kompensiert für eine unimplementierte `scaleResolutionDownBy` (wie es zum Zeitpunkt des Schreibens in Safari der Fall ist).

Dieser Code wird sauber zurückfallen und den normalen Weg funktionieren, wenn der Browser die verwendeten Funktionen vollständig implementiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Codecs used by WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)
- [Web-Medientechnologien](/de/docs/Web/Media)
