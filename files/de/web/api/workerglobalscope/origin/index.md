---
title: "WorkerGlobalScope: Origin-Eigenschaft"
short-title: origin
slug: Web/API/WorkerGlobalScope/origin
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`origin`** schreibgeschützte Eigenschaft des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interfaces gibt den Ursprung des globalen Scopes zurück, als Zeichenkette serialisiert.

## Wert

Eine Zeichenkette.

## Beispiele

Innerhalb des Worker-Scopes ausgeführt, wird das folgende Snippet den Ursprung des globalen Scopes des Workers bei jedem Empfang einer Nachricht in der Konsole protokollieren.

```js
self.onmessage = () => {
  console.log(self.origin);
};
```

Wenn der Ursprung kein Schema/Host/Port-Tupel ist (wenn Sie ihn z. B. lokal ausführen, d. h. über eine `file://`-URL), wird `origin` die Zeichenkette `"null"` zurückgeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.origin`](/de/docs/Web/API/Window/origin)
- {{Glossary("origin", "origin")}} Glossarbegriff
