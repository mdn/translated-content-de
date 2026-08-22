---
title: "StorageAccessHandle: estimate() Methode"
short-title: estimate()
slug: Web/API/StorageAccessHandle/estimate
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("Storage Access API")}}

> [!NOTE]
> Siehe [`StorageManager.estimate()`](/de/docs/Web/API/StorageManager/estimate), um die Nutzung zu verstehen.

## Syntax

```js-nolint
estimate()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit einem unpartitionierten [`StorageEstimate`](/de/docs/Web/API/StorageManager/estimate) Objekt erfüllt.

### Ausnahmen

- `SecurityError` [`DomException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zugriff nicht gewährt wurde.

Siehe [`StorageManager.estimate()`](/de/docs/Web/API/StorageManager/estimate)

## Beispiele

```js
document.requestStorageAccess({ estimate: true }).then(
  async (handle) => {
    console.log("estimate access granted");
    await handle.estimate();
  },
  () => {
    console.log("estimate access denied");
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
