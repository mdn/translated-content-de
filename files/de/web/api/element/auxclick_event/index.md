---
title: "Element: auxclick-Ereignis"
short-title: auxclick
slug: Web/API/Element/auxclick_event
l10n:
  sourceCommit: 5a6c35a18af0192c0de51d8d4e5283fb46ed16cc
---

{{APIRef("UI Events")}}

Das **`auxclick`**-Ereignis wird auf einem [`Element`](/de/docs/Web/API/Element) ausgelöst, wenn eine nicht primäre Taste eines Zeigegeräts (eine andere Maustaste als die primäre, normalerweise linke Taste) innerhalb desselben Elements gedrückt und wieder losgelassen wurde.

`auxclick` wird ausgelöst, nachdem die Ereignisse [`mousedown`](/de/docs/Web/API/Element/mousedown_event) und [`mouseup`](/de/docs/Web/API/Element/mouseup_event) in dieser Reihenfolge ausgelöst wurden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("auxclick", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onauxclick = (event) => { }
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent).

{{InheritanceDiagram("PointerEvent")}}

> [!NOTE]
> In früheren Versionen der Spezifikation war der Ereignistyp für dieses Ereignis ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Weitere Informationen finden Sie unter [Browser-Kompatibilität](#browser-kompatibilität).

## Standardaktionen verhindern

Bei den meisten Browsern, die einen Mittelklick mit dem Öffnen eines Links in einem neuen Tab verknüpfen, einschließlich Firefox, lässt sich dieses Verhalten verhindern, indem Sie innerhalb eines `auxclick`-Event-Handlers [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen.

Wenn Sie auf `auxclick`-Ereignisse von Elementen reagieren, die weder Eingaben noch Navigation unterstützen, sollten Sie häufig auch andere Standardaktionen ausdrücklich verhindern, die dem Drücken der mittleren Maustaste zugeordnet sind. Unter Windows ist dies normalerweise das automatische Scrollen, unter Linux das Einfügen aus der Zwischenablage. Dazu können Sie das Standardverhalten des Ereignisses [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event) verhindern.

Möglicherweise müssen Sie außerdem verhindern, dass nach einem Rechtsklick ein Systemkontextmenü geöffnet wird. Aufgrund unterschiedlicher zeitlicher Abläufe in Betriebssystemen lässt sich auch dies nicht über das Standardverhalten von `auxclick` verhindern. Verhindern Sie stattdessen das Standardverhalten des Ereignisses [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event).

## Beispiele

In diesem Beispiel definieren wir Funktionen für zwei Event-Handler – [`onclick`](/de/docs/Web/API/Element/click_event) und `onauxclick`. Der erste ändert die Hintergrundfarbe der Schaltfläche, der zweite ihre Vordergrundfarbe (Textfarbe). Mit einer Maus mit mehreren Tasten können Sie die beiden Funktionen auch selbst ausprobieren ([Live-Demo auf GitHub](https://mdn.github.io/dom-examples/auxclick/); siehe auch den [Quellcode](https://github.com/mdn/dom-examples/blob/main/auxclick/index.html)).

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

### JavaScript

```js
const button = document.querySelector("button");

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

Beachten Sie, dass neben dem `auxclick`-Ereignis über `onauxclick` auch das Ereignis [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event) abgefangen wird. Für dieses Ereignis wird [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufgerufen, damit nach der Farbänderung kein Kontextmenü erscheint.

{{EmbedLiveSample("Examples", 640, 300)}}

> [!NOTE]
> Wenn Sie eine Maus mit drei Tasten verwenden, werden Sie feststellen, dass der `onauxclick`-Handler ausgeführt wird, wenn Sie eine andere als die linke Maustaste klicken (normalerweise auch bei „Sondertasten“ von Gaming-Mäusen).

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
