---
title: "CSSCounterStyleRule: additiveSymbols-Eigenschaft"
short-title: additiveSymbols
slug: Web/API/CSSCounterStyleRule/additiveSymbols
l10n:
  sourceCommit: 9840d330e75b5fa4eec7034859a7d96e5d6ae07b
---

{{APIRef("CSSOM")}}

Die **`additiveSymbols`**-Eigenschaft der [`CSSCounterStyleRule`](/de/docs/Web/API/CSSCounterStyleRule)-Schnittstelle ruft den Wert des {{cssxref("@counter-style/additive-symbols","additive-symbols")}}-Descriptors ab und setzt ihn. Wenn der Descriptor keinen Wert gesetzt hat, gibt dieses Attribut einen leeren String zurück.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel zeigt eine {{cssxref("@counter-style")}}-Regel. In JavaScript ist `myRules[0]` diese `@counter-style`-Regel. Das Abrufen von `additiveSymbols` liefert uns den Wert " V 5, IV 4, I 1".

```css
@counter-style additive-symbols-example {
  system: additive;
  additive-symbols:
    V 5,
    IV 4,
    I 1;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].additiveSymbols); // " V 5, IV 4, I 1"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
