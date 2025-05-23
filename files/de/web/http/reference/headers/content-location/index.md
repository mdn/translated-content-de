---
title: Content-Location header
short-title: Content-Location
slug: Web/HTTP/Reference/Headers/Content-Location
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-**`Content-Location`**-{{Glossary("representation_header", "Repräsentations-Header")}} gibt einen alternativen Speicherort für die zurückgegebenen Daten an. Seine Hauptanwendung besteht darin, die URL einer Ressource anzugeben, die infolge der [Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation) übertragen wurde.

Der `Content-Location`-Header unterscheidet sich vom {{HTTPHeader("Location")}}-Header. `Content-Location` gibt die direkte URL an, um auf die Ressource zuzugreifen, wenn eine [Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation) stattgefunden hat. Dies ermöglicht es dem Client, zukünftige Inhaltsverhandlungen für diese Ressource zu umgehen. `Location` hingegen gibt entweder das Ziel einer `3XX`-Umleitung oder die URL einer neu erstellten Ressource in einer {{HTTPStatus("201", "201 Created")}}-Antwort an.

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

### Anfordern von Daten von einem Server in verschiedenen Formaten

Angenommen, die API einer Site kann Daten in den Formaten {{Glossary("JSON", "JSON")}}, {{Glossary("XML", "XML")}} oder [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) zurückgeben. Wenn die URL für ein bestimmtes Dokument `https://example.com/documents/foo` ist, könnte die Site je nach {{HTTPHeader("Accept")}}-Header der Anforderung unterschiedliche URLs für `Content-Location` zurückgeben:

| Anforderungs-Header                   | Antwort-Header                          |
| ------------------------------------- | --------------------------------------- |
| `Accept: application/json, text/json` | `Content-Location: /documents/foo.json` |
| `Accept: application/xml, text/xml`   | `Content-Location: /documents/foo.xml`  |
| `Accept: text/plain, text/*`          | `Content-Location: /documents/foo.txt`  |

Diese URLs sind Beispiele — die Site könnte die verschiedenen Dateitypen mit jedem gewünschten URL-Muster bedienen, wie z.B. einem [Abfragezeichenfolgen-Parameter](/de/docs/Web/API/HTMLAnchorElement/search): `/documents/foo?format=json`, `/documents/foo?format=xml` und so weiter.

Dann könnte sich der Client merken, dass die JSON-Version unter dieser speziellen URL verfügbar ist, und die Inhaltsverhandlungen beim nächsten Anfordern dieses Dokuments überspringen.

Der Server könnte auch andere Header der [Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation) berücksichtigen, wie z.B. {{HTTPHeader("Accept-Language")}}.

### Angabe der URL des Ergebnisses einer Transaktion

Angenommen, Sie haben ein
[`<form>`](/de/docs/Web/HTML/Reference/Elements/form) zum Senden
von Geld an einen anderen Benutzer einer Site.

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

Wenn das Formular übermittelt wird, generiert die Site eine Quittung für die Transaktion. Der Server könnte `Content-Location` verwenden, um die URL der Quittung für zukünftigen Zugriff anzugeben.

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
