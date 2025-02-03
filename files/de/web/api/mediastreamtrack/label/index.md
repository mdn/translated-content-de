---
title: "MediaStreamTrack: label-Eigenschaft"
short-title: label
slug: Web/API/MediaStreamTrack/label
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Media Capture and Streams")}}

Die **`label`** schreibgeschützte Eigenschaft der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Schnittstelle gibt einen String zurück, der ein vom {{Glossary("user_agent", "User-Agent")}} zugewiesenes Label enthält, das die Quelle des Tracks identifiziert, wie beispielsweise `"internal microphone"`.

Der String kann leer sein und bleibt leer, solange keine Quelle verbunden ist. Wenn der Track von seiner Quelle getrennt wird, ändert sich das Label nicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
