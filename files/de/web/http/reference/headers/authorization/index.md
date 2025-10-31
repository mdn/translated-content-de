---
title: Authorization header
short-title: Authorization
slug: Web/HTTP/Reference/Headers/Authorization
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Der HTTP-**`Authorization`**-{{Glossary("request_header", "Anforderungsheader")}} kann verwendet werden, um Anmeldeinformationen bereitzustellen, die einen Benutzeragenten bei einem Server authentifizieren, was den Zugriff auf geschützte Ressourcen ermöglicht.

Der `Authorization`-Header wird in der Regel, aber nicht immer, gesendet, nachdem der Benutzeragent zunächst versucht hat, eine geschützte Ressource ohne Anmeldedaten anzufordern. Der Server antwortet mit einer {{HTTPStatus("401", "401 Unauthorized")}}-Nachricht, die mindestens einen {{HTTPHeader("WWW-Authenticate")}}-Header enthält. Dieser Header gibt die Authentifizierungsschemata an, die zur Ressourcenzugriff verwendet werden können, und alle zusätzlichen Informationen, die der Client benötigt, um sie zu nutzen. Der Benutzeragent sollte das sicherste Authentifizierungsschema auswählen, das er unterstützt, die Anmeldedaten des Benutzers abfragen und dann die Ressource erneut mit den codierten Anmeldedaten im `Authorization`-Header anfordern.

Dieser Header wird bei Cross-Origin-Umleitungen entfernt.

> [!NOTE]
> Dieser Header ist Teil des [allgemeinen HTTP-Authentifizierungs-Frameworks](/de/docs/Web/HTTP/Guides/Authentication#the_general_http_authentication_framework).
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
  - : Das [Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes), das definiert, wie die Anmeldedaten codiert sind.
    Einige der gebräuchlicheren Typen sind (groß-/kleinschreibungssensitiv): [`Basic`](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`.

    > [!NOTE]
    > Weitere Informationen/Optionen finden Sie unter [HTTP-Authentifizierung > Authentifizierungsschemata](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes)

Andere als `<auth-scheme>`, sind die verbleibenden Direktiven spezifisch für jedes [Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes). In der Regel müssen Sie die entsprechenden Spezifikationen für diese überprüfen (Schlüssel für eine kleine Teilmenge von Schemen sind unten aufgeführt).

### Basis-Authentifizierung

- `<credentials>`
  - : Die Anmeldedaten, codiert gemäß dem angegebenen Schema.

    > [!NOTE]
    > Informationen zum Codierungsalgorithmus finden Sie in den Beispielen: unten, in {{HTTPHeader("WWW-Authenticate")}}, in [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication) und in den entsprechenden Spezifikationen.

### Digest-Authentifizierung

- `<response>`
  - : Eine Zeichenfolge der Hexadezimalziffern, die beweisen, dass der Benutzer ein Passwort kennt. Der Algorithmus codiert den Benutzernamen und das Passwort, Realm, cnonce, qop, nc usw. Es ist im Detail in der Spezifikation beschrieben.
- `username`
  - : Ein in Anführungszeichen gesetzter String, der den Benutzernamen für das angegebene `realm` im Klartext oder als Hash-Code in hexadezimaler Notation enthält. Wenn der Name Zeichen enthält, die im Feld nicht erlaubt sind, kann `username*` stattdessen verwendet werden (nicht "zusätzlich").
- `username*`
  - : Der Benutzername, formatiert unter Verwendung einer erweiterten Notation, die in RFC5987 definiert ist. Dies sollte nur verwendet werden, wenn der Name nicht in `username` codiert werden kann und wenn `userhash` auf `"false"` gesetzt ist.
- `uri`
  - : Die _Effective Request URI_. Siehe die Spezifikation für weitere Informationen.
- `realm`
  - : Der Bereich des angeforderten Benutzernamens/Passworts (sollte wieder mit dem Wert in der entsprechenden {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource übereinstimmen).
- `opaque`
  - : Der Wert in der entsprechenden {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource.
- `algorithm`
  - : Der Algorithmus, der zur Berechnung des Digests verwendet wird. Muss ein unterstützter Algorithmus aus der {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource sein.
- `qop`
  - : Ein Token, das die _quality of protection_ angibt, die auf die Nachricht angewendet wird. Muss mit dem einen Wert im Satz übereinstimmen, der in der {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource angegeben ist.
    - `"auth"`: Authentifizierung
    - `"auth-int"`: Authentifizierung mit Integritätsschutz
- `cnonce`
  - : Ein in Anführungszeichen gesetzter, nur aus {{Glossary("ASCII", "ASCII")}}-Zeichen bestehender String, der vom Client bereitgestellt wird. Dies wird sowohl vom Client als auch vom Server verwendet, um gegenseitige Authentifizierung bereitzustellen, einen gewissen Schutz der Nachrichtenintegrität zu gewähren und "gewählte Klartextangriffe" zu verhindern. Siehe die Spezifikation für weitere Informationen.
- `nc`
  - : Nonce-Zähler. Die hexadezimale Anzahl an Anforderungen, bei denen der Client den aktuellen `cnonce`-Wert gesendet hat (einschließlich der aktuellen Anforderung). Der Server kann doppelte `nc`-Werte verwenden, um Wiederholungsanfragen zu erkennen.
- `userhash` {{optional_inline}}
  - : `"true"`, wenn der Benutzername gehasht wurde. Standardmäßig `"false"`.

## Beispiele

### Basis-Authentifizierung

Bei der `Basic`-Authentifizierung werden die Anmeldedaten gebildet, indem zuerst der Benutzername und das Passwort mit einem Doppelpunkt kombiniert werden (z. B. `aladdin:opensesame`), und dann die resultierende Zeichenkette in {{Glossary("Base64", "`base64`")}} codiert wird (z. B. `YWxhZGRpbjpvcGVuc2VzYW1l`).

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

> [!WARNING]
> Die {{Glossary("Base64", "Base64")}}-Codierung kann leicht umgekehrt werden, um den ursprünglichen Namen und das Passwort zu erhalten, daher bietet die `Basic`-Authentifizierung keine kryptografische Sicherheit.
> {{Glossary("HTTPS", "HTTPS")}} wird immer empfohlen, wenn Authentifizierung verwendet wird, insbesondere jedoch bei der `Basic`-Authentifizierung.

Siehe auch [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication) für Beispiele, wie man Apache- oder Nginx-Server so konfiguriert, dass Ihre Website mit der HTTP-Basisauthentifizierung durch ein Passwort geschützt wird.

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
