---
title: "XRReferenceSpace: reset-Ereignis"
short-title: reset
slug: Web/API/XRReferenceSpace/reset_event
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Das **`reset`**-Ereignis wird an ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)-Objekt gesendet, wenn eine Diskontinuität entweder im nativen Ursprung oder im effektiven Ursprung erkannt wird, was zu einem Sprung in der Position oder Orientierung von Objekten führt, die mit dem Referenzraum ausgerichtet sind. Dies passiert oft, wenn der Benutzer ein XR-Gerät kalibriert oder rekaliert, oder wenn das Gerät seinen Ursprung automatisch ändert, nachdem es die Verfolgung des Benutzers verloren hat und diese dann wiedererlangt.

Im Fall von [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace)-Objekten kann das `reset`-Ereignis auch ausgelöst werden, wenn sich die [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) ändert.

In beiden Fällen wird das Ereignis gesendet, bevor WebXR-Animationsrahmen ausgeführt werden, die den neuen Ursprung nutzen.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("reset", (event) => {});

onreset = (event) => {};
```

## Ereignistyp

Ein [`XRReferenceSpaceEvent`](/de/docs/Web/API/XRReferenceSpaceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind auch Eigenschaften der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`referenceSpace`](/de/docs/Web/API/XRReferenceSpaceEvent/referenceSpace) {{ReadOnlyInline}}
  - : Ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace), das den Referenzraum anzeigt, der das Ereignis erzeugt hat.
- [`transform`](/de/docs/Web/API/XRReferenceSpaceEvent/transform) {{ReadOnlyInline}}
  - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Objekt, das die Position und Orientierung des nativen Ursprungs des angegebenen `referenceSpace`-Objekts nach dem Ereignis anzeigt, relativ zum Koordinatensystem vor dem Ereignis definiert.

## Beschreibung

Das `reset`-Ereignis zeigt an, dass das Koordinatensystem zurückgesetzt oder rekonfiguriert wurde, indem der Ursprung des Referenzraums geändert wurde, was zu seiner Bewegung und Drehung gemäß der `transform`-Eigenschaft des Ereignisses führt. Das Ereignis wird gesendet, bevor Callback-Funktionen für Animationsbilder ausgeführt werden, um den ausstehenden Frame zu rendern, damit diese Callback-Funktionen das aktualisierte Koordinatensystem verfügbar haben.

Es gibt mehrere Gründe, warum ein Reset erfolgen könnte. Die häufigsten sind die folgenden:

- Der Benutzer hat das Koordinatensystem manuell zurückgesetzt, z. B. durch die Anforderung, dass das Headset sich selbst rekaliert, um sicherzustellen, dass die Frontansicht und die Handcontroller mit der tatsächlichen Position und Richtung des Benutzers synchronisiert sind. Dies ist hauptsächlich ein Problem bei `local` oder `local-floor`-Referenzräumen.
- Für einen `bounded-floor`-Referenzraum kann das Koordinatensystem zurückgesetzt werden, wenn der Benutzer die Grenzen des Referenzraums verlässt und einen neuen betritt (z. B. durch Überqueren von einer Ebene zur anderen in einem Spiel, wobei jede Ebene ihre eigene Karte mit ihrem eigenen Koordinatensystem ist).
- Das Trackingsystem hat den Benutzer vorübergehend verloren und hat ihn dann wiedergefunden, allerdings erst nachdem er sich weit genug bewegt hatte, um die unmittelbare Nähe des zuletzt bekannten Standorts zu verlassen. Dies ist hauptsächlich ein Problem bei `unbounded`-Referenzräumen.
- Der Benutzer befindet sich in einem `unbounded`-Referenzraum und hat sich weit genug vom Ausgangspunkt (dem Ursprung des Referenzraums) entfernt, dass Rundungsfehler oder andere Formen von Fehlern oder Drift problematisch sind. Das Koordinatensystem wird daher zurückgesetzt, wobei der neue Ursprung am oder in der Nähe des aktuellen Standorts des Benutzers liegt.
- Die WebXR-Infrastruktur oder die Hardware-Treiber haben erkannt, dass das Gerät vorübergehend das Tracking verloren hat, was dazu führt, dass die Hardware und die Software in Bezug auf Position und Orientierung nicht mehr synchron sind.

> [!NOTE]
> Ein `reset`-Ereignis tritt _nicht_ auf, wenn der Referenzraum in der Lage ist, die Verfolgung seines vorherigen Ursprungs wiederherzustellen, da dies bedeutet, dass der Ursprung nicht gezwungen wurde, verlegt zu werden. Dieses Ereignis wird nur ausgelöst, wenn der Ursprung verlegt werden muss, um die Verfolgungsverlust zu beheben.

### Manuelle Resets

Wenn Sie jemals ein VR-Headset benutzt haben, haben Sie sicher schon Zeiten erlebt, in denen Sie es einschalten und obwohl Sie geradeaus schauen, denkt das Headset, Sie blicken in den Himmel oder auf den Boden; oder Zeiten, in denen Sie den Handcontroller gerade nach vorne zeigen, aber es denkt, dass Sie ihn irgendwo nach oben und rechts zeigen. Wenn das passiert, halten Sie in der Regel einen Knopf irgendwo gedrückt und es führt dazu, dass die Welt mit der aktuellen Ausrichtung des Geräts synchronisiert wird. Dies funktioniert, indem ein `reset`-Ereignis an den Referenzraum oder die Referenzräume gesendet wird, die auf der Ausrichtung des Headsets basieren.

### Umgang mit Diskontinuitäten

Sie können Sprünge in der Position des Zuschauers handhaben, indem Sie die Boolesche [`XRPose`](/de/docs/Web/API/XRPose)-Eigenschaft [`emulatedPosition`](/de/docs/Web/API/XRPose/emulatedPosition) beobachten. Wenn ein Sprung in der Position des Zuschauers mit dem Umschalten von `emulatedPosition` von `true` zu `false` zusammenfällt, hat der Betrachter das Tracking wiedererlangt, und seine neue Position stellt eine Korrektur der zuvor emulierten Werte dar. Dies ist in der Regel das gewünschte Verhalten, wenn Ihre Website oder App keine Bewegung durch den Raum simuliert, indem sie ausdrücklich die Position und/oder Orientierung des Zuschauers ändert (anstatt die physischen Bewegungen des Benutzers von dem XR-Gerät zu verwenden, um eine Bewegung zu erzeugen).

Wenn jedoch eine solche "Teleportation" verwendet wird, möchten Sie tatsächlich verhindern, dass die Position des Benutzers nach der Wiedererlangung des Trackings springt, da dies zusätzliche und potenziell störende Sprünge einführen kann. Anstatt dies zuzulassen, können Sie die `emulatedPosition` in den Teleportations-Offset integrieren, der vor dem Aufruf von [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) berechnet wurde, um einen neuen Referenzraum zu schaffen, dessen aktualisierter effektiver Ursprung um die Entfernung angepasst wird, die die Position des Zuschauers seit dem vorherigen Frame gesprungen ist. Auf diese Weise ändert sich die Position des Benutzers nur einmal statt zweimal.

### Die Wirkung der Diskontinuitätsgröße

Das `reset`-Ereignis wird nicht ausgelöst, wenn die Diskontinuität klein genug ist, dass das Gerät das Tracking innerhalb desselben Tracking-Bereichs wiedererlangen kann. Es wird auch nicht in einem nicht begrenzten Referenzraum ausgelöst, da dieser im Laufe der Zeit kleine Anpassungen seines nativen Ursprungs vornimmt, um die Stabilität des Raums in der Nähe des Benutzers zu erhalten; nur große Diskontinuitäten lösen ein Reset aus.

## Beispiele

Um einen Handler für das `reset`-Ereignis hinzuzufügen, können Sie eine der beiden Ansätze verwenden. Erstens können Sie die [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
viewerRefSpace.addEventListener("reset", (event) => {
  /* perform reset related tasks */
});
```

Die zweite Option besteht darin, die `onreset`-Ereignis-Handler-Eigenschaft des `XRReferenceSpace`-Objekts festzulegen:

```js
viewerRefSpace.onreset = (event) => {
  /* perform reset related tasks */
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
