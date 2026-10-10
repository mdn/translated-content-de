---
title: "WorkerGlobalScope: Methode structuredClone()"
short-title: structuredClone()
slug: Web/API/WorkerGlobalScope/structuredClone
l10n:
  sourceCommit: 47b1321d6cac5c7093583162c4cf73e015cc4905
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die Methode **`structuredClone()`** der Schnittstelle [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) erstellt mithilfe des [Structured-Clone-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) eine {{Glossary("deep_copy", "tiefe Kopie")}} eines übergebenen Werts.

Die Methode ermöglicht außerdem, [transferierbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) im ursprünglichen Wert auf das neue Objekt zu _übertragen_, statt sie zu klonen.
Übertragene Objekte werden vom ursprünglichen Objekt getrennt und dem neuen Objekt zugeordnet. Im ursprünglichen Objekt sind sie anschließend nicht mehr zugänglich.

## Syntax

```js-nolint
structuredClone(value)
structuredClone(value, options)
```

### Parameter

- `value`
  - : Das zu klonende Objekt.
    Dies kann jeder [strukturiert klonbare Typ](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types) sein.
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `transfer`
      - : Ein Array von [transferierbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), die in das zurückgegebene Objekt verschoben statt geklont werden.

### Rückgabewert

Eine {{Glossary("deep_copy", "tiefe Kopie")}} des ursprünglichen `value`.

### Ausnahmen

- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Teil des Eingabewerts nicht serialisierbar ist.

## Beschreibung

Weitere Informationen zu dieser Funktion finden Sie unter [`Window.structuredClone()`](/de/docs/Web/API/Window/structuredClone).

## Beispiele

Beispiele finden Sie unter [`Window.structuredClone()`](/de/docs/Web/API/Window/structuredClone).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Polyfill für `structuredClone`](https://github.com/zloirock/core-js#structuredclone) ist in [`core-js`](https://github.com/zloirock/core-js) verfügbar.
- [Structured-Clone-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
