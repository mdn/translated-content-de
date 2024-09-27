---
title: "WorkerGlobalScope: importScripts()-Methode"
short-title: importScripts()
slug: Web/API/WorkerGlobalScope/importScripts
l10n:
  sourceCommit: 10c33115fb571546e2f92a6dceb4eaaa741b1a28
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`importScripts()`**-Methode der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle importiert synchron ein oder mehrere Skripte in den Gültigkeitsbereich des Workers.

## Syntax

```js-nolint
importScripts(path0)
importScripts(path0, path1)
importScripts(path0, path1, /* …, */ pathN)
```

### Parameter

- `pathN`
  - : Ein String-Wert, der die URL des zu importierenden Skripts darstellt. Die URL kann absolut oder relativ sein. Wenn die URL relativ ist, bezieht sie sich relativ zur URL des Worker-Einstiegsskripts.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NetworkError`
  - : Importierte Skripte wurden ohne einen `text/javascript` MIME-Typ oder ohne einen der erlaubten [Legacy-JavaScript-MIME-Typen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#legacy_javascript_mime_types) bereitgestellt.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der aktuelle [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) ein Modul ist. Verwenden Sie stattdessen [`import`](/de/docs/Web/JavaScript/Reference/Statements/import).

## Beispiele

Wenn Sie eine Funktionalität in einem separaten Skript namens `foo.js` geschrieben haben, die Sie in `worker.js` verwenden möchten, könnten Sie es mit der folgenden Zeile importieren:

```js
importScripts("foo.js");
```

`foo.js` sollte im selben URL-Unterbaum wie der Einstiegspunkt des Workers sein – zum Beispiel, wenn dieser Worker mit `new Worker("worker.js")` erstellt wurde, dann ist `worker.js` der Einstiegspunkt. Wenn `worker.js` unter `https://example.com/scripts/worker.js` ist, sollte `foo.js` unter `https://example.com/scripts/foo.js` sein.

`importScripts()` und `self.importScripts()` sind effektiv gleichwertig – beide repräsentieren `importScripts()`, das aus dem inneren Gültigkeitsbereich des Workers aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
