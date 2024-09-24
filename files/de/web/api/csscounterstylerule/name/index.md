---
title: "CSSCounterStyleRule: name-Eigenschaft"
short-title: name
slug: Web/API/CSSCounterStyleRule/name
l10n:
  sourceCommit: 59b1cd1f520971b89ccf521d53a1d9d3bf4c0756
---

{{APIRef("CSS Counter Styles")}}

Die **`name`**-Eigenschaft des {{domxref("CSSCounterStyleRule")}}-Interfaces erhält und setzt das {{CSSxRef("&lt;custom-ident&gt;")}}, das als `name` für die zugehörige Regel definiert ist.

## Wert

Ein String

## Beispiele

Das folgende Beispiel zeigt eine {{cssxref("@counter-style")}}-Regel. In JavaScript ist `myRules[0]` diese `@counter-style`-Regel. Die Rückgabe von `name` gibt uns das benutzerdefinierte Identifikator "box-corner".

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

## Kompatibilität der Browser

{{Compat}}
