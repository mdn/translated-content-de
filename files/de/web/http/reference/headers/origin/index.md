---
title: Origin header
short-title: Origin
slug: Web/HTTP/Reference/Headers/Origin
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Origin`** {{Glossary("request_header", "Anforderungs-Header")}} gibt den {{Glossary("origin", "Origin")}} ([Schema](/de/docs/Web/URI/Reference/Schemes), Hostname und Port) an, der die Anfrage _verursacht_ hat.
Wenn ein User-Agent zum Beispiel Ressourcen anfordern muss, die in einer Seite enthalten sind oder von Skripten, die er ausführt, abgerufen werden, kann der Origin der Seite in die Anfrage aufgenommen werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungs-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : Der Origin ist "datenschutzrelevant" oder ein _undurchsichtiger Origin_, wie in der HTML-Spezifikation definiert (spezifische Fälle sind im [Beschreibung](#beschreibung)-Abschnitt aufgeführt).
- `<scheme>`
  - : Das verwendete Protokoll.
    In der Regel ist es das HTTP-Protokoll oder seine gesicherte Version, HTTPS.
- `<hostname>`
  - : Der Domainname oder die IP-Adresse des Origin-Servers.
- `<port>` {{optional_inline}}
  - : Portnummer, an der der Server lauscht.
    Wenn kein Port angegeben wird, wird der Standardport für den angeforderten Dienst aus dem Schema abgeleitet (z. B. `80` für eine HTTP-URL).

## Beschreibung

Der `Origin`-Header ähnelt dem {{HTTPHeader("Referer")}}-Header, gibt jedoch nicht den Pfad an und kann `null` sein.
Er wird verwendet, um den Sicherheitskontext für die Ursprungsanfrage bereitzustellen, außer in Fällen, in denen die Ursprungsinformationen sensibel oder unnötig wären.

Im Allgemeinen fügen User-Agents den `Origin`-Anforderungs-Header hinzu zu:

- {{Glossary("CORS", "Cross-Origin")}}-Anfragen.
- [Same-Origin](/de/docs/Web/Security/Same-origin_policy)-Anfragen, außer bei {{HTTPMethod("GET")}}- oder {{HTTPMethod("HEAD")}}-Anfragen (d.h. sie werden zu Same-Origin {{HTTPMethod("POST")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("PATCH")}} und {{HTTPMethod("DELETE")}}-Anfragen hinzugefügt).

Es gibt einige Ausnahmen von den obigen Regeln; zum Beispiel, wenn eine Cross-Origin {{HTTPMethod("GET")}}- oder {{HTTPMethod("HEAD")}}-Anfrage im [no-cors Modus](/de/docs/Web/API/Request/mode#value) durchgeführt wird, wird der `Origin`-Header nicht hinzugefügt.

Der Wert des `Origin`-Headers kann in einer Reihe von Fällen `null` sein, einschließlich (nicht abschließend):

- Origins, deren [Schema](/de/docs/Web/URI/Reference/Schemes) nicht `http`, `https`, `ftp`, `ws`, `wss` oder `gopher` ist (einschließlich `blob`, `file` und `data`).
- Cross-Origin-Bilder und Mediendaten, einschließlich der in {{HTMLElement("img")}}, {{HTMLElement("video")}} und {{HTMLElement("audio")}}-Elementen.
- Dokumente, die programmgesteuert mit [`createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) erstellt wurden, aus einer `data:`-URL generiert wurden oder keinen Erstellungs-Browsing-Kontext haben.
- Redirects über Origins hinweg.
- {{HTMLElement("iframe", "iframes")}} mit einem "sandbox"-Attribut, das nicht den Wert `allow-same-origin` enthält.
- Antworten, die Netzwerkfehler sind.
- {{HTTPHeader("Referrer-Policy")}} auf `no-referrer` gesetzt für nicht-`cors` Anfragemodi (z.B. einfache Formularübertragungen).

> [!NOTE]
> Eine detailliertere Auflistung von Fällen, die `null` zurückgeben können, finden Sie auf Stack Overflow: [Wann senden Browser den Origin-Header? Wann setzen Browser den Origin auf null?](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802)

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
