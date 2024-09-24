---
title: "StylePropertyMapReadOnly: size-Eigenschaft"
short-title: Größe
slug: Web/API/StylePropertyMapReadOnly/size
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("CSS Typed Object Model API")}}

Die **`size`** Lese-Eigenschaft der
{{domxref("StylePropertyMapReadOnly")}} Schnittstelle gibt eine ganze Zahl ohne Vorzeichen zurück, die die Größe des `StylePropertyMapReadOnly`-Objekts enthält.

## Wert

Eine ganze Zahl ohne Vorzeichen.

## Beispiele

Hier verwenden wir die size-Eigenschaft, um die Gesamteinträge innerhalb der Schaltflächen-Elemente
{{domxref('Element.computedStyleMap()','computedStyleMap')}} zurückzugeben.

```js
// Unser Element abrufen
const buttonEl = document.querySelector("button");

// Wir können alle berechneten Stile mit `computedStyleMap` abrufen
const allComputedStyles = buttonEl.computedStyleMap();

// Die Größe verwenden, um die Gesamtzahl der Stile innerhalb der Karte zu erhalten
const amountStyles = allComputedStyles.size;
console.log(amountStyles); // gibt 338 aus
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
