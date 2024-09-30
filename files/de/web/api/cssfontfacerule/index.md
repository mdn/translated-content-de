---
title: CSSFontFaceRule
slug: Web/API/CSSFontFaceRule
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{APIRef("CSSOM")}}

Die **`CSSFontFaceRule`**-Schnittstelle repräsentiert eine {{cssxref("@font-face")}} [at-rule](/de/docs/Web/CSS/At-rule).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von ihrem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSFontFaceRule.style`](/de/docs/Web/API/CSSFontFaceRule/style) {{ReadOnlyInline}}
  - : Gibt ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurück.

## Instanzmethoden

_Erbt Methoden von ihrem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

Dieses Beispiel verwendet das CSS, das als Beispiel auf der Seite {{cssxref("@font-face")}} gefunden wurde. Die erste zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) wird eine `CSSFontFaceRule` sein.

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
