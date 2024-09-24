---
title: "MediaTrackSettings: displaySurface-Eigenschaft"
short-title: displaySurface
slug: Web/API/MediaTrackSettings/displaySurface
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`displaySurface`**-Eigenschaft des {{domxref("MediaTrackSettings")}}-Wörterbuchs zeigt den Typ der erfassten Anzeigefläche an.

## Wert

Der Wert von `displaySurface` ist ein String, der aus dem Aufzählungstyp `DisplayCaptureSurfaceType` stammt und einer der folgenden sein kann:

- `browser`
  - : Der Videotrack des Streams zeigt den gesamten Inhalt eines einzelnen Browser-Tabs an, den der Benutzer während des Aufrufs von {{domxref("MediaDevices.getDisplayMedia","getDisplayMedia()")}} ausgewählt hat.
- `monitor`
  - : Der Videotrack im Stream zeigt die vollständigen Inhalte eines oder mehrerer Bildschirme des Benutzers an. Jeder leere Raum (falls die Bildschirme unterschiedliche Abmessungen haben) wird mit einem vom Benutzeragenten gewählten Hintergrund gefüllt.
- `window`
  - : Der Videotrack des Streams zeigt die Inhalte eines vom Benutzer ausgewählten einzelnen Fensters an. Das Fenster kann aus jeder Anwendung stammen, nicht notwendigerweise nur aus dem Benutzeragenten.

Nicht alle Benutzeragenten unterstützen alle diese Anzeigeflächentypen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaDevices.getDisplayMedia()")}}
- {{domxref("MediaStreamTrack.getConstraints()")}}
- {{domxref("MediaStreamTrack.applyConstraints()")}}
- {{domxref("MediaStreamTrack.getSettings()")}}
