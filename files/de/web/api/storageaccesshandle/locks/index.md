---
title: "StorageAccessHandle: locks-Eigenschaft"
short-title: locks
slug: Web/API/StorageAccessHandle/locks
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Storage Access API")}}

Die **`locks`**-Eigenschaft der {{domxref("StorageAccessHandle")}}-Schnittstelle gibt ein unpartitioniertes Sitzungs-{{domxref("LockManager")}}-Objekt zurück, wenn der Zugriff gewährt wurde, und wirft andernfalls eine `SecurityError`-{{DOMxRef("DOMException")}}.

## Wert

Ein {{domxref("LockManager")}}-Objekt.

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
> Weitere Informationen finden Sie unter [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein umfassenderes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.requestStorageAccess()")}}
- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
