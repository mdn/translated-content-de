---
title: Content-Location
slug: Web/HTTP/Reference/Headers/Content-Location
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-**`Content-Location`**-{{Glossary("representation_header", "Repräsentations-Header")}} gibt eine alternative Adresse für die zurückgegebenen Daten an. Hauptsächlich wird er verwendet, um die URL einer Ressource zu kennzeichnen, die als Ergebnis einer [Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation) übertragen wurde.

Der `Content-Location`-Header unterscheidet sich vom {{HTTPHeader("Location")}}-Header. `Content-Location` gibt die direkte URL an, um auf die Ressource zuzugreifen, wenn eine [Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation) stattgefunden hat. Dies ermöglicht es dem Client, bei zukünftigen Anfragen für diese Ressource die Inhaltsverhandlung zu umgehen. `Location` hingegen gibt entweder das Ziel einer `3XX`-Weiterleitung oder die URL einer neu erstellten Ressource in einer {{HTTPStatus("201", "201 Created")}}-Antwort an.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
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
  - : Eine URL, die entweder [absolut](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL#absolute_urls_vs._relative_urls) oder [relativ](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL#absolute_urls_vs._relative_urls) zur Anfrage-URL sein kann.

## Beispiele

### Anfrage von Daten in verschiedenen Formaten von einem Server

Angenommen, eine API einer Seite kann Daten in {{Glossary("JSON", "JSON")}}-, {{Glossary("XML", "XML")}}- oder [CSV](<https://de.wikipedia.org/wiki/CSV_(Dateiformat)>)-Formaten zurückgeben. Wenn die URL für ein bestimmtes Dokument unter `https://example.com/documents/foo` liegt, könnte die Seite je nach dem {{HTTPHeader("Accept")}}-Header der Anfrage unterschiedliche URLs für `Content-Location` zurückgeben:

| Anfrage-Header                        | Antwort-Header                          |
| ------------------------------------- | --------------------------------------- |
| `Accept: application/json, text/json` | `Content-Location: /documents/foo.json` |
| `Accept: application/xml, text/xml`   | `Content-Location: /documents/foo.xml`  |
| `Accept: text/plain, text/*`          | `Content-Location: /documents/foo.txt`  |

Diese URLs sind Beispiele – die Seite könnte die verschiedenen Dateiformate mit beliebigen URL-Mustern bereitstellen, wie z.B. ein [Abfrage-String-Parameter](/de/docs/Web/API/HTMLAnchorElement/search): `/documents/foo?format=json`, `/documents/foo?format=xml` und so weiter.

Der Client könnte sich dann merken, dass die JSON-Version unter dieser bestimmten URL verfügbar ist, und bei der nächsten Anforderung dieses Dokuments die Inhaltsverhandlung überspringen.

Der Server könnte auch andere [Inhaltsverhandlungs](/de/docs/Web/HTTP/Guides/Content_negotiation)-Header berücksichtigen, wie {{HTTPHeader("Accept-Language")}}.

### Angabe der URL des Ergebnisses einer Transaktion

Angenommen, Sie haben ein [`<form>`](/de/docs/Web/HTML/Element/form) zum Versenden von Geld an einen anderen Benutzer einer Seite.

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

Wenn das Formular gesendet wird, generiert die Seite eine Quittung für die Transaktion. Der Server könnte `Content-Location` verwenden, um die URL dieser Quittung für zukünftigen Zugriff anzugeben.

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
