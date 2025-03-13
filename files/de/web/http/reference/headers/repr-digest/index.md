---
title: Repr-Digest
slug: Web/HTTP/Reference/Headers/Repr-Digest
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Repr-Digest`** {{Glossary("Request_header", "Anfrage-")}} und {{Glossary("Response_header", "Antwortheader")}} liefert einen {{Glossary("digest", "Digest")}} der ausgewählten Darstellung der Zielressource.
Er kann verwendet werden, um die Integrität der gesamten ausgewählten Darstellung zu validieren, sobald sie empfangen und rekonstruiert wurde.

Die _ausgewählte Darstellung_ ist das spezifische Format einer Ressource, das durch [Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation) gewählt wurde.
Details zur Darstellung können aus {{Glossary("Representation_header", "Darstellungsheadern")}} entnommen werden, wie z.B. {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Type")}} und {{HTTPHeader("Content-Encoding")}}.

Der Darstellungs-Digest bezieht sich auf die gesamte Darstellung und nicht auf die Kodierung oder das Chunking der Nachrichten, die zum Senden verwendet werden.
Ein {{HTTPHeader("Content-Digest")}} bezieht sich auf den Inhalt einer spezifischen Nachricht und hat unterschiedliche Werte basierend auf der {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}} jeder Nachricht.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Representation_header", "Darstellungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrageheader")}}</th>
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
  - : Der Algorithmus, der zur Erstellung eines Digests der Darstellung verwendet wird.
    Nur zwei registrierte Digest-Algorithmen gelten als sicher: `sha-512` und `sha-256`.
    Die nicht sicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<digest-value>`
  - : Der Digest in Bytes der Darstellung unter Verwendung des `<digest-algorithm>`.
    Die Wahl des Digest-Algorithmus bestimmt auch die zu verwendende Kodierung: `sha-512` und `sha-256` verwenden {{Glossary("base64", "base64")}} Kodierung, während einige veraltete Digest-Algorithmen wie `unixsum` eine Dezimalzahl verwenden.
    Im Gegensatz zu früheren Entwürfen der Spezifikation sind die standardmäßig base64-kodierten Digest-Bytes in Doppelpunkte (`:`, ASCII 0x3A) eingeschlossen, als Teil der [Dictionary-Syntax](https://www.rfc-editor.org/rfc/rfc8941#name-byte-sequences).

Die Verwendung unsicherer Digest-Algorithmen wird nicht empfohlen, da Kollisionen realistisch erzwungen werden können, was die Nützlichkeit des Digests schwächt.
Es sei denn, Sie arbeiten mit veralteten Systemen (was unwahrscheinlich ist, da die meisten den veralteten `Digest`-Header erwarten und diese Spezifikation nicht verstehen), sollten Sie in Erwägung ziehen, einen `Repr-Digest` wegzulassen, anstatt einen mit einem unsicheren Digest-Algorithmus zu verwenden.

## Beschreibung

Ein `Digest`-Header wurde in früheren Spezifikationen definiert, erwies sich jedoch als problematisch, da der Anwendungsbereich des Digests nicht klar war.
Insbesondere war es schwierig zu unterscheiden, ob ein Digest auf die gesamte Ressourcen-Darstellung oder auf den spezifischen Inhalt einer HTTP-Nachricht zutraf.
Daher wurden zwei separate Header spezifiziert (`Content-Digest` und `Repr-Digest`), um HTTP-Nachrichteninhalte und Ressourcendarstellungen zu differenzieren.

## Beispiele

### Benutzeragent, der einen Repr-Digest in Anfragen sendet

Im folgenden Beispiel sendet ein Benutzeragent einen Digest des Nachrichtinhalts unter Verwendung von SHA-512.
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

Der Server kann einen Digest des empfangenen Inhalts berechnen und das Ergebnis mit den `Content-Digest`- oder `Repr-Digest`-Headern vergleichen, um die Integrität der Nachricht zu validieren.
In Anfragen wie dem obigen Beispiel ist der `Repr-Digest` für den Server nützlicher, da dieser über die dekodierte Darstellung berechnet wird und in unterschiedlichen Szenarien konsistenter wäre.

### HTTP-Antwort, bei der `Repr-Digest` und `Content-Digest` übereinstimmen

Ein HTTP-Server kann die gesamte Darstellung unkodiert in einer einzigen Nachricht senden.
In diesem Fall haben `Repr-Digest` und `Content-Digest` die gleichen Werte für die gleichen Digest-Algorithmen:

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

### HTTP-Antworten, bei denen `Repr-Digest` und `Content-Digest` voneinander abweichen

Ein Server kann den Inhalt zur Übertragung komprimieren.
In diesem Fall hängt {{HTTPHeader("Content-Digest")}} von der {{HTTPHeader("Content-Encoding")}} ab und hat daher einen anderen Wert als der `Repr-Digest`-Header in einer Antwort:

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

### Erfolgreicher HTTP-Anfrage-Antwort-Austausch mit `Want-Repr-Digest`, `Repr-Digest` und `Content-Digest`

Der folgende {{HTTPMethod("PUT")}}-Antrag enthält einen `Want-Repr-Digest`-Header, der angibt, dass der Server einen `Repr-Digest`-Header mit einem `sha-256`-Digest einschließen soll, wenn die Operation erfolgreich ist:

```http
PUT /api/transact HTTP/1.1
Want-Repr-Digest: sha-256=8
Content-Type: text/json
…

[message body]
```

Der Server antwortet mit einer erfolgreichen {{HTTPStatus("201", "201 Created")}}-Antwort, die `Repr-Digest`- und `Content-Digest`-Header mit sha-256-Digests der Darstellung bzw. des Inhalts enthält:

```http
HTTP/1.1 201 Created
Repr-Digest: sha-256=:W8oN3H3CmE/CBpV6ZPNozV2AIDzzQpWL7CCOXyDyDzI=:
Content-Encoding: br
Content-Digest: sha-256=:2IBI7hQn83oTCgB3Z/6apOl91WGoctRfRj/F9gkvVo8=:
…

[message body]
```

### Erfolgloser HTTP-Anfrage-Antwort-Austausch unter Nutzung von `Repr-Digest`

In der folgenden Nachricht fordert ein Benutzeragent eine Ressource mit einem bestimmten sha-256-Digest an:

```http
GET /api/last-transaction HTTP/1.1
Accept: text/json
Repr-Digest: sha-256=:2IBI7hQn83oTCgB3Z/6apOl91WGoctRfRj/F9gkvVo8=:
…
```

Ein {{HTTPStatus("406", "406 Not Acceptable")}} wird vom Server zurückgegeben, um anzuzeigen, dass die Operation aufgrund eines bestimmten Digests für die Ressource fehlgeschlagen ist.
Ein `Repr-Digest`-Header wird mit dem SHA-256-Digest-Wert eingeschlossen, der zu einer erfolgreichen Antwort führen würde, wenn der Benutzeragent die Anfrage mit diesem Wert wiederholen würde:

```http
HTTP/1.1 406 Not Acceptable
Repr-Digest: sha-256=:W8oN3H3CmE/CBpV6ZPNozV2AIDzzQpWL7CCOXyDyDzI=:
…
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dieser Header wird durch keine Spezifikation für die Browser-Integration definiert (die "Browser-Kompatibilität" trifft nicht zu).
Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Content-Encoding")}}
- [Digitale Signaturen für APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK-Leitfaden verwendet `Content-Digest`s für digitale Signaturen in HTTP-Aufrufen (developer.ebay.com)
