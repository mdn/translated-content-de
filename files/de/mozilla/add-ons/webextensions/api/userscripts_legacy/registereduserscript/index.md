---
title: userScripts.RegisteredUserScript (Veraltet)
slug: Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/RegisteredUserScript
l10n:
  sourceCommit: 6b26a56826b43f539b79033378683bb3be5bbba9
---

{{AddonSidebar}}

> [!WARNING]
> Dies ist die Dokumentation für die veraltete `userScripts` API. Sie ist in Firefox für Manifest V2 verfügbar. Für die Funktionalität von Benutzerskripten in Manifest V3 siehe die neue {{WebExtAPIRef("userScripts")}} API.

Ein `RegisteredUserScript`-Objekt wird durch einen Aufruf von {{WebExtAPIRef("userScripts_legacy.register","userScripts.register()")}} zurückgegeben und repräsentiert die in diesem Aufruf registrierten Benutzerskripte.

Das Objekt definiert eine einzige Methode, {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript.unregister","unregister()")}}, die verwendet wird, um die registrierten Benutzerskripte abzumelden.

> [!NOTE]
> Wenn dieses Objekt zerstört wird (zum Beispiel, weil es außer Reichweite gerät), werden die zugehörigen Skripte automatisch abgemeldet. Daher sollten Sie eine Referenz auf dieses Objekt behalten, solange Sie möchten, dass die Benutzerskripte registriert bleiben.

## Methoden

- {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript.unregister","unregister()")}}
  - : Meldet die durch dieses Objekt repräsentierten Benutzerskripte ab.

## Browser-Kompatibilität

{{Compat}}
