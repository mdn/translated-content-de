---
title: "MediaTrackSettings: Eigenschaft cursor"
short-title: cursor
slug: Web/API/MediaTrackSettings/cursor
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`cursor`**-Eigenschaft des {{domxref("MediaTrackSettings")}}-Wörterbuchs gibt an, ob der Cursor als Teil der Videoaufnahme im {{domxref("MediaStream")}} erfasst werden soll, das von {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} zurückgegeben wird.

## Wert

Der Wert von `cursor` stammt aus dem `CursorCaptureConstraint`-enum-Typ und kann einen der folgenden Werte haben:

- `always`
  - : Die Maus sollte immer im Videoinhalt des {{domxref("MediaStream")}} sichtbar sein, es sei denn, die Maus hat sich außerhalb des Inhaltsbereichs bewegt.
- `motion`
  - : Der Mauszeiger sollte im Video immer enthalten sein, wenn er sich bewegt, und für kurze Zeit nachdem er aufgehört hat, sich zu bewegen.
- `never`
  - : Der Mauszeiger wird niemals im geteilten Video einbezogen.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaDevices.getDisplayMedia()")}}
- {{domxref("MediaStreamTrack.getConstraints()")}}
- {{domxref("MediaStreamTrack.applyConstraints()")}}
- {{domxref("MediaStreamTrack.getSettings()")}}
