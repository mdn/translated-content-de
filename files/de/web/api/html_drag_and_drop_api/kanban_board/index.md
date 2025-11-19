---
title: Kanban-Board mit Drag and Drop
slug: Web/API/HTML_Drag_and_Drop_API/Kanban_board
l10n:
  sourceCommit: 8432c4ca716350c34d197c130e6fe93de5c8250c
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Wie auf der [Startseite](/de/docs/Web/API/HTML_Drag_and_Drop_API#concepts_and_usage) erwähnt, modelliert die Drag-and-Drop-API gleichzeitig drei Anwendungsfälle: das Ziehen von Elementen innerhalb einer Seite, das Ziehen von Daten aus einer Seite heraus und das Ziehen von Daten in eine Seite hinein. Diese Anleitung demonstriert den ersten Anwendungsfall: das Ziehen von Elementen innerhalb einer Seite. Wir werden eine Kanban-Anwendung implementieren, ähnlich der Funktionalität, die von [GitHub-Projekten](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) oder [Trello](https://trello.com/) bereitgestellt wird.

## Grundlegendes Seitenlayout

Da wir hier hauptsächlich das Ziehen und Neuordnen demonstrieren, werden wir einige dynamische Aspekte eines echten Kanban-Boards, wie das Hinzufügen und Entfernen von Aufgaben, weglassen. Stattdessen werden alle unsere Spalten und Aufgaben hartcodiert im HTML definiert.

```html live-sample___kanban
<div class="container">
  <div class="task-column">
    <h2>To Do</h2>
    <ul class="tasks">
      <li class="task" draggable="true">Find out where Soul Stone is</li>
    </ul>
  </div>
  <div class="task-column">
    <h2>In Progress</h2>
    <ul class="tasks">
      <li class="task" draggable="true">Collect Time Stone from Dr. Strange</li>
      <li class="task" draggable="true">Collect Mind Stone from Vision</li>
      <li class="task" draggable="true">
        Collect Reality Stone from the Collector
      </li>
    </ul>
  </div>
  <div class="task-column">
    <h2>Done</h2>
    <ul class="tasks">
      <li class="task" draggable="true">Collect Power Stone from Xandar</li>
      <li class="task" draggable="true">Collect Space Stone from Asgard</li>
    </ul>
  </div>
</div>
```

```css live-sample___kanban
body {
  font-family: "Arial", sans-serif;
}

.container {
  display: flex;
  gap: 0.5rem;
}

.task-column {
  border: 1px solid #cccccc;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  flex: 1;
}

.tasks {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
}

.task-column h2 {
  text-align: center;
}

.task {
  background-color: #f9f9f9;
  border: 1px solid #eeeeee;
  border-radius: 3px;
  padding: 8px;
  cursor: grab;
}

.task:active {
  cursor: grabbing;
}

@media (width < 600px) {
  .container {
    flex-direction: column;
  }
}
```

Dies definiert die grundlegende Struktur und die Stile unserer Anwendung. Die Aufgaben sind jeweils [draggable](/de/docs/Web/API/HTML_Drag_and_Drop_API#draggable_items), aber sie machen noch nichts, wenn sie gezogen werden.

## Drop-Ziele deklarieren

Wir möchten die Aufgabenspalten in gültige [Drop-Ziele](/de/docs/Web/API/HTML_Drag_and_Drop_API#drop_target) für die gezogenen Aufgaben umwandeln. Als Grundlage müssen wir auf [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) hören und es abbrechen. Wir achten jedoch darauf, das Ereignis nur abzubrechen, wenn das Drag-Ereignis eine Aufgabe zieht — wenn wir versuchen, etwas anderes fallen zu lassen, sollte die Spalte kein Drop-Ziel sein.

Zuerst speichern Sie alle Spalten in einer globalen Variable.

```js live-sample___kanban
const columns = document.querySelectorAll(".task-column");
```

Dann deklarieren Sie einen `dragover`-Ereignishandler für jede Spalte — dieser Ereignishandler wird später erweitert.

```js
columns.forEach((column) => {
  column.addEventListener("dragover", (event) => {
    // Test a custom type we will set later
    if (event.dataTransfer.types.includes("task")) {
      event.preventDefault();
    }
  });
});
```

Jetzt, wenn eine Aufgabe über eine Spalte gezogen wird, sehen Sie möglicherweise einen [Cursor-Effekt](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drop_effects) wie ein Pluszeichen, das anzeigt, dass die Aufgabe beim Loslassen kopiert wird, da Kopieren die Standardaktion ist. Später werden wir diesen Indikator ändern, da die Aufgabe tatsächlich verschoben wird.

## Elemente verschieben

Nun implementieren wir die Kernfunktionalität: die Fähigkeit, Aufgaben zwischen Spalten zu verschieben. Es besteht aus zwei Schritten: das hinzugefügte Element zur Zielspalte hinzufügen und es von der Quellspalte entfernen.

Wir verfolgen das gezogene Element und die Quellspalte auf diese Weise: Beim `dragstart` markieren wir die gezogene Aufgabe mit einer `id`. Dann können wir beim `drop` diese ID verwenden, um die Aufgabe zu identifizieren und sie von der Quellspalte zu entfernen. Schließlich erinnern wir uns daran, die ID bei `dragend` zu entfernen, damit wir bei einem späteren Ziehvorgang keine doppelten IDs erstellen.

```js live-sample___kanban
const tasks = document.querySelectorAll(".task");

tasks.forEach((task) => {
  task.addEventListener("dragstart", (event) => {
    task.id = "dragged-task";
    event.dataTransfer.effectAllowed = "move";
    // Custom type to identify a task drag
    event.dataTransfer.setData("task", "");
  });

  task.addEventListener("dragend", (event) => {
    task.removeAttribute("id");
  });
});
```

Es gibt andere Optionen, wie jedem Element eine eindeutige ID zu geben und diese ID dann im [`dataTransfer`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store) zu speichern oder eine Referenz auf das DOM-Element in einer globalen Variablen zu speichern. All diese Ansätze haben ungefähr den gleichen Effekt.

Da Aufgaben immer verschoben und niemals kopiert oder verlinkt werden sollen, setzen wir auch die Eigenschaft [`DataTransfer.effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed) auf `"move"`, damit es die einzige erlaubte Wirkung ist. Diese Änderung aktualisiert den Cursor-Effekt, um eine Verschiebeoperation anzuzeigen. Darüber hinaus setzen wir ein `dataTransfer`-Element vom Typ `task`, das verwendet wird, um die gezogene Aufgabe, wie zuvor gezeigt, zu identifizieren.

Wie in [Drop-Effekten](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drop_effects) erwähnt, dürfen Sie `effectAllowed` nur im `dragstart`-Handler für das ziehbare Element setzen.

Nun können wir die Verschiebeaktion tatsächlich im [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Handler auf der Zielspalte auslösen. Wir können die gezogene Aufgabe anhand ihrer ID identifizieren, sie aus dem DOM-Baum entfernen, indem wir [`Element.remove()`](/de/docs/Web/API/Element/remove) verwenden, und sie dann in die Zielspalte wieder einfügen. Da wir das Loslassen nur erlauben, wenn der Drag tatsächlich eine Aufgabe fallen lässt, können wir sicher sein, dass `draggedTask` existieren muss.

```js
columns.forEach((column) => {
  column.addEventListener("drop", (event) => {
    event.preventDefault();

    const draggedTask = document.getElementById("dragged-task");
    draggedTask.remove();
    column.children[1].appendChild(draggedTask);
  });
});
```

Zu diesem Zeitpunkt ist die Kernbenutzererfahrung bereits vorhanden, und Sie können Aufgaben zwischen Spalten verschieben.

## An einem bestimmten Ort einfügen

Derzeit wird die abgelegte Aufgabe immer am Ende der Spalte eingefügt, unabhängig davon, wo wir sie ablegen. Wir verbessern nun die Ablagelogik so, dass sie an der Ablegeposition eingefügt wird. Aber wie sollten wir den Ablegeort einer Einfügeindex in der Zielspalte zuordnen? Dies ist eine Ermessensentscheidung, aber wir werden die folgende Heuristik verwenden (fühlen Sie sich frei, Ihre eigene auszuwählen): Das Element wird an dem Index der Aufgaben eingefügt, über der der Cursor schwebt. Wenn der Cursor über dem ersten oder unter dem letzten Element ist, wird es am Anfang oder Ende der Spalte eingefügt. Wenn der Cursor zwischen zwei Elementen ist, wird es am Index des Elements unter dem Cursor eingefügt.

Um den Ablegeort deutlich zu machen, fügen wir einen [visuellen Indikator](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#custom_drop_feedback) für den Ablegeort hinzu. Dies kann durch das Einfügen eines Platzelementes am Ablegeort geschehen, das beim Ablegen durch die gezogene Aufgabe ersetzt wird. Definieren Sie zuerst die Erstellungsfunktion für den Platzhalter:

```css live-sample___kanban
.placeholder {
  border: 1px solid #cccccc;
  border-radius: 3px;
}
```

```js live-sample___kanban
function makePlaceholder(draggedTask) {
  const placeholder = document.createElement("li");
  placeholder.classList.add("placeholder");
  placeholder.style.height = `${draggedTask.offsetHeight}px`;
  return placeholder;
}
```

Dieser Indikator wird beim [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) herumgeschoben. Da dies das Komplexeste von allen ist, haben wir es in eine separate Funktion extrahiert. Der vorherige Code für das `dragover`-Ereignis wurde in diese Funktion verschoben. Zuerst holen wir die benötigten Elemente, und brechen sicher ab, wenn der Drag keine Aufgabe ist:

```js live-sample___kanban
function movePlaceholder(event) {
  if (!event.dataTransfer.types.includes("task")) {
    return;
  }
  event.preventDefault();
  // Must exist because the ID is added for all drag events with a "task" data entry
  const draggedTask = document.getElementById("dragged-task");
  const column = event.currentTarget;
  const tasks = column.children[1];
  const existingPlaceholder = column.querySelector(".placeholder");
```

Wenn bereits ein Platzhalter existiert und der Cursor sich weiterhin darin befindet, müssen wir nichts ändern. Beachten Sie, dass wir den vorhandenen Platzhalter an dieser Stelle nicht entfernen, da dies das Layout der Seite ändern und möglicherweise ein Flimmern verursachen würde. Wir ändern das Layout erst, wenn wir die neue Position vollständig bestimmt haben.

```js live-sample___kanban
if (existingPlaceholder) {
  const placeholderRect = existingPlaceholder.getBoundingClientRect();
  if (
    placeholderRect.top <= event.clientY &&
    placeholderRect.bottom >= event.clientY
  ) {
    return;
  }
}
```

Andernfalls suchen wir nach der ersten Aufgabe, die sich nicht vollständig über dem Cursor befindet. Diese Aufgabe kann entweder die erste Aufgabe sein, wenn der Cursor über allen Elementen ist, die Aufgabe, die den Cursor enthält oder die Aufgabe unter dem Cursor, wenn sich der Cursor zwischen zwei Elementen befindet. Unser Platzhalter sollte an der Position dieser Aufgabe platziert werden. Beachten Sie, dass wir nur die Y-Koordinaten vergleichen: Selbst wenn sich der Cursor in den linken oder rechten Rändern befindet, sollte er dennoch als über der Aufgabe befindlich betrachtet werden. Nachdem der geeignete Einfügungspunkt gefunden wurde, entscheiden wir Folgendes:

- Wenn der Einfügungspunkt bereits der Platzhalter ist, müssen wir nichts ändern. Beachten Sie, dass dies nicht genau dasselbe wie die oben genannte Bedingung ist: Diese könnte wahr sein, wenn sich der Cursor direkt über dem Platzhalter zwischen zwei Elementen befindet.
- Wenn der gezogene Gegenstand beim Ablegen genau dort platziert wird, wo er gestartet ist, sollten wir überhaupt keinen Platzhalter anzeigen. Dies passiert, wenn der Platzhalter direkt neben `draggedTask` eingefügt werden soll. Daher prüfen wir, ob wir unmittelbar vor `draggedTask` (`task === draggedTask`) oder dahinter (`task.previousElementSibling === draggedTask`) einfügen. In diesem Fall entfernen wir den vorhandenen Platzhalter, falls vorhanden.
- Schließlich fügen wir den Platzhalter an der bestimmten Position ein.

```js live-sample___kanban
for (const task of tasks.children) {
  if (task.getBoundingClientRect().bottom >= event.clientY) {
    if (task === existingPlaceholder) return;
    existingPlaceholder?.remove();
    if (task === draggedTask || task.previousElementSibling === draggedTask)
      return;
    tasks.insertBefore(
      existingPlaceholder ?? makePlaceholder(draggedTask),
      task,
    );
    return;
  }
}
```

Wenn die obige Schleife keine geeignete Aufgabe gefunden hat, bedeutet dies, dass alle vorhandenen Aufgaben über dem Cursor sind und wir müssen den Platzhalter am Ende einfügen. Wieder fügen wir den Platzhalter nicht hinzu, wenn die gezogene Aufgabe bereits das letzte Element ist.

```js live-sample___kanban
  existingPlaceholder?.remove();
  if (tasks.lastElementChild === draggedTask) return;
  tasks.append(existingPlaceholder ?? makePlaceholder(draggedTask));
}
```

Schließlich wird der Platzhalter bei [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event) oder [`drop`](/de/docs/Web/API/HTMLElement/drop_event) entfernt. Beachten Sie, dass das `dragleave`-Ereignis ausgelöst wird, wenn der Cursor die Spalte verlässt, um in ihr Kindelement einzutreten. Da wir den Platzhalter nur entfernen möchten, wenn der Cursor die Spalte vollständig verlässt, müssen wir prüfen, ob der [`relatedTarget`](/de/docs/Web/API/MouseEvent/relatedTarget), das Element, in das wir einziehen, ein Kind der Spalte ist.

Der `drop`-Handler modifiziert, was wir in [Elemente verschieben](#elemente_verschieben) implementiert haben. Anstatt die Aufgabe am Ende anzuhängen, müssen wir sie in der Mitte einfügen und nutzen dazu die Position des Platzhalters.

```js live-sample___kanban
columns.forEach((column) => {
  column.addEventListener("dragover", movePlaceholder);
  column.addEventListener("dragleave", (event) => {
    // If we are moving into a child element,
    // we aren't actually leaving the column
    if (column.contains(event.relatedTarget)) return;
    const placeholder = column.querySelector(".placeholder");
    placeholder?.remove();
  });
  column.addEventListener("drop", (event) => {
    event.preventDefault();

    const draggedTask = document.getElementById("dragged-task");
    const placeholder = column.querySelector(".placeholder");
    if (!placeholder) return;
    draggedTask.remove();
    column.children[1].insertBefore(draggedTask, placeholder);
    placeholder.remove();
  });
});
```

## Das original Aufgabe ausgrauen

Während des Ziehens kann es den Anschein haben, dass die ursprüngliche Aufgabe immer noch an ihrem Platz ist. Um einen visuellen Hinweis zu geben, dass die Aufgabe bewegt wird, können wir einen "ausgegrauten" Effekt anwenden. Es ist auch üblich, sie einfach aus dem DOM zu entfernen, aber das könnte die gesamte Logik der DOM-Messung stören, die wir eingerichtet haben, daher können wir CSS verwenden, um den gewünschten Effekt zu erzielen. Dies ist unkompliziert, da wir bereits eine stabile ID für die gezogene Aufgabe haben.

```css live-sample___kanban
#dragged-task {
  opacity: 0.2;
}
```

## Ergebnis

{{EmbedLiveSample("kanban", "", 400)}}

## Siehe auch

- [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
