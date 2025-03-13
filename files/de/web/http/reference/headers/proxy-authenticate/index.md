---
title: Proxy-Authenticate
slug: Web/HTTP/Reference/Headers/Proxy-Authenticate
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Proxy-Authenticate`** {{Glossary("response_header", "Antwort-Header")}} definiert die [Authentifizierungsmethode](/de/docs/Web/HTTP/Guides/Authentication) (oder {{Glossary("Challenge", "Challenge")}}), die verwendet werden sollte, um Zugang zu einer Ressource hinter einem {{Glossary("proxy_server", "Proxy-Server")}} zu erhalten.
Er wird in einer {{HTTPStatus("407", "407 Proxy Authentication Required")}} Antwort gesendet, damit ein Client sich gegenüber einem Proxy identifizieren kann, der Authentifizierung erfordert.

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

Wobei ein `<challenge>` aus einem `<auth-scheme>` besteht, gefolgt von einem optionalen `<token68>` oder einer durch Kommas getrennten Liste von `<auth-params>`:

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

Das Vorhandensein eines `token68` oder Authentifizierungsparametern hängt vom gewählten `<auth-scheme>` ab.
Zum Beispiel erfordert die [Basic-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme) ein `<realm>` und erlaubt die optionale Verwendung des `charset`-Schlüssels, unterstützt aber kein `token68`:

```http
Proxy-Authenticate: Basic realm="Dev", charset="UTF-8"
```

## Direktiven

- `<auth-scheme>`
  - : Ein nicht-empfindliches Token, das das verwendete [Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes) angibt.
    Einige der häufigeren Typen sind [`Basic`](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`.
    Die IANA führt eine [Liste der Authentifizierungsschemata](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), es gibt jedoch auch andere Schemata, die von Hostdiensten angeboten werden.
- `<auth-param>` {{optional_inline}}
  - : Ein Authentifizierungsparameter, dessen Format vom `<auth-scheme>` abhängt.
    `<realm>` wird unten beschrieben, da es ein häufiger Authentifizierungsparameter unter vielen Auth-Schemas ist.
    - `<realm>` {{optional_inline}}
      - : Der String `realm` gefolgt von `=` und einem in Anführungszeichen gesetzten String, der einen geschützten Bereich beschreibt, zum Beispiel `realm="staging environment"`.
        Ein Bereich ermöglicht es einem Server, die durch ihn geschützten Bereiche zu partitionieren (wenn unterstützt von einem Schema, das solche Partitionierung erlaubt).
        Einige Clients zeigen diesen Wert dem Benutzer an, um ihn darüber zu informieren, welche spezifischen Anmeldedaten erforderlich sind — obwohl die meisten Browser dies inzwischen nicht mehr tun, um Phishing entgegenzuwirken.
        Das einzig zuverlässig unterstützte Zeichensatz für diesen Wert ist `us-ascii`.
        Falls kein Bereich angegeben wird, zeigen Clients oft statt dessen einen formatierten Hostnamen an.
- `<token68>` {{optional_inline}}
  - : Ein Token, das für einige Schemata nützlich sein kann.
    Das Token erlaubt die 66 nicht reservierten URI-Zeichen plus einige andere.
    Es kann {{Glossary("base64", "base64")}}, base64url, base32 oder base16 (hex) Codierung ohne oder mit Padding enthalten, jedoch ohne Leerzeichen.
    Die `token68`-Alternative zu auth-param-Listen wird unterstützt, um die Konsistenz mit älteren Authentifizierungsschemata zu bewahren.

Im Allgemeinen müssen Sie die relevanten Spezifikationen bezüglich der Authentifizierungsparameter überprüfen, die für jedes `<auth-scheme>` benötigt werden.

> [!NOTE]
> Siehe {{HTTPHeader("WWW-Authenticate")}} für weitere Details über Authentifizierungsparameter.

## Beispiele

### Proxy-Authenticate Basic auth

Die folgende Antwort gibt an, dass ein Basic-Auth-Schema mit einem Bereich erforderlich ist:

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
