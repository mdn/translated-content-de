---
title: CSSFontFaceRule
slug: Web/API/CSSFontFaceRule
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{APIRef("CSSOM")}}

Die **`CSSFontFaceRule`**-Schnittstelle repräsentiert eine {{cssxref("@font-face")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSFontFaceRule.style`](/de/docs/Web/API/CSSFontFaceRule/style) {{ReadOnlyInline}}
  - : Gibt eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück.

## Instanz-Methoden

_Erbt Methoden von ihrem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

Dieses Beispiel nutzt das CSS, das auf der Seite zu {{cssxref("@font-face")}} als Beispiel aufgeführt ist. Die erste zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) wird eine `CSSFontFaceRule` sein.

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
console.log(myRules[0]); //a CSSFontFaceRule
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
