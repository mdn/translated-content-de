---
title: "HTMLButtonElement: willValidate-Eigenschaft"
short-title: willValidate
slug: Web/API/HTMLButtonElement/willValidate
l10n:
  sourceCommit: 4524e28f0aa5fe3b4da3315c40bbdc8d99653da3
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`willValidate`** des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces gibt an, ob das {{htmlelement("button")}}-Element ein Kandidat für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) ist. Sie ist `false`, wenn irgendwelche Bedingungen es von der Einschränkungsvalidierung ausschließen, einschließlich:

- Sein [`type`](/de/docs/Web/API/HTMLButtonElement/type) ist `reset` oder `button`;
- Es hat einen {{HTMLElement("datalist")}}-Vorfahren;
- Die [`disabled`](/de/docs/Web/API/HTMLButtonElement/disabled)-Eigenschaft ist `true`.

## Wert

Ein boolescher Wert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLButtonElement.checkValidity()`](/de/docs/Web/API/HTMLButtonElement/checkValidity)
- {{HTMLElement("button")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
