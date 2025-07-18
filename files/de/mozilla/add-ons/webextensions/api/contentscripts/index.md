---
title: contentScripts
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Verwenden Sie diese API, um Inhaltsskripte zu registrieren. Das Registrieren eines Inhaltsskripts weist den Browser an, die angegebenen Inhaltsskripte in Seiten einzufügen, die den angegebenen URL-Mustern entsprechen.

> [!NOTE]
> Bei der Verwendung von Manifest V3 oder höher, verwenden Sie {{WebExtAPIRef("scripting.registerContentScripts()")}}, um Skripte zu registrieren.

Diese API ist sehr ähnlich zum [`"content_scripts"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Schlüssel, mit dem Unterschied, dass die Menge der Inhaltsskripte und die zugehörigen Muster bei der Installation festgelegt sind. Mit der `contentScripts` API kann eine Erweiterung Skripte zur Laufzeit registrieren und wieder entfernen.

Um die API zu verwenden, rufen Sie {{WebExtAPIRef("contentScripts.register()")}} auf und übergeben ein Objekt, das die zu registrierenden Skripte, die URL-Muster und andere Optionen definiert. Dies gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das mit einem {{WebExtAPIRef("contentScripts.RegisteredContentScript")}} Objekt aufgelöst wird.

Das `RegisteredContentScript` Objekt stellt die Skripte dar, die im `register()`-Aufruf registriert wurden. Es definiert eine `unregister()` Methode, die Sie verwenden können, um die Inhaltsskripte zu deregistrieren. Inhaltsskripte werden auch automatisch deregistriert, wenn die Seite, die sie erstellt hat, zerstört wird. Zum Beispiel, wenn sie von der Hintergrundseite registriert wurden, werden sie automatisch deregistriert, wenn die Hintergrundseite zerstört wird, und wenn sie von einer Seitenleiste oder einem Popup registriert wurden, werden sie automatisch deregistriert, wenn die Seitenleiste oder das Popup geschlossen wird.

Es gibt keine `contentScripts` API-Berechtigung, aber eine Erweiterung muss die entsprechenden [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für alle Muster haben, die sie an `register()` übergibt.

## Typen

- {{WebExtAPIRef("contentScripts.RegisteredContentScript")}}
  - : Ein Objekt dieses Typs wird von der {{WebExtAPIRef("contentScripts.register()")}} Funktion zurückgegeben. Es repräsentiert die Inhaltsskripte, die durch diesen Aufruf registriert wurden, und kann verwendet werden, um das Inhaltsskript zu deregistrieren.

## Funktionen

- {{WebExtAPIRef("contentScripts.register()")}}
  - : Registriert die angegebenen Inhaltsskripte.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
