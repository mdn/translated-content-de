---
title: "RemotePlayback: cancelWatchAvailability() Methode"
short-title: cancelWatchAvailability()
slug: Web/API/RemotePlayback/cancelWatchAvailability
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

{{APIRef("Remote Playback API")}}

Die **`cancelWatchAvailability()`**-Methode der [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)-Schnittstelle storniert die Anfrage zum Überwachen eines oder aller verfügbaren Geräte.

## Syntax

```js-nolint
cancelWatchAvailability()
cancelWatchAvailability(id)
```

### Parameter

- `id` {{optional_inline}}

  - : Die `callbackId` eines bestimmten Remote-Playback-Geräts.

    Wenn eine `callbackId` eines spezifischen Geräts übergeben wird, wird dieses Gerät aus der Liste der überwachten Geräte entfernt. Andernfalls wird die gesamte Liste gelöscht.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit `undefined` aufgelöst wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`disableRemotePlayback`](/de/docs/Web/API/HTMLMediaElement/disableRemotePlayback) für das Medien-Element `true` ist.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine `id` übergeben wird, die jedoch keiner verfügbaren `callbackId` entspricht.

## Beispiele

Sobald ein Remote-Playback-Gerät identifiziert und verbunden wurde, kann die Überwachung verfügbarer Geräte mit `cancelWatchAvailability()` gestoppt werden.

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
