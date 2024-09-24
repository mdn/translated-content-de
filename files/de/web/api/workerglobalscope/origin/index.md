---
title: "WorkerGlobalScope: origin-Eigenschaft"
short-title: origin
slug: Web/API/WorkerGlobalScope/origin
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`origin`** schreibgeschützte Eigenschaft der {{domxref("WorkerGlobalScope")}}-Schnittstelle gibt den Ursprung des globalen Bereichs zurück, seralisiert als String.

## Wert

Ein String.

## Beispiele

Ausgeführt im Worker-Bereich, wird der folgende Codeausschnitt bei jeder Nachricht, die empfangen wird, den Ursprung des globalen Bereichs des Workers in der Konsole protokollieren.

```js
self.onmessage = () => {
  console.log(self.origin);
};
```

Wenn der Ursprung kein Schema/Host/Port-Tupel ist (z.B. wenn Sie versuchen, es lokal auszuführen, d.h. über `file://` URL), wird `origin` den String `"null"` zurückgeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.origin`](/de/docs/Web/API/Window/origin)
- {{Glossary("origin")}} Glossareintrag
