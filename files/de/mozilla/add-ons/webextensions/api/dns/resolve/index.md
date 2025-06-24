---
title: dns.resolve()
slug: Mozilla/Add-ons/WebExtensions/API/dns/resolve
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Löst den angegebenen Hostnamen in einen DNS-Eintrag auf.

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
  - : `array` von `string`. Flags zur Änderung der Art und Weise, wie der Hostname aufgelöst wird. Ausgelassene Flags sind standardmäßig auf `false` gesetzt. Sie können null oder mehr der folgenden Flags übergeben:
    - `"allow_name_collisions"`: Erlaubt Namenskollisionsergebnisse, die normalerweise herausgefiltert werden.
    - `"bypass_cache"`: Unterdrückt den internen DNS-Lookup-Cache.
    - `"canonical_name"`: Der kanonische Name des angegebenen Hosts wird abgefragt.
    - `"disable_ipv4"`: Es werden nur IPv6-Adressen zurückgegeben.
    - `"disable_ipv6"`: Es werden nur IPv4-Adressen zurückgegeben.
    - `"disable_trr"`: Verhindert die Verwendung des Trusted Recursive Resolver (TRR) zur Auflösung des Hostnamens. Ein TRR ermöglicht die Auflösung von Hostnamen über einen dedizierten [DNS-over-HTTPS](https://datatracker.ietf.org/doc/html/draft-ietf-doh-dns-over-https-02) Server.
    - `"offline"`: Es werden nur Literale und zwischengespeicherte Einträge zurückgegeben.
    - `"priority_low"`: Die Anfrage wird mit niedrigerer Priorität behandelt. Wenn auch "priority_medium" angegeben wird, erhält die Anfrage mittlere Priorität.
    - `"priority_medium"`: Die Anfrage wird mit mittlerer Priorität behandelt. Wenn auch "priority_low" angegeben wird, erhält die Anfrage mittlere Priorität.
    - `"speculate"`: Gibt an, dass die Anfrage spekulativ ist. Spekulative Anfragen geben Fehler zurück, wenn Vorabrufen durch die Browsereinstellungen deaktiviert ist.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `DNSRecord`-Objekt erfüllt wird. Dieses Objekt kann die folgenden Eigenschaften enthalten:

- `addresses`
  - : `array` von `string`. Die IP-Adressen, die mit diesem DNS-Eintrag verknüpft sind.
- `canonicalName`
  - : `string`. Der kanonische Name für diesen Eintrag. Dies wird nur in der Antwort enthalten, wenn das `"canonical_name"`-Flag an `resolve()` übergeben wurde.
- `isTRR`
  - : `boolean`: `true`, wenn der Eintrag unter Verwendung eines Trusted Recursive Resolver (TRR) abgerufen wurde.

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
