---
title: "ReadableStreamDefaultController: error()-Methode"
short-title: error()
slug: Web/API/ReadableStreamDefaultController/error
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`error()`**-Methode der [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)-Schnittstelle führt dazu, dass alle zukünftigen Interaktionen mit dem zugehörigen Stream fehlschlagen.

> [!NOTE]
> Die `error()`-Methode kann mehrmals aufgerufen werden und auch dann, wenn der Stream nicht lesbar ist.

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

Das Beispiel [Ein lesbarer Stream mit einer zugrunde liegenden Push-Quelle und Unterstütung für Rückstau](https://streams.spec.whatwg.org/#example-rs-push-backpressure) in der Spezifikation bietet ein gutes Beispiel für die Verwendung von [`ReadablestreamDefaultController.desiredSize`](/de/docs/Web/API/ReadablestreamDefaultController/desiredSize), um manuell zu erkennen, wann der Stream voll ist und Rückstau anzuwenden, sowie für die Verwendung von `error()`, um manuell einen Stream-Fehler auszulösen, wenn ein anderer Teil des Systems, auf den es sich stützt, ausfällt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
- [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)
