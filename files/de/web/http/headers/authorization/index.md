---
title: Autorisierung
slug: Web/HTTP/Headers/Authorization
l10n:
  sourceCommit: bb23abe84f0f4da3cf5d72a66d356cf5f9e3cfa2
---

{{HTTPSidebar}}

Der HTTP-Anforderungsheader **`Authorization`** kann verwendet werden, um Anmeldedaten bereitzustellen, die einen Benutzeragenten bei einem Server authentifizieren, wodurch der Zugriff auf eine geschützte Ressource ermöglicht wird.

Der **`Authorization`**-Header wird in der Regel, aber nicht immer, gesendet, nachdem der Benutzeragent zunächst versucht hat, eine geschützte Ressource ohne Anmeldedaten anzufordern. Der Server antwortet mit einer {{HTTPStatus("401")}} „Unauthorized“-Nachricht, die mindestens einen {{HTTPHeader("WWW-Authenticate")}}-Header enthält. Dieser Header gibt an, welche Authentifizierungsschemata zum Zugriff auf die Ressource verwendet werden können (und alle zusätzlichen Informationen, die der Client benötigt, um sie zu verwenden). Der Benutzeragent sollte das sicherste Authentifizierungsschema auswählen, das er von den angebotenen unterstützt, den Benutzer nach seinen Anmeldedaten fragen und dann die Ressource erneut anfordern (einschließlich der kodierten Anmeldedaten im **`Authorization`**-Header).

Dieser Header wird bei Cross-Origin-Weiterleitungen entfernt.

> [!NOTE]
> Dieser Header ist Teil des [Allgemeinen HTTP-Authentifizierungsrahmens](/de/docs/Web/HTTP/Authentication#the_general_http_authentication_framework).
> Er kann mit einer Reihe von [Authentifizierungsschemata](/de/docs/Web/HTTP/Authentication#authentication_schemes) verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Authorization: <auth-scheme> <authorization-parameters>
```

Basic-Authentifizierung

```http
Authorization: Basic <credentials>
```

Digest-Authentifizierung

```http
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

  - : Das [Authentifizierungsschema](/de/docs/Web/HTTP/Authentication#authentication_schemes), das definiert, wie die Anmeldedaten kodiert werden.
    Einige der häufigeren Typen sind (groß- und kleinschreibungsempfindlich): [`Basic`](/de/docs/Web/HTTP/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`.

    > [!NOTE]
    > Für weitere Informationen/Optionen siehe [HTTP Authentication > Authentication schemes](/de/docs/Web/HTTP/Authentication#authentication_schemes)

Abgesehen von `<auth-scheme>` sind die verbleibenden Direktiven spezifisch für jedes [Authentifizierungsschema](/de/docs/Web/HTTP/Authentication#authentication_schemes). Im Allgemeinen müssen Sie die relevanten Spezifikationen für diese überprüfen (Schlüssel für eine kleine Untergruppe von Schemata sind unten aufgelistet).

### Basic

- \<credentials>

  - : Die Anmeldedaten, kodiert gemäß dem angegebenen Schema.

    > [!NOTE]
    > Informationen über den Kodierungsalgorithmus finden Sie unten in den Beispielen, in {{HTTPHeader("WWW-Authenticate")}}, in [HTTP Authentication](/de/docs/Web/HTTP/Authentication) und in den relevanten Spezifikationen.

### Digest

- \<response>
  - : Ein Zeichenfolge der Hex-Ziffern, die beweist, dass der Benutzer ein Passwort kennt.
    Der Algorithmus kodiert den Benutzernamen und das Passwort, den Bereich, cnonce, qop, nc usw.
    Es wird im Detail in der Spezifikation beschrieben.
- `username`
  - : Eine in Anführungszeichen gesetzte Zeichenkette, die den Benutzernamen für den angegebenen `realm` im Klartext oder den Hash-Code in hexadezimaler Notation enthält.
    Wenn der Name Zeichen enthält, die im Feld nicht erlaubt sind, kann stattdessen `username*` verwendet werden (nicht „sowie“).
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
  - : Der Algorithmus, der zur Berechnung der Digest verwendet wird. Muss ein unterstützter Algorithmus aus der {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource sein.
- `qop`
  - : Ein Token, das die _Qualität des Schutzes_ angibt, die auf die Nachricht angewendet wird.
    Muss mit dem Wert im Set übereinstimmen, das in der {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource angegeben ist.
    - `"auth"`: Authentifizierung
    - `"auth-int"`: Authentifizierung mit Integritätsschutz
- `cnonce`
  - : Ein zitierter {{Glossary("ASCII")}}-nur Zeichenkette-Wert, der vom Client bereitgestellt wird.
    Dies wird sowohl vom Client als auch vom Server verwendet, um gegenseitige Authentifizierung bereitzustellen, einen gewissen Nachrichtenschutz zu gewährleisten und „gewählte Klartextangriffe“ zu vermeiden.
    Weitere Informationen finden Sie in der Spezifikation.
- `nc`
  - : Nonce-Zählung. Die hexadezimale Zählung der Anfragen, in denen der Client den aktuellen `cnonce`-Wert gesendet hat (einschließlich der aktuellen Anfrage).
    Der Server kann doppelte `nc`-Werte verwenden, um wiederholte Anfragen zu erkennen.
- `userhash` {{optional_inline}}
  - : `"true"`, wenn der Benutzername gehasht wurde. Standardmäßig `"false"`.

## Beispiele

### Basic-Authentifizierung

Für die „Basic“-Authentifizierung werden die Anmeldedaten konstruiert, indem zuerst der Benutzername und das Passwort mit einem Doppelpunkt (`aladdin:opensesame`) kombiniert und dann die resultierende Zeichenfolge in [`base64`](/de/docs/Glossary/Base64) (`YWxhZGRpbjpvcGVuc2VzYW1l`) kodiert wird.

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

> **Warning:** {{Glossary("Base64")}}-Kodierung kann leicht rückgängig gemacht werden, um den ursprünglichen Namen und das Passwort zu erhalten. Daher ist die Basic-Authentifizierung völlig unsicher.
> {{Glossary("HTTPS")}} wird immer empfohlen, wenn Authentifizierung verwendet wird, aber noch mehr, wenn `Basic`-Authentifizierung verwendet wird.

Siehe auch [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication) für Beispiele, wie Apache- oder Nginx-Server konfiguriert werden, um Ihre Website mit HTTP-Basisauthentifizierung passwortzuschützen.

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
