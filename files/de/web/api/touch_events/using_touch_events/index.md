---
title: Verwendung von Touch Events
slug: Web/API/Touch_events/Using_Touch_Events
l10n:
  sourceCommit: a5262782ccd7d9ea726d79444e5b40cdad06a826
---

{{DefaultAPISidebar("Touch Events")}}

Heutzutage sind die meisten Webinhalte für die Eingabe über Tastatur und Maus ausgelegt. Jedoch sind Geräte mit Touchscreens (insbesondere tragbare Geräte) weit verbreitet, und Webanwendungen können entweder direkt berührungsbasierte Eingaben durch die Verwendung von [Touch Events](/de/docs/Web/API/TouchEvent) verarbeiten oder die Anwendung kann _interpretierte Mausevents_ für die Anwendungseingabe verwenden. Ein Nachteil bei der Verwendung von Mausevents ist, dass sie keine gleichzeitige Benutzereingabe unterstützen, während Touch Events mehrere gleichzeitige Eingaben (möglicherweise an verschiedenen Positionen auf der Touch-Oberfläche) unterstützen, was somit die Benutzererfahrung verbessert.

Die Touch-Events-Schnittstellen unterstützen anwendungsspezifische Einzel- und Multi-Touch-Interaktionen wie eine Zwei-Finger-Geste. Eine Multi-Touch-Interaktion beginnt, wenn ein Finger (oder Stylus) die Kontaktoberfläche berührt. Andere Finger können anschließend die Oberfläche berühren und optional über die Touchoberfläche bewegt werden. Die Interaktion endet, wenn die Finger von der Oberfläche entfernt werden. Während dieser Interaktion erhält eine Anwendung Touch Events während der Start-, Bewegungs- und Endphasen. Die Anwendung kann ihre eigenen Semantiken auf die Touch-Eingaben anwenden.

## Schnittstellen

Touch Events bestehen aus drei Schnittstellen ([`Touch`](/de/docs/Web/API/Touch), [`TouchEvent`](/de/docs/Web/API/TouchEvent) und [`TouchList`](/de/docs/Web/API/TouchList)) und den folgenden Event-Typen:

- [`touchstart`](/de/docs/Web/API/Element/touchstart_event) - wird ausgelöst, wenn ein Berührungspunkt auf der Touch-Oberfläche platziert wird.
- [`touchmove`](/de/docs/Web/API/Element/touchmove_event) - wird ausgelöst, wenn ein Berührungspunkt entlang der Touch-Oberfläche bewegt wird.
- [`touchend`](/de/docs/Web/API/Element/touchend_event) - wird ausgelöst, wenn ein Berührungspunkt von der Touch-Oberfläche entfernt wird.
- [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event) - wird ausgelöst, wenn ein Berührungspunkt auf eine implementierungsspezifische Weise gestört wird (zum Beispiel, wenn zu viele Berührungspunkte erstellt werden).

Die [`Touch`](/de/docs/Web/API/Touch)-Schnittstelle stellt einen einzelnen Kontaktpunkt auf einem berührungsempfindlichen Gerät dar. Der Kontaktpunkt wird typischerweise als _Berührungspunkt_ oder einfach als _Touch_ bezeichnet. Eine Berührung wird normalerweise von einem Finger oder Stylus auf einem Touchscreen, Stift oder Trackpad erzeugt. Die [Eigenschaften](/de/docs/Web/API/Touch#instance_properties) eines Berührungspunkts umfassen eine eindeutige Kennung, das Ziel-Element des Berührungspunkts sowie die _X_- und _Y_-Koordinaten der Position des Berührungspunkts relativ zum Viewport, zur Seite und zum Bildschirm.

Die [`TouchList`](/de/docs/Web/API/TouchList)-Schnittstelle stellt eine _Liste_ von Kontaktpunkten mit einer Touch-Oberfläche dar, einen Berührungspunkt pro Kontakt. Wenn der Benutzer die Touch-Oberfläche mit einem Finger aktiviert, würde die Liste also einen Eintrag enthalten, und wenn der Benutzer die Oberfläche mit drei Fingern berührt, wäre die Listenlänge drei.

Die [`TouchEvent`](/de/docs/Web/API/TouchEvent)-Schnittstelle stellt ein Event dar, das gesendet wird, wenn sich der Zustand der Kontakte mit einer berührungsempfindlichen Oberfläche ändert. Die Zustandsänderungen umfassen den Start des Kontakts mit einer Touch-Oberfläche, das Bewegen eines Berührungspunkts bei Kontakt mit der Oberfläche, das Loslassen eines Berührungspunkts und das Abbrechen eines Touch-Events. Zu den Attributen dieser Schnittstelle gehören der Zustand mehrerer _Modifikatortasten_ (zum Beispiel die <kbd>Umschalt</kbd>-Taste) sowie die folgenden Touch-Listen:

- [`touches`](/de/docs/Web/API/TouchEvent/touches) - eine Liste aller aktuell auf dem Bildschirm befindlichen Berührungspunkte.
- [`targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches) - eine Liste der Berührungspunkte auf dem _Ziel_-DOM-Element.
- [`changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches) - eine Liste der Berührungspunkte, deren Einträge vom zugehörigen Event-Typ abhängen:

  - Für das [`touchstart`](/de/docs/Web/API/Element/touchstart_event) Event ist es eine Liste der Berührungspunkte, die mit dem aktuellen Ereignis aktiv geworden sind.
  - Für das [`touchmove`](/de/docs/Web/API/Element/touchmove_event) Event ist es eine Liste der Berührungspunkte, die sich seit dem letzten Event geändert haben.
  - Für das [`touchend`](/de/docs/Web/API/Element/touchend_event) Event ist es eine Liste der Berührungspunkte, die von der Oberfläche entfernt wurden (das heißt, die Menge der Berührungspunkte, die den Fingern entsprechen, die nicht mehr die Oberfläche berühren).

Zusammen definieren diese Schnittstellen eine relativ niedrige Ebene von Funktionen, die jedoch viele Arten von berührungsbasierten Interaktionen unterstützen, einschließlich der vertrauten Multi-Touch-Gesten wie Mehrfingerwisch, Rotieren, Kneifen und Zoomen.

## Von Schnittstellen zu Gesten

Eine Anwendung kann unterschiedliche Faktoren berücksichtigen, wenn sie die Semantiken einer Geste definiert. Beispielsweise die Entfernung, die ein Berührungspunkt von seiner Ausgangsposition bis zu seiner Position beim Ende der Berührung zurückgelegt hat. Ein weiterer potenzieller Faktor ist die Zeit; zum Beispiel die Zeit, die zwischen dem Beginn und dem Ende der Berührung verstrichen ist, oder das Zeitintervall zwischen zwei _aufeinanderfolgenden_ Taps, die einen Doppeltipp darstellen sollen. Die Richtung eines Wischens (zum Beispiel von links nach rechts, von rechts nach links usw.) ist ein weiterer zu berücksichtigender Faktor.

Die von einer Anwendung verwendete(n) Touchliste(n) hängt von der Semantik der _Gesten_ der Anwendung ab. Beispielsweise würde eine Anwendung, die einen einzelnen Touch (Tap) auf einem Element unterstützt, die [`targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches)-Liste im [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Event-Handler verwenden, um den Berührungspunkt auf anwendungsspezifische Weise zu verarbeiten. Unterstützt eine Anwendung einen Zwei-Finger-Wisch für zwei beliebige Berührungspunkte, verwendet sie die [`changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches)-Liste im [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Event-Handler, um festzustellen, ob sich zwei Berührungspunkte bewegt haben, und implementiert dann die Semantik dieser Geste auf anwendungsspezifische Weise.

Browser senden normalerweise _emulierte_ Maus- und Klick-Events, wenn nur ein einziger aktiver Berührungspunkt vorhanden ist. Multi-Touch-Interaktionen mit zwei oder mehr aktiven Berührungspunkten erzeugen normalerweise nur Touch-Events. Um zu verhindern, dass die emulierten Mausevents gesendet werden, verwenden Sie die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Methode in den Touch-Event-Handlern. Wenn Sie sowohl mit Maus als auch mit Berührungen interagieren möchten, verwenden Sie stattdessen [Pointer Events](/de/docs/Web/API/Pointer_events).

## Grundschritte

Dieser Abschnitt enthält eine grundlegende Verwendung der oben genannten Schnittstellen. Weitere Details finden Sie in der [Touch-Events-Übersicht](/de/docs/Web/API/Touch_events).

Registrieren Sie einen Event-Handler für jeden Touch-Event-Typ.

```js
// Register touch event handlers
someElement.addEventListener("touchstart", process_touchstart, false);
someElement.addEventListener("touchmove", process_touchmove, false);
someElement.addEventListener("touchcancel", process_touchcancel, false);
someElement.addEventListener("touchend", process_touchend, false);
```

Verarbeiten Sie ein Event in einem Event-Handler, indem Sie die Semantik der Geste der Anwendung umsetzen.

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
    for (let i = 0; i < ev.targetTouches.length; i++) {
      process_target(ev.targetTouches[i].target);
    }
  },
  false,
);
```

Verhindern Sie, dass der Browser _emulierte Mausevents_ verarbeitet.

```js
// touchmove handler
function process_touchmove(ev) {
  // Set call preventDefault()
  ev.preventDefault();
}
```

## Beste Praktiken

Hier sind einige _beste Praktiken_, die bei der Verwendung von Touch-Events zu beachten sind:

- Minimieren Sie die Menge an Arbeit, die in den Touch-Handlern durchgeführt wird.
- Fügen Sie die Berührungspunkthandler dem spezifischen Zielelement hinzu (anstatt dem gesamten Dokument oder Knoten weiter oben im Dokumentbaum).
- Fügen Sie [`touchmove`](/de/docs/Web/API/Element/touchmove_event), [`touchend`](/de/docs/Web/API/Element/touchend_event) und [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)-Event-Handler innerhalb des [`touchstart`](/de/docs/Web/API/Element/touchstart_event) hinzu.
- Das Zieltouch-Element oder der -Knoten sollte groß genug sein, um eine Fingerberührung aufzunehmen. Wenn der Zielbereich zu klein ist, könnte das Berühren dazu führen, dass andere Events für angrenzende Elemente ausgelöst werden.

## Implementierungs- und Bereitstellungsstatus

Die [Touch-Events-Browser-Kompatibilitätsdaten](/de/docs/Web/API/Touch_events#browser_compatibility) zeigen, dass die Unterstützung von Touch-Events unter mobilen Browsern relativ breit ist, während der Support für Desktop-Browser hinterherhinkt, obwohl zusätzliche Implementierungen in Arbeit sind.

Einige neue Funktionen bezüglich des [Touch-Bereichs](/de/docs/Web/API/Touch#touch_area) eines Berührungspunkts - der Kontaktbereich zwischen dem Benutzer und der Touch-Oberfläche - werden derzeit standardisiert. Zu den neuen Funktionen gehören der _X_- und _Y_-Radius der Ellipse, die den Kontaktbereich eines Berührungspunkts mit der Touch-Oberfläche am besten umschreiben. Auch der _Rotationswinkel_ des Berührungspunkts - die Anzahl an Drehgraden, die auf die beschriebene Ellipse angewendet wird, um sich mit dem Kontaktbereich auszurichten - sowie der auf einen Berührungspunkt ausgeübte Druck werden standardisiert.

## Was ist mit Pointer Events?

Die Einführung neuer Eingabemechanismen führt zu gesteigerter Komplexität einer Anwendung, um verschiedene Eingabeereignisse zu handhaben, wie zum Beispiel Tastenevents, Mausevents, Stift-/Stylusevents und Touch-Events. Um dieses Problem zu adressieren, definiert der [Pointer Events-Standard](https://www.w3.org/TR/pointerevents/) _Ereignisse und zugehörige Schnittstellen für die Handhabung hardware-agnostischer Zeigereingaben von Geräten, einschließlich Maus, Stift, Touchscreen, usw._. Das heißt, der abstrakte _Zeiger_ schafft ein einheitliches Eingabemodell, das einen Kontaktpunkt für einen Finger, Stift/ Stylus oder Maus darstellen kann. Siehe den [MDN-Artikel zu Pointer Events](/de/docs/Web/API/Pointer_events).

Das Zeigereignismodell kann die Eingabeverarbeitung einer Anwendung vereinfachen, da ein Zeiger die Eingabe von jedem Eingabegerät repräsentiert. Zusätzlich sind die Typen von Zeigereignissen den Typen von Mausevents sehr ähnlich (zum Beispiel `pointerdown` und `pointerup`), sodass der Code zur Handhabung von Zeigereignissen dem zur Maussteuerung sehr ähnlich ist.

Der Implementierungsstatus von Zeigereignissen in Browsern ist [relativ hoch](https://caniuse.com/#search=pointer), wobei Chrome, Firefox, IE11 und Edge vollständige Implementierungen haben.

## Beispiele und Demos

Die folgenden Dokumente beschreiben, wie man Touch-Events verwendet und enthalten Beispielcode:

- [Touch-Events-Übersicht](/de/docs/Web/API/Touch_events)
- [Individuelle Gesten implementieren](https://web.dev/articles/add-touch-to-your-site)
- [Touchscreen-Unterstützung zu Ihrer Website hinzufügen (Der einfache Weg)](https://www.codicode.com/art/easy_way_to_add_touch_support_to_your_website.aspx)

Touch-Event-Demonstrationen:

- [Malprogramm (von Rick Byers)](https://rbyers.github.io/paint.html)
- [Touch-/Zeiger-Tests und Demos (von Patrick H. Lauke)](https://patrickhlauke.github.io/touch/)

## Gemeinschaft

- [Touch Events Community Group](https://github.com/w3c/touch-events)
- [Mailingliste](https://lists.w3.org/Archives/Public/public-touchevents/)
- [W3C #touchevents IRC-Kanal](irc://irc.w3.org:6667/)

## Verwandte Themen und Ressourcen

- [Pointer Events Standard](https://www.w3.org/TR/pointerevents/)
