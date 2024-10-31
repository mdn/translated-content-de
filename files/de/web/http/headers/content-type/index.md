---
title: Content-Type
slug: Web/HTTP/Headers/Content-Type
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

Der HTTP **`Content-Type`** {{Glossary("representation_header", "Repräsentations-Header")}} wird verwendet, um den ursprünglichen {{Glossary("MIME_type", "Medientyp")}} einer Ressource anzugeben, bevor eine Inhaltskodierung angewendet wird.

In Antworten informiert der `Content-Type`-Header den Client über den Medientyp der zurückgegebenen Daten. Bei Anfragen wie {{HTTPMethod("POST")}} oder {{HTTPMethod("PUT")}} verwendet der Client den `Content-Type`-Header, um den Typ des an den Server gesendeten Inhalts zu spezifizieren. Wenn eine Serverimplementierung oder -konfiguration streng mit dem Umgang von Content-Types ist, kann eine {{HTTPStatus("415")}} Client-Fehlermeldung zurückgegeben werden.

Der `Content-Type`-Header unterscheidet sich von {{HTTPHeader("Content-Encoding")}}, indem `Content-Encoding` dem Empfänger hilft, die Daten in ihre ursprüngliche Form zu dekodieren.

> [!NOTE]
> Dieser Wert kann ignoriert werden, wenn Browser [MIME-Sniffing](/de/docs/Web/HTTP/MIME_types#mime_sniffing) (oder Inhaltssniffing) auf Antworten durchführen.
> Um zu verhindern, dass Browser MIME-Sniffing verwenden, setzen Sie den Wert des {{HTTPHeader("X-Content-Type-Options")}}-Headers auf `nosniff`.
> Siehe [MIME-Typ-Verifizierung](/de/docs/Web/Security/Practical_implementation_guides/MIME_types) für weitere Details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Repräsentations-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-geförderter Antwort-Header")}}
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-geförderter Anforderungs-Header")}}
      </th>
      <td>
        Ja*
      </td>
    </tr>
  </tbody>
</table>

\* Werte können kein [CORS-unsafe request header byte](https://fetch.spec.whatwg.org/#cors-unsafe-request-header-byte) enthalten: `"():<>?@[\]{},`, Delete `0x7F` und Steuerzeichen `0x00` bis `0x19` außer Tab `0x09`. Es muss auch einen Medientyp des geparsten Wertes haben (Parameter ignorierend) von entweder `application/x-www-form-urlencoded`, `multipart/form-data` oder `text/plain`.

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

  - : Der [Medientyp](/de/docs/Web/HTTP/MIME_types) der Ressource oder Daten.
    Kann folgende Parameter enthalten:

    - **`charset`**: Gibt die verwendete {{Glossary("character_encoding", "Zeichenkodierung")}} an.
      Der Wert ist nicht case-sensitiv, aber Kleinschreibung wird bevorzugt.
    - **`boundary`**: Für mehrteilige Entitäten ist der `boundary`-Parameter erforderlich.
      Er wird verwendet, um die Grenzen der verschiedenen Teile der Nachricht abzugrenzen.
      Der Wert besteht aus 1 bis 70 Zeichen (nicht mit Leerzeichen endend), die in verschiedenen Systemumgebungen (z.B. E-Mail-Gateways) als robust bekannt sind.
      Oft wird die Header-Grenze im Anforderungstext mit zwei Bindestrichen vorangestellt, und die endgültige Grenze hat zwei Bindestriche am Ende angefügt.

## Beispiele

### Bereitstellung von Assets mit korrektem Content-Type

In den folgenden zwei Beispielantworten werden JavaScript- und CSS-Assets mit `text/javascript` für JavaScript und `text/css` für CSS bereitgestellt. Der korrekte Content-Type für diese Ressourcen hilft dem Browser, sie sicherer und mit besserer Leistung zu handhaben. Weitere Informationen finden Sie unter [richtige Konfiguration von Server-MIME-Typen](/de/docs/Learn/Server-side/Configuring_server_MIME_types).

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

In einer {{HTTPMethod("POST")}}-Anfrage, die aus einer HTML-Formularübermittlung resultiert, wird der `Content-Type` der Anfrage durch das `enctype`-Attribut des {{HTMLElement("form")}}-Elements bestimmt.

```html
<form action="/foo" method="post" enctype="multipart/form-data">
  <input type="text" name="description" value="Description input value" />
  <input type="file" name="myFile" />
  <button type="submit">Submit</button>
</form>
```

Die Anfrage sieht ähnlich aus wie das folgende Beispiel, wobei einige Header zur Kürze weggelassen wurden. In der Anfrage wird ein boundary von `ExampleBoundaryString` zur Veranschaulichung verwendet, aber in der Praxis würde ein Browser eher eine Zeichenfolge wie `---------------------------1003363413119651595289485765` erstellen.

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

Wenn Formulare keine Datei-Uploads beinhalten und einfachere Felder verwenden, können URL-kodierte Formulare praktischer sein, wobei die Formulardaten im Anforderungstext enthalten sind:

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

Viele {{Glossary("REST", "REST")}} APIs verwenden `application/json` als Content-Type, was für die Kommunikation zwischen Maschinen oder programmatischer Interaktion praktisch ist. Das folgende Beispiel zeigt eine {{HTTPStatus("201", "201 Created")}}-Antwort als Ergebnis einer erfolgreichen Anfrage:

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
