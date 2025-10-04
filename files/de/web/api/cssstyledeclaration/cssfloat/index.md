---
title: "CSSStyleDeclaration: cssFloat-Eigenschaft"
short-title: cssFloat
slug: Web/API/CSSStyleDeclaration/cssFloat
l10n:
  sourceCommit: aa036e35601a5152c7589054550ac6b69fc98aee
---

{{APIRef("CSSOM")}}{{deprecated_header}}

Die **`cssFloat`**-Eigenschaft der [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Schnittstelle gibt das Ergebnis der Ausführung von [`CSSStyleDeclaration.getPropertyValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyValue) mit `float` als Argument zurück.

Beim Setzen wird [`CSSStyleDeclaration.setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty) mit `float` als erstem Argument und dem angegebenen Wert als zweitem Argument aufgerufen. Der angegebene Wert muss ein gültiger Wert für die {{cssxref("float")}}-Eigenschaft sein.

## Wert

Ein String.

Wenn der Wert auf `null` gesetzt wird, wird dieser `null`-Wert in den leeren String (`""`) konvertiert, sodass `csd.cssFloat = null` äquivalent zu `csd.cssFloat = ""` ist.

## Beispiel

Im folgenden Beispiel enthält das Stylesheet eine einzelne Regel für `.box`, die die {{cssxref("float")}}-Eigenschaft mit einem Wert von `left` hat. Dieser Wert wird von `cssFloat` zurückgegeben. Wir setzen den Wert dann mit `cssFloat` auf "right" und geben den neuen Wert zurück.

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
