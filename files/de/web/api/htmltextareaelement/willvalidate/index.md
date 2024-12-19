---
title: "HTMLTextAreaElement: willValidate-Eigenschaft"
short-title: willValidate
slug: Web/API/HTMLTextAreaElement/willValidate
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`willValidate`** des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) Interface zeigt an, ob das {{htmlelement("textarea")}}-Element ein Kandidat für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) ist. Sie ist `false`, wenn Bedingungen vorliegen, die es von der Einschränkungsvalidierung ausschließen, wie z.B. wenn die [`disabled`](/de/docs/Web/API/HTMLTextAreaElement/disabled) oder [`readOnly`](/de/docs/Web/API/HTMLTextAreaElement/readOnly) Eigenschaft auf `true` gesetzt ist.

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
- [Erlernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
