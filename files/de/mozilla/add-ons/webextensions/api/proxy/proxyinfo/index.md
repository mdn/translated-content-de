---
title: proxy.ProxyInfo
slug: Mozilla/Add-ons/WebExtensions/API/proxy/ProxyInfo
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Enthält Informationen über einen Proxy. Dieses Objekt oder ein Array dieser Objekte wird vom Listener an {{WebExtAPIRef("proxy.onRequest")}} zurückgegeben. Es weist den Browser an, ob die Anfrage über einen Proxy erfolgt und, wenn ja, welcher Proxy verwendet werden soll.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `type`

  - : `string`. Dies beschreibt, ob überhaupt ein Proxy verwendet werden soll und falls ja, welche Art von Proxy. Es kann einen der folgenden Werte annehmen:
    - `"direct"`: die Anfrage nicht über einen Proxy leiten. Wenn dieser Wert angegeben ist, werden alle anderen Eigenschaften dieses Objekts ignoriert. Diese Einstellung überschreibt jedoch nicht die [vom Benutzer gesetzten Proxy-Einstellungen](https://support.mozilla.org/en-US/kb/connection-settings-firefox). Verwenden Sie {{WebExtAPIRef("proxy.settings")}}, um zu prüfen, ob ein manueller Proxy verwendet wird, und überwachen Sie diese Einstellungen bei Bedarf auf Änderungen mit [`BrowserSetting.onChange`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/onChange).
    - `"http"`: HTTP-Proxy (oder SSL CONNECT für HTTPS)
    - `"https"`: HTTP-Proxys über TLS-Verbindung an den Proxy
    - `"socks"`: SOCKS v5-Proxy
    - `"socks4"`: SOCKS v4-Proxy

- `host`
  - : `string`. Der Hostname des Proxy-Servers. Erforderlich, es sei denn, `type` ist `"direct"`.
- `port`
  - : `number`. Die Portnummer des Proxy-Servers. Erforderlich, es sei denn, `type` ist `"direct"`.
- `username`
  - : `string`. Benutzername für den Proxy-Dienst. Nutzbar mit "socks". Für HTTP-Proxy-Autorisierungen verwenden Sie [`webRequest.onAuthRequired`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired).
- `password`
  - : `string`. Passwort für den Proxy-Dienst. Nutzbar mit "socks". Für HTTP-Proxy-Autorisierungen verwenden Sie [`webRequest.onAuthRequired`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired).
- `proxyDNS`
  - : `boolean`. Wenn true, wird der Proxy-Server zur Auflösung bestimmter DNS-Anfragen verwendet (nur nutzbar mit `"socks4"` und `"socks"`). Standardmäßig `false`.
- `failoverTimeout`
  - : `number`. Failover-Timeout in Sekunden. Wenn die Verbindung nach dieser Anzahl von Sekunden fehlschlägt, wird der nächste Proxy-Server im vom `proxy.onRequest` Listener zurückgegebenen Array verwendet.
- `proxyAuthorizationHeader`

  - : `string`. Wenn gesetzt, wird dies dem {{httpheader("Proxy-Authorization")}} Anforderungs-Header hinzugefügt, der an HTTP oder HTTPS Proxys als Teil einer [CONNECT](/de/docs/Web/HTTP/Reference/Methods/CONNECT) Anfrage gesendet wird. Wird zur Authentifizierung an HTTP- und HTTPS-Proxys verwendet, die nicht-herausfordernde Authentifizierung erlauben.

    Wenn Sie beispielsweise "username" und "password" für die "basic" Authentifizierung senden möchten, können Sie die `proxyAuthorizationHeader` Eigenschaft auf `Basic dXNlcm5hbWU6cGFzc3dvcmQ=` setzen.

- `connectionIsolationKey` {{optional_inline}}
  - : `string`. Ein optionaler Schlüssel, der zur zusätzlichen Isolation dieser Proxy-Verbindung verwendet wird.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}
