---
title: Proxy-Authenticate header
short-title: Proxy-Authenticate
slug: Web/HTTP/Reference/Headers/Proxy-Authenticate
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP-**`Proxy-Authenticate`**-{{Glossary("response_header", "Antwort-Header")}} definiert die [Authentifizierungsmethode](/de/docs/Web/HTTP/Guides/Authentication) (oder die {{Glossary("Challenge", "Challenge")}}), die verwendet werden sollte, um Zugang zu einer Ressource hinter einem {{Glossary("proxy_server", "Proxy-Server")}} zu erhalten.
Er wird in einer {{HTTPStatus("407", "407 Proxy Authentication Required")}}-Antwort gesendet, damit ein Client sich gegenüber einem Proxy, der eine Authentifizierung erfordert, identifizieren kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Proxy-Authenticate: <challenge>, …
```

Der Wert ist eine durch Kommas getrennte Liste von Challenges, wobei ein `<challenge>` aus einem `<auth-scheme>` besteht, gefolgt von einem optionalen `<token68>` oder einer durch Kommas getrennten Liste von `<auth-params>`:

```plain
challenge = <auth-scheme> <auth-param>, …, <auth-paramN>
challenge = <auth-scheme> <token68>
```

Zum Beispiel:

```http
Proxy-Authenticate: <auth-scheme>
Proxy-Authenticate: <auth-scheme> token68
Proxy-Authenticate: <auth-scheme> auth-param1=param-token1
Proxy-Authenticate: <auth-scheme> auth-param1=param-token1, …, auth-paramN=param-tokenN
```

Das Vorhandensein eines `token68` oder Authentifizierungsparameter hängt vom ausgewählten `<auth-scheme>` ab.
Zum Beispiel erfordert die [Basic-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme) ein `<realm>` und erlaubt die optionale Verwendung des `charset`-Schlüssels, unterstützt jedoch kein `token68`:

```http
Proxy-Authenticate: Basic realm="Dev", charset="UTF-8"
```

## Direktiven

- `<auth-scheme>`
  - : Ein nicht case-sensitives Token, das das verwendete [Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes) angibt.
    Einige der häufigeren Typen sind [`Basic`](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`.
    Die IANA führt eine [Liste von Authentifizierungsschemas](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), aber es gibt auch andere Schemas, die von Host-Diensten angeboten werden.
- `<auth-param>` {{optional_inline}}
  - : Ein Authentifizierungsparameter, dessen Format vom `<auth-scheme>` abhängt.
    `<realm>` wird unten beschrieben, da es sich um einen häufigen Authentifizierungsparameter vieler Authentifizierungsschemas handelt.
    - `<realm>` {{optional_inline}}
      - : Der String `realm`, gefolgt von `=` und einem in Anführungszeichen gesetzten String, der einen geschützten Bereich beschreibt, zum Beispiel `realm="staging environment"`.
        Ein Realm erlaubt einem Server, die Bereiche, die er schützt, zu partitionieren (wenn dies von einem Schema unterstützt wird, das solche Partitionierung erlaubt).
        Einige Clients zeigen diesen Wert dem Benutzer an, um ihn darüber zu informieren, welche besonderen Anmeldedaten erforderlich sind — obwohl die meisten Browser dies nicht mehr tun, um Phishing entgegenzuwirken.
        Der einzige zuverlässig unterstützte Zeichensatz für diesen Wert ist `us-ascii`.
        Wenn kein Realm angegeben ist, zeigen Clients oft stattdessen einen formatierten Hostnamen an.
- `<token68>` {{optional_inline}}
  - : Ein Token, das für einige Schemas nützlich sein kann.
    Das Token erlaubt die 66 unreservierten URI-Zeichen plus einige weitere.
    Es kann eine {{Glossary("base64", "base64")}}, base64url, base32 oder base16 (Hexadezimal) Kodierung enthalten, mit oder ohne Padding, jedoch ohne Leerzeichen.
    Die `token68`-Alternative zu auth-param-Listen wird zur Konsistenz mit älteren Authentifizierungsschemas unterstützt.

In der Regel müssen Sie die entsprechenden Spezifikationen für die für jedes `<auth-scheme>` erforderlichen Authentifizierungsparameter überprüfen.

> [!NOTE]
> Weitere Details zu Authentifizierungsparametern finden Sie unter {{HTTPHeader("WWW-Authenticate")}}.

## Beispiele

### Proxy-Authenticate Basic-Authentifizierung

Die folgende Antwort zeigt an, dass ein Basic-Authentifizierungsschema mit einem Realm erforderlich ist:

```http
Proxy-Authenticate: Basic realm="Staging server"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("WWW-Authenticate")}}
- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication)
- {{HTTPHeader("Authorization")}}, {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
