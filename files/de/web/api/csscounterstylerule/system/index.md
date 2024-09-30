---
title: "CSSCounterStyleRule: system-Eigenschaft"
short-title: system
slug: Web/API/CSSCounterStyleRule/system
l10n:
  sourceCommit: 59b1cd1f520971b89ccf521d53a1d9d3bf4c0756
---

{{APIRef("CSS Counter Styles")}}

Die **`system`**-Eigenschaft der [`CSSCounterStyleRule`](/de/docs/Web/API/CSSCounterStyleRule)-Schnittstelle ruft den Wert des {{cssxref("@counter-style/system", "system")}}-Descriptors ab und setzt ihn. Wenn der Descriptor keinen festgelegten Wert hat, gibt dieses Attribut einen leeren String zurück.

## Wert

Ein String

## Beispiele

Das folgende Beispiel zeigt eine {{cssxref("@counter-style")}}-Regel. In JavaScript ist `myRules[0]` diese `@counter-style`-Regel; die Rückgabe von `system` gibt uns den Wert "fixed".

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
