---
title: Repr-Digest
slug: Web/HTTP/Headers/Repr-Digest
l10n:
  sourceCommit: 488e1953f44909cbeb419f0e2133cc28ca069f84
---

{{HTTPSidebar}}

Der **`Repr-Digest`**-Antwort- oder Anforderungs-Header bietet einen {{Glossary("digest", "Digest")}} der [ausgewählten Repräsentation](https://www.rfc-editor.org/rfc/rfc9110#section-6.4) der Zielressource. Er ist unveränderlich unter anderem bei {{HTTPHeader("Content-Encoding")}} oder {{HTTPHeader("Content-Range")}}, die den {{HTTPHeader("Content-Digest")}} beeinflussen. Darüber hinaus kann die [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation) zu verschiedenen ausgewählten Repräsentationen mit unterschiedlichen Repräsentations-Digests führen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Repräsentations-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

`Repr-Digest` beschreibt ein [RFC8941-Dictionary](https://www.rfc-editor.org/rfc/rfc8941#section-3.2) mit seinen Schlüsseln als Namen von Digest-Algorithmen und seinen Werten als Digest in Bytes (oder als Integer-Digest für Legacy-Digest-Algorithmen).

> [!NOTE]
> Im Gegensatz zu früheren Entwürfen der Spezifikation sind die standard-base64-kodierten Digest-Bytes in Doppelpunkte (`:`, ASCII 0x3A) eingebettet als Teil der [Dictionary-Syntax](https://www.rfc-editor.org/rfc/rfc8941#name-byte-sequences).

## Direktiven

### Digest-Algorithmen

Nur zwei Digest-Algorithmen sind derzeit registriert und gelten nicht als unsicher: `sha-512` und `sha-256`.

Die registrierten unsicheren Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.

Die Verwendung von Digest-Algorithmen, die als unsicher gelten, wird nicht empfohlen, da Kollisionen realistisch herbeigeführt werden können, wodurch der Nutzen des Digests geschwächt wird. Es sei denn, man arbeitet mit Altsystemen (was unwahrscheinlich ist, da die meisten das Legacy {{HTTPHeader("Digest")}}-Header erwarten und diese Spezifikation nicht verstehen), sollte man erwägen, keinen `Repr-Digest` zu senden, anstatt einen mit einem unsicheren Digest-Algorithmus zu verwenden.

## Beispiele

### HTTP-Antwort, bei der `Repr-Digest` und `Content-Digest` übereinstimmen

Ein HTTP-Server kann Inhaltsoktetts senden, die den Oktetts der ausgewählten Repräsentation entsprechen:

```http
...
Repr-Digest: sha-256=:AEGPTgUMw5e96wxZuDtpfm23RBU3nFwtgY5fw4NYORo=:
Content-Digest: sha-256=:AEGPTgUMw5e96wxZuDtpfm23RBU3nFwtgY5fw4NYORo=:
...
Content-Type: text/yaml
Content-Encoding: identity
Content-Length: 38054
Content-Range: 0-38053/38054
...
```

### HTTP-Antworten, bei denen `Repr-Digest` und `Content-Digest` abweichen

Ein statischer Datei-Server kann jedoch wählen, eine HTML-Seite zu komprimieren, was zu unterschiedlichen Werten der {{HTTPHeader("Content-Digest")}}- und `Repr-Digest`-Header führt:

```http
...
Repr-Digest: sha-256=:AEGPTgUMw5e96wxZuDtpfm23RBU3nFwtgY5fw4NYORo=:, sha-512=:U59TCCaZPA9Qio3CzHJVAgDnIAut53t5Sgkj2Gv4BvDd0b+OX9QpIdgWkzdXLmBsmvBrf3t5PBt+UrVK6k5dkw==:
Content-Digest: sha-256=:293wcr5IoFAsDCzdoDXR1Qppgf2yxOPO1bvQ3nZQtuI=:, unixsum=54809
...
Content-Type: text/html; charset=utf-8
Content-Encoding: br
...

...
```

```http
...
Repr-Digest: sha-256=:AEGPTgUMw5e96wxZuDtpfm23RBU3nFwtgY5fw4NYORo=:, sha-512=:U59TCCaZPA9Qio3CzHJVAgDnIAut53t5Sgkj2Gv4BvDd0b+OX9QpIdgWkzdXLmBsmvBrf3t5PBt+UrVK6k5dkw==:
Content-Digest: sha-256=:rv9Jivc4TmcacLUshzN3OdX7Hz+ORnQRaiTaIKZQ0zk=:
...
Content-Type: text/html; charset=utf-8
Content-Encoding: deflate, deflate, deflate
...

...
```

### Erfolgreiche HTTP-Anfrage-Antwort mit Verwendung von `Want-Repr-Digest`, `Repr-Digest` und `Content-Digest`

```http
PUT /api/transact HTTP/1.1
Want-Repr-Digest: sha-256=8
Content-Type: text/json
...
```

```http
HTTP/1.1 201 Created
Repr-Digest: sha-256=:W8oN3H3CmE/CBpV6ZPNozV2AIDzzQpWL7CCOXyDyDzI=:
Content-Encoding: br
Content-Digest: sha-256=:2IBI7hQn83oTCgB3Z/6apOl91WGoctRfRj/F9gkvVo8=:
...
```

### Erfolgloser HTTP-Anfrage-Antwort mit Verwendung von `Repr-Digest`

```http
GET /api/last-transaction HTTP/1.1
Accept: text/json
Repr-Digest: sha-256=:2IBI7hQn83oTCgB3Z/6apOl91WGoctRfRj/F9gkvVo8=:
...
```

```http
HTTP/1.1 406 Not Acceptable
Repr-Digest: sha-256=:W8oN3H3CmE/CBpV6ZPNozV2AIDzzQpWL7CCOXyDyDzI=:
...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dieser Header hat keine spezifikationsdefinierte Browser-Integration ("Browser-Kompatibilität" ist nicht anwendbar).
Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Content-Encoding")}}
