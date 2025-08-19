---
title: "StorageAccessHandle: SharedWorker()-Methode"
short-title: SharedWorker()
slug: Web/API/StorageAccessHandle/SharedWorker
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
---

{{APIRef("Storage Access API")}}

> [!NOTE]
> Siehe [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker), um die Verwendung zu verstehen.

## Syntax

```js-nolint
SharedWorker(url)
SharedWorker(url, name)
SharedWorker(url, options)
```

### Parameter

- `url`
  - : Siehe [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker).
- `name` {{optional_inline}}
  - : Siehe [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker).
- `options` {{optional_inline}}
  - : Siehe [`SharedWorker()`](/de/docs/Web/API/SharedWorker/SharedWorker).

> [!NOTE]
> `options.sameSiteCookies` unterstützt nur den Wert "none", was der Standard ist.

### Rückgabewert

Ein nicht aufgeteilter [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Objekt.

### Ausnahmen

- `SecurityError` [`DomException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der Zugriff nicht gewährt wurde.

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
> Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein umfassenderes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
