---
title: "CSSCounterStyleRule: fallback-Eigenschaft"
short-title: fallback
slug: Web/API/CSSCounterStyleRule/fallback
l10n:
  sourceCommit: 9840d330e75b5fa4eec7034859a7d96e5d6ae07b
---

{{APIRef("CSSOM")}}

Die **`fallback`**-Eigenschaft der [`CSSCounterStyleRule`](/de/docs/Web/API/CSSCounterStyleRule)-Schnittstelle ruft den Wert des {{cssxref("@counter-style/fallback","fallback")}}-Descriptors ab und setzt ihn. Wenn der Descriptor keinen Wert hat, gibt dieses Attribut einen leeren String zurück.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel zeigt eine {{cssxref("@counter-style")}}-Regel. In JavaScript ist `myRules[0]` diese `@counter-style`-Regel, und das Abrufen von `fallback` gibt uns den Wert „disc“ zurück.

```css
@counter-style box-corner {
  system: fixed;
  symbols: ◰ ◳ ◲ ◱;
  suffix: ": ";
  fallback: disc;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].fallback); // "disc"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
