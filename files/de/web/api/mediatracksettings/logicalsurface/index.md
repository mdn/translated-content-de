---
title: "MediaTrackSettings: logicalSurface-Eigenschaft"
short-title: logicalSurface
slug: Web/API/MediaTrackSettings/logicalSurface
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`logicalSurface`**-Eigenschaft des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings) Wörterbuchs gibt an, ob der zu erfassende Anzeigebereich eine logische Oberfläche ist. Logische Oberflächen sind solche, die nicht unbedingt vollständig auf dem Bildschirm sichtbar sind oder sogar außerhalb des Bildschirms liegen können, wie z.B. die Hintergrundpuffer von Fenstern (wobei nur ein Teil des Puffers sichtbar ist, ohne das Fenster zu scrollen) und Offscreen-Rendering-Kontexte.

## Wert

Ein boolescher Wert, der `true` ist, wenn der Videotrack im Stream des erfassten Videos von einer logischen Anzeigefläche stammt.

Das häufigste Szenario, in dem eine Anzeigefläche eine logische sein kann, ist, wenn die ausgewählte Fläche den gesamten Inhaltsbereich eines Fensters enthält, das zu groß ist, um gleichzeitig auf dem Bildschirm angezeigt zu werden. Da das Fenster, das die Fläche enthält, gescrollt werden muss, um den Rest des Inhalts anzuzeigen, handelt es sich um eine logische Fläche.

Eine sichtbare Anzeigefläche (d.h. eine Fläche, für die `logicalSurface` `false` zurückgibt) ist der derzeit sichtbare Teil einer logischen Anzeigefläche auf dem Bildschirm.

Ein User-Agent _kann_ zum Beispiel dem Benutzer die Wahl ermöglichen, ob er das gesamte Dokument (ein `browser` mit dem `logicalSurface`-Wert `true`) oder nur den aktuell sichtbaren Teil des Dokuments (wo `logicalSurface` der `browser`-Oberfläche `false` ist) freigeben möchte.

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
