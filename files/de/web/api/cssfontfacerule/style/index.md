---
title: "CSSFontFaceRule: style-Eigenschaft"
short-title: style
slug: Web/API/CSSFontFaceRule/style
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft der [`CSSFontFaceRule`](/de/docs/Web/API/CSSFontFaceRule)-Schnittstelle enthält ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt, das die im Körper der {{cssxref("@font-face")}}-Regel verfügbaren Deskriptoren darstellt.

## Wert

Ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt.

Obwohl die `style`-Eigenschaft selbst in dem Sinne schreibgeschützt ist, dass Sie das `CSSStyleDeclaration`-Objekt nicht ersetzen können, können Sie dennoch direkt der `style`-Eigenschaft zuweisen, was dem Zuweisen zu ihrer [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)-Eigenschaft entspricht. Sie können das `CSSStyleDeclaration`-Objekt auch mit den Methoden [`setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty) und [`removeProperty()`](/de/docs/Web/API/CSSStyleDeclaration/removeProperty) ändern.

## Beispiele

Dieses Beispiel verwendet das CSS, das als Beispiel auf der Seite {{cssxref("@font-face")}} gefunden wurde. Die erste zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) ist eine `CSSFontFaceRule`. Die `style`-Eigenschaft gibt eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) mit den Eigenschaften `fontFamily`, `fontWeight` und `src` zurück, die mit den Informationen aus der Regel gefüllt sind.

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
