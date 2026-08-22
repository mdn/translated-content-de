---
title: "StorageAccessHandle: getDirectory()-Methode"
short-title: getDirectory()
slug: Web/API/StorageAccessHandle/getDirectory
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("Storage Access API")}}

> [!NOTE]
> Siehe [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory), um die Verwendung zu verstehen.

## Syntax

```js-nolint
getDirectory()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem nicht partitionierten [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt erfüllt wird.

### Ausnahmen

- `SecurityError` [`DomException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zugriff nicht gewährt wurde.

Siehe [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory)

## Beispiele

```js
document.requestStorageAccess({ getDirectory: true }).then(
  async (handle) => {
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
