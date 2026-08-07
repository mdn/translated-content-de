---
title: proxy
slug: Mozilla/Add-ons/WebExtensions/API/proxy
l10n:
  sourceCommit: fc22a478adcd31155c24b69804c579a14629342a
---

Verwenden Sie die Proxy-API, um Webanfragen zu proxen. Sie können den {{WebExtAPIRef("proxy.onRequest")}} Ereignis-Listener verwenden, um Webanfragen abzufangen und ein Objekt zurückzugeben, das beschreibt, ob und wie sie gepoxt werden sollen.

Der Vorteil des Ansatzes mit {{WebExtAPIRef("proxy.onRequest")}} besteht darin, dass der Code, der Ihre Proxy-Policy implementiert, im Hintergrundskript Ihrer Erweiterung läuft. Dadurch hat er vollen Zugriff auf die für Ihre Erweiterung verfügbaren WebExtension APIs (einschließlich beispielsweise des Zugriffs auf den [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage) Ihrer Erweiterung und Netzwerkschnittstellen wie [`dns`](/de/docs/Mozilla/Add-ons/WebExtensions/API/dns)).

Neben dieser API können Erweiterungen auch die Eigenschaft [`browserSettings.proxyConfig`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy/settings) verwenden, um globale Proxy-Einstellungen zu konfigurieren.

> [!NOTE]
> Chrome, Edge und Opera verfügen über [eine Erweiterungs-API, die ebenfalls "proxy" genannt wird](https://developer.chrome.com/docs/extensions/reference/api/proxy), die funktional ähnlich zu dieser API ist, indem Erweiterungen sie nutzen können, um eine Proxyrichtlinie zu implementieren. Allerdings ist das Design der Chrome-API komplett anders als diese API.

Um diese API zu verwenden, müssen Sie die "proxy" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) haben. Außerdem benötigen Sie dort, wo Sie Anfragen abfangen möchten, auch [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die URLs der abgefangenen Anfragen.

Die "proxy"-Berechtigung erfordert, dass `"strict_min_version"` auf "91.1.0" oder höher gesetzt wird. Um diese Erlaubnis zu nutzen, fügen Sie den Schlüssel [`"browser_specific_settings"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) in Ihrem [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) hinzu oder aktualisieren Sie ihn, um eine minimale Version von Firefox festzulegen. Weitere Informationen finden Sie unter [Absicherung der Proxy-API für Firefox-Add-ons](https://blog.mozilla.org/security/2021/10/25/securing-the-proxy-api-for-firefox-add-ons/).

> [!NOTE]
> Der Browser kann spekulative Verbindungen herstellen, bei denen er feststellt, dass möglicherweise bald eine Anfrage an eine URI erfolgt. Diese Art von Verbindung liefert keine gültigen Tab-Informationen, sodass Anfragedetails wie `tabId`, `frameId`, `parentFrameId` usw. ungenau sind. Diese Verbindungen haben einen {{WebExtAPIRef("webRequest.ResourceType")}} von `speculative`.

## Typen

- {{WebExtAPIRef("proxy.ProxyInfo")}}
  - : Beschreibt einen Proxy.
- {{WebExtAPIRef("proxy.RequestDetails")}}
  - : Enthält Informationen über eine Webanfrage, die der Browser vorhat zu machen.

## Eigenschaften

- {{WebExtAPIRef("proxy.settings")}}
  - : Abrufen und Festlegen von Proxy-Einstellungen.

## Ereignisse

- {{WebExtAPIRef("proxy.onError")}}
  - : Wird ausgelöst, wenn das System einen Fehler beim Ausführen des PAC-Skripts oder des `onRequest`-Listeners feststellt.
- {{WebExtAPIRef("proxy.onRequest")}}
  - : Wird ausgelöst, wenn eine Webanfrage kurz vor der Ausführung steht, wodurch die Erweiterung die Möglichkeit hat, sie zu proxen.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
