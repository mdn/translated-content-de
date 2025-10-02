---
title: HTML Drag and Drop API
slug: Web/API/HTML_Drag_and_Drop_API
l10n:
  sourceCommit: 8285d415db211ae9efe04752d9dab1b574450ee8
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Die Schnittstellen des **HTML Drag and Drop** ermöglichen es Anwendungen, Drag-and-Drop-Funktionen in Browsern zu nutzen.

Der Benutzer kann _draggable_ Elemente mit einer Maus auswählen, diese Elemente zu einem _droppable_ Element ziehen und sie durch Loslassen der Maustaste ablegen. Eine durchscheinende Darstellung der _draggable_ Elemente folgt dem Zeiger während des Ziehvorgangs.

Sie können anpassen, welche Elemente _draggable_ werden können, die Art des Feedbacks, das die _draggable_ Elemente erzeugen, und die _droppable_ Elemente.

Diese Übersicht über HTML Drag and Drop enthält eine Beschreibung der Schnittstellen, grundlegende Schritte zur Integration von Drag-and-Drop-Unterstützung in eine Anwendung und eine Zusammenfassung der Interoperabilität der Schnittstellen.

## Konzepte und Nutzung

Oberflächlich betrachtet hat Drag and Drop tatsächlich drei unterschiedliche Anwendungsfälle: [Elemente innerhalb einer Seite ziehen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Kanban_board), Daten aus einer Seite herausziehen und [Daten in eine Seite hineinziehen](/de/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop). Sie haben subtil unterschiedliche Anforderungen und Implementierungen. Das Drag and Drop API bietet jedoch ein einheitliches Modell, um alle diese Interaktionen zu betrachten.

Im Kern umfasst ein Ziehvorgang drei Dinge:

- Das [zu ziehende Element](#draggable-elemente)
- Die [zu übertragenden Daten](#drag-datenspeicher)
- Das [Zielfeld](#zielfeld)

Es ist nicht unbedingt wahr, dass alle drei unter Ihrer Kontrolle stehen oder dass Sie sie selbst definieren müssen:

- Beim Ziehen externer Daten in eine Seite gibt es kein zu definierendes draggable Element (z. B. könnte es sich um eine Datei im Dateiexplorer des Betriebssystems handeln).
- Beim Ziehen von Elementen innerhalb einer Seite müssen Sie häufig keine übertragenen Daten definieren; Sie manipulieren einfach das gezogene Element.
- Beim Ziehen aus der Seite gibt es kein zu definierendes Zielfeld.

Wir werden uns ansehen, wie jeder davon definiert und genutzt werden kann.

### Ziehereignisse

HTML Drag-and-Drop nutzt das [DOM-Ereignismodell](/de/docs/Web/API/Event) und _[Ziehereignisse](/de/docs/Web/API/DragEvent)_, die von [Mausevents](/de/docs/Web/API/MouseEvent) erben. Während der Ziehvorgänge werden mehrere Ereignistypen ausgelöst, und einige Ereignisse könnten oft ausgelöst werden, wie z. B. die Ereignisse [`drag`](/de/docs/Web/API/HTMLElement/drag_event) und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event).

| Ereignis                                                    | Wird ausgelöst, wenn...                                                                          |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) | ...das [draggable Element](#draggable-elemente) beginnt zu ziehen.                               |
| [`drag`](/de/docs/Web/API/HTMLElement/drag_event)           | ...das draggable Element wird gezogen, alle paar hundert Millisekunden.                          |
| [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) | ...das Element ein draggable Element hineinzuführen hat.                                         |
| [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event) | ...das Element ein draggable Element verlässt.                                                   |
| [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)   | ...das Element ein draggable Element über sich gezogen bekommt, alle paar hundert Millisekunden. |
| [`drop`](/de/docs/Web/API/HTMLElement/drop_event)           | ...das Element ein [Zielfeld](#zielfeld) ist und das draggable Element darüber abgelegt wird.    |
| [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)     | ...das draggable Element aufhört gezogen zu werden.                                              |

> [!NOTE]
> Die Ereignisse `dragstart`, `drag` und `dragend` werden beim gezogenen Element ausgelöst und können daher nicht ausgelöst werden, wenn eine Datei aus dem Betriebssystem in den Browser gezogen wird.
>
> Genauso werden die Ereignisse `dragenter`, `dragleave`, `dragover` und `drop` auf Elementen ausgelöst, die potenzielle Zielfelder sind, und können daher nicht ausgelöst werden, wenn ein Element aus dem Browser gezogen wird.

Weitere Informationen finden Sie unter [Ziehvorgänge](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations).

### Draggable-Elemente

In HTML sind Bilder, Links und Markierungen standardmäßig draggable. Um ein beliebiges Element als draggable zu definieren, setzen Sie das [`draggable`](/de/docs/Web/HTML/Reference/Global_attributes/draggable)-Attribut auf den Wert `"true"`.

```html live-sample___draggable_element live-sample___drop_target
<p id="p1" draggable="true">This element is draggable.</p>
```

An diesem Punkt hat das Element bereits die Zieh-Erscheinung, auch wenn noch kein Verhalten definiert ist:

{{EmbedLiveSample("draggable_element", "", 100)}}

Für Bilder und Links ist `draggable` standardmäßig auf `true`, sodass Sie es nur auf `false` setzen würden, um das Ziehen dieser Elemente zu deaktivieren. Bei nicht draggable Elementen bewirkt die "Ziehen"-Geste normalerweise, dass der Text ausgewählt wird.

> [!NOTE]
> Wenn ein Element draggable gemacht wird, kann Text oder andere Elemente darin nicht mehr auf die normale Weise ausgewählt werden, indem man mit der Maus klickt und zieht. Stattdessen muss der Benutzer die <kbd>Alt</kbd>-Taste gedrückt halten, um Text mit der Maus auszuwählen, oder die Tastatur verwenden.

Eine Markierung ist ebenfalls draggable. In diesem Fall ist der _Quelldatenpunkt_, oder der Knoten, auf dem verschiedene Ereignisse wie `dragstart` und `dragend` ausgelöst werden, der Textknoten, auf dem das Ziehen begonnen hat. Die Markierung kann mehrere Knoten teilweise oder vollständig enthalten, einschließlich Textknoten und Elementknoten, die alle gleichzeitig als gezogen betrachtet werden.

Wie bereits erwähnt, kann das gezogene Element auch etwas außerhalb einer Webseite sein - zum Beispiel eine Datei im Dateiexplorer des Betriebssystems. Allerdings können nur Elemente auf der Webseite die Ereignisse [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) und [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) auslösen.

Weitere Informationen finden Sie im [Leitfaden zu Ziehvorgängen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations).

### Drag-Datenspeicher

Sie können JavaScript-Objekte nicht direkt auf beliebige Webseiten übertragen, und sicherlich nicht auf externe Anwendungen. Um Daten in und aus der Webseite zu übertragen, müssen die Daten in eine Zeichenkette serialisiert werden (oder als [`File`](/de/docs/Web/API/File)). Bei Drag and Drop ist diese Zeichenkette in einem [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekt gekapselt, welches auch einen bestimmten `type` definiert - typischerweise einen MIME-Typ wie `text/html` -, der definiert, wie die Zeichenkette interpretiert werden soll.

Jede Drag-and-Drop-Operation hat einen zugeordneten _drag data store_, der ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt ist und über die [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer)-Eigenschaft des [`DragEvent`](/de/docs/Web/API/DragEvent) zugänglich ist. Bei den standardmäßig draggable Elementen wie Bildern, Links und Markierungen sind die Drag-Daten bereits vom Browser definiert. Bei benutzerdefinierten draggable Elementen, die mit dem `draggable`-Attribut definiert werden, müssen Sie die Drag-Daten selbst definieren. Die einzige Zeit, zu der jegliche Modifikationen am Datenspeicher vorgenommen werden können, ist innerhalb des [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Handlers - für das `dataTransfer` jedes anderen Ziehereignisses ist der Datenspeicher nicht modifizierbar.

Die Methode [`setData()`](/de/docs/Web/API/DataTransfer/setData) kann verwendet werden, um einen Artikel zu den Drag-Daten hinzuzufügen, wie im folgenden Beispiel gezeigt.

```js live-sample___drop_target
function dragstartHandler(ev) {
  // Add different types of drag data
  ev.dataTransfer.setData("text/plain", ev.target.innerText);
  ev.dataTransfer.setData("text/html", ev.target.outerHTML);
  ev.dataTransfer.setData(
    "text/uri-list",
    ev.target.ownerDocument.location.href,
  );
}

const p1 = document.getElementById("p1");
p1.addEventListener("dragstart", dragstartHandler);
```

Darüber hinaus ist die einzige Zeit, zu der Sie _aus_ dem Datenspeicher lesen können, abgesehen von dem `dragstart`-Ereignis, während des `drop`-Ereignisses (was dem Zielfeld ermöglicht, die Daten abzurufen). Für alle anderen Ereignisse kann auf den Datenspeicher nicht zugegriffen werden.

Weitere Informationen finden Sie unter [Arbeiten mit dem Drag-Datenspeicher](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store).

### Zielfeld

Ein _Zielfeld_ ist ein Element, auf dem ein Benutzer ein gezogenes Element ablegen kann. Standardmäßig sind die meisten Elemente keine Zielfelder, und wenn Sie den Zug freigeben, wird eine "Zurück-Flieg"-Animation angezeigt, die anzeigt, dass das Ziehen und Ablegen fehlgeschlagen ist. Jedes Element kann durch das Abbrechen des [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignisses mit `preventDefault()` zu einem Zielfeld werden.

Das [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis wird nur auf Zielfeldern ausgelöst, und es ist die einzige Zeit, zu der Sie den Drag-Datenspeicher lesen können.

Das folgende Beispiel zeigt ein minimales gültiges Zielfeld und kombiniert auch den Code aus den vorherigen Beispielen.

```html live-sample___drop_target
<p id="target">Drop Zone</p>
```

```js live-sample___drop_target
const target = document.getElementById("target");

// Cancel dragover so that drop can fire
target.addEventListener("dragover", (ev) => {
  ev.preventDefault();
});
target.addEventListener("drop", (ev) => {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text/plain");
  ev.target.append(data);
});
```

{{EmbedLiveSample("drop_target", "", 300)}}

Weitere Informationen finden Sie unter [Festlegen von Zielfeldern](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#dragging_over_elements_and_specifying_drop_targets).

## Anleitungen

- [Ziehvorgänge](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
  - : Beschreibt die Schritte, die während eines Zieh- und Abladevorgangs auftreten, und was die Anwendung innerhalb jedes Handlers tun soll.
- [Arbeiten mit dem Drag-Datenspeicher](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
  - : Beschreibt, wie während eines Zieh- und Ablegevorgangs auf den Drag-Datenspeicher zugegriffen und in ihn geschrieben wird.
- [Datei-Ziehen und -Ablegen](/de/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop)
  - : Eine praktische Anleitung zur Implementierung einer Basisoberfläche, die das Ablegen von Dateien akzeptiert.
- [Kanban-Board mit Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API/Kanban_board)
  - : Eine praktische Anleitung zur Implementierung eines Kanban-Boards, bei dem Elemente innerhalb einer Webseite gezogen und abgelegt werden.

## Schnittstellen

- [`DragEvent`](/de/docs/Web/API/DragEvent)
  - : Das Ereignisobjekt, das an Ziehereignishandler übergeben wird.
- [`DataTransfer`](/de/docs/Web/API/DataTransfer)
  - : Hält alle zwischen Kontexten übertragenen Daten, bestehend aus Textelementen und Dateielementen. Ursprünglich für Drag and Drop entworfen, wird es jetzt auch in anderen Kontexten wie der [Clipboard API](/de/docs/Web/API/Clipboard_API) verwendet.
- [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)
  - : Repräsentiert einen Eintrag im Drag-Datenspeicher, der ein Textelement oder ein Dateielement sein kann.
- [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)
  - : Repräsentiert die Liste der [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekte im Drag-Datenspeicher.

## Beispiele

- [Kopieren und Verschieben von Elementen mit der `DataTransfer`-Schnittstelle](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransfer.html)
- [Kopieren und Verschieben von Elementen mit der `DataTransferListItem`-Schnittstelle](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransferItemList.html)

Referenzseiten für jede Schnittstelle haben auch einzelne Beispiele.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Ziehvorgänge](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Arbeiten mit dem Drag-Datenspeicher](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
- [HTML Living Standard: Ziehen und Ablegen](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
- [Drag-and-Drop-Interoperabilitätsdaten von CanIUse](https://caniuse.com/#search=draganddrop)
