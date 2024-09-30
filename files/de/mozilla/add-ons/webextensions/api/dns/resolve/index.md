---
title: dns.resolve()
slug: Mozilla/Add-ons/WebExtensions/API/dns/resolve
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Löst den angegebenen Hostnamen zu einem DNS-Eintrag auf.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let resolving = browser.dns.resolve(
  hostname,    // string
  flags        // array of string
)
```

### Parameter

- `hostname`
  - : `string`. Der aufzulösende Hostname.
- `flags` {{optional_inline}}

  - : `array` von `string`. Flags, um die Art der Hostnamenauflösung zu ändern. Nicht angegebene Flags werden standardmäßig auf `false` gesetzt. Sie können null oder mehr der folgenden Flags übergeben:

    - `"allow_name_collisions"`: Erlaubt Namenkollisionsergebnisse, die normalerweise herausgefiltert werden.
    - `"bypass_cache"`: Unterdrückt den internen DNS-Cache.
    - `"canonical_name"`: Der kanonische Name des angegebenen Hosts wird abgefragt.
    - `"disable_ipv4"`: Es werden nur IPv6-Adressen zurückgegeben.
    - `"disable_ipv6"`: Es werden nur IPv4-Adressen zurückgegeben.
    - `"disable_trr"`: Verwenden Sie keinen Trusted Recursive Resolver (TRR) zur Auflösung des Hostnamens. Ein TRR ermöglicht die Auflösung von Hostnamen über einen dedizierten [DNS-over-HTTPS](https://datatracker.ietf.org/doc/html/draft-ietf-doh-dns-over-https-02)-Server.
    - `"offline"`: Es werden nur Literale und Einträge aus dem Cache zurückgegeben.
    - `"priority_low"`: Die Anfrage erhält eine niedrigere Priorität. Wenn "priority_medium" ebenfalls angegeben wird, erhält die Abfrage mittlere Priorität.
    - `"priority_medium"`: Die Anfrage erhält mittlere Priorität. Wenn "priority_low" ebenfalls angegeben wird, erhält die Abfrage mittlere Priorität.
    - `"speculate"`: Gibt an, dass die Anfrage spekulativ ist. Spekulative Anfragen führen zu Fehlern, wenn das Vorabrufen durch die Konfiguration des Browsers deaktiviert ist.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `DNSRecord`-Objekt erfüllt wird. Dieses Objekt kann die folgenden Eigenschaften enthalten:

- `addresses`
  - : `array` von `string`. Die mit diesem DNS-Eintrag verknüpften IP-Adressen.
- `canonicalName`
  - : `string`. Der kanonische Name für diesen Eintrag. Dies ist nur in der Antwort enthalten, wenn das Flag `"canonical_name"` an `resolve()` übergeben wurde.
- `isTRR`
  - : `boolean`: `true`, wenn der Eintrag mit einem Trusted Recursive Resolver (TRR) abgerufen wurde.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
function resolved(record) {
  console.log(record.addresses);
}

let resolving = browser.dns.resolve("example.com");
resolving.then(resolved);

// > e.g. Array [ "192.0.2.172" ]
```

Umgehen Sie den Cache und fragen Sie nach dem kanonischen Namen:

```js
function resolved(record) {
  console.log(record.canonicalName);
  console.log(record.addresses);
}

let resolving = browser.dns.resolve("developer.mozilla.org", [
  "bypass_cache",
  "canonical_name",
]);
resolving.then(resolved);

// > e.g. xyz.us-west-2.elb.amazonaws.com
// > e.g. Array [ "192.0.2.172", "198.51.100.45" ]
```

{{WebExtExamples}}
