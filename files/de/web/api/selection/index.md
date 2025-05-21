---
title: Auswahl
slug: Web/API/Selection
l10n:
  sourceCommit: 23de2280422ab52460507ff831915a08bb043d8e
---

{{ApiRef("Selection API")}}

Ein **`Selection`**-Objekt repräsentiert den vom Benutzer ausgewählten Textbereich oder die aktuelle Position der Einfügemarke. Jedes [`document`](/de/docs/Web/API/Document) ist mit einem eindeutigen Auswahlobjekt verknüpft, das durch [`document.getSelection()`](/de/docs/Web/API/Document/getSelection) oder [`window.getSelection()`](/de/docs/Web/API/Window/getSelection) abgerufen und dann untersucht und modifiziert werden kann.

Ein Benutzer kann eine Auswahl von links nach rechts (in Dokumentenreihenfolge) oder von rechts nach links (entgegen der Dokumentenreihenfolge) vornehmen. Der **_Anker_** ist der Punkt, an dem der Benutzer die Auswahl begonnen hat, und der **_Fokus_** ist der Punkt, an dem der Benutzer die Auswahl beendet. Wenn Sie mit einer Desktop-Maus eine Auswahl treffen, wird der Anker an der Stelle platziert, an der Sie die Maustaste gedrückt haben, und der Fokus an der Stelle, an der Sie die Maustaste losgelassen haben.

> **Note:** _Anker_ und _Fokus_ sollten nicht mit den _Start_- und _End_-Positionen einer Auswahl verwechselt werden. Der Anker kann vor dem Fokus oder umgekehrt platziert werden, abhängig von der Richtung, in der Sie Ihre Auswahl getroffen haben.

## Instanzeigenschaften

- [`Selection.anchorNode`](/de/docs/Web/API/Selection/anchorNode) {{ReadOnlyInline}}
  - : Gibt den [`Node`](/de/docs/Web/API/Node) zurück, in dem die Auswahl beginnt. Kann `null` zurückgeben, wenn die Auswahl nie im Dokument vorhanden war (z. B. ein iframe, das nie angeklickt wurde).
- [`Selection.anchorOffset`](/de/docs/Web/API/Selection/anchorOffset) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Versatz des Ankers der Auswahl innerhalb des `anchorNode` darstellt. Wenn `anchorNode` ein Textknoten ist, ist dies die Anzahl der Zeichen innerhalb des AnchorNode, die dem Anker vorausgehen. Wenn `anchorNode` ein Element ist, ist dies die Anzahl der Kindknoten des `anchorNode`, die dem Anker vorausgehen.
- [`Selection.direction`](/de/docs/Web/API/Selection/direction) {{ReadOnlyInline}}
  - : Ein Zeichenfolgenwert, der die Richtung der aktuellen Auswahl beschreibt.
- [`Selection.focusNode`](/de/docs/Web/API/Selection/focusNode) {{ReadOnlyInline}}
  - : Gibt den [`Node`](/de/docs/Web/API/Node) zurück, in dem die Auswahl endet. Kann `null` zurückgeben, wenn die Auswahl nie im Dokument vorhanden war (z. B. ein iframe, das nie angeklickt wurde).
- [`Selection.focusOffset`](/de/docs/Web/API/Selection/focusOffset) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Versatz des Fokus der Auswahl innerhalb des `focusNode` darstellt. Wenn `focusNode` ein Textknoten ist, ist dies die Anzahl der Zeichen innerhalb des `focusNode`, die dem Fokus vorausgehen. Wenn `focusNode` ein Element ist, ist dies die Anzahl der Kindknoten des `focusNode`, die dem Fokus vorausgehen.
- [`Selection.isCollapsed`](/de/docs/Web/API/Selection/isCollapsed) {{ReadOnlyInline}}
  - : Gibt einen Booleschen Wert zurück, der angibt, ob die Start- und Endpunkte der Auswahl an der gleichen Position sind.
- [`Selection.rangeCount`](/de/docs/Web/API/Selection/rangeCount) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Bereiche in der Auswahl zurück.
- [`Selection.type`](/de/docs/Web/API/Selection/type) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die die Art der aktuellen Auswahl beschreibt.

## Instanzmethoden

- [`Selection.addRange()`](/de/docs/Web/API/Selection/addRange)
  - : Ein [`Range`](/de/docs/Web/API/Range)-Objekt, das der Auswahl hinzugefügt wird.
- [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse)
  - : Kollabiert die aktuelle Auswahl zu einem einzigen Punkt.
- [`Selection.collapseToEnd()`](/de/docs/Web/API/Selection/collapseToEnd)
  - : Kollabiert die Auswahl zum Ende des letzten Bereichs in der Auswahl.
- [`Selection.collapseToStart()`](/de/docs/Web/API/Selection/collapseToStart)
  - : Kollabiert die Auswahl zum Anfang des ersten Bereichs in der Auswahl.
- [`Selection.containsNode()`](/de/docs/Web/API/Selection/containsNode)
  - : Gibt an, ob ein bestimmter Knoten Teil der Auswahl ist.
- [`Selection.deleteFromDocument()`](/de/docs/Web/API/Selection/deleteFromDocument)
  - : Löscht den Inhalt der Auswahl aus dem Dokument.
- [`Selection.empty()`](/de/docs/Web/API/Selection/empty)
  - : Entfernt alle Bereiche aus der Auswahl und setzt die Eigenschaften [`anchorNode`](/de/docs/Web/API/Selection/anchorNode) und [`focusNode`](/de/docs/Web/API/Selection/focusNode) auf `null`, sodass nichts ausgewählt ist.
- [`Selection.extend()`](/de/docs/Web/API/Selection/extend)
  - : Bewegt den Fokus der Auswahl zu einem bestimmten Punkt.
- [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges)
  - : Gibt ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange)-Objekten zurück, von denen jedes eine Auswahl darstellt, die auch DOM-Schatten-Grenzen überschreiten kann.
- [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt)
  - : Gibt ein [`Range`](/de/docs/Web/API/Range)-Objekt zurück, das einen der aktuell ausgewählten Bereiche repräsentiert.
- [`Selection.modify()`](/de/docs/Web/API/Selection/modify)
  - : Ändert die aktuelle Auswahl.
- [`Selection.removeRange()`](/de/docs/Web/API/Selection/removeRange)
  - : Entfernt einen Bereich aus der Auswahl.
- [`Selection.removeAllRanges()`](/de/docs/Web/API/Selection/removeAllRanges)
  - : Entfernt alle Bereiche aus der Auswahl.
- [`Selection.selectAllChildren()`](/de/docs/Web/API/Selection/selectAllChildren)
  - : Fügt der Auswahl alle Kinder des angegebenen Knotens hinzu.
- [`Selection.setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent)
  - : Setzt die Auswahl auf einen Bereich, der alle oder Teile von zwei angegebenen DOM-Knoten sowie alle dazwischen liegenden Inhalte umfasst.
- [`Selection.setPosition()`](/de/docs/Web/API/Selection/setPosition)
  - : Kollabiert die aktuelle Auswahl zu einem einzigen Punkt.
- [`Selection.toString()`](/de/docs/Web/API/Selection/toString)
  - : Gibt eine Zeichenfolge zurück, die derzeit vom Auswahlobjekt repräsentiert wird, also den aktuell ausgewählten Text.

## Hinweise

### Zeichenfolgenrepräsentation einer Auswahl

Das Aufrufen der [`Selection.toString()`](/de/docs/Web/API/Selection/toString)-Methode gibt den Text zurück, der sich innerhalb der Auswahl befindet, z.B.:

```js
const selObj = window.getSelection();
window.alert(selObj);
```

Beachten Sie, dass die Verwendung eines Auswahlobjekts als Argument für `window.alert` die `toString`-Methode des Objekts aufruft.

### Mehrere Bereiche in einer Auswahl

Ein Auswahlobjekt repräsentiert die [`Range`](/de/docs/Web/API/Range)s, die der Benutzer ausgewählt hat. In der Regel enthält es nur einen Bereich, der wie folgt abgerufen werden kann:

```js
const selObj = window.getSelection();
const range = selObj.getRangeAt(0);
```

- `selObj` ist ein Selection-Objekt
- `range` ist ein [`Range`](/de/docs/Web/API/Range)-Objekt

Wie in den [Speziellen Anmerkungen zur Selection API](https://www.w3.org/TR/selection-api/#h_note_15) angemerkt, wurde die Selection API ursprünglich von Netscape erstellt und erlaubte mehrere Bereiche (zum Beispiel, um dem Benutzer zu ermöglichen, eine Spalte aus einer {{HTMLElement("table")}} auszuwählen). Allerdings haben andere Browser als Gecko keine mehrfachen Bereiche implementiert, und die Spezifikation verlangt auch, dass die Auswahl immer nur einen Bereich haben soll.

### Auswahl und Eingabefokus

Auswahl und Eingabefokus (angezeigt durch [`Document.activeElement`](/de/docs/Web/API/Document/activeElement)) haben eine komplexe Beziehung, die je nach Browser variiert. In browserübergreifendem Code ist es besser, sie separat zu behandeln.

Safari und Chrome (im Gegensatz zu Firefox) fokussieren derzeit das Element, das die Auswahl enthält, wenn die Auswahl programmgesteuert geändert wird; es ist möglich, dass sich dies in Zukunft ändern könnte (siehe [W3C-Fehler 14383](https://www.w3.org/Bugs/Public/show_bug.cgi?id=14383) und [WebKit-Fehler 38696](https://webkit.org/b/38696)).

### Verhalten der Selection API in Bezug auf Fokusänderungen bei Editierhosts

Die Selection API weist ein gemeinsames Verhalten auf (d.h. zwischen den Browsern geteilt), das bestimmt, wie sich das Fokusverhalten für _Editierhosts_ nach dem Aufrufen bestimmter Methoden ändert.

Das Verhalten ist wie folgt:

1. Ein Editierhost erhält den Fokus, wenn die vorherige Auswahl außerhalb davon war.
2. Eine Selection-API-Methode wird aufgerufen, wodurch eine neue Auswahl mit dem Auswahlbereich innerhalb des Editierhosts erstellt wird.
3. Der Fokus bewegt sich dann zum Editierhost.

> [!NOTE]
> Die Selection-API-Methoden können den Fokus nur auf einen Editierhost verschieben, nicht auf andere fokussierbare Elemente (z.B. {{HTMLElement("a")}}).

Das oben genannte Verhalten gilt für Auswahlen, die mit den folgenden Methoden getroffen werden:

- [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse)
- [`Selection.collapseToStart()`](/de/docs/Web/API/Selection/collapseToStart)
- [`Selection.collapseToEnd()`](/de/docs/Web/API/Selection/collapseToEnd)
- [`Selection.extend()`](/de/docs/Web/API/Selection/extend)
- [`Selection.selectAllChildren()`](/de/docs/Web/API/Selection/selectAllChildren)
- [`Selection.addRange()`](/de/docs/Web/API/Selection/addRange)
- [`Selection.setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent)

Und wenn der [`Range`](/de/docs/Web/API/Range) mit folgenden Methoden modifiziert wird:

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
  - : Der Anker einer Auswahl ist der Beginn der Auswahl. Beim Erstellen einer Auswahl mit einer Maus ist der Anker der Punkt im Dokument, an dem die Maustaste zuerst gedrückt wird. Wenn der Benutzer die Auswahl mit der Maus oder der Tastatur ändert, bewegt sich der Anker nicht.
- Editierhost
  - : Ein bearbeitbares Element (z.B. ein HTML-Element mit gesetztem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) oder das HTML-Kind eines Dokuments, das [`designMode`](/de/docs/Web/API/Document/designMode) aktiviert hat).
- Fokus einer Auswahl

  - : Der _Fokus_ einer Auswahl ist der Endpunkt der Auswahl. Beim Erstellen einer Auswahl mit einer Maus ist der Fokus der Punkt im Dokument, an dem die Maustaste losgelassen wird. Wenn der Benutzer die Auswahl mit der Maus oder der Tastatur ändert, ist der Fokus das Ende der Auswahl, das sich bewegt.

    > [!NOTE]
    > Dies ist nicht dasselbe wie das fokussierte _Element_ des Dokuments, das durch [`document.activeElement`](/de/docs/Web/API/Document/activeElement) zurückgegeben wird.

- Bereich

  - : Ein _Bereich_ ist ein zusammenhängender Teil eines Dokuments. Ein Bereich kann ganze Knoten sowie Teile von Knoten (wie einen Teil eines Textknotens) enthalten. Normalerweise wählt ein Benutzer nur einen Bereich gleichzeitig aus, aber es ist möglich, dass ein Benutzer mehrere Bereiche auswählt (z.B. durch Verwendung der <kbd>Strg</kbd>-Taste). Ein Bereich kann aus einer Auswahl als [`range`](/de/docs/Web/API/Range) Objekt abgerufen werden. Bereichsobjekte können auch über das DOM erstellt und programmgesteuert zu einer Auswahl hinzugefügt oder daraus entfernt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.getSelection`](/de/docs/Web/API/Window/getSelection), [`Document.getSelection`](/de/docs/Web/API/Document/getSelection), [`Range`](/de/docs/Web/API/Range)
- Auswahlbezogene Ereignisse: [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event) und [`selectstart`](/de/docs/Web/API/Node/selectstart_event)
- HTML-Eingaben bieten einfachere Hilfs-APIs zur Bearbeitung der Auswahl (siehe [`HTMLInputElement.setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange))
- [`Document.activeElement`](/de/docs/Web/API/Document/activeElement), [`HTMLElement.focus`](/de/docs/Web/API/HTMLElement/focus), und [`HTMLElement.blur`](/de/docs/Web/API/HTMLElement/blur)
