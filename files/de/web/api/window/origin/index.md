---
title: "Window: origin-Eigenschaft"
short-title: origin
slug: Web/API/Window/origin
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("DOM")}}

Die schreibgeschützte **`origin`**-Eigenschaft des [`Window`](/de/docs/Web/API/Window)-Interfaces gibt den Ursprung des globalen Bereichs als Zeichenkette zurück.

## Wert

Eine Zeichenkette.

## Beispiele

Ausgeführt im Fensterscope wird das folgende Snippet den Ursprung des globalen Bereichs des Dokuments in die Konsole loggen.

```js
console.log(window.origin); // On this page returns 'https://developer.mozilla.org'
```

Wenn der Ursprung kein Scheme/Host/Port-Tupel ist (zum Beispiel, wenn Sie versuchen, es lokal auszuführen, d.h. über eine `file://` URL), wird `origin` die Zeichenkette `"null"` zurückgeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WorkerGlobalScope.origin`](/de/docs/Web/API/WorkerGlobalScope/origin)
- {{Glossary("origin", "origin")}} Glossarbegriff
