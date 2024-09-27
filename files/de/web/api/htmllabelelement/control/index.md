---
title: "HTMLLabelElement: control-Eigenschaft"
short-title: control
slug: Web/API/HTMLLabelElement/control
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`HTMLLabelElement.control`**-Eigenschaft gibt eine
Referenz zu dem Steuerelement zurück (in Form eines Objekts vom Typ [`HTMLElement`](/de/docs/Web/API/HTMLElement) oder
eines seiner Derivate), mit dem das {{HTMLElement("label")}}-Element verknüpft ist,
oder `null`, wenn das Label keinem Steuerelement zugeordnet ist.

## Wert

Ein vom [`HTMLElement`](/de/docs/Web/API/HTMLElement) abgeleitetes Objekt, das das Steuerelement darstellt, mit dem das
{{HTMLElement("label")}} verknüpft ist, oder `null`, wenn das Label allein steht.

> [!NOTE]
> Wenn diese Eigenschaft einen Wert hat und [`HTMLLabelElement.htmlFor`](/de/docs/Web/API/HTMLLabelElement/htmlFor) ebenfalls einen Wert hat,
> muss die [`HTMLLabelElement.htmlFor`](/de/docs/Web/API/HTMLLabelElement/htmlFor)-Eigenschaft auf dasselbe Steuerelement verweisen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLLabelElement`](/de/docs/Web/API/HTMLLabelElement)
- [`HTMLElement`](/de/docs/Web/API/HTMLElement)
- {{HTMLElement("label")}}
- [Leitfaden zu HTML-Formularen](/de/docs/Learn/Forms)
