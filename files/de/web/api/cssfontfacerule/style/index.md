---
title: "CSSFontFaceRule: style-Eigenschaft"
short-title: style
slug: Web/API/CSSFontFaceRule/style
l10n:
  sourceCommit: b64538dc77e9a6181b882bd54bdbb307c1430ba8
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft der Schnittstelle [`CSSFontFaceRule`](/de/docs/Web/API/CSSFontFaceRule) gibt die Stilinformationen aus der {{cssxref("@font-face")}}-[@-Regel](/de/docs/Web/CSS/At-rule) zurück. Diese wird in Form eines [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekts bereitgestellt.

## Wert

Ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration).

## Beispiele

Dieses Beispiel verwendet das CSS, das als Beispiel auf der Seite zu {{cssxref("@font-face")}} gefunden wurde. Das erste zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) wird eine `CSSFontFaceRule` sein. Die `style`-Eigenschaft gibt eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück, bei der die Eigenschaften `fontFamily`, `fontWeight` und `src` mit den Informationen aus der Regel befüllt sind.

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
