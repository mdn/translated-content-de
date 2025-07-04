---
title: Authorization header
short-title: Authorization
slug: Web/HTTP/Reference/Headers/Authorization
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`Authorization`**-{{Glossary("request_header", "Anforderungsheader")}} kann verwendet werden, um Anmeldedaten bereitzustellen, die einen Benutzeragenten bei einem Server authentifizieren und den Zugriff auf geschützte Ressourcen ermöglichen.

Der `Authorization`-Header wird in der Regel, aber nicht immer, gesendet, nachdem der Benutzeragent zum ersten Mal versucht hat, eine geschützte Ressource ohne Anmeldedaten anzufordern. Der Server antwortet mit einer {{HTTPStatus("401", "401 Unauthorized")}}-Nachricht, die mindestens einen {{HTTPHeader("WWW-Authenticate")}}-Header enthält. Dieser Header gibt die Authentifizierungsschemata an, die zum Zugriff auf die Ressource verwendet werden können und enthält jegliche zusätzlichen Informationen, die der Client benötigt, um sie zu verwenden. Der Benutzeragent sollte das sicherste Authentifizierungsschema auswählen, das er von den angebotenen unterstützt, den Benutzer zur Eingabe seiner Anmeldedaten auffordern und dann die Ressource mit den codierten Anmeldedaten im `Authorization`-Header erneut anfordern.

Dieser Header wird bei Cross-Origin-Redirects entfernt.

> [!NOTE]
> Dieser Header ist Teil des [allgemeinen HTTP-Authentifizierungsrahmens](/de/docs/Web/HTTP/Guides/Authentication#the_general_http_authentication_framework).
> Er kann mit einer Reihe von [Authentifizierungsschemata](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes) verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
  - : Das [Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes), das definiert, wie die Anmeldedaten kodiert werden.
    Einige der gebräuchlicheren Typen sind (nicht groß-/klein-schreibungsempfindlich): [`Basic`](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`.

    > [!NOTE]
    > Weitere Informationen/Optionen finden Sie unter [HTTP-Authentifizierung > Authentifizierungsschemata](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes)

Abgesehen von `<auth-scheme>` sind die übrigen Direktiven spezifisch für jedes [Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes). Im Allgemeinen müssen Sie die entsprechenden Spezifikationen für diese überprüfen (Schlüssel für einen kleinen Teil der Schemata sind unten aufgeführt).

### Basic-Authentifizierung

- `<credentials>`
  - : Die Anmeldedaten, kodiert gemäß dem angegebenen Schema.

    > [!NOTE]
    > Informationen über den Kodierungsalgorithmus finden Sie in den unten genannten Beispielen, in {{HTTPHeader("WWW-Authenticate")}}, in [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication) und in den entsprechenden Spezifikationen.

### Digest-Authentifizierung

- `<response>`
  - : Eine Zeichenfolge der Hexadezimalziffern, die belegt, dass der Benutzer ein Passwort kennt.
    Der Algorithmus kodiert den Benutzernamen und das Passwort, den Bereich (realm), `cnonce`, `qop`, `nc` usw. Es wird im Detail in der Spezifikation beschrieben.
- `username`
  - : Eine in Anführungszeichen gesetzte Zeichenfolge, die den Benutzernamen für das angegebene `realm` entweder im Klartext oder als Hash-Code im Hexadezimalsystem enthält. Wenn der Name Zeichen enthält, die im Feld nicht erlaubt sind, kann stattdessen `username*` verwendet werden (nicht "sowie").
- `username*`
  - : Der Benutzername ist mit einer in RFC5987 definierten erweiterten Notation formatiert. Dies sollte nur verwendet werden, wenn der Name nicht in `username` kodiert werden kann und wenn `userhash` auf `"false"` gesetzt ist.
- `uri`
  - : Die _Effective Request URI_. Weitere Informationen finden Sie in der Spezifikation.
- `realm`
  - : Bereich des angeforderten Benutzernamens/Passworts (sollte wieder mit dem Wert in der entsprechenden {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource übereinstimmen).
- `opaque`
  - : Der Wert in der entsprechenden {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource.
- `algorithm`
  - : Der Algorithmus, der zur Berechnung des Digests verwendet wird. Muss ein unterstützter Algorithmus aus der {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource sein.
- `qop`
  - : Ein Token, das die _quality of protection_ (Qualität des Schutzes) angibt, die auf die Nachricht angewendet wird. Muss mit dem einen Wert in der Menge übereinstimmen, die in der {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource angegeben ist.
    - `"auth"`: Authentifizierung
    - `"auth-int"`: Authentifizierung mit Integritätsschutz
- `cnonce`
  - : Ein zitierter Zeichenfolgenwert, der nur {{Glossary("ASCII", "ASCII")}} enthält und vom Client bereitgestellt wird. Dies wird sowohl vom Client als auch vom Server verwendet, um eine gegenseitige Authentifizierung bereitzustellen, einige Nachrichtenschutzmaßnahmen zu bieten und "gewählte Klartextangriffe" zu vermeiden. Weitere Informationen finden Sie in der Spezifikation.
- `nc`
  - : Nonce-Zählung. Die hexadezimale Zählung von Anforderungen, bei denen der Client den aktuellen `cnonce`-Wert gesendet hat (einschließlich der aktuellen Anforderung). Der Server kann doppelte `nc`-Werte verwenden, um Wiederholungsanforderungen zu erkennen.
- `userhash` {{optional_inline}}
  - : `"true"`, wenn der Benutzername gehasht wurde. Standardmäßig `"false"`.

## Beispiele

### Basic-Authentifizierung

Für die `Basic`-Authentifizierung werden die Anmeldedaten zunächst durch das Kombinieren des Benutzernamens und des Passworts mit einem Doppelpunkt (z.B. `aladdin:opensesame`) erstellt und dann die resultierende Zeichenfolge in {{Glossary("Base64", "`base64`")}} kodiert (z.B. `YWxhZGRpbjpvcGVuc2VzYW1l`).

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

> [!WARNING]
> Die {{Glossary("Base64", "Base64")}}-Kodierung kann leicht rückgängig gemacht werden, um den ursprünglichen Namen und das Passwort zu erhalten, daher bietet die `Basic`-Authentifizierung keine kryptografische Sicherheit.
> {{Glossary("HTTPS", "HTTPS")}} wird immer empfohlen, wenn eine Authentifizierung verwendet wird, aber noch mehr, wenn `Basic`-Authentifizierung verwendet wird.

Siehe auch [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication) für Beispiele, wie Sie Apache- oder Nginx-Server konfigurieren können, um Ihre Website mit HTTP-Basic-Authentifizierung durch ein Passwort zu schützen.

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
