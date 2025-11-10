---
title: "Leistung: timeOrigin-Eigenschaft"
short-title: timeOrigin
slug: Web/API/Performance/timeOrigin
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`timeOrigin`**-Eigenschaft des [`Performance`](/de/docs/Web/API/Performance)-Interfaces gibt den hochauflösenden Zeitstempel zurück, der als Basislinie für leistungsbezogene Zeitstempel verwendet wird.

In Fensterkontexten repräsentiert dieser Wert die Zeit, zu der die Navigation gestartet wurde. In [`Worker`](/de/docs/Web/API/Worker)- und [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Kontexten repräsentiert dieser Wert die Zeit, zu der der Worker ausgeführt wird. Sie können diese Eigenschaft verwenden, um die Zeitursprünge zwischen den Kontexten zu synchronisieren (siehe Beispiel unten).

> [!NOTE]
> Der Wert von `performance.timeOrigin` kann vom Wert abweichen, der von {{jsxref("Date.now()")}} zum Zeitpunkt des Zeitursprungs zurückgegeben wird, weil `Date.now()` durch System- und Benutzeruhranpassungen, Uhrenverschiebung usw. beeinflusst worden sein könnte. Die `timeOrigin`-Eigenschaft ist eine [monotone Uhr](https://w3c.github.io/hr-time/#dfn-monotonic-clock), deren aktuelle Zeit niemals abnimmt und die nicht diesen Anpassungen unterliegt.

## Wert

Ein hochauflösender Zeitstempel, der als der Beginn der aktuellen Dokumentenlebensdauer betrachtet wird. Er wird wie folgt berechnet:

- Wenn das {{Glossary("global_object", "globale Objekt")}} des Skripts ein [`Window`](/de/docs/Web/API/Window) ist, wird der Zeitursprung wie folgt bestimmt:

  - Wenn das aktuelle [`Document`](/de/docs/Web/API/Document) das erste ist, das im `Window` geladen wird, ist der Zeitursprung der Zeitpunkt, zu dem der Browserkontext erstellt wurde.
  - Wenn während des Entladevorgangs des vorherigen Dokuments, das im Fenster geladen war, ein Bestätigungsdialog angezeigt wurde, um dem Benutzer zu ermöglichen, zu bestätigen, ob das Verlassen der vorherigen Seite akzeptabel ist, ist der Zeitursprung der Zeitpunkt, zu dem der Benutzer bestätigt hat, dass das Navigieren zur neuen Seite akzeptabel ist.
  - Wenn weder das eine noch das andere den Zeitursprung bestimmt, dann ist der Zeitursprung der Zeitpunkt, zu dem die Navigation stattfand, die für die Erstellung des aktuellen Dokuments im Fenster verantwortlich ist.

- Wenn das globale Objekt des Skripts ein [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) ist (d.h. das Skript wird als Webworker ausgeführt), ist der Zeitursprung der Moment, in dem der Worker erstellt wurde.
- In allen anderen Fällen ist der Zeitursprung undefiniert.

## Beispiele

### Synchronisierung von Zeiten zwischen Kontexten

Um die unterschiedlichen Zeitursprünge in Fenster- und Worker-Kontexten zu berücksichtigen, können Sie die Zeitstempel, die von Worker-Skripten kommen, mithilfe der `timeOrigin`-Eigenschaft übersetzen, sodass die Zeiten für die gesamte Anwendung synchronisiert werden.

In worker.js

```js
self.addEventListener("connect", (event) => {
  const port = event.ports[0];

  port.onmessage = (event) => {
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
