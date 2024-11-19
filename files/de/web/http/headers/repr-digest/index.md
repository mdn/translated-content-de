---
title: Repr-Digest
slug: Web/HTTP/Headers/Repr-Digest
l10n:
  sourceCommit: 6c32e8b21a39b1b8d3db7a194d2350e0f8218b64
---

{{HTTPSidebar}}

Der HTTP **`Repr-Digest`** {{Glossary("Request_header", "Request")}} und {{Glossary("Response_header", "Response-Header")}} stellt einen {{Glossary("digest", "Digest")}} der ausgewählten Repräsentation der Zielressource bereit.

Die _ausgewählte Repräsentation_ ist das spezifische Format einer Ressource, das durch [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation) gewählt wurde. Einzelheiten zu dieser Repräsentation können aus den {{Glossary("Representation_header", "Repräsentations-Headern")}} der Antwort bestimmt werden, wie {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Type")}}, und {{HTTPHeader("Content-Encoding")}}.

Der Repräsentations-Digest bezieht sich auf die gesamte Ressource und nicht auf die Codierung oder Aufteilung der Nachrichten, mit denen sie gesendet wird. Dies unterscheidet sich von {{HTTPHeader("Content-Digest")}}, der sich auf den Inhalt einer bestimmten Nachricht bezieht und daher von der {{HTTPHeader("Content-Encoding")}} und {{HTTPHeader("Content-Range")}} jeder Nachricht betroffen ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Repräsentations-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Repr-Digest: <digest-algorithm>=<digest-value>

// Multiple digest algorithms
Repr-Digest: <digest-algorithm>=<digest-value>,<digest-algorithm>=<digest-value>
```

## Direktiven

- `<digest-algorithm>`
  - : Der Algorithmus, der verwendet wird, um einen Digest der Repräsentation zu erstellen.
    Nur zwei registrierte Digest-Algorithmen gelten als sicher: `sha-512` und `sha-256`.
    Die unsicheren (veralteten) registrierten Digest-Algorithmen sind: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) und `crc32c`.
- `<digest-value>`
  - : Der Digest in Bytes der Repräsentation unter Verwendung des `<digest-algorithm>`.
    Die Wahl des Digest-Algorithmus bestimmt auch die zu verwendende Kodierung: `sha-512` und `sha-256` verwenden {{Glossary("base64", "base64")}} Kodierung, während einige veraltete Digest-Algorithmen wie `unixsum` eine dezimale Ganzzahl verwenden.
    Im Gegensatz zu früheren Entwürfen der Spezifikation sind die standard-base64-kodierten Digest-Bytes in Doppelpunkten (`:`, ASCII 0x3A) als Teil der [Dictionary-Syntax](https://www.rfc-editor.org/rfc/rfc8941#name-byte-sequences) eingeschlossen.

Die Verwendung unsicherer Digest-Algorithmen wird nicht empfohlen, da Kollisionen realistisch erzwungen werden können, was den Nutzen des Digests schwächt. Sofern Sie nicht mit veralteten Systemen arbeiten (was unwahrscheinlich ist, da die meisten den veralteten {{HTTPHeader("Digest")}} Header erwarten und diese Spezifikation nicht verstehen werden), sollten Sie in Betracht ziehen, einen `Repr-Digest` auszulassen, anstatt einen mit einem unsicheren Digest-Algorithmus einzuschließen.

## Beispiele

### HTTP-Antwort, bei der `Repr-Digest` und `Content-Digest` übereinstimmen

Ein HTTP-Server kann die gesamte Repräsentation unverschlüsselt in einer einzelnen Nachricht senden. In diesem Fall haben `Repr-Digest` und `Content-Digest` gleiche Werte für die gleichen Digest-Algorithmen:

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

Ein Server kann den Inhalt zur Übertragung komprimieren. In diesem Fall hängt {{HTTPHeader("Content-Digest")}} von der {{HTTPHeader("Content-Encoding")}} ab und hat daher einen anderen Wert als der `Repr-Digest` Header in einer Antwort:

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

In einer anderen Antwort verwendet der Server eine andere Komprimierungsmethode, was zu einem neuen `Content-Digest` führt, aber die gleichen `Repr-Digest` Digests:

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

### Erfolgreiche HTTP-Anfrage-Antwort unter Verwendung von `Want-Repr-Digest`, `Repr-Digest` und `Content-Digest`

Die folgende {{HTTPMethod("PUT")}} Anfrage enthält einen `Want-Repr-Digest` Header, der anzeigt, dass der Server einen `Repr-Digest` Header mit einem `sha-256` Digest einschließen soll, wenn die Operation erfolgreich ist:

```http
PUT /api/transact HTTP/1.1
Want-Repr-Digest: sha-256=8
Content-Type: text/json
…

[message body]
```

Der Server antwortet mit einer erfolgreichen {{HTTPStatus("201", "201 Created")}} Antwort, die `Repr-Digest` und `Content-Digest` Header mit sha-256 Digests der Repräsentation und des Inhalts enthält:

```http
HTTP/1.1 201 Created
Repr-Digest: sha-256=:W8oN3H3CmE/CBpV6ZPNozV2AIDzzQpWL7CCOXyDyDzI=:
Content-Encoding: br
Content-Digest: sha-256=:2IBI7hQn83oTCgB3Z/6apOl91WGoctRfRj/F9gkvVo8=:
…

[message body]
```

### Erfolgloser HTTP-Anfrage-Antwort unter Verwendung von `Repr-Digest`

In der folgenden Nachricht fordert ein Client eine Ressource mit einem spezifischen sha-256 Digest an:

```http
GET /api/last-transaction HTTP/1.1
Accept: text/json
Repr-Digest: sha-256=:2IBI7hQn83oTCgB3Z/6apOl91WGoctRfRj/F9gkvVo8=:
…
```

Ein {{HTTPStatus("406", "406 Not Acceptable")}} wird vom Server zurückgegeben, um anzuzeigen, dass die Operation mit einem bestimmten Digest für die Ressource fehlgeschlagen ist. Ein `Repr-Digest` Header ist mit dem SHA-256 Digestwert enthalten, der zu einer erfolgreichen Antwort führen würde, wenn der Client die Anfrage mit diesem Wert wiederholen würde:

```http
HTTP/1.1 406 Not Acceptable
Repr-Digest: sha-256=:W8oN3H3CmE/CBpV6ZPNozV2AIDzzQpWL7CCOXyDyDzI=:
…
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Dieser Header hat keine spezifikationsdefinierte Browser-Integration ("Browser-Kompatibilität" gilt nicht). Entwickler können HTTP-Header mit `fetch()` setzen und abrufen, um anwendungsspezifisches Implementierungsverhalten bereitzustellen.

## Siehe auch

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Content-Encoding")}}
