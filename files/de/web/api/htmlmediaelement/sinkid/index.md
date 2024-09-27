---
title: "HTMLMediaElement: sinkId-Eigenschaft"
short-title: sinkId
slug: Web/API/HTMLMediaElement/sinkId
l10n:
  sourceCommit: 3df177b401e00e3a855c40fc074b5ef2469b700d
---

{{APIRef("Audio Output Devices API")}}{{securecontext_header}}

Die schreibgeschützte **`sinkId`**-Eigenschaft des [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Interfaces gibt einen String zurück, der die eindeutige ID des Geräts ist, das für die Audiowiedergabe verwendet werden soll.

Diese ID sollte einer der [`MediaDeviceInfo.deviceId`](/de/docs/Web/API/MediaDeviceInfo/deviceId)-Werte sein, die von [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices), `id-multimedia` oder `id-communications` zurückgegeben werden.
Wenn das Standardgerät des Benutzeragents verwendet wird, wird ein leerer String zurückgegeben.

## Wert

Ein String, der das aktuelle Audioausgabegerät angibt, oder ein leerer String, wenn das Standard-Ausgabegerät des Benutzeragents verwendet wird.

## Sicherheitsanforderungen

Der Zugriff auf die Eigenschaft unterliegt folgenden Einschränkungen:

- Die Eigenschaft muss in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) aufgerufen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API)
- [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput)
- [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId)
