---
title: "StorageAccessHandle: caches-Eigenschaft"
short-title: caches
slug: Web/API/StorageAccessHandle/caches
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Storage Access API")}}

Die **`caches`**-Eigenschaft der {{domxref("StorageAccessHandle")}}-Schnittstelle gibt ein unpartitioniertes {{domxref("CacheStorage")}}-Objekt zurück, wenn der Zugriff gewährt wurde, und wirft andernfalls einen `SecurityError`-{{DOMxRef("DOMException")}}.

## Wert

Ein {{domxref("CacheStorage")}}-Objekt.

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
> Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein vollständigeres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.requestStorageAccess()")}}
- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
