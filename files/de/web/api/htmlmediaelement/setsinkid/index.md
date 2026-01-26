---
title: "HTMLMediaElement: setSinkId()-Methode"
short-title: setSinkId()
slug: Web/API/HTMLMediaElement/setSinkId
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Audio Output Devices API")}}{{securecontext_header}}

Die **`setSinkId()`**-Methode des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Interfaces legt die ID des Audiogeräts fest, das für die Ausgabe verwendet werden soll, und gibt ein {{jsxref("Promise")}} zurück.

Dies funktioniert nur, wenn die Anwendung berechtigt ist, das angegebene Gerät zu verwenden.
Weitere Informationen finden Sie unter den [Sicherheitsanforderungen](#sicherheitsanforderungen) unten.

## Syntax

```js-nolint
setSinkId(sinkId)
```

### Parameter

- `sinkId`
  - : Die [`MediaDeviceInfo.deviceId`](/de/docs/Web/API/MediaDeviceInfo/deviceId) des Audioausgabegeräts.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu {{jsxref("undefined")}} auflöst.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn eine [`speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) verwendet wird, um die Verwendung von Audioausgaben zu blockieren.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die `deviceId` keinem Audioausgabegerät entspricht.
- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn das Umschalten des Audioausgabegeräts auf das neue Audiogerät fehlgeschlagen ist.

## Sicherheitsanforderungen

Der Zugriff auf die API unterliegt den folgenden Einschränkungen:

- Die Methode muss in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) aufgerufen werden.
- Der Zugriff kann durch die [`speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) HTTP-[Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) eingeschränkt werden.
- Es ist die Zustimmung des Nutzers erforderlich, um auf ein nicht standardmäßiges Gerät zuzugreifen.
  Der Nutzer erteilt die Erlaubnis durch Auswahl des mit der ID verknüpften Geräts im Dialogfeld, das von [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput) angezeigt wird.

## Beispiele

Dieses Beispiel zeigt, wie man ein Audioausgabegerät aus dem Array auswählt, das von [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) zurückgegeben wird, und es als Audioausgabe festlegt.
Beachten Sie, dass das Ergebnis von `enumerateDevices()` nur Geräte umfasst, für die keine Benutzererlaubnis erforderlich ist oder die bereits erteilt wurde.

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
