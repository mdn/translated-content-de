---
title: "HTMLMediaElement: sinkId-Eigenschaft"
short-title: sinkId
slug: Web/API/HTMLMediaElement/sinkId
l10n:
  sourceCommit: 3df177b401e00e3a855c40fc074b5ef2469b700d
---

{{APIRef("Audio Output Devices API")}}{{securecontext_header}}

Die schreibgeschützte **`sinkId`**-Eigenschaft der {{domxref("HTMLMediaElement")}}-Schnittstelle gibt einen String zurück, der die eindeutige ID des Geräts ist, das zur Wiedergabe der Audioausgabe verwendet werden soll.

Diese ID sollte eine der {{domxref("MediaDeviceInfo.deviceId")}}-Werte sein, die von {{domxref("MediaDevices.enumerateDevices()")}}, `id-multimedia` oder `id-communications` zurückgegeben werden. Wenn das Standardgerät des Benutzeragenten verwendet wird, wird ein leerer String zurückgegeben.

## Wert

Ein String, der das aktuelle Audioausgabegerät angibt, oder der leere String, wenn das Standard-Ausgabegerät des Benutzeragenten verwendet wird.

## Sicherheitsanforderungen

Der Zugriff auf die Eigenschaft unterliegt den folgenden Einschränkungen:

- Die Eigenschaft muss in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) aufgerufen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API)
- {{domxref("MediaDevices.selectAudioOutput()")}}
- {{domxref("HTMLMediaElement.setSinkId()")}}
