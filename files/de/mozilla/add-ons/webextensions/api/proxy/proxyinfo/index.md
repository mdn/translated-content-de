---
title: proxy.ProxyInfo
slug: Mozilla/Add-ons/WebExtensions/API/proxy/ProxyInfo
l10n:
  sourceCommit: 938a5a7cf48ef6bd89d8635ae61d161401eedf17
---

Enthält Informationen über einen Proxy. Dieses Objekt oder ein Array dieser Objekte wird vom Listener an {{WebExtAPIRef("proxy.onRequest")}} zurückgegeben. Es weist den Browser an, ob die Anfrage über einen Proxy geleitet werden soll, und wenn ja, welchen Proxy zu verwenden ist.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `type`
  - : `string`. Dies beschreibt, ob überhaupt ein Proxy verwendet wird und, falls ja, welche Art von Proxy. Es kann einen der folgenden Werte annehmen:
    - `"direct"`: Die Anfrage nicht über den Proxy leiten. Wenn dieser Wert angegeben ist, werden alle anderen Eigenschaften dieses Objekts ignoriert. Diese Einstellung überschreibt jedoch keine [vom Benutzer festgelegten Proxy-Einstellungen](https://support.mozilla.org/de/kb/verbindungseinstellungen-von-firefox). Verwenden Sie {{WebExtAPIRef("proxy.settings")}}, um zu überprüfen, ob ein manueller Proxy verwendet wird, und überwachen Sie diese Einstellungen gegebenenfalls auf Änderungen mit [`BrowserSetting.onChange`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/onChange).
    - `"http"`: HTTP-Proxy (oder SSL CONNECT für HTTPS)
    - `"https"`: HTTP-Proxying über TLS-Verbindung zum Proxy
    - `"masque"`: MASQUE-Proxy (Tunnel über QUIC, wie in [RFC 9298](https://www.rfc-editor.org/rfc/rfc9298.html) definiert)
    - `"socks"`: SOCKS v5-Proxy
    - `"socks4"`: SOCKS v4-Proxy

- `host`
  - : `string`. Der Hostname des Proxy-Servers. Erforderlich, es sei denn, `type` ist `"direct"`.
- `port`
  - : `number`. Die Portnummer des Proxy-Servers. Erforderlich, es sei denn, `type` ist `"direct"`.
- `masqueTemplate`
  - : `string`. Das URI-Template für den MASQUE-Proxy, beginnend beim Pfadkomponente der URI. Es muss die Template-Variablen `target_host` und `target_port` enthalten, wie in [RFC 9298](https://www.rfc-editor.org/rfc/rfc9298.html#name-client-configuration) definiert. Beispiel: `/.well-known/masque/udp/{target_host}/{target_port}/`. Muss gesetzt werden, wenn der Proxytyp `"masque"` ist.
- `username` {{optional_inline}}
  - : `string`. Benutzername für den Proxy-Dienst. Dies ist mit "socks" nutzbar. Für HTTP-Proxy-Autorisierungen verwenden Sie [`webRequest.onAuthRequired`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired). Darf nicht gesetzt werden, wenn der Proxy `"masque"` ist.
- `password` {{optional_inline}}
  - : `string`. Passwort für den Proxy-Dienst. Dies ist mit "socks" nutzbar. Für HTTP-Proxy-Autorisierungen verwenden Sie [`webRequest.onAuthRequired`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired). Darf nicht gesetzt werden, wenn der Proxy `"masque"` ist.
- `proxyDNS`
  - : `boolean`. Wenn wahr, wird der Proxy-Server verwendet, um bestimmte DNS-Anfragen zu lösen (nur nutzbar mit `"socks4"` und `"socks"`). Standardeinstellung ist `false`.
- `failoverTimeout`
  - : `number`. Failover-Timeout in Sekunden. Wenn die Verbindung nach dieser Anzahl von Sekunden den Proxy-Server nicht erreicht, wird der nächste Proxy-Server im Array, das vom `proxy.onRequest` Listener zurückgegeben wird, verwendet.
- `proxyAuthorizationHeader`
  - : `string`. Wenn gesetzt, wird dies dem {{httpheader("Proxy-Authorization")}} Anforderungs-Header hinzugefügt, der an HTTP- oder HTTPS-Proxys als Teil einer [CONNECT](/de/docs/Web/HTTP/Reference/Methods/CONNECT) Anfrage gesendet wird. Wird zur Authentifizierung bei HTTP- und HTTPS-Proxys verwendet, die nicht fordernde Authentifizierung erlauben.

    Zum Beispiel, wenn Sie "username" und "password" für eine "basic" Authentifizierung senden möchten, können Sie die `proxyAuthorizationHeader` Eigenschaft auf `Basic dXNlcm5hbWU6cGFzc3dvcmQ=` setzen.

- `connectionIsolationKey` {{optional_inline}}
  - : `string`. Ein optionaler Schlüssel, der zur zusätzlichen Isolierung dieser Proxy-Verbindung verwendet wird.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
