---
title: TaskSignal
slug: Web/API/TaskSignal
l10n:
  sourceCommit: 66f1ba7918610f1145cde4a1d2d7ecb3baea5f65
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die **`TaskSignal`**-Schnittstelle der [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) repräsentiert ein Signalobjekt, das es Ihnen ermöglicht, mit einer priorisierten Aufgabe zu kommunizieren, sie abzubrechen oder die [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) (falls erforderlich) über ein [`TaskController`](/de/docs/Web/API/TaskController)-Objekt zu ändern.

Ein Objekt dieses Typs wird erstellt und mit einem [`TaskController`](/de/docs/Web/API/TaskController) assoziiert. Die anfängliche Priorität des Signals kann festgelegt werden, indem sie als Argument an den [`TaskController()`](/de/docs/Web/API/TaskController/TaskController)-Konstruktor übergeben wird (standardmäßig ist es `"user-visible"`). Die Priorität kann geändert werden, indem [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) am Controller aufgerufen wird.

Das Signal kann als `options.signal`-Argument in [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) übergeben werden, wonach der zugehörige Controller verwendet werden kann, um die Aufgabe abzubrechen. Wenn die [Aufgabenpriorität veränderbar ist](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority), kann der Controller auch verwendet werden, um die Priorität der Aufgabe zu ändern. Abbrechbare Aufgaben, die keine Änderung der Priorität erfordern, können stattdessen ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) als `options.signal`-Argument angeben.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Die `TaskSignal`-Schnittstelle erbt auch Eigenschaften von ihrer Elternschnittstelle, [`AbortSignal`](/de/docs/Web/API/AbortSignal)._

- [`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority) {{ReadOnlyInline}}
  - : Gibt die Priorität des Signals zurück.

## Statische Methoden

_Die `TaskSignal`-Schnittstelle erbt Methoden von ihrer Elternschnittstelle, [`AbortSignal`](/de/docs/Web/API/AbortSignal)._

- [`TaskSignal.any()`](/de/docs/Web/API/TaskSignal/any_static)
  - : Gibt ein **`TaskSignal`** zurück, das abbricht, wenn irgendeines der gegebenen Abbruchsignale abbricht.

## Instanz-Methoden

_Die `TaskSignal`-Schnittstelle erbt Methoden von ihrer Elternschnittstelle, [`AbortSignal`](/de/docs/Web/API/AbortSignal)._

## Ereignisse

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)
  - : Wird ausgelöst, wenn die Priorität geändert wird. Dies wird durch Aufrufen von [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) am zugehörigen Controller ausgelöst.

## Beispiele

Beispiele dafür, wie `TaskSignal` erstellt und verwendet wird, um Aufgaben zu priorisieren und abzubrechen, finden Sie hier:

- [Prioritized Task Scheduling API > Beispiele](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples)
- [`TaskController` > Beispiele](/de/docs/Web/API/TaskController#examples)
- [`TaskSignal: prioritychange`-Ereignis > Beispiele](/de/docs/Web/API/TaskSignal/prioritychange_event#examples)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
