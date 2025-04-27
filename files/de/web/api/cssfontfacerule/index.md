---
title: CSSFontFaceRule
slug: Web/API/CSSFontFaceRule
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("CSSOM")}}

Das **`CSSFontFaceRule`** Interface repräsentiert eine {{cssxref("@font-face")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSFontFaceRule.style`](/de/docs/Web/API/CSSFontFaceRule/style) {{ReadOnlyInline}}
  - : Gibt eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück.

## Instanz-Methoden

_Erbt Methoden von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

Dieses Beispiel verwendet das CSS, das als Beispiel auf der Seite von {{cssxref("@font-face")}} zu finden ist. Die erste zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) wird eine `CSSFontFaceRule` sein.

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
console.log(myRules[0]); // A CSSFontFaceRule
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
