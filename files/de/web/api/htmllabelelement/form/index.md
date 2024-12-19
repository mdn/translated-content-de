---
title: "HTMLLabelElement: form-Eigenschaft"
short-title: form
slug: Web/API/HTMLLabelElement/form
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`form`**-Eigenschaft des [`HTMLLabelElement`](/de/docs/Web/API/HTMLLabelElement)-Interfaces gibt ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Objekt zurück, das das mit diesem {{HTMLElement("label")}} verbundene [`control`](/de/docs/Web/API/HTMLLabelElement/control) besitzt, oder `null`, wenn dieses Label nicht mit einem durch ein Formular gesteuerten Control verbunden ist.

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
- [HTML-Formulare Leitfaden](/de/docs/Learn_web_development/Extensions/Forms)
