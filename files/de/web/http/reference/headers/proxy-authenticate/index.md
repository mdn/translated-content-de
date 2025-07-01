---
title: Proxy-Authenticate header
short-title: Proxy-Authenticate
slug: Web/HTTP/Reference/Headers/Proxy-Authenticate
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

{{HTTPSidebar}}

Der HTTP-**`Proxy-Authenticate`**-{{Glossary("response_header", "Antwort-Header")}} definiert die [Authentifizierungsmethode](/de/docs/Web/HTTP/Guides/Authentication) (oder {{Glossary("Challenge", "Challenge")}}), die verwendet werden sollte, um Zugriff auf eine Ressource hinter einem {{Glossary("proxy_server", "Proxy-Server")}} zu erhalten.
Er wird in einer {{HTTPStatus("407", "407 Proxy Authentication Required")}}-Antwort gesendet, damit sich ein Client bei einem Proxy, der Authentifizierung erfordert, identifizieren kann.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Proxy-Authenticate: <challenge>, …
```

Der Wert ist eine durch Kommas getrennte Liste von Herausforderungen, wobei ein `<challenge>` aus einem `<auth-scheme>` besteht, gefolgt von einem optionalen `<token68>` oder einer durch Kommas getrennten Liste von `<auth-params>`:

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
Beispielsweise benötigt die [Basic Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme) ein `<realm>` und erlaubt die optionale Verwendung des `charset`-Schlüssels, unterstützt aber kein `token68`:

```http
Proxy-Authenticate: Basic realm="Dev", charset="UTF-8"
```

## Direktiven

- `<auth-scheme>`
  - : Ein nicht case-sensitiver Token, der das verwendete [Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes) angibt.
    Einige der häufigeren Typen sind [`Basic`](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`.
    IANA pflegt eine [Liste von Authentifizierungsschemas](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), aber es gibt auch andere Schemas, die von Host-Diensten angeboten werden.
- `<auth-param>` {{optional_inline}}
  - : Ein Authentifizierungsparameter, dessen Format vom `<auth-scheme>` abhängt.
    `<realm>` wird unten beschrieben, da es ein häufiger Authentifizierungsparameter unter vielen Authentifizierungsschemata ist.
    - `<realm>` {{optional_inline}}
      - : Der String `realm` gefolgt von `=` und einem in Anführungszeichen gesetzten String, der einen geschützten Bereich beschreibt, zum Beispiel `realm="staging environment"`.
        Ein Realm ermöglicht es einem Server, die Bereiche, die er schützt, zu partitionieren (wenn von einem Schema unterstützt, das eine solche Partitionierung erlaubt).
        Einige Clients zeigen diesen Wert dem Benutzer, um ihn darüber zu informieren, welche speziellen Anmeldedaten erforderlich sind — obwohl die meisten Browser dies nicht mehr tun, um Phishing zu bekämpfen.
        Das einzige zuverlässig unterstützte Zeichensatz für diesen Wert ist `us-ascii`.
        Wenn kein Realm angegeben ist, zeigen Clients oft einen formatierten Hostnamen an.
- `<token68>` {{optional_inline}}
  - : Ein Token, das für einige Schemas nützlich sein kann.
    Das Token erlaubt die 66 unreservierten URI-Zeichen plus einige andere.
    Es kann eine {{Glossary("base64", "base64")}}-, base64url-, base32- oder base16-(Hex-)Kodierung halten, mit oder ohne Padding, aber ohne Leerzeichen.
    Die `token68`-Alternative zu auth-param-Listen wird zur Konsistenz mit älteren Authentifizierungsschemas unterstützt.

Generell müssen Sie die relevanten Spezifikationen für die Authentifizierungsparameter für jedes `<auth-scheme>` überprüfen.

> [!NOTE]
> Siehe {{HTTPHeader("WWW-Authenticate")}} für mehr Details zu Authentifizierungsparametern.

## Beispiele

### Proxy-Authenticate Basic Auth

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
- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication)
- {{HTTPHeader("Authorization")}}, {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
