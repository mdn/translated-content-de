---
title: "CSSStyleDeclaration: Methode getPropertyValue()"
short-title: getPropertyValue()
slug: Web/API/CSSStyleDeclaration/getPropertyValue
l10n:
  sourceCommit: 5af8d52f5dec28f5a5556b1b98765847098a0071
---

{{ APIRef("CSSOM") }}

Die **CSSStyleDeclaration.getPropertyValue()** Methodenschnittstelle gibt einen String zurück, der den Wert einer angegebenen CSS-Eigenschaft enthält.

## Syntax

```js-nolint
getPropertyValue(property)
```

### Parameter

- `property`
  - : Ein String, der den Eigenschaftsnamen (in Bindestrich-Schreibweise) darstellt, der überprüft werden soll.

### Rückgabewert

Ein String, der den Wert der Eigenschaft enthält. Wenn nicht gesetzt, wird der leere String zurückgegeben.

Der Eigenschaftswert wird dynamisch berechnet, nicht so wie ursprünglich in der Deklaration angegeben. Die Serialisierung erfolgt wie folgt:

- Wenn `property` eine Kurzschreibweise-Eigenschaft ist, dann holen Sie alle Langschreibweise-Eigenschaften, denen sie entspricht. Beachten Sie, dass Kurzschreibweise-Eigenschaften, die im ursprünglichen Stylesheet angegeben wurden, bereits während der Parsezeit erweitert wurden. Wenn mindestens eine dieser Langschreibweise-Eigenschaften nicht deklariert ist oder sich ihre `!important`-Status unterscheiden, dann ist das Ergebnis der leere String. Andernfalls wird ein Eigenschaftswert zurückgegeben, der sich auf die gleiche Liste von Langschreibweise-Eigenschaften erweitert, und dieser Kurzschreibweise-Wert wird so viele Komponenten wie möglich weglassen und in der formalen Definition in der kanonischen Reihenfolge neu anordnen, wenn möglich. Wenn eine der obigen syntaktischen Übersetzungen weniger abwärtskompatibel wäre, führen Sie sie nicht durch.
- Andernfalls wird die Eigenschaft gemäß ihrem Datentyp serialisiert. Jeder Datentyp hat eine kanonische Darstellung; zum Beispiel verwenden `<color>`-Werte immer `rgb(R, G, B)` oder `rgba(R, G, B, A)`.

Im Wesentlichen wird der Eigenschaftswert _kanonisiert_, um sicherzustellen, dass zwei Eigenschaftswerte mit demselben Rendering-Effekt gleich verglichen werden, auch wenn sie unterschiedlich deklariert sind.

## Beispiele

Der folgende JavaScript-Code fragt den Wert der `margin`-Eigenschaft in einer CSS-Selektorregel ab:

```js
const declaration = document.styleSheets[0].cssRules[0].style;
const value = declaration.getPropertyValue("margin"); // "1px 2px"
```

Der zurückgegebene String kann von dem in der Stil-Spezifikation des Elements angegebenen Wert abweichen. Beispielsweise wird dieser Stil:

```html
<style>
  p#blueish {
    color: hsl(250 90 50);
  }
</style>
<script>
  const declaration = document.styleSheets[0].cssRules[0].style;
  const value = declaration.getPropertyValue("color");
</script>
```

Einen Wert `rgb(51, 13, 242);` setzen. Dies ist wichtig beim Vergleich von Stilen durch Strings.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
