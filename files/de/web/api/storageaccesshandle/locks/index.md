---
title: "StorageAccessHandle: locks-Eigenschaft"
short-title: locks
slug: Web/API/StorageAccessHandle/locks
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Storage Access API")}}

Die **`locks`**-Eigenschaft des [`StorageAccessHandle`](/de/docs/Web/API/StorageAccessHandle)-Interfaces gibt ein nicht partitioniertes Sitzungs-[`LockManager`](/de/docs/Web/API/LockManager)-Objekt zurück, wenn der Zugriff gewährt wurde, und wirft andernfalls einen `SecurityError`-`DOMException`-Fehler.

## Wert

Ein [`LockManager`](/de/docs/Web/API/LockManager)-Objekt.

## Beispiele

```js
document.requestStorageAccess({ locks: true }).then(
  (handle) => {
    console.log("locks access granted");
    await handle.locks.request('foo', async lock => {
        return "ok";
    });
  },
  () => {
    console.log("locks access denied");
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

- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
