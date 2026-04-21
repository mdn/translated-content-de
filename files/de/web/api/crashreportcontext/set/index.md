---
title: "CrashReportContext: set() Methode"
short-title: set()
slug: Web/API/CrashReportContext/set
l10n:
  sourceCommit: 927ef5f1b2906bae06ff98ea5148a1808b01f07b
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`set()`** Methode des [`CrashReportContext`](/de/docs/Web/API/CrashReportContext) Interfaces speichert ein Schlüssel-Wert-Paar im Speicher, der durch [`initialize()`](/de/docs/Web/API/CrashReportContext/initialize) initialisiert wurde.

## Syntax

```js-nolint
set(key, value)
```

### Parameter

- `key`
  - : Ein String, der den Schlüssel des zu speichernden Schlüssel-Wert-Paares repräsentiert.
- `value`
  - : Ein String, der den Wert des zu speichernden Schlüssel-Wert-Paares repräsentiert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das aufrufende Dokument nicht vollständig aktiv ist.
    - Der Lagerspeicher für den Crashreport-Schlüssel-Wert-Paar noch nicht über einen [`initialize()`](/de/docs/Web/API/CrashReportContext/initialize) Aufruf initialisiert wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Größe des serialisierten Schlüssel-Wert-Paares ist größer als der [`length`](/de/docs/Web/API/CrashReportContext/initialize#length) Wert, der beim ersten Initialisieren des Speichers festgelegt wurde.

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
