---
title: "HTMLMediaElement: sinkId-Eigenschaft"
short-title: sinkId
slug: Web/API/HTMLMediaElement/sinkId
l10n:
  sourceCommit: 3df177b401e00e3a855c40fc074b5ef2469b700d
---

{{APIRef("Audio Output Devices API")}}{{securecontext_header}}

Die schreibgeschützte **`sinkId`**-Eigenschaft der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Schnittstelle gibt eine Zeichenkette zurück, die die eindeutige ID des Geräts ist, das für die Audioausgabe verwendet werden soll.

Diese ID sollte einer der [`MediaDeviceInfo.deviceId`](/de/docs/Web/API/MediaDeviceInfo/deviceId)-Werte sein, die von [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices), `id-multimedia` oder `id-communications` zurückgegeben werden.
Wenn das standardmäßige Benutzeragent-Gerät verwendet wird, gibt es eine leere Zeichenkette zurück.

## Wert

Eine Zeichenkette, die das aktuelle Audioausgabegerät angibt, oder eine leere Zeichenkette, wenn das standardmäßige Ausgabegerät des Benutzeragents verwendet wird.

## Sicherheitsanforderungen

Der Zugriff auf die Eigenschaft unterliegt den folgenden Einschränkungen:

- Die Eigenschaft muss in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) aufgerufen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API)
- [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput)
- [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId)
