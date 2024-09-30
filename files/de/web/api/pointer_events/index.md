---
title: Pointer events
slug: Web/API/Pointer_events
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{DefaultAPISidebar("Pointer Events")}}

Ein Großteil der heutigen Webinhalte geht davon aus, dass das Zeigegerät der Nutzer eine Maus ist. Da jedoch viele Geräte auch andere Arten von Zeigeeingabegeräten unterstützen, wie z.B. Stift/Stylus und Touch-Oberflächen, sind Erweiterungen zu den bestehenden Zeigegeräte-Ereignismodellen erforderlich. _[Pointer Events](#pointer-ereignis)_ erfüllen dieses Bedürfnis.

Pointer Events sind DOM-Ereignisse, die für ein Zeigegerät ausgelöst werden. Sie sind darauf ausgelegt, ein einheitliches DOM-Ereignismodell zu schaffen, um Zeigeeingabegeräte wie Maus, Stift/Stylus oder Touch (z.B. ein oder mehrere Finger) zu behandeln.

Der _[Pointer](#pointer)_ ist ein hardware-agnostisches Gerät, das auf ein bestimmtes Set von Bildschirmkoordinaten zielen kann. Ein einheitliches Ereignismodell für Pointer kann das Erstellen von Websites und Anwendungen vereinfachen und eine gute Benutzererfahrung bieten, unabhängig von der Hardware des Nutzers. Für Szenarien, in denen eine gerätespezifische Behandlung gewünscht wird, definiert Pointer Events eine [`pointerType`](/de/docs/Web/API/PointerEvent/pointerType)-Eigenschaft, um den Gerätetyp, der das Ereignis erzeugt hat, zu ermitteln.

Die Ereignisse, die benötigt werden, um generische Pointer-Eingaben zu behandeln, entsprechen den {{domxref("MouseEvent","Mausereignissen", "", 1)}} (`mousedown`/`pointerdown`, `mousemove`/`pointermove`, usw.). Daher sind Pointer Event-Typen absichtlich ähnlich zu Maus-Ereignistypen.

Zusätzlich enthält ein Pointer Event die üblichen Eigenschaften, die in Maus-Ereignissen vorhanden sind (Client-Koordinaten, Zielfragment, Button-Zustände, usw.) sowie neue Eigenschaften für andere Formen der Eingabe: Druck, Kontaktgeometrie, Neigung, usw. Tatsächlich erbt die [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle alle Eigenschaften der [`MouseEvent`](/de/docs/Web/API/MouseEvent), was den Übergang von Maus-Ereignissen zu Pointer Events erleichtert.

## Terminologie

### aktiver Buttons-Zustand

Der Zustand, wenn ein _[Pointer](#pointer)_ einen nicht-nullwertigen Wert für die `buttons`-Eigenschaft hat. Zum Beispiel, im Fall eines Stifts, wenn der Stift physischen Kontakt mit dem Digitalisierer hat oder mindestens ein Knopf beim Schweben gedrückt ist.

### aktiver Pointer

Jedes _[Pointer](#pointer)_ Eingabegerät, das Ereignisse erzeugen kann. Ein Pointer gilt als aktiv, wenn er noch weitere Ereignisse erzeugen kann. Zum Beispiel wird ein Stift, der sich im State 'down' befindet, als aktiv betrachtet, da er zusätzliche Ereignisse erzeugen kann, wenn der Stift angehoben oder bewegt wird.

### Digitalisierer

Ein Erfassungsgerät mit einer Oberfläche, die Kontakt erkennen kann. Am häufigsten ist das Erfassungsgerät ein berührungsempfindlicher Bildschirm, der Eingaben von einem Eingabegerät wie einem Stift, Stylus oder Finger erkennen kann. Einige Erfassungsgeräte können die Nähe des Eingabegeräts erkennen und der Zustand wird als Schweben entsprechend der Maus ausgedrückt.

### Treffertest

Der Prozess, den der Browser zur Bestimmung eines Zielelements für ein Pointer-Ereignis verwendet. Dies wird normalerweise durch Betrachtung des Ortes des Pointers und der visuellen Anordnung von Elementen in einem Dokument auf Medien auf dem Bildschirm bestimmt.

### Pointer

Eine hardware-agnostische Darstellung von Eingabegeräten, die auf eine spezifische Koordinate (oder einen Satz von Koordinaten) auf einem Bildschirm zielen können. Beispiele für _Pointer_-Eingabegeräte sind Maus, Stift/Stylus und Touch-Kontakte.

### Pointer-Erfassung

Pointer-Erfassung ermöglicht es, die Ereignisse für einen Pointer auf ein bestimmtes Element retargeten zu lassen, abweichend vom normalen Ergebnis des [Treffertests](#treffertest) an der Position des Pointers. Siehe [Erfassung des Pointers](#erfassung_des_pointers) für ein Beispiel.

> **Note:** Die _Pointer-Erfassung_ unterscheidet sich von [_pointer lock_](/de/docs/Web/API/Pointer_Lock_API), welches physisch verhindert, dass der Pointer einen Bereich verlässt.

### Pointer-Ereignis

Ein DOM [`event`](/de/docs/Web/API/PointerEvent), das für einen _[Pointer](#pointer)_ ausgelöst wird.

## Schnittstellen

Die primäre Schnittstelle ist die [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle, die einen [`constructor`](/de/docs/Web/API/PointerEvent/PointerEvent) plus mehrere Ereignistypen und zugehörige globale Ereignis-Handler hat.

Der Standard umfasst auch einige Erweiterungen der [`Element`](/de/docs/Web/API/Element) und [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstellen.

Die folgenden Unterabschnitte enthalten kurze Beschreibungen jeder Schnittstelle und Eigenschaft.

### PointerEvent-Schnittstelle

Die [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle erweitert die [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Schnittstelle und hat die folgenden Eigenschaften.

- [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}}
  - : Stellt den Winkel zwischen einer Transduceure (einem Pointer oder Stylus) Achse und der X-Y Ebene eines Geräts dar.
- [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}}
  - : Stellt den Winkel zwischen der Y-Z-Ebene und der Ebene dar, die sowohl die Transduceure (einen Pointer oder Stylus) Achse als auch die Y-Achse beinhaltet.
- [`PointerEvent.persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine eindeutige Identifikation für das Zeigegerät, das das `PointerEvent` erzeugt.
- [`pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Identifikation für den Pointer, der das Ereignis verursacht.
- [`width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Ausmaß auf der X-Achse), in CSS-Pixeln, der Kontaktgeometrie des Pointers.
- [`height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : die Höhe (Ausmaß auf der Y-Achse), in CSS-Pixeln, der Kontaktgeometrie des Pointers.
- [`pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : der normalisierte Druck der Pointer-Eingabe im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck repräsentieren, den die Hardware erkennen kann.
- [`tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck der Pointer-Eingabe (auch als Zylinderdruck oder Fassstress bekannt) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position der Steuerung darstellt.
- [`tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Winkel in der Ebene (in Grad, im Bereich von `-90` bis `90`) zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Pointers (z.B. Pen-Stylus) als auch die Y-Achse enthält.
- [`tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : der Winkel in der Ebene (in Grad, im Bereich von `-90` bis `90`) zwischen der X-Z-Ebene und der Ebene, die sowohl die Achse des Pointers (z.B. Pen-Stylus) als auch die X-Achse enthält.
- [`twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung im Uhrzeigersinn des Pointers (z.B. Pen-Stylus) um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Touch, usw.).
- [`isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Pointer den Primärpointer dieses Pointers darstellt.

### Ereignistypen und globale Ereignis-Handler

Pointer Events haben zehn Ereignistypen, von denen sieben ähnliche Semantik wie ihre Mausereignis-Gegenstücke haben (`down`, `up`, `move`, `over`, `out`, `enter`, und `leave`).

Unten ist eine kurze Beschreibung jedes Ereignistyps.

| Ereignis                                                                                     | Beschreibung                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`pointerover`](/de/docs/Web/API/Element/pointerover_event)                                   | Wird ausgelöst, wenn ein Pointer in die [Treffertest](#treffertest) Grenzen eines Elements bewegt wird.                                                                                                                                                                                                                                                           |
| [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)                                 | Wird ausgelöst, wenn ein Pointer in die [Treffertest](#treffertest) Grenzen eines Elements oder eines seiner Nachfahren bewegt wird, einschließlich als Ergebnis eines `pointerdown`-Ereignisses von einem Gerät, das kein Schweben unterstützt (siehe `pointerdown`).                                                                                                              |
| [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)                                   | Wird ausgelöst, wenn ein Pointer einen _aktiven Buttons-Zustand_ annimmt.                                                                                                                                                                                                                                                                                        |
| [`pointermove`](/de/docs/Web/API/Element/pointermove_event)                                   | Wird ausgelöst, wenn sich die Koordinaten eines Pointers ändern. Dieses Ereignis wird auch verwendet, wenn die Änderung des Pointer-Zustands nicht durch andere Ereignisse gemeldet werden kann.                                                                                                                                                                                                        |
| [`pointerup`](/de/docs/Web/API/Element/pointerup_event)                                       | Wird ausgelöst, wenn ein Pointer keinen _aktiven Buttons-Zustand_ mehr hat.                                                                                                                                                                                                                                                                                   |
| [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)                               | Ein Browser löst dieses Ereignis aus, wenn er feststellt, dass der Pointer keine Ereignisse mehr generieren kann (z.B. wenn das zugehörige Gerät deaktiviert wird).                                                                                                                                                                                           |
| [`pointerout`](/de/docs/Web/API/Element/pointerout_event)                                     | Wird aus mehreren Gründen ausgelöst: der Pointer bewegt sich aus den [Treffertest](#treffertest) Grenzen eines Elements; das `pointerup`-Ereignis wird für ein Gerät ausgelöst, das kein Schweben unterstützt (siehe `pointerup`); nach dem Auslösen des `pointercancel`-Ereignisses (siehe `pointercancel`); wenn ein Pen-Stylus den Hover-Bereich verlässt, den der Digitalisierer erkennt. |
| [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)                                 | Wird ausgelöst, wenn ein Pointer aus den [Treffertest](#treffertest) Grenzen eines Elements bewegt wird. Bei Stiftgeräten wird dieses Ereignis ausgelöst, wenn der Stylus den Hover-Bereich verlässt, den der Digitalisierer erkennt.                                                                                                                                           |
| [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) {{experimental_inline}} | Wird ausgelöst, wenn ein Pointer Eigenschaften ändert, die keine `pointerdown` oder `pointerup` Ereignisse auslösen.                                                                                                                                                                                                                                            |
| [`gotpointercapture`](/de/docs/Web/API/Element/gotpointercapture_event)                       | Wird ausgelöst, wenn ein Element eine Pointer-Erfassung erhält.                                                                                                                                                                                                                                                                                             |
| [`lostpointercapture`](/de/docs/Web/API/Element/lostpointercapture_event)                     | Wird ausgelöst, nachdem die Pointer-Erfassung für einen Pointer freigegeben wurde.                                                                                                                                                                                                                                                                                      |

### Element-Erweiterungen

Es gibt drei Erweiterungen für die [`Element`](/de/docs/Web/API/Element)-Schnittstelle:

- [`hasPointerCapture()`](/de/docs/Web/API/Element/hasPointerCapture)
  - : Gibt an, ob das Element, auf dem es aufgerufen wird, Pointer-Erfassung für den durch die gegebene Pointer-ID identifizierten Pointer hat.
- [`releasePointerCapture()`](/de/docs/Web/API/Element/releasePointerCapture)
  - : Hebt die zuvor festgelegte _Pointer-Erfassung_ für ein spezifisches Pointer-Ereignis auf.
- [`setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture)
  - : Bestimmt ein bestimmtes Element als _Erfassungsziel_ zukünftiger Pointer-Ereignisse.

### Navigator-Erweiterung

Die [`Navigator.maxTouchPoints`](/de/docs/Web/API/Navigator/maxTouchPoints)-Eigenschaft wird verwendet, um die maximale Anzahl gleichzeitiger Berührungspunkte zu bestimmen, die zu einem bestimmten Zeitpunkt unterstützt werden.

## Beispiele

Dieser Abschnitt enthält Beispiele für die grundlegende Nutzung der Pointer Events-Schnittstellen.

### Registrierung von Event-Handlern

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
function rawupdate_handler(event) {}
function gotcapture_handler(event) {}
function lostcapture_handler(event) {}

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
  el.onpointerrawupdate = rawupdate_handler;
  el.ongotpointercapture = gotcapture_handler;
  el.onlostpointercapture = lostcapture_handler;
}

document.addEventListener("DOMContentLoaded", init);
```

### Eigenschaften des Ereignisses

Dieses Beispiel zeigt, wie auf alle Eigenschaften eines Pointer-Ereignisses zugegriffen wird.

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

## Bestimmung des primären Pointers

In einigen Szenarien kann es mehrere Pointers geben (zum Beispiel ein Gerät mit sowohl einem Touchscreen als auch einer Maus), oder einen Pointer, der mehrere Kontaktpunkte unterstützt (zum Beispiel ein Touchscreen, der mehrfache Fingerberührungen unterstützt). Die Anwendung kann die [`isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary)-Eigenschaft verwenden, um einen Haupt-Pointer unter der Gruppe _aktiver Pointers_ für jeden Pointer-Typ zu identifizieren. Wenn eine Anwendung nur einen primären Pointer unterstützen möchte, kann sie alle Pointer-Ereignisse, die nicht primär sind, ignorieren.

Eine Maus hat nur einen Pointer, daher ist sie immer der primäre Pointer. Bei Touch-Eingabe gilt ein Pointer als primär, wenn der Nutzer den Bildschirm berührt hat, als keine anderen aktiven Berührungen vorhanden waren. Bei Stift- und Stylus-Eingabe gilt ein Pointer als primär, wenn der Nutzer den Stift zunächst auf den Bildschirm gesetzt hat, als keine anderen aktiven Stifte den Bildschirm berührten.

## Bestimmung der Button-Zustände

Einige Pointer-Geräte (wie Maus und Stift) unterstützen mehrere Buttons und die Button-Drücke können _akkordiert_ werden (d.h. ein zusätzlicher Knopf wird gedrückt, während ein anderer Knopf am Pointer-Gerät bereits gedrückt ist).

Um den Zustand der Button-Drücke zu bestimmen, verwenden Pointer-Ereignisse die `button`- und `buttons`-Eigenschaften der [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Schnittstelle (von der [`PointerEvent`](/de/docs/Web/API/PointerEvent) erbt).

Die folgende Tabelle bietet die Werte von `button` und `buttons` für die verschiedenen Zustände von Gerätetasten.

| Gerätetasten-Zustand                                                                | button | buttons |
| ------------------------------------------------------------------------------------ | ------ | ------- |
| Weder Knöpfe noch Touch-/Stiftkontakt seit dem letzten Ereignis geändert             | `-1`   | —       |
| Mausbewegung ohne gedrückte Knöpfe, Stift bewegt sich beim Schweben ohne gedrückte Knöpfe | —      | `0`     |
| Linke Maus, Touchkontakt, Stiftkontakt                                               | `0`    | `1`     |
| Mittlere Maus                                                                        | `1`    | `4`     |
| Rechte Maus, StiftlaufTasten                                                          | `2`    | `2`     |
| X1 (zurück) Maus                                                                     | `3`    | `8`     |
| X2 (vorwärts) Maus                                                                   | `4`    | `16`    |
| Stift-Radierer-Taste                                                                 | `5`    | `32`    |

> [!NOTE]
> Die `button`-Eigenschaft zeigt eine Änderung des Zustands des Knopfes an. Wie im Fall von Berührungen, wenn mehrere Ereignisse gleichzeitig stattfinden, haben alle von ihnen den gleichen Wert.

## Erfassung des Pointers

Pointer-Erfassung ermöglicht es, die Ereignisse für ein bestimmtes {{domxref("PointerEvent","Pointer-Ereignis", "", 1)}} auf ein bestimmtes Element umzuleiten, abweichend vom normalen [Treffertest](#treffertest) an der Position des Pointers. Dies kann verwendet werden, um sicherzustellen, dass ein Element weiterhin Pointer-Ereignisse erhält, selbst wenn sich der Kontakt des Pointer-Geräts von dem Element wegbewegt (zum Beispiel durch Scrollen oder Schwenken).

Pointer-Erfassung sorgt dafür, dass das Ziel alle nachfolgenden Pointer-Ereignisse wie auf das erfasste Ziel stattfindend erfassen wird. Dementsprechend werden `pointerover`, `pointerenter`, `pointerleave` und `pointerout` **nicht ausgelöst**, solange diese Erfassung gesetzt ist. Bei Touchscreen-Browsern, die [direkte Manipulation](https://w3c.github.io/pointerevents/#dfn-direct-manipulation) zulassen, erfolgt eine [implizite Pointer-Erfassung](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture) beim Element, wenn ein `pointerdown`-Ereignis ausgelöst wird. Die Erfassung kann manuell durch Aufrufen von [`element.releasePointerCapture`](/de/docs/Web/API/Element/releasePointerCapture) auf dem Ziel-Element freigegeben werden, oder sie wird automatisch nach einem `pointerup`- oder `pointercancel`-Ereignis freigegeben.

> [!NOTE]
> Wenn Sie ein Element im DOM verschieben müssen, dann sollten Sie sicherstellen, `setPointerCapture()` **nach den DOM-Bewegungen** aufzurufen, sodass `setPointerCapture()` es nicht verliert. Beispielsweise, wenn Sie `Element.append()` verwenden müssen, um ein Element woanders hin zu verschieben, sollten Sie sicherstellen, `setPointerCapture()` erst nach dem Aufruf von `Element.append()` aufzurufen.

Das folgende Beispiel zeigt, wie Pointer-Erfassung auf einem Element gesetzt wird.

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

Das folgende Beispiel zeigt das Freigeben einer Pointer-Erfassung (bei einem [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)-Ereignis tritt dies automatisch auf. Der Browser macht das automatisch, wenn ein [`pointerup`](/de/docs/Web/API/Element/pointerup_event) oder [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event) Ereignis auftritt.

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

Die {{cssxref("touch-action")}} CSS-Eigenschaft wird verwendet, um anzugeben, ob der Browser sein standardmäßiges (natürliches) Touch-Verhalten (wie Zoomen oder Schwenken) auf einen Bereich anwenden soll oder nicht. Diese Eigenschaft kann auf alle Elemente angewendet werden, außer: nicht ersetzte Inline-Elemente, Tabellenreihen, Zeilengruppen, Tabellenspalten und Spaltengruppen.

Ein Wert von `auto` bedeutet, dass der Browser frei ist, sein Standard-Touch-Verhalten (auf den angegebenen Bereich) anzuwenden und der Wert `none` deaktiviert das Standard-Touch-Verhalten des Browsers für den Bereich. Die Werte `pan-x` und `pan-y` bedeuten, dass Berührungen, die auf dem angegebenen Bereich beginnen, nur für horizontales und vertikales Scrollen gedacht sind, respektive. Der Wert `manipulation` bedeutet, dass der Browser berücksichtigen kann, dass Berührungen, die auf dem Element beginnen, nur für Scrollen und Zoomen gedacht sind.

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

Im folgenden Beispiel wird, wenn das `target`-Element berührt wird, ausschließlich in der horizontalen Richtung geschwenkt.

```css
#target {
  touch-action: pan-x;
}
```

## Kompatibilität mit Mausereignissen

Auch wenn die Pointer-Event-Schnittstellen es Anwendungen ermöglichen, erweiterte Benutzererfahrungen auf Pointer-fähigen Geräten zu schaffen, ist die Realität, dass der überwiegende Teil der heutigen Webinhalte nur dazu ausgelegt ist, mit Maus-Eingaben zu funktionieren. Folglich muss ein Browser, auch wenn er Pointer-Ereignisse unterstützt, weiterhin Mausereignisse verarbeiten, damit Inhalte, die nur Maus-basierte Eingaben annehmen, ohne direkte Änderungen funktionieren. Idealerweise muss eine Pointer-fähige Anwendung keine Maus-Eingaben explizit handhaben. Da der Browser jedoch Mausereignisse verarbeiten muss, könnten einige Kompatibilitätsprobleme auftreten, die behandelt werden müssen. Dieser Abschnitt enthält Informationen über Pointer-Event- und Maus-Event-Interaktionen und die Auswirkungen für Anwendungsentwickler.

Der Browser _kann generische Pointer-Eingaben zu Mausereignissen für die Kompatibilität mit mausbasierter Inhalte abbilden_. Diese Abbildung von Ereignissen wird als _Kompatibilitäts-Mausereignisse_ bezeichnet. Autoren können die Erzeugung bestimmter Kompatibilitäts-Mausereignisse verhindern, indem sie das Pointerdown-Ereignis abbrechen, jedoch beachten Sie:

- Mausereignisse können nur verhindert werden, wenn der Pointer gedrückt ist.
- Schwebende Pointer (z.B. eine Maus mit keinen Knöpfen gedrückt) können das Verhindern ihrer Mausereignisse nicht haben.
- Die `mouseover`, `mouseout`, `mouseenter` und `mouseleave` Ereignisse werden nie verhindert (auch nicht wenn der Pointer gedrückt ist).

## Best Practices

Hier sind einige _Best Practices_, die bei der Verwendung von Pointer-Ereignissen zu berücksichtigen sind:

- Minimieren Sie die Menge der Arbeit, die in Ereignis-Handlern ausgeführt wird.
- Fügen Sie die Ereignis-Handler einem spezifischen Zielfragment hinzu (anstatt dem gesamten Dokument oder Knoten weiter oben im Dokumentenbaum).
- Das Zielfragment (der Knoten) sollte groß genug sein, um die größte Kontaktfläche (typischerweise eine Fingerberührung) unterzubringen. Wenn der Zielbereich zu klein ist, könnte das Berühren dazu führen, andere Ereignisse für benachbarte Elemente auszulösen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Einige zusätzliche Werte wurden für die CSS {{cssxref("touch-action")}}-Eigenschaft als Teil der [Pointer Events](https://w3c.github.io/pointerevents/)-Spezifikation definiert, aber derzeit haben diese Werte begrenzte Implementierungsunterstützung.

## Siehe auch

### Demos und Beispiele

- [Touch-/Pointer-Tests und Demos (von Patrick H. Lauke)](https://patrickhlauke.github.io/touch/)

### Gemeinschaft

- [Pointer Events Arbeitsgruppe](https://github.com/w3c/pointerevents)
- [Mail-Liste](https://lists.w3.org/Archives/Public/public-pointer-events/)
- [W3C #pointerevents IRC-Kanal](irc://irc.w3.org:6667/)

### Verwandte Themen und Ressourcen

- [Touch Events Standard](https://www.w3.org/TR/touch-events/)
