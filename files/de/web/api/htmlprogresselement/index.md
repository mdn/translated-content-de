---
title: HTMLProgressElement
slug: Web/API/HTMLProgressElement
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{ APIRef("HTML DOM") }}

Die **`HTMLProgressElement`**-Schnittstelle bietet spezielle Eigenschaften und Methoden (neben der regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle, die sie auch durch Vererbung zur Verfügung hat) zur Manipulation des Layouts und der Präsentation von {{HTMLElement("progress")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLProgressElement.max`](/de/docs/Web/API/HTMLProgressElement/max)
  - : Ein `double`-Wert, der das Inhaltsattribut mit demselben Namen widerspiegelt, begrenzt auf Zahlen größer als null. Der Standardwert ist `1.0`.
- [`HTMLProgressElement.position`](/de/docs/Web/API/HTMLProgressElement/position) {{ReadOnlyInline}}
  - : Gibt einen `double`-Wert zurück, der das Ergebnis der Division des aktuellen Werts (`value`) durch den Maximalwert (`max`) darstellt; wenn die Fortschrittsleiste eine unbestimmte Fortschrittsleiste ist, wird `-1` zurückgegeben.
- [`HTMLProgressElement.value`](/de/docs/Web/API/HTMLProgressElement/value)
  - : Ein `double`-Wert, der den aktuellen Wert widerspiegelt; wenn die Fortschrittsleiste eine unbestimmte Fortschrittsleiste ist, wird `0` zurückgegeben.
- [`HTMLProgressElement.labels`](/de/docs/Web/API/HTMLProgressElement/labels) {{ReadOnlyInline}}
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) zurück, die die Liste der {{HTMLElement("label")}}-Elemente enthält, die Labels für dieses Element sind.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("progress")}}
