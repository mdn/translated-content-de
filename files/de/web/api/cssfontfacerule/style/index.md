---
title: "CSSFontFaceRule: style-Eigenschaft"
short-title: style
slug: Web/API/CSSFontFaceRule/style
l10n:
  sourceCommit: 1d5c902cab960d469baba95eb12cd421769b9111
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`style`**-Eigenschaft der Schnittstelle [`CSSFontFaceRule`](/de/docs/Web/API/CSSFontFaceRule) gibt ein [`CSSFontFaceDescriptors`](/de/docs/Web/API/CSSFontFaceDescriptors)-Objekt zurück, das die in der Regel {{cssxref("@font-face")}} verfügbaren Deskriptoren darstellt.

## Wert

Ein [`CSSFontFaceDescriptors`](/de/docs/Web/API/CSSFontFaceDescriptors)-Objekt.

Obwohl die `style`-Eigenschaft selbst schreibgeschützt ist, insofern Sie das `CSSFontFaceDescriptors`-Objekt nicht ersetzen können, können Sie dennoch direkt der `style`-Eigenschaft etwas zuweisen, was gleichbedeutend ist mit der Zuweisung zu ihrer [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)-Eigenschaft. Sie können das `CSSFontFaceDescriptors`-Objekt auch mit den Methoden [`setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty) und [`removeProperty()`](/de/docs/Web/API/CSSStyleDeclaration/removeProperty) ändern.

## Beispiele

Dieses Beispiel verwendet das CSS, das als Beispiel auf der Seite {{cssxref("@font-face")}} gefunden wurde. Die erste zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) wird eine `CSSFontFaceRule` sein. Die `style`-Eigenschaft gibt ein [`CSSFontFaceDescriptors`](/de/docs/Web/API/CSSFontFaceDescriptors)-Objekt zurück, dessen Eigenschaften `fontFamily`, `fontWeight` und `src` mit den Informationen aus der Regel gefüllt sind.

```css
@font-face {
  font-family: "MyHelvetica";
  src:
    local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
    url("MgOpenModernaBold.woff2");
  font-weight: bold;
}
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].style); // A CSSFontFaceDescriptors
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
