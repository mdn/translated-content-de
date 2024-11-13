---
title: "CSSCounterStyleRule: range-Eigenschaft"
short-title: range
slug: Web/API/CSSCounterStyleRule/range
l10n:
  sourceCommit: 9840d330e75b5fa4eec7034859a7d96e5d6ae07b
---

{{APIRef("CSSOM")}}

Die **`range`**-Eigenschaft der [`CSSCounterStyleRule`](/de/docs/Web/API/CSSCounterStyleRule)-Schnittstelle ruft den Wert des {{cssxref("@counter-style/range","range")}}-Deskriptors ab und setzt ihn. Wenn das Deskriptor keinen Wert gesetzt hat, gibt dieses Attribut einen leeren String zurück.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel zeigt eine {{cssxref("@counter-style")}}-Regel. In JavaScript ist `myRules[0]` diese `@counter-style`-Regel; das Zurückgeben von `range` gibt uns den Wert "2 4, 7 9".

```css
@counter-style range-multi-example {
  system: cyclic;
  symbols: "\25A0" "\25A1";
  range:
    2 4,
    7 9;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].range); // "2 4, 7 9"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
