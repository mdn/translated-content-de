---
title: "HTMLMediaElement: setSinkId() Methode"
short-title: setSinkId()
slug: Web/API/HTMLMediaElement/setSinkId
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Audio Output Devices API")}}{{securecontext_header}}

Die **`setSinkId()`** Methode der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Schnittstelle setzt die ID des Audiogeräts, das für die Wiedergabe verwendet werden soll, und gibt ein {{jsxref("Promise")}} zurück.

Dies funktioniert nur, wenn die Anwendung berechtigt ist, das angegebene Gerät zu verwenden. Weitere Informationen finden Sie in den [Sicherheitsanforderungen](#sicherheitsanforderungen) unten.

## Syntax

```js-nolint
setSinkId(sinkId)
```

### Parameter

- `sinkId`
  - : Die [`MediaDeviceInfo.deviceId`](/de/docs/Web/API/MediaDeviceInfo/deviceId) des Audioausgabegeräts.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu {{jsxref("undefined")}} aufgelöst wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn eine [`speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) verwendet wird, um die Nutzung von Audioausgaben zu blockieren.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die `deviceId` keinem Audioausgabegerät entspricht.
- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn das Umschalten des Audioausgabegeräts auf das neue Audiogerät fehlgeschlagen ist.

## Sicherheitsanforderungen

Der Zugriff auf die API unterliegt den folgenden Beschränkungen:

- Die Methode muss in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) aufgerufen werden.
- Der Zugriff kann durch die [`speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) HTTP [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) eingeschränkt sein.
- Es ist die Erlaubnis des Benutzers erforderlich, um auf ein nicht standardmäßiges Gerät zuzugreifen.
  Der Benutzer erteilt die Erlaubnis, indem er das Gerät auswählt, das mit der ID in der durch [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput) angezeigten Eingabeaufforderung verknüpft ist.

## Beispiele

Dieses Beispiel zeigt, wie man ein Audioausgabegerät aus dem Array auswählt, das von [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) zurückgegeben wird, und es als Audio-Senke festlegt. Beachten Sie, dass das Ergebnis von `enumerateDevices()` nur Geräte enthält, für die keine Benutzerberechtigung erforderlich ist oder die bereits erteilt wurde.

```js
const devices = await navigator.mediaDevices.enumerateDevices();
const audioDevice = devices.find((device) => device.kind === "audiooutput");
const audio = document.createElement("audio");
await audio.setSinkId(audioDevice.deviceId);
console.log(`Audio is being output on ${audio.sinkId}`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API)
- [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput)
- [`HTMLMediaElement.sinkId`](/de/docs/Web/API/HTMLMediaElement/sinkId)
