---
title: HTML Drag and Drop API
slug: Web/API/HTML_Drag_and_Drop_API
l10n:
  sourceCommit: 3385bda58637833eedc9b8dc41a2804e653208a7
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

**HTML Drag and Drop** Schnittstellen ermöglichen Anwendungen, Drag-and-Drop-Funktionen in Browsern zu nutzen.

Der Nutzer kann _draggable_ Elemente mit der Maus auswählen, diese zu einem _droppable_ Element ziehen und durch Loslassen der Maustaste fallen lassen. Eine durchscheinende Darstellung der _draggable_ Elemente folgt dem Zeiger während des Ziehvorgangs.

Sie können anpassen, welche Elemente _draggable_ werden können, welche Art von Feedback die _draggable_ Elemente erzeugen, und welche Elemente _droppable_ sind.

Diese Übersicht über HTML Drag and Drop umfasst eine Beschreibung der Schnittstellen, grundlegende Schritte zur Hinzufügung von Drag-and-Drop-Unterstützung in eine Anwendung sowie eine Zusammenfassung der Interoperabilität der Schnittstellen.

## Konzepte und Nutzung

Auf den ersten Blick gibt es eigentlich drei verschiedene Anwendungsfälle für Drag and Drop: [Elemente innerhalb einer Seite ziehen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Kanban_board), Daten aus einer Seite herausziehen und [Daten in eine Seite ziehen](/de/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop). Diese haben leicht unterschiedliche Anforderungen und Implementierungen. Die Drag and Drop API bietet jedoch ein einheitliches Modell, um über all diese Interaktionen nachzudenken.

Im Kern umfasst ein Ziehvorgang drei Dinge:

- Das [Element, das gezogen wird](#draggable_elemente)
- Die [zugrunde liegenden Daten, die übertragen werden sollen](#drag-datenbasis)
- Das [Ziel, auf dem abgelegt wird](#drop-ziel)

Es ist nicht unbedingt der Fall, dass alle drei unter Ihrer Kontrolle sind oder dass Sie sie selbst definieren müssen:

- Beim Ziehen externer Daten in eine Seite gibt es kein zu definierendes draggable Element (zum Beispiel könnte es sich um eine Datei im Datei-Explorer des Betriebssystems handeln).
- Beim Ziehen von Elementen innerhalb einer Seite müssen Sie oft keine übertragenen Daten definieren; Sie manipulieren einfach das gezogene Element.
- Wenn Sie Daten aus der Seite herausziehen, muss kein Ziel definiert werden.

Wir werden uns ansehen, wie jede definiert und verwendet werden kann.

### Drag-Ereignisse

HTML Drag-and-Drop verwendet das [DOM-Ereignismodell](/de/docs/Web/API/Event) und _[drag events](/de/docs/Web/API/DragEvent)_, die von [mouse events](/de/docs/Web/API/MouseEvent) erben. Während der Ziehvorgänge werden mehrere Ereignistypen ausgelöst, und einige Ereignisse könnten mehrmals ausgelöst werden, wie die [`drag`](/de/docs/Web/API/HTMLElement/drag_event) und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) Ereignisse.

| Ereignis                                                    | Wird ausgelöst, wenn...                                                                           |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) | ...das [draggable Element](#draggable_elemente) angefangen wird zu ziehen.                        |
| [`drag`](/de/docs/Web/API/HTMLElement/drag_event)           | ...das draggable Element gezogen wird (wird wiederholt ausgelöst).                                |
| [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) | ...ein draggable Element eintritt.                                                                |
| [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event) | ...ein draggable Element verlässt es.                                                             |
| [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)   | ...ein draggable Element über es gezogen wird (wird wiederholt ausgelöst).                        |
| [`drop`](/de/docs/Web/API/HTMLElement/drop_event)           | ...das Element ein [drop target](#drop-ziel) ist und das draggable Element darüber abgelegt wird. |
| [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)     | ...das draggable Element aufhört, gezogen zu werden.                                              |

> [!NOTE]
> Die `dragstart`, `drag` und `dragend` Ereignisse werden auf dem gezogenen Element ausgelöst und können daher nicht ausgelöst werden, wenn eine Datei aus dem Betriebssystem in den Browser gezogen wird.
>
> Ebenso werden die `dragenter`, `dragleave`, `dragover` und `drop` Ereignisse auf Elementen ausgelöst, die potenzielle Ablageziele sind, und können daher nicht ausgelöst werden, wenn ein Element aus dem Browser herausgezogen wird.

Weitere Informationen finden Sie unter [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations).

### Draggable Elemente

In HTML sind Bilder, Links und Selektionen standardmäßig draggable. Um ein beliebiges Element draggable zu machen, setzen Sie das [`draggable`](/de/docs/Web/HTML/Reference/Global_attributes/draggable) Attribut auf den Wert `"true"`.

```html live-sample___draggable_element live-sample___drop_target
<p id="p1" draggable="true">This element is draggable.</p>
```

An diesem Punkt hat das Element bereits das Zieh-Aussehen, obwohl noch kein Verhalten definiert ist:

{{EmbedLiveSample("draggable_element", "", 100)}}

Für Bilder und Links ist `draggable` standardmäßig auf `true` gesetzt, sodass Sie es nur auf `false` setzen würden, um das Ziehen dieser Elemente zu deaktivieren. Bei nicht draggable Elementen bewirkt die "Ziehen" Geste normalerweise, dass der Text ausgewählt wird.

> [!NOTE]
> Wenn ein Element draggable gemacht wird, können Text oder andere Elemente darin nicht mehr auf normale Weise durch Klicken und Ziehen mit der Maus ausgewählt werden. Stattdessen muss der Benutzer die <kbd>Alt</kbd> Taste gedrückt halten, um Text mit der Maus auszuwählen, oder die Tastatur verwenden.

Eine Selektion ist ebenfalls draggable. In diesem Fall ist der _source node_ oder der Knoten, auf dem verschiedene Ereignisse wie `dragstart` und `dragend` ausgelöst werden, der Textknoten, auf dem das Ziehen begonnen hat. Die Selektion kann mehrere Knoten, einschließlich Textknoten und Elementknoten, teilweise oder vollständig enthalten, die alle gleichzeitig als gezogen betrachtet werden.

Wie bereits erwähnt, kann das gezogene Element auch etwas sein, das nicht auf einer Webseite ist – zum Beispiel eine Datei im Datei-Explorer des Betriebssystems. Allerdings können nur Elemente auf der Webseite die [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) und [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event) Ereignisse auslösen.

Weitere Informationen finden Sie im [Drag-Operationen-Leitfaden](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations).

### Drag-Datenbasis

Sie können keine JavaScript-Objekte direkt an beliebige Webseiten und sicher nicht an externe Anwendungen übertragen, daher müssen die Daten, um in die Webseite ein- und ausgehen zu können, in einen String (oder als [`File`](/de/docs/Web/API/File)) serialisiert werden. Bei Drag and Drop wird dieser String in einem [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) Objekt gekapselt, das auch einen bestimmten `type` definiert – typischerweise ein MIME-Typ wie `text/html` –, der angibt, wie der String interpretiert werden sollte.

Jeder Drag-and-Drop-Vorgang hat eine zugehörige _drag data store_, die ein [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt ist, das über die [`dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) Eigenschaft des [`DragEvent`](/de/docs/Web/API/DragEvent) zugänglich ist. Für die standardmäßig draggable Elemente wie Bilder, Links und Selektionen sind die Drag-Daten bereits vom Browser definiert; bei benutzerdefinierten draggable Elementen, die mit dem `draggable` Attribut definiert sind, müssen Sie die Drag-Daten selbst definieren. Der einzige Zeitpunkt, um Änderungen an der Datenbasis vorzunehmen, ist innerhalb des [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) Handlers – für das `dataTransfer` eines anderen Drag-Ereignisses kann die Datenbasis nicht geändert werden.

Die [`setData()`](/de/docs/Web/API/DataTransfer/setData) Methode kann verwendet werden, um ein Element zu den Drag-Daten hinzuzufügen, wie im folgenden Beispiel gezeigt.

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

Darüber hinaus ist der einzige Zeitpunkt, an dem Sie aus der Datenbasis _lesen_ können, abgesehen vom `dragstart` Ereignis, während des `drop` Ereignisses (was dem Ablageziel ermöglicht, die Daten abzurufen). Bei allen anderen Ereignissen kann nicht auf die Datenbasis zugegriffen werden.

Für weitere Informationen lesen Sie [Arbeiten mit der Drag-Datenbasis](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store).

### Drop-Ziel

Ein _drop target_ ist ein Element, auf das ein Nutzer ein gezogenes Element ablegen kann. Standardmäßig sind die meisten Elemente keine drop targets, und wenn Sie das Ziehen freigeben, wird eine "Zurückfliegen" Animation angezeigt, die darauf hinweist, dass das Drag and Drop fehlgeschlagen ist. Jedes Element kann ein drop target werden, indem das [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) Ereignis, das darauf ausgelöst wird, mit `preventDefault()` abgebrochen wird.

Das [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignis wird nur auf drop targets ausgelöst, und es ist der einzige Zeitpunkt, an dem Sie die Drag-Datenbasis lesen können.

Das folgende Beispiel zeigt ein minimales gültiges drop target und kombiniert auch den Code aus den vorherigen Beispielen.

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

Weitere Informationen finden Sie unter [Spezifizieren von Drop-Zielen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#dragging_over_elements_and_specifying_drop_targets).

## Leitfäden

- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
  - : Beschreibt die Schritte, die während eines Drag-and-Drop-Vorgangs auftreten, und was die Anwendung innerhalb jedes Handlers tun sollte.
- [Arbeiten mit der Drag-Datenbasis](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
  - : Beschreibt, wie man während eines Drag-and-Drop-Vorgangs in die Drag-Datenbasis liest und schreibt.
- [Datei-Drag-and-Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop)
  - : Ein praktischer Leitfaden zur Implementierung einer grundlegenden Schnittstelle, die Dateiablagen akzeptiert.
- [Kanban-Board mit Drag-and-Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API/Kanban_board)
  - : Ein praktischer Leitfaden zur Implementierung eines Kanban-Boards, das Elemente innerhalb einer Webseite durch Ziehen und Ablegen umfasst.

## Schnittstellen

- [`DragEvent`](/de/docs/Web/API/DragEvent)
  - : Das Ereignisobjekt, das an Drag-Event-Handler übergeben wird.
- [`DataTransfer`](/de/docs/Web/API/DataTransfer)
  - : Enthält alle Daten, die zwischen Kontexten übertragen werden, bestehend aus Text- und Dateieinträgen. Ursprünglich für Drag and Drop entwickelt, wird es jetzt auch in anderen Kontexten wie der [Clipboard API](/de/docs/Web/API/Clipboard_API) verwendet.
- [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)
  - : Repräsentiert ein Element in der Drag-Datenbasis, das ein Textelement oder ein Dateielement sein kann.
- [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)
  - : Repräsentiert die Liste der [`DataTransferItem`](/de/docs/Web/API/DataTransferItem) Objekte in der Drag-Datenbasis.

## Beispiele

- [Kopieren und Verschieben von Elementen mit der `DataTransfer` Schnittstelle](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransfer.html)
- [Kopieren und Verschieben von Elementen mit der `DataTransferListItem` Schnittstelle](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransferItemList.html)

Referenzseiten für jede Schnittstelle haben auch einzelne Beispiele.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Arbeiten mit der Drag-Datenbasis](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)
- [HTML Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
- [Drag and Drop Interoperabilitätsdaten von CanIUse](https://caniuse.com/#search=draganddrop)
