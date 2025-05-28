---
title: Auswahl
slug: Web/API/Selection
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{ApiRef("Selection API")}}

Ein **`Selection`**-Objekt repräsentiert den vom Benutzer ausgewählten Textbereich oder die aktuelle Position der Einfügemarke. Jedes [`document`](/de/docs/Web/API/Document) ist mit einem eindeutigen Auswahlobjekt verbunden, das durch [`document.getSelection()`](/de/docs/Web/API/Document/getSelection) oder [`window.getSelection()`](/de/docs/Web/API/Window/getSelection) abgerufen und dann untersucht und modifiziert werden kann.

Ein Benutzer kann eine Auswahl von links nach rechts (in Dokumentenreihenfolge) oder von rechts nach links (entgegengesetzt zur Dokumentenreihenfolge) vornehmen. Der **_Anker_** ist dort, wo der Benutzer die Auswahl begonnen hat, und der **_Fokus_** ist dort, wo der Benutzer die Auswahl beendet. Wenn Sie eine Auswahl mit einer Desktop-Maus treffen, wird der Anker dort platziert, wo Sie die Maustaste gedrückt haben, und der Fokus dort, wo Sie die Maustaste losgelassen haben.

> **Hinweis:** _Anker_ und _Fokus_ sollten nicht mit den _Start_- und _Ende_-Positionen einer Auswahl verwechselt werden. Der Anker kann vor dem Fokus platziert werden oder umgekehrt, je nach Richtung Ihrer Auswahl.

## Instanz-Eigenschaften

- [`Selection.anchorNode`](/de/docs/Web/API/Selection/anchorNode) {{ReadOnlyInline}}
  - : Gibt den [`Node`](/de/docs/Web/API/Node) zurück, in dem die Auswahl beginnt. Kann `null` zurückgeben, wenn eine Auswahl nie im Dokument vorhanden war (z.B. ein iframe, das nie angeklickt wurde).
- [`Selection.anchorOffset`](/de/docs/Web/API/Selection/anchorOffset) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Offset des Ankers der Auswahl innerhalb des `anchorNode` repräsentiert. Wenn `anchorNode` ein Textknoten ist, ist dies die Anzahl von Zeichen innerhalb von `anchorNode` vor dem Anker. Wenn `anchorNode` ein Element ist, ist dies die Anzahl von `anchorNode`-Kindknoten vor dem Anker.
- [`Selection.direction`](/de/docs/Web/API/Selection/direction) {{ReadOnlyInline}}
  - : Ein String, der die Richtung der aktuellen Auswahl beschreibt.
- [`Selection.focusNode`](/de/docs/Web/API/Selection/focusNode) {{ReadOnlyInline}}
  - : Gibt den [`Node`](/de/docs/Web/API/Node) zurück, in dem die Auswahl endet. Kann `null` zurückgeben, wenn eine Auswahl nie im Dokument vorhanden war (z.B. ein iframe, das nie angeklickt wurde).
- [`Selection.focusOffset`](/de/docs/Web/API/Selection/focusOffset) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Offset des Fokus der Auswahl innerhalb des `focusNode` repräsentiert. Wenn `focusNode` ein Textknoten ist, ist dies die Anzahl der Zeichen innerhalb von `focusNode` vor dem Fokus. Wenn `focusNode` ein Element ist, ist dies die Anzahl der `focusNode`-Kindknoten vor dem Fokus.
- [`Selection.isCollapsed`](/de/docs/Web/API/Selection/isCollapsed) {{ReadOnlyInline}}
  - : Gibt einen Booleschen Wert zurück, der anzeigt, ob die Start- und Endpunkte der Auswahl an der gleichen Position sind.
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
  - : Kollabiert die Auswahl bis zum Ende des letzten Bereichs in der Auswahl.
- [`Selection.collapseToStart()`](/de/docs/Web/API/Selection/collapseToStart)
  - : Kollabiert die Auswahl bis zum Anfang des ersten Bereichs in der Auswahl.
- [`Selection.containsNode()`](/de/docs/Web/API/Selection/containsNode)
  - : Zeigt an, ob ein bestimmter Knoten Teil der Auswahl ist.
- [`Selection.deleteFromDocument()`](/de/docs/Web/API/Selection/deleteFromDocument)
  - : Löscht den Inhalt der Auswahl aus dem Dokument.
- [`Selection.empty()`](/de/docs/Web/API/Selection/empty)
  - : Entfernt alle Bereiche aus der Auswahl und setzt die Eigenschaften [`anchorNode`](/de/docs/Web/API/Selection/anchorNode) und [`focusNode`](/de/docs/Web/API/Selection/focusNode) auf `null`, sodass nichts mehr ausgewählt ist.
- [`Selection.extend()`](/de/docs/Web/API/Selection/extend)
  - : Verschiebt den Fokus der Auswahl an einen angegebenen Punkt.
- [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges)
  - : Gibt ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange)-Objekten zurück, die jeweils eine Auswahl darstellen, die Grenzen des Shadow-DOM überschreiten könnte.
- [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt)
  - : Gibt ein [`Range`](/de/docs/Web/API/Range)-Objekt zurück, das einen der derzeit ausgewählten Bereiche darstellt.
- [`Selection.modify()`](/de/docs/Web/API/Selection/modify)
  - : Ändert die aktuelle Auswahl.
- [`Selection.removeRange()`](/de/docs/Web/API/Selection/removeRange)
  - : Entfernt einen Bereich aus der Auswahl.
- [`Selection.removeAllRanges()`](/de/docs/Web/API/Selection/removeAllRanges)
  - : Entfernt alle Bereiche aus der Auswahl.
- [`Selection.selectAllChildren()`](/de/docs/Web/API/Selection/selectAllChildren)
  - : Fügt alle Kinder des angegebenen Knotens zur Auswahl hinzu.
- [`Selection.setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent)
  - : Setzt die Auswahl auf einen Bereich, der alle oder Teile von zwei angegebenen DOM-Knoten und etwaige dazwischenliegende Inhalte umfasst.
- [`Selection.setPosition()`](/de/docs/Web/API/Selection/setPosition)
  - : Kollabiert die aktuelle Auswahl auf einen einzigen Punkt.
- [`Selection.toString()`](/de/docs/Web/API/Selection/toString)
  - : Gibt einen String zurück, der derzeit vom Auswahlobjekt repräsentiert wird, d.h. den derzeit ausgewählten Text.

## Anmerkungen

### String-Darstellung einer Auswahl

Das Aufrufen der Methode [`Selection.toString()`](/de/docs/Web/API/Selection/toString) gibt den Text zurück, der innerhalb der Auswahl enthalten ist, z.B.:

```js
const selObj = window.getSelection();
window.alert(selObj);
```

Beachten Sie, dass die Verwendung eines Auswahlobjekts als Argument für `window.alert` die `toString`-Methode des Objekts aufruft.

### Mehrfache Bereiche in einer Auswahl

Ein Auswahlobjekt repräsentiert die vom Benutzer ausgewählten [`Range`](/de/docs/Web/API/Range)-Objekte. Typischerweise enthält es nur einen Bereich, der wie folgt abgerufen wird:

```js
const selObj = window.getSelection();
const range = selObj.getRangeAt(0);
```

- `selObj` ist ein Selection-Objekt
- `range` ist ein [`Range`](/de/docs/Web/API/Range)-Objekt

Wie die [Selection API-Spezifikation](https://w3c.github.io/selection-api/#h-note-13) anmerkt, wurde die Selection API ursprünglich von Netscape erstellt und erlaubte mehrere Bereiche (z.B. um dem Benutzer zu ermöglichen, eine Spalte aus einem {{HTMLElement("table")}} auszuwählen). Aber Browser außer Gecko implementierten keine Mehrfachbereiche, und die Spezifikation erfordert auch, dass die Auswahl immer nur einen Bereich hat.

### Auswahl und Eingabefokus

Auswahl und Eingabefokus (angezeigt durch [`Document.activeElement`](/de/docs/Web/API/Document/activeElement)) haben eine komplexe Beziehung, die je nach Browser variiert. In browserübergreifendem Code ist es besser, sie getrennt zu behandeln.

Safari und Chrome (im Gegensatz zu Firefox) fokussieren derzeit das Element, das die Auswahl enthält, wenn die Auswahl programmgesteuert geändert wird; es ist möglich, dass sich dies in Zukunft ändern wird (siehe [W3C-Bug 14383](https://www.w3.org/Bugs/Public/show_bug.cgi?id=14383) und [WebKit-Bug 38696](https://webkit.org/b/38696)).

### Verhalten der Selection API in Bezug auf Fokusänderungen des Bearbeitungshosts

Die Selection API hat ein gemeinsames Verhalten (d.h. zwischen Browsern geteilt), das das Fokusverhalten für _Bearbeitungshosts_ nach dem Aufrufen bestimmter Methoden regelt.

Das Verhalten ist wie folgt:

1. Ein Bearbeitungshost erhält den Fokus, wenn die vorherige Auswahl außerhalb davon lag.
2. Eine Selection API-Methode wird aufgerufen, wodurch eine neue Auswahl innerhalb des Bearbeitungshosts erstellt wird.
3. Der Fokus bewegt sich dann zum Bearbeitungshost.

> [!NOTE]
> Die Methoden der Selection API können den Fokus nur auf einen Bearbeitungshost verschieben, nicht auf andere fokussierbare Elemente (z.B. {{HTMLElement("a")}}).

Das oben beschriebene Verhalten gilt für Auswahlen, die mit den folgenden Methoden getroffen wurden:

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
  - : Der Anker einer Auswahl ist der Anfangspunkt der Auswahl. Wenn eine Auswahl mit der Maus getroffen wird, ist der Anker der Punkt im Dokument, an dem die Maustaste anfänglich gedrückt wird. Während der Benutzer die Auswahl mit der Maus oder der Tastatur ändert, bewegt sich der Anker nicht.
- Bearbeitungshost
  - : Ein bearbeitbares Element (z.B. ein HTML-Element mit gesetztem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable), oder das HTML-Kind eines Dokuments, das [`designMode`](/de/docs/Web/API/Document/designMode) aktiviert hat).
- Fokus einer Auswahl

  - : Der _Fokus_ einer Auswahl ist der Endpunkt der Auswahl. Wenn eine Auswahl mit der Maus getroffen wird, ist der Fokus der Punkt im Dokument, an dem die Maustaste losgelassen wird. Während der Benutzer die Auswahl mit der Maus oder der Tastatur ändert, ist der Fokus das Ende der Auswahl, das sich bewegt.

    > [!NOTE]
    > Dies ist nicht dasselbe wie das fokussierte _Element_ des Dokuments, wie von [`document.activeElement`](/de/docs/Web/API/Document/activeElement) zurückgegeben.

- Bereich

  - : Ein _Bereich_ ist ein zusammenhängender Teil eines Dokuments. Ein Bereich kann ganze Knoten sowie Teile von Knoten enthalten (wie einen Teil eines Textknotens). Ein Benutzer wird normalerweise nur einen Bereich gleichzeitig auswählen, aber es ist möglich, dass ein Benutzer mehrere Bereiche auswählt (z.B. durch Drücken der <kbd>Strg</kbd>-Taste). Ein Bereich kann als [`Range`](/de/docs/Web/API/Range)-Objekt aus einer Auswahl abgerufen werden. Bereichsobjekte können auch über das DOM erstellt und programmgesteuert zu einer Auswahl hinzugefügt oder daraus entfernt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.getSelection`](/de/docs/Web/API/Window/getSelection), [`Document.getSelection`](/de/docs/Web/API/Document/getSelection), [`Range`](/de/docs/Web/API/Range)
- Auswahlbezogene Ereignisse: [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event) und [`selectstart`](/de/docs/Web/API/Node/selectstart_event)
- HTML-Eingaben bieten einfachere Hilfs-APIs zum Arbeiten mit Auswahlen (siehe [`HTMLInputElement.setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange))
- [`Document.activeElement`](/de/docs/Web/API/Document/activeElement), [`HTMLElement.focus`](/de/docs/Web/API/HTMLElement/focus) und [`HTMLElement.blur`](/de/docs/Web/API/HTMLElement/blur)
