---
title: "HTMLInputElement: willValidate-Eigenschaft"
short-title: willValidate
slug: Web/API/HTMLInputElement/willValidate
l10n:
  sourceCommit: 4524e28f0aa5fe3b4da3315c40bbdc8d99653da3
---

{{APIRef("HTML DOM")}}

Die **`willValidate`** schreibgeschützte Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces gibt an, ob das {{htmlelement("input")}}-Element ein Kandidat für die [Einschränkungsüberprüfung](/de/docs/Web/HTML/Constraint_validation) ist. Sie ist `false`, wenn irgendwelche Bedingungen es von der Einschränkungsüberprüfung ausschließen, einschließlich:

- Sein [`type`](/de/docs/Web/API/HTMLInputElement/type) ist einer von `hidden`, `reset` oder `button`;
- Es hat einen {{HTMLElement("datalist")}}-Vorfahren;
- Seine [`disabled`](/de/docs/Web/API/HTMLInputElement/disabled)-Eigenschaft ist `true`.

## Wert

Ein boolescher Wert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement.checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
- {{HTMLElement("input")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
