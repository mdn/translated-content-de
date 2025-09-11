---
title: Pointer events
slug: Web/API/Pointer_events
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{DefaultAPISidebar("Pointer Events")}}

Ein Großteil der heutigen Webinhalte geht davon aus, dass das Zeigegerät des Benutzers eine Maus ist. Da jedoch viele Geräte andere Arten von Eingabegeräten wie Stift/Stylus und Touchflächen unterstützen, sind Erweiterungen der vorhandenen Modelle für Zeigegeräte-Ereignisse erforderlich. _[Pointer events](#zeiger-ereignis)_ adressieren dieses Bedürfnis.

Zeiger-Ereignisse sind DOM-Ereignisse, die für ein Zeigegerät ausgelöst werden. Sie sind dafür konzipiert, ein einziges DOM-Ereignismodell zu erstellen, das Zeigereingabegeräte wie Maus, Stift/Stylus oder Touch (wie zum Beispiel ein oder mehrere Finger) handhaben kann.

Der _[Zeiger](#zeiger)_ ist ein hardwareunabhängiges Gerät, das auf eine bestimmte Menge von Bildschirmkoordinaten zielen kann. Ein einziges Ereignismodell für Zeiger kann die Erstellung von Websites und Anwendungen vereinfachen und ein gutes Benutzererlebnis bieten, unabhängig von der Hardware des Benutzers. Allerdings definiert das Zeiger-Ereignis für Szenarien, bei denen eine gerätespezifische Behandlung gewünscht ist, eine [`pointerType`](/de/docs/Web/API/PointerEvent/pointerType)-Eigenschaft, um den Gerätetyp zu inspizieren, der das Ereignis erzeugt hat.

Die Ereignisse, die zur Handhabung generischer Zeigereingaben benötigt werden, sind analog zu [Mausereignissen](/de/docs/Web/API/MouseEvent) (`mousedown`/`pointerdown`, `mousemove`/`pointermove`, usw.). Folglich sind Zeiger-Ereignistypen absichtlich ähnlich zu Mausereignistypen.

Zusätzlich enthält ein Zeiger-Ereignis die üblichen Eigenschaften von Mausereignissen (Client-Koordinaten, Ziel-Element, Button-Zustände, usw.) sowie neue Eigenschaften für andere Formen der Eingabe: Druck, Kontaktgeometrie, Neigung, usw. Tatsächlich erbt die [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle alle Eigenschaften des [`MouseEvent`](/de/docs/Web/API/MouseEvent), wodurch die Migration von Inhalten von Mausereignissen zu Zeigerereignissen erleichtert wird.

## Terminologie

### Aktiver Tastenstatus

Der Zustand, wenn ein _[Zeiger](#zeiger)_ einen von null verschiedenen Wert für die `buttons`-Eigenschaft hat. Zum Beispiel, im Fall eines Stifts, wenn der Stift physischen Kontakt mit dem Digitalisierer hat oder mindestens eine Taste gedrückt wird, während man schwebt.

### Aktiver Zeiger

Jedes _[Zeiger](#zeiger)_-Eingabegerät, das Ereignisse erzeugen kann. Ein Zeiger wird als aktiv betrachtet, wenn er weiterhin Ereignisse erzeugen kann. Zum Beispiel ein Stift, der sich im Abwärtszustand befindet, wird als aktiv angesehen, weil er zusätzliche Ereignisse erzeugen kann, wenn der Stift angehoben oder bewegt wird.

### Digitalisierer

Ein Sensorgerät mit einer Oberfläche, die Kontakt erkennen kann. Am häufigsten handelt es sich bei dem Sensorgerät um einen berührungssensitiven Bildschirm, der Eingaben von einem Eingabegerät wie einem Stift, Stylus oder Finger erkennen kann. Einige Sensorgeräte können die nahe Nähe des Eingabegeräts erkennen, und der Zustand wird als Schweben nach der Maus ausgedrückt.

### Treffertest

Der Prozess, den der Browser verwendet, um ein Ziel-Element für ein Zeiger-Ereignis zu bestimmen. Typischerweise wird dies durch Berücksichtigung des Standorts des Zeigers und des visuellen Layouts der Elemente in einem Dokument auf Bildschirmmedien bestimmt.

### Zeiger

Eine hardwareunabhängige Darstellung von Eingabegeräten, die auf eine bestimmte Koordinate (oder eine Menge von Koordinaten) auf einem Bildschirm zielen können. Beispiele für _Zeiger_-Eingabegeräte sind Maus, Stift/Stylus und Touch-Kontakte.

### Zeigererfassung

Die Zeigererfassung ermöglicht es, dass Ereignisse für einen Zeiger an ein bestimmtes Element umgeleitet werden, anstatt das normale Ergebnis des Treffertests am Standort des Zeigers. Siehe [Zeiger erfassen](#zeiger_erfassen) für ein Beispiel.

> [!NOTE]
> _Zeigererfassung_ unterscheidet sich von [_Zeigersperre_](/de/docs/Web/API/Pointer_Lock_API), die physisch verhindert, dass der Zeiger eine Region verlässt.

### Zeiger-Ereignis

Ein DOM-[`Ereignis`](/de/docs/Web/API/PointerEvent), das für einen _[Zeiger](#zeiger)_ ausgelöst wird.

## Schnittstellen

Die primäre Schnittstelle ist die [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle, die einen [`Konstruktor`](/de/docs/Web/API/PointerEvent/PointerEvent) sowie mehrere Ereignistypen und zugehörige globale Ereignis-Handler hat.

Der Standard beinhaltet auch einige Erweiterungen der Schnittstellen [`Element`](/de/docs/Web/API/Element) und [`Navigator`](/de/docs/Web/API/Navigator).

Die folgenden Unterabschnitte enthalten kurze Beschreibungen jeder Schnittstelle und Eigenschaft.

### PointerEvent-Schnittstelle

Die [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle erweitert die [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Schnittstelle und hat die folgenden Eigenschaften.

- [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}}
  - : Repräsentiert den Winkel zwischen einer Transducer-Achse (einem Zeiger oder Stylus) und der X-Y-Ebene eines Geräteschirms.
- [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}}
  - : Repräsentiert den Winkel zwischen der Y-Z-Ebene und der Ebene, die sowohl die Transducer-Achse (Zeiger oder Stylus) als auch die Y-Achse enthält.
- [`PointerEvent.persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für das Zeigegerät, das das `PointerEvent` erzeugt.
- [`pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- [`width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Größe auf der X-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Größe auf der Y-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck der Zeigereingabe im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen bzw. maximalen Druck darstellen, den die Hardware erkennen kann.
- [`tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte Tangentialdruck der Zeigereingabe (auch als Barrel-Druck oder Zylinderstress bekannt) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position der Kontrolle ist.
- [`tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Winkel in Grad (im Bereich von `-90` bis `90`) zwischen der Y-Z-Ebene und der Ebene, die sowohl die Zeigerachse (z.B. Pen Stylus) als auch die Y-Achse enthält.
- [`tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Winkel in Grad (im Bereich von `-90` bis `90`) zwischen der X-Z-Ebene und der Ebene, die sowohl die Zeigerachse (z.B. Pen Stylus) als auch die X-Achse enthält.
- [`twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung im Uhrzeigersinn des Zeigers (z.B. Pen Stylus) um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Zeigt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Touch, usw.).
- [`isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

### Ereignistypen und globale Ereignishandler

Zeiger-Ereignisse haben zehn Ereignistypen, von denen sieben ähnliche Semantik wie ihre Mausereignis-Gegenstücke haben (`down`, `up`, `move`, `over`, `out`, `enter`, und `leave`).

Nachfolgend finden Sie eine kurze Beschreibung jedes Ereignistyps.

| Ereignis                                                                                      | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`pointerover`](/de/docs/Web/API/Element/pointerover_event)                                   | Wird ausgelöst, wenn ein Zeiger in die [Treffertest](#treffertest)-Grenzen eines Elements bewegt wird.                                                                                                                                                                                                                                                                                                                      |
| [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)                                 | Wird ausgelöst, wenn ein Zeiger in die [Treffertest](#treffertest)-Grenzen eines Elements oder eines seiner Nachkommen bewegt wird, einschließlich als Ergebnis eines `pointerdown`-Ereignisses von einem Gerät, das Schweben nicht unterstützt (siehe `pointerdown`).                                                                                                                                                      |
| [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)                                   | Wird ausgelöst, wenn ein Zeiger in den _aktiven Tastenstatus_ wechselt.                                                                                                                                                                                                                                                                                                                                                     |
| [`pointermove`](/de/docs/Web/API/Element/pointermove_event)                                   | Wird ausgelöst, wenn ein Zeiger die Koordinaten ändert. Dieses Ereignis wird auch verwendet, wenn die Änderung des Zeigerstatus nicht von anderen Ereignissen gemeldet werden kann.                                                                                                                                                                                                                                         |
| [`pointerup`](/de/docs/Web/API/Element/pointerup_event)                                       | Wird ausgelöst, wenn ein Zeiger nicht mehr im _aktiven Tastenstatus_ ist.                                                                                                                                                                                                                                                                                                                                                   |
| [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)                               | Ein Browser löst dieses Ereignis aus, wenn er zu dem Schluss kommt, dass der Zeiger keine weiteren Ereignisse mehr erzeugen kann (z.B., wenn das zugehörige Gerät deaktiviert wird oder der Browser sich entschieden hat, die Interaktion als Pan/Zoom zu interpretieren). Informationen zur Steuerung dieses Verhaltens finden Sie im [Abschnitt zur CSS-Eigenschaft `touch-action`](#css-eigenschaft_touch-action) unten. |
| [`pointerout`](/de/docs/Web/API/Element/pointerout_event)                                     | Wird aus verschiedenen Gründen ausgelöst, z.B.: Zeiger wird aus den [Treffertest](#treffertest)-Grenzen eines Elements bewegt; Auslösung des pointerup-Ereignisses für ein Gerät, das Schweben nicht unterstützt (siehe `pointerup`); nach Auslösung des `pointercancel`-Ereignisses (siehe `pointercancel`); wenn ein Stiftstylus den Schweberadius verlässt, den der Digitalisierer erkennen kann.                        |
| [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)                                 | Wird ausgelöst, wenn ein Zeiger aus den [Treffertest](#treffertest)-Grenzen eines Elements bewegt wird. Für Stiftgeräte wird dieses Ereignis ausgelöst, wenn der Stylus den Schweberadius verlässt, den der Digitalisierer erkennen kann.                                                                                                                                                                                   |
| [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) {{experimental_inline}} | Wird ausgelöst, wenn ein Zeiger irgendeine Eigenschaft ändert, die keine `pointerdown` oder `pointerup`-Ereignisse auslöst.                                                                                                                                                                                                                                                                                                 |
| [`gotpointercapture`](/de/docs/Web/API/Element/gotpointercapture_event)                       | Wird ausgelöst, wenn ein Element die Zeigererfassung erhält.                                                                                                                                                                                                                                                                                                                                                                |
| [`lostpointercapture`](/de/docs/Web/API/Element/lostpointercapture_event)                     | Wird ausgelöst, nachdem die Zeigererfassung für einen Zeiger freigegeben wurde.                                                                                                                                                                                                                                                                                                                                             |

### Elementerweiterungen

Es gibt drei Erweiterungen der [`Element`](/de/docs/Web/API/Element)-Schnittstelle:

- [`hasPointerCapture()`](/de/docs/Web/API/Element/hasPointerCapture)
  - : Gibt an, ob das Element, auf dem dies aufgerufen wird, Zeigererfassung für den Zeiger mit der angegebenen Zeiger-ID hat.
- [`releasePointerCapture()`](/de/docs/Web/API/Element/releasePointerCapture)
  - : Gibt (stoppt) _Zeigererfassung_ frei, die zuvor für ein bestimmtes Zeigerereignis gesetzt wurde.
- [`setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture)
  - : Benennt ein bestimmtes Element als _Erfassungsziel_ zukünftiger Zeiger-Ereignisse.

### Navigatorerweiterung

Die [`Navigator.maxTouchPoints`](/de/docs/Web/API/Navigator/maxTouchPoints)-Eigenschaft wird verwendet, um die maximale Anzahl simultaner Berührungspunkte zu bestimmen, die zu jedem Zeitpunkt unterstützt werden.

## Beispiele

Dieser Abschnitt enthält Beispiele für die grundlegende Verwendung der Zeigerereignis-Schnittstellen.

### Ereignishandler registrieren

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

const el = document.getElementById("target");
// Register pointerdown handler
el.onpointerdown = down_handler;
```

## Bestimmung des primären Zeigers

In einigen Szenarien können mehrere Zeiger vorhanden sein (zum Beispiel ein Gerät mit sowohl einem Touchscreen als auch einer Maus), oder ein Zeiger, der mehrere Kontaktpunkte unterstützt (zum Beispiel ein Touchscreen, der mehrere Fingerberührungen unterstützt). Die Anwendung kann die [`isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary)-Eigenschaft verwenden, um einen Hauptzeiger aus dem Satz der _aktiven Zeiger_ für jeden Zeigertyp zu identifizieren. Wenn eine Anwendung nur einen primären Zeiger unterstützen möchte, kann sie alle nicht primären Zeigerereignisse ignorieren.

Eine Maus hat nur einen Zeiger, daher wird sie immer der primäre Zeiger sein. Bei Touch-Eingaben wird ein Zeiger als primär angesehen, wenn der Benutzer den Bildschirm berührt hat, als es keine anderen aktiven Berührungen gab. Bei Stift- und Stylus-Eingaben wird ein Zeiger als primär angesehen, wenn der Stift des Benutzers den Bildschirm beim ersten Kontakt berührte, als es keine anderen aktiven Stifte gab, die den Bildschirm berührten.

## Bestimmung der Tastenstatus

Einige Zeigergeräte (wie Maus und Stift) unterstützen mehrere Tasten, und die Tastendrücke können _gechordet_ werden (d.h. Drücken einer zusätzlichen Taste, während eine andere Taste auf dem Zeigergerät bereits gedrückt ist).

Um den Zustand der Tastendrücke zu ermitteln, verwenden Zeigerereignisse die [`button`](/de/docs/Web/API/MouseEvent/button)- und [`buttons`](/de/docs/Web/API/MouseEvent/buttons)-Eigenschaften der [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Schnittstelle (von der [`PointerEvent`](/de/docs/Web/API/PointerEvent) erbt).

Die folgende Tabelle bietet die Werte von `button` und `buttons` für die verschiedenen Zustände der Geräteschaltflächen.

| Gerätezustand                                                                             | button | buttons |
| ----------------------------------------------------------------------------------------- | ------ | ------- |
| Weder Tasten noch Touch-/Stiftkontakt veränderten sich seit dem letzten Ereignis          | `-1`   | —       |
| Mausbewegung ohne gedrückte Tasten, Stiftbewegung beim Hover mit keinem gedrückten Tasten | —      | `0`     |
| Linke Maus, Touch-Kontakt, Stiftkontakt                                                   | `0`    | `1`     |
| Mittlere Maus                                                                             | `1`    | `4`     |
| Rechte Maus, Stift-Fasertaste                                                             | `2`    | `2`     |
| X1 (zurück) Maus                                                                          | `3`    | `8`     |
| X2 (vor) Maus                                                                             | `4`    | `16`    |
| Stift-Radiergummi-Taste                                                                   | `5`    | `32`    |

> [!NOTE]
> Die `button`-Eigenschaft zeigt eine Änderung des Tastenstatus an. Wie im Fall der Berührung haben jedoch alle ereignisgesteuerten Ereignisse denselben Wert, wenn mehrere Ereignisse gleichzeitig auftreten.

## Zeiger erfassen

Die Zeigererfassung ermöglicht es, dass Ereignisse für ein bestimmtes [Zeigerereignis](/de/docs/Web/API/PointerEvent) an ein bestimmtes Element umgeleitet werden, anstatt das normale [Treffertest](#treffertest) am Zeigerstandort. Dies kann verwendet werden, um sicherzustellen, dass ein Element weiterhin Zeigerereignisse erhält, auch wenn der Kontakt des Zeigergeräts das Element verlässt (zum Beispiel durch Scrollen oder Panning).

Die Zeigererfassung bewirkt, dass das Ziel alle nachfolgenden Zeigerereignisse erfasst, als ob sie über dem erfassenden Ziel auftreten würden. Dementsprechend werden `pointerover`, `pointerenter`, `pointerleave` und `pointerout` **nicht ausgelöst**, solange diese Erfassung gesetzt ist.
Für Touchscreen-Browser, die [direkte Manipulation](https://w3c.github.io/pointerevents/#dfn-direct-manipulation) erlauben, wird eine [implizite Zeigererfassung](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture) auf dem Element aufgerufen, wenn ein `pointerdown`-Ereignis ausgelöst wird. Die Erfassung kann manuell freigegeben werden, indem [`element.releasePointerCapture`](/de/docs/Web/API/Element/releasePointerCapture) auf das Ziel-Element aufgerufen wird, oder sie wird implizit nach einem `pointerup`- oder `pointercancel`-Ereignis freigegeben.

> [!NOTE]
> Wenn Sie ein Element im DOM verschieben müssen, stellen Sie sicher, dass Sie `setPointerCapture()` **nach den DOM-Bewegungen** aufrufen, damit `setPointerCapture()` es nicht aus den Augen verliert. Wenn Sie zum Beispiel `Element.append()` verwenden müssen, um ein Element woanders hin zu bewegen, stellen Sie sicher, dass Sie `setPointerCapture()` darauf erst nach dem Aufruf von `Element.append()` aufrufen.

Das folgende Beispiel zeigt, wie eine Zeigererfassung auf ein Element gesetzt wird.

```html
<div id="target">Touch me…</div>
```

```js
function downHandler(ev) {
  const el = document.getElementById("target");
  // Element 'target' will receive/capture further events
  el.setPointerCapture(ev.pointerId);
}

const el = document.getElementById("target");
el.onpointerdown = downHandler;
```

Das folgende Beispiel zeigt, wie eine Zeigererfassung freigegeben wird (wenn ein [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)-Ereignis auftritt. Der Browser macht dies automatisch, wenn ein [`pointerup`](/de/docs/Web/API/Element/pointerup_event)- oder [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)-Ereignis auftritt.

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

const el = document.getElementById("target");
// Register pointerdown and pointercancel handlers
el.onpointerdown = downHandler;
el.onpointercancel = cancelHandler;
```

## CSS-Eigenschaft touch-action

Die {{cssxref("touch-action")}} CSS-Eigenschaft wird verwendet, um anzugeben, ob der Browser sein Standardverhalten für Berührungen (_native_) (wie Zoomen oder Panning) auf eine Region anwenden soll oder nicht. Diese Eigenschaft kann auf alle Elemente angewendet werden, außer: nicht ersetzte Inline-Elemente, Tabellenzeilen, Zeilengruppen, Tabellenspalten und Spaltengruppen.

Ein Wert von `auto` bedeutet, dass der Browser frei ist, sein Standardverhalten für Berührungen (auf die angegebene Region) anzuwenden, und der Wert `none` deaktiviert das Standardverhalten des Browsers für Berührungen für die Region. Die Werte `pan-x` und `pan-y` bedeuten, dass Berührungen, die auf der angegebenen Region beginnen, nur für horizontales bzw. vertikales Scrollen vorgesehen sind. Der Wert `manipulation` bedeutet, dass der Browser Berührungen in Betracht ziehen kann, die auf dem Element lediglich für Scrollen und Zoomen gedacht sind.

Im folgenden Beispiel ist das Standardverhalten für Berührungen für einige `button`-Elemente deaktiviert.

```css
button#tiny {
  touch-action: none;
}
```

Im folgenden Beispiel wird, wenn das `target`-Element berührt wird, es sich nur in der horizontalen Richtung verschieben.

```css
#target {
  touch-action: pan-x;
}
```

## Kompatibilität mit Mausereignissen

Obwohl die Zeigerereignis-Schnittstellen Anwendungen ermöglichen, verbesserte Benutzererlebnisse auf zeigerfähigen Geräten zu schaffen, ist die Realität, dass der überwältigende Großteil der heutigen Web-Inhalte so konzipiert ist, nur mit Maus-Eingaben zu funktionieren. Folglich muss ein Browser, selbst wenn er Zeigerereignisse unterstützt, weiterhin Mausereignisse verarbeiten, damit Inhalte, die ausschließlich auf Maus-Eingaben ausgelegt sind, ohne direkte Änderungen funktionieren. Idealerweise muss eine Anwendung, die Zeiger unterstützt, nicht explizit mit Maus-Eingaben arbeiten. Da der Browser jedoch Mausereignisse verarbeiten muss, kann es zu einigen Kompatibilitätsproblemen kommen, die behandelt werden müssen. Dieser Abschnitt enthält Informationen zur Interaktion von Zeiger- und Mausereignissen und deren Auswirkungen für Anwendungsentwickler.

Der Browser _kann generische Zeigereingaben auf Mausereignisse für die Kompatibilität mit mausbasierenden Inhalten abbilden_. Diese Abbildung von Ereignissen wird _Kompatibilitätsmausereignisse_ genannt. Autoren können die Erzeugung bestimmter Kompatibilitätsmausereignisse verhindern, indem sie das pointerdown-Ereignis abbrechen, aber beachten Sie, dass:

- Mausereignisse können nur verhindert werden, wenn der Zeiger nach unten zeigt.
- Schwebende Zeiger (z.B. eine Maus ohne gedrückte Tasten) können ihre Mausereignisse nicht verhindern.
- Die `mouseover`, `mouseout`, `mouseenter` und `mouseleave`-Ereignisse werden niemals verhindert (selbst wenn der Zeiger nach unten zeigt).

## Beste Praktiken

Hier sind einige _beste Praktiken_ zu beachten, wenn Zeigerereignisse verwendet werden:

- Minimieren Sie die Menge der Arbeit, die in Ereignis-Handlern ausgeführt wird.
- Fügen Sie die Ereignis-Handler zu einem bestimmten Ziel-Element hinzu (anstatt zum gesamten Dokument oder Knoten höher im Dokumentenbaum).
- Das Ziel-Element (Knoten) sollte groß genug sein, um die größte Kontaktfläche (typischerweise eine Fingerberührung) aufzunehmen. Wenn das Zielgebiet zu klein ist, könnte das Berühren dazu führen, dass andere Ereignisse für benachbarte Elemente ausgelöst werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Einige zusätzliche Werte wurden für die CSS-{{cssxref("touch-action")}}-Eigenschaft im Rahmen der [Pointer Events](https://w3c.github.io/pointerevents/)-Spezifikation definiert, aber derzeit haben diese Werte begrenzte Implementierungsunterstützung.

## Siehe auch

- [Touch Events](/de/docs/Web/API/Touch_events)
- [Pointer Events Arbeitsgruppe](https://github.com/w3c/pointerevents)
- [Mail-Liste](https://lists.w3.org/Archives/Public/public-pointer-events/)
- [W3C #pointerevents IRC-Kanal](irc://irc.w3.org:6667/)
- [Touch/pointer tests and demos](https://patrickhlauke.github.io/touch/) von Patrick H. Lauke
