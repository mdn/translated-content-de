---
title: Content-Type
slug: Web/HTTP/Headers/Content-Type
l10n:
  sourceCommit: dcab0b1204db4f961947128e236f8291de01bcc0
---

{{HTTPSidebar}}

Der **`Content-Type`** {{Glossary("representation header")}} wird verwendet, um den ursprünglichen {{Glossary("MIME type", "media type")}} der Ressource anzugeben, bevor eine Inhaltscodierung angewendet wurde, die vor der Übertragung aufgebracht wurde.

In Antworten informiert der `Content-Type`-Header den Client über den Medientyp der zurückgegebenen Daten. Bei Anfragen wie {{HTTPMethod("POST")}} oder {{HTTPMethod("PUT")}} verwendet der Client den `Content-Type`-Header, um den Typ des Inhalts anzugeben, der an den Server gesendet wird. Wenn eine Serverimplementierung oder -konfiguration strenge Anforderungen an die Behandlung von Inhaltstypen stellt, kann eine {{HTTPStatus("415")}} Client-Fehlermeldung zurückgegeben werden.

Der `Content-Type`-Header unterscheidet sich von {{HTTPHeader("Content-Encoding")}}, indem `Content-Encoding` dem Empfänger hilft zu verstehen, wie die Daten in ihre ursprüngliche Form decodiert werden können.

> [!NOTE]
> Dieser Wert kann ignoriert werden, wenn Browser [MIME sniffing](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#mime_sniffing) (oder Inhalts-Sniffing) bei Antworten durchführen.
> Um zu verhindern, dass Browser MIME sniffing verwenden, setzen Sie den Wert des {{HTTPHeader("X-Content-Type-Options")}} Headers auf `nosniff`.
> Siehe [MIME-Typ-Verifikation](/de/docs/Web/Security/Practical_implementation_guides/MIME_types) für weitere Details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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
        <br /><br />Es muss auch einen Medientyp seines geparsten Wertes (Ignorieren von Parametern) von entweder <code>application/x-www-form-urlencoded</code>, <code>multipart/form-data</code> oder <code>text/plain</code> haben.
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

    - **`charset`**: Gibt den verwendeten {{Glossary("character encoding")}} Standard an. Der Wert ist nicht case-sensitiv, jedoch wird Kleinbuchstaben bevorzugt.
    - **`boundary`**: Für mehrteilige Entitäten ist der `boundary` Parameter erforderlich.
      Er wird verwendet, um die Grenzen der verschiedenen Teile der Nachricht zu markieren.
      Der Wert besteht aus 1 bis 70 Zeichen (die nicht mit einem Leerzeichen enden) und ist in verschiedenen Systemen bekannt als robust (z. B. E-Mail-Gateways).
      Häufig wird der Headerumbruch in der Anfrage mit zwei Bindestrichen am Anfang versehen und der letzte Umbruch hat zwei Bindestriche am Ende.

## Beispiele

### Assets mit dem richtigen Content-Type bereitstellen

In den folgenden beiden Beispielantworten werden JavaScript- und CSS-Assets mit `text/javascript` für JavaScript und `text/css` für CSS bereitgestellt. Der richtige Content-Type für diese Ressourcen hilft dem Browser, sie sicherer und mit besserer Leistung zu verarbeiten.
Weitere Informationen finden Sie unter [Server-MIME-Typen korrekt konfigurieren](/de/docs/Learn/Server-side/Configuring_server_MIME_types).

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

In einer {{HTTPMethod("POST")}} Anfrage, die aus dem Absenden eines HTML-Formulars resultiert, wird der `Content-Type` der Anfrage durch das `enctype` Attribut auf dem {{HTMLElement("form")}} Element angegeben.

```html
<form action="/foo" method="post" enctype="multipart/form-data">
  <input type="text" name="description" value="Description input value" />
  <input type="file" name="myFile" />
  <button type="submit">Senden</button>
</form>
```

Die Anfrage sieht ungefähr wie das folgende Beispiel aus, wobei einige Header zur Kürze weggelassen wurden. In der Anfrage wird eine Grenze von `ExampleBoundaryString` als Beispiel verwendet, aber in der Praxis würde ein Browser eine Zeichenfolge erstellen, die eher so aussieht: `---------------------------1003363413119651595289485765`.

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

### `Content-Type` in URL-kodierter Formulareinsendung

Wenn Formulare keine Datei-Uploads beinhalten und einfachere Felder verwenden, können URL-encodierte Formulare praktischer sein, bei denen die Formulardaten im Rumpf der Anfrage enthalten sind:

```html
<form action="/submit" method="post">
  <label for="comment">Comment:</label>
  <input type="text" id="comment" name="comment" value="Hello!" />
  <button type="submit">Senden</button>
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

Viele {{Glossary("REST")}} APIs verwenden `application/json` als Content-Type, was für die Kommunikation zwischen Maschinen oder die programmatische Interaktion praktisch ist. Das folgende Beispiel zeigt eine {{HTTPStatus("201", "201 Created")}} Antwort, die das Ergebnis einer erfolgreichen Anfrage darstellt:

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "message": "Neuer Benutzer angelegt",
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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}
- {{HTTPHeader("Vary")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Disposition")}}
- {{HTTPStatus("206", "206 Partial Content")}}
- {{HTTPHeader("X-Content-Type-Options")}}
