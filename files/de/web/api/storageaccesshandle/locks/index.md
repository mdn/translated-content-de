---
title: "StorageAccessHandle: locks-Eigenschaft"
short-title: locks
slug: Web/API/StorageAccessHandle/locks
l10n:
  sourceCommit: 4a0413ef319179b7d0d833c42a156629544c8248
---

{{APIRef("Storage Access API")}}

Die **`locks`**-Eigenschaft der [`StorageAccessHandle`](/de/docs/Web/API/StorageAccessHandle)-Schnittstelle gibt ein nicht partitioniertes Sitzungs-`LockManager`-Objekt zurück, wenn der Zugriff gewährt wurde, und löst andernfalls einen `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) aus.

## Wert

Ein [`LockManager`](/de/docs/Web/API/LockManager)-Objekt.

## Beispiele

```js
document.requestStorageAccess({ locks: true }).then(
  (handle) => {
    console.log("locks access granted");
    handle.locks.request("foo", (lock) => "ok");
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
