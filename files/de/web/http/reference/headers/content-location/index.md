---
title: Content-Location header
short-title: Content-Location
slug: Web/HTTP/Reference/Headers/Content-Location
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`Content-Location`**-{{Glossary("representation_header", "Repräsentations-Header")}} gibt einen alternativen Ort für die zurückgegebenen Daten an.
Die Hauptverwendung besteht darin, die URL einer Ressource anzugeben, die als Ergebnis der [Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation) übertragen wird.

Der `Content-Location`-Header unterscheidet sich vom {{HTTPHeader("Location")}}-Header.
`Content-Location` gibt die direkte URL an, um auf die Ressource zuzugreifen, wenn eine [Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation) stattgefunden hat, was dem Client ermöglicht, zukünftige Inhaltsverhandlungen für diese Ressource zu umgehen.
`Location` weist hingegen entweder auf das Ziel einer `3XX`-Weiterleitung oder die URL einer neu erstellten Ressource in einer {{HTTPStatus("201", "201 Created")}}-Antwort hin.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation_header", "Repräsentations-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : Eine URL, die [absolut](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL#absolute_urls_vs._relative_urls) oder [relativ](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL#absolute_urls_vs._relative_urls) zur Anforderungs-URL sein kann.

## Beispiele

### Abfrage von Daten von einem Server in verschiedenen Formaten

Angenommen, eine API einer Website kann Daten in {{Glossary("JSON", "JSON")}}-, {{Glossary("XML", "XML")}}- oder [CSV](https://en.wikipedia.org/wiki/Comma-separated_values)-Formaten zurückgeben. Wenn die URL für ein bestimmtes Dokument `https://example.com/documents/foo` ist, könnte die Website je nach {{HTTPHeader("Accept")}}-Header der Anfrage unterschiedliche URLs für `Content-Location` zurückgeben:

| Anforderungs-Header                   | Antwort-Header                          |
| ------------------------------------- | --------------------------------------- |
| `Accept: application/json, text/json` | `Content-Location: /documents/foo.json` |
| `Accept: application/xml, text/xml`   | `Content-Location: /documents/foo.xml`  |
| `Accept: text/plain, text/*`          | `Content-Location: /documents/foo.txt`  |

Diese URLs sind Beispiele — die Website könnte die verschiedenen Dateitypen mit beliebigen URL-Mustern anbieten, zum Beispiel mit einem [Query-String-Parameter](/de/docs/Web/API/HTMLAnchorElement/search): `/documents/foo?format=json`, `/documents/foo?format=xml` und so weiter.

Der Client könnte sich dann merken, dass die JSON-Version unter dieser bestimmten URL verfügbar ist, und bei der nächsten Anforderung dieses Dokuments die Inhaltsverhandlungen überspringen.

Der Server könnte auch andere [Inhaltsverhandlungs-](/de/docs/Web/HTTP/Guides/Content_negotiation) Header berücksichtigen, wie z. B. {{HTTPHeader("Accept-Language")}}.

### Angabe der URL des Ergebnisses einer Transaktion

Angenommen, Sie haben ein [`<form>`](/de/docs/Web/HTML/Reference/Elements/form) für das Versenden von Geld an einen anderen Benutzer einer Website.

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

Wenn das Formular abgeschickt wird, erstellt die Website eine Quittung für die Transaktion. Der Server könnte `Content-Location` verwenden, um die URL dieser Quittung für zukünftigen Zugriff anzugeben.

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
