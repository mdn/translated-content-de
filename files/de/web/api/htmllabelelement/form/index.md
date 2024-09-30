---
title: "HTMLLabelElement: form-Eigenschaft"
short-title: form
slug: Web/API/HTMLLabelElement/form
l10n:
  sourceCommit: 650feba1ed52078fe6c9342f7a76bafc8ab43891
---

{{APIRef("HTML DOM")}}

Die **`form`** schreibgeschützte Eigenschaft des [`HTMLLabelElement`](/de/docs/Web/API/HTMLLabelElement)-Interfaces gibt ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Objekt zurück, das das mit diesem {{HTMLElement("label")}} verbundene [`control`](/de/docs/Web/API/HTMLLabelElement/control) besitzt, oder `null`, wenn dieses Label nicht mit einem von einem Formular besessenen Steuerungselement verbunden ist.

Diese Eigenschaft ist lediglich eine Abkürzung für `label.control.form`.

## Wert

Ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement) oder `null`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLLabelElement`](/de/docs/Web/API/HTMLLabelElement)
- [`HTMLInputElement.form`](/de/docs/Web/API/HTMLInputElement/form)
- [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)
- {{HTMLElement("label")}}
- [HTML forms Leitfaden](/de/docs/Learn/Forms)
