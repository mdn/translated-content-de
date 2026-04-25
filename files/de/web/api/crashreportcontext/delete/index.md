---
title: "CrashReportContext: Methode delete()"
short-title: delete()
slug: Web/API/CrashReportContext/delete
l10n:
  sourceCommit: c9773fc1268b974b6c009208b259c53954c839ef
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`delete()`**-Methode der [`CrashReportContext`](/de/docs/Web/API/CrashReportContext)-Schnittstelle löscht ein zuvor gespeichertes Schlüssel-Wert-Paar.

## Syntax

```js-nolint
delete(key)
```

### Parameter

- `key`
  - : Eine Zeichenfolge, die den Schlüssel des zu löschenden Schlüssel-Wert-Paares darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das aufrufende Dokument nicht vollständig aktiv ist.
    - Der Schlüssel-Wert-Speicher des Crash-Reports noch nicht über einen Aufruf von [`initialize()`](/de/docs/Web/API/CrashReportContext/initialize) initialisiert wurde.

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
