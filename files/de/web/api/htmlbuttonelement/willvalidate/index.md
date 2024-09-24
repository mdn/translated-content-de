---
title: "HTMLButtonElement: willValidate-Eigenschaft"
short-title: willValidate
slug: Web/API/HTMLButtonElement/willValidate
l10n:
  sourceCommit: 4524e28f0aa5fe3b4da3315c40bbdc8d99653da3
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`willValidate`**-Eigenschaft der {{domxref("HTMLButtonElement")}}-Schnittstelle gibt an, ob das {{htmlelement("button")}}-Element ein Kandidat für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) ist. Sie ist `false`, wenn Bedingungen es von der Einschränkungsvalidierung ausschließen, einschließlich:

- Sein {{domxref("HTMLButtonElement.type", "type")}} ist `reset` oder `button`;
- Es hat einen {{HTMLElement("datalist")}} Vorfahren;
- Die {{domxref("HTMLButtonElement.disabled", "disabled")}}-Eigenschaft ist `true`.

## Wert

Ein boolescher Wert.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{domxref("HTMLButtonElement.checkValidity()")}}
- {{HTMLElement("button")}}
- {{HTMLElement("form")}}
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
