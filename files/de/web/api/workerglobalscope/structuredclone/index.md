---
title: "WorkerGlobalScope: structuredClone() Methode"
short-title: structuredClone()
slug: Web/API/WorkerGlobalScope/structuredClone
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`structuredClone()`**-Methode der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle erstellt eine [tiefe Kopie](/de/docs/Glossary/deep_copy) eines gegebenen Wertes unter Verwendung des [strukturierte Clone-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

Die Methode erlaubt es auch, [transferierbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) im ursprünglichen Wert _zu übertragen_ anstatt sie zu klonen. Übertragene Objekte werden vom ursprünglichen Objekt getrennt und an das neue Objekt angehängt; sie sind im ursprünglichen Objekt nicht mehr zugänglich.

## Syntax

```js-nolint
structuredClone(value)
structuredClone(value, options)
```

### Parameter

- `value`
  - : Das zu klonende Objekt.
    Dies kann jeder [strukturierbar-klonbare Typ](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types) sein.
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `transfer`
      - : Ein Array von [transferierbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), die verschoben anstatt geklont werden sollen.

### Rückgabewert

Eine [tiefe Kopie](/de/docs/Glossary/deep_copy) des ursprünglichen `value`.

### Ausnahmen

- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Teil des Eingabewertes nicht serialisierbar ist.

## Beschreibung

Details zu dieser Funktion finden Sie in [`Window.structuredClone()`](/de/docs/Web/API/Window/structuredClone).

## Beispiele

Beispiele finden Sie unter [`Window.structuredClone()`](/de/docs/Web/API/Window/structuredClone).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Polyfill von `structuredClone`](https://github.com/zloirock/core-js#structuredclone) ist in [`core-js`](https://github.com/zloirock/core-js) verfügbar
- [Strukturierte Clone-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
- [Structured Clone Polyfill](https://github.com/ungap/structured-clone)
