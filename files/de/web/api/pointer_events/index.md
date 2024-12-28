---
title: Pointer events
slug: Web/API/Pointer_events
l10n:
  sourceCommit: f0eaec89eaacf987e2212585868cbce62283d519
---

{{DefaultAPISidebar("Pointer Events")}}

Ein Großteil der heutigen Webinhalte geht davon aus, dass das Zeigegerät des Benutzers eine Maus ist. Da jedoch viele Geräte andere Arten von Zeigeeingabegeräten wie Stift/Stylus und Touch-Oberflächen unterstützen, sind Erweiterungen der bestehenden Zeigegerät-Ereignismodelle erforderlich. _[Zeigereignisse](#zeigereignis)_ adressieren dieses Bedürfnis.

Zeigereignisse sind DOM-Ereignisse, die für ein Zeigegerät ausgelöst werden. Sie sind so konzipiert, dass ein einheitliches DOM-Ereignismodell geschaffen wird, um Zeigeeingabegeräte wie Maus, Stift/Stylus oder Touch (wie ein oder mehrere Finger) zu handhaben.

Der _[Zeiger](#zeiger)_ ist ein hardwareunabhängiges Gerät, das auf einen bestimmten Satz von Bildschirmkoordinaten zielen kann. Ein einheitliches Ereignismodell für Zeiger kann das Erstellen von Websites und Anwendungen vereinfachen und eine gute Benutzererfahrung unabhängig von der Hardware des Benutzers bieten. Für Szenarien, in denen eine gerätespezifische Handhabung gewünscht ist, definiert der Zeigereignis einen [`pointerType`](/de/docs/Web/API/PointerEvent/pointerType)-Eigenschaft, um den Gerätetyp zu inspizieren, der das Ereignis erzeugt hat.

Die benötigten Ereignisse zur Handhabung generischer Zeigereingaben sind vergleichbar mit [Mausereignissen](/de/docs/Web/API/MouseEvent) (`mousedown`/`pointerdown`, `mousemove`/`pointermove` usw.). Folglich sind Zeigereignistypen absichtlich den Mausereignistypen ähnlich.

Zusätzlich enthält ein Zeigereignis die üblichen Eigenschaften, die in Mausereignissen vorhanden sind (Client-Koordinaten, Zielelement, Tastenzustände usw.), und neue Eigenschaften für andere Formen der Eingabe: Druck, Kontaktgeometrie, Neigung usw. Tatsächlich erbt die [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle alle Eigenschaften der [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Schnittstelle, wodurch die Migration von Inhalten von Maus- zu Zeigereignissen erleichtert wird.

## Terminologie

### Aktiver Tastenstatus

Der Zustand, wenn ein _[Zeiger](#zeiger)_ einen ungleich null-Wert für die `buttons`-Eigenschaft hat. Beispielsweise im Fall eines Stifts, wenn der Stift physischen Kontakt mit dem Digitalisierer hat oder mindestens eine Taste beim Schweben gedrückt wird.

### Aktiver Zeiger

Jedes _[Zeiger](#zeiger)_ Eingabegerät, das Ereignisse erzeugen kann. Ein Zeiger wird als aktiv betrachtet, wenn er weiterhin Ereignisse erzeugen kann. Zum Beispiel wird ein Stift in einem Abwärtszustand als aktiv angesehen, weil er zusätzliche Ereignisse erzeugen kann, wenn der Stift angehoben oder bewegt wird.

### Digitalisierer

Ein Sensorgerät mit einer Oberfläche, die Berührungen erfassen kann. Am häufigsten ist das Sensorgerät ein berührungsempfindlicher Bildschirm, der Eingaben von einem Eingabegerät wie einem Stift, Stylus oder Finger erfassen kann. Einige Sensorgeräte können die nahe Annäherung des Eingabegeräts erkennen, und der Zustand wird als Schweben im Sinne des Mauszeigers ausgedrückt.

### Treffer-Test

Der Prozess, den der Browser verwendet, um ein Zielelement für ein Zeigereignis zu bestimmen. Typischerweise wird dies bestimmt, indem die Position des Zeigers und auch das visuelle Layout von Elementen in einem Dokument auf Bildschirmen in Betracht gezogen werden.

### Zeiger

Eine hardwareunabhängige Darstellung von Eingabegeräten, die auf bestimmte Koordinaten (oder einen Satz von Koordinaten) auf einem Bildschirm zielen können. Beispiele für _Zeiger_-Eingabegeräte sind Maus, Stift/Stylus und Berührungskontakte.

### Zeigererfassung

Zeigererfassung ermöglicht das Umleiten der Ereignisse für einen Zeiger auf ein bestimmtes Element abseits des normalen Treffer-Test-Ergebnisses der Position des Zeigers. Für ein Beispiel siehe [Erfassung des Zeigers](#erfassen_des_zeigers).

> **Hinweis:** _Zeigererfassung_ unterscheidet sich von [_Zeigersperre_](/de/docs/Web/API/Pointer_Lock_API), die physisch verhindert, dass der Zeiger einen Bereich verlässt.

### Zeigereignis

Ein DOM-[`Ereignis`](/de/docs/Web/API/PointerEvent), das für einen _[Zeiger](#zeiger)_ ausgelöst wird.

## Schnittstellen

Die primäre Schnittstelle ist die [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle, die einen [`Konstruktor`](/de/docs/Web/API/PointerEvent/PointerEvent) sowie mehrere Ereignistypen und zugehörige globale Ereignishandler besitzt.

Der Standard umfasst auch einige Erweiterungen der [`Element`](/de/docs/Web/API/Element)- und [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstellen.

Die folgenden Unterabschnitte enthalten kurze Beschreibungen jeder Schnittstelle und Eigenschaft.

### PointerEvent-Schnittstelle

Die [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle erweitert die [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Schnittstelle und hat die folgenden Eigenschaften.

- [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}}
  - : Repräsentiert den Winkel zwischen der Achse eines Transducers (einem Zeiger oder Stylus) und der X-Y-Ebene eines Gerätebildschirms.
- [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}}
  - : Repräsentiert den Winkel zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Transducers (einem Zeiger oder Stylus) als auch die Y-Achse enthält.
- [`PointerEvent.persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine eindeutige Kennung für das Zeigegerät, das das `PointerEvent` erzeugt.
- [`pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht hat.
- [`width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Magnitude entlang der X-Achse) in CSS-Pixeln der Kontaktgeometrie des Zeigers.
- [`height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Magnitude entlang der Y-Achse) in CSS-Pixeln der Kontaktgeometrie des Zeigers.
- [`pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck der Zeigereingabe im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck darstellen, den die Hardware erkennen kann.
- [`tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck der Zeigereingabe (auch bekannt als Barreldruck oder Zylinderstress) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position der Steuerung darstellt.
- [`tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Flächenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y–Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z. B. eines Stift-Stylus) als auch die Y-Achse enthält.
- [`tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Flächenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X–Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z. B. eines Stift-Stylus) als auch die X-Achse enthält.
- [`twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung im Uhrzeigersinn des Zeigers (z. B. eines Stift-Stylus) um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Touch usw.).
- [`isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den Hauptzeiger dieses Zeigertyps darstellt.

### Ereignistypen und globale Ereignishandler

Zeigereignisse haben zehn Ereignistypen, von denen sieben ähnliche Semantik wie ihre Mausereignis-Pendants haben (`down`, `up`, `move`, `over`, `out`, `enter` und `leave`).

Nachfolgend eine kurze Beschreibung jedes Ereignistyps.

| Ereignis                                                                                      | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`pointerover`](/de/docs/Web/API/Element/pointerover_event)                                   | Wird ausgelöst, wenn ein Zeiger in die [Treffer-Test](#treffer-test)-Grenzen eines Elements bewegt wird.                                                                                                                                                                                                                                                                                                                                   |
| [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)                                 | Wird ausgelöst, wenn ein Zeiger in die [Treffer-Test](#treffer-test)-Grenzen eines Elements oder eines seiner Nachkommen bewegt wird, auch als Ergebnis eines `pointerdown`-Ereignisses von einem Gerät, das keine Schwebenunterstützung hat (siehe `pointerdown`).                                                                                                                                                                        |
| [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)                                   | Wird ausgelöst, wenn ein Zeiger in einen _aktiven Tastenstatus_ wechselt.                                                                                                                                                                                                                                                                                                                                                                  |
| [`pointermove`](/de/docs/Web/API/Element/pointermove_event)                                   | Wird ausgelöst, wenn ein Zeiger die Koordinaten ändert. Dieses Ereignis wird auch verwendet, wenn die Änderung des Zeigerzustands nicht durch andere Ereignisse gemeldet werden kann.                                                                                                                                                                                                                                                      |
| [`pointerup`](/de/docs/Web/API/Element/pointerup_event)                                       | Wird ausgelöst, wenn ein Zeiger nicht mehr im _aktiven Tastenstatus_ ist.                                                                                                                                                                                                                                                                                                                                                                  |
| [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)                               | Ein Browser löst dieses Ereignis aus, wenn er zum Schluss kommt, dass der Zeiger keine weiteren Ereignisse mehr erzeugen kann (zum Beispiel, wenn das zugehörige Gerät deaktiviert wird oder der Browser beschlossen hat, die Interaktion als Schwenken/Zoomen zu interpretieren). Weitere Informationen zur Steuerung dieses Verhaltens finden Sie im Abschnitt zur `touch-action`-CSS-Eigenschaft.                                       |
| [`pointerout`](/de/docs/Web/API/Element/pointerout_event)                                     | Wird aus verschiedenen Gründen ausgelöst, einschließlich: Ein Zeiger wird aus den [Treffer-Test](#treffer-test)-Grenzen eines Elements bewegt; das `pointerup`-Ereignis für ein Gerät, das keine Schwebenunterstützung hat, wird ausgelöst (siehe `pointerup`); nach dem Auslösen des `pointercancel`-Ereignisses (siehe `pointercancel`); wenn ein Stift-Stylus den Schweberbereich verlässt, der durch den Digitalisierer erkennbar ist. |
| [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)                                 | Wird ausgelöst, wenn ein Zeiger aus den [Treffer-Test](#treffer-test)-Grenzen eines Elements bewegt wird. Bei Stiftgeräten wird dieses Ereignis ausgelöst, wenn der Stylus den Schweberbereich verlässt, der durch den Digitalisierer erkennbar ist.                                                                                                                                                                                       |
| [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) {{experimental_inline}} | Wird ausgelöst, wenn ein Zeiger Eigenschaften ändert, die keine `pointerdown`- oder `pointerup`-Ereignisse auslösen.                                                                                                                                                                                                                                                                                                                       |
| [`gotpointercapture`](/de/docs/Web/API/Element/gotpointercapture_event)                       | Wird ausgelöst, wenn ein Element die Zeigererfassung erhält.                                                                                                                                                                                                                                                                                                                                                                               |
| [`lostpointercapture`](/de/docs/Web/API/Element/lostpointercapture_event)                     | Wird nach dem Freigeben der Zeigererfassung für einen Zeiger ausgelöst.                                                                                                                                                                                                                                                                                                                                                                    |

### Element-Erweiterungen

Es gibt drei Erweiterungen der [`Element`](/de/docs/Web/API/Element)-Schnittstelle:

- [`hasPointerCapture()`](/de/docs/Web/API/Element/hasPointerCapture)
  - : Gibt an, ob das Element, auf dem es aufgerufen wird, für die durch die angegebene Zeiger-ID identifizierte Zeigererfassung aktiv ist.
- [`releasePointerCapture()`](/de/docs/Web/API/Element/releasePointerCapture)
  - : Gibt die _Zeigererfassung_ frei (stoppt sie), die zuvor für ein bestimmtes Zeigereignis festgelegt wurde.
- [`setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture)
  - : Bestimmt ein bestimmtes Element als _Erfassungsziel_ für zukünftige Zeigereignisse.

### Navigator-Erweiterung

Die Eigenschaft [`Navigator.maxTouchPoints`](/de/docs/Web/API/Navigator/maxTouchPoints) wird verwendet, um die maximale Anzahl gleichzeitiger Touchpoints zu bestimmen, die zu einem bestimmten Zeitpunkt unterstützt werden.

## Beispiele

Dieser Abschnitt enthält Beispiele zur grundlegenden Verwendung der Schnittstellen von Zeigereignissen.

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

Dieses Beispiel veranschaulicht den Zugriff auf alle Eigenschaften eines Zeigereignisses.

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

In einigen Szenarien kann es mehrere Zeiger geben (zum Beispiel ein Gerät mit Touchscreen und Maus) oder einen Zeiger, der mehrere Kontaktpunkte unterstützt (zum Beispiel ein Touchscreen, der Mehrfingereingaben unterstützt). Die Anwendung kann die [`isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary)-Eigenschaft verwenden, um einen Hauptzeiger unter den _aktiven Zeigern_ für jeden Zeigertyp zu identifizieren. Wenn eine Anwendung nur einen primären Zeiger unterstützen möchte, kann sie alle Zeigereignisse ignorieren, die nicht primär sind.

Eine Maus hat nur einen Zeiger, daher wird sie immer der primäre Zeiger sein. Für Touch-Eingaben wird ein Zeiger als primär betrachtet, wenn der Benutzer den Bildschirm berührt hat, als es keine anderen aktiven Berührungen gab. Für Stift- und Stylus-Eingaben wird ein Zeiger als primär betrachtet, wenn der Benutzer den Bildschirm zuerst kontaktiert hat, als es keine anderen aktiven Stifte mehr auf dem Bildschirm gab.

## Bestimmen der Tastenzustände

Einige Zeigegeräte (wie Maus und Stift) unterstützen mehrere Tasten, und das Drücken von Tasten kann _kombiniert_ werden (d.h. das Drücken einer zusätzlichen Taste, während eine andere Taste auf dem Zeigegerät bereits gedrückt ist).

Um den Zustand der Tastendrücke zu bestimmen, verwenden Zeigereignisse die [`button`](/de/docs/Web/API/MouseEvent/button)- und [`buttons`](/de/docs/Web/API/MouseEvent/buttons)-Eigenschaften der [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Schnittstelle (von der [`PointerEvent`](/de/docs/Web/API/PointerEvent) erbt).

Die folgende Tabelle zeigt die Werte von `button` und `buttons` für die verschiedenen Gerätetastenzustände.

| Gerätetastenzustand                                                                       | button | buttons |
| ----------------------------------------------------------------------------------------- | ------ | ------- |
| Weder Tasten noch Touch-/Stiftkontakt haben sich seit dem letzten Ereignis geändert       | `-1`   | —       |
| Mausbewegung ohne gedrückte Tasten, Stift bewegt sich beim Schweben ohne gedrückte Tasten | —      | `0`     |
| Linke Maustaste, berührungskontakt, Stiftkontakt                                          | `0`    | `1`     |
| Mittlere Maustaste                                                                        | `1`    | `4`     |
| Rechte Maustaste, Stift-Barreltaste                                                       | `2`    | `2`     |
| X1 (zurück) Maustaste                                                                     | `3`    | `8`     |
| X2 (vorwärts) Maustaste                                                                   | `4`    | `16`    |
| Stift-Radiertaste                                                                         | `5`    | `32`    |

> [!NOTE]
> Die `button`-Eigenschaft zeigt eine Änderung des Tastenzustands an. Allerdings, wie im Fall von Berührungen, wenn mehrere Ereignisse mit einem Ereignis auftreten, haben alle den gleichen Wert.

## Erfassen des Zeigers

Zeigererfassung ermöglicht das Umleiten von Ereignissen für ein bestimmtes [Zeigereignis](/de/docs/Web/API/PointerEvent) auf ein bestimmtes Element statt des normalen [Treffer-Tests](#treffer-test) an der Position eines Zeigers. Dies kann verwendet werden, um sicherzustellen, dass ein Element weiterhin Zeigereignisse erhält, auch wenn der Kontakt des Zeigegeräts das Element verlässt (zum Beispiel durch Scrollen oder Schwenken).

Zeigererfassung bewirkt, dass das Ziel alle nachfolgenden Zeigereignisse erfasst, als würden sie über dem erfassten Ziel auftreten. Dementsprechend werden `pointerover`, `pointerenter`, `pointerleave` und `pointerout` **nicht ausgelöst**, solange diese Erfassung eingestellt ist. Bei Touchscreen-Browsern, die [direkte Manipulation](https://w3c.github.io/pointerevents/#dfn-direct-manipulation) erlauben, wird eine [implizite Zeigererfassung](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture) auf das Element aufgerufen, wenn ein `pointerdown`-Ereignis ausgelöst wird. Die Erfassung kann manuell durch das Aufrufen von [`element.releasePointerCapture`](/de/docs/Web/API/Element/releasePointerCapture) auf dem Zuelelement freigegeben werden, oder sie wird automatisch nach einem `pointerup`- oder `pointercancel`-Ereignis freigegeben.

> [!NOTE]
> Wenn Sie ein Element im DOM verschieben müssen, dann stellen Sie sicher, dass Sie `setPointerCapture()` **nach den DOM-Verschiebungen** aufrufen, damit `setPointerCapture()` nicht den Überblick verliert. Beispielsweise, wenn Sie `Element.append()` verwenden müssen, um ein Element woanders hin zu verschieben, dann stellen Sie sicher, dass Sie `setPointerCapture()` erst nach dem Aufruf von `Element.append()` darauf aufrufen.

Das folgende Beispiel zeigt, wie die Zeigererfassung auf ein Element gesetzt wird.

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

Das folgende Beispiel zeigt, wie eine Zeigererfassung freigegeben wird (wenn ein [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event) -Ereignis auftritt). Der Browser macht dies automatisch, wenn ein [`pointerup`](/de/docs/Web/API/Element/pointerup_event)- oder [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)-Ereignis auftritt.

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

Die CSS-Eigenschaft {{cssxref("touch-action")}} wird verwendet, um anzugeben, ob der Browser sein standardmäßiges (natürliches) Touch-Verhalten (wie Zoomen oder Schwenken) auf eine Region anwenden soll oder nicht. Diese Eigenschaft kann auf alle Elemente angewendet werden, außer: nicht ersetzten Inline-Elementen, Tabellenreihen, Zeilengruppen, Tabellenspalten und Spaltengruppen.

Ein Wert von `auto` bedeutet, dass der Browser frei ist, sein standardmäßiges Touch-Verhalten (auf die angegebene Region) anzuwenden, und der Wert von `none` deaktiviert das standardmäßige Touch-Verhalten des Browsers für die Region. Die Werte `pan-x` und `pan-y` bedeuten, dass Berührungen, die auf der angegebenen Region beginnen, nur für horizontales und vertikales Scrollen bestimmt sind. Der Wert `manipulation` bedeutet, dass der Browser Touches, die auf dem Element beginnen, nur für Scrollen und Zoomen in Betracht ziehen kann.

Im folgenden Beispiel ist das standardmäßige Touch-Verhalten des Browsers für das `div`-Element deaktiviert.

```html
<html lang="en">
  <body>
    <div style="touch-action:none;">Can't touch this…</div>
  </body>
</html>
```

Im folgenden Beispiel ist das standardmäßige Touch-Verhalten für einige `button`-Elemente deaktiviert.

```css
button#tiny {
  touch-action: none;
}
```

Im folgenden Beispiel wird, wenn das `target`-Element berührt wird, nur in horizontaler Richtung geschwenkt.

```css
#target {
  touch-action: pan-x;
}
```

## Kompatibilität mit Mausereignissen

Obwohl die Zeigereignis-Schnittstellen es Anwendungen ermöglichen, verbesserte Benutzererfahrungen auf zeigerfähigen Geräten zu schaffen, ist die Realität, dass der Großteil der heutigen Webinhalte nur für die Arbeit mit Mauskontrolle ausgelegt ist. Folglich muss selbst wenn ein Browser Zeigereignisse unterstützt, der Browser dennoch Mausereignisse verarbeiten, damit Inhalte, die nur Maus-Eingaben voraussetzen, ohne direkte Modifikation funktionieren. Idealerweise sollte eine Zeiger-fähige Anwendung Maus-Eingaben nicht explizit verarbeiten müssen. Da der Browser jedoch Mausereignisse verarbeiten muss, können einige Kompatibilitätsprobleme auftreten, die gehandhabt werden müssen. Dieser Abschnitt enthält Informationen über die Interaktion zwischen Zeigereignissen und Mausereignissen sowie die Konsequenzen für Anwendungsentwickler.

Der Browser _kann generische Zeigereingaben auf Mausereignisse für die Kompatibilität mit Maus-basierendem Inhalt abbilden_. Diese Abbildung von Ereignissen wird _Kompatibilitäts-Mausereignisse_ genannt. Autoren können die Erzeugung bestimmter Kompatibilitäts-Mausereignisse verhindern, indem sie das pointerdown-Ereignis abbrechen, jedoch beachten Sie, dass:

- Mausereignisse nur verhindert werden können, wenn der Zeiger nach unten gerichtet ist.
- Schwebende Zeiger (z. B. eine Maus ohne gedrückte Tasten) können ihre Mausereignisse nicht verhindern.
- Die Ereignisse `mouseover`, `mouseout`, `mouseenter` und `mouseleave` werden nie verhindert (auch wenn der Zeiger nach unten gerichtet ist).

## Beste Praktiken

Hier sind einige _beste Praktiken_, die bei der Verwendung von Zeigereignissen zu beachten sind:

- Minimieren Sie die Menge der Arbeit, die in Ereignishandlern ausgeführt wird.
- Fügen Sie die Ereignishandler einem spezifischen Zielelement hinzu (anstatt dem gesamten Dokument oder Knoten höher im Dokumentbaum).
- Das Zielelement (Knoten) sollte groß genug sein, um die größte Kontaktfläche (typischerweise eine Fingerberührung) unterzubringen. Wenn der Zielbereich zu klein ist, könnte ihn zu berühren dazu führen, dass Ereignisse für angrenzende Elemente ausgelöst werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Einige zusätzliche Werte wurden für die CSS Eigenschaft {{cssxref("touch-action")}} als Teil der [Pointer Events](https://w3c.github.io/pointerevents/)-Spezifikation definiert, aber derzeit haben diese Werte nur begrenzte Unterstützung in der Implementierung.

## Siehe auch

### Demos und Beispiele

- [Touch/pointer tests and demos (by Patrick H. Lauke)](https://patrickhlauke.github.io/touch/)

### Community

- [Pointer Events Working Group](https://github.com/w3c/pointerevents)
- [Mail-Liste](https://lists.w3.org/Archives/Public/public-pointer-events/)
- [W3C #pointerevents IRC-Kanal](irc://irc.w3.org:6667/)

### Verwandte Themen und Ressourcen

- [Touch Events Standard](https://www.w3.org/TR/touch-events/)
