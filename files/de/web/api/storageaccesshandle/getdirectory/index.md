---
title: "StorageAccessHandle: Methode getDirectory()"
short-title: getDirectory()
slug: Web/API/StorageAccessHandle/getDirectory
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Storage Access API")}}

> [!NOTE]
> Siehe [`StorageManager.getDirectory()`](/de/docs/Web/API/StorageManager/getDirectory), um das Verständnis zur Nutzung zu erlangen.

## Syntax

```js-nolint
getDirectory()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem unpartitionierten [`FileSystemDirectoryHandle`](/de/docs/Web/API/FileSystemDirectoryHandle)-Objekt erfüllt wird.

### Ausnahmen

- `SecurityError` [`DomException`](/de/docs/Web/API/DOMException)
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
