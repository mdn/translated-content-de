---
title: proxy.ProxyInfo
slug: Mozilla/Add-ons/WebExtensions/API/proxy/ProxyInfo
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Enthält Informationen über einen Proxy. Dieses Objekt oder ein Array dieser Objekte wird von dem Listener an {{WebExtAPIRef("proxy.onRequest")}} zurückgegeben. Es weist den Browser an, ob eine Anfrage über einen Proxy gesendet werden soll und, falls ja, welchen Proxy zu verwenden ist.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `type`
  - : `string`. Dies beschreibt, ob überhaupt ein Proxy verwendet werden soll und, falls ja, welche Art von Proxy verwendet werden soll. Es kann einen der folgenden Werte annehmen:
    - `"direct"`: Die Anfrage nicht über einen Proxy senden. Wenn dieser Wert angegeben ist, werden alle anderen Eigenschaften dieses Objekts ignoriert. Diese Einstellung überschreibt jedoch nicht den [vom Benutzer festgelegten Proxy](https://support.mozilla.org/de/kb/verbindungs-einstellungen-firefox). Verwenden Sie {{WebExtAPIRef("proxy.settings")}}, um zu überprüfen, ob ein manueller Proxy verwendet wird, und überwachen Sie gegebenenfalls diese Einstellungen auf Änderungen mit [`BrowserSetting.onChange`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/onChange).
    - `"http"`: HTTP-Proxy (oder SSL CONNECT für HTTPS)
    - `"https"`: HTTP-Proxydienste über TLS-Verbindung zum Proxy
    - `"socks"`: SOCKS v5 Proxy
    - `"socks4"`: SOCKS v4 Proxy

- `host`
  - : `string`. Der Hostname des Proxy-Servers. Obligatorisch, es sei denn, `type` ist `"direct"`.
- `port`
  - : `number`. Die Portnummer des Proxy-Servers. Obligatorisch, es sei denn, `type` ist `"direct"`.
- `username`
  - : `string`. Benutzername für den Proxy-Dienst. Dies ist mit "socks" verwendbar. Für HTTP-Proxy-Berechtigungen verwenden Sie [`webRequest.onAuthRequired`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired).
- `password`
  - : `string`. Passwort für den Proxy-Dienst. Dies ist mit "socks" verwendbar. Für HTTP-Proxy-Berechtigungen verwenden Sie [`webRequest.onAuthRequired`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired).
- `proxyDNS`
  - : `boolean`. Wenn wahr, wird der Proxy-Server zur Auflösung bestimmter DNS-Anfragen verwendet (nur verwendbar mit `"socks4"` und `"socks"`). Standardmäßig `false`.
- `failoverTimeout`
  - : `number`. Failover-Timeout in Sekunden. Wenn die Verbindung zum Proxy-Server nach dieser Anzahl von Sekunden fehlschlägt, wird der nächste Proxy-Server im Array, das vom `proxy.onRequest` Listener zurückgegeben wird, verwendet.
- `proxyAuthorizationHeader`
  - : `string`. Wenn gesetzt, wird dies dem {{httpheader("Proxy-Authorization")}} Anforderungs-Header übergeben, der an HTTP- oder HTTPS-Proxys im Rahmen einer [CONNECT](/de/docs/Web/HTTP/Reference/Methods/CONNECT) Anfrage gesendet wird. Es wird zur Authentifizierung an HTTP- und HTTPS-Proxys verwendet, die nicht-herausfordernde Authentifizierung zulassen.

    Wenn Sie beispielsweise "username" und "password" für die "basic" Authentifizierung senden möchten, können Sie die Eigenschaft `proxyAuthorizationHeader` auf `Basic dXNlcm5hbWU6cGFzc3dvcmQ=` setzen.

- `connectionIsolationKey` {{optional_inline}}
  - : `string`. Ein optionaler Schlüssel, der für zusätzliche Isolation dieser Proxyverbindung verwendet wird.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
