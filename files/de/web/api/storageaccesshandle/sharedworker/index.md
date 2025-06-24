---
title: "StorageAccessHandle: SharedWorker() Methode"
short-title: SharedWorker()
slug: Web/API/StorageAccessHandle/SharedWorker
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("Storage Access API")}}

> [!NOTE]
> Siehe [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker), um die Nutzung zu verstehen.

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

> [!NOTE] > `options.sameSiteCookies` unterstützt nur den Wert "none", welcher der Standardwert ist.

### Rückgabewert

Ein nicht partitioniertes [`SharedWorker`](/de/docs/Web/API/SharedWorker) Objekt.

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
> Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein vollständigeren Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
