---
title: "WorkerGlobalScope: Methode structuredClone()"
short-title: structuredClone()
slug: Web/API/WorkerGlobalScope/structuredClone
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die Methode **`structuredClone()`** der Schnittstelle [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) erstellt mithilfe des [Structured-Clone-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) eine {{Glossary("deep_copy", "tiefe Kopie")}} eines übergebenen Werts.

Die Methode ermöglicht es außerdem, [übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) im ursprünglichen Wert auf das neue Objekt zu _übertragen_, statt sie zu klonen.
Übertragene Objekte werden vom ursprünglichen Objekt getrennt und dem neuen Objekt zugeordnet; im ursprünglichen Objekt sind sie nicht mehr zugänglich.

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
  - : Ein Objekt mit der folgenden Eigenschaft:
    - `transfer`
      - : Ein Array von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), die in das zurückgegebene Objekt verschoben statt geklont werden.

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

- [Ein Polyfill für `structuredClone`](https://core-js.io/docs/features/web-standards/structured-clone) ist in [`core-js`](https://core-js.io/) verfügbar
- [Structured-Clone-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
