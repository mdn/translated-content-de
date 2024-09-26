---
title: Content-Location
slug: Web/HTTP/Headers/Content-Location
l10n:
  sourceCommit: 1176e753733ee9d2e8966cc7cf03df495dce9aba
---

{{HTTPSidebar}}

Der **`Content-Location`**-Header gibt einen alternativen Ort für die zurückgegebenen Daten an. Der Hauptzweck besteht darin, die URL einer Ressource anzugeben, die als Ergebnis der [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation) übertragen wird.

{{HTTPHeader("Location")}} und `Content-Location` sind unterschiedlich.
`Location` gibt die URL einer Umleitung an, während `Content-Location` die direkte URL angibt, die verwendet werden soll, um auf die Ressource zuzugreifen, ohne in Zukunft eine weitere Inhaltsverhandlung durchzuführen. `Location` ist ein Header, der mit der Antwort verbunden ist, während `Content-Location` mit den zurückgegebenen Daten verknüpft ist. Diese Unterscheidung mag ohne [Beispiele](#beispiele) abstrakt erscheinen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
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
  - : Eine [relative](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL#absolute_urls_vs._relative_urls)
    (zur Anforderungs-URL) oder [absolute](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL#absolute_urls_vs._relative_urls)
    URL.

## Beispiele

### Daten vom Server in verschiedenen Formaten anfordern

Angenommen, die API einer Seite kann Daten in {{glossary("JSON")}}, {{glossary("XML")}} oder [CSV](<https://de.wikipedia.org/wiki/CSV_(Dateiformat)>) Formaten zurückgeben. Wenn die URL für ein bestimmtes Dokument unter `https://example.com/documents/foo` liegt, kann die Seite je nach `Accept`-Header der Anforderung unterschiedliche URLs für `Content-Location` zurückgeben:

| Request-Header                        | Response-Header                         |
| ------------------------------------- | --------------------------------------- |
| `Accept: application/json, text/json` | `Content-Location: /documents/foo.json` |
| `Accept: application/xml, text/xml`   | `Content-Location: /documents/foo.xml`  |
| `Accept: text/plain, text/*`          | `Content-Location: /documents/foo.txt`  |

Diese URLs sind Beispiele — die Seite kann die verschiedenen Dateitypen mit beliebigen URL-Mustern bereitstellen, z. B. mit einem [Abfragezeichenfolgen-Parameter](/de/docs/Web/API/HTMLAnchorElement/search): `/documents/foo?format=json`, `/documents/foo?format=xml` usw.

Dann könnte der Client sich merken, dass die JSON-Version unter dieser bestimmten URL verfügbar ist und die Inhaltsverhandlung beim nächsten Anfordern dieses Dokuments überspringen.

Der Server könnte auch andere Header der [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation) in Betracht ziehen, wie z. B. {{HTTPHeader("Accept-Language")}}.

### Verweis auf ein neues Dokument (HTTP 201 Created)

Angenommen, Sie erstellen einen neuen Blogbeitrag über die API einer Seite:

```http
POST /new/post
Host: example.com
Content-Type: text/markdown

# Mein erster Blogbeitrag!

Ich habe dies über die API von `example.com` erstellt. Ich hoffe, es hat geklappt.
```

Die Seite gibt den veröffentlichten Beitrag im Antwortkörper zurück. Der Server gibt mit dem `Content-Location`-Header an, _wo_ sich der neue Beitrag befindet, wobei dieser Ort auf den Inhalt (den Körper) dieser Antwort verweist:

```http
HTTP/1.1 201 Created
Content-Type: text/markdown
Content-Location: /my-first-blog-post

# Mein erster Blogbeitrag

Ich habe dies über die API von `example.com` erstellt. Ich hoffe, es hat geklappt.
```

### Angabe der URL des Ergebnisses einer Transaktion

Angenommen, Sie haben ein [`<form>`](/de/docs/Web/HTML/Element/form) zum Senden von Geld an einen anderen Benutzer einer Seite.

```html
<form action="/send-payment" method="post">
  <p>
    <label
      >Wem möchten Sie das Geld senden?
      <input type="text" name="recipient" />
    </label>
  </p>

  <p>
    <label
      >Wieviel?
      <input type="number" name="amount" />
    </label>
  </p>

  <button type="submit">Geld senden</button>
</form>
```

Wenn das Formular übermittelt wird, generiert die Seite eine Quittung für die Transaktion. Der Server könnte `Content-Location` verwenden, um die URL dieser Quittung für zukünftigen Zugriff anzugeben.

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Location: /my-receipts/38

<!doctype html>
(Viel HTML…)

<p>Sie haben $38.00 an ExampleUser gesendet.</p>

(Noch mehr HTML…)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Location")}}
