---
title: "CSSCounterStyleRule: Name-Eigenschaft"
short-title: name
slug: Web/API/CSSCounterStyleRule/name
l10n:
  sourceCommit: 59b1cd1f520971b89ccf521d53a1d9d3bf4c0756
---

{{APIRef("CSS Counter Styles")}}

Die **`name`**-Eigenschaft der [`CSSCounterStyleRule`](/de/docs/Web/API/CSSCounterStyleRule)-Schnittstelle liest und setzt die {{CSSxRef("&lt;custom-ident&gt;")}}, die als `name` für die zugehörige Regel definiert ist.

## Wert

Ein String

## Beispiele

Das folgende Beispiel zeigt eine {{cssxref("@counter-style")}}-Regel. In JavaScript ist `myRules[0]` diese `@counter-style`-Regel. Die Rückgabe von `name` liefert uns den benutzerdefinierten Identifikator "box-corner".

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
console.log(myRules[0].name); // "box-corner"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
