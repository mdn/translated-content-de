---
title: "CSSStyleDeclaration: cssFloat-Eigenschaft"
short-title: cssFloat
slug: Web/API/CSSStyleDeclaration/cssFloat
l10n:
  sourceCommit: 4656260748aea78929639c4bf776d643d9911a82
---

{{APIRef("CSSOM")}}

Die **`cssFloat`**-Eigenschaft der [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Schnittstelle gibt das Ergebnis des Aufrufs von [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) mit dem Argument `float` zurück.

Beim Setzen wird [`CSSStyleDeclaration.setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty) mit `float` als erstem Argument und dem gegebenen Wert als zweitem Argument aufgerufen. Der gegebene Wert muss ein gültiger Wert für die {{cssxref("float")}}-Eigenschaft sein.

## Wert

Ein String.

Wenn auf den Wert `null` gesetzt, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `csd.cssFloat = null` gleichbedeutend ist mit `csd.cssFloat = ""`.

## Beispiel

Im folgenden Beispiel enthält das Stylesheet eine einzige Regel für `.box`, die die {{cssxref("float")}}-Eigenschaft mit einem Wert von `left` hat. Dieser Wert wird von `cssFloat` zurückgegeben. Anschließend setzen wir den Wert auf "right" mit `cssFloat` und geben den neuen Wert zurück.

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
console.log(rule.style.cssFloat); //right
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
