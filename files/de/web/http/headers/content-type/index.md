---
title: Content-Type
slug: Web/HTTP/Headers/Content-Type
l10n:
  sourceCommit: dcab0b1204db4f961947128e236f8291de01bcc0
---

{{HTTPSidebar}}

Der **`Content-Type`** [Repräsentations-Header](/de/docs/Glossary/representation_header) wird verwendet, um den ursprünglichen [Medientyp](/de/docs/Glossary/MIME_type) der Ressource anzugeben, bevor eine Inhaltskodierung vor der Übertragung angewendet wird.

In Antworten informiert der `Content-Type`-Header den Client über den Medientyp der zurückgegebenen Daten.
In Anfragen wie {{HTTPMethod("POST")}} oder {{HTTPMethod("PUT")}} verwendet der Client den `Content-Type`-Header, um den Typ des an den Server gesendeten Inhalts anzugeben.
Wenn die Serverimplementierung oder -konfiguration streng in Bezug auf die Behandlung von Inhaltstypen ist, kann eine {{HTTPStatus("415")}}-Client-Fehlerantwort zurückgegeben werden.

Der `Content-Type`-Header unterscheidet sich von {{HTTPHeader("Content-Encoding")}} dadurch, dass `Content-Encoding` dem Empfänger hilft zu verstehen, wie Daten in ihre ursprüngliche Form dekodiert werden.

> [!NOTE]
> Dieser Wert kann ignoriert werden, wenn Browser [MIME-Sniffing](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#mime_sniffing) (oder Inhalts-Sniffing) bei Antworten durchführen.
> Um zu verhindern, dass Browser MIME-Sniffing verwenden, setzen Sie den Wert des {{HTTPHeader("X-Content-Type-Options")}}-Headers auf `nosniff`.
> Weitere Details finden Sie unter [MIME-Typ-Verifizierung](/de/docs/Web/Security/Practical_implementation_guides/MIME_types).

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
        [CORS-safelisted response header](/de/docs/Glossary/CORS-safelisted_response_header)
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">
        [CORS-safelisted request header](/de/docs/Glossary/CORS-safelisted_request_header)
      </th>
      <td>
        Ja, aber Werte dürfen kein <em>CORS-unsafe request header byte</em>: <code>0x00</code>-<code>0x1F</code> (außer <code>0x09</code> (HT)), <code>"():&#x3C;>?@[\]{}</code>, und <code>0x7F</code> (DEL) enthalten.
        <br /><br />Es muss außerdem einen Medientyp mit seinem analysierten Wert (ignorieren Sie Parameter) von entweder <code>application/x-www-form-urlencoded</code>, <code>multipart/form-data</code> oder <code>text/plain</code> haben.
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
    Kann folgende Parameter enthalten:

    - **`charset`**: Gibt den verwendeten [Zeichenkodierungs](/de/docs/Glossary/character_encoding)-Standard an. Der Wert ist nicht auf Groß- und Kleinschreibung empfindlich, jedoch wird Kleinschreibung bevorzugt.
    - **`boundary`**: Für mehrteilige Entitäten ist der Parameter `boundary` erforderlich.
      Er wird verwendet, um die Grenzen der verschiedenen Teile der Nachricht zu markieren.
      Der Wert besteht aus 1 bis 70 Zeichen (nicht mit Leerzeichen endend), die in verschiedenen Systemkontexten (z.B. E-Mail-Gateways) als robust bekannt sind.
      Oft wird der Header-Grenze im Anforderungstext zwei Bindestriche vorangestellt, und die endgültige Grenze hat am Ende zwei Bindestriche angehängt.

## Beispiele

### Bereitstellung von Ressourcen mit korrektem Inhaltstyp

In den folgenden zwei Beispielantworten werden JavaScript- und CSS-Ressourcen mit `text/javascript` für JavaScript und `text/css` für CSS bereitgestellt.
Der korrekte Inhaltstyp für diese Ressourcen hilft dem Browser, sie sicherer und mit besserer Leistung zu verarbeiten.
Weitere Informationen finden Sie unter [Ordnungsgemäße Konfiguration von Server-MIME-Typen](/de/docs/Learn/Server-side/Configuring_server_MIME_types).

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

In einer {{HTTPMethod("POST")}}-Anforderung, die sich aus einer HTML-Formularübermittlung ergibt, wird der `Content-Type` der Anforderung durch das `enctype`-Attribut am {{HTMLElement("form")}}-Element angegeben.

```html
<form action="/foo" method="post" enctype="multipart/form-data">
  <input type="text" name="description" value="Description input value" />
  <input type="file" name="myFile" />
  <button type="submit">Submit</button>
</form>
```

Die Anforderung sieht ungefähr wie das folgende Beispiel aus, wobei einige Header der Kürze halber ausgelassen wurden.
In der Anfrage wird ein Grenzwert von `ExampleBoundaryString` zur Veranschaulichung verwendet, aber in der Praxis würde ein Browser eine Zeichenfolge erstellen, die mehr so aussieht: `---------------------------1003363413119651595289485765`.

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

### `Content-Type` in einer REST-API mit JSON

Viele [REST](/de/docs/Glossary/REST)-APIs verwenden `application/json` als Inhaltstyp, der für die Kommunikation zwischen Maschinen oder programmatische Interaktionen praktisch ist.
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
