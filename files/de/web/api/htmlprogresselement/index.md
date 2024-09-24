---
title: HTMLProgressElement
slug: Web/API/HTMLProgressElement
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{ APIRef("HTML DOM") }}

Die **`HTMLProgressElement`**-Schnittstelle bietet spezielle Eigenschaften und Methoden (zusätzlich zu der regulären {{domxref("HTMLElement")}}-Schnittstelle, die sie durch Vererbung ebenfalls zur Verfügung hat) zur Manipulation des Layouts und der Darstellung von {{HTMLElement("progress")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, {{domxref("HTMLElement")}}._

- {{domxref("HTMLProgressElement.max")}}
  - : Ein `double`-Wert, der das Inhaltsattribut mit demselben Namen widerspiegelt, begrenzt auf Zahlen größer als Null. Der Standardwert ist `1.0`.
- {{domxref("HTMLProgressElement.position")}} {{ReadOnlyInline}}
  - : Gibt einen `double`-Wert zurück, der das Ergebnis der Division des aktuellen Wertes (`value`) durch den Maximalwert (`max`) darstellt; wenn die Fortschrittsleiste eine unbestimmte Fortschrittsleiste ist, gibt sie `-1` zurück.
- {{domxref("HTMLProgressElement.value")}}
  - : Ein `double`-Wert, der den aktuellen Wert widerspiegelt; wenn die Fortschrittsleiste eine unbestimmte Fortschrittsleiste ist, gibt sie `0` zurück.
- {{domxref("HTMLProgressElement.labels")}} {{ReadOnlyInline}}
  - : Gibt {{domxref("NodeList")}} zurück, die die Liste der {{HTMLElement("label")}}-Elemente enthält, die Beschriftungen für dieses Element sind.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von ihrem Elternteil, {{domxref("HTMLElement")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("progress")}}
