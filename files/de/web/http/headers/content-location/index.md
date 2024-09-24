---
title: Content-Location
slug: Web/HTTP/Headers/Content-Location
l10n:
  sourceCommit: 1176e753733ee9d2e8966cc7cf03df495dce9aba
---

{{HTTPSidebar}}

Der **`Content-Location`**-Header gibt einen alternativen Ort für die zurückgegebenen Daten an. Der Hauptzweck besteht darin, die URL einer Ressource anzugeben, die als Ergebnis der [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation) übertragen wurde.

{{HTTPHeader("Location")}} und `Content-Location` sind unterschiedlich. `Location` gibt die URL einer Weiterleitung an, während `Content-Location` die direkte URL angibt, die verwendet werden soll, um in Zukunft ohne weitere Inhaltsverhandlungen auf die Ressource zuzugreifen. `Location` ist ein Header, der mit der Antwort verknüpft ist, während `Content-Location` mit den zurückgegebenen Daten verknüpft ist. Diese Unterscheidung kann abstrakt erscheinen, wenn man keine [Beispiele](#beispiele) betrachtet.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Representation header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Verbotener Header-Name")}}</th>
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

### Anfordern von Daten vom Server in verschiedenen Formaten

Angenommen, die API einer Website kann Daten in {{glossary("JSON")}}, {{glossary("XML")}} oder [CSV](https://en.wikipedia.org/wiki/Comma-separated_values)-Formaten zurückgeben. Wenn die URL für ein bestimmtes Dokument bei `https://example.com/documents/foo` liegt, könnte die Website je nach `{{HTTPHeader("Accept")}}`-Header der Anfrage verschiedene URLs für `Content-Location` zurückgeben:

| Anforderungs-Header                   | Antwort-Header                          |
| ------------------------------------- | --------------------------------------- |
| `Accept: application/json, text/json` | `Content-Location: /documents/foo.json` |
| `Accept: application/xml, text/xml`   | `Content-Location: /documents/foo.xml`  |
| `Accept: text/plain, text/*`          | `Content-Location: /documents/foo.txt`  |

Diese URLs sind Beispiele — die Seite könnte die verschiedenen Dateitypen mit beliebigen URL-Mustern bereitstellen, wie z.B. einem [Query-String-Parameter](/de/docs/Web/API/HTMLAnchorElement/search): `/documents/foo?format=json`, `/documents/foo?format=xml` und so weiter.

Dann könnte der Client sich merken, dass die JSON-Version unter dieser speziellen URL verfügbar ist und bei der nächsten Anforderung dieses Dokuments die Inhaltsverhandlung überspringen.

Der Server könnte auch andere [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation)-Header in Betracht ziehen, wie {{HTTPHeader("Accept-Language")}}.

### Verweisen auf ein neues Dokument (HTTP 201 Created)

Angenommen, Sie erstellen einen neuen Blogbeitrag über die API einer Website:

```http
POST /new/post
Host: example.com
Content-Type: text/markdown

# Mein erster Blogbeitrag!

Ich habe dies über die API von `example.com` gemacht. Ich hoffe, es hat funktioniert.
```

Die Seite gibt den veröffentlichten Beitrag im Antwortkörper zurück. Der Server gibt an, _wo_ sich der neue Beitrag befindet, mit dem `Content-Location`-Header, wobei er angibt, dass sich dieser Ort auf den Inhalt (den Körper) dieser Antwort bezieht:

```http
HTTP/1.1 201 Created
Content-Type: text/markdown
Content-Location: /my-first-blog-post

# Mein erster Blogbeitrag

Ich habe dies über die API von `example.com` gemacht. Ich hoffe, es hat funktioniert.
```

### Angeben der URL des Ergebnisses einer Transaktion

Angenommen, Sie haben ein
[`<form>`](/de/docs/Web/HTML/Element/form) zum Senden
von Geld an einen anderen Benutzer einer Website.

```html
<form action="/send-payment" method="post">
  <p>
    <label
      >An wen möchten Sie das Geld senden?
      <input type="text" name="recipient" />
    </label>
  </p>

  <p>
    <label
      >Wie viel?
      <input type="number" name="amount" />
    </label>
  </p>

  <button type="submit">Geld senden</button>
</form>
```

Wenn das Formular übermittelt wird, generiert die Website eine Quittung für die Transaktion. Der Server könnte `Content-Location` verwenden, um die URL dieser Quittung für zukünftigen Zugriff anzugeben.

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
