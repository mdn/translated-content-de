---
title: "HTMLMediaElement: sinkId-Eigenschaft"
short-title: sinkId
slug: Web/API/HTMLMediaElement/sinkId
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Audio Output Devices API")}}{{securecontext_header}}

Die schreibgeschützte **`sinkId`**-Eigenschaft des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Interfaces gibt einen String zurück, der die eindeutige ID des Geräts ist, das für die Audioausgabe verwendet werden soll.

Diese ID sollte einer der [`MediaDeviceInfo.deviceId`](/de/docs/Web/API/MediaDeviceInfo/deviceId)-Werte sein, die von [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) zurückgegeben werden. Wenn das Standardgerät des Benutzer-Agents verwendet wird, wird ein leerer String zurückgegeben.

## Wert

Ein String, der das aktuelle Audioausgabegerät angibt, oder der leere String, wenn das Standard-Ausgabegerät des Benutzer-Agents verwendet wird.

## Sicherheitsanforderungen

Der Zugriff auf die Eigenschaft unterliegt den folgenden Einschränkungen:

- Die Eigenschaft muss in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) aufgerufen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API)
- [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput)
- [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId)
