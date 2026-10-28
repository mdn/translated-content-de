---
title: Selection
slug: Web/API/Selection
l10n:
  sourceCommit: 3869033353873623537ef2d810c1406a7299b49c
---

{{APIRef("Selection API")}}

Ein **`Selection`**-Objekt repräsentiert den vom Benutzer ausgewählten Textbereich oder die aktuelle Position der Schreibmarke. Jedem [`document`](/de/docs/Web/API/Document) ist ein eindeutiges Selection-Objekt zugeordnet. Dieses kann mit [`document.getSelection()`](/de/docs/Web/API/Document/getSelection) oder [`window.getSelection()`](/de/docs/Web/API/Window/getSelection) abgerufen und anschließend untersucht und verändert werden.

Allgemeine Konzepte im Zusammenhang mit Textauswahlen finden Sie unter [Selection API](/de/docs/Web/API/Selection_API).

## Instanzeigenschaften

- [`Selection.anchorNode`](/de/docs/Web/API/Selection/anchorNode) {{ReadOnlyInline}}
  - : Gibt den [`Node`](/de/docs/Web/API/Node) zurück, in dem die Auswahl beginnt. Kann `null` zurückgeben, wenn im Dokument noch nie eine Auswahl vorhanden war (z. B. bei einem iframe, auf das noch nie geklickt wurde).
- [`Selection.anchorOffset`](/de/docs/Web/API/Selection/anchorOffset) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Versatz des Ankerpunkts der Auswahl innerhalb von `anchorNode` angibt. Ist `anchorNode` ein Textknoten, entspricht sie der Anzahl der Zeichen innerhalb von anchorNode vor dem Ankerpunkt. Ist `anchorNode` ein Element, entspricht sie der Anzahl der Kindknoten von `anchorNode` vor dem Ankerpunkt.
- [`Selection.direction`](/de/docs/Web/API/Selection/direction) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die die Richtung der aktuellen Auswahl beschreibt.
- [`Selection.focusNode`](/de/docs/Web/API/Selection/focusNode) {{ReadOnlyInline}}
  - : Gibt den [`Node`](/de/docs/Web/API/Node) zurück, in dem die Auswahl endet. Kann `null` zurückgeben, wenn im Dokument noch nie eine Auswahl vorhanden war (z. B. bei einem iframe, auf das noch nie geklickt wurde).
- [`Selection.focusOffset`](/de/docs/Web/API/Selection/focusOffset) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Versatz des Fokus der Auswahl innerhalb von `focusNode` angibt. Ist `focusNode` ein Textknoten, entspricht sie der Anzahl der Zeichen innerhalb von `focusNode` vor dem Fokus. Ist `focusNode` ein Element, entspricht sie der Anzahl der Kindknoten von `focusNode` vor dem Fokus.
- [`Selection.isCollapsed`](/de/docs/Web/API/Selection/isCollapsed) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob Anfangs- und Endpunkt der Auswahl an derselben Position liegen.
- [`Selection.rangeCount`](/de/docs/Web/API/Selection/rangeCount) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Bereiche in der Auswahl zurück.
- [`Selection.type`](/de/docs/Web/API/Selection/type) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die den Typ der aktuellen Auswahl beschreibt.

## Instanzmethoden

- [`Selection.addRange()`](/de/docs/Web/API/Selection/addRange)
  - : Ein [`Range`](/de/docs/Web/API/Range)-Objekt, das der Auswahl hinzugefügt wird.
- [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse)
  - : Reduziert die aktuelle Auswahl auf einen einzelnen Punkt.
- [`Selection.collapseToEnd()`](/de/docs/Web/API/Selection/collapseToEnd)
  - : Reduziert die Auswahl auf das Ende des letzten Bereichs in der Auswahl.
- [`Selection.collapseToStart()`](/de/docs/Web/API/Selection/collapseToStart)
  - : Reduziert die Auswahl auf den Anfang des ersten Bereichs in der Auswahl.
- [`Selection.containsNode()`](/de/docs/Web/API/Selection/containsNode)
  - : Gibt an, ob ein bestimmter Knoten Teil der Auswahl ist.
- [`Selection.deleteFromDocument()`](/de/docs/Web/API/Selection/deleteFromDocument)
  - : Löscht den Inhalt der Auswahl aus dem Dokument.
- [`Selection.empty()`](/de/docs/Web/API/Selection/empty)
  - : Entfernt alle Bereiche aus der Auswahl. Danach haben die Eigenschaften [`anchorNode`](/de/docs/Web/API/Selection/anchorNode) und [`focusNode`](/de/docs/Web/API/Selection/focusNode) den Wert `null`, und nichts ist ausgewählt.
- [`Selection.extend()`](/de/docs/Web/API/Selection/extend)
  - : Verschiebt den Fokus der Auswahl an einen angegebenen Punkt.
- [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges)
  - : Gibt ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange)-Objekten zurück, von denen jedes eine Auswahl repräsentiert, die Shadow-DOM-Grenzen überschreiten kann.
- [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt)
  - : Gibt ein [`Range`](/de/docs/Web/API/Range)-Objekt zurück, das einen der aktuell ausgewählten Bereiche repräsentiert.
- [`Selection.modify()`](/de/docs/Web/API/Selection/modify)
  - : Ändert die aktuelle Auswahl.
- [`Selection.removeRange()`](/de/docs/Web/API/Selection/removeRange)
  - : Entfernt einen Bereich aus der Auswahl.
- [`Selection.removeAllRanges()`](/de/docs/Web/API/Selection/removeAllRanges)
  - : Entfernt alle Bereiche aus der Auswahl.
- [`Selection.selectAllChildren()`](/de/docs/Web/API/Selection/selectAllChildren)
  - : Fügt alle Kindknoten des angegebenen Knotens zur Auswahl hinzu.
- [`Selection.setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent)
  - : Legt die Auswahl als einen Bereich fest, der zwei angegebene DOM-Knoten ganz oder teilweise sowie sämtliche Inhalte dazwischen umfasst.
- [`Selection.setPosition()`](/de/docs/Web/API/Selection/setPosition)
  - : Reduziert die aktuelle Auswahl auf einen einzelnen Punkt.
- [`Selection.toString()`](/de/docs/Web/API/Selection/toString)
  - : Gibt eine Zeichenfolge zurück, die derzeit vom Selection-Objekt repräsentiert wird, also den aktuell ausgewählten Text.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.getSelection`](/de/docs/Web/API/Window/getSelection), [`Document.getSelection`](/de/docs/Web/API/Document/getSelection), [`Range`](/de/docs/Web/API/Range)
- Ereignisse im Zusammenhang mit Auswahlen: [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event) und [`selectstart`](/de/docs/Web/API/Node/selectstart_event)
- HTML-Eingabeelemente bieten einfachere Hilfs-APIs für die Arbeit mit Auswahlen (siehe [`HTMLInputElement.setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange))
- [`Document.activeElement`](/de/docs/Web/API/Document/activeElement), [`HTMLElement.focus`](/de/docs/Web/API/HTMLElement/focus) und [`HTMLElement.blur`](/de/docs/Web/API/HTMLElement/blur)
