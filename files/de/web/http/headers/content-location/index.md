---
title: Content-Location
slug: Web/HTTP/Headers/Content-Location
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Content-Location`** {{Glossary("representation_header", "Representation-Header")}} gibt einen alternativen Speicherort für die zurückgegebenen Daten an. Seine Hauptverwendung besteht darin, die URL einer Ressource anzugeben, die als Ergebnis der [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation) übertragen wird.

Der `Content-Location`-Header unterscheidet sich vom {{HTTPHeader("Location")}}-Header. `Content-Location` gibt die direkte URL an, um auf die Ressource zuzugreifen, wenn eine [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation) stattgefunden hat, sodass der Client zukünftige Inhaltsverhandlungen für diese Ressource umgehen kann. `Location` hingegen gibt entweder das Ziel einer `3XX`-Umleitung oder die URL einer neu erstellten Ressource in einer {{HTTPStatus("201", "201 Created")}}-Antwort an.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Representation-Header")}}</td>
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

### Anfordern von Daten von einem Server in verschiedenen Formaten

Angenommen, eine API einer Website kann Daten in den Formaten {{Glossary("JSON", "JSON")}}, {{Glossary("XML", "XML")}} oder [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) zurückgeben. Wenn sich die URL für ein bestimmtes Dokument unter `https://example.com/documents/foo` befindet, könnte die Site unterschiedliche URLs für `Content-Location` zurückgeben, abhängig vom {{HTTPHeader("Accept")}}-Header der Anfrage:

| Anfrage-Header                        | Antwort-Header                          |
| ------------------------------------- | --------------------------------------- |
| `Accept: application/json, text/json` | `Content-Location: /documents/foo.json` |
| `Accept: application/xml, text/xml`   | `Content-Location: /documents/foo.xml`  |
| `Accept: text/plain, text/*`          | `Content-Location: /documents/foo.txt`  |

Diese URLs sind Beispiele — die Site könnte die unterschiedlichen Dateitypen mit beliebigen URL-Mustern bereitstellen, z. B. einem [Query-String-Parameter](/de/docs/Web/API/HTMLAnchorElement/search): `/documents/foo?format=json`, `/documents/foo?format=xml` und so weiter.

Dann könnte der Client sich merken, dass die JSON-Version unter dieser bestimmten URL verfügbar ist, und die Inhaltsverhandlung beim nächsten Anfordern dieses Dokuments überspringen.

Der Server könnte auch andere [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation)-Header berücksichtigen, wie {{HTTPHeader("Accept-Language")}}.

### Angabe der URL des Ergebnisses einer Transaktion

Angenommen, Sie haben ein [`<form>`](/de/docs/Web/HTML/Element/form), das Geld an einen anderen Benutzer einer Website sendet.

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

Wenn das Formular gesendet wird, generiert die Website eine Quittung für die Transaktion. Der Server könnte `Content-Location` verwenden, um die URL dieser Quittung für zukünftigen Zugriff anzugeben.

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
