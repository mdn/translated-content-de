---
title: "RTCRtpReceiver: getContributingSources()-Methode"
short-title: getContributingSources()
slug: Web/API/RTCRtpReceiver/getContributingSources
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebRTC API")}}

Die **`getContributingSources()`**-Methode der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Schnittstelle gibt ein Array von Objekten zurück, von denen jedes einem CSRC (Contributing Source) Identifier entspricht, der vom aktuellen `RTCRtpReceiver` in den letzten zehn Sekunden empfangen wurde.

## Syntax

```js-nolint
getContributingSources()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Objekten, die jeweils eine der beitragenden Quellen beschreiben, die in den letzten zehn Sekunden Daten zum eingehenden Stream geliefert haben.
Diese Objekte enthalten die folgenden Eigenschaften:

- `audioLevel` {{optional_inline}}
  - : Ein Gleitkommawert zwischen 0,0 und 1,0, der den Audiopegel im letzten von der beitragenden Quelle gespielten RTP-Paket angibt.

    Der Wert ist auf einer linearen Skala und wird in Einheiten von dBov oder Dezibel (Übersteuerung) definiert.
    Dies ist die Amplitude relativ zu dem Punkt, an dem das Clipping des Audios einsetzt.
    Ein Wert von 1,0 repräsentiert 0 dBov (maximale Lautstärke), ein Wert von 0,0 repräsentiert Stille und ein Wert von 0,5 repräsentiert eine Änderung des Schalldruckpegels von circa 6 dB SPL (Dezibel Schalldruckpegel) von 0 dBov.

    Wenn diese Eigenschaft nicht vorhanden ist, wurde vom Quellmedium keine Lautstärke bereitgestellt.

- `rtpTimestamp` {{optional_inline}}
  - : Der RTP-Zeitstempel (ein ganzzahliger [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)) des Mediums.
    Dieser von der Quelle generierte Zeitstempel gibt die Zeit an, zu der das im Paket enthaltene Medium, das zum im `timestamp` angegebenen Zeitpunkt ausgespielt werden soll, ursprünglich abgetastet oder erzeugt wurde.
    Er kann für Sequenzierungs- und Synchronisationszwecke nützlich sein.

- `source` {{optional_inline}}
  - : Ein positiver Integerwert, der den CSRC-Identifikator der beitragenden Quelle angibt.
    Dies identifiziert eindeutig die Quelle des bestimmten Streams der RTP-Pakete.

- `timestamp` {{optional_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die aktuellste Zeit angibt, zu der ein von dieser Quelle stammendes Frame zum [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) des Empfangsgeräts geliefert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
