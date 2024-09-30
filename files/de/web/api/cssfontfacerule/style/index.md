---
title: "CSSFontFaceRule: style-Eigenschaft"
short-title: style
slug: Web/API/CSSFontFaceRule/style
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft der [`CSSFontFaceRule`](/de/docs/Web/API/CSSFontFaceRule)-Schnittstelle gibt die Stilinformationen aus der {{cssxref("@font-face")}} [at-rule](/de/docs/Web/CSS/At-rule) zurück. Dies erfolgt in Form eines [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekts.

## Wert

Eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration).

## Beispiele

Dieses Beispiel verwendet das CSS, das als Beispiel auf der {{cssxref("@font-face")}}-Seite zu finden ist. Die erste zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) ist eine `CSSFontFaceRule`. Die `style`-Eigenschaft gibt eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück, bei der die Eigenschaften `fontFamily`, `fontWeight` und `src` mit den Informationen aus der Regel gefüllt sind.

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
