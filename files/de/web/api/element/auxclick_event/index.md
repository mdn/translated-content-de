---
title: "Element: auxclick-Ereignis"
short-title: auxclick
slug: Web/API/Element/auxclick_event
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef}}

Das **`auxclick`**-Ereignis wird bei einem {{domxref("Element")}} ausgelöst, wenn eine nicht-primäre Taste eines Zeigegeräts (jede Maustaste außer der primären – normalerweise die linke Taste) innerhalb desselben Elements gedrückt und losgelassen wird.

`auxclick` wird ausgelöst, nachdem die Ereignisse {{domxref("Element/mousedown_event", "mousedown")}} und {{domxref("Element/mouseup_event", "mouseup")}} in dieser Reihenfolge ausgelöst wurden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder legen Sie eine Ereignis-Handler-Eigenschaft fest.

```js
addEventListener("auxclick", (event) => {});

onauxclick = (event) => {};
```

## Ereignistyp

Ein {{domxref("PointerEvent")}}. Erbt von {{domxref("MouseEvent")}}.

{{InheritanceDiagram("PointerEvent")}}

> [!NOTE]
> In früheren Versionen der Spezifikation war der Ereignistyp für dieses Ereignis ein {{domxref("MouseEvent")}}, und das ist immer noch der Typ, der in Firefox und Safari übergeben wird.

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von {{domxref("MouseEvent")}} und {{domxref("Event")}}._

- {{domxref('PointerEvent.altitudeAngle')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Stellt den Winkel zwischen einer Achse eines Zeigegeräts (z. B. eines Stifts) und der X-Y-Ebene eines Gerätescreens dar.
- {{domxref('PointerEvent.azimuthAngle')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Stellt den Winkel zwischen der Y-Z-Ebene und der Ebene dar, die sowohl die Achse des Zeigegeräts als auch die Y-Achse enthält.
- {{domxref('PointerEvent.pointerId')}} {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis auslöst.
- {{domxref('PointerEvent.width')}} {{ReadOnlyInline}}
  - : Die Breite (Größe auf der X-Achse) der Kontaktgeometrie des Zeigers in CSS-Pixeln.
- {{domxref('PointerEvent.height')}} {{ReadOnlyInline}}
  - : Die Höhe (Größe auf der Y-Achse) der Kontaktgeometrie des Zeigers in CSS-Pixeln.
- {{domxref('PointerEvent.pressure')}} {{ReadOnlyInline}}
  - : Der normalisierte Druck der Zeigereingabe im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck darstellen, den die Hardware erkennen kann.
- {{domxref('PointerEvent.tangentialPressure')}} {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck der Zeigereingabe (auch bekannt als Fassdruck oder [Zylinderbelastung](https://en.wikipedia.org/wiki/Cylinder_stress)) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position der Kontrolle ist.
- {{domxref('PointerEvent.tiltX')}} {{ReadOnlyInline}}
  - : Der Planwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Zeigers als auch die Y-Achse enthält.
- {{domxref('PointerEvent.tiltY')}} {{ReadOnlyInline}}
  - : Der Planwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X-Z-Ebene und der Ebene, die sowohl die Achse des Zeigers als auch die X-Achse enthält.
- {{domxref('PointerEvent.twist')}} {{ReadOnlyInline}}
  - : Die Drehung des Zeigers (z. B. des Stifts) im Uhrzeigersinn um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- {{domxref('PointerEvent.pointerType')}} {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Touch usw.).
- {{domxref('PointerEvent.isPrimary')}} {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

## Verhindern von Standardaktionen

Für die überwiegende Mehrheit der Browser, die einen Mittelklick auf das Öffnen eines Links in einem neuen Tab abbilden, einschließlich Firefox, ist es möglich, dieses Verhalten zu verhindern, indem {{domxref("Event.preventDefault()", "preventDefault()")}} innerhalb eines `auxclick`-Ereignishandlers aufgerufen wird.

Wenn Sie `auxclick`-Ereignissen lauschen, die von Elementen stammen, die keine Eingabe oder Navigation unterstützen, möchten Sie möglicherweise explizit andere Standardaktionen verhindern, die der Abwärtsaktion der Mitteltaste zugeordnet sind. Unter Windows ist dies in der Regel Autoscroll und unter macOS und Linux in der Regel Zwischenablage-Einfügen. Dies kann durch das Verhindern des Standardverhaltens des {{domxref("Element/mousedown_event", "mousedown")}}- oder {{domxref("Element/pointerdown_event", "pointerdown")}}-Ereignisses erfolgen.

Zusätzlich müssen Sie möglicherweise das Öffnen eines Systemkontextmenüs nach einem Rechtsklick vermeiden. Aufgrund von Zeitunterschieden zwischen Betriebssystemen ist dies ebenfalls keine vermeidbare Standardaktion von `auxclick`. Stattdessen kann dies durch das Verhindern des Standardverhaltens des {{domxref("Element/contextmenu_event", "contextmenu")}}-Ereignisses erfolgen.

## Beispiele

In diesem Beispiel definieren wir Funktionen für zwei Ereignis-Handler — {{domxref("Element.click_event", "onclick")}} und `onauxclick`. Ersterer ändert die Hintergrundfarbe des Buttons, während letzterer die Vordergrundfarbe (Text) des Buttons ändert. Sie können die beiden Funktionen in Aktion sehen, indem Sie das Demo mit einer Multitasten-Maus ausprobieren ([sehen Sie es live auf GitHub](https://mdn.github.io/dom-examples/auxclick/); auch [sehen Sie den Quellcode](https://github.com/mdn/dom-examples/blob/main/auxclick/index.html)).

### JavaScript

```js
let button = document.querySelector("button");
let html = document.querySelector("html");

function random(number) {
  return Math.floor(Math.random() * number);
}

function randomColor() {
  return `rgb(${random(255)} ${random(255)} ${random(255)})`;
}

button.onclick = () => {
  button.style.backgroundColor = randomColor();
};

button.onauxclick = (e) => {
  e.preventDefault();
  button.style.color = randomColor();
};

button.oncontextmenu = (e) => {
  e.preventDefault();
};
```

Beachten Sie, dass zusätzlich zur Erfassung des `auxclick`-Ereignisses mit `onauxclick` auch das {{domxref("Element.contextmenu_event", "contextmenu")}}-Ereignis erfasst und {{domxref("Event.preventDefault", "preventDefault()")}} auf diesem Ereignis aufgerufen wird, um zu verhindern, dass das Kontextmenü auftaucht, nachdem die Farbänderung angewendet wurde.

### HTML

```html
<button><h1>Click me!</h1></button>
```

```css hidden
html {
  height: 100%;
  overflow: hidden;
}

body {
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

button {
  border: 0;
  background-color: white;
  font-size: 8vw;
  display: block;
  width: 100%;
  height: 100%;
}

h1 {
  letter-spacing: 0.5rem;
}
```

{{EmbedLiveSample("Examples", 640, 300)}}

> [!NOTE]
> Wenn Sie eine Drei-Tasten-Maus verwenden, werden Sie bemerken, dass der `onauxclick`-Handler ausgeführt wird, wenn eine der nicht linken Maustasten geklickt wird (einschließlich aller "speziellen" Tasten auf Gaming-Mäusen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung zu Ereignissen](/de/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/pointerdown_event", "pointerdown")}}
- {{domxref("Element/pointerup_event", "pointerup")}}
