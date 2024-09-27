---
title: "StorageAccessHandle: sessionStorage-Eigenschaft"
short-title: sessionStorage
slug: Web/API/StorageAccessHandle/sessionStorage
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Storage Access API")}}

Die **`sessionStorage`**-Eigenschaft des [`StorageAccessHandle`](/de/docs/Web/API/StorageAccessHandle)-Interfaces gibt ein nicht partitioniertes Session-[`Storage`](/de/docs/Web/API/Storage)-Objekt zurück, wenn der Zugriff gewährt wurde, und wirft andernfalls einen `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException).

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
> Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein vollständigeres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
