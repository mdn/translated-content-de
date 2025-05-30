---
title: "HTMLFormElement: noValidate-Eigenschaft"
short-title: noValidate
slug: Web/API/HTMLFormElement/noValidate
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`noValidate`**-Eigenschaft des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interfaces ist ein boolescher Wert, der angibt, ob das {{htmlelement("form")}} beim Absenden die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) umgehen wird. Sie spiegelt das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des `<form>`-Elements wider; ist das Attribut vorhanden, ist der Wert `true`.

Wenn dieses Attribut nicht gesetzt ist oder der Wert auf `false` gesetzt ist, wird das Formular validiert. Dies kann überschrieben werden, indem die [`HTMLInputElement.formNoValidate`](/de/docs/Web/API/HTMLInputElement/formNoValidate)- oder [`HTMLButtonElement.formNoValidate`](/de/docs/Web/API/HTMLButtonElement/formNoValidate)-Eigenschaft auf `true` gesetzt wird, entweder über JavaScript oder das HTML-Attribut `formnovalidate`, für das Steuerelement, das zum Absenden des Formulars verwendet wird.

Diese Eigenschaft kann abgerufen oder gesetzt werden.

## Wert

Ein boolescher Wert.

## Beispiele

```js
const element = document.getElementById("myForm");
console.log(element.noValidate);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLFormElement.reportValidity()`](/de/docs/Web/API/HTMLFormElement/reportValidity)
- [`HTMLFormElement.checkValidity()`](/de/docs/Web/API/HTMLFormElement/checkValidity)
- [`HTMLFormElement.action`](/de/docs/Web/API/HTMLFormElement/action)
- [`HTMLFormElement.enctype`](/de/docs/Web/API/HTMLFormElement/enctype)
- [`HTMLFormElement.method`](/de/docs/Web/API/HTMLFormElement/method)
- [`HTMLFormElement.target`](/de/docs/Web/API/HTMLFormElement/target)
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
