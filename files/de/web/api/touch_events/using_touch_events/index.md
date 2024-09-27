---
title: Verwendung von Touch Events
slug: Web/API/Touch_events/Using_Touch_Events
l10n:
  sourceCommit: a5262782ccd7d9ea726d79444e5b40cdad06a826
---

{{DefaultAPISidebar("Touch Events")}}

Heute wird der größte Teil der Webinhalte für Tastatur- und Maus-Eingaben entworfen. Allerdings sind Geräte mit Touchscreens (insbesondere tragbare Geräte) mittlerweile weit verbreitet, und Webanwendungen können entweder direkt touch-basierte Eingaben verarbeiten, indem sie [Touch Events](/de/docs/Web/API/TouchEvent) verwenden, oder die Anwendung kann _interpretierte Mouse Events_ für die Eingabe der Anwendung verwenden. Ein Nachteil der Verwendung von Mouse Events ist, dass sie keine gleichzeitigen Benutzereingaben unterstützen, während Touch Events mehrere gleichzeitige Eingaben unterstützen (möglicherweise an verschiedenen Stellen auf der Touch-Oberfläche), was die Benutzererfahrung verbessert.

Die Touch-Events-Schnittstellen unterstützen anwendungsspezifische Single- und Multi-Touch-Interaktionen, wie z. B. eine Zwei-Finger-Geste. Eine Multi-Touch-Interaktion beginnt, wenn ein Finger (oder ein Stift) die Kontaktfläche erstmals berührt. Andere Finger können anschließend die Oberfläche berühren und sich optional über die Touch-Oberfläche bewegen. Die Interaktion endet, wenn die Finger von der Oberfläche entfernt werden. Während dieser Interaktion erhält eine Anwendung Touch Events während der Start-, Bewegungs- und Endphasen. Die Anwendung kann eigene Semantiken auf die Touch-Eingaben anwenden.

## Schnittstellen

Touch Events bestehen aus drei Schnittstellen ([`Touch`](/de/docs/Web/API/Touch), [`TouchEvent`](/de/docs/Web/API/TouchEvent) und [`TouchList`](/de/docs/Web/API/TouchList)) und den folgenden Event-Typen:

- [`touchstart`](/de/docs/Web/API/Element/touchstart_event) - wird ausgelöst, wenn ein Berührungspunkt auf der Touch-Oberfläche platziert wird.
- [`touchmove`](/de/docs/Web/API/Element/touchmove_event) - wird ausgelöst, wenn ein Berührungspunkt entlang der Touch-Oberfläche bewegt wird.
- [`touchend`](/de/docs/Web/API/Element/touchend_event) - wird ausgelöst, wenn ein Berührungspunkt von der Touch-Oberfläche entfernt wird.
- [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event) - wird ausgelöst, wenn ein Berührungspunkt auf eine implementationsspezifische Weise unterbrochen wurde (zum Beispiel, wenn zu viele Berührungspunkte erstellt werden).

Die [`Touch`](/de/docs/Web/API/Touch)-Schnittstelle repräsentiert einen einzelnen Berührungspunkt auf einem berührungsempfindlichen Gerät. Der Berührungspunkt wird typischerweise als _Touchpunkt_ oder einfach _Touch_ bezeichnet. Ein Touch wird in der Regel von einem Finger oder Stift auf einem Touchscreen, Stift oder Trackpad erzeugt. Die [Eigenschaften](/de/docs/Web/API/Touch#instance_properties) eines Berührungspunkts umfassen eine eindeutige Kennung, das Zielelement des Berührungspunkts sowie die _X_- und _Y_-Koordinaten der Position des Berührungspunkts relativ zum Viewport, zur Seite und zum Bildschirm.

Die [`TouchList`](/de/docs/Web/API/TouchList)-Schnittstelle repräsentiert eine _Liste_ von Berührungspunkten mit einer Touch-Oberfläche, einen Berührungspunkt pro Kontakt. Wenn der Nutzer die Touch-Oberfläche mit einem Finger aktiviert, enthält die Liste somit einen Eintrag, und wenn der Nutzer die Oberfläche mit drei Fingern berührt, beträgt die Länge der Liste drei.

Die [`TouchEvent`](/de/docs/Web/API/TouchEvent)-Schnittstelle repräsentiert ein Event, das gesendet wird, wenn sich der Zustand der Kontakte mit einer berührungsempfindlichen Oberfläche ändert. Die Zustandsänderungen sind das Aufnehmen des Kontakts mit einer Touch-Oberfläche, das Bewegen eines Berührungspunkts bei gleichzeitiger Aufrechterhaltung des Kontakts mit der Oberfläche, das Loslassen eines Berührungspunkts und das Abbrechen eines Touch-Events. Die Attribute dieser Schnittstelle umfassen den Zustand mehrerer _Modifikator-Tasten_ (zum Beispiel die <kbd>Shift</kbd>-Taste) und die folgenden Touch-Listen:

- [`touches`](/de/docs/Web/API/TouchEvent/touches) - eine Liste aller aktuell auf dem Bildschirm befindlichen Berührungspunkte.
- [`targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches) - eine Liste der Berührungspunkte auf dem _Ziel_-DOM-Element.
- [`changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches) - eine Liste der Berührungspunkte, deren Einträge vom zugehörigen Event-Typ abhängen:

  - Für das [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Event ist es eine Liste der Berührungspunkte, die mit dem aktuellen Event aktiv geworden sind.
  - Für das [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Event ist es eine Liste der Berührungspunkte, die sich seit dem letzten Event geändert haben.
  - Für das [`touchend`](/de/docs/Web/API/Element/touchend_event)-Event ist es eine Liste der Berührungspunkte, die von der Oberfläche entfernt wurden (d. h. die Menge der Berührungspunkte, die Fingern entsprechen, die die Oberfläche nicht mehr berühren).

Zusammen definieren diese Schnittstellen eine relativ niedrigstufige Menge von Funktionen, dennoch unterstützen sie viele Arten von Touch-basierten Interaktionen, einschließlich der vertrauten Multi-Touch-Gesten wie Multi-Finger-Wischen, Drehen, Kneifen und Zoomen.

## Von Schnittstellen zu Gesten

Eine Anwendung kann verschiedene Faktoren berücksichtigen, wenn sie die Semantik einer Geste definiert. Zum Beispiel die Distanz, die ein Berührungspunkt von seinem Ausgangspunkt bis zu seinem Standort beim Ende der Berührung zurückgelegt hat. Ein weiterer möglicher Faktor ist die Zeit; beispielsweise die verstrichene Zeit zwischen dem Start und dem Ende der Berührung oder der Zeitabstand zwischen zwei _aufeinanderfolgenden_ Taps, die eine Doppeltipp-Geste erzeugen sollen. Die Richtung eines Wischens (z. B. von links nach rechts, von rechts nach links usw.) ist ein weiterer zu berücksichtigender Faktor.

Die von einer Anwendung verwendeten Touch-Listen hängen von der Semantik der _Gesten_ der Anwendung ab. Wenn eine Anwendung z. B. einen einzigen Touch (Tap) auf einem Element unterstützt, würde sie die Liste [`targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches) im [`touchstart`](/de/docs/Web/API/Element/touchstart_event)-Event-Handler verwenden, um den Berührungspunkt auf eine anwendungsspezifische Weise zu verarbeiten. Wenn eine Anwendung Wischgesten mit zwei Fingern für beliebige zwei Berührungspunkte unterstützt, verwendet sie die Liste [`changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches) im [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-Event-Handler, um festzustellen, ob zwei Berührungspunkte bewegt wurden, und implementiert dann die Semantik dieser Geste auf eine anwendungsspezifische Weise.

Browser lösen in der Regel _emulierte_ Maus- und Klick-Events aus, wenn es nur einen aktiven Berührungspunkt gibt. Multi-Touch-Interaktionen, die zwei oder mehr aktive Berührungspunkte umfassen, generieren in der Regel nur Touch-Events. Um zu verhindern, dass die emulierten Maus-Events gesendet werden, verwenden Sie die Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) in den Touch-Event-Handlern. Wenn Sie sowohl mit Maus als auch mit Touch interagieren möchten, verwenden Sie stattdessen [Pointer Events](/de/docs/Web/API/Pointer_events).

## Grundlegende Schritte

Dieser Abschnitt enthält eine grundlegende Verwendung der oben genannten Schnittstellen. Siehe die [Touch-Events-Übersicht](/de/docs/Web/API/Touch_events) für ein detaillierteres Beispiel.

Registrieren Sie einen Event-Handler für jeden Touch-Event-Typ.

```js
// Register touch event handlers
someElement.addEventListener("touchstart", process_touchstart, false);
someElement.addEventListener("touchmove", process_touchmove, false);
someElement.addEventListener("touchcancel", process_touchcancel, false);
someElement.addEventListener("touchend", process_touchend, false);
```

Verarbeiten Sie ein Event in einem Event-Handler, indem Sie die Gestensemantik der Anwendung umsetzen.

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

Verhindern Sie, dass der Browser _emulierte Maus-Events_ verarbeitet.

```js
// touchmove handler
function process_touchmove(ev) {
  // Set call preventDefault()
  ev.preventDefault();
}
```

## Beste Praktiken

Hier sind einige _beste Praktiken_, die bei der Verwendung von Touch-Events zu berücksichtigen sind:

- Minimieren Sie die Menge an Arbeit, die in den Touch-Handlern durchgeführt wird.
- Fügen Sie die Touchpunkt-Handler dem spezifischen Zielelement hinzu (anstatt dem gesamten Dokument oder höheren Knoten im Dokumentbaum).
- Fügen Sie [`touchmove`](/de/docs/Web/API/Element/touchmove_event)-, [`touchend`](/de/docs/Web/API/Element/touchend_event)- und [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)-Event-Handler innerhalb von [`touchstart`](/de/docs/Web/API/Element/touchstart_event) hinzu.
- Das Ziel-Touchelement oder der Knoten sollte groß genug sein, um eine Berührung mit dem Finger aufzunehmen. Wenn der Zielbereich zu klein ist, könnte das Berühren dazu führen, dass andere Ereignisse für angrenzende Elemente ausgelöst werden.

## Implementierungs- und Bereitstellungsstatus

Die [Browser-Kompatibilitätsdaten für Touch Events](/de/docs/Web/API/Touch_events#browser_compatibility) zeigen, dass die Unterstützung von Touch Events unter mobilen Browsern relativ breit ist, während die Unterstützung auf Desktop-Browsern hinterherhinkt, obwohl zusätzliche Implementierungen in Arbeit sind.

Einige neue Funktionen bezüglich des [Berührungsbereichs](/de/docs/Web/API/Touch#touch_area) eines Berührungspunkts - des Kontaktbereichs zwischen dem Benutzer und der Touch-Oberfläche - werden standardisiert. Die neuen Funktionen umfassen den _X_- und _Y_-Radius der Ellipse, die den Kontaktbereich eines Berührungspunkts auf der Touch-Oberfläche am besten beschreibt. Der _Rotationswinkel_ des Berührungspunkts - die Anzahl der Drehgrade, die auf die beschriebene Ellipse anzuwenden sind, um sich mit dem Kontaktbereich auszurichten - wird ebenfalls standardisiert, ebenso wie der auf einen Berührungspunkt ausgeübte Druck.

## Was ist mit Pointer Events?

Die Einführung neuer Eingabemechanismen führt zu einer erhöhten Komplexität der Anwendung, um verschiedene Eingabeereignisse zu handhaben, wie Tastenevents, Mausklicks, Stift-/Stylus-Ereignisse und Touch-Events. Um dieses Problem zu lösen, _definiert der_ [Pointer Events Standard](https://www.w3.org/TR/pointerevents/)_ Events und verwandte Schnittstellen zur Behandlung von hardwareunabhängigen Zeigereingaben von Geräten wie einer Maus, einem Stift, einem Touchscreen usw._. Das heißt, der abstrakte _Zeiger_ schafft ein einheitliches Eingabemodell, das einen Berührungspunkt für einen Finger, Stift/ Stylus oder eine Maus darstellen kann. Siehe den [MDN-Artikel zu Pointer Events](/de/docs/Web/API/Pointer_events).

Das Zeigerevent-Modell kann die Eingabeverarbeitung einer Anwendung vereinfachen, da ein Zeiger die Eingabe von jedem Eingabegerät repräsentiert. Außerdem sind die Zeigerevent-Typen den Maus-Event-Typen sehr ähnlich (z.B. `pointerdown` und `pointerup`), so dass der Code zur Behandlung von Zeigerevents dem Code zur Mausbehandlung sehr ähnlich ist.

Der Implementierungsstatus von Zeigerevents in Browsern ist [relativ hoch](https://caniuse.com/#search=pointer), wobei Chrome, Firefox, IE11 und Edge vollständige Implementierungen haben.

## Beispiele und Demos

Die folgenden Dokumente beschreiben die Verwendung von Touch Events und enthalten Beispielcode:

- [Touch-Events-Übersicht](/de/docs/Web/API/Touch_events)
- [Benutzerdefinierte Gesten implementieren](https://web.dev/articles/add-touch-to-your-site)
- [Touchscreen-Unterstützung zu Ihrer Website hinzufügen (Der einfache Weg)](https://www.codicode.com/art/easy_way_to_add_touch_support_to_your_website.aspx)

Demonstrationen zu Touch Events:

- [Malprogramm (von Rick Byers)](https://rbyers.github.io/paint.html)
- [Test- und Demo-Seite zu Touch/Zeiger (von Patrick H. Lauke)](https://patrickhlauke.github.io/touch/)

## Community

- [Touch Events Community Group](https://github.com/w3c/touch-events)
- [Mail-Liste](https://lists.w3.org/Archives/Public/public-touchevents/)
- [W3C #touchevents IRC-Kanal](irc://irc.w3.org:6667/)

## Verwandte Themen und Ressourcen

- [Pointer Events Standard](https://www.w3.org/TR/pointerevents/)
