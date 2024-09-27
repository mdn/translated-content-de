---
title: "WorkerGlobalScope: origin-Eigenschaft"
short-title: origin
slug: Web/API/WorkerGlobalScope/origin
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`origin`** schreibgeschützte Eigenschaft des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) Interfaces gibt den Ursprung des globalen Scopes zurück, serialisiert als String.

## Wert

Ein String.

## Beispiele

Innerhalb des Worker-Scopes ausgeführt, wird das folgende Snippet bei jedem Empfang einer Nachricht den Ursprung des globalen Scopes des Workers in die Konsole protokollieren.

```js
self.onmessage = () => {
  console.log(self.origin);
};
```

Wenn der Ursprung kein Schema/Host/Port-Tupel ist (angenommen, Sie versuchen es lokal auszuführen, d. h. über `file://` URL), wird `origin` den String `"null"` zurückgeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.origin`](/de/docs/Web/API/Window/origin)
- [origin](/de/docs/Glossary/origin) Glossarbegriff
