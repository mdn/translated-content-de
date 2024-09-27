---
title: "Window: origin-Eigenschaft"
short-title: origin
slug: Web/API/Window/origin
l10n:
  sourceCommit: 61362f08e0707711a5c09166affda86c31e4e2b2
---

{{APIRef("DOM")}}

Die schreibgeschützte **`origin`**-Eigenschaft des [`Window`](/de/docs/Web/API/Window)-Interfaces gibt den Ursprung des globalen Scopes zurück, als Zeichenkette serialisiert.

## Wert

Eine Zeichenkette.

## Beispiele

Ausgeführt innerhalb des Fenster-Scopes, wird das folgende Snippet den Ursprung des globalen Scopes des Dokuments in der Konsole protokollieren.

```js
console.log(window.origin); // On this page returns 'https://developer.mozilla.org'
```

Wenn der Ursprung kein Schema/Host/Port-Tupel ist (angenommen, Sie führen es lokal aus, z.B. über eine `file://`-URL), gibt `origin` die Zeichenkette `"null"` zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WorkerGlobalScope.origin`](/de/docs/Web/API/WorkerGlobalScope/origin)
- [origin](/de/docs/Glossary/origin) Glossarbegriff
