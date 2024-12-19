---
title: Content-Type
slug: Web/HTTP/Headers/Content-Type
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTTPSidebar}}

Der HTTP **`Content-Type`** {{Glossary("representation_header", "Repräsentationsheader")}} wird verwendet, um den ursprünglichen {{Glossary("MIME_type", "Medientyp")}} einer Ressource anzuzeigen, bevor eine Inhaltscodierung angewendet wird.

In Antworten informiert der `Content-Type`-Header den Client über den Medientyp der zurückgegebenen Daten. In Anfragen wie {{HTTPMethod("POST")}} oder {{HTTPMethod("PUT")}} verwendet der Client den `Content-Type`-Header, um den Typ des an den Server gesendeten Inhalts zu spezifizieren. Wenn eine Serverimplementierung oder -konfiguration streng im Umgang mit Content-Typen ist, kann eine {{HTTPStatus("415")}}-Clientfehlermeldung zurückgegeben werden.

Der `Content-Type`-Header unterscheidet sich von {{HTTPHeader("Content-Encoding")}}, da `Content-Encoding` dem Empfänger hilft zu verstehen, wie die Daten in ihre ursprüngliche Form dekodiert werden sollen.

> [!NOTE]
> Dieser Wert kann ignoriert werden, wenn Browser [MIME sniffing](/de/docs/Web/HTTP/MIME_types#mime_sniffing) (oder Inhaltsschnüffeln) bei Antworten durchführen. Um zu verhindern, dass Browser MIME sniffing verwenden, setzen Sie den Wert des Headers {{HTTPHeader("X-Content-Type-Options")}} auf `nosniff`. Weitere Einzelheiten finden Sie unter [MIME-Typ-Überprüfung](/de/docs/Web/Security/Practical_implementation_guides/MIME_types).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Repräsentationsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted response header")}}
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request header")}}
      </th>
      <td>
        Ja*
      </td>
    </tr>
  </tbody>
</table>

\* Werte dürfen kein [CORS-unsafe request header byte](https://fetch.spec.whatwg.org/#cors-unsafe-request-header-byte) enthalten: `"():<>?@[\]{},`, Löschen `0x7F`, und Steuerzeichen `0x00` bis `0x19` mit Ausnahme von Tab `0x09`. Außerdem muss es einen Medientyp seines geparsten Wertes (Ignorieren von Parametern) von entweder `application/x-www-form-urlencoded`, `multipart/form-data` oder `text/plain` haben.

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

  - : Der [Medientyp](/de/docs/Web/HTTP/MIME_types) der Ressource oder Daten. Kann die folgenden Parameter enthalten:

    - **`charset`**: Gibt den verwendeten {{Glossary("character_encoding", "Zeichenkodierungsstandard")}} an. Der Wert ist nicht groß-/kleinschreibungssensitiv, jedoch wird Kleinschreibung bevorzugt.
    - **`boundary`**: Für Mehrteil-Nachrichten ist der `boundary`-Parameter erforderlich. Er wird verwendet, um die Grenzen der verschiedenen Teile der Nachricht zu markieren. Der Wert besteht aus 1 bis 70 Zeichen (nicht endend mit Leerzeichen), die dafür bekannt sind, in unterschiedlichen Systemen robust zu sein (z.B. E-Mail-Gateways). Häufig wird der Header-Grenzwert im Anfragekörper von zwei Bindestrichen eingeleitet, und die endgültige Grenze hat am Ende zwei Bindestriche angehängt.

## Beispiele

### Assets mit korrektem Content-Typ bereitstellen

In den folgenden zwei Beispielantworten werden JavaScript- und CSS-Assets mit `text/javascript` für JavaScript und `text/css` für CSS bereitgestellt. Der korrekte Content-Typ für diese Ressourcen hilft dem Browser, sie sicherer und mit besserer Leistung zu behandeln. Weitere Informationen finden Sie unter [Server-MIME-Typen richtig konfigurieren](/de/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types).

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

In einer {{HTTPMethod("POST")}}-Anfrage, die aus der Einreichung eines HTML-Formulars resultiert, wird der `Content-Type` der Anfrage durch das `enctype`-Attribut des `{{HTMLElement("form")}}`-Elements spezifiziert.

```html
<form action="/foo" method="post" enctype="multipart/form-data">
  <input type="text" name="description" value="Description input value" />
  <input type="file" name="myFile" />
  <button type="submit">Submit</button>
</form>
```

Die Anfrage sieht in etwa wie das folgende Beispiel aus, wobei einige Header zur Kürze ausgelassen wurden. In der Anfrage wird ein Rechteck von `ExampleBoundaryString` zur Veranschaulichung verwendet, aber in der Praxis würde ein Browser eine Zeichenfolge erstellen, die eher so aussieht: `---------------------------1003363413119651595289485765`.

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

### `Content-Type` bei URL-kodierten Formulareinreichungen

Wenn Formulare keine Datei-Uploads beinhalten und einfachere Felder verwenden, können URL-codierte Formulare bequemer sein, bei denen die Formulardaten im Anforderungstext enthalten sind:

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

Viele {{Glossary("REST", "REST")}}-APIs verwenden `application/json` als Inhalts-Typ, was für die Kommunikation zwischen Maschinen oder die programmgesteuerte Interaktion praktisch ist. Das folgende Beispiel zeigt eine {{HTTPStatus("201", "201 Created")}}-Antwort, die das Ergebnis einer erfolgreichen Anfrage anzeigt:

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
