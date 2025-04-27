---
title: "CSSFontFaceRule: style-Eigenschaft"
short-title: style
slug: Web/API/CSSFontFaceRule/style
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft der [`CSSFontFaceRule`](/de/docs/Web/API/CSSFontFaceRule)-Schnittstelle gibt die Stilinformationen aus der {{cssxref("@font-face")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) zurück. Diese wird in Form eines [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekts vorliegen.

## Wert

Eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration).

## Beispiele

Dieses Beispiel verwendet das CSS, das auf der Seite von {{cssxref("@font-face")}} als Beispiel gefunden wurde. Die erste zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) wird eine `CSSFontFaceRule` sein. Die `style`-Eigenschaft gibt eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) mit den Eigenschaften `fontFamily`, `fontWeight` und `src` zurück, die mit den Informationen aus der Regel gefüllt sind.

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
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].style); // A CSSStyleDeclaration
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
