---
title: "StylePropertyMapReadOnly: getAll() Methode"
short-title: getAll()
slug: Web/API/StylePropertyMapReadOnly/getAll
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`getAll()`**-Methode des [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly)-Interfaces gibt ein Array von [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)-Objekten zurück, das die Werte für die angegebene Eigenschaft enthält.

## Syntax

```js-nolint
getAll(property)
```

### Parameter

- `property`
  - : Der Name der Eigenschaft, deren alle Werte abgerufen werden sollen.

### Rückgabewert

Ein Array von [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)-Objekten.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel verwendet `getAll()` mit der {{cssxref('background-image')}}-Eigenschaft.
Ein {{jsxref('Array')}} wird zurückgegeben, das ein Element für jedes deklarierte Hintergrundbild enthält.

```js
// get a button element
const buttonEl = document.querySelector("button");

// we can retrieve all computed styles with `computedStyleMap`
const allComputedStyles = buttonEl.computedStyleMap();

// use getAll() with the background image property
const allBkImages = allComputedStyles.getAll("background-image");
console.log(allBkImages); // logs an array with each background image as an item
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
