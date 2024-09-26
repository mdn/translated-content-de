---
title: proxy.ProxyInfo
slug: Mozilla/Add-ons/WebExtensions/API/proxy/ProxyInfo
l10n:
  sourceCommit: 5710fe35c5cbf78e2284337a59c3e0f168183e00
---

{{AddonSidebar}}

Enthält Informationen über einen Proxy. Dieses Objekt oder ein Array dieser Objekte wird vom Listener an {{WebExtAPIRef("proxy.onRequest")}} zurückgegeben. Es weist den Browser an, ob die Anfrage über einen Proxy gesendet werden soll und wenn ja, welchen Proxy zu verwenden.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `type`

  - : `string`. Dies beschreibt, ob überhaupt über einen Proxy gesendet werden soll und wenn ja, welche Art von Proxy zu verwenden ist. Es kann einen der folgenden Werte annehmen:

    - `"direct"`: die Anfrage nicht über einen Proxy senden. Wenn dieser Wert angegeben wird, werden alle anderen Eigenschaften dieses Objekts ignoriert. Diese Einstellung überschreibt jedoch nicht die vom Nutzer [manuell eingestellten Proxys](https://support.mozilla.org/de/kb/verbindungseinstellungen-bei-firefox). Verwenden Sie {{WebExtAPIRef("proxy.settings")}}, um zu überprüfen, ob ein manueller Proxy verwendet wird, und beobachten Sie gegebenenfalls diese Einstellungen auf Änderungen mithilfe von [`BrowserSetting.onChange`](/de/docs/Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting/onChange).
    - `"http"`: HTTP-Proxy (oder SSL CONNECT für HTTPS)
    - `"https"`: HTTP-Proxys über TLS-Verbindung zum Proxy
    - `"socks"`: SOCKS v5 Proxy
    - `"socks4"`: SOCKS v4 Proxy

- `host`
  - : `string`. Der Hostname des Proxy-Servers. Erforderlich, es sei denn, `type` ist `"direct"`.
- `port`
  - : `number`. Die Portnummer des Proxy-Servers. Erforderlich, es sei denn, `type` ist `"direct"`.
- `username`
  - : `string`. Benutzername für den Proxydienst. Dies ist mit "socks" verwendbar. Für HTTP-Proxy-Authentifizierungen verwenden Sie [`webRequest.onAuthRequired`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired).
- `password`
  - : `string`. Passwort für den Proxydienst. Dies ist mit "socks" verwendbar. Für HTTP-Proxy-Authentifizierungen verwenden Sie [`webRequest.onAuthRequired`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired).
- `proxyDNS`
  - : `boolean`. Wenn wahr, wird der Proxy-Server zur Auflösung bestimmter DNS-Abfragen verwendet (nur mit `"socks4"` und `"socks"` verwendbar). Standardmäßig `false`.
- `failoverTimeout`
  - : `number`. Failover-Timeout in Sekunden. Wenn die Verbindung zum Proxy-Server nach dieser Anzahl von Sekunden nicht hergestellt werden kann, wird der nächste Proxy-Server im Array, das vom `proxy.onRequest` Listener zurückgegeben wird, verwendet.
- `proxyAuthorizationHeader`

  - : `string`. Wenn gesetzt, wird dies an den {{httpheader("Proxy-Authorization")}} Anfrage-Header gesendet, der an HTTP oder HTTPS-Proxys als Teil einer [CONNECT](/de/docs/Web/HTTP/Methods/CONNECT) Anfrage gesendet wird. Wird verwendet, um sich bei HTTP- und HTTPS-Proxys zu authentifizieren, die nicht-herausfordernde Authentifizierung erlauben.

    Zum Beispiel, wenn Sie "username" und "password" für die "basic" Authentifizierung senden möchten, können Sie die Eigenschaft `proxyAuthorizationHeader` auf `Basic dXNlcm5hbWU6cGFzc3dvcmQ=` setzen.

- `connectionIsolationKey` {{optional_inline}}
  - : `string`. Ein optionaler Schlüssel, der zur zusätzlichen Isolation dieser Proxy-Verbindung verwendet wird.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}