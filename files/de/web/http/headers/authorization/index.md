---
title: Authorization
slug: Web/HTTP/Headers/Authorization
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

Der HTTP-**`Authorization`**-{{Glossary("request_header", "Anforderungs-Header")}} kann verwendet werden, um Anmeldeinformationen bereitzustellen, die einen Benutzeragenten gegenüber einem Server authentifizieren und den Zugriff auf geschützte Ressourcen ermöglichen.

Der `Authorization`-Header wird normalerweise, aber nicht immer, gesendet, nachdem der Benutzeragent zuerst versucht, ohne Anmeldeinformationen auf eine geschützte Ressource zuzugreifen.
Der Server antwortet mit einer {{HTTPStatus("401", "401 Unauthorized")}}-Nachricht, die mindestens einen {{HTTPHeader("WWW-Authenticate")}}-Header enthält.
Dieser Header gibt die Authentifizierungsschemata an, die zum Zugriff auf die Ressource verwendet werden können, sowie alle zusätzlichen Informationen, die der Client benötigt, um diese zu verwenden.
Der Benutzeragent sollte das sicherste von den angebotenen Authentifizierungsschemata auswählen, den Benutzer nach seinen Anmeldedaten fragen und dann die Ressource erneut mit den kodierten Anmeldeinformationen im `Authorization`-Header anfordern.

Dieser Header wird aus plattformübergreifenden Weiterleitungen entfernt.

> [!NOTE]
> Dieser Header ist Teil des [Allgemeinen HTTP-Authentifizierungsrahmens](/de/docs/Web/HTTP/Authentication#the_general_http_authentication_framework).
> Er kann mit einer Reihe von [Authentifizierungsschemata](/de/docs/Web/HTTP/Authentication#authentication_schemes) verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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

## Anweisungen

- `<auth-scheme>`

  - : Das [Authentifizierungsschema](/de/docs/Web/HTTP/Authentication#authentication_schemes), das definiert, wie die Anmeldeinformationen kodiert werden.
    Einige der gebräuchlichsten Typen sind (groß-/kleinschreibungsempfindlich): [`Basic`](/de/docs/Web/HTTP/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`.

    > [!NOTE]
    > Weitere Informationen/Optionen finden Sie unter [HTTP Authentication > Authentication schemes](/de/docs/Web/HTTP/Authentication#authentication_schemes)

Abgesehen von `<auth-scheme>` sind die restlichen Anweisungen spezifisch für jedes [Authentifizierungsschema](/de/docs/Web/HTTP/Authentication#authentication_schemes).
In der Regel müssen Sie die relevanten Spezifikationen für diese (Schlüssel für ein kleines Teilset von Schemata sind unten aufgeführt) überprüfen.

### Basisauthentifizierung

- `<credentials>`

  - : Die Anmeldeinformationen, kodiert gemäß dem angegebenen Schema.

    > [!NOTE]
    > Informationen über den Kodierungsalgorithmus finden Sie in den nachstehenden Beispielen, in {{HTTPHeader("WWW-Authenticate")}}, in [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication) und in den relevanten Spezifikationen.

### Digest-Authentifizierung

- `<response>`
  - : Eine Zeichenfolge aus hexadezimalen Ziffern, die beweist, dass der Benutzer ein Passwort kennt.
    Der Algorithmus kodiert den Benutzernamen und das Passwort, den Bereich, den `cnonce`, `qop`, `nc` usw.
    Es wird detailliert in der Spezifikation beschrieben.
- `username`
  - : Eine in Anführungszeichen gesetzte Zeichenfolge mit dem Benutzernamen für den angegebenen `realm` im Klartext oder im Hash-Code im Hexadezimalformat.
    Wenn der Name Zeichen enthält, die im Feld nicht erlaubt sind, kann stattdessen `username*` verwendet werden (nicht "zusätzlich").
- `username*`
  - : Der Benutzername formatiert mit einer erweiterten Notation, die in RFC5987 definiert ist.
    Dies sollte nur verwendet werden, wenn der Name nicht in `username` kodiert werden kann und wenn `userhash` auf `"false"` gesetzt ist.
- `uri`
  - : Die _Effektive Anforderungs-URI_. Weitere Informationen finden Sie in der Spezifikation.
- `realm`
  - : Bereich des angeforderten Benutzernamens/Passworts (sollte wieder mit dem Wert in der entsprechenden {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource übereinstimmen).
- `opaque`
  - : Der Wert in der entsprechenden {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource.
- `algorithm`
  - : Der Algorithmus, der zum Berechnen der Digest verwendet wird. Muss ein unterstützter Algorithmus aus der {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource sein.
- `qop`
  - : Ein Token, das die _Schutzqualität_ angibt, die auf die Nachricht angewendet wird.
    Muss mit dem einen Wert in der in der {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource angegebenen Menge übereinstimmen.
    - `"auth"`: Authentifizierung
    - `"auth-int"`: Authentifizierung mit Integritätsschutz
- `cnonce`
  - : Eine {{Glossary("ASCII", "ASCII")}}-nur Zeichenfolge in Anführungszeichen, die vom Client bereitgestellt wird.
    Dies wird sowohl vom Client als auch vom Server verwendet, um gegenseitige Authentifizierung bereitzustellen, ein gewisses Maß an Integritätsschutz zu bieten und "gewählte Klartextangriffe" zu vermeiden.
    Weitere Informationen finden Sie in der Spezifikation.
- `nc`
  - : Nonce Count. Die hexadezimale Anzahl von Anfragen, in denen der Client den aktuellen `cnonce`-Wert gesendet hat (einschließlich der aktuellen Anfrage).
    Der Server kann doppelte `nc`-Werte verwenden, um Wiederholungsanfragen zu erkennen.
- `userhash` {{optional_inline}}
  - : `"true"`, wenn der Benutzername gehasht wurde. Standardmäßig `"false"`.

## Beispiele

### Basisauthentifizierung

Für die `Basic`-Authentifizierung werden die Anmeldeinformationen zuerst erstellt, indem der Benutzername und das Passwort mit einem Doppelpunkt kombiniert werden (z.B. `aladdin:opensesame`), gefolgt von der Kodierung der resultierenden Zeichenfolge in {{Glossary("Base64", "`base64`")}} (z.B. `YWxhZGRpbjpvcGVuc2VzYW1l`).

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

> **Warnung:** {{Glossary("Base64", "Base64")}}-Kodierung kann leicht rückgängig gemacht werden, um den ursprünglichen Namen und das Passwort zu erhalten, weshalb `Basic`-Authentifizierung keine kryptografische Sicherheit bietet.
> {{Glossary("HTTPS", "HTTPS")}} wird immer bei der Verwendung von Authentifizierung empfohlen, insbesondere jedoch bei der Verwendung von `Basic`-Authentifizierung.

Siehe auch [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication) für Beispiele, wie Sie Apache- oder Nginx-Server konfigurieren, um Ihre Website mit HTTP-Basisauthentifizierung passwortzuschützen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
