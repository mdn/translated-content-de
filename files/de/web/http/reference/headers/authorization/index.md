---
title: Authorization header
short-title: Authorization
slug: Web/HTTP/Reference/Headers/Authorization
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{HTTPSidebar}}

Der HTTP-**`Authorization`**-{{Glossary("request_header", "Anforderungs-Header")}} kann verwendet werden, um Anmeldeinformationen bereitzustellen, die einen Benutzeragenten bei einem Server authentifizieren und so den Zugriff auf geschützte Ressourcen ermöglichen.

Der `Authorization`-Header wird normalerweise, aber nicht immer, gesendet, nachdem der Benutzeragent zuerst versucht hat, eine geschützte Ressource ohne Anmeldeinformationen anzufordern. Der Server antwortet mit einer {{HTTPStatus("401", "401 Unauthorized")}}-Nachricht, die mindestens einen {{HTTPHeader("WWW-Authenticate")}}-Header enthält. Dieser Header gibt die Authentifizierungsschemata an, die zum Zugriff auf die Ressource verwendet werden können, sowie alle zusätzlichen Informationen, die der Client benötigt, um sie zu verwenden. Der Benutzeragent sollte das sicherste unterstützte Authentifizierungsschema aus den angebotenen auswählen, den Benutzer nach seinen Anmeldeinformationen fragen und dann die Ressource mit den codierten Anmeldeinformationen im `Authorization`-Header erneut anfordern.

Dieser Header wird bei Cross-Origin-Redirects entfernt.

> [!NOTE]
> Dieser Header ist Teil des [allgemeinen HTTP-Authentifizierungsrahmens](/de/docs/Web/HTTP/Guides/Authentication#the_general_http_authentication_framework).
> Er kann mit einer Reihe von [Authentifizierungsschemata](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes) verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Authorization: <auth-scheme> <authorization-parameters>

// Basic authentication
Authorization: Basic <credentials>

// Digest authentication
Authorization: Digest username=<username>,
    realm="<realm>",
    uri="<url>",
    algorithm=<algorithm>,
    nonce="<nonce>",
    nc=<nc>,
    cnonce="<cnonce>",
    qop=<qop>,
    response="<response>",
    opaque="<opaque>"
```

## Direktiven

- `<auth-scheme>`

  - : Das [Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes), das definiert, wie die Anmeldeinformationen codiert werden.
    Einige der häufigeren Typen sind (nicht case-sensitive): [`Basic`](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`.

    > [!NOTE]
    > Für weitere Informationen/Optionen siehe [HTTP Authentication > Authentication schemes](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes)

Abgesehen von `<auth-scheme>` sind die übrigen Direktiven spezifisch für jedes [Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes). Im Allgemeinen müssen Sie die relevanten Spezifikationen für diese überprüfen (Schlüssel für einen kleinen Teil der Schemata sind unten aufgeführt).

### Basisauthentifizierung

- `<credentials>`

  - : Die Anmeldeinformationen, codiert gemäß dem angegebenen Schema.

    > [!NOTE]
    > Informationen zum Codierungsalgorithmus finden Sie in den Beispielen: unten, in {{HTTPHeader("WWW-Authenticate")}}, in [HTTP Authentication](/de/docs/Web/HTTP/Guides/Authentication) und in den relevanten Spezifikationen.

### Digest-Authentifizierung

- `<response>`
  - : Eine Zeichenfolge von Hexadezimalziffern, die beweist, dass der Benutzer ein Passwort kennt.
    Der Algorithmus codiert den Benutzernamen und das Passwort, den Bereich, cnonce, qop, nc und so weiter.
    Es wird detailliert in der Spezifikation beschrieben.
- `username`
  - : Eine in Anführungszeichen gesetzte Zeichenkette, die den Benutzernamen für den angegebenen `realm` entweder im Klartext oder als Hash-Code in hexadezimaler Notation enthält.
    Wenn der Name Zeichen enthält, die im Feld nicht erlaubt sind, kann stattdessen `username*` verwendet werden (nicht "zusätzlich").
- `username*`
  - : Der Benutzername im erweiterten Format gemäß RFC5987.
    Dies sollte nur verwendet werden, wenn der Name nicht in `username` codiert werden kann und wenn `userhash` auf `"false"` gesetzt ist.
- `uri`
  - : Die _wirksame Anforderungs-URI_. Siehe die Spezifikation für weitere Informationen.
- `realm`
  - : Bereich des angeforderten Benutzernamens/Passworts (sollte erneut mit dem Wert in der entsprechenden {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource übereinstimmen).
- `opaque`
  - : Der Wert in der entsprechenden {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource.
- `algorithm`
  - : Der Algorithmus, der zur Berechnung des Digests verwendet wird. Muss ein unterstützter Algorithmus aus der {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource sein.
- `qop`
  - : Ein Token, das die _Qualität des Schutzes_ für die Nachricht angibt.
    Muss mit dem einen Wert in der festgelegten Menge aus der {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource übereinstimmen.
    - `"auth"`: Authentifizierung
    - `"auth-int"`: Authentifizierung mit Integritätsschutz
- `cnonce`
  - : Eine in Anführungszeichen gesetzte {{Glossary("ASCII", "ASCII")}}-Zeichenfolge, die vom Client bereitgestellt wird.
    Diese wird sowohl von Client als auch Server verwendet, um gegenseitige Authentifizierung bereitzustellen, einigermaßen Integritätsschutz der Nachricht und um "gewählte Klartextangriffe" zu vermeiden.
    Siehe die Spezifikation für weitere Informationen.
- `nc`
  - : Nonce-Zähler. Der hexadezimale Zähler von Anfragen, bei denen der Client den aktuellen `cnonce`-Wert gesendet hat (einschließlich der aktuellen Anfrage).
    Der Server kann doppelte `nc`-Werte verwenden, um Wiederholungsanfragen zu erkennen.
- `userhash` {{optional_inline}}
  - : `"true"`, wenn der Benutzername gehasht wurde. `"false"` standardmäßig.

## Beispiele

### Basisauthentifizierung

Bei der `Basic`-Authentifizierung werden die Anmeldeinformationen erstellt, indem zuerst der Benutzername und das Passwort mit einem Doppelpunkt kombiniert werden (z.B. `aladdin:opensesame`) und dann die resultierende Zeichenfolge in {{Glossary("Base64", "`base64`")}} codiert wird (z.B. `YWxhZGRpbjpvcGVuc2VzYW1l`).

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

> [!WARNING] > {{Glossary("Base64", "Base64")}}-Codierung kann leicht zurückgesetzt werden, um den ursprünglichen Namen und das Passwort zu erhalten, daher bietet `Basic`-Authentifizierung keine kryptografische Sicherheit.
> {{Glossary("HTTPS", "HTTPS")}} wird immer empfohlen, wenn Authentifizierung verwendet wird, noch mehr jedoch bei Verwendung von `Basic`-Authentifizierung.

Siehe auch [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication) für Beispiele, wie Apache- oder Nginx-Server so konfiguriert werden, dass Ihre Website mit HTTP-Basisauthentifizierung passwortgeschützt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
