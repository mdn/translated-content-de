---
title: "TaskSignal: priority-Eigenschaft"
short-title: priority
slug: Web/API/TaskSignal/priority
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("Prioritized Task Scheduling API")}}

Die schreibgeschützte **`priority`**-Eigenschaft des {{domxref("TaskSignal")}}-Interfaces zeigt die Signal-[Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) an.

Der Anfangswert wird im zugehörigen {{domxref("TaskController")}} festgelegt, indem er als Argument an den [`TaskController`-Konstruktor](/de/docs/Web/API/TaskController/TaskController) übergeben wird (standardmäßig ist er `"user-visible"`).
Die Priorität des Signals kann geändert werden, indem {{domxref("TaskController.setPriority()")}} beim zugehörigen Controller aufgerufen wird.

Für [Aufgaben mit einer veränderbaren Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority) wird dieser Wert verwendet, um die anfängliche Aufgabenpriorität festzulegen und später zu ändern.
Aufgaben mit einer unveränderlichen Priorität ignorieren den Wert.

## Wert

Ein String, der die Signal-[Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) angibt.
Dieser wird einer der folgenden sein: `"user-blocking"`, `"user-visible"`, `"background"`.

## Beispiele

Die `priority`-Eigenschaft wird von Entwicklern am häufigsten verwendet, um die neue Priorität nach [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignissen zu bestimmen.
Siehe [TaskSignal: prioritychange-Ereignis](/de/docs/Web/API/TaskSignal/prioritychange_event#examples) für ein Live-Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
