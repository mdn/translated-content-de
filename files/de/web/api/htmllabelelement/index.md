---
title: HTMLLabelElement
slug: Web/API/HTMLLabelElement
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("HTML DOM") }}

Das **`HTMLLabelElement`**-Interface bietet Zugriff auf Eigenschaften, die spezifisch für {{HTMLElement("label")}}-Elemente sind. Es erbt Methoden und Eigenschaften von der Basisklasse [`HTMLElement`](/de/docs/Web/API/HTMLElement).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Übernimmt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLLabelElement.control`](/de/docs/Web/API/HTMLLabelElement/control) {{ReadOnlyInline}}
  - : Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement), das die Steuerung darstellt, mit der das Label verbunden ist.
- [`HTMLLabelElement.form`](/de/docs/Web/API/HTMLLabelElement/form) {{ReadOnlyInline}}
  - : Ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)-Objekt, das das Formular darstellt, mit dem die gekennzeichnete Steuerung verbunden ist, oder `null`, wenn keine Steuerung zugeordnet ist oder wenn diese Steuerung keinem Formular zugeordnet ist. In anderen Worten, dies ist nur eine Abkürzung für `HTMLLabelElement.control.form`.
- [`HTMLLabelElement.htmlFor`](/de/docs/Web/API/HTMLLabelElement/htmlFor)
  - : Ein String, der die ID der gekennzeichneten Steuerung enthält. Dies spiegelt das [`for`](/de/docs/Web/HTML/Element/label#for)-Attribut wider.

> [!NOTE]
> Um das `for`-Attribut programmatisch zu setzen, verwenden Sie [`htmlFor`](/de/docs/Web/API/HTMLLabelElement/htmlFor).

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("label")}}
- {{HTMLElement("form")}}
- [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)
