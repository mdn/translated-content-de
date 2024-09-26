---
title: Content-Type
slug: Web/HTTP/Headers/Content-Type
l10n:
  sourceCommit: dcab0b1204db4f961947128e236f8291de01bcc0
---

{{HTTPSidebar}}

Der **`Content-Type`** {{Glossary("representation header")}} wird verwendet, um den ursprünglichen {{Glossary("MIME type", "media type")}} der Ressource vor der Anwendung jeglicher Inhaltskodierung anzugeben, die vor der Übertragung stattgefunden hat.

In Antworten informiert der `Content-Type`-Header den Client über den Medientyp der zurückgegebenen Daten. In Anfragen wie {{HTTPMethod("POST")}} oder {{HTTPMethod("PUT")}} verwendet der Client den `Content-Type`-Header, um den Typ des Inhalts anzugeben, der an den Server gesendet wird. Wenn eine Serverimplementierung oder Konfiguration streng mit der Handhabung des Inhaltstyps umgeht, kann eine {{HTTPStatus("415")}} Client-Fehlerantwort zurückgegeben werden.

Der `Content-Type`-Header unterscheidet sich von {{HTTPHeader("Content-Encoding")}}, da `Content-Encoding` dem Empfänger hilft, wie man Daten in ihre ursprüngliche Form dekodiert.

> [!NOTE]
> Dieser Wert kann ignoriert werden, wenn Browser [MIME-Sniffing](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#mime_sniffing) (oder Inhalts-Sniffing) bei Antworten durchführen.
> Um zu verhindern, dass Browser MIME-Sniffing verwenden, setzen Sie den Wert des {{HTTPHeader("X-Content-Type-Options")}} Headers auf `nosniff`.
> Siehe [MIME-Typ-Verifikation](/de/docs/Web/Security/Practical_implementation_guides/MIME_types) für weitere Details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header")}}
      </th>
      <td>
        Ja, aber Werte dürfen kein <em>CORS-unsafe request header byte</em> enthalten: <code>0x00</code>-<code>0x1F</code> (außer <code>0x09</code> (HT)), <code>"():&#x3C;>?@[\]{}</code> und <code>0x7F</code> (DEL).
        <br /><br />Es muss auch einen Medientyp seines analysierten Wertes (Parameter ignorierend) von entweder <code>application/x-www-form-urlencoded</code>, <code>multipart/form-data</code> oder <code>text/plain</code> haben.
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

    - **`charset`**: Gibt den verwendeten {{Glossary("character encoding")}} Standard an. Der Wert ist nicht case-sensitiv, aber Kleinbuchstaben werden bevorzugt.
    - **`boundary`**: Für Multipart-Entitäten ist der `boundary`-Parameter erforderlich.
      Er wird verwendet, um die Grenzen der verschiedenen Teile der Nachricht zu kennzeichnen.
      Der Wert besteht aus 1 bis 70 Zeichen (nicht mit Leerzeichen endend), die in verschiedenen Systemen (z. B. E-Mail-Gateways) als robust bekannt sind.
      Oft wird die Header-Grenze im Anfragetext mit zwei Bindestrichen versehen, und die endgültige Grenze hat am Ende zwei Bindestriche angefügt.

## Beispiele

### Ausliefern von Assets mit korrekt angegebenem Inhaltstyp

In den folgenden zwei Beispielantworten werden JavaScript- und CSS-Assets mit `text/javascript` für JavaScript und `text/css` für CSS bereitgestellt. Der korrekte Inhaltstyp für diese Ressourcen hilft dem Browser, sie sicherer und mit besserer Leistung zu behandeln. Siehe [Server-MIME-Typen richtig konfigurieren](/de/docs/Learn/Server-side/Configuring_server_MIME_types) für weitere Informationen.

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

In einer {{HTTPMethod("POST")}}-Anfrage, die sich aus dem Absenden eines HTML-Formulars ergibt, wird der `Content-Type` der Anfrage durch das `enctype`-Attribut im {{HTMLElement("form")}}-Element angegeben.

```html
<form action="/foo" method="post" enctype="multipart/form-data">
  <input type="text" name="description" value="Description input value" />
  <input type="file" name="myFile" />
  <button type="submit">Submit</button>
</form>
```

Die Anfrage sieht ungefähr wie das folgende Beispiel aus, wobei einige Header aus Kürze ausgelassen wurden. In der Anfrage wird eine Grenze von `ExampleBoundaryString` zur Veranschaulichung verwendet, aber in der Praxis würde ein Browser eine Zeichenfolge erstellen, die eher so aussieht `---------------------------1003363413119651595289485765`.

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

Wenn Formulare keine Dateiuploads enthalten und einfachere Felder nutzen, können URL-kodierte Formulare bequemer sein, wobei die Formulardaten im Anfragetext enthalten sind:

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

Viele {{Glossary("REST")}} APIs verwenden `application/json` als Inhaltstyp, was für die maschinelle Kommunikation oder programmgesteuerte Interaktion praktisch ist. Das folgende Beispiel zeigt eine {{HTTPStatus("201", "201 Created")}} Antwort, die das Ergebnis einer erfolgreichen Anfrage zeigt:

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
