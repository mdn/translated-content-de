---
title: "StorageAccessHandle: indexedDB-Eigenschaft"
short-title: indexedDB
slug: Web/API/StorageAccessHandle/indexedDB
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Storage Access API")}}

Die **`indexedDB`**-Eigenschaft der [`StorageAccessHandle`](/de/docs/Web/API/StorageAccessHandle)-Schnittstelle gibt ein unpartitioniertes [`IDBFactory`](/de/docs/Web/API/IDBFactory)-Objekt zurück, wenn der Zugriff gewährt wurde, und wirft andernfalls einen `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException).

## Wert

Ein [`IDBFactory`](/de/docs/Web/API/IDBFactory)-Objekt.

## Beispiele

```js
document.requestStorageAccess({ indexedDB: true }).then(
  (handle) => {
    console.log("indexedDB access granted");
    await handle.indexedDB.deleteDatabase("foo");
  },
  () => {
    console.log("indexedDB access denied");
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
