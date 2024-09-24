---
title: "MediaTrackSettings: logicalSurface-Eigenschaft"
short-title: logicalSurface
slug: Web/API/MediaTrackSettings/logicalSurface
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`logicalSurface`**-Eigenschaft des {{domxref("MediaTrackSettings")}}-Wörterbuchs gibt an, ob der aufgenommene Anzeigebereich eine logische Oberfläche ist. Logische Oberflächen sind solche, die nicht unbedingt vollständig auf dem Bildschirm sichtbar sind oder sogar außerhalb des Bildschirms liegen können, wie z. B. Fensterpuffer (bei denen nur ein Teil des Puffers sichtbar ist, ohne das enthaltende Fenster zu scrollen) und Offscreen-Rendering-Kontexte.

## Wert

Ein Boolean-Wert, der `true` ist, wenn der Videostream des aufgenommenen Videos von einer logischen Anzeigeoberfläche stammt.

Das häufigste Szenario, in dem eine Anzeigeoberfläche eine logische sein kann, ist, wenn die ausgewählte Oberfläche den gesamten Inhaltsbereich eines Fensters enthält, das zu groß ist, um vollständig auf dem Bildschirm angezeigt zu werden. Da das Fenster, das die Oberfläche enthält, gescrollt werden muss, um den Rest des Inhalts anzuzeigen, handelt es sich um eine logische Oberfläche.

Eine sichtbare Anzeigeoberfläche (d. h. eine Oberfläche, für die `logicalSurface` `false` zurückgibt) ist der Teil einer logischen Anzeigeoberfläche, der derzeit auf dem Bildschirm sichtbar ist.

Zum Beispiel kann ein User-Agent dem Benutzer ermöglichen zu wählen, ob er das gesamte Dokument (ein `browser` mit einem `logicalSurface`-Wert von `true`) oder nur den derzeit sichtbaren Teil des Dokuments (wo der `logicalSurface` des `browser`-Oberfläche `false` ist) teilen möchte.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaDevices.getDisplayMedia()")}}
- {{domxref("MediaStreamTrack.getConstraints()")}}
- {{domxref("MediaStreamTrack.applyConstraints()")}}
- {{domxref("MediaStreamTrack.getSettings()")}}
