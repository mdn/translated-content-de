---
title: "Element: focusin-Ereignis"
short-title: focusin
slug: Web/API/Element/focusin_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("UI Events")}}

Das **`focusin`**-Ereignis wird ausgelöst, wenn ein Element den Fokus erhalten hat, nach dem [`focus`](/de/docs/Web/API/Element/focus_event)-Ereignis. Die beiden Ereignisse unterscheiden sich darin, dass `focusin` durch die Elementhierarchie aufsteigt, `focus` dagegen nicht.

Das Gegenstück zu `focusin` ist das [`focusout`](/de/docs/Web/API/Element/focusout_event)-Ereignis, das ausgelöst wird, wenn das Element den Fokus verloren hat.

Das `focusin`-Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("focusin", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle eine Funktion zuweisen:

```js-nolint
onfocusin = (event) => { }
```

## Ereignistyp

Ein [`FocusEvent`](/de/docs/Web/API/FocusEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("FocusEvent")}}

## Beispiele

### Interaktives Beispiel

#### HTML

```html
<form id="form">
  <label>
    Some text:
    <input type="text" placeholder="text input" />
  </label>
  <label>
    Password:
    <input type="password" placeholder="password" />
  </label>
</form>
```

#### JavaScript

```js
const form = document.getElementById("form");

form.addEventListener("focusin", (event) => {
  event.target.style.background = "pink";
});

form.addEventListener("focusout", (event) => {
  event.target.style.background = "";
});
```

#### Ergebnis

{{EmbedLiveSample("Live_example", '100%', '50px')}}

## Spezifikationen

{{Specifications}}

> [!NOTE]
> Die Spezifikation _UI Events_ beschreibt eine [Reihenfolge der Fokusereignisse](/de/docs/Web/API/FocusEvent#order_of_events), die sich von der Implementierung aktueller Browser unterscheidet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`blur`](/de/docs/Web/API/Element/blur_event), [`focus`](/de/docs/Web/API/Element/focus_event), [`focusout`](/de/docs/Web/API/Element/focusout_event)
- [Fokussierung: focus/blur](https://javascript.info/focus-blur)
