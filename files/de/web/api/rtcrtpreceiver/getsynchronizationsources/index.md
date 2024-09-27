---
title: "RTCRtpReceiver: Methode getSynchronizationSources()"
short-title: getSynchronizationSources()
slug: Web/API/RTCRtpReceiver/getSynchronizationSources
l10n:
  sourceCommit: 9716100b38b40f0f2ee8b3bfa2c692958868c5a6
---

{{APIRef("WebRTC API")}}

Die **`getSynchronizationSources()`**-Methode des [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Interfaces gibt ein Array von Objekten zurück, die jeweils einem SSRC (Synchronisationsquellen)-Bezeichner entsprechen, der in den letzten zehn Sekunden vom aktuellen `RTCRtpReceiver` empfangen wurde.

## Syntax

```js-nolint
getSynchronizationSources()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Objekten, die jeweils eine der Synchronisationsquellen beschreiben, die in den letzten zehn Sekunden Daten zum eingehenden Stream geliefert haben. Diese Objekte enthalten die folgenden Eigenschaften:

- `audioLevel`

  - : Ein Gleitkommawert zwischen 0,0 und 1,0, der den Audiopegel im letzten RTP-Paket angibt, das aus der Synchronisationsquelle abgespielt wurde.

    Der Wert befindet sich auf einer linearen Skala und ist in Einheiten von dBov oder Dezibel (Übersteuerung) definiert.
    Dies ist die Amplitude relativ zu dem Punkt, an dem das Clipping des Audios beginnt.
    Ein Wert von 1,0 repräsentiert 0 dBov (Maximallautstärke), ein Wert von 0,0 repräsentiert Stille und ein Wert von 0,5 repräsentiert eine ungefähr 6 dB SPL (Dezibel Schalldruckpegel)-Änderung im Schalldruckpegel von 0 dBov.

    Dieser Wert ist erforderlich und immer vorhanden.

- `rtpTimestamp` {{optional_inline}}

  - : Der RTP-Zeitstempel (ein ganzzahliger [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)) des Mediums.
    Dieser quellenerzeugte Zeitstempel gibt an, zu welchem Zeitpunkt das Medium in diesem Paket, das zum Abspielen zur durch `timestamp` angegebenen Zeit vorgesehen ist, ursprünglich abgetastet oder erzeugt wurde.
    Er kann nützlich für Sequenzierungs- und Synchronisationszwecke sein.

- `source` {{optional_inline}}

  - : Ein positiver Ganzzahlwert, der die SSRC-Identifikationsnummer der Synchronisationsquelle angibt.
    Diese identifiziert eindeutig die Quelle der bestimmten Stream-RTP-Pakete.

- `timestamp` {{optional_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die letzte Zeit angibt, zu der ein von dieser Quelle stammendes Bild an den Empfänger's [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) geliefert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
