---
title: "WorkerGlobalScope: importScripts()-Methode"
short-title: importScripts()
slug: Web/API/WorkerGlobalScope/importScripts
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`importScripts()`**-Methode des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interfaces importiert synchron ein oder mehrere Skripte in den Scope des Workers.

## Syntax

```js-nolint
importScripts(path0)
importScripts(path0, path1)
importScripts(path0, path1, /* …, */ pathN)
```

### Parameter

- `pathN`
  - : Ein String-Wert, der die URL des zu importierenden Skripts darstellt. Die URL kann absolut oder relativ sein. Wenn die URL relativ ist, bezieht sie sich auf die URL des Einstiegsskripts des Workers.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NetworkError`
  - : Importierte Skripte wurden ohne einen `text/javascript` MIME-Typ oder ohne einen der erlaubten [veralteten JavaScript-MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types#legacy_javascript_mime_types) bereitgestellt.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das aktuelle [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) ein Modul ist. Verwenden Sie stattdessen [`import`](/de/docs/Web/JavaScript/Reference/Statements/import).

## Beispiele

Wenn Sie eine Funktionalität in einem separaten Skript namens `foo.js` geschrieben haben, die Sie in `worker.js` verwenden möchten, könnten Sie es mit der folgenden Zeile importieren:

```js
importScripts("foo.js");
```

`foo.js` sollte sich im selben URL-Unterverzeichnis wie der Einstiegspunkt des Workers befinden — zum Beispiel, wenn dieser Worker mit `new Worker("worker.js")` erstellt wurde, dann ist `worker.js` der Einstiegspunkt. Wenn `worker.js` sich bei `https://example.com/scripts/worker.js` befindet, dann sollte `foo.js` bei `https://example.com/scripts/foo.js` sein.

`importScripts()` und `self.importScripts()` sind effektiv gleichwertig — beide stellen `importScripts()` dar, das aus dem inneren Scope des Workers aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
