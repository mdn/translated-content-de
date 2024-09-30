---
title: "TaskSignal: priority-Eigenschaft"
short-title: priority
slug: Web/API/TaskSignal/priority
l10n:
  sourceCommit: 33313b7c9e37253c0141e22558e298d08c060be5
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`priority`**-Eigenschaft der [`TaskSignal`](/de/docs/Web/API/TaskSignal)-Schnittstelle gibt die Signal-[Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) an.

Der Anfangswert wird im zugehörigen [`TaskController`](/de/docs/Web/API/TaskController) festgelegt, indem er als Argument an den [`TaskController` Konstruktor](/de/docs/Web/API/TaskController/TaskController) übergeben wird (standardmäßig ist er `"user-visible"`).
Die Priorität des Signals kann geändert werden, indem [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) am zugehörigen Controller aufgerufen wird.

Für [Aufgaben mit veränderlicher Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority) wird dieser Wert verwendet, um die anfängliche Aufgabenpriorität festzulegen und später zu ändern.
Aufgaben mit unveränderlicher Priorität ignorieren den Wert.

## Wert

Ein String, der die Signal-[Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) angibt.
Dies wird einer der folgenden sein: `"user-blocking"`, `"user-visible"`, `"background"`.

## Beispiele

Die `priority` wird am häufigsten von Entwicklern verwendet, um die neue Priorität nach [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignissen zu bestimmen.
Siehe [TaskSignal: prioritychange Ereignis](/de/docs/Web/API/TaskSignal/prioritychange_event#examples) für ein Live-Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
