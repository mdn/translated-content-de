---
title: "MediaTrackSettings: cursor-Eigenschaft"
short-title: cursor
slug: Web/API/MediaTrackSettings/cursor
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`cursor`**-Eigenschaft des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuchs gibt an, ob der Cursor als Teil des im [`MediaStream`](/de/docs/Web/API/MediaStream) enthaltenen Videostreams, der durch [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) zurückgegeben wird, erfasst werden soll oder nicht.

## Wert

Der Wert von `cursor` stammt aus dem `CursorCaptureConstraint`-enumerierten String-Typ und kann einen der folgenden Werte haben:

- `always`
  - : Die Maus sollte immer im Videoinhalt des [`MediaStream`](/de/docs/Web/API/MediaStream) sichtbar sein, es sei denn, die Maus bewegt sich außerhalb des Inhaltsbereichs.
- `motion`
  - : Der Mauszeiger sollte immer im Video enthalten sein, wenn er sich bewegt, und für kurze Zeit, nachdem er aufgehört hat, sich zu bewegen.
- `never`
  - : Der Mauszeiger wird nie im geteilten Video enthalten sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaDevices.getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)
- [`MediaStreamTrack.getConstraints()`](/de/docs/Web/API/MediaStreamTrack/getConstraints)
- [`MediaStreamTrack.applyConstraints()`](/de/docs/Web/API/MediaStreamTrack/applyConstraints)
- [`MediaStreamTrack.getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings)
