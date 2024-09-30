---
title: "ShadowRoot: activeElement-Eigenschaft"
short-title: activeElement
slug: Web/API/ShadowRoot/activeElement
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Shadow DOM")}}

Die **`activeElement`**-Eigenschaft des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Interfaces gibt das Element innerhalb des Schattenbaums zurück, das den Fokus hat.

## Wert

Das [`Element`](/de/docs/Web/API/Element), das derzeit den Fokus hat, oder `null`, wenn es kein fokussiertes Element gibt.

## Beispiele

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;
let focusedElem = shadow.activeElement;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.activeElement`](/de/docs/Web/API/Document/activeElement)
