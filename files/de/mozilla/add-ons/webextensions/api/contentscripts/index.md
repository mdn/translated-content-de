---
title: contentScripts
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts
l10n:
  sourceCommit: 34215030993b429f727a2c73ef06eb029f57beeb
---

{{AddonSidebar}}

Verwenden Sie diese API, um Inhalts-Skripte zu registrieren. Das Registrieren eines Inhalts-Skripts weist den Browser an, die angegebenen Inhalts-Skripte in Seiten einzufügen, die den angegebenen URL-Mustern entsprechen.

> [!NOTE]
> Bei Verwendung von Manifest V3 oder höher verwenden Sie {{WebExtAPIRef("scripting.registerContentScripts()")}}, um Skripte zu registrieren.

Diese API ist sehr ähnlich zum [`"content_scripts"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Schlüssel, außer dass bei `"content_scripts"` die Menge der Inhalts-Skripte und die zugehörigen Muster zur Installationszeit festgelegt werden. Mit der `contentScripts`-API kann eine Erweiterung Skripte zur Laufzeit registrieren und wieder entfernen.

Um die API zu verwenden, rufen Sie {{WebExtAPIRef("contentScripts.register()")}} auf und übergeben ein Objekt, das die zu registrierenden Skripte, die URL-Muster und andere Optionen definiert. Dies gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das mit einem {{WebExtAPIRef("contentScripts.RegisteredContentScript")}}-Objekt aufgelöst wird.

Das `RegisteredContentScript`-Objekt repräsentiert die Skripte, die im `register()`-Aufruf registriert wurden. Es definiert eine `unregister()`-Methode, die Sie verwenden können, um die Inhalts-Skripte wieder abzuregistrieren. Inhalts-Skripte werden auch automatisch abregistriert, wenn die Seite, die sie erstellt hat, zerstört wird. Zum Beispiel, wenn sie von der Hintergrundseite registriert wurden, werden sie automatisch abregistriert, wenn die Hintergrundseite zerstört wird, und wenn sie von einer Seitenleiste oder einem Popup registriert wurden, werden sie automatisch abregistriert, wenn die Seitenleiste oder das Popup geschlossen wird.

Es gibt keine `contentScripts`-API-Berechtigung, aber eine Erweiterung muss die entsprechenden [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für alle Muster besitzen, die sie an `register()` übergibt.

## Typen

- {{WebExtAPIRef("contentScripts.RegisteredContentScript")}}
  - : Ein Objekt dieses Typs wird von der Funktion {{WebExtAPIRef("contentScripts.register()")}} zurückgegeben. Es repräsentiert die Inhalts-Skripte, die durch diesen Aufruf registriert wurden, und kann verwendet werden, um das Inhalts-Skript abzuregistrieren.

## Funktionen

- {{WebExtAPIRef("contentScripts.register()")}}
  - : Registriert die angegebenen Inhalts-Skripte.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}
