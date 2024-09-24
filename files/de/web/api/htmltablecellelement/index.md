---
title: HTMLTableCellElement
slug: Web/API/HTMLTableCellElement
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("HTML DOM") }}

Die **`HTMLTableCellElement`** Schnittstelle bietet spezielle Eigenschaften und Methoden (über die reguläre {{domxref("HTMLElement")}}-Schnittstelle hinaus, die sie durch Vererbung ebenfalls zur Verfügung hat), um das Layout und die Präsentation von Tabellenzellen, entweder Kopfzellen ({{HTMLElement("th")}}) oder Datenzellen ({{HTMLElement("td")}}), in einem HTML-Dokument zu manipulieren.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, {{domxref("HTMLElement")}}._

- {{domxref("HTMLTableCellElement.abbr")}}
  - : Ein String, der auf `<th>`-Elementen (nicht auf {{HTMLElement("td")}}) verwendet werden kann, um ein alternatives Label für die Kopfzelle anzugeben. Dieses Alternativ-Label kann in anderen Kontexten verwendet werden, z. B. wenn die Kopfzellen beschrieben werden, die auf eine Datenzelle zutreffen. Es wird besonders als wertvolles Werkzeug für Barrierefreiheit genutzt, um einen kürzeren Begriff bereitzustellen, der von Screenreadern genutzt werden kann. In der Regel ist der Wert von `abbr` eine Abkürzung oder ein Akronym, kann aber jeder textlich passende Begriff sein.
- {{domxref("HTMLTableCellElement.cellIndex")}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Position der Zelle in der {{domxref("HTMLTableRowElement.cells", "cells")}}-Sammlung des {{HTMLElement("tr")}} repräsentiert, in dem sich die Zelle befindet. Gehört die Zelle nicht zu einem `<tr>`, wird `-1` zurückgegeben.
- {{domxref("HTMLTableCellElement.colSpan")}}
  - : Eine positive Zahl, die die Anzahl der Spalten angibt, die diese Zelle überspannen muss; dies ermöglicht der Zelle, Platz über mehrere Spalten der Tabelle hinweg einzunehmen. Sie spiegelt das [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut wider.
- {{domxref("HTMLTableCellElement.headers")}} {{ReadOnlyInline}}
  - : Eine {{domxref("DOMTokenList")}}, die eine Liste von `id` der {{HTMLElement("th")}}-Elemente beschreibt, die Kopfzellen repräsentieren, die mit der Zelle assoziiert sind. Sie spiegelt das [`headers`](/de/docs/Web/HTML/Element/td#headers)-Attribut wider.
- {{domxref("HTMLTableCellElement.rowSpan")}}
  - : Eine positive Zahl, die die Anzahl der Zeilen angibt, die diese Zelle überspannen muss; dies ermöglicht einer Zelle, Platz über mehrere Zeilen der Tabelle hinweg einzunehmen. Sie spiegelt das [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan)-Attribut wider.
- {{domxref("HTMLTableCellElement.scope")}}
  - : Ein String, der den Geltungsbereich einer {{HTMLElement("th")}}-Zelle anzeigt. Mögliche Werte für `scope` sind: `col`, `colgroup`, `row`, `rowgroup` oder der leere String (`""`).

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von ihrem Elternteil, {{domxref("HTMLElement")}}_.

## Veraltete Eigenschaften

> [!WARNING]
> Diese Eigenschaften sind veraltet und sollten nicht mehr verwendet werden. Sie sind hauptsächlich dokumentiert, um die Nachvollziehbarkeit älterer Codebasen zu ermöglichen.

- {{domxref("HTMLTableCellElement.align")}} {{deprecated_inline}}
  - : Ein String, der den Wert des [`align`](/de/docs/Web/HTML/Element/td#align)-Attributs enthält, falls vorhanden, oder ein leerer String, wenn nicht gesetzt. Er kann verwendet werden, um die Ausrichtung der Inhalte des Elements im umgebenden Kontext auf `"left"`, `"right"` und `"center"` zu setzen. Verwenden Sie stattdessen die CSS-{{cssxref("text-align")}}-Eigenschaft.
- {{domxref("HTMLTableCellElement.axis")}} {{deprecated_inline}}
  - : Ein String, der eine Namensgruppierung von Zellen in virtuell enthält. Er spiegelt das veraltete [`axis`](/de/docs/Web/HTML/Element/td#axis)-Attribut wider.
- {{domxref("HTMLTableCellElement.bgColor")}} {{deprecated_inline}}
  - : Ein String, der die Hintergrundfarbe der Zellen enthält. Er spiegelt das veraltete [`bgColor`](/de/docs/Web/HTML/Element/td#bgcolor)-Attribut wider.
- {{domxref("HTMLTableCellElement.ch")}} {{deprecated_inline}}
  - : Ein String, der ein einzelnes Zeichen enthält. Dieses Zeichen ist dasjenige, an dem alle Zellen einer Spalte ausgerichtet werden sollen. Es spiegelt das [`char`](/de/docs/Web/HTML/Element/td#char) wider und standardmäßig die Dezimalpunkte, die mit der Sprache assoziiert sind, z. B. `'.'` für Englisch oder `','` für Französisch. Diese Eigenschaft war optional und wurde nicht sehr gut unterstützt.
- {{domxref("HTMLTableCellElement.chOff")}} {{deprecated_inline}}
  - : Ein String, der eine ganze Zahl enthält, die angibt, wie viele Zeichen rechts (für von links nach rechts gerichtete Schriften; oder links für von rechts nach links gerichtete Schriften) des Zeichens definiert durch `HTMLTableCellElement.ch` liegen müssen. Diese Eigenschaft war optional und wurde nicht sehr gut unterstützt.
- {{domxref("HTMLTableCellElement.height")}} {{deprecated_inline}}
  - : Ein String, der eine Länge in Pixel der angedeuteten Höhe der Zelle enthält. Er spiegelt das veraltete [`height`](/de/docs/Web/HTML/Element/td#height)-Attribut wider.
- {{domxref("HTMLTableCellElement.noWrap")}} {{deprecated_inline}}
  - : Ein boolescher Wert, der das `nowrap`-Attribut widerspiegelt und angibt, ob Zellinhalte in mehreren Zeilen umbrochen werden können.
- {{domxref("HTMLTableCellElement.vAlign")}} {{deprecated_inline}}
  - : Ein String, der einen aufgezählten Wert darstellt, der angibt, wie der Inhalt der Zelle vertikal ausgerichtet werden muss. Er spiegelt das [`valign`](/de/docs/Web/HTML/Element/td#valign)-Attribut wider und kann einen der folgenden Werte haben: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`. Verwenden Sie stattdessen die CSS-{{cssxref("vertical-align")}}-Eigenschaft.
- {{domxref("HTMLTableCellElement.width")}} {{deprecated_inline}}
  - : Ein String, der angibt, wie viele Pixel breit die Zelle gezeichnet werden soll, wenn möglich. Diese Eigenschaft spiegelt das ebenfalls veraltete [`width`](/de/docs/Web/HTML/Element/td#width)-Attribut wider. Verwenden Sie stattdessen die CSS-{{cssxref("width")}}-Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die HTML-Elemente, die diese Schnittstelle implementieren: {{HTMLElement("th")}} und {{HTMLElement("td")}}.
