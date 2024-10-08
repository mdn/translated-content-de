---
title: "HTMLInputElement: src-Eigenschaft"
short-title: src
slug: Web/API/HTMLInputElement/src
l10n:
  sourceCommit: a242996610e5a3335fcd0c5ee3c84d5543b9b8dd
---

{{APIRef("HTML DOM")}}

Die **`src`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle gibt die Quelle eines Bildes an, das als grafische Absende-Schaltfläche angezeigt werden soll. Sie spiegelt das [`src`](/de/docs/Web/HTML/Element/input#src)-Attribut des {{htmlelement("input")}}-Elements wider.

Die `src`-Eigenschaft ist nur für den Typ [`image`](/de/docs/Web/HTML/Element/input/image) gültig.

## Wert

Ein String.

## Beispiele

```js
const inputElement = document.getElementById("imageButton");
console.log(input.src);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)
- {{HTMLElement("button")}}
- {{HTMLElement("input")}}
- {{HTMLElement("img")}}
