---
title: "StorageAccessHandle: estimate() Methode"
short-title: estimate()
slug: Web/API/StorageAccessHandle/estimate
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Storage Access API")}}

> [!NOTE]
> Siehe [`StorageManager.estimate()`](/de/docs/Web/API/StorageManager/estimate), um die Verwendung zu verstehen.

## Syntax

```js-nolint
estimate()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem nicht partitionierten [`StorageEstimate`](/de/docs/Web/API/StorageManager/estimate) Objekt erfüllt wird.

### Ausnahmen

- `SecurityError` [`DomException`](/de/docs/Web/API/DomException)
  - : Wird ausgelöst, wenn kein Zugriff gewährt wurde.

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
