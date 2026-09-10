---
title: "ShadowRoot: Eigenschaft fullscreenElement"
short-title: fullscreenElement
slug: Web/API/ShadowRoot/fullscreenElement
l10n:
  sourceCommit: a23122d0e86fb376234614beb5b350b217068054
---

{{APIRef("Shadow DOM")}}

Die schreibgeschützte Eigenschaft **`fullscreenElement`** des Interfaces [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) gibt das Element innerhalb des Shadow Tree zurück, das derzeit im Vollbild angezeigt wird.

## Wert

Das [`Element`](/de/docs/Web/API/Element), das derzeit im Vollbildmodus angezeigt wird,
oder `null`, wenn es kein Vollbildelement gibt.

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
