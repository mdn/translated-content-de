---
title: CSSFontFaceRule
slug: Web/API/CSSFontFaceRule
l10n:
  sourceCommit: 1d5c902cab960d469baba95eb12cd421769b9111
---

{{APIRef("CSSOM")}}

Die **`CSSFontFaceRule`**-Schnittstelle repräsentiert eine {{cssxref("@font-face")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSFontFaceRule.style`](/de/docs/Web/API/CSSFontFaceRule/style) {{ReadOnlyInline}}
  - : Gibt ein [`CSSFontFaceDescriptors`](/de/docs/Web/API/CSSFontFaceDescriptors)-Objekt zurück, das das Lesen und Setzen der Deskriptoren der zugehörigen {{cssxref("@font-face")}}-At-Regel erlaubt.

## Instanz-Methoden

_Erbt Methoden von ihrem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

Dieses Beispiel verwendet das CSS, das als Beispiel auf der {{cssxref("@font-face")}}-Seite zu finden ist. Die erste zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) wird eine `CSSFontFaceRule` sein.

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
console.log(myRules[0]); // A CSSFontFaceRule
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
