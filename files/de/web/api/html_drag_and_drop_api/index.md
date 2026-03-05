---
title: HTML Drag and Drop API
slug: Web/API/HTML_Drag_and_Drop_API
l10n:
  sourceCommit: 58525c603c8c4696a85342ffc6e8e6661b28a1c3
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

**HTML Drag and Drop** Schnittstellen ermöglichen es Anwendungen, Drag-and-Drop-Funktionen in Browsern zu nutzen.

Der Benutzer kann _draggable_ Elemente mit der Maus auswählen, diese Elemente zu einem _droppable_ Element ziehen und sie durch Loslassen der Maustaste ablegen. Eine durchscheinende Darstellung der _draggable_ Elemente folgt dem Zeiger während des Ziehvorgangs.

Sie können anpassen, welche Elemente _draggable_ werden können, welche Art von Feedback die _draggable_ Elemente erzeugen und welche Elemente _droppable_ sind.

Dieser Überblick über HTML Drag and Drop enthält eine Beschreibung der Schnittstellen, grundlegende Schritte zur Hinzufügung von Drag-and-Drop-Unterstützung zu einer Anwendung und eine Interoperabilitätszusammenfassung der Schnittstellen.

## Konzepte und Nutzung

An der Oberfläche hat Drag and Drop tatsächlich drei unterschiedliche Anwendungsfälle: [Elemente innerhalb einer Seite ziehen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Kanban_board), Daten aus einer Seite ziehen und [Daten in eine Seite ziehen](/de/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop). Sie haben subtil unterschiedliche Anforderungen und Implementierungen. Dennoch bietet die Drag and Drop API ein einheitliches Modell zur Betrachtung all dieser Interaktionen.

Im Kern umfasst ein Ziehvorgang drei Dinge:

- Das [Element, das gezogen wird](#draggable_elemente)
- Die [zu übertragenden Daten](#drag-datenspeicher)
- Das [Ziel, auf dem abgelegt wird](#drop-ziel)

Es ist nicht unbedingt wahr, dass alle drei unter Ihrer Kontrolle stehen oder Sie sie selbst definieren müssen:

- Beim Ziehen externer Daten in eine Seite gibt es kein zu definierendes draggable Item (zum Beispiel könnte es sich um eine Datei im Dateiexplorer des Betriebssystems handeln).
- Beim Ziehen von Elementen innerhalb einer Seite müssen Sie oft keine zu übertragenden Daten definieren; Sie manipulieren einfach das gezogene Element.
- Beim Herausziehen von der Seite gibt es kein zu definierendes Zielobjekt.

Wir werden untersuchen, wie jeder dieser Aspekte definiert und genutzt werden kann.

### Drag-Ereignisse

HTML Drag-and-Drop verwendet das [DOM-Ereignismodell](/de/docs/Web/API/Event) und die von [Mausereignissen](/de/docs/Web/API/MouseEvent) geerbten _[drag events](/de/docs/Web/API/DragEvent)_. Während Ziehvorgänge werden mehrere Ereignistypen ausgelöst, und einige Ereignisse könnten viele Male ausgelöst werden, wie zum Beispiel die Ereignisse [`drag`](/de/docs/Web/API/HTMLElement/drag_event) und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event).

| Ereignis                                                    | Wird ausgelöst, wenn...                                                                         |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) | ...das [draggable Item](#draggable_elemente) zu ziehen beginnt.                                 |
| [`drag`](/de/docs/Web/API/HTMLElement/drag_event)           | ...das draggable Item gezogen wird, alle paar hundert Millisekunden.                            |
| [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) | ...das Element ein draggable Item betritt.                                                      |
| [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event) | ...das Element ein draggable Item verlässt.                                                     |
| [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)   | ...das Element von einem draggable Item überzogen wird, alle paar hundert Millisekunden.        |
| [`drop`](/de/docs/Web/API/HTMLElement/drop_event)           | ...das Element ein [drop-Ziel](#drop-ziel) ist und das draggable Item darüber losgelassen wird. |
| [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)     | ...das draggable Item das Ziehen beendet.                                                       |

> [!NOTE]
> Die Ereignisse `dragstart`, `drag` und `dragend` werden auf dem gezogenen Element ausgelöst und können daher nicht auftreten, wenn eine Datei vom Betriebssystem in den Browser gezogen wird.
>
> Ebenso werden die Ereignisse `dragenter`, `dragleave`, `dragover` und `drop` auf Elementen ausgelöst, die potenzielle Ablageziele sind, und können daher nicht auftreten, wenn ein Element aus dem Browser herausgezogen wird.

Für weitere Informationen siehe [Drag-Vorgänge](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations).

### Draggable Elemente

In HTML sind Bilder, Links und Auswahlen standardmäßig draggable. Um ein beliebiges Element draggable zu machen, setzen Sie das Attribut [`draggable`](/de/docs/Web/HTML/Reference/Global_attributes/draggable) auf den Wert `"true"`.

```html live-sample___draggable_element live-sample___drop_target
<p id="p1" draggable="true">This element is draggable.</p>
```

Zu diesem Zeitpunkt hat das Element bereits das Zieherscheinen, obwohl noch kein Verhalten definiert ist:

{{EmbedLiveSample("draggable_element", "", 100)}}

Für Bilder und Links ist `draggable` standardmäßig auf `true`, sodass Sie es nur auf `false` setzen würden, um das Ziehen dieser Elemente zu deaktivieren. Bei nicht draggable Elementen wird mit der "Zieh"-Geste normalerweise der Text ausgewählt.

> [!NOTE]
> Wenn ein Element draggable gemacht wird, können der Text oder andere Elemente innerhalb davon nicht mehr auf die normale Weise durch Klicken und Ziehen mit der Maus ausgewählt werden. Stattdessen muss der Benutzer die <kbd>Alt</kbd>-Taste gedrückt halten, um Text mit der Maus auszuwählen, oder die Tastatur verwenden.

Eine Auswahl ist ebenfalls draggable. In diesem Fall ist der _source node_ oder der Knoten, auf dem Ereignisse wie `dragstart` und `dragend` ausgelöst werden, der Textknoten, auf dem das Ziehen begonnen hat. Die Auswahl kann teilweise oder vollständig mehrere Knoten enthalten, einschließlich Textknoten und Elementknoten, die alle gleichzeitig als gezogen betrachtet werden.

Wie bereits erwähnt, kann das gezogene Element auch etwas sein, das sich nicht auf einer Webseite befindet—zum Beispiel eine Datei im Dateiexplorer des Betriebssystems. Allerdings können nur Elemente auf der Webseite die Ereignisse [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) und [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) auslösen.

Für weitere Informationen siehe den [Leitfaden zu Drag-Vorgängen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations).

### Drag-Datenspeicher

Sie können keine JavaScript-Objekte direkt auf beliebige Webseiten übertragen, und sicherlich nicht auf externe Anwendungen. Um Daten in und aus der Webseite zu übertragen, müssen die Daten in einen String serialisiert werden (oder als [`File`](/de/docs/Web/API/File)). Bei Drag and Drop ist dieser String in einem [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekt gekapselt, das auch einen bestimmten `type` definiert—typischerweise ein MIME-Typ wie `text/html`—der definiert, wie der String interpretiert werden soll.

Jeder Drag-and-Drop-Vorgang hat einen zugehörigen _drag data store_, welches ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt ist, das über die [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer)-Eigenschaft des [`DragEvent`](/de/docs/Web/API/DragEvent) zugänglich ist. Für standardmäßig draggable Elemente wie Bilder, Links und Auswahlen sind die Drag-Daten bereits vom Browser definiert; für benutzerdefinierte draggable Elemente, die mit dem Attribut `draggable` definiert wurden, müssen Sie die Drag-Daten selbst definieren. Die einzige Zeit, zu der Sie Änderungen am Datenspeicher vornehmen können, ist innerhalb des [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Handlers—für die `dataTransfer` eines anderen Drag-Ereignisses ist der Datenspeicher nicht modifizierbar.

Die Methode [`setData()`](/de/docs/Web/API/DataTransfer/setData) kann verwendet werden, um ein Element zu den Drag-Daten hinzuzufügen, wie im folgenden Beispiel gezeigt.

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

Darüber hinaus ist die einzige Zeit, zu der Sie aus dem Datenspeicher _lesen_ können, abgesehen vom `dragstart`-Ereignis, während des `drop`-Ereignisses (was dem Ablageziel ermöglicht, die Daten abzurufen). Für alle anderen Ereignisse kann nicht auf den Datenspeicher zugegriffen werden.

Für weitere Informationen, lesen Sie [Arbeiten mit dem Drag-Datenspeicher](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store).

### Drop-Ziel

Ein _drop target_ ist ein Element, auf dem ein Benutzer ein gezogenes Element ablegen kann. Standardmäßig sind die meisten Elemente keine Drop-Ziele, und wenn Sie das Ziehen loslassen, wird eine "Zurück-Fly"-Animation angezeigt, die anzeigt, dass das Ziehen und Ablegen fehlgeschlagen ist. Jedes Element kann ein Drop-Ziel werden, indem das [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)-Ereignis, das darauf ausgelöst wird, mit `preventDefault()` abgebrochen wird.

Das [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Ereignis wird nur auf Drop-Zielen ausgelöst, und es ist der einzige Zeitpunkt, zu dem Sie den Drag-Datenspeicher lesen können.

Das folgende Beispiel zeigt ein minimales gültiges Drop-Ziel und kombiniert zusätzlich den Code aus den vorherigen Beispielen.

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

Für weitere Informationen siehe [Festlegen von Drop-Zielen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#dragging_over_elements_and_specifying_drop_targets).

## Leitfäden

- [Drag-Vorgänge](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
  - : Beschreibt die Schritte, die während eines Drag-and-Drop-Vorgangs stattfinden, und was die Anwendung in jedem Handler tun soll.
- [Arbeiten mit dem Drag-Datenspeicher](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
  - : Beschreibt, wie man während eines Drag-and-Drop-Vorgangs den Drag-Datenspeicher liest und schreibt.
- [Datei-Drag-and-Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop)
  - : Ein praktischer Leitfaden zur Implementierung einer einfachen Schnittstelle, die Dateiabwürfe akzeptiert.
- [Kanban-Board mit Drag-and-Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API/Kanban_board)
  - : Ein praktischer Leitfaden zur Implementierung eines Kanban-Boards, bei dem Elemente innerhalb einer Webseite gezogen und abgelegt werden.

## Schnittstellen

- [`DragEvent`](/de/docs/Web/API/DragEvent)
  - : Das Ereignisobjekt, das an Drag-Event-Handler übergeben wird.
- [`DataTransfer`](/de/docs/Web/API/DataTransfer)
  - : Enthält alle zwischen Kontexten übertragenen Daten, bestehend aus Textelementen und Dateielementen. Ursprünglich für Drag-and-Drop entwickelt, wird es jetzt auch in anderen Kontexten wie der [Clipboard API](/de/docs/Web/API/Clipboard_API) genutzt.
- [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)
  - : Repräsentiert ein Element im Drag-Datenspeicher, das ein Textelement oder ein Dateielement sein kann.
- [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)
  - : Repräsentiert die Liste von [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)-Objekten im Drag-Datenspeicher.

## Beispiele

- [Kopieren und Verschieben von Elementen mit der `DataTransfer`-Schnittstelle](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransfer.html)
- [Kopieren und Verschieben von Elementen mit der `DataTransferListItem`-Schnittstelle](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransferItemList.html)

Referenzseiten für jede Schnittstelle haben auch individuelle Beispiele.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Drag Operations](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Arbeiten mit dem Drag-Datenspeicher](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
- [Drag und Drop Interoperabilitätsdaten von CanIUse](https://caniuse.com/#search=draganddrop)
