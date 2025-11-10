---
title: "StorageAccessHandle: createObjectURL() Methode"
short-title: createObjectURL()
slug: Web/API/StorageAccessHandle/createObjectURL
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Storage Access API")}}

> [!NOTE]
> Siehe [`createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static), um die Verwendung zu verstehen.

## Syntax

```js-nolint
createObjectURL(object)
```

### Parameter

- `object`
  - : Siehe [`createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static).

### Rückgabewert

Ein String, der eine nicht partitionierte Objekt-URL enthält, die verwendet werden kann, um auf den Inhalt des angegebenen Quell-`object` zu verweisen.

### Ausnahmen

- `SecurityError` [`DomException`](/de/docs/Web/API/DOMException)
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
