---
title: Proxy-Authenticate
slug: Web/HTTP/Headers/Proxy-Authenticate
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}

Der HTTP-**`Proxy-Authenticate`**-{{Glossary("response_header", "Antwortheader")}} definiert die [Authentifizierungsmethode](/de/docs/Web/HTTP/Authentication) (oder {{Glossary("Challenge", "Challenge")}}), die verwendet werden sollte, um auf eine Ressource hinter einem {{Glossary("proxy_server", "Proxy-Server")}} zuzugreifen.
Er wird in einer {{HTTPStatus("407", "407 Proxy Authentication Required")}}-Antwort gesendet, damit sich ein Client bei einem Proxy, der eine Authentifizierung erfordert, identifizieren kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

Eine durch Kommas getrennte Liste von einem oder mehreren Authentifizierungs-Herausforderungen:

```http
Proxy-Authenticate: <challenge>
```

Dabei besteht eine `<challenge>` aus einem `<auth-scheme>`, gefolgt von einem optionalen `<token68>` oder einer kommagetrennten Liste von `<auth-params>`:

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

Das Vorhandensein eines `token68` oder von Authentifizierungs-Parametern hängt vom gewählten `<auth-scheme>` ab.
Zum Beispiel erfordert [Basisauthentifizierung](/de/docs/Web/HTTP/Authentication#basic_authentication_scheme) ein `<realm>` und erlaubt die optionale Verwendung des `charset`-Schlüssels, unterstützt jedoch kein `token68`:

```http
Proxy-Authenticate: Basic realm="Dev", charset="UTF-8"
```

## Direktiven

- `<auth-scheme>`
  - : Ein nicht case-sensitiver Token, der das verwendete [Authentifizierungsschema](/de/docs/Web/HTTP/Authentication#authentication_schemes) angibt.
    Einige der gängigsten Typen sind [`Basic`](/de/docs/Web/HTTP/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`.
    IANA führt eine [Liste von Authentifizierungsschemata](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), aber es gibt auch andere Schemata, die von Hosting-Diensten angeboten werden.
- `<auth-param>` {{optional_inline}}
  - : Ein Authentifizierungs-Parameter, dessen Format vom `<auth-scheme>` abhängt.
    `<realm>` wird unten beschrieben, da es ein häufiger Authentifizierungs-Parameter unter vielen Authentifizierungsschemata ist.
    - `<realm>` {{optional_inline}}
      - : Der String `realm` gefolgt von `=` und einem in Anführungszeichen gesetzten String, der einen geschützten Bereich beschreibt, z.B. `realm="staging environment"`.
        Ein Realm ermöglicht es einem Server, die Bereiche, die er schützt, zu unterteilen (wenn dies von einem Schema unterstützt wird, das solche Unterteilungen zulässt).
        Einige Clients zeigen diesen Wert dem Benutzer an, um ihn darüber zu informieren, welche speziellen Anmeldedaten erforderlich sind — obwohl die meisten Browser dies eingestellt haben, um Phishing entgegenzuwirken.
        Der einzige zuverlässig unterstützte Zeichensatz für diesen Wert ist `us-ascii`.
        Wenn kein Realm angegeben ist, zeigen Clients oft einen formatierten Hostnamen anstelle dessen.
- `<token68>` {{optional_inline}}
  - : Ein Token, das für einige Schemata nützlich sein kann.
    Das Token erlaubt die 66 unreservierten URI-Zeichen plus einige andere.
    Es kann eine {{Glossary("base64", "base64")}}, base64url, base32 oder base16 (Hex)-Kodierung enthalten, mit oder ohne Padding, aber ohne Leerzeichen.
    Die `token68`-Alternative zu auth-param-Listen wird für die Kompatibilität mit älteren Authentifizierungsschemata unterstützt.

Im Allgemeinen müssen Sie die relevanten Spezifikationen für die benötigten Authentifizierungs-Parameter für jedes `<auth-scheme>` überprüfen.

> [!NOTE]
> Weitere Informationen zu Authentifizierungs-Parametern finden Sie unter {{HTTPHeader("WWW-Authenticate")}}.

## Beispiele

### Proxy-Authenticate Basic auth

Die folgende Antwort zeigt, dass ein Basic-Auth-Schema mit einem Realm erforderlich ist:

```http
Proxy-Authenticate: Basic realm="Staging server"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("WWW-Authenticate")}}
- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication)
- {{HTTPHeader("Authorization")}}, {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
