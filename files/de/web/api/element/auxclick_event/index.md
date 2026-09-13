---
title: "Element: auxclick Event"
short-title: auxclick
slug: Web/API/Element/auxclick_event
l10n:
  sourceCommit: 620c181285150bdb00b1abc2974251d18560efd1
---

{{APIRef("UI Events")}}

Das **`auxclick`**-Ereignis wird bei einem [`Element`](/de/docs/Web/API/Element) ausgelöst, wenn eine Taste eines Zeigegeräts, die nicht die primäre Taste ist (jede Maustaste außer der primären - normalerweise die linke), innerhalb desselben Elements gedrückt und losgelassen wurde.

`auxclick` wird nach den Ereignissen [`mousedown`](/de/docs/Web/API/Element/mousedown_event) und [`mouseup`](/de/docs/Web/API/Element/mouseup_event) in dieser Reihenfolge ausgelöst.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

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

Für die überwiegende Mehrheit der Browser, die den Mittelclick mit dem Öffnen eines Links in einem neuen Tab verknüpfen, einschließlich Firefox, ist es möglich, dieses Verhalten durch den Aufruf von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) innerhalb eines `auxclick`-Ereignishandlers zu verhindern.

Wenn Sie `auxclick`-Ereignisse überwachen, die von Elementen ausgehen, die keine Eingabe oder Navigation unterstützen, möchten Sie oft explizit andere Standardaktionen verhindern, die dem Drücken der mittleren Maustaste zugeordnet sind. Unter Windows ist dies normalerweise das automatische Scrollen, unter Linux das Einfügen aus der Zwischenablage. Dies kann durch Verhindern des Standardverhaltens des [`mousedown`](/de/docs/Web/API/Element/mousedown_event)- oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignisses erreicht werden.

Zusätzlich müssen Sie möglicherweise das Öffnen eines System-Kontextmenüs nach einem Rechtsklick vermeiden. Aufgrund von Zeitunterschieden zwischen Betriebssystemen ist dies ebenfalls kein verhinderbares Standardverhalten von `auxclick`. Stattdessen kann dies durch Verhindern des Standardverhaltens des [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)-Ereignisses geschehen.

## Beispiele

In diesem Beispiel definieren wir Funktionen für zwei Ereignis-Handler — [`onclick`](/de/docs/Web/API/Element/click_event) und `onauxclick`. Der erstere ändert die Hintergrundfarbe des Buttons, während der letztere die Vordergrundfarbe (Text) ändert. Sie können die beiden Funktionen auch in Aktion sehen, indem Sie das Demo mit einer Multi-Button-Maus ausprobieren ([siehe es live auf GitHub](https://mdn.github.io/dom-examples/auxclick/); auch [sehen Sie den Quellcode](https://github.com/mdn/dom-examples/blob/main/auxclick/index.html)).

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

Beachten Sie, dass zusätzlich zum Erfassen des `auxclick`-Ereignisses mit `onauxclick` auch das [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)-Ereignis erfasst wird und [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) für dieses Ereignis aufgerufen wird, um zu verhindern, dass das Kontextmenü nach der Farbänderung angezeigt wird.

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
> Wenn Sie eine Drei-Tasten-Maus verwenden, werden Sie feststellen, dass der `onauxclick`-Handler ausgeführt wird, wenn eine der nicht linken Maustasten (normalerweise einschließlich spezieller Tasten bei Gaming-Mäusen) gedrückt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
- [`click`](/de/docs/Web/API/Element/click_event)
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
- [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
- [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
- [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)
- [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
