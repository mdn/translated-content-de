---
title: Origin
slug: Web/HTTP/Reference/Headers/Origin
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-**`Origin`**-{{Glossary("request_header", "Anforderungsheader")}} gibt den {{Glossary("origin", "Ursprung")}} ([Schema](/de/docs/Web/URI/Reference/Schemes), Hostname und Port) an, der die Anfrage _verursacht_ hat. Zum Beispiel, wenn ein User-Agent Ressourcen anfordern muss, die in einer Seite enthalten sind oder von Skripten abgerufen werden, die er ausführt, kann der Ursprung der Seite in die Anfrage aufgenommen werden.

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
  - : Der Ursprung ist "datenschutzempfindlich" oder ein _opaquer Ursprung_, wie in der HTML-Spezifikation definiert (spezifische Fälle sind im Abschnitt [Beschreibung](#beschreibung) aufgeführt).
- `<scheme>`
  - : Das verwendete Protokoll.
    In der Regel ist es das HTTP-Protokoll oder dessen sichere Version, HTTPS.
- `<hostname>`
  - : Der Domainname oder die IP-Adresse des Ursprungsservers.
- `<port>` {{optional_inline}}
  - : Die Portnummer, auf der der Server lauscht.
    Wenn kein Port angegeben ist, wird der Standardport für den angeforderten Dienst aus dem Schema impliziert (z. B. `80` für eine HTTP-URL).

## Beschreibung

Der `Origin`-Header ähnelt dem {{HTTPHeader("Referer")}}-Header, gibt jedoch nicht den Pfad an und kann `null` sein. Er wird verwendet, um den Sicherheitskontext für die Ursprungsanforderung bereitzustellen, außer in Fällen, in denen die Ursprungsinformationen sensibel oder unnötig wären.

Im Allgemeinen fügen User-Agents den `Origin`-Anforderungsheader hinzu zu:

- {{Glossary("CORS", "cross-origin")}}-Anfragen.
- [same-origin](/de/docs/Web/Security/Same-origin_policy)-Anfragen, außer für {{HTTPMethod("GET")}}- oder {{HTTPMethod("HEAD")}}-Anfragen (d. h., sie werden zu same-origin {{HTTPMethod("POST")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("PATCH")}} und {{HTTPMethod("DELETE")}}-Anfragen hinzugefügt).

Es gibt einige Ausnahmen von den oben genannten Regeln; zum Beispiel, wenn eine cross-origin {{HTTPMethod("GET")}}- oder {{HTTPMethod("HEAD")}}-Anfrage im [no-cors modus](/de/docs/Web/API/Request/mode#value) gestellt wird, wird der `Origin`-Header nicht hinzugefügt.

Der Wert des `Origin`-Headers kann in mehreren Fällen `null` sein, einschließlich (nicht abschließend):

- Ursprünge, deren [Schema](/de/docs/Web/URI/Reference/Schemes) nicht `http`, `https`, `ftp`, `ws`, `wss` oder `gopher` ist (einschließlich `blob`, `file` und `data`).
- Cross-origin Bilder und Mediendaten, einschließlich der in {{HTMLElement("img")}}, {{HTMLElement("video")}} und {{HTMLElement("audio")}}-Elementen.
- Dokumente, die programmatisch mithilfe von [`createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument) erstellt, aus einer `data:`-URL generiert oder die keinen Ersteller-Browsing-Kontext haben.
- Umleitungen über Ursprünge hinweg.
- {{HTMLElement("iframe", "iframes")}} mit einem Sandbox-Attribut, das den Wert `allow-same-origin` nicht enthält.
- Antworten, die Netzwerksfehler sind.
- {{HTTPHeader("Referrer-Policy")}} auf `no-referrer` gesetzt für nicht-`cors`-Anfrage-Modi (z. B. einfache Formularübertragungen).

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
- [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)
- [When do browsers send the Origin header? When do browsers set the origin to null?](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802) (Stack Overflow)
