---
title: "MediaRecorder: audioBitrateMode-Eigenschaft"
short-title: audioBitrateMode
slug: Web/API/MediaRecorder/audioBitrateMode
l10n:
  sourceCommit: 0267fa593fc01609738d486f8755bda8e95ecdf2
---

{{APIRef("MediaStream Recording")}}{{SeeCompatTable}}

Die schreibgeschützte **`audioBitrateMode`**-Eigenschaft des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Interfaces gibt den Bitratenmodus zurück, der zur Kodierung von Audiotracks verwendet wird.

## Wert

Einer der folgenden:

- `constant`
  - : Der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) kodiert mit dieser konstanten Bitrate.
- `variable`
  - : Der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) kodiert mit dieser variablen Bitrate, wodurch mehr Platz für komplexe Signale und weniger Platz für weniger komplexe Signale genutzt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
