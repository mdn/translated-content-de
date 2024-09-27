---
title: "HTMLTextAreaElement: willValidate Eigenschaft"
short-title: willValidate
slug: Web/API/HTMLTextAreaElement/willValidate
l10n:
  sourceCommit: 4524e28f0aa5fe3b4da3315c40bbdc8d99653da3
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`willValidate`** des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) Schnittstelle zeigt an, ob das {{htmlelement("textarea")}} Element ein Kandidat für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) ist. Sie ist `false`, wenn Bedingungen vorliegen, die es von der Einschränkungsvalidierung ausschließen, beispielsweise wenn seine [`disabled`](/de/docs/Web/API/HTMLTextAreaElement/disabled) oder [`readOnly`](/de/docs/Web/API/HTMLTextAreaElement/readOnly) Eigenschaft auf `true` gesetzt ist.

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
- [Erlernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
