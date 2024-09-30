---
title: proxy
slug: Mozilla/Add-ons/WebExtensions/API/proxy
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Verwenden Sie die proxy-API, um Webanfragen zu proxieren. Sie können den {{WebExtAPIRef("proxy.onRequest")}}-Ereignislistener verwenden, um Webanfragen abzufangen und ein Objekt zurückzugeben, das beschreibt, ob und wie sie zu proxieren sind.

Der Vorteil des Ansatzes mit {{WebExtAPIRef("proxy.onRequest")}} besteht darin, dass der Code, der Ihre Proxy-Richtlinie implementiert, im Hintergrundskript Ihrer Erweiterung ausgeführt wird. So hat er vollen Zugriff auf die WebExtension-APIs, die Ihrer Erweiterung zur Verfügung stehen (einschließlich beispielsweise Zugriff auf den [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage)-API Ihrer Erweiterung und Netzwerk-APIs wie [`dns`](/de/docs/Mozilla/Add-ons/WebExtensions/API/dns)).

Abgesehen von dieser API können Erweiterungen auch die Eigenschaft [`browserSettings.proxyConfig`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings) verwenden, um globale Proxy-Einstellungen zu konfigurieren.

> [!NOTE]
> Chrome, Edge und Opera haben [eine Erweiterungs-API, die ebenfalls "proxy" genannt wird](https://developer.chrome.com/docs/extensions/reference/api/proxy), die funktional dieser API ähnlich ist, da Erweiterungen damit eine Proxy-Richtlinie implementieren können. Das Design der Chrome-API ist jedoch komplett anders als diese API. Da diese API mit der Chrome `proxy` API inkompatibel ist, ist sie nur über den `browser`-Namensraum verfügbar.

Um diese API zu nutzen, benötigen Sie die "proxy"-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). Weiterhin benötigen Sie auch [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die URLs der abgefangenen Anfragen, wenn Sie Anfragen abfangen möchten.

Die "proxy"-Berechtigung erfordert, dass `"strict_min_version"` auf "91.1.0" oder höher gesetzt ist. Um diese Berechtigung zu verwenden, fügen Sie den Schlüssel [`"browser_specific_settings"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) zu Ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) hinzu oder aktualisieren Sie ihn, um eine minimale Firefox-Version anzugeben. Weitere Informationen finden Sie unter [Securing the proxy API for Firefox add-ons](https://blog.mozilla.org/security/2021/10/25/securing-the-proxy-api-for-firefox-add-ons/).

> [!NOTE]
> Der Browser kann spekulative Verbindungen herstellen, bei denen er feststellt, dass eine Anfrage an eine URI möglicherweise bald kommt. Diese Art von Verbindung liefert keine gültigen Tab-Informationen, sodass Anfragedetails wie `tabId`, `frameId`, `parentFrameId` usw. ungenau sind. Diese Verbindungen haben einen {{WebExtAPIRef("webRequest.ResourceType")}}-Wert von `speculative`.

## Typen

- {{WebExtAPIRef("proxy.ProxyInfo")}}
  - : Beschreibt einen Proxy.
- {{WebExtAPIRef("proxy.RequestDetails")}}
  - : Enthält Informationen über eine Webanfrage, die der Browser ausführen möchte.

## Eigenschaften

- {{WebExtAPIRef("proxy.settings")}}
  - : Proxy-Einstellungen abrufen und setzen.

## Ereignisse

- {{WebExtAPIRef("proxy.onError")}}
  - : Wird ausgelöst, wenn das System einen Fehler beim Ausführen des PAC-Skripts oder des `onRequest`-Listeners feststellt.
- {{WebExtAPIRef("proxy.onRequest")}}
  - : Wird ausgelöst, wenn eine Webanfrage gestellt werden soll, wodurch die Erweiterung die Möglichkeit erhält, sie zu proxieren.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
