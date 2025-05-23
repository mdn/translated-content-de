---
title: Origin header
short-title: Origin
slug: Web/HTTP/Reference/Headers/Origin
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-**`Origin`**-{{Glossary("request_header", "Request-Header")}} gibt den {{Glossary("origin", "Ursprung")}} ([Scheme](/de/docs/Web/URI/Reference/Schemes), Hostname und Port) an, der die Anfrage _verursacht_ hat.
Zum Beispiel, wenn ein User-Agent Ressourcen anfordern muss, die in einer Seite enthalten sind oder durch Skripte abgerufen werden, die er ausführt, kann der Ursprung der Seite in die Anfrage aufgenommen werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
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
  - : Der Ursprung ist "datenschutzsensibel" oder ein _undurchsichtiger Ursprung_ gemäß der HTML-Spezifikation (spezifische Fälle sind im [Beschreibung](#beschreibung)-Abschnitt aufgeführt).
- `<scheme>`
  - : Das verwendete Protokoll.
    Üblicherweise ist es das HTTP-Protokoll oder seine gesicherte Version, HTTPS.
- `<hostname>`
  - : Der Domain-Name oder die IP-Adresse des Ursprungsservers.
- `<port>` {{optional_inline}}
  - : Portnummer, an der der Server lauscht.
    Wird kein Port angegeben, wird der Standardport für den angeforderten Dienst aus dem Scheme abgeleitet (z.B. `80` für eine HTTP-URL).

## Beschreibung

Der `Origin`-Header ähnelt dem {{HTTPHeader("Referer")}}-Header, gibt jedoch nicht den Pfad preis und kann `null` sein.
Er wird verwendet, um den Sicherheitskontext für die Ursprungsanfrage bereitzustellen, außer in Fällen, in denen die Ursprung-Informationen sensibel oder unnötig wären.

Im Allgemeinen fügen Benutzeragenten den `Origin`-Request-Header hinzu zu:

- {{Glossary("CORS", "Cross-Origin")}}-Anfragen.
- [Same-Origin](/de/docs/Web/Security/Same-origin_policy)-Anfragen außer für {{HTTPMethod("GET")}}- oder {{HTTPMethod("HEAD")}}-Anfragen (d.h. sie werden bei Same-Origin {{HTTPMethod("POST")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("PATCH")}} und {{HTTPMethod("DELETE")}}-Anfragen hinzugefügt).

Es gibt einige Ausnahmen von diesen Regeln; zum Beispiel, wenn eine Cross-Origin-{{HTTPMethod("GET")}}- oder {{HTTPMethod("HEAD")}}-Anfrage im [no-cors mode](/de/docs/Web/API/Request/mode#value) erstellt wird, wird der `Origin`-Header nicht hinzugefügt.

Der `Origin`-Header-Wert kann in mehreren Fällen `null` sein, einschließlich (nicht abschließend):

- Ursprungskombinationen, deren [Scheme](/de/docs/Web/URI/Reference/Schemes) nicht `http`, `https`, `ftp`, `ws`, `wss` oder `gopher` ist (einschließlich `blob`, `file` und `data`).
- Cross-Origin-Bilder und Mediendaten, einschließlich derer in {{HTMLElement("img")}}, {{HTMLElement("video")}} und {{HTMLElement("audio")}}-Elementen.
- Dokumente, die programmgesteuert mit [`createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) erstellt wurden, aus einer `data:`-URL generiert wurden oder die keinen Ersteller-Browserkontext haben.
- Weiterleitungen über Ursprünge hinweg.
- {{HTMLElement("iframe", "iframes")}} mit einem Sandbox-Attribut, das nicht den Wert `allow-same-origin` enthält.
- Antworten, die Netzwerkfehler sind.
- {{HTTPHeader("Referrer-Policy")}} eingestellt auf `no-referrer` für nicht `cors`-Request-Modi (z.B. grundlegende Formularübermittlungen).

> [!NOTE]
> Es gibt eine detailliertere Auflistung von Fällen, die `null` zurückgeben können, auf Stack Overflow: [When do browsers send the Origin header? When do browsers set the origin to null?](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802)

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
- [When do browsers send the Origin header? When do browsers set the origin to null?](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802) (Stack Overflow)
