---
title: Selection
slug: Web/API/Selection
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{ApiRef("Selection API")}}

Ein **`Selection`**-Objekt repräsentiert den Bereich des Textes, der vom Benutzer ausgewählt wurde, oder die aktuelle Position des Cursors. Jedes [`document`](/de/docs/Web/API/Document) ist mit einem eindeutigen Auswahlobjekt verbunden, das über [`document.getSelection()`](/de/docs/Web/API/Document/getSelection) oder [`window.getSelection()`](/de/docs/Web/API/Window/getSelection) abgerufen und dann untersucht und modifiziert werden kann.

Ein Benutzer kann eine Auswahl von links nach rechts (in Dokumentenreihenfolge) oder von rechts nach links (umgekehrte Dokumentenreihenfolge) erstellen. Der **_Anker_** ist der Punkt, an dem der Benutzer die Auswahl begonnen hat, und der **_Fokus_** ist der Punkt, an dem die Auswahl endet. Wenn Sie eine Auswahl mit einer Desktop-Maus treffen, wird der Anker dort platziert, wo Sie die Maustaste gedrückt haben, und der Fokus dort, wo Sie die Maustaste losgelassen haben.

> **Note:** _Anker_ und _Fokus_ sollten nicht mit den _Start_- und _Ende_-Positionen einer Auswahl verwechselt werden. Der Anker kann vor dem Fokus oder umgekehrt platziert werden, abhängig von der Richtung, in der Sie die Auswahl getroffen haben.

## Instanz-Eigenschaften

- [`Selection.anchorNode`](/de/docs/Web/API/Selection/anchorNode) {{ReadOnlyInline}}
  - : Gibt den [`Node`](/de/docs/Web/API/Node) zurück, in dem die Auswahl beginnt. Kann `null` zurückgeben, wenn nie eine Auswahl im Dokument erstellt wurde (z.B. ein `iframe`, das nie angeklickt wurde).
- [`Selection.anchorOffset`](/de/docs/Web/API/Selection/anchorOffset) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Offset des Ankers innerhalb des `anchorNode` darstellt. Wenn `anchorNode` ein Textknoten ist, gibt es die Anzahl der Zeichen innerhalb des `anchorNode` an, die dem Anker vorausgehen. Wenn `anchorNode` ein Element ist, ist dies die Anzahl der untergeordneten Knoten des `anchorNode`, die dem Anker vorausgehen.
- [`Selection.direction`](/de/docs/Web/API/Selection/direction) {{ReadOnlyInline}}
  - : Ein String, der die Richtung der aktuellen Auswahl beschreibt.
- [`Selection.focusNode`](/de/docs/Web/API/Selection/focusNode) {{ReadOnlyInline}}
  - : Gibt den [`Node`](/de/docs/Web/API/Node) zurück, in dem die Auswahl endet. Kann `null` zurückgeben, wenn nie eine Auswahl im Dokument erstellt wurde (z.B. ein `iframe`, das nie angeklickt wurde).
- [`Selection.focusOffset`](/de/docs/Web/API/Selection/focusOffset) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Offset des Ankers innerhalb des `focusNode` darstellt. Wenn `focusNode` ein Textknoten ist, gibt es die Anzahl der Zeichen innerhalb des `focusNode` an, die dem Fokus vorausgehen. Wenn `focusNode` ein Element ist, ist dies die Anzahl der untergeordneten Knoten des `focusNode`, die dem Fokus vorausgehen.
- [`Selection.isCollapsed`](/de/docs/Web/API/Selection/isCollapsed) {{ReadOnlyInline}}
  - : Gibt einen Boolean zurück, der anzeigt, ob die Start- und Endpunkte der Auswahl an derselben Position liegen.
- [`Selection.rangeCount`](/de/docs/Web/API/Selection/rangeCount) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Bereiche in der Auswahl zurück.
- [`Selection.type`](/de/docs/Web/API/Selection/type) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Typ der aktuellen Auswahl beschreibt.

## Instanz-Methoden

- [`Selection.addRange()`](/de/docs/Web/API/Selection/addRange)
  - : Ein [`Range`](/de/docs/Web/API/Range)-Objekt, das der Auswahl hinzugefügt wird.
- [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse)
  - : Kollabiert die aktuelle Auswahl auf einen einzigen Punkt.
- [`Selection.collapseToEnd()`](/de/docs/Web/API/Selection/collapseToEnd)
  - : Kollabiert die Auswahl zum Ende des letzten Bereichs in der Auswahl.
- [`Selection.collapseToStart()`](/de/docs/Web/API/Selection/collapseToStart)
  - : Kollabiert die Auswahl zum Beginn des ersten Bereichs in der Auswahl.
- [`Selection.containsNode()`](/de/docs/Web/API/Selection/containsNode)
  - : Zeigt an, ob ein bestimmter Knoten Teil der Auswahl ist.
- [`Selection.deleteFromDocument()`](/de/docs/Web/API/Selection/deleteFromDocument)
  - : Löscht den Inhalt der Auswahl aus dem Dokument.
- [`Selection.empty()`](/de/docs/Web/API/Selection/empty)
  - : Entfernt alle Bereiche aus der Auswahl, wodurch die [`anchorNode`](/de/docs/Web/API/Selection/anchorNode)- und [`focusNode`](/de/docs/Web/API/Selection/focusNode)-Eigenschaften gleich `null` werden und nichts ausgewählt bleibt.
- [`Selection.extend()`](/de/docs/Web/API/Selection/extend)
  - : Verschiebt den Fokus der Auswahl zu einem angegebenen Punkt.
- [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) {{experimental_inline}}
  - : Gibt ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange)-Objekten zurück, die jeweils eine Auswahl darstellen, die möglicherweise Grenzen des Shadow DOM überschreitet.
- [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt)
  - : Gibt ein [`Range`](/de/docs/Web/API/Range)-Objekt zurück, das einen der aktuell ausgewählten Bereiche darstellt.
- [`Selection.modify()`](/de/docs/Web/API/Selection/modify)
  - : Ändert die aktuelle Auswahl.
- [`Selection.removeRange()`](/de/docs/Web/API/Selection/removeRange)
  - : Entfernt einen Bereich aus der Auswahl.
- [`Selection.removeAllRanges()`](/de/docs/Web/API/Selection/removeAllRanges)
  - : Entfernt alle Bereiche aus der Auswahl.
- [`Selection.selectAllChildren()`](/de/docs/Web/API/Selection/selectAllChildren)
  - : Fügt alle Kinder des angegebenen Knotens zur Auswahl hinzu.
- [`Selection.setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent)
  - : Setzt die Auswahl auf einen Bereich, der alle oder Teile von zwei angegebenen DOM-Knoten und alle dazwischenliegenden Inhalte enthält.
- [`Selection.setPosition()`](/de/docs/Web/API/Selection/setPosition)
  - : Kollabiert die aktuelle Auswahl auf einen einzigen Punkt.
- [`Selection.toString()`](/de/docs/Web/API/Selection/toString)
  - : Gibt einen String zurück, der derzeit vom Auswahlobjekt repräsentiert wird, d.h. den derzeit ausgewählten Text.

## Hinweise

### String-Darstellung einer Auswahl

Durch Aufruf der Methode [`Selection.toString()`](/de/docs/Web/API/Selection/toString) wird der Text zurückgegeben, der innerhalb der Auswahl enthalten ist, z.B.:

```js
const selObj = window.getSelection();
window.alert(selObj);
```

Beachten Sie, dass der Einsatz eines Auswahlobjekts als Argument für `window.alert` die `toString`-Methode des Objekts aufruft.

### Mehrere Bereiche in einer Auswahl

Ein Auswahlobjekt repräsentiert die vom Benutzer ausgewählten [`Range`](/de/docs/Web/API/Range). Normalerweise enthält es nur einen Bereich, auf den wie folgt zugegriffen wird:

```js
const selObj = window.getSelection();
const range = selObj.getRangeAt(0);
```

- `selObj` ist ein Auswahlobjekt
- `range` ist ein [`Range`](/de/docs/Web/API/Range)-Objekt

Wie die [Spezifikation der Selection-API](https://www.w3.org/TR/selection-api/#h_note_15) feststellt, wurde die Selection-API ursprünglich von Netscape erstellt und ermöglichte mehrere Bereiche (z.B. damit der Benutzer eine Spalte aus einem {{HTMLElement("table")}} auswählen kann). Andere Browser außer Gecko haben jedoch keine mehreren Bereiche implementiert, und die Spezifikation verlangt auch, dass die Auswahl immer einen einzelnen Bereich hat.

### Auswahl und Eingabefokus

Auswahl und Eingabefokus (angezeigt durch [`Document.activeElement`](/de/docs/Web/API/Document/activeElement)) haben eine komplexe Beziehung, die je nach Browser variiert. In cross-browser kompatiblem Code ist es besser, sie separat zu behandeln.

Safari und Chrome (im Gegensatz zu Firefox) fokussieren derzeit das Element, das die Auswahl enthält, wenn die Auswahl programmatisch geändert wird; es ist möglich, dass sich dies in Zukunft ändern könnte (siehe [W3C-Bug 14383](https://www.w3.org/Bugs/Public/show_bug.cgi?id=14383) und [Webkit-Bug 38696](https://webkit.org/b/38696)).

### Verhalten der Selection-API in Bezug auf Änderungen des Bearbeitungshost-Fokus

Die Selection-API hat ein gemeinsames Verhalten (d.h. browserübergreifend), das das Fokusverhalten für _Bearbeitungshosts_ nach Aufruf bestimmter Methoden bestimmt.

Das Verhalten ist wie folgt:

1. Ein Bearbeitungshost erhält den Fokus, wenn die vorherige Auswahl außerhalb davon war.
2. Eine Selection-API-Methode wird aufgerufen, wodurch eine neue Auswahl mit dem Auswahlbereich innerhalb des Bearbeitungshosts vorgenommen wird.
3. Der Fokus verschiebt sich dann auf den Bearbeitungshost.

> [!NOTE]
> Die Methoden der Selection-API können den Fokus nur auf einen Bearbeitungshost verschieben, nicht auf andere fokussierbare Elemente (z.B. {{HTMLElement("a")}}).

Das obige Verhalten gilt für Auswahlen, die mit den folgenden Methoden getroffen werden:

- [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse)
- [`Selection.collapseToStart()`](/de/docs/Web/API/Selection/collapseToStart)
- [`Selection.collapseToEnd()`](/de/docs/Web/API/Selection/collapseToEnd)
- [`Selection.extend()`](/de/docs/Web/API/Selection/extend)
- [`Selection.selectAllChildren()`](/de/docs/Web/API/Selection/selectAllChildren)
- [`Selection.addRange()`](/de/docs/Web/API/Selection/addRange)
- [`Selection.setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent)

Und wenn der [`Range`](/de/docs/Web/API/Range) mit den folgenden Methoden geändert wird:

- [`Range.setStart()`](/de/docs/Web/API/Range/setStart)
- [`Range.setEnd()`](/de/docs/Web/API/Range/setEnd)
- [`Range.setStartBefore()`](/de/docs/Web/API/Range/setStartBefore)
- [`Range.setStartAfter()`](/de/docs/Web/API/Range/setStartAfter)
- [`Range.setEndBefore()`](/de/docs/Web/API/Range/setEndBefore)
- [`Range.setEndAfter()`](/de/docs/Web/API/Range/setEndAfter)
- [`Range.collapse()`](/de/docs/Web/API/Range/collapse)
- [`Range.selectNode()`](/de/docs/Web/API/Range/selectNode)
- [`Range.selectNodeContents()`](/de/docs/Web/API/Range/selectNodeContents)

### Glossar

Andere Schlüsselbegriffe, die in diesem Abschnitt verwendet werden.

- Anker
  - : Der Anker einer Auswahl ist der Anfangspunkt der Auswahl. Beim Erstellen einer Auswahl mit der Maus ist der Anker der Punkt im Dokument, an dem die Maustaste ursprünglich gedrückt wird. Wenn der Benutzer die Auswahl mit der Maus oder der Tastatur ändert, bewegt sich der Anker nicht.
- Bearbeitungshost
  - : Ein bearbeitbares Element (z.B. ein HTML-Element mit gesetztem [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable) oder das HTML-Kind eines Dokuments, das [`designMode`](/de/docs/Web/API/Document/designMode) aktiviert hat).
- Fokus einer Auswahl

  - : Der _Fokus_ einer Auswahl ist der Endpunkt der Auswahl. Beim Erstellen einer Auswahl mit der Maus ist der Fokus der Punkt im Dokument, an dem die Maustaste losgelassen wird. Wenn der Benutzer die Auswahl mit der Maus oder der Tastatur ändert, ist der Fokus der Teil der Auswahl, der sich bewegt.

    > [!NOTE]
    > Dies ist nicht dasselbe wie das fokussierte _Element_ des Dokuments, wie es von [`document.activeElement`](/de/docs/Web/API/Document/activeElement) zurückgegeben wird.

- Bereich

  - : Ein _Bereich_ ist ein zusammenhängender Teil eines Dokuments. Ein Bereich kann ganze Knoten sowie Teile von Knoten (wie einen Teil eines Textknotens) enthalten. Ein Benutzer wählt normalerweise nur einen einzigen Bereich gleichzeitig aus, aber es ist möglich, mehrere Bereiche auszuwählen (z.B. durch Verwendung der <kbd>Control</kbd>-Taste). Ein Bereich kann aus einer Auswahl als [`range`](/de/docs/Web/API/Range) Objekt abgerufen werden. Bereichs Objekte können auch über das DOM erstellt und programmatisch zu einer Auswahl hinzugefügt oder daraus entfernt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.getSelection`](/de/docs/Web/API/Window/getSelection), [`Document.getSelection`](/de/docs/Web/API/Document/getSelection), [`Range`](/de/docs/Web/API/Range)
- Auswahlbezogene Ereignisse: [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event) und [`selectstart`](/de/docs/Web/API/Node/selectstart_event)
- HTML-Eingaben bieten einfachere Hilfs-APIs für die Arbeit mit der Auswahl (siehe [`HTMLInputElement.setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange))
- [`Document.activeElement`](/de/docs/Web/API/Document/activeElement), [`HTMLElement.focus`](/de/docs/Web/API/HTMLElement/focus), und [`HTMLElement.blur`](/de/docs/Web/API/HTMLElement/blur)
