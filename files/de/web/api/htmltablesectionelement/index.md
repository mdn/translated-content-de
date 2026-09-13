---
title: HTMLTableSectionElement
slug: Web/API/HTMLTableSectionElement
l10n:
  sourceCommit: f542ed344953b3312fc92150bba11536667e288a
---

{{ APIRef("HTML DOM") }}

Das **`HTMLTableSectionElement`**-Interface bietet spezielle Eigenschaften und Methoden (zusätzlich zu denen des geerbten [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces) zur Manipulation der Gestaltung und Präsentation von Sektionen, das heißt von Kopf-, Fuß- und Körperbereichen ({{HTMLElement("thead")}}, {{HTMLElement("tfoot")}} und {{HTMLElement("tbody")}}) in einer HTML-Tabelle.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTableSectionElement.align`](/de/docs/Web/API/HTMLTableSectionElement/align) {{deprecated_inline}}
  - : Ein String, der einen aufgezählten Wert enthält, der das [`align`](/de/docs/Web/HTML/Reference/Elements/tr#align)-Attribut widerspiegelt. Es zeigt die Ausrichtung der Inhalte des Elements im Verhältnis zum umgebenden Kontext an. Die möglichen Werte sind `"left"`, `"right"` und `"center"`.
- [`HTMLTableSectionElement.rows`](/de/docs/Web/API/HTMLTableSectionElement/rows) {{ReadOnlyInline}}
  - : Gibt eine aktuelle [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die die Zeilen in dem Bereich enthält. Die `HTMLCollection` ist live und wird automatisch aktualisiert, wenn Zeilen hinzugefügt oder entfernt werden.
- [`HTMLTableSectionElement.ch`](/de/docs/Web/API/HTMLTableSectionElement/ch) {{deprecated_inline}}
  - : Ein String, der ein einzelnes Zeichen enthält. Dieses Zeichen ist dasjenige, auf dem alle Zellen einer Spalte ausgerichtet werden sollen. Es spiegelt das [`char`](/de/docs/Web/HTML/Reference/Elements/tr#char)-Attribut wider und entspricht standardmäßig den Dezimalzeichen der Sprache, z. B. `'.'` für Englisch oder `','` für Französisch. Diese Eigenschaft war optional und wurde nicht sehr gut unterstützt.
- [`HTMLTableSectionElement.chOff`](/de/docs/Web/API/HTMLTableSectionElement/chOff) {{deprecated_inline}}
  - : Ein String, der eine ganze Zahl enthält, die angibt, wie viele Zeichen rechts (für links-nach-rechts-Skripte; oder links für rechts-nach-links-Skripte) von dem durch `HTMLTableRowElement.ch` definierten Zeichen freigelassen werden müssen. Diese Eigenschaft war optional und wurde nicht sehr gut unterstützt.
- [`HTMLTableSectionElement.vAlign`](/de/docs/Web/API/HTMLTableSectionElement/vAlign) {{deprecated_inline}}
  - : Ein String, der einen aufgezählten Wert darstellt und angibt, wie der Inhalt der Zelle vertikal ausgerichtet werden muss. Es spiegelt das [`valign`](/de/docs/Web/HTML/Reference/Elements/tr#valign)-Attribut wider und kann einen der folgenden Werte haben: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`.

## Instanzmethoden

_Erbt Methoden von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTableSectionElement.deleteRow()`](/de/docs/Web/API/HTMLTableSectionElement/deleteRow)
  - : Entfernt die Zeile, die dem als Parameter gegebenen `index` entspricht, aus dem Abschnitt. Wenn der Wert von `index` `-1` ist, wird die letzte Zeile entfernt; wenn er kleiner als `-1` oder größer als die Anzahl der Zeilen in der Sammlung ist, wird ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `IndexSizeError` ausgelöst.
- [`HTMLTableSectionElement.insertRow()`](/de/docs/Web/API/HTMLTableSectionElement/insertRow)
  - : Gibt ein [`HTMLTableRowElement`](/de/docs/Web/API/HTMLTableRowElement) zurück, das eine neue Zeile des Abschnitts darstellt. Es wird in die Zeilensammlung direkt vor dem {{HTMLElement("tr")}}-Element an der angegebenen `index`-Position eingefügt. Wenn der `index` `-1` ist, wird die neue Zeile an die Sammlung angehängt. Wenn der `index` kleiner als `-1` oder größer als die Anzahl der Zeilen in der Sammlung ist, wird ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `IndexSizeError` ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die HTML-Elemente, die dieses Interface implementieren: {{HTMLElement("tfoot")}}, {{HTMLElement("thead")}} und {{HTMLElement("tbody")}}.
