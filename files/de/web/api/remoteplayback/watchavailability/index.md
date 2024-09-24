---
title: "RemotePlayback: watchAvailability() Methode"
short-title: watchAvailability()
slug: Web/API/RemotePlayback/watchAvailability
l10n:
  sourceCommit: 70fa06c3cd8fa73c4d4fe85f382518dc5bf4dc4f
---

{{APIRef("Remote Playback API")}}

Die **`watchAvailability()`**-Methode der {{domxref("RemotePlayback")}}-Schnittstelle überwacht die Liste der verfügbaren Remote-Wiedergabegeräte und gibt ein {{jsxref("Promise")}} zurück, das mit der `callbackId` eines Remote-Wiedergabegeräts aufgelöst wird.

## Syntax

```js-nolint
watchAvailability(RemotePlaybackAvailabilityCallback)
```

### Parameter

- `RemotePlaybackAvailabilityCallback(boolean)`
  - : Ein Rückruf, der es der Seite ermöglicht, die Verfügbarkeit von Remote-Wiedergabegeräten für das entsprechende Medienelement zu erhalten. Es wird ein boolean übergeben, der, falls true, anzeigt, dass die Remote-Wiedergabe verfügbar ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit einer Ganzzahl auflöst. Dies ist die `callbackId` für das identifizierte Remote-Wiedergabegerät.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn {{domxref("HTMLMediaElement.disableRemotePlayback","disableRemotePlayback")}} für das Medienelement `true` ist.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Benutzeragent die Liste der verfügbaren Remote-Wiedergabegeräte nicht kontinuierlich überwachen kann.

## Beispiele

Im folgenden Beispiel, nachdem überprüft wurde, dass kein Gerät derzeit verbunden ist, wird `watchAvailability()` verwendet, um auf das Verfügbarwerden von Remote-Geräten zu achten. [Siehe das funktionierende Beispiel](https://beaufortfrancois.github.io/sandbox/media/remote-playback.html) (Erfordert ein unterstütztes Gerät und ein verbundenes Remote-Wiedergabegerät).

```js
if (video.remote.state === "disconnected") {
  video.remote.watchAvailability(handleAvailabilityChange).then((id) => {
    log(`> Started watching remote device availability: ${id}`);
    callbackId = id;
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
