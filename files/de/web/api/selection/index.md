---
title: Selection
slug: Web/API/Selection
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("Selection API")}}

Ein **`Selection`**-Objekt repräsentiert den Bereich des vom Benutzer ausgewählten Texts oder die aktuelle Position des Cursors. Jedes [`document`](/de/docs/Web/API/Document) ist mit einem eindeutigen Auswahlobjekt verknüpft, das durch [`document.getSelection()`](/de/docs/Web/API/Document/getSelection) oder [`window.getSelection()`](/de/docs/Web/API/Window/getSelection) abgerufen und dann untersucht und geändert werden kann.

Ein Benutzer kann eine Auswahl von links nach rechts (in Dokumentreihenfolge) oder von rechts nach links (umgekehrte Dokumentreihenfolge) vornehmen. Der **_Anker_** ist der Punkt, an dem der Benutzer die Auswahl begonnen hat, und der **_Fokus_** ist der Punkt, an dem der Benutzer die Auswahl beendet. Wenn Sie eine Auswahl mit einer Desktop-Maus treffen, wird der Anker dort platziert, wo Sie die Maustaste gedrückt haben, und der Fokus dort, wo Sie die Maustaste losgelassen haben.

> **Hinweis:** _Anker_ und _Fokus_ sollten nicht mit den _Anfangs- und Endpositionen_ einer Auswahl verwechselt werden. Der Anker kann vor dem Fokus oder umgekehrt platziert werden, abhängig von der Richtung, in der Sie Ihre Auswahl getroffen haben.

## Instanz-Eigenschaften

- [`Selection.anchorNode`](/de/docs/Web/API/Selection/anchorNode) {{ReadOnlyInline}}
  - : Gibt den [`Node`](/de/docs/Web/API/Node) zurück, in dem die Auswahl beginnt. Kann `null` zurückgeben, wenn nie eine Auswahl im Dokument vorhanden war (z.B. ein iframe, auf das nie geklickt wurde).
- [`Selection.anchorOffset`](/de/docs/Web/API/Selection/anchorOffset) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Versatz des Ankers der Auswahl innerhalb des `anchorNode` angibt. Wenn `anchorNode` ein Textknoten ist, ist dies die Anzahl der Zeichen innerhalb von `anchorNode` vor dem Anker. Wenn `anchorNode` ein Element ist, ist dies die Anzahl der Kindknoten des `anchorNode` vor dem Anker.
- [`Selection.direction`](/de/docs/Web/API/Selection/direction) {{ReadOnlyInline}}
  - : Ein String, der die Richtung der aktuellen Auswahl beschreibt.
- [`Selection.focusNode`](/de/docs/Web/API/Selection/focusNode) {{ReadOnlyInline}}
  - : Gibt den [`Node`](/de/docs/Web/API/Node) zurück, in dem die Auswahl endet. Kann `null` zurückgeben, wenn nie eine Auswahl im Dokument vorhanden war (zum Beispiel in einem `iframe`, das nie angeklickt wurde).
- [`Selection.focusOffset`](/de/docs/Web/API/Selection/focusOffset) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Versatz des Fokus der Auswahl innerhalb des `focusNode` angibt. Wenn `focusNode` ein Textknoten ist, ist dies die Anzahl der Zeichen innerhalb von `focusNode` vor dem Fokus. Wenn `focusNode` ein Element ist, ist dies die Anzahl der Kindknoten des `focusNode` vor dem Fokus.
- [`Selection.isCollapsed`](/de/docs/Web/API/Selection/isCollapsed) {{ReadOnlyInline}}
  - : Gibt einen Boolean-Wert zurück, der angibt, ob die Start- und Endpunkte der Auswahl an derselben Position sind.
- [`Selection.rangeCount`](/de/docs/Web/API/Selection/rangeCount) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Bereiche in der Auswahl zurück.
- [`Selection.type`](/de/docs/Web/API/Selection/type) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Typ der aktuellen Auswahl beschreibt.

## Instanz-Methoden

- [`Selection.addRange()`](/de/docs/Web/API/Selection/addRange)
  - : Ein [`Range`](/de/docs/Web/API/Range)-Objekt, das zur Auswahl hinzugefügt wird.
- [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse)
  - : Bricht die aktuelle Auswahl auf einen einzigen Punkt zusammen.
- [`Selection.collapseToEnd()`](/de/docs/Web/API/Selection/collapseToEnd)
  - : Bricht die Auswahl am Ende des letzten Bereichs in der Auswahl zusammen.
- [`Selection.collapseToStart()`](/de/docs/Web/API/Selection/collapseToStart)
  - : Bricht die Auswahl am Anfang des ersten Bereichs in der Auswahl zusammen.
- [`Selection.containsNode()`](/de/docs/Web/API/Selection/containsNode)
  - : Gibt an, ob ein bestimmter Knoten Teil der Auswahl ist.
- [`Selection.deleteFromDocument()`](/de/docs/Web/API/Selection/deleteFromDocument)
  - : Löscht den Inhalt der Auswahl aus dem Dokument.
- [`Selection.empty()`](/de/docs/Web/API/Selection/empty)
  - : Entfernt alle Bereiche aus der Auswahl, sodass die [`anchorNode`](/de/docs/Web/API/Selection/anchorNode) und [`focusNode`](/de/docs/Web/API/Selection/focusNode)-Eigenschaften gleich `null` sind und nichts ausgewählt ist.
- [`Selection.extend()`](/de/docs/Web/API/Selection/extend)
  - : Verschiebt den Fokus der Auswahl an einen angegebenen Punkt.
- [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) {{experimental_inline}}
  - : Gibt ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange)-Objekten zurück, von denen jedes eine Auswahl darstellt, die DOM-Grenzen überschreiten könnte.
- [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt)
  - : Gibt ein [`Range`](/de/docs/Web/API/Range)-Objekt zurück, das einen der derzeit ausgewählten Bereiche repräsentiert.
- [`Selection.modify()`](/de/docs/Web/API/Selection/modify)
  - : Ändert die aktuelle Auswahl.
- [`Selection.removeRange()`](/de/docs/Web/API/Selection/removeRange)
  - : Entfernt einen Bereich aus der Auswahl.
- [`Selection.removeAllRanges()`](/de/docs/Web/API/Selection/removeAllRanges)
  - : Entfernt alle Bereiche aus der Auswahl.
- [`Selection.selectAllChildren()`](/de/docs/Web/API/Selection/selectAllChildren)
  - : Fügt alle Kinder des angegebenen Knotens zur Auswahl hinzu.
- [`Selection.setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent)
  - : Setzt die Auswahl auf einen Bereich, der alle oder Teile von zwei angegebenen DOM-Knoten und alle dazwischen liegenden Inhalte umfasst.
- [`Selection.setPosition()`](/de/docs/Web/API/Selection/setPosition)
  - : Bricht die aktuelle Auswahl auf einen einzigen Punkt zusammen.
- [`Selection.toString()`](/de/docs/Web/API/Selection/toString)
  - : Gibt einen String zurück, der derzeit vom Auswahlobjekt repräsentiert wird, d.h. den aktuell ausgewählten Text.

## Anmerkungen

### String-Darstellung einer Auswahl

Das Aufrufen der Methode [`Selection.toString()`](/de/docs/Web/API/Selection/toString) gibt den Text zurück, der innerhalb der Auswahl enthalten ist, z.B.:

```js
const selObj = window.getSelection();
window.alert(selObj);
```

Beachten Sie, dass das Verwenden eines Auswahlobjekts als Argument für `window.alert` die `toString`-Methode des Objekts aufrufen wird.

### Mehrere Bereiche in einer Auswahl

Ein Auswahlobjekt repräsentiert die vom Benutzer ausgewählten [`Range`](/de/docs/Web/API/Range)s. In der Regel hält es nur einen Bereich, der wie folgt angesprochen wird:

```js
const selObj = window.getSelection();
const range = selObj.getRangeAt(0);
```

- `selObj` ist ein Selection-Objekt
- `range` ist ein [`Range`](/de/docs/Web/API/Range)-Objekt

Wie im [Selection API specification notes](https://www.w3.org/TR/selection-api/#h_note_15) festgehalten, wurde die Selection API ursprünglich von Netscape erstellt und erlaubte mehrere Bereiche (zum Beispiel, um dem Benutzer zu erlauben, eine Spalte aus einem {{HTMLElement("table")}} auszuwählen). Andere Browser als Gecko haben jedoch keine Mehrfachbereichsunterstützung implementiert, und die Spezifikation verlangt auch, dass eine Auswahl immer nur einen Bereich haben sollte.

### Auswahl und Eingabefokus

Auswahl und Eingabefokus (angezeigt durch [`Document.activeElement`](/de/docs/Web/API/Document/activeElement)) haben eine komplexe Beziehung, die je nach Browser variiert. In browserübergreifendem Code ist es besser, sie getrennt zu behandeln.

Safari und Chrome (im Gegensatz zu Firefox) fokussieren derzeit das Element, das die Auswahl enthält, wenn die Auswahl programmgesteuert geändert wird; es ist möglich, dass sich dies in Zukunft ändern wird (siehe [W3C bug 14383](https://www.w3.org/Bugs/Public/show_bug.cgi?id=14383) und [WebKit bug 38696](https://webkit.org/b/38696)).

### Verhalten der Selection API in Bezug auf Änderungen des Bearbeitungsfokus

Die Selection API hat ein gemeinsames Verhalten (d.h. von Browsern geteilt), das regelt, wie sich der Fokus für _Bearbeitungs-Hosts_ nach dem Aufruf bestimmter Methoden ändert.

Das Verhalten ist wie folgt:

1. Ein Bearbeitungshost erhält den Fokus, wenn die vorherige Auswahl außerhalb davon war.
2. Eine Selection API-Methode wird aufgerufen, wodurch eine neue Auswahl mit dem Auswahlbereich innerhalb des Bearbeitungshosts getroffen wird.
3. Der Fokus bewegt sich dann zum Bearbeitungshost.

> [!NOTE]
> Die Methoden der Selection API können den Fokus nur auf einen Bearbeitungshost verschieben, nicht auf andere fokussierbare Elemente (z.B. {{HTMLElement("a")}}).

Das oben beschriebene Verhalten gilt für Auswahlen, die mit den folgenden Methoden getroffen werden:

- [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse)
- [`Selection.collapseToStart()`](/de/docs/Web/API/Selection/collapseToStart)
- [`Selection.collapseToEnd()`](/de/docs/Web/API/Selection/collapseToEnd)
- [`Selection.extend()`](/de/docs/Web/API/Selection/extend)
- [`Selection.selectAllChildren()`](/de/docs/Web/API/Selection/selectAllChildren)
- [`Selection.addRange()`](/de/docs/Web/API/Selection/addRange)
- [`Selection.setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent)

Und wenn der [`Range`](/de/docs/Web/API/Range) mit den folgenden Methoden modifiziert wird:

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
  - : Der Anker einer Auswahl ist der Anfangspunkt der Auswahl. Wenn Sie eine Auswahl mit der Maus treffen, ist der Anker der Punkt im Dokument, an dem die Maustaste zuerst gedrückt wird. Wenn der Benutzer die Auswahl mithilfe der Maus oder der Tastatur ändert, bewegt sich der Anker nicht.
- Bearbeitungshost
  - : Ein bearbeitbares Element (z.B. ein HTML-Element mit [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) gesetzt oder das HTML-Kind eines Dokuments, dessen [`designMode`](/de/docs/Web/API/Document/designMode) aktiviert ist).
- Fokus einer Auswahl

  - : Der _Fokus_ einer Auswahl ist der Endpunkt der Auswahl. Wenn Sie eine Auswahl mit der Maus treffen, ist der Fokus der Punkt im Dokument, an dem die Maustaste losgelassen wird. Wenn der Benutzer die Auswahl mithilfe der Maus oder der Tastatur ändert, ist der Fokus das Ende der Auswahl, das sich bewegt.

    > [!NOTE]
    > Dies ist nicht dasselbe wie das fokussierte _Element_ des Dokuments, das durch [`document.activeElement`](/de/docs/Web/API/Document/activeElement) zurückgegeben wird.

- Bereich

  - : Ein _Bereich_ ist ein zusammenhängender Teil eines Dokuments. Ein Bereich kann ganze Knoten sowie Teile von Knoten (wie z.B. einen Teil eines Textknotens) enthalten. Ein Benutzer wählt normalerweise nur einen einzelnen Bereich auf einmal aus, aber es ist möglich, dass ein Benutzer mehrere Bereiche auswählt (z.B. durch die Verwendung der <kbd>Strg</kbd>-Taste). Ein Bereich kann aus einer Auswahl als [`range`](/de/docs/Web/API/Range)-Objekt abgerufen werden. Bereichsobjekte können auch über das DOM erstellt und programmgesteuert zu einer Auswahl hinzugefügt oder aus dieser entfernt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.getSelection`](/de/docs/Web/API/Window/getSelection), [`Document.getSelection`](/de/docs/Web/API/Document/getSelection), [`Range`](/de/docs/Web/API/Range)
- Auswahlbezogene Ereignisse: [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event) und [`selectstart`](/de/docs/Web/API/Node/selectstart_event)
- HTML-Eingaben bieten einfachere Hilfe-APIs für die Arbeit mit Auswahl (siehe [`HTMLInputElement.setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange))
- [`Document.activeElement`](/de/docs/Web/API/Document/activeElement), [`HTMLElement.focus`](/de/docs/Web/API/HTMLElement/focus) und [`HTMLElement.blur`](/de/docs/Web/API/HTMLElement/blur)
