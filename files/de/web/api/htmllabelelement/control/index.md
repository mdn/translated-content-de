---
title: "HTMLLabelElement: control-Eigenschaft"
short-title: control
slug: Web/API/HTMLLabelElement/control
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`HTMLLabelElement.control`**-Eigenschaft gibt eine Referenz auf das Steuerungselement zurück (in Form eines Objekts vom Typ [`HTMLElement`](/de/docs/Web/API/HTMLElement) oder eines seiner Derivate), mit dem das {{HTMLElement("label")}}-Element verknüpft ist, oder `null`, wenn das Label nicht mit einem Steuerungselement verbunden ist.

## Wert

Ein vom [`HTMLElement`](/de/docs/Web/API/HTMLElement) abgeleitetes Objekt, das das Steuerungselement darstellt, mit dem das {{HTMLElement("label")}}-Element verbunden ist, oder `null`, wenn das Label eigenständig ist.

> [!NOTE]
> Wenn diese Eigenschaft einen Wert hat und [`HTMLLabelElement.htmlFor`](/de/docs/Web/API/HTMLLabelElement/htmlFor) ebenfalls einen Wert hat,
> muss sich die [`HTMLLabelElement.htmlFor`](/de/docs/Web/API/HTMLLabelElement/htmlFor)-Eigenschaft auf dasselbe Steuerungselement beziehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLLabelElement`](/de/docs/Web/API/HTMLLabelElement)
- [`HTMLElement`](/de/docs/Web/API/HTMLElement)
- {{HTMLElement("label")}}
- [HTML-Formulare Leitfaden](/de/docs/Learn_web_development/Extensions/Forms)
