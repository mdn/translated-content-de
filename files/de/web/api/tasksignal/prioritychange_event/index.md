---
title: "TaskSignal: prioritychange-Ereignis"
short-title: prioritychange
slug: Web/API/TaskSignal/prioritychange_event
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Das **`prioritychange`**-Ereignis wird an ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) gesendet, wenn sich dessen [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) ändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("prioritychange", (event) => { })

onprioritychange = (event) => { }
```

## Ereignistyp

Ein [`TaskPriorityChangeEvent`](/de/docs/Web/API/TaskPriorityChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TaskPriorityChangeEvent")}}

## Ereigniseigenschaften

- [`TaskPriorityChangeEvent.previousPriority`](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority)
  - : Gibt die vorherige Priorität der Aufgabe an (bevor sie geändert wurde).
    Die neue/aktualisierte Priorität wird aus `event.target.priority` ([`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority)) gelesen.

## Beispiele

Das folgende Beispiel zeigt, wie Sie auf das `prioritychange`-Ereignis eines [`TaskSignal`](/de/docs/Web/API/TaskSignal) hören können.

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

Zuerst erstellen wir einen Controller und fügen einen Ereignislistener zu seinem Signal hinzu.
Beim Umgang mit dem Ereignis verwenden wir [`previousPriority`](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority), um die ursprüngliche Priorität zu erhalten, und [`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority) am Ereignisziel, um die neue/aktuelle Priorität zu erhalten.

Die Aufgabe wird dann gepostet, das Signal wird übergeben und dann ändern wir sofort die Priorität.

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
> Der obige Code verwendet eine benutzerdefinierte Protokollierungsfunktion `myLog()`, um im unteren Textbereich protokolliert zu werden.
> Dies ist verborgen, da es für das Beispiel nicht relevant ist.

Die folgende Ausgabe zeigt, dass sich die [Aufgabenpriorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) von `user-blocking` zu `background` geändert hat.
Dies geschieht, bevor die Aufgabe ausgeführt wird, könnte aber auch passieren, während die Aufgabe läuft.

{{EmbedLiveSample("Examples",'400px','130px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
