---
title: publicSuffix.getDomain()
slug: Mozilla/Add-ons/WebExtensions/API/publicSuffix/getDomain
l10n:
  sourceCommit: b8ffa5128ed5afe5f76b8936723f91d86b8fc7df
---

Gibt die {{Glossary("Registrable_domain", "registrierbare Domäne")}} (eTLD+1) des Hostnamens zurück oder `null`, falls keine registrierbare Domäne ermittelt werden kann.

Die registrierbare Domäne besteht aus dem öffentlichen Suffix plus einem vorangehenden Label. Zum Beispiel ist für `"sub.example.co.uk"` die registrierbare Domäne `"example.co.uk"`.

Standardmäßig gibt diese Methode `null` zurück für:

- IP-Adressen.
- Hostnamen, die selbst ein öffentliches Suffix sind (z.B. `"com"`).
- Hostnamen ohne bekanntes öffentliches Suffix (z.B. `"localhost"`).

Der `options` Parameter bietet Flags, um dieses Standardverhalten zu ändern.

## Syntax

```js-nolint
let domain = browser.publicSuffix.getDomain(hostname)
let domain = browser.publicSuffix.getDomain(hostname, options)
```

### Parameter

- `hostname`
  - : `string`. Der Hostname, aus dem die registrierbare Domäne extrahiert werden soll.
- `options` {{optional_inline}}
  - : `object`. Optionen, die den zurückgegebenen Wert steuern.
    - `encoding` {{optional_inline}}
      - : {{WebExtAPIRef("publicSuffix.DomainEncoding")}}. Die Kodierung, die für den zurückgegebenen Domänennamen verwendet werden soll. Standard ist `"punycode"`.
    - `allowIPAddress` {{optional_inline}}
      - : `boolean`. Wenn `true` und `hostname` eine IP-Adresse ist, wird die IP-Adresse unverändert zurückgegeben. Standard ist `false`.
    - `allowPlainSuffix` {{optional_inline}}
      - : `boolean`. Wenn `true` und `hostname` ein bekanntes öffentliches Suffix ist, wird das Suffix unverändert zurückgegeben. Standard ist `false`.
    - `allowUnknownSuffix` {{optional_inline}}
      - : `boolean`. Wenn `true` und `hostname` kein bekanntes öffentliches Suffix hat, werden die letzten beiden Domain-Labels des Hostnamens zurückgegeben. Standard ist `false`.

### Rückgabewert

Ein `string`, der die registrierbare Domäne von `hostname` enthält, oder `null`, falls keine registrierbare Domäne ermittelt werden kann.

Wirft einen Fehler, wenn `hostname` kein gültiger Hostname ist.

## Beispiele

Ermitteln Sie die registrierbare Domäne eines Hostnamens:

```js
console.log(browser.publicSuffix.getDomain("sub.example.com")); // "example.com"
console.log(browser.publicSuffix.getDomain("sub.example.co.uk")); // "example.co.uk"
console.log(browser.publicSuffix.getDomain("user.github.io")); // "user.github.io"
console.log(browser.publicSuffix.getDomain("com")); // null (is itself a suffix)
console.log(browser.publicSuffix.getDomain("192.0.2.1")); // null (IP address)
console.log(browser.publicSuffix.getDomain("localhost")); // null (no known suffix)
```

Verwenden von `allowIPAddress`, um IP-Adressen unverändert zurückzugeben:

```js
console.log(
  browser.publicSuffix.getDomain("192.0.2.1", { allowIPAddress: true }),
); // "192.0.2.1"
console.log(
  browser.publicSuffix.getDomain("[2001:db8::1]", { allowIPAddress: true }),
); // "2001:db8::1"
```

Verwenden von `allowPlainSuffix`, um Hostnamen, die öffentliche Suffixe sind, zurückzugeben:

```js
console.log(
  browser.publicSuffix.getDomain("co.uk", { allowPlainSuffix: true }),
); // "co.uk"
```

Verwenden von `allowUnknownSuffix`, um private oder lokale Domänen zu verarbeiten:

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

Verwenden von `encoding: "display"` für internationalisierte Domain-Namen:

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
