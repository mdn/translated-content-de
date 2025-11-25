---
title: "WorkerGlobalScope: location-Eigenschaft"
short-title: location
slug: Web/API/WorkerGlobalScope/location
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte **`location`**-Eigenschaft des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interfaces gibt die [`WorkerLocation`](/de/docs/Web/API/WorkerLocation) zurück, die mit dem Worker verknüpft ist. Es handelt sich um ein spezifisches Standortobjekt, das größtenteils eine Teilmenge des [`Location`](/de/docs/Web/API/Location) für Browsing-Reichweiten ist, jedoch an Worker angepasst wurde.

## Wert

Ein [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)-Objekt.

## Beispiele

Wenn Sie das Folgende in einem Dokument aufrufen, das unter `localhost:8000` bereitgestellt wird:

```js
console.log(location);
```

innerhalb eines Workers (was im Wesentlichen dem Aufruf von `self.console.log(self.location);` entsprechen würde, da diese im Worker-Bereich aufgerufen werden, der mit [`WorkerGlobalScope.self`](/de/docs/Web/API/WorkerGlobalScope/self) referenziert werden kann), erhalten Sie ein [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)-Objekt, das an die Konsole ausgegeben wird — in etwa wie das Folgende:

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

Sie könnten dieses Standortobjekt verwenden, um weitere Informationen über die Position des Dokuments zurückzugeben, ähnlich wie Sie es mit einem normalen [`Location`](/de/docs/Web/API/Location)-Objekt tun würden.

> [!NOTE]
> Firefox hat einen Fehler bei der Verwendung von `console.log` in Shared/Service Workern (siehe [Firefox-Bug 1058644](https://bugzil.la/1058644)), der möglicherweise seltsame Ergebnisse liefert. Dies sollte jedoch bald behoben sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
