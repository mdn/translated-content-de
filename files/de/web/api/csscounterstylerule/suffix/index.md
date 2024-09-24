---
title: "CSSCounterStyleRule: Suffix-Eigenschaft"
short-title: Suffix
slug: Web/API/CSSCounterStyleRule/suffix
l10n:
  sourceCommit: 59b1cd1f520971b89ccf521d53a1d9d3bf4c0756
---

{{APIRef("CSS Counter Styles")}}

Die **`suffix`**-Eigenschaft der Schnittstelle {{domxref("CSSCounterStyleRule")}} ruft den Wert des Deskriptors {{cssxref("@counter-style/suffix","suffix")}} ab und setzt ihn. Wenn der Deskriptor keinen Wert gesetzt hat, gibt dieses Attribut einen leeren String zurück.

## Wert

Ein String

## Beispiele

Das folgende Beispiel zeigt eine {{cssxref("@counter-style")}}-Regel. In JavaScript ist `myRules[0]` diese `@counter-style`-Regel. Der Rückgabewert von `suffix` zeigt uns den Wert ": ".

```css
@counter-style box-corner {
  system: fixed;
  symbols: ◰ ◳ ◲ ◱;
  suffix: ": ";
  negative: "-";
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].suffix); // ": "
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
