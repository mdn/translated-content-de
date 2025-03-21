---
title: "StorageAccessHandle: SharedWorker() Methode"
short-title: SharedWorker()
slug: Web/API/StorageAccessHandle/SharedWorker
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Storage Access API")}}

> [!NOTE]
> Siehe [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker), um die Verwendung zu verstehen.

## Syntax

```js-nolint
SharedWorker(aURL)
SharedWorker(aURL, name)
SharedWorker(aURL, options)
```

### Parameter

- `aURL`
  - : Siehe [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker).
- `name` {{optional_inline}}
  - : Siehe [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker).
- `options` {{optional_inline}}
  - : Siehe [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker).

> **Hinweis:** `options.sameSiteCookies` unterstützt nur den Wert "none", welcher der Standardwert ist.

### Rückgabewert

Ein unpartitioniertes [`SharedWorker`](/de/docs/Web/API/SharedWorker) Objekt.

### Ausnahmen

- `SecurityError` [`DomException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zugriff nicht gewährt wurde.

Siehe [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker)

## Beispiele

```js
document.requestStorageAccess({ SharedWorker: true }).then(
  (handle) => {
    console.log("SharedWorker access granted");
    handle.SharedWorker(shared_worker_url);
  },
  () => {
    console.log("SharedWorker access denied");
  },
);
```

> [!NOTE]
> Siehe [Verwenden der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein vollständigeres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
- [Verwenden der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
