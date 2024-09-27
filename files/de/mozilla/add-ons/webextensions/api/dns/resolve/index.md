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

  - : `array` von `string`. Flags, um die Art und Weise der Auflösung des Hostnamens zu modifizieren. Jegliche ausgelassenen Flags haben standardmäßig den Wert `false`. Sie können null oder mehr der folgenden Flags übergeben:

    - `"allow_name_collisions"`: Erlaubt Namenskollisionen, die normalerweise herausgefiltert werden.
    - `"bypass_cache"`: Unterdrückt den internen DNS-Lookup-Cache.
    - `"canonical_name"`: Der kanonische Name des angegebenen Hosts wird abgefragt.
    - `"disable_ipv4"`: Es werden nur IPv6-Adressen zurückgegeben.
    - `"disable_ipv6"`: Es werden nur IPv4-Adressen zurückgegeben.
    - `"disable_trr"`: Verwenden Sie keinen Trusted Recursive Resolver (TRR) zur Auflösung des Hostnamens. Ein TRR ermöglicht die Auflösung von Hostnamen über einen dedizierten [DNS-over-HTTPS](https://datatracker.ietf.org/doc/html/draft-ietf-doh-dns-over-https-02) Server.
    - `"offline"`: Es werden nur Literale und gecachte Einträge zurückgegeben.
    - `"priority_low"`: Die Anfrage erhält eine niedrigere Priorität. Wenn "priority_medium" ebenfalls angegeben wird, erhält die Abfrage mittlere Priorität.
    - `"priority_medium"`: Die Anfrage erhält mittlere Priorität. Wenn "priority_low" ebenfalls angegeben wird, erhält die Abfrage mittlere Priorität.
    - `"speculate"`: Gibt an, dass die Anfrage spekulativ ist. Spekulative Anfragen geben Fehler zurück, wenn das Vorabrufen durch die Konfiguration des Browsers deaktiviert ist.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `DNSRecord`-Objekt erfüllt wird. Dieses Objekt kann folgende Eigenschaften enthalten:

- `addresses`
  - : `array` von `string`. Die mit diesem DNS-Eintrag verbundenen IP-Adressen.
- `canonicalName`
  - : `string`. Der kanonische Name für diesen Eintrag. Dies wird nur in die Antwort eingeschlossen, wenn das Flag `"canonical_name"` an `resolve()` übergeben wurde.
- `isTRR`
  - : `boolean`: `true`, wenn der Eintrag unter Verwendung eines Trusted Recursive Resolvers (TRR) abgerufen wurde.

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
