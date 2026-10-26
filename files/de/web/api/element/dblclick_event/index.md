---
title: "Element: dblclick-Ereignis"
short-title: dblclick
slug: Web/API/Element/dblclick_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("UI Events")}}

Das Ereignis **`dblclick`** wird ausgelöst, wenn die Taste eines Zeigegeräts (z. B. die primäre Maustaste) doppelt angeklickt wird, also wenn sie innerhalb sehr kurzer Zeit zweimal schnell auf demselben Element betätigt wird.

`dblclick` wird nach zwei [`click`](/de/docs/Web/API/Element/click_event)-Ereignissen ausgelöst (und damit nach zwei Paaren von [`mousedown`](/de/docs/Web/API/Element/mousedown_event)- und [`mouseup`](/de/docs/Web/API/Element/mouseup_event)-Ereignissen).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("dblclick", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) des Interfaces zuweisen:

```js-nolint
ondblclick = (event) => { }
```

## Ereignistyp

Ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MouseEvent")}}

## Beispiele

Dieses Beispiel ändert die Größe einer Karte, wenn Sie darauf doppelklicken.

### JavaScript

```js
const card = document.querySelector("aside");

card.addEventListener("dblclick", (e) => {
  card.classList.toggle("large");
});
```

### HTML

```html
<aside>
  <h3>My Card</h3>
  <p>Double click to resize this object.</p>
</aside>
```

### CSS

```css
aside {
  background: #ffee99;
  border-radius: 1em;
  display: inline-block;
  padding: 1em;
  transform: scale(0.9);
  transform-origin: 0 0;
  transition: transform 0.6s;
  user-select: none;
}

.large {
  transform: scale(1.3);
}
```

### Ergebnis

{{EmbedLiveSample("Examples", 700, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
- [`auxclick`](/de/docs/Web/API/Element/auxclick_event)
- [`click`](/de/docs/Web/API/Element/click_event)
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
- [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
- [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
- [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)
- [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
