---
title: "WorkerLocation: toString()-Methode"
short-title: toString()
slug: Web/API/WorkerLocation/toString
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{ApiRef("WorkerLocation")}}{{AvailableInWorkers("worker")}}

Die **`toString()`** {{Glossary("stringifier")}}-Methode eines {{domxref("WorkerLocation")}}-Objekts gibt einen String zurück, der die serialisierte {{domxref("URL")}} für die Position des Workers enthält. Sie ist ein Synonym für {{domxref("WorkerLocation.href")}}.

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
// In einem Web-Worker, auf der Seite https://developer.mozilla.org/de/docs/Web
const result = location.toString(); // Gibt 'https://developer.mozilla.org/de/docs/Web' zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("WorkerLocation")}}-Interface, zu dem es gehört.
