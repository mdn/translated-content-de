---
title: "RemotePlayback: cancelWatchAvailability() Methode"
short-title: cancelWatchAvailability()
slug: Web/API/RemotePlayback/cancelWatchAvailability
l10n:
  sourceCommit: 70fa06c3cd8fa73c4d4fe85f382518dc5bf4dc4f
---

{{APIRef("Remote Playback API")}}

Die **`cancelWatchAvailability()`** Methode der [`RemotePlayback`](/de/docs/Web/API/RemotePlayback) Schnittstelle storniert die Anfrage, um ein oder alle verfügbaren Geräte zu überwachen.

## Syntax

```js-nolint
cancelWatchAvailability()
cancelWatchAvailability(id)
```

### Parameter

- `id` {{optional_inline}}

  - : Die `callbackId` eines bestimmten Remote-Playback-Geräts.

    Wenn eine `callbackId` eines spezifischen Geräts übergeben wird, dann wird dieses Gerät aus der Liste der überwachten Geräte entfernt. Andernfalls wird die gesamte Liste geleert.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit `undefined` aufgelöst wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`disableRemotePlayback`](/de/docs/Web/API/HTMLMediaElement/disableRemotePlayback) für das Medienelement `true` ist.
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
