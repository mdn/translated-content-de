---
title: Pointer events
slug: Web/API/Pointer_events
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{DefaultAPISidebar("Pointer Events")}}

Ein Großteil der heutigen Webinhalte geht davon aus, dass das Zeigegerät des Benutzers eine Maus ist. Da jedoch viele Geräte andere Arten von Zeigeeingabegeräten wie Stift/Stylus und Touch-Oberflächen unterstützen, sind Erweiterungen der bestehenden Zeigegerätereignismodelle erforderlich. _[Pointer Events](#zeigerereignis)_ adressieren diesen Bedarf.

Zeigerereignisse sind DOM-Ereignisse, die für ein Zeigegerät ausgelöst werden. Sie sind so konzipiert, dass sie ein einheitliches DOM-Ereignismodell schaffen, um Eingabegeräte wie Maus, Stift/Stylus oder Touch (wie ein oder mehrere Finger) zu handhaben.

Der _[Zeiger](#zeiger)_ ist ein hardwareunabhängiges Gerät, das auf eine bestimmte Menge von Bildschirmkoordinaten zielen kann. Ein einheitliches Ereignismodell für Zeiger kann die Erstellung von Websites und Anwendungen vereinfachen und eine gute Benutzererfahrung bieten, unabhängig von der Hardware des Benutzers. Für Szenarien, in denen eine gerätespezifische Handhabung gewünscht ist, definiert Zeigerereignisse eine [`pointerType`](/de/docs/Web/API/PointerEvent/pointerType)-Eigenschaft, um den Gerätetyp zu überprüfen, der das Ereignis erzeugt hat.

Die Ereignisse, die benötigt werden, um generische Zeigereingaben zu handhaben, sind analog zu [Mausereignissen](/de/docs/Web/API/MouseEvent) (`mousedown`/`pointerdown`, `mousemove`/`pointermove` usw.). Folglich sind Zeigerereignistypen absichtlich ähnlich zu Maustypen.

Darüber hinaus enthält ein Zeigerereignis die üblichen Eigenschaften, die in Mauserereignissen vorhanden sind (Client-Koordinaten, Ziel-Element, Button-Zustände usw.) sowie neue Eigenschaften für andere Eingabeformen: Druck, Kontaktgeometrie, Neigung usw. Tatsächlich erbt das [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle alle [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Eigenschaften, was die Migration von Inhalten von Mauserereignissen zu Zeigerereignissen erleichtert.

## Terminologie

### Aktiver Tastenstatus

Der Zustand, wenn ein _[Zeiger](#zeiger)_ einen ungleich Null-Wert für die `buttons`-Eigenschaft hat. Zum Beispiel im Fall eines Stifts, wenn der Stift physischen Kontakt mit dem Digitizer hat oder mindestens eine Taste beim Schweben gedrückt wird.

### Aktiver Zeiger

Jedes _[Zeiger](#zeiger)_ Eingabegerät, das Ereignisse erzeugen kann. Ein Zeiger wird als aktiv betrachtet, wenn er noch weitere Ereignisse erzeugen kann. Zum Beispiel wird ein Stift, der sich in einem Down-Status befindet, als aktiv betrachtet, da er zusätzliche Ereignisse erzeugen kann, wenn der Stift angehoben oder bewegt wird.

### Digitizer

Ein Sensorgerät mit einer Oberfläche, die Kontakt erkennen kann. Am häufigsten ist das Sensorgerät ein touchfähiger Bildschirm, der Eingaben von einem Eingabegerät wie Stift, Stylus oder Finger erkennen kann. Einige Sensorgeräte können die Nähe des Eingabegeräts erkennen, und der Zustand wird als Schweben über der Maus ausgedrückt.

### Hit-Test

Der Prozess, den der Browser verwendet, um ein Ziel-Element für ein Zeigerereignis zu bestimmen. Typischerweise wird dies bestimmt, indem die Position des Zeigers und auch das visuelle Layout von Elementen in einem Dokument auf Bildschirmmedien betrachtet werden.

### Zeiger

Eine hardwareunabhängige Darstellung von Eingabegeräten, die auf ein bestimmtes Koordinatenset auf einem Bildschirm zielen können. Beispiele für _Zeiger_-Eingabegeräte sind Maus, Stift/Stylus und Touch-Kontakte.

### Zeigererfassung

Die Zeigererfassung ermöglicht es, dass die Ereignisse für einen Zeiger auf ein bestimmtes Element umgelenkt werden, anstatt das normale Ergebnis des Hit-Tests der Zeigerposition. Siehe [Erfassen des Zeigers](#erfassen_des_zeigers) für ein Beispiel.

> [!NOTE] > _Zeigererfassung_ ist unterschiedlich zu [_Zeigersperre_](/de/docs/Web/API/Pointer_Lock_API), die den Zeiger physisch daran hindert, ein Region zu verlassen.

### Zeigerereignis

Ein DOM-[`Ereignis`](/de/docs/Web/API/PointerEvent), das für einen _[Zeiger](#zeiger)_ ausgelöst wird.

## Schnittstellen

Die Hauptschnittstelle ist die [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle, die einen [`Konstruktor`](/de/docs/Web/API/PointerEvent/PointerEvent) sowie mehrere Ereignistypen und zugehörige globale Ereignis-Handler umfasst.

Der Standard enthält auch einige Erweiterungen der [`Element`](/de/docs/Web/API/Element)- und [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstellen.

Die folgenden Unterabschnitte enthalten kurze Beschreibungen jeder Schnittstelle und jeder Eigenschaft.

### PointerEvent-Schnittstelle

Die [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle erweitert die [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Schnittstelle und verfügt über die folgenden Eigenschaften.

- [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}}
  - : Stellt den Winkel zwischen der Achse eines Umformers (ein Zeiger oder Stylus) und der X-Y-Ebene eines Geräts dar.
- [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}}
  - : Stellt den Winkel zwischen der Y-Z-Ebene und der Ebene dar, die sowohl die Achse des Umformers (ein Zeiger oder Stylus) als auch die Y-Achse enthält.
- [`PointerEvent.persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine eindeutige Kennung für das Zeigegerät, das das `PointerEvent` generiert.
- [`pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- [`width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Ausdehnung auf der X-Achse) in CSS-Pixeln der Kontaktgeometrie des Zeigers.
- [`height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Ausdehnung auf der Y-Achse) in CSS-Pixeln der Kontaktgeometrie des Zeigers.
- [`pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck der Zeigereingabe im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck darstellen, den die Hardware erkennen kann.
- [`tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck der Zeigereingabe (auch als Zylinder-Stress bekannt) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position der Steuerung ist.
- [`tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Winkel der Ebene (in Grad, im Bereich von `-90` bis `90`) zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. Pen Stylus) als auch die Y-Achse enthält.
- [`tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Winkel der Ebene (in Grad, im Bereich von `-90` bis `90`) zwischen der X-Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. Pen Stylus) als auch die X-Achse enthält.
- [`twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung im Uhrzeigersinn des Zeigers (z.B. Pen Stylus) um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätes des Typs an, der das Ereignis verursacht hat (Maus, Stift, Touch usw.).
- [`isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

### Ereignistypen und Globale Ereignis-Handler

Zeigerereignisse haben zehn Ereignistypen, von denen sieben ähnliche Semantik wie ihre Mauserereignis-Pendants haben (`down`, `up`, `move`, `over`, `out`, `enter` und `leave`).

Unten finden Sie eine kurze Beschreibung jedes Ereignistyps.

| Ereignis                                                                                      | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`pointerover`](/de/docs/Web/API/Element/pointerover_event)                                   | Wird ausgelöst, wenn ein Zeiger in die [Hit Test](#hit-test)-Grenzen eines Elements bewegt wird.                                                                                                                                                                                                                                                                                                                     |
| [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)                                 | Wird ausgelöst, wenn ein Zeiger in die [Hit Test](#hit-test)-Grenzen eines Elements oder eines seiner Nachfahren bewegt wird, einschließlich als Ergebnis eines `pointerdown`-Ereignisses von einem Gerät, das Hover nicht unterstützt (siehe `pointerdown`).                                                                                                                                                        |
| [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)                                   | Wird ausgelöst, wenn ein Zeiger in den _aktiven Tastenzustand_ gerät.                                                                                                                                                                                                                                                                                                                                                |
| [`pointermove`](/de/docs/Web/API/Element/pointermove_event)                                   | Wird ausgelöst, wenn ein Zeiger die Koordinaten ändert. Dieses Ereignis wird auch verwendet, wenn die Änderung des Zeigerstatus nicht durch andere Ereignisse gemeldet werden kann.                                                                                                                                                                                                                                  |
| [`pointerup`](/de/docs/Web/API/Element/pointerup_event)                                       | Wird ausgelöst, wenn ein Zeiger nicht mehr im _aktiven Tastenzustand_ ist.                                                                                                                                                                                                                                                                                                                                           |
| [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)                               | Ein Browser löst dieses Ereignis aus, wenn er davon ausgeht, dass der Zeiger keine Ereignisse mehr erzeugen kann (zum Beispiel, wenn das zugehörige Gerät deaktiviert wird oder der Browser beschließt, die Interaktion als Schwenken/Zoom zu interpretieren). Informationen zur Steuerung dieses Verhaltens finden Sie im [Abschnitt über die `touch-action`-CSS-Eigenschaft](#touch-action_css-eigenschaft) unten. |
| [`pointerout`](/de/docs/Web/API/Element/pointerout_event)                                     | Wird aus mehreren Gründen ausgelöst: Zeiger wird aus den [Hit Test](#hit-test)-Grenzen eines Elements bewegt; Das `pointerup`-Ereignis wird für ein Gerät ausgelöst, das Hover nicht unterstützt (siehe `pointerup`); nach Auslösen des `pointercancel`-Ereignisses (siehe `pointercancel`); wenn ein Pen Stylus den von einem Digitizer von erkannt Hoverbereich verlässt.                                          |
| [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)                                 | Wird ausgelöst, wenn ein Zeiger aus den [Hit Test](#hit-test)-Grenzen eines Elements herausbewegt wird. Bei vielen Geräten wird dieses Ereignis ausgelöst, wenn der Stylus den von einem Digitizer erkannten Hoverbereich verlässt.                                                                                                                                                                                  |
| [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) {{experimental_inline}} | Wird ausgelöst, wenn ein Zeiger beliebige Eigenschaften ändert, die keine `pointerdown`- oder `pointerup`-Ereignisse auslösen.                                                                                                                                                                                                                                                                                       |
| [`gotpointercapture`](/de/docs/Web/API/Element/gotpointercapture_event)                       | Wird ausgelöst, wenn ein Element den Zeiger erfasst.                                                                                                                                                                                                                                                                                                                                                                 |
| [`lostpointercapture`](/de/docs/Web/API/Element/lostpointercapture_event)                     | Wird ausgelöst, nachdem die Zeigererfassung für einen Zeiger freigegeben wurde.                                                                                                                                                                                                                                                                                                                                      |

### Element-Erweiterungen

Es gibt drei Erweiterungen der [`Element`](/de/docs/Web/API/Element)-Schnittstelle:

- [`hasPointerCapture()`](/de/docs/Web/API/Element/hasPointerCapture)
  - : Gibt an, ob das aufgerufene Element die Zeigererfassung für den durch die gegebene Zeiger-ID identifizierten Zeiger hat.
- [`releasePointerCapture()`](/de/docs/Web/API/Element/releasePointerCapture)
  - : Setzt die zuvor für ein spezifisches Zeigerereignis festgelegte _Zeigererfassung_ frei (stoppt sie).
- [`setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture)
  - : Bestimmt ein spezifisches Element als _Erfassungsziel_ künftiger Zeigerereignisse.

### Navigator-Erweiterung

Die [`Navigator.maxTouchPoints`](/de/docs/Web/API/Navigator/maxTouchPoints)-Eigenschaft wird verwendet, um die maximale Anzahl gleichzeitiger Berührungspunkte zu bestimmen, die zu einem bestimmten Zeitpunkt unterstützt werden.

## Beispiele

Dieser Abschnitt enthält Beispiele für die grundlegende Nutzung der Zeigerereignis-Schnittstellen.

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

Dieses Beispiel veranschaulicht den Zugriff auf alle Eigenschaften eines Zeigerereignisses.

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

In einigen Szenarien können mehrere Zeiger vorhanden sein (zum Beispiel ein Gerät mit sowohl einem Touchscreen als auch einer Maus) oder ein Zeiger, der mehrere Kontaktpunkte unterstützt (zum Beispiel ein Touchscreen, der mehrere Fingerberührungen unterstützt). Die Anwendung kann die [`isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary)-Eigenschaft verwenden, um einen Masterzeiger unter den _aktiven Zeigern_ für jeden Zeigertyp zu identifizieren. Wenn eine Anwendung nur einen primären Zeiger unterstützen möchte, kann sie alle Zeigerereignisse ignorieren, die nicht primär sind.

Eine Maus hat nur einen Zeiger, daher ist sie immer der primäre Zeiger. Bei Touch-Eingaben wird ein Zeiger als primär angesehen, wenn der Benutzer den Bildschirm berührt, während keine anderen aktiven Berührungen vorhanden sind. Bei Stift- und Stylus-Eingaben wird ein Zeiger als primär angesehen, wenn der Stift des Benutzers zunächst den Bildschirm berührt, während keine anderen aktiven Stifte den Bildschirm berühren.

## Bestimmen des Button-Status

Einige Zeigergeräte (wie Maus und Stift) unterstützen mehrere Tasten, und die Tastenanschläge können zu einer _Akkordierung_ führen (d.h. Drücken einer zusätzlichen Taste, während eine andere Taste des Zeigergeräts bereits gedrückt ist).

Um den Status des Tastenanschläge zu bestimmen, verwendet Zeigerereignisse die [`button`](/de/docs/Web/API/MouseEvent/button)- und [`buttons`](/de/docs/Web/API/MouseEvent/buttons)-Eigenschaften der [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Schnittstelle (die die [`PointerEvent`](/de/docs/Web/API/PointerEvent) erbt).

Die folgende Tabelle bietet die `button`- und `buttons`-Werte für die verschiedenen Gerätezustände.

| Gerätezustand der Taste                                                          | button | buttons |
| -------------------------------------------------------------------------------- | ------ | ------- |
| Weder Tasten- noch Touch-/Stiftkontakt hat sich seit letztem Ereignis geändert   | `-1`   | —       |
| Mausbewegung ohne gedrückte Tasten; Stiftbewegung im Hover ohne gedrückte Tasten | —      | `0`     |
| Linke Maustaste, Berührungskontakt, Stiftkontakt                                 | `0`    | `1`     |
| Mittlere Maustaste                                                               | `1`    | `4`     |
| Rechte Maustaste, Stift-Seitentaste                                              | `2`    | `2`     |
| X1 (zurück) Mausknopf                                                            | `3`    | `8`     |
| X2 (vor-) Mausknopf                                                              | `4`    | `16`    |
| Stift-Radiergummitaste                                                           | `5`    | `32`    |

> [!NOTE]
> Die `button`-Eigenschaft zeigt eine Änderung im Zustand der Taste an. Wenn jedoch, wie im Fall von "Berührung", mehrere Ereignisse mit einem Ereignis auftreten, haben sie alle denselben Wert.

## Erfassen des Zeigers

Die Zeigererfassung erlaubt es, dass Ereignisse für ein bestimmtes [Zeigerereignis](/de/docs/Web/API/PointerEvent) auf ein bestimmtes Element umgeleitet werden, anstatt auf das normale [Hit-Test](#hit-test) an einer Zeigerposition. Dies kann verwendet werden, um sicherzustellen, dass ein Element weiterhin Zeigerereignisse empfängt, selbst wenn sich der Kontakt des Zeigergeräts vom Element wegbewegt (z. B. durch Scrollen oder Schwenken).

Die Zeigererfassung wird dazu führen, dass das Ziel alle nachfolgenden Zeigerereignisse so erfasst, als würden sie über dem Erfassungselement auftreten. Dementsprechend werden `pointerover`, `pointerenter`, `pointerleave` und `pointerout` **nicht ausgelöst**, solange diese Erfassung eingestellt ist. Bei Touchscreen-Browsern, die [direkte Manipulation](https://w3c.github.io/pointerevents/#dfn-direct-manipulation) ermöglichen, wird eine [implizite Zeigererfassung](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture) auf dem Element ausgelöst, wenn ein `pointerdown`-Ereignis ausgelöst wird. Die Erfassung kann manuell durch Aufruf von [`element.releasePointerCapture`](/de/docs/Web/API/Element/releasePointerCapture) auf dem Zielelement freigegeben werden oder wird implizit nach einem `pointerup` oder `pointercancel`-Ereignis freigegeben.

> [!NOTE]
> Wenn Sie ein Element im DOM verschieben müssen, stellen Sie sicher, dass Sie `setPointerCapture()` **nach den DOM-Verschiebungen** aufrufen, damit `setPointerCapture()` es nicht aus den Augen verliert. Wenn Sie z.B. `Element.append()` verwenden müssen, um ein Element woanders hin zu verschieben, stellen Sie sicher, `setPointerCapture()` erst nach dem Anruf von `Element.append()` darauf anzuwenden.

Das folgende Beispiel zeigt, wie die Zeigererfassung auf einem Element eingestellt wird.

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

Das folgende Beispiel zeigt, wie eine Zeigererfassung freigegeben wird (wenn ein [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)-Ereignis auftritt). Der Browser erledigt dies automatisch, wenn ein [`pointerup`](/de/docs/Web/API/Element/pointerup_event)- oder [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)-Ereignis auftritt.

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

Die {{cssxref("touch-action")}} CSS-Eigenschaft wird verwendet, um anzugeben, ob der Browser sein Standard-(„natürliches“) Touch-Verhalten (wie Zoomen oder Schwenken) auf eine Region anwenden soll oder nicht. Diese Eigenschaft darf auf alle Elemente außer: nicht-ersetzten Inline-Elementen, Tabellenreihen, Reihengruppen, Tabellenspalten und Spaltengruppen angewendet werden.

Ein Wert von `auto` bedeutet, dass der Browser frei ist, sein Standardverhalten (auf die angegebene Region) anzuwenden. Der Wert `none` deaktiviert das Standardverhalten des Browsers für die Region. Die Werte `pan-x` und `pan-y` bedeuten, dass Berührungen, die auf der angegebenen Region beginnen, nur für horizontales bzw. vertikales Scrollen verwendet werden. Der Wert `manipulation` bedeutet, dass der Browser berücksichtigen kann, dass Berührungen, die auf dem Element beginnen, nur zum Scrollen und Zoomen gedacht sind.

Im folgenden Beispiel wird das Standard-Touch-Verhalten für einige `button`-Elemente deaktiviert.

```css
button#tiny {
  touch-action: none;
}
```

Im folgenden Beispiel wird beim Berühren des `target`-Elements nur in horizontaler Richtung gescrollt.

```css
#target {
  touch-action: pan-x;
}
```

## Kompatibilität mit Mausereignissen

Obwohl die Zeigerereignis-Schnittstellen es Anwendungen ermöglichen, verbesserte Benutzererfahrungen auf zeigerfähigen Geräten zu erstellen, ist die Realität so, dass die überwiegende Mehrheit der heutigen Webinhalte darauf ausgelegt ist, nur mit der Maus zu arbeiten. Daher muss ein Browser, selbst wenn er Zeigerereignisse unterstützt, Mausereignisse weiterhin verarbeiten, damit Inhalte, die nur davon ausgehen, dass Maus-Eingaben erfolgen, wie gewünscht funktionieren, ohne dass sie direkt modifiziert werden müssen. Idealerweise erfordert eine durch Zeiger unterstützte Anwendung keine explizite Handhabung der Mauseingabe. Da der Browser jedoch Mausereignisse verarbeiten muss, können einige Kompatibilitätsprobleme auftreten, die behandelt werden müssen. Dieser Abschnitt enthält Informationen über die Interaktion zwischen Zeigerereignissen und Mausereignissen sowie die Auswirkungen auf die Anwendungsentwickler.

Der Browser _kann generische Zeigereingaben in Mausereignisse für die Kompatibilität mit mausbasierenden Inhalten umwandeln_. Diese Umwandlung von Ereignissen wird als _Kompatibilitäts-Mausereignisse_ bezeichnet. Autoren können die Produktion bestimmter Kompatibilitäts-Mausereignisse verhindern, indem sie das `pointerdown`-Ereignis abbrechen, beachten Sie jedoch:

- Mausereignisse können nur verhindert werden, wenn sich der Zeiger im aktiven Zustand befindet.
- Schwebende Zeiger (z.B. eine nicht gedrückte Maus) können ihre Mausereignisse nicht verhindern.
- Die Ereignisse `mouseover`, `mouseout`, `mouseenter` und `mouseleave` werden nie verhindert (auch wenn der Zeiger im aktiven Zustand ist).

## Beste Praktiken

Hier sind einige _beste Praktiken_, die bei der Verwendung von Zeigerereignissen zu berücksichtigen sind:

- Minimieren Sie die Menge an Arbeit, die in den Ereignis-Handlern durchgeführt wird.
- Fügen Sie die Ereignishandler einem spezifischen Ziel-Element hinzu (anstatt dem gesamten Dokument oder Knoten höher im Dokumentenbaum).
- Das Ziel-Element (der Knoten) sollte groß genug sein, um die größte Kontakt-Oberfläche (typischerweise eine Fingerberührung) aufzunehmen. Wenn der Zielbereich zu klein ist, könnte das Berühren dazu führen, dass andere Ereignisse für benachbarte Elemente ausgelöst werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Einige zusätzliche Werte wurden für die CSS-{{cssxref("touch-action")}}-Eigenschaft als Teil der [Pointer Events](https://w3c.github.io/pointerevents/)-Spezifikation definiert, aber derzeit haben diese Werte eine begrenzte Implementierungsunterstützung.

## Siehe auch

- [Touch Events](/de/docs/Web/API/Touch_events)
- [Pointer Events-Arbeitsgruppe](https://github.com/w3c/pointerevents)
- [Mailingliste](https://lists.w3.org/Archives/Public/public-pointer-events/)
- [W3C #pointerevents IRC-Kanal](irc://irc.w3.org:6667/)
- [Touch-/Zeiger-Tests und Demos](https://patrickhlauke.github.io/touch/) von Patrick H. Lauke
