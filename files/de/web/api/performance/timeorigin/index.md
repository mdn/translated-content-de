---
title: "Performance: timeOrigin-Eigenschaft"
short-title: timeOrigin
slug: Web/API/Performance/timeOrigin
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Performance API")}}

Die **`timeOrigin`** schreibgeschützte Eigenschaft der [`Performance`](/de/docs/Web/API/Performance)-Schnittstelle gibt den Hochauflösungs-Zeitstempel zurück, der als Grundlage für performancebezogene Zeitstempel verwendet wird.

In Fenster-Kontexten stellt dieser Wert die Zeit dar, zu der die Navigation begonnen hat. In [`Worker`](/de/docs/Web/API/Worker) und [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Kontexten stellt dieser Wert die Zeit dar, zu der der Worker gestartet wurde. Sie können diese Eigenschaft verwenden, um die Zeitursprünge zwischen den Kontexten zu synchronisieren (siehe Beispiel unten).

> [!NOTE]
> Der Wert von `performance.timeOrigin` kann vom Wert abweichen, der von {{jsxref("Date.now()")}} zum Zeitpunkt des Ursprungs ausgeführt wird, da `Date.now()` durch System- und Benutzeruhranpassungen, Uhrenabweichungen usw. beeinträchtigt werden kann. Die `timeOrigin`-Eigenschaft ist eine [monotone Uhr](https://w3c.github.io/hr-time/#dfn-monotonic-clock), deren aktuelle Zeit niemals abnimmt und die nicht diesen Anpassungen unterliegt.

## Wert

Ein Hochauflösungs-Zeitstempel, der als Beginn der Lebensdauer des aktuellen Dokuments betrachtet wird. Er wird folgendermaßen berechnet:

- Wenn das [globale Objekt](/de/docs/Glossary/global_object) des Skripts ein [`Window`](/de/docs/Web/API/Window) ist, wird der Zeitursprung wie folgt bestimmt:

  - Wenn das aktuelle [`Document`](/de/docs/Web/API/Document) das erste Dokument ist, das im `Window` geladen wurde, ist der Zeitursprung der Zeitpunkt, zu dem der Browser-Kontext erstellt wurde.
  - Wenn während des Entladens des vorherigen Dokuments, das im Fenster geladen wurde, ein Bestätigungsdialog angezeigt wurde, um den Benutzer zu bestätigen, ob er die vorherige Seite verlassen möchte, ist der Zeitursprung der Zeitpunkt, zu dem der Benutzer bestätigte, dass das Navigieren zur neuen Seite akzeptabel ist.
  - Wenn keiner der oben genannten Punkte den Zeitursprung bestimmt, ist der Zeitursprung der Zeitpunkt, zu dem die Navigation, die für die Erstellung des aktuellen Dokuments des Fensters verantwortlich ist, stattgefunden hat.

- Wenn das globale Objekt des Skripts ein [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) ist (d. h., das Skript wird als Web-Worker ausgeführt), ist der Zeitursprung der Moment, in dem der Worker erstellt wurde.
- In allen anderen Fällen ist der Zeitursprung nicht definiert.

## Beispiele

### Synchronisierung der Zeit zwischen Kontexten

Um die unterschiedlichen Zeitursprünge in Fenster- und Worker-Kontexten auszugleichen, können Sie die von Worker-Skripten stammenden Zeitstempel mit Hilfe der `timeOrigin`-Eigenschaft übersetzen, sodass die Zeitmessungen für die gesamte Anwendung synchronisiert werden.

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
