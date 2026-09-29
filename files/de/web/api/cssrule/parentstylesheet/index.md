---
title: "CSSRule: parentStyleSheet-Eigenschaft"
short-title: parentStyleSheet
slug: Web/API/CSSRule/parentStyleSheet
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte Eigenschaft **`parentStyleSheet`** der Schnittstelle [`CSSRule`](/de/docs/Web/API/CSSRule) gibt das [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Objekt zurück, in dem die aktuelle Regel definiert ist.

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
