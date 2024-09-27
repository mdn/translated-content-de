---
title: Pointer events
slug: Web/API/Pointer_events
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{DefaultAPISidebar("Pointer Events")}}

Vieles der heutigen Webinhalte geht davon aus, dass das Zeigegerät des Benutzers eine Maus ist. Da jedoch viele Geräte andere Arten von Zeigeeingabegeräten unterstützen, wie Stifte/Stylus und Touch-Oberflächen, sind Erweiterungen der bestehenden Ereignismodelle für Zeigegeräte erforderlich. _[Pointer Events](#pointer-event)_ adressieren diesen Bedarf.

Pointer Events sind DOM-Ereignisse, die für ein Zeigegerät ausgelöst werden. Sie sind so konzipiert, dass sie ein einheitliches DOM-Ereignismodell für die Handhabung von Zeigeeingabegeräten wie Maus, Stift/Stylus oder Touch (wie ein oder mehrere Finger) erstellen.

Der _[Pointer](#zeiger)_ ist ein hardwareunabhängiges Gerät, das auf eine bestimmte Menge von Bildschirmkoordinaten zielen kann. Ein einheitliches Ereignismodell für Zeiger kann die Erstellung von Websites und Anwendungen vereinfachen und ein gutes Benutzererlebnis bieten, unabhängig von der Hardware des Benutzers. Für Szenarien, in denen eine gerätespezifische Handhabung gewünscht wird, definiert Pointer Events eine [`pointerType`](/de/docs/Web/API/PointerEvent/pointerType)-Eigenschaft, um den Gerätetyp zu prüfen, der das Ereignis erzeugt hat.

Die Ereignisse, die für die Handhabung allgemeiner Zeigereingaben benötigt werden, sind analog zu {{domxref("MouseEvent","Mausereignissen", "", 1)}} (`mousedown`/`pointerdown`, `mousemove`/`pointermove`, usw.). Folglich sind Pointer-Ereignistypen absichtlich ähnlich zu Mausereignistypen.

Ein Pointer-Event enthält zusätzlich zu den üblichen in Mausereignissen vorhandenen Eigenschaften (Client-Koordinaten, Ziel-Element, Tastenstatus usw.) auch neue Eigenschaften für andere Eingabeformen: Druck, Kontaktgeometrie, Neigungswinkel usw. Tatsächlich erbt das [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interface alle Eigenschaften des [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Interfaces und erleichtert somit die Migration von Mausereignissen zu Pointer-Events.

## Terminologie

### aktiver Buttons-Zustand

Der Zustand, wenn ein _[Pointer](#zeiger)_ einen ungleichen Nullwert für die `buttons`-Eigenschaft hat. Zum Beispiel wenn ein Stift physischen Kontakt mit dem Digitalisierer hat oder mindestens eine Taste während des Schwebens gedrückt wird.

### aktiver Zeiger

Jedes _[Pointer](#zeiger)_ Eingabegerät, das Ereignisse erzeugen kann. Ein Zeiger wird als aktiv betrachtet, wenn er weiterhin Ereignisse erzeugen kann. Zum Beispiel wird ein Stift im abgesenkten Zustand als aktiv betrachtet, da er zusätzliche Ereignisse erzeugen kann, wenn der Stift angehoben oder bewegt wird.

### Digitalisierer

Ein Erfassungsgerät mit einer Oberfläche, die Kontakt erkennen kann. Am häufigsten ist das Erfassungsgerät ein berührungsempfindlicher Bildschirm, der Eingaben von einem Eingabegerät wie einem Stift, Stylus oder Finger erfassen kann. Einige Erfassungsgeräte können die Nähe des Eingabegeräts erkennen, und der Zustand wird als Schwebestatus entsprechend dem Mauszeiger ausgedrückt.

### Hit-Test

Der Prozess, den der Browser verwendet, um ein Ziel-Element für ein Pointer-Ereignis zu bestimmen. Typischerweise wird dies bestimmt, indem sowohl die Position des Pointers als auch das visuelle Layout von Elementen in einem Dokument auf Bildschirmmedien berücksichtigt werden.

### Zeiger

Eine hardwareunabhängige Darstellung von Eingabegeräten, die auf einen bestimmten Satz von Koordinaten auf einem Bildschirm abzielen können. Beispiele für _Zeiger_-Eingabegeräte sind Maus, Stift/Stylus und Touch-Kontakte.

### Pointer-Capture

Pointer-Capture ermöglicht es, die Ereignisse für einen Pointer an ein bestimmtes Element umzuleiten, das nicht das normale Hit-Test-Ergebnis der Position des Pointers ist. Siehe [Pointer erfassen](#erfassung_des_zeigers) für ein Beispiel.

> **Note:** _Pointer-Capture_ unterscheidet sich von [_Pointer-Lock_](/de/docs/Web/API/Pointer_Lock_API), das physisch verhindert, dass der Pointer einen bestimmten Bereich verlässt.

### Pointer-Event

Ein DOM-[`Event`](/de/docs/Web/API/PointerEvent), das für einen _[Pointer](#zeiger)_ ausgelöst wird.

## Schnittstellen

Das primäre Interface ist das [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interface, das über einen [`Constructor`](/de/docs/Web/API/PointerEvent/PointerEvent) plus mehrere Ereignistypen und zugehörige globale Ereignishandler verfügt.

Der Standard umfasst auch einige Erweiterungen der [`Element`](/de/docs/Web/API/Element)- und [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstellen.

Die folgenden Unterabschnitte enthalten kurze Beschreibungen jedes Interfaces und ihrer Eigenschaften.

### PointerEvent-Interface

Das [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interface erweitert das [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Interface und verfügt über die folgenden Eigenschaften:

- [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}}
  - : Stellt den Winkel zwischen der Achse eines Transducers (einem Pointer oder Stylus) und der X-Y-Ebene eines Gerätescreens dar.
- [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}}
  - : Stellt den Winkel zwischen der Y-Z-Ebene und der Ebene dar, die sowohl die Achse des Transducers (einem Pointer oder Stylus) als auch die Y-Achse enthält.
- [`PointerEvent.persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein eindeutiger Bezeichner für das Zeigegerät, das die `PointerEvent` erzeugt.
- [`pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Ein eindeutiger Bezeichner für den Zeiger, der das Ereignis verursacht.
- [`width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Größenordnung auf der X-Achse) der Kontaktgeometrie des Zeigers in CSS-Pixeln.
- [`height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Größenordnung auf der Y-Achse) der Kontaktgeometrie des Zeigers in CSS-Pixeln.
- [`pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck der Zeigereingabe im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck darstellen, den die Hardware erfassen kann.
- [`tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck der Zeigereingabe (auch bekannt als Fassdruck oder Zylinderbelastung) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position des Steuerungs steht.
- [`tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Winkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y–Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. Pen Stylus) als auch die Y-Achse enthält.
- [`tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Winkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X–Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. Pen Stylus) als auch die X-Achse enthält.
- [`twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung des Zeigers (z.B. Pen Stylus) um seine Hauptachse im Uhrzeigersinn in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Pen, Touch usw.).
- [`isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

### Ereignistypen und Globale Ereignishandler

Pointer Events haben zehn Ereignistypen, von denen sieben ähnliche Semantik wie ihre Mausereignisgegenstücke haben (`down`, `up`, `move`, `over`, `out`, `enter` und `leave`).

Nachfolgend eine kurze Beschreibung jedes Ereignistyps.

| Ereignis                                                                                      | Beschreibung                                                                                                                                                                                                                                                                                                                                                                      |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`pointerover`](/de/docs/Web/API/Element/pointerover_event)                                   | Wird ausgelöst, wenn ein Zeiger in die Hit-Test-Grenzen eines Elements bewegt wird.                                                                                                                                                                                                                                                                                               |
| [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)                                 | Wird ausgelöst, wenn ein Zeiger in die Hit-Test-Grenzen eines Elements oder eines seiner Nachkommen bewegt wird, auch als Ergebnis eines `pointerdown`-Ereignisses von einem Gerät, das kein Hover unterstützt (siehe `pointerdown`).                                                                                                                                             |
| [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)                                   | Wird ausgelöst, wenn ein Zeiger _aktiver Buttons-Zustand_ wird.                                                                                                                                                                                                                                                                                                                   |
| [`pointermove`](/de/docs/Web/API/Element/pointermove_event)                                   | Wird ausgelöst, wenn ein Zeiger die Koordinaten ändert. Dieses Ereignis wird auch verwendet, wenn die Änderung des Zeigerzustands nicht durch andere Ereignisse gemeldet werden kann.                                                                                                                                                                                             |
| [`pointerup`](/de/docs/Web/API/Element/pointerup_event)                                       | Wird ausgelöst, wenn ein Zeiger nicht mehr den _aktiven Buttons-Zustand_ hat.                                                                                                                                                                                                                                                                                                     |
| [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)                               | Ein Browser löst dieses Ereignis aus, wenn er feststellt, dass der Zeiger keine Ereignisse mehr erzeugen kann (zum Beispiel, wenn das zugehörige Gerät deaktiviert wird).                                                                                                                                                                                                         |
| [`pointerout`](/de/docs/Web/API/Element/pointerout_event)                                     | Wird aus verschiedenen Gründen ausgelöst, darunter: Zeiger wird aus den Hit-Test-Grenzen eines Elements bewegt; das `pointerup`-Ereignis wird für ein Gerät ausgelöst, das kein Hover unterstützt (siehe `pointerup`); nach dem Auslösen des `pointercancel`-Ereignisses (siehe `pointercancel`); wenn ein Stift-Stylus den vom Digitalisierer erkennbaren Schwebereich verlässt. |
| [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)                                 | Wird ausgelöst, wenn ein Zeiger die Hit-Test-Grenzen eines Elements verlässt. Für Pen-Geräte wird dieses Ereignis ausgelöst, wenn der Stylus den vom Digitalisierer erkennbaren Schwebereich verlässt.                                                                                                                                                                            |
| [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) {{experimental_inline}} | Wird ausgelöst, wenn ein Zeiger alle Eigenschaften ändert, die keine `pointerdown`- oder `pointerup`-Ereignisse auslösen.                                                                                                                                                                                                                                                         |
| [`gotpointercapture`](/de/docs/Web/API/Element/gotpointercapture_event)                       | Wird ausgelöst, wenn ein Element Pointer-Capture erhält.                                                                                                                                                                                                                                                                                                                          |
| [`lostpointercapture`](/de/docs/Web/API/Element/lostpointercapture_event)                     | Wird ausgelöst, nachdem Pointer-Capture für einen Zeiger freigegeben wird.                                                                                                                                                                                                                                                                                                        |

### Erweiterungen des Element-Interfaces

Es gibt drei Erweiterungen des [`Element`](/de/docs/Web/API/Element)-Interfaces:

- [`hasPointerCapture()`](/de/docs/Web/API/Element/hasPointerCapture)
  - : Zeigt an, ob das Element, auf dem es aufgerufen wird, für den durch die gegebene Zeiger-ID identifizierten Zeiger capture hat.
- [`releasePointerCapture()`](/de/docs/Web/API/Element/releasePointerCapture)
  - : Gibt (stoppt) _Pointer-Capture_ frei, das zuvor für ein spezifisches Pointer-Ereignis gesetzt wurde.
- [`setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture)
  - : Bestimmt ein bestimmtes Element als _Capture-Ziel_ zukünftiger Pointer-Ereignisse.

### Erweiterung des Navigator

Die [`Navigator.maxTouchPoints`](/de/docs/Web/API/Navigator/maxTouchPoints)-Eigenschaft wird verwendet, um die maximale Anzahl gleichzeitiger Berührungspunkte zu bestimmen, die zu einem einzigen Zeitpunkt unterstützt wird.

## Beispiele

Dieser Abschnitt enthält Beispiele zur grundlegenden Verwendung der Pointer Events-Interfaces.

### Registrieren von Ereignishandlern

In diesem Beispiel wird ein Handler für jeden Ereignistyp für das gegebene Element registriert.

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

### Ereigniseigenschaften

Dieses Beispiel zeigt, wie auf alle Eigenschaften eines Pointer Events zugegriffen wird.

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

In einigen Szenarien kann es mehrere Zeiger geben (beispielsweise ein Gerät mit sowohl einem Touchscreen als auch einer Maus) oder einen Zeiger, der mehrere Kontaktpunkte unterstützt (zum Beispiel ein Touchscreen, der mehrere Fingerberührungen unterstützt). Die Anwendung kann die [`isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary)-Eigenschaft verwenden, um einen Hauptzeiger unter den _aktiven Zeigern_ für jeden Zeigertyp zu identifizieren. Wenn eine Anwendung nur einen primären Zeiger unterstützen möchte, kann sie alle Zeigerereignisse ignorieren, die nicht primär sind.

Eine Maus hat nur einen Zeiger, daher ist sie immer der primäre Zeiger. Für Touch-Eingaben wird ein Zeiger als primär betrachtet, wenn der Benutzer den Bildschirm berührt hat, als es keine anderen aktiven Berührungen gab. Bei Stift- und Stylus-Eingaben wird ein Zeiger als primär betrachtet, wenn der Stift des Benutzers zuerst den Bildschirm berührt hat, wenn es keine anderen aktiven Stifte gab, die den Bildschirm berührten.

## Bestimmen der Tastenstatus

Einige Zeigegeräte (wie Maus und Stift) unterstützen mehrere Tasten, und die Tastenanschläge können _akkordiert_ werden (d.h. eine zusätzliche Taste drücken, während eine andere Taste auf dem Zeigegerät bereits gedrückt ist).

Um den Status der Tastenanschläge zu bestimmen, verwenden Pointer Events die [`button`](/de/docs/Web/API/MouseEvent/button)- und [`buttons`](/de/docs/Web/API/MouseEvent/buttons)-Eigenschaften des [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Interfaces (die [`PointerEvent`](/de/docs/Web/API/PointerEvent) erbt).

Die folgende Tabelle liefert die Werte von `button` und `buttons` für die verschiedenen Gerätetastenstatistiken.

| Gerätetastenstatus                                                                   | button | buttons |
| ------------------------------------------------------------------------------------ | ------ | ------- |
| Weder Tasten noch Touch-/Stiftkontakt seit dem letzten Ereignis geändert             | `-1`   | —       |
| Maus bewegen ohne gedrückte Tasten, Stift bewegt beim Schweben ohne gedrückte Tasten | —      | `0`     |
| Linke Maus, Touch-Kontakt, Stiftkontakt                                              | `0`    | `1`     |
| Mittlere Maus                                                                        | `1`    | `4`     |
| Rechte Maus, Stiftfass-Taste                                                         | `2`    | `2`     |
| X1 (zurück) Maus                                                                     | `3`    | `8`     |
| X2 (vorwärts) Maus                                                                   | `4`    | `16`    |
| Radiergummi-Taste beim Stift                                                         | `5`    | `32`    |

> [!NOTE]
> Die `button`-Eigenschaft zeigt eine Änderung des Tastenstatus an. In Fällen wie bei Touch, wenn ein einziges Ereignis mehrere Kontakte umfasst, haben alle das gleiche Wert.

## Erfassung des Zeigers

Pointer-Capture ermöglicht es, Ereignisse für ein bestimmtes {{domxref("PointerEvent","Zeiger-Ereignis", "", 1)}} an ein bestimmtes Element umzuleiten, statt den normalen [Hit-Test](#hit-test) an der Position des Zeigers durchzuführen. Dies kann verwendet werden, um zu gewährleisten, dass ein Element weiterhin Zeigereignisse empfängt, auch wenn der Kontakt des Zeigegerätes das Element verlässt (zum Beispiel durch Scrollen oder Schwenken).

Pointer-Capture wird dafür sorgen, dass das Ziel alle nachfolgenden Pointer-Ereignisse erfasst, als ob sie über dem erfassenden Ziel stattfinden würden. Dementsprechend **werden** `pointerover`, `pointerenter`, `pointerleave` und `pointerout` **nicht ausgelöst** solange dieser Capture gesetzt ist.
Für Touchscreen-Browser, die [direkte Manipulation](https://w3c.github.io/pointerevents/#dfn-direct-manipulation) zulassen, wird bei einem `pointerdown`-Ereignis automatisch eine [implizite Zeigererfassung](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture) aufgerufen. Die Erfassung kann manuell freigegeben werden, indem [`element.releasePointerCapture`](/de/docs/Web/API/Element/releasePointerCapture) auf dem Zielelement aufgerufen wird, oder sie wird automatisch nach einem `pointerup`- oder `pointercancel`-Ereignis freigegeben.

> [!NOTE]
> Wenn Sie ein Element im DOM verschieben müssen, dann stellen Sie sicher, dass `setPointerCapture()` **nach den DOM-Verschiebungen** aufgerufen wird, damit `setPointerCapture()` es nicht aus den Augen verliert. E.g., wenn Sie `Element.append()` verwenden, um ein Element woanders hin zu verschieben, stellen Sie sicher, dass `setPointerCapture()` erst danach darauf aufgerufen wird.

Das folgende Beispiel zeigt, wie die Zeigererfassung für ein Element gesetzt wird.

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

Das folgende Beispiel zeigt das Freigeben einer Zeigererfassung (wenn ein [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)-Ereignis eintritt. Der Browser macht dies automatisch, wenn ein [`pointerup`](/de/docs/Web/API/Element/pointerup_event)- oder [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)-Ereignis eintritt.

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

Die {{cssxref("touch-action")}} CSS-Eigenschaft wird verwendet, um anzugeben, ob der Browser das standardmäßige (_native_) Touch-Verhalten (wie Zoomen oder Scrollen) auf einem Bereich anwenden soll oder nicht. Diese Eigenschaft kann auf alle Elemente außer nicht-ersetzten Inline-Elementen, Tabellenzeilen, Zeilengruppen, Tabellenspalten und Spaltengruppen angewendet werden.

Ein Wert von `auto` bedeutet, dass der Browser sein Standard-Touch-Verhalten auf den angegebenen Bereich anwenden kann und der Wert `none` deaktiviert das Standard-Touch-Verhalten des Browsers für diesen Bereich. Die Werte `pan-x` und `pan-y` bedeuten, dass Berührungen, die auf dem angegebenen Bereich beginnen, nur für horizontales beziehungsweise vertikales Scrollen bestimmt sind. Der Wert `manipulation` bedeutet, dass der Browser Berührungen, die auf dem Element beginnen, nur für Scrollen und Zoomen berücksichtigen kann.

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

Im folgenden Beispiel wird das `target`-Element bei Berührung nur in horizontaler Richtung verschoben.

```css
#target {
  touch-action: pan-x;
}
```

## Kompatibilität mit Mausereignissen

Obwohl die Pointer-Event-Schnittstellen es Anwendungen ermöglichen, verbesserte Benutzererlebnisse auf Pointer-fähigen Geräten zu schaffen, ist die Realität, dass der Großteil der heutigen Webinhalte so konzipiert ist, dass er nur mit Maus-Eingaben funktioniert. Folglich muss ein Browser, auch wenn er Pointer-Events unterstützt, weiterhin Mausereignisse verarbeiten, damit Inhalte, die nur auf Maus-Eingaben ausgelegt sind, wie gewohnt funktionieren, ohne direkte Änderungen vorzunehmen. Idealerweise muss eine Pointer-fähige Anwendung Maus-Eingaben nicht explizit behandeln. Da der Browser jedoch Mausereignisse verarbeiten muss, kann es einige Kompatibilitätsprobleme geben, die behandelt werden müssen. Dieser Abschnitt enthält Informationen über das Zusammenspiel von Pointer-Events und Mausereignissen und die Auswirkungen auf Anwendungsentwickler.

Der Browser _kann generische Zeigereingaben zu Mausereignissen für Kompatibilität mit Maus-basierten Inhalten zuordnen_. Diese Zuordnung von Ereignissen wird als _Kompatibilitäts-Mausereignisse_ bezeichnet. Autoren können die Erzeugung bestimmter Kompatibilitäts-Mausereignisse verhindern, indem sie das Pointerdown-Ereignis abbrechen, aber beachten Sie, dass:

- Mausereignisse können nur verhindert werden, wenn der Zeiger aktiv ist.
- Schwebende Zeiger (z.B. eine Maus ohne gedrückte Tasten) können nicht in ihren Mausereignissen verhindert werden.
- Die Ereignisse `mouseover`, `mouseout`, `mouseenter` und `mouseleave` werden niemals verhindert (auch wenn der Zeiger aktiv ist).

## Best Practices

Hier sind einige _Best Practices_, die bei der Verwendung von Pointer Events zu beachten sind:

- Minimieren Sie die Arbeit, die in Ereignishandlern durchgeführt wird.
- Fügen Sie die Ereignishandler an ein bestimmtes Ziel-Element an (statt an das gesamte Dokument oder Knoten weiter oben im Dokumentbaum).
- Das Ziel-Element (Knoten) sollte groß genug sein, um die größte Kontaktfläche (typischerweise eine Fingerberührung) zu beherbergen. Wenn der Zielbereich zu klein ist, könnte durch das Berühren anderer Ereignisse für benachbarte Elemente ausgelöst werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Einige zusätzliche Werte wurden für die CSS-{{cssxref("touch-action")}}-Eigenschaft als Teil der [Pointer Events](https://w3c.github.io/pointerevents/) Spezifikation definiert, aber derzeit haben diese Werte eine begrenzte Implementierungsunterstützung.

## Siehe auch

### Demos und Beispiele

- [Touch/Pointer-Tests und -Demos (von Patrick H. Lauke)](https://patrickhlauke.github.io/touch/)

### Community

- [Pointer Events Arbeitsgruppe](https://github.com/w3c/pointerevents)
- [Mail-Liste](https://lists.w3.org/Archives/Public/public-pointer-events/)
- [W3C #pointerevents IRC-Kanal](irc://irc.w3.org:6667/)

### Verwandte Themen und Ressourcen

- [Touch Events Standard](https://www.w3.org/TR/touch-events/)
