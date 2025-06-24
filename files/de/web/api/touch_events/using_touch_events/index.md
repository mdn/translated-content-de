---
title: Verwenden von Touch-Events
slug: Web/API/Touch_events/Using_Touch_Events
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("Touch Events")}}

Heutzutage sind die meisten Webinhalte für Tastatur- und Mauseingaben konzipiert. Allerdings sind Geräte mit Touchscreens (insbesondere tragbare Geräte) weit verbreitet, und Webanwendungen können entweder direkte Touch-Eingaben durch die Verwendung von [touch events](/de/docs/Web/API/TouchEvent) verarbeiten oder die Anwendung kann _interpretierte Mausereignisse_ für die Anwendungseingabe nutzen. Ein Nachteil der Verwendung von Mausereignissen ist, dass sie keine gleichzeitigen Benutzereingaben unterstützen, wohingegen Touch-Events mehrere gleichzeitige Eingaben (möglicherweise an verschiedenen Orten auf der Touch-Oberfläche) unterstützen, was die Benutzerfreundlichkeit erhöht.

Die Touch-Events-Schnittstellen unterstützen anwendungsspezifische Einzel- und Mehrfach-Touch-Interaktionen wie z.B. eine Zwei-Finger-Geste. Eine Mehrfach-Touch-Interaktion beginnt, wenn ein Finger (oder Stylus) die Kontaktfläche zum ersten Mal berührt. Weitere Finger können daraufhin die Fläche berühren und optional über die Touch-Oberfläche bewegen. Die Interaktion endet, wenn die Finger von der Oberfläche entfernt werden. Während dieser Interaktion empfängt eine Anwendung Touch-Events während der Start-, Bewegungs- und Endphasen. Die Anwendung kann ihre eigenen Bedeutungen den Touch-Eingaben zuordnen.

## Schnittstellen

Touch-Events bestehen aus drei Schnittstellen ([`Touch`](/de/docs/Web/API/Touch), [`TouchEvent`](/de/docs/Web/API/TouchEvent) und [`TouchList`](/de/docs/Web/API/TouchList)) und den folgenden Ereignistypen:

- [`touchstart`](/de/docs/Web/API/Element/touchstart_event) - wird ausgelöst, wenn ein Berührungspunkt auf die Touch-Oberfläche gesetzt wird.
- [`touchmove`](/de/docs/Web/API/Element/touchmove_event) - wird ausgelöst, wenn ein Berührungspunkt über die Touch-Oberfläche bewegt wird.
- [`touchend`](/de/docs/Web/API/Element/touchend_event) - wird ausgelöst, wenn ein Berührungspunkt von der Touch-Oberfläche entfernt wird.
- [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event) - wird ausgelöst, wenn ein Berührungspunkt auf eine implementierungsspezifische Weise unterbrochen wurde (zum Beispiel, wenn zu viele Berührungspunkte erstellt werden).

Die [`Touch`](/de/docs/Web/API/Touch) Schnittstelle repräsentiert einen einzigen Berührungspunkt auf einem berührungsempfindlichen Gerät. Der Berührungspunkt wird typischerweise als _touch point_ oder einfach als _touch_ bezeichnet. Eine Berührung wird normalerweise durch einen Finger oder Stylus auf einem Touchscreen, Stift oder Trackpad erzeugt. Ein Berührungspunkt hat [Eigenschaften](/de/docs/Web/API/Touch#instance_properties) wie eine eindeutige Kennung, das Zielelement des Berührungspunkts sowie die _X_- und _Y_-Koordinaten der Position des Berührungspunkts relativ zum Ansichtsfenster, zur Seite und zum Bildschirm.

Die [`TouchList`](/de/docs/Web/API/TouchList) Schnittstelle repräsentiert eine _Liste_ von Berührungspunkten auf einer Touch-Oberfläche, jeweils ein Berührungspunkt pro Kontakt. Wenn der Benutzer die Touch-Oberfläche mit einem Finger aktiviert, enthält die Liste ein Element, und wenn der Benutzer die Oberfläche mit drei Fingern berührt, beträgt die Listenlänge drei.

Die [`TouchEvent`](/de/docs/Web/API/TouchEvent) Schnittstelle repräsentiert ein Ereignis, das gesendet wird, wenn sich der Zustand der Kontakte mit einer berührungsempfindlichen Oberfläche ändert. Die Zustandsänderungen sind das Herstellen eines Kontakts mit einer Touch-Oberfläche, das Bewegen eines Berührungspunkts bei bestehendem Kontakt mit der Oberfläche, das Loslassen eines Berührungspunkts und das Abbrechen eines Touch-Ereignisses. Zu den Attributen dieser Schnittstelle zählen der Zustand verschiedener _Modifikatortasten_ (zum Beispiel die <kbd>Shift</kbd>-Taste) und die folgenden Touch-Listen:

- [`touches`](/de/docs/Web/API/TouchEvent/touches) - eine Liste aller aktuell auf dem Bildschirm vorhandenen Berührungspunkte.
- [`targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches) - eine Liste der Berührungspunkte auf dem _Ziel_-DOM-Element.
- [`changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches) - eine Liste der Berührungspunkte, deren Elemente vom zugehörigen Ereignistyp abhängen:
  - Für das [`touchstart`](/de/docs/Web/API/Element/touchstart_event) Ereignis ist es eine Liste der Berührungspunkte, die mit dem aktuellen Ereignis aktiv wurden.
  - Für das [`touchmove`](/de/docs/Web/API/Element/touchmove_event) Ereignis ist es eine Liste der Berührungspunkte, die sich seit dem letzten Ereignis geändert haben.
  - Für das [`touchend`](/de/docs/Web/API/Element/touchend_event) Ereignis ist es eine Liste der Berührungspunkte, die von der Oberfläche entfernt wurden (das heißt, die Menge der Berührungspunkte, die zu Fingern gehören, die die Oberfläche nicht mehr berühren).

Zusammen definieren diese Schnittstellen eine relativ niederschwellige Sammlung von Funktionen, die dennoch viele Arten von touch-basierten Interaktionen unterstützen, einschließlich der bekannten Mehrfach-Touch-Gesten wie Mehrfinger-Wischen, Drehen, Kneifen und Zoomen.

## Von Schnittstellen zu Gesten

Eine Anwendung kann verschiedene Faktoren berücksichtigen, wenn sie die Bedeutung einer Geste definiert. Zum Beispiel die Entfernung, die ein Berührungspunkt von seinem Ausgangspunkt zu seinem Ort bei der Beendigung des Touchs zurückgelegt hat. Ein weiterer potenzieller Faktor ist die Zeit; zum Beispiel die verstrichene Zeit zwischen dem Start und dem Ende des Touchs oder das Zeitintervall zwischen zwei _aufeinander folgenden_ Berührungen, die eine Doppelberührungsgeste erzeugen sollen. Die Richtung eines Wischens (zum Beispiel von links nach rechts, von rechts nach links usw.) ist ein weiterer zu berücksichtigender Faktor.

Die von einer Anwendung verwendeten Touch-Listen hängen von der Semantik der Gesten der Anwendung ab. Wenn eine Anwendung beispielsweise eine Einzelberührung (Tap) auf einem Element unterstützt, würde sie die [`targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches) Liste im [`touchstart`](/de/docs/Web/API/Element/touchstart_event) Ereignishandler verwenden, um den Berührungspunkt auf eine anwendungsspezifische Weise zu verarbeiten. Wenn eine Anwendung eine Zwei-Finger-Wischbewegung für beliebige zwei Berührungspunkte unterstützt, verwendet sie die [`changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches) Liste im [`touchmove`](/de/docs/Web/API/Element/touchmove_event) Ereignishandler, um zu bestimmen, ob sich zwei Berührungspunkte bewegt haben, und implementiert dann die Semantik dieser Geste in einer anwendungsspezifischen Weise.

Browser versenden in der Regel _emulierte_ Maus- und Klickereignisse, wenn es nur einen aktiven Berührungspunkt gibt. Mehrfach-Touch-Interaktionen, die zwei oder mehr aktive Berührungspunkte umfassen, erzeugen normalerweise nur Touch-Events. Um zu verhindern, dass die emulierten Mausereignisse gesendet werden, verwenden Sie die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) Methode in den Touch-Ereignishandlern. Wenn Sie sowohl Maus- als auch Touch-Interaktionen wünschen, verwenden Sie stattdessen [Pointer-Events](/de/docs/Web/API/Pointer_events).

## Grundlegende Schritte

Dieser Abschnitt enthält eine grundlegende Nutzung der oben genannten Schnittstellen. Weitere Details finden Sie in der [Übersicht zu Touch-Events](/de/docs/Web/API/Touch_events).

Registrieren Sie einen Ereignishandler für jeden Typ von Touch-Ereignis.

```js
// Register touch event handlers
someElement.addEventListener("touchstart", process_touchstart, false);
someElement.addEventListener("touchmove", process_touchmove, false);
someElement.addEventListener("touchcancel", process_touchcancel, false);
someElement.addEventListener("touchend", process_touchend, false);
```

Verarbeiten Sie ein Ereignis in einem Ereignishandler und setzen Sie die Geste der Anwendung um.

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

Verhindern Sie, dass der Browser _emulierte Mausereignisse_ verarbeitet.

```js
// touchmove handler
function process_touchmove(ev) {
  // Set call preventDefault()
  ev.preventDefault();
}
```

## Bewährte Praktiken

Hier sind einige _bewährte Praktiken_ zu beachten, wenn Sie Touch-Events verwenden:

- Minimieren Sie die Arbeitsmenge, die in den Touch-Handlern ausgeführt wird.
- Fügen Sie die Handler für die Berührungspunkte dem spezifischen Zielelement hinzu (und nicht dem gesamten Dokument oder Knoten weiter oben im Dokumentenbaum).
- Fügen Sie [`touchmove`](/de/docs/Web/API/Element/touchmove_event), [`touchend`](/de/docs/Web/API/Element/touchend_event) und [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event) Ereignishandler innerhalb des [`touchstart`](/de/docs/Web/API/Element/touchstart_event) hinzu.
- Das Ziel-Touch-Element oder der -Knoten sollte groß genug sein, um eine Berührung eines Fingers aufzunehmen. Wenn der Zielbereich zu klein ist, könnte eine Berührung dazu führen, dass andere Ereignisse für angrenzende Elemente ausgelöst werden.

## Implementierungs- und Einsatzzustand

Die [Touch-Events-Browser-Kompatibilitätsdaten](/de/docs/Web/API/Touch_events#browser_compatibility) zeigen, dass die Unterstützung von Touch-Events unter mobilen Browsern relativ hoch ist, während die Unterstützung bei Desktop-Browsern hinterherhinkt, obwohl weitere Implementierungen in Arbeit sind.

Einige neue Funktionen in Bezug auf den [berührungspunktbezogenen Bereich](/de/docs/Web/API/Touch#touch_area) - der Bereich des Kontakts zwischen dem Benutzer und der Touch-Oberfläche - befinden sich im Prozess der Standardisierung. Zu den neuen Funktionen gehören der _X_- und _Y_-Radius der Ellipse, die den Berührungsbereich eines Berührungspunkts mit der Touch-Oberfläche am engsten umschreibt. Der _Rotationswinkel_ des Berührungspunkts - die Anzahl der Rotationsgrade, die auf die beschriebene Ellipse angewendet werden müssen, um sich mit dem Kontaktbereich auszurichten - wird ebenfalls standardisiert, ebenso wie der ausgeübte Druck auf einen Berührungspunkt.

## Was ist mit Pointer-Events?

Die Einführung neuer Eingabemechanismen führt zu einer erhöhten Komplexität der Anwendungen, um verschiedene Eingabeereignisse zu verarbeiten, wie z.B. Tastenereignisse, Mausereignisse, Stift-/Stylus-Ereignisse und Touch-Events. Um dieses Problem zu adressieren, definiert die [Pointer-Events](/de/docs/Web/API/Pointer_events) API Ereignisse und zugehörige Schnittstellen zur Verarbeitung von hardwareunabhängiger Zeigereingabe von Geräten, einschließlich Maus, Stift, Touchscreen usw. Das heißt, der abstrakte _Zeiger_ schafft ein einheitliches Eingabemodell, das einen Kontaktpunkt für Finger, Stift/Zeichenstift oder Maus darstellen kann.

Das Zeigerereignismodell kann die Eingabeverarbeitung einer Anwendung vereinfachen, da ein Zeiger Eingaben von jedem Eingabegerät repräsentiert. Zusätzlich sind die Zeigerereignistypen den Mausereignistypen sehr ähnlich (zum Beispiel `pointerdown` und `pointerup`), sodass der Code zur Bearbeitung von Zeigerereignissen dem Code zur Mausbearbeitung sehr ähnlich ist.

Der Implementierungsstatus von Zeigerereignissen in Browsern ist [relativ hoch](https://caniuse.com/#search=pointer) mit vollständigen Implementierungen in Chrome, Firefox, IE11 und Edge.

## Siehe auch

- [Touch-Events](/de/docs/Web/API/Touch_events)
- [Pointer-Events](/de/docs/Web/API/Pointer_events)
- [Hinzufügen von Touch-Funktionalität zu Ihrer Website](https://web.dev/articles/add-touch-to-your-site) auf web.dev
- [Hinzufügen von Touchscreen-Unterstützung zu Ihrer Website (Der einfache Weg)](https://codicode.com/art/easy_way_to_add_touch_support_to_your_website.aspx)
- [Malprogramm](https://rbyers.github.io/paint.html) von Rick Byers
- [Touch/Pointer Tests und Demos](https://patrickhlauke.github.io/touch/) von Patrick H. Lauke
- [Touch-Events Community Group](https://github.com/w3c/touch-events)
- [Mail-Liste](https://lists.w3.org/Archives/Public/public-touchevents/)
- [W3C #touchevents IRC-Kanal](irc://irc.w3.org:6667/)
