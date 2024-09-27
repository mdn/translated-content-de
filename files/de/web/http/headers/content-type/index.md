---
title: Content-Type
slug: Web/HTTP/Headers/Content-Type
l10n:
  sourceCommit: dcab0b1204db4f961947128e236f8291de01bcc0
---

{{HTTPSidebar}}

Der **`Content-Type`** [Repräsentations-Header](/de/docs/Glossary/representation_header) wird verwendet, um den ursprünglichen [Medientyp](/de/docs/Glossary/MIME_type) der Ressource anzugeben, bevor eine Inhaltskodierung für die Übertragung angewendet wurde.

In Antworten informiert der `Content-Type`-Header den Client über den Medientyp der zurückgegebenen Daten.
Bei Anfragen wie {{HTTPMethod("POST")}} oder {{HTTPMethod("PUT")}} verwendet der Client den `Content-Type`-Header, um den Typ des Inhalts anzugeben, der an den Server gesendet wird.
Wenn eine Serverimplementierung oder -konfiguration streng mit der Behandlung von Inhaltstypen umgeht, kann eine {{HTTPStatus("415")}}-Client-Fehlerantwort zurückgegeben werden.

Der `Content-Type`-Header unterscheidet sich von {{HTTPHeader("Content-Encoding")}}, da `Content-Encoding` dem Empfänger hilft zu verstehen, wie Daten in ihre ursprüngliche Form dekodiert werden.

> [!NOTE]
> Dieser Wert kann ignoriert werden, wenn Browser [MIME-Sniffing](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#mime_sniffing) (oder Inhaltssniffing) bei Antworten durchführen.
> Um zu verhindern, dass Browser MIME-Sniffing verwenden, setzen Sie den Wert des {{HTTPHeader("X-Content-Type-Options")}}-Headers auf `nosniff`.
> Weitere Informationen finden Sie in der [MIME-Typ-Verifizierung](/de/docs/Web/Security/Practical_implementation_guides/MIME_types).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Repräsentations-Header](/de/docs/Glossary/Representation_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        [CORS-safelisted Response Header](/de/docs/Glossary/CORS-safelisted_response_header)
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">
        [CORS-safelisted Request Header](/de/docs/Glossary/CORS-safelisted_request_header)
      </th>
      <td>
        Ja, aber Werte dürfen kein <em>CORS-unsafe request header byte</em> enthalten: <code>0x00</code>-<code>0x1F</code> (außer <code>0x09</code> (HT)), <code>"():&#x3C;>?@[\]{}</code> und <code>0x7F</code> (DEL).
        <br /><br />Es muss auch einen Medientyp des analysierten Wertes haben (Parameter ignorierend) von entweder <code>application/x-www-form-urlencoded</code>, <code>multipart/form-data</code> oder <code>text/plain</code>.
      </td>
    </tr>
  </tbody>
</table>

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

  - : Der [Medientyp](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) der Ressource oder Daten.
    Kann die folgenden Parameter enthalten:

    - **`charset`**: Gibt die verwendete [Zeichenkodierung](/de/docs/Glossary/character_encoding) an. Der Wert ist nicht groß-/klein-schreibungsempfindlich, aber Kleinschreibung wird bevorzugt.
    - **`boundary`**: Für Multipart-Entities ist der `boundary`-Parameter erforderlich.
      Er wird verwendet, um die Grenzen der verschiedenen Teile der Nachricht zu markieren.
      Der Wert besteht aus 1 bis 70 Zeichen (nicht endend mit Leerzeichen), die in verschiedenen Systemen (z.B. E-Mail-Gateways) bekannt für ihre Robustheit sind.
      Oft wird der Header-Grenzwert im Anforderungstext durch zwei Bindestriche eingeleitet, und die endgültige Grenze hat am Ende zwei Bindestriche angehängt.

## Beispiele

### Bereitstellung von Assets mit korrektem Inhaltstyp

In den folgenden zwei Beispielantworten werden JavaScript- und CSS-Assets mit `text/javascript` für JavaScript und `text/css` für CSS bereitgestellt.
Der korrekte Inhaltstyp für diese Ressourcen hilft dem Browser, sie sicherer und mit besserer Leistung zu verarbeiten.
Weitere Informationen finden Sie unter [Server-MIME-Typen richtig konfigurieren](/de/docs/Learn/Server-side/Configuring_server_MIME_types).

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

In einer {{HTTPMethod("POST")}}-Anfrage, die aus einer HTML-Formularübermittlung resultiert, wird der `Content-Type` der Anfrage durch das `enctype`-Attribut auf dem {{HTMLElement("form")}}-Element angegeben.

```html
<form action="/foo" method="post" enctype="multipart/form-data">
  <input type="text" name="description" value="Description input value" />
  <input type="file" name="myFile" />
  <button type="submit">Submit</button>
</form>
```

Die Anfrage sieht etwa wie das folgende Beispiel aus, wobei einige Header zur besseren Übersichtlichkeit weggelassen wurden.
In der Anfrage wird zur Veranschaulichung eine Grenze von `ExampleBoundaryString` verwendet, aber in der Praxis würde ein Browser eine Zeichenfolge erstellen, die eher so aussieht: `---------------------------1003363413119651595289485765`.

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

### `Content-Type` in URL-kodierten Formularübermittlungen

Wenn Formulare keine Dateiuploads beinhalten und einfachere Felder verwenden, können URL-kodierte Formulare bequemer sein, bei denen die Formulardaten im Anforderungstext enthalten sind:

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

### `Content-Type` in einer REST-API mit JSON

Viele [REST](/de/docs/Glossary/REST) APIs verwenden `application/json` als Inhaltstyp, was sich gut für die Kommunikation zwischen Maschinen oder programmatische Interaktionen eignet.
Das folgende Beispiel zeigt eine {{HTTPStatus("201", "201 Created")}}-Antwort, die das Ergebnis einer erfolgreichen Anfrage zeigt:

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

- {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}
- {{HTTPHeader("Vary")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Disposition")}}
- {{HTTPStatus("206", "206 Partial Content")}}
- {{HTTPHeader("X-Content-Type-Options")}}
