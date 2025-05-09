---
title: Auswahl
slug: Web/API/Selection
l10n:
  sourceCommit: a61be259435257328a25c462cb0f42bc91981a6f
---

{{ApiRef("Selection API")}}

Ein **`Selection`** Objekt repräsentiert den Textbereich, der vom Benutzer ausgewählt wurde, oder die aktuelle Position des Cursors. Jedes [`document`](/de/docs/Web/API/Document) ist mit einem eindeutigen Auswahlobjekt verknüpft, das mit [`document.getSelection()`](/de/docs/Web/API/Document/getSelection) oder [`window.getSelection()`](/de/docs/Web/API/Window/getSelection) abgerufen und dann untersucht und geändert werden kann.

Ein Benutzer kann eine Auswahl von links nach rechts (in Dokumentreihenfolge) oder von rechts nach links (entgegen der Dokumentreihenfolge) vornehmen. Der **_Anker_** ist der Punkt, an dem der Benutzer die Auswahl begann, und der **_Fokus_** ist der Punkt, an dem der Benutzer die Auswahl beendet. Wenn Sie eine Auswahl mit einer Desktop-Maus treffen, wird der Anker an der Stelle platziert, an der Sie die Maustaste gedrückt haben, und der Fokus an der Stelle, an der Sie die Maustaste losgelassen haben.

> **Hinweis:** _Anker_ und _Fokus_ sollten nicht mit dem _Start_ und _Ende_ einer Auswahl verwechselt werden. Der Anker kann vor dem Fokus oder umgekehrt platziert werden, je nachdem, in welche Richtung Sie Ihre Auswahl getroffen haben.

## Instanzeigenschaften

- [`Selection.anchorNode`](/de/docs/Web/API/Selection/anchorNode) {{ReadOnlyInline}}
  - : Gibt den [`Node`](/de/docs/Web/API/Node) zurück, in dem die Auswahl beginnt. Kann `null` zurückgeben, wenn keine Auswahl im Dokument vorhanden war (z. B. ein iframe, das nie angeklickt wurde).
- [`Selection.anchorOffset`](/de/docs/Web/API/Selection/anchorOffset) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Versatz des Ankers der Auswahl innerhalb des `anchorNode` repräsentiert. Wenn `anchorNode` ein Textknoten ist, entspricht dies der Anzahl der Zeichen innerhalb des `anchorNode`, die dem Anker vorausgehen. Wenn `anchorNode` ein Element ist, entspricht dies der Anzahl der Kindknoten des `anchorNode`, die dem Anker vorausgehen.
- [`Selection.direction`](/de/docs/Web/API/Selection/direction) {{ReadOnlyInline}}
  - : Ein String, der die Richtung der aktuellen Auswahl beschreibt.
- [`Selection.focusNode`](/de/docs/Web/API/Selection/focusNode) {{ReadOnlyInline}}
  - : Gibt den [`Node`](/de/docs/Web/API/Node) zurück, in dem die Auswahl endet. Kann `null` zurückgeben, wenn keine Auswahl im Dokument vorhanden war (zum Beispiel in einem `iframe`, das nie angeklickt wurde).
- [`Selection.focusOffset`](/de/docs/Web/API/Selection/focusOffset) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Versatz des Fokus der Auswahl innerhalb des `focusNode` repräsentiert. Wenn `focusNode` ein Textknoten ist, entspricht dies der Anzahl der Zeichen innerhalb des `focusNode`, die dem Fokus vorausgehen. Wenn `focusNode` ein Element ist, entspricht dies der Anzahl der Kindknoten des `focusNode`, die dem Fokus vorausgehen.
- [`Selection.isCollapsed`](/de/docs/Web/API/Selection/isCollapsed) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der Start- und Endpunkt der Auswahl an derselben Position liegen.
- [`Selection.rangeCount`](/de/docs/Web/API/Selection/rangeCount) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Bereiche (Ranges) in der Auswahl zurück.
- [`Selection.type`](/de/docs/Web/API/Selection/type) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Typ der aktuellen Auswahl beschreibt.

## Instanzmethoden

- [`Selection.addRange()`](/de/docs/Web/API/Selection/addRange)
  - : Ein [`Range`](/de/docs/Web/API/Range) Objekt, das zur Auswahl hinzugefügt wird.
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
  - : Entfernt alle Bereiche aus der Auswahl, sodass die Eigenschaften [`anchorNode`](/de/docs/Web/API/Selection/anchorNode) und [`focusNode`](/de/docs/Web/API/Selection/focusNode) gleich `null` sind und nichts ausgewählt ist.
- [`Selection.extend()`](/de/docs/Web/API/Selection/extend)
  - : Verschiebt den Fokus der Auswahl zu einem angegebenen Punkt.
- [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges)
  - : Gibt ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange) Objekten zurück, die jeweils eine Auswahl repräsentieren, die möglicherweise Schatten-DOM-Grenzen überschreitet.
- [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt)
  - : Gibt ein [`Range`](/de/docs/Web/API/Range) Objekt zurück, das einen der aktuell ausgewählten Bereiche repräsentiert.
- [`Selection.modify()`](/de/docs/Web/API/Selection/modify)
  - : Ändert die aktuelle Auswahl.
- [`Selection.removeRange()`](/de/docs/Web/API/Selection/removeRange)
  - : Entfernt einen Bereich aus der Auswahl.
- [`Selection.removeAllRanges()`](/de/docs/Web/API/Selection/removeAllRanges)
  - : Entfernt alle Bereiche aus der Auswahl.
- [`Selection.selectAllChildren()`](/de/docs/Web/API/Selection/selectAllChildren)
  - : Fügt alle Kinder eines angegebenen Knotens zur Auswahl hinzu.
- [`Selection.setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent)
  - : Setzt die Auswahl auf einen Bereich, der alle oder Teile von zwei angegebenen DOM-Knoten sowie jeglichen dazwischenliegenden Inhalt einschließt.
- [`Selection.setPosition()`](/de/docs/Web/API/Selection/setPosition)
  - : Reduziert die aktuelle Auswahl auf einen einzelnen Punkt.
- [`Selection.toString()`](/de/docs/Web/API/Selection/toString)
  - : Gibt einen String zurück, der derzeit vom Auswahlobjekt dargestellt wird, d.h. den derzeit ausgewählten Text.

## Hinweise

### String-Darstellung einer Auswahl

Der Aufruf der Methode [`Selection.toString()`](/de/docs/Web/API/Selection/toString) gibt den Text zurück, der in der Auswahl enthalten ist, z.B.:

```js
const selObj = window.getSelection();
window.alert(selObj);
```

Beachten Sie, dass die Verwendung eines Auswahlobjekts als Argument für `window.alert` die `toString`-Methode des Objekts aufruft.

### Mehrere Bereiche in einer Auswahl

Ein Auswahlobjekt repräsentiert die vom Benutzer ausgewählten [`Range`](/de/docs/Web/API/Range)s. Typischerweise hält es nur einen Bereich, der wie folgt abgerufen wird:

```js
const selObj = window.getSelection();
const range = selObj.getRangeAt(0);
```

- `selObj` ist ein Selection-Objekt
- `range` ist ein [`Range`](/de/docs/Web/API/Range) Objekt

Wie in der [Selection API-Spezifikation](https://www.w3.org/TR/selection-api/#h_note_15) angegeben, wurde die Selection API ursprünglich von Netscape erstellt und erlaubte mehrere Bereiche (z.B. um einem Benutzer zu ermöglichen, eine Spalte aus einem {{HTMLElement("table")}} auszuwählen). Jedoch haben andere Browser als Gecko keine Unterstützung für mehrere Bereiche implementiert, und die Spezifikation erfordert auch, dass die Auswahl immer nur einen einzelnen Bereich hat.

### Auswahl und Eingabefokus

Auswahl und Eingabefokus (angezeigt durch [`Document.activeElement`](/de/docs/Web/API/Document/activeElement)) haben eine komplexe Beziehung, die je nach Browser variiert. In plattformübergreifendem Code ist es besser, sie separat zu behandeln.

Safari und Chrome (im Gegensatz zu Firefox) fokussieren derzeit das Element, das die Auswahl enthält, wenn die Auswahl programmgesteuert geändert wird; es ist möglich, dass sich dies in der Zukunft ändern könnte (siehe [W3C bug 14383](https://www.w3.org/Bugs/Public/show_bug.cgi?id=14383) und [WebKit bug 38696](https://webkit.org/b/38696)).

### Verhalten der Selection API in Bezug auf Fokusänderungen des Bearbeitungshosts

Die Selection API hat ein gemeinsames Verhalten (d.h. zwischen Browsern geteilt), das steuert, wie sich das Fokusverhalten bei _Bearbeitungshosts_ ändert, nachdem bestimmte Methoden aufgerufen werden.

Das Verhalten ist wie folgt:

1. Ein Bearbeitungshost erhält den Fokus, wenn die vorherige Auswahl außerhalb davon war.
2. Eine Selection API-Methode wird aufgerufen, wodurch eine neue Auswahl innerhalb des Bearbeitungshosts getroffen wird.
3. Der Fokus wechselt dann zum Bearbeitungshost.

> [!NOTE]
> Die Selection API-Methoden können den Fokus nur auf einen Bearbeitungshost verlagern, nicht auf andere fokussierbare Elemente (z.B. {{HTMLElement("a")}}).

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

Andere wichtige Begriffe, die in diesem Abschnitt verwendet werden.

- Anker
  - : Der Anker einer Auswahl ist der Ausgangspunkt der Auswahl. Beim Treffen einer Auswahl mit der Maus ist der Anker der Punkt im Dokument, an dem die Maustaste zunächst gedrückt wird. Wenn der Benutzer die Auswahl mit der Maus oder der Tastatur ändert, bewegt sich der Anker nicht.
- Bearbeitungshost
  - : Ein bearbeitbares Element (z.B. ein HTML-Element mit der Eigenschaft [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) oder das HTML-Kind eines Dokuments, das [`designMode`](/de/docs/Web/API/Document/designMode) aktiviert hat).
- Fokus einer Auswahl

  - : Der _Fokus_ einer Auswahl ist der Endpunkt der Auswahl. Beim Treffen einer Auswahl mit der Maus ist der Fokus der Punkt im Dokument, an dem die Maustaste losgelassen wird. Wenn der Benutzer die Auswahl mit der Maus oder der Tastatur ändert, ist der Fokus das Ende der Auswahl, das sich bewegt.

    > [!NOTE]
    > Dies ist nicht dasselbe wie das fokussierte _Element_ des Dokuments, wie es von [`document.activeElement`](/de/docs/Web/API/Document/activeElement) zurückgegeben wird.

- Bereich

  - : Ein _Bereich_ ist ein zusammenhängender Teil eines Dokuments. Ein Bereich kann ganze Knoten sowie Teile von Knoten (z. B. einen Teil eines Textknotens) enthalten. Ein Benutzer wird normalerweise nur einen einzelnen Bereich gleichzeitig auswählen, aber es ist möglich, dass ein Benutzer mehrere Bereiche auswählt (z.B. durch Verwendung der <kbd>Control</kbd>-Taste). Ein Bereich kann aus einer Auswahl als [`range`](/de/docs/Web/API/Range) Objekt abgerufen werden. Bereiche können auch über das DOM erstellt und programmatisch zu einer Auswahl hinzugefügt oder daraus entfernt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.getSelection`](/de/docs/Web/API/Window/getSelection), [`Document.getSelection`](/de/docs/Web/API/Document/getSelection), [`Range`](/de/docs/Web/API/Range)
- Auswahlbezogene Ereignisse: [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event) und [`selectstart`](/de/docs/Web/API/Node/selectstart_event)
- HTML-Eingaben bieten einfachere Hilfs-APIs zur Arbeit mit der Auswahl (siehe [`HTMLInputElement.setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange))
- [`Document.activeElement`](/de/docs/Web/API/Document/activeElement), [`HTMLElement.focus`](/de/docs/Web/API/HTMLElement/focus) und [`HTMLElement.blur`](/de/docs/Web/API/HTMLElement/blur)
