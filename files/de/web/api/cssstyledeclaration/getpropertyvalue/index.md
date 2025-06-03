---
title: "CSSStyleDeclaration: getPropertyValue() Methode"
short-title: getPropertyValue()
slug: Web/API/CSSStyleDeclaration/getPropertyValue
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{ APIRef("CSSOM") }}

Die Methode **CSSStyleDeclaration.getPropertyValue()** gibt ein String zurück, das den Wert einer angegebenen CSS-Eigenschaft enthält.

## Syntax

```js-nolint
getPropertyValue(property)
```

### Parameter

- `property`
  - : Ein String, der den Namen der Eigenschaft (im Trennstrich-Stil) darstellt, die überprüft werden soll.

### Rückgabewert

Ein String, der den Wert der Eigenschaft enthält. Wenn nicht gesetzt, wird ein leerer String zurückgegeben.

Der Eigenschaftswert wird dynamisch berechnet, nicht das, was ursprünglich in der Deklaration angegeben wurde. Die Serialisierung erfolgt auf folgende Weise:

- Wenn `property` eine Abkürzungseigenschaft ist, werden alle zugehörigen Langform-Eigenschaften abgerufen. Beachten Sie, dass Abkürzungseigenschaften, die im ursprünglichen Stylesheet angegeben wurden, bereits während der Parsierung erweitert wurden. Wenn mindestens eine dieser Langform-Eigenschaften nicht deklariert ist oder sich ihr `!important`-Status unterscheidet, ist das Ergebnis der leere String. Andernfalls wird ein Eigenschaftswert zurückgegeben, der sich auf dieselbe Liste von Langform-Eigenschaftswerten erweitert, und dieser Abkürzungswert wird so viele Komponenten wie möglich weglassen und, wenn möglich, in die kanonische Reihenfolge der formalen Definition umgestellt. Wenn eine der oben genannten syntaktischen Übersetzungen weniger rückwärtskompatibel wäre, führen Sie sie nicht durch.
- Andernfalls wird die Eigenschaft gemäß ihrem Datentyp serialisiert. Jeder Datentyp hat eine kanonische Darstellung; zum Beispiel verwenden `<color>`-Werte immer `rgb(R, G, B)` oder `rgba(R, G, B, A)`.

Im Wesentlichen wird der Eigenschaftswert _kanonisiert_, um sicherzustellen, dass zwei Eigenschaftswerte mit derselben Darstellungswirkung gleich verglichen werden, selbst wenn sie unterschiedlich deklariert sind.

## Beispiele

Der folgende JavaScript-Code fragt den Wert der `margin`-Eigenschaft in einer CSS-Selektorregel ab:

```js
const declaration = document.styleSheets[0].cssRules[0].style;
const value = declaration.getPropertyValue("margin"); // "1px 2px"
```

Der zurückgegebene String kann sich von dem in der Stilbeschreibung des Elements angegebenen Wert unterscheiden. Zum Beispiel diese Stilzuweisung:

```css
p#blueish {
  color: hsl(250 90 50);
}
```

```js
const declaration = document.styleSheets[0].cssRules[0].style;
const value = declaration.getPropertyValue("color");
```

Setzt einen Wert `rgb(51, 13, 242);`. Dies ist wichtig, wenn Stile durch Strings verglichen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
