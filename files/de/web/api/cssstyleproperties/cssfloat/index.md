---
title: "CSSStyleProperties: cssFloat-Eigenschaft"
short-title: cssFloat
slug: Web/API/CSSStyleProperties/cssFloat
l10n:
  sourceCommit: d3bbe8558e181a2b6e04abdedc429fb2a0e4f015
---

{{APIRef("CSSOM")}}

Die **`cssFloat`**-Eigenschaft des [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Interfaces gibt die CSS-{{cssxref("float")}}-Eigenschaft zurück.

Dies ist das Ergebnis des Aufrufs von [`getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) am Objekt mit `float` als Argument.

Beim Setzen wird [`setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty) aufgerufen, mit `float` als erstem Argument und dem gegebenen Wert als zweitem Argument. Der gegebene Wert muss ein gültiger Wert für die {{cssxref("float")}}-Eigenschaft sein.

## Wert

Ein String.

Wenn auf den Wert `null` gesetzt wird, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, sodass `csd.cssFloat = null` gleichbedeutend mit `csd.cssFloat = ""` ist.

## Beispiel

Im untenstehenden Beispiel enthält das Stylesheet eine einzige Regel für `.box`, welche die {{cssxref("float")}}-Eigenschaft mit dem Wert `left` hat. Dieser Wert wird von `cssFloat` zurückgegeben. Wir setzen dann den Wert auf "right" mit `cssFloat` und geben den neuen Wert zurück.

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
