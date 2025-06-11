---
title: Pointer events
slug: Web/API/Pointer_events
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{DefaultAPISidebar("Pointer Events")}}

Vieler heutiger Web-Inhalte gehen davon aus, dass das Zeigegerät des Benutzers eine Maus ist. Da jedoch viele Geräte andere Arten von Zeige-Eingabegeräten unterstützen, wie z.B. Stift/Stylus und Touch-Oberflächen, sind Erweiterungen der bestehenden Zeigegeräte-Eventmodelle notwendig. _[Pointer-Ereignisse](#pointer-ereignis)_ adressieren dieses Bedürfnis.

Pointer-Ereignisse sind DOM-Ereignisse, die für ein Zeigegerät ausgelöst werden. Sie sind darauf ausgelegt, ein einheitliches DOM-Ereignismodell zu schaffen, um Zeige-Eingabegeräte wie Maus, Stift/Stylus oder Touch zu handhaben (z.B. ein oder mehrere Finger).

Der _[Pointer](#zeiger)_ ist ein hardware-unabhängiges Gerät, das auf eine bestimmte Menge von Bildschirmkoordinaten abzielen kann. Ein einheitliches Ereignismodell für Pointer kann die Erstellung von Websites und Anwendungen vereinfachen und ein gutes Benutzererlebnis unabhängig von der Hardware des Benutzers bieten. Für Szenarien, in denen eine gerätespezifische Behandlung gewünscht ist, definiert Pointer-Ereignisse eine [`pointerType`](/de/docs/Web/API/PointerEvent/pointerType) Eigenschaft, um den Gerätetyp zu überprüfen, der das Ereignis erzeugt hat.

Die zum Umgang mit generischen Zeigereingaben erforderlichen Ereignisse sind analog zu den [Mausereignissen](/de/docs/Web/API/MouseEvent) (`mousedown`/`pointerdown`, `mousemove`/`pointermove`, etc.). Folglich sind Pointer-Ereignisse absichtlich ähnlich zu Mausereignissen.

Zusätzlich enthält ein Pointer-Ereignis die üblichen Eigenschaften, die in Mausereignissen enthalten sind (Clientkoordinaten, Zielelement, Knopfzustände, etc.) sowie neue Eigenschaften für andere Formen von Eingaben: Druck, Kontaktgeometrie, Neigung, etc. Tatsächlich erbt das [`PointerEvent`](/de/docs/Web/API/PointerEvent) Interface alle Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent), was die Migration von Inhalten von Mausereignissen zu Pointer-Ereignissen erleichtert.

## Terminologie

### Aktive Knopfzustände

Der Zustand, wenn ein _[Pointer](#zeiger)_ einen ungleich null Wert für die `buttons` Eigenschaft hat. Zum Beispiel, im Fall eines Stiftes, wenn der Stift physischen Kontakt mit dem Digitalisierer hat oder mindestens ein Knopf gedrückt wird, während er schwebt.

### Aktiver Zeiger

Jedes _[Pointer](#zeiger)_ Eingabegerät, das Ereignisse erzeugen kann. Ein Zeiger wird als aktiv betrachtet, wenn er weiterhin weitere Ereignisse erzeugen kann. Zum Beispiel wird ein Stift, der in einem gedrückten Zustand ist, als aktiv betrachtet, weil er zusätzliche Ereignisse erzeugen kann, wenn der Stift angehoben oder bewegt wird.

### Digitalisierer

Ein Sensorgerät mit einer Oberfläche, die Kontakt erkennen kann. Meistens ist das Sensorgerät ein berührungsempfindlicher Bildschirm, der Eingaben von einem Eingabegerät wie einem Stift, Stylus oder Finger erfassen kann. Einige Sensorgeräte können die Nähe des Eingabegeräts erkennen, und der Zustand wird als Schwebeposition im Vergleich zur Maus ausgedrückt.

### Hit-Test

Der Prozess, den der Browser verwendet, um ein Zielelement für ein Pointer-Ereignis zu bestimmen. Typischerweise wird dies bestimmt, indem die Position des Zeigers und die visuelle Anordnung der Elemente in einem Dokument auf einem Bildschirmmedium berücksichtigt werden.

### Zeiger

Eine hardware-unabhängige Darstellung von Eingabegeräten, die auf eine bestimmte Koordinate (oder Koordinatensätze) auf einem Bildschirm abzielen können. Beispiele für _Pointer_-Eingabegeräte sind Maus, Stift/Stylus und Berührungskontakte.

### Zeigererfassung

Die Zeigererfassung ermöglicht es, dass die Ereignisse für einen Zeiger an ein bestimmtes Element weitergeleitet werden, das nicht das normale Ergebnis des Treffer-Tests an der Position des Zeigers ist. Siehe [Erfassen des Zeigers](#erfassen_des_zeigers) für ein Beispiel.

> **Note:** _Zeigererfassung_ unterscheidet sich von [_Pointer Lock_](/de/docs/Web/API/Pointer_Lock_API), das physisch verhindert, dass der Zeiger einen Bereich verlässt.

### Pointer-Ereignis

Ein DOM-[`event`](/de/docs/Web/API/PointerEvent), das für einen _[Pointer](#zeiger)_ ausgelöst wird.

## Schnittstellen

Die Hauptschnittstelle ist die [`PointerEvent`](/de/docs/Web/API/PointerEvent) Schnittstelle, die einen [Konstruktor](/de/docs/Web/API/PointerEvent/PointerEvent) sowie verschiedene Ereignistypen und zugehörige globale Ereignishandler hat.

Der Standard beinhaltet auch einige Erweiterungen der [`Element`](/de/docs/Web/API/Element) und [`Navigator`](/de/docs/Web/API/Navigator) Schnittstellen.

Die folgenden Unterabschnitte enthalten kurze Beschreibungen jeder Schnittstelle und Eigenschaft.

### PointerEvent-Schnittstelle

Die [`PointerEvent`](/de/docs/Web/API/PointerEvent) Schnittstelle erweitert die [`MouseEvent`](/de/docs/Web/API/MouseEvent) Schnittstelle und hat die folgenden Eigenschaften.

- [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}}
  - : Stellt den Winkel zwischen der Achse eines Wandlers (eines Zeigers oder Stylus) und der X-Y-Ebene eines Gerätescreens dar.
- [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}}
  - : Stellt den Winkel zwischen der Y-Z-Ebene und der Ebene dar, die sowohl die Achse des Wandlers (eines Zeigers oder Stylus) als auch die Y-Achse enthält.
- [`PointerEvent.persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine eindeutige Kennung für das Zeigegerät, das das `PointerEvent` generiert.
- [`pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- [`width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Größe auf der X-Achse) in CSS-Pixeln der Kontaktgeometrie des Zeigers.
- [`height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : die Höhe (Größe auf der Y-Achse) in CSS-Pixeln der Kontaktgeometrie des Zeigers.
- [`pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : der normalisierte Druck der Zeigereingabe im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen bzw. maximalen Druck darstellen, den die Hardware erkennen kann.
- [`tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck der Zeigereingabe (auch bekannt als Zylinderdruck oder Zylinderstress) im Bereich `-1` bis `1`, wobei `0` die neutrale Position des Steuerungselements ist.
- [`tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Plane-Winkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. eines Stiftes) als auch die Y-Achse enthält.
- [`tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : der Plane-Winkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X-Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. eines Stiftes) als auch die X-Achse enthält.
- [`twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die im Uhrzeigersinn erfolgende Drehung des Zeigers (z.B. eines Stiftes) um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Touch, etc.).
- [`isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

### Ereignistypen und Globale Ereignishandler

Pointer-Ereignisse haben zehn Ereignistypen, von denen sieben ähnliche Semantiken wie ihre Mausereignis-Gegenstücke haben (`down`, `up`, `move`, `over`, `out`, `enter` und `leave`).

Im Folgenden finden Sie eine kurze Beschreibung jedes Ereignistyps.

| Ereignis                                                                                      | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`pointerover`](/de/docs/Web/API/Element/pointerover_event)                                   | Wird ausgelöst, wenn ein Zeiger in die [Hit-Test](#hit-test)-Grenzen eines Elements bewegt wird.                                                                                                                                                                                                                                                                                                                               |
| [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)                                 | Wird ausgelöst, wenn ein Zeiger in die [Hit-Test](#hit-test)-Grenzen eines Elements oder eines seiner Nachkommen bewegt wird, einschließlich als Ergebnis eines `pointerdown`-Ereignisses von einem Gerät, das Schwebeposition nicht unterstützt (siehe `pointerdown`).                                                                                                                                                        |
| [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)                                   | Wird ausgelöst, wenn ein Zeiger in den _aktiven Knopfzustand_ wechselt.                                                                                                                                                                                                                                                                                                                                                        |
| [`pointermove`](/de/docs/Web/API/Element/pointermove_event)                                   | Wird ausgelöst, wenn ein Zeiger die Koordinaten wechselt. Dieses Ereignis wird auch verwendet, wenn die Änderung des Zeigerzustands nicht durch andere Ereignisse gemeldet werden kann.                                                                                                                                                                                                                                        |
| [`pointerup`](/de/docs/Web/API/Element/pointerup_event)                                       | Wird ausgelöst, wenn ein Zeiger nicht länger im _aktiven Knopfzustand_ ist.                                                                                                                                                                                                                                                                                                                                                    |
| [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)                               | Ein Browser löst dieses Ereignis aus, wenn er zu dem Schluss kommt, dass der Zeiger keine weiteren Ereignisse mehr erzeugen kann (zum Beispiel, wenn das betreffende Gerät deaktiviert wird oder der Browser entscheidet, die Interaktion als Pan/Zoom zu interpretieren). Weitere Informationen dazu, wie Sie dieses Verhalten kontrollieren, finden Sie im untenstehenden Abschnitt über die `touch-action`-CSS-Eigenschaft. |
| [`pointerout`](/de/docs/Web/API/Element/pointerout_event)                                     | Wird aus mehreren Gründen ausgelöst, einschließlich: Der Zeiger wird aus den [Hit-Test](#hit-test)-Grenzen eines Elements bewegt; das `pointerup`-Ereignis wird für ein Gerät ausgelöst, das Schwebeposition nicht unterstützt (siehe `pointerup`); nachdem das `pointercancel`-Ereignis ausgelöst wurde (siehe `pointercancel`); wenn ein Pen-Stift den Hoverbereich verlässt, den der Digitalisierer erkennen kann.          |
| [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)                                 | Wird ausgelöst, wenn ein Zeiger aus den [Hit-Test](#hit-test)-Grenzen eines Elements bewegt wird. Für Stiftgeräte wird dieses Ereignis ausgelöst, wenn der Stift den Hoverbereich verlässt, den der Digitalisierer erkennen kann.                                                                                                                                                                                              |
| [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) {{experimental_inline}} | Wird ausgelöst, wenn ein Zeiger Eigenschaften ändert, die kein `pointerdown` oder `pointerup`-Ereignis auslösen.                                                                                                                                                                                                                                                                                                               |
| [`gotpointercapture`](/de/docs/Web/API/Element/gotpointercapture_event)                       | Wird ausgelöst, wenn ein Element die Zeigererfassung erhält.                                                                                                                                                                                                                                                                                                                                                                   |
| [`lostpointercapture`](/de/docs/Web/API/Element/lostpointercapture_event)                     | Wird ausgelöst, nachdem die Zeigererfassung für einen Zeiger freigegeben wurde.                                                                                                                                                                                                                                                                                                                                                |

### Element-Erweiterungen

Es gibt drei Erweiterungen der [`Element`](/de/docs/Web/API/Element) Schnittstelle:

- [`hasPointerCapture()`](/de/docs/Web/API/Element/hasPointerCapture)
  - : Gibt an, ob das Element, auf dem es aufgerufen wird, die Zeigererfassung für den durch die gegebene Zeiger-ID identifizierten Zeiger hat.
- [`releasePointerCapture()`](/de/docs/Web/API/Element/releasePointerCapture)
  - : Gibt die zuvor für ein bestimmtes Pointer-Ereignis gesetzte _Zeigererfassung_ frei (stoppt sie).
- [`setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture)
  - : Designiert ein bestimmtes Element als _Erfassungsziel_ für zukünftige Zeigerereignisse.

### Navigator-Erweiterung

Die Eigenschaft [`Navigator.maxTouchPoints`](/de/docs/Web/API/Navigator/maxTouchPoints) wird verwendet, um die maximale Anzahl gleichzeitiger Berührungspunkte zu bestimmen, die zu einem bestimmten Zeitpunkt unterstützt werden.

## Beispiele

Dieser Abschnitt enthält Beispiele für die grundlegende Nutzung der Pointer-Ereignis-Schnittstellen.

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

## Bestimmung des Primärzeigers

In einigen Szenarien gibt es möglicherweise mehrere Zeiger (z. B. ein Gerät mit einem Touchscreen und einer Maus) oder einen Zeiger, der mehrere Kontaktpunkte unterstützt (z. B. ein Touchscreen, der mehrere Fingerberührungen unterstützt). Die Anwendung kann die [`isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) Eigenschaft verwenden, um einen Hauptzeiger unter den _aktiven Zeigern_ für jeden Zeigertyp zu identifizieren. Wenn eine Anwendung nur einen primären Zeiger unterstützen möchte, kann sie alle Zeigerereignisse ignorieren, die nicht primär sind.

Eine Maus hat nur einen Zeiger, daher wird sie immer der primäre Zeiger sein. Für Berührungseingaben wird ein Zeiger als primär betrachtet, wenn der Benutzer den Bildschirm berührt hat, während keine anderen Berührungen aktiv waren. Für Stift- und Stylus-Eingaben wird ein Zeiger als primär angesehen, wenn der Stift des Benutzers den Bildschirm berührt hat, während keine anderen Stifte aktiv den Bildschirm berührten.

## Feststellung der Knopfzustände

Einige Zeigegeräte (wie Maus und Stift) unterstützen mehrere Knöpfe, und die Knopfdrücke können _chordiert_ sein (d.h. durch gleichzeitiges Drücken eines weiteren Knopfes, während bereits ein anderer Knopf am Zeigegerät gedrückt wird).

Um den Zustand der Knopfdrücke festzustellen, verwenden die Pointer-Ereignisse die [`button`](/de/docs/Web/API/MouseEvent/button) und [`buttons`](/de/docs/Web/API/MouseEvent/buttons) Eigenschaften der [`MouseEvent`](/de/docs/Web/API/MouseEvent) Schnittstelle (von der [`PointerEvent`](/de/docs/Web/API/PointerEvent) erbt).

Die folgende Tabelle bietet die Werte von `button` und `buttons` für die verschiedenen Geräteknopfzustände.

| Geräteknopf Zustand                                                                      | button | buttons |
| ---------------------------------------------------------------------------------------- | ------ | ------- |
| Weder Knöpfe noch Berührungs-/Stiftkontakt haben sich seit dem letzten Ereignis geändert | `-1`   | —       |
| Mausbewegung ohne gedrückte Knöpfe, Stiftbewegung beim Schweben ohne gedrückte Knöpfe    | —      | `0`     |
| Linke Maus, Berührungskontakt, Stiftkontakt                                              | `0`    | `1`     |
| Mittlere Maus                                                                            | `1`    | `4`     |
| Rechte Maus, Stiftzylinderknopf                                                          | `2`    | `2`     |
| X1 (Zurück) Maus                                                                         | `3`    | `8`     |
| X2 (Vorwärts) Maus                                                                       | `4`    | `16`    |
| Stiftlöscher Knopf                                                                       | `5`    | `32`    |

> [!NOTE]
> Die `button`-Eigenschaft weist auf eine Änderung im Zustand des Knopfes hin. Jedoch haben, wie im Fall der Berührung, wenn mehrere Ereignisse mit einem Ereignis auftreten, alle von ihnen denselben Wert.

## Erfassen des Zeigers

Die Zeigererfassung ermöglicht es, dass Ereignisse für ein bestimmtes [Pointer-Ereignis](/de/docs/Web/API/PointerEvent) an ein bestimmtes Element weitergeleitet werden, anstatt dem normalen [Hit-Test](#hit-test) an der Position des Zeigers. Dies kann verwendet werden, um sicherzustellen, dass ein Element weiterhin Zeigerereignisse empfängt, selbst wenn sich der Kontakt des Zeigegeräts vom Element wegbewegt (zum Beispiel durch Scrollen oder Schwenken).

Die Zeigererfassung führt dazu, dass das Ziel alle nachfolgenden Zeigerereignisse erfasst, als ob sie über dem erfassenden Ziel auftreten würden. Folglich werden `pointerover`, `pointerenter`, `pointerleave` und `pointerout` **nicht ausgelöst**, solange diese Erfassung eingestellt ist. Für Touchscreen-Browser, die [direct manipulation](https://w3c.github.io/pointerevents/#dfn-direct-manipulation) ermöglichen, wird eine [implizite Zeigererfassung](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture) auf dem Element aufgerufen, wenn ein `pointerdown`-Ereignis ausgelöst wird. Die Erfassung kann manuell freigegeben werden, indem [`element.releasePointerCapture`](/de/docs/Web/API/Element/releasePointerCapture) auf dem Zielelement aufgerufen wird, oder sie wird nach einem `pointerup`- oder `pointercancel`-Ereignis implizit freigegeben.

> [!NOTE]
> Wenn Sie ein Element im DOM verschieben müssen, rufen Sie `setPointerCapture()` **nach den DOM-Bewegungen** auf, damit `setPointerCapture()` es nicht verliert. Z.B., wenn Sie `Element.append()` verwenden müssen, um ein Element irgendwohin zu verschieben, stellen Sie sicher, dass `setPointerCapture()` darauf nur nach dem Aufruf von `Element.append()` erfolgt.

Das folgende Beispiel zeigt, wie Zeigererfassung auf einem Element eingestellt wird.

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

Das folgende Beispiel zeigt eine Zeigererfassung, die freigegeben wird (wenn ein [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event) Ereignis auftritt. Der Browser macht dies automatisch, wenn ein [`pointerup`](/de/docs/Web/API/Element/pointerup_event) oder [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event) Ereignis auftritt.

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

## Touch-Action-CSS-Eigenschaft

Die {{cssxref("touch-action")}} CSS-Eigenschaft wird verwendet, um festzulegen, ob der Browser sein standardmäßiges (_natürliches_) Berührungsverhalten (wie Zoomen oder Schwenken) auf eine Region anwenden soll oder nicht. Diese Eigenschaft kann auf alle Elemente außer nicht ersetzten Inline-Elementen, Tabellenzeilen, Zeilengruppen, Tabellenspalten und Spaltengruppen angewendet werden.

Ein Wert von `auto` bedeutet, dass der Browser frei ist, sein Standard-Berührungsverhalten auf die angegebene Region anzuwenden, und der Wert von `none` deaktiviert das Standard-Berührungsverhalten des Browsers für die Region. Die Werte `pan-x` und `pan-y` bedeuten, dass Berührungen, die auf der angegebenen Region beginnen, nur für horizontales bzw. vertikales Scrollen sind. Der Wert `manipulation` bedeutet, dass der Browser Berührungen, die auf dem Element beginnen, nur zum Scrollen und Zoomen in Betracht ziehen kann.

Im folgenden Beispiel ist das standardmäßige Berührungsverhalten für einige `button`-Elemente deaktiviert.

```css
button#tiny {
  touch-action: none;
}
```

Im folgenden Beispiel wird das Ziel-Element, wenn es berührt wird, nur in horizontaler Richtung verschoben.

```css
#target {
  touch-action: pan-x;
}
```

## Kompatibilität mit Mausereignissen

Obwohl die Schnittstellen für Pointer-Ereignisse es Anwendungen ermöglichen, verbesserte Benutzererfahrungen auf Geräten mit Zeigern zu schaffen, ist die Realität, dass der Großteil der heutigen Webinhalte so konzipiert ist, dass er nur mit Mauseingaben funktioniert. Folglich muss ein Browser, auch wenn er Pointer-Ereignisse unterstützt, dennoch Mausereignisse verarbeiten, damit Inhalte, die nur Maus-Eingaben voraussetzen, so wie sie sind, ohne direkte Änderungen funktionieren. Ideal wäre es, wenn eine Anwendung mit Pointer-Unterstützung keine explizite Handhabung von Mauseingaben benötigt. Da der Browser jedoch Mausereignisse verarbeiten muss, gibt es möglicherweise einige Kompatibilitätsprobleme, die behandelt werden müssen. Dieser Abschnitt enthält Informationen über die Interaktion von Pointer- und Mausereignissen und die Auswirkungen auf Anwendungsentwickler.

Der Browser _kann generische Pointer-Ereignisse für die Kompatibilität mit mausbasierter Inhalte in Mausereignisse umwandeln_. Diese Umwandlung von Ereignissen wird _Kompatibilitäts-Mausereignisse_ genannt. Autoren können die Produktion bestimmter Kompatibilitäts-Mausereignisse verhindern, indem sie das `pointerdown`-Ereignis abbrechen, beachten Sie jedoch:

- Mausereignisse können nur verhindert werden, wenn der Zeiger gedrückt ist.
- Schwebende Zeiger (z.B. eine Maus ohne gedrückte Knöpfe) können ihre Mausereignisse nicht verhindern.
- Die Ereignisse `mouseover`, `mouseout`, `mouseenter` und `mouseleave` werden nie verhindert (auch wenn der Zeiger gedrückt ist).

## Best Practices

Hier sind einige _Best Practices_, die Sie beim Verwenden von Pointer-Ereignissen beachten sollten:

- Minimieren Sie die Menge an Arbeit, die in Ereignishandlern durchgeführt wird.
- Fügen Sie die Ereignishandler zu einem bestimmten Ziel-Element hinzu (anstatt zum gesamten Dokument oder Knoten höher im Dokumentenbaum).
- Das Ziel-Element (Knoten) sollte groß genug sein, um die größte Kontaktoberfläche aufzunehmen (typischerweise ein Finger). Wenn das Zielgebiet zu klein ist, könnte das Berühren zu Ereignissen für angrenzende Elemente führen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Einige zusätzliche Werte wurden für die CSS {{cssxref("touch-action")}}-Eigenschaft im Rahmen der [Pointer Events](https://w3c.github.io/pointerevents/) Spezifikation definiert, aber derzeit haben diese Werte eine begrenzte Implementierungsunterstützung.

## Siehe auch

- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
- [Pointer Events Arbeitsgruppe](https://github.com/w3c/pointerevents)
- [Mail-Liste](https://lists.w3.org/Archives/Public/public-pointer-events/)
- [W3C #pointerevents IRC-Kanal](irc://irc.w3.org:6667/)
- [Touch-/Pointer-Tests und Demos](https://patrickhlauke.github.io/touch/) von Patrick H. Lauke
