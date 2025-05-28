---
title: Pointer events
slug: Web/API/Pointer_events
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{DefaultAPISidebar("Pointer Events")}}

Ein Großteil der heutigen Webinhalte geht davon aus, dass das Zeigegerät des Benutzers eine Maus sein wird. Da jedoch viele Geräte andere Arten von Zeigereingabegeräten unterstützen, wie z.B. Stifte/Stylus und Touch-Oberflächen, sind Erweiterungen der bestehenden Zeigereingabe-Ereignismodelle erforderlich. _[Pointer Events](#pointer_event)_ adressieren diesen Bedarf.

Pointer Events sind DOM-Ereignisse, die für ein Zeigegerät ausgelöst werden. Sie sind so konzipiert, dass sie ein einziges DOM-Ereignismodell zur Handhabung von Zeigereingabegeräten wie Maus, Stift/Stylus oder Touch (z.B. ein oder mehrere Finger) erstellen.

Der _[Pointer](#pointer)_ ist ein hardwareunabhängiges Gerät, das auf ein bestimmtes Set von Bildschirmkoordinaten zielen kann. Ein einziges Ereignismodell für Pointer kann die Erstellung von Websites und Anwendungen vereinfachen und ein gutes Benutzererlebnis bieten, unabhängig von der Hardware des Benutzers. Für Szenarien, in denen eine gerätespezifische Handhabung gewünscht wird, definiert Pointer Events eine [`pointerType`](/de/docs/Web/API/PointerEvent/pointerType)-Eigenschaft, um den Gerätetyp zu inspizieren, der das Ereignis erzeugt hat.

Die zur Handhabung generischer Zeigereingaben benötigten Ereignisse sind analog zu [Mausereignissen](/de/docs/Web/API/MouseEvent) (`mousedown`/`pointerdown`, `mousemove`/`pointermove` usw.). Folglich sind Pointer-Ereignistypen absichtlich ähnlich zu Maustypen.

Zusätzlich enthält ein Pointer-Ereignis die üblichen Eigenschaften von Mausereignissen (Client-Koordinaten, Zielelement, Tastenstatus usw.) sowie neue Eigenschaften für andere Eingabeformen: Druck, Kontaktgeometrie, Neigung usw. Tatsächlich erbt das Interface [`PointerEvent`](/de/docs/Web/API/PointerEvent) alle [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Eigenschaften, was die Migration von Inhalten von Mausereignissen zu Pointer Events erleichtert.

## Terminologie

### Active Buttons State

Der Zustand, wenn ein _[Pointer](#pointer)_ einen von Null verschiedenen Wert für die `buttons`-Eigenschaft hat. Zum Beispiel im Fall eines Stifts, wenn der Stift physischen Kontakt mit dem Digitalisierer hat oder mindestens eine Taste beim Schweben gedrückt wird.

### Active Pointer

Jedes _[Pointer](#pointer)_-Eingabegerät, das Ereignisse erzeugen kann. Ein Zeiger wird als aktiv betrachtet, wenn er weiterhin weitere Ereignisse erzeugen kann. Zum Beispiel wird ein Stift, der im Down-Zustand ist, als aktiv betrachtet, da er zusätzliche Ereignisse erzeugen kann, wenn der Stift angehoben oder bewegt wird.

### Digitalisierer

Ein Sensorgerät mit einer Oberfläche, die Kontakt erkennen kann. Am häufigsten ist das Sensorgerät ein mit Touch-Funktionalität ausgestatteter Bildschirm, der Eingaben von einem Eingabegerät wie einem Stift, Stylus oder Finger erfassen kann. Einige Sensorgeräte können die Nähe des Eingabegeräts erkennen, und der Zustand wird als Schweben dem Mauszeiger folgend ausgedrückt.

### Hit Test

Der Prozess, den der Browser verwendet, um ein Zielelement für ein Pointer-Ereignis zu bestimmen. Typischerweise wird dies bestimmt, indem sowohl der Standort des Pointers als auch die visuelle Anordnung der Elemente in einem Dokument auf Bildschirmmedien betrachtet werden.

### Pointer

Eine hardwareunabhängige Darstellung von Eingabegeräten, die auf eine bestimmte Koordinate (oder ein Set von Koordinaten) auf einem Bildschirm zielen können. Beispiele für _Pointer_-Eingabegeräte sind Maus, Stift/Stylus und Touch-Kontakte.

### Pointer Capture

Pointer Capture ermöglicht es, dass die Ereignisse für einen Pointer auf ein bestimmtes Element umgeleitet werden, das nicht das normale Hit-Test-Ergebnis des Zeigerstandorts ist. Siehe [Capturing the Pointer](#capturing_des_pointers) für ein Beispiel.

> **Note:** _Pointer Capture_ unterscheidet sich von [_Pointer Lock_](/de/docs/Web/API/Pointer_Lock_API), das physisch verhindert, dass der Pointer eine Region verlässt.

### Pointer Event

Ein DOM [`Event`](/de/docs/Web/API/PointerEvent), das für einen _[Pointer](#pointer)_ ausgelöst wird.

## Schnittstellen

Die primäre Schnittstelle ist die [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle, die einen [`Konstruktor`](/de/docs/Web/API/PointerEvent/PointerEvent) sowie mehrere Ereignistypen und zugehörige globale Ereignishandler besitzt.

Der Standard umfasst auch einige Erweiterungen der [`Element`](/de/docs/Web/API/Element)- und [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstellen.

Die folgenden Unterabschnitte enthalten kurze Beschreibungen jeder Schnittstelle und Eigenschaft.

### PointerEvent-Schnittstelle

Die [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle erweitert die [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Schnittstelle und besitzt folgende Eigenschaften.

- [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}}
  - : Repräsentiert den Winkel zwischen der Achse eines Übertragers (einem Pointer oder Stylus) und der X-Y-Ebene eines Geräts.
- [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}}
  - : Repräsentiert den Winkel zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Übertragers (eines Pointers oder Stylus) als auch die Y-Achse enthält.
- [`PointerEvent.persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine eindeutige Kennung für das Zeigegerät, das das `PointerEvent` erzeugt.
- [`pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Pointer, der das Ereignis verursacht hat.
- [`width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Größe auf der X-Achse), in CSS-Pixeln, der Kontaktgeometrie des Pointers.
- [`height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Größe auf der Y-Achse), in CSS-Pixeln, der Kontaktgeometrie des Pointers.
- [`pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck der Pointers-Eingabe im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen beziehungsweise maximalen Druck darstellen, den die Hardware erkennen kann.
- [`tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck der Pointer-Eingabe (auch bekannt als Barrel-Druck oder Zylinderstress) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position des Steuerelements ist.
- [`tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Flächenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y–Z-Ebene und der Ebene, die sowohl die Achse des Pointers (z.B. Stiftstylus) als auch die Y-Achse enthält.
- [`tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Flächenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X–Z-Ebene und der Ebene, die sowohl die Achse des Pointers (z.B. Stiftstylus) als auch die X-Achse enthält.
- [`twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung im Uhrzeigersinn des Pointers (z.B. Stiftstylus) um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Berührung, etc.).
- [`isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Pointer den primären Pointer dieses Pointer-Typs repräsentiert.

### Ereignistypen und Globale Ereignishandler

Pointer Events haben zehn Ereignistypen, von denen sieben ähnliche Semantik wie ihre Mausereignis-Gegenstücke haben (`down`, `up`, `move`, `over`, `out`, `enter` und `leave`).

Unten ist eine kurze Beschreibung jedes Ereignistyps.

| Ereignis                                                                                      | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`pointerover`](/de/docs/Web/API/Element/pointerover_event)                                   | Ausgelöst, wenn ein Pointer in die [Hit Test](#hit_test)-Grenzen eines Elements verschoben wird.                                                                                                                                                                                                                                                                                                |
| [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)                                 | Ausgelöst, wenn ein Pointer in die [Hit Test](#hit_test)-Grenzen eines Elements oder eines seiner Nachkommen verschoben wird, auch infolge eines `pointerdown`-Ereignisses von einem Gerät, das kein Schweben unterstützt (siehe `pointerdown`).                                                                                                                                                |
| [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)                                   | Ausgelöst, wenn ein Pointer zu einem _Active Buttons State_ wird.                                                                                                                                                                                                                                                                                                                               |
| [`pointermove`](/de/docs/Web/API/Element/pointermove_event)                                   | Ausgelöst, wenn ein Pointer Koordinaten ändert. Dieses Ereignis wird auch verwendet, wenn die Änderung des Zeigerstatus nicht durch andere Ereignisse gemeldet werden kann.                                                                                                                                                                                                                     |
| [`pointerup`](/de/docs/Web/API/Element/pointerup_event)                                       | Ausgelöst, wenn ein Pointer nicht mehr im _Active Buttons State_ ist.                                                                                                                                                                                                                                                                                                                           |
| [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)                               | Ein Browser löst dieses Ereignis aus, wenn er zu dem Schluss kommt, dass der Pointer keine Ereignisse mehr erzeugen kann (zum Beispiel, wenn das zugehörige Gerät deaktiviert wird oder der Browser beschlossen hat, die Interaktion als Schwenken/Zoomen zu interpretieren). Informationen zur Steuerung dieses Verhaltens finden Sie im Abschnitt zur `touch-action`-CSS-Eigenschaft unten.   |
| [`pointerout`](/de/docs/Web/API/Element/pointerout_event)                                     | Für mehrere Gründe ausgelöst, einschließlich: Pointer wird aus den [Hit Test](#hit_test)-Grenzen eines Elements verschoben; das `pointerup`-Ereignis für ein Gerät wird ausgelöst, das kein Schweben unterstützt (siehe `pointerup`); nach dem `pointercancel`-Ereignis (siehe `pointercancel`); wenn ein Stiftstylus den Schweberbereich verlässt, der durch den Digitalisierer erkennbar ist. |
| [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)                                 | Ausgelöst, wenn ein Pointer aus den [Hit Test](#hit_test)-Grenzen eines Elements verschoben wird. Für Stiftgeräte wird dieses Ereignis ausgelöst, wenn der Stift den Schweberbereich verlässt, der durch den Digitalisierer erkennbar ist.                                                                                                                                                      |
| [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) {{experimental_inline}} | Ausgelöst, wenn ein Pointer Eigenschaften ändert, die keine `pointerdown`- oder `pointerup`-Ereignisse auslösen.                                                                                                                                                                                                                                                                                |
| [`gotpointercapture`](/de/docs/Web/API/Element/gotpointercapture_event)                       | Ausgelöst, wenn ein Element Pointer Capture erhält.                                                                                                                                                                                                                                                                                                                                             |
| [`lostpointercapture`](/de/docs/Web/API/Element/lostpointercapture_event)                     | Ausgelöst, nachdem Pointer Capture für einen Pointer freigegeben wird.                                                                                                                                                                                                                                                                                                                          |

### Element-Erweiterungen

Es gibt drei Erweiterungen der [`Element`](/de/docs/Web/API/Element)-Schnittstelle:

- [`hasPointerCapture()`](/de/docs/Web/API/Element/hasPointerCapture)
  - : Gibt an, ob das Element, auf dem es aufgerufen wird, Pointer Capture für den durch die gegebene Pointer-ID identifizierten Zeiger hat.
- [`releasePointerCapture()`](/de/docs/Web/API/Element/releasePointerCapture)
  - : Gibt die _Pointer Capture_ frei (beendet sie), die zuvor für ein bestimmtes Pointer-Ereignis gesetzt wurde.
- [`setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture)
  - : Bestimmt ein bestimmtes Element als Ziel für die _Capture_ zukünftiger Pointer-Ereignisse.

### Navigator-Erweiterung

Die [`Navigator.maxTouchPoints`](/de/docs/Web/API/Navigator/maxTouchPoints)-Eigenschaft wird verwendet, um die maximale Anzahl gleichzeitiger Berührungspunkte zu bestimmen, die zu einem bestimmten Zeitpunkt unterstützt werden.

## Beispiele

Dieser Abschnitt enthält Beispiele für die grundlegende Nutzung der Pointer-Ereignis-Schnittstellen.

### Registrieren von Ereignishandlern

Dieses Beispiel registriert einen Handler für jeden Ereignistyp für das gegebene Element.

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

Dieses Beispiel veranschaulicht den Zugriff auf alle Eigenschaften eines Pointer-Ereignisses.

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

## Bestimmung des Primären Pointers

In einigen Szenarien kann es mehrere Zeiger geben (z.B. ein Gerät mit sowohl Touchscreen als auch Maus) oder einen Zeiger, der mehrere Kontaktpunkte unterstützt (z.B. ein Touchscreen, der mehrere Fingerberührungen unterstützt). Die Anwendung kann die [`isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary)-Eigenschaft verwenden, um einen Hauptzeiger unter den _Aktiven Pointern_ jeden Zeigertyps zu identifizieren. Wenn eine Anwendung nur einen primären Zeiger unterstützen möchte, kann sie alle Pointer-Ereignisse ignorieren, die nicht primär sind.

Eine Maus hat nur einen Zeiger, daher wird sie immer der primäre Zeiger sein. Für Touch-Eingaben wird ein Zeiger als primär betrachtet, wenn der Benutzer den Bildschirm berührte, als keine anderen aktiven Berührungen vorhanden waren. Für Stift- und Stylus-Eingaben wird ein Zeiger als primär betrachtet, wenn der Stift des Benutzers den Bildschirm berührt, als keine anderen aktiven Stifte den Bildschirm berührt haben.

## Bestimmung von Tastenstatus

Einige Zeigereingabegeräte (wie Maus und Stift) unterstützen mehrere Tasten, und die Tastendrücke können _verknüpft_ sein (d.h. das Drücken einer weiteren Taste, während eine andere Taste des Zeigereingabegeräts bereits gedrückt ist).

Um den Status der Tastenanschläge zu bestimmen, verwenden Pointer-Ereignisse die [`button`](/de/docs/Web/API/MouseEvent/button) und [`buttons`](/de/docs/Web/API/MouseEvent/buttons)-Eigenschaften der [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Schnittstelle (von der [`PointerEvent`](/de/docs/Web/API/PointerEvent) erbt).

Die folgende Tabelle liefert die Werte von `button` und `buttons` für die verschiedenen Gerätezustände.

| Gerätezustand                                                                             | button | buttons |
| ----------------------------------------------------------------------------------------- | ------ | ------- |
| Weder Tasten noch Touch-/Stiftkontakt haben sich seit dem letzten Ereignis geändert       | `-1`   | —       |
| Mausbewegung ohne gedrückte Tasten, Stift bewegt sich beim Schweben ohne gedrückte Tasten | —      | `0`     |
| Linke Maustaste, Touch-Kontakt, Stiftkontakt                                              | `0`    | `1`     |
| Mittlere Maustaste                                                                        | `1`    | `4`     |
| Rechte Maustaste, Stift-Fass-Taste                                                        | `2`    | `2`     |
| X1 (zurück) Maus                                                                          | `3`    | `8`     |
| X2 (vorwärts) Maus                                                                        | `4`    | `16`    |
| Stiftlöschtaste                                                                           | `5`    | `32`    |

> [!NOTE]
> Die `button`-Eigenschaft zeigt eine Änderung im Zustand der Taste an. Wenn jedoch, wie im Fall von Touch, mehrere Ereignisse mit einem Ereignis auftreten, haben alle den gleichen Wert.

## Capturing des Pointers

Pointer Capture ermöglicht es, Ereignisse für ein bestimmtes [Pointer Event](/de/docs/Web/API/PointerEvent) auf ein bestimmtes Element umzuleiten, anstatt auf den normalen [Hit Test](#hit_test) am Standort des Pointers. Dies kann verwendet werden, um sicherzustellen, dass ein Element weiterhin Pointer-Ereignisse erhält, auch wenn sich der Kontakt des Zeigereingabegeräts vom Element entfernt (beispielsweise durch Scrollen oder Schwenken).

Pointer Capture sorgt dafür, dass das Ziel alle nachfolgenden Pointer-Ereignisse erfasst, als ob sie über dem erfassenden Ziel auftreten würden. Entsprechend werden `pointerover`, `pointerenter`, `pointerleave` und `pointerout` **nicht ausgelöst**, solange diese Erfassung gesetzt ist.
Für Touchscreen-Browser, die [direkte Manipulation](https://w3c.github.io/pointerevents/#dfn-direct-manipulation) ermöglichen, wird eine [implizite Pointer Capture](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture) auf dem Element aufgerufen, wenn ein `pointerdown`-Ereignis ausgelöst wird. Die Erfassung kann manuell durch Aufruf von [`element.releasePointerCapture`](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture) auf dem Zielelement freigegeben werden oder wird implizit nach einem `pointerup`- oder `pointercancel`-Ereignis freigegeben.

> [!NOTE]
> Wenn Sie ein Element im DOM verschieben müssen, sollten Sie sicherstellen, dass `setPointerCapture()` **nach den DOM-Bewegungen** aufgerufen wird, damit `setPointerCapture()` nicht den Überblick darüber verliert. Zum Beispiel, wenn Sie `Element.append()` verwenden müssen, um ein Element woanders hin zu verschieben, stellen Sie sicher, dass Sie `setPointerCapture()` darauf nur nach dem Aufruf von `Element.append()` aufrufen.

Das folgende Beispiel zeigt, wie Pointer Capture für ein Element gesetzt wird.

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

Das folgende Beispiel zeigt, wie eine Pointer Capture freigegeben wird (wenn ein [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event) Ereignis auftritt. Der Browser macht dies automatisch, wenn ein [`pointerup`](/de/docs/Web/API/Element/pointerup_event) oder [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event) Ereignis auftritt.

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

## touch-action-CSS-Eigenschaft

Die {{cssxref("touch-action")}}-CSS-Eigenschaft wird verwendet, um zu spezifizieren, ob der Browser sein Standard (_natürliches_) Touch-Verhalten (wie Zoomen oder Schwenken) auf eine Region anwenden sollte oder nicht. Diese Eigenschaft kann auf alle Elemente angewendet werden, außer auf: nicht-ersetzte Inline-Elemente, Tabellenspalten, Zeilengruppen, Tabellenspalten und Spaltengruppen.

Ein Wert von `auto` bedeutet, dass der Browser frei ist, sein Standard-Touch-Verhalten (auf die angegebene Region) anzuwenden, und der Wert `none` deaktiviert das Standard-Touch-Verhalten des Browsers für die Region. Die Werte `pan-x` und `pan-y` bedeuten, dass Berührungen, die auf der angegebenen Region beginnen, nur für horizontales und vertikales Scrollen bestimmt sind. Der Wert `manipulation` bedeutet, dass der Browser Berührungen, die auf dem Element beginnen, nur für Scrollen und Zoomen betrachten darf.

Im folgenden Beispiel wird das Standard-Touch-Verhalten des Browsers für das `div`-Element deaktiviert.

```html
<html lang="en">
  <body>
    <div style="touch-action:none;">Can't touch this…</div>
  </body>
</html>
```

Im folgenden Beispiel wird für einige `button`-Elemente das Standard-Touch-Verhalten deaktiviert.

```css
button#tiny {
  touch-action: none;
}
```

Im folgenden Beispiel, wenn das `target`-Element berührt wird, wird es nur in der horizontalen Richtung schwenken.

```css
#target {
  touch-action: pan-x;
}
```

## Kompatibilität mit Mausereignissen

Obwohl die Pointer-Event-Schnittstellen es Anwendungen ermöglichen, verbesserte Benutzererfahrungen auf Pointer-fähigen Geräten zu schaffen, ist die Realität, dass die überwiegende Mehrheit der heutigen Webinhalte darauf ausgelegt ist, nur mit Maus-Eingaben zu funktionieren. Folglich muss ein Browser, selbst wenn er Pointer-Events unterstützt, weiterhin Maus-Ereignisse verarbeiten, damit Inhalte, die nur Maus-Eingaben voraussetzen, ohne direkte Änderungen funktionieren. Idealerweise muss eine Pointer-fähige Anwendung keine Maus-Eingaben explizit behandeln. Da der Browser jedoch Mausereignisse verarbeiten muss, kann es einige Kompatibilitätsprobleme geben, die gelöst werden müssen. Dieser Abschnitt enthält Informationen über die Interaktion von Pointer-Event und Maus-Event und die Auswirkungen für Anwendungsentwickler.

Der Browser _kann generische Pointer-Eingaben für die Kompatibilität mit mausbasierenden Inhalten zu Mausereignissen umwandeln_. Diese Zuordnung von Ereignissen wird _Kompatibilitäts-Mausereignisse_ genannt. Autoren können die Erzeugung bestimmter Kompatibilitäts-Mausereignisse verhindern, indem sie das Pointer-Down-Ereignis abbrechen, aber beachten Sie:

- Mausereignisse können nur verhindert werden, wenn der Zeiger niedergedrückt ist.
- Schwebende Pointer (z.B. eine Maus ohne gedrückte Tasten) können ihre Mausereignisse nicht verhindern lassen.
- Die Ereignisse `mouseover`, `mouseout`, `mouseenter` und `mouseleave` werden niemals verhindert (auch wenn der Pointer niedergedrückt ist).

## Best Practices

Hier sind einige _Best Practices_, die beim Verwenden von Pointer-Events zu beachten sind:

- Minimieren Sie die in Ereignishandlern ausgeführte Arbeit.
- Fügen Sie die Ereignishandler zu einem spezifischen Zielelement hinzu (anstatt zum gesamten Dokument oder Knoten höher im Dokumentbaum).
- Das Zielelement (Knoten) sollte groß genug sein, um die größte Kontaktoberfläche (typischerweise eine Fingerberührung) aufzunehmen. Wenn der Zielbereich zu klein ist, könnte seine Berührung das Auslösen anderer Ereignisse für angrenzende Elemente zur Folge haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Einige zusätzliche Werte wurden für die CSS-{{cssxref("touch-action")}}-Eigenschaft als Teil der [Pointer Events](https://w3c.github.io/pointerevents/)-Spezifikation definiert, aber derzeit haben diese Werte nur begrenzte Implementierungsunterstützung.

## Siehe auch

- [Touch Events](/de/docs/Web/API/Touch_events)
- [Pointer Events-Arbeitsgruppe](https://github.com/w3c/pointerevents)
- [Mail-Liste](https://lists.w3.org/Archives/Public/public-pointer-events/)
- [W3C #pointerevents IRC-Kanal](irc://irc.w3.org:6667/)
- [Touch/Pointer-Tests und -Demos](https://patrickhlauke.github.io/touch/) von Patrick H. Lauke
