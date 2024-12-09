---
title: Repr-Digest
slug: Web/HTTP/Headers/Repr-Digest
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}

Der HTTP-**`Repr-Digest`** {{Glossary("Request_header", "Anforderungs-")}} und {{Glossary("Response_header", "Antwortheader")}} bietet einen {{Glossary("digest", "Digest")}} der ausgewählten Repräsentation der Zielressource.
Er kann verwendet werden, um die Integrität der gesamten ausgewählten Repräsentation zu validieren, sobald diese empfangen und rekonstruiert wurde.

Die _ausgewählte Repräsentation_ ist das spezifische Format einer Ressource, das durch [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation) gewählt wurde.
Details zur Repräsentation können aus {{Glossary("Representation_header", "Repräsentations-Headern")}} ermittelt werden, wie z.B. {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Type")}} und {{HTTPHeader("Content-Encoding")}}.

Der Repräsentations-Digest bezieht sich auf die gesamte Repräsentation und nicht auf die Kodierung oder Zerlegung der Nachrichten, die zum Senden verwendet werden.
Ein {{HTTPHeader("Content-Digest")}} bezieht sich auf den Inhalt einer spezifischen Nachricht und wird unterschiedliche Werte basierend auf der {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}} jeder Nachricht haben.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Representation_header", "Repräsentations-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
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
    Nur zwei registrierte Digest-Algorithmen gelten als sicher: `sha-512` und `sha-256`.
    Die unsicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<digest-value>`
  - : Der Byte-Digest der Repräsentation mithilfe des `<digest-algorithm>`.
    Die Wahl des Digest-Algorithmus bestimmt auch die zu verwendende Kodierung: `sha-512` und `sha-256` verwenden {{Glossary("base64", "base64")}}-Kodierung, während einige veraltete Digest-Algorithmen wie `unixsum` eine Dezimalzahl verwenden.
    Im Gegensatz zu früheren Entwürfen der Spezifikation werden die standardmäßig base64-kodierten Digest-Bytes in Doppelpunkte (`:`, ASCII 0x3A) eingebettet, als Teil der [Dictionary-Syntax](https://www.rfc-editor.org/rfc/rfc8941#name-byte-sequences).

Die Verwendung unsicherer Digest-Algorithmen wird nicht empfohlen, da Kollisionen realistischerweise erzwungen werden können, wodurch der Nutzen des Digests geschwächt wird.
Es sei denn, es wird mit veralteten Systemen gearbeitet (was unwahrscheinlich ist, da die meisten das veraltete `Digest`-Header erwarten und diese Spezifikation nicht verstehen würden), erwägen Sie, einen `Repr-Digest` wegzulassen, anstatt einen mit einem unsicheren Digest-Algorithmus einzufügen.

## Beschreibung

Ein `Digest`-Header wurde in früheren Spezifikationen definiert, erwies sich jedoch als problematisch, da der Umfang, auf den sich der Digest bezog, nicht klar war.
Insbesondere war es schwierig zu unterscheiden, ob sich ein Digest auf die gesamte Ressourcenrepräsentation oder auf den spezifischen Inhalt einer HTTP-Nachricht bezog.
Daher wurden zwei separate Header spezifiziert (`Content-Digest` und `Repr-Digest`), um HTTP-Nachrichteninhalts-Digests bzw. Ressourcenrepräsentations-Digests darzustellen.

## Beispiele

### Benutzeragent sendet einen Repr-Digest in Anfragen

Im folgenden Beispiel sendet ein Benutzeragent einen Digest des Nachrichteninhalts mithilfe von SHA-512.
Es sendet sowohl einen `Content-Digest` als auch einen `Repr-Digest`, die sich aufgrund der `Content-Encoding` unterscheiden:

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
In Anfragen wie dem obigen Beispiel ist der `Repr-Digest` für den Server nützlicher, da dieser über die dekodierte Repräsentation berechnet wird und in verschiedenen Szenarien konsistenter wäre.

### HTTP-Antwort, bei der `Repr-Digest` und `Content-Digest` übereinstimmen

Ein HTTP-Server kann die gesamte Repräsentation unkodiert in einer einzigen Nachricht senden.
In diesem Fall haben `Repr-Digest` und `Content-Digest` die gleichen Werte für dieselben Digest-Algorithmen:

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

### HTTP-Antworten, bei denen `Repr-Digest` und `Content-Digest` divergieren

Ein Server kann den Inhalt zur Übertragung komprimieren.
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

In einer anderen Antwort verwendet der Server eine andere Komprimierungsmethode, was zu einem neuen `Content-Digest`, aber denselben `Repr-Digest`-Digests führt:

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

Die folgende {{HTTPMethod("PUT")}}-Anfrage enthält einen `Want-Repr-Digest`-Header, der angibt, dass der Server bei erfolgreichem Ablauf einen `Repr-Digest`-Header mit einem `sha-256`-Digest enthalten soll:

```http
PUT /api/transact HTTP/1.1
Want-Repr-Digest: sha-256=8
Content-Type: text/json
…

[message body]
```

Der Server antwortet mit einer erfolgreichen {{HTTPStatus("201", "201 Created")}}-Antwort und enthält `Repr-Digest`- und `Content-Digest`-Header mit sha-256-Digests der Repräsentation bzw. des Inhalts:

```http
HTTP/1.1 201 Created
Repr-Digest: sha-256=:W8oN3H3CmE/CBpV6ZPNozV2AIDzzQpWL7CCOXyDyDzI=:
Content-Encoding: br
Content-Digest: sha-256=:2IBI7hQn83oTCgB3Z/6apOl91WGoctRfRj/F9gkvVo8=:
…

[message body]
```

### Erfolgloses HTTP-Anfrage-Antwort-Paar mit `Repr-Digest`

Im folgenden Nachricht fordert ein Benutzeragent eine Ressource mit einem bestimmten sha-256-Digest an:

```http
GET /api/last-transaction HTTP/1.1
Accept: text/json
Repr-Digest: sha-256=:2IBI7hQn83oTCgB3Z/6apOl91WGoctRfRj/F9gkvVo8=:
…
```

Ein {{HTTPStatus("406", "406 Not Acceptable")}} wird vom Server zurückgegeben, um anzuzeigen, dass die Operation aufgrund eines bestimmten Digests für die Ressource fehlgeschlagen ist.
Ein `Repr-Digest`-Header wird mit dem SHA-256-Digestwert enthalten, der zu einer erfolgreichen Antwort führen würde, wenn der Benutzeragent die Anfrage mit diesem Wert wiederholt:

```http
HTTP/1.1 406 Not Acceptable
Repr-Digest: sha-256=:W8oN3H3CmE/CBpV6ZPNozV2AIDzzQpWL7CCOXyDyDzI=:
…
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dieser Header hat keine spezifikationsdefinierte Browser-Integration ("Browser-Kompatibilität" ist nicht anwendbar).
Entwickler können HTTP-Header mit `fetch()` setzen und erhalten, um anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Content-Encoding")}}
- [Digitale Signaturen für APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK-Leitfaden verwendet `Content-Digest`s für digitale Signaturen in HTTP-Aufrufen (developer.ebay.com)
