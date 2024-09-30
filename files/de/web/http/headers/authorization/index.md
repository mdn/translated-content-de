---
title: Authorization
slug: Web/HTTP/Headers/Authorization
l10n:
  sourceCommit: bb23abe84f0f4da3cf5d72a66d356cf5f9e3cfa2
---

{{HTTPSidebar}}

Der HTTP **`Authorization`** Anforderungsheader kann verwendet werden, um Anmeldeinformationen bereitzustellen, die einen Benutzeragenten bei einem Server authentifizieren und den Zugriff auf eine geschützte Ressource ermöglichen.

Der **`Authorization`**-Header wird normalerweise, aber nicht immer, gesendet, nachdem der Benutzeragent zuerst versucht hat, eine geschützte Ressource ohne Anmeldeinformationen anzufordern. Der Server antwortet mit einer {{HTTPStatus("401")}} `Unauthorized`-Nachricht, die mindestens einen {{HTTPHeader("WWW-Authenticate")}}-Header enthält. Dieser Header gibt an, welche Authentifizierungsschemata verwendet werden können, um auf die Ressource zuzugreifen (und alle zusätzlichen Informationen, die der Client benötigt, um sie zu verwenden). Der Benutzeragent sollte das sicherste Authentifizierungsschema auswählen, das es unterstützt, den Benutzer nach seinen Anmeldeinformationen fragen und dann die Ressource erneut anfordern (einschließlich der kodierten Anmeldeinformationen im **`Authorization`**-Header).

Dieser Header wird bei Cross-Origin-Weiterleitungen entfernt.

> [!NOTE]
> Dieser Header ist Teil des [allgemeinen HTTP-Authentifizierungsrahmenwerks](/de/docs/Web/HTTP/Authentication#the_general_http_authentication_framework).
> Er kann mit einer Reihe von [Authentifizierungsschemata](/de/docs/Web/HTTP/Authentication#authentication_schemes) verwendet werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>[Anforderungsheader](/de/docs/Glossary/Request_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Headername](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Authorization: <auth-scheme> <authorization-parameters>
```

Basis-Authentifizierung

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

  - : Das [Authentifizierungsschema](/de/docs/Web/HTTP/Authentication#authentication_schemes), das definiert, wie die Anmeldeinformationen kodiert werden.
    Einige der häufigeren Typen sind (nicht case-sensitive): [`Basic`](/de/docs/Web/HTTP/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` und `AWS4-HMAC-SHA256`.

    > [!NOTE]
    > Für weitere Informationen/Optionen siehe [HTTP-Authentifizierung > Authentifizierungsschemata](/de/docs/Web/HTTP/Authentication#authentication_schemes)

Abgesehen von `<auth-scheme>` sind die restlichen Direktiven spezifisch für jedes [Authentifizierungsschema](/de/docs/Web/HTTP/Authentication#authentication_schemes). Im Allgemeinen müssen Sie die relevanten Spezifikationen für diese überprüfen (Schlüssel für eine kleine Untermenge von Schemata sind unten aufgeführt).

### Basic

- `<credentials>`

  - : Die Anmeldeinformationen, kodiert gemäß dem angegebenen Schema.

    > [!NOTE]
    > Informationen über den Kodierungsalgorithmus finden Sie unten in den Beispielen, in {{HTTPHeader("WWW-Authenticate")}}, in [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication) und in den einschlägigen Spezifikationen.

### Digest

- `<response>`
  - : Eine Zeichenfolge der Hexadezimalziffern, die beweist, dass der Benutzer ein Passwort kennt.
    Der Algorithmus kodiert den Benutzernamen und das Passwort, den Realm, cnonce, qop, nc usw.
    Es wird ausführlich in der Spezifikation beschrieben.
- `username`
  - : Eine in Anführungszeichen gesetzte Zeichenfolge, die den Namen des Benutzers für den angegebenen `realm` in Klartext oder als Hashcode in hexadezimaler Notation enthält.
    Wenn der Name nicht erlaubte Zeichen enthält, kann stattdessen `username*` verwendet werden (nicht zusätzlich).
- `username*`
  - : Der Benutzername formatiert mit einer in RFC5987 definierten erweiterten Notation.
    Dies sollte nur verwendet werden, wenn der Name nicht in `username` kodiert werden kann und wenn `userhash` auf `"false"` gesetzt ist.
- `uri`
  - : Die _Effective Request URI_. Weitere Informationen finden Sie in der Spezifikation.
- `realm`
  - : Bereich des angeforderten Benutzernamens/Passworts (sollte erneut mit dem Wert in der entsprechenden {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource übereinstimmen).
- `opaque`
  - : Der Wert in der entsprechenden {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource.
- `algorithm`
  - : Der Algorithmus, der zum Berechnen des Digests verwendet wird. Muss ein unterstützter Algorithmus aus der {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource sein.
- `qop`
  - : Ein Token, das die _Qualität des Schutzes_ angibt, die auf die Nachricht angewendet wird.
    Muss dem einen Wert in der Menge entsprechen, die in der {{HTTPHeader("WWW-Authenticate")}}-Antwort für die angeforderte Ressource angegeben ist.
    - `"auth"`: Authentifizierung
    - `"auth-int"`: Authentifizierung mit Integritätsschutz
- `cnonce`
  - : Eine in Anführungszeichen gesetzte [ASCII](/de/docs/Glossary/ASCII)-only Zeichenfolge, die vom Client bereitgestellt wird.
    Dies wird sowohl vom Client als auch vom Server verwendet, um eine gegenseitige Authentifizierung bereitzustellen, einen gewissen Nachrichtenschutz zu gewährleisten und "chosen plaintext attacks" zu vermeiden.
    Weitere Informationen finden Sie in der Spezifikation.
- `nc`
  - : Nonce-Zähler. Die hexadezimale Anzahl der Anfragen, bei denen der Client den aktuellen `cnonce`-Wert gesendet hat (einschließlich der aktuellen Anfrage).
    Der Server kann doppelte `nc`-Werte verwenden, um Wiederholungsanfragen zu erkennen.
- `userhash` {{optional_inline}}
  - : `"true"`, wenn der Benutzername gehasht wurde. Standardmäßig `"false"`.

## Beispiele

### Basis-Authentifizierung

Für die `"Basic"`-Authentifizierung werden die Anmeldeinformationen erstellt, indem zuerst der Benutzername und das Passwort durch einen Doppelpunkt verbunden werden (`aladdin:opensesame`), und dann wird die resultierende Zeichenfolge in [`base64`](/de/docs/Glossary/Base64) kodiert (`YWxhZGRpbjpvcGVuc2VzYW1l`).

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

> **Warnung:** [Base64](/de/docs/Glossary/Base64)-Kodierung kann leicht rückgängig gemacht werden, um den ursprünglichen Namen und das Passwort zu erhalten, daher ist die Basis-Authentifizierung völlig unsicher.
> [HTTPS](/de/docs/Glossary/HTTPS) wird immer empfohlen, wenn Authentifizierung verwendet wird, aber noch mehr, wenn die `Basic`-Authentifizierung verwendet wird.

Siehe auch [HTTP-Authentifizierung](/de/docs/Web/HTTP/Authentication) für Beispiele zur Konfiguration von Apache- oder Nginx-Servern, um Ihre Website mit HTTP-Basis-Authentifizierung mit einem Passwort zu schützen.

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
