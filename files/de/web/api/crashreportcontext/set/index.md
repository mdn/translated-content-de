---
title: "CrashReportContext: set() Methode"
short-title: set()
slug: Web/API/CrashReportContext/set
l10n:
  sourceCommit: c9773fc1268b974b6c009208b259c53954c839ef
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`set()`** Methode der [`CrashReportContext`](/de/docs/Web/API/CrashReportContext) Schnittstelle speichert ein Schlüssel-Wert-Paar im durch [`initialize()`](/de/docs/Web/API/CrashReportContext/initialize) initialisierten Speicher.

## Syntax

```js-nolint
set(key, value)
```

### Parameter

- `key`
  - : Ein String, der den Schlüssel des zu speichernden Schlüssel-Wert-Paares darstellt.
- `value`
  - : Ein String, der den Wert des zu speichernden Schlüssel-Wert-Paares darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das aufrufende Dokument nicht vollständig aktiv ist.
    - Der Crash-Report-Schlüssel-Wert-Speicher noch nicht über einen [`initialize()`](/de/docs/Web/API/CrashReportContext/initialize) Aufruf initialisiert wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Größe des serialisierten Schlüssel-Wert-Paares ist größer als der [`length`](/de/docs/Web/API/CrashReportContext/initialize#length) Wert, der bei der ersten Initialisierung des Speichers festgelegt wurde.

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
