---
title: "CSSCounterStyleRule: suffix-Eigenschaft"
short-title: suffix
slug: Web/API/CSSCounterStyleRule/suffix
l10n:
  sourceCommit: 9840d330e75b5fa4eec7034859a7d96e5d6ae07b
---

{{APIRef("CSSOM")}}

Die **`suffix`**-Eigenschaft der [`CSSCounterStyleRule`](/de/docs/Web/API/CSSCounterStyleRule)-Schnittstelle erhält und setzt den Wert des {{cssxref("@counter-style/suffix","suffix")}}-Deskriptors. Wenn dem Deskriptor kein Wert zugewiesen wurde, gibt dieses Attribut einen leeren String zurück.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel zeigt eine {{cssxref("@counter-style")}}-Regel. In JavaScript ist `myRules[0]` diese `@counter-style`-Regel, die Rückgabe von `suffix` gibt uns den Wert ": ".

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

## Browser-Kompatibilität

{{Compat}}
