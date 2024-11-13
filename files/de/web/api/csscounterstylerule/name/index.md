---
title: "CSSCounterStyleRule: name-Eigenschaft"
short-title: name
slug: Web/API/CSSCounterStyleRule/name
l10n:
  sourceCommit: 9840d330e75b5fa4eec7034859a7d96e5d6ae07b
---

{{APIRef("CSSOM")}}

Die **`name`**-Eigenschaft der [`CSSCounterStyleRule`](/de/docs/Web/API/CSSCounterStyleRule)-Schnittstelle erhält und setzt das {{CSSxRef("&lt;custom-ident&gt;")}}, das als `name` für die zugehörige Regel definiert ist.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel zeigt eine {{cssxref("@counter-style")}}-Regel. In JavaScript ist `myRules[0]` diese `@counter-style`-Regel, und die Rückgabe von `name` liefert uns den benutzerdefinierten Identifikator "box-corner".

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
