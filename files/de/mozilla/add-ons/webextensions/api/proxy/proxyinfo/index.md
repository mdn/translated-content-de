---
title: proxy.ProxyInfo
slug: Mozilla/Add-ons/WebExtensions/API/proxy/ProxyInfo
l10n:
  sourceCommit: 5710fe35c5cbf78e2284337a59c3e0f168183e00
---

{{AddonSidebar}}

Enthält Informationen über einen Proxy. Dieses Objekt, oder ein Array dieser Objekte, wird vom Listener an {{WebExtAPIRef("proxy.onRequest")}} zurückgegeben. Es weist den Browser an, ob die Anfrage über einen Proxy erfolgen soll und, falls ja, welcher Proxy verwendet werden soll.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `type`

  - : `string`. Beschreibt, ob überhaupt ein Proxy verwendet werden soll und, falls ja, welche Art von Proxy zu verwenden ist. Es kann einen der folgenden Werte annehmen:

    - `"direct"`: Die Anfrage nicht über einen Proxy senden. Wenn dieser Wert angegeben ist, werden alle anderen Eigenschaften dieses Objekts ignoriert. Diese Einstellung überschreibt jedoch keine [Proxy-Einstellungen des Benutzers](https://support.mozilla.org/en-US/kb/connection-settings-firefox). Verwenden Sie {{WebExtAPIRef("proxy.settings")}}, um zu überprüfen, ob ein manueller Proxy verwendet wird, und überwachen Sie diese Einstellungen bei Bedarf auf Änderungen mit [`BrowserSetting.onChange`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/onChange).
    - `"http"`: HTTP-Proxy (oder SSL CONNECT für HTTPS)
    - `"https"`: HTTP-Proxynutzung über TLS-Verbindung zum Proxy
    - `"socks"`: SOCKS v5-Proxy
    - `"socks4"`: SOCKS v4-Proxy

- `host`
  - : `string`. Der Hostname des Proxy-Servers. Pflicht, es sei denn, `type` ist `"direct"`.
- `port`
  - : `number`. Die Portnummer des Proxy-Servers. Pflicht, es sei denn, `type` ist `"direct"`.
- `username`
  - : `string`. Benutzername für den Proxydienst. Dies ist mit "socks" nutzbar. Für HTTP-Proxy-Authentifizierungen verwenden Sie [`webRequest.onAuthRequired`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired).
- `password`
  - : `string`. Passwort für den Proxydienst. Dies ist mit "socks" nutzbar. Für HTTP-Proxy-Authentifizierungen verwenden Sie [`webRequest.onAuthRequired`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired).
- `proxyDNS`
  - : `boolean`. Wenn true, wird der Proxy-Server zur Auflösung bestimmter DNS-Abfragen verwendet (nur mit `"socks4"` und `"socks"` nutzbar). Standardwert ist `false`.
- `failoverTimeout`
  - : `number`. Failover-Timeout in Sekunden. Wenn die Verbindung zum Proxy-Server nach dieser Anzahl von Sekunden nicht hergestellt werden kann, wird der nächste Proxy-Server im vom `proxy.onRequest` Listener zurückgegebenen Array verwendet.
- `proxyAuthorizationHeader`

  - : `string`. Wenn gesetzt, wird dies an den {{httpheader("Proxy-Authorization")}} Anforderungsheader gesendet, der als Teil einer [CONNECT](/de/docs/Web/HTTP/Methods/CONNECT) Anfrage an HTTP- oder HTTPS-Proxys gesendet wird. Wird verwendet, um sich bei HTTP- und HTTPS-Proxys zu authentifizieren, die eine nicht-herausfordernde Authentifizierung zulassen.

    Beispielsweise, wenn Sie "Benutzername" und "Passwort" für die "basic" Authentifizierung senden möchten, können Sie die Eigenschaft `proxyAuthorizationHeader` auf `Basic dXNlcm5hbWU6cGFzc3dvcmQ=` setzen.

- `connectionIsolationKey` {{optional_inline}}
  - : `string`. Ein optionaler Schlüssel, der für zusätzliche Isolierung dieser Proxy-Verbindung verwendet wird.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}
