---
title: "Window: origin-Eigenschaft"
short-title: origin
slug: Web/API/Window/origin
l10n:
  sourceCommit: 61362f08e0707711a5c09166affda86c31e4e2b2
---

{{APIRef("DOM")}}

Die schreibgeschützte **`origin`**-Eigenschaft des {{domxref("Window")}}-Interfaces gibt den Ursprung des globalen Bereichs als Zeichenkette zurück.

## Wert

Eine Zeichenkette.

## Beispiele

Ausgeführt im Fensterscope, wird das folgende Snippet den Ursprung des globalen Bereichs des Dokuments in die Konsole protokollieren.

```js
console.log(window.origin); // Gibt auf dieser Seite 'https://developer.mozilla.org' zurück
```

Wenn der Ursprung kein Schema/Host/Port-Tupel ist (z. B. wenn Sie versuchen, es lokal auszuführen, also über eine `file://` URL), wird `origin` die Zeichenkette `"null"` zurückgeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WorkerGlobalScope.origin`](/de/docs/Web/API/WorkerGlobalScope/origin)
- {{Glossary("origin")}} Glossareintrag
