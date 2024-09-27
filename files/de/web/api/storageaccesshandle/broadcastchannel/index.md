---
title: "StorageAccessHandle: BroadcastChannel()-Eigenschaft"
short-title: BroadcastChannel()
slug: Web/API/StorageAccessHandle/BroadcastChannel
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Storage Access API")}}

> [!NOTE]
> Siehe [`BroadcastChannel()`](/de/docs/Web/API/BroadcastChannel/BroadcastChannel), um die Nutzung zu verstehen.

## Syntax

```js-nolint
handle.BroadcastChannel(channelName)
```

### Parameter

- `channelName`
  - : Siehe [`BroadcastChannel()`](/de/docs/Web/API/BroadcastChannel/BroadcastChannel).

### Rückgabewert

Ein nicht partitioniertes [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)-Objekt.

### Ausnahmen

- `SecurityError` [`DomException`](/de/docs/Web/API/DomException)
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
