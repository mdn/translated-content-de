---
title: "StorageAccessHandle: caches-Eigenschaft"
short-title: caches
slug: Web/API/StorageAccessHandle/caches
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Storage Access API")}}

Die **`caches`**-Eigenschaft des [`StorageAccessHandle`](/de/docs/Web/API/StorageAccessHandle)-Interfaces gibt ein nicht partitioniertes [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, wenn der Zugriff gewährt wurde, und wirft andernfalls einen `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException).

## Wert

Ein [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt.

## Beispiele

```js
document.requestStorageAccess({ caches: true }).then(
  (handle) => {
    console.log("caches access granted");
    const cache = await handle.caches.open("foo");
    await cache.add("/");
  },
  () => {
    console.log("caches access denied");
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
