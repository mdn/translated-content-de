---
title: "Element: auxclick-Ereignis"
short-title: auxclick
slug: Web/API/Element/auxclick_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("UI Events")}}

Das **`auxclick`**-Ereignis wird auf einem [`Element`](/de/docs/Web/API/Element) ausgelöst, wenn eine nicht primäre Taste eines Zeigegeräts (eine andere Maustaste als die primäre, üblicherweise linke Taste) innerhalb desselben Elements gedrückt und wieder losgelassen wurde.

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

Bei den meisten Browsern, die einem Klick mit der mittleren Maustaste das Öffnen eines Links in einem neuen Tab zuordnen, darunter Firefox, lässt sich dieses Verhalten unterbinden, indem [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) innerhalb eines `auxclick`-Event-Handlers aufgerufen wird.

Wenn Sie auf `auxclick`-Ereignisse von Elementen reagieren, die keine Eingabe oder Navigation unterstützen, sollten Sie häufig auch andere Standardaktionen ausdrücklich verhindern, die dem Drücken der mittleren Maustaste zugeordnet sind. Unter Windows ist dies üblicherweise das automatische Scrollen, unter Linux das Einfügen aus der Zwischenablage. Dazu können Sie das Standardverhalten des Ereignisses [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event) verhindern.

Möglicherweise müssen Sie außerdem verhindern, dass nach einem Rechtsklick ein System-Kontextmenü geöffnet wird. Aufgrund von Unterschieden im zeitlichen Ablauf zwischen Betriebssystemen lässt sich auch dieses Verhalten nicht als Standardaktion von `auxclick` verhindern. Stattdessen können Sie das Standardverhalten des Ereignisses [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event) verhindern.

## Beispiele

In diesem Beispiel definieren wir Funktionen für zwei Event-Handler: [`onclick`](/de/docs/Web/API/Element/click_event) und `onauxclick`. Ersterer ändert die Hintergrundfarbe des Buttons, letzterer die Vordergrundfarbe (Textfarbe). Sie können die beiden Funktionen auch selbst ausprobieren, indem Sie die Demo mit einer Maus mit mehreren Tasten testen ([Live-Demo auf GitHub ansehen](https://mdn.github.io/dom-examples/auxclick/); siehe auch den [Quellcode](https://github.com/mdn/dom-examples/blob/main/auxclick/index.html)).

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

Beachten Sie, dass neben dem Erfassen des `auxclick`-Ereignisses mit `onauxclick` auch das Ereignis [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event) erfasst und darauf [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufgerufen wird. Dadurch wird verhindert, dass nach der Farbänderung das Kontextmenü erscheint.

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
> Wenn Sie eine Maus mit drei Tasten verwenden, werden Sie feststellen, dass der `onauxclick`-Handler ausgeführt wird, wenn eine der Maustasten außer der linken angeklickt wird (üblicherweise einschließlich etwaiger „Spezialtasten“ an Gaming-Mäusen).

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
