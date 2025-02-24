---
title: Origin
slug: Web/HTTP/Headers/Origin
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Origin`** {{Glossary("request_header", "Anforderungsheader")}} gibt den {{Glossary("origin", "Ursprung")}} ([Schema](/de/docs/Web/URI/Reference/Schemes), Hostname und Port) an, der die Anfrage _verursacht_ hat.
Zum Beispiel, wenn ein Benutzeragent Ressourcen anfordern muss, die in einer Seite enthalten sind oder durch Skripte, die er ausführt, abgerufen werden, kann der Ursprung der Seite in die Anfrage aufgenommen werden.

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
  - : Der Ursprung ist "datenschutzsensibel" oder ein _opaquer Ursprung_ entsprechend der HTML-Spezifikation (spezifische Fälle sind im Abschnitt [Beschreibung](#beschreibung) aufgeführt).
- `<scheme>`
  - : Das verwendete Protokoll.
    In der Regel handelt es sich um das HTTP-Protokoll oder seine gesicherte Version HTTPS.
- `<hostname>`
  - : Der Domainname oder die IP-Adresse des Ursprungsservers.
- `<port>` {{optional_inline}}
  - : Portnummer, auf der der Server lauscht.
    Wenn kein Port angegeben ist, wird der Standardport für den angeforderten Dienst aus dem Schema abgeleitet (z. B. `80` für eine HTTP-URL).

## Beschreibung

Der `Origin`-Header ist dem {{HTTPHeader("Referer")}}-Header ähnlich, offenbart aber nicht den Pfad und kann `null` sein.
Er wird verwendet, um den Sicherheitskontext für die Ursprungsanforderung bereitzustellen, außer in Fällen, in denen die Ursprung-Informationen sensibel oder unnötig wären.

Im Allgemeinen fügen Benutzeragenten den `Origin`-Anforderungsheader hinzu für:

- {{Glossary("CORS", "Cross-Origin")}}-Anfragen.
- [Same-Origin](/de/docs/Web/Security/Same-origin_policy)-Anfragen, außer für {{HTTPMethod("GET")}}- oder {{HTTPMethod("HEAD")}}-Anfragen (d. h., sie werden zu Same-Origin-{{HTTPMethod("POST")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("PATCH")}} und {{HTTPMethod("DELETE")}}-Anfragen hinzugefügt).

Es gibt einige Ausnahmen von den obigen Regeln; beispielsweise wird der `Origin`-Header nicht hinzugefügt, wenn eine Cross-Origin-{{HTTPMethod("GET")}}- oder {{HTTPMethod("HEAD")}}-Anfrage im [No-CORS-Modus](/de/docs/Web/API/Request/mode#value) erfolgt.

Der `Origin`-Header-Wert kann `null` in mehreren Fällen sein, darunter (nicht erschöpfend):

- Ursprünge, deren [Schema](/de/docs/Web/URI/Reference/Schemes) nicht eines von `http`, `https`, `ftp`, `ws`, `wss` oder `gopher` ist (einschließlich `blob`, `file` und `data`).
- Cross-Origin-Bilder und Mediendaten, einschließlich in {{HTMLElement("img")}}, {{HTMLElement("video")}} und {{HTMLElement("audio")}}-Elementen.
- Dokumente, die programmatisch mit [`createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) erstellt, aus einer `data:`-URL generiert wurden oder die keinen erstellen Browsing-Kontext haben.
- Weiterleitungen über Ursprünge hinweg.
- {{HTMLElement("iframe", "iframes")}} mit einem Sandbox-Attribut, das nicht den Wert `allow-same-origin` enthält.
- Antworten, die Netzwerkfehler sind.
- {{HTTPHeader("Referrer-Policy")}} auf `no-referrer` gesetzt für Non-`cors`-Anfragemodi (z. B. einfache Formularübermittlungen).

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
