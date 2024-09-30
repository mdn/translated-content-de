---
title: TaskSignal
slug: Web/API/TaskSignal
l10n:
  sourceCommit: 33313b7c9e37253c0141e22558e298d08c060be5
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die **`TaskSignal`**-Schnittstelle der [Priorisierten Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) repräsentiert ein Signalobjekt, das es Ihnen ermöglicht, mit einer priorisierten Aufgabe zu kommunizieren, sie abzubrechen oder die [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) (falls erforderlich) über ein [`TaskController`](/de/docs/Web/API/TaskController)-Objekt zu ändern.

Ein Objekt dieses Typs wird erstellt und einem [`TaskController`](/de/docs/Web/API/TaskController) zugeordnet.
Die anfängliche Priorität des Signals kann festgelegt werden, indem sie als Argument an den [`TaskController()`](/de/docs/Web/API/TaskController/TaskController)-Konstruktor übergeben wird (standardmäßig ist es `"user-visible"`).
Die Priorität kann durch Aufruf von [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) am Controller geändert werden.

Das Signal kann als `options.signal`-Argument in [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) übergeben werden, wonach der zugeordnete Controller verwendet werden kann, um die Aufgabe abzubrechen.
Wenn die [Task-Priorität veränderbar ist](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority), kann der Controller auch verwendet werden, um die Priorität der Aufgabe zu ändern.
Abbrechbare Aufgaben, die die Priorität nicht ändern müssen, können stattdessen ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) als `options.signal`-Argument angeben.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Die `TaskSignal`-Schnittstelle erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle, [`AbortSignal`](/de/docs/Web/API/AbortSignal)._

- [`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority) {{ReadOnlyInline}}
  - : Gibt die Priorität des Signals zurück.

## Statische Methoden

_Die `TaskSignal`-Schnittstelle erbt Methoden von ihrer übergeordneten Schnittstelle, [`AbortSignal`](/de/docs/Web/API/AbortSignal)._

- [`TaskSignal.any()`](/de/docs/Web/API/TaskSignal/any_static) {{experimental_inline}}
  - : Gibt ein **`TaskSignal`** zurück, das abbricht, wenn eines der angegebenen Abbruchsignale abbricht.

## Instanzmethoden

_Die `TaskSignal`-Schnittstelle erbt Methoden von ihrer übergeordneten Schnittstelle, [`AbortSignal`](/de/docs/Web/API/AbortSignal)._

## Ereignisse

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener zu der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)
  - : Wird ausgelöst, wenn sich die Priorität ändert.
    Dies wird durch Aufruf von [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) am zugehörigen Controller ausgelöst.

## Beispiele

Beispiele dafür, wie das `TaskSignal` erstellt und für die Priorisierung und das Abbrechen von Aufgaben verwendet wird, finden Sie hier:

- [Priorisierte Task Scheduling API > Beispiele](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples)
- [`TaskController` > Beispiele](/de/docs/Web/API/TaskController#examples)
- [`TaskSignal: prioritychange` Ereignis > Beispiele](/de/docs/Web/API/TaskSignal/prioritychange_event#examples)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
