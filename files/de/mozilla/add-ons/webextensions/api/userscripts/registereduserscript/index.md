---
title: userScripts.RegisteredUserScript
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/RegisteredUserScript
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Ein `RegisteredUserScript`-Objekt wird durch einen Aufruf von {{WebExtAPIRef("userScripts.register","userScripts.register()")}} zurückgegeben und repräsentiert die in diesem Aufruf registrierten Benutzer-Skripte.

Das Objekt definiert eine einzelne Methode, {{WebExtAPIRef("userScripts.RegisteredUserScript.unregister","unregister()")}}, die verwendet wird, um die Benutzer-Skripte abzumelden.

> [!NOTE]
> Wenn dieses Objekt zerstört wird (zum Beispiel, weil es aus dem Gültigkeitsbereich herausfällt), werden die zugehörigen Skripte automatisch abgemeldet. Daher sollten Sie eine Referenz auf dieses Objekt behalten, solange Sie möchten, dass die Benutzer-Skripte registriert bleiben.

## Methoden

- {{WebExtAPIRef("userScripts.RegisteredUserScript.unregister","unregister()")}}
  - : Meldet die Benutzer-Skripte ab, die durch dieses Objekt repräsentiert werden.

## Browser-Kompatibilität

{{Compat}}
