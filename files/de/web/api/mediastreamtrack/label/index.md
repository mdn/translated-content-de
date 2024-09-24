---
title: "MediaStreamTrack: label-Eigenschaft"
short-title: label
slug: Web/API/MediaStreamTrack/label
l10n:
  sourceCommit: ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{APIRef("Media Capture and Streams")}}

Die **`label`**-Eigenschaft der {{domxref("MediaStreamTrack")}}-Schnittstelle gibt eine schreibgeschützte Zeichenfolge zurück, die ein vom {{glossary("user agent")}} zugewiesenes Label enthält, das die Quelle des Tracks identifiziert, wie beispielsweise `"internal microphone"`.

Die Zeichenfolge kann leer bleiben und ist leer, solange keine Quelle verbunden ist.
Wenn der Track von seiner Quelle getrennt wird, wird das Label nicht geändert.

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
