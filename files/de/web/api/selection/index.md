---
title: Selection
slug: Web/API/Selection
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{ApiRef("Selection API")}}

Ein **`Selection`**-Objekt repräsentiert den vom Benutzer ausgewählten Textbereich oder die aktuelle Position des Cursors. Jedes [`document`](/de/docs/Web/API/Document) ist mit einem eindeutigen Auswahlobjekt verknüpft, das mit [`document.getSelection()`](/de/docs/Web/API/Document/getSelection) oder [`window.getSelection()`](/de/docs/Web/API/Window/getSelection) abgerufen und dann geprüft und modifiziert werden kann.

Ein Benutzer kann eine Auswahl von links nach rechts (in Dokumentreihenfolge) oder von rechts nach links (gegen die Dokumentreihenfolge) vornehmen. Der **_Anker_** ist der Punkt, an dem der Benutzer die Auswahl begonnen hat, und der **_Fokus_** ist der Punkt, an dem der Benutzer die Auswahl beendet. Wenn Sie eine Auswahl mit einer Desktop-Maus treffen, wird der Anker dort platziert, wo Sie die Maustaste gedrückt haben, und der Fokus dort, wo Sie die Maustaste losgelassen haben.

> **Note:** _Anker_ und _Fokus_ sollten nicht mit den _Start_- und _End_-Positionen einer Auswahl verwechselt werden. Der Anker kann vor dem Fokus oder umgekehrt platziert werden, je nachdem, in welche Richtung Sie Ihre Auswahl getroffen haben.

## Instanz-Eigenschaften

- [`Selection.anchorNode`](/de/docs/Web/API/Selection/anchorNode) {{ReadOnlyInline}}
  - : Gibt den [`Node`](/de/docs/Web/API/Node) zurück, in dem die Auswahl beginnt. Kann `null` zurückgeben, wenn die Auswahl nie im Dokument existierte (z.B. ein iframe, das nie angeklickt wurde).
- [`Selection.anchorOffset`](/de/docs/Web/API/Selection/anchorOffset) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Versatz des Ankers der Auswahl innerhalb des `anchorNode` darstellt. Wenn `anchorNode` ein Textknoten ist, ist dies die Anzahl der Zeichen innerhalb des anchorNode vor dem Anker. Wenn `anchorNode` ein Element ist, ist dies die Anzahl der Kindknoten des `anchorNode` vor dem Anker.
- [`Selection.direction`](/de/docs/Web/API/Selection/direction) {{ReadOnlyInline}}
  - : Ein String, der die Richtung der aktuellen Auswahl beschreibt.
- [`Selection.focusNode`](/de/docs/Web/API/Selection/focusNode) {{ReadOnlyInline}}
  - : Gibt den [`Node`](/de/docs/Web/API/Node) zurück, in dem die Auswahl endet. Kann `null` zurückgeben, wenn die Auswahl nie im Dokument existierte (zum Beispiel in einem `iframe`, das nie angeklickt wurde).
- [`Selection.focusOffset`](/de/docs/Web/API/Selection/focusOffset) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Versatz des Ankers der Auswahl innerhalb des `focusNode` darstellt. Wenn `focusNode` ein Textknoten ist, ist dies die Anzahl der Zeichen innerhalb des `focusNode` vor dem Fokus. Wenn `focusNode` ein Element ist, ist dies die Anzahl der Kindknoten des `focusNode` vor dem Fokus.
- [`Selection.isCollapsed`](/de/docs/Web/API/Selection/isCollapsed) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob die Start- und Endpunkte der Auswahl an derselben Position sind.
- [`Selection.rangeCount`](/de/docs/Web/API/Selection/rangeCount) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Bereiche in der Auswahl zurück.
- [`Selection.type`](/de/docs/Web/API/Selection/type) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die den Typ der aktuellen Auswahl beschreibt.

## Instanz-Methoden

- [`Selection.addRange()`](/de/docs/Web/API/Selection/addRange)
  - : Ein [`Range`](/de/docs/Web/API/Range)-Objekt, das der Auswahl hinzugefügt wird.
- [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse)
  - : Faltet die aktuelle Auswahl zu einem einzigen Punkt zusammen.
- [`Selection.collapseToEnd()`](/de/docs/Web/API/Selection/collapseToEnd)
  - : Faltet die Auswahl zum Ende des letzten Bereichs in der Auswahl zusammen.
- [`Selection.collapseToStart()`](/de/docs/Web/API/Selection/collapseToStart)
  - : Faltet die Auswahl zum Anfang des ersten Bereichs in der Auswahl zusammen.
- [`Selection.containsNode()`](/de/docs/Web/API/Selection/containsNode)
  - : Gibt an, ob ein bestimmter Knoten Teil der Auswahl ist.
- [`Selection.deleteFromDocument()`](/de/docs/Web/API/Selection/deleteFromDocument)
  - : Löscht den Inhalt der Auswahl aus dem Dokument.
- [`Selection.empty()`](/de/docs/Web/API/Selection/empty)
  - : Entfernt alle Bereiche aus der Auswahl und setzt die Eigenschaften [`anchorNode`](/de/docs/Web/API/Selection/anchorNode) und [`focusNode`](/de/docs/Web/API/Selection/focusNode) auf `null`, sodass nichts ausgewählt ist.
- [`Selection.extend()`](/de/docs/Web/API/Selection/extend)
  - : Verschiebt den Fokus der Auswahl an einen angegebenen Punkt.
- [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) {{experimental_inline}}
  - : Gibt ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange)-Objekten zurück, die jeweils eine Auswahl darstellen, die Dom-Schatten-Grenzen überschreiten könnte.
- [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt)
  - : Gibt ein [`Range`](/de/docs/Web/API/Range)-Objekt zurück, das einen der derzeit ausgewählten Bereiche repräsentiert.
- [`Selection.modify()`](/de/docs/Web/API/Selection/modify)
  - : Ändert die aktuelle Auswahl.
- [`Selection.removeRange()`](/de/docs/Web/API/Selection/removeRange)
  - : Entfernt einen Bereich aus der Auswahl.
- [`Selection.removeAllRanges()`](/de/docs/Web/API/Selection/removeAllRanges)
  - : Entfernt alle Bereiche aus der Auswahl.
- [`Selection.selectAllChildren()`](/de/docs/Web/API/Selection/selectAllChildren)
  - : Fügt alle Kinder eines angegebenen Knotens zur Auswahl hinzu.
- [`Selection.setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent)
  - : Setzt die Auswahl zu einem Bereich, der alle oder Teile von zwei angegebenen DOM-Knoten und den dazwischenliegenden Inhalt umfasst.
- [`Selection.setPosition()`](/de/docs/Web/API/Selection/setPosition)
  - : Faltet die aktuelle Auswahl zu einem einzigen Punkt zusammen.
- [`Selection.toString()`](/de/docs/Web/API/Selection/toString)
  - : Gibt eine Zeichenfolge zurück, die derzeit vom Auswahlobjekt repräsentiert wird, d.h., den aktuell ausgewählten Text.

## Anmerkungen

### Zeichenfolgenrepräsentation einer Auswahl

Das Aufrufen der Methode [`Selection.toString()`](/de/docs/Web/API/Selection/toString) gibt den Text zurück, der sich innerhalb der Auswahl befindet, z.B.:

```js
const selObj = window.getSelection();
window.alert(selObj);
```

Beachten Sie, dass das Verwenden eines Auswahlobjekts als Argument von `window.alert` die `toString`-Methode des Objekts aufruft.

### Mehrere Bereiche in einer Auswahl

Ein Auswahlobjekt repräsentiert die von einem Benutzer ausgewählten [`Range`](/de/docs/Web/API/Range)s. Normalerweise enthält es nur einen Bereich, auf den wie folgt zugegriffen wird:

```js
const selObj = window.getSelection();
const range = selObj.getRangeAt(0);
```

- `selObj` ist ein Selection-Objekt
- `range` ist ein [`Range`](/de/docs/Web/API/Range)-Objekt

Wie in den [Anmerkungen zur Spezifikation der Selection API](https://www.w3.org/TR/selection-api/#h_note_15) beschrieben, wurde die Selection API ursprünglich von Netscape erstellt und erlaubte mehrere Bereiche (zum Beispiel, um dem Benutzer das Auswählen einer Spalte aus einem {{HTMLElement("table")}} zu ermöglichen). Andere Browser als Gecko implementierten jedoch keine Mehrfachbereiche, und die Spezifikation erfordert auch, dass die Auswahl immer einen einzelnen Bereich hat.

### Auswahl und Eingabefokus

Auswahl und Eingabefokus (angezeigt durch [`Document.activeElement`](/de/docs/Web/API/Document/activeElement)) haben eine komplexe Beziehung, die je nach Browser variiert. In plattformübergreifend kompatiblem Code ist es besser, sie separat zu behandeln.

Safari und Chrome (im Gegensatz zu Firefox) fokussieren derzeit das Element mit der Auswahl, wenn die Auswahl programmgesteuert geändert wird; Es ist möglich, dass sich dies in Zukunft ändern könnte (siehe [W3C Bug 14383](https://www.w3.org/Bugs/Public/show_bug.cgi?id=14383) und [Webkit Bug 38696](https://webkit.org/b/38696)).

### Verhalten der Selection API in Bezug auf Fokusänderungen bei Editierhost

Die Selection API hat ein gemeinsames Verhalten (d.h. zwischen Browsern geteilt), das das Fokusverhalten für _Editierhosts_ ändert, nachdem bestimmte Methoden aufgerufen werden.

Das Verhalten ist wie folgt:

1. Ein Editierhost erhält Fokus, wenn die vorherige Auswahl außerhalb davon war.
2. Eine Selection API-Methode wird aufgerufen, wodurch eine neue Auswahl getroffen wird, mit dem Auswahlbereich innerhalb des Editierhosts.
3. Der Fokus wechselt dann zum Editierhost.

> [!NOTE]
> Die Methoden der Selection API können den Fokus nur auf einen Editierhost verschieben, nicht auf andere fokussierbare Elemente (z.B. {{HTMLElement("a")}}).

Das oben beschriebene Verhalten gilt für Auswahlen, die mit folgenden Methoden vorgenommen werden:

- [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse)
- [`Selection.collapseToStart()`](/de/docs/Web/API/Selection/collapseToStart)
- [`Selection.collapseToEnd()`](/de/docs/Web/API/Selection/collapseToEnd)
- [`Selection.extend()`](/de/docs/Web/API/Selection/extend)
- [`Selection.selectAllChildren()`](/de/docs/Web/API/Selection/selectAllChildren)
- [`Selection.addRange()`](/de/docs/Web/API/Selection/addRange)
- [`Selection.setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent)

Und wenn der [`Range`](/de/docs/Web/API/Range) mithilfe folgender Methoden geändert wird:

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

Andere in diesem Abschnitt verwendete Schlüsselbegriffe.

- Anker
  - : Der Anker einer Auswahl ist der Anfangspunkt der Auswahl. Beim Erstellen einer Auswahl mit der Maus ist der Anker der Punkt im Dokument, an dem die Maustaste zuerst gedrückt wird. Wenn der Benutzer die Auswahl mit der Maus oder der Tastatur ändert, bewegt sich der Anker nicht.
- Editierhost
  - : Ein bearbeitbares Element (z.B. ein HTML-Element mit [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) gesetzt oder das HTML-Kind eines Dokuments, das [`designMode`](/de/docs/Web/API/Document/designMode) aktiviert hat).
- Auswahlfokus

  - : Der _Fokus_ einer Auswahl ist der Endpunkt der Auswahl. Beim Erstellen einer Auswahl mit der Maus ist der Fokus der Punkt im Dokument, an dem die Maustaste losgelassen wird. Wenn der Benutzer die Auswahl mit der Maus oder der Tastatur ändert, ist der Fokus das Ende der Auswahl, das sich bewegt.

    > [!NOTE]
    > Dies ist nicht dasselbe wie das fokussierte _Element_ des Dokuments, wie es von [`document.activeElement`](/de/docs/Web/API/Document/activeElement) zurückgegeben wird.

- Bereich

  - : Ein _Bereich_ ist ein zusammenhängender Teil eines Dokuments. Ein Bereich kann ganze Knoten sowie Teile von Knoten enthalten (wie z.B. einen Teil eines Textknotens). Ein Benutzer wählt normalerweise nur einen Bereich gleichzeitig aus, aber es ist möglich, dass ein Benutzer mehrere Bereiche auswählt (z.B. durch Drücken der <kbd>Strg</kbd>-Taste). Ein Bereich kann aus einer Auswahl als [`range`](/de/docs/Web/API/Range) Objekt abgerufen werden. Bereichsobjekte können auch über das DOM erstellt und programmgesteuert zu einer Auswahl hinzugefügt oder daraus entfernt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.getSelection`](/de/docs/Web/API/Window/getSelection), [`Document.getSelection`](/de/docs/Web/API/Document/getSelection), [`Range`](/de/docs/Web/API/Range)
- Auswahlbezogene Ereignisse: [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event) und [`selectstart`](/de/docs/Web/API/Node/selectstart_event)
- HTML-Eingaben bieten einfachere Hilfs-APIs für die Arbeit mit Auswahlen (siehe [`HTMLInputElement.setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange))
- [`Document.activeElement`](/de/docs/Web/API/Document/activeElement), [`HTMLElement.focus`](/de/docs/Web/API/HTMLElement/focus), und [`HTMLElement.blur`](/de/docs/Web/API/HTMLElement/blur)
