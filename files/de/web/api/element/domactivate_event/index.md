---
title: "Element: DOMActivate-Ereignis"
short-title: DOMActivate
slug: Web/API/Element/DOMActivate_event
l10n:
  sourceCommit: 99487ceacd216eeb20b8679b1dc0fe6b16e7366d
---

{{APIRef}}{{Deprecated_Header}}

Das **`DOMActivate`**-Ereignis wird an einem Element ausgelöst, wenn es aktiv wird, beispielsweise wenn darauf geklickt wird oder eine Taste zur Navigation darauf verwendet wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).

```js-nolint
addEventListener("DOMActivate", (event) => { })
```

> [!NOTE]
> Es gibt keine `onDOMActivate` Ereignishandler-Eigenschaft für dieses Ereignis.

## Ereignistyp

Ein [`UIEvent`](/de/docs/Web/API/UIEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("UIEvent")}}

## Beispiele

Dieses Beispiel lauscht auf `DOMActivate` bei einem {{HtmlElement("button")}}-Element und zeigt dessen [`detail`](/de/docs/Web/API/UIEvent/detail) an.

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

Beachten Sie, dass `detail` des `DOMActivate`-Ereignisses browser-spezifisches Verhalten haben kann. Es kann entweder immer `0` sein oder ein ähnliches Verhalten wie das `detail` des [`click`](/de/docs/Web/API/Element/click_event)-Ereignisses haben (d.h. die Anzahl der aufeinanderfolgenden Klicks angeben).

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`UIEvent`](/de/docs/Web/API/UIEvent)
- [`click`](/de/docs/Web/API/Element/click_event)
