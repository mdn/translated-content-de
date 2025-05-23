---
title: Authorization header
short-title: Authorization
slug: Web/HTTP/Reference/Headers/Authorization
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Authorization`**-{{Glossary("request_header", "Anfrage-Header")}} kann verwendet werden, um Anmeldeinformationen bereitzustellen, die einen User-Agent bei einem Server authentifizieren, um den Zugriff auf geschützte Ressourcen zu ermöglichen.

Der `Authorization`-Header wird gewöhnlich, aber nicht immer, gesendet, nachdem der User-Agent zunächst versucht, eine geschützte Ressource ohne Anmeldeinformationen anzufordern.
Der Server antwortet mit einer {{HTTPStatus("401", "401 Unauthorized")}}-Nachricht, die mindestens einen {{HTTPHeader("WWW-Authenticate")}}-Header enthält.
Dieser Header gibt die Authentifizierungsschemata an, die verwendet werden können, um auf die Ressource zuzugreifen, sowie alle zusätzlichen Informationen, die der Client benötigt, um sie zu verwenden.
Der User-Agent sollte das sicherste Authentifizierungsschema auswählen, das er unterstützt, aus den angebotenen Optionen, den Benutzer nach seinen Anmeldeinformationen fragen und dann die Ressource erneut mit den kodierten Anmeldeinformationen im `Authorization`-Header anfordern.

Dieser Header wird bei Cross-Origin-Weiterleitungen entfernt.

> [!NOTE]
> Dieser Header ist Teil des [allgemeinen HTTP-Authentifizierungsrahmens](/de/docs/Web/HTTP/Guides/Authentication#the_general_http_authentication_framework).
> Er kann mit einer Reihe von [Authentifizierungsschemata](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes) verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anfrage-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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

  - : Das [Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes), das definiert, wie die Anmeldeinformationen kodiert werden.
    Einige der gebräuchlicheren Typen sind (nicht case-sensitiv): [`Basic`](/de/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`.

    > [!NOTE]
    > Für weitere Informationen/Optionen siehe [HTTP-Authentifizierung > Authentifizierungsschemata](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes)

Abgesehen von `<auth-scheme>` sind die restlichen Direktiven spezifisch für jedes [Authentifizierungsschema](/de/docs/Web/HTTP/Guides/Authentication#authentication_schemes).
In der Regel müssen Sie die relevanten Spezifikationen für diese überprüfen (Schlüssel für eine kleine Teilmenge von Schemata sind unten aufgeführt).

### Basic-Autorisierung

- `<credentials>`

  - : Die Anmeldeinformationen, kodiert gemäß dem angegebenen Schema.

    > [!NOTE]
    > Informationen zum Kodierungsalgorithmus finden Sie in den Beispielen unten, in {{HTTPHeader("WWW-Authenticate")}}, in [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication) und in den relevanten Spezifikationen.

### Digest-Authentifizierung

- `<response>`
  - : Eine Zeichenkette der hexadezimalen Ziffern, die beweist, dass der Benutzer ein Passwort kennt.
    Der Algorithmus kodiert den Benutzernamen und das Passwort, den Bereich, cnonce, qop, nc usw.
    Dies wird im Detail in der Spezifikation beschrieben.
- `username`
  - : Eine in Anführungszeichen gesetzte Zeichenkette, die den Benutzernamen für den angegebenen `realm` entweder im Klartext oder als Hash-Code in hexadezimaler Notation enthält.
    Wenn der Name Zeichen enthält, die im Feld nicht erlaubt sind, kann stattdessen `username*` verwendet werden (nicht "sowohl als auch").
- `username*`
  - : Der Name des Benutzers, formatiert unter Verwendung einer erweiterten Notation, die in RFC5987 definiert ist.
    Dies sollte nur verwendet werden, wenn der Name in `username` nicht kodiert werden kann und wenn `userhash` auf `"false"` gesetzt ist.
- `uri`
  - : Die _Effective Request URI_. Weitere Informationen finden Sie in der Spezifikation.
- `realm`
  - : Bereich des angeforderten Benutzernamens/Passworts (sollte wiederum dem Wert in der entsprechenden {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource entsprechen).
- `opaque`
  - : Der Wert in der entsprechenden {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource.
- `algorithm`
  - : Der Algorithmus, der zur Berechnung der Digest verwendet wurde. Muss ein unterstützter Algorithmus aus der {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource sein.
- `qop`
  - : Ein Token, das die _Qualität des Schutzes_ angibt, die auf die Nachricht angewendet wird.
    Muss mit dem einen Wert im Satz übereinstimmen, der in der {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource angegeben ist.
    - `"auth"`: Authentifizierung
    - `"auth-int"`: Authentifizierung mit Integritätsschutz
- `cnonce`
  - : Eine in Anführungszeichen gesetzte nur {{Glossary("ASCII", "ASCII")}}-Zeichenkette, die vom Client bereitgestellt wird.
    Diese wird sowohl vom Client als auch vom Server verwendet, um eine gegenseitige Authentifizierung zu ermöglichen, einen gewissen Schutz der Nachrichtenintegrität zu gewährleisten und "ausgewählte Klartextangriffe" zu vermeiden.
    Weitere Informationen finden Sie in der Spezifikation.
- `nc`
  - : Nonce-Zähler. Die hexadezimale Anzahl der Anfragen, in denen der Client den aktuellen `cnonce`-Wert gesendet hat (einschließlich der aktuellen Anfrage).
    Der Server kann doppelte `nc`-Werte verwenden, um Wiederholungsanfragen zu erkennen.
- `userhash` {{optional_inline}}
  - : `"true"`, wenn der Benutzername gehasht wurde. Standardmäßig `"false"`.

## Beispiele

### Basic-Authentifizierung

Bei der `Basic`-Authentifizierung werden die Anmeldeinformationen konstruiert, indem zuerst der Benutzername und das Passwort mit einem Doppelpunkt kombiniert werden (z.B. `aladdin:opensesame`) und dann die resultierende Zeichenkette in {{Glossary("Base64", "`base64`")}} kodiert wird (z.B. `YWxhZGRpbjpvcGVuc2VzYW1l`).

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

> **Warnung:** {{Glossary("Base64", "Base64")}}-Kodierung kann leicht rückgängig gemacht werden, um den ursprünglichen Namen und das Passwort zu erhalten, daher bietet die `Basic`-Authentifizierung keine kryptografische Sicherheit.
> {{Glossary("HTTPS", "HTTPS")}} wird immer empfohlen, wenn Authentifizierung verwendet wird, aber besonders bei Verwendung der `Basic`-Authentifizierung.

Siehe auch [HTTP-Authentifizierung](/de/docs/Web/HTTP/Guides/Authentication) für Beispiele, wie Sie Apache- oder Nginx-Server konfigurieren können, um Ihre Website mit HTTP-Basisauthentifizierung zu schützen.

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
