---
title: "Performance: timeOrigin-Eigenschaft"
short-title: timeOrigin
slug: Web/API/Performance/timeOrigin
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`timeOrigin`** schreibgeschützte Eigenschaft der [`Performance`](/de/docs/Web/API/Performance)-Schnittstelle gibt den hochauflösenden Zeitstempel zurück, der als Basis für leistungsbezogene Zeitstempel verwendet wird.

In Window-Kontexten repräsentiert dieser Wert die Zeit, zu der die Navigation gestartet wurde. In [`Worker`](/de/docs/Web/API/Worker)- und [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Kontexten repräsentiert dieser Wert die Zeit, zu der der Worker ausgeführt wird. Sie können diese Eigenschaft verwenden, um die Zeitursprünge zwischen den Kontexten zu synchronisieren (siehe untenstehendes Beispiel).

> [!NOTE]
> Der Wert von `performance.timeOrigin` kann von dem Wert abweichen, der von {{jsxref("Date.now()")}} zum Zeitpunkt des Zeitursprungs zurückgegeben wird, da `Date.now()` durch System- und Benutzeruhr-Anpassungen, Uhrenabgleich usw. beeinflusst worden sein kann. Die `timeOrigin`-Eigenschaft ist eine [monotone Uhr](https://w3c.github.io/hr-time/#dfn-monotonic-clock), deren aktuelle Zeit niemals abnimmt und die nicht diesen Anpassungen unterliegt.

## Wert

Ein hochauflösender Zeitstempel, der als Beginn der Lebensdauer des aktuellen Dokuments betrachtet wird. Er wird wie folgt berechnet:

- Wenn das {{Glossary("global_object", "globale Objekt")}} des Skripts ein [`Window`](/de/docs/Web/API/Window) ist, wird der Zeitursprung wie folgt bestimmt:

  - Wenn das aktuelle [`Document`](/de/docs/Web/API/Document) das erste ist, das im `Window` geladen wird, ist der Zeitursprung die Zeit, zu der der Browserkontext erstellt wurde.
  - Wenn während des Entladens des vorherigen Dokuments, das im Fenster geladen wurde, ein Bestätigungsdialog angezeigt wurde, um den Benutzer zu bestätigen, ob er die vorherige Seite verlassen möchte oder nicht, ist der Zeitursprung die Zeit, zu der der Benutzer bestätigt hat, dass das Navigieren zur neuen Seite akzeptabel war.
  - Wenn keiner der obigen Punkte den Zeitursprung bestimmt, ist der Zeitursprung die Zeit, zu der die Navigation, die das aktuelle `Document` des Fensters erstellt hat, stattfand.

- Wenn das globale Objekt des Skripts ein [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) ist (das heißt, das Skript läuft als Web-Worker), ist der Zeitursprung der Moment, in dem der Worker erstellt wurde.
- In allen anderen Fällen ist der Zeitursprung undefiniert.

## Beispiele

### Synchronisierung der Zeit zwischen Kontexten

Um die unterschiedlichen Zeitursprünge in Window- und Worker-Kontexten zu berücksichtigen, können Sie die Zeitstempel aus Worker-Skripten mit Hilfe der `timeOrigin`-Eigenschaft übersetzen, sodass die Zeitmessung für die gesamte Anwendung synchronisiert wird.

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
