---
title: "MediaTrackSettings: screenPixelRatio-Eigenschaft"
short-title: screenPixelRatio
slug: Web/API/MediaTrackSettings/screenPixelRatio
l10n:
  sourceCommit: 99d723c4f77d7f537292a07dd7b5e5c13cb610da
---

{{APIRef("Media Capture and Streams")}}

Die **`screenPixelRatio`**-Eigenschaft des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuchs ist eine Zahl, die das Verhältnis der physischen Größe eines Pixels auf der erfassten Anzeigefläche (angezeigt in ihrer physikalischen Auflösung) zur logischen Größe eines CSS-Pixels auf dem aufzeichnenden Bildschirm (angezeigt in ihrer logischen Auflösung) darstellt. Sie kann nicht als Einschränkung oder Fähigkeit verwendet werden.

Diese Eigenschaft ermöglicht es Anwendungen, die die [Screen Capture API](/de/docs/Web/API/Screen_Capture_API) verwenden, Ressourcen zu sparen, indem das Video einer Bildschirmaufnahme mit ihrer logischen oder geräteunabhängigen Auflösung gesendet wird.

## Wert

Eine Zahl, die das Bildschirm-Pixel-Verhältnis darstellt.

Diese wird berechnet, indem die Größe eines {{Glossary("CSS_pixel", "CSS-Pixels")}} bei einem Seitenzoom von `1.0` und unter Verwendung eines Skalierungsfaktors von `1.0` auf dem aufzeichnenden Bildschirm durch die vertikale Größe eines Pixels von der erfassten [Anzeigefläche](/de/docs/Web/API/MediaTrackConstraints/displaySurface) geteilt wird.

## Beschreibung

Es ist üblich, dass ein Bildschirm durch das Betriebssystem (OS) gezoomt wird, zum Beispiel wenn die Anzeige eine hochauflösende Anzeige ist und Sie möchten, dass die Grafiken in der gleichen physischen Größe angezeigt werden, wie sie auf einem Standardauflösungsdisplay erscheinen würden. Die Auflösung vor der Anwendung des Zooms wird als **logische Auflösung** bezeichnet, und die Auflösung nach Anwendung des Zooms wird als **physikalische Auflösung** bezeichnet.

Wenn der erfasste Bildschirm des Senders herangezoomt ist, dann ist die physikalische Auflösung größer als die logische Auflösung und eine Videokonferenzanwendung kann daher Bandbreite und CPU einsparen, indem:

1. Der vom Betriebssystem angewandte Zoom auf der erfassten Anzeigefläche entfernt wird.
2. Das Video der Bildschirmaufnahme in der logischen Auflösung gesendet wird.
3. Der Zoom nach dem Empfang auf dem entfernten Client wieder angewandt wird, um es auf seine physikalische Auflösung zurück zu skalieren.

Die `screenPixelRatio`-Eigenschaft beschreibt das Verhältnis der physischen Größe eines Pixels zur logischen Größe eines CSS-Pixels und ermöglicht es der Anwendung daher herauszufinden, welcher Zoomfaktor angewandt wurde, und dann das Video auf die logische Größe zu beschränken.

Zum Beispiel:

- Wenn die erfasste Anzeigefläche auf einem Standardauflösungsbildschirm angezeigt wird, bei dem die physischen Pixeldimensionen ungefähr den CSS-Pixeldimensionen entsprechen, gibt `screenPixelRatio` einen Wert von `1` zurück.
- Wenn jedoch die erfasste Anzeigefläche auf einem Bildschirm mit hoher DPI-Auflösung angezeigt wird, bei dem die physischen Pixeldimensionen ungefähr doppelt so groß wie die CSS-Pixeldimensionen sind, gibt `screenPixelRatio` einen Wert von `2` zurück.

## Beispiele

### Grundlegende Verwendung von `screenPixelRatio`

In diesem Beispiel definiert die Anwendung eine Konstante `RESOLUTION_LIMIT`, die den Skalierungsfaktor darstellt, über den hinaus die sendende Anwendung das Video in der logischen statt in der physikalischen Auflösung senden sollte.

Wenn `screenPixelRatio` dieses Limit überschreitet, verwendet die Anwendung den Wert von `screenPixelRatio`, um die logische Auflösung aus der physikalischen Auflösung zu berechnen, und beschränkt dann den erfassten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) auf die logische Auflösung.

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)
