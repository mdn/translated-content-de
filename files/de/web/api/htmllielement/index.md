---
title: HTMLLIElement
slug: Web/API/HTMLLIElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{ APIRef("HTML DOM") }}

Die **`HTMLLIElement`**-Schnittstelle bietet spezifische Eigenschaften und Methoden (zusätzlich zu denen, die durch die normale [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle geerbt werden), um Listenelemente zu manipulieren.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLLIElement.type`](/de/docs/Web/API/HTMLLIElement/type) {{deprecated_inline}}
  - : Ein String, der den Typ der Aufzählungspunkte darstellt, `"disc"`, `"square"` oder `"circle"`. Da die standardisierte Methode zur Definition des Listentyps über die CSS-Eigenschaft {{cssxref("list-style-type")}} erfolgt, verwenden Sie die CSSOM-Methoden, um diesen über ein Skript zu setzen.
- [`HTMLLIElement.value`](/de/docs/Web/API/HTMLLIElement/value)
  - : Ein `long`, der die ordinale Position des _Listenelements_ innerhalb eines gegebenen {{HTMLElement("ol")}} angibt. Es spiegelt das [`value`](/de/docs/Web/HTML/Element/li#value)-Attribut des HTML-{{HTMLElement("li")}}-Elements wider und kann kleiner als `0` sein. Wenn das {{HTMLElement("li")}}-Element kein Kind eines {{HTMLElement("ol")}}-Elements ist, hat die Eigenschaft keine Bedeutung.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("li")}}
