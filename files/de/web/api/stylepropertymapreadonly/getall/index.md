---
title: "StylePropertyMapReadOnly: Methode getAll()"
short-title: getAll()
slug: Web/API/StylePropertyMapReadOnly/getAll
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}

Die **`getAll()`**-Methode der [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly)-Schnittstelle gibt ein Array von [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)-Objekten zurück, das die Werte für die angegebene Eigenschaft enthält.

## Syntax

```js-nolint
getAll(property)
```

### Parameter

- `property`
  - : Der Name der Eigenschaft, von der alle Werte abgerufen werden sollen.

### Rückgabewert

Ein Array von [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)-Objekten.

## Beispiele

### Grundlegende Verwendung

Im folgenden Beispiel wird `getAll()` mit der {{cssxref('background-image')}}-Eigenschaft verwendet. Es wird ein {{jsxref('Array')}} zurückgegeben, das ein Element für jedes deklarierte Hintergrundbild enthält.

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
