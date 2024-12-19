---
title: "HTMLButtonElement: willValidate-Eigenschaft"
short-title: willValidate
slug: Web/API/HTMLButtonElement/willValidate
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die **`willValidate`**-Eigenschaft (nur lesbar) des [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Interfaces zeigt an, ob das {{htmlelement("button")}}-Element ein Kandidat für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) ist. Sie ist `false`, wenn Bedingungen bestehen, die es von der Einschränkungsvalidierung ausschließen, einschließlich:

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
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation)
