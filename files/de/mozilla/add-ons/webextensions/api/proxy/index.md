---
title: proxy
slug: Mozilla/Add-ons/WebExtensions/API/proxy
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Verwenden Sie die Proxy-API, um Webanfragen zu proxyn. Sie können den Ereignis-Listener {{WebExtAPIRef("proxy.onRequest")}} nutzen, um Webanfragen abzufangen und ein Objekt zurückzugeben, das beschreibt, ob und wie sie geproxyt werden sollen.

Der Vorteil des Ansatzes mit {{WebExtAPIRef("proxy.onRequest")}} ist, dass der Code, der Ihre Proxy-Richtlinie implementiert, im Hintergrundskript Ihrer Erweiterung ausgeführt wird. Dadurch hat er vollen Zugriff auf die WebExtension-APIs, die für Ihre Erweiterung verfügbar sind (einschließlich beispielsweise des Zugriffs auf die [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage) und Netzwerkintegrationen wie [`dns`](/de/docs/Mozilla/Add-ons/WebExtensions/API/dns)).

Neben dieser API können Erweiterungen auch die Eigenschaft [`browserSettings.proxyConfig`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings) verwenden, um globale Proxy-Einstellungen zu konfigurieren.

> [!NOTE]
> Chrome, Edge und Opera haben [eine Erweiterungs-API, die ebenfalls "proxy" genannt wird](https://developer.chrome.com/docs/extensions/reference/api/proxy), welche funktional zu dieser API ähnlich ist, da Erweiterungen sie verwenden können, um eine Proxyrichtlinie zu implementieren. Allerdings ist das Design der Chrome-API komplett anders als diese API. Da diese API nicht mit der Chrome-`proxy`-API kompatibel ist, ist sie nur über den `browser`-Namensraum verfügbar.

Um diese API zu verwenden, benötigen Sie die "proxy"-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). Außerdem, wenn Sie Anfragen abfangen möchten, benötigen Sie [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die URLs der abgefangenen Anfragen.

Die "proxy"-Berechtigung erfordert, dass `"strict_min_version"` auf "91.1.0" oder höher gesetzt wird. Um diese Berechtigung zu nutzen, fügen Sie den Schlüssel [`"browser_specific_settings"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) in Ihrem [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) hinzu oder aktualisieren Sie ihn, um eine Mindestversion von Firefox anzugeben. Weitere Informationen finden Sie unter [Sichern der Proxy-API für Firefox-Add-ons](https://blog.mozilla.org/security/2021/10/25/securing-the-proxy-api-for-firefox-add-ons/).

> [!NOTE]
> Der Browser kann spekulative Verbindungen herstellen, bei denen er annimmt, dass bald eine Anfrage zu einer URI gestellt werden könnte. Diese Art von Verbindung liefert keine gültigen Tab-Informationen, sodass Anfragedetails wie `tabId`, `frameId`, `parentFrameId` etc. ungenau sind. Diese Verbindungen haben einen {{WebExtAPIRef("webRequest.ResourceType")}} von `speculative`.

## Typen

- {{WebExtAPIRef("proxy.ProxyInfo")}}
  - : Beschreibt einen Proxy.
- {{WebExtAPIRef("proxy.RequestDetails")}}
  - : Enthält Informationen über eine Webanfrage, die der Browser gleich stellen wird.

## Eigenschaften

- {{WebExtAPIRef("proxy.settings")}}
  - : Proxy-Einstellungen abrufen und festlegen.

## Ereignisse

- {{WebExtAPIRef("proxy.onError")}}
  - : Wird ausgelöst, wenn das System bei der Ausführung des PAC-Skripts oder des `onRequest`-Listeners auf einen Fehler stößt.
- {{WebExtAPIRef("proxy.onRequest")}}
  - : Wird ausgelöst, wenn eine Webanfrage gestellt werden soll, was der Erweiterung die Möglichkeit gibt, sie zu proxyn.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
