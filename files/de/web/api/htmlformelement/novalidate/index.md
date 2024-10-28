---
title: "HTMLFormElement: noValidate-Eigenschaft"
short-title: noValidate
slug: Web/API/HTMLFormElement/noValidate
l10n:
  sourceCommit: d7ac54d009f0c200d612dee1d1f2a1c633791706
---

{{APIRef("HTML DOM")}}

Die **`noValidate`**-Eigenschaft des [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Interfaces ist ein boolescher Wert, der angibt, ob das {{htmlelement("form")}} bei der Übermittlung die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) umgeht. Sie spiegelt das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut des `<form>`-Elements wider; ist das Attribut vorhanden, ist der Wert `true`.

Wenn dieses Attribut nicht gesetzt ist oder der Wert auf `false` gesetzt ist, wird das Formular validiert. Dies kann überschrieben werden, indem die [`HTMLInputElement.formNoValidate`](/de/docs/Web/API/HTMLInputElement/formNoValidate)- oder [`HTMLButtonElement.formNoValidate`](/de/docs/Web/API/HTMLButtonElement/formNoValidate)-Eigenschaft auf `true` gesetzt wird, entweder über JavaScript oder das HTML-`formnovalidate`-Attribut für das Steuerelement, das zur Übermittlung des Formulars verwendet wird.

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
- [Lernen: Formularvalidierung auf Client-Seite](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
