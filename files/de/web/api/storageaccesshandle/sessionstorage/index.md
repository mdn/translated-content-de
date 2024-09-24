---
title: "StorageAccessHandle: sessionStorage-Eigenschaft"
short-title: sessionStorage
slug: Web/API/StorageAccessHandle/sessionStorage
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Storage Access API")}}

Die **`sessionStorage`**-Eigenschaft der {{domxref("StorageAccessHandle")}}-Schnittstelle gibt ein unpartitioniertes session-basiertes {{domxref("Storage")}}-Objekt zurück, wenn der Zugriff gewährt wurde, und wirft andernfalls einen `SecurityError`-{{DOMxRef("DOMException")}}.

## Wert

Ein {{domxref("Storage")}}-Objekt.

## Beispiele

```js
document.requestStorageAccess({ sessionStorage: true }).then(
  (handle) => {
    console.log("sessionStorage access granted");
    handle.sessionStorage.setItem("foo", "bar");
  },
  () => {
    console.log("sessionStorage access denied");
  },
);
```

> [!NOTE]
> Siehe [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein umfassenderes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.requestStorageAccess()")}}
- [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
