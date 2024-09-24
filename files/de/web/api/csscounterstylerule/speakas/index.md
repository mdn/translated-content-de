---
title: "CSSCounterStyleRule: speakAs-Eigenschaft"
short-title: speakAs
slug: Web/API/CSSCounterStyleRule/speakAs
l10n:
  sourceCommit: 59b1cd1f520971b89ccf521d53a1d9d3bf4c0756
---

{{APIRef("CSS Counter Styles")}}

Die **`speakAs`**-Eigenschaft der {{domxref("CSSCounterStyleRule")}}-Schnittstelle ruft den Wert des {{cssxref("@counter-style/speak-as", "speak-as")}} Deskriptors ab und setzt ihn. Wenn das Deskriptor keinen Wert hat, gibt dieses Attribut einen leeren String zurück.

## Wert

Ein String

## Beispiele

Das folgende Beispiel zeigt eine {{cssxref("@counter-style")}}-Regel. In JavaScript ist `myRules[0]` diese `@counter-style`-Regel. Wenn `speakAs` abgerufen wird, erhalten wir den Wert "bullets".

```css
@counter-style box-corner {
  system: fixed;
  symbols: ◰ ◳ ◲ ◱;
  suffix: ": ";
  speak-as: bullets;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].speakAs); // "bullets"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
