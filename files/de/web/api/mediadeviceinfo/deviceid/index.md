---
title: "MediaDeviceInfo: deviceId-Eigenschaft"
short-title: deviceId
slug: Web/API/MediaDeviceInfo/deviceId
l10n:
  sourceCommit: 4232f4067388fc9b2c55c5f9200dddf05bd99b74
---

{{APIRef("Media Capture and Streams")}}{{securecontext_header}}

Die schreibgeschützte **`deviceId`**-Eigenschaft der [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Schnittstelle gibt einen String zurück, der ein Bezeichner für das dargestellte Gerät ist und über Sitzungen hinweg beibehalten wird.

Dieser Bezeichner kann von anderen Anwendungen nicht erraten werden und ist einzigartig für den Ursprung der aufrufenden Anwendung. Er wird zurückgesetzt, wenn der Benutzer Cookies löscht. Für privates Browsen wird ein anderer Bezeichner verwendet, der nicht über Sitzungen hinweg beibehalten wird.

## Wert

Ein String.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
