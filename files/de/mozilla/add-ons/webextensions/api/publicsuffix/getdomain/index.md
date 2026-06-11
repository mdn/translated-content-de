---
title: publicSuffix.getDomain()
slug: Mozilla/Add-ons/WebExtensions/API/publicSuffix/getDomain
l10n:
  sourceCommit: 5054fb75bce0f095ed9ca9ad11dabde32eea5cb4
---

Gibt die {{Glossary("Registrable_domain", "registrable Domain")}} (eTLD+1) des Hostnamens zurück oder `null`, wenn keine registrable Domain ermittelt werden kann.

Die registrable Domain ist das öffentliche Suffix plus ein vorhergehendes Label. Zum Beispiel ist für `"sub.example.co.uk"` die registrable Domain `"example.co.uk"`.

Standardmäßig gibt diese Methode `null` zurück für:

- IP-Adressen.
- Hostnamen, die selbst ein öffentliches Suffix sind (z.B. `"com"`).
- Hostnamen ohne bekanntes öffentliches Suffix (z.B. `"localhost"`).

Der `options`-Parameter bietet Flags zur Änderung dieses Standardverhaltens.

## Syntax

```js-nolint
let domain = browser.publicSuffix.getDomain(hostname)
let domain = browser.publicSuffix.getDomain(hostname, options)
```

### Parameter

- `hostname`
  - : `string`. Der Hostname, aus dem die registrable Domain extrahiert werden soll.
- `options` {{optional_inline}}
  - : `object`. Optionen, die den zurückgegebenen Wert steuern.
    - `encoding` {{optional_inline}}
      - : {{WebExtAPIRef("publicSuffix.DomainEncoding")}}. Die Kodierung, die für den zurückgegebenen Domainnamen verwendet werden soll. Standardmäßig `"punycode"`.
    - `allowIPAddress` {{optional_inline}}
      - : `boolean`. Wenn `true` und `hostname` eine IP-Adresse ist, wird die IP-Adresse unverändert zurückgegeben. Standardmäßig `false`.
    - `allowPlainSuffix` {{optional_inline}}
      - : `boolean`. Wenn `true` und `hostname` ein bekanntes öffentliches Suffix ist, wird das Suffix unverändert zurückgegeben. Standardmäßig `false`.
    - `allowUnknownSuffix` {{optional_inline}}
      - : `boolean`. Wenn `true` und `hostname` kein bekanntes öffentliches Suffix hat, werden die letzten beiden Domain-Labels des Hostnamens zurückgegeben. Standardmäßig `false`.

### Rückgabewert

Ein `string`, der die registrable Domain von `hostname` enthält, oder `null`, wenn keine registrable Domain ermittelt werden kann.

Wirft einen Fehler, wenn `hostname` kein gültiger Hostname ist.

## Beispiele

Registrable Domain eines Hostnamens ermitteln:

```js
console.log(browser.publicSuffix.getDomain("sub.example.com")); // "example.com"
console.log(browser.publicSuffix.getDomain("sub.example.co.uk")); // "example.co.uk"
console.log(browser.publicSuffix.getDomain("user.github.io")); // "user.github.io"
console.log(browser.publicSuffix.getDomain("com")); // null (is itself a suffix)
console.log(browser.publicSuffix.getDomain("192.0.2.1")); // null (IP address)
console.log(browser.publicSuffix.getDomain("localhost")); // null (no known suffix)
```

Verwendung von `allowIPAddress`, um IP-Adressen unverändert zurückzugeben:

```js
console.log(
  browser.publicSuffix.getDomain("192.0.2.1", { allowIPAddress: true }),
); // "192.0.2.1"
console.log(
  browser.publicSuffix.getDomain("[2001:db8::1]", { allowIPAddress: true }),
); // "2001:db8::1"
```

Verwendung von `allowPlainSuffix`, um Hostnamen, die öffentliche Suffixe sind, zurückzugeben:

```js
console.log(
  browser.publicSuffix.getDomain("co.uk", { allowPlainSuffix: true }),
); // "co.uk"
```

Verwendung von `allowUnknownSuffix`, um private oder lokale Domains zu behandeln:

```js
console.log(
  browser.publicSuffix.getDomain("mydevice.local", {
    allowUnknownSuffix: true,
  }),
); // "mydevice.local"
console.log(
  browser.publicSuffix.getDomain("host.intranet", { allowUnknownSuffix: true }),
); // "host.intranet"
```

Verwendung von `encoding: "display"` für internationalisierte Domainnamen:

```js
// "xn--nxasmq6b.com" is the punycode form of "βόλος.com"
console.log(
  browser.publicSuffix.getDomain("sub.xn--nxasmq6b.com", {
    encoding: "display",
  }),
); // "βόλος.com"

// Domains with confusable characters remain in punycode
// "xn--bs-red.com" has characters confusable with another script
console.log(
  browser.publicSuffix.getDomain("sub.xn--bs-red.com", {
    encoding: "display",
  }),
); // "xn--bs-red.com"
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
