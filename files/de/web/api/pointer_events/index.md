---
title: Pointer events
slug: Web/API/Pointer_events
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{DefaultAPISidebar("Pointer Events")}}

Ein Großteil der heutigen Webinhalte geht davon aus, dass das Zeigegerät des Benutzers eine Maus ist. Da jedoch viele Geräte andere Arten von Zeigeeingabegeräten unterstützen, wie Stifte/Stylus oder Touch-Oberflächen, sind Erweiterungen der bestehenden Zeigegeräte-Ereignismodelle notwendig. _[Zeiger-Ereignisse](#zeiger-ereignis)_ erfüllen diesen Bedarf.

Zeiger-Ereignisse sind DOM-Ereignisse, die für ein Zeigegerät ausgelöst werden. Sie sind darauf ausgelegt, ein einheitliches DOM-Ereignismodell zu schaffen, das Zeigeeingabegeräte wie Maus, Stift/ Stylus oder Touch unterstützt (z.B. ein oder mehrere Finger).

Der _[Zeiger](#zeiger)_ ist ein hardwareunabhängiges Gerät, das auf ein bestimmtes Set von Bildschirmkoordinaten zielen kann. Ein einheitliches Ereignismodell für Zeiger kann das Erstellen von Websites und Anwendungen vereinfachen und eine gute Benutzererfahrung unabhängig von der Hardware des Benutzers bieten. Für Szenarien, in denen eine gerätespezifische Handhabung gewünscht ist, definiert Zeiger-Ereignisse eine [`pointerType`](/de/docs/Web/API/PointerEvent/pointerType)-Eigenschaft, um den Gerätetyp zu überprüfen, der das Ereignis verursacht hat.

Die für die Handhabung allgemeiner Zeigereingaben benötigten Ereignisse sind analog zu [Mausereignissen](/de/docs/Web/API/MouseEvent) (`mousedown`/`pointerdown`, `mousemove`/`pointermove` usw.). Daher sind Zeiger-Ereignistypen absichtlich den Maustypen ähnlich.

Darüber hinaus enthält ein Zeiger-Ereignis die üblichen Eigenschaften, die in Maus-Ereignissen vorhanden sind (Client-Koordinaten, Ziel-Element, Tastenstatus usw.) sowie neue Eigenschaften für andere Eingabeformen: Druck, Kontaktgeometrie, Neigung usw. Tatsächlich erbt die [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle alle Eigenschaften der [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Schnittstelle, was die Migration von Inhalten von Maus- zu Zeiger-Ereignissen erleichtert.

## Terminologie

### Aktiver Tastenstatus

Der Zustand, wenn ein _[Zeiger](#zeiger)_ einen nicht-nullwertigen `buttons`-Eigenschaftswert hat. Zum Beispiel, bei einem Stift, wenn der Stift physischen Kontakt mit dem Digitalisierer hat oder mindestens eine Taste gedrückt ist, während er schwebt.

### Aktiver Zeiger

Jedes _[Zeiger](#zeiger)_ Eingabegerät, das Ereignisse erzeugen kann. Ein Zeiger wird als aktiv betrachtet, wenn er weiterhin weitere Ereignisse erzeugen kann. Zum Beispiel gilt ein Stift, der in einem gedrückten Zustand ist, als aktiv, da er zusätzliche Ereignisse erzeugen kann, wenn der Stift angehoben oder bewegt wird.

### Digitalisierer

Ein Erfassungsgerät mit einer Oberfläche, die Kontakt erfassen kann. Meistens handelt es sich um einen touchfähigen Bildschirm, der Eingaben von einem Eingabegerät wie einem Stift, Stylus oder Finger erfassen kann. Einige Erfassungsgeräte können die nahe Nähe des Eingabegeräts erkennen, und der Zustand wird als Schwebezustand wie bei der Maus ausgedrückt.

### Treffer-Test

Der Prozess, den der Browser verwendet, um ein Ziel-Element für ein Zeiger-Ereignis zu bestimmen. Typischerweise wird dies durch Betrachtung der Position des Zeigers und auch des visuellen Layouts der Elemente im Dokument auf Bildschirmmedien bestimmt.

### Zeiger

Eine hardwareunabhängige Darstellung von Eingabegeräten, die auf eine bestimmte Koordinate (oder ein Koordinatenset) auf einem Bildschirm zielen können. Beispiele für _Zeiger_-Eingabegeräte sind Maus, Stift/Stylus und Touchkontakte.

### Zeiger-Erfassung

Die Zeigererfassung ermöglicht, dass die Ereignisse für einen Zeiger auf ein bestimmtes Element umgeleitet werden, anstatt auf das normale Ergebnis eines Treffer-Tests der Zeigerposition. Sehen Sie sich [das Einfangen des Zeigers](#erfassen_des_zeigers) für ein Beispiel an.

> [!NOTE]
> _Zeiger-Erfassung_ unterscheidet sich vom [_Zeiger-Sperre_](/de/docs/Web/API/Pointer_Lock_API), die physisch verhindert, dass der Zeiger einen Bereich verlässt.

### Zeiger-Ereignis

Ein DOM-[`Ereignis`](/de/docs/Web/API/PointerEvent), das für ein _[Zeiger](#zeiger)_ ausgelöst wird.

## Schnittstellen

Die primäre Schnittstelle ist die [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle, die einen [`Konstruktor`](/de/docs/Web/API/PointerEvent/PointerEvent) plus mehrere Ereignistypen und zugehörige globale Ereignis-Handler hat.

Der Standard umfasst auch einige Erweiterungen der [`Element`](/de/docs/Web/API/Element)- und [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstellen.

Die folgenden Unterabschnitte enthalten kurze Beschreibungen jeder Schnittstelle und Eigenschaft.

### PointerEvent-Schnittstelle

Die [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle erweitert die [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Schnittstelle und hat die folgenden Eigenschaften.

- [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}}
  - : Repräsentiert den Winkel zwischen einer Wandlerachse (einem Zeiger oder Stylus) und der X-Y-Ebene eines Gerätdisplays.
- [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}}
  - : Repräsentiert den Winkel zwischen der Y-Z-Ebene und der Ebene, die sowohl die Wandlerachse (ein Zeiger oder Stylus) als auch die Y-Achse enthält.
- [`PointerEvent.persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für das Zeigegerät, das das `PointerEvent` erzeugt.
- [`pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- [`width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Größe auf der X-Achse) der Kontaktgeometrie des Zeigers in CSS-Pixeln.
- [`height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Größe auf der Y-Achse) der Kontaktgeometrie des Zeigers in CSS-Pixeln.
- [`pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck der Zeigereingabe im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen bzw. maximalen Druck darstellen, den die Hardware zu erkennen vermag.
- [`tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck der Zeigereingabe (auch bekannt als Fassdruck oder Zylinderstress) im Bereich zwischen `-1` bis `1`, wobei `0` die neutrale Position der Kontrolle ist.
- [`tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Ebenenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y–Z-Ebene und der Ebene, die sowohl die Zeigerachse (z.B. Pen Stylus) als auch die Y-Achse enthält.
- [`tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Ebenenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X–Z-Ebene und der Ebene, die sowohl die Zeigerachse (z.B. Pen Stylus) als auch die X-Achse enthält.
- [`twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung des Zeigers (z.B. Pen Stylus) im Uhrzeigersinn um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Touch usw.).
- [`isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

### Ereignistypen und globale Ereignis-Handler

Zeiger-Ereignisse haben zehn Ereignistypen, von denen sieben ähnliche Semantik wie ihre Maus-Ereignis-Pendants haben (`down`, `up`, `move`, `over`, `out`, `enter` und `leave`).

Im Folgenden eine kurze Beschreibung jedes Ereignistyps.

| Ereignis                                                                                      | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`pointerover`](/de/docs/Web/API/Element/pointerover_event)                                   | Ausgelöst, wenn ein Zeiger in die [Treffer-Test](#treffer-test)-Grenzen eines Elements bewegt wird.                                                                                                                                                                                                                                                                                                                                 |
| [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)                                 | Ausgelöst, wenn ein Zeiger in die [Treffer-Test](#treffer-test)-Grenzen eines Elements oder eines seiner Nachkommen verschoben wird, einschließlich als Ergebnis eines `pointerdown`-Ereignisses von einem Gerät, das Schweben nicht unterstützt (siehe `pointerdown`).                                                                                                                                                             |
| [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)                                   | Ausgelöst, wenn ein Zeiger einen _aktiven Tastenstatus_ wird.                                                                                                                                                                                                                                                                                                                                                                       |
| [`pointermove`](/de/docs/Web/API/Element/pointermove_event)                                   | Ausgelöst, wenn ein Zeiger die Koordinaten ändert. Dieses Ereignis wird auch verwendet, wenn die Änderung des Zeigerzustands nicht durch andere Ereignisse gemeldet werden kann.                                                                                                                                                                                                                                                    |
| [`pointerup`](/de/docs/Web/API/Element/pointerup_event)                                       | Ausgelöst, wenn ein Zeiger keinen _aktiven Tastenstatus_ mehr hat.                                                                                                                                                                                                                                                                                                                                                                  |
| [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)                               | Ein Browser löst dieses Ereignis aus, wenn er schlussfolgert, dass der Zeiger keine weiteren Ereignisse mehr erzeugen kann (zum Beispiel, wenn das zugehörige Gerät deaktiviert ist oder der Browser entschieden hat, die Interaktion stattdessen als Pan/Zoom zu interpretieren). Informationen zur Kontrolle dieses Verhaltens finden Sie im [Abschnitt zur `touch-action` CSS-Eigenschaft](#touch-action_css-eigenschaft) unten. |
| [`pointerout`](/de/docs/Web/API/Element/pointerout_event)                                     | Ausgelöst aus mehreren Gründen: Der Zeiger wird aus den [Treffer-Test](#treffer-test)-Grenzen eines Elements bewegt; das `pointerup`-Ereignis für ein Gerät, das nicht das Schweben unterstützt, wird ausgelöst (siehe `pointerup`); nach Auslösung des `pointercancel`-Ereignisses (siehe `pointercancel`); wenn ein Pen-Stylus den vom Digitalisierer erkennbaren Schwebebereich verlässt.                                        |
| [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)                                 | Ausgelöst, wenn ein Zeiger aus den [Treffer-Test](#treffer-test)-Grenzen eines Elements bewegt wird. Für Pen-Geräte wird dieses Ereignis ausgelöst, wenn der Stylus den vom Digitalisierer erkennbaren Schwebezustand verlässt.                                                                                                                                                                                                     |
| [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) {{experimental_inline}} | Ausgelöst, wenn ein Zeiger eine Änderung bei Eigenschaften erfährt, die keine `pointerdown` oder `pointerup`-Ereignisse auslösen.                                                                                                                                                                                                                                                                                                   |
| [`gotpointercapture`](/de/docs/Web/API/Element/gotpointercapture_event)                       | Ausgelöst, wenn ein Element Zeigererfassung erhält.                                                                                                                                                                                                                                                                                                                                                                                 |
| [`lostpointercapture`](/de/docs/Web/API/Element/lostpointercapture_event)                     | Ausgelöst, nachdem die Zeigererfassung für einen Zeiger aufgehoben wurde.                                                                                                                                                                                                                                                                                                                                                           |

### Elementerweiterungen

Es gibt drei Erweiterungen der [`Element`](/de/docs/Web/API/Element)-Schnittstelle:

- [`hasPointerCapture()`](/de/docs/Web/API/Element/hasPointerCapture)
  - : Gibt an, ob das Element, auf dem es aufgerufen wird, die Zeigererfassung für den durch die gegebene Zeiger-ID identifizierten Zeiger hat.
- [`releasePointerCapture()`](/de/docs/Web/API/Element/releasePointerCapture)
  - : Hebt die _Zeigererfassung_ auf, die zuvor für ein bestimmtes Zeiger-Ereignis festgelegt wurde.
- [`setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture)
  - : Bestimmt ein bestimmtes Element als _Erfassungsziel_ zukünftiger Zeiger-Ereignisse.

### Navigator-Erweiterung

Die [`Navigator.maxTouchPoints`](/de/docs/Web/API/Navigator/maxTouchPoints)-Eigenschaft wird verwendet, um die maximale Anzahl gleichzeitiger Berührungspunkte zu bestimmen, die zu einem bestimmten Zeitpunkt unterstützt werden.

## Beispiele

Dieser Abschnitt enthält Beispiele für die grundlegende Verwendung der Zeigerereignisse-Schnittstellen.

### Registrieren von Ereignis-Handlern

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
```

### Eigenschaften von Ereignissen

Dieses Beispiel zeigt, wie auf alle Eigenschaften eines Zeigerereignisses zugegriffen wird.

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

## Bestimmen des primären Zeigers

In einigen Szenarien kann es mehrere Zeiger geben (zum Beispiel ein Gerät mit sowohl Touchscreen als auch Maus) oder einen Zeiger, der mehrere Kontaktpunkte unterstützt (zum Beispiel einen Touchscreen, der mehrere Fingertipps unterstützt). Die Anwendung kann die [`isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary)-Eigenschaft verwenden, um einen Hauptzeiger unter der Menge der _aktiven Zeiger_ für jeden Zeigertyp zu identifizieren. Wenn eine Anwendung nur einen primären Zeiger unterstützen möchte, kann sie alle Zeigerereignisse ignorieren, die nicht primär sind.

Eine Maus hat nur einen Zeiger, also wird dieser immer der primäre Zeiger sein. Für Touch-Eingaben wird ein Zeiger als primär betrachtet, wenn der Benutzer den Bildschirm berührt hat, als es keine anderen aktiven Berührungen gab. Für Stift- und Stylus-Eingaben wird ein Zeiger als primär betrachtet, wenn der Stift des Benutzers den Bildschirm initial berührt hat, während keine anderen aktiven Stifte den Bildschirm berührten.

## Bestimmen der Tastenstatus

Einige Zeigegeräte (wie Maus und Stift) unterstützen mehrere Tasten, und die Tastenbetätigungen können _überlagert_ sein (d.h. eine zusätzliche Taste wird gedrückt, während eine andere Taste am Zeigegerät bereits gedrückt ist).

Um den Zustand der Tastenbetätigungen zu bestimmen, verwenden Zeiger-Ereignisse die [`button`](/de/docs/Web/API/MouseEvent/button)- und [`buttons`](/de/docs/Web/API/MouseEvent/buttons)-Eigenschaften der [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Schnittstelle (von der [`PointerEvent`](/de/docs/Web/API/PointerEvent) erbt).

Die folgende Tabelle liefert die Werte von `button` und `buttons` für die verschiedenen Gerätezustände der Tasten.

| Gerätezustand der Taste                                                                   | button | buttons |
| ----------------------------------------------------------------------------------------- | ------ | ------- |
| Weder Tasten noch Touch-/Stiftkontakt haben sich seit dem letzten Ereignis geändert       | `-1`   | —       |
| Mausbewegung ohne gedrückte Tasten, Stift bewegt sich beim Schweben ohne gedrückte Tasten | —      | `0`     |
| Linke Maus, Touch-Kontakt, Stiftkontakt                                                   | `0`    | `1`     |
| Mittlere Maus                                                                             | `1`    | `4`     |
| Rechte Maus, Stift Laufrollenknopf                                                        | `2`    | `2`     |
| X1 (zurück) Maus                                                                          | `3`    | `8`     |
| X2 (vorwärts) Maus                                                                        | `4`    | `16`    |
| Stift Radiergummiknopf                                                                    | `5`    | `32`    |

> [!NOTE]
> Die `button`-Eigenschaft gibt eine Änderung im Zustand der Taste an. Es sei jedoch darauf hingewiesen, dass, wie im Fall der Berührung, wenn mehrere Ereignisse mit einem einzigen Ereignis auftreten, alle davon denselben Wert haben.

## Erfassen des Zeigers

Die Zeiger-Erfassung ermöglicht, dass Ereignisse für ein bestimmtes [Zeiger-Ereignis](/de/docs/Web/API/PointerEvent) auf ein bestimmtes Element umgeleitet werden, anstatt dem normalen [Treffer-Test](#treffer-test) an der Position des Zeigers zu folgen. Dies kann verwendet werden, um sicherzustellen, dass ein Element weiterhin Zeigerereignisse empfängt, auch wenn der Kontakt des Zeigegeräts das Element verlässt (zum Beispiel durch Scrollen oder Panning).

Die Zeigererfassung sorgt dafür, dass das Ziel alle nachfolgenden Zeigerereignisse erfasst, als ob sie über dem erfassenden Ziel stattfinden würden. Folglich werden `pointerover`, `pointerenter`, `pointerleave` und `pointerout` **nicht ausgelöst**, solange diese Erfassung gesetzt ist.
Für Browser mit Touchscreens, die [direkte Manipulation](https://w3c.github.io/pointerevents/#dfn-direct-manipulation) zulassen, wird eine [implizite Zeigererfassung](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture) auf dem Element aufgerufen, wenn ein `pointerdown`-Ereignis ausgelöst wird. Die Erfassung kann manuell aufgehoben werden, indem [`element.releasePointerCapture`](/de/docs/Web/API/Element/releasePointerCapture) auf das Ziel-Element aufgerufen wird, oder sie wird implizit nach einem `pointerup`- oder `pointercancel`-Ereignis freigegeben.

> [!NOTE]
> Wenn Sie ein Element im DOM verschieben müssen, stellen Sie sicher, `setPointerCapture()` **nach den DOM-Verschiebungen** aufzurufen, damit `setPointerCapture()` es nicht aus den Augen verliert. Wenn Sie z.B. `Element.append()` verwenden müssen, um ein Element an eine andere Stelle zu verschieben, stellen Sie sicher, `setPointerCapture()` erst nach dem Aufruf von `Element.append()` auf dieses Element anzuwenden.

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

const el = document.getElementById("target");
el.onpointerdown = downHandler;
```

Das folgende Beispiel zeigt, wie eine Zeigererfassung freigegeben wird (wenn ein [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)-Ereignis eintritt. Der Browser erledigt dies automatisch, wenn ein [`pointerup`](/de/docs/Web/API/Element/pointerup_event)- oder [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)-Ereignis auftritt.

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

## touch-action CSS-Eigenschaft

Die {{cssxref("touch-action")}} CSS-Eigenschaft wird verwendet, um anzugeben, ob der Browser sein Standardverhalten (nativ) bei Berührung (wie Zoomen oder Panning) auf eine Region anwenden soll oder nicht. Diese Eigenschaft kann auf alle Elemente angewendet werden, außer: nicht ersetzte Inline-Elemente, Tabellenzeilen, Zeilengruppen, Tabellenspalten und Spaltengruppen.

Ein Wert von `auto` bedeutet, dass der Browser frei ist, sein Standard-Touch-Verhalten (auf die angegebene Region) anzuwenden, und der Wert `none` deaktiviert das Standard-Touch-Verhalten des Browsers für die Region. Die Werte `pan-x` und `pan-y` bedeuten, dass Berührungen, die auf der angegebenen Region beginnen, nur horizontal bzw. vertikal scrollen sollen. Der Wert `manipulation` bedeutet, dass der Browser Berührungen, die auf dem Element beginnen, nur zum Scrollen und Zoomen in Betracht ziehen darf.

Im folgenden Beispiel ist das Standard-Touch-Verhalten für einige `button`-Elemente deaktiviert.

```css
button#tiny {
  touch-action: none;
}
```

Im folgenden Beispiel wird das `target`-Element, wenn es berührt wird, nur in der horizontalen Richtung verschoben.

```css
#target {
  touch-action: pan-x;
}
```

## Kompatibilität mit Mausereignissen

Obwohl die Zeiger-Ereignis-Schnittstellen Anwendungen ermöglichen, verbesserte Benutzererfahrungen auf zeigerfähigen Geräten zu schaffen, ist die Realität, dass der Großteil der heutigen Webinhalte nur auf Maus-Eingaben ausgelegt ist. Folglich muss ein Browser, selbst wenn er Zeiger-Ereignisse unterstützt, weiterhin Mausereignisse verarbeiten, damit Inhalte, die nur Maus-Eingaben voraussetzen, ohne direkte Anpassung funktionieren. Idealerweise muss eine zeigerfähige Anwendung nicht explizit mit Maus-Eingaben umgehen. Da jedoch der Browser Mausereignisse verarbeiten muss, kann es einige Kompatibilitätsprobleme geben, die angesprochen werden müssen. Dieser Abschnitt enthält Informationen über die Interaktion von Zeiger- und Mausereignissen und deren Auswirkungen für Anwendungsentwickler.

Der Browser _kann generische Zeigereingaben Ereignisse auf Mausereignisse abbilden, um Kompatibilität mit mausbasierter Inhalte zu gewährleisten_. Diese Zuordnung von Ereignissen wird als _Mauskompatibilitätsereignisse_ bezeichnet. Autoren können die Erzeugung bestimmter Mauskompatibilitätsereignisse verhindern, indem sie das pointerdown-Ereignis abbrechen, aber beachten Sie:

- Mausereignisse können nur verhindert werden, wenn der Zeiger unten ist.
- Schwebende Zeiger (z.B. eine Maus ohne gedrückte Tasten) können ihre Mausereignisse nicht verhindern.
- Die Ereignisse `mouseover`, `mouseout`, `mouseenter` und `mouseleave` werden niemals verhindert (selbst wenn der Zeiger unten ist).

## Beste Praktiken

Hier sind einige _beste Praktiken_, die bei der Verwendung von Zeiger-Ereignissen zu beachten sind:

- Minimieren Sie die Menge an Arbeit, die in Ereignis-Handlern durchgeführt wird.
- Fügen Sie die Ereignis-Handler einem spezifischen Ziel-Element (statt des gesamten Dokuments oder Knoten weiter oben im Dokumentbaum) hinzu.
- Das Ziel-Element (Knoten) sollte groß genug sein, um den größten Kontaktflächenbereich (typischerweise eine Fingerberührung) aufzunehmen. Wenn das Zielgebiet zu klein ist, könnte das Berühren dazu führen, dass andere Ereignisse für benachbarte Elemente ausgelöst werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Einige zusätzliche Werte sind für die CSS-{{cssxref("touch-action")}}-Eigenschaft als Teil der [Pointer Events](https://w3c.github.io/pointerevents/)-Spezifikation definiert, aber derzeit haben diese Werte begrenzte Implementierungsunterstützung.

## Siehe auch

- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
- [Pointer Events Working Group](https://github.com/w3c/pointerevents)
- [Mail-Liste](https://lists.w3.org/Archives/Public/public-pointer-events/)
- [W3C #pointerevents IRC-Kanal](irc://irc.w3.org:6667/)
- [Touch-/Zeiger-Tests und Demos](https://patrickhlauke.github.io/touch/) von Patrick H. Lauke
