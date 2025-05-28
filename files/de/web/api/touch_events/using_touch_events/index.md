---
title: Verwenden von Touch-Ereignissen
slug: Web/API/Touch_events/Using_Touch_Events
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{DefaultAPISidebar("Touch Events")}}

Heutzutage sind die meisten Webinhalte für Tastatur- und Mauseingaben konzipiert. Allerdings sind Geräte mit Touchscreens (insbesondere tragbare Geräte) weit verbreitet, und Webanwendungen können entweder direkt touchbasierte Eingaben mit [Touch-Ereignissen](/de/docs/Web/API/TouchEvent) verarbeiten oder die Anwendung kann _interpretierte Mausereignisse_ zur Eingabe verwenden. Ein Nachteil der Verwendung von Mausereignissen ist, dass sie keine gleichzeitigen Benutzereingaben unterstützen, wohingegen Touch-Ereignisse mehrere gleichzeitige Eingaben (möglicherweise an verschiedenen Stellen der Touch-Oberfläche) unterstützen, was die Benutzererfahrung verbessert.

Die Schnittstellen der Touch-Ereignisse unterstützen spezifische Einzel- und Mehrfingergesten, wie z. B. eine Zweifinger-Geste. Eine Mehrfinger-Interaktion beginnt, wenn ein Finger (oder ein Stylus) zuerst die Kontaktoberfläche berührt. Andere Finger können anschließend die Oberfläche berühren und sich optional über die Touch-Oberfläche bewegen. Die Interaktion endet, wenn die Finger von der Oberfläche entfernt werden. Während dieser Interaktion erhält die Anwendung Touch-Ereignisse während der Start-, Bewegungs- und Endphase. Die Anwendung kann ihre eigene Semantik auf die Touch-Eingaben anwenden.

## Schnittstellen

Touch-Ereignisse bestehen aus drei Schnittstellen ([`Touch`](/de/docs/Web/API/Touch), [`TouchEvent`](/de/docs/Web/API/TouchEvent) und [`TouchList`](/de/docs/Web/API/TouchList)) und den folgenden Ereignistypen:

- [`touchstart`](/de/docs/Web/API/Element/touchstart_event) - wird ausgelöst, wenn ein Berührungspunkt auf der Touch-Oberfläche platziert wird.
- [`touchmove`](/de/docs/Web/API/Element/touchmove_event) - wird ausgelöst, wenn ein Berührungspunkt entlang der Touch-Oberfläche bewegt wird.
- [`touchend`](/de/docs/Web/API/Element/touchend_event) - wird ausgelöst, wenn ein Berührungspunkt von der Touch-Oberfläche entfernt wird.
- [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event) - wird ausgelöst, wenn ein Berührungspunkt auf eine implementierungsspezifische Weise unterbrochen wurde (zum Beispiel, wenn zu viele Berührungspunkte erstellt werden).

Die [`Touch`](/de/docs/Web/API/Touch) Schnittstelle repräsentiert einen einzelnen Kontaktpunkt auf einem berührungsempfindlichen Gerät. Der Kontaktpunkt wird typischerweise als _Berührungspunkt_ oder einfach als _Berührung_ bezeichnet. Eine Berührung wird normalerweise durch einen Finger oder Stylus auf einem Touchscreen, einem Stift oder Trackpad erzeugt. Die [Eigenschaften](/de/docs/Web/API/Touch#instance_properties) eines Berührungspunktes umfassen eine eindeutige Kennung, das Ziel-Element des Berührungspunktes sowie die _X_- und _Y_-Koordinaten der Position des Berührungspunktes im Verhältnis zum Ansichtsfenster, zur Seite und zum Bildschirm.

Die [`TouchList`](/de/docs/Web/API/TouchList) Schnittstelle stellt eine _Liste_ von Kontaktpunkten mit einer Touch-Oberfläche dar, einen Berührungspunkt pro Kontakt. Wenn der Benutzer die Touch-Oberfläche mit einem Finger aktiviert hat, enthält die Liste einen Eintrag, und wenn der Benutzer die Oberfläche mit drei Fingern berührt, beträgt die Listenlänge drei.

Die [`TouchEvent`](/de/docs/Web/API/TouchEvent) Schnittstelle stellt ein Ereignis dar, das gesendet wird, wenn sich der Zustand der Kontakte mit einer berührungsempfindlichen Oberfläche ändert. Die Zustandsänderungen beinhalten den Beginn des Kontakts mit einer Touch-Oberfläche, das Bewegen eines Berührungspunktes während der Kontakt gehalten wird, das Freigeben eines Berührungspunktes und das Abbrechen eines Touch-Ereignisses. Die Attribute dieser Schnittstelle umfassen den Zustand mehrerer _Modifier-Tasten_ (zum Beispiel die <kbd>Shift</kbd>-Taste) und die folgenden Touch-Listen:

- [`touches`](/de/docs/Web/API/TouchEvent/touches) - eine Liste aller derzeit auf dem Bildschirm befindlichen Berührungspunkte.
- [`targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches) - eine Liste der Berührungspunkte auf dem _Ziel_-DOM-Element.
- [`changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches) - eine Liste der Berührungspunkte, deren Elemente vom zugehörigen Ereignistyp abhängen:

  - Für das [`touchstart`](/de/docs/Web/API/Element/touchstart_event) Ereignis ist es eine Liste der Berührungspunkte, die mit dem aktuellen Ereignis aktiv geworden sind.
  - Für das [`touchmove`](/de/docs/Web/API/Element/touchmove_event) Ereignis ist es eine Liste der Berührungspunkte, die sich seit dem letzten Ereignis geändert haben.
  - Für das [`touchend`](/de/docs/Web/API/Element/touchend_event) Ereignis ist es eine Liste der Berührungspunkte, die von der Oberfläche entfernt wurden (das heißt, die Menge der Berührungspunkte, die den Fingern entsprechen, die die Oberfläche nicht mehr berühren).

Zusammen definieren diese Schnittstellen eine relativ niedrige Stufe an Funktionalitäten, ermöglichen aber viele Arten von touchbasierten Interaktionen, einschließlich der vertrauten Mehrfingergesten wie Mehrfinger-Wischen, Rotation, Kneifen und Zoomen.

## Von Schnittstellen zu Gesten

Eine Anwendung kann verschiedene Faktoren berücksichtigen, wenn sie die Semantik einer Geste definiert. Zum Beispiel die Distanz, die ein Berührungspunkt von seinem Ausgangsort zu seinem Ort bei Berührungsende zurückgelegt hat. Ein weiterer potenzieller Faktor ist die Zeit; zum Beispiel die Zeitspanne zwischen dem Berührungsbeginn und dem Berührungsende oder die Zeitdauer zwischen zwei _aufeinanderfolgenden_ Tap-Versuchen, die eine Doppeltipp-Geste erzeugen sollen. Die Richtung eines Wischens (zum Beispiel von links nach rechts, von rechts nach links usw.) ist ein weiterer zu berücksichtigender Faktor.

Welche Touch-Listen eine Anwendung verwendet, hängt von der Semantik der _Gesten_ der Anwendung ab. Zum Beispiel, wenn eine Anwendung einen einzigen Tipp auf einem Element unterstützt, würde sie die [`targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches) Liste im [`touchstart`](/de/docs/Web/API/Element/touchstart_event) Ereignishandler verwenden, um den Berührungspunkt in einer anwendungsspezifischen Weise zu verarbeiten. Wenn eine Anwendung Wischen mit zwei Fingern für beliebige zwei Berührungspunkte unterstützt, wird sie die [`changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches) Liste im [`touchmove`](/de/docs/Web/API/Element/touchmove_event) Ereignishandler verwenden, um zu bestimmen, ob zwei Berührungspunkte bewegt wurden, und dann die Semantik dieser Geste in einer anwendungsspezifischen Weise implementieren.

Browser senden normalerweise _emulierte_ Maus- und Klickevents, wenn es nur einen aktiven Berührungspunkt gibt. Mehrfinger-Interaktionen mit zwei oder mehr aktiven Berührungspunkten generieren in der Regel nur Touch-Ereignisse. Um zu verhindern, dass die emulierten Mausereignisse gesendet werden, verwenden Sie die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) Methode in den Touch-Event-Handlern. Wenn Sie sowohl mit Maus als auch mit Berührungen interagieren möchten, verwenden Sie stattdessen [Pointer-Ereignisse](/de/docs/Web/API/Pointer_events).

## Grundlegende Schritte

Dieser Abschnitt enthält eine grundlegende Verwendung der oben genannten Schnittstellen. Siehe die [Übersicht über Touch-Ereignisse](/de/docs/Web/API/Touch_events) für ein detaillierteres Beispiel.

Registrieren Sie eine Ereignisbehandlungsroutine für jeden Touch-Ereignistyp.

```js
// Register touch event handlers
someElement.addEventListener("touchstart", process_touchstart, false);
someElement.addEventListener("touchmove", process_touchmove, false);
someElement.addEventListener("touchcancel", process_touchcancel, false);
someElement.addEventListener("touchend", process_touchend, false);
```

Verarbeiten Sie ein Ereignis in einer Ereignisbehandlungsroutine und implementieren Sie die Gestensemantik der Anwendung.

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

Greifen Sie auf die Attribute eines Berührungspunktes zu.

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

## Beste Praktiken

Hier sind einige _beste Praktiken_ zu berücksichtigen, wenn Sie Touch-Ereignisse verwenden:

- Minimieren Sie die Menge an Arbeit, die in den Touch-Handlern ausgeführt wird.
- Fügen Sie die Berührungspunkthandler dem spezifischen Ziel-Element hinzu (anstatt dem gesamten Dokument oder Knoten höher im Dokumentbaum).
- Fügen Sie [`touchmove`](/de/docs/Web/API/Element/touchmove_event), [`touchend`](/de/docs/Web/API/Element/touchend_event) und [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event) Ereignishandler innerhalb des [`touchstart`](/de/docs/Web/API/Element/touchstart_event) ein.
- Das Ziel-Element oder der Zielknoten sollte groß genug sein, um eine Fingertip-Berührung aufzunehmen. Ist die Zielbereich zu klein, könnte das Berühren dazu führen, dass andere Ereignisse für benachbarte Elemente ausgelöst werden.

## Implementierungs- und Bereitstellungsstatus

Die [Browser-Kompatibilitätsdaten zu Touch-Ereignissen](/de/docs/Web/API/Touch_events#browser_compatibility) deuten darauf hin, dass die Unterstützung von Touch-Ereignissen unter mobilen Browsern relativ breit ist, während die Unterstützung in Desktop-Browsern hinterherhinkt, obwohl zusätzliche Implementierungen in Arbeit sind.

Einige neue Funktionen in Bezug auf die [Kontaktfläche](/de/docs/Web/API/Touch#touch_area) - der Kontaktbereich zwischen dem Benutzer und der Touch-Oberfläche - sind im Prozess der Standardisierung. Die neuen Funktionen umfassen den _X_- und _Y_-Radius der Ellipse, die den Kontaktbereich eines Berührungspunktions auf die Touch-Oberfläche am besten umschreibt. Der _Rotationswinkel_ des Berührungspunktes - die Anzahl der Rotationsgrade, die auf die beschriebene Ellipse angewendet werden sollen, um sich mit dem Kontaktbereich auszurichten - wird ebenfalls standardisiert, ebenso wie der auf einen Berührungspunkt angewendete Druck.

## Was ist mit Pointer Events?

Die Einführung neuer Eingabemechanismen führt zu einer erhöhten Komplexität der Anwendung zur Bearbeitung verschiedener Eingabeereignisse, wie Tastaturereignisse, Mausereignisse, Stift-/Stylus-Ereignisse und Touch-Ereignisse. Um dieses Problem anzugehen, definiert die [Pointer-Ereignisse API](/de/docs/Web/API/Pointer_events) Ereignisse und zugehörige Schnittstellen für die hardwareunabhängige Zeigereingabe von Geräten, einschließlich Maus, Stift, Touchscreen usw. Somit erstellt der abstrakte _Zeiger_ ein einheitliches Eingabemodell, das einen Kontaktpunkt für einen Finger, Stift/Schreiber oder Maus darstellen kann.

Das Zeigereignismodell kann die Eingabeverarbeitung einer Anwendung vereinfachen, da ein Zeiger die Eingabe von jedem Eingabegerät darstellt. Zusätzlich sind die Zeigerereignistypen sehr ähnlich zu den Mausereignistypen (zum Beispiel `pointerdown` und `pointerup`), so dass der Code zur Behandlung der Zeigereignisse dem der Mausverarbeitung sehr ähnlich ist.

Der Implementierungsstatus von Zeigereignissen in Browsern ist [relativ hoch](https://caniuse.com/#search=pointer), wobei Chrome, Firefox, IE11 und Edge vollständige Implementierungen haben.

## Siehe auch

- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
- [Pointer-Ereignisse](/de/docs/Web/API/Pointer_events)
- [Hinzufügen von Touch auf Ihre Website](https://web.dev/articles/add-touch-to-your-site) auf web.dev
- [Hinzufügen von Touchscreen-Support zu Ihrer Website (Der einfache Weg)](https://www.codicode.com/art/easy_way_to_add_touch_support_to_your_website.aspx)
- [Malprogramm](https://rbyers.github.io/paint.html) von Rick Byers
- [Touch-/Zeigertests und -demos](https://patrickhlauke.github.io/touch/) von Patrick H. Lauke
- [Touch Events Community Group](https://github.com/w3c/touch-events)
- [Mailingliste](https://lists.w3.org/Archives/Public/public-touchevents/)
- [W3C #touchevents IRC-Kanal](irc://irc.w3.org:6667/)
