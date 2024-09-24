---
title: "MediaDeviceInfo: deviceId-Eigenschaft"
short-title: deviceId
slug: Web/API/MediaDeviceInfo/deviceId
l10n:
  sourceCommit: 4232f4067388fc9b2c55c5f9200dddf05bd99b74
---

{{APIRef("Media Capture and Streams")}}{{securecontext_header}}

Die schreibgeschützte **`deviceId`**-Eigenschaft des {{domxref("MediaDeviceInfo")}} Interfaces gibt einen String zurück, der ein Bezeichner für das dargestellte Gerät ist und über Sitzungen hinweg bestehen bleibt.

Sie kann von anderen Anwendungen nicht erraten werden und ist einzigartig für die Herkunft der aufrufenden Anwendung. Sie wird zurückgesetzt, wenn der Benutzer Cookies löscht. Für privates Surfen wird ein anderer Bezeichner verwendet, der nicht über Sitzungen hinweg bestehen bleibt.

## Wert

Ein String.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
