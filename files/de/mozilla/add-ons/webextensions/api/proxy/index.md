---
title: proxy
slug: Mozilla/Add-ons/WebExtensions/API/proxy
l10n:
  sourceCommit: 83b221d2955a42bed9b87a5206a7953d1b57d8a9
---

Verwenden Sie die Proxy-API, um Webanfragen zu proxen. Sie können den {{WebExtAPIRef("proxy.onRequest")}}-Ereignis-Listener verwenden, um Webanfragen abzufangen und ein Objekt zurückzugeben, das beschreibt, ob und wie diese proxied werden sollen.

Der Vorteil des Ansatzes mit {{WebExtAPIRef("proxy.onRequest")}} besteht darin, dass der Code, der Ihre Proxy-Richtlinie implementiert, im Hintergrundskript Ihrer Erweiterung läuft. So erhält er vollen Zugriff auf die WebExtension-APIs, die Ihrer Erweiterung zur Verfügung stehen (einschließlich z. B. Zugriff auf den [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage) Ihrer Erweiterung und Netzwerkanfragen wie [`dns`](/de/docs/Mozilla/Add-ons/WebExtensions/API/dns)).

Abgesehen von dieser API können Erweiterungen auch die Eigenschaft [`browserSettings.proxyConfig`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings) verwenden, um globale Proxy-Einstellungen zu konfigurieren.

> [!NOTE]
> Chrome, Edge und Opera haben [eine Extension-API, die auch "proxy" genannt wird](https://developer.chrome.com/docs/extensions/reference/api/proxy), die funktional ähnlich zu dieser API ist, da Erweiterungen sie nutzen können, um eine Proxy-Richtlinie zu implementieren. Die Chrome-API ist jedoch völlig anders als diese API.

Um diese API zu nutzen, benötigen Sie die "proxy" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). Außerdem benötigen Sie dort, wo Sie Anfragen abfangen möchten, auch [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die URLs der abgefangenen Anfragen.

Die "proxy"-Berechtigung erfordert, dass `"strict_min_version"` auf "91.1.0" oder höher gesetzt wird. Um diese Berechtigung zu verwenden, fügen Sie den Schlüssel [`"browser_specific_settings"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) in Ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) hinzu oder aktualisieren ihn, um eine Mindestversion von Firefox anzugeben. Weitere Informationen finden Sie unter [Sicherung der Proxy-API für Firefox-Add-ons](https://blog.mozilla.org/security/2021/10/25/securing-the-proxy-api-for-firefox-add-ons/).

> [!NOTE]
> Der Browser kann spekulative Verbindungen herstellen, bei denen er feststellt, dass eine Anfrage an ein URI bald erfolgen könnte. Diese Art von Verbindung liefert keine gültigen Tab-Informationen, daher sind Anfragedetails wie `tabId`, `frameId`, `parentFrameId` usw. ungenau. Diese Verbindungen haben einen {{WebExtAPIRef("webRequest.ResourceType")}} vom Typ `speculative`.

## Typen

- {{WebExtAPIRef("proxy.ProxyInfo")}}
  - : Beschreibt einen Proxy.
- {{WebExtAPIRef("proxy.RequestDetails")}}
  - : Enthält Informationen über eine Webanfrage, die der Browser gleich senden wird.

## Eigenschaften

- {{WebExtAPIRef("proxy.settings")}}
  - : Proxy-Einstellungen abrufen und festlegen.

## Ereignisse

- {{WebExtAPIRef("proxy.onError")}}
  - : Wird ausgelöst, wenn das System auf einen Fehler beim Ausführen des PAC-Skripts oder des `onRequest`-Listeners stößt.
- {{WebExtAPIRef("proxy.onRequest")}}
  - : Wird ausgelöst, wenn eine Webanfrage gesendet wird, und gibt der Erweiterung die Möglichkeit, sie zu proxien.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
