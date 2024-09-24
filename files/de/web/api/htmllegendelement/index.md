---
title: HTMLLegendElement
slug: Web/API/HTMLLegendElement
l10n:
  sourceCommit: 31adb079729df4b96305b4ffa396bd4216042124
---

{{ APIRef("HTML DOM") }}

Das **`HTMLLegendElement`** ist eine Schnittstelle, die den Zugriff auf Eigenschaften der {{HTMLElement("legend")}}-Elemente ermöglicht. Sie erbt Eigenschaften und Methoden von der {{domxref("HTMLElement")}}-Schnittstelle.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, {{domxref("HTMLElement")}}._

- {{domxref("HTMLLegendElement.align")}} {{deprecated_inline}}
  - : Ein String, der die Ausrichtung relativ zur Formulargruppe darstellt.
- {{domxref("HTMLLegendElement.form")}} {{ReadOnlyInline}}
  - : Ein {{domxref("HTMLFormElement")}}, das das Formular darstellt, zu dem diese Legende gehört. Wenn die Legende ein Fieldset-Element als übergeordnetes Element hat, gibt dieses Attribut denselben Wert zurück wie das **form**-Attribut des übergeordneten Fieldset-Elements. Andernfalls gibt es `null` zurück.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von ihrem Elternteil, {{domxref("HTMLElement")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("legend")}}
