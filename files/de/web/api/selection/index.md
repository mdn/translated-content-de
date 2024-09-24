---
title: Auswahl
slug: Web/API/Selection
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{ApiRef("Selection API")}}

Ein **`Selection`**-Objekt repräsentiert den vom Benutzer ausgewählten Textbereich oder die aktuelle Position des Cursors. Jedes {{domxref("document")}} ist mit einem einzigartigen Selection-Objekt verbunden, das durch {{DOMxRef("document.getSelection()")}} oder {{domxref("window.getSelection()")}} abgerufen und dann untersucht und modifiziert werden kann.

Ein Benutzer kann eine Auswahl von links nach rechts (in Dokumentenreihenfolge) oder von rechts nach links (umgekehrte Dokumentenreihenfolge) treffen. Der **_Anker_** ist der Punkt, an dem der Benutzer die Auswahl begonnen hat, und der **_Fokus_** ist der Punkt, an dem der Benutzer die Auswahl beendet. Wenn Sie eine Auswahl mit einer Desktop-Maus treffen, wird der Anker dort platziert, wo Sie die Maustaste gedrückt haben, und der Fokus dort, wo Sie die Maustaste losgelassen haben.

> **Note:** _Anker_ und _Fokus_ sollten nicht mit den _Start-_ und _Endpositionen_ einer Auswahl verwechselt werden. Der Anker kann vor dem Fokus platziert werden oder umgekehrt, je nach Richtung, in der Sie Ihre Auswahl getroffen haben.

## Instanz-Eigenschaften

- {{DOMxRef("Selection.anchorNode")}} {{ReadOnlyInline}}
  - : Gibt den {{DOMxRef("Node")}} zurück, in dem die Auswahl beginnt. Kann `null` zurückgeben, wenn die Auswahl nie im Dokument vorhanden war (z. B. ein iframe, das nie angeklickt wurde).
- {{DOMxRef("Selection.anchorOffset")}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Versatz des Ankers der Auswahl innerhalb des `anchorNode` darstellt. Ist `anchorNode` ein Textknoten, ist dies die Anzahl der Zeichen innerhalb des `anchorNode`, die dem Anker vorausgehen. Ist `anchorNode` ein Element, so ist dies die Anzahl der Knoten von `anchorNode`, die dem Anker vorausgehen.
- {{DOMxRef("Selection.direction")}} {{ReadOnlyInline}}
  - : Ein String, der die Richtung der aktuellen Auswahl beschreibt.
- {{DOMxRef("Selection.focusNode")}} {{ReadOnlyInline}}
  - : Gibt den {{DOMxRef("Node")}} zurück, in dem die Auswahl endet. Kann `null` zurückgeben, wenn die Auswahl nie im Dokument vorhanden war (z. B. in einem `iframe`, das nie angeklickt wurde).
- {{DOMxRef("Selection.focusOffset")}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den Versatz des Ankers der Auswahl innerhalb des `focusNode` darstellt. Ist `focusNode` ein Textknoten, ist dies die Anzahl der Zeichen innerhalb des `focusNode`, die dem Fokus vorausgehen. Ist `focusNode` ein Element, ist dies die Anzahl der Knoten von `focusNode`, die dem Fokus vorausgehen.
- {{DOMxRef("Selection.isCollapsed")}} {{ReadOnlyInline}}
  - : Gibt einen Booleschen Wert zurück, der anzeigt, ob die Start- und Endpunkte der Auswahl an derselben Position liegen.
- {{DOMxRef("Selection.rangeCount")}} {{ReadOnlyInline}}
  - : Gibt die Anzahl der Bereiche in der Auswahl zurück.
- {{DOMxRef("Selection.type")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Typ der aktuellen Auswahl beschreibt.

## Instanz-Methoden

- {{DOMxRef("Selection.addRange()")}}
  - : Ein {{DOMxRef("Range")}}-Objekt, das der Auswahl hinzugefügt wird.
- {{DOMxRef("Selection.collapse()")}}
  - : Kollabiert die aktuelle Auswahl zu einem einzelnen Punkt.
- {{DOMxRef("Selection.collapseToEnd()")}}
  - : Kollabiert die Auswahl bis zum Ende des letzten Bereichs in der Auswahl.
- {{DOMxRef("Selection.collapseToStart()")}}
  - : Kollabiert die Auswahl bis zum Anfang des ersten Bereichs in der Auswahl.
- {{DOMxRef("Selection.containsNode()")}}
  - : Gibt an, ob ein bestimmter Knoten Teil der Auswahl ist.
- {{DOMxRef("Selection.deleteFromDocument()")}}
  - : Löscht den Inhalt der Auswahl aus dem Dokument.
- {{DOMxRef("Selection.empty()")}}
  - : Entfernt alle Bereiche aus der Auswahl, sodass die Eigenschaften {{domxref("Selection.anchorNode", "anchorNode")}} und {{domxref("Selection.focusNode","focusNode")}} gleich `null` sind und nichts ausgewählt ist.
- {{DOMxRef("Selection.extend()")}}
  - : Bewegt den Fokus der Auswahl zu einem angegebenen Punkt.
- {{DOMxRef("Selection.getComposedRanges()")}} {{experimental_inline}}
  - : Gibt ein Array von {{DOMxRef("StaticRange")}}-Objekten zurück, die jeweils eine Auswahl repräsentieren, die möglicherweise Shadow DOM-Grenzen überschreitet.
- {{DOMxRef("Selection.getRangeAt()")}}
  - : Gibt ein {{DOMxRef("Range")}}-Objekt zurück, das einen der derzeit ausgewählten Bereiche repräsentiert.
- {{DOMxRef("Selection.modify()")}}
  - : Ändert die aktuelle Auswahl.
- {{DOMxRef("Selection.removeRange()")}}
  - : Entfernt einen Bereich aus der Auswahl.
- {{DOMxRef("Selection.removeAllRanges()")}}
  - : Entfernt alle Bereiche aus der Auswahl.
- {{DOMxRef("Selection.selectAllChildren()")}}
  - : Fügt alle Kinder des angegebenen Knotens zur Auswahl hinzu.
- {{DOMxRef("Selection.setBaseAndExtent()")}}
  - : Setzt die Auswahl auf einen Bereich, der alle oder Teile von zwei angegebenen DOM-Knoten und des zwischen ihnen befindlichen Inhalts umfasst.
- {{DOMxRef("Selection.setPosition()")}}
  - : Kollabiert die aktuelle Auswahl zu einem einzelnen Punkt.
- {{DOMxRef("Selection.toString()")}}
  - : Gibt einen String zurück, der aktuell durch das Selection-Objekt repräsentiert wird, d.h. den aktuell ausgewählten Text.

## Anmerkungen

### Zeichenkettenrepräsentation einer Auswahl

Das Aufrufen der Methode {{DOMxRef("Selection.toString()")}} gibt den Text zurück, der in der Auswahl enthalten ist, z.B.:

```js
const selObj = window.getSelection();
window.alert(selObj);
```

Beachten Sie, dass die Verwendung eines Selection-Objekts als Argument für `window.alert` die `toString`-Methode des Objekts aufruft.

### Mehrere Bereiche in einer Auswahl

Ein Selection-Objekt repräsentiert die {{DOMxRef("Range")}}s, die der Benutzer ausgewählt hat. Typischerweise enthält es nur einen Bereich, der wie folgt abgerufen wird:

```js
const selObj = window.getSelection();
const range = selObj.getRangeAt(0);
```

- `selObj` ist ein Selection-Objekt
- `range` ist ein {{DOMxRef("Range")}}-Objekt

Wie in der [Selection-API-Spezifikation](https://www.w3.org/TR/selection-api/#h_note_15) festgehalten, wurde die Selection API ursprünglich von Netscape erstellt und erlaubte mehrere Bereiche (um z.B. dem Benutzer zu erlauben, eine Spalte aus einer {{HTMLElement("table")}} auszuwählen). Allerdings implementierten andere Browser als Gecko keine multiplen Bereiche, und die Spezifikation erfordert auch, dass die Auswahl immer einen einzigen Bereich hat.

### Auswahl und Eingabefokus

Die Auswahl und der Eingabefokus (angezeigt durch {{DOMxRef("Document.activeElement")}}) haben eine komplexe Beziehung, die je nach Browser variiert. In code, der mit mehreren Browsern kompatibel ist, ist es besser, sie separat zu behandeln.

Safari und Chrome (im Gegensatz zu Firefox) fokussieren derzeit das Element, das die Auswahl enthält, wenn die Auswahl programmatisch verändert wird; es ist möglich, dass sich dies in Zukunft ändern könnte (siehe [W3C-Bug 14383](https://www.w3.org/Bugs/Public/show_bug.cgi?id=14383) und [Webkit-Bug 38696](https://webkit.org/b/38696)).

### Verhalten der Selection API in Bezug auf Änderungen des Bearbeitungshost-Fokus

Die Selection API hat ein gemeinsames Verhalten (d.h. von mehreren Browsern geteilt), das regelt, wie sich das Fokusverhalten für _Bearbeitungshosts_ ändert, nachdem bestimmte Methoden aufgerufen wurden.

Das Verhalten ist wie folgt:

1. Ein Bearbeitungshost erhält den Fokus, wenn die vorherige Auswahl außerhalb von ihm war.
2. Eine Selection-API-Methode wird aufgerufen, was eine neue Auswahl mit dem Auswahlbereich innerhalb des Bearbeitungshosts zur Folge hat.
3. Der Fokus verschiebt sich dann auf den Bearbeitungshost.

> [!NOTE]
> Die Methoden der Selection API können den Fokus nur auf einen Bearbeitungshost verlegen, nicht auf andere fokussierbare Elemente (z.B. {{HTMLElement("a")}}).

Das obige Verhalten gilt für Auswahlen, die mit den folgenden Methoden vorgenommen werden:

- {{DOMxRef("Selection.collapse()")}}
- {{DOMxRef("Selection.collapseToStart()")}}
- {{DOMxRef("Selection.collapseToEnd()")}}
- {{DOMxRef("Selection.extend()")}}
- {{DOMxRef("Selection.selectAllChildren()")}}
- {{DOMxRef("Selection.addRange()")}}
- {{DOMxRef("Selection.setBaseAndExtent()")}}

Und wenn der {{DOMxRef("Range")}} mit den folgenden Methoden modifiziert wird:

- {{DOMxRef("Range.setStart()")}}
- {{DOMxRef("Range.setEnd()")}}
- {{DOMxRef("Range.setStartBefore()")}}
- {{DOMxRef("Range.setStartAfter()")}}
- {{DOMxRef("Range.setEndBefore()")}}
- {{DOMxRef("Range.setEndAfter()")}}
- {{DOMxRef("Range.collapse()")}}
- {{DOMxRef("Range.selectNode()")}}
- {{DOMxRef("Range.selectNodeContents()")}}

### Glossar

Andere in diesem Abschnitt verwendete Schlüsselbegriffe.

- Anker
  - : Der Anker einer Auswahl ist der Anfangspunkt der Auswahl. Wenn eine Auswahl mit einer Maus getroffen wird, ist der Anker der Punkt im Dokument, an dem die Maustaste zunächst gedrückt wird. Während der Benutzer die Auswahl mit der Maus oder der Tastatur ändert, bleibt der Anker unbewegt.
- Bearbeitungshost
  - : Ein bearbeitbares Element (z.B. ein HTML-Element mit [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable) gesetzt oder das HTML-Kind eines Dokuments, das {{DOMxRef("Document.designMode", "designMode")}} aktiviert hat).
- Fokus einer Auswahl

  - : Der _Fokus_ einer Auswahl ist der Endpunkt der Auswahl. Wenn eine Auswahl mit einer Maus getroffen wird, ist der Fokus der Punkt im Dokument, an dem die Maustaste freigegeben wird. Während der Benutzer die Auswahl mit der Maus oder der Tastatur ändert, ist der Fokus das Ende der Auswahl, das sich bewegt.

    > [!NOTE]
    > Dies ist nicht dasselbe wie das fokussierte _Element_ des Dokuments, wie es von {{DOMxRef("document.activeElement")}} zurückgegeben wird.

- Bereich

  - : Ein _Bereich_ ist ein zusammenhängender Teil eines Dokuments. Ein Bereich kann ganze Knoten sowie Teile von Knoten (wie z.B. einen Teil eines Textknotens) enthalten. Normalerweise wird ein Benutzer nur einen einzelnen Bereich gleichzeitig auswählen, aber es ist möglich, dass ein Benutzer mehrere Bereiche auswählt (z.B. durch Verwendung der <kbd>Control</kbd>-Taste). Ein Bereich kann aus einer Auswahl als {{DOMxRef("range")}}-Objekt abgerufen werden. Bereichsobjekte können auch über das DOM erstellt und programmatisch einer Auswahl hinzugefügt oder aus dieser entfernt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("Window.getSelection")}}, {{DOMxRef("Document.getSelection")}}, {{DOMxRef("Range")}}
- Auswahlbezogene Ereignisse: {{domxref("Document/selectionchange_event", "selectionchange")}} und {{domxref("Node/selectstart_event", "selectstart")}}
- HTML-Eingaben bieten einfachere Hilfs-APIs zum Arbeiten mit der Auswahl (siehe {{DOMxRef("HTMLInputElement.setSelectionRange()")}})
- {{DOMxRef("Document.activeElement")}}, {{DOMxRef("HTMLElement.focus")}}, und {{DOMxRef("HTMLElement.blur")}}
