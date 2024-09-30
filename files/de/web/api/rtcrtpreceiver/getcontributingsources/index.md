---
title: "RTCRtpReceiver: Methode getContributingSources()"
short-title: getContributingSources()
slug: Web/API/RTCRtpReceiver/getContributingSources
l10n:
  sourceCommit: 9716100b38b40f0f2ee8b3bfa2c692958868c5a6
---

{{APIRef("WebRTC API")}}

Die **`getContributingSources()`** Methode der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) Schnittstelle gibt ein Array von Objekten zurück, die jeweils einem CSRC (Contributing Source) Identifikator entsprechen, der vom aktuellen `RTCRtpReceiver` in den letzten zehn Sekunden empfangen wurde.

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

  - : Ein Gleitkommawert zwischen 0,0 und 1,0, der den Audiopegel im letzten vom beitragenden Quellcode wiedergegebenen RTP-Paket angibt.

    Der Wert befindet sich auf einer linearen Skala und ist in Einheiten von dBov oder Dezibel (Übersteuerung) definiert.
    Dies ist die Amplitude im Verhältnis zu dem Punkt, an dem das Clipping des Audios beginnt.
    Ein Wert von 1,0 repräsentiert 0 dBov (maximale Lautstärke), ein Wert von 0,0 repräsentiert Stille, und ein Wert von 0,5 repräsentiert ungefähr eine Änderung des Schalldruckpegels von 6 dB SPL (Dezibel des Schalldruckpegels) gegenüber 0 dBov.

    Wenn diese Eigenschaft nicht vorhanden ist, wurde vom Quellcode kein Lautstärkepegel bereitgestellt.

- `rtpTimestamp` {{optional_inline}}

  - : Der RTP-Zeitstempel (ein Ganzzahl-[`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)) der Medien.
    Dieser vom Quellcode erzeugte Zeitstempel gibt die Zeit an, zu der die Medien in diesem Paket, das zur Wiedergabe zu dem durch `timestamp` angegebenen Zeitpunkt geplant ist, ursprünglich abgetastet oder erzeugt wurden.
    Es kann nützlich für Sequenzierungs- und Synchronisierungszwecke sein.

- `source` {{optional_inline}}

  - : Ein positiver Ganzzahlwert, der den CSRC-Identifikator der beitragenden Quelle angibt.
    Dieser identifiziert eindeutig die Quelle der speziellen Stream-RTP-Pakete.

- `timestamp` {{optional_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den jüngsten Zeitpunkt angibt, zu dem ein von dieser Quelle stammendes Frame dem Empfänger 's[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) geliefert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
