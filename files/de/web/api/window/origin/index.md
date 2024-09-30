---
title: "Window: origin Eigenschaft"
short-title: origin
slug: Web/API/Window/origin
l10n:
  sourceCommit: 61362f08e0707711a5c09166affda86c31e4e2b2
---

{{APIRef("DOM")}}

Die **`origin`** schreibgeschützte Eigenschaft der [`Window`](/de/docs/Web/API/Window) Schnittstelle gibt den Ursprung des globalen Geltungsbereichs zurück, serialisiert als Zeichenkette.

## Wert

Eine Zeichenkette.

## Beispiele

Ausgeführt im Fensterbereich, wird das folgende Snippet den Ursprung des globalen Dokumentsbereichs in der Konsole protokollieren.

```js
console.log(window.origin); // On this page returns 'https://developer.mozilla.org'
```

Wenn der Ursprung kein Schema/Host/Port-Tupel ist (angenommen, Sie versuchen es lokal auszuführen, z. B. über eine `file://` URL), gibt `origin` die Zeichenkette `"null"` zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WorkerGlobalScope.origin`](/de/docs/Web/API/WorkerGlobalScope/origin)
- [origin](/de/docs/Glossary/origin) Glossarbegriff
