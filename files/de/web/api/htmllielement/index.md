---
title: HTMLLIElement
slug: Web/API/HTMLLIElement
l10n:
  sourceCommit: 4032e31c51141511f5aa4068d5572e4736584afe
---

{{ APIRef("HTML DOM") }}

Das **`HTMLLIElement`**-Interface bietet spezifische Eigenschaften und Methoden (zusätzlich zu denen, die es durch Vererbung von der regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle ebenfalls zur Verfügung hat) zum Manipulieren von Listenelementen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLLIElement.type`](/de/docs/Web/API/HTMLLIElement/type) {{deprecated_inline}}
  - : Ein String, der den Typ der Aufzählungszeichen angibt: `"disc"`, `"square"` oder `"circle"`. Da die Standardmethode zur Definition des Listentyps die CSS-Eigenschaft {{cssxref("list-style-type")}} ist, verwenden Sie die CSSOM-Methoden, um ihn über ein Skript festzulegen.
- [`HTMLLIElement.value`](/de/docs/Web/API/HTMLLIElement/value)
  - : Ein ganzzahliger Wert, der die ordinale Position des _Listenelements_ innerhalb eines gegebenen {{HTMLElement("ol")}} angibt. Er spiegelt das `value`-Attribut des HTML-{{HTMLElement("li")}}-Elements wider und kann kleiner als `0` sein. Wenn das {{HTMLElement("li")}}-Element kein Kind eines {{HTMLElement("ol")}}-Elements ist, hat die Eigenschaft keine Bedeutung.

## Instanzmethoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("li")}}
