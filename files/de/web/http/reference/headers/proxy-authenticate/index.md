---
title: Proxy-Authenticate header
short-title: Proxy-Authenticate
slug: Web/HTTP/Reference/Headers/Proxy-Authenticate
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Proxy-Authenticate`** {{Glossary("response_header", "Antwortheader")}} definiert die [Authentifizierungsmethode](/de/docs/Web/HTTP/Guides/Authentication) (oder {{Glossary("Challenge", "Challenge")}}), die verwendet werden sollte, um Zugriff auf eine Ressource hinter einem {{Glossary("proxy_server", "Proxy-Server")}} zu erhalten. Er wird in einer {{HTTPStatus("407", "407 Proxy Authentication Required")}}-Antwort gesendet, damit sich ein Client gegenüber einem Proxy, der Authentifizierung erfordert, identifizieren kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotenes Anforderungsheader")}}</th>
      <td>Ja</td>
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

Das Vorhandensein eines `token68` oder Authentifizierungsparametern hängt vom gewählten `<auth-scheme>` ab. Zum Beispiel erfordert die [Basisauthentifizierung](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme) ein `<realm>`, erlaubt die optionale Verwendung des `charset`-Schlüssels, unterstützt jedoch kein `token68`:

```http
Proxy-Authenticate: Basic realm="Dev", charset="UTF-8"
```

## Direktiven

- `<auth-scheme>`
  - : Ein nicht case-sensitives Token, das das verwendete [Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes) anzeigt. Einige der häufigeren Typen sind [`Basic`](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`. IANA pflegt eine [Liste von Authentifizierungsschemata](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), aber es gibt auch andere Schemata, die von Host-Diensten angeboten werden.
- `<auth-param>` {{optional_inline}}
  - : Ein Authentifizierungsparameter, dessen Format vom `<auth-scheme>` abhängt. `<realm>` wird unten beschrieben, da es ein häufiger Authentifizierungsparameter vieler Authentifizierungsschemata ist.
    - `<realm>` {{optional_inline}}
      - : Der String `realm`, gefolgt von `=` und einer in Anführungszeichen gesetzten Zeichenkette, die einen geschützten Bereich beschreibt, zum Beispiel `realm="staging environment"`. Ein Realm erlaubt es einem Server, die Bereiche, die er schützt, zu partitionieren (wenn dies von einem Schema unterstützt wird, das eine solche Partitionierung ermöglicht). Einige Clients zeigen diesen Wert dem Benutzer an, um ihn darüber zu informieren, welche spezifischen Anmeldeinformationen erforderlich sind - obwohl die meisten Browser dies eingestellt haben, um Phishing zu verhindern. Das einzige zuverlässig unterstützte Zeichensatz für diesen Wert ist `us-ascii`. Wenn kein Realm angegeben ist, zeigen Clients oft einen formatierten Hostnamen.
- `<token68>` {{optional_inline}}
  - : Ein Token, das für einige Schemata nützlich sein kann. Das Token erlaubt die 66 nicht reservierten URI-Zeichen plus einige weitere. Es kann eine {{Glossary("base64", "base64")}}, base64url, base32 oder base16 (hex) Codierung halten, mit oder ohne Padding, jedoch ohne Leerzeichen. Die `token68`-Alternative zu auth-param-Listen wird aus Gründen der Konsistenz mit älteren Authentifizierungsschemata unterstützt.

Im Allgemeinen müssen Sie die relevanten Spezifikationen für die für jedes `<auth-scheme>` benötigten Authentifizierungsparameter prüfen.

> [!NOTE]
> Weitere Informationen zu Authentifizierungsparametern finden Sie unter {{HTTPHeader("WWW-Authenticate")}}.

## Beispiele

### Proxy-Authenticate Basic-Auth

Die folgende Antwort gibt an, dass ein Basic-Auth-Schema mit einem Realm erforderlich ist:

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
