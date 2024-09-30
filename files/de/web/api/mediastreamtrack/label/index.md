---
title: "MediaStreamTrack: label-Eigenschaft"
short-title: label
slug: Web/API/MediaStreamTrack/label
l10n:
  sourceCommit: ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{APIRef("Media Capture and Streams")}}

Die schreibgeschützte **`label`**-Eigenschaft der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Schnittstelle gibt einen String zurück, der ein vom [User Agent](/de/docs/Glossary/user_agent) zugewiesenes Label enthält, das die Quelle des Tracks identifiziert, wie zum Beispiel `"internal microphone"`.

Der String kann leer sein und bleibt leer, solange keine Quelle verbunden wurde. Wenn der Track von seiner Quelle getrennt wird, ändert sich das Label nicht.

## Syntax

```js-nolint
const label = track.label
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
