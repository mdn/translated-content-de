---
title: "StorageAccessHandle: createObjectURL()-Eigenschaft"
short-title: createObjectURL()
slug: Web/API/StorageAccessHandle/createObjectURL
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Storage Access API")}}

> [!NOTE]
> Siehe {{domxref("URL.createObjectURL_static", "createObjectURL()")}}, um die Verwendung zu verstehen.

## Syntax

```js-nolint
handle.createObjectURL(object)
```

### Parameter

- `object`
  - : Siehe {{domxref("URL.createObjectURL_static", "createObjectURL()")}}.

### Rückgabewert

Ein String, der eine nicht partitionierte Objekt-URL enthält, die verwendet werden kann, um auf den Inhalt des angegebenen Quell-`object` zu verweisen.

### Ausnahmen

- `SecurityError` {{domxref("DomException")}}
  - : Wird ausgelöst, wenn der Zugriff nicht gewährt wurde.

Siehe {{domxref("URL.createObjectURL_static", "createObjectURL()")}}

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

- {{domxref("Document.requestStorageAccess()")}}
- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
