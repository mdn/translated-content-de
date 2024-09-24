---
title: "ShadowRoot: activeElement-Eigenschaft"
short-title: activeElement
slug: Web/API/ShadowRoot/activeElement
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Shadow DOM")}}

Die schreibgeschützte **`activeElement`**-Eigenschaft der {{domxref("ShadowRoot")}}-Schnittstelle gibt das Element innerhalb des Shadow Trees zurück, das den Fokus hat.

## Wert

Das {{domxref('Element')}} welches aktuell den Fokus hat, oder `null`, wenn kein fokussiertes Element vorhanden ist.

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

- {{domxref("Document.activeElement")}}
