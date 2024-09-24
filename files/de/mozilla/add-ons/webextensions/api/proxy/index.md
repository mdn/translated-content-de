---
title: proxy
slug: Mozilla/Add-ons/WebExtensions/API/proxy
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Verwenden Sie die Proxy-API, um Webanfragen zu proxyen. Sie können den {{WebExtAPIRef("proxy.onRequest")}} Ereignis-Listener nutzen, um Webanfragen abzufangen und ein Objekt zurückzugeben, das beschreibt, ob und wie sie proxyiert werden sollen.

Der Vorteil des Ansatzes mit {{WebExtAPIRef("proxy.onRequest")}} besteht darin, dass der Code, der Ihre Proxy-Richtlinie implementiert, in dem Hintergrundskript Ihrer Erweiterung ausgeführt wird, sodass er vollen Zugriff auf die WebExtension-APIs hat, die Ihrer Erweiterung zur Verfügung stehen (einschließlich, zum Beispiel, Zugriff auf den [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage) Ihrer Erweiterung und der Netzwerk-APIs wie [`dns`](/de/docs/Mozilla/Add-ons/WebExtensions/API/dns)).

Abgesehen von dieser API können Erweiterungen auch die Eigenschaft [`browserSettings.proxyConfig`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings) verwenden, um globale Proxy-Einstellungen zu konfigurieren.

> [!NOTE]
> Chrome, Edge und Opera haben [eine Erweiterungs-API, die ebenfalls "proxy" genannt wird](https://developer.chrome.com/docs/extensions/reference/api/proxy), welche funktionell ähnlich zu dieser API ist, da Erweiterungen sie verwenden können, um eine Proxy-Richtlinie zu implementieren. Allerdings ist das Design der Chrome-API komplett unterschiedlich zu dieser API. Da diese API nicht mit der Chrome-`proxy`-API kompatibel ist, ist sie nur über den `browser`-Namespace verfügbar.

Um diese API zu verwenden, müssen Sie die "proxy"-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) haben. Außerdem benötigen Sie dort, wo Sie Anfragen abfangen möchten, auch [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die URLs der abgefangenen Anfragen.

Die "proxy"-Berechtigung erfordert, dass `"strict_min_version"` auf "91.1.0" oder höher gesetzt wird. Um diese Berechtigung zu nutzen, fügen Sie den Schlüssel [`"browser_specific_settings"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) in Ihrem [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) hinzu oder aktualisieren ihn, um eine minimale Firefox-Version anzugeben. Weitere Informationen finden Sie unter [Sichern der Proxy-API für Firefox-Erweiterungen](https://blog.mozilla.org/security/2021/10/25/securing-the-proxy-api-for-firefox-add-ons/).

> [!NOTE]
> Der Browser kann spekulative Verbindungen aufbauen, bei denen er feststellt, dass möglicherweise bald eine Anfrage an eine URI erfolgt. Diese Art von Verbindung gibt keine gültigen Tab-Informationen an, sodass Anfragedetails wie `tabId`, `frameId`, `parentFrameId` usw. ungenau sind. Diese Verbindungen haben einen {{WebExtAPIRef("webRequest.ResourceType")}} von `speculative`.

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
  - : Wird ausgelöst, wenn das System auf einen Fehler beim Ausführen des PAC-Skripts oder des `onRequest`-Listeners stößt.
- {{WebExtAPIRef("proxy.onRequest")}}
  - : Wird ausgelöst, wenn eine Webanfrage kurz vor ihrer Ausführung steht, wodurch die Erweiterung die Möglichkeit erhält, sie zu proxyen.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
