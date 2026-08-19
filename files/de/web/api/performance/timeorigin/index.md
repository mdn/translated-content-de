---
title: "Performance: timeOrigin-Eigenschaft"
short-title: timeOrigin
slug: Web/API/Performance/timeOrigin
l10n:
  sourceCommit: fa5855f4a1cdabd9cc972259af005c1f6a6db54f
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`timeOrigin`**-Eigenschaft der [`Performance`](/de/docs/Web/API/Performance)-Schnittstelle, die schreibgeschützt ist, gibt den hochauflösenden Zeitstempel zurück, der als Basis für zeitbezogene Zeitstempel genutzt wird.

In Fensterkontexten repräsentiert dieser Wert die Zeit, zu der die Navigation gestartet wurde. In [`Worker`](/de/docs/Web/API/Worker)- und [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Kontexten repräsentiert dieser Wert die Zeit, zu der der Worker gestartet wurde. Sie können diese Eigenschaft nutzen, um die Zeitursprünge zwischen den Kontexten zu synchronisieren (siehe Beispiel unten).

> [!NOTE]
> Der Wert von `performance.timeOrigin` kann sich von dem Wert unterscheiden, der von {{jsxref("Date.now()")}} zurückgegeben wird, das zum Zeitpunkt des Zeitursprungs ausgeführt wird, da `Date.now()` von System- und Benutzereinstellungen der Uhr, Uhrabweichungen usw. beeinflusst worden sein kann. Die `timeOrigin`-Eigenschaft ist eine [monotone Uhr](https://w3c.github.io/hr-time/#dfn-monotonic-clock), deren aktuelle Zeit niemals abnimmt und die nicht diesen Anpassungen unterliegt.

## Wert

Ein hochauflösender Zeitstempel, der als Beginn der Lebensdauer des aktuellen Dokuments betrachtet wird. Er wird folgendermaßen berechnet:

- Wenn das {{Glossary("global_object", "Globalobjekt")}} des Skripts ein [`Window`](/de/docs/Web/API/Window) ist, wird der Zeitursprung wie folgt bestimmt:
  - Wenn das aktuelle [`Document`](/de/docs/Web/API/Document) das erste ist, das im `Window` geladen wurde, ist der Zeitursprung der Zeitpunkt, zu dem der Browserkontext erstellt wurde.
  - Wenn während des Entladevorgangs des vorherigen Dokuments, das im Fenster geladen wurde, ein Bestätigungsdialog angezeigt wurde, um dem Benutzer zu ermöglichen, das Verlassen der vorherigen Seite zu bestätigen, ist der Zeitursprung der Zeitpunkt, zu dem der Benutzer bestätigt hat, dass das Navigieren zur neuen Seite akzeptabel war.
  - Wenn keiner der oben genannten Punkte den Zeitursprung bestimmt, ist der Zeitursprung der Zeitpunkt, zu dem die Navigation, die für die Erstellung des aktuellen Dokuments des Fensters verantwortlich ist, stattgefunden hat.

- Wenn das Globalobjekt des Skripts ein [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) ist (das heißt, das Skript läuft als Web-Worker), ist der Zeitursprung der Moment, zu dem der Worker erstellt wurde.
- In allen anderen Fällen ist der Zeitursprung undefiniert.

## Beispiele

### Zeit zwischen Kontexten synchronisieren

Um die unterschiedlichen Zeitursprünge in Fenster- und Worker-Kontexten zu berücksichtigen, können Sie die Zeitstempel aus Worker-Skripten mithilfe der `timeOrigin`-Eigenschaft übersetzen, damit die Zeitangaben für die gesamte Anwendung synchronisiert werden.

> [!WARNING]
> [Die monotone Uhr tickt möglicherweise nicht, während das Betriebssystem im Schlafmodus ist](/de/docs/Web/API/Performance/now#ticking_during_sleep). Wenn ein Fenster während des Systemschlafes geöffnet bleibt und dann einen Worker startet, können übersetzte Zeitstempel aus den beiden Kontexten durch die Dauer des Schlafes verschoben sein. Es gibt keine Möglichkeit, die genaue Synchronisierung wiederherzustellen: {{jsxref("Date.now()")}} ist Uhrenanpassungen unterworfen, während die Schätzung des Versatzes durch den Austausch von Zeitstempeln Ungenauigkeiten durch Nachrichtenlaufzeiten einführt.

In worker.js

```js
self.addEventListener("connect", (event) => {
  const port = event.ports[0];

  port.onmessage = () => {
    const workerTaskStart = performance.now();
    // doSomeWork()
    const workerTaskEnd = performance.now();

    // Convert worker-relative timestamps to absolute timestamps, then send to the window
    port.postMessage({
      startTime: workerTaskStart + performance.timeOrigin,
      endTime: workerTaskEnd + performance.timeOrigin,
    });
  };
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
worker.port.start();
worker.port.postMessage("start");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
