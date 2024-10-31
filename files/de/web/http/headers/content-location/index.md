---
title: Content-Location
slug: Web/HTTP/Headers/Content-Location
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

Der HTTP-**`Content-Location`** {{Glossary("representation_header", "Darstellungs-Header")}} gibt einen alternativen Standort für die zurückgegebenen Daten an. Der Hauptzweck ist es, die URL einer Ressource anzugeben, die als Ergebnis der [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation) übertragen wird.

Der `Content-Location`-Header unterscheidet sich vom {{HTTPHeader("Location")}}-Header. `Content-Location` gibt die direkte URL an, um auf die Ressource zuzugreifen, wenn eine [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation) stattgefunden hat, wodurch der Client zukünftige Inhaltsverhandlungen für diese Ressource umgehen kann. `Location` hingegen zeigt entweder das Ziel einer `3XX`-Umleitung oder die URL einer neu erstellten Ressource in einer {{HTTPStatus("201", "201 Created")}}-Antwort an.

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
  </tbody>
</table>

## Syntax

```http
Content-Location: <url>
```

## Direktiven

- `<url>`
  - : Eine URL, die [absolut](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL#absolute_urls_vs._relative_urls) oder [relativ](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL#absolute_urls_vs._relative_urls) zur Anforderungs-URL sein kann.

## Beispiele

### Anfordern von Daten von einem Server in verschiedenen Formaten

Angenommen, die API einer Website kann Daten in den Formaten {{Glossary("JSON", "JSON")}}, {{Glossary("XML", "XML")}} oder [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) zurückgeben. Wenn die URL für ein bestimmtes Dokument `https://example.com/documents/foo` lautet, könnte die Website je nach `Accept`-Header der Anfrage unterschiedliche URLs für den `Content-Location`-Header zurückgeben:

| Header der Anfrage                    | Header der Antwort                      |
| ------------------------------------- | --------------------------------------- |
| `Accept: application/json, text/json` | `Content-Location: /documents/foo.json` |
| `Accept: application/xml, text/xml`   | `Content-Location: /documents/foo.xml`  |
| `Accept: text/plain, text/*`          | `Content-Location: /documents/foo.txt`  |

Diese URLs sind Beispiele — die Website könnte die verschiedenen Dateiformate mit beliebigen URL-Mustern bedienen, wie etwa einem [Query-String-Parameter](/de/docs/Web/API/HTMLAnchorElement/search): `/documents/foo?format=json`, `/documents/foo?format=xml` usw.

Dann könnte der Client sich merken, dass die JSON-Version unter dieser bestimmten URL verfügbar ist, und beim nächsten Abruf dieses Dokuments die Inhaltsverhandlung überspringen.

Der Server könnte auch andere Header der [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation) berücksichtigen, wie z.B. {{HTTPHeader("Accept-Language")}}.

### Die URL des Ergebnisses einer Transaktion angeben

Angenommen, Sie haben ein [`<form>`](/de/docs/Web/HTML/Element/form) zur Überweisung von Geld an einen anderen Benutzer einer Website.

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

Wenn das Formular abgeschickt wird, generiert die Website eine Quittung für die Transaktion. Der Server könnte `Content-Location` verwenden, um die URL dieser Quittung für den zukünftigen Zugriff anzugeben.

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
