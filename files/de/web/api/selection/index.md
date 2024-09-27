---
title: Selection
slug: Web/API/Selection
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{ApiRef("Selection API")}}

Ein **`Selection`**-Objekt repräsentiert den Bereich des vom Benutzer ausgewählten Textes oder die aktuelle Position der Einfügemarke. Jedes [`document`](/de/docs/Web/API/Document) ist mit einem eindeutigen Auswahlobjekt verknüpft, das durch [`document.getSelection()`](/de/docs/Web/API/Document/getSelection) oder [`window.getSelection()`](/de/docs/Web/API/Window/getSelection) abgerufen und anschließend untersucht und modifiziert werden kann.

Ein Benutzer kann eine Auswahl von links nach rechts (in Dokumentreihenfolge) oder von rechts nach links (entgegen der Dokumentreihenfolge) treffen. Der **_anchor_** ist der Punkt, an dem der Benutzer die Auswahl begonnen hat, und der **_focus_** ist, wo der Benutzer die Auswahl beendet. Wenn Sie eine Auswahl mit einer Desktop-Maus treffen, wird der Anker dort platziert, wo Sie die Maustaste gedrückt haben, und der Fokus wird dort platziert, wo Sie die Maustaste losgelassen haben.

> **Note:** _Anchor_ und _focus_ sollten nicht mit den _Start_- und _End_-Positionen einer Auswahl verwechselt werden. Der Anker kann vor dem Fokus oder umgekehrt platziert werden, abhängig davon, in welche Richtung Sie die Auswahl getroffen haben.

## Instanz-Eigenschaften

- [`Selection.anchorNode`](/de/docs/Web/API/Selection/anchorNode) {{ReadOnlyInline}}
  - : Gibt den [`Node`](/de/docs/Web/API/Node) zurück, in dem die Auswahl beginnt. Kann `null` zurückgeben, wenn keine Auswahl im Dokument existiert (z.B. in einem `iframe`, das nie angeklickt wurde).
- [`Selection.anchorOffset`](/de/docs/Web/API/Selection/anchorOffset) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Offset des Ankers der Auswahl innerhalb des `anchorNode` darstellt. Wenn `anchorNode` ein Textknoten ist, ist dies die Anzahl der Zeichen innerhalb des `anchorNode`, die dem Anker vorangehen. Wenn `anchorNode` ein Element ist, ist dies die Anzahl der Kindknoten von `anchorNode`, die dem Anker vorangehen.
- [`Selection.direction`](/de/docs/Web/API/Selection/direction) {{ReadOnlyInline}}
  - : Ein String, der die Richtung der aktuellen Auswahl beschreibt.
- [`Selection.focusNode`](/de/docs/Web/API/Selection/focusNode) {{ReadOnlyInline}}
  - : Gibt den [`Node`](/de/docs/Web/API/Node) zurück, in dem die Auswahl endet. Kann `null` zurückgeben, wenn keine Auswahl im Dokument existiert (z.B. in einem `iframe`, das nie angeklickt wurde).
- [`Selection.focusOffset`](/de/docs/Web/API/Selection/focusOffset) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Offset des Fokus der Auswahl innerhalb des `focusNode` darstellt. Wenn `focusNode` ein Textknoten ist, ist dies die Anzahl der Zeichen innerhalb des `focusNode`, die dem Fokus vorangehen. Wenn `focusNode` ein Element ist, ist dies die Anzahl der Kindknoten von `focusNode`, die dem Fokus vorangehen.
- [`Selection.isCollapsed`](/de/docs/Web/API/Selection/isCollapsed) {{ReadOnlyInline}}
  - : Gibt einen Boolean zurück, der angibt, ob die Start- und Endpunkte der Auswahl an derselben Position sind.
- [`Selection.rangeCount`](/de/docs/Web/API/Selection/rangeCount) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Bereiche in der Auswahl zurück.
- [`Selection.type`](/de/docs/Web/API/Selection/type) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Typ der aktuellen Auswahl beschreibt.

## Instanz-Methoden

- [`Selection.addRange()`](/de/docs/Web/API/Selection/addRange)
  - : Ein [`Range`](/de/docs/Web/API/Range)-Objekt, das der Auswahl hinzugefügt wird.
- [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse)
  - : Faltet die aktuelle Auswahl auf einen einzelnen Punkt zusammen.
- [`Selection.collapseToEnd()`](/de/docs/Web/API/Selection/collapseToEnd)
  - : Faltet die Auswahl auf das Ende des letzten Bereichs in der Auswahl zusammen.
- [`Selection.collapseToStart()`](/de/docs/Web/API/Selection/collapseToStart)
  - : Faltet die Auswahl auf den Anfang des ersten Bereichs in der Auswahl zusammen.
- [`Selection.containsNode()`](/de/docs/Web/API/Selection/containsNode)
  - : Gibt an, ob ein bestimmter Knoten Teil der Auswahl ist.
- [`Selection.deleteFromDocument()`](/de/docs/Web/API/Selection/deleteFromDocument)
  - : Löscht den Inhalt der Auswahl aus dem Dokument.
- [`Selection.empty()`](/de/docs/Web/API/Selection/empty)
  - : Entfernt alle Bereiche aus der Auswahl, sodass die Eigenschaften [`anchorNode`](/de/docs/Web/API/Selection/anchorNode) und [`focusNode`](/de/docs/Web/API/Selection/focusNode) auf `null` gesetzt werden und nichts ausgewählt ist.
- [`Selection.extend()`](/de/docs/Web/API/Selection/extend)
  - : Verschiebt den Fokus der Auswahl auf einen angegebenen Punkt.
- [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) {{experimental_inline}}
  - : Gibt ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange)-Objekten zurück, die jeweils eine Auswahl repräsentieren, die möglicherweise Shadow-DOM-Grenzen überschreitet.
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
  - : Setzt die Auswahl so, dass sie einen Bereich umfasst, der entweder alle oder Teile von zwei angegebenen DOM-Knoten und jeglichen dazwischen liegenden Inhalt beinhaltet.
- [`Selection.setPosition()`](/de/docs/Web/API/Selection/setPosition)
  - : Faltet die aktuelle Auswahl auf einen einzelnen Punkt zusammen.
- [`Selection.toString()`](/de/docs/Web/API/Selection/toString)
  - : Gibt einen String zurück, der derzeit vom Auswahlobjekt repräsentiert wird, d.h. den derzeit ausgewählten Text.

## Anmerkungen

### String-Darstellung einer Auswahl

Der Aufruf der Methode [`Selection.toString()`](/de/docs/Web/API/Selection/toString) gibt den innerhalb der Auswahl enthaltenen Text zurück, z.B.:

```js
const selObj = window.getSelection();
window.alert(selObj);
```

Beachten Sie, dass bei der Verwendung eines Auswahlobjekts als Argument für `window.alert` die `toString`-Methode des Objekts aufgerufen wird.

### Mehrere Bereiche in einer Auswahl

Ein Auswahlobjekt stellt die vom Benutzer ausgewählten [`Range`](/de/docs/Web/API/Range)s dar. In der Regel hält es nur einen Bereich, der wie folgt zugegriffen wird:

```js
const selObj = window.getSelection();
const range = selObj.getRangeAt(0);
```

- `selObj` ist ein Selection-Objekt
- `range` ist ein [`Range`](/de/docs/Web/API/Range)-Objekt

Wie die [Speziellierungsnotizen zur Selection API](https://www.w3.org/TR/selection-api/#h_note_15) erwähnen, wurde die Selection API ursprünglich von Netscape erstellt und unterstützte mehrere Bereiche (z.B. um dem Benutzer zu ermöglichen, eine Spalte aus einem {{HTMLElement("table")}} auszuwählen). Allerdings implementierten andere Browser als Gecko keine Mehrfachbereiche, und die Spezifikation erfordert auch, dass die Auswahl immer einen einzigen Bereich hat.

### Auswahl und Eingabefokus

Auswahl und Eingabefokus (angezeigt durch [`Document.activeElement`](/de/docs/Web/API/Document/activeElement)) haben eine komplexe Beziehung, die je nach Browser variiert. In cross-browser-kompatiblem Code ist es besser, sie getrennt zu behandeln.

Safari und Chrome (im Gegensatz zu Firefox) fokussieren derzeit das Element, das die Auswahl enthält, wenn sie die Auswahl programmgesteuert ändern; es ist möglich, dass sich dies in Zukunft ändern kann (siehe [W3C-Bug 14383](https://www.w3.org/Bugs/Public/show_bug.cgi?id=14383) und [Webkit-Bug 38696](https://webkit.org/b/38696)).

### Verhalten der Selection-API in Bezug auf Änderungen des Bearbeitungshost-Fokus

Die Selection API hat ein gemeinsames Verhalten (d.h. zwischen Browsern geteilt), das festlegt, wie sich der Fokus nach dem Aufrufen bestimmter Methoden für _Bearbeitungshosts_ ändert.

Das Verhalten ist wie folgt:

1. Ein Bearbeitungshost erlangt den Fokus, wenn die vorherige Auswahl außerhalb davon war.
2. Eine Selection-API-Methode wird aufgerufen, die eine neue Auswahl innerhalb des Bearbeitungshosts erstellt.
3. Der Fokus bewegt sich dann zum Bearbeitungshost.

> [!NOTE]
> Die Methoden der Selection API können den Fokus nur auf einen Bearbeitungshost verschieben, nicht auf andere fokussierbare Elemente (z.B. {{HTMLElement("a")}}).

Das obige Verhalten gilt für Auswahlvorgänge, die mit den folgenden Methoden vorgenommen werden:

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

- anchor
  - : Der Anker einer Auswahl ist der Anfangspunkt der Auswahl. Beim Erstellen einer Auswahl mit der Maus ist der Anker der Punkt im Dokument, an dem die Maustaste zunächst gedrückt wird. Wenn der Benutzer die Auswahl mit der Maus oder der Tastatur verändert, bewegt sich der Anker nicht.
- editing host
  - : Ein bearbeitbares Element (z.B. ein HTML-Element mit gesetztem [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable) Attribut oder das HTML-Kind eines Dokuments, das [`designMode`](/de/docs/Web/API/Document/designMode) aktiviert hat).
- focus of a selection

  - : Der _Fokus_ einer Auswahl ist der Endpunkt der Auswahl. Beim Erstellen einer Auswahl mit der Maus ist der Fokus der Punkt im Dokument, an dem die Maustaste losgelassen wird. Wenn der Benutzer die Auswahl mit der Maus oder der Tastatur verändert, ist der Fokus das Ende der Auswahl, das sich bewegt.

    > [!NOTE]
    > Dies ist nicht dasselbe wie das fokussierte _Element_ des Dokuments, das durch [`document.activeElement`](/de/docs/Web/API/Document/activeElement) zurückgegeben wird.

- range

  - : Ein _Bereich_ ist ein zusammenhängender Teil eines Dokuments. Ein Bereich kann ganze Knoten sowie Teile von Knoten enthalten (wie ein Teil eines Textknotens). Normalerweise wählt ein Benutzer nur einen einzigen Bereich gleichzeitig aus, aber es ist möglich, mehrere Bereiche auszuwählen (z.B. mit der <kbd>Control</kbd>-Taste). Ein Bereich kann aus einer Auswahl als [`range`](/de/docs/Web/API/Range)-Objekt abgerufen werden. Bereichsobjekte können auch über das DOM erstellt und programmgesteuert zu einer Auswahl hinzugefügt oder daraus entfernt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.getSelection`](/de/docs/Web/API/Window/getSelection), [`Document.getSelection`](/de/docs/Web/API/Document/getSelection), [`Range`](/de/docs/Web/API/Range)
- Auswahlbezogene Ereignisse: [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event) und [`selectstart`](/de/docs/Web/API/Node/selectstart_event)
- HTML-Eingaben bieten einfachere Hilfs-APIs zum Arbeiten mit Auswahlen (siehe [`HTMLInputElement.setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange))
- [`Document.activeElement`](/de/docs/Web/API/Document/activeElement), [`HTMLElement.focus`](/de/docs/Web/API/HTMLElement/focus), und [`HTMLElement.blur`](/de/docs/Web/API/HTMLElement/blur)
