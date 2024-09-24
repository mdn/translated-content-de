---
title: Verwendung von Touch Events
slug: Web/API/Touch_events/Using_Touch_Events
l10n:
  sourceCommit: a5262782ccd7d9ea726d79444e5b40cdad06a826
---

{{DefaultAPISidebar("Touch Events")}}

Heutzutage sind die meisten Webinhalte für Tastatur- und Mauseingaben konzipiert. Jedoch sind Geräte mit Touchscreens (insbesondere tragbare Geräte) weit verbreitet und Webanwendungen können entweder direkte, auf Berührung basierende Eingaben durch die Verwendung von [Touch-Ereignissen](/de/docs/Web/API/TouchEvent) verarbeiten, oder die Anwendung kann _interpretierte Mauseingaben_ für die Anwendungenutzung verwenden. Ein Nachteil der Verwendung von Mauseingaben besteht darin, dass sie keine gleichzeitige Benutzereingabe unterstützen, während Touch-Ereignisse mehrere gleichzeitige Eingaben (möglicherweise an verschiedenen Stellen auf der Touch-Oberfläche) unterstützen und somit die Benutzererfahrung verbessern.

Die Touch-Events-Schnittstellen unterstützen anwendungsspezifische Einzel- und Mehrfachberührungsinteraktionen wie eine Zwei-Finger-Geste. Eine Mehrfachberührungsinteraktion beginnt, wenn ein Finger (oder ein Stift) die Kontaktfläche berührt. Andere Finger können anschließend die Oberfläche berühren und optional über die Touch-Oberfläche bewegt werden. Die Interaktion endet, wenn die Finger von der Oberfläche entfernt werden. Während dieser Interaktion erhält eine Anwendung Touch-Ereignisse während der Start-, Bewegungs- und Endphasen. Die Anwendung kann ihre eigenen Semantiken auf die Berührungseingaben anwenden.

## Schnittstellen

Touch-Ereignisse bestehen aus drei Schnittstellen ({{domxref("Touch")}}, {{domxref("TouchEvent")}} und {{domxref("TouchList")}}) und den folgenden Ereignistypen:

- {{domxref("Element/touchstart_event", "touchstart")}} - wird ausgelöst, wenn ein Berührungspunkt auf die Berührungsoberfläche gelegt wird.
- {{domxref("Element/touchmove_event", "touchmove")}} - wird ausgelöst, wenn ein Berührungspunkt entlang der Berührungsoberfläche bewegt wird.
- {{domxref("Element/touchend_event", "touchend")}} - wird ausgelöst, wenn ein Berührungspunkt von der Berührungsoberfläche entfernt wird.
- {{domxref("Element/touchcancel_event", "touchcancel")}} - wird ausgelöst, wenn ein Berührungspunkt auf eine implementierungsspezifische Weise gestört wurde (zum Beispiel, wenn zu viele Berührungspunkte erstellt werden).

Die {{domxref("Touch")}}-Schnittstelle repräsentiert einen einzelnen Kontaktpunkt auf einem berührungsempfindlichen Gerät. Der Kontaktpunkt wird typischerweise als _Berührungspunkt_ oder einfach als _Berührung_ bezeichnet. Eine Berührung wird normalerweise durch einen Finger oder Stift auf einem Touchscreen, einem Stift oder Trackpad erzeugt. Die [Eigenschaften](/de/docs/Web/API/Touch#instance_properties) eines Berührungspunktes umfassen eine eindeutige Kennung, das Zielelement des Berührungspunkts sowie die _X_- und _Y_-Koordinaten der Position des Berührungspunkts relativ zum Ansichtsfenster, zur Seite und zum Bildschirm.

Die {{domxref("TouchList")}}-Schnittstelle repräsentiert eine _Liste_ von Kontaktpunkten mit einer Berührungsoberfläche, einen Berührungspunkt pro Kontakt. Wenn der Benutzer also die Berührungsoberfläche mit einem Finger aktiviert, enthält die Liste einen Eintrag, und wenn der Benutzer die Oberfläche mit drei Fingern berührt, beträgt die Länge der Liste drei.

Die {{domxref("TouchEvent")}}-Schnittstelle repräsentiert ein Ereignis, das gesendet wird, wenn sich der Zustand der Kontakte mit einer berührungsempfindlichen Oberfläche ändert. Die Zustandsänderungen sind das Starten des Kontakts mit einer Berührungsoberfläche, das Bewegen eines Berührungspunkts bei gleichzeitigem Halten des Kontakts mit der Oberfläche, das Loslassen eines Berührungspunkts und das Abbrechen eines Touch-Ereignisses. Zu den Attributen dieser Schnittstelle gehören der Zustand mehrerer _Modifikatortasten_ (zum Beispiel die <kbd>Umschalttaste</kbd>) und die folgenden Touch-Listen:

- {{domxref("TouchEvent.touches","touches")}} - eine Liste aller aktuell auf dem Bildschirm befindlichen Berührungspunkte.
- {{domxref("TouchEvent.targetTouches","targetTouches")}} - eine Liste der Berührungspunkte auf dem _Ziel_-DOM-Element.
- {{domxref("TouchEvent.changedTouches","changedTouches")}} - eine Liste der Berührungspunkte, deren Einträge vom assoziierten Ereignistyp abhängen:

  - Für das {{domxref("Element/touchstart_event", "touchstart")}} Ereignis ist es eine Liste der Berührungspunkte, die mit dem aktuellen Ereignis aktiv wurden.
  - Für das {{domxref("Element/touchmove_event", "touchmove")}} Ereignis ist es eine Liste der Berührungspunkte, die sich seit dem letzten Ereignis geändert haben.
  - Für das {{domxref("Element/touchend_event", "touchend")}} Ereignis ist es eine Liste der Berührungspunkte, die von der Oberfläche entfernt wurden (d. h. die Menge der Berührungspunkte, die Finger entsprechen, die die Oberfläche nicht mehr berühren).

Zusammen definieren diese Schnittstellen ein relativ niedrigstufiges Set an Funktionen, die jedoch viele Arten von berührungsbasierten Interaktionen unterstützen, einschließlich der bekannten Mehrfachberührungsgesten wie Mehrfinger-Wischen, Rotation, Kneifen und Zoomen.

## Von Schnittstellen zu Gesten

Eine Anwendung kann verschiedene Faktoren berücksichtigen, wenn die Semantik einer Geste definiert wird. Zum Beispiel die Entfernung, die ein Berührungspunkt von seiner Startposition bis zu seiner Position beim Beenden der Berührung zurückgelegt hat. Ein weiterer potenzieller Faktor ist die Zeit; zum Beispiel die verstrichene Zeit zwischen dem Start und dem Ende der Berührung oder der Zeitabstand zwischen zwei _aufeinanderfolgenden_ Tippen, die eine Doppeltippen-Geste erstellen sollen. Die Richtung eines Wischens (zum Beispiel von links nach rechts, von rechts nach links etc.) ist ein weiterer zu berücksichtigender Faktor.

Die von einer Anwendung verwendete(n) Berührungsliste(n) hängt/hängen von der Semantik der _Gesten_ der Anwendung ab. Zum Beispiel, wenn eine Anwendung eine Einzelberührung (Tippen) auf einem Element unterstützt, würde sie die {{domxref("TouchEvent.targetTouches","targetTouches")}} Liste im {{domxref("Element/touchstart_event", "touchstart")}} Ereignishandler verwenden, um den Berührungspunkt auf anwendungsspezifische Weise zu verarbeiten. Wenn eine Anwendung ein Zwei-Finger-Wischen für zwei beliebige Berührungspunkte unterstützt, wird sie die {{domxref("TouchEvent.changedTouches","changedTouches")}} Liste im {{domxref("Element/touchmove_event", "touchmove")}} Ereignishandler verwenden, um zu bestimmen, ob sich zwei Berührungspunkte bewegt haben, und dann die Semantik dieser Geste auf anwendungsspezifische Weise umsetzen.

Browser senden normalerweise _emulierte_ Maus- und Klick-Ereignisse, wenn nur ein einziger aktiver Berührungspunkt vorhanden ist. Mehrfachberührungsinteraktionen, die zwei oder mehr aktive Berührungspunkte umfassen, erzeugen in der Regel nur Touch-Ereignisse. Um die emulierten Mausereignisse zu verhindern, verwenden Sie die {{domxref("Event.preventDefault()","preventDefault()")}} Methode in den Touch-Ereignishandlern. Wenn Sie sowohl mit Maus als auch mit Berührungen interagieren möchten, verwenden Sie {{domxref("Pointer events", "", "", "nocode")}}.

## Grundlegende Schritte

Dieser Abschnitt enthält eine grundlegende Verwendung der oben beschriebenen Schnittstellen. Für ein detaillierteres Beispiel siehe die [Touch-Events-Übersicht](/de/docs/Web/API/Touch_events).

Registrieren Sie einen Ereignishandler für jeden Touch-Ereignistyp.

```js
// Register touch event handlers
someElement.addEventListener("touchstart", process_touchstart, false);
someElement.addEventListener("touchmove", process_touchmove, false);
someElement.addEventListener("touchcancel", process_touchcancel, false);
someElement.addEventListener("touchend", process_touchend, false);
```

Verarbeiten Sie ein Ereignis in einem Ereignishandler, indem Sie die Gestensemantik der Anwendung implementieren.

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

Zugriff auf die Attribute eines Berührungspunktes.

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

Verhindern, dass der Browser _emulierte Mausereignisse_ verarbeitet.

```js
// touchmove handler
function process_touchmove(ev) {
  // Set call preventDefault()
  ev.preventDefault();
}
```

## Beste Praktiken

Hier sind einige _beste Praktiken_, die bei der Verwendung von Touch-Ereignissen zu beachten sind:

- Minimieren Sie die Menge an Arbeit, die in den Berührungshandlern ausgeführt wird.
- Fügen Sie die Berührungspunkthandler dem spezifischen Zielelement hinzu (anstatt dem gesamten Dokument oder Knoten weiter oben im Dokumentbaum).
- Fügen Sie die {{domxref("Element/touchmove_event", "touchmove")}}, {{domxref("Element/touchend_event", "touchend")}} und {{domxref("Element/touchcancel_event", "touchcancel")}} Ereignishandler innerhalb des {{domxref("Element/touchstart_event", "touchstart")}} hinzu.
- Das Zielberührungselement oder der Zielknoten sollte groß genug sein, um eine Fingerberührung aufzunehmen. Wenn der Zielbereich zu klein ist, könnte das Berühren dazu führen, dass andere Ereignisse für benachbarte Elemente ausgelöst werden.

## Implementierungs- und Bereitstellungsstatus

Die [Browser-Kompatibilitätsdaten für Touch-Events](/de/docs/Web/API/Touch_events#browser_compatibility) zeigen, dass die Unterstützung von Touch-Ereignissen unter mobilen Browsern relativ breit ist, während die Unterstützung bei Desktop-Browsern hinterherhinkt, obwohl weitere Implementierungen in Arbeit sind.

Einige neue Funktionen bezüglich des [Berührungsbereichs](/de/docs/Web/API/Touch#touch_area) eines Berührungspunkts - der Kontaktbereich zwischen dem Benutzer und der Berührungsoberfläche - befinden sich im Prozess der Standardisierung. Zu den neuen Funktionen gehören der _X_- und _Y_-Radius der Ellipse, die den Berührungspunktkontaktbereich mit der Berührungsoberfläche am besten umschreibt. Der _Drehwinkel_ des Berührungspunkts - die Anzahl der Rotationsgrade, die auf die beschriebene Ellipse angewendet werden sollen, um sie mit dem Kontaktbereich in Einklang zu bringen - wird ebenfalls standardisiert, ebenso wie der auf einen Berührungspunkt ausgeübte Druck.

## Was ist mit Pointer Events?

Die Einführung neuer Eingabemechanismen führt zu einer erhöhten Komplexität von Anwendungen, um verschiedene Eingabereignisse zu verarbeiten, wie Tastenevents, Mausklicken, Stifte/Stift-Events und Touch-Events. Um dieses Problem anzugehen, definiert der [Pointer Events Standard](https://www.w3.org/TR/pointerevents/) _Ereignisse und zugehörige Schnittstellen für die Verarbeitung von hardwareunabhängigen Zeigereingaben von Geräten, einschließlich Maus, Stift, Touchscreen usw._. Das heißt, der abstrakte _Zeiger_ schafft ein einheitliches Eingabemodell, das einen Kontaktpunkt für Finger, Stift oder Maus darstellen kann. Siehe den [MDN-Artikel zu Pointer Events](/de/docs/Web/API/Pointer_events).

Das Zeigerereignismodell kann die Eingabeverarbeitung einer Anwendung vereinfachen, da ein Zeiger die Eingabe eines beliebigen Eingabegeräts darstellt. Außerdem sind die Zeigerereignistypen denen der Mausereignisse sehr ähnlich (zum Beispiel `pointerdown` und `pointerup`), sodass der Code zur Verarbeitung von Zeigerereignissen dem Code zur Mausverarbeitung sehr nahe kommt.

Der Implementierungsstatus von Zeigerereignissen in Browsern ist [relativ hoch](https://caniuse.com/#search=pointer), wobei Chrome, Firefox, IE11 und Edge vollständige Implementierungen aufweisen.

## Beispiele und Demos

Die folgenden Dokumente beschreiben, wie Touch-Ereignisse verwendet werden und beinhalten Beispielcode:

- [Touch-Events-Übersicht](/de/docs/Web/API/Touch_events)
- [Benutzerdefinierte Gesten implementieren](https://web.dev/articles/add-touch-to-your-site)
- [Fügen Sie Ihrer Website Berührungsunterstützung hinzu (Der einfache Weg)](https://www.codicode.com/art/easy_way_to_add_touch_support_to_your_website.aspx)

Touch-Event-Demonstrationen:

- [Paint-Programm (von Rick Byers)](https://rbyers.github.io/paint.html)
- [Touch/Pointer-Tests und Demos (von Patrick H. Lauke)](https://patrickhlauke.github.io/touch/)

## Community

- [Touch Events Community Group](https://github.com/w3c/touch-events)
- [Mailingliste](https://lists.w3.org/Archives/Public/public-touchevents/)
- [W3C #touchevents IRC-Kanal](irc://irc.w3.org:6667/)

## Verwandte Themen und Ressourcen

- [Pointer Events Standard](https://www.w3.org/TR/pointerevents/)
