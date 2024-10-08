---
title: "StorageAccessHandle: revokeObjectURL()-Eigenschaft"
short-title: revokeObjectURL()
slug: Web/API/StorageAccessHandle/revokeObjectURL
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Storage Access API")}}

> [!NOTE]
> Siehe [`revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static), um die Nutzung zu verstehen.

## Syntax

```js-nolint
handle.revokeObjectURL(objectURL)
```

### Parameter

- `objectURL`
  - : Siehe [`revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError` [`DomException`](/de/docs/Web/API/DomException)
  - : Wird ausgelöst, wenn der Zugriff nicht gewährt wurde.

Siehe [`revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static)

## Beispiele

```js
document.requestStorageAccess({ revokeObjectURL: true }).then(
  (handle) => {
    console.log("revokeObjectURL access granted");
    handle.revokeObjectURL(blob_url);
  },
  () => {
    console.log("revokeObjectURL access denied");
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
