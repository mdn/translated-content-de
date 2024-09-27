---
title: proxy.ProxyInfo
slug: Mozilla/Add-ons/WebExtensions/API/proxy/ProxyInfo
l10n:
  sourceCommit: 5710fe35c5cbf78e2284337a59c3e0f168183e00
---

{{AddonSidebar}}

Enthält Informationen über einen Proxy. Dieses Objekt oder ein Array dieser Objekte wird vom Listener an {{WebExtAPIRef("proxy.onRequest")}} zurückgegeben. Es weist den Browser an, ob die Anfrage über einen Proxy geleitet werden soll und, wenn ja, welcher Proxy verwendet werden soll.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `type`

  - : `string`. Dies beschreibt, ob die Anfrage überhaupt über einen Proxy geleitet werden soll und, wenn ja, welche Art von Proxy verwendet werden soll. Es kann einen der folgenden Werte annehmen:

    - `"direct"`: keine Proxy-Verwendung für die Anfrage. Wenn dieser Wert angegeben wird, werden alle anderen Eigenschaften dieses Objekts ignoriert. Dieses Einstellung überschreibt jedoch keinen [vom Benutzer gesetzten Proxy](https://support.mozilla.org/de/kb/verbindungs-einstellungen-firefox). Verwenden Sie {{WebExtAPIRef("proxy.settings")}}, um zu überprüfen, ob ein manueller Proxy verwendet wird, und überwachen Sie diese Einstellungen bei Bedarf auf Änderungen mit [`BrowserSetting.onChange`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/onChange).
    - `"http"`: HTTP-Proxy (oder SSL CONNECT für HTTPS)
    - `"https"`: HTTP-Proxys über TLS-Verbindung zum Proxy
    - `"socks"`: SOCKS v5 Proxy
    - `"socks4"`: SOCKS v4 Proxy

- `host`
  - : `string`. Der Hostname des Proxy-Servers. Pflichtangabe, es sei denn, `type` ist `"direct"`.
- `port`
  - : `number`. Die Portnummer des Proxy-Servers. Pflichtangabe, es sei denn, `type` ist `"direct"`.
- `username`
  - : `string`. Benutzername für den Proxydienst. Dies ist mit "socks" verwendbar. Für HTTP-Proxy-Authentifizierungen verwenden Sie [`webRequest.onAuthRequired`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired).
- `password`
  - : `string`. Passwort für den Proxydienst. Dies ist mit "socks" verwendbar. Für HTTP-Proxy-Authentifizierungen verwenden Sie [`webRequest.onAuthRequired`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired).
- `proxyDNS`
  - : `boolean`. Wenn wahr, wird der Proxy-Server verwendet, um bestimmte DNS-Anfragen zu lösen (nur verwendbar mit `"socks4"` und `"socks"`). Standardmäßig `false`.
- `failoverTimeout`
  - : `number`. Failover-Timeout in Sekunden. Wenn die Verbindung nach dieser Anzahl von Sekunden nicht zum Proxy-Server hergestellt werden kann, wird der nächste Proxy-Server im Array, das vom `proxy.onRequest`-Listener zurückgegeben wird, verwendet.
- `proxyAuthorizationHeader`

  - : `string`. Wenn gesetzt, wird dies an den {{httpheader("Proxy-Authorization")}} Anforderungsheader gesendet, der an HTTP- oder HTTPS-Proxys als Teil einer [CONNECT](/de/docs/Web/HTTP/Methods/CONNECT) Anfrage gesendet wird. Verwendet zur Authentifizierung gegenüber HTTP- und HTTPS-Proxys, die nicht herausfordernde Authentifizierungen zulassen.

    Wenn Sie zum Beispiel "Benutzername" und "Passwort" für die "basische" Authentifizierung senden möchten, können Sie die Eigenschaft `proxyAuthorizationHeader` auf `Basic dXNlcm5hbWU6cGFzc3dvcmQ=` setzen.

- `connectionIsolationKey` {{optional_inline}}
  - : `string`. Ein optionaler Schlüssel zur zusätzlichen Isolation dieser Proxy-Verbindung.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}
