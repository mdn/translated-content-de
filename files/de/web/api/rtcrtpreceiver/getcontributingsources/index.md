---
title: "RTCRtpReceiver: Methode getContributingSources()"
short-title: getContributingSources()
slug: Web/API/RTCRtpReceiver/getContributingSources
l10n:
  sourceCommit: 9716100b38b40f0f2ee8b3bfa2c692958868c5a6
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

Ein Array von Objekten, die jeweils eine der mitwirkenden Quellen beschreiben, die in den letzten zehn Sekunden Daten an den eingehenden Stream geliefert haben.
Diese Objekte enthalten die folgenden Eigenschaften:

- `audioLevel` {{optional_inline}}

  - : Ein Gleitkommawert zwischen 0.0 und 1.0, der den Audiopegel im letzten vom Contributing Source abgespielten RTP-Paket angibt.

    Der Wert befindet sich auf einer linearen Skala und ist in dBov-Einheiten oder Dezibel (Übersteuerung) definiert.
    Dies ist die Amplitude relativ zu dem Punkt, an dem die Audiosignal abschneiden beginnt.
    Ein Wert von 1.0 repräsentiert 0 dBov (maximale Lautstärke), ein Wert von 0.0 steht für Stille, und ein Wert von 0.5 repräsentiert eine ungefähre Änderung des Schalldruckpegels um 6 dB SPL (Dezibel des Schalldruckpegels) ab 0 dBov.

    Wenn diese Eigenschaft nicht vorhanden ist, wurde vom Quellgerät kein Lautstärkepegel angegeben.

- `rtpTimestamp` {{optional_inline}}

  - : Der RTP-Zeitstempel (ein ganzzahliger [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)) des Mediums.
    Dieser vom Quellgerät erzeugte Zeitstempel gibt die Zeit an, zu der das Medium in diesem Paket, das zum Zeitpunkt `timestamp` abgespielt werden soll, ursprünglich abgetastet oder erzeugt wurde.
    Er kann für Sequenzierungs- und Synchronisationszwecke nützlich sein.

- `source` {{optional_inline}}

  - : Ein positiver Ganzzahlwert, der den CSRC-Identifier der mitwirkenden Quelle angibt.
    Dieser identifiziert eindeutig die Quelle des bestimmten Stream-RTP-Pakets.

- `timestamp` {{optional_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die letzte Zeit angibt, zu der ein von dieser Quelle stammender Frame an den [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) des Empfängers geliefert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
