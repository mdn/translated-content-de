---
title: "HTMLTextAreaElement: willValidate-Eigenschaft"
short-title: willValidate
slug: Web/API/HTMLTextAreaElement/willValidate
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`willValidate`**-Eigenschaft des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces ist eine schreibgeschützte Eigenschaft, die angibt, ob das {{htmlelement("textarea")}}-Element ein Kandidat für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) ist. Sie ist `false`, wenn Bedingungen vorliegen, die es von der Einschränkungsvalidierung ausschließen, wie z.B. wenn seine [`disabled`](/de/docs/Web/API/HTMLTextAreaElement/disabled)- oder [`readOnly`](/de/docs/Web/API/HTMLTextAreaElement/readOnly)-Eigenschaft auf `true` gesetzt ist.

## Wert

Ein boolescher Wert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTextAreaElement.checkValidity()`](/de/docs/Web/API/HTMLTextAreaElement/checkValidity)
- {{HTMLElement("textarea")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
