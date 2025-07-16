---
title: dns.resolve()
slug: Mozilla/Add-ons/WebExtensions/API/dns/resolve
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Löst den angegebenen Hostnamen zu einem DNS-Datensatz auf.

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
  - : `array` von `string`. Flags, um die Art und Weise zu ändern, wie der Hostname aufgelöst wird. Alle ausgelassenen Flags sind standardmäßig `false`. Sie können Null oder mehr der folgenden Flags übergeben:
    - `"allow_name_collisions"`: Erlaubt Ergebnissen von Namenskollisionen, die normalerweise herausgefiltert werden.
    - `"bypass_cache"`: Unterdrückt den internen DNS-Cache.
    - `"canonical_name"`: Der kanonische Name des angegebenen Hosts wird abgefragt.
    - `"disable_ipv4"`: Es werden nur IPv6-Adressen zurückgegeben.
    - `"disable_ipv6"`: Es werden nur IPv4-Adressen zurückgegeben.
    - `"disable_trr"`: Vermeiden Sie die Verwendung des Trusted Recursive Resolver (TRR), um den Hostnamen aufzulösen. Ein TRR ermöglicht das Auflösen von Hostnamen mithilfe eines dedizierten [DNS-over-HTTPS](https://datatracker.ietf.org/doc/html/draft-ietf-doh-dns-over-https-02)-Servers.
    - `"offline"`: Es werden nur Literale und zwischengespeicherte Einträge zurückgegeben.
    - `"priority_low"`: Der Anfrage wird eine niedrigere Priorität zugewiesen. Wenn "priority_medium" ebenfalls angegeben ist, erhält die Abfrage mittlere Priorität.
    - `"priority_medium"`: Der Anfrage wird eine mittlere Priorität zugewiesen. Wenn "priority_low" ebenfalls angegeben ist, erhält die Abfrage mittlere Priorität.
    - `"speculate"`: Gibt an, dass die Anfrage spekulativ ist. Spekulative Anfragen führen zu Fehlern, wenn das Vorladen durch die Konfiguration des Browsers deaktiviert ist.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `DNSRecord`-Objekt erfüllt wird. Dieses Objekt kann die folgenden Eigenschaften enthalten:

- `addresses`
  - : `array` von `string`. Die IP-Adressen, die mit diesem DNS-Datensatz verknüpft sind.
- `canonicalName`
  - : `string`. Der kanonische Name für diesen Datensatz. Dies ist nur in der Antwort enthalten, wenn das `"canonical_name"`-Flag an `resolve()` übergeben wurde.
- `isTRR`
  - : `boolean`: `true`, wenn der Datensatz mit einem Trusted Recursive Resolver (TRR) abgerufen wurde.

## Beispiele

```js
function resolved(record) {
  console.log(record.addresses);
}

let resolving = browser.dns.resolve("example.com");
resolving.then(resolved);

// > e.g. Array [ "192.0.2.172" ]
```

Den Cache umgehen und nach dem kanonischen Namen fragen:

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

## Browser-Kompatibilität

{{Compat}}
