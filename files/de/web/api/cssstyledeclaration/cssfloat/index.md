---
title: "CSSStyleDeclaration: cssFloat-Eigenschaft"
short-title: cssFloat
slug: Web/API/CSSStyleDeclaration/cssFloat
l10n:
  sourceCommit: 4656260748aea78929639c4bf776d643d9911a82
---

{{APIRef("CSSOM")}}

Die **`cssFloat`**-Eigenschaft der {{domxref("CSSStyleDeclaration")}}-Schnittstelle gibt das Ergebnis des Aufrufs von {{DOMxRef("CSSStyleDeclaration.getPropertyValue()")}} mit `float` als Argument zurück.

Beim Setzen wird {{DOMxRef("CSSStyleDeclaration.setProperty()")}} mit `float` als erstem Argument und dem angegebenen Wert als zweitem Argument aufgerufen. Der angegebene Wert muss ein gültiger Wert für die {{cssxref("float")}}-Eigenschaft sein.

## Wert

Ein String.

Wenn er auf den Wert `null` gesetzt wird, wird dieser `null`-Wert in den leeren String (`""`) konvertiert, sodass `csd.cssFloat = null` dem `csd.cssFloat = ""` entspricht.

## Beispiel

Im folgenden Beispiel enthält das Stylesheet eine einzelne Regel für `.box`, die die {{cssxref("float")}}-Eigenschaft mit einem Wert von `left` hat. Dieser Wert wird von `cssFloat` zurückgegeben. Wir setzen dann den Wert mit `cssFloat` auf "right" und geben den neuen Wert zurück.

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
