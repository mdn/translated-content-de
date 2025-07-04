---
title: "MediaTrackSettings: screenPixelRatio-Eigenschaft"
short-title: screenPixelRatio
slug: Web/API/MediaTrackSettings/screenPixelRatio
l10n:
  sourceCommit: 2f3821009265f78e5ad9c3149b5fa954c030972f
---

{{APIRef("Media Capture and Streams")}}

Die **`screenPixelRatio`**-Eigenschaft des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuchs ist eine Zahl, die das Verhältnis der physischen Größe eines Pixels auf der erfassten Anzeigeoberfläche (in ihrer physischen Auflösung angezeigt) zur logischen Größe eines CSS-Pixels auf dem erfassenden Bildschirm (in seiner logischen Auflösung angezeigt) darstellt. Diese kann nicht als Einschränkung oder Fähigkeit verwendet werden.

Diese Eigenschaft ermöglicht es Anwendungen, die die [Screen Capture API](/de/docs/Web/API/Screen_Capture_API) verwenden, Ressourcen zu sparen, indem das Video eines Bildschirmabzugs in seiner logischen oder geräteunabhängigen Auflösung gesendet wird.

## Wert

Eine Zahl, die das Bildschirm-Pixel-Verhältnis darstellt.

Dies wird berechnet, indem die Größe eines {{Glossary("CSS_pixel", "CSS-Pixels")}} bei einem Seitenzoom von `1.0` und Verwendung eines Skalierungsfaktors von `1.0` auf dem erfassenden Bildschirm durch die vertikale Größe eines Pixels von der erfassten [Anzeigeoberfläche](/de/docs/Web/API/MediaTrackConstraints/displaySurface) geteilt wird.

## Beschreibung

Es ist üblich, dass auf einem Bildschirm über das Betriebssystem (OS) ein Zoom angewendet wird, z. B. wenn das Display ein hochauflösendes Display ist und Sie möchten, dass die Grafiken in derselben physischen Größe wie auf einem Standardauflösungsdisplay angezeigt werden. Die Auflösung vor Anwendung des Zooms wird als **logische Auflösung** bezeichnet, und die Auflösung nach der Anwendung des Zooms wird als **physische Auflösung** bezeichnet.

Wenn der Bildschirm des Senders erfasst und herangezoomt wird, ist die physische Auflösung größer als die logische Auflösung, und eine Videokonferenz-App kann daher Bandbreite und CPU sparen, indem sie:

1. Den durch das OS angewendeten Zoom von der erfassten Anzeigeoberfläche entfernt.
2. Das Video des Bildschirmabzugs in der logischen Auflösung sendet.
3. Den Zoom nach dem Empfang auf dem entfernten Client wieder anwendet, um ihn auf seine physische Auflösung zu vergrößern.

Die `screenPixelRatio`-Eigenschaft beschreibt das Verhältnis der physischen Größe eines Pixels zur logischen Größe eines CSS-Pixels und ermöglicht es der Anwendung daher, herauszufinden, wie viel Zoomfaktor angewendet wurde, und das Video auf die logische Größe zu beschränken.

Zum Beispiel:

- Wenn die erfasste Anzeigeoberfläche auf einem Standardauflösungsbildschirm angezeigt wird, bei dem die physischen Pixelabmessungen ungefähr den CSS-Pixelabmessungen entsprechen, wird `screenPixelRatio` den Wert `1` zurückgeben.
- Wenn jedoch die erfasste Anzeigeoberfläche auf einem hoch-dpi Auflösungsdisplay angezeigt wird, bei dem die physischen Pixelabmessungen ungefähr doppelt so groß wie die CSS-Pixelabmessungen sind, wird `screenPixelRatio` den Wert `2` zurückgeben.

## Beispiele

### Grundlegende `screenPixelRatio`-Verwendung

In diesem Beispiel definiert die Anwendung eine Konstante `RESOLUTION_LIMIT`, die den Skalierungsfaktor darstellt, ab dem die sendende Anwendung das Video in der logischen Auflösung anstelle der physischen Auflösung senden sollte.

Wenn `screenPixelRatio` dieses Limit überschreitet, verwendet die Anwendung den `screenPixelRatio`-Wert, um die logische Auflösung aus der physischen Auflösung zu berechnen, und beschränkt dann die erfasste [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) auf die logische Auflösung.

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
