---
title: "StorageAccessHandle: estimate() Eigenschaft"
short-title: estimate()
slug: Web/API/StorageAccessHandle/estimate
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Storage Access API")}}

> [!NOTE]
> Siehe [`StorageManager.estimate()`](/de/docs/Web/API/StorageManager/estimate), um die Verwendung zu verstehen.

## Syntax

```js-nolint
handle.estimate()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem nicht partitionierten [`StorageEstimate`](/de/docs/Web/API/StorageManager/estimate) Objekt erfüllt wird.

### Ausnahmen

- `SecurityError` [`DomException`](/de/docs/Web/API/DomException)
  - : Wird ausgelöst, wenn der Zugriff nicht gewährt wurde.

Siehe [`StorageManager.estimate()`](/de/docs/Web/API/StorageManager/estimate)

## Beispiele

```js
document.requestStorageAccess({ estimate: true }).then(
  (handle) => {
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
