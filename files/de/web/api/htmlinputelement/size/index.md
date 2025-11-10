---
title: "HTMLInputElement: size-Eigenschaft"
short-title: size
slug: Web/API/HTMLInputElement/size
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`size`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces definiert die Anzahl der sichtbaren Zeichen, die angezeigt werden. Sie spiegelt das [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut des {{htmlelement("input")}}-Elements wider.

Die `size`-Eigenschaft ist nur für die Eingabetypen [`text`](/de/docs/Web/HTML/Reference/Elements/input/text), [`search`](/de/docs/Web/HTML/Reference/Elements/input/search), [`tel`](/de/docs/Web/HTML/Reference/Elements/input/tel), [`email`](/de/docs/Web/HTML/Reference/Elements/input/email), [`url`](/de/docs/Web/HTML/Reference/Elements/input/url) und [`password`](/de/docs/Web/HTML/Reference/Elements/input/password) relevant. Der Wert ist eine nicht-negative ganze Zahl, die größer als null ist. Wenn der Wert weggelassen oder ungültig ist, beträgt er `20`.

## Wert

Eine ganze Zahl.

## Beispiele

```js
const inputElement = document.getElementById("password");
console.log(inputElement.size);
inputElement.size = 12;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement.minLength`](/de/docs/Web/API/HTMLInputElement/minLength)
- [`HTMLInputElement.maxLength`](/de/docs/Web/API/HTMLInputElement/maxLength)
- [`HTMLSelectElement.size`](/de/docs/Web/API/HTMLSelectElement/size)
