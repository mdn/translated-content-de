---
title: proxy.settings
slug: Mozilla/Add-ons/WebExtensions/API/proxy/settings
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, das verwendet wird, um die Proxy-Einstellungen des Browsers zu ändern.

> [!NOTE]
> Das Ändern von Proxy-Einstellungen erfordert Zugriff auf private Browser-Fenster, da Proxy-Einstellungen sowohl private als auch nicht-private Fenster betreffen. Ob eine Erweiterung auf private Browser-Fenster zugreifen kann, liegt in der Kontrolle des Benutzers. Details finden Sie unter [Erweiterungen im privaten Modus](https://support.mozilla.org/en-US/kb/extensions-private-browsing). Ihre Erweiterung kann überprüfen, ob sie Zugriff auf private Browser-Fenster hat, indem sie {{WebExtAPIRef("extension.isAllowedIncognitoAccess")}} verwendet. Wenn Ihre Erweiterung keine Berechtigung für private Fenster hat, werfen Aufrufe von `proxy.settings.set()` eine Ausnahme.

Der zugrunde liegende Wert ist ein Objekt. Beim Setzen dieses Objekts sind alle Eigenschaften optional. Alle ausgelassenen Eigenschaften werden auf ihren Standardwert zurückgesetzt.

- `autoConfigUrl` {{optional_inline}}
  - : `string`. Eine URL zum Konfigurieren des Proxys.
- `autoLogin` {{optional_inline}}
  - : `boolean`. Keine Aufforderung zur Authentifizierung, wenn das Passwort gespeichert ist. Standardmäßig `false`.
- `ftp` {{optional_inline}} {{Deprecated_Inline}}
  - : `string`. Die Adresse des FTP-Proxys. Kann einen Port enthalten.
- `http` {{optional_inline}}
  - : `string`. Die Adresse des HTTP-Proxys. Kann einen Port enthalten.
- `httpProxyAll` {{optional_inline}}
  - : `boolean`. Den HTTP-Proxyserver für alle Protokolle verwenden. Standardmäßig `false`.
- `passthrough` {{optional_inline}}

  - : `string`. Eine kommagetrennte Liste von Hosts, die nicht über einen Proxy geleitet werden sollen. Kann definiert werden als:

    - `HOST_NAME[:PORT]`, zum Beispiel: `example.com` oder `example.com:1234`
    - `IP_LITERAL[:PORT]`
    - `IP_LITERAL/PREFIX_LENGTH_IN_BITS`, unter Verwendung der [CIDR-Notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)
    - `<local>`, um die Proxy-Umgehung für alle Hostnamen zu aktivieren, die keine Punkte enthalten.

    Sie können IPv6-Adressen verwenden. Zum Beispiel, `[::123]`.

    Die Hosts `localhost`, `127.0.0.1` und `[::1]` werden niemals über einen Proxy geleitet.

- `proxyDNS` {{optional_inline}}
  - : `boolean`. Ob beim Verwenden eines SOCKS-Proxys DNS über Proxy geleitet werden soll. Standardmäßig `true` bei Verwendung von SOCKS5 und `false` bei Verwendung von SOCKS4. Vor Firefox 128 war der Standardwert `false` für SOCKS4 und SOCKS5.
- `proxyType` {{optional_inline}}
  - : `string`. Der zu verwendende Proxy-Typ. Dies kann folgende Werte annehmen: "none", "autoDetect", "system", "manual", "autoConfig". Standardmäßig "system".
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
