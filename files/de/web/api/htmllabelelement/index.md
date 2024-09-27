---
title: HTMLLabelElement
slug: Web/API/HTMLLabelElement
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("HTML DOM") }}

Die **`HTMLLabelElement`**-Schnittstelle ermöglicht den Zugriff auf Eigenschaften, die spezifisch für {{HTMLElement("label")}}-Elemente sind. Sie erbt Methoden und Eigenschaften von der Basis-[`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLLabelElement.control`](/de/docs/Web/API/HTMLLabelElement/control) {{ReadOnlyInline}}
  - : Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement), das das Steuerelement darstellt, mit dem das Label verbunden ist.
- [`HTMLLabelElement.form`](/de/docs/Web/API/HTMLLabelElement/form) {{ReadOnlyInline}}
  - : Ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Objekt, das das Formular darstellt, mit dem das markierte Steuerelement verbunden ist, oder `null`, wenn kein verbundenes Steuerelement vorhanden ist oder wenn dieses Steuerelement nicht mit einem Formular verbunden ist. Mit anderen Worten, dies ist nur eine Abkürzung für `HTMLLabelElement.control.form`.
- [`HTMLLabelElement.htmlFor`](/de/docs/Web/API/HTMLLabelElement/htmlFor)
  - : Ein String, der die ID des markierten Steuerelements enthält. Dies spiegelt das [`for`](/de/docs/Web/HTML/Element/label#for)-Attribut wider.

> [!NOTE]
> Um das `for`-Attribut programmgesteuert festzulegen, verwenden Sie [`htmlFor`](/de/docs/Web/API/HTMLLabelElement/htmlFor).

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("label")}}
- {{HTMLElement("form")}}
- [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)
