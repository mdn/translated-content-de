---
title: "RemotePlayback: cancelWatchAvailability() Methode"
short-title: cancelWatchAvailability()
slug: Web/API/RemotePlayback/cancelWatchAvailability
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Remote Playback API")}}

Die **`cancelWatchAvailability()`** Methode des [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)-Interfaces storniert die Anfrage, um auf ein oder alle verfügbaren Geräte zu achten.

## Syntax

```js-nolint
cancelWatchAvailability()
cancelWatchAvailability(id)
```

### Parameter

- `id` {{optional_inline}}

  - : Die `callbackId` eines bestimmten Remote-Playback-Geräts.

    Wenn eine `callbackId` eines spezifischen Geräts übergeben wird, dann wird dieses Gerät aus der Liste der überwachten Geräte entfernt. Andernfalls wird die gesamte Liste gelöscht.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`disableRemotePlayback`](/de/docs/Web/API/HTMLMediaElement/disableRemotePlayback) für das Medienelement auf `true` gesetzt ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine `id` übergeben wird, die keiner verfügbaren `callbackId` entspricht.

## Beispiele

Sobald ein Remote-Playback-Gerät identifiziert und verbunden wurde, kann die Überwachung der verfügbaren Geräte mit `cancelWatchAvailability()` gestoppt werden.

```js
function switchToRemoteUI() {
  // Indicate that the state is 'connecting' or 'connected' to the user.
  // For example, hide the video element as only controls are needed.
  videoElem.style.display = "none";

  // Stop monitoring the availability of remote playback devices.
  videoElem.remote.cancelWatchAvailability();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
