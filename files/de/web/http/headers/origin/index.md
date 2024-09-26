---
title: Origin
slug: Web/HTTP/Headers/Origin
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{HTTPSidebar}}

Der **`Origin`** Request-Header gibt den {{glossary("origin", "Ursprung")}} (Schema, Hostname und Port) an, der die Anfrage _verursacht_ hat. Beispielsweise, wenn ein User-Agent Ressourcen anfordern muss, die in einer Seite enthalten sind oder von Skripten abgerufen werden, die er ausführt, dann kann der Ursprung der Seite in der Anfrage angegeben werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "Verbotener Header-Name")}}</th>
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

  - : Der Ursprung ist "datenschutzempfindlich" oder ein _undurchsichtiger Ursprung_, wie in der HTML-Spezifikation definiert (spezifische Fälle sind im [Beschreibung](#beschreibung)-Abschnitt aufgeführt).

- `<scheme>`
  - : Das verwendete Protokoll.
    In der Regel ist es das HTTP-Protokoll oder dessen gesicherte Version, HTTPS.
- `<hostname>`
  - : Der Domain-Name oder die IP-Adresse des Ursprung-Servers.
- `<port>` {{optional_inline}}
  - : Die Portnummer, auf der der Server lauscht.
    Wenn kein Port angegeben ist, wird der Standardport für den angeforderten Dienst angenommen (z.B. "80" für eine HTTP-URL).

## Beschreibung

Der `Origin`-Header ähnelt dem {{HTTPHeader("Referer")}}-Header, gibt jedoch nicht den Pfad an und kann `null` sein. Er wird verwendet, um den "Sicherheitskontext" für die Ursprung-Anfrage bereitzustellen, außer in Fällen, in denen die Ursprungsinformationen sensibel oder unnötig wären.

Im Allgemeinen fügen User-Agents den `Origin`-Anforderungsheader zu:

- {{Glossary("CORS", "Cross-Origin")}}-Anfragen hinzu.
- [same-origin](/de/docs/Web/Security/Same-origin_policy)-Anfragen hinzu, außer für {{HTTPMethod("GET")}}- oder {{HTTPMethod("HEAD")}}-Anfragen (d.h. sie werden zu same-origin {{HTTPMethod("POST")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("PATCH")}} und {{HTTPMethod("DELETE")}} Anfragen hinzugefügt).

Es gibt einige Ausnahmen zu den obigen Regeln; zum Beispiel, wenn eine Cross-Origin {{HTTPMethod("GET")}}- oder {{HTTPMethod("HEAD")}}-Anfrage im [no-cors mode](/de/docs/Web/API/Request/mode#value) gestellt wird, wird der `Origin`-Header nicht hinzugefügt.

Der `Origin`-Header-Wert kann in mehreren Fällen `null` sein, einschließlich (nicht vollständig):

- Ursprünge, deren Schema nicht `http`, `https`, `ftp`, `ws`, `wss` oder `gopher` ist (einschließlich `blob`, `file` und `data`).
- Cross-Origin-Bilder und Mediadaten, einschließlich solcher in `<img>`, `<video>` und `<audio>`-Elementen.
- Dokumente, die programmgesteuert mit `createDocument()` erstellt wurden, aus einer `data:`-URL generiert oder die keinen Creator-Browsing-Kontext haben.
- Weiterleitungen über Ursprünge hinweg.
- iframes mit einem sandbox-Attribut, das nicht den Wert `allow-same-origin` enthält.
- Antworten, die Netzwerkausfälle sind.
- [`Referrer-Policy`](/de/docs/Web/HTTP/Headers/Referrer-Policy) festgesetzt auf `no-referrer` für nicht-`cors`-Anfragemodi (z.B. einfache Formularübermittlungen).

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{HTTPHeader("Host")}}
- {{HTTPHeader("Referer")}}
- [Same-origin policy](/de/docs/Web/Security/Same-origin_policy)
- [Wann senden Browser den Origin-Header? Wann setzen Browser den Ursprung auf null?](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802) (Stack Overflow)
