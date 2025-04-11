---
title: "HTMLButtonElement: willValidate-Eigenschaft"
short-title: willValidate
slug: Web/API/HTMLButtonElement/willValidate
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`willValidate`**-Eigenschaft des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces zeigt an, ob das {{htmlelement("button")}}-Element ein Kandidat für die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) ist. Sie ist `false`, wenn eine der folgenden Bedingungen es von der Constraint-Validierung ausschließt:

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
- [Erlernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation)
