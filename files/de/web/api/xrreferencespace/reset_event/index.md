---
title: "XRReferenceSpace: reset-Ereignis"
short-title: reset
slug: Web/API/XRReferenceSpace/reset_event
l10n:
  sourceCommit: 92c5e81c587ffea6177431743106118984f1675d
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Das **`reset`**-Ereignis wird an ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)-Objekt gesendet, wenn eine sprunghafte Änderung des nativen oder des effektiven Ursprungs erkannt wird. Dadurch ändern sich Position oder Ausrichtung von Objekten, die anhand des Referenzraums ausgerichtet sind, sprunghaft. Dies geschieht häufig, wenn Benutzer ein XR-Gerät kalibrieren oder neu kalibrieren, oder wenn das Gerät nach einem Verlust des Trackings und dessen Wiederherstellung seinen Ursprung automatisch ändert.

Bei [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace)-Objekten kann das `reset`-Ereignis auch ausgelöst werden, wenn sich [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) ändert.

In beiden Fällen wird das Ereignis gesendet, bevor WebXR-Animationsframes ausgeführt werden, die den neuen Ursprung verwenden.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("reset", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onreset = (event) => { }
```

## Ereignistyp

Ein [`XRReferenceSpaceEvent`](/de/docs/Web/API/XRReferenceSpaceEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

## Beschreibung

Das `reset`-Ereignis zeigt an, dass das Koordinatensystem zurückgesetzt oder neu konfiguriert wurde, indem der Ursprung des Referenzraums verschoben und gedreht wurde, wie es die Eigenschaft [`transform`](/de/docs/Web/API/XRReferenceSpaceEvent/transform) des Ereignisses angibt. Das Ereignis wird gesendet, bevor Animationsframe-Callbacks zum Rendern des anstehenden Frames ausgeführt werden. So steht diesen Callbacks das aktualisierte Koordinatensystem zur Verfügung.

Ein Zurücksetzen kann verschiedene Gründe haben. Zu den häufigsten gehören:

- Benutzer haben das Koordinatensystem manuell zurückgesetzt, beispielsweise indem sie eine Neukalibrierung des Headsets angefordert haben. So wird sichergestellt, dass die Blickrichtung und die Handcontroller mit der tatsächlichen Position und Blickrichtung der Benutzer übereinstimmen. Dies betrifft vor allem `local`- oder `local-floor`-Referenzräume.
- Bei einem `bounded-floor`-Referenzraum kann das Koordinatensystem zurückgesetzt werden, wenn Benutzer die Grenzen des Referenzraums verlassen und einen neuen betreten, etwa beim Wechsel zwischen zwei Levels eines Spiels, von denen jedes eine eigene Karte mit einem eigenen Koordinatensystem hat.
- Das Tracking-System hat die Benutzer vorübergehend verloren und sie anschließend wieder erfasst, allerdings erst, nachdem sie sich weit genug von ihrer zuletzt bekannten Position entfernt hatten. Dies betrifft vor allem `unbounded`-Referenzräume.
- Benutzer befinden sich in einem `unbounded`-Referenzraum und haben sich so weit von der Ausgangsposition – dem Ursprung des Referenzraums – entfernt, dass Gleitkommafehler oder andere Fehler beziehungsweise Abweichungen problematisch werden. Deshalb wird das Koordinatensystem zurückgesetzt und sein neuer Ursprung an die aktuelle Position der Benutzer oder in deren Nähe verlegt.
- Die WebXR-Infrastruktur oder Hardwaretreiber haben festgestellt, dass das Gerät das Tracking vorübergehend verloren hat. Dadurch stimmen die von Hardware und Software erfassten Angaben zu Position und Ausrichtung nicht mehr überein.

> [!NOTE]
> Ein `reset`-Ereignis tritt _nicht_ auf, wenn der Referenzraum das Tracking seines bisherigen Ursprungs wiederherstellen kann, da der Ursprung dann nicht verlegt werden muss. Das Ereignis wird nur ausgelöst, wenn der Ursprung verlegt werden muss, um den Tracking-Verlust auszugleichen.

### Manuelles Zurücksetzen

Wenn Sie schon einmal ein VR-Headset verwendet haben, kennen Sie vielleicht folgende Situation: Sie starten es und blicken geradeaus, aber das Headset geht davon aus, dass Sie zum Himmel oder auf den Boden schauen. Oder Sie richten den Handcontroller geradeaus, während das Headset annimmt, dass er schräg nach oben rechts zeigt. In solchen Fällen halten Sie üblicherweise eine Taste gedrückt, damit die virtuelle Welt wieder mit der aktuellen Ausrichtung des Geräts synchronisiert wird. Dazu wird ein `reset`-Ereignis an den oder die Referenzräume gesendet, die auf der Ausrichtung des Headsets basieren.

### Umgang mit sprunghaften Änderungen

Sie können sprunghafte Änderungen der Position der betrachtenden Person erkennen, indem Sie die boolesche Eigenschaft [`emulatedPosition`](/de/docs/Web/API/XRPose/emulatedPosition) von [`XRPose`](/de/docs/Web/API/XRPose) beobachten. Wenn eine solche Änderung damit zusammenfällt, dass `emulatedPosition` von `true` auf `false` wechselt, wurde das Tracking der betrachtenden Person wiederhergestellt. Ihre neue Position stellt dann eine Korrektur der zuvor emulierten Werte dar. Dies ist in der Regel das gewünschte Verhalten, wenn Ihre Website oder Anwendung keine Bewegung durch den Raum simuliert, indem sie Position und/oder Ausrichtung der betrachtenden Person ausdrücklich ändert – statt die physischen Bewegungen der Benutzer vom XR-Gerät als Bewegung umsetzen zu lassen.

Wenn Sie jedoch eine solche „Teleportation“ verwenden, sollten Sie einen weiteren Positionssprung nach der Wiederherstellung des Trackings vermeiden, da er eine zusätzliche, möglicherweise irritierende sprunghafte Änderung verursachen kann. Stattdessen können Sie `emulatedPosition` in den Teleportations-Offset einbeziehen, den Sie vor dem Aufruf von [`getOffsetReferenceSpace()`](/de/docs/Web/API/XRReferenceSpace/getOffsetReferenceSpace) berechnen. So erstellen Sie einen neuen Referenzraum, dessen aktualisierter effektiver Ursprung um die Strecke angepasst ist, um die sich die Position der betrachtenden Person seit dem vorherigen Frame sprunghaft geändert hat. Auf diese Weise ändert sich die Position der Benutzer nur einmal statt zweimal.

### Auswirkungen der Größe einer sprunghaften Änderung

Das `reset`-Ereignis wird nicht ausgelöst, wenn die Änderung so klein ist, dass das Gerät das Tracking innerhalb desselben Tracking-Bereichs wiederherstellen kann. Es wird auch nicht ausgelöst, wenn ein unbeschränkter Referenzraum im Laufe der Zeit kleine Anpassungen an seinem nativen Ursprung vornimmt, um den Raum in der Umgebung der Benutzer stabil zu halten. Nur große sprunghafte Änderungen lösen ein Zurücksetzen aus.

## Beispiele

Um einen Handler für das `reset`-Ereignis hinzuzufügen, stehen Ihnen zwei Möglichkeiten zur Verfügung. Zum einen können Sie die Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden:

```js
viewerRefSpace.addEventListener("reset", (event) => {
  /* perform reset related tasks */
});
```

Zum anderen können Sie die Event-Handler-Eigenschaft `onreset` des `XRReferenceSpace`-Objekts festlegen. Beachten Sie jedoch, dass dadurch andere über `onreset` hinzugefügte Event-Listener ersetzt werden, sofern solche vorhanden sind:

```js
viewerRefSpace.onreset = (event) => {
  /* perform reset related tasks */
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
