---
title: "RemotePlayback: watchAvailability() Methode"
short-title: watchAvailability()
slug: Web/API/RemotePlayback/watchAvailability
l10n:
  sourceCommit: 70fa06c3cd8fa73c4d4fe85f382518dc5bf4dc4f
---

{{APIRef("Remote Playback API")}}

Die **`watchAvailability()`**-Methode des [`RemotePlayback`](/de/docs/Web/API/RemotePlayback)-Interfaces überwacht die Liste der verfügbaren Remote-Wiedergabegeräte und gibt ein {{jsxref("Promise")}} zurück, das mit der `callbackId` eines Remote-Wiedergabegerätes aufgelöst wird.

## Syntax

```js-nolint
watchAvailability(RemotePlaybackAvailabilityCallback)
```

### Parameter

- `RemotePlaybackAvailabilityCallback(boolean)`
  - : Ein Rückruf, der es der Seite ermöglicht, die Verfügbarkeit des Remote-Wiedergabegeräts für das entsprechende Medien-Element zu erhalten. Es wird ein boolean übergeben, der angibt, ob die Remote-Wiedergabe verfügbar ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer ganzen Zahl aufgelöst wird. Dies ist die `callbackId` für das identifizierte Remote-Wiedergabegerät.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`disableRemotePlayback`](/de/docs/Web/API/HTMLMediaElement/disableRemotePlayback) für das Medien-Element `true` ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzeragent nicht in der Lage ist, die Liste der verfügbaren Remote-Wiedergabegeräte kontinuierlich zu überwachen.

## Beispiele

Im folgenden Beispiel wird, nachdem überprüft wurde, dass kein momentan verbundenes Gerät existiert, `watchAvailability()` verwendet, um auf die Verfügbarkeit von Remote-Geräten zu warten. [Siehe das funktionierende Beispiel](https://beaufortfrancois.github.io/sandbox/media/remote-playback.html) (Erfordert ein unterstütztes Gerät und ein verbundenes Remote-Wiedergabegerät).

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
