---
title: publicSuffix.getDomain()
slug: Mozilla/Add-ons/WebExtensions/API/publicSuffix/getDomain
l10n:
  sourceCommit: 79dc4b2dfc4d0564581cc4e417e5a2cfdd64bbd6
---

Gibt die {{Glossary("Registrable_domain", "registrierbare Domain")}} (eTLD+1) des Hostnamens zurück oder `null`, wenn keine registrierbare Domain bestimmt werden kann.

Die registrierbare Domain ist das öffentliche Suffix plus ein vorausgehendes Label. Zum Beispiel ist für `"sub.example.co.uk"` die registrierbare Domain `"example.co.uk"`.

Standardmäßig gibt diese Methode `null` zurück für:

- IP-Adressen.
- Hostnamen, die selbst ein öffentliches Suffix sind (z. B. `"com"`).
- Hostnamen ohne bekanntes öffentliches Suffix (z. B. `"localhost"`).

Der `options` Parameter bietet Flags, um dieses Standardverhalten zu ändern.

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
      - : {{WebExtAPIRef("publicSuffix.DomainEncoding")}}. Die zu verwendende Kodierung für den zurückgegebenen Domainnamen. Standard ist `"punycode"`.
    - `allowIPAddress` {{optional_inline}}
      - : `boolean`. Wenn `true` und `hostname` eine IP-Adresse ist, wird die IP-Adresse unverändert zurückgegeben. Standard ist `false`.
    - `allowPlainSuffix` {{optional_inline}}
      - : `boolean`. Wenn `true` und `hostname` ein bekanntes öffentliches Suffix ist, wird das Suffix unverändert zurückgegeben. Standard ist `false`.
    - `allowUnknownSuffix` {{optional_inline}}
      - : `boolean`. Wenn `true` und `hostname` kein bekanntes öffentliches Suffix hat, werden die letzten beiden Domain-Labels des Hostnamens zurückgegeben. Standard ist `false`.

### Rückgabewert

Ein `string`, der die registrierbare Domain von `hostname` enthält, oder `null`, wenn keine registrierbare Domain bestimmt werden kann.

Es wird ein Fehler ausgelöst, wenn `hostname` kein gültiger Hostname ist.

## Beispiele

Ermitteln Sie die registrierbare Domain eines Hostnamens:

```js
browser.publicSuffix.getDomain("sub.example.com"); // "example.com"
browser.publicSuffix.getDomain("sub.example.co.uk"); // "example.co.uk"
browser.publicSuffix.getDomain("user.github.io"); // "user.github.io"
browser.publicSuffix.getDomain("com"); // null (is itself a suffix)
browser.publicSuffix.getDomain("192.0.2.1"); // null (IP address)
browser.publicSuffix.getDomain("localhost"); // null (no known suffix)
```

Verwenden von `allowIPAddress`, um IP-Adressen unverändert zurückzugeben:

```js
browser.publicSuffix.getDomain("192.0.2.1", { allowIPAddress: true });
// "192.0.2.1"

browser.publicSuffix.getDomain("[2001:db8::1]", { allowIPAddress: true });
// "2001:db8::1"
```

Verwenden von `allowPlainSuffix`, um Hostnamen zurückzugeben, die öffentliche Suffixe sind:

```js
browser.publicSuffix.getDomain("co.uk", { allowPlainSuffix: true });
// "co.uk"
```

Verwenden von `allowUnknownSuffix` zur Behandlung privater oder lokaler Domains:

```js
browser.publicSuffix.getDomain("mydevice.local", { allowUnknownSuffix: true });
// "mydevice.local"

browser.publicSuffix.getDomain("host.intranet", { allowUnknownSuffix: true });
// "host.intranet"
```

Verwenden von `encoding: "display"` für internationalisierte Domainnamen:

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
