---
title: "RemotePlayback: Methode cancelWatchAvailability()"
short-title: cancelWatchAvailability()
slug: Web/API/RemotePlayback/cancelWatchAvailability
l10n:
  sourceCommit: 70fa06c3cd8fa73c4d4fe85f382518dc5bf4dc4f
---

{{APIRef("Remote Playback API")}}

Die **`cancelWatchAvailability()`**-Methode des [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)-Interfaces stoppt die Anforderung zur Überwachung für eines oder alle verfügbaren Geräte.

## Syntax

```js-nolint
cancelWatchAvailability()
cancelWatchAvailability(id)
```

### Parameter

- `id` {{optional_inline}}

  - : Die `callbackId` eines bestimmten Remote-Wiedergabegeräts.

    Wenn eine spezifische `callbackId` eines Geräts übergeben wird, wird dieses Gerät aus der Liste der überwachten Geräte entfernt. Andernfalls wird die gesamte Liste geleert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` auflöst.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`disableRemotePlayback`](/de/docs/Web/API/HTMLMediaElement/disableRemotePlayback) für das Medienelement `true` ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine `id` übergeben wird, die keiner verfügbaren `callbackId` entspricht.

## Beispiele

Sobald ein Remote-Wiedergabegerät identifiziert und verbunden wurde, kann die Überwachung der verfügbaren Geräte mit `cancelWatchAvailability()` gestoppt werden.

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
