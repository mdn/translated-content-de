---
title: "HTMLMediaElement: setSinkId() Methode"
short-title: setSinkId()
slug: Web/API/HTMLMediaElement/setSinkId
l10n:
  sourceCommit: 3df177b401e00e3a855c40fc074b5ef2469b700d
---

{{APIRef("Audio Output Devices API")}}{{securecontext_header}}

Die **`setSinkId()`** Methode des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Interfaces setzt die ID des Audiogeräts, das für die Ausgabe verwendet werden soll, und gibt ein {{jsxref("Promise")}} zurück.

Dies funktioniert nur, wenn der Anwendung die Verwendung des angegebenen Geräts erlaubt ist. Weitere Informationen finden Sie unten bei den [Sicherheitsanforderungen](#sicherheitsanforderungen).

## Syntax

```js-nolint
setSinkId(sinkId)
```

### Parameter

- `sinkId`
  - : Die [`MediaDeviceInfo.deviceId`](/de/docs/Web/API/MediaDeviceInfo/deviceId) des Audioausgabegeräts.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf {{jsxref("undefined")}} aufgelöst wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn eine [`speaker-selection`](/de/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) verwendet wird, um die Nutzung von Audioausgaben zu blockieren.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die `deviceId` keinem Audioausgabegerät entspricht.
- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn das Umschalten des Audioausgabegeräts auf das neue Audiogerät fehlgeschlagen ist.

## Sicherheitsanforderungen

Der Zugriff auf die API unterliegt den folgenden Einschränkungen:

- Die Methode muss in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) aufgerufen werden.
- Der Zugriff kann durch die [`speaker-selection`](/de/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) HTTP [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) eingeschränkt werden.
- Die Benutzererlaubnis ist erforderlich, um auf ein Nicht-Standardgerät zuzugreifen. Der Benutzer erteilt die Berechtigung, indem er das mit der ID verknüpfte Gerät im Dialog auswählt, der von [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput) angezeigt wird.

## Beispiele

Dieses Beispiel zeigt, wie Sie ein Audioausgabegerät aus dem Array auswählen, das von [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) zurückgegeben wird, und es als Ausgabe für Audio einstellen. Beachten Sie, dass das Ergebnis von `enumerateDevices()` nur Geräte enthält, für die keine Benutzererlaubnis erforderlich ist oder bereits erteilt wurde.

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
