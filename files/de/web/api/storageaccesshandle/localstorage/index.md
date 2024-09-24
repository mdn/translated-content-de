---
title: "StorageAccessHandle: localStorage-Eigenschaft"
short-title: localStorage
slug: Web/API/StorageAccessHandle/localStorage
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Storage Access API")}}

Die **`localStorage`**-Eigenschaft der {{domxref("StorageAccessHandle")}}-Schnittstelle gibt ein nicht partitioniertes lokales {{domxref("Storage")}}-Objekt zurück, wenn der Zugriff gewährt wurde, und löst andernfalls eine `SecurityError` {{DOMxRef("DOMException")}} aus.

## Wert

Ein {{domxref("Storage")}}-Objekt.

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
> Sehen Sie [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein vollständigeres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.requestStorageAccess()")}}
- [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
