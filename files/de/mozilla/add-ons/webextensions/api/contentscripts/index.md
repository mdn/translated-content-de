---
title: contentScripts
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts
l10n:
  sourceCommit: 34215030993b429f727a2c73ef06eb029f57beeb
---

{{AddonSidebar}}

Verwenden Sie diese API, um Inhaltsskripte zu registrieren. Das Registrieren eines Inhaltsskripts weist den Browser an, die angegebenen Inhaltsskripte in Seiten einzufügen, die den angegebenen URL-Mustern entsprechen.

> [!NOTE]
> Bei der Verwendung von Manifest V3 oder höher verwenden Sie {{WebExtAPIRef("scripting.registerContentScripts()")}} zur Registrierung von Skripten.

Diese API ist der [`"content_scripts"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Schlüssel sehr ähnlich, außer dass mit `"content_scripts"` die Menge der Inhaltsskripte und zugehörigen Muster zur Installationszeit festgelegt ist. Mit der `contentScripts` API kann eine Erweiterung Skripte zur Laufzeit registrieren und abmelden.

Um die API zu verwenden, rufen Sie {{WebExtAPIRef("contentScripts.register()")}} auf und übergeben Sie ein Objekt, das die zu registrierenden Skripte, die URL-Muster und andere Optionen definiert. Dies gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das mit einem {{WebExtAPIRef("contentScripts.RegisteredContentScript")}} Objekt aufgelöst wird.

Das `RegisteredContentScript` Objekt repräsentiert die Skripte, die im `register()` Aufruf registriert wurden. Es definiert eine `unregister()` Methode, die Sie verwenden können, um die Inhaltsskripte abzumelden. Inhaltsskripte werden auch automatisch abgemeldet, wenn die Seite, die sie erstellt hat, zerstört wird. Wenn sie zum Beispiel von der Hintergrundseite registriert wurden, werden sie automatisch abgemeldet, wenn die Hintergrundseite zerstört wird, und wenn sie von einer Seitenleiste oder einem Popup registriert wurden, werden sie automatisch abgemeldet, wenn die Seitenleiste oder das Popup geschlossen wird.

Es gibt keine `contentScripts` API-Berechtigung, aber eine Erweiterung muss die entsprechenden [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für alle Muster haben, die sie an `register()` übergibt.

## Typen

- {{WebExtAPIRef("contentScripts.RegisteredContentScript")}}
  - : Ein Objekt dieses Typs wird von der Funktion {{WebExtAPIRef("contentScripts.register()")}} zurückgegeben. Es repräsentiert die Inhaltsskripte, die durch diesen Aufruf registriert wurden, und kann verwendet werden, um das Inhaltsskript abzumelden.

## Funktionen

- {{WebExtAPIRef("contentScripts.register()")}}
  - : Registriert die angegebenen Inhaltsskripte.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}
