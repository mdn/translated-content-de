---
title: Content-Location
slug: Web/HTTP/Headers/Content-Location
l10n:
  sourceCommit: 1176e753733ee9d2e8966cc7cf03df495dce9aba
---

{{HTTPSidebar}}

Der **`Content-Location`** Header gibt einen alternativen Speicherort für die zurückgegebenen Daten an. Der Hauptzweck besteht darin, die URL einer Ressource anzugeben, die als Ergebnis der [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation) übertragen wurde.

{{HTTPHeader("Location")}} und `Content-Location` sind verschieden. `Location` zeigt die URL einer Weiterleitung an, während `Content-Location` die direkte URL angibt, die verwendet werden soll, um zukünftig ohne weitere Inhaltsaushandlung auf die Ressource zuzugreifen. `Location` ist ein Header, der mit der Antwort verbunden ist, während `Content-Location` mit den zurückgegebenen Daten verknüpft ist. Diese Unterscheidung mag ohne [Beispiele](#beispiele) abstrakt erscheinen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Repräsentations-Header](/de/docs/Glossary/Representation_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
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

### Anfordern von Daten vom Server in verschiedenen Formaten

Angenommen, die API einer Website kann Daten in den Formaten [JSON](/de/docs/Glossary/JSON), [XML](/de/docs/Glossary/XML) oder [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) zurückgeben. Wenn die URL für ein bestimmtes Dokument `https://example.com/documents/foo` ist, könnte die Website je nach dem `{{HTTPHeader("Accept")}}` Header der Anfrage unterschiedliche URLs für `Content-Location` zurückgeben:

| Anfrage-Header                        | Antwort-Header                          |
| ------------------------------------- | --------------------------------------- |
| `Accept: application/json, text/json` | `Content-Location: /documents/foo.json` |
| `Accept: application/xml, text/xml`   | `Content-Location: /documents/foo.xml`  |
| `Accept: text/plain, text/*`          | `Content-Location: /documents/foo.txt`  |

Diese URLs sind Beispiele — die Website könnte die verschiedenen Dateitypen mit beliebigen URL-Mustern bedienen, wie etwa einem [Query-String-Parameter](/de/docs/Web/API/HTMLAnchorElement/search): `/documents/foo?format=json`, `/documents/foo?format=xml`, usw.

Der Client könnte sich dann merken, dass die JSON-Version unter dieser bestimmten URL verfügbar ist und die Inhaltsaushandlung beim nächsten Anfordern des Dokuments überspringen.

Der Server könnte auch andere [Inhaltsaushandlungs-Header](/de/docs/Web/HTTP/Content_negotiation) berücksichtigen, wie z.B. {{HTTPHeader("Accept-Language")}}.

### Verweisen auf ein neues Dokument (HTTP 201 Created)

Angenommen, Sie erstellen einen neuen Blog-Beitrag über die API einer Website:

```http
POST /new/post
Host: example.com
Content-Type: text/markdown

# My first blog post!

I made this through `example.com`'s API. I hope it worked.
```

Die Website gibt den veröffentlichten Beitrag im Antwortkörper zurück. Der Server gibt an, _wo_ sich der neue Beitrag mit dem `Content-Location` Header befindet, was bedeutet, dass sich dieser Ort auf den Inhalt (den Körper) dieser Antwort bezieht:

```http
HTTP/1.1 201 Created
Content-Type: text/markdown
Content-Location: /my-first-blog-post

# My first blog post

I made this through `example.com`'s API. I hope it worked.
```

### Angabe der URL eines Transaktionsergebnisses

Angenommen, Sie haben ein
[`<form>`](/de/docs/Web/HTML/Element/form) um Geld an einen anderen Nutzer einer Website zu senden.

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

Wenn das Formular abgeschickt wird, erzeugt die Website eine Quittung für die Transaktion. Der Server könnte `Content-Location` verwenden, um die URL dieser Quittung für zukünftigen Zugriff anzugeben.

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
