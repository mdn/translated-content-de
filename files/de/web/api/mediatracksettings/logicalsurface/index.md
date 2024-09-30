---
title: "MediaTrackSettings: logicalSurface-Eigenschaft"
short-title: logicalSurface
slug: Web/API/MediaTrackSettings/logicalSurface
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`logicalSurface`**-Eigenschaft des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuchs gibt an, ob der erfasste Anzeigebereich eine logische Oberfläche ist oder nicht. Logische Oberflächen sind solche, die nicht unbedingt vollständig auf dem Bildschirm sichtbar sind oder sogar außerhalb des Bildschirms liegen können, wie z. B. die Puffer von Fenstern (wobei nur ein Teil des Puffers ohne Scrollen des umschließenden Fensters sichtbar ist) und Offscreen-Rendering-Kontexte.

## Wert

Ein boolescher Wert, der `true` ist, wenn der Videotrack im Stream des erfassten Videos von einer logischen Anzeigefläche stammt.

Das häufigste Szenario, in dem eine Anzeigefläche eine logische sein kann, ist, wenn die ausgewählte Fläche den gesamten Inhaltsbereich eines Fensters umfasst, das zu groß ist, um es gleichzeitig auf dem Bildschirm anzuzeigen. Da das Fenster, das die Fläche enthält, gescrollt werden muss, um den Rest der Inhalte anzuzeigen, ist die Fläche eine logische.

Eine sichtbare Anzeigefläche (das heißt, eine Fläche, für die `logicalSurface` `false` zurückgibt) ist der Teil einer logischen Anzeigefläche, der derzeit auf dem Bildschirm sichtbar ist.

Zum Beispiel kann ein Benutzeragent dem Benutzer erlauben zu wählen, ob er das gesamte Dokument (einen `browser` mit dem `logicalSurface`-Wert `true`) oder nur den aktuell sichtbaren Teil des Dokuments freigeben möchte (wobei die `logicalSurface` des `browser`-Bereichs `false` ist).

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
