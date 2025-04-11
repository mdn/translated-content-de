---
title: "HTMLInputElement: willValidate Eigenschaft"
short-title: willValidate
slug: Web/API/HTMLInputElement/willValidate
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`willValidate`** schreibgeschützte Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces zeigt an, ob das {{htmlelement("input")}}-Element ein Kandidat für die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) ist. Sie ist `false`, wenn irgendwelche Bedingungen es von der Einschränkungsvalidierung ausschließen, einschließlich:

- Sein [`type`](/de/docs/Web/API/HTMLInputElement/type) ist eines der folgenden: `hidden`, `reset` oder `button`;
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
- [Lernen: Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Leitfaden: Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation)
