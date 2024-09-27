---
title: "MediaTrackConstraints: displaySurface-Eigenschaft"
short-title: displaySurface
slug: Web/API/MediaTrackConstraints/displaySurface
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Das **`displaySurface`**-Eigenschafts-Dictionary von [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints) ist ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), das den bevorzugten Wert für die [`displaySurface`](/de/docs/Web/API/MediaTrackSettings/displaySurface) einschränkbare Eigenschaft beschreibt.

Diese wird von der Anwendung festgelegt, um dem Benutzeragenten mitzuteilen, welche Art von Anzeigefläche (`window`, `browser` oder `monitor`) von der Anwendung bevorzugt wird. Sie hat keinen Einfluss darauf, was der Benutzer teilen kann, aber sie kann verwendet werden, um die Optionen in einer anderen Reihenfolge anzuzeigen.

Falls erforderlich, können Sie ermitteln, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`MediaTrackSupportedConstraints.displaySurface`](/de/docs/Web/API/MediaTrackSupportedConstraints/displaySurface) überprüfen, wie er durch einen Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgegeben wird. In der Regel ist dies jedoch nicht erforderlich, da Browser alle Einschränkungen ignorieren, die sie nicht kennen.

## Wert

Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), der die von der Anwendung bevorzugte Art der Anzeigefläche angibt.
Dieser Wert _fügt keine_ Anzeigeflächen im Benutzeroberflächenbogen des Browsers hinzu oder entfernt diese, kann sie jedoch neu anordnen. Sie können diese Eigenschaft nicht verwenden, um den Benutzer auf eine Teilmenge der drei Anzeigeflächenwerte `window`, `browser` und `monitor` zu beschränken – aber, wie Sie unten sehen werden, können Sie sehen, was gewählt wurde und es ablehnen.

Sehen Sie sich an, [wie Einschränkungen definiert sind](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#how_constraints_are_defined).

> [!NOTE]
> Sie können [`monitorTypeSurfaces: "exclude"`](/de/docs/Web/API/MediaDevices/getDisplayMedia#monitortypesurfaces) nicht gleichzeitig mit `displaySurface: "monitor"` setzen, da die beiden Einstellungen widersprüchlich sind. Der Versuch, dies zu tun, führt dazu, dass der zugehörige `getDisplayMedia()`-Aufruf mit einem `TypeError` fehlschlägt.

## Anwendungshinweise

Sie können die vom Benutzeragenten ausgewählte Einstellung überprüfen, nachdem das Anzeigemedium mit [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) erstellt wurde, indem Sie [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) für das Anzeigemedium aufrufen
Video-[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), und dann den Wert des zurückgegebenen [`MediaTrackSettings`](/de/docs/Web/API/MediaTrackSettings)-Objekts prüfen
[`displaySurface`](/de/docs/Web/API/MediaTrackSettings/displaySurface)-Objekt.

Zum Beispiel, wenn Ihre App es vorzieht, keinen Monitor zu teilen — was bedeutet, dass möglicherweise ein nicht-inhaltlicher Hintergrund erfasst wird — kann sie Code verwenden, der diesem ähnlich ist:

```js
let mayHaveBackdropFlag = false;
let displaySurface = displayStream
  .getVideoTracks()[0]
  .getSettings().displaySurface;

if (displaySurface === "monitor") {
  mayHaveBackdropFlag = true;
}
```

Nach diesem Code ist `mayHaveBackdrop` `true`, wenn die im Stream enthaltene Anzeigefläche vom Typ `monitor` ist.
Späterer Code kann dieses Flag verwenden, um zu bestimmen, ob spezielle Verarbeitung durchgeführt werden soll,
wie z.B. den Hintergrund zu entfernen oder zu ersetzen, oder die einzelnen Anzeigebereiche aus den empfangenen Videobildern herauszuschneiden.

## Beispiele

Hier sind einige Beispiel-Einschränkungsobjekte für `getDisplayMedia()`, die die `displaySurface`-Eigenschaft verwenden.

```js
dsConstraints = { displaySurface: "window" }; // 'browser' and 'monitor' are also possible
applyConstraints(dsConstraints);
// The user still may choose to share the monitor or the browser,
// but we indicated that a window is preferred.
```

Außerdem sehen Sie sich das
[Constraint-Übung](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser)-Beispiel an, das demonstriert, wie Einschränkungen verwendet werden.

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
