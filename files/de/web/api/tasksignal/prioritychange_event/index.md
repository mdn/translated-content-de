---
title: "TaskSignal: prioritychange-Ereignis"
short-title: prioritychange
slug: Web/API/TaskSignal/prioritychange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Das **`prioritychange`**-Ereignis wird an ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) gesendet, wenn seine [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) geändert wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlungs-Eigenschaft.

```js-nolint
addEventListener("prioritychange", (event) => { })

onprioritychange = (event) => { }
```

## Ereignistyp

Ein [`TaskPriorityChangeEvent`](/de/docs/Web/API/TaskPriorityChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TaskPriorityChangeEvent")}}

## Eigenschaften des Ereignisses

- [`TaskPriorityChangeEvent.previousPriority`](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority)
  - : Gibt die vorherige Priorität des Tasks an (bevor sie geändert wurde).
    Die neue/aktualisierte Priorität wird aus `event.target.priority` ([`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority)) gelesen.

## Beispiele

Das untenstehende Beispiel zeigt, wie man auf das `prioritychange`-Ereignis bei einem [`TaskSignal`](/de/docs/Web/API/TaskSignal) hört.

```html hidden
<textarea id="log" style="min-height: 70px; width: 95%"></textarea>
```

```js hidden
let log = document.getElementById("log");
function myLog(text) {
  log.textContent += `${text}\n`;
}
```

Zuerst erstellen wir einen Controller und fügen einen Ereignislistener zu seinem Signal hinzu.
Beim Handling des Ereignisses nutzen wir [`previousPriority`](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority) beim Ereignis, um die ursprüngliche Priorität zu erhalten und [`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority) beim Ereignisziel, um die neue/aktuelle Priorität zu erhalten.

Der Task wird dann gepostet, das Signal wird übergeben, und die Priorität wird sofort geändert.

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
> Der obige Code verwendet eine benutzerdefinierte Protokollfunktion `myLog()`, um in das Textfeld unten zu protokollieren.
> Dies ist verborgen, da es für das Beispiel nicht relevant ist.

Die unten stehende Ausgabe demonstriert, dass sich die [Priorität des Tasks](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) von `user-blocking` auf `background` ändert.
Dies geschieht, bevor der Task ausgeführt wird, könnte aber auch passieren, wenn der Task ausgeführt wird.

{{EmbedLiveSample("Examples",'400px','130px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
