---
title: "StyleSheetList: item()-Methode"
short-title: item()
slug: Web/API/StyleSheetList/item
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("CSSOM")}}

Die **`item()`**-Methode des [`StyleSheetList`](/de/docs/Web/API/StyleSheetList)-Interfaces gibt ein einzelnes [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt zurück.

## Syntax

```js-nolint
item(index)
```

### Parameter

- `index`
  - : Ein ganzzahliger Wert, der den Index des Elements in der Sammlung angibt, das zurückgegeben werden soll.

### Rückgabewert

Ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt oder `null`, wenn für diesen Index keines existiert.

## Beispiele

Im folgenden Beispiel gibt eine for-Schleife jedes einzelne [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt in der Konsole aus, indem `item` mit dem Wert von `i` aufgerufen wird.

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
