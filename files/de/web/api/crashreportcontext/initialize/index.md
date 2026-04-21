---
title: "CrashReportContext: initialize() Methode"
short-title: initialize()
slug: Web/API/CrashReportContext/initialize
l10n:
  sourceCommit: 927ef5f1b2906bae06ff98ea5148a1808b01f07b
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`initialize()`** Methode des [`CrashReportContext`](/de/docs/Web/API/CrashReportContext) Interfaces initialisiert einen Speicherbereich, der zum Speichern von durch [`set()`](/de/docs/Web/API/CrashReportContext/set) angegebenen Absturzberichtdaten verwendet wird. Diese Methode muss aufgerufen werden, bevor irgendwelche anderen Methoden an dem Objekt ausgeführt werden.

## Syntax

```js-nolint
initialize(length)
```

### Parameter

- `length`
  - : Eine Zahl, die die maximale Anzahl von Bytes angibt, die im Schlüssel-Wert-Speicher durch jeden einzelnen `set()` Aufruf gespeichert werden können. Der maximal zulässige Wert ist `65536` (64KB), was auch die maximale Menge an Absturzberichtspeicher ist, die für einen Ursprung erlaubt ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} erfüllt wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Das aufrufende Dokument nicht vollständig aktiv ist.
    - Ein Schlüssel-Wert-Speicher für Absturzberichte bereits durch einen vorherigen `initialize()` Aufruf initialisiert wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : `length` ist mehr als `65536`.

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
