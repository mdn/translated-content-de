---
title: "ShadowRoot: fullscreenElement-Eigenschaft"
short-title: fullscreenElement
slug: Web/API/ShadowRoot/fullscreenElement
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Shadow DOM")}}

Die **`fullscreenElement`** schreibgeschützte Eigenschaft des [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Interfaces gibt das Element innerhalb des Schattenbaums zurück, das momentan im Vollbild angezeigt wird.

## Wert

Das [`Element`](/de/docs/Web/API/Element), das derzeit im Vollbildmodus angezeigt wird, oder `null`, wenn kein Vollbild-Element vorhanden ist.

## Beispiele

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;
let fullscreenElem = shadow.fullscreenElement;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement)
