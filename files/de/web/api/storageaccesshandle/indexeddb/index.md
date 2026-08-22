---
title: "StorageAccessHandle: indexedDB-Eigenschaft"
short-title: indexedDB
slug: Web/API/StorageAccessHandle/indexedDB
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("Storage Access API")}}

Die **`indexedDB`**-Eigenschaft des [`StorageAccessHandle`](/de/docs/Web/API/StorageAccessHandle)-Interfaces gibt ein nicht partitioniertes [`IDBFactory`](/de/docs/Web/API/IDBFactory)-Objekt zurück, wenn der Zugriff gewährt wurde. Andernfalls wird ein `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

## Wert

Ein [`IDBFactory`](/de/docs/Web/API/IDBFactory)-Objekt.

## Beispiele

```js
document.requestStorageAccess({ indexedDB: true }).then(
  async (handle) => {
    console.log("indexedDB access granted");
    await handle.indexedDB.deleteDatabase("foo");
  },
  () => {
    console.log("indexedDB access denied");
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
