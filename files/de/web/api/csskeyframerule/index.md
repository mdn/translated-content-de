---
title: CSSKeyframeRule
slug: Web/API/CSSKeyframeRule
l10n:
  sourceCommit: 4da6c30730190b55e9b405711fedf6cdc755972d
---

{{APIRef("CSSOM")}}

Die **`CSSKeyframeRule`**-Schnittstelle beschreibt ein Objekt, das einen Satz von Stilen für einen gegebenen Keyframe darstellt. Es entspricht den Inhalten eines einzelnen Keyframes einer {{cssxref("@keyframes")}} [At-Regel](/de/docs/Web/CSS/At-rule).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSKeyframeRule.keyText`](/de/docs/Web/API/CSSKeyframeRule/keyText)
  - : Repräsentiert den Schlüssel des Keyframes, wie `'10%'`, `'75%'`. Das `from`-Schlüsselwort entspricht `'0%'` und das `to`-Schlüsselwort entspricht `'100%'`.
- [`CSSKeyframeRule.style`](/de/docs/Web/API/CSSKeyframeRule/style) {{ReadOnlyInline}}
  - : Gibt ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) des CSS-Stils zurück, der dem Keyframe zugeordnet ist.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

Der CSS enthält eine Keyframes-At-Regel. Dies wird die erste [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
`myRules[0]` gibt ein [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule)-Objekt zurück, das individuelle `CSSKeyFrameRule`-Objekte für jeden Keyframe enthalten wird.

```css
@keyframes slidein {
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
