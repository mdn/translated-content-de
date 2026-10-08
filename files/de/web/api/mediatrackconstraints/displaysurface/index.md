---
title: "MediaTrackConstraints: displaySurface-Eigenschaft"
short-title: displaySurface
slug: Web/API/MediaTrackConstraints/displaySurface
l10n:
  sourceCommit: b1bb1b27224e37b2045c6a16b5f9cfa817d0df89
---

{{APIRef("Media Capture and Streams")}}

Die Eigenschaft **`displaySurface`** des [`MediaTrackConstraints`](/de/docs/Web/API/MediaTrackConstraints)-Dictionaries ist ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), der den bevorzugten Wert für die einschränkbare Eigenschaft [`displaySurface`](/de/docs/Web/API/MediaStreamTrack/getSettings#displaysurface) beschreibt.

Die Anwendung legt diesen Wert fest, um dem User Agent mitzuteilen, welche Art von Anzeigefläche (`window`, `browser` oder `monitor`) sie bevorzugt. Der Wert beeinflusst nicht, was Benutzer freigeben können, kann aber verwendet werden, um die Optionen in einer anderen Reihenfolge anzuzeigen.

Falls erforderlich, können Sie prüfen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von [`displaySurface`](/de/docs/Web/API/MediaDevices/getSupportedConstraints#displaysurface) prüfen, den ein Aufruf von [`MediaDevices.getSupportedConstraints()`](/de/docs/Web/API/MediaDevices/getSupportedConstraints) zurückgibt. Normalerweise ist das jedoch nicht nötig, da Browser ihnen unbekannte Einschränkungen ignorieren.

## Wert

Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), der die von der Anwendung bevorzugte Art der Anzeigefläche angibt.
Dieser Wert fügt der Benutzeroberfläche des Browsers _keine_ Anzeigequellen hinzu und entfernt auch keine, kann aber ihre Reihenfolge ändern. Sie können diese Eigenschaft nicht verwenden, um die Auswahl auf eine Teilmenge der drei `displaySurface`-Werte `window`, `browser` und `monitor` zu beschränken. Wie unten beschrieben, können Sie jedoch feststellen, was ausgewählt wurde, und die Auswahl ablehnen.

Siehe [wie Einschränkungen definiert werden](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#how_constraints_are_defined).

> [!NOTE]
> Sie können [`monitorTypeSurfaces: "exclude"`](/de/docs/Web/API/MediaDevices/getDisplayMedia#monitortypesurfaces) nicht gleichzeitig mit `displaySurface: "monitor"` festlegen, da sich die beiden Einstellungen widersprechen. Wenn Sie dies versuchen, schlägt der zugehörige Aufruf von `getDisplayMedia()` mit einem `TypeError` fehl.

## Hinweise zur Verwendung

Nachdem die Bildschirmmedien durch [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) erstellt wurden, können Sie die vom User Agent gewählte Einstellung prüfen. Rufen Sie dazu [`getSettings()`](/de/docs/Web/API/MediaStreamTrack/getSettings) für den Video-[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) der Bildschirmmedien auf und prüfen Sie anschließend den Wert der Eigenschaft [`displaySurface`](/de/docs/Web/API/MediaStreamTrack/getSettings#displaysurface).

Wenn Ihre Anwendung beispielsweise die Freigabe eines Monitors vermeiden möchte – weil dabei möglicherweise auch ein Hintergrund erfasst wird, der nicht zum Inhalt gehört –, kann sie ähnlichen Code wie diesen verwenden:

```js
let mayHaveBackdropFlag = false;
let displaySurface = displayStream
  .getVideoTracks()[0]
  .getSettings().displaySurface;

if (displaySurface === "monitor") {
  mayHaveBackdropFlag = true;
}
```

Nach Ausführung dieses Codes ist `mayHaveBackdrop` `true`, wenn die im Stream enthaltene Anzeigefläche vom Typ `monitor` ist. Späterer Code kann dieses Flag verwenden, um zu entscheiden, ob eine spezielle Verarbeitung erforderlich ist, etwa um den Hintergrund zu entfernen oder zu ersetzen oder die einzelnen Anzeigebereiche aus den empfangenen Videoframes „auszuschneiden“.

## Beispiele

Hier sind einige Beispiele für Einschränkungsobjekte für `getDisplayMedia()`, die die Eigenschaft `displaySurface` verwenden.

```js
dsConstraints = { displaySurface: "window" }; // 'browser' and 'monitor' are also possible
applyConstraints(dsConstraints);
// The user still may choose to share the monitor or the browser,
// but we indicated that a window is preferred.
```

Sehen Sie sich außerdem das Beispiel zum [Testen von Einschränkungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) an, das zeigt, wie Einschränkungen verwendet werden.

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
