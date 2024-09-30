---
title: HTMLMapElement
slug: Web/API/HTMLMapElement
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{ APIRef("HTML DOM") }}

Die **`HTMLMapElement`**-Schnittstelle bietet spezielle Eigenschaften und Methoden (zusätzlich zu denen der regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle, die ihr ebenfalls durch Vererbung zur Verfügung stehen) zur Manipulation des Layouts und der Präsentation von Kartenelementen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLMapElement.name`](/de/docs/Web/API/HTMLMapElement/name)
  - : Ein String, der das {{HTMLElement("map")}}-Element darstellt, damit es in einem anderen Kontext referenziert werden kann. Wenn das `id`-Attribut gesetzt ist, muss dieser Wert übereinstimmen; es darf nicht `null` oder leer sein.
- [`HTMLMapElement.areas`](/de/docs/Web/API/HTMLMapElement/areas) {{ReadOnlyInline}}
  - : Eine Live-[`HTMLCollection`](/de/docs/Web/API/HTMLCollection), die die mit diesem {{HTMLElement("map")}}-Element verbundenen {{HTMLElement("area")}}-Elemente darstellt.

## Instanzmethoden

_Keine spezifische Methode; erbt Methoden von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("map") }}.
