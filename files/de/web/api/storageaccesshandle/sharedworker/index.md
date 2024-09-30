---
title: "StorageAccessHandle: SharedWorker()-Methode"
short-title: SharedWorker()
slug: Web/API/StorageAccessHandle/SharedWorker
l10n:
  sourceCommit: 1383a2eb15e514c16b14d7168309417e1eee8040
---

{{APIRef("Storage Access API")}}

> [!NOTE]
> Siehe [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker), um die Verwendung zu verstehen.

## Syntax

```js-nolint
handle.SharedWorker(aURL)
handle.SharedWorker(aURL, name)
handle.SharedWorker(aURL, options)
```

### Parameter

- `aURL`
  - : Siehe [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker).
- `name` {{optional_inline}}
  - : Siehe [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker).
- `options` {{optional_inline}}
  - : Siehe [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker).

> **Hinweis:** `options.sameSiteCookies` unterstützt nur den Wert "none", der Standardwert ist.

### Rückgabewert

Ein unpartitioniertes [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Objekt.

### Ausnahmen

- `SecurityError` [`DomException`](/de/docs/Web/API/DomException)
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
> Siehe [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein umfassenderes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
- [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
