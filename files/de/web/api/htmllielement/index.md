---
title: HTMLLIElement
slug: Web/API/HTMLLIElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{ APIRef("HTML DOM") }}

Das **`HTMLLIElement`**-Interface stellt spezifische Eigenschaften und Methoden zur Verfügung (zusätzlich zu denen, die durch das reguläre {{domxref("HTMLElement")}}-Interface durch Vererbung verfügbar sind), um Listenelemente zu manipulieren.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("HTMLElement")}}._

- {{domxref("HTMLLIElement.type")}} {{deprecated_inline}}
  - : Ein String, der den Typ der Aufzählungszeichen repräsentiert, `"disc"`, `"square"` oder `"circle"`. Da die standardmäßige Methode zur Definition des Listentyps über die CSS-Eigenschaft {{cssxref("list-style-type")}} erfolgt, verwenden Sie die CSSOM-Methoden, um sie über ein Skript festzulegen.
- {{domxref("HTMLLIElement.value")}}
  - : Ein `long`, der die Ordnungsposition des _Listenelements_ innerhalb eines gegebenen {{HTMLElement("ol")}} angibt. Es spiegelt das [`value`](/de/docs/Web/HTML/Element/li#value)-Attribut des HTML-{{HTMLElement("li")}}-Elements wider und kann kleiner als `0` sein. Wenn das {{HTMLElement("li")}}-Element kein Kind eines {{HTMLElement("ol")}}-Elements ist, hat die Eigenschaft keine Bedeutung.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, {{domxref("HTMLElement")}}._

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("li")}}
