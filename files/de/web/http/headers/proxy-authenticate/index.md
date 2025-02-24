---
title: Proxy-Authenticate
slug: Web/HTTP/Headers/Proxy-Authenticate
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Proxy-Authenticate`** {{Glossary("response_header", "Antwortheader")}} definiert die [Authentifizierungsmethode](/de/docs/Web/HTTP/Authentication) (oder {{Glossary("Challenge", "Challenge")}}), die verwendet werden sollte, um Zugriff auf eine Ressource hinter einem {{Glossary("proxy_server", "Proxyserver")}} zu erhalten.
Er wird in einer {{HTTPStatus("407", "407 Proxy Authentication Required")}}-Antwort gesendet, damit sich ein Client bei einem Proxy identifizieren kann, der eine Authentifizierung erfordert.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

Eine komma-separierte Liste von einem oder mehreren Authentifizierungs-Challenges:

```http
Proxy-Authenticate: <challenge>
```

Wobei ein `<challenge>` aus einem `<auth-scheme>` besteht, gefolgt von einem optionalen `<token68>` oder einer komma-separierten Liste von `<auth-params>`:

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
Zum Beispiel erfordert die [Basis-Authentifizierung](/de/docs/Web/HTTP/Authentication#basic_authentication_scheme) ein `<realm>` und erlaubt die optionale Verwendung des `charset`-Schlüssels, unterstützt jedoch kein `token68`:

```http
Proxy-Authenticate: Basic realm="Dev", charset="UTF-8"
```

## Direktiven

- `<auth-scheme>`
  - : Ein nicht case-sensitiver Token, der das verwendete [Authentifizierungsschema](/de/docs/Web/HTTP/Authentication#authentication_schemes) angibt.
    Einige der häufigeren Typen sind [`Basic`](/de/docs/Web/HTTP/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`.
    Die IANA führt eine [Liste von Authentifizierungsschemata](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), aber es gibt weitere Schemata, die von Host-Diensten angeboten werden.
- `<auth-param>` {{optional_inline}}
  - : Ein Authentifizierungsparameter, dessen Format vom `<auth-scheme>` abhängt.
    `<realm>` wird unten beschrieben, da es ein häufig verwendeter Authentifizierungsparameter unter vielen Auth-Schemata ist.
    - `<realm>` {{optional_inline}}
      - : Der String `realm` gefolgt von `=` und einem in Anführungszeichen gesetzten String, der einen geschützten Bereich beschreibt, zum Beispiel `realm="staging environment"`.
        Ein Realm ermöglicht es einem Server, die Bereiche, die er schützt, zu partitionieren (wenn das von einem Schema unterstützt wird, das eine solche Partitionierung erlaubt).
        Einige Clients zeigen diesen Wert dem Benutzer an, um ihn über die erforderlichen Zugangsdaten zu informieren — obwohl die meisten Browser dies zum Schutz vor Phishing eingestellt haben.
        Das einzige zuverlässig unterstützte Zeichenset für diesen Wert ist `us-ascii`.
        Wenn kein Realm angegeben ist, zeigen Clients oft anstelle dessen einen formatierten Hostnamen an.
- `<token68>` {{optional_inline}}
  - : Ein Token, das für einige Schemata nützlich sein kann.
    Das Token erlaubt die 66 nicht reservierten URI-Zeichen plus einige andere.
    Es kann eine {{Glossary("base64", "base64")}}, base64url, base32 oder base16 (Hex) Kodierung aufnehmen, mit oder ohne Padding, jedoch ohne Leerzeichen.
    Die `token68`-Alternative zu Auth-Param-Listen wird zur Konsistenz mit älteren Authentifizierungsschemata unterstützt.

Im Allgemeinen müssen Sie die relevanten Spezifikationen für die benötigten Authentifizierungsparameter für jedes `<auth-scheme>` prüfen.

> [!NOTE]
> Weitere Informationen zu Authentifizierungsparametern finden Sie unter {{HTTPHeader("WWW-Authenticate")}}.

## Beispiele

### Proxy-Authenticate Basis-Authentifizierung

Die folgende Antwort gibt an, dass ein Basis-Authentifizierungsschema mit einem Realm benötigt wird:

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
