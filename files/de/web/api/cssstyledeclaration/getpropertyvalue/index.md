---
title: "CSSStyleDeclaration: getPropertyValue() Methode"
short-title: getPropertyValue()
slug: Web/API/CSSStyleDeclaration/getPropertyValue
l10n:
  sourceCommit: 5d5f7a8f52ad9b21eb4b8f6dd9d0afce23d1bdf6
---

{{ APIRef("CSSOM") }}

Die **CSSStyleDeclaration.getPropertyValue()** Methoden-Schnittstelle gibt einen String zurück, der den Wert einer angegebenen CSS-Eigenschaft enthält.

## Syntax

```js-nolint
getPropertyValue(property)
```

### Parameter

- `property`
  - : Ein String, der den Namen der Eigenschaft (in Bindestrich-Schreibweise) darstellt, die überprüft werden soll.

### Rückgabewert

Ein String, der den Wert der Eigenschaft enthält. Wenn nicht gesetzt, wird der leere String zurückgegeben.

Der Eigenschaftswert wird dynamisch berechnet, nicht das ursprünglich in der Deklaration angegebene. Die Serialisierung erfolgt wie folgt:

- Wenn `property` eine Kurzschreibweise ist, dann alle Langschreibweisen abrufen, die dazu gehören. Beachten Sie, dass Kurzschreibweisen, die im ursprünglichen Stylesheet angegeben wurden, bereits zur Parse-Zeit expandiert wurden. Wenn mindestens eine dieser Langschreibweisen nicht erklärt ist oder ihre `!important`-Status unterschiedlich sind, wird das Ergebnis der leere String sein. Andernfalls wird ein Eigenschaftswert zurückgegeben, der sich in dieselbe Liste von Langschrift-Eigenschaftswerten erweitert. Dieser Kurzschriftwert wird so viele Komponenten wie möglich weglassen und, wenn möglich, in der kanonischen Reihenfolge der formellen Definition neu angeordnet. Wenn eine der obigen syntaktischen Übersetzungen weniger abwärtskompatibel wäre, führen Sie sie nicht durch.
- Andernfalls wird die Eigenschaft gemäß ihrem Datentyp serialisiert. Jeder Datentyp hat eine kanonische Darstellung; beispielsweise verwenden `<color>`-Werte immer `rgb(R, G, B)` oder `rgba(R, G, B, A)`.

Im Wesentlichen wird der Eigenschaftswert _kanonikalisiert_, um sicherzustellen, dass zwei Eigenschaftswerte mit demselben Rendering-Effekt gleich verglichen werden, selbst wenn sie unterschiedlich deklariert sind.

## Beispiele

Der folgende JavaScript-Code fragt den Wert der `margin`-Eigenschaft in einer CSS-Selektorregel ab:

```js
const declaration = document.styleSheets[0].cssRules[0].style;
const value = declaration.getPropertyValue("margin"); // "1px 2px"
```

Der zurückgegebene String kann von dem in der Stil-Spezifikation des Elements angegebenen Wert abweichen. Beispielsweise wird dieses Styling:

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

einen Wert `rgb(51, 13, 242);` setzen. Dies ist wichtig, wenn man Stile durch Strings vergleicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
