---
title: proxy.ProxyInfo
slug: Mozilla/Add-ons/WebExtensions/API/proxy/ProxyInfo
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Enthält Informationen über einen Proxy. Dieses Objekt oder ein Array dieser Objekte wird vom Listener an {{WebExtAPIRef("proxy.onRequest")}} zurückgegeben. Es weist den Browser an, ob die Anfrage über einen Proxy erfolgen soll und wenn ja, welchen Proxy er verwenden soll.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `type`
  - : `string`. Dies beschreibt, ob überhaupt ein Proxy verwendet werden soll und wenn ja, welche Art von Proxy. Es kann einen der folgenden Werte annehmen:
    - `"direct"`: Die Anfrage nicht über einen Proxy leiten. Wenn dieser Wert angegeben ist, werden alle anderen Eigenschaften dieses Objekts ignoriert. Diese Einstellung überschreibt jedoch keine [vom Benutzer gesetzten Proxys](https://support.mozilla.org/en-US/kb/connection-settings-firefox). Verwenden Sie {{WebExtAPIRef("proxy.settings")}}, um zu überprüfen, ob ein manueller Proxy verwendet wird, und falls notwendig, diese Einstellungen für Änderungen mittels [`BrowserSetting.onChange`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/onChange) zu überwachen.
    - `"http"`: HTTP-Proxy (oder SSL CONNECT für HTTPS)
    - `"https"`: HTTP-Proxying über TLS-Verbindung zum Proxy
    - `"socks"`: SOCKS v5 Proxy
    - `"socks4"`: SOCKS v4 Proxy

- `host`
  - : `string`. Der Hostname des Proxy-Servers. Obligatorisch, es sei denn, `type` ist `"direct"`.
- `port`
  - : `number`. Die Portnummer des Proxy-Servers. Obligatorisch, es sei denn, `type` ist `"direct"`.
- `username`
  - : `string`. Benutzername für den Proxydienst. Dies ist mit "socks" verwendbar. Für HTTP-Proxy-Autorisierungen verwenden Sie [`webRequest.onAuthRequired`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired).
- `password`
  - : `string`. Passwort für den Proxydienst. Dies ist mit "socks" verwendbar. Für HTTP-Proxy-Autorisierungen verwenden Sie [`webRequest.onAuthRequired`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired).
- `proxyDNS`
  - : `boolean`. Wenn true, wird der Proxyserver zur Auflösung bestimmter DNS-Abfragen verwendet (nur mit `"socks4"` und `"socks"` verwendbar). Standardwert ist `false`.
- `failoverTimeout`
  - : `number`. Failover-Timeout in Sekunden. Wenn die Verbindung zum Proxyserver innerhalb dieser Anzahl von Sekunden fehlschlägt, wird der nächste Proxyserver in dem vom `proxy.onRequest`-Listener zurückgegebenen Array verwendet.
- `proxyAuthorizationHeader`
  - : `string`. Wenn gesetzt, wird dies an den {{httpheader("Proxy-Authorization")}} Request-Header gesendet, der an HTTP- oder HTTPS-Proxys als Teil einer [CONNECT](/de/docs/Web/HTTP/Reference/Methods/CONNECT) Anfrage gesendet wird. Wird verwendet, um sich bei HTTP- und HTTPS-Proxys zu authentifizieren, die nicht-herausforderungsbasierte Authentifizierung zulassen.

    Beispielsweise, wenn Sie "Benutzername" und "Passwort" für die "Basic"-Authentifizierung senden möchten, können Sie die Eigenschaft `proxyAuthorizationHeader` auf `Basic dXNlcm5hbWU6cGFzc3dvcmQ=` setzen.

- `connectionIsolationKey` {{optional_inline}}
  - : `string`. Ein optionaler Schlüssel, der für zusätzliche Isolation dieser Proxy-Verbindung verwendet wird.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
