---
title: "RTCRtpReceiver: Methode getContributingSources()"
short-title: getContributingSources()
slug: Web/API/RTCRtpReceiver/getContributingSources
l10n:
  sourceCommit: 9716100b38b40f0f2ee8b3bfa2c692958868c5a6
---

{{APIRef("WebRTC API")}}

Die **`getContributingSources()`** Methode der {{domxref("RTCRtpReceiver")}} Schnittstelle gibt ein Array von Objekten zurück, von denen jedes einer CSRC (Contributing Source) Kennung entspricht, die vom aktuellen `RTCRtpReceiver` in den letzten zehn Sekunden empfangen wurde.

## Syntax

```js-nolint
getContributingSources()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Objekten, von denen jedes eine der beitragenden Quellen beschreibt, die Daten zum eingehenden Stream in den letzten zehn Sekunden bereitgestellt haben.
Diese Objekte enthalten die folgenden Eigenschaften:

- `audioLevel` {{optional_inline}}

  - : Ein Gleitkommawert zwischen 0,0 und 1,0, der das im letzten von der beitragenden Quelle gespielten RTP-Paket enthaltene Audiolevel angibt.

    Der Wert befindet sich auf einer linearen Skala und ist in Einheiten von dBov oder Dezibel (Übersteuerung) definiert.
    Dies ist die Amplitude relativ zu dem Punkt, an dem mit der Verzerrung des Audios begonnen wird.
    Ein Wert von 1,0 repräsentiert 0 dBov (maximale Lautstärke), ein Wert von 0,0 repräsentiert Stille, und ein Wert von 0,5 repräsentiert eine Änderung des Schalldruckpegels von ungefähr 6 dB SPL (Dezibel des Schalldruckpegels) von 0 dBov.

    Wenn diese Eigenschaft nicht vorhanden ist, wurde vom Quellgerät kein Lautstärkepegel bereitgestellt.

- `rtpTimestamp` {{optional_inline}}

  - : Der RTP-Zeitstempel (ein Ganzzahl-{{domxref("DOMHighResTimeStamp")}}) der Medien.
    Dieser von der Quelle erzeugte Zeitstempel zeigt die Zeit an, zu der die Medien in diesem Paket, die zur Wiedergabe zu dem durch `timestamp` angegebenen Zeitpunkt geplant sind, ursprünglich abgetastet oder erzeugt wurden.
    Es kann nützlich für Sequenzierungs- und Synchronisationszwecke sein.

- `source` {{optional_inline}}

  - : Ein positiver Ganzzahlwert, der die CSRC-Kennung der beitragenden Quelle angibt.
    Dies identifiziert eindeutig die Quelle des bestimmten Stream-RTP-Pakets.

- `timestamp` {{optional_inline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}, das die letzte Zeit angibt, zu der ein von dieser Quelle stammendes Frame an den {{domxref("MediaStreamTrack")}} des Empfängers geliefert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
