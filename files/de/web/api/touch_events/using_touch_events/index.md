---
title: Verwenden von Touch Events
slug: Web/API/Touch_events/Using_Touch_Events
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{DefaultAPISidebar("Touch Events")}}

Heutzutage sind die meisten Webinhalte für Tastatur- und Mauseingaben konzipiert. Jedoch sind Geräte mit Touchscreens (insbesondere tragbare Geräte) weit verbreitet und Webanwendungen können entweder direkte touch-basierte Eingaben durch [Touch Events](/de/docs/Web/API/TouchEvent) verarbeiten oder die Anwendung kann _interpretierte Mausereignisse_ für die Anwendungseingabe verwenden. Ein Nachteil bei der Verwendung von Mausereignissen ist, dass sie keine gleichzeitigen Benutzereingaben unterstützen, während Touch Events mehrere gleichzeitige Eingaben (möglicherweise an verschiedenen Stellen auf der Touch-Oberfläche) unterstützen und so die Benutzererfahrung verbessern.

Die Touch-Event-Schnittstellen unterstützen anwendungsspezifische Einzel- und Multitouch-Interaktionen wie z.B. eine Zwei-Finger-Geste. Eine Multitouch-Interaktion beginnt, wenn ein Finger (oder ein Stift) die Kontaktfläche berührt. Weitere Finger können anschließend die Oberfläche berühren und optional über die Touch-Oberfläche bewegt werden. Die Interaktion endet, wenn die Finger von der Oberfläche entfernt werden. Während dieser Interaktion erhält eine Anwendung Touch Events während der Start-, Bewegungs- und Endphase. Die Anwendung kann ihre eigenen Semantiken auf die Touch-Eingaben anwenden.

## Schnittstellen

Touch Events bestehen aus drei Schnittstellen ([`Touch`](/de/docs/Web/API/Touch), [`TouchEvent`](/de/docs/Web/API/TouchEvent) und [`TouchList`](/de/docs/Web/API/TouchList)) und den folgenden Ereignistypen:

- [`touchstart`](/de/docs/Web/API/Element/touchstart_event) - ausgelöst, wenn ein Berührungspunkt auf der Touch-Oberfläche platziert wird.
- [`touchmove`](/de/docs/Web/API/Element/touchmove_event) - ausgelöst, wenn ein Berührungspunkt entlang der Touch-Oberfläche bewegt wird.
- [`touchend`](/de/docs/Web/API/Element/touchend_event) - ausgelöst, wenn ein Berührungspunkt von der Touch-Oberfläche entfernt wird.
- [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event) - ausgelöst, wenn ein Berührungspunkt in einer implementationsspezifischen Weise gestört wurde (zum Beispiel, wenn zu viele Berührungspunkte erstellt wurden).

Die Schnittstelle [`Touch`](/de/docs/Web/API/Touch) repräsentiert einen einzelnen Kontaktpunkt auf einem berührungsempfindlichen Gerät. Der Kontaktpunkt wird typischerweise als _Berührungspunkt_ oder einfach nur _Touch_ bezeichnet. Ein Touch wird normalerweise durch einen Finger oder Stift auf einem Touchscreen, Stift oder Trackpad erzeugt. Die [Eigenschaften](/de/docs/Web/API/Touch#instance_properties) eines Berührungspunkts umfassen eine eindeutige Kennung, das Ziel-Element des Berührungspunkts sowie die _X_- und _Y_-Koordinaten der Position des Berührungspunkts relativ zum Ansichtsfenster, zur Seite und zum Bildschirm.

Die Schnittstelle [`TouchList`](/de/docs/Web/API/TouchList) repräsentiert eine _Liste_ von Kontaktpunkten mit einer Touch-Oberfläche, wobei jeder Kontaktpunkt ein Element in der Liste darstellt. Berührt der Benutzer die Touch-Oberfläche mit einem Finger, enthält die Liste ein Element; berührt er die Oberfläche mit drei Fingern, beträgt die Listenlänge drei.

Die [`TouchEvent`](/de/docs/Web/API/TouchEvent)-Schnittstelle repräsentiert ein Ereignis, das gesendet wird, wenn sich der Zustand der Kontakte mit einer berührungsempfindlichen Oberfläche ändert. Die Zustandsänderungen umfassen das Starten des Kontakts mit einer Touch-Oberfläche, das Bewegen eines Berührungspunkts bei aufrechterhaltenem Kontakt mit der Oberfläche, das Loslassen eines Berührungspunkts und das Abbrechen eines Touch-Ereignisses. Die Attribute dieser Schnittstelle umfassen den Zustand mehrerer _Modifier-Keys_ (wie z.B. die <kbd>Shift</kbd>-Taste) und die folgenden Touch-Listen:

- [`touches`](/de/docs/Web/API/TouchEvent/touches) - eine Liste aller Berührungspunkte, die sich momentan auf dem Bildschirm befinden.
- [`targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches) - eine Liste der Berührungspunkte auf dem _Ziel_-DOM-Element.
- [`changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches) - eine Liste der Berührungspunkte, deren Elemente abhängig vom zugehörigen Ereignistyp sind:
  - Für das [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Ereignis ist es eine Liste der Berührungspunkte, die mit dem aktuellen Ereignis aktiv wurden.
  - Für das [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignis ist es eine Liste der Berührungspunkte, die sich seit dem letzten Ereignis geändert haben.
  - Für das [`touchend`](/de/docs/Web/API/Element/touchend_event)-Ereignis ist es eine Liste der Berührungspunkte, die von der Oberfläche entfernt wurden (d.h. die Menge der Berührungspunkte, die zu Fingern gehören, die die Oberfläche nicht mehr berühren).

Diese Schnittstellen definieren zusammen einen relativ niedrigstufigen Satz von Funktionen, unterstützen jedoch viele Arten von touch-basierten Interaktionen, einschließlich der vertrauten Multitouch-Gesten wie Wischen mit mehreren Fingern, Drehen, Kneifen (Pinch) und Zoomen.

## Von Schnittstellen zu Gesten

Eine Anwendung kann verschiedene Faktoren berücksichtigen, wenn sie die Semantik einer Geste definiert. Beispielsweise die Entfernung, die ein Berührungspunkt von seinem Startpunkt bis zu seinem Punkt zurückgelegt hat, als die Berührung endete. Ein weiterer möglicher Faktor ist die Zeit; zum Beispiel die verstrichene Zeit zwischen dem Beginn und dem Ende der Berührung oder die Zeitspanne zwischen zwei _aufeinanderfolgenden_ Taps, die beabsichtigt sind, eine Doppeltap-Geste zu erstellen. Die Richtung eines Wischens (zum Beispiel von links nach rechts, von rechts nach links, etc.) ist ein weiterer Faktor, der berücksichtigt werden muss.

Die von einer Anwendung verwendeten Touch-Listen hängen von der Semantik der _Gesten_ der Anwendung ab. Wenn eine Anwendung beispielsweise eine einzelne Touch-Eingabe (Tap) auf einem Element unterstützt, würde sie die Liste [`targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches) im [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Ereignishandler verwenden, um den Berührungspunkt auf eine anwendungsspezifische Weise zu verarbeiten. Wenn eine Anwendung das Wischen mit zwei Fingern für beliebige zwei Berührungspunkte unterstützt, wird sie die Liste [`changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches) im [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignishandler verwenden, um zu bestimmen, ob sich zwei Berührungspunkte bewegt haben, und dann die Semantik dieser Geste auf eine anwendungsspezifische Weise umsetzen.

Browser senden typischerweise _emulierte_ Maus- und Klickereignisse, wenn es nur einen aktiven Berührungspunkt gibt. Multitouch-Interaktionen, die zwei oder mehr aktive Berührungspunkte beinhalten, generieren normalerweise nur Touch Events. Um zu verhindern, dass die emulierten Mausereignisse gesendet werden, verwenden Sie die Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) in den Touch-Ereignishandlern. Wenn Sie sowohl mit Maus als auch mit Berührungen interagieren möchten, verwenden Sie stattdessen [Pointer Events](/de/docs/Web/API/Pointer_events).

## Grundlegende Schritte

Dieser Abschnitt enthält eine grundlegende Verwendung der oben genannten Schnittstellen. Sehen Sie sich den [Überblick der Touch-Events](/de/docs/Web/API/Touch_events) für ein detaillierteres Beispiel an.

Registrieren Sie einen Ereignishandler für jeden Touch-Ereignistyp.

```js
// Register touch event handlers
someElement.addEventListener("touchstart", process_touchstart);
someElement.addEventListener("touchmove", process_touchmove);
someElement.addEventListener("touchcancel", process_touchcancel);
someElement.addEventListener("touchend", process_touchend);
```

Verarbeiten Sie ein Ereignis in einem Ereignishandler und implementieren Sie die Gestensemantik der Anwendung.

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

Greifen Sie auf die Attribute eines Berührungspunkts zu.

```js
// Create touchstart handler
someElement.addEventListener("touchstart", (ev) => {
  // Iterate through the touch points that were activated
  // for this element and process each event 'target'
  for (const touch of ev.targetTouches) {
    process_target(touch.target);
  }
});
```

Verhindern Sie, dass der Browser _emulierte Mausereignisse_ verarbeitet.

```js
// touchmove handler
function process_touchmove(ev) {
  // Set call preventDefault()
  ev.preventDefault();
}
```

## Beste Praktiken

Hier sind einige _beste Praktiken_, die bei der Verwendung von Touch Events zu beachten sind:

- Minimieren Sie die Arbeitsmenge, die in den Touch-Handlern ausgeführt wird.
- Fügen Sie die Berührungspunkt-Handler dem spezifischen Zielelement hinzu (anstatt dem gesamten Dokument oder höheren Knoten im Dokumentbaum).
- Fügen Sie die Ereignishandler für [`touchmove`](/de/docs/Web/API/Element/touchmove_event), [`touchend`](/de/docs/Web/API/Element/touchend_event) und [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event) innerhalb von [`touchstart`](/de/docs/Web/API/Element/touchstart_event) hinzu.
- Das Ziel-Touch-Element oder der Knoten sollten groß genug sein, um eine Berührung mit dem Finger aufzunehmen. Wenn der Zielbereich zu klein ist, könnte es beim Berühren dazu kommen, dass andere Ereignisse für benachbarte Elemente ausgelöst werden.

## Implementierungs- und Bereitstellungsstatus

Die [Browser-Kompatibilitätsdaten zu Touch-Events](/de/docs/Web/API/Touch_events#browser_compatibility) zeigen, dass die Unterstützung von Touch Events unter mobilen Browsern relativ breit ist, während die Unterstützung in Desktop-Browsern hinterherhinkt, obwohl zusätzliche Implementierungen in Arbeit sind.

Einige neue Funktionen bezüglich der [Touch Area](/de/docs/Web/API/Touch#touch_area) eines Berührungspunkts – der Kontaktbereich zwischen dem Benutzer und der Touch-Oberfläche – werden derzeit standardisiert. Zu den neuen Funktionen gehören der _X_- und _Y_-Radius der Ellipse, die den Kontaktbereich eines Berührungspunkts mit der Touch-Oberfläche am genauesten umschreibt. Auch der _Rotationswinkel_ des Berührungspunkts – die Anzahl der Drehgrade, die auf die beschriebene Ellipse anzuwenden sind, um sie mit dem Kontaktbereich auszurichten – wird standardisiert, ebenso wie der Druck, der auf einen Berührungspunkt ausgeübt wird.

## Was ist mit Pointer-Events?

Die Einführung neuer Eingabemechanismen führt zu einer erhöhten Komplexität der Anwendung, um verschiedene Eingabeereignisse wie Tastenereignisse, Mausereignisse, Stift- bzw. Stylus-Ereignisse und Touch-Events zu verarbeiten. Um diesem Problem zu begegnen, definiert die [Pointer Events](/de/docs/Web/API/Pointer_events)-API Ereignisse und zugehörige Schnittstellen zum Umgang mit hardware-agnostischen Pointer-Eingaben von Geräten wie Maus, Stift, Touchscreen usw. Das heißt, der abstrakte _Pointer_ schafft ein einheitliches Eingabemodell, das einen Kontaktpunkt für Finger, Stift/Styles oder Maus darstellen kann.

Das Pointer-Event-Modell kann die Eingabeverarbeitung einer Anwendung vereinfachen, da ein Pointer Eingaben von beliebigen Eingabegeräten repräsentiert. Darüber hinaus ähneln die Pointer-Ereignistypen sehr den Maus-Ereignistypen (zum Beispiel `pointerdown` und `pointerup`), sodass der Code zur Behandlung von Pointer-Events dem Code zur Mausbehandlung sehr ähnlich ist.

Der Implementierungsstatus von Pointer-Events in Browsern ist [relativ hoch](https://caniuse.com/#search=pointer) mit vollständigen Implementierungen in Chrome, Firefox, IE11 und Edge.

## Siehe auch

- [Touch-Events](/de/docs/Web/API/Touch_events)
- [Pointer-Events](/de/docs/Web/API/Pointer_events)
- [Fügen Sie Ihrer Website Touch hinzu](https://web.dev/articles/add-touch-to-your-site) auf web.dev
- [Fügen Sie Ihrer Website Touchscreen-Unterstützung hinzu (Der einfache Weg)](https://codicode.com/art/easy_way_to_add_touch_support_to_your_website.aspx)
- [Paint-Programm](https://rbyers.github.io/paint.html) von Rick Byers
- [Touch/Pointer-Tests und Demos](https://patrickhlauke.github.io/touch/) von Patrick H. Lauke
- [Touch Events Community Group](https://github.com/w3c/touch-events)
- [Mail-Verteiler](https://lists.w3.org/Archives/Public/public-touchevents/)
- [W3C #touchevents IRC-Kanal](irc://irc.w3.org:6667/)
