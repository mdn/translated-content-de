---
title: "CrashReportContext: initialize() Methode"
short-title: initialize()
slug: Web/API/CrashReportContext/initialize
l10n:
  sourceCommit: c9773fc1268b974b6c009208b259c53954c839ef
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`initialize()`**-Methode der [`CrashReportContext`](/de/docs/Web/API/CrashReportContext)-Schnittstelle initialisiert einen Speicherbereich, der für das Speichern von Crashberichtdaten verwendet wird, die durch [`set()`](/de/docs/Web/API/CrashReportContext/set) angegeben werden. Diese Methode muss aufgerufen werden, bevor andere Methoden des Objekts genutzt werden.

## Syntax

```js-nolint
initialize(length)
```

### Parameter

- `length`
  - : Eine Zahl, die die maximale Anzahl von Bytes angibt, die durch jeden einzelnen `set()`-Aufruf im Schlüssel-Wert-Speicher gespeichert werden können. Der maximal zulässige Wert ist `65536` (64KB), was auch die maximale Menge an Crashberichtspeicher für einen Ursprung darstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit {{jsxref("undefined")}} erfüllt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das aufrufende Dokument nicht vollständig aktiv ist.
    - Ein Crashbericht-Schlüssel-Wert-Speicher bereits durch einen früheren `initialize()`-Aufruf initialisiert wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : `length` ist größer als `65536`.

## Beispiele

### Grundlegende Verwendung

```js
window.crashReport.initialize(1024).then(() => {
  // Do stuff with crash reporting API
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
