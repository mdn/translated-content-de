---
title: "StyleSheetList: item()-Methode"
short-title: item()
slug: Web/API/StyleSheetList/item
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("CSSOM")}}

Die **`item()`**-Methode der {{domxref("StyleSheetList")}}-Schnittstelle gibt ein einzelnes {{domxref("CSSStyleSheet")}}-Objekt zurück.

## Syntax

```js-nolint
item(index)
```

### Parameter

- `index`
  - : Ein Integer, der den Index des zurückzugebenden Elements in der Sammlung darstellt.

### Rückgabewert

Ein {{domxref("CSSStyleSheet")}}-Objekt oder `null`, falls für diesen Index keines existiert.

## Beispiele

Im folgenden Beispiel gibt eine for-Schleife jedes einzelne {{domxref("CSSStyleSheet")}}-Objekt in der Konsole aus, indem `item` mit dem Wert von `i` aufgerufen wird.

```js
let list = document.styleSheets;

for (let i = 0; i < list.length; i++) {
  console.log(list.item(i));
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
