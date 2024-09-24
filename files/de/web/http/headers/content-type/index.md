---
title: Content-Type
slug: Web/HTTP/Headers/Content-Type
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{HTTPSidebar}}

Der **`Content-Type`** {{Glossary("representation_header", "Darstellungs-Header")}} wird verwendet, um den ursprünglichen {{Glossary("MIME_type", "Medientyp")}} der Ressource anzugeben, bevor eine Inhaltskodierung für die Übertragung angewendet wird.

In Antworten informiert der `Content-Type`-Header den Client über den Medientyp der zurückgegebenen Daten.
In Anfragen wie {{HTTPMethod("POST")}} oder {{HTTPMethod("PUT")}} verwendet der Client den `Content-Type`-Header, um den Typ der an den Server gesendeten Inhalte festzulegen.
Wenn eine Serverimplementierung oder -konfiguration streng im Umgang mit Inhaltstypen ist, kann eine {{HTTPStatus("415")}}-Fehlermeldung für den Client zurückgegeben werden.

Der `Content-Type`-Header unterscheidet sich von {{HTTPHeader("Content-Encoding")}} dadurch, dass `Content-Encoding` dem Empfänger hilft zu verstehen, wie die Daten in ihre ursprüngliche Form dekodiert werden.

> [!NOTE]
> Dieser Wert kann ignoriert werden, wenn Browser [MIME sniffing](/de/docs/Web/HTTP/MIME_types#mime_sniffing) (oder Inhalts-Sniffing) bei Antworten durchführen.
> Um zu verhindern, dass Browser MIME-Sniffing verwenden, setzen Sie den {{HTTPHeader("X-Content-Type-Options")}}-Header-Wert auf `nosniff`.
> Sehen Sie sich [MIME-Typ-Verifizierung](/de/docs/Web/Security/Practical_implementation_guides/MIME_types) für weitere Details an.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Darstellungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-sicher gelisteter Antwort-Header")}}
      </th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-sicher gelisteter Anfrage-Header")}}
      </th>
      <td>
        Ja, aber Werte dürfen kein <em>CORS-unsicheres Anfrage-Header-Byte</em> enthalten: <code>0x00</code>-<code>0x1F</code> (außer <code>0x09</code> (HT)), <code>"():&#x3C;>?@[\]{}</code> und <code>0x7F</code> (DEL).
        <br /><br />Es muss auch einen Medientyp seines geparsten Wertes (ohne Parameter) haben von entweder <code>application/x-www-form-urlencoded</code>, <code>multipart/form-data</code> oder <code>text/plain</code>.
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

  - : Der [Medientyp](/de/docs/Web/HTTP/MIME_types) der Ressource oder Daten.
    Kann folgende Parameter enthalten:

    - **`charset`**: Gibt die verwendete {{Glossary("character_encoding", "Zeichenkodierungs")}}-Norm an. Der Wert ist nicht case-sensitiv, aber Kleinschreibung wird bevorzugt.
    - **`boundary`**: Für Mehrteil-Nachrichten ist der `boundary`-Parameter erforderlich.
      Er wird verwendet, um die Abgrenzungen der verschiedenen Teile der Nachricht zu markieren.
      Der Wert besteht aus 1 bis 70 Zeichen (nicht mit Leerzeichen endend), die in verschiedenen Systemen (z. B. E-Mail-Gateways) als robust bekannt sind.
      Oft ist die Grenze im Header im Anforderungskörper um zwei Bindestriche vorangestellt, und die endgültige Grenze hat zwei Bindestriche am Ende angefügt.

## Beispiele

### Bereitstellung von Assets mit korrektem Inhaltstyp

In den folgenden zwei Beispielantworten werden JavaScript- und CSS-Assets mit `text/javascript` für JavaScript und `text/css` für CSS bereitgestellt.
Der richtige Inhaltstyp für diese Ressourcen hilft dem Browser, diese sicherer und mit besserer Leistung zu handhaben.
Sehen Sie sich [korrekte Konfiguration der MIME-Typen des Servers](/de/docs/Learn/Server-side/Configuring_server_MIME_types) für weitere Informationen an.

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

In einer {{HTTPMethod("POST")}}-Anfrage, die aus einer HTML-Formularübermittlung resultiert, wird der `Content-Type` der Anfrage durch das `enctype`-Attribut auf dem {{HTMLElement("form")}}-Element angegeben.

```html
<form action="/foo" method="post" enctype="multipart/form-data">
  <input type="text" name="description" value="Description input value" />
  <input type="file" name="myFile" />
  <button type="submit">Submit</button>
</form>
```

Die Anfrage sieht etwa so aus wie das folgende Beispiel, wobei einige Header zur Kürze ausgelassen wurden.
In der Anfrage wird eine Grenze von `ExampleBoundaryString` zur Veranschaulichung verwendet, aber in der Praxis würde ein Browser eine Zeichenkette erstellen, die eher so aussieht: `---------------------------1003363413119651595289485765`.

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

### `Content-Type` bei URL-codierten Formulareinsendungen

Wenn Formulare keine Datei-Uploads beinhalten und einfachere Felder verwenden, können URL-codierte Formulare bequemer sein, wobei die Formulardaten im Anforderungskörper enthalten sind:

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

Viele {{Glossary("REST", "REST")}}-APIs verwenden `application/json` als Inhaltstyp, was für die Kommunikation zwischen Maschinen oder die programmatische Interaktion praktisch ist.
Das folgende Beispiel zeigt eine {{HTTPStatus("201", "201 Created")}}-Antwort, die das Ergebnis einer erfolgreichen Anfrage darstellt:

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
