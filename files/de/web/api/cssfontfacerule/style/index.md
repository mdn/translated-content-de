---
title: "CSSFontFaceRule: Eigenschaft style"
short-title: style
slug: Web/API/CSSFontFaceRule/style
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft der [`CSSFontFaceRule`](/de/docs/Web/API/CSSFontFaceRule)-Schnittstelle gibt die Stilinformationen aus der {{cssxref("@font-face")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) zurück. Dies wird in Form eines [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekts sein.

## Wert

Ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration).

## Beispiele

Dieses Beispiel verwendet das CSS, das als Beispiel auf der {{cssxref("@font-face")}}-Seite gefunden wird. Die erste zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) wird eine `CSSFontFaceRule` sein. Die `style`-Eigenschaft gibt eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) mit den Eigenschaften `fontFamily`, `fontWeight` und `src` zurück, die mit den Informationen aus der Regel gefüllt sind.

```css
@font-face {
  font-family: "MyHelvetica";
  src:
    local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
    url("MgOpenModernaBold.ttf");
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
