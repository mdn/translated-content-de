---
title: "CSSFontFaceRule: style-Eigenschaft"
short-title: style
slug: Web/API/CSSFontFaceRule/style
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft des [`CSSFontFaceRule`](/de/docs/Web/API/CSSFontFaceRule)-Interfaces gibt die Stilinformationen aus der {{cssxref("@font-face")}}-[@-Regel](/de/docs/Web/CSS/At-rule) zurück. Diese wird in Form eines [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekts vorliegen.

## Wert

Ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration).

## Beispiele

Dieses Beispiel verwendet die CSS, die als Beispiel auf der {{cssxref("@font-face")}}-Seite gefunden wird. Die erste zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) wird eine `CSSFontFaceRule` sein. Die `style`-Eigenschaft liefert eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) mit den Eigenschaften `fontFamily`, `fontWeight` und `src`, die mit den Informationen aus der Regel gefüllt sind.

```css
@font-face {
  font-family: MyHelvetica;
  src: local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
    url(MgOpenModernaBold.ttf);
  font-weight: bold;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].style); //a CSSStyleDeclaration
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
