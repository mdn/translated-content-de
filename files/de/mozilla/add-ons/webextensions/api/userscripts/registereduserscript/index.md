---
title: userScripts.RegisteredUserScript
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/RegisteredUserScript
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Ein `RegisteredUserScript`-Objekt wird durch einen Aufruf von {{WebExtAPIRef("userScripts.register","userScripts.register()")}} zurückgegeben und repräsentiert die in diesem Aufruf registrierten Benutzerskripte.

Das Objekt definiert eine einzige Methode, {{WebExtAPIRef("userScripts.RegisteredUserScript.unregister","unregister()")}}, die zum Abmelden der Benutzerskripte verwendet wird.

> [!NOTE]
> Wenn dieses Objekt zerstört wird (zum Beispiel, weil es außerhalb des Geltungsbereichs gelangt), werden die zugehörigen Skripte automatisch abgemeldet. Daher sollten Sie eine Referenz auf dieses Objekt beibehalten, solange Sie möchten, dass die Benutzerskripte registriert bleiben.

## Methoden

- {{WebExtAPIRef("userScripts.RegisteredUserScript.unregister","unregister()")}}
  - : Meldet die durch dieses Objekt repräsentierten Benutzerskripte ab.

## Browser-Kompatibilität

{{Compat}}
