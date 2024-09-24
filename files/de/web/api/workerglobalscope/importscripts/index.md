---
title: "WorkerGlobalScope: importScripts()-Methode"
short-title: importScripts()
slug: Web/API/WorkerGlobalScope/importScripts
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`importScripts()`**-Methode des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interfaces importiert synchron ein oder mehrere Skripte in den Workers-Bereich.

## Syntax

```js-nolint
importScripts(path0)
importScripts(path0, path1)
importScripts(path0, path1, /* …, */ pathN)
```

### Parameter

- `pathN`
  - : Ein String-Wert, der die URL des zu importierenden Skripts darstellt. Die URL kann absolut oder relativ sein. Ist die URL relativ, bezieht sie sich auf die URL des Einstiegs-Skripts des Workers.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NetworkError`
  - : Importierte Skripte wurden ohne einen `text/javascript` MIME-Typ oder ohne einen der erlaubten [Legacy-JavaScript-MIME-Typen](/de/docs/Web/HTTP/MIME_types#legacy_javascript_mime_types) bereitgestellt.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der aktuelle [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) ein Modul ist. Verwenden Sie stattdessen [`import`](/de/docs/Web/JavaScript/Reference/Statements/import).

## Beispiele

Wenn Sie eine Funktionalität in einem separaten Skript namens `foo.js` geschrieben haben, die Sie in `worker.js` verwenden möchten, könnten Sie es mit der folgenden Zeile importieren:

```js
importScripts("foo.js");
```

`foo.js` sollte sich im selben URL-Teilbaum wie der Einstiegspunkt des Workers befinden — zum Beispiel, wenn dieser Worker mit `new Worker("worker.js")` erstellt wurde, dann ist `worker.js` der Einstiegspunkt. Befindet sich `worker.js` unter `https://example.com/scripts/worker.js`, dann sollte `foo.js` unter `https://example.com/scripts/foo.js` sein.

`importScripts()` und `self.importScripts()` sind im Wesentlichen gleichwertig — beide repräsentieren `importScripts()`, das aus dem inneren Bereich des Workers aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
