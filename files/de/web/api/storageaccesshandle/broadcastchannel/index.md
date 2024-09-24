---
title: "StorageAccessHandle: BroadcastChannel()-Eigenschaft"
short-title: BroadcastChannel()
slug: Web/API/StorageAccessHandle/BroadcastChannel
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Storage Access API")}}

> [!NOTE]
> Siehe {{domxref("BroadcastChannel.BroadcastChannel", "BroadcastChannel()")}}, um die Verwendung zu verstehen.

## Syntax

```js-nolint
handle.BroadcastChannel(channelName)
```

### Parameter

- `channelName`
  - : Siehe {{domxref("BroadcastChannel.BroadcastChannel", "BroadcastChannel()")}}.

### Rückgabewert

Ein nicht partitioniertes {{domxref("BroadcastChannel")}}-Objekt.

### Ausnahmen

- `SecurityError` {{domxref("DomException")}}
  - : Wird ausgelöst, wenn der Zugriff nicht gewährt wurde.

Siehe {{domxref("BroadcastChannel.BroadcastChannel", "BroadcastChannel()")}}

## Beispiele

```js
document.requestStorageAccess({ BroadcastChannel: true }).then(
  (handle) => {
    console.log("BroadcastChannel-Zugriff gewährt");
    handle.BroadcastChannel(channel_name);
  },
  () => {
    console.log("BroadcastChannel-Zugriff verweigert");
  },
);
```

> [!NOTE]
> Siehe [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using) für ein umfassenderes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.requestStorageAccess()")}}
- [Verwendung der Storage Access API](/de/docs/Web/API/Storage_Access_API/Using)
