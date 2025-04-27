---
title: "CSSStyleDeclaration: cssFloat-Eigenschaft"
short-title: cssFloat
slug: Web/API/CSSStyleDeclaration/cssFloat
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("CSSOM")}}

Die **`cssFloat`**-Eigenschaft des [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Interfaces gibt das Ergebnis des Aufrufs von [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) mit `float` als Argument zurück.

Beim Setzen wird [`CSSStyleDeclaration.setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty) mit `float` als erstem Argument aufgerufen, und dem angegebenen Wert als zweites Argument. Der angegebene Wert muss ein gültiger Wert für die {{cssxref("float")}}-Eigenschaft sein.

## Wert

Ein String.

Wenn auf den Wert `null` gesetzt, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `csd.cssFloat = null` äquivalent zu `csd.cssFloat = ""` ist.

## Beispiel

Im untenstehenden Beispiel enthält das Stylesheet eine einzige Regel für `.box`, die die {{cssxref("float")}}-Eigenschaft mit dem Wert `left` hat. Dieser Wert wird durch `cssFloat` zurückgegeben. Anschließend setzen wir den Wert auf "right" mithilfe von `cssFloat` und geben den neuen Wert zurück.

```css
.box {
  float: left;
  inline-size: 300px;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
let rule = myRules[0];
console.log(rule.style.cssFloat); // "left"
rule.style.cssFloat = "right";
console.log(rule.style.cssFloat); // "right"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
