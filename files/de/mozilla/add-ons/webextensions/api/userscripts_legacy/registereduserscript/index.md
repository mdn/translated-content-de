---
title: userScripts.RegisteredUserScript (Legacy)
slug: Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/RegisteredUserScript
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

> [!WARNING]
> Dies ist die Dokumentation für die veraltete `userScripts` API. Sie ist in Firefox für Manifest V2 verfügbar. Für die Funktionalität mit Benutzerskripten in Manifest V3 siehe die neue {{WebExtAPIRef("userScripts")}} API.

Ein `RegisteredUserScript`-Objekt wird durch einen Aufruf von {{WebExtAPIRef("userScripts_legacy.register","userScripts.register()")}} zurückgegeben und repräsentiert die in diesem Aufruf registrierten Benutzerskripte.

Das Objekt definiert eine einzelne Methode, {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript.unregister","unregister()")}}, die verwendet wird, um die Benutzerskripte abzumelden.

> [!NOTE]
> Wenn dieses Objekt zerstört wird (z.B. weil es aus dem Gültigkeitsbereich herausfällt), werden die zugehörigen Skripte automatisch abgemeldet, daher sollten Sie eine Referenz auf dieses Objekt behalten, solange Sie möchten, dass die Benutzerskripte registriert bleiben.

## Methoden

- {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript.unregister","unregister()")}}
  - : Meldet die durch dieses Objekt repräsentierten Benutzerskripte ab.

## Browser-Kompatibilität

{{Compat}}
