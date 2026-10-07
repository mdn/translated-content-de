---
title: Pointer events
slug: Web/API/Pointer_events
l10n:
  sourceCommit: 4bb8f0d1f9cb2d0e23b9e19f798a7ff39ac34a49
---

{{DefaultAPISidebar("Pointer Events")}}

Viele heutige Webinhalte gehen davon aus, dass die Nutzer eine Maus als Zeigegerät verwenden. Da viele Geräte jedoch auch andere Eingabegeräte wie Stifte und berührungsempfindliche Oberflächen unterstützen, müssen die bestehenden Ereignismodelle für Zeigegeräte erweitert werden. _[Pointer-Events](#pointer_event)_ erfüllen diesen Bedarf.

Pointer-Events sind DOM-Ereignisse, die von einem Zeigegerät ausgelöst werden. Sie sollen ein einheitliches DOM-Ereignismodell für Eingaben per Maus, Stift oder Berührung (etwa mit einem oder mehreren Fingern) bereitstellen.

Ein _[Pointer](#pointer)_ ist eine hardwareunabhängige Repräsentation eines Eingabegeräts, das auf bestimmte Bildschirmkoordinaten zeigen kann. Ein einheitliches Ereignismodell für Pointer kann die Entwicklung von Websites und Anwendungen vereinfachen und unabhängig von der verwendeten Hardware eine gute Nutzererfahrung ermöglichen. Wenn eine gerätespezifische Verarbeitung erforderlich ist, lässt sich über die Eigenschaft [`pointerType`](/de/docs/Web/API/PointerEvent/pointerType) ermitteln, welcher Gerätetyp das Ereignis ausgelöst hat.

Die Ereignisse zur Verarbeitung allgemeiner Pointer-Eingaben entsprechen den [Mausereignissen](/de/docs/Web/API/MouseEvent) (`mousedown`/`pointerdown`, `mousemove`/`pointermove` usw.). Deshalb ähneln die Bezeichnungen der Pointer-Events bewusst denen der Mausereignisse.

Ein Pointer-Event enthält neben den üblichen Eigenschaften von Mausereignissen (Client-Koordinaten, Zielelement, Tastenstatus usw.) weitere Eigenschaften für andere Eingabeformen, etwa Druck, Geometrie der Kontaktfläche und Neigung. Die Schnittstelle [`PointerEvent`](/de/docs/Web/API/PointerEvent) erbt alle Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent). Das erleichtert die Umstellung von Mausereignissen auf Pointer-Events.

## Terminologie

### active buttons state

Der Zustand, in dem die Eigenschaft `buttons` eines _[Pointers](#pointer)_ einen Wert ungleich null hat. Bei einem Stift ist dies beispielsweise der Fall, wenn er den Digitizer berührt oder wenn beim Schweben über der Oberfläche mindestens eine Taste gedrückt ist.

### active pointer

Jedes _[Pointer](#pointer)_-Eingabegerät, das Ereignisse erzeugen kann. Ein Pointer gilt als aktiv, solange er weitere Ereignisse erzeugen kann. Ein aufgesetzter Stift gilt beispielsweise als aktiv, weil beim Anheben oder Bewegen des Stifts weitere Ereignisse auftreten können.

### digitizer

Ein Sensorgerät mit einer Oberfläche, die Berührungen erkennen kann. Meist handelt es sich um einen berührungsempfindlichen Bildschirm, der Eingaben mit einem Stift oder Finger erkennt. Manche Sensorgeräte können auch erkennen, wenn sich ein Eingabegerät in unmittelbarer Nähe befindet. Dieser Zustand wird wie bei einer Maus als Schweben über der Oberfläche behandelt.

### hit test

Das Verfahren, mit dem der Browser das Zielelement für ein Pointer-Event bestimmt. In der Regel berücksichtigt er dazu die Position des Pointers und die visuelle Anordnung der Elemente eines Dokuments auf dem Bildschirm.

### pointer

Eine hardwareunabhängige Repräsentation von Eingabegeräten, die auf eine bestimmte Koordinate oder eine Gruppe von Koordinaten auf einem Bildschirm zeigen können. Beispiele für _Pointer_-Eingabegeräte sind Maus, Stift und Berührungskontakte.

### pointer capture

Pointer Capture ermöglicht es, die Ereignisse eines Pointers an ein bestimmtes Element umzuleiten, statt an das Element, das sich normalerweise aus dem Hit-Test an der Pointer-Position ergeben würde. Ein Beispiel finden Sie unter [Pointer Capture](#pointer_capture).

> [!NOTE]
> _Pointer Capture_ unterscheidet sich von [_Pointer Lock_](/de/docs/Web/API/Pointer_Lock_API). Pointer Lock verhindert, dass der Pointer einen Bereich verlässt.

### pointer event

Ein DOM-[`event`](/de/docs/Web/API/PointerEvent), das für einen _[Pointer](#pointer)_ ausgelöst wird.

## Schnittstellen

Die wichtigste Schnittstelle ist [`PointerEvent`](/de/docs/Web/API/PointerEvent). Sie verfügt über einen [`constructor`](/de/docs/Web/API/PointerEvent/PointerEvent); außerdem gibt es mehrere zugehörige Ereignistypen und globale Ereignishandler.

Der Standard enthält auch Erweiterungen der Schnittstellen [`Element`](/de/docs/Web/API/Element) und [`Navigator`](/de/docs/Web/API/Navigator).

Die folgenden Unterabschnitte beschreiben die einzelnen Schnittstellen und Eigenschaften kurz.

### PointerEvent-Schnittstelle

Die Schnittstelle [`PointerEvent`](/de/docs/Web/API/PointerEvent) erweitert [`MouseEvent`](/de/docs/Web/API/MouseEvent) und verfügt über die folgenden Eigenschaften.

- [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}}
  - : Gibt den Winkel zwischen der Achse eines Eingabegeräts (eines Pointers oder Stifts) und der X-Y-Ebene eines Gerätebildschirms an.
- [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}}
  - : Gibt den Winkel zwischen der Y-Z-Ebene und der Ebene an, die sowohl die Achse des Eingabegeräts (eines Pointers oder Stifts) als auch die Y-Achse enthält.
- [`PointerEvent.persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für das Zeigegerät, das das `PointerEvent` erzeugt.
- [`pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Pointer, der das Ereignis verursacht.
- [`width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite der Kontaktfläche des Pointers (Ausdehnung auf der X-Achse) in CSS-Pixeln.
- [`height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe der Kontaktfläche des Pointers (Ausdehnung auf der Y-Achse) in CSS-Pixeln.
- [`pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normierte Druck der Pointer-Eingabe im Bereich von `0` bis `1`. Dabei stehen `0` und `1` für den minimalen beziehungsweise maximalen Druck, den die Hardware erkennen kann.
- [`tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normierte tangentiale Druck der Pointer-Eingabe (auch Seitendruck genannt) im Bereich von `-1` bis `1`. `0` bezeichnet die neutrale Stellung des Bedienelements.
- [`tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Ebenenwinkel zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Pointers (z. B. eines Stifts) als auch die Y-Achse enthält, in Grad im Bereich von `-90` bis `90`.
- [`tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Ebenenwinkel zwischen der X-Z-Ebene und der Ebene, die sowohl die Achse des Pointers (z. B. eines Stifts) als auch die X-Achse enthält, in Grad im Bereich von `-90` bis `90`.
- [`twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung des Pointers (z. B. eines Stifts) um seine Längsachse im Uhrzeigersinn, in Grad mit einem Wert von `0` bis `359`.
- [`pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Berührung usw.).
- [`isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Pointer der primäre Pointer dieses Pointer-Typs ist.

### Ereignistypen und globale Ereignishandler

Die folgenden Ereignistypen verwenden die Schnittstelle [`PointerEvent`](/de/docs/Web/API/PointerEvent):

- [`pointerover`](/de/docs/Web/API/Element/pointerover_event)
  - : Wird ausgelöst, wenn ein Pointer in den [Hit-Test-Bereich](#hit_test) eines Elements bewegt wird.
- [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)
  - : Wird ausgelöst, wenn ein Pointer in den [Hit-Test-Bereich](#hit_test) eines Elements oder eines seiner Nachfahren bewegt wird. Dazu gehört auch ein `pointerdown`-Ereignis eines Geräts, das kein Schweben über der Oberfläche unterstützt (siehe `pointerdown`).
- [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)
  - : Wird ausgelöst, wenn ein Pointer in den Zustand _active buttons state_ wechselt.
- [`pointermove`](/de/docs/Web/API/Element/pointermove_event)
  - : Wird ausgelöst, wenn sich die Koordinaten eines Pointers ändern. Dieses Ereignis wird auch verwendet, wenn eine Änderung des Pointer-Zustands nicht durch andere Ereignisse gemeldet werden kann.
- [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
  - : Wird ausgelöst, wenn ein Pointer den Zustand _active buttons state_ verlässt.
- [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)
  - : Der Browser löst dieses Ereignis aus, wenn er davon ausgeht, dass der Pointer keine weiteren Ereignisse mehr erzeugen kann, etwa weil das zugehörige Gerät deaktiviert wurde oder weil der Browser die Interaktion stattdessen als Schwenk- oder Zoomgeste interpretiert. Wie Sie dieses Verhalten steuern können, erfahren Sie weiter unten im [Abschnitt über die CSS-Eigenschaft `touch-action`](#css-eigenschaft_touch-action).
- [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
  - : Wird aus verschiedenen Gründen ausgelöst: wenn ein Pointer den [Hit-Test-Bereich](#hit_test) eines Elements verlässt; wenn für ein Gerät ohne Unterstützung für das Schweben über der Oberfläche ein `pointerup`-Ereignis ausgelöst wird (siehe `pointerup`); nach einem `pointercancel`-Ereignis (siehe `pointercancel`); oder wenn ein Stift den vom Digitizer erkennbaren Schwebebereich verlässt.
- [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)
  - : Wird ausgelöst, wenn ein Pointer den [Hit-Test-Bereich](#hit_test) eines Elements verlässt. Bei Stiften wird dieses Ereignis ausgelöst, wenn der Stift den vom Digitizer erkennbaren Schwebebereich verlässt.
- [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) {{experimental_inline}}
  - : Wird ausgelöst, wenn sich Eigenschaften eines Pointers ändern, ohne dass dadurch ein `pointerdown`- oder `pointerup`-Ereignis ausgelöst wird.
- [`gotpointercapture`](/de/docs/Web/API/Element/gotpointercapture_event)
  - : Wird ausgelöst, wenn ein Element Pointer Capture erhält.
- [`lostpointercapture`](/de/docs/Web/API/Element/lostpointercapture_event)
  - : Wird ausgelöst, nachdem Pointer Capture für einen Pointer aufgehoben wurde.
- [`click`](/de/docs/Web/API/Element/click_event)
  - : Wird ausgelöst, wenn ein Element aktiviert wird, beispielsweise durch Drücken und Loslassen der primären Pointer-Taste oder über die Tastatur.
- [`auxclick`](/de/docs/Web/API/Element/auxclick_event)
  - : Wird ausgelöst, wenn eine nicht primäre Pointer-Taste über einem Element gedrückt und losgelassen wird.
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
  - : Wird ausgelöst, wenn Nutzer versuchen, ein Kontextmenü zu öffnen, beispielsweise durch einen Rechtsklick oder durch Drücken der Kontextmenütaste.

Die Ereignisse `pointerdown`, `pointerup`, `pointermove`, `pointerover`, `pointerout`, `pointerenter` und `pointerleave` haben eine ähnliche Bedeutung wie die entsprechenden Mausereignisse, funktionieren aber auch mit anderen Zeigegeräten wie Stiften und Touchscreens.

Die Ereignisse `click`, `auxclick` und `contextmenu` stehen für übergeordnete Aktionen, etwa das Aktivieren eines Elements oder das Anfordern eines Kontextmenüs. Sie sind nicht auf Pointer-Eingaben beschränkt: Eine Tastatur kann beispielsweise `click` oder `contextmenu` auslösen, ohne dass ein Pointer bewegt oder eine Pointer-Taste gedrückt wird.

### Erweiterungen von Element

Die Schnittstelle [`Element`](/de/docs/Web/API/Element) hat drei Erweiterungen:

- [`hasPointerCapture()`](/de/docs/Web/API/Element/hasPointerCapture)
  - : Gibt an, ob das Element, auf dem die Methode aufgerufen wird, Pointer Capture für den durch die angegebene Pointer-ID identifizierten Pointer hat.
- [`releasePointerCapture()`](/de/docs/Web/API/Element/releasePointerCapture)
  - : Hebt ein zuvor für einen bestimmten Pointer eingerichtetes _Pointer Capture_ auf.
- [`setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture)
  - : Legt ein bestimmtes Element als _Capture-Ziel_ für künftige Pointer-Events fest.

### Erweiterung von Navigator

Mit der Eigenschaft [`Navigator.maxTouchPoints`](/de/docs/Web/API/Navigator/maxTouchPoints) lässt sich die maximale Anzahl gleichzeitig unterstützter Berührungspunkte ermitteln.

## Beispiele

Dieser Abschnitt enthält Beispiele für die grundlegende Verwendung der Pointer-Event-Schnittstellen.

### Ereignishandler registrieren

Dieses Beispiel registriert für jeden Ereignistyp einen Handler am angegebenen Element.

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

Dieses Beispiel zeigt, wie auf alle Eigenschaften eines Pointer-Events zugegriffen wird.

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

## Den primären Pointer bestimmen

In manchen Situationen gibt es mehrere Pointer, beispielsweise bei einem Gerät mit Touchscreen und Maus. Ein Pointer kann auch mehrere Kontaktpunkte unterstützen, etwa ein Touchscreen, der gleichzeitige Berührungen mit mehreren Fingern erkennt. Eine Anwendung kann mit der Eigenschaft [`isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) für jeden Pointer-Typ einen primären Pointer unter den _aktiven Pointern_ identifizieren. Wenn eine Anwendung nur den primären Pointer unterstützen soll, kann sie alle Pointer-Events ignorieren, die nicht vom primären Pointer stammen.

Eine Maus hat nur einen Pointer; dieser ist daher immer der primäre Pointer. Bei Berührungseingaben gilt ein Pointer als primär, wenn bei der ersten Berührung des Bildschirms keine weiteren Berührungen aktiv waren. Bei Stifteingaben gilt ein Pointer als primär, wenn beim ersten Kontakt des Stifts mit dem Bildschirm keine anderen Stifte den Bildschirm berührten.

## Tastenstatus bestimmen

Manche Zeigegeräte, etwa Mäuse und Stifte, unterstützen mehrere Tasten. Tasten können auch gleichzeitig gedrückt werden: Eine weitere Taste wird gedrückt, während bereits eine andere Taste des Zeigegeräts gedrückt ist.

Zur Bestimmung des Tastenstatus verwenden Pointer-Events die Eigenschaften [`button`](/de/docs/Web/API/MouseEvent/button) und [`buttons`](/de/docs/Web/API/MouseEvent/buttons) der Schnittstelle [`MouseEvent`](/de/docs/Web/API/MouseEvent), von der [`PointerEvent`](/de/docs/Web/API/PointerEvent) erbt.

Die folgende Tabelle zeigt die Werte von `button` und `buttons` für verschiedene Zustände der Gerätetasten.

| Zustand der Gerätetasten                                                                                  | button | buttons |
| --------------------------------------------------------------------------------------------------------- | ------ | ------- |
| Weder Tastenstatus noch Berührungskontakt oder Stiftkontakt haben sich seit dem letzten Ereignis geändert | `-1`   | —       |
| Mausbewegung ohne gedrückte Tasten; Stiftbewegung im Schwebebereich ohne gedrückte Tasten                 | —      | `0`     |
| Linke Maustaste, Berührungskontakt, Stiftkontakt                                                          | `0`    | `1`     |
| Mittlere Maustaste                                                                                        | `1`    | `4`     |
| Rechte Maustaste, seitliche Stifttaste                                                                    | `2`    | `2`     |
| X1-Maustaste (Zurück)                                                                                     | `3`    | `8`     |
| X2-Maustaste (Vorwärts)                                                                                   | `4`    | `16`    |
| Radierertaste des Stifts                                                                                  | `5`    | `32`    |

> [!NOTE]
> Die Eigenschaft `button` zeigt eine Änderung des Tastenstatus an. Wenn jedoch, wie bei Berührungen, mehrere Ereignisse gleichzeitig auftreten, haben sie alle denselben Wert.

## Pointer Capture

Mit Pointer Capture können Ereignisse für einen bestimmten [Pointer](/de/docs/Web/API/PointerEvent) an ein bestimmtes Element umgeleitet werden, statt das Ziel durch den üblichen [Hit-Test](#hit_test) an der Pointer-Position zu bestimmen. So kann sichergestellt werden, dass ein Element weiterhin Pointer-Events empfängt, selbst wenn sich die Kontaktfläche des Zeigegeräts vom Element wegbewegt, beispielsweise durch Scrollen oder Schwenken.

Bei aktivem Pointer Capture werden alle folgenden Pointer-Events an das erfassende Zielelement gesendet, als würden sie über diesem Element stattfinden. Daher werden `pointerover`, `pointerenter`, `pointerleave` und `pointerout` **nicht ausgelöst**, solange Pointer Capture aktiv ist.
Bei Touchscreen-Browsern, die eine [direkte Manipulation](https://w3c.github.io/pointerevents/#dfn-direct-manipulation) ermöglichen, erhält das Element beim Auslösen eines `pointerdown`-Ereignisses [implizites Pointer Capture](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture). Pointer Capture kann durch Aufrufen von [`element.releasePointerCapture`](/de/docs/Web/API/Element/releasePointerCapture) auf dem Zielelement manuell aufgehoben werden. Nach einem `pointerup`- oder `pointercancel`-Ereignis wird es automatisch aufgehoben.

> [!NOTE]
> Wenn Sie ein Element im DOM verschieben müssen, rufen Sie `setPointerCapture()` **nach der Verschiebung im DOM** auf, damit die Zuordnung des Elements für `setPointerCapture()` erhalten bleibt. Wenn Sie beispielsweise ein Element mit `Element.append()` an eine andere Stelle verschieben, rufen Sie `setPointerCapture()` für dieses Element erst nach `Element.append()` auf.

Das folgende Beispiel zeigt, wie Pointer Capture für ein Element eingerichtet wird.

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

Das folgende Beispiel zeigt, wie Pointer Capture beim Auftreten eines [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)-Ereignisses aufgehoben wird. Der Browser führt dies beim Auftreten eines [`pointerup`](/de/docs/Web/API/Element/pointerup_event)- oder [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)-Ereignisses automatisch aus.

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

Mit der CSS-Eigenschaft {{cssxref("touch-action")}} wird festgelegt, ob der Browser in einem Bereich sein standardmäßiges (_natives_) Verhalten bei Berührungen anwenden soll, etwa Zoomen oder Schwenken. Die Eigenschaft kann auf alle Elemente angewendet werden, außer auf nicht ersetzte Inline-Elemente, Tabellenzeilen, Zeilengruppen, Tabellenspalten und Spaltengruppen.

Beim Wert `auto` kann der Browser sein standardmäßiges Berührungsverhalten im angegebenen Bereich anwenden. Der Wert `none` deaktiviert dieses Verhalten für den Bereich. Die Werte `pan-x` und `pan-y` bedeuten, dass Berührungen, die im angegebenen Bereich beginnen, nur zum horizontalen beziehungsweise vertikalen Scrollen dienen. Beim Wert `manipulation` darf der Browser davon ausgehen, dass Berührungen, die auf dem Element beginnen, nur dem Scrollen und Zoomen dienen.

Im folgenden Beispiel ist das standardmäßige Berührungsverhalten für einige `button`-Elemente deaktiviert.

```css
button#tiny {
  touch-action: none;
}
```

Im folgenden Beispiel kann das Element `target` bei Berührung nur horizontal verschoben werden.

```css
#target {
  touch-action: pan-x;
}
```

## Kompatibilität mit Mausereignissen

Pointer-Event-Schnittstellen ermöglichen es Anwendungen, auf Geräten mit Pointer-Unterstützung eine verbesserte Nutzererfahrung zu bieten. Die überwiegende Mehrheit heutiger Webinhalte ist jedoch ausschließlich für Mauseingaben ausgelegt. Deshalb muss ein Browser auch dann Mausereignisse verarbeiten, wenn er Pointer-Events unterstützt, damit Inhalte, die nur Mauseingaben voraussetzen, ohne Änderungen funktionieren. Im Idealfall muss eine Anwendung mit Pointer-Unterstützung Mauseingaben nicht ausdrücklich verarbeiten. Da der Browser jedoch Mausereignisse verarbeiten muss, können Kompatibilitätsprobleme auftreten, die berücksichtigt werden müssen. Dieser Abschnitt erläutert das Zusammenspiel von Pointer-Events und Mausereignissen sowie die Folgen für Anwendungsentwickler.

Der Browser _kann allgemeine Pointer-Eingaben aus Kompatibilitätsgründen auf Mausereignisse abbilden_. Diese Ereignisse werden als _Kompatibilitäts-Mausereignisse_ bezeichnet. Durch Abbrechen des `pointerdown`-Ereignisses können Entwickler die Erzeugung bestimmter Kompatibilitäts-Mausereignisse verhindern. Beachten Sie dabei:

- Mausereignisse können nur verhindert werden, wenn der Pointer gedrückt ist.
- Bei Pointern, die über der Oberfläche schweben, etwa einer Maus ohne gedrückte Tasten, können Mausereignisse nicht verhindert werden.
- Die Ereignisse `mouseover`, `mouseout`, `mouseenter` und `mouseleave` werden niemals verhindert, auch dann nicht, wenn der Pointer gedrückt ist.

## Bewährte Vorgehensweisen

Beachten Sie bei der Verwendung von Pointer-Events die folgenden _bewährten Vorgehensweisen_:

- Halten Sie den Arbeitsaufwand in Ereignishandlern möglichst gering.
- Registrieren Sie Ereignishandler an einem bestimmten Zielelement statt am gesamten Dokument oder an weiter oben im Dokumentbaum liegenden Knoten.
- Das Zielelement beziehungsweise der Zielknoten sollte groß genug für die größte zu erwartende Kontaktfläche sein, in der Regel eine Fingerberührung. Ist der Zielbereich zu klein, kann eine Berührung stattdessen Ereignisse für benachbarte Elemente auslösen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Im Rahmen der [Pointer-Events-Spezifikation](https://w3c.github.io/pointerevents/) wurden zusätzliche Werte für die CSS-Eigenschaft {{cssxref("touch-action")}} definiert. Diese Werte werden derzeit jedoch nur eingeschränkt unterstützt.

## Siehe auch

- [Touch-Events](/de/docs/Web/API/Touch_events)
- [Pointer Events Working Group](https://github.com/w3c/pointerevents)
- [Mailingliste](https://lists.w3.org/Archives/Public/public-pointer-events/)
- [W3C-IRC-Kanal #pointerevents](irc://irc.w3.org:6667/)
- [Tests und Demos für Touch- und Pointer-Eingaben](https://patrickhlauke.github.io/touch/) von Patrick H. Lauke
