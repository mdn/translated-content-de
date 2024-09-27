---
title: "Performance: timeOrigin-Eigenschaft"
short-title: timeOrigin
slug: Web/API/Performance/timeOrigin
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Performance API")}}

Die **`timeOrigin`**-Eigenschaft der [`Performance`](/de/docs/Web/API/Performance)-Schnittstelle ist eine nur-lesbare Eigenschaft und gibt den Hochauflösungszeitstempel zurück, der als Basis für leistungsbezogene Zeitstempel dient.

In Window-Kontexten repräsentiert dieser Wert den Zeitpunkt, an dem die Navigation gestartet wurde. In [`Worker`](/de/docs/Web/API/Worker)- und [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Kontexten repräsentiert dieser Wert den Zeitpunkt, zu dem der Worker ausgeführt wird. Sie können diese Eigenschaft verwenden, um die Zeitursprünge zwischen den Kontexten zu synchronisieren (siehe Beispiel unten).

> [!NOTE]
> Der Wert von `performance.timeOrigin` kann vom Wert abweichen, den {{jsxref("Date.now()")}} zum Zeitpunkt des Ursprungs zurückgibt, da `Date.now()` durch System- und Benutzeruhrenanpassungen, Uhrverzögerungen usw. beeinflusst worden sein könnte. Die `timeOrigin`-Eigenschaft ist eine [monotone Uhr](https://w3c.github.io/hr-time/#dfn-monotonic-clock), deren gegenwärtige Zeit nie zurückgeht und die nicht diesen Anpassungen unterliegt.

## Wert

Ein Hochauflösungszeitstempel, der als der Beginn der Lebenszeit des aktuellen Dokuments betrachtet wird. Dieser wird wie folgt berechnet:

- Wenn das [globale Objekt](/de/docs/Glossary/global_object) des Skripts ein [`Window`](/de/docs/Web/API/Window) ist, wird der Ursprungszeitpunkt wie folgt bestimmt:

  - Wenn das aktuelle [`Document`](/de/docs/Web/API/Document) das erste ist, das im `Window` geladen wird, ist der Ursprungszeitpunkt der Zeitpunkt, zu dem der Browser-Kontext erstellt wurde.
  - Wenn während des Entladens des vorherigen Dokuments, das im Fenster geladen war, ein Bestätigungsdialog angezeigt wurde, um dem Nutzer die Möglichkeit zu geben, das Verlassen der vorherigen Seite zu bestätigen, ist der Ursprungszeitpunkt der Zeitpunkt, an dem der Nutzer bestätigte, dass das Navigieren zur neuen Seite akzeptabel war.
  - Wenn keine der obigen Methoden den Ursprungszeitpunkt bestimmt, dann ist der Ursprungszeitpunkt der Zeitpunkt, zu dem die Navigation, die für das Erstellen des aktuellen Dokuments des Fensters verantwortlich ist, stattfand.

- Wenn das globale Objekt des Skripts ein [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) ist (d. h. das Skript wird als Web-Worker ausgeführt), ist der Ursprungszeitpunkt der Moment, zu dem der Worker erstellt wurde.
- In allen anderen Fällen ist der Ursprungszeitpunkt undefiniert.

## Beispiele

### Zeit zwischen Kontexten synchronisieren

Um den unterschiedlichen Ursprungszeiten in Window- und Worker-Kontexten Rechnung zu tragen, können Sie die von Workerskripten kommenden Zeitstempel mit der Hilfe der `timeOrigin`-Eigenschaft übersetzen, sodass die Zeiten für die gesamte Anwendung synchronisiert werden.

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
