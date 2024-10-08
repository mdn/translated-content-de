---
title: "WorkerLocation: toString() Methode"
short-title: toString()
slug: Web/API/WorkerLocation/toString
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{ApiRef("WorkerLocation")}}{{AvailableInWorkers("worker")}}

Die **`toString()`**-{{Glossary("stringifier", "Stringifier")}}-Methode eines [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)-Objekts gibt eine Zeichenkette zurück, die die serialisierte [`URL`](/de/docs/Web/API/URL) für den Standort des Workers enthält. Sie ist ein Synonym für [`WorkerLocation.href`](/de/docs/Web/API/WorkerLocation/href).

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
// In a Web worker, on the page https://developer.mozilla.org/en-US/docs/Web
const result = location.toString(); // Returns 'https://developer.mozilla.org/en-US/docs/Web'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)-Schnittstelle, zu der sie gehört.
