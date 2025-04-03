---
title: Pointer events
slug: Web/API/Pointer_events
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Pointer Events")}}

Vieler heutiger Webinhalt geht davon aus, dass das Zeigegerät des Benutzers eine Maus sein wird. Da jedoch viele Geräte andere Arten von Zeigereingabegeräten wie Stift/Stylus und Touch-Oberflächen unterstützen, sind Erweiterungen der vorhandenen Zeigegeräte-Ereignismodelle erforderlich. _[Pointer events](#zeigerereignis)_ adressieren dieses Bedürfnis.

Zeigerereignisse sind DOM-Ereignisse, die für ein Zeigegerät ausgelöst werden. Sie sind darauf ausgelegt, ein einzelnes DOM-Ereignismodell zu schaffen, um Zeigereingabegeräte wie Maus, Stift/Stylus oder Touch (wie zum Beispiel ein oder mehrere Finger) zu handhaben.

Der _[Zeiger](#zeiger)_ ist ein hardware-unabhängiges Gerät, das auf einen bestimmten Satz von Bildschirmkoordinaten abzielen kann. Ein einziges Ereignismodell für Zeiger zu haben, kann die Erstellung von Websites und Anwendungen vereinfachen und ein gutes Benutzererlebnis bieten, unabhängig von der Hardware des Benutzers. Für Szenarien, bei denen eine gerätespezifische Behandlung gewünscht ist, definiert Zeigerereignisse eine [`pointerType`](/de/docs/Web/API/PointerEvent/pointerType) Eigenschaft, um den Gerätetyp zu überprüfen, der das Ereignis erzeugt hat.

Die zum Handhaben der allgemeinen Zeigereingabe benötigten Ereignisse entsprechen den [Mausereignissen](/de/docs/Web/API/MouseEvent) (`mousedown`/`pointerdown`, `mousemove`/`pointermove`, usw.). Folglich sind Zeigerereignistypen absichtlich den Mausereignistypen ähnlich.

Ein Zeigerereignis enthält die üblichen Eigenschaften, die in Mausereignissen vorhanden sind (Clientkoordinaten, Zielelement, Tastenstatus usw.) sowie neue Eigenschaften für andere Eingabearten: Druck, Kontaktgeometrie, Neigung usw. Tatsächlich erbt das [`PointerEvent`](/de/docs/Web/API/PointerEvent) Interface alle Eigenschaften des [`MouseEvent`](/de/docs/Web/API/MouseEvent), was so die Migration von Inhalten von Mausereignissen zu Zeigerereignissen erleichtert.

## Terminologie

### aktiver Tastenstatus

Der Zustand, wenn ein _[Zeiger](#zeiger)_ einen Nicht-Null-Wert für die `buttons` Eigenschaft hat. Zum Beispiel im Fall eines Stiftes, wenn der Stift physischen Kontakt mit dem Digitalisierer hat oder mindestens eine Taste gedrückt ist, während der Stift schwebt.

### aktiver Zeiger

Jedes _[Zeiger](#zeiger)_ Eingabegerät, das Ereignisse auslösen kann. Ein Zeiger wird als aktiv betrachtet, wenn er weiterhin Ereignisse auslösen kann. Zum Beispiel wird ein Stift, der sich im Abwärtszustand befindet, als aktiv betrachtet, da er zusätzliche Ereignisse auslösen kann, wenn der Stift angehoben oder bewegt wird.

### Digitalisierer

Ein Erfassungsgerät mit einer Oberfläche, die Kontakt erkennen kann. Am häufigsten handelt es sich um einen Touch-fähigen Bildschirm, der Eingaben von einem Eingabegerät wie einem Stift, Stylus oder Finger erfassen kann. Einige Erfassungsgeräte können die Nähe des Eingabegeräts erkennen, und der Zustand wird als Schweben in der Nähe der Maus ausgedrückt.

### Treffertest

Der Prozess, den der Browser verwendet, um ein Zielelement für ein Zeigerereignis zu bestimmen. Typischerweise wird dies bestimmt, indem der Standort des Zeigers und das visuelle Layout von Elementen in einem Dokument auf Bildschirmmedien berücksichtigt werden.

### Zeiger

Eine hardware-unabhängige Darstellung von Eingabegeräten, die auf eine spezifische Koordinate (oder einen Satz von Koordinaten) auf einem Bildschirm abzielen können. Beispiele für _Zeiger_ Eingabegeräte sind Maus, Stift/Stylus und Touch-Kontakte.

### Zeigererfassung

Die Zeigererfassung erlaubt es, die Ereignisse für einen Zeiger auf ein bestimmtes Element umzuverteilen, anstatt auf das normale Ergebnis des Treffertests des Zeigerstandorts. Sehen Sie sich [Den Zeiger erfassen](#den_zeiger_erfassen) für ein Beispiel an.

> **Anmerkung:** _Zeigererfassung_ ist etwas anderes als [_Zeigersperre_](/de/docs/Web/API/Pointer_Lock_API), die physisch verhindert, dass der Zeiger einen Bereich verlässt.

### Zeigerereignis

Ein DOM [`Ereignis`](/de/docs/Web/API/PointerEvent), das für einen _[Zeiger](#zeiger)_ ausgelöst wird.

## Interfaces

Das primäre Interface ist das [`PointerEvent`](/de/docs/Web/API/PointerEvent) Interface, welches einen [`Konstruktor`](/de/docs/Web/API/PointerEvent/PointerEvent) plus mehrere Ereignistypen und zugehörige globale Ereignishandler hat.

Der Standard enthält außerdem einige Erweiterungen für die [`Element`](/de/docs/Web/API/Element) und [`Navigator`](/de/docs/Web/API/Navigator) Interfaces.

Die folgenden Unterabschnitte enthalten kurze Beschreibungen jedes Interfaces und jeder Eigenschaft.

### PointerEvent Interface

Das [`PointerEvent`](/de/docs/Web/API/PointerEvent) Interface erweitert das [`MouseEvent`](/de/docs/Web/API/MouseEvent) Interface und hat die folgenden Eigenschaften.

- [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}}
  - : Stellt den Winkel zwischen der Achse des Wandlers (Ein Zeiger oder Stylus) und der X-Y-Ebene eines Gerätescreens dar.
- [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}}
  - : Stellt den Winkel zwischen der Y-Z-Ebene und der Ebene dar, die sowohl die Achse des Wandlers (Ein Zeiger oder Stylus) als auch die Y-Achse enthält.
- [`PointerEvent.persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine eindeutige Kennung für das Zeigegerät, das das `PointerEvent` erzeugt hat.
- [`pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- [`width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Ausdehnung auf der X-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Ausdehnung auf der Y-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck der Zeigereingabe im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck darstellen, den die Hardware erkennen kann.
- [`tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck der Zeigereingabe (auch als Barrel-Druck oder Zylinderstress bekannt) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position der Steuerung darstellt.
- [`tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der plane Winkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. Stift-Stylus) als auch die Y-Achse enthält.
- [`tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der plane Winkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X-Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. Stift-Stylus) als auch die X-Achse enthält.
- [`twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die im Uhrzeigersinn gerichtete Rotation des Zeigers (z.B. Stift-Stylus) um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Touch, etc.).
- [`isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

### Ereignistypen und Globale Ereignishandler

Zeigerereignisse haben zehn Ereignistypen, von denen sieben ähnliche Semantik wie ihre Mausereignisgegenstücke haben (`down`, `up`, `move`, `over`, `out`, `enter` und `leave`).

Unten ist eine kurze Beschreibung jedes Ereignistyps.

| Ereignis                                                                                      | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`pointerover`](/de/docs/Web/API/Element/pointerover_event)                                   | Wird ausgelöst, wenn ein Zeiger in die [Treffertest](#treffertest) Grenzen eines Elements bewegt wird.                                                                                                                                                                                                                                                                                                                       |
| [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)                                 | Wird ausgelöst, wenn ein Zeiger in die [Treffertest](#treffertest) Grenzen eines Elements oder eines seiner Nachkommen bewegt wird, auch als Ergebnis eines `pointerdown` Ereignisses von einem Gerät, das das Schweben nicht unterstützt (siehe `pointerdown`).                                                                                                                                                             |
| [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)                                   | Wird ausgelöst, wenn ein Zeiger _aktiften Tastenstatus_ erreicht.                                                                                                                                                                                                                                                                                                                                                            |
| [`pointermove`](/de/docs/Web/API/Element/pointermove_event)                                   | Wird ausgelöst, wenn sich die Koordinaten eines Zeigers ändern. Dieses Ereignis wird auch verwendet, wenn eine Änderung des Zeigerzustands nicht von anderen Ereignissen gemeldet werden kann.                                                                                                                                                                                                                               |
| [`pointerup`](/de/docs/Web/API/Element/pointerup_event)                                       | Wird ausgelöst, wenn ein Zeiger nicht mehr im _aktiven Tastenstatus_ ist.                                                                                                                                                                                                                                                                                                                                                    |
| [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)                               | Ein Browser löst dieses Ereignis aus, wenn er folgert, dass der Zeiger keine Ereignisse mehr erzeugen kann (zum Beispiel, wenn das zugehörige Gerät deaktiviert ist, oder der Browser entschieden hat, die Interaktion als Schwenken/Zoomen zu interpretieren). Informationen dazu, wie dieses Verhalten gesteuert wird, finden sich im [Abschnitt zur `touch-action` CSS-Eigenschaft](#touch-action_css-eigenschaft) unten. |
| [`pointerout`](/de/docs/Web/API/Element/pointerout_event)                                     | Wird aus verschiedenen Gründen ausgelöst, darunter: der Zeiger wird aus den [Treffertest](#treffertest) Grenzen eines Elements bewegt; das `pointerup` Ereignis für ein Gerät, das das Schweben nicht unterstützt, wird ausgelöst (siehe `pointerup`); nach dem Auslösen des `pointercancel` Ereignisses (siehe `pointercancel`); wenn ein Stift-Stylus den vom Digitalisierer erkennbaren Schweberbereich verlässt.         |
| [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)                                 | Wird ausgelöst, wenn ein Zeiger aus den [Treffertest](#treffertest) Grenzen eines Elements bewegt wird. Bei Pen-Geräten wird dieses Ereignis ausgelöst, wenn der Stylus den vom Digitalisierer erkennbaren Schweberbereich verlässt.                                                                                                                                                                                         |
| [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) {{experimental_inline}} | Wird ausgelöst, wenn ein Zeiger Eigenschaften ändert, die keine `pointerdown` oder `pointerup` Ereignisse auslösen.                                                                                                                                                                                                                                                                                                          |
| [`gotpointercapture`](/de/docs/Web/API/Element/gotpointercapture_event)                       | Wird ausgelöst, wenn ein Element Zeigererfassung erhält.                                                                                                                                                                                                                                                                                                                                                                     |
| [`lostpointercapture`](/de/docs/Web/API/Element/lostpointercapture_event)                     | Wird ausgelöst, nachdem die Zeigererfassung für einen Zeiger freigegeben wurde.                                                                                                                                                                                                                                                                                                                                              |

### Elementerweiterungen

Es gibt drei Erweiterungen des [`Element`](/de/docs/Web/API/Element) Interfaces:

- [`hasPointerCapture()`](/de/docs/Web/API/Element/hasPointerCapture)
  - : Zeigt an, ob das Element, auf dem die Methode aufgerufen wird, die Zeigererfassung für den durch die Angabe identifizierten Zeiger hat.
- [`releasePointerCapture()`](/de/docs/Web/API/Element/releasePointerCapture)
  - : Gibt (stoppt) die _Zeigererfassung_ frei, die zuvor für ein spezifisches Zeigerereignis festgelegt wurde.
- [`setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture)
  - : Bezeichnet ein bestimmtes Element als _Erfassungsziel_ für zukünftige Zeigerereignisse.

### Navigator-Erweiterung

Die [`Navigator.maxTouchPoints`](/de/docs/Web/API/Navigator/maxTouchPoints) Eigenschaft wird verwendet, um die maximale Anzahl gleichzeitiger Berührungspunkte zu bestimmen, die zu einem beliebigen Zeitpunkt unterstützt wird.

## Beispiele

Dieser Abschnitt enthält Beispiele für die grundlegende Verwendung der Zeigerereignis-Interfaces.

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

Dieses Beispiel zeigt den Zugriff auf alle Eigenschaften eines Zeigerereignisses.

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

In einigen Szenarien kann es mehrere Zeiger geben (z.B. ein Gerät mit einem Touchscreen und einer Maus), oder ein Zeiger, der mehrere Kontaktpunkte unterstützt (z.B. ein Touchscreen, der mehrere Fingerberührungen unterstützt). Die Anwendung kann die [`isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) Eigenschaft verwenden, um einen Hauptzeiger unter der Menge der _aktiven Zeiger_ für jeden Zeigertyp zu identifizieren. Wenn eine Anwendung nur einen primären Zeiger unterstützen möchte, kann sie alle Zeigerereignisse ignorieren, die nicht primär sind.

Eine Maus hat nur einen Zeiger, daher wird es immer der primäre Zeiger sein. Für Berührungseingaben wird ein Zeiger als primär angesehen, wenn der Benutzer den Bildschirm berührte, als es keine anderen aktiven Berührungen gab. Für Stift- und Stylus-Eingaben wird ein Zeiger als primär angesehen, wenn der Benutzerstift den Bildschirm berührt hat, als es keine anderen aktiven Stifte gab.

## Bestimmen von Tastenstatus

Einige Zeigegeräte (wie Maus und Stift) unterstützen mehrere Tasten, und die Tastenpressen können _akkordiert_ werden (d.h. durch Drücken einer zusätzlichen Taste, während eine andere Taste am Zeigegerät bereits gedrückt ist).

Um den Status der Tastenpressen zu bestimmen, verwenden Zeigerereignisse die [`button`](/de/docs/Web/API/MouseEvent/button) und [`buttons`](/de/docs/Web/API/MouseEvent/buttons) Eigenschaften der [`MouseEvent`](/de/docs/Web/API/MouseEvent) Interface (von denen [`PointerEvent`](/de/docs/Web/API/PointerEvent) erbt).

Die folgende Tabelle zeigt die Werte von `button` und `buttons` für die verschiedenen Gerätezustände.

| Gerätezustand                                                                           | button | buttons |
| --------------------------------------------------------------------------------------- | ------ | ------- |
| Weder Tasten noch Touch/Stiftkontakt haben sich seit dem letzten Ereignis geändert      | `-1`   | —       |
| Mausbewegung ohne gedrückte Tasten, Stift wird im Schweben ohne gedrückte Tasten bewegt | —      | `0`     |
| Linke Maus, Touch-Kontakt, Kontakt mit Stift                                            | `0`    | `1`     |
| Mittlere Maus                                                                           | `1`    | `4`     |
| Rechte Maus, Stift mit Fass-Taste                                                       | `2`    | `2`     |
| X1 (zurück) Maus                                                                        | `3`    | `8`     |
| X2 (vorwärts) Maus                                                                      | `4`    | `16`    |
| Stift-Radiergummi-Taste                                                                 | `5`    | `32`    |

> [!NOTE]
> Die `button` Eigenschaft zeigt eine Änderung im Zustand der Taste an. Jedoch, wie im Fall der Berührung, wenn mehrere Ereignisse gleichzeitig auftreten, haben alle dasselbe Wert.

## Den Zeiger erfassen

Die Zeigererfassung ermöglicht es, dass Ereignisse für ein bestimmtes [Zeigerereignis](/de/docs/Web/API/PointerEvent) auf ein bestimmtes Element umgeleitet werden, anstatt auf das normale [Treffertest](#treffertest) an der Position des Zeigers. Dies kann verwendet werden, um sicherzustellen, dass ein Element weiterhin Zeigerereignisse erhält, auch wenn der Kontakt des Zeigegeräts das Element verlässt (z.B. durch Scrollen oder Verschieben).

Die Zeigererfassung lässt das Ziel alle nachfolgenden Zeigerereignisse erfassen, als ob sie über dem erfassenden Ziel stattfinden würden. Dementsprechend werden `pointerover`, `pointerenter`, `pointerleave` und `pointerout` **nicht ausgelöst**, solange diese Erfassung aktiv ist.
Für touch-fähige Browser, die [direkte Manipulation](https://w3c.github.io/pointerevents/#dfn-direct-manipulation) erlauben, wird eine [implizite Zeigererfassung](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture) auf dem Element ausgeführt, wenn ein `pointerdown` Ereignis auftritt. Die Erfassung kann manuell durch Aufrufen von [`element.releasePointerCapture`](/de/docs/Web/API/Element/releasePointerCapture) auf dem Zielelement aufgehoben werden, oder wird nach einem `pointerup` oder `pointercancel` Ereignis automatisch aufgehoben.

> [!NOTE]
> Wenn Sie ein Element im DOM verschieben müssen, stellen Sie sicher, dass Sie `setPointerCapture()` **nach den DOM-Bewegungen** aufrufen, damit `setPointerCapture()` es nicht aus den Augen verliert. Zum Beispiel, wenn Sie `Element.append()` verwenden müssen, um ein Element an eine andere Stelle zu verschieben, stellen Sie sicher, dass Sie `setPointerCapture()` darauf erst nach dem Aufruf von `Element.append()` aufrufen.

Das folgende Beispiel zeigt, wie die Zeigererfassung auf einem Element festgelegt wird.

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

Das folgende Beispiel zeigt, wie eine Zeigererfassung freigegeben wird (wenn ein [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event) Ereignis eintritt). Der Browser macht dies automatisch, wenn ein [`pointerup`](/de/docs/Web/API/Element/pointerup_event) oder [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event) Ereignis eintritt.

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

Die {{cssxref("touch-action")}} CSS-Eigenschaft wird verwendet, um festzulegen, ob der Browser sein Standardverhalten (_native_) für Touch-Anwendungen (wie Zoomen oder Scrollen) auf eine Region anwenden soll oder nicht. Diese Eigenschaft kann auf alle Elemente angewendet werden außer: nicht-ersetzenbare Inline-Elemente, Tabellzeilen, Zeilengruppen, Tabellenspalten und Spaltengruppen.

Ein Wert von `auto` bedeutet, dass der Browser sein Standard-Touch-Verhalten auf die spezifizierte Region anwenden kann und der Wert `none` deaktiviert das Standard-Touch-Verhalten des Browsers für die Region. Die Werte `pan-x` und `pan-y` bedeuten, dass Berührungen, die auf der spezifizierten Region beginnen, nur für horizontale beziehungsweise vertikale Bildläufe sind. Der Wert `manipulation` bedeutet, dass der Browser Berührungen, die auf dem Element beginnen, nur für Bildläufe und Zooms in Betracht ziehen kann.

Im folgenden Beispiel wird das Standard-Touch-Verhalten des Browsers für das `div` Element deaktiviert.

```html
<html lang="en">
  <body>
    <div style="touch-action:none;">Can't touch this…</div>
  </body>
</html>
```

Im folgenden Beispiel wird das Standard-Touch-Verhalten für einige `button` Elemente deaktiviert.

```css
button#tiny {
  touch-action: none;
}
```

Im folgenden Beispiel wird, wenn das `target` Element berührt wird, nur in horizontaler Richtung gescrollt.

```css
#target {
  touch-action: pan-x;
}
```

## Kompatibilität mit Mausereignissen

Obwohl die Zeigerereignis-Interfaces Anwendungen ermöglichen, verbesserte Benutzererfahrungen auf zeigerfähigen Geräten zu erzeugen, ist die Realität, dass der Großteil der heutigen Webinhalte so entworfen ist, dass er nur mit Mauseingaben funktioniert. Folglich muss der Browser auch dann Mausereignisse verarbeiten, wenn er Zeigerereignisse unterstützt, damit Inhalte, die von Maus-Only-Eingaben ausgehen, ohne direkte Änderungen funktionieren. Idealerweise benötigt eine zeigerfähige Anwendung keine explizite Handhabung von Mauseingaben. Da der Browser Mausereignisse verarbeiten muss, können jedoch einige Kompatibilitätsprobleme auftreten, die behandelt werden müssen. Dieser Abschnitt enthält Informationen über die Interaktion zwischen Zeiger- und Mausereignissen und die Konsequenzen für Anwendungsentwickler.

Der Browser _kann generische Zeigereingaben in Mausereignisse umwandeln, um die Kompatibilität mit mausbasierenden Inhalten zu gewährleisten_. Diese Umwandlung von Ereignissen wird als _Kompatibilitäts-Mausereignisse_ bezeichnet. Autoren können die Erstellung bestimmter Kompatibilitäts-Mausereignisse verhindern, indem sie das pointerdown-Ereignis stornieren, aber beachten Sie:

- Mausereignisse können nur verhindert werden, solange der Zeiger nach unten gerichtet ist.
- Schwebende Zeiger (z.B. eine Maus ohne gedrückte Tasten) können ihre Mausereignisse nicht verhindern.
- Die `mouseover`, `mouseout`, `mouseenter` und `mouseleave` Ereignisse werden niemals verhindert (auch wenn der Zeiger nach unten gerichtet ist).

## Best Practices

Hier sind einige _Best Practices_ zu beachten, wenn Sie Zeigerereignisse verwenden:

- Minimieren Sie die Menge der Arbeit, die in Ereignishandlern durchgeführt wird.
- Fügen Sie die Ereignishandler einem spezifischen Zielelement hinzu (anstatt dem gesamten Dokument oder Knoten höher im Dokumentbaum).
- Das Zielelement (Knoten) sollte groß genug sein, um die größte Kontaktoberfläche (typischerweise eine Fingerberührung) unterzubringen. Wenn das Zielgebiet zu klein ist, könnte das Berühren dazu führen, dass andere Ereignisse für angrenzende Elemente ausgelöst werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Einige zusätzliche Werte wurden für die CSS {{cssxref("touch-action")}} Eigenschaft als Teil der [Pointer Events](https://w3c.github.io/pointerevents/) Spezifikation definiert, aber derzeit haben diese Werte eine begrenzte Implementierungsunterstützung.

## Siehe auch

### Demos und Beispiele

- [Touch/pointer Tests und Demos (von Patrick H. Lauke)](https://patrickhlauke.github.io/touch/)

### Community

- [Pointer Events Arbeitsgruppe](https://github.com/w3c/pointerevents)
- [Mail-Liste](https://lists.w3.org/Archives/Public/public-pointer-events/)
- [W3C #pointerevents IRC-Kanal](irc://irc.w3.org:6667/)

### Verwandte Themen und Ressourcen

- [Touch Events Standard](https://www.w3.org/TR/touch-events/)
