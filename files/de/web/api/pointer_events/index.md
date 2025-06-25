---
title: Pointer events
slug: Web/API/Pointer_events
l10n:
  sourceCommit: bec7ef59277e752985de0ee963c86f6e8e4b3400
---

{{DefaultAPISidebar("Pointer Events")}}

Ein Großteil des heutigen Webinhalts geht davon aus, dass das Zeigegerät des Benutzers eine Maus ist. Da jedoch viele Geräte andere Arten von Zeigeeingabegeräten unterstützen, wie z.B. Stift/Stylus und Touch-Oberflächen, sind Erweiterungen der vorhandenen Zeigegeräte-Ereignismodelle erforderlich. _[Pointer Events](#pointer_event)_ adressieren dieses Bedürfnis.

Pointer Events sind DOM-Ereignisse, die für ein Zeigegerät ausgelöst werden. Sie wurden entwickelt, um ein einzelnes DOM-Ereignismodell zu schaffen, um Zeigegeräte wie Maus, Stift/Stylus oder Touch (wie ein oder mehrere Finger) zu handhaben.

Der _[Pointer](#pointer)_ ist ein hardware-unabhängiges Gerät, das auf einen bestimmten Satz von Bildschirmkoordinaten abzielen kann. Ein einzelnes Ereignismodell für Pointer zu haben, kann die Erstellung von Websites und Anwendungen vereinfachen und eine gute Benutzererfahrung unabhängig von der Hardware des Benutzers bieten. Für Szenarien, in denen eine gerätespezifische Behandlung erwünscht ist, definiert Pointer Events eine [`pointerType`](/de/docs/Web/API/PointerEvent/pointerType)-Eigenschaft, um den Gerätetyp zu überprüfen, der das Ereignis verursacht hat.

Die für die Handhabung allgemeiner Zeigereingaben erforderlichen Ereignisse sind analog zu den [Mouse Events](/de/docs/Web/API/MouseEvent) (`mousedown`/`pointerdown`, `mousemove`/`pointermove`, etc.). Folglich sind Pointer Event-Typen absichtlich ähnlich zu den Mouse Event-Typen.

Darüber hinaus enthält ein Pointer Event die üblichen Eigenschaften, die in Mouse Events vorhanden sind (Client-Koordinaten, Ziel-Element, Button-Zustände, etc.) sowie neue Eigenschaften für andere Eingabeformen: Druck, Kontaktgeometrie, Neigung, etc. Tatsächlich erbt das [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interface alle Eigenschaften des [`MouseEvent`](/de/docs/Web/API/MouseEvent) und erleichtert so die Migration von Inhalten von Mouse Events zu Pointer Events.

## Terminologie

### Zustand der aktiven Buttons

Die Bedingung, wenn ein _[Pointer](#pointer)_ einen Wert ungleich null für die `buttons`-Eigenschaft hat. Zum Beispiel im Fall eines Stifts, wenn der Stift physischen Kontakt zum Digitalisierer hat oder mindestens ein Knopf gedrückt ist, während man hovert.

### Aktiver Pointer

Jedes Eingabegerät, das Ereignisse erzeugen kann. Ein Pointer gilt als aktiv, wenn er noch weitere Ereignisse erzeugen kann. Zum Beispiel gilt ein Stift im heruntergeklappten Zustand als aktiv, da er weitere Ereignisse erzeugen kann, wenn der Stift angehoben oder bewegt wird.

### Digitalisierer

Ein Erfassungsgerät mit einer Oberfläche, die Kontakt erkennen kann. Meistens ist das Erfassungsgerät ein Touch-fähiger Bildschirm, der Eingaben von einem Eingabegerät wie einem Stift, Stylus oder Finger erkennen kann. Einige Erfassungsgeräte können die nahe Nähe des Eingabegeräts erkennen, und der Zustand wird als Hover im Sinne der Maus ausgedrückt.

### Hit-Test

Der Prozess, den der Browser verwendet, um ein Ziel-Element für ein Pointer Event zu bestimmen. Typischerweise wird dies bestimmt, indem die Position des Pointers und auch das visuelle Layout von Elementen in einem Dokument auf Bildschirmmedien berücksichtigt wird.

### Pointer

Eine hardware-unabhängige Darstellung von Eingabegeräten, die auf eine bestimmte Koordinate (oder einen Satz von Koordinaten) auf einem Bildschirm abzielen können. Beispiele für _Pointer_-Eingabegeräte sind Maus, Stift/Stylus und Touch Kontakte.

### Pointer Capture

Pointer Capture erlaubt es, die Ereignisse für einen Pointer auf ein bestimmtes Element umzulenken, abweichend vom normalen Hit-Test-Ergebnis der Pointer-Position. Siehe [Erfassung des Pointers](#erfassen_des_pointers) für ein Beispiel.

> [!NOTE] > _Pointer Capture_ ist anders als [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API), das den Pointer physisch daran hindert, eine Region zu verlassen.

### Pointer Event

Ein DOM-[`event`](/de/docs/Web/API/PointerEvent), das für einen _[Pointer](#pointer)_ ausgelöst wird.

## Schnittstellen

Die hauptsächliche Schnittstelle ist die [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle, die einen [`constructor`](/de/docs/Web/API/PointerEvent/PointerEvent) plus mehrere Ereignistypen und zugehörige globale Ereignishandler hat.

Der Standard umfasst außerdem einige Erweiterungen für die [`Element`](/de/docs/Web/API/Element)- und [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstellen.

Die folgenden Unterabschnitte enthalten kurze Beschreibungen jeder Schnittstelle und ihrer Eigenschaften.

### PointerEvent-Schnittstelle

Die [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle erweitert die [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Schnittstelle und hat folgende Eigenschaften.

- [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}}
  - : Repräsentiert den Winkel zwischen einer Wandlerebene (einem Zeiger oder Stylus) und der X-Y-Ebene eines Geräts.
- [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}}
  - : Repräsentiert den Winkel zwischen der Y-Z-Ebene und der Ebene, die sowohl die Wandlerachse als auch die Y-Achse enthält.
- [`PointerEvent.persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für das Zeigegerät, das das `PointerEvent` erzeugt.
- [`pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- [`width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Magnitude auf der X-Achse), in CSS-Pixeln, der Kontaktgeometrie des Pointers.
- [`height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Magnitude auf der Y-Achse), in CSS-Pixeln, der Kontaktgeometrie des Pointers.
- [`pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck der Zeigereingabe im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck darstellen, den die Hardware erfassen kann.
- [`tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck der Zeigereingabe (auch bekannt als Fassdruck oder Zylinderstress) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position der Steuerung ist.
- [`tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Ebenenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y-Z-Ebene und der Ebene, die sowohl die Wandlerachse als auch die Y-Achse enthält.
- [`tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Ebenenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X-Z-Ebene und der Ebene, die sowohl die Wandlerachse als auch die X-Achse enthält.
- [`twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung des Pointers (z.B. Stift-Stylus) um seine Hauptachse im Uhrzeigersinn in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Touch, etc.).
- [`isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Pointer den primären Zeiger dieses Zeigertyps darstellt.

### Ereignistypen und globale Ereignishandler

Pointer Events haben zehn Ereignistypen, sieben davon haben ähnliche Semantik wie ihre Maus-Ereignis-Pendants (`down`, `up`, `move`, `over`, `out`, `enter`, und `leave`).

Nachfolgend ist eine kurze Beschreibung jedes Ereignistyps.

| Ereignis                                                                                      | Beschreibung                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`pointerover`](/de/docs/Web/API/Element/pointerover_event)                                   | Wird ausgelöst, wenn ein Pointer in die [Hit-Test](#hit-test)-Grenzen eines Elements bewegt wird.                                                                                                                                                                                                                                                                                |
| [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)                                 | Wird ausgelöst, wenn ein Zeiger in die [Hit-Test](#hit-test)-Grenzen eines Elements oder eines seiner Nachkommen verschoben wird, einschließlich als Ergebnis eines `pointerdown`-Ereignisses von einem Gerät, das Hover nicht unterstützt (siehe `pointerdown`).                                                                                                                |
| [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)                                   | Wird ausgelöst, wenn ein Zeiger in den _Zustand der aktiven Buttons_ wechselt.                                                                                                                                                                                                                                                                                                   |
| [`pointermove`](/de/docs/Web/API/Element/pointermove_event)                                   | Wird ausgelöst, wenn ein Zeiger die Koordinaten ändert. Dieses Ereignis wird auch verwendet, wenn die Änderung des Zeigerzustands nicht durch andere Ereignisse gemeldet werden kann.                                                                                                                                                                                            |
| [`pointerup`](/de/docs/Web/API/Element/pointerup_event)                                       | Wird ausgelöst, wenn ein Zeiger nicht mehr im _Zustand der aktiven Buttons_ ist.                                                                                                                                                                                                                                                                                                 |
| [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)                               | Ein Browser löst dieses Ereignis aus, wenn er feststellt, dass der Zeiger keine Ereignisse mehr erzeugen kann (zum Beispiel, wenn das zugehörige Gerät deaktiviert wird oder der Browser entschieden hat, die Interaktion als Pan/Zoom zu interpretieren). Informationen zur Steuerung dieses Verhaltens finden Sie im Abschnitt zur CSS-Eigenschaft `touch-action` unten.       |
| [`pointerout`](/de/docs/Web/API/Element/pointerout_event)                                     | Wird aus verschiedenen Gründen ausgelöst, einschließlich: Zeiger wird aus den [Hit-Test](#hit-test)-Grenzen eines Elements bewegt; Auslösen des pointerup-Ereignisses für ein Gerät, das Hover nicht unterstützt (siehe pointerup); nach dem Auslösen des pointercancel-Ereignisses (siehe pointercancel); wenn ein Stift-Stylus den Hover-Bereich des Digitalisierers verlässt. |
| [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)                                 | Wird ausgelöst, wenn ein Zeiger aus den [Hit-Test](#hit-test)-Grenzen eines Elements bewegt wird. Für Stiftgeräte wird dieses Ereignis ausgelöst, wenn der Stylus den Hover-Bereich des Digitalisierers verlässt.                                                                                                                                                                |
| [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) {{experimental_inline}} | Wird ausgelöst, wenn ein Zeiger Eigenschaften ändert, die keine `pointerdown`- oder `pointerup`-Ereignisse auslösen.                                                                                                                                                                                                                                                             |
| [`gotpointercapture`](/de/docs/Web/API/Element/gotpointercapture_event)                       | Wird ausgelöst, wenn ein Element Pointer Capture erhält.                                                                                                                                                                                                                                                                                                                         |
| [`lostpointercapture`](/de/docs/Web/API/Element/lostpointercapture_event)                     | Wird ausgelöst, nachdem Pointer Capture für einen Pointer freigegeben wurde.                                                                                                                                                                                                                                                                                                     |

### Element-Erweiterungen

Es gibt drei Erweiterungen der [`Element`](/de/docs/Web/API/Element)-Schnittstelle:

- [`hasPointerCapture()`](/de/docs/Web/API/Element/hasPointerCapture)
  - : Gibt an, ob das aufgerufene Element Pointer Capture für den durch die gegebene Zeiger-ID identifizierten Zeiger hat.
- [`releasePointerCapture()`](/de/docs/Web/API/Element/releasePointerCapture)
  - : Gibt die zuvor für ein bestimmtes Zeigerereignis gesetzte _Pointer Capture_ frei (stoppt).
- [`setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture)
  - : Bestimmt ein bestimmtes Element als _Capture-Ziel_ zukünftiger Zeigerereignisse.

### Navigator-Erweiterung

Die Eigenschaft [`Navigator.maxTouchPoints`](/de/docs/Web/API/Navigator/maxTouchPoints) wird verwendet, um die maximale Anzahl gleichzeitiger Berührungspunkte zu bestimmen, die zu einem bestimmten Zeitpunkt unterstützt werden.

## Beispiele

Dieser Abschnitt enthält Beispiele für die grundlegende Verwendung der Pointer-Events-Schnittstellen.

### Registrierung von Ereignishandlern

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

Dieses Beispiel zeigt das Zugreifen auf alle Eigenschaften eines Pointer Events.

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

In einigen Szenarien kann es mehrere Zeiger geben (zum Beispiel ein Gerät mit Touchscreen und Maus) oder ein Zeiger, der mehrere Kontaktpunkte unterstützt (zum Beispiel ein Touchscreen, der mehrere Fingerberührungen unterstützt). Die Anwendung kann die [`isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary)-Eigenschaft verwenden, um einen Hauptzeiger aus der Menge der _aktiven Zeiger_ für jeden Zeigertyp zu identifizieren. Wenn eine Anwendung nur einen primären Zeiger unterstützen möchte, kann sie alle Zeigerereignisse ignorieren, die nicht primär sind.

Eine Maus hat nur einen Zeiger, sodass sie immer der primäre Zeiger sein wird. Für Touch-Eingaben gilt ein Zeiger als primär, wenn der Benutzer den Bildschirm berührt hat, während keine anderen aktiven Berührungen vorhanden waren. Bei Stift- und Stylus-Eingaben gilt ein Zeiger als primär, wenn der Stift des Benutzers den Bildschirm zuerst berührt hat, während keine anderen aktiven Stifte den Bildschirm berührten.

## Bestimmen der Button-Zustände

Einige Zeigegeräte (wie Maus und Stift) unterstützen mehrere Knöpfe, und die Knopfdrücke können _akkordiert_ sein (d.h. das Drücken eines zusätzlichen Knopfes, während ein anderer Knopf des Zeigegeräts bereits gedrückt ist).

Um den Zustand der Knopfdrücke zu bestimmen, verwenden Pointer Events die [`button`](/de/docs/Web/API/MouseEvent/button)- und [`buttons`](/de/docs/Web/API/MouseEvent/buttons)-Eigenschaften des [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Interfaces, von dem [`PointerEvent`](/de/docs/Web/API/PointerEvent) erbt.

Die folgende Tabelle gibt die Werte von `button` und `buttons` für die verschiedenen Knopfzustände des Geräts an.

| Gerätetasten-Zustand                                                                     | button | buttons |
| ---------------------------------------------------------------------------------------- | ------ | ------- |
| Weder Knöpfe noch Berührungs-/Stiftkontakt haben sich seit dem letzten Ereignis geändert | `-1`   | —       |
| Mausbewegung ohne gedrückte Knöpfe, Stift bewegt sich beim Hovern ohne gedrückte Knöpfe  | —      | `0`     |
| Linke Maus, Berührungskontakt, Stiftkontakt                                              | `0`    | `1`     |
| Mittlere Maus                                                                            | `1`    | `4`     |
| Rechte Maus, Stift-Fasses-Knopf                                                          | `2`    | `2`     |
| Maus X1 (zurück)                                                                         | `3`    | `8`     |
| Maus X2 (vorwärts)                                                                       | `4`    | `16`    |
| Stift-Radiergummi-Knopf                                                                  | `5`    | `32`    |

> [!NOTE]
> Die `button`-Eigenschaft gibt eine Änderung im Zustand des Knopfes an. Wie im Fall von Touch, wenn mehrere Ereignisse mit einem Ereignis auftreten, haben alle denselben Wert.

## Erfassen des Pointers

Pointer Capture ermöglicht es den Ereignissen für ein bestimmtes [Pointer Event](/de/docs/Web/API/PointerEvent), auf ein bestimmtes Element umgeleitet zu werden, anstatt dem normalen [Hit-Test](#hit-test) bei der Zeigerposition. Dies kann verwendet werden, um sicherzustellen, dass ein Element weiterhin Zeigerereignisse erhält, selbst wenn der Kontakt des Zeigegeräts das Element verlässt (beispielsweise durch Scrollen oder Ziehen).

Pointer Capture sorgt dafür, dass das Ziel alle nachfolgenden Zeigerereignisse so erfasst, als ob sie über dem erfassten Ziel stattfinden würden. Dementsprechend werden `pointerover`, `pointerenter`, `pointerleave` und `pointerout` **nicht ausgelöst**, solange diese Erfassung eingestellt ist. Für Touchscreen-Browser, die [direkte Manipulation](https://w3c.github.io/pointerevents/#dfn-direct-manipulation) unterstützen, wird eine [implizite Zeigererfassung](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture) auf dem Element aufgerufen, wenn ein `pointerdown`-Ereignis ausgelöst wird. Die Erfassung kann manuell durch den Aufruf von [`element.releasePointerCapture`](/de/docs/Web/API/Element/releasePointerCapture) am Ziel-Element freigegeben werden oder sie wird implizit nach einem `pointerup`- oder `pointercancel`-Ereignis freigegeben.

> [!NOTE]
> Wenn Sie ein Element im DOM verschieben müssen, dann stellen Sie sicher, dass Sie `setPointerCapture()` **nach den DOM-Bewegungen** aufrufen, sodass `setPointerCapture()` nicht den Überblick darüber verliert. Beispielsweise, wenn Sie `Element.append()` verwenden müssen, um ein Element woanders hin zu verschieben, dann stellen Sie sicher, dass Sie `setPointerCapture()` darauf nur nach dem Aufruf von `Element.append()` aufrufen.

Das folgende Beispiel zeigt die Zeigererfassung, die auf ein Element eingestellt wird.

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

Das folgende Beispiel zeigt die Freigabe einer Zeigererfassung (wenn ein [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event) Ereignis auftritt. Der Browser führt dies automatisch aus, wenn ein [`pointerup`](/de/docs/Web/API/Element/pointerup_event) oder [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event) Ereignis auftritt.

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

## CSS-Eigenschaft `touch-action`

Die {{cssxref("touch-action")}} CSS-Eigenschaft wird verwendet, um festzulegen, ob der Browser sein Standard-(natürliches) Touch-Verhalten (wie Zoomen oder Scrollen) in einem Bereich anwenden soll oder nicht. Diese Eigenschaft kann auf alle Elemente angewendet werden, außer: nicht ersetzte Inline-Elemente, Tabellenzeilen, Zeilengruppen, Tabellenspalten und Spaltengruppen.

Ein Wert von `auto` bedeutet, dass der Browser sein Standard-Touch-Verhalten (auf den angegebenen Bereich) frei anwenden kann, und der Wert `none` deaktiviert das Standard-Touch-Verhalten des Browsers für den Bereich. Die Werte `pan-x` und `pan-y` bedeuten, dass Berührungen, die auf dem angegebenen Bereich beginnen, nur für das horizontale bzw. vertikale Scrollen gelten. Der Wert `manipulation` bedeutet, dass der Browser Berührungen, die auf dem Element beginnen, nur für das Scrollen und Zoomen berücksichtigen kann.

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

Obwohl die Pointer Event-Schnittstellen es Anwendungen ermöglichen, verbesserte Benutzererfahrungen auf zeigerfähigen Geräten zu schaffen, ist die Realität, dass der Großteil der heutigen Webinhalte nur für die Arbeit mit Mausteingaben ausgelegt ist. Folglich muss der Browser, selbst wenn er Pointer Events unterstützt, dennoch Mausereignisse verarbeiten, sodass Inhalte, die nur auf Maus-Eingaben ausgelegt sind, unverändert funktionieren. Idealerweise muss eine zeigerfähige Anwendung Mausinhalte nicht explizit handhaben. Da der Browser jedoch Mausereignisse verarbeiten muss, kann es einige Kompatibilitätsprobleme geben, die behandelt werden müssen. Dieser Abschnitt enthält Informationen zur Interaktion von Pointer- und Mausereignissen und den Konsequenzen für Anwendungsentwickler.

Der Browser _kann allgemeine Pointer-Eingaben in Mausereignisse für die Kompatibilität mit Maus-basierten Inhalten umsetzen_. Diese Umsetzung von Ereignissen wird als _Kompatibilitäts-Mausereignisse_ bezeichnet. Autoren können die Erzeugung bestimmter Kompatibilitäts-Mausereignisse verhindern, indem sie das pointerdown-Ereignis abbrechen, beachten Sie jedoch, dass:

- Mausereignisse können nur verhindert werden, wenn der Zeiger gedrückt ist.
- Hovernde Zeiger (z.B. eine Maus ohne gedrückte Knöpfe) können ihre Mausereignisse nicht verhindert haben.
- Die Ereignisse `mouseover`, `mouseout`, `mouseenter` und `mouseleave` werden niemals verhindert (selbst wenn der Zeiger gedrückt ist).

## Best Practices

Hier sind einige _Best Practices_ zu beachten, wenn Sie Pointer Events verwenden:

- Minimieren Sie die Menge an Arbeit, die in Ereignishandlern ausgeführt wird.
- Fügen Sie die Ereignishandler einem spezifischen Ziel-Element hinzu (anstatt dem gesamten Dokument oder Knoten, die weiter oben im Dokumentbaum stehen).
- Das Ziel-Element (der Knoten) sollte groß genug sein, um die größte Kontaktflächen zu beherbergen (typischerweise eine Fingerberührung). Wenn das Zielgebiet zu klein ist, könnte das Berühren dazu führen, dass andere Ereignisse für benachbarte Elemente ausgelöst werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Einige zusätzliche Werte wurden für die CSS-Eigenschaft {{cssxref("touch-action")}} als Teil der [Pointer Events](https://w3c.github.io/pointerevents/)-Spezifikation definiert, aber derzeit haben diese Werte eine begrenzte Implementierungsunterstützung.

## Siehe auch

- [Touch Events](/de/docs/Web/API/Touch_events)
- [Pointer Events Working Group](https://github.com/w3c/pointerevents)
- [Mail Liste](https://lists.w3.org/Archives/Public/public-pointer-events/)
- [W3C #pointerevents IRC Kanal](irc://irc.w3.org:6667/)
- [Touch/Pointer Tests und Demos](https://patrickhlauke.github.io/touch/) von Patrick H. Lauke
