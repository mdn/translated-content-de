---
title: HTMLLabelElement
slug: Web/API/HTMLLabelElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Das **`HTMLLabelElement`** Schnittstelle bietet Zugriff auf Eigenschaften, die spezifisch für {{HTMLElement("label")}} Elemente sind. Es erbt Methoden und Eigenschaften von der Basisschnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLLabelElement.control`](/de/docs/Web/API/HTMLLabelElement/control) {{ReadOnlyInline}}
  - : Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement), das das Steuerelement darstellt, mit dem das Label verknüpft ist.
- [`HTMLLabelElement.form`](/de/docs/Web/API/HTMLLabelElement/form) {{ReadOnlyInline}}
  - : Ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Objekt, das das Formular darstellt, mit dem das gekennzeichnete Steuerelement verknüpft ist, oder `null`, wenn kein zugehöriges Steuerelement vorhanden ist oder dieses Steuerelement nicht mit einem Formular verknüpft ist. Mit anderen Worten, dies ist nur eine Abkürzung für `HTMLLabelElement.control.form`.
- [`HTMLLabelElement.htmlFor`](/de/docs/Web/API/HTMLLabelElement/htmlFor)
  - : Ein String, der die ID des gekennzeichneten Steuerelements enthält. Dies entspricht dem [`for`](/de/docs/Web/HTML/Reference/Elements/label#for)-Attribut.

> [!NOTE]
> Um das `for`-Attribut programmgesteuert zu setzen, verwenden Sie [`htmlFor`](/de/docs/Web/API/HTMLLabelElement/htmlFor).

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("label")}}
- {{HTMLElement("form")}}
- [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)
