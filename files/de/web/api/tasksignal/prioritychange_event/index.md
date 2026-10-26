---
title: "TaskSignal: prioritychange-Ereignis"
short-title: prioritychange
slug: Web/API/TaskSignal/prioritychange_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Das **`prioritychange`**-Ereignis wird an ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) gesendet, wenn sich dessen [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) ändert.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("prioritychange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onprioritychange = (event) => { }
```

## Ereignistyp

Ein [`TaskPriorityChangeEvent`](/de/docs/Web/API/TaskPriorityChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TaskPriorityChangeEvent")}}

## Beispiele

Das folgende Beispiel zeigt, wie Sie auf das `prioritychange`-Ereignis eines [`TaskSignal`](/de/docs/Web/API/TaskSignal) reagieren.

```html hidden
<textarea id="log"></textarea>
```

```css hidden
#log {
  min-height: 70px;
  width: 95%;
}
```

```js hidden
let log = document.getElementById("log");
function myLog(text) {
  log.textContent += `${text}\n`;
}
```

Zunächst erstellen wir einen Controller und fügen seinem Signal einen Event-Listener hinzu.
Bei der Verarbeitung des Ereignisses verwenden wir [`previousPriority`](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority) am Ereignis, um die ursprüngliche Priorität zu ermitteln, und [`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority) am Ereignisziel, um die neue bzw. aktuelle Priorität zu ermitteln.

Anschließend wird die Aufgabe unter Übergabe des Signals eingeplant, und unmittelbar danach ändern wir die Priorität.

```js
if ("scheduler" in this) {
  // Declare a TaskController, setting its signal priority to 'user-blocking'
  const controller = new TaskController({ priority: "user-blocking" });

  // Listen for 'prioritychange' events on the controller's signal.
  controller.signal.addEventListener("prioritychange", (event) => {
    const previousPriority = event.previousPriority;
    const newPriority = event.target.priority;
    myLog(`Priority changed from ${previousPriority} to ${newPriority}.`);
  });

  // Post task using the controller's signal.
  // The signal priority sets the initial priority of the task
  scheduler.postTask(
    () => {
      myLog("Task 1");
    },
    { signal: controller.signal },
  );

  // Change the priority to 'background' using the controller
  controller.setPriority("background");
}
```

> [!NOTE]
> Der obige Code verwendet die benutzerdefinierte Logging-Funktion `myLog()`, um Meldungen im Textbereich unten auszugeben.
> Sie wird hier nicht gezeigt, da sie für das Beispiel nicht relevant ist.

Die folgende Ausgabe zeigt, dass sich die [Priorität der Aufgabe](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) von `user-blocking` zu `background` geändert hat.
Dies geschieht, bevor die Aufgabe ausgeführt wird, könnte aber auch während ihrer Ausführung geschehen.

{{EmbedLiveSample("Examples",'400px','130px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
