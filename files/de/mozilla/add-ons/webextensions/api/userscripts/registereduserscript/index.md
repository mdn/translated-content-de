---
title: userScripts.RegisteredUserScript
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/RegisteredUserScript
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Ein `RegisteredUserScript`-Objekt wird durch einen Aufruf von {{WebExtAPIRef("userScripts.register","userScripts.register()")}} zurückgegeben und repräsentiert die in diesem Aufruf registrierten Userscripts.

Das Objekt definiert eine einzelne Methode, {{WebExtAPIRef("userScripts.RegisteredUserScript.unregister","unregister()")}}, die verwendet wird, um die Userscripts abzumelden.

> [!NOTE]
> Wenn dieses Objekt zerstört wird (zum Beispiel, weil es außer Reichweite gerät), werden die zugehörigen Skripte automatisch abgemeldet, daher sollten Sie eine Referenz auf dieses Objekt behalten, solange Sie möchten, dass die Userscripts registriert bleiben.

## Methoden

- {{WebExtAPIRef("userScripts.RegisteredUserScript.unregister","unregister()")}}
  - : Meldet die durch dieses Objekt repräsentierten Userscripts ab.

## Browser-Kompatibilität

{{Compat}}
