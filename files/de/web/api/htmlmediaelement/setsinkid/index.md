---
title: "HTMLMediaElement: Methode setSinkId()"
short-title: setSinkId()
slug: Web/API/HTMLMediaElement/setSinkId
l10n:
  sourceCommit: 3df177b401e00e3a855c40fc074b5ef2469b700d
---

{{APIRef("Audio Output Devices API")}}{{securecontext_header}}

Die **`setSinkId()`** Methode des {{domxref("HTMLMediaElement")}} Schnittstelle setzt die ID des Audiogeräts für die Ausgabe und gibt ein {{jsxref("Promise")}} zurück.

Dies funktioniert nur, wenn der Anwendung die Nutzung des angegebenen Geräts gestattet ist. Weitere Informationen finden Sie in den [Sicherheitsanforderungen](#sicherheitsanforderungen) unten.

## Syntax

```js-nolint
setSinkId(sinkId)
```

### Parameter

- `sinkId`
  - : Die {{domxref("MediaDeviceInfo.deviceId")}} des Audioausgabegeräts.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf {{jsxref("undefined")}} aufgelöst wird.

### Ausnahmen

- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn eine [`speaker-selection`](/de/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) verwendet wird, um die Nutzung von Audioausgaben zu blockieren.
- `NotFoundError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn die `deviceId` kein Audiogerät für die Ausgabe entspricht.
- `AbortError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn das Wechseln des Audioausgabegeräts auf das neue Audiosystem fehlgeschlagen ist.

## Sicherheitsanforderungen

Der Zugriff auf die API unterliegt folgenden Einschränkungen:

- Die Methode muss in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) aufgerufen werden.
- Der Zugriff kann durch die HTTP [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) [`speaker-selection`](/de/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) gesteuert werden.
- Die Erlaubnis des Benutzers ist erforderlich, um auf ein nicht standardmäßiges Gerät zuzugreifen.
  Der Benutzer erteilt die Erlaubnis, indem er das mit der ID verbundene Gerät in der von {{domxref("MediaDevices.selectAudioOutput()")}} angezeigten Eingabeaufforderung auswählt.

## Beispiele

Dieses Beispiel zeigt, wie ein Audioausgabegerät aus dem Array ausgewählt wird, das von {{domxref("MediaDevices.enumerateDevices()")}} zurückgegeben wird, und es als Audio-Senke festgelegt wird. Beachten Sie, dass das Ergebnis von `enumerateDevices()` nur Geräte enthält, für die keine Benutzererlaubnis erforderlich ist oder diese bereits erteilt wurde.

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
- {{domxref("MediaDevices.selectAudioOutput()")}}
- {{domxref("HTMLMediaElement.sinkId")}}
