---
title: "Element: DOMActivate-Ereignis"
short-title: DOMActivate
slug: Web/API/Element/DOMActivate_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef}}

Das Ereignis **`DOMActivate`** wird bei einem Element ausgelöst, wenn es aktiviert wird, beispielsweise durch einen Mausklick oder durch einen Tastendruck, mit dem zu ihm navigiert wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("DOMActivate", (event) => { })
```

> [!NOTE]
> Für dieses Ereignis gibt es keine Ereignishandler-Eigenschaft `onDOMActivate`.

## Ereignistyp

Ein [`UIEvent`](/de/docs/Web/API/UIEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("UIEvent")}}

## Beispiele

Dieses Beispiel lauscht auf `DOMActivate` an einem {{HtmlElement("button")}}-Element und zeigt dessen [`detail`](/de/docs/Web/API/UIEvent/detail) an.

### HTML

```html
<button>Click</button>
```

### JavaScript

```js
const button = document.querySelector("button");

button.addEventListener("DOMActivate", (event) => {
  button.textContent = `Click count: ${event.detail}`;
});
```

### Ergebnis

Beachten Sie, dass sich `detail` beim Ereignis `DOMActivate` je nach Browser unterschiedlich verhalten kann. Der Wert kann entweder immer `0` sein oder sich ähnlich wie `detail` beim Ereignis [`click`](/de/docs/Web/API/Element/click_event) verhalten, also die Anzahl aufeinanderfolgender Klicks angeben.

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`UIEvent`](/de/docs/Web/API/UIEvent)
- [`click`](/de/docs/Web/API/Element/click_event)
