---
title: HTMLTableSectionElement
slug: Web/API/HTMLTableSectionElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{ APIRef("HTML DOM") }}

Die **`HTMLTableSectionElement`**-Schnittstelle bietet spezielle Eigenschaften und Methoden (über die hinaus, die sie durch Vererbung von der {{domxref("HTMLElement")}}-Schnittstelle ebenfalls zur Verfügung hat) zur Manipulation des Layouts und der Darstellung von Abschnitten, das heißt von Kopf- und Fußzeilen sowie Körpern ({{HTMLElement("thead")}}, {{HTMLElement("tfoot")}}, und {{HTMLElement("tbody")}}, jeweils) in einer HTML-Tabelle.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von ihrem Elternteil, {{domxref("HTMLElement")}}._

- {{domxref("HTMLTableSectionElement.align")}} {{deprecated_inline}}
  - : Ein String, der einen aufgezählten Wert enthält und das [`align`](/de/docs/Web/HTML/Element/tr#align)-Attribut widerspiegelt. Es gibt die Ausrichtung der Inhalte des Elements im Hinblick auf den umgebenden Kontext an. Die möglichen Werte sind `"left"`, `"right"` und `"center"`.
- {{domxref("HTMLTableSectionElement.rows")}} {{ReadOnlyInline}}
  - : Gibt eine dynamische {{domxref("HTMLCollection")}} zurück, die die Zeilen in dem Abschnitt enthält. Die `HTMLCollection` ist dynamisch und wird automatisch aktualisiert, wenn Zeilen hinzugefügt oder entfernt werden.
- {{domxref("HTMLTableSectionElement.ch")}} {{deprecated_inline}}
  - : Ein String, der ein einzelnes Zeichen enthält. Dieses Zeichen ist das, an dem alle Zellen einer Spalte ausgerichtet werden. Es entspricht dem [`char`](/de/docs/Web/HTML/Element/tr#char) und standardmäßig den Dezimaltrennzeichen der Sprache, z. B. `'.'` für Englisch oder `','` für Französisch. Diese Eigenschaft war optional und wurde nicht sehr gut unterstützt.
- {{domxref("HTMLTableSectionElement.chOff")}} {{deprecated_inline}}
  - : Ein String, der eine ganze Zahl enthält, die angibt, wie viele Zeichen von dem durch `HTMLTableRowElement.ch` definierten Zeichen nach rechts (für links-nach-rechts-Schreibweisen; oder nach links für rechts-nach-links-Schreibweisen) freigelassen werden müssen. Diese Eigenschaft war optional und wurde nicht sehr gut unterstützt.
- {{domxref("HTMLTableSectionElement.vAlign")}} {{deprecated_inline}}
  - : Ein String, der einen aufgezählten Wert darstellt, der angibt, wie der Inhalt der Zelle vertikal ausgerichtet werden muss. Es spiegelt das [`valign`](/de/docs/Web/HTML/Element/tr#valign)-Attribut wider und kann einen der folgenden Werte annehmen: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`.

## Instanzmethoden

_Erbt Methoden von ihrem Elternteil, {{domxref("HTMLElement")}}_.

- {{domxref("HTMLTableSectionElement.deleteRow()")}}
  - : Entfernt die Zeile, die dem im Parameter angegebenen `index` entspricht, im Abschnitt. Wenn der `index`-Wert `-1` ist, wird die letzte Zeile entfernt; wenn er kleiner als `-1` oder größer als die Anzahl der Zeilen in der Sammlung ist, wird eine {{DOMxRef("DOMException")}} mit dem Wert `IndexSizeError` ausgelöst.
- {{domxref("HTMLTableSectionElement.insertRow()")}}
  - : Gibt ein {{DOMxRef("HTMLTableRowElement")}} zurück, das eine neue Zeile des Abschnitts darstellt. Es fügt diese in die Zeilensammlung direkt vor dem {{HTMLElement("tr")}}-Element an der gegebenen `index`-Position ein. Wenn der `index` `-1` ist, wird die neue Zeile an die Sammlung angehängt. Wenn der `index` kleiner als `-1` oder größer als die Anzahl der Zeilen in der Sammlung ist, wird eine {{DOMxRef("DOMException")}} mit dem Wert `IndexSizeError` ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die HTML-Elemente, die diese Schnittstelle implementieren: {{HTMLElement("tfoot")}}, {{HTMLElement("thead")}}, und {{HTMLElement("tbody")}}.
