---
title: "HTMLTextAreaElement: dirName-Eigenschaft"
short-title: dirName
slug: Web/API/HTMLTextAreaElement/dirName
l10n:
  sourceCommit: 20cff31570e35c6da44ddd84158fcebd9f4f42d9
---

{{APIRef("HTML DOM")}}

Die **`dirName`**-Eigenschaft des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces beschreibt die Direktionalität des Elements. Sie spiegelt den Wert des [`dirName`](/de/docs/Web/HTML/Attributes/dirname)-Attributs des {{htmlelement("textarea")}}-Elements wider. Diese Eigenschaft kann abgerufen oder gesetzt werden.

Das `dirname`-Attribut steuert, wie die Direktionalität des Elements übermittelt wird. Wenn es eingeschlossen ist, wird das Formularelement mit zwei Namens-/Wertpaaren übermittelt: Das erste Paar besteht aus dem [`name`](/de/docs/Web/API/HTMLTextAreaElement/name) und dem [`value`](/de/docs/Web/API/HTMLTextAreaElement/value) des `<textarea>`s, das zweite verwendet den Wert des [`dirname`](/de/docs/Web/HTML/Element/textarea#dirname)-Attributs als Namen mit einem von der Einstellung des Browsers bestimmten Wert `ltr` oder `rtl`.

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
- [`dir`-Attribut](/de/docs/Web/HTML/Global_attributes/dir)
- [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
