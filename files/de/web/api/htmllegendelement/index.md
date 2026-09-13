---
title: HTMLLegendElement
slug: Web/API/HTMLLegendElement
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

{{ APIRef("HTML DOM") }}

Das **`HTMLLegendElement`** ist eine Schnittstelle, die Ihnen den Zugriff auf Eigenschaften der {{HTMLElement("legend")}}-Elemente ermöglicht. Es erbt Eigenschaften und Methoden von der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem übergeordneten [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLLegendElement.align`](/de/docs/Web/API/HTMLLegendElement/align) {{deprecated_inline}}
  - : Ein String, der die Ausrichtung relativ zur Formulargruppe darstellt.
- [`HTMLLegendElement.form`](/de/docs/Web/API/HTMLLegendElement/form) {{ReadOnlyInline}}
  - : Ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement), das das Formular darstellt, zu dem diese Legende gehört. Wenn die Legende ein Fieldset-Element als übergeordnetes Element hat, gibt dieses Attribut denselben Wert zurück wie das **form**-Attribut des übergeordneten Fieldset-Elements. Andernfalls gibt es `null` zurück.

## Instanzmethoden

_Keine spezifische Methode; erbt Methoden von seinem übergeordneten [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("legend")}}
