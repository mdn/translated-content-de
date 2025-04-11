---
title: "HTMLInputElement: src-Eigenschaft"
short-title: src
slug: Web/API/HTMLInputElement/src
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`src`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle legt die Quelle eines Bildes fest, das als grafische Schaltfläche für das Absenden angezeigt werden soll. Sie spiegelt das [`src`](/de/docs/Web/HTML/Reference/Elements/input#src)-Attribut des {{htmlelement("input")}}-Elements wider.

Die `src`-Eigenschaft ist nur für den [`image`](/de/docs/Web/HTML/Reference/Elements/input/image)-Typ gültig.

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
