---
title: HTMLLabelElement
slug: Web/API/HTMLLabelElement
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("HTML DOM") }}

Das **`HTMLLabelElement`**-Interface gewährt Zugriff auf spezifische Eigenschaften von {{HTMLElement("label")}}-Elementen. Es erbt Methoden und Eigenschaften vom Basis-{{domxref("HTMLElement")}}-Interface.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Eltern-{{domxref("HTMLElement")}}._

- {{domxref("HTMLLabelElement.control")}} {{ReadOnlyInline}}
  - : Ein {{domxref("HTMLElement")}}, das das Steuerelement repräsentiert, mit dem das Label verknüpft ist.
- {{domxref("HTMLLabelElement.form")}} {{ReadOnlyInline}}
  - : Ein {{domxref("HTMLFormElement")}}-Objekt, das das Formular repräsentiert, mit dem das markierte Steuerelement verknüpft ist, oder `null`, wenn es kein verknüpftes Steuerelement gibt oder wenn dieses Steuerelement keinem Formular zugeordnet ist. Mit anderen Worten, dies ist nur eine Abkürzung für `HTMLLabelElement.control.form`.
- {{domxref("HTMLLabelElement.htmlFor")}}
  - : Ein string, der die ID des markierten Steuerelements enthält. Dies spiegelt das [`for`](/de/docs/Web/HTML/Element/label#for)-Attribut wider.

> [!NOTE]
> Um das `for`-Attribut programmgesteuert festzulegen, verwenden Sie [`htmlFor`](/de/docs/Web/API/HTMLLabelElement/htmlFor).

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Eltern-{{domxref("HTMLElement")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("label")}}
- {{HTMLElement("form")}}
- {{domxref("HTMLFormElement")}}
