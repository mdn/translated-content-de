---
title: Content-Location
slug: Web/HTTP/Headers/Content-Location
l10n:
  sourceCommit: 1176e753733ee9d2e8966cc7cf03df495dce9aba
---

{{HTTPSidebar}}

Der **`Content-Location`**-Header gibt einen alternativen Ort für die zurückgegebenen Daten an. Die Hauptverwendung besteht darin, die URL einer Ressource anzugeben, die als Ergebnis der [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation) übertragen wurde.

{{HTTPHeader("Location")}} und `Content-Location` sind unterschiedlich. `Location` gibt die URL einer Umleitung an, während `Content-Location` die direkte URL angibt, die verwendet werden soll, um die Ressource zukünftig ohne weitere Inhaltsaushandlung zu erreichen. `Location` ist ein Header, der mit der Antwort verbunden ist, während `Content-Location` mit den zurückgegebenen Daten verbunden ist. Diese Unterscheidung mag abstrakt erscheinen ohne [Beispiele](#beispiele).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Repräsentations-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Location: <url>
```

## Direktiven

- \<url>
  - : Eine [relative](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL#absolute_urls_vs._relative_urls) (zur Anfrage-URL) oder [absolute](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL#absolute_urls_vs._relative_urls) URL.

## Beispiele

### Anfordern von Daten von einem Server in verschiedenen Formaten

Angenommen, die API einer Webseite kann Daten in den Formaten {{Glossary("JSON", "JSON")}}, {{Glossary("XML", "XML")}} oder [CSV](<https://de.wikipedia.org/wiki/CSV_(Dateiformat)>) zurückgeben. Wenn die URL für ein bestimmtes Dokument bei `https://example.com/documents/foo` ist, könnte die Webseite je nach `Accept`-Header der Anfrage unterschiedliche URLs für `Content-Location` zurückgeben:

| Anfrage-Header                        | Antwort-Header                          |
| ------------------------------------- | --------------------------------------- |
| `Accept: application/json, text/json` | `Content-Location: /documents/foo.json` |
| `Accept: application/xml, text/xml`   | `Content-Location: /documents/foo.xml`  |
| `Accept: text/plain, text/*`          | `Content-Location: /documents/foo.txt`  |

Diese URLs sind Beispiele — die Webseite könnte die verschiedenen Dateitypen mit beliebigen URL-Mustern bereitstellen, wie z.B. einem [Query-String-Parameter](/de/docs/Web/API/HTMLAnchorElement/search): `/documents/foo?format=json`, `/documents/foo?format=xml` und so weiter.

Der Client könnte sich dann merken, dass die JSON-Version unter dieser speziellen URL verfügbar ist und die Inhaltsaushandlung beim nächsten Abruf dieses Dokuments überspringen.

Der Server könnte auch andere [Inhaltsaushandlungs-](/de/docs/Web/HTTP/Content_negotiation-)Header berücksichtigen, wie z.B. {{HTTPHeader("Accept-Language")}}.

### Hinweisen auf ein neues Dokument (HTTP 201 Created)

Angenommen, Sie erstellen einen neuen Blogbeitrag über eine API einer Webseite:

```http
POST /new/post
Host: example.com
Content-Type: text/markdown

# My first blog post!

I made this through `example.com`'s API. I hope it worked.
```

Die Webseite gibt den veröffentlichten Beitrag im Antwortkörper zurück. Der Server gibt mit dem `Content-Location`-Header an, _wo_ sich der neue Beitrag befindet, und zeigt damit an, dass sich dieser Ort auf den Inhalt (den Körper) dieser Antwort bezieht:

```http
HTTP/1.1 201 Created
Content-Type: text/markdown
Content-Location: /my-first-blog-post

# My first blog post

I made this through `example.com`'s API. I hope it worked.
```

### Angeben der URL des Ergebnisses einer Transaktion

Angenommen, Sie haben ein [`<form>`](/de/docs/Web/HTML/Element/form) zum Versenden von Geld an einen anderen Benutzer einer Webseite.

```html
<form action="/send-payment" method="post">
  <p>
    <label
      >Who do you want to send the money to?
      <input type="text" name="recipient" />
    </label>
  </p>

  <p>
    <label
      >How much?
      <input type="number" name="amount" />
    </label>
  </p>

  <button type="submit">Send Money</button>
</form>
```

Wenn das Formular abgesendet wird, erzeugt die Webseite eine Quittung für die Transaktion. Der Server könnte `Content-Location` verwenden, um die URL dieser Quittung für zukünftige Zugriffe anzugeben.

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Location: /my-receipts/38

<!doctype html>
(Lots of HTML…)

<p>You sent $38.00 to ExampleUser.</p>

(Lots more HTML…)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Location")}}
