---
title: "CSSRuleList: Methode item()"
short-title: item()
slug: Web/API/CSSRuleList/item
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{ APIRef("CSSOM") }}

Die **`item()`** Methode der {{domxref("CSSRuleList")}} Schnittstelle gibt das {{domxref("CSSRule")}} Objekt am angegebenen `index` oder `null` zurück, wenn der angegebene `index` nicht existiert.

## Syntax

```js-nolint
item(index)
```

### Parameter

- `index`
  - : Ein ganzzahliger Wert.

### Rückgabewert

Ein {{domxref("CSSRule")}}.

## Beispiele

Im folgenden Beispiel nehmen wir an, dass die `myRules`-Liste nur drei Elemente enthält.

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules.item(0)); // Gibt das erste CSSRule-Element aus dieser Liste aus

// Der Zugriff auf nicht existierende Elemente mit dieser Methode gibt null statt undefined zurück
console.log(myRules.item(5)); // null
console.log(myRules[5]); // undefined
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
