---
title: "WorkerGlobalScope: location-Eigenschaft"
short-title: location
slug: Web/API/WorkerGlobalScope/location
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`location`** schreibgeschützte Eigenschaft des {{domxref("WorkerGlobalScope")}}-Interfaces gibt das mit dem Worker assoziierte {{domxref("WorkerLocation")}} zurück. Es handelt sich um ein spezielles Location-Objekt, das größtenteils ein Teilmenge des {{domxref("Location")}} für Browsing-Scopes ist, jedoch für Worker angepasst wurde.

## Wert

Ein {{domxref("WorkerLocation")}}-Objekt.

## Beispiele

Wenn Sie Folgendes in einem Dokument, das unter `localhost:8000` bereitgestellt wird, aufgerufen haben

```js
console.log(location);
```

innerhalb eines Workers (was im Grunde das Äquivalent von `self.console.log(self.location);` wäre, da diese im Worker-Scope aufgerufen werden, der mit {{domxref("WorkerGlobalScope.self")}} referenziert werden kann), erhalten Sie ein {{domxref("WorkerLocation")}}-Objekt, das in die Konsole geschrieben wird — etwa so etwas:

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

Sie könnten dieses Location-Objekt verwenden, um mehr Informationen über den Standort des Dokuments zu erhalten, wie Sie es mit einem normalen {{domxref("Location")}}-Objekt tun würden.

> [!NOTE]
> Firefox hat einen Fehler beim Einsatz von `console.log` innerhalb von Shared/Service-Workern (siehe [Firefox Fehler 1058644](https://bugzil.la/1058644)), der möglicherweise seltsame Ergebnisse liefert, aber dieser sollte bald behoben sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

{{domxref("WorkerGlobalScope")}}
