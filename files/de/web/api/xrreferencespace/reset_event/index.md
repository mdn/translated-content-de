---
title: "XRReferenceSpace: Reset-Ereignis"
short-title: reset
slug: Web/API/XRReferenceSpace/reset_event
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Das **`reset`**-Ereignis wird an ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)-Objekt gesendet, wenn eine Diskontinuität in entweder dem nativen Ursprung oder dem effektiven Ursprung festgestellt wird, was zu einem Sprung in der Position oder Ausrichtung von Objekten führt, die mithilfe des Referenzraums ausgerichtet sind. Dies ist üblich, wenn der Benutzer ein XR-Gerät kalibriert oder rekalibriert, oder wenn das Gerät seinen Ursprung automatisch ändert, nachdem es die Verfolgung des Benutzers verloren und dann wiedererlangt hat.

Im Fall von [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace)-Objekten kann das `reset`-Ereignis auch ausgelöst werden, wenn sich die [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) ändert.

In beiden Fällen wird das Ereignis gesendet, bevor WebXR-Animationsframes ausgeführt werden, die den neuen Ursprung verwenden.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("reset", (event) => {});

onreset = (event) => {};
```

## Ereignistyp

Ein [`XRReferenceSpaceEvent`](/de/docs/Web/API/XRReferenceSpaceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind die Eigenschaften der Elternschnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`referenceSpace`](/de/docs/Web/API/XRReferenceSpaceEvent/referenceSpace) {{ReadOnlyInline}}
  - : Ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace), das den Referenzraum angibt, der das Ereignis generiert hat.
- [`transform`](/de/docs/Web/API/XRReferenceSpaceEvent/transform) {{ReadOnlyInline}}
  - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Objekt, das die Position und Ausrichtung des nativen Ursprungs des angegebenen `referenceSpace`-Objekts nach dem Ereignis angibt, definiert relativ zum Koordinatensystem vor dem Ereignis.

## Beschreibung

Das `reset`-Ereignis zeigt an, dass das Koordinatensystem zurückgesetzt oder neu konfiguriert wurde, indem der Ursprung des Referenzraums geändert und entsprechend der [`transform`](/de/docs/Web/API/XRReferenceSpaceEvent/transform)-Eigenschaft des Ereignisses bewegt und gedreht wurde. Das Ereignis wird gesendet, bevor Animations-Frame-Callbacks ausgeführt werden, um den ausstehenden Frame zu rendern, um sicherzustellen, dass diese Callbacks das aktualisierte Koordinatensystem zur Verfügung haben.

Es gibt einige Gründe, warum ein Reset auftreten kann. Die häufigsten darunter sind folgende:

- Der Benutzer hat das Koordinatensystem manuell zurückgesetzt, z. B. indem er das Headset anweist, sich neu zu kalibrieren, um sicherzustellen, dass die Blickrichtung und die Handcontroller mit der tatsächlichen Position und Blickrichtung des Benutzers synchronisiert sind. Dies ist hauptsächlich ein Problem für `local`- oder `local-floor`-Referenzräume.
- Für einen `bounded-floor`-Referenzraum kann das Koordinatensystem zurückgesetzt werden, wenn der Benutzer die Grenzen des Referenzraums verlässt und einen neuen betritt (z. B. durch Überqueren von einer Ebene zu einer anderen in einem Spiel, bei dem jede Ebene ihre eigene Karte mit ihrem eigenen Koordinatensystem ist).
- Das Verfolgungssystem hat den Benutzer vorübergehend verloren, ihn dann aber wiedergefunden, jedoch erst, nachdem er sich weit genug bewegt hat, um die unmittelbare Umgebung der zuletzt bekannten Position zu verlassen. Hauptsächlich ein Problem für `unbounded`-Referenzräume.
- Der Benutzer befindet sich in einem `unbounded`-Referenzraum und hat sich weit genug von der Startposition (dem Ursprung des Referenzraums) entfernt, dass Gleitkomma- oder andere Formen von Fehlern oder Driften problematisch sind. Das Koordinatensystem wird somit mit seinem neuen Ursprung an oder in der Nähe der aktuellen Position des Benutzers zurückgesetzt.
- Die WebXR-Infrastruktur oder die Hardware-Treiber haben festgestellt, dass das Gerät die Verfolgung vorübergehend verloren hat, wodurch die Hardware und Software in Bezug auf Position und Ausrichtung nicht mehr synchron sind.

> [!NOTE]
> Ein `reset`-Ereignis wird _nicht_ auftreten, wenn der Referenzraum in der Lage ist, die Verfolgung seines vorherigen Ursprungs wiederzuerlangen, da dies bedeutet, dass der Ursprung nicht gezwungen ist, verlegt zu werden. Dieses Ereignis wird nur ausgelöst, wenn der Ursprung verlegt werden muss, um den Verlust der Verfolgung wiederherzustellen.

### Manuelle Resets

Wenn Sie Zeit mit einem VR-Headset verbracht haben, kennen Sie Situationen, in denen Sie es gestartet haben und obwohl Sie geradeaus schauen, denkt das Headset, dass Sie in den Himmel oder auf den Boden schauen; oder Zeiten, in denen Sie den Hand-Controller gerade nach vorne zeigen, aber es denkt, Sie zeigen irgendwo nach oben und rechts. Wenn das passiert, halten Sie normalerweise irgendwo einen Knopf gedrückt und es sorgt dafür, dass die Welt sich mit der aktuellen Orientierung des Geräts synchronisiert. Das funktioniert durch das Senden eines `reset`-Ereignisses an den Referenzraum oder die Referenzräume, die auf der Ausrichtung des Headsets basieren.

### Umgang mit Diskontinuitäten

Sie können Sprünge in der Position des Betrachters behandeln, indem Sie die boolesche [`XRPose`](/de/docs/Web/API/XRPose)-Eigenschaft [`emulatedPosition`](/de/docs/Web/API/XRPose/emulatedPosition) beobachten. Wenn ein Sprung in der Position des Betrachters mit dem Umschalten von `emulatedPosition` von `true` auf `false` zusammenfällt, hat der Betrachter die Verfolgung wiedererlangt, und seine neue Position entspricht einer Korrektur der zuvor emulierten Werte. Dies ist typischerweise das gewünschte Verhalten, wenn Ihre Website oder App keine Bewegung durch den Raum simuliert, indem sie ausdrücklich die Position und/oder Ausrichtung des Betrachters ändert (anstatt die physischen Bewegungen des Benutzers vom XR-Gerät zur Einführung von Bewegung verwendet werden).

Falls jedoch eine Art von "Teleportation" verwendet wird, bei der Sie tatsächlich vermeiden möchten, die Position des Benutzers nach der Wiederherstellung der Verfolgung zu ändern, da dies zusätzliche und potenziell störende Sprünge einführen kann, können Sie stattdessen die `emulatedPosition` in den Teleportationsversatz integrieren, der vor dem Aufruf von [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) berechnet wird, um einen neuen Referenzraum zu erstellen, dessen aktualisierter effektiver Ursprung um die Entfernung angepasst ist, die die Position des Betrachters seit dem vorherigen Frame gesprungen ist. Auf diese Weise ändert sich die Position des Benutzers nur einmal anstatt zweimal.

### Die Auswirkung der Diskontinuitätsgröße

Das `reset`-Ereignis wird nicht ausgelöst, wenn die Diskontinuität so klein ist, dass das Gerät in der Lage ist, die Verfolgung innerhalb desselben Verfolgungsbereichs wiederzuerlangen. Ebenso wird es nicht in einem ungebundenen Referenzraum ausgelöst, da dieser im Laufe der Zeit kleine Anpassungen an seinem nativen Ursprung vornimmt, um die Stabilität des Raums in der Nähe des Benutzers zu gewährleisten; nur große Diskontinuitäten werden einen Reset auslösen.

## Beispiele

Um einen Handler für das `reset`-Ereignis hinzuzufügen, können Sie entweder eine der beiden Methoden verwenden. Erstens können Sie die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden:

```js
viewerRefSpace.addEventListener("reset", (event) => {
  /* perform reset related tasks */
});
```

Die zweite Option besteht darin, die `XRReferenceSpace`-Objekteigenschaft `onreset`-Ereignishandler festzulegen:

```js
viewerRefSpace.onreset = (event) => {
  /* perform reset related tasks */
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
