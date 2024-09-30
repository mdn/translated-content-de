---
title: Origin
slug: Web/HTTP/Headers/Origin
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{HTTPSidebar}}

Der **`Origin`** Request-Header gibt den [Origin](/de/docs/Glossary/origin) (Schema, Hostname und Port) an, der die Anfrage _verursacht_ hat.
Zum Beispiel, wenn ein User-Agent Ressourcen anfragen muss, die in einer Seite enthalten sind oder durch von ihm ausgeführte Skripte abgerufen werden, dann kann der Origin der Seite in die Anfrage einbezogen werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Request Header](/de/docs/Glossary/Request_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>ja</td>
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

  - : Die Herkunft ist "datenschutzrelevant" oder ist ein _opaker Origin_, wie in der HTML-Spezifikation definiert (spezifische Fälle sind im [Beschreibung](#beschreibung)-Abschnitt aufgelistet).

- `<scheme>`
  - : Das verwendete Protokoll.
    In der Regel ist es das HTTP-Protokoll oder seine gesicherte Version, HTTPS.
- `<hostname>`
  - : Der Domain-Name oder die IP-Adresse des Ursprungsservers.
- `<port>` {{optional_inline}}
  - : Portnummer, auf der der Server lauscht.
    Wenn kein Port angegeben ist, wird der Standardport für den angeforderten Dienst impliziert (z.B. "80" für eine HTTP-URL).

## Beschreibung

Der `Origin`-Header ist dem {{HTTPHeader("Referer")}}-Header ähnlich, gibt jedoch nicht den Pfad preis und kann `null` sein.
Er wird verwendet, um den "Sicherheitskontext" für die Ursprung-Anfrage bereitzustellen, außer in Fällen, in denen die Ursprungsinformationen sensibel oder unnötig wären.

Im Großen und Ganzen fügen User-Agents den `Origin`-Request-Header hinzu zu:

- [Cross-Origin](/de/docs/Glossary/CORS)-Anfragen.
- [Same-Origin](/de/docs/Web/Security/Same-origin_policy)-Anfragen außer für {{HTTPMethod("GET")}}- oder {{HTTPMethod("HEAD")}}-Anfragen (d.h. sie werden zu Same-Origin {{HTTPMethod("POST")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("PATCH")}} und {{HTTPMethod("DELETE")}}-Anfragen hinzugefügt).

Es gibt einige Ausnahmen zu den oben genannten Regeln; zum Beispiel, wenn eine Cross-Origin-{{HTTPMethod("GET")}}- oder {{HTTPMethod("HEAD")}}-Anfrage im [no-cors-Modus](/de/docs/Web/API/Request/mode#value) gemacht wird, wird der `Origin`-Header nicht hinzugefügt.

Der Wert des `Origin`-Headers kann `null` sein in einer Reihe von Fällen, einschließlich (nicht erschöpfend):

- Origins, deren Schema nicht `http`, `https`, `ftp`, `ws`, `wss` oder `gopher` ist (einschließlich `blob`, `file` und `data`).
- Cross-Origin-Bilder und Mediendaten, einschließlich der in `<img>`, `<video>` und `<audio>`-Elementen.
- Dokumente, die programmgesteuert mit `createDocument()` erstellt wurden, aus einer `data:`-URL generiert wurden oder keinen Ersteller-Browsing-Kontext haben.
- Weiterleitungen über Origins hinweg.
- iFrames mit einem sandbox-Attribut, das nicht den Wert `allow-same-origin` enthält.
- Antworten, die Netzwerkfehler sind.
- [`Referrer-Policy`](/de/docs/Web/HTTP/Headers/Referrer-Policy) auf `no-referrer` für nicht-`cors`-Request-Modi gesetzt (z.B. einfache Formularübermittlungen).

> [!NOTE]
> Eine detailliertere Auflistung von Fällen, in denen `null` zurückgegeben werden kann, finden Sie auf Stack Overflow: [Wann senden Browser den Origin-Header? Wann setzen Browser den Origin auf null?](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802)

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
- [Wann senden Browser den Origin-Header? Wann setzen Browser den Origin auf null?](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802) (Stack Overflow)
