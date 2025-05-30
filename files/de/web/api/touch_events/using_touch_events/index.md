---
title: Verwendung von Touch Events
slug: Web/API/Touch_events/Using_Touch_Events
l10n:
  sourceCommit: 58fda7e192fc7d82880f310d8f912ba2f50cd0d5
---

{{DefaultAPISidebar("Touch Events")}}

Heutzutage ist die meiste Web-Inhalte für Tastatur- und Mauseingaben ausgelegt. Allerdings sind Geräte mit Touchscreens (insbesondere tragbare Geräte) weit verbreitet und Webanwendungen können entweder direkt touchbasierte Eingaben verarbeiten, indem sie [Touch-Events](/de/docs/Web/API/TouchEvent) verwenden, oder die Anwendung kann _interpretierte Mausereignisse_ für die Anwendereingabe nutzen. Ein Nachteil der Verwendung von Mausereignissen ist, dass sie keine gleichzeitigen Benutzereingaben unterstützen, während Touch-Events mehrere gleichzeitige Eingaben (möglicherweise an verschiedenen Stellen auf der Touch-Oberfläche) unterstützen und so die Benutzererfahrung verbessern.

Die Touch-Events-Schnittstellen unterstützen anwendungsspezifische Einzel- und Multi-Touch-Interaktionen wie zum Beispiel eine Zwei-Finger-Geste. Eine Multi-Touch-Interaktion beginnt, wenn ein Finger (oder Stylus) die Kontaktfläche berührt. Weitere Finger können anschließend die Oberfläche berühren und sich möglicherweise über die Touch-Oberfläche bewegen. Die Interaktion endet, wenn die Finger von der Oberfläche entfernt werden. Während dieser Interaktion erhält eine Anwendung Touch-Events während der Start-, Bewegungs- und Endphasen. Die Anwendung kann eigene Semantiken auf die Touch-Eingaben anwenden.

## Schnittstellen

Touch-Events bestehen aus drei Schnittstellen ([`Touch`](/de/docs/Web/API/Touch), [`TouchEvent`](/de/docs/Web/API/TouchEvent) und [`TouchList`](/de/docs/Web/API/TouchList)) und den folgenden Eventtypen:

- [`touchstart`](/de/docs/Web/API/Element/touchstart_event) – wird ausgelöst, wenn ein Berührungspunkt auf der Touch-Oberfläche platziert wird.
- [`touchmove`](/de/docs/Web/API/Element/touchmove_event) – wird ausgelöst, wenn ein Berührungspunkt entlang der Touch-Oberfläche bewegt wird.
- [`touchend`](/de/docs/Web/API/Element/touchend_event) – wird ausgelöst, wenn ein Berührungspunkt von der Touch-Oberfläche entfernt wird.
- [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event) – wird ausgelöst, wenn ein Berührungspunkt auf eine implementierungsspezifische Weise unterbrochen wurde (zum Beispiel, wenn zu viele Berührungspunkte erstellt werden).

Die [`Touch`](/de/docs/Web/API/Touch)-Schnittstelle repräsentiert einen einzelnen Kontaktpunkt auf einem berührungsempfindlichen Gerät. Der Kontaktpunkt wird typischerweise als _Touch-Punkt_ oder einfach nur _Touch_ bezeichnet. Ein Touch wird normalerweise durch einen Finger oder Stylus auf einem Touchscreen, Stift oder Trackpad erzeugt. Die [Eigenschaften](/de/docs/Web/API/Touch#instance_properties) eines Berührungspunkts umfassen eine eindeutige Kennung, das Ziell-Element des Berührungspunkts sowie die _X_- und _Y_-Koordinaten der Position des Berührungspunkts relativ zum Ansichtsfenster, zur Seite und zum Bildschirm.

Die [`TouchList`](/de/docs/Web/API/TouchList)-Schnittstelle stellt eine _Liste_ von Kontaktpunkten mit einer Touch-Oberfläche dar, wobei jeder Kontaktpunkt einen Berührungspunkt darstellt. Wenn der Benutzer die Touch-Oberfläche mit einem Finger aktiviert, würde die Liste einen Eintrag enthalten, und wenn der Benutzer die Oberfläche mit drei Fingern berührt, hätte die Liste drei Einträge.

Die [`TouchEvent`](/de/docs/Web/API/TouchEvent)-Schnittstelle repräsentiert ein Ereignis, das gesendet wird, wenn sich der Zustand der Kontakte mit einer berührungsempfindlichen Oberfläche ändert. Die Zustandsänderungen umfassen das Herstellen des Kontakts mit einer Touch-Oberfläche, das Bewegen eines Berührungspunkts bei gleichzeitiger Kontaktbeibehaltung mit der Oberfläche, das Freigeben eines Berührungspunkts und das Abbrechen eines Touch-Events. Die Attribute dieser Schnittstelle umfassen den Status mehrerer _Modifier Keys_ (zum Beispiel die <kbd>Shift</kbd>-Taste) und die folgenden Touch-Listen:

- [`touches`](/de/docs/Web/API/TouchEvent/touches) – eine Liste aller derzeit auf dem Bildschirm befindlichen Berührungspunkte.
- [`targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches) – eine Liste der Berührungspunkte auf dem _Ziel_-DOM-Element.
- [`changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches) – eine Liste der Berührungspunkte, deren Elemente vom zugehörigen Ereignistyp abhängen:

  - Für das [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Ereignis ist es eine Liste der Berührungspunkte, die mit dem aktuellen Ereignis aktiv wurden.
  - Für das [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignis ist es eine Liste der Berührungspunkte, die sich seit dem letzten Ereignis geändert haben.
  - Für das [`touchend`](/de/docs/Web/API/Element/touchend_event)-Ereignis ist es eine Liste der Berührungspunkte, die von der Oberfläche entfernt wurden (das heißt, die Menge der Berührungspunkte, die den nicht mehr die Oberfläche berührenden Fingern entsprechen).

Zusammen definieren diese Schnittstellen eine relativ niedrigschwellige Menge von Funktionen, die jedoch viele Arten von touchbasierten Interaktionen unterstützen, einschließlich der bekannten Multi-Touch-Gesten wie z. B. Wischen mit mehreren Fingern, Drehen, Kneifen und Zoomen.

## Von Schnittstellen zu Gesten

Eine Anwendung kann verschiedene Faktoren berücksichtigen, wenn sie die Semantik einer Geste definiert. Beispielsweise die Entfernung, die ein Berührungspunkt von seiner Startposition bis zu seiner Position beim Beenden der Berührung zurückgelegt hat. Ein weiterer potenzieller Faktor ist die Zeit; z. B. die zwischen dem Start und dem Ende einer Berührung verstrichene Zeit oder die Zeitspanne zwischen zwei _aufeinanderfolgenden_ Taps, die dazu gedacht sind, eine Doppeltip-Geste zu erstellen. Die Richtung eines Wischens (z. B. von links nach rechts, von rechts nach links usw.) ist ein weiterer zu berücksichtigender Faktor.

Die von einer Anwendung verwendete(n) Touch-Liste(n) hängt/hängen von der Semantik der _Gesten_ der Anwendung ab. Wenn eine Anwendung zum Beispiel eine einzelne Berührung (Tippen) auf einem Element unterstützt, würde sie die [`targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches)-Liste in der [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Ereignisbehandlung verwenden, um den Berührungspunkt auf eine anwendungsspezifische Weise zu bearbeiten. Wenn eine Anwendung ein Zwei-Finger-Wischen für beliebige zwei Berührungspunkte unterstützt, verwendet sie die [`changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches)-Liste in der [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Ereignisbehandlung, um festzustellen, ob sich zwei Berührungspunkte bewegt haben, und implementiert dann die Semantik dieser Geste auf anwendungsspezifische Weise.

Browser senden normalerweise emulierte Maus- und Klick-Ereignisse, wenn nur ein einzelner aktiver Berührungspunkt vorhanden ist. Multi-Touch-Interaktionen mit zwei oder mehr aktiven Berührungspunkten erzeugen normalerweise nur Touch-Events. Um das Senden von emulierten Maus-Ereignissen zu verhindern, verwenden Sie die Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) in den Touch-Event-Handlern. Wenn Sie mit sowohl Maus- als auch Touch-Ereignissen interagieren möchten, verwenden Sie stattdessen [Pointer-Events](/de/docs/Web/API/Pointer_events).

## Grundlegende Schritte

Dieser Abschnitt enthält eine grundlegende Verwendung der oben genannten Schnittstellen. Siehe die [Touch-Events-Übersicht](/de/docs/Web/API/Touch_events) für ein ausführlicheres Beispiel.

Registrieren Sie einen Ereignis-Handler für jeden Touch-Event-Typ.

```js
// Register touch event handlers
someElement.addEventListener("touchstart", process_touchstart, false);
someElement.addEventListener("touchmove", process_touchmove, false);
someElement.addEventListener("touchcancel", process_touchcancel, false);
someElement.addEventListener("touchend", process_touchend, false);
```

Bearbeiten Sie ein Ereignis in einem Event-Handler, der die Gesten-Semantik der Anwendung implementiert.

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

## Best Practices

Hier sind einige _Best-Practices_, die bei der Verwendung von Touch-Events zu beachten sind:

- Minimieren Sie die Menge der Arbeiten, die in den Touch-Handlern ausgeführt werden.
- Fügen Sie die Berührungspunkte-Handler dem spezifischen Ziel-Element hinzu (anstatt dem gesamten Dokument oder Knoten weiter oben im Dokumentbaum).
- Fügen Sie [`touchmove`](/de/docs/Web/API/Element/touchmove_event), [`touchend`](/de/docs/Web/API/Element/touchend_event) und [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)-Ereignis-Handler innerhalb des [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Ereignisses hinzu.
- Das Ziel-Touch-Element oder der Knoten sollte groß genug sein, um eine Fingerberührung aufzunehmen. Wenn der Zielbereich zu klein ist, kann das Berühren andere Ereignisse für angrenzende Elemente auslösen.

## Implementierungs- und Bereitstellungsstatus

Die [Browser-Kompatibilitätsdaten für Touch-Events](/de/docs/Web/API/Touch_events#browser_compatibility) zeigen, dass die Unterstützung von Touch-Events unter mobilen Browsern relativ weit verbreitet ist, während die Unterstützung in Desktop-Browsern hinterherhinkt, obwohl zusätzliche Implementierungen in Arbeit sind.

Einige neue Funktionen bezüglich der [Berührungsfläche](/de/docs/Web/API/Touch#touch_area) eines Berührungspunkts - die Kontaktfläche zwischen dem Benutzer und der Touch-Oberfläche - befinden sich im Prozess der Standardisierung. Die neuen Funktionen umfassen den _X_- und _Y_-Radius der Ellipse, die am engsten den Kontaktbereich des Berührungspunkts mit der Touch-Oberfläche umschreibt. Der _Rotationswinkel_ des Berührungspunkts - die Anzahl der Drehgrad, die auf die beschriebene Ellipse anzuwenden sind, um an den Kontaktbereich anzupassen - wird ebenfalls standardisiert, ebenso wie der ausgeübte Druck auf einen Berührungspunkt.

## Was ist mit Pointer Events?

Die Einführung neuer Eingabemechanismen führt zu erhöhter Komplexität von Anwendungen, um verschiedene Eingabeereignisse zu verarbeiten, wie zum Beispiel Tastendruck-Ereignisse, Mausereignisse, Stift/Stylus-Ereignisse und Touch-Ereignisse. Um dieses Problem zu lösen, definiert die [Pointer Events](/de/docs/Web/API/Pointer_events)-API Ereignisse und zugehörige Schnittstellen zur Verarbeitung von hardwareunabhängigen Zeigereingaben von Geräten, einschließlich einer Maus, eines Stifts, eines Touchscreens usw. Das heißt, der abstrakte _Pointer_ schafft ein einheitliches Eingabemodell, das einen Kontaktpunkt für einen Finger, einen Stift/Stylus oder eine Maus darstellen kann.

Das Zeigereignismodell kann die Eingabeverarbeitung einer Anwendung vereinfachen, da ein Zeiger die Eingaben von beliebigen Eingabegeräten darstellt. Zusätzlich sind die Zeigereignistypen den Mausereignistypen sehr ähnlich (z. B. `pointerdown` und `pointerup`), sodass der Code für die Handhabung von Zeigereignissen stark dem Code für die Mausbehandlung ähnelt.

Der Implementierungsstatus von Zeigereignissen in Browsern ist [relativ hoch](https://caniuse.com/#search=pointer) mit vollständigen Implementierungen in Chrome, Firefox, IE11 und Edge.

## Siehe auch

- [Touch Events](/de/docs/Web/API/Touch_events)
- [Pointer Events](/de/docs/Web/API/Pointer_events)
- [Add touch to your site](https://web.dev/articles/add-touch-to-your-site) auf web.dev
- [Add touch screen support to your website (The easy way)](https://codicode.com/art/easy_way_to_add_touch_support_to_your_website.aspx)
- [Paint Program](https://rbyers.github.io/paint.html) von Rick Byers
- [Touch/pointer tests and demos](https://patrickhlauke.github.io/touch/) von Patrick H. Lauke
- [Touch Events Community Group](https://github.com/w3c/touch-events)
- [Mail-Liste](https://lists.w3.org/Archives/Public/public-touchevents/)
- [W3C #touchevents IRC-Kanal](irc://irc.w3.org:6667/)
