---
title: Content-Type header
short-title: Content-Type
slug: Web/HTTP/Reference/Headers/Content-Type
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Content-Type`** {{Glossary("representation_header", "Repräsentations-Header")}} wird verwendet, um den ursprünglichen {{Glossary("MIME_type", "Medientyp")}} einer Ressource anzugeben, bevor jegliche Inhaltscodierung angewendet wird.

In Antworten informiert der `Content-Type`-Header den Client über den Medientyp der zurückgegebenen Daten.
In Anfragen wie {{HTTPMethod("POST")}} oder {{HTTPMethod("PUT")}} verwendet der Client den `Content-Type`-Header, um den Typ des Inhalts anzugeben, der an den Server gesendet wird.
Wenn eine Serverimplementierung oder -konfiguration strikt bezüglich der Behandlung von Inhaltstypen ist, kann eine {{HTTPStatus("415")}} Client-Fehlerantwort zurückgegeben werden.

Der `Content-Type`-Header unterscheidet sich von {{HTTPHeader("Content-Encoding")}} dadurch, dass `Content-Encoding` dem Empfänger hilft zu verstehen, wie die Daten in ihre ursprüngliche Form decodiert werden können.

> [!NOTE]
> Dieser Wert kann ignoriert werden, wenn Browser [MIME sniffing](/de/docs/Web/HTTP/Guides/MIME_types#mime_sniffing) (oder Inhalts-Sniffing) bei Antworten durchführen.
> Um zu verhindern, dass Browser MIME sniffing verwenden, setzen Sie den {{HTTPHeader("X-Content-Type-Options")}} Header-Wert auf `nosniff`.
> Siehe [MIME-Typ-Verifikation](/de/docs/Web/Security/Practical_implementation_guides/MIME_types) für weitere Details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Repräsentations-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-zugelassener Antwort-Header")}}
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-zugelassener Anfrage-Header")}}
      </th>
      <td>
        Ja*
      </td>
    </tr>
  </tbody>
</table>

\* Werte dürfen kein [CORS-unsicheres Anfrage-Header-Byte](https://fetch.spec.whatwg.org/#cors-unsafe-request-header-byte) enthalten: `"():<>?@[\]{},`, Delete `0x7F`, und Steuerzeichen `0x00` bis `0x19` außer Tab `0x09`.
Es muss auch einen Medientyp seines geparsten Werts (Parameter ignorierend) von entweder `application/x-www-form-urlencoded`, `multipart/form-data` oder `text/plain` haben.

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
    - **`charset`**: Gibt den verwendeten {{Glossary("character_encoding", "Zeichenkodierungsstandard")}} an.
      Der Wert ist nicht case-sensitiv, aber Kleinbuchstaben werden bevorzugt.
    - **`boundary`**: Für multipartige Entitäten ist der `boundary` Parameter erforderlich.
      Er wird verwendet, um die Grenzen der mehrfachen Teile der Nachricht zu kennzeichnen.
      Der Wert besteht aus 1 bis 70 Zeichen (nicht mit Leerzeichen endend), die im Kontext verschiedener Systeme (z. B. E-Mail-Gateways) als robust bekannt sind.
      Oft wird die Header-Grenze im Anfrageinhalt mit zwei Bindestrichen vorangestellt und die finale Grenze hat zwei Bindestriche am Ende.

## Beispiele

### Ressourcen mit korrektem Inhaltstyp bereitstellen

In den folgenden zwei Antwortbeispielen werden JavaScript- und CSS-Ressourcen mit `text/javascript` für JavaScript und `text/css` für CSS bereitgestellt.
Der korrekte Inhaltstyp für diese Ressourcen hilft dem Browser, sie sicherer und mit besserer Leistung zu verarbeiten.
Weitere Informationen finden Sie unter [Server-MIME-Typen richtig konfigurieren](/de/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types).

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

### `Content-Type` in Multipart-Formularen

In einer {{HTTPMethod("POST")}} Anfrage, die aus einer HTML-Formularübermittlung resultiert, wird der `Content-Type` der Anfrage durch das `enctype` Attribut auf dem {{HTMLElement("form")}} Element festgelegt.

```html
<form action="/foo" method="post" enctype="multipart/form-data">
  <input type="text" name="description" value="Description input value" />
  <input type="file" name="myFile" />
  <button type="submit">Submit</button>
</form>
```

Die Anfrage sieht ungefähr so aus wie das folgende Beispiel, wobei einige Header der Kürze halber weggelassen wurden.
In der Anfrage wird eine Grenze von `ExampleBoundaryString` zur Veranschaulichung verwendet, aber in der Praxis würde ein Browser eine Zeichenkette erzeugen, die eher so aussieht: `---------------------------1003363413119651595289485765`.

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

### `Content-Type` in URL-kodierter Formularübermittlung

Wenn Formulare keine Datei-Uploads beinhalten und einfachere Felder verwenden, können URL-kodierte Formulare praktischer sein, bei denen die Formulardaten im Anforderungskörper enthalten sind:

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
Content-Length: 15

comment=Hello!
```

### `Content-Type` in einer REST API mit JSON

Viele {{Glossary("REST", "REST")}} APIs verwenden `application/json` als Inhaltstyp, was für die Kommunikation zwischen Maschinen oder die programmatische Interaktion praktisch ist.
Das folgende Beispiel zeigt eine {{HTTPStatus("201", "201 Created")}} Antwort, die das Ergebnis einer erfolgreichen Anfrage anzeigt:

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
