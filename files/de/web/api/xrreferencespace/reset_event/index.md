---
title: "XRReferenceSpace: reset-Ereignis"
short-title: reset
slug: Web/API/XRReferenceSpace/reset_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Das **`reset`**-Ereignis wird an ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)-Objekt gesendet, wenn eine Diskontinuität entweder in der nativen oder effektiven Ursprungserkennung festgestellt wird, was zu einem Sprung in der Position oder Orientierung von Objekten führt, die die Referenzfläche nutzen. Dies ist üblich, wenn der Benutzer ein XR-Gerät kalibriert oder rekallibriert, oder wenn das Gerät seinen Ursprung automatisch ändert, nachdem es das Tracking des Benutzers verloren und dann wiedererlangt hat.

Bei [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace)-Objekten kann das `reset`-Ereignis auch ausgelöst werden, wenn sich die [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) ändert.

In beiden Fällen wird das Ereignis vor allen WebXR-Animationframes gesendet, die den neuen Ursprung nutzen.

Dieses Ereignis ist nicht stornierbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("reset", (event) => { })

onreset = (event) => { }
```

## Ereignistyp

Ein [`XRReferenceSpaceEvent`](/de/docs/Web/API/XRReferenceSpaceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind auch Eigenschaften der übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`referenceSpace`](/de/docs/Web/API/XRReferenceSpaceEvent/referenceSpace) {{ReadOnlyInline}}
  - : Ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace), das den Referenzraum anzeigt, der das Ereignis generiert hat.
- [`transform`](/de/docs/Web/API/XRReferenceSpaceEvent/transform) {{ReadOnlyInline}}
  - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Objekt, das die Position und Orientierung des angegebenen `referenceSpace`-Objekts nach dem Ereignis darstellt, relativ zum Koordinatensystem vor dem Ereignis definiert.

## Beschreibung

Das `reset`-Ereignis zeigt an, dass das Koordinatensystem zurückgesetzt oder neu konfiguriert wurde, indem der Ursprung des Referenzraums geändert, und es laut der [`transform`](/de/docs/Web/API/XRReferenceSpaceEvent/transform)-Eigenschaft des Ereignisses bewegt und gedreht wurde. Das Ereignis wird gesendet, bevor Animationframe-Callbacks ausgeführt werden, um den anstehenden Frame zu rendern, damit diese Callbacks das aktualisierte Koordinatensystem verwenden können.

Es gibt verschiedene Gründe, warum ein Reset auftreten kann. Die häufigsten sind die folgenden:

- Der Benutzer hat das Koordinatensystem manuell zurückgesetzt, z.B. durch eine Anfrage, das Headset neu zielen zu lassen, um sicherzustellen, dass die Blickrichtung und Handcontroller mit der tatsächlichen Position und Blickrichtung des Benutzers synchronisiert sind. Dies betrifft hauptsächlich `local` oder `local-floor` Referenzflächen.
- Für ein `bounded-floor` Referenzsystem kann das Koordinatensystem zurückgesetzt werden, wenn der Benutzer die Grenzen des Referenzraums verlässt und in einen neuen eintritt (wie zum Beispiel beim Überqueren eines Levels zu einem anderen in einem Spiel, wo jedes Level seine eigene Karte mit eigenem Koordinatensystem hat).
- Das Trackingsystem hat den Benutzer vorübergehend verloren und dann wieder gefunden, jedoch nicht bevor dieser sich genug bewegt hatte, um sich aus der unmittelbaren Nähe der zuletzt bekannten Position zu entfernen. Dies ist hauptsächlich ein Problem für `unbounded` Referenzflächen.
- Der Benutzer befindet sich in einem `unbounded` Referenzraum und hat sich weit genug vom Ausgangspunkt (des Referenzraums Ursprungs) entfernt, dass Gleitkomma- oder andere Formen von Fehlern oder Drift problematisch sind. Das Koordinatensystem wird dann mit seinem neuen Ursprung am oder nahe dem aktuellen Standort des Benutzers zurückgesetzt.
- Die WebXR-Infrastruktur oder die Hardwaretreiber haben festgestellt, dass das Gerät das Tracking vorübergehend verloren hat, was dazu führt, dass Hardware und Software bei Position und Orientierung nicht mehr übereinstimmen.

> [!NOTE]
> Ein `reset`-Ereignis tritt _nicht_ auf, wenn der Referenzraum in der Lage ist, das Tracking seines vorherigen Ursprungs wieder zu erlangen, da dies bedeutet, dass der Ursprung nicht gezwungen wurde, verlegt zu werden. Dieses Ereignis wird nur ausgelöst, wenn der Ursprung verlegt werden muss, um den Verlust des Trackings wieder auszugleichen.

### Manuelle Resets

Wenn Sie Zeit mit der Verwendung eines VR-Headsets verbracht haben, hatten Sie Zeiten, in denen Sie es starteten und obwohl Sie geradeaus schauten, das Headset denkt, dass Sie in den Himmel oder auf den Boden blicken; oder Zeiten, in denen Sie den Handcontroller geradeaus richten, aber das Headset denkt, dass Sie irgendwo nach oben und rechts zielen. In solchen Situationen halten Sie typischerweise einen Knopf gedrückt, der die Welt dazu bringt, sich mit der aktuellen Ausrichtung des Geräts zu synchronisieren. Das funktioniert, indem ein `reset`-Ereignis an den oder die Referenzräume gesendet wird, die auf der Ausrichtung des Headsets basieren.

### Umgang mit Diskontinuitäten

Sie können Sprünge in der Position des Betrachters überwachen, indem Sie die Boolesche [`XRPose`](/de/docs/Web/API/XRPose) Eigenschaft [`emulatedPosition`](/de/docs/Web/API/XRPose/emulatedPosition) beobachten. Wenn ein Sprung in der Position des Betrachters mit dem Umschalten von `emulatedPosition` von `true` auf `false` zusammenfällt, hat der Betrachter das Tracking wiedererlangt, und seine neue Position stellt eine Korrektur der zuvor emulierten Werte dar. Dies ist typischerweise das gewünschte Verhalten, wenn Ihre Seite oder Ihre App keine Bewegung im Raum simuliert, indem die Position und/oder Orientierung des Betrachters ausdrücklich geändert wird (anstatt die physischen Bewegungen des Benutzers vom XR-Gerät verwendet werden, um Bewegung einzuführen).

Wenn jedoch eine Art von "Teleportation" verwendet wird, möchten Sie tatsächlich vermeiden, die Position des Benutzers nach der Wiederherstellung des Trackings springen zu lassen, da dies zusätzliche und möglicherweise störende Sprünge einführen kann. Anstatt dies zuzulassen, können Sie die `emulatedPosition` in den Teleportationsversatz integrieren, der vor dem Aufruf von [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) berechnet wird, um einen neuen Referenzraum zu erstellen, dessen aktualisierter effektiver Ursprung durch die Entfernung angepasst wird, um die die Position des Betrachters seit dem vorherigen Frame gesprungen ist. Auf diese Weise ändert sich die Position des Benutzers nur einmal statt zweimal.

### Die Auswirkung der Diskontinuitäten-Größe

Das `reset`-Ereignis wird nicht ausgelöst, wenn die Diskontinuität klein genug ist, um das Tracking innerhalb desselben Trackingbereichs wiederzuerlangen. Es wird auch nicht ausgelöst bei einem unbounded Referenzraum, wenn er über die Zeit kleine Anpassungen an seinem nativen Ursprung vornimmt, um die Stabilität des Raums in der Nähe des Benutzers aufrechtzuerhalten; nur große Diskontinuitäten lösen einen Reset aus.

## Beispiele

Um einen Handler für das `reset`-Ereignis hinzuzufügen, können Sie eine von zwei Ansätzen verwenden. Zuerst können Sie die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden:

```js
viewerRefSpace.addEventListener("reset", (event) => {
  /* perform reset related tasks */
});
```

Die zweite Option besteht darin, die `onreset`-Ereignishandler-Eigenschaft des `XRReferenceSpace`-Objekts zu setzen:

```js
viewerRefSpace.onreset = (event) => {
  /* perform reset related tasks */
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
