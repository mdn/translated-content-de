---
title: Pointer events
slug: Web/API/Pointer_events
l10n:
  sourceCommit: a69f7c732da7be334fc2c679c5cb9484baf79ba9
---

{{DefaultAPISidebar("Pointer Events")}}

Ein Großteil des heutigen Webinhalts geht davon aus, dass das Zeigegerät des Benutzers eine Maus sein wird. Da jedoch viele Geräte andere Arten von Zeigeeingabegeräten wie Stifte/Stylus und Touch-Oberflächen unterstützen, sind Erweiterungen der bestehenden Zeigegerät-Event-Modelle erforderlich. _[Pointer-Ereignisse](#pointer-ereignis)_ adressieren dieses Bedürfnis.

Pointer-Ereignisse sind DOM-Ereignisse, die für ein Zeigegerät ausgelöst werden. Sie sind darauf ausgelegt, ein einziges DOM-Ereignismodell für die Handhabung von Eingabegeräten wie Maus, Stift/ Stylus oder Touch (wie einem oder mehreren Fingern) zu erstellen.

Der _[Pointer](#pointer)_ ist ein hardware-unabhängiges Gerät, das eine spezifische Menge von Bildschirmkoordinaten ansteuern kann. Ein einheitliches Ereignismodell für Pointer kann die Erstellung von Websites und Anwendungen vereinfachen und ein gutes Benutzererlebnis unabhängig von der Hardware des Benutzers bieten. Für Szenarien, in denen eine gerätespezifische Behandlung gewünscht wird, definieren Pointer-Ereignisse eine [`pointerType`](/de/docs/Web/API/PointerEvent/pointerType) Eigenschaft, um den Gerätetyp zu untersuchen, der das Ereignis erzeugt hat.

Die zum Umgang mit generischen Zeigegeräten benötigten Ereignisse sind analog zu den [Mausereignissen](/de/docs/Web/API/MouseEvent) (`mousedown`/`pointerdown`, `mousemove`/`pointermove`, etc.). Daher sind die Arten von Pointer-Ereignissen bewusst den Arten von Mausereignissen ähnlich.

Zusätzlich enthalten Pointer-Ereignisse die üblichen Eigenschaften, die in Mausereignissen vorhanden sind (Client-Koordinaten, Ziel-Element, Button-Zustände, etc.), sowie neue Eigenschaften für andere Formen der Eingabe: Druck, Kontaktgeometrie, Neigung, etc. Tatsächlich erbt das [`PointerEvent`](/de/docs/Web/API/PointerEvent) Interface alle Eigenschaften des [`MouseEvent`](/de/docs/Web/API/MouseEvent), was die Migration von Inhalten von Maus- zu Pointer-Ereignissen erleichtert.

## Terminologie

### Zustand aktiver Buttons

Der Zustand, wenn ein _[Pointer](#pointer)_ einen ungleich null Wert für die `buttons` Eigenschaft hat. Zum Beispiel im Fall eines Stiftes, wenn der Stift physischen Kontakt mit dem Digitalisierer hat oder mindestens ein Button gedrückt wird, während er schwebt.

### Aktiver Pointer

Jedes Eingabegerät, das in der Lage ist, Ereignisse zu erzeugen. Ein Pointer wird als aktiv betrachtet, wenn er weiterhin Ereignisse erzeugen kann. Zum Beispiel wird ein Stift, der sich in einem "down"-Zustand befindet, als aktiv betrachtet, weil er zusätzliche Ereignisse erzeugen kann, wenn der Stift angehoben oder bewegt wird.

### Digitalisierer

Ein Wahrnehmungsgerät mit einer Oberfläche, die Kontakt erkennen kann. Am häufigsten ist das Wahrnehmungsgerät ein berührungsempfindlicher Bildschirm, der Eingaben von einem Eingabegerät wie Stift, Stylus oder Finger erfassen kann. Einige Wahrnehmungsgeräte können die Nähe des Eingabegeräts erkennen, und der Zustand wird als Schweben ausgedrückt, ähnlich der Maus.

### Hit-Test

Der Prozess, den der Browser verwendet, um ein Ziel-Element für ein Pointer-Ereignis zu bestimmen. Typischerweise wird dies durch Berücksichtigung des Standorts des Pointers und auch des visuellen Layouts der Elemente in einem Dokument für Bildschirmmedien bestimmt.

### Pointer

Eine hardware-unabhängige Darstellung von Eingabegeräten, die eine spezifische Koordinate (oder eine Menge von Koordinaten) auf einem Bildschirm ansteuern können. Beispiele für _Pointer_-Eingabegeräte sind Maus, Stift/Stylus und Touch-Kontakte.

### Pointer-Erfassung

Die Pointer-Erfassung ermöglicht, dass die Ereignisse für einen Pointer auf ein bestimmtes Element umgeleitet werden, anstatt das normale Ergebnis des Hit-Tests am Standort des Pointers. Sehen Sie [das Erfassen des Pointers](#erfassen_des_pointers) für ein Beispiel.

> [!NOTE]
> _Pointer-Erfassung_ ist anders als [_Pointer-Sperre_](/de/docs/Web/API/Pointer_Lock_API), die physisch verhindert, dass der Pointer einen Bereich verlässt.

### Pointer-Ereignis

Ein DOM-[`event`](/de/docs/Web/API/PointerEvent), das für einen _[Pointer](#pointer)_ ausgelöst wird.

## Schnittstellen

Die Hauptschnittstelle ist die [`PointerEvent`](/de/docs/Web/API/PointerEvent) Schnittstelle, die einen [`constructor`](/de/docs/Web/API/PointerEvent/PointerEvent) plus mehrere Ereignistypen und zugehörige globale Ereignishandler enthält.

Der Standard beinhaltet auch einige Erweiterungen der [`Element`](/de/docs/Web/API/Element) und [`Navigator`](/de/docs/Web/API/Navigator) Schnittstellen.

Die folgenden Unterabschnitte enthalten kurze Beschreibungen jeder Schnittstelle und Eigenschaft.

### PointerEvent Schnittstelle

Die [`PointerEvent`](/de/docs/Web/API/PointerEvent) Schnittstelle erweitert die [`MouseEvent`](/de/docs/Web/API/MouseEvent) Schnittstelle und hat die folgenden Eigenschaften.

- [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}}
  - : Stellt den Winkel zwischen der Achse eines Transduktors (eines Pointers oder Stiftes) und der X-Y-Ebene eines Geräteschirms dar.
- [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}}
  - : Stellt den Winkel zwischen der Y-Z-Ebene und der Ebene dar, die sowohl die Achse des Transduktors (eines Pointers oder Stiftes) als auch die Y-Achse enthält.
- [`PointerEvent.persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für das Zeigegerät, das das `PointerEvent` erzeugt.
- [`pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Pointer, der das Ereignis verursacht.
- [`width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Größe auf der X-Achse) in CSS-Pixeln, der Kontaktgeometrie des Pointers.
- [`height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : die Höhe (Größe auf der Y-Achse) in CSS-Pixeln, der Kontaktgeometrie des Pointers.
- [`pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : der normalisierte Druck der Pointer-Eingabe im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck darstellen, den die Hardware erfassen kann.
- [`tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck der Pointer-Eingabe (auch bekannt als Fassdruck oder Zylinderstress) im Bereich `-1` bis `1`, wobei `0` die neutrale Position der Steuerung ist.
- [`tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Winkel in der Ebene (in Grad, im Bereich von `-90` bis `90`) zwischen der Y–Z-Ebene und der Ebene, die sowohl die Achse des Pointers (z.B. Stift-Stylus) als auch die Y-Achse enthält.
- [`tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : der Winkel in der Ebene (in Grad, im Bereich von `-90` bis `90`) zwischen der X–Z-Ebene und der Ebene, die sowohl die Achse des Pointers (z.B. Stift-Stylus) als auch die X-Achse enthält.
- [`twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung des Pointers (z.B. Stift-Stylus) im Uhrzeigersinn um seine Hauptachse in Grad, mit einem Wert im Bereich `0` bis `359`.
- [`pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Touch, etc.).
- [`isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Pointer den primären Pointer dieses Pointer-Typs darstellt.

### Ereignistypen und globale Ereignishandler

Die folgenden Ereignistypen verwenden die [`PointerEvent`](/de/docs/Web/API/PointerEvent) Schnittstelle:

- [`pointerover`](/de/docs/Web/API/Element/pointerover_event)
  - : Wird ausgelöst, wenn ein Pointer in die Grenzen eines [Hit-Tests](#hit-test) eines Elements bewegt wird.
- [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)
  - : Wird ausgelöst, wenn ein Pointer in die Grenzen eines [Hit-Tests](#hit-test) eines Elements oder eines seiner Nachkommen bewegt wird, einschließlich als Ergebnis eines `pointerdown` Ereignisses von einem Gerät, das kein Hover unterstützt (siehe `pointerdown`).
- [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)
  - : Wird ausgelöst, wenn ein Pointer den _Zustand aktiver Buttons_ erreicht.
- [`pointermove`](/de/docs/Web/API/Element/pointermove_event)
  - : Wird ausgelöst, wenn ein Pointer die Koordinaten ändert. Dieses Ereignis wird auch verwendet, wenn die Änderung des Pointer-Zustands nicht von anderen Ereignissen gemeldet werden kann.
- [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
  - : Wird ausgelöst, wenn ein Pointer nicht mehr im _Zustand aktiver Buttons_ ist.
- [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)
  - : Ein Browser löst dieses Ereignis aus, wenn er zu dem Schluss kommt, dass der Pointer keine weiteren Ereignisse mehr erzeugen kann (zum Beispiel, wenn das zugehörige Gerät deaktiviert wird oder der Browser beschlossen hat, die Interaktion als Pan/Zoom zu interpretieren). Informationen dazu, wie Sie dieses Verhalten steuern können, finden Sie im Abschnitt über die `touch-action` CSS-Eigenschaft unten.
- [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
  - : Wird aus verschiedenen Gründen ausgelöst, einschließlich: wenn der Pointer aus den Grenzen eines [Hit-Tests](#hit-test) eines Elements bewegt wird; beim Auslösen des Pointer-Up-Ereignisses für ein Gerät, das kein Hover unterstützt (siehe `pointerup`); nachdem das `pointercancel`-Ereignis ausgelöst wurde (siehe `pointercancel`); wenn ein Stiftstylus den Schweberbereich verlässt, der durch den Digitalisierer erkannt werden kann.
- [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)
  - : Wird ausgelöst, wenn ein Pointer die Grenzen eines [Hit-Tests](#hit-test) eines Elements verlässt. Bei Stiftgeräten wird dieses Ereignis ausgelöst, wenn der Stylus den Schweberbereich verlässt, der durch den Digitalisierer erkannt werden kann.
- [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) {{experimental_inline}}
  - : Wird ausgelöst, wenn ein Pointer eine Eigenschaft ändert, die keine `pointerdown`- oder `pointerup`-Ereignisse auslöst.
- [`gotpointercapture`](/de/docs/Web/API/Element/gotpointercapture_event)
  - : Wird ausgelöst, wenn ein Element Pointer-Erfassung erhält.
- [`lostpointercapture`](/de/docs/Web/API/Element/lostpointercapture_event)
  - : Wird ausgelöst, nachdem die Pointer-Erfassung für einen Pointer freigegeben wurde.
- [`click`](/de/docs/Web/API/Element/click_event)
  - : Wird ausgelöst, wenn ein Element aktiviert wird, zum Beispiel durch Drücken und Freigeben des primären Pointer-Buttons oder durch Verwendung der Tastatur.
- [`auxclick`](/de/docs/Web/API/Element/auxclick_event)
  - : Wird ausgelöst, wenn ein nicht-primärer Pointer-Button über einem Element gedrückt und freigegeben wird.
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
  - : Wird ausgelöst, wenn der Benutzer versucht, ein Kontextmenü zu öffnen, z.B. durch Rechtsklick oder Drücken der Kontextmenü-Taste.

Die Ereignisse `pointerdown`, `pointerup`, `pointermove`, `pointerover`, `pointerout`, `pointerenter` und `pointerleave` haben ähnliche Semantiken wie ihre Mausereignis-Gegenstücke, funktionieren jedoch auch mit anderen Zeigegeräten wie Stiften und Touchscreens.

Die Ereignisse `click`, `auxclick` und `contextmenu` repräsentieren höherstufige Aktionen, wie das Aktivieren eines Elements oder das Anfordern eines Kontextmenüs. Sie sind nicht auf Zeigereingaben beschränkt: Zum Beispiel kann eine Tastatur `click` oder `contextmenu` auslösen, ohne dass eine entsprechende Zeigerbewegung oder Tastendruck notwendig ist.

### Element-Erweiterungen

Es gibt drei Erweiterungen der [`Element`](/de/docs/Web/API/Element) Schnittstelle:

- [`hasPointerCapture()`](/de/docs/Web/API/Element/hasPointerCapture)
  - : Gibt an, ob das Element, auf dem es aufgerufen wird, die Pointer-Erfassung für den durch die gegebene Pointer-ID identifizierten Pointer hat.
- [`releasePointerCapture()`](/de/docs/Web/API/Element/releasePointerCapture)
  - : Gibt eine _Pointer-Erfassung_ frei (stoppt sie), die zuvor für ein bestimmtes Pointer-Ereignis festgelegt wurde.
- [`setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture)
  - : Bestimmt ein bestimmtes Element als _Erfassungsziel_ für zukünftige Pointer-Ereignisse.

### Navigator-Erweiterung

Die [`Navigator.maxTouchPoints`](/de/docs/Web/API/Navigator/maxTouchPoints) Eigenschaft wird verwendet, um die maximale Anzahl gleichzeitiger Berührungspunkte zu bestimmen, die zu einem bestimmten Zeitpunkt unterstützt werden.

## Beispiele

Dieser Abschnitt enthält Beispiele für die grundlegende Verwendung von Pointer-Ereignis-Schnittstellen.

### Registrierung von Ereignis-Handlern

Dieses Beispiel registriert einen Handler für jeden Ereignistyp für das gegebene Element.

```html
<div id="target">Touch me…</div>
```

```js
function overHandler(event) {}
function enterHandler(event) {}
function downHandler(event) {}
function moveHandler(event) {}
function upHandler(event) {}
function cancelHandler(event) {}
function outHandler(event) {}
function leaveHandler(event) {}
function rawUpdateHandler(event) {}
function gotCaptureHandler(event) {}
function lostCaptureHandler(event) {}
function clickHandler(event) {}
function auxClickHandler(event) {}
function contextMenuHandler(event) {}

const el = document.getElementById("target");
// Register pointer event handlers
el.onpointerover = overHandler;
el.onpointerenter = enterHandler;
el.onpointerdown = downHandler;
el.onpointermove = moveHandler;
el.onpointerup = upHandler;
el.onpointercancel = cancelHandler;
el.onpointerout = outHandler;
el.onpointerleave = leaveHandler;
el.onpointerrawupdate = rawUpdateHandler;
el.ongotpointercapture = gotCaptureHandler;
el.onlostpointercapture = lostCaptureHandler;
el.onclick = clickHandler;
el.onauxclick = auxClickHandler;
el.oncontextmenu = contextMenuHandler;
```

### Ereigniseigenschaften

Dieses Beispiel zeigt das Zugreifen auf alle Eigenschaften eines Pointer-Ereignisses.

```html
<div id="target">Touch me…</div>
```

```js
const id = -1;

function processId(event) {
  // Process this event based on the event's identifier
}
function processMouse(event) {
  // Process the mouse pointer event
}
function processPen(event) {
  // Process the pen pointer event
}
function processTouch(event) {
  // Process the touch pointer event
}
function processTilt(tiltX, tiltY) {
  // Tilt data handler
}
function processPressure(pressure) {
  // Pressure handler
}
function processNonPrimary(event) {
  // Non primary handler
}

function downHandler(ev) {
  // Calculate the touch point's contact area
  const area = ev.width * ev.height;

  // Compare cached id with this event's id and process accordingly
  if (id === ev.identifier) processId(ev);

  // Call the appropriate pointer type handler
  switch (ev.pointerType) {
    case "mouse":
      processMouse(ev);
      break;
    case "pen":
      processPen(ev);
      break;
    case "touch":
      processTouch(ev);
      break;
    default:
      console.log(`pointerType ${ev.pointerType} is not supported`);
  }

  // Call the tilt handler
  if (ev.tiltX !== 0 && ev.tiltY !== 0) processTilt(ev.tiltX, ev.tiltY);

  // Call the pressure handler
  processPressure(ev.pressure);

  // If this event is not primary, call the non primary handler
  if (!ev.isPrimary) processNonPrimary(ev);
}

const el = document.getElementById("target");
// Register pointerdown handler
el.onpointerdown = downHandler;
```

## Bestimmung des primären Pointers

In einigen Szenarien kann es mehrere Pointer geben (z.B. ein Gerät mit sowohl Touchscreen als auch Maus), oder einen Pointer, der mehrere Kontaktpunkte unterstützt (z.B. ein Touchscreen, der mehrere Fingerberührungen unterstützt). Die Anwendung kann die [`isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) Eigenschaft verwenden, um einen Haupt-Pointer unter den Satz der _aktiven Pointer_ für jeden Pointer-Typ zu identifizieren. Wenn eine Anwendung nur einen primären Pointer unterstützen möchte, kann sie alle Pointer-Ereignisse ignorieren, die nicht primär sind.

Eine Maus hat nur einen einzigen Pointer und wird daher immer der primäre Pointer sein. Bei Berührungseingaben wird ein Pointer als primär betrachtet, wenn der Benutzer den Bildschirm berührt hat, als es keine anderen aktiven Berührungen gab. Bei Stift- und Stylus-Eingaben wird ein Pointer als primär betrachtet, wenn der Stift den Bildschirm berührt hat, als es keine anderen aktiven Stifte gab, die den Bildschirm berührten.

## Bestimmung der Zustände von Buttons

Einige Pointer-Geräte (wie Maus und Stift) unterstützen mehrere Buttons, und die Button-Drücke können _begleitet_ sein (d.h. ein zusätzlicher Button wird gedrückt, während ein anderer Button auf dem Pointer-Gerät bereits gedrückt ist).

Um den Zustand der Button-Drücke zu bestimmen, verwenden Pointer-Ereignisse die [`button`](/de/docs/Web/API/MouseEvent/button) und [`buttons`](/de/docs/Web/API/MouseEvent/buttons) Eigenschaften der [`MouseEvent`](/de/docs/Web/API/MouseEvent) Schnittstelle (von der [`PointerEvent`](/de/docs/Web/API/PointerEvent) erbt).

Die folgende Tabelle gibt die Werte von `button` und `buttons` für die verschiedenen Zustände des Geräte-Buttons an.

| Zustand des Geräte-Buttons                                                                      | button | buttons |
| ----------------------------------------------------------------------------------------------- | ------ | ------- |
| Weder Buttons noch Touch-/Stiftkontakt haben sich seit dem letzten Ereignis verändert           | `-1`   | —       |
| Mausbewegung ohne gedrückte Buttons, Stift bewegt sich im Schwebezustand ohne gedrückte Buttons | —      | `0`     |
| Linke Maus, Touch-Kontakt, Stiftkontakt                                                         | `0`    | `1`     |
| Mittlere Maus                                                                                   | `1`    | `4`     |
| Rechte Maus, Stift-Fass-Button                                                                  | `2`    | `2`     |
| X1 (rückwärts) Maus                                                                             | `3`    | `8`     |
| X2 (vorwärts) Maus                                                                              | `4`    | `16`    |
| Stift-Radier-Button                                                                             | `5`    | `32`    |

> [!NOTE]
> Die `button`-Eigenschaft zeigt eine Änderung im Zustand des Buttons an. Wie im Fall von Touch, wenn mehrere Ereignisse mit einem Ereignis auftreten, haben alle denselben Wert.

## Erfassen des Pointers

Die Pointer-Erfassung ermöglicht, dass Ereignisse für ein bestimmtes [Pointer-Ereignis](/de/docs/Web/API/PointerEvent) auf ein bestimmtes Element umgeleitet werden, anstatt auf den normalen [Hit-Test](#hit-test) an der Position des Pointers. Dies kann verwendet werden, um sicherzustellen, dass ein Element weiterhin Pointer-Ereignisse empfängt, selbst wenn die Kontaktstelle des Pointer-Geräts das Element verlässt (zum Beispiel durch Scrollen oder Schwenken).

Die Pointer-Erfassung wird das Ziel dazu veranlassen, alle nachfolgenden Pointer-Ereignisse so zu erfassen, als ob sie über dem erfassenden Ziel ablaufen würden. Dementsprechend werden `pointerover`, `pointerenter`, `pointerleave` und `pointerout` **nicht ausgelöst**, solange dieser Erfassungsvorgang eingestellt ist. Für Touchscreen-Browser, die [direkte Manipulation](https://w3c.github.io/pointerevents/#dfn-direct-manipulation) erlauben, wird eine [implizite Pointer-Erfassung](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture) auf das Element gerufen, wenn ein `pointerdown`-Ereignis ausgelöst wird. Die Erfassung kann manuell durch Aufrufen von [`element.releasePointerCapture`](/de/docs/Web/API/Element/releasePointerCapture) auf das Zielelement freigegeben werden, oder sie wird implizit nach einem `pointerup`- oder `pointercancel`-Ereignis freigegeben.

> [!NOTE]
> Wenn Sie ein Element im DOM verschieben müssen, stellen Sie sicher, dass Sie `setPointerCapture()` **nach der Bewegung im DOM** aufrufen, damit `setPointerCapture()` nicht den Überblick verliert. Wenn Sie z.B. verwenden müssen `Element.append()`, um ein Element an eine andere Stelle zu verschieben, stellen Sie sicher, dass Sie erst nach dem Aufruf von `Element.append()` `setPointerCapture()` darauf anwenden.

Das folgende Beispiel zeigt die Pointer-Erfassung, die auf ein Element eingestellt wird.

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

Das folgende Beispiel zeigt eine Pointer-Erfassung, die freigegeben wird (wenn ein [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event) Ereignis auftritt. Der Browser übernimmt dies automatisch, wenn ein [`pointerup`](/de/docs/Web/API/Element/pointerup_event) oder [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event) Ereignis auftritt.

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

Die {{cssxref("touch-action")}} CSS-Eigenschaft wird verwendet, um festzulegen, ob der Browser sein Standardverhalten (_native_) der Berührung (wie Zoomen oder Scrollen) auf eine Region anwenden soll oder nicht. Diese Eigenschaft kann auf alle Elemente außer nicht-ersetzten Inline-Elementen, Tabellenzeilen, Zeilengruppen, Tabellenspalten und Spaltengruppen angewendet werden.

Ein Wert von `auto` bedeutet, dass der Browser frei ist, sein Standardverhalten für Berührungen auf die angegebene Region anzuwenden, und der Wert `none` deaktiviert das Standardverhalten des Browsers für Berührungen in der Region. Die Werte `pan-x` und `pan-y` bedeutet, dass Berührungen, die in der angegebenen Region beginnen, nur für horizontales bzw. vertikales Scrollen sind. Der Wert `manipulation` bedeutet, dass der Browser berücksichtigen kann, dass Berührungen, die auf dem Element beginnen, nur zum Scrollen und Zoomen sind.

Im folgenden Beispiel ist das Standardverhalten für Berührungen für einige `button`-Elemente deaktiviert.

```css
button#tiny {
  touch-action: none;
}
```

Im folgenden Beispiel wird das `target` Element nur in horizontaler Richtung verschoben, wenn es berührt wird.

```css
#target {
  touch-action: pan-x;
}
```

## Kompatibilität mit Mausereignissen

Obwohl die Pointer-Ereignis-Schnittstellen es Anwendungen ermöglichen, verbesserte Benutzererfahrungen auf Pointer-fähigen Geräten zu schaffen, ist die Realität so, dass der Großteil der heutigen Webinhalte darauf ausgelegt ist, ausschließlich mit Maus-Eingaben zu funktionieren. Folglich muss der Browser, selbst wenn er Pointer-Ereignisse unterstützt, weiterhin Mausereignisse verarbeiten, damit Inhalte, die nur Maus-Eingaben voraussetzen, ohne direkte Änderungen funktionieren. Im Idealfall benötigt eine Pointer-fähige Anwendung keine explizite Handhabung von Maus-Eingaben. Da der Browser jedoch Mausereignisse verarbeiten muss, kann es einige Kompatibilitätsprobleme geben, die bearbeitet werden müssen. Dieser Abschnitt enthält Informationen über die Interaktion zwischen Pointer- und Mausereignissen und die Auswirkungen auf Anwendungsentwickler.

Der Browser _kann generische Pointer-Eingaben auf Mausereignisse für die Kompatibilität mit mausbasierendem Inhalt abbilden_. Diese Abbildung der Ereignisse wird _Kompatibilitätsmausereignisse_ genannt. Autoren können die Erstellung bestimmter Kompatibilitätsmausereignisse verhindern, indem sie das Pointerdown-Ereignis abbrechen, beachten Sie jedoch, dass:

- Mausereignisse nur verhindert werden können, wenn der Zeiger nach unten ist.
- Schwebende Zeiger (z.B. eine Maus ohne gedrückte Tasten) können ihre Mausereignisse nicht verhindern.
- Die Ereignisse `mouseover`, `mouseout`, `mouseenter` und `mouseleave` werden niemals verhindert (auch wenn der Zeiger nach unten ist).

## Best Practices

Hier sind einige _Best Practices_ zu berücksichtigen, wenn Sie Pointer-Ereignisse verwenden:

- Minimieren Sie die Menge an Arbeit, die in Ereignis-Handlern durchgeführt wird.
- Fügen Sie die Ereignis-Handler zu einem bestimmten Ziel-Element hinzu (anstatt zum gesamten Dokument oder Knoten höher im Dokumentbaum).
- Das Ziel-Element (Knoten) sollte groß genug sein, um die größte Kontaktfläche (typischerweise eine Fingerberührung) zu berücksichtigen. Wenn der Zielbereich zu klein ist, könnte das Berühren andere Ereignisse bei benachbarten Elementen auslösen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Einige zusätzliche Werte wurden für die CSS {{cssxref("touch-action")}} Eigenschaft im Rahmen der [Pointer Events](https://w3c.github.io/pointerevents/) Spezifikation definiert, aber derzeit haben diese Werte nur begrenzte Unterstützung in der Implementierung.

## Siehe auch

- [Touch Events](/de/docs/Web/API/Touch_events)
- [Arbeitsgruppe Pointer Events](https://github.com/w3c/pointerevents)
- [Mailingliste](https://lists.w3.org/Archives/Public/public-pointer-events/)
- [W3C #pointerevents IRC-Kanal](irc://irc.w3.org:6667/)
- [Tests und Demos zu Touch-/Pointer-Ereignissen](https://patrickhlauke.github.io/touch/) von Patrick H. Lauke
