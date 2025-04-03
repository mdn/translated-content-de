---
title: "WorkerGlobalScope: origin-Eigenschaft"
short-title: origin
slug: Web/API/WorkerGlobalScope/origin
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`origin`** schreibgeschützte Eigenschaft der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle gibt den Ursprung des globalen Scopes zurück, serialisiert als Zeichenkette.

## Wert

Eine Zeichenkette.

## Beispiele

Ausgeführt im Worker-Scope wird das folgende Snippet bei jedem Empfang einer Nachricht den Ursprung des globalen Worker-Scopes in die Konsole loggen.

```js
self.onmessage = () => {
  console.log(self.origin);
};
```

Wenn der Ursprung kein Schema/Host/Port-Tupel ist (zum Beispiel wenn Sie versuchen, es lokal über eine `file://` URL auszuführen), wird `origin` die Zeichenkette `"null"` zurückgeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.origin`](/de/docs/Web/API/Window/origin)
- {{Glossary("origin", "origin")}} Glossarbegriff
