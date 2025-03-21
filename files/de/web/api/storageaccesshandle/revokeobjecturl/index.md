---
title: "StorageAccessHandle: revokeObjectURL() Methode"
short-title: revokeObjectURL()
slug: Web/API/StorageAccessHandle/revokeObjectURL
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Storage Access API")}}

> [!NOTE]
> Siehe [`revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) um die Verwendung zu verstehen.

## Syntax

```js-nolint
revokeObjectURL(objectURL)
```

### Parameter

- `objectURL`
  - : Siehe [`revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static).

### Rückgabewert

Kein ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError` [`DomException`](/de/docs/Web/API/DOMException)
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
