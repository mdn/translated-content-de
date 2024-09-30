---
title: "CSSCounterStyleRule: name-Eigenschaft"
short-title: name
slug: Web/API/CSSCounterStyleRule/name
l10n:
  sourceCommit: 59b1cd1f520971b89ccf521d53a1d9d3bf4c0756
---

{{APIRef("CSS Counter Styles")}}

Die **`name`**-Eigenschaft des [`CSSCounterStyleRule`](/de/docs/Web/API/CSSCounterStyleRule)-Interfaces holt und setzt das {{CSSxRef("&lt;custom-ident&gt;")}}, das als `name` für die zugehörige Regel definiert ist.

## Wert

Ein String

## Beispiele

Das folgende Beispiel zeigt eine {{cssxref("@counter-style")}}-Regel. In JavaScript ist `myRules[0]` diese `@counter-style`-Regel. Das Zurückgeben von `name` gibt uns das benutzerdefinierte Ident "box-corner".

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
