---
title: "Scheduler: postTask()-Methode"
short-title: postTask()
slug: Web/API/Scheduler/postTask
l10n:
  sourceCommit: 315e53cfc25715a2e79a7b431b0e015b67060ca1
---

{{APIRef("Prioritized Task Scheduling API")}}

Die **`postTask()`**-Methode der {{domxref("Scheduler")}}-Schnittstelle wird verwendet, um Aufgaben entsprechend ihrer [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) zu [planen](/de/docs/Web/API/Prioritized_Task_Scheduling_API).

Die Methode erlaubt es den Benutzern, optional eine Mindestverzögerung anzugeben, bevor die Aufgabe ausgeführt wird, eine Priorität für die Aufgabe festzulegen und ein Signal zu verwenden, das die Aufgabenpriorität ändern und/oder die Aufgabe abbrechen kann. Sie gibt ein Promise zurück, das mit dem Ergebnis der Aufgabenrückruf-Funktion aufgelöst oder mit dem Abbruchgrund oder einem in der Aufgabe geworfenen Fehler abgelehnt wird.

Aufgabenpriorität kann [variabel oder unveränderlich](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority) sein. Wenn sich die Aufgabenpriorität niemals ändern muss, sollte sie mit dem Parameter `options.priority` festgelegt werden (jede durch ein Signal festgelegte Priorität wird dann ignoriert). Ein {{domxref("AbortSignal")}} (das keine Priorität hat) oder ein {{domxref("TaskSignal")}} kann dennoch an den Parameter `options.signal` zum Abbrechen der Aufgabe übergeben werden.

Wenn die Aufgabenpriorität möglicherweise geändert werden muss, darf der Parameter `options.priority` nicht gesetzt werden. Stattdessen sollte ein {{domxref("TaskController")}} erstellt und dessen {{domxref("TaskSignal")}} an `options.signal` übergeben werden. Die Aufgabenpriorität wird aus der Signalpriorität initialisiert und kann später mithilfe des mit dem Signal verbundenen {{domxref("TaskController")}} geändert werden.

Wenn keine Priorität festgelegt ist, wird die Aufgabenpriorität standardmäßig auf [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible) gesetzt.

Wenn eine Verzögerung angegeben ist und größer als 0 ist, wird die Ausführung der Aufgabe um mindestens diese Anzahl von Millisekunden verzögert. Andernfalls wird die Aufgabe sofort zur Priorisierung eingeplant.

## Syntax

```js-nolint
postTask(callback)
postTask(callback, options)
```

### Parameter

- `callback`

  - : Eine Rückruffunktion, die die Aufgabe implementiert. Der Rückgabewert des Rückrufs wird verwendet, um das von dieser Funktion zurückgegebene Promise aufzulösen.

- `options` {{optional_inline}}

  - : Aufgabenoptionen, einschließlich:

    - `priority` {{optional_inline}}

      - : Die unveränderliche [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) der Aufgabe. Eine der folgenden: [`"user-blocking"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-blocking), [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible), [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#background). Wenn festgelegt, wird diese Priorität für die gesamte Dauer der Aufgabe verwendet und die Priorität, die auf dem `signal` festgelegt ist, wird ignoriert.

    - `signal` {{optional_inline}}

      - : Ein {{domxref("TaskSignal")}} oder {{domxref("AbortSignal")}}, das verwendet werden kann, um die Aufgabe (von seinem zugeordneten Controller) abzubrechen.

        Wenn der `options.priority`-Parameter gesetzt ist, kann die Aufgabenpriorität nicht geändert werden, und jede Priorität im Signal wird ignoriert. Andernfalls, wenn das Signal ein {{domxref("TaskSignal")}} ist, wird seine Priorität verwendet, um die anfängliche Aufgabenpriorität festzulegen, und der Signal-Controller kann es später verwenden, um die Aufgabenpriorität zu ändern.

    - `delay` {{optional_inline}}
      - : Der minimale Zeitraum, nach dem die Aufgabe der Scheduler-Warteschlange hinzugefügt wird, in ganzen Millisekunden. Die tatsächliche Verzögerung kann höher sein als angegeben, aber nicht weniger. Die Standardverzögerung beträgt 0.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das mit dem Rückgabewert der `callback`-Funktion aufgelöst wird, oder abgelehnt werden kann mit dem Abbruchgrund des `signal` ({{domxref("AbortSignal.reason")}}). Das Promise kann auch mit einem Fehler abgelehnt werden, der beim Ausführen des Rückrufs geworfen wird.

## Beispiele

Die folgenden Beispiele sind leicht vereinfachte Versionen der Live-Beispiele, die in [Prioritized Task Scheduling API > Examples](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples) bereitgestellt werden.

### Funktionsüberprüfung

Überprüfen Sie, ob die geplante Aufgabenpriorisierung unterstützt wird, indem Sie die `scheduler`-Eigenschaft im globalen "`this`" testen (wie {{domxref("Window.scheduler")}} im Fensterbereich oder {{domxref("WorkerGlobalScope.scheduler")}} im Worker-Bereich).

Zum Beispiel protokolliert der untenstehende Code "Feature: Supported", wenn die API auf diesem Browser unterstützt wird.

```js
// Überprüfen, ob die Funktion unterstützt wird
if ("scheduler" in this) {
  console.log("Feature: Supported");
} else {
  console.error("Feature: NOT Supported");
}
```

### Grundlegende Nutzung

Aufgaben werden gepostet, indem eine Rückruffunktion (Aufgabe) im ersten Argument angegeben wird, und ein optionales zweites Argument, das verwendet werden kann, um eine Aufgabenpriorität, ein Signal und/oder eine Verzögerung festzulegen. Die Methode gibt ein {{jsxref("Promise")}} zurück, das mit dem Rückgabewert der Rückruffunktion aufgelöst wird oder mit einem Abbruchfehler oder einem in der Funktion geworfenen Fehler abgelehnt wird.

Da es ein Promise zurückgibt, kann `postTask()` [mit anderen Promises verkettet werden](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises). Unten zeigen wir, wie man auf die Auflösung des Promises mit [`then`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) wartet oder Ablehnungen mit [`catch`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) behandelt. Die Priorität ist nicht festgelegt, daher wird die Standardpriorität `user-visible` verwendet.

```js
// Eine Funktion, die eine Aufgabe definiert
function myTask() {
  return "Task 1: user-visible";
}

// Aufgabe mit Standardpriorität posten: 'user-visible' (keine anderen Optionen)
// Wenn die Aufgabe aufgelöst wird, protokolliert Promise.then() das Ergebnis.
scheduler
  .postTask(myTask, { signal: abortTaskController.signal })
  .then((taskResult) => console.log(`${taskResult}`)) // Aufgelösten Wert protokollieren
  .catch((error) => console.error("Fehler:", error)); // Fehler oder Abbruch protokollieren
```

Die Methode kann auch mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) innerhalb einer [asynchronen Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) verwendet werden. Der untenstehende Code zeigt, wie Sie diesen Ansatz verwenden könnten, um auf eine `user-blocking`-Aufgabe zu warten.

```js
function myTask2() {
  return "Task 2: user-blocking";
}

async function runTask2() {
  const result = await scheduler.postTask(myTask2, {
    priority: "user-blocking",
  });
  console.log(result); // 'Task 2: user-blocking'.
}
runTask2();
```

### Dauerhafte Prioritäten

[Aufgabenprioritäten](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) können mit dem `priority`-Parameter im optionalen zweiten Argument festgelegt werden. Prioritäten, die auf diese Weise festgelegt werden, können nicht geändert werden (sind [unveränderlich](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority)).

Unten posten wir zwei Gruppen von drei Aufgaben, jedes Mitglied in umgekehrter Reihenfolge der Priorität. Die letzte Aufgabe hat die Standardpriorität. Bei der Ausführung protokolliert jede Aufgabe einfach die erwartete Reihenfolge (wir warten nicht auf das Ergebnis, weil wir das nicht brauchen, um die Ausführungsreihenfolge zu zeigen).

```js
// drei Aufgaben, in umgekehrter Reihenfolge der Priorität
scheduler.postTask(() => console.log("bckg 1"), { priority: "background" });
scheduler.postTask(() => console.log("usr-vis 1"), {
  priority: "user-visible",
});
scheduler.postTask(() => console.log("usr-blk 1"), {
  priority: "user-blocking",
});

// drei weitere Aufgaben, in umgekehrter Reihenfolge der Priorität
scheduler.postTask(() => console.log("bckg 2"), { priority: "background" });
scheduler.postTask(() => console.log("usr-vis 2"), {
  priority: "user-visible",
});
scheduler.postTask(() => console.log("usr-blk 2"), {
  priority: "user-blocking",
});

// Aufgabe mit Standardpriorität: user-visible
scheduler.postTask(() => {
  console.log("usr-vis 3 (Standard)");
});
```

Die erwartete Ausgabe wird unten angezeigt: Aufgaben werden in Prioritätsreihenfolge und dann in Deklarationsreihenfolge ausgeführt.

```plain
usr-blk 1
usr-blk 2
usr-vis 1
usr-vis 2
usr-vis 3 (Standard)
bckg 1
bckg 2
```

### Ändern von Aufgabenprioritäten

[Aufgabenprioritäten](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) können ihren Anfangswert auch von einem {{domxref("TaskSignal")}} beziehen, das im optionalen zweiten Argument an `postTask()` übergeben wird. Wenn auf diese Weise festgelegt, kann die Priorität der Aufgabe [dann geändert werden](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority) durch den mit dem Signal verbundenen Controller.

> [!NOTE]
> Das Setzen und Ändern von Aufgabenprioritäten mittels eines Signals funktioniert nur, wenn das `options.priority`-Argument für `postTask()` nicht gesetzt ist und wenn das `options.signal` ein {{domxref("TaskSignal")}} (und kein {{domxref("AbortSignal")}}) ist.

Der unten stehende Code zeigt zunächst, wie ein {{domxref("TaskController")}} erstellt wird, wobei die anfängliche Priorität seines Signals im [`TaskController()`-Konstruktor](/de/docs/Web/API/TaskController/TaskController) auf `user-blocking` gesetzt wird.

Wir verwenden dann `addEventListener()`, um einen Ereignis-Listener dem Signal des Controllers hinzuzufügen (wir könnten alternativ die `TaskSignal.onprioritychange`-Eigenschaft verwenden, um einen Ereignis-Handler hinzuzufügen). Der Ereignishandler verwendet {{domxref('TaskPriorityChangeEvent.previousPriority', 'previousPriority')}} am Ereignis, um die ursprüngliche Priorität zu erhalten, und {{domxref("TaskSignal.priority")}} am Ereignisziel, um die neue/aktuelle Priorität zu erhalten.

```js
// Erstellen eines TaskControllers und die Signalpriorität auf 'user-blocking' setzen
const controller = new TaskController({ priority: "user-blocking" });

// Auf 'prioritychange'-Ereignisse des Signals des Controllers lauschen.
controller.signal.addEventListener("prioritychange", (event) => {
  const previousPriority = event.previousPriority;
  const newPriority = event.target.priority;
  console.log(`Priorität von ${previousPriority} zu ${newPriority} geändert.`);
});
```

Schließlich wird die Aufgabe gepostet, wobei das Signal übergeben wird, und dann ändern wir sofort die Priorität zu `background`, indem wir {{domxref("TaskController.setPriority()")}} am Controller aufrufen.

```js
// Aufgabe unter Verwendung des Signals des Controllers posten.
// Die Signalpriorität legt die anfängliche Priorität der Aufgabe fest
scheduler.postTask(() => console.log("Aufgabe 1"), { signal: controller.signal });

// Ändern der Priorität zu 'background' mittels des Controllers
controller.setPriority("background");
```

Die erwartete Ausgabe wird unten angezeigt. Beachten Sie, dass in diesem Fall die Priorität geändert wird, bevor die Aufgabe ausgeführt wird, aber sie könnte ebenso geändert werden, während die Aufgabe läuft.

```js
// Erwartete Ausgabe
// Priorität von user-blocking zu background geändert.
// Aufgabe 1
```

### Abbrechen von Aufgaben

Aufgaben können sowohl mit {{domxref("TaskController")}} als auch {{domxref("AbortController")}} abgebrochen werden, auf genau die gleiche Weise. Der einzige Unterschied besteht darin, dass Sie {{domxref("TaskController")}} verwenden müssen, wenn Sie auch die Aufgabenpriorität festlegen möchten.

Der untenstehende Code erstellt einen Controller und übergibt sein Signal an die Aufgabe. Die Aufgabe wird dann sofort abgebrochen. Dies führt dazu, dass das Promise mit einem `AbortError` abgelehnt wird, der im `catch`-Block abgefangen und protokolliert wird. Beachten Sie, dass wir auch auf das [`abort`-Ereignis](/de/docs/Web/API/AbortSignal/abort_event), das auf dem {{domxref("TaskSignal")}} oder {{domxref("AbortSignal")}} ausgelöst wird, hören und den Abbruch dort protokollieren konnten.

```js
// Einen TaskController mit Standardpriorität deklarieren
const abortTaskController = new TaskController();
// Aufgabe posten und das Signal des Controllers übergeben
scheduler
  .postTask(() => console.log("Aufgabe wird ausgeführt"), {
    signal: abortTaskController.signal,
  })
  .then((taskResult) => console.log(`${taskResult}`)) // Dies wird nicht ausgeführt!
  .catch((error) => console.error("Fehler:", error)); // Den Fehler protokollieren

// Aufgabe abbrechen
abortTaskController.abort();
```

### Verzögerung von Aufgaben

Aufgaben können durch die Angabe einer ganzen Anzahl von Millisekunden im `options.delay`-Parameter von `postTask()` verzögert werden. Dies fügt effektiv die Aufgabe in die priorisierte Warteschlange mit einem Timeout hinzu, wie sie mit [`setTimeout()`](/de/docs/Web/API/setTimeout) erstellt werden könnte. Die `delay` ist die minimale Zeitspanne, bevor die Aufgabe dem Scheduler hinzugefügt wird; sie kann länger sein.

Der untenstehende Code zeigt zwei Aufgaben, die (als Pfeilfunktionen) mit einer Verzögerung hinzugefügt werden.

```js
// Aufgabe als Pfeilfunktion mit einer Verzögerung von 2 Sekunden posten
scheduler
  .postTask(() => "Aufgabe verzögert um 2000ms", { delay: 2000 })
  .then((taskResult) => console.log(`${taskResult}`));
scheduler
  .postTask(() => "Nächste Aufgabe sollte in etwa 2000ms abgeschlossen sein", { delay: 1 })
  .then((taskResult) => console.log(`${taskResult}`));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
