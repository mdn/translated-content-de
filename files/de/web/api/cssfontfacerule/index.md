---
title: CSSFontFaceRule
slug: Web/API/CSSFontFaceRule
l10n:
  sourceCommit: b64538dc77e9a6181b882bd54bdbb307c1430ba8
---

{{APIRef("CSSOM")}}

Die **`CSSFontFaceRule`**-Schnittstelle repräsentiert eine {{cssxref("@font-face")}} [at-rule](/de/docs/Web/CSS/At-rule).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSFontFaceRule.style`](/de/docs/Web/API/CSSFontFaceRule/style) {{ReadOnlyInline}}
  - : Gibt eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück.

## Instanz-Methoden

_Erbt Methoden von ihrem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

Dieses Beispiel verwendet die CSS, die auf der Seite zu {{cssxref("@font-face")}} beschrieben ist. Die erste zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) wird eine `CSSFontFaceRule` sein.

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
console.log(myRules[0]); //a CSSFontFaceRule
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
