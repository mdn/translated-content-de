---
title: "HTMLMediaElement: sinkId Eigenschaft"
short-title: sinkId
slug: Web/API/HTMLMediaElement/sinkId
l10n:
  sourceCommit: 49dc4da9aa540af04aa4585cb90665326bbf52fa
---

{{APIRef("Audio Output Devices API")}}{{securecontext_header}}

Die schreibgeschützte **`sinkId`**-Eigenschaft der [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Schnittstelle gibt eine Zeichenfolge zurück, die die eindeutige ID des Geräts ist, das für die Wiedergabe der Audioausgabe verwendet werden soll.

Diese ID sollte einer der [`MediaDeviceInfo.deviceId`](/de/docs/Web/API/MediaDeviceInfo/deviceId)-Werte sein, die von [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) zurückgegeben werden. Wenn das Standardgerät des Benutzeragenten verwendet wird, wird eine leere Zeichenfolge zurückgegeben.

## Wert

Eine Zeichenfolge, die das aktuelle Audioausgabegerät angibt, oder die leere Zeichenfolge, wenn das Standard-Ausgabegerät des Benutzeragenten verwendet wird.

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
