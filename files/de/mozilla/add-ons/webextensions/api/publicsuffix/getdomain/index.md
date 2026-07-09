---
title: publicSuffix.getDomain()
slug: Mozilla/Add-ons/WebExtensions/API/publicSuffix/getDomain
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

Gibt die {{Glossary("Registrable_domain", "registrierbare Domain")}} (eTLD+1) des Hostnamens zurück oder `null`, wenn keine registrierbare Domain ermittelt werden kann.

Die registrierbare Domain ist das öffentliche Suffix plus ein vorangestelltes Label. Zum Beispiel, für `"sub.example.co.uk"` ist die registrierbare Domain `"example.co.uk"`.

Standardmäßig gibt diese Methode `null` zurück für:

- IP-Adressen.
- Hostnamen, die selbst ein öffentliches Suffix sind (z. B. `"com"`).
- Hostnamen ohne bekanntes öffentliches Suffix (z. B. `"localhost"`).

Der `options` Parameter bietet Flags zum Ändern dieses Standardverhaltens.

## Syntax

```js-nolint
let domain = browser.publicSuffix.getDomain(hostname)
let domain = browser.publicSuffix.getDomain(hostname, options)
```

### Parameter

- `hostname`
  - : `string`. Der Hostname, aus dem die registrierbare Domain extrahiert werden soll.
- `options` {{optional_inline}}
  - : `object`. Optionen, die den zurückgegebenen Wert steuern.
    - `encoding` {{optional_inline}}
      - : {{WebExtAPIRef("publicSuffix.DomainEncoding")}}. Die Kodierung, die für den zurückgegebenen Domainnamen verwendet werden soll. Standardwert ist `"punycode"`.
    - `allowIPAddress` {{optional_inline}}
      - : `boolean`. Wenn `true` und `hostname` eine IP-Adresse ist, wird die IP-Adresse unverändert zurückgegeben. Standardwert ist `false`.
    - `allowPlainSuffix` {{optional_inline}}
      - : `boolean`. Wenn `true` und `hostname` ein bekanntes öffentliches Suffix ist, wird das Suffix unverändert zurückgegeben. Standardwert ist `false`.
    - `allowUnknownSuffix` {{optional_inline}}
      - : `boolean`. Wenn `true` und `hostname` kein bekanntes öffentliches Suffix hat, werden die letzten beiden Domain-Labels des Hostnamens zurückgegeben. Standardwert ist `false`.

### Rückgabewert

Ein `string`, der die registrierbare Domain von `hostname` enthält, oder `null`, wenn keine registrierbare Domain ermittelt werden kann.

Löst einen Fehler aus, wenn `hostname` kein gültiger Hostname ist.

## Beispiele

Die registrierbare Domain eines Hostnamens ermitteln:

```js
browser.publicSuffix.getDomain("sub.example.com"); // "example.com"
browser.publicSuffix.getDomain("sub.example.co.uk"); // "example.co.uk"
browser.publicSuffix.getDomain("user.github.io"); // "user.github.io"
browser.publicSuffix.getDomain("com"); // null (is itself a suffix)
browser.publicSuffix.getDomain("192.0.2.1"); // null (IP address)
browser.publicSuffix.getDomain("localhost"); // null (no known suffix)
```

Verwendung von `allowIPAddress`, um IP-Adressen unverändert zurückzugeben:

```js
browser.publicSuffix.getDomain("192.0.2.1", { allowIPAddress: true });
// "192.0.2.1"

browser.publicSuffix.getDomain("[2001:db8::1]", { allowIPAddress: true });
// "2001:db8::1"
```

Verwendung von `allowPlainSuffix`, um Hostnamen, die öffentliche Suffixe sind, zurückzugeben:

```js
browser.publicSuffix.getDomain("co.uk", { allowPlainSuffix: true });
// "co.uk"
```

Verwendung von `allowUnknownSuffix`, um mit privaten oder lokalen Domains umzugehen:

```js
browser.publicSuffix.getDomain("my-device.local", { allowUnknownSuffix: true });
// "my-device.local"

browser.publicSuffix.getDomain("host.intranet", { allowUnknownSuffix: true });
// "host.intranet"
```

Verwendung von `encoding: "display"` für internationalisierte Domainnamen:

```js
// "xn--nxasmq6b.com" is the punycode form of "βόλος.com"
browser.publicSuffix.getDomain("sub.xn--nxasmq6b.com", { encoding: "display" });
// "βόλος.com"

// Domains with confusable characters remain in punycode
// "xn--bs-red.com" has characters confusable with another script
browser.publicSuffix.getDomain("sub.xn--bs-red.com", { encoding: "display" });
// "xn--bs-red.com"
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
