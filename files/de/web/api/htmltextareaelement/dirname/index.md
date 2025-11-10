---
title: "HTMLTextAreaElement: dirName-Eigenschaft"
short-title: dirName
slug: Web/API/HTMLTextAreaElement/dirName
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`dirName`**-Eigenschaft des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces gibt die Richtung des Elements an. Sie spiegelt den Wert des [`dirName`](/de/docs/Web/HTML/Reference/Attributes/dirname)-Attributes des {{htmlelement("textarea")}}-Elements wider. Diese Eigenschaft kann abgerufen oder gesetzt werden.

Das `dirname`-Attribut steuert, wie die Richtung des Elements übermittelt wird. Wenn es enthalten ist, wird die Formulareingabe mit zwei Namens-/Wertpaaren gesendet: das erste ist der [`name`](/de/docs/Web/API/HTMLTextAreaElement/name) und [`value`](/de/docs/Web/API/HTMLTextAreaElement/value) des `<textarea>`, und das zweite ist der Wert des [`dirname`](/de/docs/Web/HTML/Reference/Elements/textarea#dirname)-Attributes als Name, mit einem Wert von `ltr` oder `rtl`, wie vom Browser festgelegt.

## Wert

Ein String. Die Richtung des Elements.

## Beispiele

```js
textareaElement.dirName = "rtl";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement.dirName`](/de/docs/Web/API/HTMLInputElement/dirName)
- [`dir`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/dir)
- [Übermittlung von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
