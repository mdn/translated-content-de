---
title: Repr-Digest header
short-title: Repr-Digest
slug: Web/HTTP/Reference/Headers/Repr-Digest
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Repr-Digest`** {{Glossary("Request_header", "Request-Header")}} und {{Glossary("Response_header", "Response-Header")}} bietet eine {{Glossary("hash_function", "Digest")}} der ausgewählten Repräsentation der Zielressource.
Er kann verwendet werden, um die Integrität der gesamten ausgewählten Repräsentation zu validieren, sobald sie empfangen und rekonstruiert wurde.

Die _ausgewählte Repräsentation_ ist das spezifische Format einer Ressource, das durch [Content Negotiation](/de/docs/Web/HTTP/Guides/Content_negotiation) ausgewählt wird.
Details zur Repräsentation können aus {{Glossary("Representation_header", "Repräsentations-Headern")}} wie {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Type")}} und {{HTTPHeader("Content-Encoding")}} ermittelt werden.

Der Repräsentations-Digest bezieht sich auf die gesamte Repräsentation und nicht auf die Kodierung oder das Chunking der Nachrichten, die zum Senden verwendet werden.
Ein {{HTTPHeader("Content-Digest")}} bezieht sich auf den Inhalt einer spezifischen Nachricht und hat unterschiedliche Werte, basierend auf der {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}} jeder Nachricht.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Repräsentations-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Repr-Digest: <digest-algorithm>=<digest-value>

// Multiple digest algorithms
Repr-Digest: <digest-algorithm>=<digest-value>,…,<digest-algorithmN>=<digest-valueN>
```

## Direktiven

- `<digest-algorithm>`
  - : Der Algorithmus, der zum Erstellen eines Digests der Repräsentation verwendet wird.
    Nur zwei registrierte Digest-Algorithmen werden als sicher angesehen: `sha-512` und `sha-256`.
    Die unsicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<digest-value>`
  - : Der Digest in Bytes der Repräsentation unter Verwendung des `<digest-algorithm>`.
    Die Wahl des Digest-Algorithmus bestimmt auch die zu verwendende Kodierung: `sha-512` und `sha-256` verwenden {{Glossary("base64", "Base64")}}-Kodierung, während einige veraltete Digest-Algorithmen wie `unixsum` eine Dezimalzahl verwenden.
    Im Gegensatz zu früheren Entwürfen der Spezifikation sind die standard-base64-kodierten Digest-Bytes in Doppelpunkten (`:`, ASCII 0x3A) als Teil der [Wörterbuch-Syntax](https://www.rfc-editor.org/rfc/rfc8941#name-byte-sequences) eingeschlossen.

Die Verwendung unsicherer Digest-Algorithmen wird nicht empfohlen, da Kollisionen realistisch erzwungen werden können, was die Nützlichkeit des Digests schwächt.
Außer bei der Arbeit mit veralteten Systemen (was unwahrscheinlich ist, da die meisten den veralteten `Digest`-Header erwarten und diese Spezifikation nicht verstehen), sollten Sie erwägen, einen `Repr-Digest` auszulassen, anstatt einen mit einem unsicheren Digest-Algorithmus einzubeziehen.

## Beschreibung

Ein `Digest`-Header wurde in früheren Spezifikationen definiert, erwies sich jedoch als problematisch, da der Anwendungsbereich des Digests unklar war.
Es war insbesondere schwierig zu unterscheiden, ob ein Digest auf die gesamte Ressourcen-Repräsentation oder auf den spezifischen Inhalt einer HTTP-Nachricht angewendet wurde.
Daher wurden zwei separate Header spezifiziert (`Content-Digest` und `Repr-Digest`), um die Inhalte von HTTP-Nachrichten und die Digest von Ressourcenrepräsentationen zu vermitteln.

## Beispiele

### User-Agent, der einen Repr-Digest in Requests sendet

Im folgenden Beispiel sendet ein User-Agent einen Digest des Nachrichteninhalts unter Verwendung von SHA-512.
Es werden sowohl ein `Content-Digest` als auch ein `Repr-Digest` gesendet, die sich aufgrund der `Content-Encoding` unterscheiden:

```http
POST /bank_transfer HTTP/1.1
Host: example.com
Content-Encoding: zstd
Content-Digest: sha-512=:ABC…=:
Repr-Digest: sha-512=:DEF…=:

{
 "recipient": "Alex",
 "amount": 900000000
}
```

Der Server kann einen Digest des empfangenen Inhalts berechnen und das Ergebnis mit den `Content-Digest`- oder `Repr-Digest`-Headern vergleichen, um die Integrität der Nachricht zu validieren.
In Anfragen wie dem obigen Beispiel ist der `Repr-Digest` für den Server nützlicher, da er über die decodierte Repräsentation berechnet wird und in verschiedenen Szenarien konsistenter wäre.

### HTTP-Antwort, bei der `Repr-Digest` und `Content-Digest` übereinstimmen

Ein HTTP-Server kann die gesamte Repräsentation unverändert in einer einzigen Nachricht senden.
In diesem Fall haben `Repr-Digest` und `Content-Digest` gleiche Werte für die gleichen Digest-Algorithmen:

```http
…
Repr-Digest: sha-256=:AEGPTgUMw5e96wxZuDtpfm23RBU3nFwtgY5fw4NYORo=:
Content-Digest: sha-256=:AEGPTgUMw5e96wxZuDtpfm23RBU3nFwtgY5fw4NYORo=:
…
Content-Type: text/yaml
Content-Encoding: br
Content-Length: 38054
Content-Range: 0-38053/38054
…

[message body]
```

### HTTP-Antworten, bei denen `Repr-Digest` und `Content-Digest` auseinanderfallen

Ein Server kann den Inhalt zum Senden komprimieren.
In diesem Fall hängt der {{HTTPHeader("Content-Digest")}} von der {{HTTPHeader("Content-Encoding")}} ab und hat daher einen anderen Wert als der `Repr-Digest`-Header in einer Antwort:

```http
…
Repr-Digest: sha-256=:AEGPTgUMw5e96wxZuDtpfm23RBU3nFwtgY5fw4NYORo=:, sha-512=:U59TCCaZPA9Qio3CzHJVAgDnIAut53t5Sgkj2Gv4BvDd0b+OX9QpIdgWkzdXLmBsmvBrf3t5PBt+UrVK6k5dkw==:
Content-Digest: sha-256=:293wcr5IoFAsDCzdoDXR1Qppgf2yxOPO1bvQ3nZQtuI=:, unixsum=54809
…
Content-Type: text/html; charset=utf-8
Content-Encoding: br
…

[message body]
```

In einer weiteren Antwort verwendet der Server eine andere Komprimierungsmethode, was zu einem neuen `Content-Digest`, aber denselben `Repr-Digest`-Digests führt:

```http
…
Repr-Digest: sha-256=:AEGPTgUMw5e96wxZuDtpfm23RBU3nFwtgY5fw4NYORo=:, sha-512=:U59TCCaZPA9Qio3CzHJVAgDnIAut53t5Sgkj2Gv4BvDd0b+OX9QpIdgWkzdXLmBsmvBrf3t5PBt+UrVK6k5dkw==:
Content-Digest: sha-256=:rv9Jivc4TmcacLUshzN3OdX7Hz+ORnQRaiTaIKZQ0zk=:
…
Content-Type: text/html; charset=utf-8
Content-Encoding: zstd
…

[message body]
```

### Erfolgreiche HTTP-Anfrage-Antwort mit `Want-Repr-Digest`, `Repr-Digest` und `Content-Digest`

Die folgende {{HTTPMethod("PUT")}}-Anfrage enthält einen `Want-Repr-Digest`-Header, der anzeigt, dass der Server einen `Repr-Digest`-Header mit einem `sha-256`-Digest einschließen sollte, wenn der Vorgang erfolgreich ist:

```http
PUT /api/transact HTTP/1.1
Want-Repr-Digest: sha-256=8
Content-Type: text/json
…

[message body]
```

Der Server antwortet mit einer erfolgreichen {{HTTPStatus("201", "201 Created")}}-Antwort, die `Repr-Digest`- und `Content-Digest`-Header mit sha-256-Digests der Repräsentation und des Inhalts enthält:

```http
HTTP/1.1 201 Created
Repr-Digest: sha-256=:W8oN3H3CmE/CBpV6ZPNozV2AIDzzQpWL7CCOXyDyDzI=:
Content-Encoding: br
Content-Digest: sha-256=:2IBI7hQn83oTCgB3Z/6apOl91WGoctRfRj/F9gkvVo8=:
…

[message body]
```

### Fehlgeschlagene HTTP-Anfrage-Antwort mit `Repr-Digest`

In der folgenden Nachricht fordert ein User-Agent eine Ressource mit einem spezifischen sha-256-Digest an:

```http
GET /api/last-transaction HTTP/1.1
Accept: text/json
Repr-Digest: sha-256=:2IBI7hQn83oTCgB3Z/6apOl91WGoctRfRj/F9gkvVo8=:
…
```

Ein {{HTTPStatus("406", "406 Not Acceptable")}} wird vom Server zurückgegeben, um anzuzeigen, dass die Operation aufgrund eines spezifischen Digests für die Ressource fehlgeschlagen ist.
Ein `Repr-Digest`-Header ist mit dem SHA-256-Digest-Wert enthalten, der zu einer erfolgreichen Antwort führen würde, wenn der User-Agent die Anfrage mit diesem Wert wiederholt:

```http
HTTP/1.1 406 Not Acceptable
Repr-Digest: sha-256=:W8oN3H3CmE/CBpV6ZPNozV2AIDzzQpWL7CCOXyDyDzI=:
…
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dieser Header hat keine spezifikationsdefinierte Browser-Integration ("Browser-Kompatibilität" ist nicht anwendbar).
Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um anwendungsspezifische Implementierungsverhalten bereitzustellen.

## Siehe auch

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Content-Encoding")}}
- [Digitale Signaturen für APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) - Das SDK-Leitfaden verwendet `Content-Digests` für digitale Signaturen in HTTP-Anrufen (developer.ebay.com)
