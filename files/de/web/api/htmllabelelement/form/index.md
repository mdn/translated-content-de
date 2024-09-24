---
title: "HTMLLabelElement: form-Eigenschaft"
short-title: form
slug: Web/API/HTMLLabelElement/form
l10n:
  sourceCommit: 650feba1ed52078fe6c9342f7a76bafc8ab43891
---

{{APIRef("HTML DOM")}}

Die **`form`**-Eigenschaft der {{domxref("HTMLLabelElement")}}-Schnittstelle ist schreibgeschützt und gibt ein {{domxref("HTMLFormElement")}}-Objekt zurück, das das mit diesem {{HTMLElement("label")}} verbundene {{domxref("HTMLLabelElement.control", "control")}} besitzt, oder `null`, wenn dieses Label nicht mit einem Control verbunden ist, das von einem Formular besessen wird.

Diese Eigenschaft ist nur eine Abkürzung für `label.control.form`.

## Wert

Ein {{domxref("HTMLFormElement")}} oder `null`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLLabelElement")}}
- {{domxref("HTMLInputElement.form")}}
- {{domxref("HTMLFormElement")}}
- {{HTMLElement("label")}}
- [HTML-Formulare-Leitfaden](/de/docs/Learn/Forms)
