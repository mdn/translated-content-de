---
title: HTMLLIElement
slug: Web/API/HTMLLIElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{ APIRef("HTML DOM") }}

Die **`HTMLLIElement`**-Schnittstelle bietet spezifische Eigenschaften und Methoden (über die hinaus, die durch die reguläre [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle definiert sind und ihr durch Vererbung ebenfalls zur Verfügung stehen) zur Manipulation von Listenelementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLLIElement.type`](/de/docs/Web/API/HTMLLIElement/type) {{deprecated_inline}}
  - : Ein String, der den Typ der Aufzählungszeichen darstellt, `"disc"`, `"square"` oder `"circle"`. Da der Standardweg zur Definition des Listentyps über die CSS-Eigenschaft {{cssxref("list-style-type")}} erfolgt, sollten Sie die CSSOM-Methoden verwenden, um ihn über ein Skript festzulegen.
- [`HTMLLIElement.value`](/de/docs/Web/API/HTMLLIElement/value)
  - : Ein `long`, der die Ordnungsposition des _Listenelements_ innerhalb eines gegebenen {{HTMLElement("ol")}} angibt. Er spiegelt das [`value`](/de/docs/Web/HTML/Element/li#value)-Attribut des HTML-{{HTMLElement("li")}}-Elements wider und kann kleiner als `0` sein. Wenn das {{HTMLElement("li")}}-Element kein Kind eines {{HTMLElement("ol")}}-Elements ist, hat die Eigenschaft keine Bedeutung.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("li")}}
