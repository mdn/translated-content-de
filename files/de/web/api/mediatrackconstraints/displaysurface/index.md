---
title: "MediaTrackConstraints: displaySurface-Eigenschaft"
short-title: displaySurface
slug: Web/API/MediaTrackConstraints/displaySurface
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Das **`displaySurface`**-Eigenschaft des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) Wörterbuchs ist ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), das den bevorzugten Wert für die [`displaySurface`](/de/docs/Web/API/MediaTrackSettings/displaySurface) Fähigkeitseinschränkung beschreibt.

Diese wird von der Anwendung gesetzt, um dem Benutzeragenten die Art der Anzeigeoberfläche (`window`, `browser` oder `monitor`) zu identifizieren, die von der Anwendung bevorzugt wird. Sie hat keinen Einfluss darauf, was der Benutzer teilen kann, kann aber verwendet werden, um die Optionen in einer anderen Reihenfolge zu präsentieren.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.displaySurface`](/de/docs/Web/API/MediaTrackSupportedConstraints/displaySurface) überprüfen, wie er durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht notwendig, da Browser alle nicht bekannten Einschränkungen ignorieren werden.

## Wert

Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), das den von der Anwendung bevorzugten Typ der Anzeigeoberfläche spezifiziert. Dieser Wert _fügt keine neuen_ Anzeigequellen in der Benutzeroberfläche des Browsers hinzu oder entfernt diese, kann sie aber umordnen. Sie können diese Eigenschaft nicht verwenden, um den Benutzer auf einen Teil der drei Anzeigeoberflächenwerte `window`, `browser` und `monitor` zu beschränken — aber, wie Sie unten sehen werden, können Sie sehen, was gewählt wurde, und es ablehnen.

Siehe [wie Einschränkungen definiert sind](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#how_constraints_are_defined).

> [!NOTE]
> Sie können nicht [`monitorTypeSurfaces: "exclude"`](/de/docs/Web/API/MediaDevices/getDisplayMedia#monitortypesurfaces) gleichzeitig mit `displaySurface: "monitor"` festlegen, da die beiden Einstellungen widersprüchlich sind. Der Versuch, dies zu tun, wird dazu führen, dass der zugehörige `getDisplayMedia()`-Aufruf mit einem `TypeError` fehlschlägt.

## Hinweise zur Verwendung

Sie können die vom Benutzeragenten ausgewählte Einstellung überprüfen, nachdem das Anzeigemedium von [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) erstellt wurde, indem Sie [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) auf dem Video-`MediaStreamTrack` des Anzeigemediums aufrufen und dann den Wert des zurückgegebenen [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Objekts [`displaySurface`](/de/docs/Web/API/MediaTrackSettings/displaySurface) überprüfen.

Zum Beispiel, wenn Ihre App es vorzieht, keinen Monitor zu teilen — was bedeutet, dass möglicherweise ein nicht-inhaltsbezogener Hintergrund aufgenommen wird — kann sie einen ähnlichen Code wie diesen verwenden:

```js
let mayHaveBackdropFlag = false;
let displaySurface = displayStream
  .getVideoTracks()[0]
  .getSettings().displaySurface;

if (displaySurface === "monitor") {
  mayHaveBackdropFlag = true;
}
```

Nach diesem Code ist `mayHaveBackdrop` `true`, wenn die im Stream enthaltene Anzeigeoberfläche vom Typ `monitor` ist. Späterer Code kann dieses Flag verwenden, um zu bestimmen, ob spezielle Verarbeitung durchgeführt werden soll, wie etwa das Entfernen oder Ersetzen des Hintergrunds oder das „Ausschneiden“ der einzelnen Anzeigebereiche aus den empfangenen Videobildern.

## Beispiele

Hier sind einige Beispiel-Einschränkungsobjekte für `getDisplayMedia()`, die die `displaySurface` Eigenschaft verwenden.

```js
dsConstraints = { displaySurface: "window" }; // 'browser' and 'monitor' are also possible
applyConstraints(dsConstraints);
// The user still may choose to share the monitor or the browser,
// but we indicated that a window is preferred.
```

Außerdem sehen Sie das Beispiel [Einschränkungsübungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser), das zeigt, wie Einschränkungen verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)
- [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints)
- [`MediaTrackSupportedConstraints`](/de/docs/Web/API/MediaTrackSupportedConstraints)
