---
title: "Performance: timeOrigin-Eigenschaft"
short-title: timeOrigin
slug: Web/API/Performance/timeOrigin
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`timeOrigin`**-Eigenschaft der [`Performance`](/de/docs/Web/API/Performance)-Schnittstelle gibt den hochauflösenden Zeitstempel zurück, der als Basislinie für leistungsbezogene Zeitstempel verwendet wird.

In Window-Kontexten repräsentiert dieser Wert die Zeit, zu der die Navigation gestartet wurde. In [`Worker`](/de/docs/Web/API/Worker) und [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Kontexten repräsentiert dieser Wert die Zeit, zu der der Worker ausgeführt wird. Sie können diese Eigenschaft verwenden, um die Zeitursprünge zwischen den Kontexten zu synchronisieren (siehe Beispiel unten).

> [!NOTE]
> Der Wert von `performance.timeOrigin` kann von dem Wert abweichen, der von {{jsxref("Date.now()")}} zum Zeitpunkt des Zeitursprungs zurückgegeben wird, da `Date.now()` möglicherweise durch system- und benutzerbedingte Uhrzeitanpassungen, Uhrensynchronisationen usw. beeinflusst wurde. Die `timeOrigin`-Eigenschaft ist eine [monotone Uhr](https://w3c.github.io/hr-time/#dfn-monotonic-clock), deren aktuelle Zeit nie zurückgeht und die nicht diesen Anpassungen unterliegt.

## Wert

Ein hochauflösender Zeitstempel, der als Beginn der Lebensdauer des aktuellen Dokuments betrachtet wird. Er wird wie folgt berechnet:

- Wenn das {{Glossary("global_object", "globale Objekt")}} des Skripts ein [`Window`](/de/docs/Web/API/Window) ist, wird der Zeitursprung wie folgt bestimmt:

  - Wenn das aktuelle [`Document`](/de/docs/Web/API/Document) das erste ist, das im `Window` geladen wurde, ist der Zeitursprung die Zeit, zu der der Browser-Kontext erstellt wurde.
  - Wenn während des Prozesses des Entladens des vorherigen Dokuments, das im Fenster geladen war, ein Bestätigungsdialog angezeigt wurde, um dem Benutzer zu erlauben, zu bestätigen, ob die vorherige Seite verlassen werden soll oder nicht, ist der Zeitursprung der Moment, in dem der Benutzer bestätigte, dass die Navigation zur neuen Seite akzeptabel war.
  - Wenn keiner der oben genannten Punkte den Zeitursprung bestimmt, ist der Zeitursprung der Moment, in dem die Navigation, die für die Erstellung des aktuellen Dokuments im Fenster verantwortlich ist, stattfand.

- Wenn das globale Objekt des Skripts ein [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) ist (d.h. das Skript wird als Web Worker ausgeführt), ist der Zeitursprung der Moment, in dem der Worker erstellt wurde.
- In allen anderen Fällen ist der Zeitursprung undefiniert.

## Beispiele

### Synchronisierung der Zeit zwischen Kontexten

Um die unterschiedlichen Zeitursprünge in Window- und Worker-Kontexten auszugleichen, können Sie die Zeitstempel aus Worker-Skripten mithilfe der `timeOrigin`-Eigenschaft übersetzen, sodass die Zeiten für die gesamte Anwendung synchronisiert werden.

In worker.js

```js
self.addEventListener("connect", (event) => {
  const port = event.ports[0];

  port.onmessage = function (event) {
    const workerTaskStart = performance.now();
    // doSomeWork()
    const workerTaskEnd = performance.now();
  };

  // Convert worker-relative timestamps to absolute timestamps, then send to the window
  port.postMessage({
    startTime: workerTaskStart + performance.timeOrigin,
    endTime: workerTaskEnd + performance.timeOrigin,
  });
});
```

In main.js

```js
const worker = new SharedWorker("worker.js");
worker.port.addEventListener("message", (event) => {
  // Convert absolute timestamps into window-relative timestamps
  const workerTaskStart = event.data.startTime - performance.timeOrigin;
  const workerTaskEnd = event.data.endTime - performance.timeOrigin;

  console.log("Worker task start: ", workerTaskStart);
  console.log("Worker task end: ", workerTaskEnd);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
