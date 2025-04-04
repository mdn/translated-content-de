---
title: "HTMLInputElement: dirName Eigenschaft"
short-title: dirName
slug: Web/API/HTMLInputElement/dirName
l10n:
  sourceCommit: 099f3dead0a7028fd3d97a27f97eb0bdce8d61a5
---

{{APIRef("HTML DOM")}}

Die **`dirName`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces ist die Richtung des Elements und ermöglicht die Übermittlung dieses Wertes. Sie spiegelt den Wert des [`input`](/de/docs/Web/HTML/Attributes/dirname)-Attributes des {{htmlelement("input")}}-Elements wider. Diese Eigenschaft kann abgerufen oder festgelegt werden.

Gültig nur für [`hidden`](/de/docs/Web/HTML/Element/input/hidden), [`text`](/de/docs/Web/HTML/Element/input/text), [`search`](/de/docs/Web/HTML/Element/input/search), [`url`](/de/docs/Web/HTML/Element/input/url), [`tel`](/de/docs/Web/HTML/Element/input/tel) und [`email`](/de/docs/Web/HTML/Element/input/email) `<input>` Typen, steuert das `dirname`-Attribut, wie die Richtung des Elements übermittelt wird. Wenn es enthalten ist, wird das Formularelement mit zwei Name/Wert-Paaren übermittelt: Das erste ist der [`name`](/de/docs/Web/HTML/Element/input#name) und [`value`](/de/docs/Web/HTML/Element/input#value), und das zweite ist der Wert des [`dirname`](/de/docs/Web/HTML/Element/input#dirname)-Attributes als Name, mit einem Wert von `ltr` oder `rtl`, wie vom Browser festgelegt.

## Wert

Ein String. Die Richtung des Elements.

## Beispiele

```js
inputElement.dirName = "rtl";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTextAreaElement.dirName`](/de/docs/Web/API/HTMLTextAreaElement/dirName)
- [`dir` Attribut](/de/docs/Web/HTML/Global_attributes/dir)
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
