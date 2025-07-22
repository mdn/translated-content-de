---
title: Origin header
short-title: Origin
slug: Web/HTTP/Reference/Headers/Origin
l10n:
  sourceCommit: 76bf753332ae0d73be183b62fc6989eda414878b
---

Der HTTP-**`Origin`**-{{Glossary("request_header", "Anforderungsheader")}} gibt den {{Glossary("origin", "Ursprung")}} ([Schema](/de/docs/Web/URI/Reference/Schemes), Hostname und Port) an, der die Anforderung _verursacht_ hat.
Zum Beispiel, wenn ein User-Agent Ressourcen anfordern muss, die in einer Seite enthalten sind, oder von Skripten abgerufen werden, die er ausführt, dann kann der Ursprung der Seite in der Anforderung enthalten sein.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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
  - : Der Ursprung ist "datenschutzsensitiv" oder ist ein _undurchsichtiger Ursprung_, wie in der HTML-Spezifikation definiert (spezifische Fälle sind im [Beschreibung](#beschreibung)-Abschnitt aufgeführt).
- `<scheme>`
  - : Das Protokoll, das verwendet wird.
    In der Regel handelt es sich um das HTTP-Protokoll oder dessen sichere Version, HTTPS.
- `<hostname>`
  - : Der Domainname oder die IP-Adresse des Ursprungsservers.
- `<port>` {{optional_inline}}
  - : Portnummer, auf der der Server hört.
    Wenn kein Port angegeben ist, wird der Standardport für den angeforderten Dienst aus dem Schema impliziert (z. B. `80` für eine HTTP-URL).

## Beschreibung

Der `Origin`-Header ähnelt dem {{HTTPHeader("Referer")}}-Header, gibt jedoch nicht den Pfad preis und kann `null` sein.
Er wird verwendet, um den Sicherheitskontext für die Ursprungsanforderung bereitzustellen, außer in Fällen, in denen die Ursprungsinformationen sensibel oder unnötig wären.

Im Allgemeinen fügen User-Agents den `Origin`-Anforderungsheader hinzu für:

- {{Glossary("CORS", "Cross-Origin")}}-Anforderungen.
- [Same-Origin](/de/docs/Web/Security/Same-origin_policy)-Anforderungen, außer bei {{HTTPMethod("GET")}}- oder {{HTTPMethod("HEAD")}}-Anforderungen (d.h. sie werden zu Same-Origin-{{HTTPMethod("POST")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("PATCH")}} und {{HTTPMethod("DELETE")}}-Anforderungen hinzugefügt).

Es gibt einige Ausnahmen zu den obigen Regeln; zum Beispiel, wenn eine Cross-Origin-{{HTTPMethod("GET")}}- oder {{HTTPMethod("HEAD")}}-Anforderung im [no-cors Mode](/de/docs/Web/API/Request/mode#value) durchgeführt wird, wird der `Origin`-Header nicht hinzugefügt.

Der `Origin`-Header-Wert kann in mehreren Fällen `null` sein, einschließlich (nicht erschöpfend):

- Ursprünge, deren [Schema](/de/docs/Web/URI/Reference/Schemes) nicht `http`, `https`, `ftp`, `ws`, `wss` oder `gopher` ist (einschließlich `blob`, `file` und `data`).
- Cross-Origin-Bilder und Mediendaten, einschließlich solcher in {{HTMLElement("img")}}, {{HTMLElement("video")}} und {{HTMLElement("audio")}}-Elementen.
- Dokumente, die programmgesteuert mit [`createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) erstellt wurden, aus einer `data:`-URL generiert wurden oder keinen Erstellungs-Browsing-Kontext haben.
- Weiterleitungen über Ursprünge hinweg.
- Dokumente, die mit der {{HTTPHeader("Content-Security-Policy")}} `sandbox`-Direktive ausgeliefert werden, deren Wert nicht `allow-same-origin` enthält.
- {{HTMLElement("iframe", "iframes")}} mit einem Sandbox-Attribut, dessen Wert nicht `allow-same-origin` enthält.
- Antworten, die Netzfehler sind.
- {{HTTPHeader("Referrer-Policy")}} auf `no-referrer` gesetzt für nicht `cors`-Anforderungsmodi (z. B. grundlegende Formularübertragungen).

> [!NOTE]
> Es gibt eine detailliertere Auflistung von Fällen, die `null` zurückgeben können, auf Stack Overflow: [Wann senden Browser den Origin-Header? Wann setzen Browser den Ursprung auf null?](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802)

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
