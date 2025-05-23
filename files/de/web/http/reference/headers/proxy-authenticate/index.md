---
title: Proxy-Authenticate header
short-title: Proxy-Authenticate
slug: Web/HTTP/Reference/Headers/Proxy-Authenticate
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Proxy-Authenticate`** {{Glossary("response_header", "Antwort-Header")}} definiert die [Authentifizierungsmethode](/de/docs/Web/HTTP/Guides/Authentication) (oder {{Glossary("Challenge", "Challenge")}}), die verwendet werden sollte, um auf eine Ressource hinter einem {{Glossary("proxy_server", "Proxy-Server")}} zuzugreifen. Er wird in einer {{HTTPStatus("407", "407 Proxy Authentication Required")}} Antwort gesendet, damit sich ein Client gegenüber einem Proxy, der eine Authentifizierung erfordert, identifizieren kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

Eine durch Kommas getrennte Liste von einem oder mehreren Authentifizierungs-Challenges:

```http
Proxy-Authenticate: <challenge>
```

Wobei ein `<challenge>` aus einem `<auth-scheme>`, gefolgt von einem optionalen `<token68>` oder einer durch Kommas getrennten Liste von `<auth-params>` besteht:

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

Das Vorhandensein eines `token68` oder von Authentifizierungsparametern hängt vom gewählten `<auth-scheme>` ab. Zum Beispiel erfordert die [Basic-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme) ein `<realm>` und gestattet die optionale Verwendung eines `charset` Schlüssels, unterstützt jedoch kein `token68`:

```http
Proxy-Authenticate: Basic realm="Dev", charset="UTF-8"
```

## Direktiven

- `<auth-scheme>`
  - : Ein nicht case-sensitives Token, das das verwendete [Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes) angibt. Einige der häufigeren Typen sind [`Basic`](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`. IANA führt eine [Liste der Authentifizierungsschemata](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), aber es gibt andere Schemata, die von Host-Diensten angeboten werden.
- `<auth-param>` {{optional_inline}}
  - : Ein Authentifizierungsparameter, dessen Format vom `<auth-scheme>` abhängt. `<realm>` wird unten beschrieben, da es ein gängiger Authentifizierungsparameter bei vielen Authentifizierungsschemata ist.
    - `<realm>` {{optional_inline}}
      - : Der String `realm` gefolgt von `=` und einem in Anführungszeichen gesetzten String, der einen geschützten Bereich beschreibt, zum Beispiel `realm="staging environment"`. Ein Realm erlaubt es einem Server, die Bereiche, die er schützt, zu unterteilen (wenn dies durch ein Schema, das solche Unterteilungen erlaubt, unterstützt wird). Einige Clients zeigen diesen Wert dem Nutzer an, um ihn darüber zu informieren, welche bestimmten Anmeldedaten erforderlich sind – obwohl die meisten Browser damit aufgehört haben, um Phishing entgegenzuwirken. Der einzig zuverlässig unterstützte Zeichensatz für diesen Wert ist `us-ascii`. Wenn kein Realm angegeben ist, zeigen Clients häufig einen formatierten Hostnamen an.
- `<token68>` {{optional_inline}}
  - : Ein Token, das für einige Schemata nützlich sein kann. Das Token erlaubt die 66 nicht reservierten URI-Zeichen plus einige andere. Es kann eine {{Glossary("base64", "base64")}}, base64url, base32 oder base16 (hex) Codierung mit oder ohne Padding enthalten, jedoch ohne Leerzeichen. Die `token68` Alternative zu Auth-param Listen wird zur Konsistenz mit älteren Authentifizierungsschemata unterstützt.

Im Allgemeinen müssen Sie die relevanten Spezifikationen für die benötigten Authentifizierungsparameter für jedes `<auth-scheme>` prüfen.

> [!NOTE]
> Siehe {{HTTPHeader("WWW-Authenticate")}} für weitere Details zu Authentifizierungsparametern.

## Beispiele

### Proxy-Authenticate Basic auth

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
