---
title: Verwendung von Touch-Events
slug: Web/API/Touch_events/Using_Touch_Events
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{DefaultAPISidebar("Touch Events")}}

Heutzutage ist der Großteil des Web-Inhalts auf Tastatur- und Mauseingaben ausgelegt. Allerdings sind Geräte mit Touchscreens (insbesondere tragbare Geräte) mittlerweile weit verbreitet, und Webanwendungen können entweder direkt touchbasierte Eingaben durch [Touch-Events](/de/docs/Web/API/TouchEvent) verarbeiten oder die Anwendung kann _interpretierte Maus-Events_ für die Eingabe nutzen. Ein Nachteil der Verwendung von Maus-Events ist, dass sie keine gleichzeitige Benutzereingabe unterstützen, während Touch-Events mehrere gleichzeitige Eingaben (möglicherweise an verschiedenen Stellen der Touch-Oberfläche) unterstützen, wodurch die Benutzererfahrung verbessert wird.

Die Schnittstellen der Touch-Events unterstützen anwendungsspezifische Einzel- und Mehrfach-Touch-Interaktionen, wie beispielsweise eine Zwei-Finger-Geste. Eine Mehrfach-Touch-Interaktion beginnt, wenn ein Finger (oder ein Stylus) die Kontaktfläche berührt. Andere Finger können anschließend die Oberfläche berühren und optional über die Touch-Oberfläche bewegt werden. Die Interaktion endet, wenn die Finger von der Oberfläche entfernt werden. Während dieser Interaktion erhält eine Anwendung Touch-Events während der Start-, Bewegungs- und Endphasen. Die Anwendung kann ihre eigenen Semantiken auf die Touch-Eingaben anwenden.

## Schnittstellen

Touch-Events bestehen aus drei Schnittstellen ([`Touch`](/de/docs/Web/API/Touch), [`TouchEvent`](/de/docs/Web/API/TouchEvent) und [`TouchList`](/de/docs/Web/API/TouchList)) und den folgenden Event-Typen:

- [`touchstart`](/de/docs/Web/API/Element/touchstart_event) - wird ausgelöst, wenn ein Touch-Punkt auf der Touch-Oberfläche platziert wird.
- [`touchmove`](/de/docs/Web/API/Element/touchmove_event) - wird ausgelöst, wenn ein Touch-Punkt über die Touch-Oberfläche bewegt wird.
- [`touchend`](/de/docs/Web/API/Element/touchend_event) - wird ausgelöst, wenn ein Touch-Punkt von der Touch-Oberfläche entfernt wird.
- [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event) - wird ausgelöst, wenn ein Touch-Punkt auf eine implementierungsspezifische Weise unterbrochen wurde (zum Beispiel, wenn zu viele Touch-Punkte erstellt werden).

Die [`Touch`](/de/docs/Web/API/Touch) Schnittstelle repräsentiert einen einzelnen Kontaktpunkt auf einem berührungsempfindlichen Gerät. Der Kontaktpunkt wird typischerweise als _Touch-Punkt_ oder einfach _Touch_ bezeichnet. Ein Touch wird normalerweise durch einen Finger oder Stylus auf einem Touchscreen, Stift oder Trackpad erzeugt. Die [Eigenschaften](/de/docs/Web/API/Touch#instance_properties) eines Touch-Punktes umfassen eine eindeutige Kennung, das Ziel-Element des Touch-Punktes sowie die _X_- und _Y_-Koordinaten der Position des Touch-Punktes relativ zum Viewport, zur Seite und zum Bildschirm.

Die [`TouchList`](/de/docs/Web/API/TouchList) Schnittstelle repräsentiert eine _Liste_ von Kontaktpunkten mit einer Touch-Oberfläche, je ein Kontaktpunkt pro Eintrag. Wenn der Benutzer die Touch-Oberfläche mit einem Finger aktiviert, würde die Liste einen Eintrag enthalten, und wenn der Benutzer die Oberfläche mit drei Fingern berührt, wäre die Listenlänge drei.

Die [`TouchEvent`](/de/docs/Web/API/TouchEvent) Schnittstelle repräsentiert ein Event, das gesendet wird, wenn sich der Zustand der Kontakte mit einer berührungsempfindlichen Oberfläche ändert. Die Zustandsänderungen sind das Herstellen eines Kontakts mit einer Touch-Oberfläche, das Bewegen eines Touch-Punktes bei gleichbleibendem Kontakt mit der Oberfläche, das Loslassen eines Touch-Punktes und das Abbrechen eines Touch-Events. Zu den Attributen dieser Schnittstelle gehören der Zustand mehrerer _Modifizierertasten_ (zum Beispiel die <kbd>Shift</kbd>-Taste) und die folgenden Touch-Listen:

- [`touches`](/de/docs/Web/API/TouchEvent/touches) - eine Liste aller Touch-Punkte, die sich derzeit auf dem Bildschirm befinden.
- [`targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches) - eine Liste der Touch-Punkte auf dem _Ziel_-DOM-Element.
- [`changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches) - eine Liste der Touch-Punkte, deren Elemente vom zugehörigen Event-Typ abhängen:

  - Für das [`touchstart`](/de/docs/Web/API/Element/touchstart_event) Event ist es eine Liste der Touch-Punkte, die mit dem aktuellen Event aktiv wurden.
  - Für das [`touchmove`](/de/docs/Web/API/Element/touchmove_event) Event ist es eine Liste der Touch-Punkte, die sich seit dem letzten Event geändert haben.
  - Für das [`touchend`](/de/docs/Web/API/Element/touchend_event) Event ist es eine Liste der Touch-Punkte, die von der Oberfläche entfernt wurden (das heißt, die Menge der Touch-Punkte, die zu Fingern gehören, die nicht mehr die Oberfläche berühren).

Zusammen definieren diese Schnittstellen ein relativ niedrigschwelliges Set von Funktionen, unterstützen jedoch viele Arten von Touch-basierten Interaktionen, einschließlich der bekannten Mehrfinger-Gesten wie Mehrfinger-Wisch, Rotation, Kneifen und Zoomen.

## Von Schnittstellen zu Gesten

Eine Anwendung kann verschiedene Faktoren berücksichtigen, wenn sie die Semantik einer Geste definiert. Zum Beispiel die Distanz, die ein Touch-Punkt von seinem Ausgangspunkt bis zu seiner Position beim Beenden der Berührung zurückgelegt hat. Ein weiterer potenzieller Faktor ist die Zeit; zum Beispiel die zwischen dem Start und dem Ende der Berührung verstrichene Zeit oder die Zeitspanne zwischen zwei _aufeinanderfolgenden_ Tippern, die eine Doppeltippen-Geste erzeugen sollen. Die Richtung eines Wischens (zum Beispiel von links nach rechts, von rechts nach links usw.) ist ein weiterer zu berücksichtigender Faktor.

Welche Touch-Liste(n) eine Anwendung verwendet, hängt von der Semantik der _Gesten_ der Anwendung ab. Unterstützt eine Anwendung zum Beispiel ein einzelnes Antippen eines Elements, würde sie die [`targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches) Liste im [`touchstart`](/de/docs/Web/API/Element/touchstart_event) Event-Handler verwenden, um den Touch-Punkt in einer anwendungsspezifischen Weise zu verarbeiten. Unterstützt eine Anwendung das Wischen mit zwei Fingern bei beliebigen zwei Touch-Punkten, wird sie die [`changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches) Liste im [`touchmove`](/de/docs/Web/API/Element/touchmove_event) Event-Handler verwenden, um festzustellen, ob sich zwei Touch-Punkte bewegt haben, und dann die Semantik dieser Geste auf eine anwendungsspezifische Weise implementieren.

Browser senden normalerweise _emulierte_ Maus- und Klick-Events, wenn es nur einen aktiven Touch-Punkt gibt. Mehrere Touch-Interaktionen, bei denen zwei oder mehr aktive Touch-Punkte beteiligt sind, erzeugen normalerweise nur Touch-Events. Um zu verhindern, dass die emulierten Maus-Events gesendet werden, verwenden Sie die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) Methode in den Touch-Event-Handlern. Wenn Sie sowohl mit Maus als auch Berührungen interagieren möchten, verwenden Sie [Pointer-Events](/de/docs/Web/API/Pointer_events) stattdessen.

## Grundlegende Schritte

Dieser Abschnitt enthält eine grundlegende Verwendung der oben genannten Schnittstellen. Siehe die [Übersicht zu Touch-Events](/de/docs/Web/API/Touch_events) für ein ausführlicheres Beispiel.

Registrieren Sie einen Event-Handler für jeden Touch-Event-Typ.

```js
// Register touch event handlers
someElement.addEventListener("touchstart", process_touchstart, false);
someElement.addEventListener("touchmove", process_touchmove, false);
someElement.addEventListener("touchcancel", process_touchcancel, false);
someElement.addEventListener("touchend", process_touchend, false);
```

Verarbeiten Sie ein Event in einem Event-Handler und implementieren Sie die Gestensemantik der Anwendung.

```js
// touchstart handler
function process_touchstart(ev) {
  // Use the event's data to call out to the appropriate gesture handlers
  switch (ev.touches.length) {
    case 1:
      handle_one_touch(ev);
      break;
    case 2:
      handle_two_touches(ev);
      break;
    case 3:
      handle_three_touches(ev);
      break;
    default:
      gesture_not_supported(ev);
      break;
  }
}
```

Zugriff auf die Attribute eines Touch-Punktes.

```js
// Create touchstart handler
someElement.addEventListener(
  "touchstart",
  (ev) => {
    // Iterate through the touch points that were activated
    // for this element and process each event 'target'
    for (const touch of ev.targetTouches) {
      process_target(touch.target);
    }
  },
  false,
);
```

Verhindern Sie, dass der Browser _emulierte Maus-Events_ verarbeitet.

```js
// touchmove handler
function process_touchmove(ev) {
  // Set call preventDefault()
  ev.preventDefault();
}
```

## Best Practices

Hier sind einige _Best Practices_ zu beachten, wenn Sie Touch-Events verwenden:

- Minimieren Sie die Menge der Arbeit, die in den Touch-Handlern ausgeführt wird.
- Fügen Sie die Touchpunkt-Handler zu dem spezifischen Ziel-Element hinzu (anstatt zum gesamten Dokument oder zu Knoten weiter oben im Dokumentbaum).
- Fügen Sie [`touchmove`](/de/docs/Web/API/Element/touchmove_event), [`touchend`](/de/docs/Web/API/Element/touchend_event) und [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event) Event-Handler innerhalb der [`touchstart`](/de/docs/Web/API/Element/touchstart_event) hinzu.
- Das Ziel-Touch-Element oder der Zielknoten sollte groß genug sein, um eine Berührung mit dem Finger zu ermöglichen. Ist der Zielbereich zu klein, könnte eine Berührung auch andere Events benachbarter Elemente auslösen.

## Implementierungs- und Einsatzstatus

Die [Browser-Kompatibilitätsdaten für Touch-Events](/de/docs/Web/API/Touch_events#browser_compatibility) zeigen, dass die Unterstützung von Touch-Events bei mobilen Browsern relativ umfassend ist, während die Unterstützung bei Desktop-Browsern hinterherhinkt, obwohl zusätzliche Implementierungen in Arbeit sind.

Einige neue Funktionen in Bezug auf den [Touch-Bereich](/de/docs/Web/API/Touch#touch_area) eines Touch-Punktes – der Kontaktbereich zwischen dem Benutzer und der Touch-Oberfläche – werden gerade standardisiert. Zu den neuen Funktionen gehören der _X_- und _Y_-Radius der Ellipse, die den Kontaktbereich eines Touch-Punktes mit der Touch-Oberfläche am genauesten umschreibt. Auch der _Rotationswinkel_ des Touch-Punktes – die Anzahl der Rotationsgrade, die auf die beschriebene Ellipse angewendet werden müssen, um mit dem Kontaktbereich übereinzustimmen – wird standardisiert, ebenso wie der Anpressdruck, der auf einen Touch-Punkt ausgeübt wird.

## Was ist mit Pointer Events?

Die Einführung neuer Eingabemechanismen führt zu einer erhöhten Komplexität von Anwendungen, um verschiedene Eingabe-Events zu handhaben, wie Tastaturevents, Mausevents, Stift-/Stylus-Events und Touch-Events. Um dieses Problem zu lösen, _definiert der [Pointer Events-Standard](https://www.w3.org/TR/pointerevents/) Events und zugehörige Schnittstellen zur Verarbeitung von hardwareunabhängigem Zeigereingaben von Geräten, einschließlich Maus, Stift, Touchscreen usw._. Das abstrakte Konzept des _Zeigers_ schafft ein einheitliches Eingabemodell, das einen Kontaktpunkt für Finger, Stift/Stylus oder Maus darstellen kann. Siehe den [MDN-Artikel zu Pointer Events](/de/docs/Web/API/Pointer_events).

Das Zeigerevent-Modell kann die Eingabeverarbeitung einer Anwendung vereinfachen, da ein Zeiger Eingaben von jedem Eingabegerät repräsentiert. Zusätzlich sind die Zeigerevent-Typen den Mausevent-Typen sehr ähnlich (zum Beispiel `pointerdown` und `pointerup`), sodass der Code zur Verarbeitung von Zeigerevents eng dem Mausbehandlungscode entspricht.

Der Implementierungsstatus von Zeigerevents in Browsern ist [relativ hoch](https://caniuse.com/#search=pointer) mit vollständigen Implementierungen in Chrome, Firefox, IE11 und Edge.

## Beispiele und Demos

Die folgenden Dokumente beschreiben, wie Touch-Events verwendet werden und enthalten Beispielcode:

- [Übersicht zu Touch-Events](/de/docs/Web/API/Touch_events)
- [Benutzerdefinierte Gesten implementieren](https://web.dev/articles/add-touch-to-your-site)
- [Touchscreen-Unterstützung einfach zu Ihrer Website hinzufügen](https://www.codicode.com/art/easy_way_to_add_touch_support_to_your_website.aspx)

Vorführungen von Touch-Events:

- [Paint-Programm (von Rick Byers)](https://rbyers.github.io/paint.html)
- [Tests und Demos zu Touch/Zeiger (von Patrick H. Lauke)](https://patrickhlauke.github.io/touch/)

## Community

- [Touch Events Community Group](https://github.com/w3c/touch-events)
- [Mailingliste](https://lists.w3.org/Archives/Public/public-touchevents/)
- [W3C #touchevents IRC-Kanal](irc://irc.w3.org:6667/)

## Verwandte Themen und Ressourcen

- [Pointer Events Standard](https://www.w3.org/TR/pointerevents/)
