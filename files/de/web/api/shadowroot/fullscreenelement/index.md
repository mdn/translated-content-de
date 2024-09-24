---
title: "ShadowRoot: fullscreenElement-Eigenschaft"
short-title: fullscreenElement
slug: Web/API/ShadowRoot/fullscreenElement
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Shadow DOM")}}

Die schreibgeschützte **`fullscreenElement`**-Eigenschaft des {{domxref("ShadowRoot")}}-Interfaces gibt das Element innerhalb des Shadow-Baums zurück, das aktuell im Vollbildmodus angezeigt wird.

## Wert

Das {{domxref('Element')}}, das derzeit im Vollbildmodus angezeigt wird,
oder `null`, wenn es kein Vollbildelement gibt.

## Beispiele

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;
let fullscreenElem = shadow.fullscreenElement;
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{domxref("Document.fullscreenElement")}}
