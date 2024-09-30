---
title: HTMLTableSectionElement
slug: Web/API/HTMLTableSectionElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{ APIRef("HTML DOM") }}

Das **`HTMLTableSectionElement`**-Interface bietet spezielle Eigenschaften und Methoden (zusätzlich zu denen des Interfaces [`HTMLElement`](/de/docs/Web/API/HTMLElement), die es auch durch Vererbung hat) zur Manipulation des Layouts und der Darstellung von Abschnitten, das heißt Kopf-, Fußzeilen und Körper ({{HTMLElement("thead")}}, {{HTMLElement("tfoot")}}, und {{HTMLElement("tbody")}}) in einer HTML-Tabelle.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften vom übergeordneten Element [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTableSectionElement.align`](/de/docs/Web/API/HTMLTableSectionElement/align) {{deprecated_inline}}
  - : Ein String, der einen aufgezählten Wert enthält und das [`align`](/de/docs/Web/HTML/Element/tr#align)-Attribut widerspiegelt. Er gibt die Ausrichtung des Inhalts des Elements in Bezug auf den umgebenden Kontext an. Die möglichen Werte sind `"left"`, `"right"` und `"center"`.
- [`HTMLTableSectionElement.rows`](/de/docs/Web/API/HTMLTableSectionElement/rows) {{ReadOnlyInline}}
  - : Gibt ein lebendes [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) -Objekt zurück, das die Zeilen des Abschnitts enthält. Das `HTMLCollection`-Objekt ist live und wird automatisch aktualisiert, wenn Zeilen hinzugefügt oder entfernt werden.
- [`HTMLTableSectionElement.ch`](/de/docs/Web/API/HTMLTableSectionElement/ch) {{deprecated_inline}}
  - : Ein String, der ein einzelnes Zeichen enthält. Dieses Zeichen wird verwendet, um alle Zellen einer Spalte auszurichten. Es spiegelt das [`char`](/de/docs/Web/HTML/Element/tr#char)-Attribut wider und entspricht standardmäßig den Dezimaltrennzeichen, die mit der Sprache verbunden sind, z. B. `'.'` für Englisch oder `','` für Französisch. Diese Eigenschaft war optional und wurde nicht sehr gut unterstützt.
- [`HTMLTableSectionElement.chOff`](/de/docs/Web/API/HTMLTableSectionElement/chOff) {{deprecated_inline}}
  - : Ein String, der eine ganze Zahl enthält, die angibt, wie viele Zeichen rechts (für LTR-Schriften; oder links für RTL-Schriften) vom durch `HTMLTableRowElement.ch` definierten Zeichen verbleiben müssen. Diese Eigenschaft war optional und wurde nicht sehr gut unterstützt.
- [`HTMLTableSectionElement.vAlign`](/de/docs/Web/API/HTMLTableSectionElement/vAlign) {{deprecated_inline}}
  - : Ein String, der einen aufgezählten Wert darstellt und angibt, wie der Inhalt der Zelle vertikal ausgerichtet werden muss. Er spiegelt das [`valign`](/de/docs/Web/HTML/Element/tr#valign)-Attribut wider und kann einen der folgenden Werte haben: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`.

## Instanz-Methoden

_Erbt Methoden vom übergeordneten Element [`HTMLElement`](/de/docs/Web/API/HTMLElement)_.

- [`HTMLTableSectionElement.deleteRow()`](/de/docs/Web/API/HTMLTableSectionElement/deleteRow)
  - : Entfernt die Zeile, die dem in Parameter angegebenen `index` im Abschnitt entspricht. Wenn der `index` den Wert `-1` hat, wird die letzte Zeile entfernt; wenn er kleiner als `-1` oder größer als die Anzahl der Zeilen in der Sammlung ist, wird eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `IndexSizeError` ausgelöst.
- [`HTMLTableSectionElement.insertRow()`](/de/docs/Web/API/HTMLTableSectionElement/insertRow)
  - : Gibt ein [`HTMLTableRowElement`](/de/docs/Web/API/HTMLTableRowElement) zurück, das eine neue Zeile des Abschnitts darstellt. Es wird in die Zeilensammlung direkt vor dem {{HTMLElement("tr")}}-Element an der angegebenen `index`-Position eingefügt. Wenn der `index` `-1` ist, wird die neue Zeile an die Sammlung angehängt. Wenn der `index` kleiner als `-1` oder größer als die Anzahl der Zeilen in der Sammlung ist, wird eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `IndexSizeError` ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die HTML-Elemente, die dieses Interface implementieren: {{HTMLElement("tfoot")}}, {{HTMLElement("thead")}}, und {{HTMLElement("tbody")}}.
