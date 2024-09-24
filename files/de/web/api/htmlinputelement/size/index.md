---
title: "HTMLInputElement: size-Eigenschaft"
short-title: size
slug: Web/API/HTMLInputElement/size
l10n:
  sourceCommit: a242996610e5a3335fcd0c5ee3c84d5543b9b8dd
---

{{APIRef("HTML DOM")}}

Die **`size`**-Eigenschaft des {{DOMxRef("HTMLInputElement")}}-Interfaces definiert die Anzahl der sichtbaren Zeichen, die angezeigt werden. Sie spiegelt das [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut des {{htmlelement("input")}}-Elements wider.

Die `size`-Eigenschaft ist nur relevant für den Eingabetypen [`text`](/de/docs/Web/HTML/Element/input/text), [`search`](/de/docs/Web/HTML/Element/input/search), [`tel`](/de/docs/Web/HTML/Element/input/tel), [`email`](/de/docs/Web/HTML/Element/input/email), [`url`](/de/docs/Web/HTML/Element/input/url) und [`password`](/de/docs/Web/HTML/Element/input/password). Der Wert ist eine nicht negative ganze Zahl größer als Null. Wenn ausgelassen oder ungültig, beträgt der Wert `20`.

## Wert

Ein Ganzzahlwert.

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

- {{DOMXref("HTMLInputElement.minLength")}}
- {{DOMXref("HTMLInputElement.maxLength")}}
- {{DOMXref("HTMLSelectElement.size")}}
