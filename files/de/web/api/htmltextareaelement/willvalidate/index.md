---
title: "HTMLTextAreaElement: willValidate-Eigenschaft"
short-title: willValidate
slug: Web/API/HTMLTextAreaElement/willValidate
l10n:
  sourceCommit: 4524e28f0aa5fe3b4da3315c40bbdc8d99653da3
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`willValidate`** des {{domxref("HTMLTextAreaElement")}}-Interfaces gibt an, ob das {{htmlelement("textarea")}}-Element ein Kandidat für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) ist. Sie ist `false`, wenn Bedingungen vorliegen, die es von der Einschränkungsvalidierung ausschließen, wie etwa wenn die {{domxref("HTMLTextAreaElement.disabled", "disabled")}}- oder {{domxref("HTMLTextAreaElement.readOnly", "readOnly")}}-Eigenschaft auf `true` gesetzt ist.

## Wert

Ein boolescher Wert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLTextAreaElement.checkValidity()")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("form")}}
- [Lernen: Formularvalidierung auf der Client-Seite](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
