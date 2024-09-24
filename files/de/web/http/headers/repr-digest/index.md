---
title: Repr-Digest
slug: Web/HTTP/Headers/Repr-Digest
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der **`Repr-Digest`** Antwort- oder Anfrage-Header liefert einen {{Glossary("digest")}} der [ausgewählten Repräsentation](https://www.rfc-editor.org/rfc/rfc9110#section-6.4) der Zielressource. Er ist unverändert unter anderem bei {{HTTPHeader("Content-Encoding")}} oder {{HTTPHeader("Content-Range")}}, welche den {{HTTPHeader("Content-Digest")}} beeinflussen. Darüber hinaus kann [Content Negotiation](/de/docs/Web/HTTP/Content_negotiation) zu unterschiedlichen ausgewählten Repräsentationen mit unterschiedlichen Repräsentations-Digests führen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

`Repr-Digest` beschreibt ein [RFC8941 Wörterbuch](https://www.rfc-editor.org/rfc/rfc8941#section-3.2), wobei die Schlüssel die Namen der Digest-Algorithmen und die Werte der Digest in Bytes sind (oder ein Ganzzahl-Digest für veraltete Digest-Algorithmen).

> [!NOTE]
> Im Gegensatz zu früheren Entwürfen der Spezifikation sind die standard-base64-kodierten Digest-Bytes in Doppelpunkten (`:`, ASCII 0x3A) eingeschlossen, als Teil der [Wörterbuch-Syntax](https://www.rfc-editor.org/rfc/rfc8941#name-byte-sequences).

## Direktiven

### Digest-Algorithmen

Nur zwei Digest-Algorithmen sind derzeit registriert und nicht als unsicher angesehen: `sha-512` und `sha-256`.

Die registrierten unsicheren Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.

Die Verwendung von Digest-Algorithmen, die als unsicher gelten, wird nicht empfohlen, da Kollisionen realistisch erzwungen werden können, was die Nützlichkeit des Digests schwächt. Es sei denn, Sie arbeiten mit Altsystemen (was unwahrscheinlich ist, da die meisten das alte {{HTTPHeader("Digest")}}-Header erwarten und diese Spezifikation nicht verstehen werden), sollten Sie in Erwägung ziehen, keinen `Repr-Digest` zu senden, anstatt einen unter Verwendung eines unsicheren Digest-Algorithmus zu senden.

## Beispiele

### HTTP-Antwort, bei der `Repr-Digest` und `Content-Digest` übereinstimmen

Ein HTTP-Server kann Inhalte senden, deren Oktette den Oktetten der ausgewählten Repräsentation entsprechen:

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

### HTTP-Antworten, bei denen `Repr-Digest` und `Content-Digest` divergieren

Ein statischer Dateiserver kann jedoch eine HTML-Seite komprimieren, was zu unterschiedlichen Werten der {{HTTPHeader("Content-Digest")}} und `Repr-Digest` Header führt:

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

### Erfolgreiche HTTP-Anfrage und -Antwort mit Verwendung von `Want-Repr-Digest`, `Repr-Digest` und `Content-Digest`

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

### Erfolgslose HTTP-Anfrage und -Antwort mit Verwendung von `Repr-Digest`

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

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Content-Encoding")}}
