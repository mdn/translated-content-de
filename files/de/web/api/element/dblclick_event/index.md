---
title: "Element: dblclick-Event"
short-title: dblclick
slug: Web/API/Element/dblclick_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

Das **`dblclick`**-Event wird ausgelöst, wenn eine Taste eines Zeigegeräts (wie die Primärtaste einer Maus) doppelt geklickt wird; das heißt, wenn sie innerhalb eines sehr kurzen Zeitraums zweimal schnell auf ein einzelnes Element geklickt wird.

Das `dblclick`-Event wird nach zwei [`click`](/de/docs/Web/API/Element/click_event)-Events ausgelöst (und somit auch nach zwei Paaren von [`mousedown`](/de/docs/Web/API/Element/mousedown_event)- und [`mouseup`](/de/docs/Web/API/Element/mouseup_event)-Events).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlers-Eigenschaft.

```js-nolint
addEventListener("dblclick", (event) => { })

ondblclick = (event) => { }
```

## Ereignistyp

Ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MouseEvent")}}

## Beispiele

Dieses Beispiel ändert die Größe einer Karte, wenn Sie doppelt darauf klicken.

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
