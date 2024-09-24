---
title: "HTMLSelectElement: willValidate-Eigenschaft"
short-title: willValidate
slug: Web/API/HTMLSelectElement/willValidate
l10n:
  sourceCommit: 4524e28f0aa5fe3b4da3315c40bbdc8d99653da3
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`willValidate`** des {{domxref("HTMLSelectElement")}} Interfaces gibt an, ob das {{htmlelement("select")}}-Element ein Kandidat für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) ist. Sie ist `false`, wenn Bedingungen vorliegen, die es von der Einschränkungsvalidierung ausschließen, wie beispielsweise, wenn die {{domxref("HTMLSelectElement.disabled", "disabled")}}-Eigenschaft `true` ist.

## Wert

Ein boolescher Wert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLSelectElement.checkValidity()")}}
- {{HTMLElement("select")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
