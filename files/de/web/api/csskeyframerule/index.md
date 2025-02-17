---
title: CSSKeyframeRule
slug: Web/API/CSSKeyframeRule
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{APIRef("CSSOM")}}

Das **`CSSKeyframeRule`** Interface beschreibt ein Objekt, das eine Gruppe von Styles für einen bestimmten Keyframe darstellt. Es entspricht dem Inhalt eines einzelnen Keyframes einer {{cssxref("@keyframes")}}-[At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSKeyframeRule.keyText`](/de/docs/Web/API/CSSKeyframeRule/keyText)
  - : Repräsentiert den Schlüssel des Keyframes, wie `'10%'`, `'75%'`. Das `from`-Schlüsselwort wird zu `'0%'` und das `to`-Schlüsselwort wird zu `'100%'` zugeordnet.
- [`CSSKeyframeRule.style`](/de/docs/Web/API/CSSKeyframeRule/style) {{ReadOnlyInline}}
  - : Gibt eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) der mit dem Keyframe verbundenen CSS-Stile zurück.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

Das CSS enthält eine `keyframes`-At-Regel. Dies wird die erste [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.  
`myRules[0]` gibt ein [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule)-Objekt zurück, das einzelne `CSSKeyFrameRule`-Objekte für jeden Keyframe enthalten wird.

```css
@keyframes slide-in {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}
```

```js
let myRules = document.styleSheets[0].cssRules;
let keyframes = myRules[0]; // a CSSKeyframesRule
console.log(keyframes[0]); // a CSSKeyframeRule representing an individual keyframe.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@keyframes")}}
- [`CSSKeyFramesRule`](/de/docs/Web/API/CSSKeyFramesRule)
