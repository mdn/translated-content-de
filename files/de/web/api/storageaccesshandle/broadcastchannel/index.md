---
title: "StorageAccessHandle: BroadcastChannel() Methode"
short-title: BroadcastChannel()
slug: Web/API/StorageAccessHandle/BroadcastChannel
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Storage Access API")}}

> [!NOTE]
> Siehe [`BroadcastChannel()`](/de/docs/Web/API/BroadcastChannel/BroadcastChannel), um die Verwendung zu verstehen.

## Syntax

```js-nolint
BroadcastChannel(channelName)
```

### Parameter

- `channelName`
  - : Siehe [`BroadcastChannel()`](/de/docs/Web/API/BroadcastChannel/BroadcastChannel).

### Rückgabewert

Ein nicht partitioniertes [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-Objekt.

### Ausnahmen

- `SecurityError` [`DomException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zugriff nicht gewährt wurde.

Siehe [`BroadcastChannel()`](/de/docs/Web/API/BroadcastChannel/BroadcastChannel)

## Beispiele

```js
document.requestStorageAccess({ BroadcastChannel: true }).then(
  (handle) => {
    console.log("BroadcastChannel access granted");
    handle.BroadcastChannel(channel_name);
  },
  () => {
    console.log("BroadcastChannel access denied");
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
