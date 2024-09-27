---
title: "WorkerGlobalScope: location-Eigenschaft"
short-title: location
slug: Web/API/WorkerGlobalScope/location
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte **`location`**-Eigenschaft des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interfaces gibt den mit dem Worker verbundenen [`WorkerLocation`](/de/docs/Web/API/WorkerLocation) zurück. Es handelt sich um ein spezielles Location-Objekt, das hauptsächlich ein Teilmengenobjekt des [`Location`](/de/docs/Web/API/Location) für Browsing-Bereiche darstellt, jedoch an Worker angepasst wurde.

## Wert

Ein [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)-Objekt.

## Beispiele

Wenn Sie das Folgende in einem Dokument, das unter `localhost:8000` bereitgestellt wird, aufrufen

```js
console.log(location);
```

innerhalb eines Workers (was im Wesentlichen dem Äquivalent von `self.console.log(self.location);` entsprechen würde, da diese im Worker-Scope aufgerufen werden, der mit [`WorkerGlobalScope.self`](/de/docs/Web/API/WorkerGlobalScope/self) referenziert werden kann), erhalten Sie ein [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)-Objekt, das in die Konsole geschrieben wird — etwa so:

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

Sie könnten dieses Location-Objekt verwenden, um mehr Informationen über den Standort des Dokuments zurückzugeben, so wie Sie es mit einem normalen [`Location`](/de/docs/Web/API/Location)-Objekt tun würden.

> [!NOTE]
> Firefox hat einen Bug beim Verwenden von `console.log` innerhalb von Shared/Service-Workern (siehe [Firefox bug 1058644](https://bugzil.la/1058644)), der seltsame Ergebnisse zurückgeben kann, aber dieser sollte bald behoben sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

[`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
