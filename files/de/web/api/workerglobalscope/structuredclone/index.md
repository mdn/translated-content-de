---
title: "WorkerGlobalScope: structuredClone()-Methode"
short-title: structuredClone()
slug: Web/API/WorkerGlobalScope/structuredClone
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`structuredClone()`**-Methode der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle erstellt eine {{Glossary("deep_copy", "tiefe Kopie")}} eines gegebenen Werts unter Verwendung des [Structured Clone Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

Die Methode ermöglicht es auch, [transferierbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) im ursprünglichen Wert zu _übertragen_ statt sie in das neue Objekt zu klonen. Übertragene Objekte werden vom ursprünglichen Objekt abgelöst und dem neuen Objekt angehängt; sie sind im ursprünglichen Objekt nicht mehr zugänglich.

## Syntax

```js-nolint
structuredClone(value)
structuredClone(value, options)
```

### Parameter

- `value`
  - : Das zu klonende Objekt.
    Dies kann jeder [strukturklonbare Typ](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types) sein.
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `transfer`
      - : Ein Array von [transferierbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), die statt zu klonen in das zurückgegebene Objekt verschoben werden.

### Rückgabewert

Eine {{Glossary("deep_copy", "tiefe Kopie")}} des ursprünglichen `value`.

### Ausnahmen

- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Teil des Eingabewerts nicht serialisierbar ist.

## Beschreibung

Siehe [`Window.structuredClone()`](/de/docs/Web/API/Window/structuredClone) für Details zu dieser Funktion.

## Beispiele

Siehe [`Window.structuredClone()`](/de/docs/Web/API/Window/structuredClone) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ein [Polyfill von `structuredClone`](https://github.com/zloirock/core-js#structuredclone) ist in [`core-js`](https://github.com/zloirock/core-js) verfügbar
- [Structured Clone Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
- [Structured Clone Polyfill](https://github.com/ungap/structured-clone)
