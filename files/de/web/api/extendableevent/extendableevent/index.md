---
title: "ExtendableEvent: ExtendableEvent() Konstruktor"
short-title: ExtendableEvent()
slug: Web/API/ExtendableEvent/ExtendableEvent
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Der **`ExtendableEvent()`** Konstruktor erstellt ein neues {{domxref("ExtendableEvent")}} Objekt.

## Syntax

```js-nolint
new ExtendableEvent(type)
new ExtendableEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Es ist case-sensitive.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ beliebige benutzerdefinierte Einstellungen enthalten kann,
    die Sie auf das Ereignisobjekt anwenden möchten.
    Derzeit sind keine Optionen zwingend erforderlich,
    aber dies wurde für die zukünftige Kompatibilität zwischen den verschiedenen abgeleiteten Ereignissen definiert.

### Rückgabewert

Ein neues {{domxref("ExtendableEvent")}} Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel für Service Workers](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
