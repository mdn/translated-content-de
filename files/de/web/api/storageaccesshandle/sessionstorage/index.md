---
title: "StorageAccessHandle: sessionStorage-Eigenschaft"
short-title: sessionStorage
slug: Web/API/StorageAccessHandle/sessionStorage
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Storage Access API")}}

Die **`sessionStorage`**-Eigenschaft der [`StorageAccessHandle`](/de/docs/Web/API/StorageAccessHandle)-Schnittstelle gibt ein nicht partitioniertes [`Storage`](/de/docs/Web/API/Storage)-Objekt für die Sitzung zurück, wenn der Zugriff gewährt wurde, und wirft andernfalls eine `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException).

## Wert

Ein [`Storage`](/de/docs/Web/API/Storage)-Objekt.

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
> Sehen Sie sich [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein umfassenderes Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
