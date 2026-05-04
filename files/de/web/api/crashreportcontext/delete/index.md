---
title: "CrashReportContext: delete() Methode"
short-title: delete()
slug: Web/API/CrashReportContext/delete
l10n:
  sourceCommit: c53bfa01f3bf436d486f4032c16f592855a2af2c
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`delete()`**-Methode des [`CrashReportContext`](/de/docs/Web/API/CrashReportContext)-Interfaces löscht ein zuvor gespeichertes Schlüssel-Wert-Paar.

## Syntax

```js-nolint
delete(key)
```

### Parameter

- `key`
  - : Ein String, der den Schlüssel des zu löschenden Schlüssel-Wert-Paares darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das aufrufende Dokument nicht vollständig aktiv ist.
    - Der Schlüssel-Wert-Speicher des Crash-Berichts noch nicht über einen [`initialize()`](/de/docs/Web/API/CrashReportContext/initialize)-Aufruf initialisiert wurde.

## Beispiele

### Grundlegende Nutzung

```js
window.crashReport.initialize(1024).then(() => {
  // Set a possible crash-causing value, and try
  // running an operation that may cause a crash
  window.crashReport.set("crash-arg", "00031");
  operationThatMightCrash("00031");
  // Delete the key-value pair if it doesn't cause a crash
  window.crashReport.delete("crash-arg");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
