---
title: "CSSCounterStyleRule: system-Eigenschaft"
short-title: system
slug: Web/API/CSSCounterStyleRule/system
l10n:
  sourceCommit: 9840d330e75b5fa4eec7034859a7d96e5d6ae07b
---

{{APIRef("CSSOM")}}

Die **`system`**-Eigenschaft der [`CSSCounterStyleRule`](/de/docs/Web/API/CSSCounterStyleRule)-Schnittstelle erhält und setzt den Wert des {{cssxref("@counter-style/system", "system")}}-Deskriptors. Wenn der Deskriptor keinen Wert festgelegt hat, gibt dieses Attribut einen leeren String zurück.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel zeigt eine {{cssxref("@counter-style")}}-Regel. In JavaScript ist `myRules[0]` diese `@counter-style`-Regel, und das Abrufen von `system` gibt uns den Wert "fixed" zurück.

```css
@counter-style box-corner {
  system: fixed;
  symbols: ◰ ◳ ◲ ◱;
  suffix: ": ";
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].system); // "fixed"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
