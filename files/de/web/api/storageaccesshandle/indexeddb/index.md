---
title: "StorageAccessHandle: indexedDB-Eigenschaft"
short-title: indexedDB
slug: Web/API/StorageAccessHandle/indexedDB
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Storage Access API")}}

Die **`indexedDB`**-Eigenschaft des [`StorageAccessHandle`](/de/docs/Web/API/StorageAccessHandle)-Interfaces gibt ein nicht partitioniertes [`IDBFactory`](/de/docs/Web/API/IDBFactory)-Objekt zurück, wenn der Zugriff gewährt wurde. Andernfalls wird eine `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

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
> Für ein vollständigeres Beispiel siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
