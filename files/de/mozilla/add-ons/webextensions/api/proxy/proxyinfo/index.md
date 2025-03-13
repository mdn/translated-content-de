---
title: proxy.ProxyInfo
slug: Mozilla/Add-ons/WebExtensions/API/proxy/ProxyInfo
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{AddonSidebar}}

Enthält Informationen über einen Proxy. Dieses Objekt oder ein Array dieser Objekte wird vom Listener an {{WebExtAPIRef("proxy.onRequest")}} zurückgegeben. Es weist den Browser an, ob der Request über einen Proxy geleitet werden soll und, falls ja, welcher Proxy verwendet werden soll.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `type`

  - : `string`. Dies beschreibt, ob überhaupt ein Proxy verwendet werden soll, und wenn ja, welche Art von Proxy. Es kann einen der folgenden Werte annehmen:

    - `"direct"`: Der Request wird nicht über einen Proxy geleitet. Wenn dieser Wert angegeben wird, werden alle anderen Eigenschaften dieses Objekts ignoriert. Diese Einstellung überschreibt jedoch nicht die [vom Benutzer gesetzten Proxy-Einstellungen](https://support.mozilla.org/de/kb/verbindungseinstellungen-in-firefox). Verwenden Sie {{WebExtAPIRef("proxy.settings")}}, um zu überprüfen, ob ein manueller Proxy verwendet wird und beobachten Sie diese Einstellungen gegebenenfalls für Änderungen mit [`BrowserSetting.onChange`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/onChange).
    - `"http"`: HTTP Proxy (oder SSL CONNECT für HTTPS)
    - `"https"`: HTTP-Proxying über TLS-Verbindung zum Proxy
    - `"socks"`: SOCKS v5 Proxy
    - `"socks4"`: SOCKS v4 Proxy

- `host`
  - : `string`. Der Hostname des Proxy-Servers. Erforderlich, es sei denn, `type` ist `"direct"`.
- `port`
  - : `number`. Die Portnummer des Proxy-Servers. Erforderlich, es sei denn, `type` ist `"direct"`.
- `username`
  - : `string`. Benutzername für den Proxy-Dienst. Verwendbar mit "socks". Für HTTP-Proxy-Autorisierungen verwenden Sie [`webRequest.onAuthRequired`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired).
- `password`
  - : `string`. Passwort für den Proxy-Dienst. Verwendbar mit "socks". Für HTTP-Proxy-Autorisierungen verwenden Sie [`webRequest.onAuthRequired`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired).
- `proxyDNS`
  - : `boolean`. Wenn wahr, wird der Proxy-Server zur Auflösung bestimmter DNS-Anfragen verwendet (nur verwendbar mit `"socks4"` und `"socks"`). Standardmäßig `false`.
- `failoverTimeout`
  - : `number`. Failover-Timeout in Sekunden. Wenn die Verbindung zum Proxy-Server nach dieser Anzahl von Sekunden fehlschlägt, wird der nächste Proxy-Server im Array, das vom Listener `proxy.onRequest` zurückgegeben wird, verwendet.
- `proxyAuthorizationHeader`

  - : `string`. Wenn gesetzt, wird dies dem {{httpheader("Proxy-Authorization")}} Request-Header hinzugefügt, der an HTTP- oder HTTPS-Proxys als Teil einer [CONNECT](/de/docs/Web/HTTP/Reference/Methods/CONNECT)-Anfrage gesendet wird. Wird zur Authentifizierung bei HTTP- und HTTPS-Proxys verwendet, die nicht-herausfordernde Authentifizierung zulassen.

    Falls Sie z.B. "username" und "password" für die "basic" Authentifizierung senden wollen, können Sie die Eigenschaft `proxyAuthorizationHeader` auf `Basic dXNlcm5hbWU6cGFzc3dvcmQ=` setzen.

- `connectionIsolationKey` {{optional_inline}}
  - : `string`. Ein optionaler Schlüssel, der zur zusätzlichen Isolierung dieser Proxy-Verbindung verwendet wird.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}
