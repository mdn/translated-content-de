---
title: "ReadableStreamDefaultController: error() Methode"
short-title: error()
slug: Web/API/ReadableStreamDefaultController/error
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`error()`** Methode des
[`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController) Interface verursacht, dass alle zukünftigen Interaktionen mit dem zugehörigen Stream fehlschlagen.

> [!NOTE]
> Die `error()` Methode kann
> mehr als einmal aufgerufen werden und kann aufgerufen werden, wenn der Stream nicht lesbar ist.

## Syntax

```js-nolint
error(e)
```

### Parameter

- `e`
  - : Der Fehler, mit dem zukünftige Interaktionen fehlschlagen sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das Quellobjekt kein `ReadableStreamDefaultController` ist.

## Beispiele

Das [Ein lesbarer Stream mit einer zugrundeliegenden Push-Quelle und Backpressure-Unterstützung](https://streams.spec.whatwg.org/#example-rs-push-backpressure) Beispiel in der Spezifikation
liefert ein gutes Beispiel für die Verwendung von
[`ReadableStreamDefaultController.desiredSize`](/de/docs/Web/API/ReadableStreamDefaultController/desiredSize), um manuell zu erkennen, wann der
Stream voll ist und Backpressure anzuwenden. Es zeigt auch die Verwendung von `error()`, um manuell einen Stream-Fehler auszulösen, falls ein anderer Teil des Systems, auf den es angewiesen ist, fehlschlägt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
- [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)
