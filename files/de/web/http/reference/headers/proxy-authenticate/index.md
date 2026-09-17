---
title: Proxy-Authenticate header
short-title: Proxy-Authenticate
slug: Web/HTTP/Reference/Headers/Proxy-Authenticate
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

Der HTTP-**`Proxy-Authenticate`**-{{Glossary("response_header", "Response-Header")}} definiert die [Authentifizierungs](/de/docs/Web/HTTP/Guides/Authentication)methode (oder {{Glossary("Challenge", "Challenge")}}), die verwendet werden sollte, um Zugriff auf eine Ressource hinter einem {{Glossary("proxy_server", "Proxyserver")}} zu erhalten.
Er wird in einer {{HTTPStatus("407", "407 Proxy Authentication Required")}}-Antwort gesendet, damit sich ein Client gegenüber einem Proxy identifizieren kann, der eine Authentifizierung erfordert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Proxy-Authenticate: <challenge>, …
```

Der Wert ist eine durch Kommas getrennte Liste von Challenges, wobei eine `<challenge>` aus einem `<auth-scheme>` besteht, gefolgt von einem optionalen `<token68>` oder einer durch Kommas getrennten Liste von `<auth-params>`:

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

Das Vorhandensein eines `token68` oder von Authentifizierungsparametern hängt vom ausgewählten `<auth-scheme>` ab.
Beispielsweise erfordert die [Basic-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme) ein `<realm>` und erlaubt die optionale Verwendung des Schlüssels `charset`, unterstützt jedoch kein `token68`:

```http
Proxy-Authenticate: Basic realm="Dev", charset="UTF-8"
```

## Direktiven

- `<auth-scheme>`
  - : Ein Token ohne Beachtung der Groß-/Kleinschreibung, das das verwendete [Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes) angibt.
    Einige der gebräuchlicheren Typen sind [`Basic`](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`.
    Die IANA führt eine [Liste der Authentifizierungsschemas](https://www.iana.org/assignments/http-authschemes), es gibt jedoch auch andere Schemas, die von Host-Diensten angeboten werden.
- `<auth-param>` {{optional_inline}}
  - : Ein Authentifizierungsparameter, dessen Format vom `<auth-scheme>` abhängt.
    `<realm>` wird unten beschrieben, da es ein bei vielen Authentifizierungsschemas gebräuchlicher Authentifizierungsparameter ist.
    - `<realm>` {{optional_inline}}
      - : Die Zeichenfolge `realm`, gefolgt von `=` und einer Zeichenfolge in Anführungszeichen, die einen geschützten Bereich beschreibt, zum Beispiel `realm="staging environment"`.
        Ein Realm ermöglicht es einem Server, die Bereiche, die er schützt, zu unterteilen (wenn dies von einem Schema unterstützt wird, das eine solche Unterteilung erlaubt).
        Einige Clients zeigen diesen Wert Benutzerinnen und Benutzern an, um sie darüber zu informieren, welche spezifischen Zugangsdaten erforderlich sind — die meisten Browser tun dies jedoch nicht mehr, um Phishing entgegenzuwirken.
        Der einzige zuverlässig unterstützte Zeichensatz für diesen Wert ist `us-ascii`.
        Wenn kein Realm angegeben ist, zeigen Clients stattdessen häufig einen formatierten Hostnamen an.
- `<token68>` {{optional_inline}}
  - : Ein Token, das für einige Schemas nützlich sein kann.
    Das Token erlaubt die 66 nicht reservierten URI-Zeichen sowie einige weitere.
    Es kann eine {{Glossary("base64", "base64")}}-, base64url-, base32- oder base16-(hex)-Kodierung mit oder ohne Padding enthalten, jedoch ohne Leerzeichen.
    Die `token68`-Alternative zu auth-param-Listen wird aus Gründen der Konsistenz mit älteren Authentifizierungsschemas unterstützt.

Im Allgemeinen müssen Sie die relevanten Spezifikationen auf die für jedes `<auth-scheme>` erforderlichen Authentifizierungsparameter prüfen.

> [!NOTE]
> Weitere Details zu Authentifizierungsparametern finden Sie unter {{HTTPHeader("WWW-Authenticate")}}.

## Beispiele

### Proxy-Authenticate Basic-Authentifizierung

Die folgende Antwort gibt an, dass ein Basic-Authentifizierungsschema mit einem Realm erforderlich ist:

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
