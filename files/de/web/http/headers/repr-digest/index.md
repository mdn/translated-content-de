---
title: Repr-Digest
slug: Web/HTTP/Headers/Repr-Digest
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-**`Repr-Digest`**-{{Glossary("Request_header", "Anforderungs")}} und {{Glossary("Response_header", "Antwort-Header")}} bietet einen {{Glossary("digest", "Digest")}} der ausgewählten Repräsentation der Zielressource.
Er kann verwendet werden, um die Integrität der gesamten ausgewählten Repräsentation zu validieren, sobald diese empfangen und rekonstruiert wurde.

Die _ausgewählte Repräsentation_ ist das spezifische Format einer Ressource, das mittels [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation) gewählt wird.
Details über die Repräsentation können aus {{Glossary("Representation_header", "Repräsentations-Headern")}} bestimmt werden, wie etwa {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Type")}} und {{HTTPHeader("Content-Encoding")}}.

Der Repräsentations-Digest bezieht sich auf die gesamte Repräsentation und nicht auf die Kodierung oder die Aufteilung der Nachrichten, die zur Übertragung verwendet werden.
Ein {{HTTPHeader("Content-Digest")}} bezieht sich auf den Inhalt einer spezifischen Nachricht und wird unterschiedliche Werte haben, abhängig von der {{HTTPHeader("Content-Encoding")}} und dem {{HTTPHeader("Content-Range")}} jeder Nachricht.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Repräsentations-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : Der Algorithmus, der verwendet wird, um einen Digest der Repräsentation zu erstellen.
    Nur zwei registrierte Digest-Algorithmen werden als sicher angesehen: `sha-512` und `sha-256`.
    Die unsicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<digest-value>`
  - : Der Digest in Bytes der Repräsentation, der den `<digest-algorithm>` verwendet.
    Die Wahl des Digest-Algorithmus bestimmt auch die zu verwendende Kodierung: `sha-512` und `sha-256` verwenden {{Glossary("base64", "base64")}} Kodierung, während einige veraltete Digest-Algorithmen wie `unixsum` einen Dezimalwert verwenden.
    Im Gegensatz zu früheren Entwürfen der Spezifikation sind die standardmäßig in base64 kodierten Digest-Bytes als Teil der [Dictionary-Syntax](https://www.rfc-editor.org/rfc/rfc8941#name-byte-sequences) in Doppelpunkte (`:`, ASCII 0x3A) eingeschlossen.

Die Verwendung unsicherer Digest-Algorithmen wird nicht empfohlen, da Kollisionen realistisch erzwungen werden können, was die Nützlichkeit des Digests schwächen würde.
Es sei denn, Sie arbeiten mit Altsystemen (was unwahrscheinlich ist, da die meisten das veraltete `Digest`-Header erwarten und diese Spezifikation nicht verstehen), sollten Sie in Betracht ziehen, einen `Repr-Digest` wegzulassen, anstatt einen mit einem unsicheren Digest-Algorithmus einzuschließen.

## Beschreibung

Ein `Digest`-Header wurde in früheren Spezifikationen definiert, erwies sich jedoch als problematisch, da der Anwendungsbereich, auf den sich der Digest bezog, nicht klar war.
Es war insbesondere schwierig festzustellen, ob ein Digest auf die gesamte Ressourcenrepräsentation oder auf den spezifischen Inhalt einer HTTP-Nachricht angewendet wurde.
Daher wurden zwei separate Header spezifiziert (`Content-Digest` und `Repr-Digest`), um jeweils HTTP-Nachrichteninhalts-Digest und Ressourcenvertretungs-Digest zu vermitteln.

## Beispiele

### Benutzeragent sendet einen Repr-Digest in Anfragen

Im folgenden Beispiel sendet ein Benutzeragent einen Digest des Nachrichteninhalts unter Verwendung von SHA-512.
Er sendet sowohl einen `Content-Digest` als auch einen `Repr-Digest`, die sich aufgrund der `Content-Encoding` unterscheiden:

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

Der Server kann einen Digest der empfangenen Inhalte berechnen und das Ergebnis mit den `Content-Digest` oder `Repr-Digest` Headern vergleichen, um die Integrität der Nachricht zu validieren.
In Anfragen wie im obigen Beispiel ist der `Repr-Digest` für den Server nützlicher, da dieser über die dekodierte Repräsentation berechnet wird und in verschiedenen Szenarien konsistenter wäre.

### HTTP-Antwort, bei der `Repr-Digest` und `Content-Digest` übereinstimmen

Ein HTTP-Server kann die gesamte Repräsentation unkodiert in einer einzigen Nachricht senden.
In diesem Fall haben `Repr-Digest` und `Content-Digest` für die gleichen Digest-Algorithmen gleiche Werte:

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

Ein Server kann den Inhalt komprimieren, um ihn zu senden.
In diesem Fall wird {{HTTPHeader("Content-Digest")}} von der {{HTTPHeader("Content-Encoding")}} abhängen und daher in einer Antwort einen anderen Wert als der `Repr-Digest`-Header haben:

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

In einer anderen Antwort verwendet der Server ein anderes Komprimierungsverfahren, was zu einem neuen `Content-Digest` führt, jedoch zu den gleichen `Repr-Digest`-Digests:

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

Der folgende {{HTTPMethod("PUT")}}-Anfrage enthält einen `Want-Repr-Digest`-Header, der angibt, dass der Server einen `Repr-Digest`-Header mit einem `sha-256`-Digest einschließen sollte, wenn die Operation erfolgreich ist:

```http
PUT /api/transact HTTP/1.1
Want-Repr-Digest: sha-256=8
Content-Type: text/json
…

[message body]
```

Der Server antwortet mit einer erfolgreichen {{HTTPStatus("201", "201 Created")}} Antwort, einschließlich `Repr-Digest` und `Content-Digest`-Headern mit sha-256-Digests der Repräsentation und des Inhalts:

```http
HTTP/1.1 201 Created
Repr-Digest: sha-256=:W8oN3H3CmE/CBpV6ZPNozV2AIDzzQpWL7CCOXyDyDzI=:
Content-Encoding: br
Content-Digest: sha-256=:2IBI7hQn83oTCgB3Z/6apOl91WGoctRfRj/F9gkvVo8=:
…

[message body]
```

### Erfolgloses HTTP-Anfrage-Antwort-Verfahren mit `Repr-Digest`

In der folgenden Nachricht fordert ein Benutzeragent eine Ressource mit einem bestimmten sha-256-Digest an:

```http
GET /api/last-transaction HTTP/1.1
Accept: text/json
Repr-Digest: sha-256=:2IBI7hQn83oTCgB3Z/6apOl91WGoctRfRj/F9gkvVo8=:
…
```

Ein {{HTTPStatus("406", "406 Not Acceptable")}} wird vom Server zurückgegeben, um anzuzeigen, dass die Operation bei einem bestimmten Digest für die Ressource fehlgeschlagen ist.
Ein `Repr-Digest`-Header wird mit dem SHA-256-Digestwert eingeschlossen, der zu einer erfolgreichen Antwort führen würde, wenn der Benutzeragent die Anfrage mit diesem Wert wiederholen würde:

```http
HTTP/1.1 406 Not Acceptable
Repr-Digest: sha-256=:W8oN3H3CmE/CBpV6ZPNozV2AIDzzQpWL7CCOXyDyDzI=:
…
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dieser Header hat keine spezifikationsdefinierte Browserintegration ("Browser-Kompatibilität" ist nicht anwendbar).
Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Content-Encoding")}}
- [Digitale Signaturen für APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK-Leitfaden verwendet `Content-Digest`s für digitale Signaturen in HTTP-Anrufen (developer.ebay.com)
