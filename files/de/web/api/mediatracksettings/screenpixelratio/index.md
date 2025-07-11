---
title: "MediaTrackSettings: screenPixelRatio-Eigenschaft"
short-title: screenPixelRatio
slug: Web/API/MediaTrackSettings/screenPixelRatio
l10n:
  sourceCommit: b3fdc103f6675aaae4419f5f61fc2f1d4782311e
---

{{APIRef("Media Capture and Streams")}}

Die **`screenPixelRatio`**-Eigenschaft des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuchs ist eine Zahl, die das Verhältnis der physischen Größe eines Pixels auf der erfassten Anzeigefläche (angezeigt bei ihrer physikalischen Auflösung) zur logischen Größe eines CSS-Pixels auf dem erfassenden Bildschirm (angezeigt bei ihrer logischen Auflösung) darstellt. Es kann nicht als Einschränkung oder Fähigkeit verwendet werden.

Diese Eigenschaft ermöglicht Anwendungen, die die [Screen Capture API](/de/docs/Web/API/Screen_Capture_API) verwenden, Ressourcen zu sparen, indem das Video einer Bildschirmaufnahme bei ihrer logischen oder geräteunabhängigen Auflösung gesendet wird.

## Wert

Eine Zahl, die das Bildschirm-Pixel-Verhältnis darstellt.

Dies wird berechnet, indem die Größe eines {{Glossary("CSS_pixel", "CSS-Pixels")}} bei einem Seitenzoom von `1.0` und unter Verwendung eines Skalierungsfaktors von `1.0` auf dem erfassenden Bildschirm durch die vertikale Größe eines Pixels von der erfassten [Anzeigefläche](/de/docs/Web/API/MediaTrackConstraints/displaySurface) geteilt wird.

## Beschreibung

Es ist üblich, dass ein Zoom über das Betriebssystem (OS) auf einen Bildschirm angewendet wird, zum Beispiel wenn das Display ein hochauflösendes Display ist, und Sie möchten, dass die Grafiken in der gleichen physischen Größe wie auf einem Standardauflösungs-Display angezeigt werden. Die Auflösung vor dem Anwenden des Zooms wird als **logische Auflösung** bezeichnet und die Auflösung nach dem Anwenden des Zooms wird als **physische Auflösung** bezeichnet.

Wenn der erfasste Bildschirm des Senders herangezoomt ist, ist die physische Auflösung größer als die logische Auflösung. Eine Videokonferenz-App kann daher Bandbreite und CPU sparen, indem sie:

1. Den vom OS auf die erfasste Anzeigefläche angewendeten Zoom entfernt.
2. Das Video der Bildschirmaufnahme in der logischen Auflösung sendet.
3. Den Zoom nach Erhalt auf dem entfernten Client erneut anwendet, um ihn wieder auf die physische Auflösung zu skalieren.

Die `screenPixelRatio`-Eigenschaft beschreibt das Verhältnis der physischen Größe eines Pixels zur logischen Größe eines CSS-Pixels und ermöglicht es der Anwendung daher herauszufinden, wie viel Zoomfaktor angewendet wurde, und dann das Video auf die logische Größe zu begrenzen.

Zum Beispiel:

- Wenn die erfasste Anzeigefläche auf einem Standardauflösungsbildschirm angezeigt wird, bei dem die physischen Pixelmaße ungefähr den CSS-Pixelmaßen entsprechen, wird `screenPixelRatio` einen Wert von `1` zurückgeben.
- Wenn jedoch die erfasste Anzeigefläche auf einem Bildschirm mit hoher dpi-Auflösung angezeigt wird, bei dem die physischen Pixelmaße ungefähr doppelt so groß sind wie die CSS-Pixelmaße, wird `screenPixelRatio` einen Wert von `2` zurückgeben.

## Beispiele

### Grundlegende Verwendung von `screenPixelRatio`

In diesem Beispiel definiert die Anwendung eine Konstante `RESOLUTION_LIMIT`, die den Skalierungsfaktor darstellt, über den die sendende Anwendung das Video in der logischen Auflösung anstelle der physischen Auflösung senden sollte.

Wenn `screenPixelRatio` diesen Grenzwert überschreitet, verwendet die Anwendung den Wert von `screenPixelRatio`, um die logische Auflösung von der physischen Auflösung zu berechnen, und begrenzt dann die erfasste [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) auf die logische Auflösung.

```js
const RESOLUTION_LIMIT = 1.5;

async function startCapture() {
  const stream = await navigator.mediaDevices.getDisplayMedia({
    video: true,
  });
  const track = stream.getVideoTracks()[0];
  const settings = track.getSettings();
  const capabilities = track.getCapabilities();

  if (settings.screenPixelRatio > RESOLUTION_LIMIT) {
    const physicalWidth = capabilities.width.max;
    const physicalHeight = capabilities.height.max;
    const logicalWidth = physicalWidth / settings.screenPixelRatio;
    const logicalHeight = physicalHeight / settings.screenPixelRatio;
    await track.applyConstraints({
      width: logicalWidth,
      height: logicalHeight,
    });
  }
}
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
