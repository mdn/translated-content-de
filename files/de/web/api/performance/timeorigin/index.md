---
title: "Performance: timeOrigin-Eigenschaft"
short-title: timeOrigin
slug: Web/API/Performance/timeOrigin
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Performance API")}}

Die **`timeOrigin`**-Eigenschaft des {{domxref("Performance")}} Interfaces ist schreibgeschützt und gibt den Hochauflösenden Zeitstempel zurück, welcher als Grundlage für alle Performance-bezogenen Zeitstempel verwendet wird.

In Window-Kontexten repräsentiert dieser Wert die Zeit, zu der die Navigation begonnen hat. In {{domxref("Worker")}}- und {{domxref("ServiceWorker")}}-Kontexten repräsentiert dieser Wert die Zeit, zu der der Worker gestartet wurde. Sie können diese Eigenschaft verwenden, um Zeitursprünge zwischen den Kontexten zu synchronisieren (siehe Beispiel unten).

> [!NOTE]
> Der Wert von `performance.timeOrigin` kann von dem Wert abweichen, der durch {{jsxref("Date.now()")}} zum Zeitpunkt des Ursprungs zurückgegeben wird, da `Date.now()` durch System- und Benutzeruhranpassungen, Uhrdrift usw. beeinflusst worden sein kann. Die `timeOrigin`-Eigenschaft ist eine [monotone Uhr](https://w3c.github.io/hr-time/#dfn-monotonic-clock), deren aktuelle Zeit nie abnimmt und die nicht diesen Anpassungen unterliegt.

## Wert

Ein hochauflösender Zeitstempel, der als Beginn der Lebensdauer des aktuellen Dokuments betrachtet wird. Er wird wie folgt berechnet:

- Wenn das {{Glossary("global object")}} des Skripts ein {{domxref("Window")}} ist, wird der Zeitursprung wie folgt bestimmt:

  - Wenn das aktuelle {{domxref("Document")}} das erste im `Window` geladene ist, ist der Zeitursprung der Zeitpunkt, zu dem der Browserkontext erstellt wurde.
  - Wenn beim Entladen des vorherigen Dokuments, das im Fenster geladen war, ein Bestätigungsdialog angezeigt wurde, damit der Benutzer die Navigation zur neuen Seite bestätigen kann, ist der Zeitursprung der Zeitpunkt, zu dem der Benutzer die Navigation zur neuen Seite akzeptiert hat.
  - Wenn keiner der obigen Punkte den Zeitursprung bestimmt, dann ist der Zeitursprung der Zeitpunkt, zu dem die Navigation, die für das Erstellen des aktuellen Dokuments des Fensters verantwortlich ist, stattgefunden hat.

- Wenn das globale Objekt des Skripts ein {{domxref("WorkerGlobalScope")}} ist (also das Skript als Web Worker ausgeführt wird), ist der Zeitursprung der Moment, zu dem der Worker erstellt wurde.
- In allen anderen Fällen ist der Zeitursprung undefiniert.

## Beispiele

### Zeit zwischen Kontexten synchronisieren

Um die unterschiedlichen Zeitursprünge in Window- und Worker-Kontexten auszugleichen, können Sie die Zeitstempel von Worker-Skripten mit Hilfe der `timeOrigin`-Eigenschaft übersetzen, sodass die Zeitmessungen für die gesamte Anwendung synchronisiert werden.

In worker.js

```js
self.addEventListener("connect", (event) => {
  const port = event.ports[0];

  port.onmessage = function (event) {
    const workerTaskStart = performance.now();
    // doSomeWork()
    const workerTaskEnd = performance.now();
  };

  // Worker-relative Zeitstempel in absolute Zeitstempel konvertieren und dann an das Fenster senden
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
  // Absolute Zeitstempel in window-relative Zeitstempel konvertieren
  const workerTaskStart = event.data.startTime - performance.timeOrigin;
  const workerTaskEnd = event.data.endTime - performance.timeOrigin;

  console.log("Worker-Aufgabenstart: ", workerTaskStart);
  console.log("Worker-Aufgabenende: ", workerTaskEnd);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
