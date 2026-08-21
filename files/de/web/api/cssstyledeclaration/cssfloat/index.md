---
title: "CSSStyleDeclaration: cssFloat-Eigenschaft"
short-title: cssFloat
slug: Web/API/CSSStyleDeclaration/cssFloat
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("CSSOM")}}

Die **`cssFloat`**-Eigenschaft des [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Interfaces gibt das Ergebnis des Aufrufs von [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) mit `float` als Argument zurück.

Beim Setzen ruft sie [`CSSStyleDeclaration.setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty) mit `float` als erstes Argument und dem angegebenen Wert als zweites Argument auf. Der angegebene Wert muss ein gültiger Wert für die {{cssxref("float")}}-Eigenschaft sein.

## Wert

Ein String.

Wenn der Wert auf `null` gesetzt wird, wird dieser `null`-Wert in einen leeren String (`""`) umgewandelt, sodass `csd.cssFloat = null` gleichbedeutend mit `csd.cssFloat = ""` ist.

## Beispiel

Im untenstehenden Beispiel enthält das Stylesheet eine einzige Regel für `.box`, die die {{cssxref("float")}}-Eigenschaft mit einem Wert von `left` hat. Dieser Wert wird von `cssFloat` zurückgegeben. Wir setzen dann den Wert mithilfe von `cssFloat` auf "right" und geben den neuen Wert zurück.

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
