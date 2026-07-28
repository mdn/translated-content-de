---
title: "Element: auxclick Event"
short-title: auxclick
slug: Web/API/Element/auxclick_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

Das **`auxclick`**-Ereignis wird bei einem [`Element`](/de/docs/Web/API/Element) ausgelöst, wenn eine nicht primäre Taste eines Zeigegeräts (jede Maustaste außer der primären – normalerweise die linke Taste) gedrückt und losgelassen wurde, und zwar innerhalb desselben Elements.

`auxclick` wird ausgelöst, nachdem die Ereignisse [`mousedown`](/de/docs/Web/API/Element/mousedown_event) und [`mouseup`](/de/docs/Web/API/Element/mouseup_event) in dieser Reihenfolge ausgelöst wurden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("auxclick", (event) => { })

onauxclick = (event) => { }
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent).

{{InheritanceDiagram("PointerEvent")}}

> [!NOTE]
> In früheren Versionen der Spezifikation war der Ereignistyp für dieses Ereignis ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

## Verhindern von Standardaktionen

Bei der großen Mehrheit der Browser, die den Mittelklick zum Öffnen eines Links in einem neuen Tab abbilden, einschließlich Firefox, ist es möglich, dieses Verhalten zu unterbinden, indem [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) innerhalb eines `auxclick`-Ereignishandlers aufgerufen wird.

Wenn Sie `auxclick`-Ereignisse überwachen, die von Elementen stammen, die keine Eingabe oder Navigation unterstützen, möchten Sie oft explizit andere Standardaktionen verhindern, die der Runter-Aktion der mittleren Maustaste zugeordnet sind. Unter Windows ist dies normalerweise das Autoscrolling, unter macOS und Linux ist dies häufig das Einfügen der Zwischenablage. Dies kann erreicht werden, indem das Standardverhalten des [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event) Ereignisses verhindert wird.

Zusätzlich sollten Sie das Öffnen eines Systemkontextmenüs nach einem Rechtsklick vermeiden. Aufgrund von Zeitunterschieden zwischen Betriebssystemen ist auch dies kein standardmäßiges, durch `auxclick` verhinderbares Verhalten. Stattdessen kann dies durch das Verhindern des Standardverhaltens des [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event) Ereignisses erreicht werden.

## Beispiele

In diesem Beispiel definieren wir Funktionen für zwei Ereignishandler — [`onclick`](/de/docs/Web/API/Element/click_event) und `onauxclick`. Der erste ändert die Hintergrundfarbe des Buttons, während der zweite die Vordergrund- (Text-) Farbe des Buttons ändert. Sie können die beiden Funktionen auch in Aktion sehen, indem Sie das Demo mit einer Mehrtastenmaus ausprobieren ([sehen Sie es live auf GitHub](https://mdn.github.io/dom-examples/auxclick/); sehen Sie auch den [Quellcode](https://github.com/mdn/dom-examples/blob/main/auxclick/index.html)).

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

Beachten Sie, dass zusätzlich zum Erfassen des `auxclick`-Ereignisses mit `onauxclick` auch das [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event) Ereignis erfasst wird, und [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) bei diesem Ereignis aufgerufen wird, um zu verhindern, dass das Kontextmenü nach dem Farbwechsel auftaucht.

### HTML

```html
<button>Click me!</button>
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
  letter-spacing: 0.5rem;
}
```

{{EmbedLiveSample("Examples", 640, 300)}}

> [!NOTE]
> Wenn Sie eine Dreitastenmaus verwenden, werden Sie feststellen, dass der `onauxclick`-Handler ausgelöst wird, wenn eine der nicht-linken Maustasten geklickt wird (in der Regel einschließlich aller "Sonder"-Tasten auf Gaming-Mäusen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Erlernen: Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
- [`click`](/de/docs/Web/API/Element/click_event)
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
- [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
- [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
- [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)
- [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
