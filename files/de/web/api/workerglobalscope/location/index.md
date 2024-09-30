---
title: "WorkerGlobalScope: location-Eigenschaft"
short-title: location
slug: Web/API/WorkerGlobalScope/location
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte **`location`**-Eigenschaft des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interfaces gibt die mit dem Worker verknüpfte [`WorkerLocation`](/de/docs/Web/API/WorkerLocation) zurück. Es handelt sich um ein spezifisches Location-Objekt, das größtenteils ein Teilset des [`Location`](/de/docs/Web/API/Location) für Browserscopes ist, jedoch an Worker angepasst wurde.

## Wert

Ein [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)-Objekt.

## Beispiele

Wenn Sie das Folgende in einem Dokument aufgerufen haben, das unter `localhost:8000` bereitgestellt wird

```js
console.log(location);
```

innerhalb eines Werkers (was im Wesentlichen dem Äquivalent von `self.console.log(self.location);` entspricht, da diese im Kontext des Werkers aufgerufen werden, welcher mit [`WorkerGlobalScope.self`](/de/docs/Web/API/WorkerGlobalScope/self) referenziert werden kann), wird ein [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)-Objekt in die Konsole geschrieben — etwa wie das Folgende:

```plain
WorkerLocation {hash: "", search: "", pathname: "/worker.js", port: "8000", hostname: "localhost"…}
  hash: ""
  host: "localhost:8000"
  hostname: "localhost"
  href: "http://localhost:8000/worker.js"
  origin: "http://localhost:8000"
  pathname: "/worker.js"
  port: "8000"
  protocol: "http:"
  search: ""
  __proto__: WorkerLocation
```

Sie könnten dieses Location-Objekt verwenden, um mehr Informationen über den Speicherort des Dokuments zu erhalten, so wie Sie es mit einem normalen [`Location`](/de/docs/Web/API/Location) Objekt tun würden.

> [!NOTE]
> Firefox hat einen Bug bei der Verwendung von `console.log` in gemeinsam genutzten/service Workern (siehe [Firefox Bug 1058644](https://bugzil.la/1058644)), was zu seltsamen Ergebnissen führen kann. Dies sollte jedoch bald behoben sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
