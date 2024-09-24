---
title: "HTMLInputElement: Eigenschaft willValidate"
short-title: willValidate
slug: Web/API/HTMLInputElement/willValidate
l10n:
  sourceCommit: 4524e28f0aa5fe3b4da3315c40bbdc8d99653da3
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`willValidate`** der {{domxref("HTMLInputElement")}}-Schnittstelle zeigt an, ob das {{htmlelement("input")}}-Element ein Kandidat für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) ist. Sie ist `false`, wenn bestimmte Bedingungen es von der Einschränkungsvalidierung ausschließen, einschließlich:

- Sein {{domxref("HTMLInputElement.type", "type")}} ist `hidden`, `reset` oder `button`;
- Es hat einen {{HTMLElement("datalist")}}-Vorfahren;
- Seine {{domxref("HTMLInputElement.disabled", "disabled")}}-Eigenschaft ist `true`.

## Wert

Ein boolescher Wert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLInputElement.checkValidity()")}}
- {{HTMLElement("input")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
