---
title: "Window: origin-Eigenschaft"
short-title: origin
slug: Web/API/Window/origin
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`origin`**-Eigenschaft des [`Window`](/de/docs/Web/API/Window) Interface gibt den Ursprung des globalen Bereichs zurück, serialisiert als Zeichenkette.

## Wert

Eine Zeichenkette.

## Beispiele

Ausgeführt im Fensterscope, wird das folgende Snippet den Ursprung des globalen Bereichs des Dokuments in die Konsole protokollieren.

```js
console.log(window.origin); // On this page returns 'https://developer.mozilla.org'
```

Wenn der Ursprung kein Schema/Host/Port-Tupel ist (z. B. wenn Sie versuchen, es lokal auszuführen, d.h. über die `file://` URL), wird `origin` den String `"null"` zurückgeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WorkerGlobalScope.origin`](/de/docs/Web/API/WorkerGlobalScope/origin)
- {{Glossary("origin", "Ursprung")}} im Glossar
