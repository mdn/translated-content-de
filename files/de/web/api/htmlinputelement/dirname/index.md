---
title: "HTMLInputElement: dirName-Eigenschaft"
short-title: dirName
slug: Web/API/HTMLInputElement/dirName
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`dirName`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces gibt die Richtung des Elements an und ermöglicht die Übermittlung dieses Werts. Sie spiegelt den Wert des [`dirName`](/de/docs/Web/HTML/Reference/Attributes/dirname)-Attributs des {{htmlelement("input")}}-Elements wider. Diese Eigenschaft kann abgerufen oder gesetzt werden.

Gültig nur für die `<input>`-Typen [`hidden`](/de/docs/Web/HTML/Reference/Elements/input/hidden), [`text`](/de/docs/Web/HTML/Reference/Elements/input/text), [`search`](/de/docs/Web/HTML/Reference/Elements/input/search), [`url`](/de/docs/Web/HTML/Reference/Elements/input/url), [`tel`](/de/docs/Web/HTML/Reference/Elements/input/tel) und [`email`](/de/docs/Web/HTML/Reference/Elements/input/email), steuert das `dirname`-Attribut, wie die Richtung des Elements übermittelt wird. Wenn es enthalten ist, übermittelt das Formularelement zwei Name/Wert-Paare: das erste ist der [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) und [`value`](/de/docs/Web/HTML/Reference/Elements/input#value), und das zweite ist der Wert des [`dirname`](/de/docs/Web/HTML/Reference/Elements/input#dirname)-Attributs als Name mit einem Wert von `ltr` oder `rtl`, festgelegt durch den Browser.

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
- [`dir`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/dir)
- [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
