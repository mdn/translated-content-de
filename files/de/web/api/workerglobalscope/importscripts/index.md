---
title: "WorkerGlobalScope: importScripts()-Methode"
short-title: importScripts()
slug: Web/API/WorkerGlobalScope/importScripts
l10n:
  sourceCommit: 10c33115fb571546e2f92a6dceb4eaaa741b1a28
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`importScripts()`**-Methode der {{domxref("WorkerGlobalScope")}}-Schnittstelle importiert synchron ein oder mehrere Skripte in den Gültigkeitsbereich des Workers.

## Syntax

```js-nolint
importScripts(path0)
importScripts(path0, path1)
importScripts(path0, path1, /* …, */ pathN)
```

### Parameter

- `pathN`
  - : Ein String-Wert, der die URL des zu importierenden Skripts darstellt. Die URL kann absolut oder relativ sein. Ist die URL relativ, so bezieht sie sich auf die URL des Einstiegsskripts des Workers.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NetworkError`
  - : Importierte Skripte wurden ohne `text/javascript` MIME-Typ oder ohne einen der erlaubten [Legacy-JavaScript-MIME-Typen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#legacy_javascript_mime_types) bereitgestellt.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der aktuelle {{domxref("WorkerGlobalScope")}} ein Modul ist. Verwenden Sie stattdessen [`import`](/de/docs/Web/JavaScript/Reference/Statements/import).

## Beispiele

Wenn Sie eine Funktionalität in einem separaten Skript namens `foo.js` geschrieben haben, die Sie in `worker.js` verwenden möchten, könnten Sie es mit der folgenden Zeile importieren:

```js
importScripts("foo.js");
```

`foo.js` sollte sich im selben URL-Unterverzeichnis wie der Einstiegspunkt des Workers befinden — zum Beispiel, wenn dieser Worker mit `new Worker("worker.js")` erstellt wurde, dann ist `worker.js` der Einstiegspunkt. Wenn `worker.js` unter `https://example.com/scripts/worker.js` ist, sollte `foo.js` unter `https://example.com/scripts/foo.js` sein.

`importScripts()` und `self.importScripts()` sind effektiv gleichwertig — beide stellen dar, dass `importScripts()` aus dem inneren Gültigkeitsbereich des Workers heraus aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WorkerGlobalScope")}}
