---
title: "CSSRule: Eigenschaft `parentStyleSheet`"
short-title: parentStyleSheet
slug: Web/API/CSSRule/parentStyleSheet
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{ APIRef("CSSOM") }}

Die **`parentStyleSheet`**-Eigenschaft des
[`CSSRule`](/de/docs/Web/API/CSSRule)-Interfaces gibt das [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Objekt zurück, in dem die aktuelle Regel definiert ist.

## Wert

Ein [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Objekt.

## Beispiele

```js
const docRules = document.styleSheets[0].cssRules;
console.log(docRules[0].parentStyleSheet === document.styleSheets[0]); // returns true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
