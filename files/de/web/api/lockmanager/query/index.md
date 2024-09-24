---
title: "LockManager: query()-Methode"
short-title: query()
slug: Web/API/LockManager/query
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`query()`**-Methode der {{domxref("LockManager")}}-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das mit einem Objekt aufgelöst wird, das Informationen über gehaltene und ausstehende Sperren enthält.

## Syntax

```js-nolint
query()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem Objekt aufgelöst wird, das einen Snapshot des Zustands des {{domxref("LockManager")}} enthält. Das Objekt hat folgende Eigenschaften:

- `held`
  - : Ein Array von `LockInfo`-Objekten für gehaltene Sperren.
- `pending`
  - : Ein Array von `LockInfo`-Objekten für ausstehende Sperranfragen.

Das `LockInfo`-Objekt kann folgende Eigenschaften haben:

- `name`
  - : Der Name, der bei der Anforderung der Sperre an {{domxref("LockManager.request()")}} übergeben wurde.
- `mode`
  - : Der Zugriffsmodus, der bei der Anforderung der Sperre an {{domxref("LockManager.request()")}} übergeben wurde. Der Modus ist entweder `"exclusive"` oder `"shared"`.
- `clientId`
  - : Die eindeutige Identität des Kontexts, in dem {{domxref("LockManager.request()")}} aufgerufen wird. Dies ist derselbe Wert wie {{domxref("Client.id")}}.

### Ausnahmen

Diese Methode kann ein Promise zurückgeben, das mit einem {{domxref("DOMException")}} der folgenden Typen abgelehnt wird:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das Dokument der Umgebung nicht vollständig aktiv ist.
- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn ein Sperr-Manager für die aktuelle Umgebung nicht erlangt werden kann.

## Beispiele

```js
const state = await navigator.locks.query();
for (const lock of state.held) {
  console.log(`held lock: name ${lock.name}, mode ${lock.mode}`);
}
for (const request of state.pending) {
  console.log(`requested lock: name ${request.name}, mode ${request.mode}`);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
