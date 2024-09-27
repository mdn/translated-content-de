---
title: "StorageAccessHandle: createObjectURL()-Eigenschaft"
short-title: createObjectURL()
slug: Web/API/StorageAccessHandle/createObjectURL
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Storage Access API")}}

> [!NOTE]
> Siehe [`createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static), um die Verwendung zu verstehen.

## Syntax

```js-nolint
handle.createObjectURL(object)
```

### Parameter

- `object`
  - : Siehe [`createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static).

### Rückgabewert

Ein String, der eine nicht partitionierte Objekt-URL enthält, die verwendet werden kann, um auf den Inhalt des angegebenen Quell-`object` zu verweisen.

### Ausnahmen

- `SecurityError` [`DomException`](/de/docs/Web/API/DomException)
  - : Wird ausgelöst, wenn der Zugriff nicht gewährt wurde.

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
> Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein vollständigeres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
