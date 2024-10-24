---
title: Origin
slug: Web/HTTP/Headers/Origin
l10n:
  sourceCommit: cadc98b0f5f2a770c6ab9b1ca0bf31a90378c6df
---

{{HTTPSidebar}}

Der HTTP-**`Origin`**-{{Glossary("request_header", "Request-Header")}} gibt den {{Glossary("origin", "Ursprung")}} ([Schema](/de/docs/Web/URI/Schemes), Hostname und Port) an, der die Anfrage _verursacht_ hat. Wenn ein Benutzeragent beispielsweise Ressourcen anfordern muss, die in einer Seite enthalten sind oder durch Skripte abgerufen werden, die er ausführt, kann der Ursprung der Seite in die Anfrage einbezogen werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Origin: null
Origin: <scheme>://<hostname>
Origin: <scheme>://<hostname>:<port>
```

## Direktiven

- `null`
  - : Der Ursprung ist "datenschutzsensibel" oder ein _undurchsichtiger Ursprung_, wie in der HTML-Spezifikation definiert (spezifische Fälle sind im Abschnitt [Beschreibung](#beschreibung) aufgeführt).
- `<scheme>`
  - : Das verwendete Protokoll. In der Regel ist es das HTTP-Protokoll oder seine gesicherte Version, HTTPS.
- `<hostname>`
  - : Der Domainname oder die IP-Adresse des Ursprungsservers.
- `<port>` {{optional_inline}}
  - : Die Portnummer, auf der der Server hört. Wenn kein Port angegeben ist, wird der Standardport für den angeforderten Dienst aus dem Schema impliziert (z.B. `80` für eine HTTP-URL).

## Beschreibung

Der `Origin`-Header ähnelt dem {{HTTPHeader("Referer")}}-Header, gibt jedoch nicht den Pfad an und kann `null` sein. Er wird verwendet, um den Sicherheitskontext für die Ursprungsanfrage bereitzustellen, außer in Fällen, in denen die Ursprungsinformationen sensibel oder unnötig wären.

Im Allgemeinen fügen Benutzeragenten den `Origin`-Request-Header zu folgenden Anfragen hinzu:

- {{Glossary("CORS", "Cross-Origin")}}-Anfragen.
- [Same-Origin](/de/docs/Web/Security/Same-origin_policy)-Anfragen außer bei {{HTTPMethod("GET")}} oder {{HTTPMethod("HEAD")}} Anfragen (d.h., sie werden zu Same-Origin-{{HTTPMethod("POST")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("PATCH")}}, und {{HTTPMethod("DELETE")}} Anfragen hinzugefügt).

Es gibt einige Ausnahmen von den oben genannten Regeln; zum Beispiel wird der `Origin`-Header nicht hinzugefügt, wenn eine Cross-Origin-{{HTTPMethod("GET")}}- oder {{HTTPMethod("HEAD")}}-Anfrage im [No-CORS-Modus](/de/docs/Web/API/Request/mode#value) durchgeführt wird.

Der `Origin`-Header-Wert kann in mehreren Fällen `null` sein, einschließlich (nicht erschöpfend):

- Ursprünge, deren [Schema](/de/docs/Web/URI/Schemes) nicht `http`, `https`, `ftp`, `ws`, `wss` oder `gopher` ist (einschließlich `blob`, `file` und `data`).
- Cross-Origin-Bilder und Mediendaten, einschließlich solche in {{HTMLElement("img")}}, {{HTMLElement("video")}} und {{HTMLElement("audio")}} Elementen.
- Dokumente, die programmgesteuert erstellt werden, indem [`createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) verwendet wird, aus einer `data:`-URL generiert wurden oder die keinen Ersteller-Browsing-Kontext haben.
- Weiterleitungen über Ursprünge hinweg.
- {{HTMLElement("iframe", "iframes")}} mit einem Sandbox-Attribut, das nicht den Wert `allow-same-origin` enthält.
- Antworten, die Netzfehler sind.
- {{HTTPHeader("Referrer-Policy")}} auf `no-referrer` gesetzt für nicht-`cors`-Request-Modi (z.B., einfache Formularübermittlungen).

> [!NOTE]
> Eine detailliertere Auflistung von Fällen, die `null` zurückgeben können, finden Sie auf Stack Overflow: [Wann senden Browser den Origin-Header? Wann setzen Browser den Ursprung auf null?](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802)

## Beispiele

```http
Origin: https://developer.mozilla.org
```

```http
Origin: https://developer.mozilla.org:80
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Host")}}
- {{HTTPHeader("Referer")}}
- [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)
- [Wann senden Browser den Origin-Header? Wann setzen Browser den Ursprung auf null?](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802) (Stack Overflow)
