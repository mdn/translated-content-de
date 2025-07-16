---
title: downloads.InterruptReason
slug: Mozilla/Add-ons/WebExtensions/API/downloads/InterruptReason
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Der `InterruptReason`-Typ der {{WebExtAPIRef("downloads")}} API definiert eine Reihe von möglichen Gründen, warum ein Download unterbrochen wurde.

Die `error`-Eigenschaft eines {{WebExtAPIRef('downloads.DownloadItem')}} enthält eine Zeichenfolge, die aus den in diesem Typ definierten Werten stammt.

## Typ

Werte dieses Typs sind Zeichenfolgen. Mögliche Werte sind in Kategorien unterteilt, wobei jede Gruppe denselben Substring am Anfang hat:

Dateibezogene Fehler:

- `"FILE_FAILED"`
- `"FILE_ACCESS_DENIED"`
- `"FILE_NO_SPACE"`
- `"FILE_NAME_TOO_LONG"`
- `"FILE_TOO_LARGE"`
- `"FILE_VIRUS_INFECTED"`
- `"FILE_TRANSIENT_ERROR"`
- `"FILE_BLOCKED"`
- `"FILE_SECURITY_CHECK_FAILED"`
- `"FILE_TOO_SHORT"`

Netzwerkbezogene Fehler:

- `"NETWORK_FAILED"`
- `"NETWORK_TIMEOUT"`
- `"NETWORK_DISCONNECTED"`
- `"NETWORK_SERVER_DOWN"`
- `"NETWORK_INVALID_REQUEST"`

Serverbezogene Fehler:

- `"SERVER_FAILED"`
- `"SERVER_NO_RANGE"`
- `"SERVER_BAD_CONTENT"`
- `"SERVER_UNAUTHORIZED"`
- `"SERVER_CERT_PROBLEM"`
- `"SERVER_FORBIDDEN"`

Benutzerbezogene Fehler:

- `"USER_CANCELED"`
- `"USER_SHUTDOWN"`

Sonstiges:

- `"CRASH"`

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-InterruptReason) API.
