---
title: "TaskSignal: prioritychange Ereignis"
short-title: prioritychange
slug: Web/API/TaskSignal/prioritychange_event
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Prioritized Task Scheduling API")}}

Das **`prioritychange`** Ereignis wird an ein {{domxref('TaskSignal')}} gesendet, wenn sich seine [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) ändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("prioritychange", (event) => {});

onprioritychange = (event) => {};
```

## Ereignistyp

Ein {{domxref("TaskPriorityChangeEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("TaskPriorityChangeEvent")}}

## Ereigniseigenschaften

- {{domxref('TaskPriorityChangeEvent.previousPriority')}}
  - : Gibt die vorherige Priorität der Aufgabe an (bevor sie geändert wurde).
    Die neue/aktualisierte Priorität wird aus `event.target.priority` ([`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority)) gelesen.

## Beispiele

Das folgende Beispiel zeigt, wie man das `prioritychange` Ereignis bei einem {{domxref("TaskSignal")}} abhört.

```html hidden
<textarea id="log" style="min-height: 70px; width: 95%"></textarea>
```

```js hidden
let log = document.getElementById("log");
function mylog(text) {
  log.textContent += `${text}\n`;
}
```

Zuerst erstellen wir einen Controller und fügen einen Ereignislistener zu seinem Signal hinzu.
Beim Bearbeiten des Ereignisses verwenden wir {{domxref('TaskPriorityChangeEvent.previousPriority', 'previousPriority')}} beim Ereignis, um die ursprüngliche Priorität zu erhalten, und {{domxref("TaskSignal.priority")}} beim Ereignisziel, um die neue/aktuelle Priorität zu erhalten.

Die Aufgabe wird dann veröffentlicht, indem das Signal übergeben wird, und dann ändern wir sofort die Priorität.

```js
if ("scheduler" in this) {
  // Erklären Sie einen TaskController und setzen Sie seine Signalpriorität auf 'user-blocking'
  const controller = new TaskController({ priority: "user-blocking" });

  // Hören Sie auf 'prioritychange' Ereignisse auf dem Signal des Controllers.
  controller.signal.addEventListener("prioritychange", (event) => {
    const previousPriority = event.previousPriority;
    const newPriority = event.target.priority;
    mylog(`Priority changed from ${previousPriority} to ${newPriority}.`);
  });

  // Posten Sie die Aufgabe unter Verwendung des Signals des Controllers.
  // Die Signalpriorität setzt die anfängliche Priorität der Aufgabe
  scheduler.postTask(
    () => {
      mylog("Task 1");
    },
    { signal: controller.signal },
  );

  // Ändern Sie die Priorität auf 'background' mit dem Controller
  controller.setPriority("background");
}
```

> [!NOTE]
> Der obige Code verwendet eine benutzerdefinierte Protokollierungsfunktion `mylog()`, um in das untenstehende Textfeld zu protokollieren.
> Dies ist verborgen, da es für das Beispiel nicht relevant ist.

Die folgende Ausgabe zeigt, dass sich die [Priorität der Aufgabe](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) von `user-blocking` zu `background` geändert hat.
Dies geschieht, bevor die Aufgabe ausgeführt wird, kann aber auch passieren, wenn die Aufgabe läuft.

{{EmbedLiveSample("Examples",'400px','130px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
