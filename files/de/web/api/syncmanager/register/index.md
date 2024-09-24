---
title: "SyncManager: Methode register()"
short-title: register()
slug: Web/API/SyncManager/register
l10n:
  sourceCommit: 56df677713fecf43ec0eb8862cb91c141aaa0005
---

{{APIRef("Background Sync")}}{{AvailableInWorkers}}

Die **`register()`**-Methode der {{domxref("SyncManager")}}-Schnittstelle registriert ein Synchronisationsereignis, das ein {{domxref("ServiceWorkerGlobalScope.sync_event", "sync")}}-Ereignis im zugehörigen Service Worker auslöst, sobald Netzwerkverbindung verfügbar ist.

## Syntax

```js-nolint
register(tag)
```

### Parameter

- `tag`
  - : Ein Bezeichner für dieses Synchronisationsereignis. Dies wird der Wert der `tag`-Eigenschaft des {{domxref("SyncEvent")}} sein, der in den {{domxref("ServiceWorkerGlobalScope.sync_event", "sync")}}-Ereignis-Handler des Service Workers übergeben wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, der sich in {{jsxref("undefined")}} auflöst.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der aktuelle Service Worker nicht aktiv ist.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Hintergrundsynchronisation vom Benutzer deaktiviert wurde.

## Beispiele

Die folgende asynchrone Funktion registriert eine Hintergrundsynchronisation aus einer Browsing-Umgebung:

```js
async function syncMessagesLater() {
  const registration = await navigator.serviceWorker.ready;
  try {
    await registration.sync.register("sync-messages");
  } catch {
    console.log("Background Sync could not be registered!");
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
