---
title: "XRReferenceSpace: reset event"
short-title: reset
slug: Web/API/XRReferenceSpace/reset_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Das **`reset`** Ereignis wird an ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) Objekt gesendet, wenn eine Diskontinuität in entweder dem nativen Ursprung oder dem effektiven Ursprung festgestellt wird, die einen Sprung in der Position oder Orientierung von Objekten, die den Bezugspunkt verwenden, verursacht. Dies ist häufig der Fall, wenn der Benutzer ein XR-Gerät kalibriert oder rekalibriert, oder wenn das Gerät seinen Ursprung automatisch ändert, nachdem es das Tracking des Benutzers verloren und dann wiedererlangt hat.

Im Fall von [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) Objekten kann das `reset` Ereignis auch ausgelöst werden, wenn sich die [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) ändert.

In beiden Fällen wird das Ereignis gesendet, bevor WebXR-Animationsframes ausgeführt werden, die den neuen Ursprung nutzen.

Dieses Ereignis ist nicht abbruchfähig.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("reset", (event) => { })

onreset = (event) => { }
```

## Ereignistyp

Ein [`XRReferenceSpaceEvent`](/de/docs/Web/API/XRReferenceSpaceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

## Beschreibung

Das `reset` Ereignis zeigt an, dass das Koordinatensystem zurückgesetzt oder rekonfiguriert wurde, indem der Ursprung des Bezugspunktraums geändert wurde, wobei es durch die [`transform`](/de/docs/Web/API/XRReferenceSpaceEvent/transform) Eigenschaft des Ereignisses verschoben und rotiert wird. Das Ereignis wird gesendet, bevor irgendwelche Animations-Frame-Callbacks ausgeführt werden, um den anstehenden Frame darzustellen, um sicherzustellen, dass diese Callbacks das aktualisierte Koordinatensystem zur Verfügung haben.

Es gibt mehrere Gründe, warum ein Reset auftreten könnte. Die häufigsten unter ihnen sind die folgenden:

- Der Benutzer hat das Koordinatensystem manuell zurückgesetzt, z. B. indem er den Headset dazu aufforderte, sich selbst neu zu kalibrieren, um sicherzustellen, dass die Blickrichtung und die Handcontroller mit der tatsächlichen Position und Blickrichtung des Benutzers synchronisiert sind. Dies ist hauptsächlich ein Problem für `local` oder `local-floor` Bezugspunkt-Räume.
- Bei einem `bounded-floor` Bezugspunkt-Raum kann das Koordinatensystem zurückgesetzt werden, wenn der Benutzer die Grenzen des Bezugspunkt-Raumes verlässt und einen neuen betritt (z. B. wenn man von einem Level zu einem anderen in einem Spiel wechselt, wobei jedes Level seine eigene Karte mit eigenem Koordinatensystem ist).
- Das Tracking-System hat den Benutzer vorübergehend verloren und dann wiedergefunden, aber erst, nachdem er genug bewegt wurde, um die unmittelbare Nähe der zuletzt bekannten Position zu verlassen. Hauptsächlich ein Problem für `unbounded` Bezugspunkt-Räume.
- Der Benutzer befindet sich in einem `unbounded` Bezugspunkt-Raum und hat sich weit genug von der Startposition (dem Ursprung des Bezugspunkt-Raumes) entfernt, dass Gleitkomma- oder andere Formen von Fehlern oder Drift problematisch sind. Das Koordinatensystem wird daher mit seinem neuen Ursprung nahe der aktuellen Position des Benutzers zurückgesetzt.
- Die WebXR-Infrastruktur oder die Hardwaretreiber haben festgestellt, dass das Gerät vorübergehend die Verfolgung verloren hat, wodurch die Hardware und Software bezüglich der Position und Orientierung nicht mehr synchron sind.

> [!NOTE]
> Ein `reset` Ereignis tritt _nicht_ auf, wenn der Bezugspunkt-Raum in der Lage ist, die Verfolgung seines vorherigen Ursprungs wiederzuerlangen, da das bedeutet, dass der Ursprung nicht gezwungen wurde, verlegt zu werden. Dieses Ereignis wird nur ausgelöst, wenn der Ursprung verlegt werden muss, um sich von dem Tracking-Verlust zu erholen.

### Manuelle Resets

Wenn Sie Zeit mit der Nutzung eines VR-Headsets verbracht haben, hatten Sie wahrscheinlich schon Zeiten, in denen Sie es gestartet haben und obwohl Sie geradeaus schauen, denkt das Headset, dass Sie in den Himmel oder auf den Boden schauen; oder Zeiten, in denen Sie den Handcontroller geradeaus richten, aber es denkt, dass Sie ihn irgendwo nach oben und rechts zeigen. Wenn das passiert, halten Sie normalerweise irgendwo eine Taste gedrückt und es verursacht, dass sich die Welt mit der aktuellen Orientierung des Geräts synchronisiert. Das funktioniert, indem ein `reset` Ereignis an den oder die Bezugspunkt-Räume gesendet wird, die auf der Orientierung des Headsets basieren.

### Umgang mit Diskontinuitäten

Sie können Sprünge in der Position des Betrachters handhaben, indem Sie die Boolean-Eigenschaft [`emulatedPosition`](/de/docs/Web/API/XRPose/emulatedPosition) von [`XRPose`](/de/docs/Web/API/XRPose) beobachten. Wenn ein Sprung in der Position des Betrachters mit dem Umschalten von `emulatedPosition` von `true` zu `false` zusammenfällt, hat der Betrachter das Tracking wiedererlangt, und seine neue Position stellt eine Korrektur der zuvor emulierten Werte dar. Dies ist in der Regel das gewünschte Verhalten, wenn Ihre Seite oder App keine Bewegung durch den Raum simuliert, indem sie ausdrücklich die Position und/oder Orientierung des Betrachters ändert (anstatt dass die physischen Bewegungen des Benutzers vom XR-Gerät verwendet werden, um Bewegung einzuführen).

Wenn jedoch eine solche "Teleportation" verwendet wird, wollen Sie tatsächlich vermeiden, die Position des Benutzers nach der Wiedererlangung des Tracking zu springen, da dies zusätzliche und potenziell störende Sprünge einführen kann. Anstatt dies geschehen zu lassen, können Sie `emulatedPosition` in den Teleportations-Offset integrieren, der vor dem Aufrufen von [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) berechnet wird, um einen neuen Bezugspunkt-Raum zu erstellen, dessen aktualisierter effektiver Ursprung durch den Abstand angepasst wird, den die Position des Betrachters seit dem vorherigen Frame gesprungen ist. Auf diese Weise ändert sich die Position des Benutzers nur einmal anstatt zweimal.

### Die Auswirkung der Diskontinuitätsgröße

Das `reset` Ereignis wird nicht ausgelöst, wenn die Diskontinuität klein genug ist, dass das Gerät in der Lage ist, das Tracking innerhalb des gleichen Verfolgungsbereichs wiederzuerlangen. Auch wird es in einem ungebundenen Bezugspunkt-Raum nicht ausgelöst, da es im Laufe der Zeit kleine Anpassungen an seinem nativen Ursprung vornimmt, um die Stabilität des Raumes in der Nähe des Benutzers aufrechtzuerhalten; nur große Diskontinuitäten lösen einen Reset aus.

## Beispiele

Um einen Handler für das `reset` Ereignis hinzuzufügen, können Sie entweder der beiden Ansätze verwenden. Zunächst können Sie die [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) Methode nutzen:

```js
viewerRefSpace.addEventListener("reset", (event) => {
  /* perform reset related tasks */
});
```

Die zweite Option ist es, die `onreset` Ereignishandler-Eigenschaft des `XRReferenceSpace` Objekts zu setzen:

```js
viewerRefSpace.onreset = (event) => {
  /* perform reset related tasks */
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
