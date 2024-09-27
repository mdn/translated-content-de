---
title: "MediaDeviceInfo: deviceId-Eigenschaft"
short-title: deviceId
slug: Web/API/MediaDeviceInfo/deviceId
l10n:
  sourceCommit: 4232f4067388fc9b2c55c5f9200dddf05bd99b74
---

{{APIRef("Media Capture and Streams")}}{{securecontext_header}}

Die schreibgeschützte Eigenschaft **`deviceId`** der [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Schnittstelle gibt einen String zurück, der ein Identifikator für das dargestellte Gerät ist und über Sitzungen hinweg beibehalten wird.

Er ist von anderen Anwendungen nicht erratbar und einzigartig für den Ursprung der aufrufenden Anwendung. Er wird zurückgesetzt, wenn der Benutzer Cookies löscht. Für privates Surfen wird ein anderer Identifikator verwendet, der nicht über Sitzungen hinweg beibehalten wird.

## Wert

Ein String.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
