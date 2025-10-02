---
title: Kanban-Board mit Drag-and-Drop
slug: Web/API/HTML_Drag_and_Drop_API/Kanban_board
l10n:
  sourceCommit: 8285d415db211ae9efe04752d9dab1b574450ee8
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Wie auf der [Startseite](/de/docs/Web/API/HTML_Drag_and_Drop_API#concepts_and_usage) erwähnt, modelliert die Drag-and-Drop-API gleichzeitig drei Anwendungsfälle: Ziehen von Elementen innerhalb einer Seite, Ziehen von Daten aus einer Seite heraus und Ziehen von Daten in eine Seite hinein. Dieses Tutorial demonstriert den ersten Anwendungsfall: Ziehen von Elementen innerhalb einer Seite. Wir werden eine Kanban-Anwendung umsetzen, ähnlich der Funktionalität, die von [GitHub-Projekten](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) oder [Trello](https://trello.com/) bereitgestellt wird.

## Grundlegendes Seitendesign

Da wir hier hauptsächlich das Ziehen und Neuanordnen demonstrieren, werden wir einige dynamische Aspekte eines echten Kanban-Boards, wie das Hinzufügen und Entfernen von Aufgaben, weglassen. Stattdessen werden alle unsere Spalten und Aufgaben im HTML fest codiert.

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

Dies definiert die grundlegende Struktur und die Stile für unsere Anwendung. Die Aufgaben sind jeweils [draggable](/de/docs/Web/API/HTML_Drag_and_Drop_API#draggable_items), aber sie tun noch nichts, wenn sie gezogen werden.

## Deklarieren von Zielbereichen

Wir möchten, dass die Aufgabenspalten zu gültigen [Drop-Zielen](/de/docs/Web/API/HTML_Drag_and_Drop_API#drop_target) für die gezogenen Aufgaben werden. Als Basis müssen wir auf [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) lauschen und es abbrechen. Wir nehmen jedoch Rücksicht darauf und brechen das Ereignis nur ab, wenn das Zieh-Ereignis eine Aufgabe zieht. Wenn wir versuchen, etwas anderes abzulegen, sollte die Spalte kein Drop-Ziel sein.

```js live-sample___kanban
const columns = document.querySelectorAll(".task-column");

columns.forEach((column) => {
  column.addEventListener("dragover", (event) => {
    // Test a custom type we will set later
    if (event.dataTransfer.types.includes("task")) {
      event.preventDefault();
    }
  });
});
```

Jetzt, wenn eine Aufgabe über eine Spalte gezogen wird, können Sie einen [Cursor-Effekt](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drop_effects) wie ein Pluszeichen sehen, das anzeigt, dass die Aufgabe kopiert wird, wenn sie abgelegt wird, da Kopieren die Standardaktion ist. Später werden wir diesen Indikator ändern, da die Aufgabe tatsächlich verschoben wird.

## Elemente verschieben

Jetzt implementieren wir die Kernfunktionalität: die Möglichkeit, Aufgaben zwischen Spalten zu verschieben. Es besteht aus zwei Schritten: Das gezogene Element in die Zielspalte hinzufügen und es aus der Quellspalte entfernen.

Wir verfolgen das gezogene Element und die Quellspalte auf diese Weise: Bei `dragstart` markieren wir die gezogene Aufgabe mit einer `id`. Dann können wir bei `drop` diese ID verwenden, um die Aufgabe zu identifizieren und sie aus der Quellspalte zu entfernen. Schließlich denken wir daran, die ID bei `dragend` zu entfernen, damit wir bei einem späteren Ziehen keine doppelten IDs erzeugen.

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

Es gibt auch andere Optionen, wie das Zuweisen jeder Aufgabe einer eindeutigen ID und dann das Speichern dieser ID in der [`dataTransfer`](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store) oder das Speichern einer Referenz zum DOM-Element in einer globalen Variablen. Alle diese Ansätze haben im Wesentlichen den gleichen Effekt.

Da Aufgaben immer verschoben und nie kopiert oder verknüpft werden sollen, setzen wir auch die [`DataTransfer.effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed)-Eigenschaft auf `"move"`, sodass es die einzige erlaubte Wirkung ist. Diese Änderung aktualisiert den Cursor-Effekt, um eine Verschiebeoperation anzuzeigen. Außerdem setzen wir ein `dataTransfer`-Item vom Typ `task`, welches zur Identifizierung der gezogenen Aufgabe, wie zuvor gezeigt, verwendet wird.

Wie in [Drop-Effekte](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drop_effects) erwähnt, dürfen Sie `effectAllowed` nur im `dragstart`-Handler für das draggable Element setzen.

Jetzt können wir die Verschiebeaktion tatsächlich im [`drop`](/de/docs/Web/API/HTMLElement/drop_event)-Handler auf der Zielspalte auslösen. Wir können die gezogene Aufgabe durch ihre ID identifizieren, sie mit [`Element.remove()`](/de/docs/Web/API/Element/remove) aus dem DOM-Baum entfernen und dann in der Zielspalte wiedereinfügen. Da wir das Ablegen nur zulassen, wenn der Drag tatsächlich eine Aufgabe ablegt, können wir sicher sein, dass `draggedTask` existieren muss.

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

An diesem Punkt ist die grundlegende Benutzererfahrung bereits vorhanden, und Sie können Aufgaben zwischen Spalten ziehen.

## An einem bestimmten Ort einfügen

Derzeit wird die abgelegte Aufgabe immer am Ende der Spalte eingefügt, unabhängig davon, wo wir sie abgelegt haben. Wir verbessern nun die Ablegelogik, sodass sie an der Ablegestelle eingefügt wird. Aber wie sollten wir den Ablageort auf einen Einfügeindex in der Zielspalte abbilden? Dies ist eine Ermessensentscheidung, aber wir verwenden die folgende Heuristik (fühlen Sie sich frei, Ihre eigene zu wählen): Das Element wird an dem Index eingefügt, über dem sich der Cursor befindet. Befindet sich der Cursor über dem ersten Element oder unter dem letzten Element, wird es am Anfang oder Ende der Spalte eingefügt. Wenn sich der Cursor zwischen zwei Elementen befindet, wird es an dem Index des Elements unter dem Cursor eingefügt.

Um den Ablageort deutlich zu machen, werden wir einen [visuellen Indikator](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#custom_drop_feedback) für den Ablageort hinzufügen. Dies kann durch Einfügen eines Platzhalter-Elements am Ablageort erreicht werden, das beim Ablegen durch die gezogene Aufgabe ersetzt wird. Zuerst die Erstellungsfunktion für den Platzhalter definieren:

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

Dieser Indikator wird bei [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) verschoben. Dies ist das Komplexeste von allen, daher haben wir es in eine separate Funktion ausgelagert. Wir holen zuerst die Elemente, die wir brauchen:

```js live-sample___kanban
function movePlaceholder(event) {
  const column = event.currentTarget;
  const draggedTask = document.getElementById("dragged-task");
  const tasks = column.children[1];
  const existingPlaceholder = column.querySelector(".placeholder");
```

Wenn es bereits einen Platzhalter gibt und der Cursor sich noch darin befindet, müssen wir nichts ändern. Beachten Sie, dass wir den vorhandenen Platzhalter an dieser Stelle nicht entfernen, weil das die Layouts der Seite ändern und möglicherweise ein Flimmern verursachen würde. Wir ändern das Layout erst, wenn wir die neue Position vollständig bestimmt haben.

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

Andernfalls suchen wir nach der ersten Aufgabe, die nicht vollständig über dem Cursor ist. Diese Aufgabe kann entweder die allererste Aufgabe sein, wenn der Cursor über allen Elementen ist, die Aufgabe, die den Cursor enthält, oder die Aufgabe unter dem Cursor, wenn sich der Cursor zwischen zwei Elementen befindet. Unser Platzhalter sollte an der Position dieser Aufgabe platziert werden. Beachten Sie, dass wir nur die Y-Koordinaten vergleichen: Auch wenn sich der Cursor in den linken oder rechten Rändern befindet, sollte er immer noch als über der Aufgabe befindlich angesehen werden. Nach dem Finden des geeigneten Einfügepunkts entscheiden wir einige Dinge:

- Wenn der Einfügepunkt bereits der Platzhalter ist, müssen wir nichts ändern. Beachten Sie, dass dies nicht vollständig mit der oben genannten Bedingung identisch ist: Diese könnte zutreffen, wenn der Cursor sofort über dem Platzhalter zwischen zwei Elementen befindet.
- Wenn beim Ablegen das gezogene Element genau dort platziert wird, wo es gestartet wurde, sollten wir keinen Platzhalter anzeigen. Dies passiert, wenn der Platzhalter direkt neben die gezogene Aufgabe eingefügt werden soll, also prüfen wir, ob wir entweder unmittelbar vor `draggedTask` einfügen (`task === draggedTask`) oder danach (`task.previousElementSibling === draggedTask`). In diesem Fall entfernen wir trotzdem den vorhandenen Platzhalter, falls vorhanden.
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

Hat die obige Schleife keine geeignete Aufgabe gefunden, bedeutet dies, dass sich alle vorhandenen Aufgaben über dem Cursor befinden und wir den Platzhalter am Ende einfügen müssen. Wiederum fügen wir den Platzhalter nicht hinzu, wenn die gezogene Aufgabe bereits das letzte Element ist.

```js live-sample___kanban
  existingPlaceholder?.remove();
  if (tasks.lastElementChild === draggedTask) return;
  tasks.append(existingPlaceholder ?? makePlaceholder(draggedTask));
}
```

Schließlich wird der Platzhalter bei [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event) oder [`drop`](/de/docs/Web/API/HTMLElement/drop_event) entfernt. Beachten Sie, dass `dragleave` ausgelöst wird, wenn der Cursor die Spalte verlässt, um in ein Kindelement einzudringen. Da wir den Platzhalter nur entfernen möchten, wenn der Cursor die Spalte vollständig verlässt, müssen wir prüfen, ob der [`relatedTarget`](/de/docs/Web/API/MouseEvent/relatedTarget), das Element, in das wir wechseln, ein Kind der Spalte ist.

Der `drop`-Handler modifiziert, was wir in [Elemente verschieben](#elemente_verschieben) implementiert haben. Anstatt die Aufgabe am Ende anzuhängen, müssen wir sie in der Mitte einfügen, und wir nutzen die Position des Platzhalters, um dies zu tun.

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

## Ursprüngliche Aufgabe ausgrauen

Während des Ziehvorgangs scheint es, als ob die ursprüngliche Aufgabe noch an ihrem Platz ist. Um einen visuellen Hinweis darauf zu geben, dass die Aufgabe verschoben wird, können wir einen "ausgegrauten" Effekt anwenden. Es ist auch üblich, sie einfach aus dem DOM zu entfernen, aber das könnte die gesamte von uns eingerichtete DOM-Messlogik durcheinanderbringen, also können wir CSS verwenden, um den gewünschten Effekt zu erzielen. Das ist einfach, da wir bereits eine stabile ID für die gezogene Aufgabe haben.

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
