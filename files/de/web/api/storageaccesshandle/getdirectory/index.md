---
title: "StorageAccessHandle: Eigenschaft getDirectory()"
short-title: getDirectory()
slug: Web/API/StorageAccessHandle/getDirectory
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Storage Access API")}}

> [!NOTE]
> Siehe {{domxref("StorageManager.getDirectory()")}}, um die Verwendung zu verstehen.

## Syntax

```js-nolint
handle.getDirectory()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem unpartitionierten {{domxref("FileSystemDirectoryHandle")}}-Objekt erfüllt wird.

### Ausnahmen

- `SecurityError` {{domxref("DomException")}}
  - : Wird ausgelöst, wenn der Zugriff nicht gewährt wurde.

Siehe {{domxref("StorageManager.getDirectory()")}}

## Beispiele

```js
document.requestStorageAccess({ getDirectory: true }).then(
  (handle) => {
    console.log("getDirectory access granted");
    await handle.getDirectory();
  },
  () => {
    console.log("getDirectory access denied");
  },
);
```

> [!NOTE]
> Siehe [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein ausführlicheres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.requestStorageAccess()")}}
- [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
