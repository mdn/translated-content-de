---
title: "MediaRecorder: audioBitrateMode-Eigenschaft"
short-title: audioBitrateMode
slug: Web/API/MediaRecorder/audioBitrateMode
l10n:
  sourceCommit: 0267fa593fc01609738d486f8755bda8e95ecdf2
---

{{APIRef("MediaStream Recording")}}{{SeeCompatTable}}

Die **`audioBitrateMode`** schreibgeschützte Eigenschaft der {{domxref("MediaRecorder")}}-Schnittstelle gibt den Bitratenmodus zurück, der zur Kodierung von Audiospuren verwendet wird.

## Wert

Einer der folgenden:

- `constant`
  - : Der {{domxref("MediaRecorder")}} kodiert mit dieser konstanten Bitrate.
- `variable`
  - : Der {{domxref("MediaRecorder")}} kodiert mit dieser variablen Bitrate, was ermöglicht, dass mehr Speicherplatz für komplexe Signale und weniger für weniger komplexe Signale verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
