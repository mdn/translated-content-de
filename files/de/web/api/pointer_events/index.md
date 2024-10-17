---
title: Pointer events
slug: Web/API/Pointer_events
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{DefaultAPISidebar("Pointer Events")}}

Ein Großteil der heutigen Webinhalte geht davon aus, dass das Zeigegerät des Nutzers eine Maus ist. Da jedoch viele Geräte andere Arten von Zeigegeräten unterstützen, wie z. B. Stifte/Stylus und Touch-Oberflächen, sind Erweiterungen der bestehenden Zeigegerätemodellierung notwendig. _[Zeigerereignisse](#zeigerereignis)_ adressieren diesen Bedarf.

Zeigerereignisse sind DOM-Ereignisse, die für ein Zeigegerät ausgelöst werden. Sie sind darauf ausgelegt, ein einheitliches DOM-Ereignismodell zu schaffen, um Zeigegeräte wie Maus, Stift/ Stylus oder Touch (z. B. ein oder mehrere Finger) zu handhaben.

Der _[Zeiger](#zeiger)_ ist ein hardwareunabhängiges Gerät, das auf eine bestimmte Reihe von Bildschirmkoordinaten zielen kann. Ein einheitliches Ereignismodell für Zeiger kann die Erstellung von Websites und Anwendungen vereinfachen und eine gute Benutzererfahrung bieten, unabhängig von der Hardware des Benutzers. Für Szenarien, in denen gerätespezifische Handhabung erwünscht ist, definiert Zeigerereignisse eine [`pointerType`](/de/docs/Web/API/PointerEvent/pointerType)-Eigenschaft, um den Gerätetyp zu prüfen, der das Ereignis verursacht hat.

Die Ereignisse, die zur Handhabung von generischen Zeigereingaben benötigt werden, sind analog zu {{domxref("MouseEvent","Mausereignissen","","1")}} (`mousedown`/`pointerdown`, `mousemove`/`pointermove` usw.). Infolgedessen sind die Typen der Zeigerereignisse absichtlich den Typen der Mausereignisse ähnlich.

Zusätzlich enthält ein Zeigerereignis die üblichen Eigenschaften, die in Mausereignissen vorhanden sind (Client-Koordinaten, Zielelement, Schaltzustände usw.), sowie neue Eigenschaften für andere Formen der Eingabe: Druck, Kontaktgeometrie, Neigung usw. Tatsächlich erbt das [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interface alle Eigenschaften des [`MouseEvent`](/de/docs/Web/API/MouseEvent) und erleichtert so die Migration von Inhalten von Mausereignissen zu Zeigerereignissen.

## Terminologie

### aktiver Tastenstatus

Der Zustand, wenn ein _[Zeiger](#zeiger)_ einen ungleich null-Wert für die `buttons`-Eigenschaft hat. Zum Beispiel im Fall eines Stifts, wenn der Stift physischen Kontakt mit dem Digitalisierer hat, oder wenn mindestens eine Taste gedrückt ist, während der Stift schwebt.

### aktiver Zeiger

Jedes _[Zeiger](#zeiger)_ Eingabegerät, das Ereignisse erzeugen kann. Ein Zeiger wird als aktiv angesehen, wenn er weiterhin zusätzliche Ereignisse erzeugen kann. Zum Beispiel wird ein Stift, der sich im "down"-Status befindet, als aktiv angesehen, da er zusätzliche Ereignisse erzeugen kann, wenn der Stift angehoben oder bewegt wird.

### Digitalisierer

Ein Erfassungsgerät mit einer Oberfläche, das Kontakt erkennen kann. Am häufigsten ist das Erfassungsgerät ein berührungsempfindlicher Bildschirm, der Eingaben von einem Eingabegerät wie einem Stift/Stylus oder Finger erkennen kann. Einige Erfassungsgeräte können die nahe Nähe des Eingabegeräts erkennen, und der Zustand wird als Schweben dem Maus folgen ausgedrückt.

### Treffertest

Der Prozess, den der Browser verwendet, um ein Zielelement für ein Zeigerereignis zu bestimmen. Typischerweise wird dies bestimmt, indem die Position des Zeigers und auch das visuelle Layout der Elemente in einem Dokument auf Bildschirmmedien betrachtet werden.

### Zeiger

Eine hardwareunabhängige Darstellung von Eingabegeräten, die auf eine bestimmte Koordinate (oder eine Gruppe von Koordinaten) auf einem Bildschirm zielen kann. Beispiele für _Zeiger_ Eingabegeräte sind Maus, Stift/Stylus und Berührungskontakte.

### Zeigerfang

Der Zeigerfang ermöglicht es, dass die Ereignisse für einen Zeiger auf ein bestimmtes Element umgeleitet werden, anstatt auf das normale Ergebnis des Treffertests der Position des Zeigers. Siehe [Zeiger erfassen](#erfassen_des_zeigers) für ein Beispiel.

> **Hinweis:** _Zeigerfang_ unterscheidet sich von [_Pointer Lock_](/de/docs/Web/API/Pointer_Lock_API), welches physisch verhindert, dass der Zeiger einen Bereich verlässt.

### Zeigerereignis

Ein für einen _[Zeiger](#zeiger)_ ausgelöstes DOM [`Ereignis`](/de/docs/Web/API/PointerEvent).

## Schnittstellen

Die primäre Schnittstelle ist die [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle, die über einen [`Konstruktor`](/de/docs/Web/API/PointerEvent/PointerEvent) sowie mehrere Ereignistypen und zugehörige globale Ereignishandler verfügt.

Der Standard enthält auch einige Erweiterungen der [`Element`](/de/docs/Web/API/Element)- und [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstellen.

Die folgenden Unterabschnitte enthalten kurze Beschreibungen jeder Schnittstelle und Eigenschaft.

### PointerEvent-Schnittstelle

Die [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle erweitert die [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Schnittstelle und verfügt über die folgenden Eigenschaften.

- [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}}
  - : Stellt den Winkel zwischen einer Transducerachse (einem Zeiger oder Stylus) und der XY-Ebene eines Gerätdisplays dar.
- [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}}
  - : Stellt den Winkel zwischen der YZ-Ebene und der Ebene dar, die sowohl die Transducerachse (einem Zeiger oder Stylus) als auch die Y-Achse enthält.
- [`PointerEvent.persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine eindeutige Kennung für das Zeigegerät, das das `PointerEvent` generiert.
- [`pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- [`width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Größe auf der X-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Größe auf der Y-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck der Zeigereingabe im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck darstellen, den die Hardware erkennen kann.
- [`tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck der Zeigereingabe (auch bekannt als Zylinderdruck oder Zylinderstress) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position der Steuerung darstellt.
- [`tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Plane-Winkel (in Grad, im Bereich von `-90` bis `90`) zwischen der YZ-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. Stiftstylus) als auch die Y-Achse enthält.
- [`tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Plane-Winkel (in Grad, im Bereich von `-90` bis `90`) zwischen der XZ-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. Stiftstylus) als auch die X-Achse enthält.
- [`twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung im Uhrzeigersinn des Zeigers (z.B. Stiftstylus) um seine Hauptachse in Grad mit einem Wert im Bereich von `0` bis `359`.
- [`pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Berührung usw.).
- [`isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den Primärzeiger dieses Zeigertyps darstellt.

### Ereignistypen und globale Ereignishandler

Zeigerereignisse haben zehn Ereignistypen, von denen sieben ähnliche Semantik wie ihre Mausereignis-Pendants haben (`down`, `up`, `move`, `over`, `out`, `enter`, und `leave`).

Unten ist eine kurze Beschreibung jedes Ereignistyps.

| Ereignis                                                                                      | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`pointerover`](/de/docs/Web/API/Element/pointerover_event)                                   | Wird ausgelöst, wenn ein Zeiger in die [Treffertest](#treffertest)-Grenzen eines Elements bewegt wird.                                                                                                                                                                                                                                                                                                                                                     |
| [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)                                 | Wird ausgelöst, wenn ein Zeiger in die [Treffertest](#treffertest)-Grenzen eines Elements oder eines seiner Nachkommen bewegt wird, auch infolge eines `pointerdown`-Ereignisses von einem Gerät, das keine Schwebunterstützung bietet (siehe `pointerdown`).                                                                                                                                                                                              |
| [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)                                   | Wird ausgelöst, wenn ein Zeiger in den _aktiven Tastenstatus_ geht.                                                                                                                                                                                                                                                                                                                                                                                        |
| [`pointermove`](/de/docs/Web/API/Element/pointermove_event)                                   | Wird ausgelöst, wenn ein Zeiger die Koordinaten ändert. Dieses Ereignis wird auch verwendet, wenn die Änderung des Zeigerzustands nicht durch andere Ereignisse gemeldet werden kann.                                                                                                                                                                                                                                                                      |
| [`pointerup`](/de/docs/Web/API/Element/pointerup_event)                                       | Wird ausgelöst, wenn ein Zeiger nicht mehr im _aktiven Tastenstatus_ ist.                                                                                                                                                                                                                                                                                                                                                                                  |
| [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)                               | Ein Browser löst dieses Ereignis aus, wenn er feststellt, dass der Zeiger keine Ereignisse mehr erzeugen kann (zum Beispiel wird das zugehörige Gerät deaktiviert).                                                                                                                                                                                                                                                                                        |
| [`pointerout`](/de/docs/Web/API/Element/pointerout_event)                                     | Wird aus verschiedenen Gründen ausgelöst, einschließlich: Der Zeiger wird aus den [Treffertest](#treffertest)-Grenzen eines Elements bewegt; wenn das `pointerup`-Ereignis für ein Gerät, das keine Schwebunterstützung bietet, ausgelöst wird (siehe `pointerup`); nach dem Auslösen des `pointercancel`-Ereignisses (siehe `pointercancel`); wenn ein Stiftstylus den Bereich verlässt, der durch den Digitalisierer im Hover-Modus erfasst werden kann. |
| [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)                                 | Wird ausgelöst, wenn ein Zeiger aus den [Treffertest](#treffertest)-Grenzen eines Elements bewegt wird. Bei Stiftgeräten wird dieses Ereignis ausgelöst, wenn der Stylus den Hover-Detektionsbereich des Digitalisierers verlässt.                                                                                                                                                                                                                         |
| [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) {{experimental_inline}} | Wird ausgelöst, wenn ein Zeiger Eigenschaften ändert, die keine `pointerdown`- oder `pointerup`-Ereignisse auslösen.                                                                                                                                                                                                                                                                                                                                       |
| [`gotpointercapture`](/de/docs/Web/API/Element/gotpointercapture_event)                       | Wird ausgelöst, wenn ein Element Zeigerfang erhält.                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`lostpointercapture`](/de/docs/Web/API/Element/lostpointercapture_event)                     | Wird ausgelöst, nachdem der Zeigerfang für einen Zeiger freigegeben wurde.                                                                                                                                                                                                                                                                                                                                                                                 |

### Elementerweiterungen

Es gibt drei Erweiterungen der [`Element`](/de/docs/Web/API/Element)-Schnittstelle:

- [`hasPointerCapture()`](/de/docs/Web/API/Element/hasPointerCapture)
  - : Gibt an, ob das Element, auf dem es aufgerufen wird, Zeigerfang für den durch die angegebene Zeiger-ID identifizierten Zeiger hat.
- [`releasePointerCapture()`](/de/docs/Web/API/Element/releasePointerCapture)
  - : Gibt den _Zeigerfang_ frei (stoppt ihn), der zuvor für ein bestimmtes Zeigerereignis eingestellt wurde.
- [`setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture)
  - : Weist ein bestimmtes Element als _Fangziel_ zukünftiger Zeigerereignisse zu.

### Navigator-Erweiterung

Die [`Navigator.maxTouchPoints`](/de/docs/Web/API/Navigator/maxTouchPoints)-Eigenschaft wird verwendet, um die maximale Anzahl gleichzeitiger Berührungspunkte zu bestimmen, die zu einem bestimmten Zeitpunkt unterstützt werden.

## Beispiele

Dieser Abschnitt enthält Beispiele zur grundlegenden Verwendung der Zeigerereignisschnittstellen.

### Registrieren von Ereignishandlern

Dieses Beispiel registriert einen Handler für jeden Ereignistyp für das angegebene Element.

```html
<div id="target">Touch me…</div>
```

```js
function over_handler(event) {}
function enter_handler(event) {}
function down_handler(event) {}
function move_handler(event) {}
function up_handler(event) {}
function cancel_handler(event) {}
function out_handler(event) {}
function leave_handler(event) {}
function rawUpdate_handler(event) {}
function gotCapture_handler(event) {}
function lostCapture_handler(event) {}

function init() {
  const el = document.getElementById("target");
  // Register pointer event handlers
  el.onpointerover = over_handler;
  el.onpointerenter = enter_handler;
  el.onpointerdown = down_handler;
  el.onpointermove = move_handler;
  el.onpointerup = up_handler;
  el.onpointercancel = cancel_handler;
  el.onpointerout = out_handler;
  el.onpointerleave = leave_handler;
  el.onpointerrawupdate = rawUpdate_handler;
  el.ongotpointercapture = gotCapture_handler;
  el.onlostpointercapture = lostCapture_handler;
}

document.addEventListener("DOMContentLoaded", init);
```

### Ereigniseigenschaften

Das folgende Beispiel zeigt, wie auf alle Eigenschaften eines Zeigerereignisses zugegriffen wird.

```html
<div id="target">Touch me…</div>
```

```js
const id = -1;

function process_id(event) {
  // Process this event based on the event's identifier
}
function process_mouse(event) {
  // Process the mouse pointer event
}
function process_pen(event) {
  // Process the pen pointer event
}
function process_touch(event) {
  // Process the touch pointer event
}
function process_tilt(tiltX, tiltY) {
  // Tilt data handler
}
function process_pressure(pressure) {
  // Pressure handler
}
function process_non_primary(event) {
  // Non primary handler
}

function down_handler(ev) {
  // Calculate the touch point's contact area
  const area = ev.width * ev.height;

  // Compare cached id with this event's id and process accordingly
  if (id === ev.identifier) process_id(ev);

  // Call the appropriate pointer type handler
  switch (ev.pointerType) {
    case "mouse":
      process_mouse(ev);
      break;
    case "pen":
      process_pen(ev);
      break;
    case "touch":
      process_touch(ev);
      break;
    default:
      console.log(`pointerType ${ev.pointerType} is not supported`);
  }

  // Call the tilt handler
  if (ev.tiltX !== 0 && ev.tiltY !== 0) process_tilt(ev.tiltX, ev.tiltY);

  // Call the pressure handler
  process_pressure(ev.pressure);

  // If this event is not primary, call the non primary handler
  if (!ev.isPrimary) process_non_primary(ev);
}

function init() {
  const el = document.getElementById("target");
  // Register pointerdown handler
  el.onpointerdown = down_handler;
}

document.addEventListener("DOMContentLoaded", init);
```

## Bestimmen des primären Zeigers

In einigen Szenarien kann es mehrere Zeiger geben (zum Beispiel ein Gerät mit einem Touchscreen und einer Maus) oder einen Zeiger, der mehrere Kontaktpunkte unterstützt (zum Beispiel ein Touchscreen, der mehrere Fingerberührungen unterstützt). Die Anwendung kann die [`isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary)-Eigenschaft verwenden, um innerhalb der Menge von _aktiven Zeigern_ einen Hauptzeiger für jeden Zeigertyp zu identifizieren. Wenn eine Anwendung nur einen primären Zeiger unterstützen möchte, kann sie alle Zeigerereignisse ignorieren, die nicht primär sind.

Eine Maus hat nur einen Zeiger, daher wird sie immer der primäre Zeiger sein. Für Berührungseingaben ist ein Zeiger dann als primär zu betrachten, wenn der Benutzer den Bildschirm berührt, als keine anderen aktiven Berührungen vorhanden waren. Bei Stift- und Stylus-Eingaben ist ein Zeiger dann als primär zu betrachten, wenn der Benutzer den Stift zuerst den Bildschirm berührt, als keine anderen aktiven Stifte den Bildschirm berührten.

## Bestimmen der Tastenstatus

Einige Zeigergeräte (wie Maus und Stift) unterstützen mehrere Tasten, und das Drücken der Tasten kann _chordiert_ sein (d.h. das Drücken einer zusätzlichen Taste, während eine andere Taste auf dem Zeigergerät bereits gedrückt ist).

Um den Zustand der Tasten zu bestimmen, verwendet Zeigerereignisse die [`button`](/de/docs/Web/API/MouseEvent/button) und [`buttons`](/de/docs/Web/API/MouseEvent/buttons)-Eigenschaften der [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Schnittstelle (von der [`PointerEvent`](/de/docs/Web/API/PointerEvent) erbt).

Die folgende Tabelle zeigt die Werte von `button` und `buttons` für die verschiedenen Gerätezustände.

| Zustand der Gerätetaste                                                                      | button | buttons |
| -------------------------------------------------------------------------------------------- | ------ | ------- |
| Weder Tasten noch Berührung/Stiftkontakt haben sich seit dem letzten Ereignis geändert       | `-1`   | —       |
| Mausbewegung ohne gedrückte Tasten, Stift bewegt sich während schweben ohne gedrückte Tasten | —      | `0`     |
| Linke Maustaste, Berührungskontakt, Stiftkontakt                                             | `0`    | `1`     |
| Mittlere Maustaste                                                                           | `1`    | `4`     |
| Rechte Maustaste, Stift-Barreltaste                                                          | `2`    | `2`     |
| X1 (zurück) Maus                                                                             | `3`    | `8`     |
| X2 (vorwärts) Maus                                                                           | `4`    | `16`    |
| Stift-Radierertaste                                                                          | `5`    | `32`    |

> [!NOTE]
> Die `button`-Eigenschaft zeigt eine Änderung im Zustand der Taste an. Wenn jedoch, wie im Fall von Berührung, mehrere Ereignisse gleichzeitig auftreten, haben alle denselben Wert.

## Erfassen des Zeigers

Der Zeigerfang ermöglicht, dass Ereignisse für ein bestimmtes {{domxref("PointerEvent","Zeigerereignis","","1")}} auf ein bestimmtes Element anstelle des normalen [Treffertests](#treffertest) an der Position des Zeigers umgeleitet werden. Dies kann verwendet werden, um sicherzustellen, dass ein Element weiterhin Zeigerereignisse erhält, auch wenn der Kontakt des Zeigegeräts das Element verlässt (zum Beispiel durch Scrollen oder Schwenken).

Der Zeigerfang bewirkt, dass das Ziel alle nachfolgenden Zeigerereignisse wie über das fangende Ziel betrachtet zu empfangen. Folglich werden `pointerover`, `pointerenter`, `pointerleave` und `pointerout` **nicht ausgelöst**, solange dieser Fang aktiviert ist. Für Touchscreen-Browser, die [direkte Manipulation](https://w3c.github.io/pointerevents/#dfn-direct-manipulation) erlauben, wird ein [impliziter Zeigerfang](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture) auf dem Element aufgerufen, wenn ein `pointerdown`-Ereignis ausgelöst wird. Der Fang kann manuell durch Aufrufen von [`element.releasePointerCapture`](/de/docs/Web/API/Element/releasePointerCapture) auf dem Zielelement aufgehoben werden, oder er wird implizit nach einem `pointerup`- oder `pointercancel`-Ereignis aufgehoben.

> [!NOTE]
> Wenn Sie ein Element im DOM verschieben müssen, dann stellen Sie sicher, `setPointerCapture()` **nach den DOM-Bewegungen** zu rufen, damit `setPointerCapture()` es nicht aus den Augen verliert. Zum Beispiel, wenn Sie `Element.append()` verwenden müssen, um ein Element woanders hin zu verschieben, dann stellen Sie sicher, `setPointerCapture()` erst nach dem Aufruf von `Element.append()` darauf zu rufen.

Das folgende Beispiel zeigt, wie der Zeigerfang auf einem Element gesetzt wird.

```html
<div id="target">Touch me…</div>
```

```js
function downHandler(ev) {
  const el = document.getElementById("target");
  // Element 'target' will receive/capture further events
  el.setPointerCapture(ev.pointerId);
}

function init() {
  const el = document.getElementById("target");
  el.onpointerdown = downHandler;
}

document.addEventListener("DOMContentLoaded", init);
```

Das folgende Beispiel zeigt, wie ein Zeigerfang freigegeben wird (wenn ein [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)-Ereignis auftritt. Der Browser macht dies automatisch, wenn ein [`pointerup`](/de/docs/Web/API/Element/pointerup_event)- oder [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)-Ereignis auftritt.

```html
<div id="target">Touch me…</div>
```

```js
function downHandler(ev) {
  const el = document.getElementById("target");
  // Element "target" will receive/capture further events
  el.setPointerCapture(ev.pointerId);
}

function cancelHandler(ev) {
  const el = document.getElementById("target");
  // Release the pointer capture
  el.releasePointerCapture(ev.pointerId);
}

function init() {
  const el = document.getElementById("target");
  // Register pointerdown and pointercancel handlers
  el.onpointerdown = downHandler;
  el.onpointercancel = cancelHandler;
}

document.addEventListener("DOMContentLoaded", init);
```

## touch-action CSS-Eigenschaft

Die {{cssxref("touch-action")}}-CSS-Eigenschaft wird verwendet, um zu bestimmen, ob der Browser sein Standard- (_native_) Touch-Verhalten (wie Zoomen oder Scrollen) auf eine Region anwenden soll oder nicht. Diese Eigenschaft kann auf alle Elemente außer: nicht ersetzten Inline-Elementen, Tabellenzeilen, Zeilengruppen, Tabellenspalten und Spaltengruppen angewendet werden.

Ein Wert von `auto` bedeutet, dass der Browser frei ist, sein Standard-Touch-Verhalten (auf die angegebene Region) anzuwenden, und der Wert `none` deaktiviert das Standard-Touch-Verhalten des Browsers für die Region. Die Werte `pan-x` und `pan-y` bedeuten, dass Berührungen, die auf der angegebenen Region beginnen, nur für horizontales und vertikales Scrollen respektive sind. Der Wert `manipulation` bedeutet, dass der Browser Berührungen, die auf dem Element beginnen, nur für Scrollen und Zoomen berücksichtigen kann.

Im folgenden Beispiel wird das Standard-Touch-Verhalten des Browsers für das `div`-Element deaktiviert.

```html
<html lang="en">
  <body>
    <div style="touch-action:none;">Can't touch this…</div>
  </body>
</html>
```

Im folgenden Beispiel wird das Standard-Touch-Verhalten für einige `button`-Elemente deaktiviert.

```css
button#tiny {
  touch-action: none;
}
```

Im folgenden Beispiel wird, wenn das `target`-Element berührt wird, nur in horizontaler Richtung gescrollt.

```css
#target {
  touch-action: pan-x;
}
```

## Kompatibilität mit Mausereignissen

Obwohl die Zeigerereignisschnittstellen es Anwendungen ermöglichen, verbesserte Benutzererfahrungen auf zeigerfähigen Geräten zu schaffen, ist die Realität, dass der Großteil der heutigen Webinhalte nur für Maus-Eingaben ausgelegt ist. Folglich muss der Browser, selbst wenn er Zeigerereignisse unterstützt, trotzdem Mausereignisse verarbeiten, damit Inhalte, die nur Maus-Eingaben voraussetzen, wie vorgesehen ohne direkte Modifikationen funktionieren. Idealerweise muss eine zeigerfähige Anwendung die Maus-Eingaben nicht ausdrücklich behandeln. Da der Browser jedoch Mausereignisse verarbeiten muss, können einige Kompatibilitätsprobleme auftreten, die zu handhaben sind. Dieser Abschnitt enthält Informationen über die Interaktion von Zeigerereignissen und Mausereignissen und die Folgen für Anwendungsentwickler.

Der Browser _kann generische Zeigereingaben in Mausereignisse für die Kompatibilität mit mausbasierter Nutzung umwandeln_. Diese Zuordnung von Ereignissen wird _Kompatibilitätsmausereignisse_ genannt. Autoren können die Produktion bestimmter Kompatibilitätsmausereignisse durch Abbrechen des pointerdown-Ereignisses verhindern, beachten Sie jedoch:

- Mausereignisse können nur verhindert werden, wenn der Zeiger heruntergedrückt ist.
- Schwebende Zeiger (z.B. eine Maus ohne gedrückte Tasten) können ihre Mausereignisse nicht verhindern.
- Die `mouseover`, `mouseout`, `mouseenter`, und `mouseleave` Ereignisse werden niemals verhindert (selbst wenn der Zeiger heruntergedrückt ist).

## Beste Praktiken

Hier sind einige _beste Praktiken_ zu beachten, wenn Sie Zeigerereignisse verwenden:

- Minimieren Sie die Menge an Arbeit, die in Ereignishandlern durchgeführt wird.
- Fügen Sie Ereignishandler zu einem bestimmten Zielelement hinzu (anstatt zum gesamten Dokument oder Knoten weiter oben im Dokumentbaum).
- Das Zielelement (Knoten) sollte groß genug sein, um den größten Kontaktflächenbereich (typischerweise einen Finger-Touch) aufzunehmen. Wenn der Zielbereich zu klein ist, könnte das Berühren zu unerwünschten Ereignissen für angrenzende Elemente führen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Einige zusätzliche Werte wurden für die CSS-{{cssxref("touch-action")}}-Eigenschaft als Teil der [Pointer Events](https://w3c.github.io/pointerevents/)-Spezifikation definiert, jedoch haben diese Werte derzeit nur begrenzte Implementierungsunterstützung.

## Siehe auch

### Demos und Beispiele

- [Touch/Zeigertests und Demos (von Patrick H. Lauke)](https://patrickhlauke.github.io/touch/)

### Gemeinschaft

- [Pointer Events Arbeitsgruppe](https://github.com/w3c/pointerevents)
- [Mail-Liste](https://lists.w3.org/Archives/Public/public-pointer-events/)
- [W3C #pointerevents IRC-Kanal](irc://irc.w3.org:6667/)

### Verwandte Themen und Ressourcen

- [Touch Events Standard](https://www.w3.org/TR/touch-events/)
