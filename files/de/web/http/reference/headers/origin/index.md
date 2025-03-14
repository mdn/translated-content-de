---
title: Origin
slug: Web/HTTP/Reference/Headers/Origin
l10n:
  sourceCommit: cb8143261f5cd54788285574ab0c427ba3f01a04
---

{{HTTPSidebar}}

Der HTTP **`Origin`** {{Glossary("request_header", "Anforderungsheader")}} gibt den {{Glossary("origin", "Ursprung")}} ([Schema](/de/docs/Web/URI/Reference/Schemes), Hostname und Port) an, der die Anforderung _verursacht_ hat.
Wenn ein Benutzer-Agent beispielsweise Ressourcen anfordern muss, die in eine Seite eingebunden sind oder von Skripten, die er ausführt, abgerufen werden, kann der Ursprung der Seite in der Anforderung enthalten sein.

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
  - : Der Ursprung ist "datenschutzsensitiv" oder ein _intransparenter Ursprung_ wie in der HTML-Spezifikation definiert (spezifische Fälle sind im Abschnitt [Beschreibung](#beschreibung) aufgeführt).
- `<scheme>`
  - : Das verwendete Protokoll.
    Üblicherweise ist es das HTTP-Protokoll oder seine sichere Version, HTTPS.
- `<hostname>`
  - : Der Domainname oder die IP-Adresse des Ursprungsservers.
- `<port>` {{optional_inline}}
  - : Die Portnummer, auf der der Server lauscht.
    Wenn kein Port angegeben ist, wird der Standardport für den angeforderten Dienst aus dem Schema abgeleitet (z.B. `80` für eine HTTP-URL).

## Beschreibung

Der `Origin`-Header ähnelt dem {{HTTPHeader("Referer")}}-Header, gibt jedoch nicht den Pfad an und kann `null` sein.
Er wird verwendet, um den Sicherheitskontext für die Ursprungsanforderung bereitzustellen, außer in Fällen, in denen die Ursprungsinformationen sensibel oder unnötig wären.

Im Allgemeinen fügen Benutzer-Agenten den `Origin`-Anforderungsheader hinzu zu:

- {{Glossary("CORS", "Cross-Origin")}}-Anforderungen.
- [Same-Origin](/de/docs/Web/Security/Same-origin_policy)-Anforderungen, außer für {{HTTPMethod("GET")}}- oder {{HTTPMethod("HEAD")}}-Anforderungen (d.h., sie werden zu Same-Origin {{HTTPMethod("POST")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("PATCH")}} und {{HTTPMethod("DELETE")}}-Anforderungen hinzugefügt).

Es gibt einige Ausnahmen zu den oben genannten Regeln; zum Beispiel, wenn eine Cross-Origin {{HTTPMethod("GET")}}- oder {{HTTPMethod("HEAD")}}-Anforderung im [keine-cors-Modus](/de/docs/Web/API/Request/mode#value) durchgeführt wird, wird der `Origin`-Header nicht hinzugefügt.

Der Wert des `Origin`-Headers kann in mehreren Fällen `null` sein, einschließlich (nicht vollständig):

- Ursprünge, deren [Schema](/de/docs/Web/URI/Reference/Schemes) nicht `http`, `https`, `ftp`, `ws`, `wss` oder `gopher` ist (einschließlich `blob`, `file` und `data`).
- Cross-Origin-Bilder und Mediendaten, einschließlich der in {{HTMLElement("img")}}, {{HTMLElement("video")}} und {{HTMLElement("audio")}}-Elementen.
- Dokumente, die programmgesteuert mithilfe von [`createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) erstellt wurden, aus einer `data:`-URL generiert wurden oder keinen Ersteller-Browsing-Kontext haben.
- Umleitungen über Ursprünge hinweg.
- {{HTMLElement("iframe", "iframes")}} mit einem Sandbox-Attribut, das den Wert `allow-same-origin` nicht enthält.
- Antworten, die Netzwerkfehler sind.
- {{HTTPHeader("Referrer-Policy")}} auf `no-referrer` für nicht-`cors`-Anforderungsmodi eingestellt (z.B. grundlegende Formularübertragungen).

> [!NOTE]
> Eine detailliertere Auflistung von Fällen, die `null` zurückgeben können, finden Sie auf Stack Overflow: [When do browsers send the Origin header? When do browsers set the origin to null?](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802)

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
- [Same-origin policy](/de/docs/Web/Security/Same-origin_policy)
- [When do browsers send the Origin header? When do browsers set the origin to null?](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802) (Stack Overflow)
