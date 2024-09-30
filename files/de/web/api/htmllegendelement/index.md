---
title: HTMLLegendElement
slug: Web/API/HTMLLegendElement
l10n:
  sourceCommit: 31adb079729df4b96305b4ffa396bd4216042124
---

{{ APIRef("HTML DOM") }}

Die **`HTMLLegendElement`**-Schnittstelle ermöglicht den Zugriff auf Eigenschaften der {{HTMLElement("legend")}}-Elemente. Sie erbt Eigenschaften und Methoden von der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLLegendElement.align`](/de/docs/Web/API/HTMLLegendElement/align) {{deprecated_inline}}
  - : Ein String, der die Ausrichtung relativ zum Formularsatz darstellt.
- [`HTMLLegendElement.form`](/de/docs/Web/API/HTMLLegendElement/form) {{ReadOnlyInline}}
  - : Ein [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement), das das Formular repräsentiert, zu dem diese Legende gehört. Wenn die Legende ein `fieldset`-Element als Elternteil hat, dann gibt dieses Attribut denselben Wert zurück wie das **form**-Attribut des übergeordneten `fieldset`-Elements. Andernfalls wird `null` zurückgegeben.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("legend")}}
