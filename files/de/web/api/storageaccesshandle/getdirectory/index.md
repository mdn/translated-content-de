---
title: "StorageAccessHandle: getDirectory() Eigenschaft"
short-title: getDirectory()
slug: Web/API/StorageAccessHandle/getDirectory
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Storage Access API")}}

> [!NOTE]
> Siehe [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory), um die Verwendung zu verstehen.

## Syntax

```js-nolint
handle.getDirectory()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem unpartitionierten [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt erfüllt wird.

### Ausnahmen

- `SecurityError` [`DomException`](/de/docs/Web/API/DomException)
  - : Wird ausgelöst, wenn der Zugriff nicht gewährt wurde.

Siehe [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory)

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
> Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein vollständigeres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
