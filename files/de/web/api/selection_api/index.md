---
title: Selection API
slug: Web/API/Selection_API
l10n:
  sourceCommit: 3869033353873623537ef2d810c1406a7299b49c
---

{{DefaultAPISidebar("Selection API")}}

> [!NOTE]
> Diese API ist in [Web Workers](/de/docs/Web/API/Web_Workers_API) _nicht verfügbar_ (sie wird nicht über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) bereitgestellt).

Die **Selection API** ermöglicht Entwicklern, auf den vom Benutzer ausgewählten Teil eines Dokuments zuzugreifen und ihn zu verändern.

Mit der API können Sie:

- Auf die aktuell ausgewählten Knoten zugreifen
- Die aktuelle Auswahl verändern, indem Sie sie erweitern, verkleinern oder einen völlig anderen Teil des Dokuments auswählen
- Teile der aktuellen Auswahl aus dem DOM löschen
- Auf Ereignisse reagieren, die anzeigen, dass eine Auswahl begonnen oder geändert wurde

## Konzepte und Verwendung

Eine Auswahl erfolgt folgendermaßen:

- Zuerst wird die Maustaste an einer Stelle im Dokument gedrückt. Dieser Punkt ist der **_Anker_** der Auswahl. Wenn der Benutzer die Auswahl mit der Maus oder der Tastatur verändert, bleibt der Anker an seiner Position.
- Während die Maustaste gedrückt gehalten wird, wird ein weiterer Punkt, der **_Fokus_**, mit der Maus oder der Tastatur durch das Dokument bewegt. Er beginnt an der Position des Ankers.

  > [!NOTE]
  > Dies ist nicht dasselbe wie das fokussierte _Element_ des Dokuments, das [`document.activeElement`](/de/docs/Web/API/Document/activeElement) zurückgibt.

- Die Maustaste wird losgelassen und die Auswahl damit abgeschlossen. Der Fokus befindet sich an der Position, an der die Maustaste losgelassen wurde.

Zu jedem Zeitpunkt besteht die Auswahl aus einem zusammenhängenden Teil eines Dokuments, der durch ein [`Range`](/de/docs/Web/API/Range)-Objekt dargestellt wird. Ein Bereich kann sowohl vollständige Knoten als auch Teile von Knoten enthalten, beispielsweise einen Teil eines Textknotens. In Browsern, die dies unterstützen, kann eine Auswahl auch mehrere Bereiche enthalten.

Jedes [`Range`](/de/docs/Web/API/Range)-Objekt hat zwei Grenzpunkte. Der in der Baumreihenfolge zuerst liegende Punkt wird als _Anfang_ bezeichnet, der andere als _Ende_. Da eine Auswahl sowohl vorwärts (beispielsweise in einem von links nach rechts geschriebenen Dokument durch Ziehen der Maus nach rechts innerhalb derselben Zeile) als auch rückwärts erfolgen kann, kann der Anfang entweder der Anker oder der Fokus der Auswahl sein. Dasselbe gilt für das Ende.

### String-Darstellung einer Auswahl

Wenn in JavaScript ein Objekt an eine Funktion übergeben wird, die einen String erwartet (etwa [`window.alert()`](/de/docs/Web/API/Window/alert) oder [`document.write()`](/de/docs/Web/API/Document/write)), wird die Methode {{jsxref("Object/toString", "toString()")}} des Objekts aufgerufen und ihr Rückgabewert an die Funktion übergeben.
Dadurch kann das Objekt bei der Verwendung mit anderen Funktionen wie ein String erscheinen, obwohl es tatsächlich ein Objekt mit Eigenschaften und Methoden ist.

```js
const selection = window.getSelection();
alert(selection); // Shows a string
```

Allerdings rufen nicht alle Funktionen `toString()` automatisch auf.
Um ein `Selection`-Objekt in einen String umzuwandeln, rufen Sie seine Methode `toString()` direkt auf:

```js
const selectedText = selection.toString();
```

### Mehrere Bereiche in einer Auswahl

Die Spezifikation schreibt vor, dass ein [`Selection`](/de/docs/Web/API/Selection)-Objekt höchstens einen [`Range`](/de/docs/Web/API/Range) enthalten darf. Auf diesen wird wie folgt zugegriffen:

```js
const selObj = window.getSelection();
const range = selObj.getRangeAt(0);
```

Die `Selection`-Schnittstelle wurde jedoch so entworfen, als könnte sie mehrere Bereiche enthalten. Wie in der [Selection API-Spezifikation erläutert](https://w3c.github.io/selection-api/#h-note-13), wurde die Selection API ursprünglich von Netscape entwickelt und erlaubte mehrere Bereiche. Da es dabei jedoch viele Fehler gab, wurde diese Funktion bewusst eingeschränkt. Firefox bietet dennoch eine vollständig funktionsfähige Bedienoberfläche für Mehrfachauswahlen: Sie können in Firefox mehrere Bereiche programmgesteuert hinzufügen oder entfernen sowie durch Gedrückthalten der Taste <kbd>Strg</kbd>/<kbd>Cmd</kbd> mehrere Bereiche auswählen.

### Auswahl und Eingabefokus

Zwischen der Auswahl und dem Eingabefokus (angezeigt durch [`Document.activeElement`](/de/docs/Web/API/Document/activeElement)) besteht ein komplexer Zusammenhang, der sich je nach Browser unterscheidet. In browserübergreifend kompatiblem Code sollten Sie beides getrennt behandeln.

Safari und Chrome (anders als Firefox) fokussieren derzeit das Element, das die Auswahl enthält, wenn die Auswahl programmgesteuert verändert wird. Dies könnte sich künftig ändern (siehe [W3C-Bug 14383](https://www.w3.org/Bugs/Public/show_bug.cgi?id=14383) und [WebKit-Bug 38696](https://webkit.org/b/38696)).

### Verhalten der Selection API bei Änderungen des Fokus von Bearbeitungshosts

Ein _Bearbeitungshost_ ist ein bearbeitbares Element (z. B. ein HTML-Element mit gesetztem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) oder das HTML-Kindelement eines Dokuments, für das [`designMode`](/de/docs/Web/API/Document/designMode) aktiviert ist). Die Selection API weist ein gemeinsames, browserübergreifendes Verhalten auf, das bestimmt, wie sich der Fokus von Bearbeitungshosts nach dem Aufruf bestimmter Methoden ändert.

> [!NOTE]
> {{HTMLElement("input")}}- und {{HTMLElement("textarea")}}-Elemente sind keine Bearbeitungshosts. Ihre Auswahlen, die durch Methoden wie [`HTMLInputElement.setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange) verwaltet werden, stehen nicht mit der Selection API in Zusammenhang. Das hier beschriebene Verhalten gilt für sie nicht.

Das Verhalten ist wie folgt:

1. Die vorherige Auswahl befindet sich außerhalb eines Bearbeitungshosts.
2. Eine Methode der Selection API wird aufgerufen und erzeugt eine neue Auswahl, deren Bereich innerhalb des Bearbeitungshosts liegt.
3. Der Fokus wechselt daraufhin zum Bearbeitungshost.

> [!NOTE]
> Die Methoden der Selection API können den Fokus nur auf einen Bearbeitungshost verschieben, nicht auf andere fokussierbare Elemente (z. B. {{HTMLElement("a")}}).

Dieses Verhalten gilt für Auswahlen, die mit den folgenden Methoden erstellt werden:

- [`Selection.collapse()`](/de/docs/Web/API/Selection/collapse)
- [`Selection.collapseToStart()`](/de/docs/Web/API/Selection/collapseToStart)
- [`Selection.collapseToEnd()`](/de/docs/Web/API/Selection/collapseToEnd)
- [`Selection.extend()`](/de/docs/Web/API/Selection/extend)
- [`Selection.selectAllChildren()`](/de/docs/Web/API/Selection/selectAllChildren)
- [`Selection.addRange()`](/de/docs/Web/API/Selection/addRange)
- [`Selection.setBaseAndExtent()`](/de/docs/Web/API/Selection/setBaseAndExtent)

Es gilt auch, wenn der [`Range`](/de/docs/Web/API/Range) mit einer der folgenden Methoden verändert wird:

- [`Range.setStart()`](/de/docs/Web/API/Range/setStart)
- [`Range.setEnd()`](/de/docs/Web/API/Range/setEnd)
- [`Range.setStartBefore()`](/de/docs/Web/API/Range/setStartBefore)
- [`Range.setStartAfter()`](/de/docs/Web/API/Range/setStartAfter)
- [`Range.setEndBefore()`](/de/docs/Web/API/Range/setEndBefore)
- [`Range.setEndAfter()`](/de/docs/Web/API/Range/setEndAfter)
- [`Range.collapse()`](/de/docs/Web/API/Range/collapse)
- [`Range.selectNode()`](/de/docs/Web/API/Range/selectNode)
- [`Range.selectNodeContents()`](/de/docs/Web/API/Range/selectNodeContents)

## Schnittstellen

- [`Selection`](/de/docs/Web/API/Selection)
  - : Eine Schnittstelle, die den vom Benutzer ausgewählten Teil des Dokuments oder die aktuelle Position des Textcursors darstellt.

## Erweiterungen anderer Schnittstellen

### Window

- [`Window.getSelection()`](/de/docs/Web/API/Window/getSelection)
  - : Eine Methode, die ein `Selection`-Objekt zurückgibt, das die aktuelle Auswahl oder die aktuelle Position des Textcursors darstellt.

### Document

- [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection)
  - : Eine Methode, die ein `Selection`-Objekt zurückgibt, das die aktuelle Auswahl oder die aktuelle Position des Textcursors darstellt.
- [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event)
  - : Ein Ereignis, das ausgelöst wird, wenn sich die aktuelle Auswahl ändert.

### Node

- [`selectstart`](/de/docs/Web/API/Node/selectstart_event)
  - : Ein Ereignis, das ausgelöst wird, wenn ein Benutzer eine neue Auswahl beginnt.

## Spezifikationen

{{Specifications}}
