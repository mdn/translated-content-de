---
title: HTMLProgressElement
slug: Web/API/HTMLProgressElement
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{ APIRef("HTML DOM") }}

Die **`HTMLProgressElement`**-Schnittstelle bietet spezielle Eigenschaften und Methoden (über die reguläre [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle hinaus, die ihr durch Vererbung ebenfalls zur Verfügung steht) zur Manipulation des Layouts und der Präsentation von {{HTMLElement("progress")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLProgressElement.max`](/de/docs/Web/API/HTMLProgressElement/max)
  - : Ein `double`-Wert, der das Inhaltsattribut mit demselben Namen widerspiegelt, beschränkt auf Zahlen größer als Null. Sein Standardwert ist `1.0`.
- [`HTMLProgressElement.position`](/de/docs/Web/API/HTMLProgressElement/position) {{ReadOnlyInline}}
  - : Gibt einen `double`-Wert zurück, der sich aus der Division des aktuellen Wertes (`value`) durch den Maximalwert (`max`) ergibt; wenn die Fortschrittsanzeige eine indeterminierte Fortschrittsanzeige ist, gibt sie `-1` zurück.
- [`HTMLProgressElement.value`](/de/docs/Web/API/HTMLProgressElement/value)
  - : Ein `double`-Wert, der den aktuellen Wert widerspiegelt; wenn die Fortschrittsanzeige eine indeterminierte Fortschrittsanzeige ist, gibt sie `0` zurück.
- [`HTMLProgressElement.labels`](/de/docs/Web/API/HTMLProgressElement/labels) {{ReadOnlyInline}}
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) zurück, die die Liste von {{HTMLElement("label")}}-Elementen enthält, die Labels für dieses Element sind.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("progress")}}
