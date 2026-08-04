---
title: "WorkerGlobalScope: location-Eigenschaft"
short-title: location
slug: Web/API/WorkerGlobalScope/location
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte **`location`**-Eigenschaft der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle gibt die mit dem Worker verknüpfte [`WorkerLocation`](/de/docs/Web/API/WorkerLocation) zurück. Es handelt sich um ein spezifisches Standortobjekt, das größtenteils ein Teilmenge des [`Location`](/de/docs/Web/API/Location) für Browsing-Scope ist, aber an Worker angepasst wurde.

## Wert

Ein [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)-Objekt.

## Beispiele

Wenn Sie das Folgende in einem Dokument aufrufen, das unter `localhost:8000` bereitgestellt wird:

```js
console.log(location);
```

innerhalb eines Workers (was grundsätzlich dem Äquivalent von `self.console.log(self.location);` entspricht, da diese im Worker-Scope aufgerufen werden, welcher mit [`WorkerGlobalScope.self`](/de/docs/Web/API/WorkerGlobalScope/self) referenziert werden kann), erhalten Sie ein [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)-Objekt, das in die Konsole geschrieben wird - etwa so etwas:

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

Sie könnten dieses Standortobjekt verwenden, um mehr Informationen über den Standort des Dokuments zurückzugeben, wie Sie es auch bei einem normalen [`Location`](/de/docs/Web/API/Location)-Objekt tun könnten.

> [!NOTE]
> Firefox hat einen Fehler bei der Verwendung von `console.log` innerhalb von Shared-/Service-Workern (siehe [Firefox-Bug 1058644](https://bugzil.la/1058644)), der möglicherweise seltsame Ergebnisse liefert, aber dieser sollte bald behoben werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
