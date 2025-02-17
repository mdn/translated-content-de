---
title: "CSSFontFaceRule: style-Eigenschaft"
short-title: style
slug: Web/API/CSSFontFaceRule/style
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft der [`CSSFontFaceRule`](/de/docs/Web/API/CSSFontFaceRule)-Schnittstelle gibt die Stilinformationen aus der {{cssxref("@font-face")}}-[At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) zurück. Dies erfolgt in Form eines [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekts.

## Wert

Ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration).

## Beispiele

Dieses Beispiel verwendet das CSS, das als Beispiel auf der Seite {{cssxref("@font-face")}} zu finden ist. Die erste zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) ist eine `CSSFontFaceRule`. Die `style`-Eigenschaft gibt eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück, wobei die Eigenschaften `fontFamily`, `fontWeight` und `src` mit den Informationen aus der Regel gefüllt sind.

```css
@font-face {
  font-family: MyHelvetica;
  src:
    local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
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
