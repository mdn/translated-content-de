---
title: "StorageAccessHandle: indexedDB-Eigenschaft"
short-title: indexedDB
slug: Web/API/StorageAccessHandle/indexedDB
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Storage Access API")}}

Die **`indexedDB`**-Eigenschaft der {{domxref("StorageAccessHandle")}}-Schnittstelle gibt ein nicht partitioniertes {{domxref("IDBFactory")}}-Objekt zurück, wenn der Zugriff gewährt wurde, und löst andernfalls einen `SecurityError` {{DOMxRef("DOMException")}} aus.

## Wert

Ein {{domxref("IDBFactory")}}-Objekt.

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
> Siehe [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein vollständigeres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.requestStorageAccess()")}}
- [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
