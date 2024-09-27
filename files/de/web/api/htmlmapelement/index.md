---
title: HTMLMapElement
slug: Web/API/HTMLMapElement
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{ APIRef("HTML DOM") }}

Die **`HTMLMapElement`**-Schnittstelle bietet spezielle Eigenschaften und Methoden (zusätzlich zu denen des regulären Objektschnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement), die sie auch durch Vererbung zur Verfügung hat) zur Manipulation des Layouts und der Darstellung von Kartenelementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLMapElement.name`](/de/docs/Web/API/HTMLMapElement/name)
  - : Ein String, der das {{HTMLElement("map")}}-Element darstellt, um es in anderen Kontexten zu referenzieren. Wenn das `id`-Attribut gesetzt ist, muss dies denselben Wert haben; es darf nicht `null` oder leer sein.
- [`HTMLMapElement.areas`](/de/docs/Web/API/HTMLMapElement/areas) {{ReadOnlyInline}}
  - : Eine lebendige [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) von {{HTMLElement("area")}}-Elementen, die mit diesem {{HTMLElement("map")}} verbunden sind.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das diese Schnittstelle implementiert: {{ HTMLElement("map") }}.
