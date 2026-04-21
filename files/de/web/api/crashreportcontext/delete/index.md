---
title: "CrashReportContext: delete()-Methode"
short-title: delete()
slug: Web/API/CrashReportContext/delete
l10n:
  sourceCommit: 927ef5f1b2906bae06ff98ea5148a1808b01f07b
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

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
    - Der Schlüssel-Wert-Speicher für Crash-Berichte noch nicht über einen [`initialize()`](/de/docs/Web/API/CrashReportContext/initialize)-Aufruf initialisiert wurde.

## Beispiele

### Grundlegende Verwendung

```js
window.crashReport.initialize(1024).then(() => {
  // Set a possible crash-causing value, and try
  // running an operation that may cause a crash
  window.crashReport.set("crash-arg", "00031");
  operationThatMightCrash(00031);
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
