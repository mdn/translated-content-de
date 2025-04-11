---
title: Content-Location
slug: Web/HTTP/Reference/Headers/Content-Location
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}

Der HTTP **`Content-Location`** {{Glossary("representation_header", "Repräsentations-Header")}} gibt einen alternativen Ort für die zurückgegebenen Daten an. Sein Hauptzweck ist es, die URL einer Ressource anzugeben, die als Ergebnis der [Content Negotiation](/de/docs/Web/HTTP/Guides/Content_negotiation) übermittelt wurde.

Der `Content-Location`-Header unterscheidet sich vom {{HTTPHeader("Location")}}-Header. `Content-Location` gibt die direkte URL an, um auf die Ressource zuzugreifen, wenn eine [Content Negotiation](/de/docs/Web/HTTP/Guides/Content_negotiation) stattgefunden hat, und ermöglicht es dem Client, zukünftige Content Negotiations für diese Ressource zu umgehen. `Location` hingegen gibt entweder das Ziel einer `3XX`-Weiterleitung oder die URL einer neu erstellten Ressource in einer {{HTTPStatus("201", "201 Created")}}-Antwort an.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Type</th>
      <td>{{Glossary("Representation_header", "Repräsentations-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Location: <url>
```

## Direktiven

- `<url>`
  - : Eine URL, die [absolut](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL#absolute_urls_vs._relative_urls) oder [relativ](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL#absolute_urls_vs._relative_urls) zur Anfrage-URL sein kann.

## Beispiele

### Anfordern von Daten vom Server in verschiedenen Formaten

Angenommen, die API einer Website kann Daten in {{Glossary("JSON", "JSON")}}-, {{Glossary("XML", "XML")}}- oder [CSV](https://en.wikipedia.org/wiki/Comma-separated_values)-Formaten zurückgeben. Wenn die URL für ein bestimmtes Dokument `https://example.com/documents/foo` ist, könnte die Website je nach {{HTTPHeader("Accept")}}-Header der Anfrage unterschiedliche URLs für `Content-Location` zurückgeben:

| Anfrage-Header                        | Antwort-Header                          |
| ------------------------------------- | --------------------------------------- |
| `Accept: application/json, text/json` | `Content-Location: /documents/foo.json` |
| `Accept: application/xml, text/xml`   | `Content-Location: /documents/foo.xml`  |
| `Accept: text/plain, text/*`          | `Content-Location: /documents/foo.txt`  |

Diese URLs sind Beispiele — die Website könnte die verschiedenen Dateitypen mit beliebigen URL-Mustern bereitstellen, wie einem [Query-String-Parameter](/de/docs/Web/API/HTMLAnchorElement/search): `/documents/foo?format=json`, `/documents/foo?format=xml`, und so weiter.

Der Client könnte dann merken, dass die JSON-Version unter dieser bestimmten URL verfügbar ist, und die Content Negotiation überspringen, wenn er das nächste Mal dieses Dokument anfordert.

Der Server könnte auch andere [Content Negotiation](/de/docs/Web/HTTP/Guides/Content_negotiation)-Header berücksichtigen, wie {{HTTPHeader("Accept-Language")}}.

### Angeben der URL des Ergebnisses einer Transaktion

Angenommen, Sie haben ein [`<form>`](/de/docs/Web/HTML/Reference/Elements/form) zum Senden von Geld an einen anderen Benutzer einer Website.

```html
<form action="/send-payment" method="post">
  <p>
    <label>
      Who do you want to send the money to?
      <input type="text" name="recipient" />
    </label>
  </p>

  <p>
    <label>
      How much?
      <input type="number" name="amount" />
    </label>
  </p>

  <button type="submit">Send Money</button>
</form>
```

Wenn das Formular abgesendet wird, erstellt die Website eine Quittung für die Transaktion. Der Server könnte `Content-Location` verwenden, um die URL dieser Quittung für zukünftigen Zugriff anzugeben.

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
