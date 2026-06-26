---
title: proxy.ProxyInfo
slug: Mozilla/Add-ons/WebExtensions/API/proxy/ProxyInfo
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Enthält Informationen über einen Proxy. Dieses Objekt oder ein Array dieser Objekte wird vom Listener an {{WebExtAPIRef("proxy.onRequest")}} zurückgegeben. Es weist den Browser an, ob die Anfrage über einen Proxy geleitet werden soll und, falls ja, welchen Proxy zu verwenden.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `type`
  - : `string`. Dies beschreibt, ob überhaupt ein Proxy verwendet werden soll und wenn ja, welche Art von Proxy. Mögliche Werte sind:
    - `"direct"`: Keine Proxy-Verwendung für die Anfrage. Wenn dieser Wert angegeben wird, werden alle anderen Eigenschaften dieses Objekts ignoriert. Diese Einstellung überschreibt jedoch nicht [vom Benutzer gesetzte Proxys](https://support.mozilla.org/de/kb/verbindungseinstellungen-firefox). Verwenden Sie {{WebExtAPIRef("proxy.settings")}}, um zu überprüfen, ob ein manueller Proxy verwendet wird, und überwachen Sie diese Einstellungen gegebenenfalls auf Änderungen mit [`BrowserSetting.onChange`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/onChange).
    - `"http"`: HTTP-Proxy (oder SSL CONNECT für HTTPS)
    - `"https"`: HTTP-Proxying über TLS-Verbindung zum Proxy
    - `"masque"`: MASQUE-Proxy (Tunnel über QUIC, wie in [RFC 9298](https://www.rfc-editor.org/info/rfc9298/) definiert)
    - `"socks"`: SOCKS v5-Proxy
    - `"socks4"`: SOCKS v4-Proxy

- `host`
  - : `string`. Der Hostname des Proxy-Servers. Pflichtfeld, es sei denn, `type` ist `"direct"`.
- `port`
  - : `number`. Die Portnummer des Proxy-Servers. Pflichtfeld, es sei denn, `type` ist `"direct"`.
- `masqueTemplate`
  - : `string`. Das URI-Template für den MASQUE-Proxy, beginnend mit dem Pfadbestandteil der URI. Dies muss die Template-Variablen `target_host` und `target_port` enthalten, wie in [RFC 9298](https://www.rfc-editor.org/info/rfc9298/#name-client-configuration) definiert. Zum Beispiel: `/.well-known/masque/udp/{target_host}/{target_port}/`. Muss gesetzt werden, wenn der Proxytyp `"masque"` ist.
- `username` {{optional_inline}}
  - : `string`. Benutzername für den Proxy-Dienst. Dies ist mit "socks" verwendbar. Für HTTP-Proxy-Authentifizierungen verwenden Sie [`webRequest.onAuthRequired`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired). Darf nicht gesetzt werden, wenn der Proxy `"masque"` ist.
- `password` {{optional_inline}}
  - : `string`. Passwort für den Proxy-Dienst. Dies ist mit "socks" verwendbar. Für HTTP-Proxy-Authentifizierungen verwenden Sie [`webRequest.onAuthRequired`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired). Darf nicht gesetzt werden, wenn der Proxy `"masque"` ist.
- `proxyDNS`
  - : `boolean`. Wenn wahr, wird der Proxy-Server verwendet, um bestimmte DNS-Anfragen zu lösen (nur verwendbar mit `"socks4"` und `"socks"`). Standard ist `false`.
- `failoverTimeout`
  - : `number`. Failover-Timeout in Sekunden. Schlägt die Verbindung zum Proxy-Server nach dieser Anzahl von Sekunden fehl, wird der nächste Proxy-Server im Array, das vom `proxy.onRequest` Listener zurückgegeben wird, verwendet.
- `proxyAuthorizationHeader`
  - : `string`. Wenn gesetzt, wird dies im {{httpheader("Proxy-Authorization")}} Anforderungs-Header übergeben, der an HTTP- oder HTTPS-Proxys als Teil einer [CONNECT](/de/docs/Web/HTTP/Reference/Methods/CONNECT)-Anfrage gesendet wird. Verwendet zur Authentifizierung bei HTTP- und HTTPS-Proxys, die nicht-herausfordernde Authentifizierung erlauben.

    Wenn Sie beispielsweise "username" und "password" für die "basic" Authentifizierung senden möchten, können Sie die Eigenschaft `proxyAuthorizationHeader` auf `Basic dXNlcm5hbWU6cGFzc3dvcmQ=` setzen.

- `connectionIsolationKey` {{optional_inline}}
  - : `string`. Ein optionaler Schlüssel zur zusätzlichen Isolierung dieser Proxy-Verbindung.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
