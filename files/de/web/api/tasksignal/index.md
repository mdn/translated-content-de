---
title: TaskSignal
slug: Web/API/TaskSignal
l10n:
  sourceCommit: 9bad86bae21d5a6b7e2118482badfb69889c86f5
---

{{APIRef("Prioritized Task Scheduling API")}}

Das **`TaskSignal`**-Interface der [API für priorisierte Aufgabenplanung](/de/docs/Web/API/Prioritized_Task_Scheduling_API) stellt ein Signalobjekt dar, das es Ihnen ermöglicht, mit einer priorisierten Aufgabe zu kommunizieren und diese gegebenenfalls abzubrechen oder die [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) über ein {{domxref('TaskController')}}-Objekt zu ändern.

Ein Objekt dieses Typs wird erstellt und einem {{domxref('TaskController')}} zugeordnet. Die anfängliche Priorität des Signals kann festgelegt werden, indem sie als Argument an den Konstruktor {{domxref("TaskController.TaskController", "TaskController()")}} übergeben wird (standardmäßig ist sie `"user-visible"`). Die Priorität kann geändert werden, indem {{domxref("TaskController.setPriority()")}} auf dem Controller aufgerufen wird.

Das Signal kann als `options.signal`-Argument in {{domxref("Scheduler.postTask()")}} übergeben werden, wonach der zugehörige Controller verwendet werden kann, um die Aufgabe abzubrechen. Wenn die [Aufgabenpriorität veränderbar ist](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority), kann der Controller auch verwendet werden, um die Priorität der Aufgabe zu ändern. Abbrechbare Aufgaben, bei denen die Priorität nicht geändert werden muss, können stattdessen ein {{domxref("AbortSignal")}} als `options.signal`-Argument angeben.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Das `TaskSignal`-Interface erbt auch Eigenschaften von seinem übergeordneten Interface, {{domxref("AbortSignal")}}._

- {{domxref('TaskSignal.priority')}} {{ReadOnlyInline}}
  - : Gibt die Priorität des Signals zurück.

## Statische Methoden

_Das `TaskSignal`-Interface erbt Methoden von seinem übergeordneten Interface, {{domxref("AbortSignal")}}._

- {{domxref("TaskSignal/any_static", "TaskSignal.any()")}} {{experimental_inline}}
  - : Gibt ein **`TaskSignal`** zurück, das abbricht, wenn eines der angegebenen Abbruchsignale abbricht.

## Instanz-Methoden

_Das `TaskSignal`-Interface erbt Methoden von seinem übergeordneten Interface, {{domxref("AbortSignal")}}._

## Ereignisse

Hören Sie auf diese Ereignisse mit {{domxref("EventTarget.addEventListener()", "addEventListener()")}} oder durch Zuweisen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieses Interfaces.

- {{domxref("TaskSignal/prioritychange_event", "prioritychange")}}
  - : Wird ausgelöst, wenn sich die Priorität ändert. Dies wird durch Aufrufen von {{domxref('TaskController.setPriority()')}} auf dem zugehörigen Controller ausgelöst.

## Beispiele

Beispiele dafür, wie das `TaskSignal` erstellt und zur Priorisierung und zum Abbruch von Aufgaben verwendet wird, finden Sie hier:

- [API für priorisierte Aufgabenplanung > Beispiele](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples)
- [`TaskController` > Beispiele](/de/docs/Web/API/TaskController#examples)
- [`TaskSignal: prioritychange`-Ereignis > Beispiele](/de/docs/Web/API/TaskSignal/prioritychange_event#examples)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
