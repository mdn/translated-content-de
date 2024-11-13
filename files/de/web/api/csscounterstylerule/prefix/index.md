---
title: "CSSCounterStyleRule: prefix-Eigenschaft"
short-title: prefix
slug: Web/API/CSSCounterStyleRule/prefix
l10n:
  sourceCommit: 9840d330e75b5fa4eec7034859a7d96e5d6ae07b
---

{{APIRef("CSSOM")}}

Die **`prefix`**-Eigenschaft der [`CSSCounterStyleRule`](/de/docs/Web/API/CSSCounterStyleRule)-Schnittstelle bekommt und setzt den Wert des {{cssxref("@counter-style/prefix","prefix")}}-Descriptors. Wenn der Deskriptor keinen Wert gesetzt hat, gibt dieses Attribut einen leeren String zurück.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel zeigt eine {{cssxref("@counter-style")}}-Regel. In JavaScript ist `myRules[0]` diese `@counter-style`-Regel. Die Rückgabe von `prefix` gibt uns den Wert "Chapter " zurück.

```css
@counter-style chapters {
  system: numeric;
  symbols: "0" "1" "2" "3" "4" "5" "6" "7" "8" "9";
  prefix: "Chapter ";
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].prefix); // "Chapter "
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
