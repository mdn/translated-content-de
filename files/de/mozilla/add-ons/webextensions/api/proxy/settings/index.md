---
title: proxy.settings
slug: Mozilla/Add-ons/WebExtensions/API/proxy/settings
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, das verwendet wird, um die Proxy-Einstellungen des Browsers zu ändern.

> [!NOTE]
> Das Ändern der Proxy-Einstellungen erfordert den Zugriff auf das private Fenster, da die Proxy-Einstellungen sowohl private als auch nicht-private Fenster betreffen. Ob eine Erweiterung auf private Fenster zugreifen kann, liegt in der Kontrolle des Benutzers. Weitere Details finden Sie unter [Erweiterungen im privaten Modus](https://support.mozilla.org/en-US/kb/extensions-private-browsing). Ihre Erweiterung kann prüfen, ob sie Zugriff auf private Fenster hat, indem sie {{WebExtAPIRef("extension.isAllowedIncognitoAccess")}} verwendet. Wenn Ihre Erweiterung keine Berechtigung für private Fenster hat, lösen Aufrufe von `proxy.settings.set()` eine Ausnahme aus.

Der zugrunde liegende Wert ist ein Objekt. Beim Setzen dieses Objekts sind alle Eigenschaften optional. Alle ausgelassenen Eigenschaften werden auf ihren Standardwert zurückgesetzt.

- `autoConfigUrl` {{optional_inline}}
  - : `string`. Eine URL zur Konfiguration des Proxys.
- `autoLogin` {{optional_inline}}
  - : `boolean`. Keine Aufforderung zur Authentifizierung, wenn das Passwort gespeichert ist. Standardmäßig `false`.
- `ftp` {{optional_inline}} {{Deprecated_Inline}}
  - : `string`. Die Adresse des FTP-Proxys. Kann einen Port enthalten.
- `http` {{optional_inline}}
  - : `string`. Die Adresse des HTTP-Proxys. Kann einen Port enthalten.
- `httpProxyAll` {{optional_inline}}
  - : `boolean`. Verwenden Sie den HTTP-Proxyserver für alle Protokolle. Standardmäßig `false`.
- `passthrough` {{optional_inline}}
  - : `string`. Eine kommagetrennte Liste von Hosts, die nicht über den Proxy geleitet werden sollten. Kann definiert werden als:
    - `HOST_NAME[:PORT]`, zum Beispiel: `example.com` oder `example.com:1234`
    - `IP_LITERAL[:PORT]`
    - `IP_LITERAL/PREFIX_LENGTH_IN_BITS`, unter Verwendung der [CIDR-Notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)
    - `<local>`, um für alle Hostnamen, die keine Punkte enthalten, das Proxieren zu umgehen.

    Sie können IPv6-Adressen verwenden. Zum Beispiel `[::123]`.

    Die Hosts `localhost`, `127.0.0.1` und `[::1]` werden nie über den Proxy geleitet.

- `proxyDNS` {{optional_inline}}
  - : `boolean`. Ob DNS über einen SOCKS-Proxy geleitet wird. Standardmäßig `true` bei Verwendung von SOCKS5 und `false` bei Verwendung von SOCKS4. Vor Firefox 128 war der Standardwert `false` für SOCKS4 und SOCKS5.
- `proxyType` {{optional_inline}}
  - : `string`. Der Typ des zu verwendenden Proxys. Mögliche Werte sind: "none", "autoDetect", "system", "manual", "autoConfig". Standardmäßig "system".
- `socks` {{optional_inline}}
  - : `string`. Die Adresse des SOCKS-Proxys. Kann einen Port enthalten.
- `socksVersion` {{optional_inline}}
  - : `integer`. Die Version des SOCKS-Proxys. Kann 4 oder 5 sein. Standardmäßig 5.
- `ssl` {{optional_inline}}
  - : `string`. Die Adresse des TLS/SSL-Proxys. Kann einen Port enthalten.

## Beispiele

```js
let proxySettings = {
  proxyType: "manual",
  http: "http://proxy.org:8080",
  socksVersion: 4,
  passthrough: ".example.org",
};

browser.proxy.settings.set({ value: proxySettings });
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
