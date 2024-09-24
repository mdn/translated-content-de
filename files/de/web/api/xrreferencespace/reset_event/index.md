---
title: "XRReferenceSpace: reset-Ereignis"
short-title: reset
slug: Web/API/XRReferenceSpace/reset_event
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Das **`reset`**-Ereignis wird an ein {{domxref("XRReferenceSpace")}}-Objekt gesendet, wenn eine Diskontinuität im nativen Ursprung oder im effektiven Ursprung festgestellt wird, die einen Sprung in der Position oder Ausrichtung von Objekten verursacht, die mithilfe des Referenzraums ausgerichtet sind. Dies ist üblich, wenn der Benutzer ein XR-Gerät kalibriert oder neu kalibriert, oder wenn das Gerät seinen Ursprung automatisch ändert, nachdem das Tracking des Benutzers verloren ging und dann wiedererlangt wurde.

Im Fall von {{domxref("XRBoundedReferenceSpace")}}-Objekten kann das `reset`-Ereignis auch ausgelöst werden, wenn sich die {{domxref("XRBoundedReferenceSpace.boundsGeometry", "boundsGeometry")}} ändert.

In beiden Fällen wird das Ereignis gesendet, bevor WebXR-Animationsrahmen, die den neuen Ursprung verwenden, ausgeführt werden.

Dieses Ereignis ist nicht abbruchbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("reset", (event) => {});

onreset = (event) => {};
```

## Ereignistyp

Ein {{domxref("XRReferenceSpaceEvent")}}. Erbt von {{domxref("Event")}}.

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind auch die Eigenschaften der Elternschnittstelle {{domxref("Event")}} verfügbar._

- {{domxref("XRReferenceSpaceEvent.referenceSpace", "referenceSpace")}} {{ReadOnlyInline}}
  - : Ein {{domxref("XRReferenceSpace")}}, das den Referenzraum angibt, der das Ereignis erzeugt hat.
- {{domxref("XRReferenceSpaceEvent.transform", "transform")}} {{ReadOnlyInline}}
  - : Ein {{domxref("XRRigidTransform")}}-Objekt, das die Position und Ausrichtung des nativen Ursprungs des spezifizierten `referenceSpace`-Objekts nach dem Ereignis anzeigt, definiert relativ zum Koordinatensystem vor dem Ereignis.

## Beschreibung

Das `reset`-Ereignis zeigt an, dass das Koordinatensystem zurückgesetzt oder neu konfiguriert wurde, indem der Ursprung des Referenzraums geändert wurde und es sich entsprechend der `transform`-Eigenschaft des Ereignisses bewegt und dreht. Das Ereignis wird gesendet, bevor Animation-Frame-Rückrufe ausgeführt werden, um den anstehenden Frame zu rendern, um sicherzustellen, dass diese Rückrufe das aktualisierte Koordinatensystem zur Verfügung haben.

Es gibt mehrere Gründe, warum ein Reset stattfinden könnte. Die häufigsten sind:

- Der Benutzer hat das Koordinatensystem manuell zurückgesetzt, indem er beispielsweise das Headset neu kalibrieren lässt, um sicherzustellen, dass die Blickrichtung und die Handcontroller mit der tatsächlichen Position und Blickrichtung des Benutzers synchronisiert sind. Dies ist hauptsächlich ein Problem für `local` oder `local-floor` Referenzräume.
- Für einen `bounded-floor` Referenzraum kann das Koordinatensystem zurückgesetzt werden, wenn der Benutzer die Grenzen des Referenzraums verlässt und einen neuen betritt (z. B. wenn er in einem Spiel von einer Ebene zur nächsten wechselt, wobei jede Ebene ihre eigene Karte mit ihrem eigenen Koordinatensystem hat).
- Das Trackingsystem hat den Benutzer vorübergehend verloren und dann wiedergefunden, jedoch erst, nachdem er sich so weit bewegt hat, dass er die unmittelbare Nähe der zuletzt bekannten Position verlassen hat. Dies ist hauptsächlich ein Problem für `unbounded` Referenzräume.
- Der Benutzer befindet sich in einem `unbounded` Referenzraum und hat sich so weit vom Ausgangspunkt (dem Ursprung des Referenzraums) entfernt, dass Gleitkomma- oder andere Formen von Fehlern oder Drift problematisch sind. Das Koordinatensystem wird daher mit seinem neuen Ursprung auf oder nahe der aktuellen Position des Benutzers zurückgesetzt.
- Die WebXR-Infrastruktur oder die Hardware-Treiber haben festgestellt, dass das Gerät vorübergehend das Tracking verloren hat, wodurch Hardware und Software in Sachen Position und Ausrichtung nicht mehr synchron sind.

> [!NOTE]
> Ein `reset`-Ereignis tritt _nicht_ auf, wenn der Referenzraum in der Lage ist, das Tracking seines vorherigen Ursprungs wiederzuerlangen, da das bedeutet, dass der Ursprung nicht gezwungen war, verlegt zu werden. Dieses Ereignis wird nur ausgelöst, wenn der Ursprung verlegt werden muss, um den Trackingverlust auszugleichen.

### Manuelle Resets

Wenn Sie jemals eine VR-Brille benutzt haben, kennen Sie Situationen, in denen Sie sie starten und obwohl Sie geradeaus blicken, denkt die Brille, Sie schauen auf den Himmel oder den Boden; oder Momente, in denen Sie den Handcontroller direkt nach vorne halten, aber die Brille denkt, Sie zeigen irgendwo nach oben und rechts. In solchen Fällen halten Sie normalerweise irgendwo einen Knopf gedrückt und das führt dazu, dass die Welt zur aktuellen Ausrichtung des Geräts synchronisiert wird. Das funktioniert, indem ein `reset`-Ereignis an den oder die auf der Ausrichtung des Headsets basierenden Referenzräume gesendet wird.

### Umgang mit Diskontinuitäten

Sie können Sprünge in der Position des Betrachters handhaben, indem Sie die Boole'sche Eigenschaft {{domxref("XRPose")}} {{domxref("XRPose.emulatedPosition", "emulatedPosition")}} beobachten. Wenn ein Sprung in der Position des Betrachters mit einem Wechsel von `true` zu `false` der `emulatedPosition` zusammenfällt, hat der Betrachter das Tracking wiedererlangt, und seine neue Position stellt eine Korrektur der zuvor emulierten Werte dar. Dies ist typischerweise das gewünschte Verhalten, wenn Ihre Website oder App keine Bewegung im Raum simuliert, indem sie die Position und/oder Ausrichtung des Betrachters ausdrücklich ändert (anstatt die physischen Bewegungen des Benutzers vom XR-Gerät zur Einführung von Bewegungen verwendet werden).

Falls jedoch eine Art von "Teleportation" verwendet wird, die tatsächlich dazu führen soll, dass die Position des Benutzers nach der Wiederherstellung des Trackings nicht springt, da dies zusätzliche und potenziell störende Sprünge einführen kann, können Sie die `emulatedPosition` in den Teleportations-Offset integrieren, der vor dem Aufruf von {{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace()")}} berechnet wird, um einen neuen Referenzraum zu erstellen, dessen aktualisierter effektiver Ursprung durch die Distanz, die die Position des Betrachters seit dem letzten Frame gesprungen ist, angepasst wird. Auf diese Weise ändert sich die Position des Benutzers nur einmal und nicht zweimal.

### Der Einfluss der Diskontinuitätsgröße

Das `reset`-Ereignis wird nicht ausgelöst, wenn die Diskontinuität klein genug ist, dass das Gerät das Tracking innerhalb desselben Trackingbereichs wiedererlangen kann. Es wird auch nicht bei einem ungebundenen Referenzraum ausgelöst, da dieser über die Zeit kleine Anpassungen an seinem nativen Ursprung vornimmt, um die Stabilität des Raumes in der Nähe des Benutzers zu gewährleisten; nur große Diskontinuitäten lösen ein Reset aus.

## Beispiele

Um einen Handler für das `reset`-Ereignis hinzuzufügen, können Sie eine von zwei Vorgehensweisen verwenden. Zunächst können Sie die Methode {{domxref("EventTarget.addEventListener", "addEventListener()")}} verwenden:

```js
viewerRefSpace.addEventListener("reset", (event) => {
  /* führen Sie auf reset bezogene Aufgaben aus */
});
```

Die zweite Option ist das Setzen der `onreset` Ereignis-Handler-Eigenschaft des `XRReferenceSpace`-Objekts:

```js
viewerRefSpace.onreset = (event) => {
  /* führen Sie auf reset bezogene Aufgaben aus */
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
