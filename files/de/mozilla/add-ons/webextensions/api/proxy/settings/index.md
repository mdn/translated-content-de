---
title: proxy.settings
slug: Mozilla/Add-ons/WebExtensions/API/proxy/settings
l10n:
  sourceCommit: 824e5d88f3590fd39892d8975a2255c203feae9b
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, das verwendet wird, um die Proxy-Einstellungen des Browsers zu ändern.

> [!NOTE]
> Das Ändern von Proxy-Einstellungen erfordert den Zugriff auf private Browsing-Fenster, da Proxy-Einstellungen sowohl private als auch nicht-private Fenster beeinflussen. Ob eine Erweiterung auf private Browsing-Fenster zugreifen kann, liegt in der Kontrolle des Benutzers. Siehe [Erweiterungen im privaten Browsing](https://support.mozilla.org/en-US/kb/extensions-private-browsing) für weitere Details. Ihre Erweiterung kann prüfen, ob sie Zugang zu privaten Browsing-Fenstern hat, indem sie {{WebExtAPIRef("extension.isAllowedIncognitoAccess")}} verwendet. Wenn Ihre Erweiterung keine Erlaubnis für private Fenster hat, werfen Aufrufe zu `proxy.settings.set()` eine Ausnahme.

Der zugrunde liegende Wert ist ein Objekt. Wenn Sie dieses Objekt festlegen, sind alle Eigenschaften optional. Alle ausgelassenen Eigenschaften werden auf ihren Standardwert zurückgesetzt.

- `autoConfigUrl` {{optional_inline}}
  - : `string`. Eine URL, die verwendet wird, um den Proxy zu konfigurieren.
- `autoLogin` {{optional_inline}}
  - : `boolean`. Kein Prompt für Authentifizierung, wenn das Passwort gespeichert ist. Standard ist `false`.
- `ftp` {{optional_inline}} {{Deprecated_Inline}}
  - : `string`. Die Adresse des FTP-Proxys. Kann einen Port umfassen.
- `http` {{optional_inline}}
  - : `string`. Die Adresse des HTTP-Proxys. Kann einen Port umfassen.
- `httpProxyAll` {{optional_inline}}
  - : `boolean`. Verwenden Sie den HTTP-Proxyserver für alle Protokolle. Standard ist `false`.
- `passthrough` {{optional_inline}}

  - : `string`. Eine durch Kommas getrennte Liste von Hosts, die nicht über einen Proxy geleitet werden sollen. Kann definiert werden als:

    - `HOST_NAME[:PORT]`, zum Beispiel: `example.com` oder `example.com:1234`
    - `IP_LITERAL[:PORT]`
    - `IP_LITERAL/PREFIX_LENGTH_IN_BITS`, unter Verwendung der [CIDR-Notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)
    - `<local>`, um das Proxying für alle Hostnamen zu umgehen, die keine Punkte enthalten.

    Sie können IPv6-Adressen verwenden. Zum Beispiel, `[::123]`.

    Die Hosts `localhost`, `127.0.0.1` und `[::1]` werden niemals über einen Proxy geleitet.

- `proxyDNS` {{optional_inline}}
  - : `boolean`. Ob DNS verwendet werden soll, wenn ein SOCKS-Proxy verwendet wird. Standard ist `true` bei Verwendung von SOCKS5 und `false` bei Verwendung von SOCKS4. Vor Firefox 128 war der Standardwert `false` für SOCKS4 und SOCKS5.
- `proxyType` {{optional_inline}}
  - : `string`. Der zu verwendende Proxy-Typ. Dies kann „none“, „autoDetect“, „system“, „manual“, „autoConfig“ sein. Standard ist „system“.
- `socks` {{optional_inline}}
  - : `string`. Die Adresse des SOCKS-Proxys. Kann einen Port umfassen.
- `socksVersion` {{optional_inline}}
  - : `integer`. Die Version des SOCKS-Proxys. Kann 4 oder 5 sein. Standard ist 5.
- `ssl` {{optional_inline}}
  - : `string`. Die Adresse des TLS/SSL-Proxys. Kann einen Port umfassen.

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
