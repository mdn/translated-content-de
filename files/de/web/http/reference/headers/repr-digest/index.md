---
title: Repr-Digest
slug: Web/HTTP/Reference/Headers/Repr-Digest
l10n:
  sourceCommit: 7159a4c0a2f1e886c09268c41c103c4ac7100d63
---

{{HTTPSidebar}}

Der HTTP **`Repr-Digest`** {{Glossary("Request_header", "Request-")}} und {{Glossary("Response_header", "Response-Header")}} liefert einen {{Glossary("hash_function", "Digest")}} der ausgewählten Repräsentation der Zielressource. Er kann verwendet werden, um die Integrität der gesamten ausgewählten Repräsentation zu überprüfen, sobald diese empfangen und rekonstruiert wurde.

Die _ausgewählte Repräsentation_ ist das spezifische Format einer Ressource, das durch [Content Negotiation](/de/docs/Web/HTTP/Guides/Content_negotiation) ausgewählt wurde. Details zur Repräsentation können aus {{Glossary("Representation_header", "Repräsentations-Headern")}} ermittelt werden, wie {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Type")}} und {{HTTPHeader("Content-Encoding")}}.

Der Repräsentations-Digest gilt für die gesamte Repräsentation und nicht für die Kodierung oder Chunking der Nachrichten, die verwendet werden, um sie zu senden. Ein {{HTTPHeader("Content-Digest")}} bezieht sich auf den Inhalt einer spezifischen Nachricht und hat unterschiedliche Werte basierend auf der {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}} jeder Nachricht.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Repräsentations-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
  - : Der Algorithmus, der verwendet wird, um einen Digest der Repräsentation zu erstellen. Es werden nur zwei registrierte Digest-Algorithmen als sicher betrachtet: `sha-512` und `sha-256`. Die unsicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<digest-value>`
  - : Der Digest in Bytes der Repräsentation unter Verwendung des `<digest-algorithm>`. Die Wahl des Digest-Algorithmus bestimmt auch die zu verwendende Kodierung: `sha-512` und `sha-256` verwenden {{Glossary("base64", "Base64")}}-Kodierung, während einige veraltete Digest-Algorithmen wie `unixsum` eine Dezimalzahl verwenden. Im Gegensatz zu früheren Entwürfen der Spezifikation sind die standardmäßig base64-codierten Digest-Bytes als Teil der [Dictionary-Syntax](https://www.rfc-editor.org/rfc/rfc8941#name-byte-sequences) in Doppelpunkte (`:`, ASCII 0x3A) eingeschlossen.

Die Verwendung unsicherer Digest-Algorithmen wird nicht empfohlen, da Kollisionen realistischerweise erzwungen werden können, was die Nützlichkeit des Digests schwächt. Es sei denn, Sie arbeiten mit veralteten Systemen (was unwahrscheinlich ist, da die meisten den veralteten `Digest`-Header erwarten und diese Spezifikation nicht verstehen), sollten Sie in Betracht ziehen, einen `Repr-Digest` wegzulassen, anstatt einen mit einem unsicheren Digest-Algorithmus einzuschließen.

## Beschreibung

Ein `Digest`-Header wurde in früheren Spezifikationen definiert, erwies sich jedoch als problematisch, da der Anwendungsbereich dessen, worauf sich der Digest bezog, nicht klar war. Insbesondere war es schwierig zu unterscheiden, ob sich ein Digest auf die gesamte Repräsentation der Ressource oder auf den spezifischen Inhalt einer HTTP-Nachricht bezog. Daher wurden zwei separate Header spezifiziert (`Content-Digest` und `Repr-Digest`), um HTTP-Nachrichteninhalts-Digests und Repräsentations-Digests der Ressource entsprechend zu übermitteln.

## Beispiele

### User-Agent sendet `Repr-Digest` in Anfragen

Im folgenden Beispiel sendet ein User-Agent einen Digest des Nachrichteninhalts unter Verwendung von SHA-512. Es werden sowohl ein `Content-Digest` als auch ein `Repr-Digest` gesendet, die sich aufgrund der `Content-Encoding` voneinander unterscheiden:

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

Der Server kann einen Digest des Inhalts berechnen, den er erhalten hat, und das Ergebnis mit den `Content-Digest`- oder `Repr-Digest`-Headern vergleichen, um die Nachrichtsintegrität zu validieren. In Anfragen wie dem obigen Beispiel ist der `Repr-Digest` für den Server nützlicher, da er über die dekodierte Repräsentation berechnet wird und in verschiedenen Szenarien konsistenter wäre.

### HTTP-Antwort, bei der `Repr-Digest` und `Content-Digest` übereinstimmen

Ein HTTP-Server kann die gesamte Repräsentation unkodiert in einer einzigen Nachricht senden. In diesem Fall haben `Repr-Digest` und `Content-Digest` für die gleichen Digest-Algorithmen gleiche Werte:

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

### HTTP-Antworten, bei denen `Repr-Digest` und `Content-Digest` auseinandergehen

Ein Server kann den Inhalt zur Übertragung komprimieren. In diesem Fall hängt der {{HTTPHeader("Content-Digest")}} von der {{HTTPHeader("Content-Encoding")}} ab und hat daher einen anderen Wert als der `Repr-Digest`-Header in einer Antwort:

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

In einer anderen Antwort verwendet der Server eine andere Komprimierungsmethode, was zu einem neuen `Content-Digest`, aber den gleichen `Repr-Digest`-Digests führt:

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

Die folgende {{HTTPMethod("PUT")}}-Anfrage enthält einen `Want-Repr-Digest`-Header, der anzeigt, dass der Server einen `Repr-Digest`-Header mit einem `sha-256`-Digest einschließen soll, wenn die Operation erfolgreich ist:

```http
PUT /api/transact HTTP/1.1
Want-Repr-Digest: sha-256=8
Content-Type: text/json
…

[message body]
```

Der Server antwortet mit einer erfolgreichen {{HTTPStatus("201", "201 Created")}}-Antwort, die `Repr-Digest`- und `Content-Digest`-Header mit sha-256-Digests der Repräsentation und des Inhalts enthält, entsprechend:

```http
HTTP/1.1 201 Created
Repr-Digest: sha-256=:W8oN3H3CmE/CBpV6ZPNozV2AIDzzQpWL7CCOXyDyDzI=:
Content-Encoding: br
Content-Digest: sha-256=:2IBI7hQn83oTCgB3Z/6apOl91WGoctRfRj/F9gkvVo8=:
…

[message body]
```

### Erfolgloser HTTP-Anfrage-Antwort mit `Repr-Digest`

Im folgenden Nachrichtenbeispiel fordert ein User-Agent eine Ressource mit einem bestimmten sha-256-Digest an:

```http
GET /api/last-transaction HTTP/1.1
Accept: text/json
Repr-Digest: sha-256=:2IBI7hQn83oTCgB3Z/6apOl91WGoctRfRj/F9gkvVo8=:
…
```

Ein {{HTTPStatus("406", "406 Not Acceptable")}} wird vom Server zurückgegeben, um anzuzeigen, dass die Operation aufgrund eines bestimmten Digests für die Ressource fehlgeschlagen ist. Ein `Repr-Digest`-Header ist enthalten, mit dem SHA-256-Digest-Wert, der zu einer erfolgreichen Antwort führen würde, wenn der User-Agent die Anfrage mit diesem Wert wiederholen würde:

```http
HTTP/1.1 406 Not Acceptable
Repr-Digest: sha-256=:W8oN3H3CmE/CBpV6ZPNozV2AIDzzQpWL7CCOXyDyDzI=:
…
```

## Spezifikationen

{{Spezifikationen}}

## Browser-Kompatibilität

Dieser Header hat keine spezifikationsdefinierte Browser-Integration (für "Browser-Kompatibilität" ist das nicht relevant). Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um anwendungsspezifisches Implementierungsverhalten zu bieten.

## Siehe auch

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Content-Encoding")}}
- [Digitale Signaturen für APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) Leitfaden der SDK, verwendet `Content-Digest`s für digitale Signaturen in HTTP-Aufrufen (developer.ebay.com)
