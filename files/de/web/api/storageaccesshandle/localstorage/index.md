---
title: "StorageAccessHandle: localStorage-Eigenschaft"
short-title: localStorage
slug: Web/API/StorageAccessHandle/localStorage
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Storage Access API")}}

Die **`localStorage`**-Eigenschaft des [`StorageAccessHandle`](/de/docs/Web/API/StorageAccessHandle)-Interfaces gibt ein unpartitioniertes lokales [`Storage`](/de/docs/Web/API/Storage)-Objekt zurück, wenn der Zugriff gewährt wurde, und wirft ansonsten einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException).

## Wert

Ein [`Storage`](/de/docs/Web/API/Storage)-Objekt.

## Beispiele

```js
document.requestStorageAccess({ localStorage: true }).then(
  (handle) => {
    console.log("localStorage access granted");
    handle.localStorage.setItem("foo", "bar");
  },
  () => {
    console.log("localStorage access denied");
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
