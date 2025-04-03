---
title: Selection
slug: Web/API/Selection
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{ApiRef("Selection API")}}

Ein **`Selection`**-Objekt repräsentiert den Bereich des vom Benutzer ausgewählten Textes oder die aktuelle Position des Cursors. Jedes [`document`](/de/docs/Web/API/Document) ist mit einem einzigartigen Auswahlobjekt verknüpft, das durch [`document.getSelection()`](/de/docs/Web/API/Document/getSelection) oder [`window.getSelection()`](/de/docs/Web/API/Window/getSelection) abgerufen und dann untersucht und geändert werden kann.

Ein Benutzer kann eine Auswahl von links nach rechts (in Dokumentreihenfolge) oder von rechts nach links (umgekehrte Dokumentreihenfolge) treffen. Der **_Anker_** ist der Punkt, an dem der Benutzer mit der Auswahl begonnen hat, und der **_Fokus_** ist der Punkt, an dem der Benutzer die Auswahl beendet. Wenn Sie eine Auswahl mit einer Desktop-Maus treffen, wird der Anker an der Stelle platziert, an der Sie die Maustaste gedrückt haben, und der Fokus an der Stelle, an der Sie die Maustaste losgelassen haben.

> **Hinweis:** _Anker_ und _Fokus_ sollten nicht mit den _Start_- und _Ende_-Positionen einer Auswahl verwechselt werden. Der Anker kann je nach Richtung Ihrer Auswahl entweder vor oder nach dem Fokus gesetzt werden.

## Instanz-Eigenschaften

- [`Selection.anchorNode`](/de/docs/Web/API/Selection/anchorNode) {{ReadOnlyInline}}
  - : Gibt den [`Node`](/de/docs/Web/API/Node) zurück, in dem die Auswahl beginnt. Kann `null` zurückgeben, wenn die Auswahl nie im Dokument existierte (z.B. ein Iframe, das nie angeklickt wurde).
- [`Selection.anchorOffset`](/de/docs/Web/API/Selection/anchorOffset) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Versatz des Ankers der Auswahl innerhalb des `anchorNode` darstellt. Wenn `anchorNode` ein Textknoten ist, ist dies die Anzahl der Zeichen innerhalb des AnchorNode, die dem Anker vorausgehen. Wenn `anchorNode` ein Element ist, ist dies die Anzahl der Kindknoten des `anchorNode`, die dem Anker vorausgehen.
- [`Selection.direction`](/de/docs/Web/API/Selection/direction) {{ReadOnlyInline}}
  - : Ein String, der die Richtung der aktuellen Auswahl beschreibt.
- [`Selection.focusNode`](/de/docs/Web/API/Selection/focusNode) {{ReadOnlyInline}}
  - : Gibt den [`Node`](/de/docs/Web/API/Node) zurück, in dem die Auswahl endet. Kann `null` zurückgeben, wenn die Auswahl nie im Dokument existierte (zum Beispiel in einem `iframe`, das nie angeklickt wurde).
- [`Selection.focusOffset`](/de/docs/Web/API/Selection/focusOffset) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Versatz des Fokus der Auswahl innerhalb des `focusNode` darstellt. Wenn `focusNode` ein Textknoten ist, ist dies die Anzahl der Zeichen innerhalb des `focusNode`, die dem Fokus vorausgehen. Wenn `focusNode` ein Element ist, ist dies die Anzahl der Kindknoten des `focusNode`, die dem Fokus vorausgehen.
- [`Selection.isCollapsed`](/de/docs/Web/API/Selection/isCollapsed) {{ReadOnlyInline}}
  - : Gibt einen Boolean zurück, der anzeigt, ob die Start- und Endpunkte der Auswahl an derselben Position sind.
- [`Selection.rangeCount`](/de/docs/Web/API/Selection/rangeCount) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Bereiche in der Auswahl zurück.
- [`Selection.type`](/de/docs/Web/API/Selection/type) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Typ der aktuellen Auswahl beschreibt.

## Instanz-Methoden

- [`Selection.addRange()`](/de/docs/Web/API/Selection/addRange)
  - : Ein [`Range`](/de/docs/Web/API/Range)-Objekt, das der Auswahl hinzugefügt wird.
- [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse)
  - : Faltet die aktuelle Auswahl zu einem einzelnen Punkt.
- [`Selection.collapseToEnd()`](/de/docs/Web/API/Selection/collapseToEnd)
  - : Faltet die Auswahl bis zum Ende des letzten Bereichs in der Auswahl.
- [`Selection.collapseToStart()`](/de/docs/Web/API/Selection/collapseToStart)
  - : Faltet die Auswahl bis zum Anfang des ersten Bereichs in der Auswahl.
- [`Selection.containsNode()`](/de/docs/Web/API/Selection/containsNode)
  - : Gibt an, ob ein bestimmter Knoten Teil der Auswahl ist.
- [`Selection.deleteFromDocument()`](/de/docs/Web/API/Selection/deleteFromDocument)
  - : Löscht den Inhalt der Auswahl aus dem Dokument.
- [`Selection.empty()`](/de/docs/Web/API/Selection/empty)
  - : Entfernt alle Bereiche aus der Auswahl, sodass die Eigenschaften [`anchorNode`](/de/docs/Web/API/Selection/anchorNode) und [`focusNode`](/de/docs/Web/API/Selection/focusNode) gleich `null` sind und nichts ausgewählt ist.
- [`Selection.extend()`](/de/docs/Web/API/Selection/extend)
  - : Verschiebt den Fokus der Auswahl zu einem bestimmten Punkt.
- [`Selection.getComposedRanges()`](/de/docs/Web/API/Selection/getComposedRanges) {{experimental_inline}}
  - : Gibt ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange)-Objekten zurück, die jeweils eine Auswahl repräsentieren, die Schatten-DOM-Grenzen überschreiten kann.
- [`Selection.getRangeAt()`](/de/docs/Web/API/Selection/getRangeAt)
  - : Gibt ein [`Range`](/de/docs/Web/API/Range)-Objekt zurück, das einen der derzeit ausgewählten Bereiche repräsentiert.
- [`Selection.modify()`](/de/docs/Web/API/Selection/modify)
  - : Ändert die aktuelle Auswahl.
- [`Selection.removeRange()`](/de/docs/Web/API/Selection/removeRange)
  - : Entfernt einen Bereich aus der Auswahl.
- [`Selection.removeAllRanges()`](/de/docs/Web/API/Selection/removeAllRanges)
  - : Entfernt alle Bereiche aus der Auswahl.
- [`Selection.selectAllChildren()`](/de/docs/Web/API/Selection/selectAllChildren)
  - : Fügt alle Kindknoten des angegebenen Knotens der Auswahl hinzu.
- [`Selection.setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent)
  - : Setzt die Auswahl auf einen Bereich, der alle oder Teile von zwei angegebenen DOM-Knoten und allen dazwischenliegenden Inhalt umfasst.
- [`Selection.setPosition()`](/de/docs/Web/API/Selection/setPosition)
  - : Faltet die aktuelle Auswahl zu einem einzelnen Punkt.
- [`Selection.toString()`](/de/docs/Web/API/Selection/toString)
  - : Gibt einen String zurück, der derzeit vom Auswahlobjekt repräsentiert wird, d.h. den derzeit ausgewählten Text.

## Anmerkungen

### String Repräsentation einer Auswahl

Durch Aufrufen der Methode [`Selection.toString()`](/de/docs/Web/API/Selection/toString) wird der Text innerhalb der Auswahl zurückgegeben, z.B.:

```js
const selObj = window.getSelection();
window.alert(selObj);
```

Beachten Sie, dass die Verwendung eines Auswahlobjekts als Argument für `window.alert` die `toString`-Methode des Objekts aufruft.

### Mehrere Bereiche in einer Auswahl

Ein Auswahlobjekt repräsentiert die vom Benutzer ausgewählten [`Range`](/de/docs/Web/API/Range)-Bereiche. Typischerweise enthält es nur einen Bereich, auf den wie folgt zugegriffen wird:

```js
const selObj = window.getSelection();
const range = selObj.getRangeAt(0);
```

- `selObj` ist ein Selection-Objekt
- `range` ist ein [`Range`](/de/docs/Web/API/Range)-Objekt

Wie die [Selection API-Spezifikation](https://www.w3.org/TR/selection-api/#h_note_15) anmerkt, wurde die Selection API ursprünglich von Netscape erstellt und erlaubte mehrere Bereiche (um beispielsweise dem Benutzer zu erlauben, eine Spalte aus einem {{HTMLElement("table")}} auszuwählen). Allerdings implementierten Browser außer Gecko keine Mehrfachbereiche, und die Spezifikation erfordert auch, dass die Auswahl immer einen einzigen Bereich hat.

### Auswahl und Eingabefokus

Auswahl und Eingabefokus (angezeigt durch [`Document.activeElement`](/de/docs/Web/API/Document/activeElement)) haben eine komplexe Beziehung, die je nach Browser variiert. In plattformübergreifend kompatiblem Code ist es besser, sie separat zu behandeln.

Safari und Chrome (im Gegensatz zu Firefox) fokussieren derzeit das Element, das die Auswahl enthält, wenn die Auswahl programmatisch geändert wird; es ist möglich, dass sich dies in Zukunft ändern könnte (siehe [W3C Bug 14383](https://www.w3.org/Bugs/Public/show_bug.cgi?id=14383) und [WebKit Bug 38696](https://webkit.org/b/38696)).

### Verhalten der Selection API in Bezug auf Änderungen des Fokus von Bearbeitungs-Hosts

Die Selection API hat ein gemeinsames Verhalten (d.h. zwischen Browsern geteilt), das regelt, wie sich das Fokusverhalten für _Bearbeitungs-Hosts_ nach dem Aufrufen bestimmter Methoden ändert.

Das Verhalten ist wie folgt:

1. Ein Bearbeitungs-Host erhält den Fokus, wenn die vorherige Auswahl außerhalb davon lag.
2. Eine Methode der Selection API wird aufgerufen, wodurch eine neue Auswahl mit dem Auswahlbereich innerhalb des Bearbeitungs-Hosts getroffen wird.
3. Der Fokus bewegt sich dann zum Bearbeitungs-Host.

> [!NOTE]
> Die Selection API-Methoden können den Fokus nur auf einen Bearbeitungs-Host verschieben, nicht auf andere fokussierbare Elemente (z.B. {{HTMLElement("a")}}).

Das oben genannte Verhalten gilt für Auswahlen, die mit den folgenden Methoden getroffen werden:

- [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse)
- [`Selection.collapseToStart()`](/de/docs/Web/API/Selection/collapseToStart)
- [`Selection.collapseToEnd()`](/de/docs/Web/API/Selection/collapseToEnd)
- [`Selection.extend()`](/de/docs/Web/API/Selection/extend)
- [`Selection.selectAllChildren()`](/de/docs/Web/API/Selection/selectAllChildren)
- [`Selection.addRange()`](/de/docs/Web/API/Selection/addRange)
- [`Selection.setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent)

Und wenn das [`Range`](/de/docs/Web/API/Range) mit den folgenden Methoden geändert wird:

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
  - : Der Anker einer Auswahl ist der Anfangspunkt der Auswahl. Beim Treffen einer Auswahl mit der Maus ist der Anker der Punkt im Dokument, an dem die Maustaste zuerst gedrückt wird. Wenn der Benutzer die Auswahl mit der Maus oder der Tastatur ändert, bewegt sich der Anker nicht.
- Bearbeitungs-Host
  - : Ein bearbeitbares Element (z.B. ein HTML-Element, bei dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) gesetzt ist, oder das HTML-Kind eines Dokuments, bei dem [`designMode`](/de/docs/Web/API/Document/designMode) aktiviert ist).
- Fokus einer Auswahl

  - : Der _Fokus_ einer Auswahl ist der Endpunkt der Auswahl. Beim Treffen einer Auswahl mit der Maus ist der Fokus der Punkt im Dokument, an dem die Maustaste losgelassen wird. Wenn der Benutzer die Auswahl mit der Maus oder der Tastatur ändert, ist der Fokus das Ende der Auswahl, das sich bewegt.

    > [!NOTE]
    > Dies ist nicht dasselbe wie das fokussierte _Element_ des Dokuments, wie es von [`document.activeElement`](/de/docs/Web/API/Document/activeElement) zurückgegeben wird.

- Bereich

  - : Ein _Bereich_ ist ein zusammenhängender Teil eines Dokuments. Ein Bereich kann ganze Knoten sowie Teile von Knoten (z.B. einen Teil eines Textknotens) enthalten. Ein Benutzer wird normalerweise nur einen einzigen Bereich auf einmal auswählen, aber es ist möglich, dass ein Benutzer mehrere Bereiche auswählt (z.B. mit der <kbd>Steuerung</kbd>-Taste). Ein Bereich kann aus einer Auswahl als [`range`](/de/docs/Web/API/Range)-Objekt abgerufen werden. Bereichsobjekte können auch über das DOM erstellt und programmatisch zu einer Auswahl hinzugefügt oder daraus entfernt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.getSelection`](/de/docs/Web/API/Window/getSelection), [`Document.getSelection`](/de/docs/Web/API/Document/getSelection), [`Range`](/de/docs/Web/API/Range)
- Auswahlbezogene Ereignisse: [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event) und [`selectstart`](/de/docs/Web/API/Node/selectstart_event)
- HTML-Eingaben bieten einfachere Hilfs-APIs für die Arbeit mit Auswahlen (siehe [`HTMLInputElement.setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange))
- [`Document.activeElement`](/de/docs/Web/API/Document/activeElement), [`HTMLElement.focus`](/de/docs/Web/API/HTMLElement/focus), und [`HTMLElement.blur`](/de/docs/Web/API/HTMLElement/blur)
