---
title: Content-Type header
short-title: Content-Type
slug: Web/HTTP/Reference/Headers/Content-Type
l10n:
  sourceCommit: b4e920ce0a34d9e609080ccb937a1a30c3cd558a
---

Der HTTP **`Content-Type`** {{Glossary("representation_header", "Darstellungs-Header")}} wird verwendet, um den ursprünglichen {{Glossary("MIME_type", "Medientyp")}} einer Ressource vor der Anwendung einer Inhaltskodierung anzugeben.

In Antworten informiert der `Content-Type` Header den Client über den Medientyp der zurückgegebenen Daten.
In Anfragen wie {{HTTPMethod("POST")}} oder {{HTTPMethod("PUT")}} verwendet der Client den `Content-Type` Header, um den Typ des Inhalts anzugeben, der an den Server gesendet wird.
Wenn eine Server-Implementierung oder -Konfiguration streng bei der Handhabung von Inhaltsarten ist, kann eine {{HTTPStatus("415")}} Client-Fehlerantwort zurückgegeben werden.

Der `Content-Type` Header unterscheidet sich von {{HTTPHeader("Content-Encoding")}} darin, dass `Content-Encoding` dem Empfänger hilft, zu verstehen, wie Daten in ihre ursprüngliche Form dekodiert werden sollen.

> [!NOTE]
> Dieser Wert kann ignoriert werden, wenn Browser [MIME Sniffing](/de/docs/Web/HTTP/Guides/MIME_types#mime_sniffing) (oder Inhalts-Sniffing) bei Antworten durchführen. Um zu verhindern, dass Browser MIME Sniffing verwenden, setzen Sie den {{HTTPHeader("X-Content-Type-Options")}} Header-Wert auf `nosniff`.
> Für weitere Details siehe [MIME-Typ-Verifizierung](/de/docs/Web/Security/Practical_implementation_guides/MIME_types).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Darstellungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-gesicherter Antwort-Header")}}
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-gesicherter Anforderungs-Header")}}
      </th>
      <td>
        Ja*
      </td>
    </tr>
  </tbody>
</table>

\* Werte dürfen kein [CORS-unsicheres Anforderungs-Header-Byte](https://fetch.spec.whatwg.org/#cors-unsafe-request-header-byte) enthalten: `"():<>?@[\]{},`, Delete `0x7F`, und Steuerzeichen `0x00` bis `0x19` außer Tab `0x09`. Es muss auch einen Medientyp seines analysierten Wertes (Parameter ignorierend) von entweder `application/x-www-form-urlencoded`, `multipart/form-data` oder `text/plain` haben.

## Syntax

```plain
Content-Type: <media-type>
```

Zum Beispiel:

```http
Content-Type: text/html; charset=utf-8
Content-Type: multipart/form-data; boundary=ExampleBoundaryString
```

## Direktiven

- `<media-type>`
  - : Der [Medientyp](/de/docs/Web/HTTP/Guides/MIME_types) der Ressource oder Daten.
    Kann die folgenden Parameter enthalten:
    - **`charset`**: Gibt den {{Glossary("character_encoding", "Zeichenkodierung")}} Standard an.
      Der Wert ist nicht case-sensitiv, jedoch wird Kleinschreibung bevorzugt.
    - **`boundary`**: Für mehrteilige Entitäten ist der `boundary` Parameter erforderlich.
      Er wird verwendet, um die Grenzen der verschiedenen Teile der Nachricht zu markieren.
      Der Wert besteht aus 1 bis 70 Zeichen (nicht mit Leerzeichen endend), die in verschiedenen Systemumgebungen robust sind (z.B. E-Mail-Gateways).
      Oft wird der Header-Grenzwert im Anfragekörper mit zwei Bindestrichen vorangestellt, und die endgültige Grenze hat am Ende zwei Bindestriche angefügt.

## Beispiele

### Ausliefern von Assets mit dem korrekten Content-Type

In den folgenden zwei Beispielantworten werden JavaScript- und CSS-Assets unter Verwendung von `text/javascript` für JavaScript und `text/css` für CSS ausgeliefert.
Der korrekte Content-Type für diese Ressourcen hilft dem Browser, sie sicherer und mit besserer Leistung zu verarbeiten.
Siehe [Server-MIME-Typen korrekt konfigurieren](/de/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types) für weitere Informationen.

```http
HTTP/1.1 200
content-encoding: br
content-type: text/javascript; charset=utf-8
vary: Accept-Encoding
date: Fri, 21 Jun 2024 14:02:25 GMT
content-length: 2978

const videoPlayer=document.getElementById...
```

```http
HTTP/3 200
server: nginx
date: Wed, 24 Jul 2024 16:53:02 GMT
content-type: text/css
vary: Accept-Encoding
content-encoding: br

.super-container{clear:both;max-width:100%}...
```

### `Content-Type` in mehrteiligen Formularen

In einer {{HTTPMethod("POST")}}-Anfrage, die aus einer HTML-Formularübermittlung resultiert, wird der `Content-Type` der Anfrage durch das `enctype` Attribut auf dem {{HTMLElement("form")}} Element angegeben.

```html
<form action="/foo" method="post" enctype="multipart/form-data">
  <input type="text" name="description" value="Description input value" />
  <input type="file" name="myFile" />
  <button type="submit">Submit</button>
</form>
```

Die Anfrage sieht ungefähr wie das folgende Beispiel aus, wobei einige Header zur Kürze weggelassen wurden. In der Anfrage wird eine Grenze von `ExampleBoundaryString` zu Illustrationszwecken verwendet, aber in der Praxis würde ein Browser eine Zeichenfolge erzeugen, die eher so aussieht: `---------------------------1003363413119651595289485765`.

```http
POST /foo HTTP/1.1
Content-Length: 68137
Content-Type: multipart/form-data; boundary=ExampleBoundaryString

--ExampleBoundaryString
Content-Disposition: form-data; name="description"

Description input value
--ExampleBoundaryString
Content-Disposition: form-data; name="myFile"; filename="foo.txt"
Content-Type: text/plain

[content of the file foo.txt chosen by the user]
--ExampleBoundaryString--
```

### `Content-Type` in einer URL-codierten Formularübermittlung

Wenn Formulare keine Datei-Uploads beinhalten und einfachere Felder verwenden, können URL-codierte Formulare bequemer sein, bei denen die Formulardaten im Anforderungskörper enthalten sind:

```html
<form action="/submit" method="post">
  <label for="comment">Comment:</label>
  <input type="text" id="comment" name="comment" value="Hello!" />
  <button type="submit">Submit</button>
</form>
```

```http
POST /submit HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 16

comment=Hello%21
```

### `Content-Type` in einer REST-API mit JSON

Viele {{Glossary("REST", "REST")}} APIs verwenden `application/json` als Content-Type, was für die Kommunikation von Maschine zu Maschine oder programmatische Interaktion bequem ist.
Das folgende Beispiel zeigt eine {{HTTPStatus("201", "201 Created")}} Antwort, die das Ergebnis einer erfolgreichen Anfrage darstellt:

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "message": "New user created",
  "user": {
    "id": 123,
    "firstName": "Paul",
    "lastName": "Klee",
    "email": "p.klee@example.com"
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}} Header
- {{HTTPHeader("Vary")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Disposition")}}
- {{HTTPStatus("206", "206 Partial Content")}}
- {{HTTPHeader("X-Content-Type-Options")}}
