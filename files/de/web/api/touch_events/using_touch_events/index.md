---
title: Nutzung von Touch-Events
slug: Web/API/Touch_events/Using_Touch_Events
l10n:
  sourceCommit: 36761819df2ebdd4e3dcc9ae6007029dec71fac0
---

{{DefaultAPISidebar("Touch Events")}}

Heutzutage ist der Großteil der Webinhalte für Tastatur- und Mauseingaben konzipiert. Dennoch sind Geräte mit Touchscreens (insbesondere tragbare Geräte) weit verbreitet, und Webanwendungen können entweder direkt touchbasierte Eingaben mit [Touch-Events](/de/docs/Web/API/TouchEvent) verarbeiten oder die Anwendung kann _interpretierte Maus-Events_ für die Anwendungseingabe nutzen. Ein Nachteil der Verwendung von Maus-Events ist, dass sie keine gleichzeitigen Benutzereingaben unterstützen, während Touch-Events mehrere gleichzeitige Eingaben (möglicherweise an verschiedenen Stellen auf der Touch-Oberfläche) unterstützen und somit die Benutzererfahrung verbessern.

Die Touch-Events-Schnittstellen unterstützen anwendungsspezifische Einzel- und Mehrfachberührungsinteraktionen wie eine Zwei-Finger-Geste. Eine Mehrfachberührungsinteraktion beginnt, wenn ein Finger (oder Stift) die Kontaktfläche zuerst berührt. Andere Finger können anschließend die Oberfläche berühren und optional über die Touchfläche bewegt werden. Die Interaktion endet, wenn die Finger von der Oberfläche entfernt werden. Während dieser Interaktion erhält eine Anwendung Touch-Events während der Start-, Bewegungs- und Endphasen. Die Anwendung kann ihre eigenen Semantiken auf die Touch-Eingaben anwenden.

## Schnittstellen

Touch-Events bestehen aus drei Schnittstellen ([`Touch`](/de/docs/Web/API/Touch), [`TouchEvent`](/de/docs/Web/API/TouchEvent) und [`TouchList`](/de/docs/Web/API/TouchList)) und den folgenden Event-Typen:

- [`touchstart`](/de/docs/Web/API/Element/touchstart_event) – wird ausgelöst, wenn ein Berührungspunkt auf die Touchfläche gelegt wird.
- [`touchmove`](/de/docs/Web/API/Element/touchmove_event) – wird ausgelöst, wenn ein Berührungspunkt entlang der Touchfläche bewegt wird.
- [`touchend`](/de/docs/Web/API/Element/touchend_event) – wird ausgelöst, wenn ein Berührungspunkt von der Touchfläche entfernt wird.
- [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event) – wird ausgelöst, wenn ein Berührungspunkt auf implementierungsspezifische Weise unterbrochen wurde (zum Beispiel, wenn zu viele Berührungspunkte erstellt werden).

Die [`Touch`](/de/docs/Web/API/Touch)-Schnittstelle repräsentiert einen einzelnen Kontaktpunkt auf einem berührungsempfindlichen Gerät. Der Kontaktpunkt wird normalerweise als _Berührungspunkt_ oder einfach als _Touch_ bezeichnet. Eine Berührung wird normalerweise von einem Finger oder Stift auf einem Touchscreen, Stift oder Trackpad erzeugt. Die [Eigenschaften](/de/docs/Web/API/Touch#instance_properties) eines Berührungspunkts umfassen eine eindeutige Kennung, das Zielelement des Berührungspunkts sowie die _X_- und _Y_-Koordinaten der Position des Berührungspunkts relativ zum Viewport, zur Seite und zum Bildschirm.

Die [`TouchList`](/de/docs/Web/API/TouchList)-Schnittstelle stellt eine _Liste_ von Kontaktpunkten mit einer Touchfläche dar, wobei ein Berührungspunkt pro Kontakt enthalten ist. Wenn der Benutzer die Touchfläche mit einem Finger aktiviert, würde die Liste einen Eintrag enthalten, und wenn der Benutzer die Oberfläche mit drei Fingern berührt, wäre die Listenlänge drei.

Die [`TouchEvent`](/de/docs/Web/API/TouchEvent)-Schnittstelle repräsentiert ein Event, das gesendet wird, wenn sich der Zustand der Kontakte mit einer berührungsempfindlichen Oberfläche ändert. Die Zustandsänderungen umfassen den Beginn des Kontakts mit einer Touchfläche, das Verschieben eines Berührungspunkts unter Beibehaltung des Kontakts mit der Oberfläche, das Freigeben eines Berührungspunkts und das Abbrechen eines Touch-Events. Zu den Attributen dieser Schnittstelle gehören der Zustand mehrerer _Modifikator-Tasten_ (zum Beispiel die <kbd>Shift</kbd>-Taste) und die folgenden Touch-Listen:

- [`touches`](/de/docs/Web/API/TouchEvent/touches) – eine Liste aller derzeit auf dem Bildschirm befindlichen Berührungspunkte.
- [`targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches) – eine Liste der Berührungspunkte auf dem _Ziel_-DOM-Element.
- [`changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches) – eine Liste der Berührungspunkte, deren Einträge vom zugehörigen Event-Typ abhängen:
  - Für das [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Event ist es eine Liste der Berührungspunkte, die mit dem aktuellen Event aktiv geworden sind.
  - Für das [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Event ist es eine Liste der Berührungspunkte, die sich seit dem letzten Event geändert haben.
  - Für das [`touchend`](/de/docs/Web/API/Element/touchend_event)-Event ist es eine Liste der Berührungspunkte, die von der Oberfläche entfernt wurden (das heißt, die Menge der Berührungspunkte, die Fingern entsprechen, die die Oberfläche nicht mehr berühren).

Zusammen definieren diese Schnittstellen eine relativ low-level Menge von Funktionen, die jedoch viele Arten von touchbasierten Interaktionen unterstützen, einschließlich der bekannten Mehrfachberührungsgesten wie Mehrfinger-Wischen, Drehen, Zoomen und Kneifen.

## Von Schnittstellen zu Gesten

Eine Anwendung kann verschiedene Faktoren berücksichtigen, wenn sie die Semantik einer Geste definiert. Ein Beispiel ist die Entfernung, die ein Berührungspunkt von seinem Startpunkt zu seinem Punkt zurückgelegt hat, als die Berührung endete. Ein anderer potenzieller Faktor ist die Zeit; zum Beispiel die verstrichene Zeit zwischen Beginn und Ende der Berührung oder die Zeitspanne zwischen zwei _aufeinanderfolgenden_ Berührungen, die zur Erstellung einer Doppeltipp-Geste gedacht sind. Die Richtung eines Wischens (zum Beispiel von links nach rechts, rechts nach links, etc.) ist ein weiterer zu berücksichtigender Faktor.

Die Touch-Liste(n), die eine Anwendung verwendet, hängen von der Semantik der _Gesten_ der Anwendung ab. Wenn eine Anwendung beispielsweise eine einzelne Berührung (Tap) auf ein Element unterstützt, würde sie die [`targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches)-Liste im [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Event-Handler verwenden, um den Berührungspunkt anwendungsspezifisch zu verarbeiten. Wenn eine Anwendung ein Wischen mit zwei Fingern für beliebige zwei Berührungspunkte unterstützt, wird sie die [`changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches)-Liste im [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Event-Handler verwenden, um festzustellen, ob zwei Berührungspunkte bewegt wurden, und dann die Semantik dieser Geste anwendungsspezifisch umzusetzen.

Browser senden typischerweise _emulierte_ Maus- und Klick-Events, wenn es nur einen aktiven Berührungspunkt gibt. Mehrfachberührungsinteraktionen mit zwei oder mehr aktiven Berührungspunkten erzeugen normalerweise nur Touch-Events. Um zu verhindern, dass emulierte Maus-Events gesendet werden, verwenden Sie die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Methode in den Touch-Event-Handlern. Wenn Sie mit sowohl Maus- als auch Berührungsereignissen interagieren möchten, verwenden Sie stattdessen [Pointer Events](/de/docs/Web/API/Pointer_events).

## Grundlegende Schritte

Dieser Abschnitt enthält eine grundlegende Verwendung der oben genannten Schnittstellen. Siehe die [Übersicht über Touch-Events](/de/docs/Web/API/Touch_events) für ein detaillierteres Beispiel.

Registrieren Sie einen Event-Handler für jeden Touch-Event-Typ.

```js
// Register touch event handlers
someElement.addEventListener("touchstart", processTouchStart);
someElement.addEventListener("touchmove", processTouchMove);
someElement.addEventListener("touchcancel", processTouchCancel);
someElement.addEventListener("touchend", processTouchEnd);
```

Verarbeiten Sie ein Ereignis in einem Event-Handler, der die Gesten-Semantik der Anwendung implementiert.

```js
// touchstart handler
function processTouchStart(event) {
  // Use the event's data to call out to the appropriate gesture handlers
  switch (event.touches.length) {
    case 1:
      handleOneTouch(event);
      break;
    case 2:
      handleTwoTouches(event);
      break;
    case 3:
      handleThreeTouches(event);
      break;
    default:
      gestureNotSupported(event);
      break;
  }
}
```

Greifen Sie auf die Attribute eines Berührungspunkts zu.

```js
// Create touchstart handler
someElement.addEventListener("touchstart", (event) => {
  // Iterate through the touch points that were activated
  // for this element and process each event 'target'
  for (const touch of event.targetTouches) {
    processTarget(touch.target);
  }
});
```

Verhindern Sie, dass der Browser _emulierte Mausereignisse_ verarbeitet.

```js
// touchmove handler
function processTouchMove(event) {
  // Set call preventDefault()
  event.preventDefault();
}
```

## Beste Praktiken

Hier sind einige _beste Praktiken_, die man bei der Verwendung von Touch-Events beachten sollte:

- Minimieren Sie die Menge an Arbeit, die in den Touch-Handlern ausgeführt wird.
- Fügen Sie die Berührungspunkthandler zu dem spezifischen Zielelement hinzu (anstatt zum gesamten Dokument oder zu Knoten höher oben im Dokumentbaum).
- Fügen Sie [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-, [`touchend`](/de/docs/Web/API/Element/touchend_event)- und [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)-Event-Handler innerhalb des [`touchstart`](/de/docs/Web/API/Element/touchstart_event) hinzu.
- Das Zielberührungselement oder der Knoten sollte groß genug sein, um eine Berührung mit dem Finger zu ermöglichen. Wenn der Zielbereich zu klein ist, könnte eine Berührung dazu führen, dass andere Ereignisse für angrenzende Elemente ausgelöst werden.

## Implementierungs- und Bereitstellungsstatus

Die [Daten zur Browser-Kompatibilität von Touch-Events](/de/docs/Web/API/Touch_events#browser_compatibility) zeigen, dass die Unterstützung von Touch-Events unter mobilen Browsern relativ breit ist, während die Unterstützung durch Desktop-Browser hinterherhinkt, obwohl weitere Implementierungen im Gange sind.

Einige neue Features in Bezug auf das [Berührungsgebiet](/de/docs/Web/API/Touch#touch_area) eines Berührungspunkts – der Kontaktbereich zwischen dem Benutzer und der Touch-Oberfläche – befinden sich in der Standardisierungsphase. Die neuen Features umfassen den _X_- und _Y_-Radius der Ellipse, die den Berührungspunktkontaktbereich am engsten umschreibt. Auch der _Drehwinkel_ des Berührungspunkts – die Anzahl der Grad der Drehung, die angewendet werden müssen, um die beschriebene Ellipse mit dem Kontaktbereich auszurichten – wird standardisiert, ebenso wie der Druck, der auf einen Berührungspunkt ausgeübt wird.

## Was ist mit Pointer Events?

Die Einführung neuer Eingabemechanismen führt zu einer erhöhten Komplexität von Anwendungen bei der Verarbeitung verschiedener Eingabeereignisse, wie Tastatureingaben, Mausereignissen, Stift-/Stylusereignissen und Touch-Events. Um dieses Problem zu lösen, definiert die [Pointer Events](/de/docs/Web/API/Pointer_events)-API Events und zugehörige Schnittstellen zur Verarbeitung geräteunabhängiger Eingaben von Geräten wie Maus, Stift, Touchscreen, etc. Das heißt, der abstrakte _Zeiger_ schafft ein einheitliches Eingabemodell, das einen Berührungspunkt für Finger, Stift oder Maus repräsentieren kann.

Das Zeigereignismodell kann die Eingabeverarbeitung einer Anwendung vereinfachen, da ein Zeiger die Eingabe eines beliebigen Eingabegeräts repräsentiert. Außerdem ähneln die Zeigereignistypen sehr den Mausevent-Typen (zum Beispiel `pointerdown` und `pointerup`), so dass der Code zur Verarbeitung von Zeigereignissen dem Code zur Mausverarbeitung ähnelt.

Der Implementierungsstatus von Zeigereignissen in Browsern ist [relativ hoch](https://caniuse.com/#search=pointer) mit vollständigen Implementierungen in Chrome, Firefox, IE11 und Edge.

## Siehe auch

- [Touch-Events](/de/docs/Web/API/Touch_events)
- [Pointer Events](/de/docs/Web/API/Pointer_events)
- [Fügen Sie Ihrer Website Touch hinzu](https://web.dev/articles/add-touch-to-your-site) auf web.dev
- [Fügen Sie Ihrer Website Touchscreen-Unterstützung hinzu (Der einfache Weg)](https://codicode.com/art/easy_way_to_add_touch_support_to_your_website.aspx)
- [Paint-Programm](https://rbyers.github.io/paint.html) von Rick Byers
- [Touch-/Zeiger-Tests und Demos](https://patrickhlauke.github.io/touch/) von Patrick H. Lauke
- [Community-Gruppe für Touch-Events](https://github.com/w3c/touch-events)
- [Mail-Liste](https://lists.w3.org/Archives/Public/public-touchevents/)
- [W3C #touchevents IRC-Kanal](irc://irc.w3.org:6667/)
