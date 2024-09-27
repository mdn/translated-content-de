---
title: "HTMLInputElement: size-Eigenschaft"
short-title: size
slug: Web/API/HTMLInputElement/size
l10n:
  sourceCommit: a242996610e5a3335fcd0c5ee3c84d5543b9b8dd
---

{{APIRef("HTML DOM")}}

Die **`size`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces definiert die Anzahl der sichtbaren Zeichen, die angezeigt werden. Sie spiegelt das `size`-Attribut des {{htmlelement("input")}}-Elements wider.

Die `size`-Eigenschaft ist nur für die Eingabetypen [`text`](/de/docs/Web/HTML/Element/input/text), [`search`](/de/docs/Web/HTML/Element/input/search), [`tel`](/de/docs/Web/HTML/Element/input/tel), [`email`](/de/docs/Web/HTML/Element/input/email), [`url`](/de/docs/Web/HTML/Element/input/url) und [`password`](/de/docs/Web/HTML/Element/input/password) relevant. Der Wert ist eine nicht-negative ganze Zahl, die größer als Null ist. Wenn weggelassen oder ungültig, beträgt der Wert `20`.

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
