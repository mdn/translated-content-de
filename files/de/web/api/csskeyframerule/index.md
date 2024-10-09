---
title: CSSKeyframeRule
slug: Web/API/CSSKeyframeRule
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef("CSSOM")}}

Die **`CSSKeyframeRule`** Schnittstelle beschreibt ein Objekt, das eine Reihe von Stilen für ein bestimmtes Keyframe darstellt. Sie entspricht dem Inhalt eines einzelnen Keyframes einer {{cssxref("@keyframes")}} [At-Regel](/de/docs/Web/CSS/At-rule).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSKeyframeRule.keyText`](/de/docs/Web/API/CSSKeyframeRule/keyText)
  - : Repräsentiert den Schlüssel des Keyframes, wie zum Beispiel `'10%'`, `'75%'`. Das Schlüsselwort `from` entspricht `'0%'` und das Schlüsselwort `to` entspricht `'100%'`.
- [`CSSKeyframeRule.style`](/de/docs/Web/API/CSSKeyframeRule/style) {{ReadOnlyInline}}
  - : Gibt eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) des mit dem Keyframe verbundenen CSS-Stils zurück.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von ihrem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

Das CSS enthält eine `@keyframes`-Regel. Dies wird die erste [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird. `myRules[0]` gibt ein [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule) Objekt zurück, das einzelne `CSSKeyFrameRule` Objekte für jedes Keyframe enthält.

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
