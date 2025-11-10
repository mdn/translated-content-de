---
title: "MediaTrackSettings: screenPixelRatio-Eigenschaft"
short-title: screenPixelRatio
slug: Web/API/MediaTrackSettings/screenPixelRatio
l10n:
  sourceCommit: 66f1ba7918610f1145cde4a1d2d7ecb3baea5f65
---

{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

Die **`screenPixelRatio`**-Eigenschaft des [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Wörterbuchs ist eine Zahl, die das Verhältnis der physischen Größe eines Pixels auf der erfassten Anzeigefläche (angezeigt bei ihrer physischen Auflösung) zur logischen Größe eines CSS-Pixels auf dem erfassenden Bildschirm (angezeigt bei seiner logischen Auflösung) darstellt. Diese kann nicht als Einschränkung oder Fähigkeit verwendet werden.

Diese Eigenschaft ermöglicht es Anwendungen, die die [Screen Capture API](/de/docs/Web/API/Screen_Capture_API) verwenden, Ressourcen zu sparen, indem das Video einer Bildschirmaufnahme in seiner logischen oder geräteunabhängigen Auflösung gesendet wird.

## Wert

Eine Zahl, die das Bildschirm-Pixel-Verhältnis darstellt.

Dies wird berechnet, indem die Größe eines {{Glossary("CSS_pixel", "CSS-Pixels")}} bei einem Seitenzoom von `1.0` und unter Verwendung eines Skalierungsfaktors von `1.0` auf dem erfassenden Bildschirm durch die vertikale Größe eines Pixels von der erfassten [Anzeigefläche](/de/docs/Web/API/MediaTrackConstraints/displaySurface) geteilt wird.

## Beschreibung

Es ist üblich, dass ein Bildschirm über das Betriebssystem (OS) gezoomt wird, zum Beispiel, wenn das Display ein hochauflösendes Display ist und Sie möchten, dass die Grafik in der gleichen physischen Größe angezeigt wird wie auf einem Standardauflösungs-Display. Die Auflösung vor Anwendung des Zooms wird als **logische Auflösung** bezeichnet, und die Auflösung nach Anwendung des Zooms wird als **physische Auflösung** bezeichnet.

Wenn der erfasste Bildschirm des Senders vergrößert wird, ist die physische Auflösung größer als die logische Auflösung, und eine Videokonferenz-App kann daher Bandbreite und CPU sparen, indem:

1. Den vom OS auf die erfasste Anzeigefläche angewandten Zoom entfernt.
2. Das Video der Bildschirmaufnahme in der logischen Auflösung sendet.
3. Den Zoom nach Erhalt auf dem entfernten Client erneut anwenden, um es wieder auf die physische Auflösung zu skalieren.

Die `screenPixelRatio`-Eigenschaft beschreibt das Verhältnis der physischen Größe eines Pixels zur logischen Größe eines CSS-Pixels und ermöglicht es der Anwendung daher, herauszufinden, wie viel ein Zoomfaktor angewendet wurde, und das Video anschließend auf die logische Größe einzuschränken.

Zum Beispiel:

- Wenn die erfasste Anzeigefläche auf einem Standardauflösungs-Bildschirm angezeigt wird, auf dem die physischen Pixeldimensionen etwa den CSS-Pixeldimensionen entsprechen, gibt `screenPixelRatio` den Wert `1` zurück.
- Wenn jedoch die erfasste Anzeigefläche auf einem hochauflösenden Bildschirm angezeigt wird, wo die physischen Pixeldimensionen etwa doppelt so groß sind wie die CSS-Pixeldimensionen, gibt `screenPixelRatio` den Wert `2` zurück.

## Beispiele

### Grundlegende Verwendung von `screenPixelRatio`

In diesem Beispiel definiert die Anwendung eine Konstante `RESOLUTION_LIMIT`, die den Skalierungsfaktor darstellt, über den hinaus die sendende Anwendung das Video in der logischen Auflösung statt der physischen Auflösung senden sollte.

Wenn `screenPixelRatio` dieses Limit überschreitet, verwendet die Anwendung den `screenPixelRatio`-Wert, um die logische Auflösung von der physischen Auflösung zu berechnen und schränkt dann die erfasste [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) auf die logische Auflösung ein.

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
