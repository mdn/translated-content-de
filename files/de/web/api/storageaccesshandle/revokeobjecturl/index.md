---
title: "StorageAccessHandle: Eigenschaft revokeObjectURL()"
short-title: revokeObjectURL()
slug: Web/API/StorageAccessHandle/revokeObjectURL
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Storage Access API")}}

> [!NOTE]
> Siehe {{domxref("URL.revokeObjectURL_static", "revokeObjectURL()")}}, um die Verwendung zu verstehen.

## Syntax

```js-nolint
handle.revokeObjectURL(objectURL)
```

### Parameter

- `objectURL`
  - : Siehe {{domxref("URL.revokeObjectURL_static", "revokeObjectURL()")}}.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError` {{domxref("DomException")}}
  - : Wird ausgelöst, wenn der Zugriff nicht gewährt wurde.

Siehe {{domxref("URL.revokeObjectURL_static", "revokeObjectURL()")}}

## Beispiele

```js
document.requestStorageAccess({ revokeObjectURL: true }).then(
  (handle) => {
    console.log("revokeObjectURL Zugriff gewährt");
    handle.revokeObjectURL(blob_url);
  },
  () => {
    console.log("revokeObjectURL Zugriff verweigert");
  },
);
```

> [!NOTE]
> Siehe [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein vollständigeres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.requestStorageAccess()")}}
- [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
