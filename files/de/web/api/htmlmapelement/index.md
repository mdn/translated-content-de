---
title: HTMLMapElement
slug: Web/API/HTMLMapElement
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{ APIRef("HTML DOM") }}

Das **`HTMLMapElement`**-Interface bietet spezielle Eigenschaften und Methoden (zusätzlich zu denen des regulären Objekts {{domxref("HTMLElement")}}-Interfaces, die es auch durch Vererbung zur Verfügung hat) für die Manipulation des Layouts und der Darstellung von Map-Elementen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("HTMLElement")}}._

- {{domxref("HTMLMapElement.name")}}
  - : Ein String, der das {{HTMLElement("map")}}-Element repräsentiert, um es in anderen Kontexten zu referenzieren. Wenn das `id`-Attribut gesetzt ist, muss es denselben Wert haben und darf nicht `null` oder leer sein.
- {{domxref("HTMLMapElement.areas")}} {{ReadOnlyInline}}
  - : Eine Live-{{domxref("HTMLCollection")}}, die die mit diesem {{HTMLElement("map")}} assoziierten {{HTMLElement("area")}}-Elemente darstellt.

## Instanzmethoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, {{domxref("HTMLElement")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das dieses Interface implementiert: {{ HTMLElement("map") }}.
