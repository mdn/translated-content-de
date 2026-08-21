---
title: "Element: DOMActivate Event"
short-title: DOMActivate
slug: Web/API/Element/DOMActivate_event
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef}}

Das **`DOMActivate`**-Ereignis wird an einem Element ausgelöst, wenn es aktiv wird, beispielsweise wenn es mit der Maus angeklickt wird oder eine Tasteneingabe verwendet wird, um zu ihm zu navigieren.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

```js-nolint
addEventListener("DOMActivate", (event) => { })
```

> [!NOTE]
> Es gibt keine `onDOMActivate`-Ereignishandler-Eigenschaft für dieses Ereignis.

## Ereignistyp

Ein [`UIEvent`](/de/docs/Web/API/UIEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("UIEvent")}}

## Beispiele

Dieses Beispiel wartet auf `DOMActivate` bei einem {{HtmlElement("button")}}-Element und zeigt dessen [`detail`](/de/docs/Web/API/UIEvent/detail).

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

Beachten Sie, dass `detail` des `DOMActivate`-Ereignisses ein browser-spezifisches Verhalten haben kann. Es kann entweder immer `0` sein oder ein ähnliches Verhalten wie das `detail` des [`click`](/de/docs/Web/API/Element/click_event)-Ereignisses haben (d.h. die Anzahl der aufeinanderfolgenden Klicks anzeigen).

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`UIEvent`](/de/docs/Web/API/UIEvent)
- [`click`](/de/docs/Web/API/Element/click_event)
