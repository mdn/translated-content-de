---
title: proxy
slug: Mozilla/Add-ons/WebExtensions/API/proxy
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Verwenden Sie die Proxy-API, um Webanfragen zu proxen. Sie können den {{WebExtAPIRef("proxy.onRequest")}} Ereignis-Listener nutzen, um Webanfragen abzufangen und ein Objekt zurückzugeben, das beschreibt, ob und wie diese proxied werden sollen.

Der Vorteil des Ansatzes mit {{WebExtAPIRef("proxy.onRequest")}} besteht darin, dass der Code, der Ihre Proxy-Richtlinie implementiert, im Hintergrundskript Ihrer Erweiterung läuft, sodass er vollen Zugriff auf die WebExtension-APIs hat, die Ihrer Erweiterung zur Verfügung stehen (einschließlich z.B. Zugriff auf den [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage) und Netzwerk-APIs wie [`dns`](/de/docs/Mozilla/Add-ons/WebExtensions/API/dns)).

Neben dieser API können Erweiterungen auch die Eigenschaft [`browserSettings.proxyConfig`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings) verwenden, um globale Proxyeinstellungen zu konfigurieren.

> [!NOTE]
> Chrome, Edge und Opera haben [eine Erweiterungs-API, die ebenfalls "proxy" genannt wird](https://developer.chrome.com/docs/extensions/reference/api/proxy), die funktional ähnlich zu dieser API ist, indem Erweiterungen sie nutzen können, um eine Proxy-Richtlinie umzusetzen. Das Design der Chrome-API ist jedoch völlig anders als diese API. Da diese API nicht mit der Chrome `proxy` API kompatibel ist, ist sie nur über den `browser` Namespace verfügbar.

Um diese API zu nutzen, benötigen Sie die "proxy" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). Da, wo Sie Anfragen abfangen möchten, benötigen Sie auch [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die URLs der abgefangenen Anfragen.

Die "proxy" Berechtigung erfordert, dass `"strict_min_version"` auf "91.1.0" oder höher gesetzt wird. Um diese Berechtigung zu nutzen, fügen Sie den Schlüssel [`"browser_specific_settings"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) im [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) hinzu oder aktualisieren Sie ihn, um eine minimale Firefox-Version anzugeben. Weitere Informationen finden Sie unter [Sicherung der Proxy-API für Firefox-Add-ons](https://blog.mozilla.org/security/2021/10/25/securing-the-proxy-api-for-firefox-add-ons/).

> [!NOTE]
> Der Browser kann spekulative Verbindungen herstellen, bei denen er feststellt, dass eine Anfrage an eine URI bald kommen könnte. Diese Art von Verbindung liefert keine gültigen Tab-Informationen, sodass Anfragedetails wie `tabId`, `frameId`, `parentFrameId` usw. ungenau sind. Diese Verbindungen haben einen {{WebExtAPIRef("webRequest.ResourceType")}} von `speculative`.

## Typen

- {{WebExtAPIRef("proxy.ProxyInfo")}}
  - : Beschreibt einen Proxy.
- {{WebExtAPIRef("proxy.RequestDetails")}}
  - : Enthält Informationen über eine Webanfrage, die der Browser zu stellen beabsichtigt.

## Eigenschaften

- {{WebExtAPIRef("proxy.settings")}}
  - : Proxy-Einstellungen abrufen und setzen.

## Ereignisse

- {{WebExtAPIRef("proxy.onError")}}
  - : Wird ausgelöst, wenn das System auf einen Fehler stößt, während das PAC-Skript oder der `onRequest`-Listener ausgeführt wird.
- {{WebExtAPIRef("proxy.onRequest")}}
  - : Wird ausgelöst, wenn eine Webanfrage gestellt werden soll, was der Erweiterung die Möglichkeit gibt, sie zu proxen.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
