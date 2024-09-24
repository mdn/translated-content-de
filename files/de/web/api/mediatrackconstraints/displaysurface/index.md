---
title: "MediaTrackConstraints: displaySurface-Eigenschaft"
short-title: displaySurface
slug: Web/API/MediaTrackConstraints/displaySurface
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Die **`displaySurface`**-Eigenschaft des {{domxref("MediaTrackConstraints")}}-Wörterbuchs ist ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), der den bevorzugten Wert für die {{domxref("MediaTrackSettings.displaySurface","displaySurface")}}-beschränkbare Eigenschaft beschreibt.

Diese wird von der Anwendung gesetzt, um dem Benutzeragenten die Art der Anzeigefläche (`window`, `browser` oder `monitor`) mitzuteilen, die von der Anwendung bevorzugt wird. Sie hat keinen Einfluss darauf, was der Benutzer freigeben kann, könnte jedoch verwendet werden, um die Optionen in einer anderen Reihenfolge darzustellen.

Falls erforderlich, können Sie feststellen, ob diese Einschränkung unterstützt wird, indem Sie den Wert von {{domxref("MediaTrackSupportedConstraints.displaySurface")}} prüfen, wie er durch einen Aufruf von {{domxref("MediaDevices.getSupportedConstraints()")}} zurückgegeben wird. In der Regel ist dies jedoch nicht nötig, da Browser alle ihnen unbekannten Einschränkungen ignorieren.

## Wert

Ein [`ConstrainDOMString`](/de/docs/Web/API/MediaTrackConstraints#constraindomstring), der die von der Anwendung bevorzugte Art der Anzeigefläche angibt.
Dieser Wert _fügt keine_ Anzeigeflächen in die Benutzeroberfläche des Browsers hinzu oder entfernt diese, könnte aber deren Reihenfolge ändern. Diese Eigenschaft kann nicht verwendet werden, um den Benutzer auf eine Teilmenge der drei Anzeigeflächenwerte `window`, `browser` und `monitor` zu beschränken – aber, wie unten gezeigt, können Sie sehen, was ausgewählt wurde, und es ablehnen.

Siehe [wie Einschränkungen definiert sind](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#how_constraints_are_defined).

> [!NOTE]
> Sie können [`monitorTypeSurfaces: "exclude"`](/de/docs/Web/API/MediaDevices/getDisplayMedia#monitortypesurfaces) nicht gleichzeitig mit `displaySurface: "monitor"` setzen, da die beiden Einstellungen widersprüchlich sind. Wenn Sie dies versuchen, wird der zugehörige `getDisplayMedia()`-Aufruf mit einem `TypeError` fehlschlagen.

## Nutzungshinweise

Sie können die vom Benutzeragenten ausgewählte Einstellung nach der Erstellung des Anzeigematerials mit {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} überprüfen, indem Sie {{domxref("MediaStreamTrack.getSettings", "getSettings()")}} auf dem Video-{{domxref("MediaStreamTrack")}} des Anzeigematerials aufrufen und dann den Wert des zurückgegebenen {{domxref("MediaTrackSettings")}}-Objekts überprüfen
{{domxref("MediaTrackSettings.displaySurface", "displaySurface")}}-Objekt überprüfen.

Zum Beispiel, wenn Ihre Anwendung es vorzieht, keinen Monitor freizugeben – was bedeuten könnte, dass möglicherweise ein nicht-inhaltlicher Hintergrund erfasst wird – können Sie Code wie diesen verwenden:

```js
let mayHaveBackdropFlag = false;
let displaySurface = displayStream
  .getVideoTracks()[0]
  .getSettings().displaySurface;

if (displaySurface === "monitor") {
  mayHaveBackdropFlag = true;
}
```

Nach diesem Code ist `mayHaveBackdrop` `true`, wenn die Anzeigefläche im Stream vom Typ `monitor` ist.
Späterer Code kann diesen Indikator verwenden, um zu bestimmen, ob eine spezielle Verarbeitung durchgeführt werden soll, wie das Entfernen oder Ersetzen des Hintergrunds oder das "Ausschneiden" der einzelnen Anzeigebereiche aus den empfangenen Videobildern.

## Beispiele

Hier sind einige Beispiel-Einschränkungsobjekte für `getDisplayMedia()`, die die `displaySurface`-Eigenschaft verwenden.

```js
dsConstraints = { displaySurface: "window" }; // 'browser' und 'monitor' sind auch möglich
applyConstraints(dsConstraints);
// Der Benutzer kann trotzdem den Monitor oder den Browser auswählen,
// aber wir haben angegeben, dass ein Fenster bevorzugt wird.
```

Außerdem sehen Sie sich das
[Constraint-Exerciser-Beispiel](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) an, das zeigt, wie Einschränkungen verwendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Screen Capture API](/de/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Fähigkeiten, Einschränkungen und Einstellungen](/de/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
