---
title: dns.resolve()
slug: Mozilla/Add-ons/WebExtensions/API/dns/resolve
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

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
  - : `array` von `string`. Flags zur Modifizierung der Art und Weise, wie der Hostname aufgelöst wird. Alle nicht angegebenen Flags haben standardmäßig den Wert `false`. Sie können null oder mehr der folgenden Flags übergeben:
    - `"allow_name_collisions"`: Erlaubt Namenskollisionsergebnisse, die normalerweise herausgefiltert werden.
    - `"bypass_cache"`: Unterdrückt den internen DNS-Cache.
    - `"canonical_name"`: Der kanonische Name des angegebenen Hosts wird abgefragt.
    - `"disable_ipv4"`: Es werden nur IPv6-Adressen zurückgegeben.
    - `"disable_ipv6"`: Es werden nur IPv4-Adressen zurückgegeben.
    - `"disable_trr"`: Verwenden Sie nicht den Trusted Recursive Resolver (TRR) zur Auflösung des Hostnamens. Ein TRR ermöglicht die Auflösung von Hostnamen mit einem dedizierten [DNS-over-HTTPS](https://datatracker.ietf.org/doc/html/draft-ietf-doh-dns-over-https-02)-Server.
    - `"offline"`: Es werden nur Literale und gecachte Einträge zurückgegeben.
    - `"priority_low"`: Die Anfrage erhält eine niedrigere Priorität. Wenn auch "priority_medium" angegeben ist, erhält die Abfrage mittlere Priorität.
    - `"priority_medium"`: Die Anfrage erhält mittlere Priorität. Wenn auch "priority_low" angegeben ist, erhält die Abfrage mittlere Priorität.
    - `"speculate"`: Gibt an, dass die Anfrage spekulativ ist. Spekulative Anfragen liefern Fehler, wenn das Vorabrufen von der Konfiguration des Browsers deaktiviert ist.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `DNSRecord`-Objekt erfüllt wird. Dieses Objekt kann die folgenden Eigenschaften enthalten:

- `addresses`
  - : `array` von `string`. Die mit diesem DNS-Eintrag verknüpften IP-Adressen.
- `canonicalName`
  - : `string`. Der kanonische Name für diesen Eintrag. Dies ist nur in der Antwort enthalten, wenn das `"canonical_name"`-Flag an `resolve()` übergeben wurde.
- `isTRR`
  - : `boolean`: `true`, wenn der Eintrag mit einem Trusted Recursive Resolver (TRR) abgerufen wurde.

## Beispiele

```js
function resolved(record) {
  console.log(record.addresses);
}

let resolving = browser.dns.resolve("example.com");
resolving.then(resolved);

// > e.g. Array [ "192.0.2.172" ]
```

Überspringen Sie den Cache und fragen Sie den kanonischen Namen ab:

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
