---
title: CSSKeyframeRule
slug: Web/API/CSSKeyframeRule
l10n:
  sourceCommit: 4da6c30730190b55e9b405711fedf6cdc755972d
---

{{APIRef("CSSOM")}}

Die **`CSSKeyframeRule`** Schnittstelle beschreibt ein Objekt, das eine Menge von Stilen für einen bestimmten Keyframe repräsentiert. Sie entspricht dem Inhalt eines einzelnen Keyframes einer {{cssxref("@keyframes")}} [At-Regel](/de/docs/Web/CSS/At-rule).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Vorfahren {{domxref("CSSRule")}}._

- {{domxref("CSSKeyframeRule.keyText")}}
  - : Repräsentiert den Schlüssel des Keyframes, wie zum Beispiel `'10%'`, `'75%'`. Das Schlüsselwort `from` wird zu `'0%'` und das Schlüsselwort `to` wird zu `'100%'`.
- {{domxref("CSSKeyframeRule.style")}} {{ReadOnlyInline}}
  - : Gibt eine {{domxref("CSSStyleDeclaration")}} des mit dem Keyframe verbundenen CSS-Stils zurück.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinem Vorfahren {{domxref("CSSRule")}}._

## Beispiele

Das CSS enthält eine Keyframes-At-Regel. Dies wird die erste von `document.styleSheets[0].cssRules` zurückgegebene {{domxref("CSSRule")}} sein. `myRules[0]` gibt ein {{domxref("CSSKeyframesRule")}} Objekt zurück, das individuelle `CSSKeyFrameRule` Objekte für jeden Keyframe enthalten wird.

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

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{cssxref("@keyframes")}}
- {{domxref("CSSKeyFramesRule")}}
