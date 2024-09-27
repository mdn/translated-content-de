---
title: "MediaTrackSettings: displaySurface-Eigenschaft"
short-title: displaySurface
slug: Web/API/MediaTrackSettings/displaySurface
l10n:
  sourceCommit: c9e9f9f4faf2e8a5985e5834d9424557341f33c9
---

{{APIRef("Media Capture and Streams")}}

Die **`displaySurface`**-Eigenschaft des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuchs gibt den Typ der Anzeigeoberfläche an, die erfasst wird.

## Wert

Der Wert von `displaySurface` ist ein String, der aus dem `DisplayCaptureSurfaceType`-Aufzählungstyp stammt und eines der folgenden ist:

- `browser`
  - : Der Videostream zeigt den gesamten Inhalt eines einzelnen Browser-Tabs, den der Benutzer während des Aufrufs von [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) ausgewählt hat.
- `monitor`
  - : Der Videostream präsentiert den vollständigen Inhalt eines oder mehrerer Bildschirme des Benutzers. Jeder leere Raum (falls die Anzeigen unterschiedliche Dimensionen haben) wird mit einem vom User Agent ausgewählten Hintergrund gefüllt.
- `window`
  - : Der Videostream zeigt den Inhalt eines einzelnen Fensters, das vom Benutzer ausgewählt wurde. Das Fenster kann von jeder Anwendung stammen, nicht notwendigerweise nur vom User Agent.

Nicht alle User Agents unterstützen alle diese Oberflächentypen.

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
