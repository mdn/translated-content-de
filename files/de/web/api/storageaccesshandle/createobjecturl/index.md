---
title: "StorageAccessHandle: createObjectURL()-Eigenschaft"
short-title: createObjectURL()
slug: Web/API/StorageAccessHandle/createObjectURL
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Storage Access API")}}

> [!NOTE]
> See [`createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) to understand usage.

## Syntax

```js-nolint
handle.createObjectURL(object)
```

### Parameter

- `object`
  - : Siehe [`createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static).

### Rückgabewert

Ein String, der eine unpartitionierte Objekt-URL enthält, die verwendet werden kann, um auf den Inhalt des angegebenen Quell-`object` zuzugreifen.

### Ausnahmen

- `SecurityError` [`DomException`](/de/docs/Web/API/DomException)
  - : Wird ausgelöst, wenn kein Zugriff gewährt wurde.

Siehe [`createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static)

## Beispiele

```js
document.requestStorageAccess({ createObjectURL: true }).then(
  (handle) => {
    console.log("createObjectURL access granted");
    handle.createObjectURL(new Blob(["foo"]));
  },
  () => {
    console.log("createObjectURL access denied");
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

- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
- [Using the Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
