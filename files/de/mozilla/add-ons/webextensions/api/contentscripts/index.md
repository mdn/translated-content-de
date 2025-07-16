---
title: contentScripts
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Verwenden Sie diese API, um Content-Skripte zu registrieren. Das Registrieren eines Content-Skripts weist den Browser an, die angegebenen Content-Skripte in Seiten einzufügen, die den angegebenen URL-Mustern entsprechen.

> [!NOTE]
> Bei Verwendung von Manifest V3 oder höher, verwenden Sie {{WebExtAPIRef("scripting.registerContentScripts()")}} zum Registrieren von Skripten.

Diese API ist der [`"content_scripts"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Schlüssel sehr ähnlich, mit dem Unterschied, dass bei `"content_scripts"` die Menge der Content-Skripte und zugehörigen Muster zur Installationszeit festgelegt ist. Mit der `contentScripts` API kann eine Erweiterung Skripte zur Laufzeit registrieren und wieder abmelden.

Um die API zu nutzen, rufen Sie {{WebExtAPIRef("contentScripts.register()")}} auf und übergeben ein Objekt, das die zu registrierenden Skripte, die URL-Muster und andere Optionen definiert. Dies gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das mit einem {{WebExtAPIRef("contentScripts.RegisteredContentScript")}} Objekt aufgelöst wird.

Das `RegisteredContentScript` Objekt repräsentiert die Skripte, die im `register()`-Aufruf registriert wurden. Es definiert eine `unregister()`-Methode, die Sie verwenden können, um die Content-Skripte abzumelden. Content-Skripte werden auch automatisch abgemeldet, wenn die Seite, die sie erstellt hat, zerstört wird. Beispielsweise, wenn sie von der Hintergrundseite registriert werden, werden sie automatisch abgemeldet, wenn die Hintergrundseite zerstört wird, und wenn sie von einer Seitenleiste oder einem Popup registriert werden, werden sie automatisch abgemeldet, wenn die Seitenleiste oder das Popup geschlossen wird.

Es gibt keine `contentScripts` API-Berechtigung, aber eine Erweiterung muss über die entsprechenden [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für alle Muster verfügen, die sie an `register()` übergibt.

## Typen

- {{WebExtAPIRef("contentScripts.RegisteredContentScript")}}
  - : Ein Objekt dieses Typs wird von der {{WebExtAPIRef("contentScripts.register()")}} Funktion zurückgegeben. Es repräsentiert die Content-Skripte, die durch diesen Aufruf registriert wurden, und kann verwendet werden, um das Content-Skript abzumelden.

## Funktionen

- {{WebExtAPIRef("contentScripts.register()")}}
  - : Registriert die angegebenen Content-Skripte.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
