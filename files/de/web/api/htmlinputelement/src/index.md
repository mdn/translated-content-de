---
title: "HTMLInputElement: src-Eigenschaft"
short-title: src
slug: Web/API/HTMLInputElement/src
l10n:
  sourceCommit: 61986210fa785119daed1c121491fef615ec2bc8
---

{{APIRef("HTML DOM")}}

Die **`src`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle gibt die Quelle eines Bildes an, das als grafische Senden-Schaltfläche angezeigt werden soll. Sie spiegelt das [`src`](/de/docs/Web/HTML/Reference/Elements/input#src)-Attribut des {{htmlelement("input")}}-Elements wider.

Die `src`-Eigenschaft ist nur für den Typ [`image`](/de/docs/Web/HTML/Reference/Elements/input/image) gültig.

## Wert

Ein String.

## Beispiele

```js
const inputElement = document.getElementById("imageButton");
console.log(inputElement.src);
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
