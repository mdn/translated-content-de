---
title: "CSSCounterStyleRule: symbols-Eigenschaft"
short-title: symbols
slug: Web/API/CSSCounterStyleRule/symbols
l10n:
  sourceCommit: 9840d330e75b5fa4eec7034859a7d96e5d6ae07b
---

{{APIRef("CSSOM")}}

Die **`symbols`**-Eigenschaft der Schnittstelle [`CSSCounterStyleRule`](/de/docs/Web/API/CSSCounterStyleRule) erhält und setzt den Wert des Deskriptors {{cssxref("@counter-style/symbols","symbols")}}. Wenn der Deskriptor keinen Wert gesetzt hat, gibt dieses Attribut eine leere Zeichenkette zurück.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel zeigt eine {{cssxref("@counter-style")}}-Regel. In JavaScript ist `myRules[0]` diese `@counter-style`-Regel, und das Abrufen von `symbols` gibt uns den Wert "◰ ◳ ◲ ◱" zurück.

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
console.log(myRules[0].symbols); // "◰ ◳ ◲ ◱"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
